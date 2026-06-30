import {
  requireTeacher, requireClassOwner, withTeacherCtx,
  handleCors, sendError,
} from '../../_middleware.js';

export default async function handler(req, res) {
  if (handleCors(req, res)) return;

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  const classId = req.query.id;

  try {
    const teacherId = await requireTeacher(req);
    await requireClassOwner(classId, teacherId);

    const [classInfo, seatProgress, classTotals] = await withTeacherCtx(teacherId, async (tx) => {
      const cls = await tx`
        SELECT id, name, grade, subject
        FROM classes
        WHERE id = ${classId} AND teacher_id = ${teacherId}
        LIMIT 1
      `;

      // Per-seat aggregates — seat tokens only, no names ever.
      // The teacher's browser joins against localStorage to render readable names.
      const seats = await tx`
        SELECT
          st.id           AS seat_token_id,
          st.seat_label,
          COUNT(DISTINCT cal.attempt_id)::int                         AS attempt_count,
          ROUND(
            AVG(ta.score_correct::numeric / NULLIF(ta.score_total, 0)), 4
          )                                                            AS avg_score_pct,
          json_agg(json_build_object(
            'test_id',   ta.test_id,
            'attempts',  ta_sub.attempt_count,
            'avg_score', ta_sub.avg_score
          ) ORDER BY ta.test_id)
          FILTER (WHERE ta.test_id IS NOT NULL)                       AS by_test
        FROM seat_tokens st
        LEFT JOIN class_attempt_links cal ON cal.seat_token_id = st.id
        LEFT JOIN test_attempts ta ON ta.attempt_id = cal.attempt_id
        LEFT JOIN LATERAL (
          SELECT
            COUNT(*)::int                                      AS attempt_count,
            ROUND(AVG(score_correct::numeric / NULLIF(score_total, 0)), 4) AS avg_score
          FROM test_attempts ta2
          JOIN class_attempt_links cal2 ON cal2.attempt_id = ta2.attempt_id
          WHERE cal2.seat_token_id = st.id AND ta2.test_id = ta.test_id
        ) ta_sub ON true
        WHERE st.class_id = ${classId}
        GROUP BY st.id, st.seat_label
        ORDER BY st.seat_label
      `;

      const totals = await tx`
        SELECT
          COUNT(DISTINCT cal.attempt_id)::int                         AS attempt_count,
          ROUND(
            AVG(ta.score_correct::numeric / NULLIF(ta.score_total, 0)), 4
          )                                                            AS avg_score_pct
        FROM class_attempt_links cal
        JOIN test_attempts ta ON ta.attempt_id = cal.attempt_id
        WHERE cal.class_id = ${classId}
      `;

      return [cls, seats, totals];
    });

    if (!classInfo.length) {
      return res.status(404).json({ error: 'not_found' });
    }

    return res.status(200).json({
      class:        classInfo[0],
      seats:        seatProgress,
      class_totals: classTotals[0] || { attempt_count: 0, avg_score_pct: null },
    });
  } catch (err) {
    return sendError(res, err);
  }
}
