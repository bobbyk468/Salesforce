import { TwitterApi } from 'twitter-api-v2';

const credentials = {
  appKey: 'kKTeJIxSwldIhVTwB2Jmf3AjY',
  appSecret: '5xk2rtOI9HLxwtsTPTbDgV7cSaMqLNubYTJbwy6vR077A0J9Uv',
  accessToken: '1870642403532795904-BZeEUwNZfSvcp5GHn72juT5hnhVNXh',
  accessSecret: 'Jw7dTsG4urE5ycUWw7iXZcoeq811W5mi2KSrRtmQQBuMK',
};

const client = new TwitterApi(credentials);

async function analyze() {
  try {
    const me = await client.v2.me();
    const response = await client.v2.userTimeline(me.data.id, {
      max_results: 100,
      'tweet.fields': 'created_at,public_metrics',
    });
    
    const tweets = response.data.data;
    
    console.log('\n📊 X ENGAGEMENT ANALYSIS FOR @trailblazeprep\n');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    
    let totalLikes = 0, totalRetweets = 0, totalReplies = 0;
    const tweetAnalysis = [];
    let zeroEngagement = 0;
    let lowEngagement = 0;
    
    tweets.forEach(tweet => {
      const m = tweet.public_metrics;
      const engagement = m.like_count + m.retweet_count + m.reply_count;
      const text = tweet.text.substring(0, 70);
      
      totalLikes += m.like_count;
      totalRetweets += m.retweet_count;
      totalReplies += m.reply_count;
      
      if (engagement === 0) zeroEngagement++;
      if (engagement < 5) lowEngagement++;
      
      tweetAnalysis.push({
        text: text,
        likes: m.like_count,
        retweets: m.retweet_count,
        replies: m.reply_count,
        engagement: engagement,
        date: new Date(tweet.created_at)
      });
    });
    
    tweetAnalysis.sort((a, b) => b.engagement - a.engagement);
    
    console.log('📈 OVERALL STATS\n');
    console.log(`Tweets analyzed: ${tweets.length}`);
    console.log(`Total likes: ${totalLikes}`);
    console.log(`Total retweets: ${totalRetweets}`);
    console.log(`Total replies: ${totalReplies}`);
    console.log(`Total engagement: ${totalLikes + totalRetweets + totalReplies}`);
    console.log(`Avg per tweet: ${((totalLikes + totalRetweets + totalReplies) / tweets.length).toFixed(1)}\n`);
    
    console.log(`⚠️  PROBLEM AREAS\n`);
    console.log(`${zeroEngagement} tweets (${((zeroEngagement/tweets.length)*100).toFixed(0)}%) - ZERO engagement`);
    console.log(`${lowEngagement} tweets (${((lowEngagement/tweets.length)*100).toFixed(0)}%) - LOW engagement (<5)\n`);
    
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    
    console.log('🔥 TOP 5 PERFORMING TWEETS\n');
    tweetAnalysis.slice(0, 5).forEach((t, i) => {
      console.log(`${i+1}. "${t.text}..."`);
      console.log(`   ❤️ ${t.likes} | 🔄 ${t.retweets} | 💬 ${t.replies} = ${t.engagement} total\n`);
    });
    
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    
    console.log('❌ BOTTOM 5 PERFORMING TWEETS\n');
    tweetAnalysis.slice(-5).reverse().forEach((t, i) => {
      console.log(`${i+1}. "${t.text}..."`);
      console.log(`   Total engagement: ${t.engagement}\n`);
    });
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

analyze();
