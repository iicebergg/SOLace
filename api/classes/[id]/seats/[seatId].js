import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import {
  requireTeacher, requireClassOwner, withTeacherCtx,
  handleCors, sendError,
} from '../../../_middleware.js';

// Static manifest of question text/options/correct answers per test, built
// offline by `npm run build:test-content` (see scripts/build-test-content.mjs).
// Cross-referencing here lets insights show what a question actually asked
// without executing any of the (browser-only) test page scripts at request time.
const __dirname = dirname(fileURLToPath(import.meta.url));
const TEST_CONTENT = JSON.parse(
  readFileSync(join(__dirname, '../../../_data/test-content.json'), 'utf8')
);

// Per-seat detail: every attempt linked to this seat, each with its
// full per-question breakdown. Seat tokens and question numbers only —
// no student name is ever read from or returned by the server.
export default async function handler(req, res) {
  if (handleCors(req, res)) return;

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  const classId = req.query.id;
  const seatId  = req.query.seatId;

  try {
    const teacherId = await requireTeacher(req);
    await requireClassOwner(classId, teacherId);

    const [seatRows, attempts] = await withTeacherCtx(teacherId, (tx) => [
      tx`
        SELECT id, seat_label FROM seat_tokens
        WHERE id = ${seatId} AND class_id = ${classId}
        LIMIT 1
      `,
      tx`
        SELECT
          ta.attempt_id, ta.subject, ta.test_id, ta.grade_band,
          ta.started_at, ta.completed_at, ta.total_time_seconds,
          ta.score_correct, ta.score_total,
          COALESCE(
            json_agg(
              json_build_object(
                'question_number', qr.question_number,
                'question_id',     qr.question_id,
                'was_correct',      qr.was_correct,
                'time_seconds',     qr.time_seconds,
                'answer_changes',   qr.answer_changes
              ) ORDER BY qr.question_number
            ) FILTER (WHERE qr.question_number IS NOT NULL),
            '[]'
          ) AS responses
        FROM class_attempt_links cal
        JOIN test_attempts ta ON ta.attempt_id = cal.attempt_id
        LEFT JOIN question_responses qr ON qr.attempt_id = ta.attempt_id
        WHERE cal.seat_token_id = ${seatId} AND cal.class_id = ${classId}
        GROUP BY ta.attempt_id, ta.subject, ta.test_id, ta.grade_band,
                 ta.started_at, ta.completed_at, ta.total_time_seconds,
                 ta.score_correct, ta.score_total
        ORDER BY ta.started_at DESC
      `,
    ]);

    if (!seatRows.length) {
      return res.status(404).json({ error: 'not_found' });
    }

    const enriched = attempts.map((attempt) => {
      const testQuestions = TEST_CONTENT[attempt.test_id] || {};
      return {
        ...attempt,
        responses: attempt.responses.map((r) => ({
          ...r,
          question: testQuestions[String(r.question_id)] || null,
        })),
      };
    });

    return res.status(200).json({
      seat: seatRows[0],
      attempts: enriched,
    });
  } catch (err) {
    return sendError(res, err);
  }
}
