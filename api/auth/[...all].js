import { auth }          from '../_auth.js';
import { toNodeHandler } from 'better-auth/node';

export default toNodeHandler(auth);
