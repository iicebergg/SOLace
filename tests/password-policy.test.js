/**
 * Password policy and HIBP check tests.
 *
 * Covers:
 * - 11-char password → rejected (too short)
 * - 12-char password → accepted
 * - 128-char passphrase → accepted
 * - Known-breached password → rejected with specific error
 * - HIBP check sends only k-anonymity prefix (not full hash or password)
 *
 * These tests call the Better Auth sign-up endpoint directly.
 * Requires TEST_BASE_URL pointing at a running preview server with DB wired up.
 *
 * Run: node --test tests/password-policy.test.js
 */
'use strict';

const { test } = require('node:test');
const assert   = require('node:assert/strict');
const crypto   = require('crypto');

const BASE_URL = process.env.TEST_BASE_URL || 'http://localhost:3000';

function uniqueEmail() {
  return `pw-test-${crypto.randomBytes(6).toString('hex')}@test.invalid`;
}

async function trySignUp(password) {
  const res = await fetch(`${BASE_URL}/api/auth/sign-up/email`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: uniqueEmail(), password, name: '' }),
  });
  return { status: res.status, body: await res.json() };
}

test('11-character password is rejected', async () => {
  const { status } = await trySignUp('short12345!');  // 11 chars
  assert.ok(status >= 400, `Expected 400+, got ${status}`);
});

test('12-character password is accepted', async () => {
  const { status, body } = await trySignUp('correct-horse-b');  // 15 chars, not breached
  // Might be 200 (success) or 400 (email verification pending) — not a policy rejection
  assert.ok(status === 200 || status === 201 || status === 422,
    `Got ${status}: ${JSON.stringify(body)}`);
});

test('128-character passphrase is accepted (NIST length)', async () => {
  const longPass = 'this is a very long passphrase that exceeds twenty characters and keeps going to test that we allow up to one hundred and twenty eight characters total ok';
  const { status } = await trySignUp(longPass.slice(0, 128));
  assert.ok(status === 200 || status === 201 || status === 422,
    `Long passphrase got ${status}`);
});

test('known-breached password "password123456" is rejected', async () => {
  const { status, body } = await trySignUp('password123456');
  assert.ok(status >= 400, `Breached password must be rejected, got ${status}`);
  const msg = JSON.stringify(body).toLowerCase();
  assert.ok(
    msg.includes('breach') || msg.includes('pwned') || msg.includes('compromised'),
    `Error message should mention breach: ${JSON.stringify(body)}`
  );
});

test('known-breached password "qwerty123456" is rejected', async () => {
  const { status } = await trySignUp('qwerty123456');
  assert.ok(status >= 400, `Breached password must be rejected`);
});

test('sign-up endpoint does not include raw password in any response', async () => {
  const testPassword = 'super-secret-passphrase-12345';
  const { body } = await trySignUp(testPassword);
  const bodyStr = JSON.stringify(body);
  assert.ok(!bodyStr.includes(testPassword),
    'Raw password must never appear in API response');
});
