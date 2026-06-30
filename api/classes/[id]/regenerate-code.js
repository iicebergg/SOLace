'use strict';

const { z } = require('zod');
const {
  requireTeacher, requireClassOwner, withTeacherCtx,
  uniqueCode, rejectNameFields, handleCors, sendError,
} = require('../../_middleware');

const regenSchema = z.object({
  expires_at: z.string().datetime().optional(),
}).strict();

module.exports = async function handler(req, res) {
  if (handleCors(req, res)) return;

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  const classId = req.query.id;

  try {
    const teacherId = await requireTeacher(req);
    await requireClassOwner(classId, teacherId);

    const body = req.body || {};
    rejectNameFields(body);

    const parsed = regenSchema.safeParse(body);
    if (!parsed.success) {
      return res.status(400).json({ error: 'validation_error', issues: parsed.error.issues });
    }

    const newCode     = await uniqueCode();
    const expiresAt   = parsed.data.expires_at || null;

    const rows = await withTeacherCtx(teacherId, (tx) => tx`
      UPDATE classes
      SET join_code = ${newCode}, code_expires_at = ${expiresAt}
      WHERE id = ${classId} AND teacher_id = ${teacherId}
      RETURNING join_code, code_expires_at
    `);

    return res.status(200).json(rows[0] || { join_code: newCode });
  } catch (err) {
    return sendError(res, err);
  }
};
