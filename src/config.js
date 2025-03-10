/* eslint-disable no-process-env */

// Env vars should be casted to correct types
const config = {
  PORT: Number(process.env.PORT) || 9000,
  NODE_ENV: 'production',
  LOG_LEVEL: process.env.LOG_LEVEL,
  ALLOW_HTTP: process.env.ALLOW_HTTP === 'true',
  DEBUG_MODE: false,
  CORS_ORIGIN: '*',
  // DEBUG_MODE: process.env.DEBUG_MODE === 'true',
  // CORS_ORIGIN: process.env.CORS_ORIGIN || '*',
  API_TOKENS: [],
};

if (process.env.API_TOKENS) {
  config.API_TOKENS = process.env.API_TOKENS.split(',');
}

module.exports = config;
