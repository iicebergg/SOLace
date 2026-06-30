/**
 * Backward compatibility tests for the existing anonymous attempt pipeline.
 *
 * Verifies that:
 * - Anonymous attempts (no class_id) still write to test_attempts and question_responses
 * - No class_attempt_links row is created for anonymous attempts
 * - The response is still { ok: true, responses_written: N }
 * - All previously required fields still work
 *
 * Requires DATABASE_URL and TEST_BASE_URL.
 * Run: node --test tests/attempt-backward-compat.test.js
 */
'use strict';

const { test, after } = require('node:test');
const assert   = require('node:assert/strict');
const { neon } = require('@neondatabase/serverless');
const crypto   = require('crypto');

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL not set — skipping backward-compat tests');
  process.exit(0);
}

const BASE_URL = process.env.TEST_BASE_URL || 'http://localhost:3000';
const sql      = neon(process.env.DATABASE_URL);
const createdIds = [];

after(async () => {
  for (const id of createdIds) {
    await sql`DELETE FROM question_responses WHERE attempt_id = ${id}`.catch(() => {});
    await sql`DELETE FROM test_attempts WHERE attempt_id = ${id}`.catch(() => {});
  }
});

test('anonymous attempt without class fields succeeds and writes test_attempts', async () => {
  const attemptId = 'bc-' + crypto.randomUUID();
  createdIds.push(attemptId);

  const res = await fetch(`${BASE_URL}/api/submit-attempt`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      attempt_id:         attemptId,
      subject:            'Grade 5 Math',
      test_id:            'math_grade5_2023',
      grade_band:         '3-5',
      started_at:         new Date(Date.now() - 300_000).toISOString(),
      completed_at:       new Date().toISOString(),
      total_time_seconds: 300,
      score_correct:      8,
      score_total:        10,
      responses: [
        { question_number: 1, question_id: 'q1', was_correct: true,  time_seconds: 30, answer_changes: 0 },
        { question_number: 2, question_id: 'q2', was_correct: false, time_seconds: 45, answer_changes: 2 },
      ],
    }),
  });

  assert.equal(res.status, 200, 'Should return 200');
  const data = await res.json();
  assert.equal(data.ok, true);
  assert.equal(data.responses_written, 2);

  // Verify DB writes
  const attempts = await sql`SELECT attempt_id FROM test_attempts WHERE attempt_id = ${attemptId}`;
  assert.equal(attempts.length, 1, 'test_attempts row must exist');

  const responses = await sql`SELECT * FROM question_responses WHERE attempt_id = ${attemptId}`;
  assert.equal(responses.length, 2, 'question_responses rows must exist');

  const links = await sql`SELECT * FROM class_attempt_links WHERE attempt_id = ${attemptId}`;
  assert.equal(links.length, 0, 'No class_attempt_links row for anonymous attempt');
});

test('missing required fields returns 400 (existing behavior unchanged)', async () => {
  const res = await fetch(`${BASE_URL}/api/submit-attempt`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      subject: 'Grade 5 Math',
      // Missing attempt_id, test_id, grade_band, started_at
    }),
  });
  assert.equal(res.status, 400);
  const data = await res.json();
  assert.equal(data.error, 'missing_required_fields');
});

test('GET to submit-attempt returns 405 (existing behavior unchanged)', async () => {
  const res = await fetch(`${BASE_URL}/api/submit-attempt`);
  assert.equal(res.status, 405);
});
