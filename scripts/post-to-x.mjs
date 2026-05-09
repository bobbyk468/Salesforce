/**
 * X posting: threads (with tweetImages + optional immediateReplyImage), tips (imageFile), engagement replies.
 * Scheduled flow (e.g. cron): from repo root, same machine as clone — run `npm run x:schedule` when due,
 * plus `x:tip` / `x:engage` on your cadence. If you run in GitHub Actions, commit+push the queue JSON after
 * each run (including failures) or the next checkout will still see items as pending. Partial threads use
 * postCheckpoint after each tweet so a crash mid-thread resumes instead of re-posting the hook. Stale empty
 * posting rows reset after X_POSTING_STALE_MS (default 2h). Local schedule/post uses scripts/.x-posting.lock (skipped in CI).
 * Threads with immediateReply: main chain is marked posted before the link reply; immediateReplyPostedAt is set only if that reply succeeds.
 * Tips default to replying
 * under the latest thread; use
 * `npm run x:tip:standalone` for a top-level tip (reach experiment). Generate PNGs: `npm run x:images`.
 */
import { TwitterApi } from 'twitter-api-v2';
import { readFileSync, writeFileSync, existsSync, openSync, closeSync, unlinkSync } from 'fs';
import { resolve, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const QUEUE_FILE = resolve(__dirname, 'x-content-queue.json');
const TIPS_FILE = resolve(__dirname, 'x-tips-queue.json');
const TWEET_IMAGES_DIR = resolve(__dirname, 'tweet-images');
const LOCK_FILE = resolve(__dirname, '.x-posting.lock');

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
  } catch {
    // .env.local missing — rely on real env vars
  }
}

function getClient() {
  const { X_API_KEY, X_API_SECRET, X_ACCESS_TOKEN, X_ACCESS_TOKEN_SECRET } = process.env;
  if (!X_API_KEY || !X_API_SECRET || !X_ACCESS_TOKEN || !X_ACCESS_TOKEN_SECRET) {
    console.error('\n❌ Missing X API credentials. Add these to .env.local:\n');
    process.exit(1);
  }
  return new TwitterApi({
    appKey: X_API_KEY,
    appSecret: X_API_SECRET,
    accessToken: X_ACCESS_TOKEN,
    accessSecret: X_ACCESS_TOKEN_SECRET,
  });
}

function loadQueue() {
  return JSON.parse(readFileSync(QUEUE_FILE, 'utf8'));
}

function saveQueue(queue) {
  writeFileSync(QUEUE_FILE, JSON.stringify(queue, null, 2));
}

/** Parse scheduledFor to instant; missing/invalid → null */
function scheduledInstant(t) {
  if (!t.scheduledFor) return null;
  const d = new Date(t.scheduledFor);
  return Number.isNaN(d.getTime()) ? null : d;
}

/** Max age (ms) for status=posting with no checkpoint/firstTweetId before auto-reset to pending. Override: X_POSTING_STALE_MS */
function postingStaleMs() {
  const n = Number.parseInt(process.env.X_POSTING_STALE_MS ?? '', 10);
  if (Number.isFinite(n) && n > 0) return n;
  return 2 * 60 * 60 * 1000;
}

/**
 * Fix inconsistent rows before scheduling. Persists when !dryRun.
 * - pending + firstTweetId → posting (resume path)
 * - posting for > stale window with no progress → pending
 */
function repairQueueForSchedule(queue, dryRun) {
  const staleMs = postingStaleMs();
  const now = Date.now();
  let changed = false;

  for (const t of queue) {
    if (t.status === 'pending' && t.firstTweetId) {
      const cpNote = t.postCheckpoint ? 'has checkpoint' : 'no checkpoint';
      console.warn(
        `\n⚠️  "${t.id}" was pending but has firstTweetId (${cpNote}) — likely a prior crash or race; coercing to posting for resume. Investigate if this repeats.\n`,
      );
      t.status = 'posting';
      if (!t.postingStartedAt) t.postingStartedAt = new Date().toISOString();
      changed = true;
    }
  }

  for (const t of queue) {
    if (t.status !== 'posting' || !t.postingStartedAt) continue;
    const age = now - new Date(t.postingStartedAt).getTime();
    if (age <= staleMs) continue;

    const hasProgress = Boolean(t.postCheckpoint || t.firstTweetId);
    if (hasProgress) {
      console.warn(
        `\n⚠️  "${t.id}" has status=posting for ${Math.round(age / 60000)}m (stale threshold ${Math.round(staleMs / 60000)}m) but has checkpoint/firstTweetId — not auto-reset. Fix JSON or bump postingStartedAt if needed.\n`,
      );
      continue;
    }

    console.warn(
      `\n⚠️  "${t.id}" stuck in posting with no progress (${Math.round(age / 60000)}m) — resetting to pending.\n`,
    );
    t.status = 'pending';
    delete t.postingStartedAt;
    changed = true;
  }

  if (changed && !dryRun) saveQueue(queue);
}

