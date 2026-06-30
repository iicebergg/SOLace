'use strict';

const { z } = require('zod');
const {
  requireTeacher, withTeacherCtx, uniqueCode,
  rejectNameFields, handleCors, sendError, sql,
} = require('./_middleware');

const createSchema = z.object({
  name:    z.string().min(1).max(200),
  grade:   z.string().max(50).optional(),
  subject: z.string().max(100).optional(),
});

module.exports = async function handler(req, res) {
  if (handleCors(req, res)) return;

  try {
    const teacherId = await requireTeacher(req);

    if (req.method === 'GET') {
      const rows = await withTeacherCtx(teacherId, (tx) => tx`
        SELECT id, name, grade, subject, join_code, code_expires_at, active, created_at
        FROM classes
        WHERE teacher_id = ${teacherId}
        ORDER BY created_at DESC
      `);
      return res.status(200).json(rows);
    }

    if (req.method === 'POST') {
      const body = req.body || {};
      rejectNameFields(body);

      const parsed = createSchema.safeParse(body);
      if (!parsed.success) {
        return res.status(400).json({ error: 'validation_error', issues: parsed.error.issues });
      }

      const { name, grade = null, subject = null } = parsed.data;
      const joinCode = await uniqueCode();

      const rows = await withTeacherCtx(teacherId, (tx) => tx`
        INSERT INTO classes (teacher_id, name, grade, subject, join_code)
        VALUES (${teacherId}, ${name}, ${grade}, ${subject}, ${joinCode})
        RETURNING id, name, grade, subject, join_code, active, created_at
      `);
      return res.status(201).json(rows[0]);
    }

    return res.status(405).json({ error: 'method_not_allowed' });
  } catch (err) {
    return sendError(res, err);
  }
};
