import { TwitterApi } from 'twitter-api-v2';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const raw = fs.readFileSync(path.resolve(ROOT, '.env.local'), 'utf8');
const env = {};
for (const line of raw.split('\n')) {
  const eq = line.indexOf('=');
  if (eq === -1) continue;
  env[line.slice(0, eq).trim()] = line.slice(eq + 1).trim();
}

const client = new TwitterApi({
  appKey: env.X_API_KEY,
  appSecret: env.X_API_SECRET,
  accessToken: env.X_ACCESS_TOKEN,
  accessSecret: env.X_ACCESS_TOKEN_SECRET,
});

const tweets = [
  `myth: permission sets control access.

reality: permission sets are slaves to OWD.

if you believe differently, you're about to fail an exam question. here's why this matters:

🧵`,
  `the mental model most people have:

permission set = "the thing that lets people access stuff"

the actual mental model:

permission set = "the thing that lets people access stuff THAT OWD ALREADY ALLOWED"

OWD is the law. permission sets are exceptions to the law.

exceptions cannot override the law.`,
  `concrete example: you need to give a sales rep access to cases they don't own.

❌ WRONG approach: create a permission set with "read all cases"
→ doesn't work if OWD is private

✅ RIGHT approach: create a sharing rule that says "sales reps can read all cases"
→ works regardless of OWD

why the difference? because sharing rules are built to override OWD. permission sets are not.`,
  `the full access stack (from most to least restrictive):

1. OWD = the floor (most restrictive)
2. Role hierarchy = can loosen OWD (up the chain only)
3. Sharing rules = manual exceptions to OWD
4. Permission sets = grant additional permissions WITHIN what's allowed by OWD
5. Field security = restrict specific fields (acts as a ceiling)

memorize this order. the exam tests it constantly.`,
  `the trick question on the exam:

"admin needs to give service reps access to accounts they don't own. OWD is private. which tool?"

most people say: permission set

correct answer: sharing rule (or manual sharing)

why? because permission sets can't override the private OWD.

if you got this wrong, study the hierarchy until you dream it.

#ADM201`,
];

async function main() {
  console.log('\n📤 Posting Thread 2: Permission Sets vs OWD...\n');

  // Upload image with v1 (required for media upload)
  const imagePath = path.resolve(ROOT, 'assets/week-1-images/2-permission-sets-override.png');
  let mediaId = null;
  try {
    mediaId = await client.v1.uploadMedia(imagePath, { mimeType: 'image/png' });
    console.log(`✅ Image uploaded: ${mediaId}`);
  } catch (err) {
    console.warn(`⚠️  Image upload failed (posting text-only): ${err.message}`);
  }

  // Post tweet 1 with image
  const payload1 = { text: tweets[0] };
  if (mediaId) payload1.media = { media_ids: [mediaId] };
  const { data: t1 } = await client.v2.tweet(payload1);
  const threadId = t1.id;
  console.log(`✅ Tweet 1 posted: https://x.com/i/web/status/${threadId}`);

  // Post tweets 2–5, each replying to the previous tweet (chain)
  let replyToId = threadId;
  for (let i = 1; i < tweets.length; i++) {
    await new Promise(r => setTimeout(r, 5000));
    const { data } = await client.v2.tweet({
      text: tweets[i],
      reply: { in_reply_to_tweet_id: replyToId },
    });
    replyToId = data.id;
    console.log(`✅ Tweet ${i + 1} posted: https://x.com/i/web/status/${data.id}`);
  }

  console.log('\n🎉 Thread 2 (Permission Sets) COMPLETE!\n');
}

main().catch(err => {
  console.error('\n❌ Error:', err.message ?? err);
  if (err.data) console.error('API response:', JSON.stringify(err.data, null, 2));
  process.exit(1);
});
