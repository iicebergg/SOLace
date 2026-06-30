import { auth }          from '../_auth.js';
import { toNodeHandler } from 'better-auth/node';
import { handleCors }    from '../_middleware.js';

const handler = toNodeHandler(auth);

export default async function authHandler(req, res) {
  if (handleCors(req, res)) return;
  return handler(req, res);
}
