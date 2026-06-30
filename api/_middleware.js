'use strict';

const { auth }  = require('./_auth');
const { neon }  = require('@neondatabase/serverless');

const sql = neon(process.env.DATABASE_URL);

// Alphabet for join codes — excludes visually ambiguous characters (0/O, 1/I/L).
const CODE_ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';

// Regex matching any key name that could hold a student name.
// Used to hard-reject name fields on API payloads.
const NAME_KEY_PATTERN = /^(first_?name|last_?name|student_?name|display_?name|full_?name)$/i;

// ─── Auth guard ─────────────────────────────────────────────

// Returns the authenticated teacher's user ID.
// Throws { status: 401, error: 'unauthorized' } if not authenticated.
async function requireTeacher(req) {
  const session = await auth.api.getSession({ headers: req.headers });
  if (!session?.user) throw { status: 401, error: 'unauthorized' };
  return session.user.id;
}

// ─── Ownership check (application layer, on top of RLS) ─────

// Throws { status: 403, error: 'forbidden' } if classId does not belong to teacherId.
async function requireClassOwner(classId, teacherId) {
  const rows = await sql`
    SELECT id FROM classes
    WHERE id = ${classId} AND teacher_id = ${teacherId}
    LIMIT 1
  `;
  if (!rows.length) throw { status: 403, error: 'forbidden' };
}

// ─── RLS transaction wrapper ─────────────────────────────────

// Runs fn(tx) inside a Neon transaction with app.current_teacher_id set.
// The session variable is transaction-local (third arg = true), so it never
// leaks to a pooled connection after the transaction ends.
async function withTeacherCtx(teacherId, fn) {
  return sql.transaction(async (tx) => {
    await tx`SELECT set_config('app.current_teacher_id', ${teacherId}, true)`;
    return fn(tx);
  });
}

// ─── Join code generation ────────────────────────────────────

function generateCode() {
  const bytes = require('crypto').randomBytes(6);
  return Array.from(bytes, b => CODE_ALPHABET[b % CODE_ALPHABET.length]).join('');
}

// Tries up to 5 times to find a unique code (collision probability is negligible
// but we guard against it anyway).
async function uniqueCode() {
  for (let i = 0; i < 5; i++) {
    const code = generateCode();
    const rows = await sql`SELECT 1 FROM classes WHERE lower(join_code) = lower(${code}) LIMIT 1`;
    if (!rows.length) return code;
  }
  throw new Error('join_code_collision');
}

// ─── Name-field guard ────────────────────────────────────────

// Throws { status: 400, error: 'name_field_not_allowed' } if the payload
// contains any key that looks like a student name field.
// Applies to all endpoints — names must never reach the server.
function rejectNameFields(obj) {
  for (const key of Object.keys(obj || {})) {
    if (NAME_KEY_PATTERN.test(key)) {
      throw { status: 400, error: 'name_field_not_allowed' };
    }
  }
}

// ─── CORS ────────────────────────────────────────────────────

// Sets CORS headers and handles OPTIONS preflight.
// Returns true if the response was handled (OPTIONS); caller should return early.
function handleCors(req, res) {
  const origin = process.env.ALLOWED_ORIGIN || '';
  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Cookie');
  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return true;
  }
  return false;
}

// ─── Error responder ─────────────────────────────────────────

function sendError(res, err) {
  if (err && typeof err === 'object' && err.status) {
    return res.status(err.status).json({ error: err.error });
  }
  console.error('Unexpected error:', err);
  return res.status(500).json({ error: 'internal_error' });
}

module.exports = {
  requireTeacher,
  requireClassOwner,
  withTeacherCtx,
  uniqueCode,
  rejectNameFields,
  handleCors,
  sendError,
  sql,
};
