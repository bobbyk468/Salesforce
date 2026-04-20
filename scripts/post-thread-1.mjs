import { TwitterApi } from 'twitter-api-v2';
import fs from 'fs';
import path from 'path';

// Load env variables
const envPath = path.resolve('.env.local');
const envContent = fs.readFileSync(envPath, 'utf-8');
const envVars = {};
envContent.split('\n').forEach(line => {
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) envVars[match[1]] = match[2];
});

const client = new TwitterApi({
  appKey: envVars.X_API_KEY,
  appSecret: envVars.X_API_SECRET,
  accessToken: envVars.X_ACCESS_TOKEN,
  accessSecret: envVars.X_ACCESS_TOKEN_SECRET,
});

const rwClient = client.readWrite;

async function postThread1() {
  try {
    console.log('📤 Posting Thread 1: OWD Hierarchy...\n');

    // Upload image
    const imagePath = path.resolve('assets/week-1-images/1-owd-hierarchy.png');
    const imageBuffer = fs.readFileSync(imagePath);

    const mediaResponse = await rwClient.v2.uploadMedia(imageBuffer, {
      mimeType: 'image/png',
    });

    const mediaId = mediaResponse;
    console.log(`✅ Image uploaded: ${mediaId}\n`);

    // Tweet 1
    const tweet1 = await rwClient.v2.tweet(
      `most people think access control is one thing. it's not.

OWD, sharing rules, and permission sets are three different layers. confusing them is why 60% of admins fail ADM-201.

here's the actual hierarchy:

🧵`,
      { media: { media_ids: [mediaId.toString()] } }
    );

    const threadId = tweet1.data.id;
    console.log(`✅ Tweet 1 posted: ${threadId}`);

    // Tweet 2
    const tweet2 = await rwClient.v2.tweet(
      `layer 1: organization-wide defaults (OWD)

OWD sets the FLOOR. it's the most restrictive setting. if OWD says "private", nobody can see the record unless something else grants access.

you CANNOT use permission sets or anything else to override this. it's the foundation.

example: opportunity OWD = private → reps can't see ANY opportunities unless...`,
      { reply: { in_reply_to_tweet_id: threadId } }
    );

    console.log(`✅ Tweet 2 posted`);

    // Tweet 3
    const tweet3 = await rwClient.v2.tweet(
      `layer 2: role hierarchy + sharing rules

role hierarchy: managers see subordinates' records (one direction only, up the chain)

sharing rules: "let all users in the sales role see all accounts" without changing OWD

key difference: sharing rules are MANUAL exceptions. OWD is the DEFAULT.

if OWD is private, you NEED a sharing rule to grant access. permission sets alone won't work.`,
      { reply: { in_reply_to_tweet_id: threadId } }
    );

    console.log(`✅ Tweet 3 posted`);

    // Tweet 4
    const tweet4 = await rwClient.v2.tweet(
      `layer 3: permission sets

permission sets ADD access on top of what OWD allows.

they CANNOT restrict. they CANNOT override.

example:
- OWD = public read only
- perm set = "edit on accounts"
- result: user can edit accounts (perm set opened it)

but if:
- OWD = private
- perm set = "edit on accounts"
- result: user still can't see accounts (OWD blocks it, perm set can't override)`,
      { reply: { in_reply_to_tweet_id: threadId } }
    );

    console.log(`✅ Tweet 4 posted`);

    // Tweet 5
    const tweet5 = await rwClient.v2.tweet(
      `the mistake everyone makes:

"just give them a permission set that says 'read all accounts'"

WRONG. if OWD is private, that perm set does nothing.

RIGHT: loosen OWD OR create a sharing rule OR both.

this one concept separates 70% scores from 85%+ scores on ADM-201.

save this.

#ADM201 #SalesforceAdmin`,
      { reply: { in_reply_to_tweet_id: threadId } }
    );

    console.log(`✅ Tweet 5 posted`);
    console.log(`\n🎉 Thread 1 COMPLETE - OWD Hierarchy posted successfully!\n`);

  } catch (error) {
    console.error('❌ Error posting thread:', error.message);
    process.exit(1);
  }
}

postThread1();
