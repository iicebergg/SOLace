import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

// Keys that must never appear in a submission payload.
// A student device must never send a name to the server.
const FORBIDDEN_KEYS = new Set([
  'first_name', 'firstname', 'last_name', 'lastname',
  'student_name', 'display_name', 'full_name',
]);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  const body = req.body || {};

  for (const key of Object.keys(body)) {
    if (FORBIDDEN_KEYS.has(key.toLowerCase())) {
      return res.status(400).json({ error: 'name_field_not_allowed' });
    }
  }

  const {
    attempt_id,
    subject,
    test_id,
    grade_band,
    started_at,
    completed_at,
    total_time_seconds,
    score_correct,
    score_total,
    responses,
    class_id,
    seat_token_id,
  } = body;

  if (!attempt_id || !subject || !test_id || !grade_band || !started_at) {
    return res.status(400).json({ error: 'missing_required_fields' });
  }
  if (!Array.isArray(responses)) {
    return res.status(400).json({ error: 'responses_must_be_array' });
  }

  try {
    await sql`
      INSERT INTO test_attempts (
        attempt_id, subject, test_id, grade_band,
        started_at, completed_at, total_time_seconds,
        score_correct, score_total, completed
      ) VALUES (
        ${attempt_id}, ${subject}, ${test_id}, ${grade_band},
        ${started_at}, ${completed_at}, ${total_time_seconds},
        ${score_correct}, ${score_total}, true
      )
    `;

    for (const r of responses) {
      await sql`
        INSERT INTO question_responses (
          attempt_id, question_number, question_id,
          was_correct, time_seconds, answer_changes
        ) VALUES (
          ${attempt_id}, ${r.question_number}, ${r.question_id},
          ${r.was_correct}, ${r.time_seconds}, ${r.answer_changes}
        )
      `;
    }

    if (class_id && seat_token_id) {
      try {
        const valid = await sql`
          SELECT st.id
          FROM seat_tokens st
          JOIN classes c ON c.id = st.class_id
          WHERE st.id = ${seat_token_id}
            AND st.class_id = ${class_id}
            AND c.active = true
          LIMIT 1
        `;
        if (valid.length) {
          await sql`
            INSERT INTO class_attempt_links (attempt_id, class_id, seat_token_id)
            VALUES (${attempt_id}, ${class_id}, ${seat_token_id})
            ON CONFLICT (attempt_id) DO NOTHING
          `;
        }
      } catch (linkErr) {
        console.error('class linking failed (non-blocking):', linkErr.message);
      }
    }

    return res.status(200).json({ ok: true, responses_written: responses.length });
  } catch (e) {
    console.error('Database write failed:', e.message, e.stack);
    return res.status(500).json({ error: 'write_failed' });
  }
}
