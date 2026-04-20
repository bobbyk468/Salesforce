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

async function testSVGUpload() {
  try {
    console.log('🧪 TESTING SVG IMAGE UPLOAD TO X\n');
    console.log('━'.repeat(60));

    // Read SVG file
    const svgPath = path.resolve('assets/week-1-images/1-owd-hierarchy.svg');
    console.log(`📁 SVG File: ${svgPath}`);

    if (!fs.existsSync(svgPath)) {
      console.error(`❌ SVG file not found at: ${svgPath}`);
      process.exit(1);
    }

    const svgBuffer = fs.readFileSync(svgPath);
    console.log(`📊 File size: ${(svgBuffer.length / 1024).toFixed(2)} KB\n`);

    console.log('📤 Attempting to upload SVG to X API...\n');

    // Try to upload media
    let mediaId;
    try {
      const mediaResponse = await rwClient.v2.uploadMedia(svgBuffer, {
        mimeType: 'image/svg+xml',
      });

      mediaId = mediaResponse;
      console.log(`✅ SVG UPLOAD SUCCESSFUL!`);
      console.log(`   Media ID: ${mediaId}\n`);

    } catch (uploadError) {
      console.log(`❌ SVG UPLOAD FAILED`);
      console.log(`   Error: ${uploadError.message}\n`);

      if (uploadError.data) {
        console.log(`   Details:`, JSON.stringify(uploadError.data, null, 2));
      }

      console.log('\n' + '━'.repeat(60));
      console.log('🎯 CONCLUSION: X API does NOT accept SVG format');
      console.log('━'.repeat(60));
      console.log('\n✅ ACTION REQUIRED: Convert SVGs to PNG using CloudConvert');
      console.log('   Time: ~5 minutes for all 4 images\n');

      process.exit(1);
    }

    // If upload succeeded, try to post test tweet
    if (mediaId) {
      console.log('📝 Posting test tweet with SVG image...\n');

      try {
        const tweetResponse = await rwClient.v2.tweet(
          'Testing SVG image format on X API. Does @trailblazeprep look good? 🧪',
          {
            media: {
              media_ids: [mediaId.toString()],
            },
          }
        );

        console.log(`✅ TEST TWEET POSTED SUCCESSFULLY!`);
        console.log(`   Tweet ID: ${tweetResponse.data.id}`);
        console.log(`   Text: ${tweetResponse.data.text}\n`);

        console.log('━'.repeat(60));
        console.log('🎉 CONCLUSION: SVG format WORKS on X API!');
        console.log('━'.repeat(60));
        console.log('\n✅ NEXT STEPS:');
        console.log('   1. Use SVG files as-is for all 4 threads');
        console.log('   2. Post threads tomorrow at scheduled times');
        console.log('   3. No conversion needed!\n');

        // Delete the test tweet
        console.log('🧹 Cleaning up test tweet...');
        await rwClient.v2.deleteTweet(tweetResponse.data.id);
        console.log('✅ Test tweet deleted.\n');

      } catch (tweetError) {
        console.log(`⚠️  Tweet posting failed`);
        console.log(`   Error: ${tweetError.message}\n`);

        if (tweetError.data) {
          console.log(`   Details:`, JSON.stringify(tweetError.data, null, 2));
        }
      }
    }

  } catch (error) {
    console.error('💥 Unexpected error:', error.message);
    if (error.data) {
      console.error('Details:', JSON.stringify(error.data, null, 2));
    }
    process.exit(1);
  }
}

testSVGUpload();
