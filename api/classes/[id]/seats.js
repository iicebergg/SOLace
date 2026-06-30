import { z } from 'zod';
import {
  requireTeacher, requireClassOwner, withTeacherCtx,
  rejectNameFields, handleCors, sendError,
} from '../../_middleware.js';

const seatsSchema = z.union([
  z.object({ count:  z.number().int().min(1).max(200) }).strict(),
  z.object({ labels: z.array(z.string().min(1).max(50)).min(1).max(200) }).strict(),
]);

export default async function handler(req, res) {
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

    const parsed = seatsSchema.safeParse(body);
    if (!parsed.success) {
      return res.status(400).json({ error: 'validation_error', issues: parsed.error.issues });
    }

    const labels = parsed.data.count
      ? Array.from({ length: parsed.data.count }, (_, i) => `Seat ${i + 1}`)
      : parsed.data.labels;

    // Insert then re-read in a single transaction so the SELECT sees the
    // freshly inserted seats. The leading element is the INSERT result.
    const [, all] = await withTeacherCtx(teacherId, (tx) => [
      tx`
        INSERT INTO seat_tokens (class_id, seat_label)
        SELECT ${classId}::uuid, unnest(${labels}::text[])
        ON CONFLICT (class_id, seat_label) DO NOTHING
      `,
      tx`
        SELECT id, seat_label FROM seat_tokens
        WHERE class_id = ${classId}
        ORDER BY seat_label
      `,
    ]);

    return res.status(200).json(all);
  } catch (err) {
    return sendError(res, err);
  }
}
