# X (Twitter) API Credentials Setup Guide

**Status:** ✅ Configured (Ready to test once credentials are valid)  
**Last Updated:** April 16, 2026

---

## Current Setup

### ✅ What's Configured

**Cron Jobs (Running):**
```
✅ Every 30 minutes  → Post scheduled threads (main content)
✅ Every 2 hours     → Post tips (replies to threads)
✅ Every hour (:15)  → Post engagement (replies)
```

**Credentials Storage:**
```
Location: .env.local (root directory)
Security: ✅ Added to .gitignore (never committed to git)
Usage: Scripts read from .env.local at runtime
```

**Content Queues:**
```
Main threads: ~500 posts ready
Tips: 605 tips ready to post
Engagement: Configured and queued
```

---

## Current Credentials (Set)

Your X API credentials are now configured in `.env.local`:

```
X_API_KEY=[set]
X_API_SECRET=[set]
X_BEARER_TOKEN=[set]
X_ACCESS_TOKEN=[set]
X_ACCESS_TOKEN_SECRET=[set]
```

**Status:** Currently testing (401 errors indicate expired/invalid tokens)

---

## How to Update Credentials

When you have fresh credentials from Twitter Developer, follow these steps:

### Step 1: Get New Credentials from Twitter Developer Portal

1. Go to: https://developer.twitter.com/en/portal/dashboard
2. Select your app
3. Navigate to **"Keys and tokens"** tab
4. Generate/copy the following:
   - **API Key** (aka Consumer Key) → `X_API_KEY`
   - **API Secret Key** (aka Consumer Secret) → `X_API_SECRET`
   - **Bearer Token** → `X_BEARER_TOKEN`
   - **Access Token** → `X_ACCESS_TOKEN`
   - **Access Token Secret** → `X_ACCESS_TOKEN_SECRET`

### Step 2: Update .env.local

Edit `.env.local` in the root directory:

```bash
# X (Twitter) API
X_API_KEY=your-new-api-key-here
X_API_SECRET=your-new-api-secret-here
X_BEARER_TOKEN=your-new-bearer-token-here
X_ACCESS_TOKEN=your-new-access-token-here
X_ACCESS_TOKEN_SECRET=your-new-access-token-secret-here
```

**Important:** 
- ⚠️ **NEVER** commit `.env.local` to git
- ⚠️ **NEVER** paste credentials in chat/logs
- ✅ Keep `.env.local` in `.gitignore` (already done)

### Step 3: Test Credentials

Run the API test script:

```bash
npm run x:test
# or
node scripts/test-x-api.mjs
```

Expected output if credentials are valid:
```
✅ Authentication successful
   Account: @your-handle
   Name: Your Name

✅ Can read timeline
✅ Bearer token valid
```

### Step 4: Verify Permissions

Make sure your X API app has:
- [x] **Read and Write** permissions (not Read-Only)
- [x] **Twitter API v2** access enabled
- [x] Access to: `tweet.write`, `tweet.read`, `users.read`, `follows.write`

Check in Developer Portal:
1. App → Settings → Permissions
2. Confirm "Read and Write" is selected
3. Save if changed

### Step 5: Restart Cron Jobs

Once credentials are updated and tested:

```bash
# Manually test the first post
npm run x:schedule

# If successful, jobs will continue automatically:
# - Every 30 min: main threads
# - Every 2 hours: tips
# - Every hour: engagement
```

---

## Troubleshooting

### Issue: 401 Unauthorized

**Cause:** Credentials are invalid, expired, or mismatched

**Fix:**
1. Regenerate tokens in Twitter Developer Portal
2. Update `.env.local` with fresh credentials
3. Test with `npm run x:test`

### Issue: 403 Forbidden (tips/replies failing)

**Cause:** API app doesn't have Write permissions for replies

**Fix:**
1. Go to Developer Portal
2. App → Settings → Permissions
3. Change to **"Read and Write"**
4. Regenerate Access Token
5. Update `.env.local`

### Issue: No posts showing up

**Cause:** Could be any of:
- Invalid credentials (401)
- Missing permissions (403)
- No queued content
- Cron job not running

**Check:**
```bash
# View logs
tail -100 /tmp/x-poster.log    # Main threads
tail -100 /tmp/x-tips.log      # Tips
tail -100 /tmp/x-engage.log    # Engagement

# Check cron jobs
crontab -l | grep post-to-x

# Verify .env.local exists
ls -la .env.local
```

---

## Security Best Practices

