'use strict';

const { auth }      = require('../_auth');
const { toNodeHandler } = require('better-auth/node');
const { handleCors }    = require('../_middleware');

const handler = toNodeHandler(auth);

module.exports = async function authHandler(req, res) {
  if (handleCors(req, res)) return;
  return handler(req, res);
};
