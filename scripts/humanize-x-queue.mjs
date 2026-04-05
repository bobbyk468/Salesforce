#!/usr/bin/env node
/**
 * Back-compat entry: human voice for X queue + tips lives in refresh-x-upcoming.mjs.
 * This runs that script with --all-threads --all-tips so posted + pending JSON both update.
 *
 * Prefer: npm run x:humanize
 * Pending-only: npm run x:refresh-pending
 */
import { spawnSync } from 'node:child_process'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const refresh = resolve(__dirname, 'refresh-x-upcoming.mjs')
const r = spawnSync(process.execPath, [refresh, '--all-threads', '--all-tips'], {
  stdio: 'inherit',
  env: process.env,
})
process.exit(r.status === null ? 1 : r.status)
