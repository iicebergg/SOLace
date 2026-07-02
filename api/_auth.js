import { betterAuth } from 'better-auth';
import { twoFactor }  from 'better-auth/plugins';
import { Pool, neonConfig } from '@neondatabase/serverless';
import argon2  from '@node-rs/argon2';
import sgMail  from '@sendgrid/mail';
import { createHash } from 'node:crypto';

// Node.js 22+ ships a global WebSocket; tell the Neon serverless driver to use
// it when running outside an edge runtime (Better Auth CLI, Vercel Node.js 22).
if (typeof WebSocket !== 'undefined') {
  neonConfig.webSocketConstructor = WebSocket;
}

// k-anonymity range check against HaveIBeenPwned.
// Throws if the password appears in a known breach, or if HIBP is unreachable
// (fail closed — prevents sign-up when we cannot verify breach status).
async function checkPwnedPassword(password) {
  const sha1   = createHash('sha1').update(password).digest('hex').toUpperCase();
  const prefix = sha1.slice(0, 5);
  const suffix = sha1.slice(5);
  const res = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`, {
    headers: { 'Add-Padding': 'true' },
  });
  if (!res.ok) throw new Error('breach_check_unavailable');
  const text  = await res.text();
  const found = text.split('\r\n').some(line => line.split(':')[0].trim() === suffix);
  if (found) {
    throw new Error(
      'This password has appeared in a known data breach. Please choose a different password.'
    );
  }
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export const auth = betterAuth({
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
        await checkPwnedPassword(password);
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
      // Set the API key here, not at module load, so importing this file
      // during the Better Auth CLI migration doesn't throw when the key is absent.
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
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
    storage: 'database',
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
    expiresIn:   60 * 60 * 24 * 7,
    updateAge:   60 * 60 * 24,
  },

  advanced: {
    useSecureCookies: process.env.NODE_ENV === 'production',
    ipHeaders: ['x-real-ip', 'x-forwarded-for'],
  },

  trustedOrigins: process.env.ALLOWED_ORIGIN ? [process.env.ALLOWED_ORIGIN] : [],
});