function acquirePostingLock() {
  if (process.env.GITHUB_ACTIONS === 'true' || process.env.CI === 'true') {
    return () => {};
  }
  try {
    const fd = openSync(LOCK_FILE, 'wx');
    closeSync(fd);
  } catch (e) {
    if (e?.code === 'EEXIST') {
      console.error(
        '\n❌ Lock file scripts/.x-posting.lock exists — another local post may be running. Remove the file if it is stale.\n',
      );
      process.exit(1);
    }
    throw e;
  }
  return () => {
    try {
      unlinkSync(LOCK_FILE);
    } catch {
      /* ignore */
    }
  };
}

function mimeForImagePath(p) {
  const lower = p.toLowerCase();
  if (lower.endsWith('.jpg') || lower.endsWith('.jpeg')) return 'image/jpeg';
  if (lower.endsWith('.webp')) return 'image/webp';
  if (lower.endsWith('.gif')) return 'image/gif';
  return 'image/png';
}

/**
 * Resolve a path from the queue (absolute, or relative like tweet-images/foo.png) to a file that exists.
 * Falls back to scripts/tweet-images/<basename> so scheduled jobs work after clone or path changes.
 */
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

function threadImmediateReplyImagePath(thread) {
  const fromQueue = resolveImageFile(thread.immediateReplyImage);
  if (fromQueue) return fromQueue;
  if (!thread.immediateReply) return null;
  const fallback = resolve(TWEET_IMAGES_DIR, `${thread.id}-reply-link.png`);
  return existsSync(fallback) ? fallback : null;
}

function tipImagePath(tip) {
  const fromQueue = resolveImageFile(tip.imageFile);
  if (fromQueue) return fromQueue;
  if (!tip.id) return null;
  const fallback = resolve(TWEET_IMAGES_DIR, `${tip.id}-tip-sf.png`);
  return existsSync(fallback) ? fallback : null;
}

function findThread(queue, id) {
  const thread = queue.find(t => t.id === id);
  if (!thread) {
    console.error(`\n❌ Thread "${id}" not found in queue.\n`);
    process.exit(1);
  }
  return thread;
}

async function cmdList() {
  const queue = loadQueue();
  console.log('\n📅 X Content Queue\n');
  console.log('─'.repeat(60));
  for (const thread of queue) {
    const scheduled = thread.scheduledFor
      ? new Date(thread.scheduledFor).toLocaleString('en-US', {
          timeZone: 'America/New_York',
          dateStyle: 'medium',
          timeStyle: 'short',
        })
      : '(not scheduled)';
    const statusIcon = { pending: '⏳', posting: '🔒', posted: '✅', skipped: '⏭️' }[thread.status] ?? '❓';
    console.log(`\n${statusIcon} [${thread.id}]`);
    console.log(`   Title:     ${thread.title}`);
    console.log(`   Scheduled: ${scheduled} ET`);
    if (thread.certFocus || thread.topicCert) {
      const bits = [];
      if (thread.certFocus) bits.push(`week → ${thread.certFocus}`);
      if (thread.topicCert) bits.push(`topic → ${thread.topicCert}`);
      console.log(`   Certs:     ${bits.join(' · ')}`);
    }
  }
  console.log('\n' + '─'.repeat(60) + '\n');
}

