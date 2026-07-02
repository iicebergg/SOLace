/**
 * Name isolation tests.
 *
 * Verifies that:
 * 1. No name-like field is accepted by any API endpoint.
 * 2. The database schema contains no name column on student-related tables.
 * 3. The submit-attempt endpoint hard-rejects name fields.
 *
 * Run: node --test tests/name-isolation.test.js
 * Requires DATABASE_URL and a running server at TEST_BASE_URL.
 */

import { test } from 'node:test';
import assert   from 'node:assert/strict';
import { neon } from '@neondatabase/serverless';

const BASE_URL = process.env.TEST_BASE_URL || 'http://localhost:3000';

// ── Schema checks ─────────────────────────────────────────────────────────────

if (process.env.DATABASE_URL) {
  const sql = neon(process.env.DATABASE_URL);

  const NAME_COLUMNS = ['first_name', 'last_name', 'student_name', 'display_name', 'full_name'];
  const CHECK_TABLES = ['classes', 'seat_tokens', 'class_attempt_links'];

  for (const table of CHECK_TABLES) {
    for (const col of NAME_COLUMNS) {
      test(`${table} has no column named ${col}`, async () => {
        const rows = await sql`
          SELECT column_name
          FROM information_schema.columns
          WHERE table_name = ${table} AND column_name = ${col}
        `;
        assert.equal(rows.length, 0,
          `PRIVACY VIOLATION: Column ${col} found in ${table}. Names must never be stored server-side.`);
      });
    }
  }
}

// ── API payload checks ────────────────────────────────────────────────────────

const NAME_PAYLOADS = [
  { first_name: 'Alice', last_name: 'Smith' },
  { student_name: 'Alice Smith' },
  { display_name: 'Alice' },
  { full_name: 'Alice Smith' },
];

for (const payload of NAME_PAYLOADS) {
  const fieldName = Object.keys(payload)[0];

  test(`POST /api/classes/join rejects payload with ${fieldName}`, async () => {
    const body = { code: 'AAAAAA', ...payload };
    const res  = await fetch(`${BASE_URL}/api/classes/join`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    assert.ok(
      res.status === 400 || res.status === 422,
      `Expected 400/422 when sending ${fieldName} to join endpoint, got ${res.status}`
    );
  });

  test(`POST /api/submit-attempt rejects payload with ${fieldName}`, async () => {
    const body = {
      attempt_id: 'test-' + Date.now(),
      subject: 'Test', test_id: 'test_001', grade_band: '3-5',
      started_at: new Date().toISOString(),
      responses: [],
      ...payload,
    };
    const res  = await fetch(`${BASE_URL}/api/submit-attempt`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    assert.equal(res.status, 400,
      `Expected 400 when sending ${fieldName} to submit-attempt, got ${res.status}`);
    assert.equal(data.error, 'name_field_not_allowed',
      `Expected name_field_not_allowed error, got ${data.error}`);
  });
}

test('submit-attempt without class fields still succeeds (backward compat)', async () => {
  const body = {
    attempt_id: 'backward-compat-' + Date.now(),
    subject: 'Grade 5 Math',
    test_id: 'math_grade5_test',
    grade_band: '3-5',
    started_at: new Date().toISOString(),
    completed_at: new Date().toISOString(),
    total_time_seconds: 120,
    score_correct: 3,
    score_total: 5,
    responses: [
      { question_number: 1, question_id: 'q1', was_correct: true, time_seconds: 30, answer_changes: 0 },
    ],
  };
  const res  = await fetch(`${BASE_URL}/api/submit-attempt`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  assert.equal(res.status, 200, `Expected 200 for anonymous attempt, got ${res.status}: ${JSON.stringify(data)}`);
  assert.equal(data.ok, true);
});
