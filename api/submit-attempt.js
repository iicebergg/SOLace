'use strict';

const { neon } = require('@neondatabase/serverless');

const sql = neon(process.env.DATABASE_URL);

// Keys that must never appear in a submission payload.
// A student device must never send a name to the server.
const FORBIDDEN_KEYS = new Set([
  'first_name', 'firstname', 'last_name', 'lastname',
  'student_name', 'display_name', 'full_name',
]);

module.exports = async function handler(req, res) {
  // Only POST is accepted. Hitting the URL in a browser (GET) returns 405,
  // which is a useful quick test that the function is deployed and reachable.
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  const body = req.body || {};

  // Hard-reject any payload that contains a name field.
  // Names must never transit SOLace servers.
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
    // Optional class tagging — both must be present to link the attempt.
    class_id,
    seat_token_id,
  } = body;

  // Minimal input validation. Reject payloads missing required fields.
  if (!attempt_id || !subject || !test_id || !grade_band || !started_at) {
    return res.status(400).json({ error: 'missing_required_fields' });
  }
  if (!Array.isArray(responses)) {
    return res.status(400).json({ error: 'responses_must_be_array' });
  }

  try {
    // Insert the attempt row first (unchanged from original).
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

    // Then insert each question response linked to the attempt.
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

    // Optionally link this attempt to a class and seat.
    // Both class_id and seat_token_id must be present to link.
    // If the token is invalid or the class is inactive, we skip linking silently —
    // a bad token must never block a student's test submission.
    if (class_id && seat_token_id) {
      try {
        // Verify the seat belongs to the class and the class is active.
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
        // Linking failure never affects the student's result.
        console.error('class linking failed (non-blocking):', linkErr.message);
      }
    }

    return res.status(200).json({ ok: true, responses_written: responses.length });
  } catch (e) {
    // Log the full error server-side for Vercel function logs.
    // Return a generic error to the client to avoid leaking schema details.
    console.error('Database write failed:', e.message, e.stack);
    return res.status(500).json({ error: 'write_failed' });
  }
};