async function cmdPost(threadId, dryRun) {
  const queue = loadQueue();
  const idx = queue.findIndex(t => t.id === threadId);
  if (idx === -1) {
    console.error(`\n❌ Thread "${threadId}" not found in queue.\n`);
    process.exit(1);
  }
  const thread = queue[idx];

  console.log(`\n${dryRun ? '🔍 DRY RUN — ' : ''}Posting thread: "${thread.title}"\n`);
  console.log('─'.repeat(60));

  if (dryRun) {
    if (thread.postCheckpoint?.nextTweetIndex != null) {
      console.log(
        `\n↩️  Resume checkpoint: next index ${thread.postCheckpoint.nextTweetIndex} / ${thread.tweets.length}\n`,
      );
    }
    thread.tweets.forEach((tweet, i) => {
      console.log(`\n[Tweet ${i + 1}/${thread.tweets.length}]`);
      console.log(tweet);
      console.log(`(${tweet.length} chars)`);
      const img = threadTweetImagePath(thread, i);
      if (img) console.log(`[+image] ${img}`);
    });
    if (thread.immediateReply) {
      console.log(`\n[Immediate Reply (Link Hack)]`);
      console.log(thread.immediateReply);
      const replyImg = threadImmediateReplyImagePath(thread);
      if (replyImg) console.log(`[+image] ${replyImg}`);
      else console.log(`[+image] none (run: node scripts/generate-tweet-images.mjs ${thread.id} for link card)`);
    }
    console.log('\n' + '─'.repeat(60));
    console.log('✅ Dry run complete — nothing posted.\n');
    return;
  }

  if (thread.status === 'posted') {
    console.error(`\n❌ Thread "${threadId}" is already posted.\n`);
    process.exit(1);
  }
  if (thread.status !== 'pending' && thread.status !== 'posting') {
    console.error(`\n❌ Thread "${threadId}" has status "${thread.status}" — cannot post.\n`);
    process.exit(1);
  }

  const n = thread.tweets.length;
  let replyToId = null;
  let firstTweetId = thread.firstTweetId ?? null;
  let startIndex = 0;
  let skipMainTweets = false;

  const cp = thread.postCheckpoint;
  if (cp && typeof cp.nextTweetIndex === 'number') {
    const nxt = cp.nextTweetIndex;
    if (nxt < 0 || nxt > n) {
      console.error(
        `\n❌ Invalid postCheckpoint.nextTweetIndex (${nxt}) for "${thread.id}" (tweet count ${n}). Fix x-content-queue.json.\n`,
      );
      process.exit(1);
    }
    if (nxt === n) {
      skipMainTweets = true;
      replyToId = cp.replyToTweetId;
      if (n > 0 && !replyToId) {
        console.error(`\n❌ Checkpoint at end of thread missing replyToTweetId for "${thread.id}".\n`);
        process.exit(1);
      }
    } else {
      startIndex = nxt;
      replyToId = cp.replyToTweetId;
      if (startIndex > 0 && !firstTweetId) {
        console.error(
          `\n❌ Resume requires firstTweetId on "${thread.id}" (partial thread). Fix or clear postCheckpoint.\n`,
        );
        process.exit(1);
      }
      console.log(`\n↩️  Resuming thread at tweet ${startIndex + 1}/${n} (checkpoint).\n`);
    }
  }

  // Quiz answer: first tweet only replies to parent when starting the thread from the top.
  if (thread.replyToEntryId && !skipMainTweets && startIndex === 0) {
    const parentEntry = queue.find(t => t.id === thread.replyToEntryId);
    if (parentEntry?.firstTweetId) {
      replyToId = parentEntry.firstTweetId;
    } else {
      console.error(`\n❌ Parent entry "${thread.replyToEntryId}" not yet posted (no firstTweetId). Post the question tweet first.\n`);
      process.exit(1);
    }
  }

  if (skipMainTweets && !thread.immediateReply) {
    delete queue[idx].postCheckpoint;
    delete queue[idx].postingStartedAt;
    queue[idx].status = 'posted';
    queue[idx].postedAt = new Date().toISOString();
    queue[idx].firstTweetId = firstTweetId;
    saveQueue(queue);
    console.log(`\n🎉 Thread "${thread.title}" marked posted (checkpoint cleared, no immediate reply).\n`);
    return;
  }

  // After validation only: claim so we never leave posting set if we exit() above.
  if (queue[idx].status === 'pending') {
    queue[idx].status = 'posting';
    queue[idx].postingStartedAt = new Date().toISOString();
    saveQueue(queue);
    console.log(`\n🔒 Claimed (status=posting) — persisted to queue.\n`);
  }

  const client = getClient();

  if (!skipMainTweets) {
    for (let i = startIndex; i < n; i++) {
      const tweet = thread.tweets[i];
      const imagePath = threadTweetImagePath(thread, i);
      console.log(`\nPosting tweet ${i + 1}/${n}${imagePath ? ' [+image]' : ''}...`);

      const payload = { text: tweet };
      if (replyToId) payload.reply = { in_reply_to_tweet_id: replyToId };

      if (imagePath) {
        try {
          const mediaId = await client.v1.uploadMedia(imagePath, { mimeType: mimeForImagePath(imagePath) });
          payload.media = { media_ids: [mediaId] };
          console.log(`  📎 Image uploaded`);
        } catch (err) {
          console.warn(`  ⚠️  Image upload failed (posting text only): ${err.message}`);
        }
      }

      let data;
      try {
        ({ data } = await client.v2.tweet(payload));
      } catch (err) {
        console.error(
          JSON.stringify({
            event: 'x_post_tweet_failed',
            threadId: thread.id,
            tweetIndex: i,
            message: err.message ?? String(err),
            at: new Date().toISOString(),
          }),
        );
        throw err;
      }
      replyToId = data.id;
      if (i === 0) firstTweetId = data.id;

      queue[idx].firstTweetId = firstTweetId;
      queue[idx].postCheckpoint = { nextTweetIndex: i + 1, replyToTweetId: data.id };
      saveQueue(queue);

      console.log(`  ✅ Posted: https://x.com/i/web/status/${data.id}`);

      if (i < n - 1) {
        await new Promise(r => setTimeout(r, 2000));
      }
    }
  }

  if (thread.immediateReply) {
    // Persist posted *before* link reply so a crash here does not leave posting+checkpoint and re-run immediateReply.
    delete queue[idx].postCheckpoint;
    delete queue[idx].postingStartedAt;
    queue[idx].status = 'posted';
    queue[idx].postedAt = new Date().toISOString();
    queue[idx].firstTweetId = firstTweetId;
    saveQueue(queue);

    console.log('\nPosting immediate reply (link hack)...');
    await new Promise(r => setTimeout(r, 2000));
    const replyPayload = { text: thread.immediateReply, reply: { in_reply_to_tweet_id: replyToId } };
    const replyImg = threadImmediateReplyImagePath(thread);
    if (replyImg) {
      try {
        const mediaId = await client.v1.uploadMedia(replyImg, { mimeType: mimeForImagePath(replyImg) });
        replyPayload.media = { media_ids: [mediaId] };
        console.log('  📎 Link reply image uploaded');
      } catch (err) {
        console.warn(`  ⚠️  Link reply image failed (text only): ${err.message}`);
      }
    }
    try {
      const { data } = await client.v2.tweet(replyPayload);
      console.log(`  ✅ Link Reply Posted: https://x.com/i/web/status/${data.id}`);
      queue[idx].immediateReplyPostedAt = new Date().toISOString();
      saveQueue(queue);
    } catch (err) {
      console.error(
        JSON.stringify({
          event: 'x_immediate_reply_failed',
          threadId: thread.id,
          message: err.message ?? String(err),
          at: new Date().toISOString(),
        }),
      );
      throw err;
    }
  } else {
    delete queue[idx].postCheckpoint;
    delete queue[idx].postingStartedAt;
    queue[idx].status = 'posted';
    queue[idx].postedAt = new Date().toISOString();
    queue[idx].firstTweetId = firstTweetId;
    saveQueue(queue);
  }

  console.log(`\n🎉 Thread "${thread.title}" posted successfully!\n`);
}

