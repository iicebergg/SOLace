# Migration 001 — Better Auth Schema

This migration is generated and applied by the Better Auth CLI.

## How to run (against your preview Neon branch)

```bash
# Set DATABASE_URL to your preview Neon branch connection string
export DATABASE_URL="postgresql://..."

npx @better-auth/cli@latest migrate --config api/_auth.js
```

The CLI will create these tables automatically:
- `user`           — teacher accounts (id TEXT, email, emailVerified, createdAt, updatedAt)
- `session`        — active sessions (id, userId FK, token, expiresAt, ipAddress, userAgent)
- `account`        — OAuth account links (id, userId FK, providerId, accountId, ...)
- `verification`   — email/password-reset tokens (id, identifier, value, expiresAt)
- `two_factor`     — TOTP secrets per user (id, userId FK, secret, backupCodes, enabled)
- `rate_limit`     — database-backed rate limiting (key, count, lastRequest)

## Important

Run this migration BEFORE migration 002, because `classes.teacher_id` references `"user"(id)`.
