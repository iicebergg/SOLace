/**
 * Join flow tests.
 *
 * Covers valid/bad/expired codes, attempt linking, and anonymous path.
 *
 * Run: node --test tests/join-flow.test.js
 * Requires DATABASE_URL and TEST_BASE_URL.
 */

import { test, before, after } from 'node:test';
import assert  from 'node:assert/strict';
import { neon } from '@neondatabase/serverless';

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL not set — skipping join flow tests');
  process.exit(0);
}

const BASE_URL = process.env.TEST_BASE_URL || 'http://localhost:3000';
const sql      = neon(process.env.DATABASE_URL);

const TEST_TEACHER_ID = 'flow-test-teacher-' + Date.now();
let testClassId, testSeatId;

before(async () => {
  await sql`
    INSERT INTO "user" (id, email, "emailVerified", "createdAt", "updatedAt", name)
    VALUES (${TEST_TEACHER_ID}, ${TEST_TEACHER_ID + '@test.invalid'}, false, NOW(), NOW(), 'Flow Tester')
  `;
  const [cls] = await sql`
    INSERT INTO classes (teacher_id, name, join_code, active)
    VALUES (${TEST_TEACHER_ID}, 'Flow Test Class', 'ABCDE2', true)
    RETURNING id
  `;
  testClassId = cls.id;
  const [seat] = await sql`
    INSERT INTO seat_tokens (class_id, seat_label)
    VALUES (${testClassId}, 'Seat 1')
    RETURNING id
  `;
  testSeatId = seat.id;
});

after(async () => {
  await sql`DELETE FROM class_attempt_links WHERE class_id = ${testClassId}`;
  await sql`DELETE FROM seat_tokens WHERE class_id = ${testClassId}`;
  await sql`DELETE FROM classes WHERE id = ${testClassId}`;
  await sql`DELETE FROM "user" WHERE id = ${TEST_TEACHER_ID}`;
});

test('valid join code returns class_id and seats', async () => {
  const res  = await fetch(`${BASE_URL}/api/classes/join`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code: 'ABCDE2' }),
  });
  const data = await res.json();
  assert.equal(res.status, 200, `Expected 200, got ${res.status}`);
  assert.ok(data.class_id, 'Should return class_id');
  assert.ok(Array.isArray(data.seats), 'Should return seats array');
  assert.ok(!('teacher_id' in data), 'Must NOT expose teacher_id');
  assert.ok(!('join_code' in data), 'Must NOT expose join_code');
  assert.equal(data.seats[0].seat_label, 'Seat 1');
});

test('bad join code returns generic error', async () => {
  const res  = await fetch(`${BASE_URL}/api/classes/join`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code: 'XXXXXX' }),
  });
  const data = await res.json();
  assert.equal(res.status, 400);
  assert.equal(data.error, 'invalid_or_expired_code');
});

test('expired code returns generic error', async () => {
  await sql`
    INSERT INTO classes (teacher_id, name, join_code, active, code_expires_at)
    VALUES (${TEST_TEACHER_ID}, 'Expired', 'EXPIR1', true, NOW() - INTERVAL '1 hour')
  `;
  const res = await fetch(`${BASE_URL}/api/classes/join`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code: 'EXPIR1' }),
  });
  assert.equal(res.status, 400);
  const data = await res.json();
  assert.equal(data.error, 'invalid_or_expired_code');
  await sql`DELETE FROM classes WHERE join_code = 'EXPIR1'`;
});

test('attempt with valid class_id + seat_token_id creates class_attempt_links row', async () => {
  const attemptId = 'flow-test-' + Date.now();
  const res = await fetch(`${BASE_URL}/api/submit-attempt`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      attempt_id:         attemptId,
      subject:            'Test Subject',
      test_id:            'test_001',
      grade_band:         '3-5',
      started_at:         new Date().toISOString(),
      completed_at:       new Date().toISOString(),
      total_time_seconds: 60,
      score_correct:      3,
      score_total:        5,
      responses:          [],
      class_id:           testClassId,
      seat_token_id:      testSeatId,
    }),
  });
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.equal(data.ok, true);

  const links = await sql`SELECT attempt_id FROM class_attempt_links WHERE attempt_id = ${attemptId}`;
  assert.equal(links.length, 1, 'class_attempt_links row must exist');

  await sql`DELETE FROM class_attempt_links WHERE attempt_id = ${attemptId}`;
  await sql`DELETE FROM test_attempts WHERE attempt_id = ${attemptId}`;
});

test('anonymous attempt (no class_id) does not create class_attempt_links row', async () => {
  const attemptId = 'anon-test-' + Date.now();
  const res = await fetch(`${BASE_URL}/api/submit-attempt`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      attempt_id:         attemptId,
      subject:            'Grade 5 Reading',
      test_id:            'reading_grade5_anon',
      grade_band:         '3-5',
      started_at:         new Date().toISOString(),
      completed_at:       new Date().toISOString(),
      total_time_seconds: 90,
      score_correct:      4,
      score_total:        5,
      responses:          [],
    }),
  });
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.equal(data.ok, true);

  const links = await sql`SELECT attempt_id FROM class_attempt_links WHERE attempt_id = ${attemptId}`;
  assert.equal(links.length, 0, 'No class_attempt_links row for anonymous attempt');

  await sql`DELETE FROM test_attempts WHERE attempt_id = ${attemptId}`;
});