async function cmdTip(dryRun, standalone) {
  const tips = JSON.parse(readFileSync(TIPS_FILE, 'utf8'));
  const now = new Date();
  const hour = now.getHours();

  if (!dryRun && (hour < 8 || hour >= 22)) {
    console.log(`\n🌙 Outside active hours (8 AM–10 PM local server time). Skipping tip.\n`);
    return;
  }

  const pending = tips.filter(t => t.status === 'pending');
  if (pending.length === 0) {
    console.log('\n✅ All tips have been posted! Add more to x-tips-queue.json.\n');
    return;
  }

  const queue = loadQueue();
  const recentThread = queue
    .filter(t => t.status === 'posted' && t.firstTweetId)
    .sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt))[0];

  const replyToId = standalone ? null : (recentThread?.firstTweetId ?? null);
  const tip = pending[0];

  const modeLabel = standalone
    ? 'standalone (top-level — better for impressions vs reply)'
    : replyToId
      ? `reply to thread (${recentThread.id})`
      : 'standalone tweet';
  console.log(`\n${dryRun ? '🔍 DRY RUN — ' : ''}Posting tip [${tip.id}] as ${modeLabel}:\n`);
  console.log(tip.tweet);
  console.log(`\n(${tip.tweet.length} chars)`);
  const tipResolved = tipImagePath(tip);
  if (tipResolved) console.log(`[+image] ${tipResolved}`);

  if (dryRun) {
    console.log('\n✅ Dry run — nothing posted.\n');
    return;
  }

  const client = getClient();
  const payload = { text: tip.tweet };
  if (replyToId) payload.reply = { in_reply_to_tweet_id: replyToId };

  const tipImg = tipImagePath(tip);
  if (tipImg) {
    try {
      const mediaId = await client.v1.uploadMedia(tipImg, { mimeType: mimeForImagePath(tipImg) });
      payload.media = { media_ids: [mediaId] };
      console.log('  📎 Tip image uploaded');
    } catch (err) {
      console.warn(`  ⚠️  Tip image failed (text only): ${err.message}`);
    }
  }

  const { data } = await client.v2.tweet(payload);
  console.log(`\n✅ Posted: https://x.com/i/web/status/${data.id}`);

  const idx = tips.findIndex(t => t.id === tip.id);
  tips[idx].status = 'posted';
  tips[idx].postedAt = new Date().toISOString();
  writeFileSync(TIPS_FILE, JSON.stringify(tips, null, 2));
}

