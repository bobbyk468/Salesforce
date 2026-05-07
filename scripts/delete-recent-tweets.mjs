/**
 * Delete recent tweets (last ~1hr batch).
 * Run from repo root: node scripts/delete-recent-tweets.mjs
 * Requires the same X credentials in .env.local as the poster.
 */

import { TwitterApi } from 'twitter-api-v2';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

function loadEnv() {
  try {
    const raw = readFileSync(resolve(ROOT, '.env.local'), 'utf8');
    for (const line of raw.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx === -1) continue;
      const key = trimmed.slice(0, eqIdx).trim();
      const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '');
      if (!process.env[key]) process.env[key] = val;
    }
  } catch {}
}

function getClient() {
  const { X_API_KEY, X_API_SECRET, X_ACCESS_TOKEN, X_ACCESS_TOKEN_SECRET } = process.env;
  if (!X_API_KEY || !X_API_SECRET || !X_ACCESS_TOKEN || !X_ACCESS_TOKEN_SECRET) {
    console.error('❌ Missing X API credentials in .env.local');
    process.exit(1);
  }
  return new TwitterApi({
    appKey: X_API_KEY,
    appSecret: X_API_SECRET,
    accessToken: X_ACCESS_TOKEN,
    accessSecret: X_ACCESS_TOKEN_SECRET,
  });
}

// IDs from the last 1hr batch (May 7 ~05:00 UTC)
const IDS_TO_DELETE = [
  '2052252089225769298', // w5-thread-1-pd1-secrets
  '2052252168162570540', // w5-thread-2-which-cert-first
  '2052252245983654118', // w5-thread-3-failure-comeback
  '2052252332986155141', // w6-thread-1-agentforce-study
  '2052252417006490037', // w6-thread-2-spring26-changes
  '2052252482689261991', // w7-thread-1-salary-truth
  '2052252559478583453', // w7-thread-2-admin-to-developer
  '2052252634355208559', // w8-thread-1-exam-day
  '2052252709269762458', // quiz-agentforce-guardrails-q
  '2052252711425609751', // quiz-agentforce-guardrails-a
  '2052252713422086194', // quiz-agentforce-aiagentsession-q
  '2052252715607302412', // quiz-agentforce-aiagentsession-a
];

async function main() {
  loadEnv();
  const client = getClient();
  const rwClient = client.readWrite;

  console.log(`Deleting ${IDS_TO_DELETE.length} tweets...\n`);

  for (const id of IDS_TO_DELETE) {
    try {
      await rwClient.v2.deleteTweet(id);
      console.log(`✅ Deleted ${id}`);
    } catch (err) {
      console.error(`❌ Failed to delete ${id}: ${err.message}`);
    }
  }

  console.log('\nDone.');
}

main().catch(console.error);