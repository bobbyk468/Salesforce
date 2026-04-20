import { TwitterApi } from 'twitter-api-v2';

const credentials = {
  appKey: 'kKTeJIxSwldIhVTwB2Jmf3AjY',
  appSecret: '5xk2rtOI9HLxwtsTPTbDgV7cSaMqLNubYTJbwy6vR077A0J9Uv',
  accessToken: '1870642403532795904-BZeEUwNZfSvcp5GHn72juT5hnhVNXh',
  accessSecret: 'Jw7dTsG4urE5ycUWw7iXZcoeq811W5mi2KSrRtmQQBuMK',
};

const client = new TwitterApi(credentials);

async function debug() {
  try {
    const me = await client.v2.me();
    console.log('\n✅ User:', me.data.username);
    
    const response = await client.v2.userTimeline(me.data.id, {
      max_results: 10,
      'tweet.fields': 'created_at,public_metrics',
    });
    
    console.log('\n📋 Response structure:');
    console.log('Keys:', Object.keys(response));
    console.log('Data type:', typeof response.data);
    console.log('Data:', response.data);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

debug();