async function cmdEngage(dryRun) {
  const queue = loadQueue();
  const now = new Date();

  const due = queue.filter(t => {
    if (t.status !== 'posted') return false;
    if (!t.engagementTweets?.length) return false;
    if (t.engagementPosted) return false;
    const postedAt = new Date(t.postedAt);
    const minsAgo = (now - postedAt) / 60000;
    return minsAgo >= 120 && minsAgo <= 360;
  });

  if (due.length === 0) {
    console.log('\n⏳ No threads due for engagement replies.\n');
    return;
  }

  const client = dryRun ? null : getClient();

  for (const thread of due) {
    console.log(`\n${dryRun ? '🔍 DRY RUN — ' : ''}Posting engagement replies for "${thread.title}"...`);
    let replyToId = thread.firstTweetId;
    if (!replyToId) {
      console.warn(`  ⚠️  Skipping: No firstTweetId found for thread ${thread.id}`);
      continue;
    }

    let engagementStoppedEarly = false;
    for (let engIdx = 0; engIdx < thread.engagementTweets.length; engIdx++) {
      const eng = thread.engagementTweets[engIdx];
      const text = typeof eng === 'string' ? eng : eng.text;
      const rawImg = typeof eng === 'object' ? eng.imageFile : null;
      const imageFile = resolveImageFile(rawImg);
      console.log(`\n  [Reply to thread${imageFile ? ' +image' : ''}]\n  ${text}\n  (${text.length} chars)`);

      if (!dryRun) {
        const payload = { text, reply: { in_reply_to_tweet_id: replyToId } };
        if (imageFile) {
          try {
            const mediaId = await client.v1.uploadMedia(imageFile, { mimeType: mimeForImagePath(imageFile) });
            payload.media = { media_ids: [mediaId] };
            console.log(`  📎 Image uploaded`);
          } catch (err) {
            console.warn(`  ⚠️  Image upload failed: ${err.message}`);
          }
        }
        try {
          const { data } = await client.v2.tweet(payload);
          console.log(`  ✅ Replied: https://x.com/i/web/status/${data.id}`);
        } catch (err) {
          console.error(
            JSON.stringify({
              event: 'x_engage_tweet_failed',
              threadId: thread.id,
              engagementIndex: engIdx,
              message: err.message ?? String(err),
              at: new Date().toISOString(),
            }),
          );
          engagementStoppedEarly = true;
          break;
        }
        await new Promise(r => setTimeout(r, 3000));
      }
    }

    if (!dryRun && !engagementStoppedEarly) {
      const idx = queue.findIndex(t => t.id === thread.id);
      queue[idx].engagementPosted = true;
      queue[idx].engagementPostedAt = now.toISOString();
      saveQueue(queue);
    }
  }
  if (dryRun) console.log('\n✅ Dry run — nothing posted.\n');
}

