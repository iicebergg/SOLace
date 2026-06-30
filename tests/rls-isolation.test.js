/**
 * RLS isolation tests.
 *
 * These tests verify that Postgres row-level security prevents teacher A
 * from reading teacher B's classes, seat tokens, or attempt links —
 * even when bypassing the application layer and hitting the DB directly.
 *
 * Prerequisite: Run migrations 001 and 002 against your test database.
 * Set DATABASE_URL to point at the test/preview database.
 *
 * Run: node --test tests/rls-isolation.test.js
 */
'use strict';

const { test, before, after }  = require('node:test');
const assert = require('node:assert/strict');
const { neon } = require('@neondatabase/serverless');

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL not set — skipping RLS tests');
  process.exit(0);
}

const sql = neon(process.env.DATABASE_URL);

// We use two fake teacher IDs (these would normally be real Better Auth user IDs).
// In the test, we insert classes directly with these IDs and verify RLS blocks cross-reads.
const TEACHER_A = 'test-teacher-a-' + Date.now();
const TEACHER_B = 'test-teacher-b-' + Date.now();
let classA_id, classB_id, seatA_id;

before(async () => {
  // Insert fake user rows (Better Auth 'user' table must exist)
  await sql`
    INSERT INTO "user" (id, email, "emailVerified", "createdAt", "updatedAt", name)
    VALUES
      (${TEACHER_A}, ${TEACHER_A + '@test.invalid'}, false, NOW(), NOW(), 'Test Teacher A'),
      (${TEACHER_B}, ${TEACHER_B + '@test.invalid'}, false, NOW(), NOW(), 'Test Teacher B')
  `;
  // Create a class for teacher A
  const [rowA] = await sql`
    INSERT INTO classes (teacher_id, name, join_code)
    VALUES (${TEACHER_A}, 'Class A', 'TESTA1')
    RETURNING id
  `;
  classA_id = rowA.id;
  // Create a class for teacher B
  const [rowB] = await sql`
    INSERT INTO classes (teacher_id, name, join_code)
    VALUES (${TEACHER_B}, 'Class B', 'TESTB1')
    RETURNING id
  `;
  classB_id = rowB.id;
  // Create a seat in class A
  const [seatA] = await sql`
    INSERT INTO seat_tokens (class_id, seat_label)
    VALUES (${classA_id}, 'Seat 1')
    RETURNING id
  `;
  seatA_id = seatA.id;
  // Insert a link
  await sql`
    INSERT INTO class_attempt_links (attempt_id, class_id, seat_token_id)
    VALUES ('rls-test-attempt-a', ${classA_id}, ${seatA_id})
  `;
});

after(async () => {
  // Cleanup test data
  await sql`DELETE FROM class_attempt_links WHERE attempt_id = 'rls-test-attempt-a'`;
  await sql`DELETE FROM seat_tokens WHERE class_id IN (${classA_id}, ${classB_id})`;
  await sql`DELETE FROM classes WHERE id IN (${classA_id}, ${classB_id})`;
  await sql`DELETE FROM "user" WHERE id IN (${TEACHER_A}, ${TEACHER_B})`;
});

test('teacher A can read their own class with RLS context set', async () => {
  const rows = await sql.transaction(async (tx) => {
    await tx`SELECT set_config('app.current_teacher_id', ${TEACHER_A}, true)`;
    return tx`SELECT id FROM classes WHERE id = ${classA_id}`;
  });
  assert.equal(rows.length, 1, 'Teacher A should see their own class');
});

test('teacher B cannot read teacher A class with RLS context set to B', async () => {
  const rows = await sql.transaction(async (tx) => {
    await tx`SELECT set_config('app.current_teacher_id', ${TEACHER_B}, true)`;
    return tx`SELECT id FROM classes WHERE id = ${classA_id}`;
  });
  assert.equal(rows.length, 0, 'Teacher B must not see teacher A class');
});

test('teacher B cannot read teacher A seat tokens', async () => {
  const rows = await sql.transaction(async (tx) => {
    await tx`SELECT set_config('app.current_teacher_id', ${TEACHER_B}, true)`;
    return tx`SELECT id FROM seat_tokens WHERE class_id = ${classA_id}`;
  });
  assert.equal(rows.length, 0, 'Teacher B must not see teacher A seat tokens');
});

test('teacher B cannot read teacher A attempt links', async () => {
  const rows = await sql.transaction(async (tx) => {
    await tx`SELECT set_config('app.current_teacher_id', ${TEACHER_B}, true)`;
    return tx`SELECT attempt_id FROM class_attempt_links WHERE class_id = ${classA_id}`;
  });
  assert.equal(rows.length, 0, 'Teacher B must not see teacher A attempt links');
});

test('empty current_teacher_id returns no rows (RLS default-deny)', async () => {
  const rows = await sql.transaction(async (tx) => {
    await tx`SELECT set_config('app.current_teacher_id', '', true)`;
    return tx`SELECT id FROM classes`;
  });
  assert.equal(rows.length, 0, 'No teacher context must return zero rows');
});
