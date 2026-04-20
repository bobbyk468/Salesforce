import { TwitterApi } from 'twitter-api-v2';

const credentials = {
  appKey: 'kKTeJIxSwldIhVTwB2Jmf3AjY',
  appSecret: '5xk2rtOI9HLxwtsTPTbDgV7cSaMqLNubYTJbwy6vR077A0J9Uv',
  accessToken: '1870642403532795904-BZeEUwNZfSvcp5GHn72juT5hnhVNXh',
  accessSecret: 'Jw7dTsG4urE5ycUWw7iXZcoeq811W5mi2KSrRtmQQBuMK',
};

const client = new TwitterApi(credentials);

async function analyzeEngagement() {
  try {
    console.log('\n📊 ANALYZING X ENGAGEMENT PERFORMANCE\n');
    console.log('Fetching your recent tweets with engagement metrics...\n');
    
    // Get user info
    const me = await client.v2.me();
    const userId = me.data.id;
    
    // Fetch recent tweets with metrics
    const response = await client.v2.userTimeline(userId, {
      max_results: 100,
      'tweet.fields': 'created_at,public_metrics,author_id',
    });
    
    const tweets = response.data;
    
    if (!tweets || tweets.length === 0) {
      console.log('📭 No tweets found in recent history\n');
      console.log('Your first test tweets were just posted!');
      console.log('Engagement analysis will be available after you have more tweets.\n');
      return;
    }
    
    console.log(`Found ${tweets.length} recent tweets\n`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    
    // Analyze each tweet
    let totalLikes = 0;
    let totalRetweets = 0;
    let totalReplies = 0;
    let highEngagement = [];
    let lowEngagement = [];
    
    tweets.forEach((tweet) => {
      const metrics = tweet.public_metrics;
      const engagement = metrics.like_count + metrics.retweet_count + metrics.reply_count;
      const text = tweet.text.substring(0, 60) + (tweet.text.length > 60 ? '...' : '');
      
      totalLikes += metrics.like_count;
      totalRetweets += metrics.retweet_count;
      totalReplies += metrics.reply_count;
      
      if (engagement > 5) {
        highEngagement.push({
          text: text,
          likes: metrics.like_count,
          retweets: metrics.retweet_count,
          replies: metrics.reply_count,
          engagement: engagement
        });
      } else if (engagement === 0) {
        lowEngagement.push({
          text: text,
          engagement: engagement
        });
      }
    });
    
    // Calculate averages
    const avgEngagement = (totalLikes + totalRetweets + totalReplies) / tweets.length;
    
    console.log('📈 OVERALL METRICS\n');
    console.log(`Total tweets: ${tweets.length}`);
    console.log(`Total likes: ${totalLikes}`);
    console.log(`Total retweets: ${totalRetweets}`);
    console.log(`Total replies: ${totalReplies}`);
    console.log(`Average engagement per tweet: ${avgEngagement.toFixed(1)}\n`);
    
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    
    if (lowEngagement.length > 0) {
      console.log(`⚠️  ${lowEngagement.length} tweets with ZERO engagement\n`);
      console.log('This indicates:');
      console.log('❌ Low follower reach');
      console.log('❌ Content not matching audience interests');
      console.log('❌ Poor posting time (not when audience is active)');
      console.log('❌ No engagement strategy (not replying/engaging back)\n');
    }
    
  } catch (error) {
    console.error('❌ Error analyzing engagement:');
    console.error(`   ${error.message}\n`);
  }
}

analyzeEngagement();
