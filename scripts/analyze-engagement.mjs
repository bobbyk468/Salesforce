import { TwitterApi } from 'twitter-api-v2';

const credentials = {
  appKey: 'kKTeJIxSwldIhVTwB2Jmf3AjY',
  appSecret: '5xk2rtOI9HLxwtsTPTbDgV7cSaMqLNubYTJbwy6vR077A0J9Uv',
  accessToken: '1870642403532795904-BZeEUwNZfSvcp5GHn72juT5hnhVNXh',
  accessSecret: 'Jw7dTsG4urE5ycUWw7iXZcoeq811W5mi2KSrRtmQQBuMK',
};

const client = new TwitterApi(credentials);
const rwClient = client.readWrite;

async function analyzeEngagement() {
  try {
    console.log('\n📊 ANALYZING X ENGAGEMENT PERFORMANCE\n');
    console.log('Fetching your recent tweets with engagement metrics...\n');
    
    // Get user info
    const me = await rwClient.v2.me();
    const userId = me.data.id;
    
    // Fetch recent tweets with metrics
    const tweets = await rwClient.v2.userTimeline(userId, {
      max_results: 100,
      'tweet.fields': 'created_at,public_metrics,author_id',
    });
    
    if (!tweets.data || tweets.data.length === 0) {
      console.log('❌ No tweets found\n');
      return;
    }
    
    console.log(`Found ${tweets.data.length} recent tweets\n`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    
    // Analyze each tweet
    let totalLikes = 0;
    let totalRetweets = 0;
    let totalReplies = 0;
    let totalImpressions = 0;
    let highEngagement = [];
    let lowEngagement = [];
    
    tweets.data.forEach((tweet, idx) => {
      const metrics = tweet.public_metrics;
      const engagement = metrics.like_count + metrics.retweet_count + metrics.reply_count;
      const text = tweet.text.substring(0, 60) + (tweet.text.length > 60 ? '...' : '');
      
      totalLikes += metrics.like_count;
      totalRetweets += metrics.retweet_count;
      totalReplies += metrics.reply_count;
      totalImpressions += metrics.impression_count || 0;
      
      if (engagement > 10) {
        highEngagement.push({
          text: text,
          likes: metrics.like_count,
          retweets: metrics.retweet_count,
          replies: metrics.reply_count,
          engagement: engagement
        });
      } else if (engagement < 2) {
        lowEngagement.push({
          text: text,
          engagement: engagement
        });
      }
    });
    
    // Calculate averages
    const avgLikes = (totalLikes / tweets.data.length).toFixed(1);
    const avgRetweets = (totalRetweets / tweets.data.length).toFixed(1);
    const avgReplies = (totalReplies / tweets.data.length).toFixed(1);
    const avgEngagement = (totalLikes + totalRetweets + totalReplies) / tweets.data.length;
    
    console.log('📈 OVERALL METRICS\n');
    console.log(`Total tweets analyzed: ${tweets.data.length}`);
    console.log(`Total likes: ${totalLikes}`);
    console.log(`Total retweets: ${totalRetweets}`);
    console.log(`Total replies: ${totalReplies}`);
    console.log(`Average likes per tweet: ${avgLikes}`);
    console.log(`Average retweets per tweet: ${avgRetweets}`);
    console.log(`Average replies per tweet: ${avgReplies}`);
    console.log(`Average total engagement: ${avgEngagement.toFixed(1)} per tweet\n`);
    
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    
    if (highEngagement.length > 0) {
      console.log(`🔥 TOP PERFORMING TWEETS (${highEngagement.length} tweets with 10+ engagement)\n`);
      highEngagement.sort((a, b) => b.engagement - a.engagement).slice(0, 5).forEach((t, i) => {
        console.log(`${i + 1}. "${t.text}"`);
        console.log(`   ❤️ ${t.likes} | 🔄 ${t.retweets} | 💬 ${t.replies} = ${t.engagement} total\n`);
      });
    }
    
    if (lowEngagement.length > 0) {
      console.log(`❌ LOW PERFORMING TWEETS (${lowEngagement.length} tweets with <2 engagement)\n`);
      console.log(`This is ${((lowEngagement.length / tweets.data.length) * 100).toFixed(0)}% of your tweets\n`);
      lowEngagement.slice(0, 5).forEach((t, i) => {
        console.log(`${i + 1}. "${t.text}" - ${t.engagement} engagement`);
      });
      console.log('');
    }
    
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    
    // Engagement rate assessment
    console.log('🎯 ENGAGEMENT ASSESSMENT\n');
    
    if (avgEngagement < 2) {
      console.log('⚠️  CRITICAL: Very low engagement (<2 per tweet)');
      console.log('   Issues likely:');
      console.log('   • Content not resonating with audience');
      console.log('   • Posting at wrong times');
      console.log('   • Low follower base or reach');
      console.log('   • Content not aligned with audience interests\n');
    } else if (avgEngagement < 5) {
      console.log('⚠️  LOW: Engagement below 5 per tweet');
      console.log('   Areas to improve:');
      console.log('   • Increase content relevance');
      console.log('   • Better headlines/hooks');
      console.log('   • More frequent posting');
      console.log('   • Engage with replies\n');
    } else if (avgEngagement < 10) {
      console.log('✅ MODERATE: Engagement 5-10 per tweet');
      console.log('   Good baseline, room for growth:');
      console.log('   • Test different content formats');
      console.log('   • Analyze top performers for patterns');
      console.log('   • Increase reply engagement\n');
    } else {
      console.log('🎉 GOOD: Engagement 10+ per tweet');
      console.log('   Keep it up! Focus on:');
      console.log('   • Replicating top-performing content');
      console.log('   • Scaling posting frequency\n');
    }
    
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    
  } catch (error) {
    console.error('❌ Error analyzing engagement:');
    console.error(`   ${error.message}\n`);
  }
}

analyzeEngagement();
