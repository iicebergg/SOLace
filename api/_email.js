// Transactional email via the Brevo HTTP API.
//
// Called from the Better Auth email hooks in _auth.js. Uses global fetch
// (Node.js 22) rather than an SDK so the serverless bundle stays small and
// there is no extra dependency to keep patched.
//
// Docs: https://developers.brevo.com/reference/sendtransacemail

const BREVO_ENDPOINT = 'https://api.brevo.com/v3/smtp/email';
const SENDER_NAME    = 'SOLace';
const TIMEOUT_MS     = 10_000;

/**
 * Send one transactional email.
 *
 * Environment variables are read at call time, not at module load, so that
 * importing this file during the Better Auth CLI migration does not throw
 * when BREVO_API_KEY is absent.
 *
 * @param {object}  message
 * @param {string}  message.to      Recipient address.
 * @param {string}  message.subject Subject line.
 * @param {string}  message.html    HTML body.
 * @param {string}  message.text    Plain-text fallback body.
 * @returns {Promise<{ messageId?: string }>}
 * @throws  {Error} If the key is missing, the request fails, or Brevo rejects it.
 */
export async function sendEmail({ to, subject, html, text }) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) throw new Error('BREVO_API_KEY is not set');

  const res = await fetch(BREVO_ENDPOINT, {
    method: 'POST',
    headers: {
      'api-key':      apiKey,
      'content-type': 'application/json',
      'accept':       'application/json',
    },
    body: JSON.stringify({
      sender:      { name: SENDER_NAME, email: process.env.FROM_EMAIL || 'noreply@learnsolace.org' },
      to:          [{ email: to }],
      subject,
      htmlContent: html,
      textContent: text,
    }),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });

  if (!res.ok) {
    // Brevo returns { code, message } on error; fall back to the raw body
    // if it is not JSON (e.g. a gateway error page).
    const body = await res.text();
    let detail = body;
    try {
      const parsed = JSON.parse(body);
      detail = parsed.message ? `${parsed.code}: ${parsed.message}` : body;
    } catch { /* keep the raw body */ }
    throw new Error(`Brevo send failed (${res.status}): ${detail}`);
  }

  return res.json();
}
