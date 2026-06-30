'use strict';

const { betterAuth } = require('better-auth');
const { twoFactor }  = require('better-auth/plugins');
const { Pool }       = require('@neondatabase/serverless');
const argon2         = require('@node-rs/argon2');
const sgMail         = require('@sendgrid/mail');
const crypto         = require('crypto');

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

// k-anonymity range check against HaveIBeenPwned.
// Throws if the password appears in a known breach, or if HIBP is unreachable
// (fail closed — prevents sign-up when we cannot verify breach status).
async function checkPwnedPassword(password) {
  const sha1   = crypto.createHash('sha1').update(password).digest('hex').toUpperCase();
  const prefix = sha1.slice(0, 5);
  const suffix = sha1.slice(5);
  const res  = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`, {
    headers: { 'Add-Padding': 'true' },
  });
  if (!res.ok) throw new Error('breach_check_unavailable');
  const text = await res.text();
  const found = text.split('\r\n').some(line => line.split(':')[0].trim() === suffix);
  if (found) {
    throw new Error(
      'This password has appeared in a known data breach. Please choose a different password.'
    );
  }
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const auth = betterAuth({
  database: pool,

  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    minPasswordLength: 12,
    maxPasswordLength: 128,
    // NIST SP 800-63B: length over complexity.
    // No forced symbol/number/case composition rules.
    password: {
      hash: async (password) => {
        // Never log the raw password — not here, not anywhere.
        await checkPwnedPassword(password);
        // argon2id: OWASP's top recommendation (memory-hard, side-channel resistant).
        // memoryCost 65536 = 64 MB. Tune timeCost up if hashing is under 200 ms on Lambda.
        return argon2.hash(password, {
          algorithm:   argon2.Algorithm.Argon2id,
          memoryCost:  65536,
          timeCost:    3,
          parallelism: 1,
        });
      },
      verify: ({ hash, password }) => argon2.verify(hash, password),
    },
  },

  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url }) => {
      await sgMail.send({
        to:      user.email,
        from:    process.env.FROM_EMAIL || 'noreply@learnsolace.org',
        subject: 'Verify your SOLace teacher account',
        html: `
          <p>Welcome to SOLace!</p>
          <p><a href="${url}">Click here to verify your email address</a> and activate your teacher account.</p>
          <p>If you did not sign up for SOLace, you can safely ignore this email.</p>
          <p>This link expires in 24 hours.</p>
        `,
        text: `Welcome to SOLace!\n\nVerify your email: ${url}\n\nThis link expires in 24 hours.`,
      });
    },
  },

  // Google OAuth is optional — only wired if env vars are set.
  socialProviders: process.env.GOOGLE_CLIENT_ID ? {
    google: {
      clientId:     process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  } : {},

  plugins: [
    twoFactor({ issuer: 'SOLace' }),
  ],

  rateLimit: {
    enabled: true,
    storage: 'database',  // Neon table — survives across stateless Vercel functions.
    // In-memory rate limiting silently does nothing in serverless environments.
    customRules: {
      '/sign-in/email':            { window: 10, max: 3 },
      '/sign-up/email':            { window: 60, max: 5 },
      '/forget-password':          { window: 60, max: 3 },
      '/reset-password':           { window: 60, max: 3 },
      '/verify-email':             { window: 60, max: 5 },
      '/two-factor/verify-totp':   { window: 10, max: 3 },
      '/two-factor/verify-backup': { window: 10, max: 3 },
    },
  },

  session: {
    cookieCache: { enabled: true, maxAge: 300 },
    expiresIn:        60 * 60 * 24 * 7,  // 7 days
    updateAge:        60 * 60 * 24,       // refresh if older than 1 day
  },

  advanced: {
    // httpOnly + Secure + SameSite cookies in production.
    // Never place auth tokens in localStorage.
    useSecureCookies: process.env.NODE_ENV === 'production',
    // Vercel's trusted IP headers (real client IP, not spoofable X-Forwarded-For chain).
    ipHeaders: ['x-real-ip', 'x-forwarded-for'],
    // Keep CSRF and origin checks at defaults (enabled).
    // Keep email enumeration protection at default (enabled).
  },

  trustedOrigins: process.env.ALLOWED_ORIGIN ? [process.env.ALLOWED_ORIGIN] : [],
});

module.exports = { auth };
