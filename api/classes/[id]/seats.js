'use strict';

const { z } = require('zod');
const {
  requireTeacher, requireClassOwner, withTeacherCtx,
  rejectNameFields, handleCors, sendError,
} = require('../../_middleware');

const seatsSchema = z.union([
  z.object({ count:  z.number().int().min(1).max(200) }).strict(),
  z.object({ labels: z.array(z.string().min(1).max(50)).min(1).max(200) }).strict(),
]);

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
    rejectNameFields(body);  // Hard-reject any name-like field

    const parsed = seatsSchema.safeParse(body);
    if (!parsed.success) {
      return res.status(400).json({ error: 'validation_error', issues: parsed.error.issues });
    }

    // Generate seat labels from count, or use provided labels.
    const labels = parsed.data.count
      ? Array.from({ length: parsed.data.count }, (_, i) => `Seat ${i + 1}`)
      : parsed.data.labels;

    // Bulk insert, skipping any that already exist (idempotent).
    const rows = await withTeacherCtx(teacherId, (tx) => tx`
      INSERT INTO seat_tokens (class_id, seat_label)
      SELECT ${classId}::uuid, unnest(${labels}::text[])
      ON CONFLICT (class_id, seat_label) DO NOTHING
      RETURNING id, seat_label
    `);

    // Also return any pre-existing seats that weren't inserted.
    const all = await withTeacherCtx(teacherId, (tx) => tx`
      SELECT id, seat_label FROM seat_tokens
      WHERE class_id = ${classId}
      ORDER BY seat_label
    `);

    return res.status(200).json(all);
  } catch (err) {
    return sendError(res, err);
  }
};
