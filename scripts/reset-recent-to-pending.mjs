/**
 * Reset the 12 recently posted items back to "pending" status.
 * Run AFTER you have deleted the tweets on X.
 *
 * Usage: node scripts/reset-recent-to-pending.mjs
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const QUEUE_FILE = resolve(__dirname, 'x-content-queue.json');

const IDS_TO_RESET = [
  'w5-thread-1-pd1-secrets',
  'w5-thread-2-which-cert-first',
  'w5-thread-3-failure-comeback',
  'w6-thread-1-agentforce-study',
  'w6-thread-2-spring26-changes',
  'w7-thread-1-salary-truth',
  'w7-thread-2-admin-to-developer',
  'w8-thread-1-exam-day',
  'quiz-agentforce-guardrails-q',
  'quiz-agentforce-guardrails-a',
  'quiz-agentforce-aiagentsession-q',
  'quiz-agentforce-aiagentsession-a',
];

const KEYS_TO_REMOVE = [
  'postedAt',
  'firstTweetId',
  'lastTweetId',
  'lastReplyId',
  '_updatedEngagement',
  'engagementPosted',
  'engagementPostedAt',
  'immediateReply',
];

function resetEntry(entry) {
  entry.status = 'pending';

  for (const key of KEYS_TO_REMOVE) {
    if (key in entry) {
      delete entry[key];
    }
  }

  // Clean nested objects if they exist
  if (entry.series && 'prevEntryId' in entry.series) {
    // keep prev/next for series continuity
  }

  return entry;
}

function main() {
  const queue = JSON.parse(readFileSync(QUEUE_FILE, 'utf8'));
  let changed = 0;

  for (const entry of queue) {
    if (IDS_TO_RESET.includes(entry.id)) {
      resetEntry(entry);
      changed++;
      console.log(`Reset: ${entry.id}`);
    }
  }

  if (changed > 0) {
    writeFileSync(QUEUE_FILE, JSON.stringify(queue, null, 2));
    console.log(`\n✅ Reset ${changed} entries back to pending.`);
    console.log('You can now re-schedule or post them again.');
  } else {
    console.log('No matching entries found to reset.');
  }
}

main();