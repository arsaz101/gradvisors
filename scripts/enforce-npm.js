#!/usr/bin/env node
/* Abort install if not using npm (guards against pnpm / yarn selection on Vercel) */
const ua = process.env.npm_config_user_agent || '';
if (!ua.includes('npm/')) {
  console.error('\nERROR: This project is locked to npm. Detected user agent:', ua || 'unknown');
  console.error('If on Vercel, ensure no pnpm-lock.yaml or yarn.lock exists and clear build cache.');
  process.exit(1);
}