### ✅ DO:
- [x] Store credentials in `.env.local` (local machine only)
- [x] Use environment variables in production (GitHub Secrets, etc.)
- [x] Regenerate tokens if exposed
- [x] Keep `.gitignore` updated with `.env*.local`
- [x] Rotate credentials periodically

### ❌ DON'T:
- [ ] Commit `.env.local` to git
- [ ] Share credentials in chat/logs
- [ ] Use same credentials across machines
- [ ] Leave tokens in public repositories
- [ ] Paste credentials in error messages

---

## Production Deployment (Vercel/Server)

For Vercel or server deployments, set environment variables instead:

**Option 1: GitHub Secrets (Recommended)**
1. Go to: GitHub Repo → Settings → Secrets and variables → Actions
2. Add each credential as a secret:
   - `X_API_KEY`
   - `X_API_SECRET`
   - `X_BEARER_TOKEN`
   - `X_ACCESS_TOKEN`
   - `X_ACCESS_TOKEN_SECRET`
3. Vercel will automatically detect and use them

**Option 2: Vercel Environment Variables**
1. Go to: Vercel Dashboard → Settings → Environment Variables
2. Add credentials there
3. Set to both Production and Preview environments

**Option 3: Server Environment Variables**
```bash
# On server, add to ~/.bashrc or deployment script
export X_API_KEY="your-key"
export X_API_SECRET="your-secret"
# etc.

# Or add to cron job:
0 */2 * * * X_API_KEY=xxx X_API_SECRET=yyy node /path/to/post-to-x.mjs
```

---

## Credential Format Reference

### API Key & Secret
- **Format:** Mixed alphanumeric (no spaces)
- **Example:** `NW43cjR1Z0NpQnJzUWNXSEhXVHM6MTpjaQ`
- **Where:** Twitter Developer → Keys and tokens → API Key

### Access Token
- **Format:** Numeric ID-hash
- **Example:** `1870642403532795904-9GB5izDCMpOTLQx7FmhTPxcwCKlcf9`
- **Where:** Twitter Developer → Access Tokens

### Bearer Token
- **Format:** Long base64-like string with `%2B` and `%3D` (URL encoded)
- **Example:** `AAAAAAAAAAAAAAAAAAAAAJLP8QEAAAAADNcXaBrT4rl%2BQRc5af04dU7ukrg%3DHU7fDiprJmOc7n2Pm57jKNsszZ8Qn0cK6ID6klmY0BOoxb4gBC`
- **Where:** Twitter Developer → Bearer Token (keep URL encoding as-is)

---

## Queue Status

### Content Ready to Post

```
Main Threads:     ~500 posts (quiz, study guides, tips compilations)
Tips:             605 tips (exam-specific advice)
Engagement:       Configured (replies, follow-ups)
```

### Posting Schedule Once Active

**Every 30 minutes:** 1 main thread
- Quiz questions
- Study guides
- Thread compilations
- Release announcements

**Every 2 hours:** 1-3 tip posts
- Subject-specific tips
- Exam strategy advice
- Common mistakes
- Replies to threads

**Every hour:** Engagement posts
- Replies to trending topics
- Responses to comments
- Community engagement

---

## Next Steps

1. **Get fresh credentials** from Twitter Developer
2. **Update `.env.local`** with new values
3. **Test with:** `node scripts/test-x-api.mjs`
4. **Verify permissions** in Developer Portal (Read and Write)
5. **Run manual test:** `npm run x:schedule`
6. **Monitor logs:** `tail -f /tmp/x-poster.log`
7. **Track posting success** via logs and X account

---

## Support & Debugging

### Check Posting Status
```bash
# Monitor in real-time
tail -f /tmp/x-poster.log

# Check specific posts
grep "Posted:" /tmp/x-poster.log | tail -10

# Check errors
grep "Error:" /tmp/x-poster.log
```

### Manual Testing
```bash
# Test authentication
node scripts/test-x-api.mjs

# Post one thread manually
npm run x:schedule

# Post one tip manually
npm run x:tip

# Post engagement
npm run x:engage
```

### View Queue Status
```bash
# How many threads are queued?
jq length scripts/x-content-queue.json

# How many tips are queued?
jq length scripts/x-tips-queue.json

# Check next item
jq '.[0]' scripts/x-content-queue.json
```

---

**Document Status:** ✅ Setup Complete & Ready to Test  
**Credentials:** ✅ Configured in `.env.local`  
**Cron Jobs:** ✅ Running and waiting for valid credentials  
**Next:** Update credentials and test posting
