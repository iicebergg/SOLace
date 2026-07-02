-- Migration 002: Classes, seat tokens, attempt linking, and RLS
-- Run AFTER migration 001 (Better Auth schema must exist first).
--
-- IMPORTANT before running:
--   Check the type of attempt_id in test_attempts:
--     \d test_attempts
--   If attempt_id is UUID type, change TEXT to UUID in class_attempt_links below.
--   If attempt_id is TEXT, leave as-is.

-- ────────────────────────────────────────────────────────────
-- classes
-- ────────────────────────────────────────────────────────────
CREATE TABLE classes (
  id              UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_id      TEXT        NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
  name            TEXT        NOT NULL CHECK (char_length(name) BETWEEN 1 AND 200),
  grade           TEXT,
  subject         TEXT,
  join_code       TEXT        NOT NULL UNIQUE,
  code_expires_at TIMESTAMPTZ,
  active          BOOLEAN     NOT NULL DEFAULT true,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
  -- NO name column for students; NO student-identifiable columns of any kind
);

-- ────────────────────────────────────────────────────────────
-- seat_tokens — opaque labels only; no name column
-- ────────────────────────────────────────────────────────────
CREATE TABLE seat_tokens (
  id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  class_id    UUID        NOT NULL REFERENCES classes(id) ON DELETE CASCADE,
  seat_label  TEXT        NOT NULL CHECK (char_length(seat_label) BETWEEN 1 AND 50),
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (class_id, seat_label)
  -- NO name column. seat_label is a machine label like "Seat 1", never a student name.
);

-- ────────────────────────────────────────────────────────────
-- class_attempt_links — links anonymous attempts to a class/seat
-- Keeps test_attempts table completely unchanged.
--
-- ⚠️ TYPE NOTE: attempt_id is TEXT here to match the most common setup.
--   If your test_attempts.attempt_id column is UUID type, change TEXT → UUID.
-- ────────────────────────────────────────────────────────────
CREATE TABLE class_attempt_links (
  attempt_id    UUID  NOT NULL PRIMARY KEY,
  class_id      UUID  NOT NULL REFERENCES classes(id) ON DELETE CASCADE,
  seat_token_id UUID  REFERENCES seat_tokens(id) ON DELETE SET NULL,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
  -- NO name column. attempt_id is the anonymous UUID from test_attempts.
);

-- ────────────────────────────────────────────────────────────
-- Indexes
-- ────────────────────────────────────────────────────────────
CREATE INDEX idx_classes_teacher  ON classes(teacher_id);
CREATE INDEX idx_classes_code     ON classes(lower(join_code));
CREATE INDEX idx_classes_active   ON classes(active) WHERE active = true;
CREATE INDEX idx_seat_class       ON seat_tokens(class_id);
CREATE INDEX idx_cal_class        ON class_attempt_links(class_id);
CREATE INDEX idx_cal_seat         ON class_attempt_links(seat_token_id);

-- updated_at trigger for classes
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$;

CREATE TRIGGER classes_updated_at
  BEFORE UPDATE ON classes
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- ────────────────────────────────────────────────────────────
-- Row-level security
-- ────────────────────────────────────────────────────────────
ALTER TABLE classes             ENABLE ROW LEVEL SECURITY;
ALTER TABLE seat_tokens         ENABLE ROW LEVEL SECURITY;
ALTER TABLE class_attempt_links ENABLE ROW LEVEL SECURITY;

-- app.current_teacher_id is set per-transaction by the API layer via:
--   SELECT set_config('app.current_teacher_id', $teacherId, true)
-- The 'true' argument makes it transaction-local (safe with connection pooling).

CREATE POLICY classes_teacher_iso ON classes
  USING (teacher_id = current_setting('app.current_teacher_id', true));

CREATE POLICY seats_teacher_iso ON seat_tokens
  USING (class_id IN (
    SELECT id FROM classes
    WHERE teacher_id = current_setting('app.current_teacher_id', true)
  ));

CREATE POLICY links_teacher_iso ON class_attempt_links
  USING (class_id IN (
    SELECT id FROM classes
    WHERE teacher_id = current_setting('app.current_teacher_id', true)
  ));

-- Public join endpoint reads classes (code lookup) and seat_tokens (seat list)
-- without a teacher session. Grant SELECT for the anon/service role as needed,
-- but the app layer uses a direct authenticated connection — RLS is bypassed
-- for the service-role connection. The API functions enforce their own
-- access control on top of RLS.
