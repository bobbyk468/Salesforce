import { TwitterApi } from 'twitter-api-v2';

const credentials = {
  appKey: 'kKTeJIxSwldIhVTwB2Jmf3AjY',
  appSecret: '5xk2rtOI9HLxwtsTPTbDgV7cSaMqLNubYTJbwy6vR077A0J9Uv',
  accessToken: '1870642403532795904-9GB5izDCMpOTLQx7FmhTPxcwCKlcf9',
  accessSecret: 'nMCqEY5JRD1S1660AdpPuysvkBQXGKi3q5FFAMHl0399Z',
};

const client = new TwitterApi(credentials);

async function testAPI() {
  try {
    console.log('\n🔍 Testing X API with fresh credentials...\n');
    
    // Test 1: Verify credentials
    console.log('📝 Test 1: Authentication');
    const user = await client.v2.me();
    console.log('✅ Authentication successful!');
    console.log(`   Account: @${user.data.username}`);
    console.log(`   Name: ${user.data.name}\n`);
    
    // Test 2: Check timeline
    console.log('📝 Test 2: Timeline Access');
    const tweets = await client.v2.userTimeline(user.data.id, { max_results: 5 });
    console.log(`✅ Can read timeline (${tweets.data?.length || 0} recent tweets)\n`);
    
    // Test 3: Test posting
    console.log('📝 Test 3: Posting Capability');
    const testTweet = await client.v2.tweet('🧪 Testing X API integration with TrailblazePrep automation scripts. This is a test post to verify posting permissions.');
    console.log('✅ Tweet posting successful!');
    console.log(`   Tweet URL: https://x.com/i/web/status/${testTweet.data.id}\n`);
    
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('✅ ALL TESTS PASSED!');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    console.log('Status: Ready for automated posting');
    console.log('Credentials: ✅ Valid');
    console.log('Permissions: ✅ Read & Write');
    console.log('Tips posting: ✅ Should work');
    console.log('Threads posting: ✅ Should work\n');
    
    process.exit(0);
    
  } catch (error) {
    console.error('\n❌ API Test Failed:');
    console.error(`   Error: ${error.message}`);
    console.error(`   Code: ${error.code}\n`);
    if (error.data) {
      console.error(`   Details: ${JSON.stringify(error.data)}\n`);
    }
    process.exit(1);
  }
}

testAPI();
