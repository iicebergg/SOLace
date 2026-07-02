import { z } from 'zod';
import {
  requireTeacher, requireClassOwner, withTeacherCtx,
  rejectNameFields, handleCors, sendError,
} from '../_middleware.js';

const updateSchema = z.object({
  name:    z.string().min(1).max(200).optional(),
  grade:   z.string().max(50).nullable().optional(),
  subject: z.string().max(100).nullable().optional(),
  active:  z.boolean().optional(),
}).strict();

export default async function handler(req, res) {
  if (handleCors(req, res)) return;

  if (req.method !== 'PATCH') {
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  const classId = req.query.id;

  try {
    const teacherId = await requireTeacher(req);
    await requireClassOwner(classId, teacherId);

    const body = req.body || {};
    rejectNameFields(body);

    const parsed = updateSchema.safeParse(body);
    if (!parsed.success) {
      return res.status(400).json({ error: 'validation_error', issues: parsed.error.issues });
    }

    const data = parsed.data;
    if (!Object.keys(data).length) {
      return res.status(400).json({ error: 'no_fields_to_update' });
    }

    // Build the query array dynamically: each requested column gets its own
    // UPDATE, and a trailing SELECT returns the final row. updated_at is
    // refreshed in the same statements. The SELECT is always last.
    const results = await withTeacherCtx(teacherId, (tx) => {
      const queries = [];
      if (data.name    !== undefined) queries.push(tx`UPDATE classes SET name    = ${data.name},    updated_at = NOW() WHERE id = ${classId} AND teacher_id = ${teacherId}`);
      if (data.grade   !== undefined) queries.push(tx`UPDATE classes SET grade   = ${data.grade},   updated_at = NOW() WHERE id = ${classId} AND teacher_id = ${teacherId}`);
      if (data.subject !== undefined) queries.push(tx`UPDATE classes SET subject = ${data.subject}, updated_at = NOW() WHERE id = ${classId} AND teacher_id = ${teacherId}`);
      if (data.active  !== undefined) queries.push(tx`UPDATE classes SET active  = ${data.active},  updated_at = NOW() WHERE id = ${classId} AND teacher_id = ${teacherId}`);
      queries.push(tx`
        SELECT id, name, grade, subject, join_code, code_expires_at, active, updated_at
        FROM classes
        WHERE id = ${classId} AND teacher_id = ${teacherId}
        LIMIT 1
      `);
      return queries;
    });

    const rows = results.at(-1);
    return res.status(200).json(rows[0] || {});
  } catch (err) {
    return sendError(res, err);
  }
}
