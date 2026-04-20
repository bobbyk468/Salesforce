import { TwitterApi } from 'twitter-api-v2';
import fs from 'fs';
import path from 'path';

// Load env variables from .env.local
const envPath = path.resolve('.env.local');
const envContent = fs.readFileSync(envPath, 'utf-8');
const envVars = {};

envContent.split('\n').forEach(line => {
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) {
    envVars[match[1]] = match[2];
  }
});

const client = new TwitterApi({
  appKey: envVars.X_API_KEY,
  appSecret: envVars.X_API_SECRET,
  accessToken: envVars.X_ACCESS_TOKEN,
  accessSecret: envVars.X_ACCESS_TOKEN_SECRET,
});

const rwClient = client.readWrite;

// Strategic replies to craft engagement with SalesforceDevs audience
const replyTemplates = [
  {
    id: 'adm-201-gotcha',
    pattern: /OWD|permission|sharing|security|access/i,
    replies: [
      "the biggest gotcha here: OWD sets the floor. permission sets can't override it. 80% of admins get this wrong on ADM-201. if you need to grant access that OWD blocks, you need sharing rules or account teams instead.",
      "this is exactly why understanding OWD vs Sharing vs Field Security matters. most admins use the wrong tool because they don't know which tool does what. on the exam, they test you on 'can' vs 'should' — know the difference.",
      "permission sets are additive only. can't use them to restrict. that's where field security comes in. the hierarchy is: OWD (floor) → role hierarchy → sharing → field security (ceiling). knowing this pattern solves 60% of access issues."
    ]
  },
  {
    id: 'agentforce-gotcha',
    pattern: /agent|orchestration|AI|automation|flow|process/i,
    replies: [
      "if you're building agents for Spring '26: topics and actions are different. topics classify intent. actions perform work. agent routes based on topic → action executes. miss this distinction and your agent routing fails silently.",
      "multi-agent orchestration is different from flows. agents can't call flows. flows can call agents (one way). that handoff is context-aware but transient — Agent A can't see Agent B's results after handoff. use final actions to report back instead.",
      "agent context doesn't inherit automatically. you have to pass variables through the handoff action. this kills most first attempts at multi-agent systems. build with isolation in mind from the start."
    ]
  },
  {
    id: 'general-engagement',
    pattern: /.*/, // matches everything
    replies: [
      "breaking this down: [insight]. studying for the cert? this is exactly the kind of edge case that separates 70% scores from 85%+ scores. follow for the gaps the docs won't cover.",
      "this is the real-world version of what the exam tests. the difference: exams ask 'what's the tool'. real life asks 'which tool should you use'. the first teaches facts. the second teaches judgment.",
      "most engineers miss this because it's not in the feature announcement. it's in the constraints. knowing what a tool can't do is as important as knowing what it can do."
    ]
  }
];

async function findAndReplyToSalesforceDevs() {
  try {
    console.log('🔍 Searching for recent tweets from @SalesforceDevs...\n');

    // Search for recent tweets from SalesforceDevs
    const searchResult = await rwClient.v2.search('from:SalesforceDevs -is:retweet', {
      max_results: 10,
      'tweet.fields': 'created_at,public_metrics',
      'user.fields': 'username,verified'
    });

    // Handle the Paginator response structure
    const tweets = searchResult._realData?.data || searchResult.data || [];

    if (!tweets || tweets.length === 0) {
      console.log('❌ No recent tweets found from @SalesforceDevs');
      return;
    }

    console.log(`✅ Found ${tweets.length} recent tweets from @SalesforceDevs\n`);

    // Display tweets and prepare replies
    const candidateTweets = tweets.slice(0, 5).map((tweet, idx) => {
      console.log(`\n📌 Tweet ${idx + 1}:`);
      console.log(`Text: ${tweet.text.substring(0, 100)}...`);
      console.log(`ID: ${tweet.id}`);
      console.log(`Engagement: ${tweet.public_metrics?.like_count || 0} likes, ${tweet.public_metrics?.reply_count || 0} replies\n`);
      return tweet;
    });

    // Select top 3 tweets by engagement for replies
    const topTweets = candidateTweets
      .sort((a, b) =>
        ((b.public_metrics?.like_count || 0) + (b.public_metrics?.reply_count || 0)) -
        ((a.public_metrics?.like_count || 0) + (a.public_metrics?.reply_count || 0))
      )
      .slice(0, 3);

    console.log(`\n🎯 Preparing to reply to top 3 tweets by engagement...\n`);

    // Post replies
    for (const tweet of topTweets) {
      // Find matching reply template
      const template = replyTemplates.find(t => t.pattern.test(tweet.text)) || replyTemplates[2];
      const replyText = template.replies[Math.floor(Math.random() * template.replies.length)];

      console.log(`📤 Replying to tweet: "${tweet.text.substring(0, 50)}..."`);
      console.log(`Reply: "${replyText.substring(0, 80)}..."\n`);

      try {
        const reply = await rwClient.v2.tweet(replyText, {
          reply: {
            in_reply_to_tweet_id: tweet.id
          }
        });

        console.log(`✅ Reply posted! ID: ${reply.data.id}\n`);
      } catch (error) {
        console.error(`❌ Failed to post reply: ${error.message}`);
        if (error.data) {
          console.error('Error details:', JSON.stringify(error.data, null, 2));
        }
        console.log();
      }

      // Small delay between posts
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    console.log('✨ Engagement strategy complete! You should see 3 new replies on @SalesforceDevs posts.');

  } catch (error) {
    console.error('Error during engagement:', error.message);
    if (error.data) {
      console.error('API Response:', JSON.stringify(error.data, null, 2));
    }
  }
}

findAndReplyToSalesforceDevs();
