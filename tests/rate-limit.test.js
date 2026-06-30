/**
 * Rate limiting tests.
 *
 * Verifies that the database-backed rate limiter correctly throttles
 * sign-in attempts and returns 429 after exceeding the threshold.
 *
 * Run: node --test tests/rate-limit.test.js
 * Requires TEST_BASE_URL pointing at a running preview server.
 */

import { test } from 'node:test';
import assert   from 'node:assert/strict';

const BASE_URL = process.env.TEST_BASE_URL || 'http://localhost:3000';

async function attemptSignIn(email, password) {
  const res = await fetch(`${BASE_URL}/api/auth/sign-in/email`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return res.status;
}

test('sign-in rate limit: 429 after exceeding threshold (3 in 10s)', async () => {
  const email = `ratelimit-test-${Date.now()}@test.invalid`;
  let status;
  let hit429 = false;

  for (let i = 0; i < 10; i++) {
    status = await attemptSignIn(email, 'wrong-password-test');
    if (status === 429) { hit429 = true; break; }
  }

  assert.ok(hit429, `Expected 429 after multiple failed sign-ins, last status was ${status}`);
});

test('join endpoint rate limit: 429 after exceeding threshold (5 in 60s)', async () => {
  let hit429 = false;
  for (let i = 0; i < 10; i++) {
    const res = await fetch(`${BASE_URL}/api/classes/join`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: 'RATELMT' }),
    });
    if (res.status === 429) { hit429 = true; break; }
  }
  assert.ok(hit429, 'Join endpoint should rate-limit after 5 rapid requests');
});
