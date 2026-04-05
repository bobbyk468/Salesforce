/**
 * X queue health for reach experiments: opener media, thread length, schedule vs actual,
 * tips as replies vs standalone, tip images, cron timezone pitfall (see post-to-x tip window).
 *
 * Run: npm run x:analyze
 */
import { readFileSync, existsSync } from 'fs';
import { resolve, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TWEET_IMAGES_DIR = resolve(__dirname, 'tweet-images');
const QUEUE_FILE = resolve(__dirname, 'x-content-queue.json');
const TIPS_FILE = resolve(__dirname, 'x-tips-queue.json');
const TZ = 'America/New_York';

function resolveImageFile(p) {
  if (p == null || typeof p !== 'string') return null;
  const s = p.trim();
  if (!s) return null;
  if (existsSync(s)) return s;
  const fromScripts = resolve(__dirname, s);
  if (existsSync(fromScripts)) return fromScripts;
  const stripped = s.replace(/^tweet-images[/\\]/, '');
  const inTweetDir = resolve(TWEET_IMAGES_DIR, stripped);
  if (existsSync(inTweetDir)) return inTweetDir;
  const byBase = resolve(TWEET_IMAGES_DIR, basename(s));
  if (existsSync(byBase)) return byBase;
  return null;
}

function threadTweetImagePath(thread, tweetIndex) {
  const map = thread.tweetImages;
  if (map) {
    const raw = map[tweetIndex] ?? map[String(tweetIndex)];
    const found = resolveImageFile(raw);
    if (found) return found;
  }
  const id = thread.id;
  const last = thread.tweets.length - 1;
  const byRole =
    tweetIndex === 0
      ? `${id}-cover.png`
      : tweetIndex === 2
        ? `${id}-stats.png`
        : tweetIndex === last
          ? `${id}-cta.png`
          : null;
  if (byRole) {
    const fallback = resolve(TWEET_IMAGES_DIR, byRole);
    if (existsSync(fallback)) return fallback;
  }
  return null;
}

function tipImagePath(tip) {
  const fromQueue = resolveImageFile(tip.imageFile);
  if (fromQueue) return fromQueue;
  if (!tip.id) return null;
  const fallback = resolve(TWEET_IMAGES_DIR, `${tip.id}-tip-sf.png`);
  return existsSync(fallback) ? fallback : null;
}

function hourET(isoOrDate) {
  const d = typeof isoOrDate === 'string' ? new Date(isoOrDate) : isoOrDate;
  return Number(
    new Intl.DateTimeFormat('en-US', { timeZone: TZ, hour: 'numeric', hour12: false }).format(d),
  );
}

function formatET(isoOrDate) {
  const d = typeof isoOrDate === 'string' ? new Date(isoOrDate) : isoOrDate;
  return new Intl.DateTimeFormat('en-US', {
    timeZone: TZ,
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(d);
}

function firstLineLen(text) {
  const t = (text || '').trim();
  const line = t.split(/\r?\n/)[0] || '';
  return line.length;
}

function histogramHours(items, getIso) {
  const buckets = Object.fromEntries(Array.from({ length: 24 }, (_, h) => [h, 0]));
  for (const item of items) {
    const iso = getIso(item);
    if (!iso) continue;
    const h = hourET(iso);
    if (h >= 0 && h < 24) buckets[h]++;
  }
  return buckets;
}

function printHistogram(title, buckets) {
  console.log(`\n${title} (hour start, ${TZ})`);
  const rows = Object.entries(buckets)
    .map(([h, n]) => ({ h: Number(h), n }))
    .filter((x) => x.n > 0)
    .sort((a, b) => a.h - b.h);
  if (rows.length === 0) {
    console.log('  (no data)');
    return;
  }
  const max = Math.max(...rows.map((r) => r.n), 1);
  for (const { h, n } of rows) {
    const bar = '█'.repeat(Math.round((n / max) * 20));
    console.log(`  ${String(h).padStart(2, '0')}:00  ${String(n).padStart(3)}  ${bar}`);
  }
}

function main() {
  const queue = JSON.parse(readFileSync(QUEUE_FILE, 'utf8'));
  const tips = JSON.parse(readFileSync(TIPS_FILE, 'utf8'));

  console.log('\n📊 X queue analysis (reach / cadence)\n');
  console.log('─'.repeat(64));

  const byStatus = { pending: 0, posted: 0, skipped: 0, other: 0 };
  for (const t of queue) {
    if (byStatus[t.status] === undefined) byStatus.other++;
    else byStatus[t.status]++;
  }
  console.log('\nThreads by status:', byStatus);

  let openerNoImage = [];
  let openerLongFirstLine = [];
  const threadLens = [];

  for (const thread of queue) {
    const n = thread.tweets?.length ?? 0;
    threadLens.push(n);
    const opener = thread.tweets?.[0] ?? '';
    const img0 = threadTweetImagePath(thread, 0);
    if (!img0) openerNoImage.push(thread.id);
    if (firstLineLen(opener) > 200) openerLongFirstLine.push(thread.id);
  }

  const avgLen = threadLens.length ? (threadLens.reduce((a, b) => a + b, 0) / threadLens.length).toFixed(1) : 0;
  console.log(`\nThread depth: min ${Math.min(...threadLens)} / max ${Math.max(...threadLens)} / avg ${avgLen} tweets`);
  console.log(`Openers missing resolvable cover image: ${openerNoImage.length ? openerNoImage.join(', ') : 'none ✅'}`);
  console.log(`Openers with first line > 200 chars (feed truncation risk): ${openerLongFirstLine.length ? openerLongFirstLine.join(', ') : 'none'}`);

  printHistogram('scheduledFor (all threads)', histogramHours(queue, (t) => t.scheduledFor));
  const postedThreads = queue.filter((t) => t.status === 'posted' && t.postedAt);
  printHistogram('postedAt (posted threads only)', histogramHours(postedThreads, (t) => t.postedAt));

  console.log('\nSchedule vs actual (posted threads, hours late = posted − scheduled, same instant math)');
  const drifts = [];
  for (const t of postedThreads) {
    const sched = new Date(t.scheduledFor).getTime();
    const post = new Date(t.postedAt).getTime();
    drifts.push((post - sched) / 3600000);
  }
  if (drifts.length) {
    drifts.sort((a, b) => a - b);
    const p = (q) => drifts[Math.floor((q / 100) * (drifts.length - 1))];
    console.log(
      `  min ${drifts[0].toFixed(1)}h | p50 ${p(50).toFixed(1)}h | p90 ${p(90).toFixed(1)}h | max ${drifts[drifts.length - 1].toFixed(1)}h`,
    );
    console.log(`  (${TZ} labels above; drift is UTC-based delta — use for batching patterns, not legal timestamps)`);
  }

  const tipsBy = { pending: 0, posted: 0, other: 0 };
  let tipsWithImageField = 0;
  let tipsWithResolvedImage = 0;
  for (const tip of tips) {
    if (tipsBy[tip.status] === undefined) tipsBy.other++;
    else tipsBy[tip.status]++;
    if (tip.imageFile) tipsWithImageField++;
    if (tipImagePath(tip)) tipsWithResolvedImage++;
  }
  console.log('\n' + '─'.repeat(64));
  console.log('\nTips by status:', tipsBy);
  console.log(`Tips with imageFile in JSON: ${tipsWithImageField} / ${tips.length}`);
  console.log(
    `Tips with resolvable image (queue path or scripts/tweet-images/<id>-tip-sf.png): ${tipsWithResolvedImage} / ${tips.length}`,
  );

  const recentThread = postedThreads
    .filter((t) => t.firstTweetId)
    .sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt))[0];

  console.log('\n' + '─'.repeat(64));
  console.log('\nHow tips post (from post-to-x.mjs):');
  console.log(
    `  • Next pending tip goes as ${recentThread ? `a REPLY under thread "${recentThread.id}" (first tweet)` : 'standalone (no recent thread with firstTweetId)'} → replies get far fewer impressions than top-level tweets.`,
  );
  console.log('  • Tip window uses server local hour (8–22), not ET — if cron is UTC, you may be posting tips at odd US times.');

  console.log('\n' + '─'.repeat(64));
  console.log('\nConcrete experiments (pick 1–2, run 2 weeks):\n');
  console.log('  1. Alternate `npm run x:tip:standalone` vs `npm run x:tip` — same queue order; compare impressions in X analytics.');
  console.log('  2. Run `npm run x:images:tips` (sets imageFile for every tip + writes scripts/tweet-images/<id>-tip-sf.png).');
  console.log('  3. Run x:schedule closer to scheduledFor (cron every 15–30m) so openers hit the ET windows you chose.');
  console.log('  4. If first lines are long, move hashtags / 🧵 to tweet 2 or end of opener so the hook fits one screen.');
  console.log('');
}

main();
