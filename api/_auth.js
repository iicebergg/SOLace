import { betterAuth } from 'better-auth';
import { twoFactor, haveIBeenPwned } from 'better-auth/plugins';
import { Pool, neonConfig } from '@neondatabase/serverless';
import argon2  from '@node-rs/argon2';
import { sendEmail } from './_email.js';

// Node.js 22+ ships a global WebSocket; tell the Neon serverless driver to use
// it when running outside an edge runtime (Better Auth CLI, Vercel Node.js 22).
if (typeof WebSocket !== 'undefined') {
  neonConfig.webSocketConstructor = WebSocket;
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
      hash: (password) => argon2.hash(password, {
        algorithm:   argon2.Algorithm.Argon2id,
        memoryCost:  65536,
        timeCost:    3,
        parallelism: 1,
      }),
      verify: ({ hash, password }) => argon2.verify(hash, password),
    },
  },

  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url }) => {
      await sendEmail({
        to:      user.email,
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
    // k-anonymity range check against HaveIBeenPwned. Rejects breached
    // passwords with a 400 the login page can display, and fails closed
    // (sign-up is refused) if HIBP is unreachable. It only runs on endpoints
    // that set a new password, not sign-in: sign-in hashes the submitted
    // password for unknown emails to equalize timing, and checking there
    // would reveal which emails are registered.
    haveIBeenPwned({
      customPasswordCompromisedMessage:
        'This password has appeared in a known data breach. Please choose a different password.',
    }),
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
