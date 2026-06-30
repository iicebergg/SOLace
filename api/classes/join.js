import { z }          from 'zod';
import { neon }       from '@neondatabase/serverless';
import { handleCors } from '../_middleware.js';

const sql = neon(process.env.DATABASE_URL);

// Simple in-process rate limiter for the public join endpoint.
// Best-effort on a single Lambda instance; the DB-backed rate_limit table
// in Better Auth is the authoritative limiter. Both run in parallel.
const joinRateMap = new Map();

function joinRateCheck(ip) {
  const now   = Date.now();
  const entry = joinRateMap.get(ip) || { count: 0, reset: now + 60_000 };
  if (now > entry.reset) { entry.count = 0; entry.reset = now + 60_000; }
  entry.count++;
  joinRateMap.set(ip, entry);
  return entry.count <= 5;
}

const joinSchema = z.object({
  code: z.string().min(1).max(20),
}).strict();

export default async function handler(req, res) {
  if (handleCors(req, res)) return;

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  const ip = req.headers['x-real-ip']
    || (req.headers['x-forwarded-for'] || '').split(',')[0].trim()
    || 'unknown';

  if (!joinRateCheck(ip)) {
    return res.status(429).json({ error: 'too_many_requests' });
  }

  const parsed = joinSchema.safeParse(req.body || {});
  if (!parsed.success) {
    return res.status(400).json({ error: 'invalid_or_expired_code' });
  }

  const { code } = parsed.data;

  try {
    const classes = await sql`
      SELECT id, name
      FROM classes
      WHERE lower(join_code) = lower(${code})
        AND active = true
        AND (code_expires_at IS NULL OR code_expires_at > NOW())
      LIMIT 1
    `;

    if (!classes.length) {
      return res.status(400).json({ error: 'invalid_or_expired_code' });
    }

    const cls   = classes[0];
    const seats = await sql`
      SELECT id, seat_label
      FROM seat_tokens
      WHERE class_id = ${cls.id}
      ORDER BY seat_label
    `;

    return res.status(200).json({
      class_id:   cls.id,
      class_name: cls.name,
      seats,
    });
  } catch (err) {
    console.error('join error:', err.message);
    return res.status(500).json({ error: 'internal_error' });
  }
}
