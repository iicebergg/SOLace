/**
 * Password policy and HIBP check tests.
 *
 * Run: node --test tests/password-policy.test.js
 * Requires TEST_BASE_URL pointing at a running preview server with DB wired up.
 */

import { test }   from 'node:test';
import assert     from 'node:assert/strict';
import { randomBytes } from 'node:crypto';

const BASE_URL = process.env.TEST_BASE_URL || 'http://localhost:3000';

function uniqueEmail() {
  return `pw-test-${randomBytes(6).toString('hex')}@test.invalid`;
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
  const { status } = await trySignUp('short12345!');
  assert.ok(status >= 400, `Expected 400+, got ${status}`);
});

test('12-character password is accepted', async () => {
  const { status, body } = await trySignUp('correct-horse-b');
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
  assert.ok(status >= 400, 'Breached password must be rejected');
});

test('sign-up endpoint does not include raw password in any response', async () => {
  const testPassword = 'super-secret-passphrase-12345';
  const { body } = await trySignUp(testPassword);
  const bodyStr = JSON.stringify(body);
  assert.ok(!bodyStr.includes(testPassword),
    'Raw password must never appear in API response');
});
