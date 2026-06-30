-- Rollback for migration 002 (class tables)
-- Run this to undo all changes from 002_class_tables.sql.
-- test_attempts is NOT touched; existing anonymous data is fully preserved.

DROP TRIGGER IF EXISTS classes_updated_at ON classes;
DROP FUNCTION IF EXISTS set_updated_at();
DROP TABLE IF EXISTS class_attempt_links CASCADE;
DROP TABLE IF EXISTS seat_tokens CASCADE;
DROP TABLE IF EXISTS classes CASCADE;

-- To also roll back Better Auth tables (migration 001):
-- DROP TABLE IF EXISTS rate_limit CASCADE;
-- DROP TABLE IF EXISTS two_factor CASCADE;
-- DROP TABLE IF EXISTS verification CASCADE;
-- DROP TABLE IF EXISTS account CASCADE;
-- DROP TABLE IF EXISTS session CASCADE;
-- DROP TABLE IF EXISTS "user" CASCADE;
