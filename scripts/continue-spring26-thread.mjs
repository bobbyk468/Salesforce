/**
 * Continue posting the Spring '26 thread starting from tweet 2.
 * Tweet 1 is already live at ID 2040714905515704697.
 */
import { TwitterApi } from 'twitter-api-v2';
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const QUEUE_FILE = resolve(__dirname, 'x-content-queue.json');

// Tweet 1 is already live — chain from here
const TWEET_1_ID = '2040714905515704697';

// Rewritten tweets 2-11, all under 280 chars
const TWEETS = [
  // tweet 2 (index 1)
  `if you're new to Salesforce: there's no versioning.\n\nno v8.3 your company is stuck on. no "we're still on the old version."\n\nthere's just Salesforce. it updates 3x a year for every org on the planet simultaneously.\n\nno other major enterprise platform works this way.`,

  // tweet 3 (index 2)
  `and yes, the naming makes no sense.\n\nWinter '26 dropped in October.\nSpring '26 dropped in February.\nSummer '26 will drop around June.\n\nWinter in October.\n\nI've been in this ecosystem for years and it still makes me do a double take every time. you get used to it.`,

  // tweet 4 (index 3)
  `you do get a heads up before a release hits production.\n\nit lands in your sandbox 3-4 weeks early.\n\nmost admins don't check. something breaks after the release. two days debugging a Flow that worked fine last month.\n\nthe sandbox preview exists. use it.`,

  // tweet 5 (index 4)
  `what actually changed in Spring '26:\n\nAgentforce can now orchestrate multiple agents. one agent hands off to another mid-conversation.\n\nif you haven't been paying attention to Agentforce — this is the release where it becomes something you have to know.`,

  // tweet 6 (index 5)
  `Flow got new debugging tools.\n\nthis sounds boring. it's not.\n\nanyone who's spent 3 hours on a Flow that fails silently with zero useful error messages knows why this matters.\n\nminor QoL update on paper. real time saved in practice.`,

  // tweet 7 (index 6)
  `Data Cloud got updates on identity resolution and real-time data activation.\n\nif you're on any project that touches Data Cloud: how profiles are unified and activated changed. not broken — improved. but docs from 6 months ago may not match what you're seeing now.`,

  // tweet 8 (index 7)
  `the cert angle:\n\nexam outlines update with releases. if your study material hasn't been touched since last year, parts of it are wrong.\n\nthe official Salesforce exam guide on Trailhead is free, always current, and more accurate than most paid courses.`,

  // tweet 9 (index 8)
  `if you're already certified: Spring '26 opens your maintenance window.\n\nmaintenance exams are 30-40 questions on what changed. most people dread them.\n\nhonestly they're the least painful part of holding a cert. 30 minutes on stuff you should know anyway. just do them.`,

  // tweet 10 (index 9)
  `what Spring '26 didn't change:\n\nOWD, roles, profiles, permission sets. governor limits. Flow fundamentals. the sharing model.\n\nbackbone of the platform for 15+ years. not going anywhere.\n\nstill 40-60% of your score on any Salesforce exam.`,

  // tweet 11 (index 10)
  `last thing:\n\nSalesforce releases 500+ pages of release notes every cycle. nobody reads them all.\n\nhighlights take 20 minutes. worth it once per release.\n\nSpring '26 cert prep:\nhttps://trailblazeprep.com/certifications\n\n#Spring26 #SalesforceCertification #SalesforceAdmin`,
];

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
  } catch { /* rely on real env vars */ }
}

function checkLengths() {
  let ok = true;
  for (let i = 0; i < TWEETS.length; i++) {
    const len = TWEETS[i].length;
    const status = len <= 280 ? '✅' : '❌';
    console.log(`  Tweet ${i + 2}: ${len} chars ${status}`);
    if (len > 280) ok = false;
  }
  return ok;
}

const dryRun = process.argv.includes('--dry-run');

async function main() {
  loadEnv();

  console.log('\n📏 Checking tweet lengths...\n');
  const ok = checkLengths();

  if (!ok) {
    console.error('\n❌ Fix over-limit tweets before posting.\n');
    process.exit(1);
  }

  if (dryRun) {
    console.log('\n✅ Dry run — all lengths OK. Nothing posted.\n');
    return;
  }

  const { X_API_KEY, X_API_SECRET, X_ACCESS_TOKEN, X_ACCESS_TOKEN_SECRET } = process.env;
  if (!X_API_KEY || !X_API_SECRET || !X_ACCESS_TOKEN || !X_ACCESS_TOKEN_SECRET) {
    console.error('\n❌ Missing X API credentials.\n');
    process.exit(1);
  }

  const client = new TwitterApi({
    appKey: X_API_KEY,
    appSecret: X_API_SECRET,
    accessToken: X_ACCESS_TOKEN,
    accessSecret: X_ACCESS_TOKEN_SECRET,
  });

  console.log(`\n🧵 Continuing Spring '26 thread (tweets 2-11)...\n`);
  console.log(`   Chaining from tweet 1: https://x.com/i/web/status/${TWEET_1_ID}\n`);
  console.log('─'.repeat(60));

  let replyToId = TWEET_1_ID;
  let lastPostedId = null;

  for (let i = 0; i < TWEETS.length; i++) {
    const tweetNum = i + 2;
    const text = TWEETS[i];
    console.log(`\nPosting tweet ${tweetNum}/11...`);
    console.log(text.slice(0, 60) + (text.length > 60 ? '…' : ''));

    const { data } = await client.v2.tweet({
      text,
      reply: { in_reply_to_tweet_id: replyToId },
    });

    replyToId = data.id;
    lastPostedId = data.id;
    console.log(`  ✅ https://x.com/i/web/status/${data.id}`);

    if (i < TWEETS.length - 1) {
      await new Promise(r => setTimeout(r, 2500));
    }
  }

  // Update queue: mark spring26-release-thread as posted
  const queue = JSON.parse(readFileSync(QUEUE_FILE, 'utf8'));
  const idx = queue.findIndex(t => t.id === 'spring26-release-thread');
  if (idx !== -1) {
    queue[idx].status = 'posted';
    queue[idx].postedAt = new Date().toISOString();
    queue[idx].firstTweetId = TWEET_1_ID;
    queue[idx].lastTweetId = lastPostedId;
    writeFileSync(QUEUE_FILE, JSON.stringify(queue, null, 2));
    console.log('\n📝 Queue updated — thread marked as posted.');
  }

  console.log(`\n🎉 Thread complete! View it:\n   https://x.com/i/web/status/${TWEET_1_ID}\n`);
}

main().catch(err => {
  console.error('\n❌ Error:', err.message ?? err);
  if (err.data) console.error('API response:', JSON.stringify(err.data, null, 2));
  process.exit(1);
});
