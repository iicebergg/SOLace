const { neon } = require('@neondatabase/serverless');

const sql = neon(process.env.DATABASE_URL);

module.exports = async function handler(req, res) {
  // Only POST is accepted. Hitting the URL in a browser (GET) returns 405,
  // which is a useful quick test that the function is deployed and reachable.
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'method_not_allowed' });
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
    responses
  } = req.body || {};

  // Minimal input validation. Reject payloads missing required fields.
  if (!attempt_id || !subject || !test_id || !grade_band || !started_at) {
    return res.status(400).json({ error: 'missing_required_fields' });
  }
  if (!Array.isArray(responses)) {
    return res.status(400).json({ error: 'responses_must_be_array' });
  }

  try {
    // Insert the attempt row first.
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

    return res.status(200).json({ ok: true, responses_written: responses.length });
  } catch (e) {
    // Log the full error server-side for Vercel function logs.
    // Return a generic error to the client to avoid leaking schema details.
    console.error('Database write failed:', e.message, e.stack);
    return res.status(500).json({ error: 'write_failed' });
  }
};