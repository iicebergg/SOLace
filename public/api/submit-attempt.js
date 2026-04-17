import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { attempt_id, subject, test_id, grade_band,
          started_at, completed_at, total_time_seconds,
          score_correct, score_total, responses } = req.body;

  try {
    await sql`INSERT INTO test_attempts (attempt_id, subject, test_id,
              grade_band, started_at, completed_at, total_time_seconds,
              score_correct, score_total, completed)
              VALUES (${attempt_id}, ${subject}, ${test_id}, ${grade_band},
              ${started_at}, ${completed_at}, ${total_time_seconds},
              ${score_correct}, ${score_total}, true)`;

    for (const r of responses) {
      await sql`INSERT INTO question_responses (attempt_id, question_number,
                question_id, was_correct, time_seconds, answer_changes)
                VALUES (${attempt_id}, ${r.question_number}, ${r.question_id},
                ${r.was_correct}, ${r.time_seconds}, ${r.answer_changes})`;
    }
    res.status(200).json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: 'write_failed' });
  }
}