async function cmdSchedule(dryRun) {
  const queue = loadQueue();
  repairQueueForSchedule(queue, dryRun);
  const now = new Date();

  const inFlight = queue.filter(t => t.status === 'posting');
  if (inFlight.length > 1) {
    console.error(
      `\n❌ Multiple rows with status=posting (${inFlight.map(t => t.id).join(', ')}). Fix scripts/x-content-queue.json.\n`,
    );
    process.exit(1);
  }
  if (inFlight.length === 1) {
    const t = inFlight[0];
    console.log(
      `\n🔒 In-flight thread "${t.id}" — resuming before any other scheduled item.\n`,
    );
    console.log('Images resolve from scripts/tweet-images (queue paths + fallbacks).\n');
    await cmdPost(t.id, dryRun);
    return;
  }

  const pending = queue.filter(t => t.status === 'pending');
  if (pending.length === 0) {
    console.log('\n⏳ No pending threads.\n');
    return;
  }

  let next = null;
  let nextWhen = null;
  for (const t of pending) {
    const w = scheduledInstant(t);
    if (w == null) continue;
    const tieBreak = next && +w === +nextWhen && String(t.id).localeCompare(String(next.id)) < 0;
    if (nextWhen == null || w < nextWhen || tieBreak) {
      next = t;
      nextWhen = w;
    }
  }

  if (!next || nextWhen == null) {
    console.log('\n⏳ No pending threads with a valid scheduledFor.\n');
    return;
  }

  if (nextWhen > now) {
    console.log(
      `\n⏳ Earliest pending is "${next.id}" @ ${next.scheduledFor} — not before that time (now ${now.toISOString()}).\n`,
    );
    return;
  }

  const maxDue = Number.parseInt(process.env.X_SCHEDULE_MAX_DUE ?? '', 10);
  const limit = Number.isFinite(maxDue) && maxDue > 0 ? maxDue : Number.POSITIVE_INFINITY;
  const due = [next].slice(0, limit);

  console.log(
    `\n📬 Next in queue: "${next.id}" (${next.scheduledFor}) — only earliest pending is eligible until it is posted.\n`,
  );
  console.log('Images resolve from scripts/tweet-images (queue paths + fallbacks).\n');
  for (const thread of due) {
    await cmdPost(thread.id, dryRun);
  }
}

async function main() {
  loadEnv();
  const args = process.argv.slice(2);
  const cmd = args[0];
  const dryRun = args.includes('--dry-run');
  const arg = args.find(a => !a.startsWith('--') && a !== cmd);

  const useLocalLock =
    !dryRun &&
    process.env.GITHUB_ACTIONS !== 'true' &&
    process.env.CI !== 'true' &&
    (cmd === 'schedule' || cmd === 'post');
  const releaseLock = useLocalLock ? acquirePostingLock() : () => {};

  try {
    switch (cmd) {
      case 'list':
        await cmdList();
        break;
      case 'post':
        if (!arg || arg === '--dry-run') {
          console.error('Usage: node scripts/post-to-x.mjs post <thread-id> [--dry-run]');
          process.exit(1);
        }
        await cmdPost(arg, dryRun);
        break;
      case 'schedule':
        await cmdSchedule(dryRun);
        break;
      case 'tip':
        await cmdTip(dryRun, args.includes('--standalone'));
        break;
      case 'engage':
        await cmdEngage(dryRun);
        break;
      default:
        console.log('\nUsage:');
        console.log('  node scripts/post-to-x.mjs list');
        console.log('  node scripts/post-to-x.mjs post <thread-id> [--dry-run]');
        console.log('  node scripts/post-to-x.mjs schedule [--dry-run]');
        console.log('  node scripts/post-to-x.mjs tip [--dry-run] [--standalone]\n');
    }
  } finally {
    releaseLock();
  }
}

main().catch(err => {
  console.error('\n❌ Error:', err.message ?? err);
  if (err.data) console.error('API response:', JSON.stringify(err.data, null, 2));
  process.exit(1);
});
