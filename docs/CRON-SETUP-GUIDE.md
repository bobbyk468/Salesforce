# Cron Setup Guide — Automated Thread Posting

**Purpose:** Automatically post all 4 Week 1 threads at scheduled times using cron jobs  
**Timeline:** April 17-22, 2026  
**Script:** `scripts/post-thread-master.mjs`

---

## Overview

We have a master script (`post-thread-master.mjs`) that can post any thread by passing a parameter:

```bash
node scripts/post-thread-master.mjs 1  # Posts Thread 1
node scripts/post-thread-master.mjs 2  # Posts Thread 2
node scripts/post-thread-master.mjs 3  # Posts Thread 3
node scripts/post-thread-master.mjs 4  # Posts Thread 4
```

Now we'll schedule these to run automatically at the correct times.

---

## Option 1: Using `at` Command (Recommended for One-Time Tasks)

The `at` command schedules one-time command execution at a specific time.

### Setup

**Monday, April 17 at 9:00 AM ET:**
```bash
at 9:00 AM April 17 2026 <<EOF
cd /Users/brahmajikatragadda/Downloads/salesforce-certifications && node scripts/post-thread-master.mjs 1 >> logs/thread-1.log 2>&1
EOF
```

**Wednesday, April 19 at 9:00 AM ET:**
```bash
at 9:00 AM April 19 2026 <<EOF
cd /Users/brahmajikatragadda/Downloads/salesforce-certifications && node scripts/post-thread-master.mjs 2 >> logs/thread-2.log 2>&1
EOF
```

**Friday, April 21 at 9:00 AM ET:**
```bash
at 9:00 AM April 21 2026 <<EOF
cd /Users/brahmajikatragadda/Downloads/salesforce-certifications && node scripts/post-thread-master.mjs 3 >> logs/thread-3.log 2>&1
EOF
```

**Saturday, April 22 at 9:00 AM ET:**
```bash
at 9:00 AM April 22 2026 <<EOF
cd /Users/brahmajikatragadda/Downloads/salesforce-certifications && node scripts/post-thread-master.mjs 4 >> logs/thread-4.log 2>&1
EOF
```

### Verify Jobs Are Scheduled

```bash
atq  # Shows all scheduled jobs
```

### View Scheduled Jobs

```bash
at -l  # List all scheduled jobs
```

---

## Option 2: Using launchd (macOS Native)

Create plist files for macOS to schedule the tasks.

### Create Thread 1 Plist

Create file: `~/Library/LaunchAgents/com.trailblazeprep.thread1.plist`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.trailblazeprep.thread1</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/local/bin/node</string>
        <string>/Users/brahmajikatragadda/Downloads/salesforce-certifications/scripts/post-thread-master.mjs</string>
        <string>1</string>
    </array>
    <key>StartCalendarInterval</key>
    <dict>
        <key>Month</key>
        <integer>4</integer>
        <key>Day</key>
        <integer>17</integer>
        <key>Hour</key>
        <integer>9</integer>
        <key>Minute</key>
        <integer>0</integer>
    </dict>
    <key>StandardOutPath</key>
    <string>/Users/brahmajikatragadda/Downloads/salesforce-certifications/logs/thread-1.log</string>
    <key>StandardErrorPath</key>
    <string>/Users/brahmajikatragadda/Downloads/salesforce-certifications/logs/thread-1-error.log</string>
</dict>
</plist>
```

### Load the Job

```bash
launchctl load ~/Library/LaunchAgents/com.trailblazeprep.thread1.plist
```

### Verify

```bash
launchctl list | grep trailblazeprep
```

---

## Option 3: Using Node.js Scheduler (Most Reliable)

Use the `node-schedule` library for precise scheduling within Node.js.

### Install Dependency

```bash
npm install node-schedule
```

### Create Scheduler Script

Create: `scripts/scheduler.mjs`

```javascript
import schedule from 'node-schedule';
import { spawn } from 'child_process';

// Schedule Thread 1: Monday, April 17 at 9:00 AM ET
schedule.scheduleJob('0 9 17 4 *', () => {
  console.log('🚀 Posting Thread 1...');
  spawn('node', ['scripts/post-thread-master.mjs', '1']);
});

// Schedule Thread 2: Wednesday, April 19 at 9:00 AM ET
schedule.scheduleJob('0 9 19 4 *', () => {
  console.log('🚀 Posting Thread 2...');
  spawn('node', ['scripts/post-thread-master.mjs', '2']);
});

// Schedule Thread 3: Friday, April 21 at 9:00 AM ET
schedule.scheduleJob('0 9 21 4 *', () => {
  console.log('🚀 Posting Thread 3...');
  spawn('node', ['scripts/post-thread-master.mjs', '3']);
});

// Schedule Thread 4: Saturday, April 22 at 9:00 AM ET
schedule.scheduleJob('0 9 22 4 *', () => {
  console.log('🚀 Posting Thread 4...');
  spawn('node', ['scripts/post-thread-master.mjs', '4']);
});

console.log('✅ Scheduler running. Threads scheduled for Week 1.');
```

### Run the Scheduler

```bash
node scripts/scheduler.mjs
```

Keep this process running (use `tmux` or `nohup`):

```bash
nohup node scripts/scheduler.mjs > logs/scheduler.log 2>&1 &
```

---

## Quick Setup Commands (Copy & Paste)

### Create logs directory
```bash
mkdir -p /Users/brahmajikatragadda/Downloads/salesforce-certifications/logs
```

### Schedule all 4 threads using `at` command

Copy and paste this entire block into terminal:

```bash
cd /Users/brahmajikatragadda/Downloads/salesforce-certifications

# Thread 1: Monday, April 17 at 9:00 AM
at 9:00 AM April 17 2026 <<'EOF'
cd /Users/brahmajikatragadda/Downloads/salesforce-certifications && node scripts/post-thread-master.mjs 1 >> logs/thread-1.log 2>&1
EOF

# Thread 2: Wednesday, April 19 at 9:00 AM
at 9:00 AM April 19 2026 <<'EOF'
cd /Users/brahmajikatragadda/Downloads/salesforce-certifications && node scripts/post-thread-master.mjs 2 >> logs/thread-2.log 2>&1
EOF

# Thread 3: Friday, April 21 at 9:00 AM
at 9:00 AM April 21 2026 <<'EOF'
cd /Users/brahmajikatragadda/Downloads/salesforce-certifications && node scripts/post-thread-master.mjs 3 >> logs/thread-3.log 2>&1
EOF

# Thread 4: Saturday, April 22 at 9:00 AM
at 9:00 AM April 22 2026 <<'EOF'
cd /Users/brahmajikatragadda/Downloads/salesforce-certifications && node scripts/post-thread-master.mjs 4 >> logs/thread-4.log 2>&1
EOF

echo "✅ All 4 threads scheduled!"
atq  # Verify
```

---

## Verify Scheduled Jobs

```bash
# View all scheduled jobs
atq

# View specific job details
at -c <job_id>

# View logs after posting
tail -f logs/thread-1.log
tail -f logs/thread-2.log
tail -f logs/thread-3.log
tail -f logs/thread-4.log
```

---

## Cancel a Job (if needed)

```bash
# Remove job by ID
atrm <job_id>

# Example
atrm 1  # Removes job 1
```

---

## Recommended: Option 1 (`at` command)

**Why:**
- Simple, built-in to macOS/Linux
- Reliable for one-time scheduling
- No additional dependencies
- Easy to verify and manage

**Steps:**
1. Create logs directory
2. Copy/paste the quick setup commands
3. Verify with `atq`
4. Done!

---

## Troubleshooting

### "at: not available" error
- The `at` daemon might not be running
- Start it: `sudo launchctl start com.apple.atd`
- Or use Option 2 (launchd) instead

### Jobs not running
- Check logs: `ls -la logs/`
- Verify syntax: `at -l`
- Ensure Node.js path is correct: `which node`

### Need to reschedule
1. Cancel old job: `atrm <job_id>`
2. Schedule new job with updated time
3. Verify: `atq`

---

## Post-Execution

After threads post:
1. Check logs: `cat logs/thread-*.log`
2. Verify tweets on @trailblazeprep timeline
3. Start replying to comments immediately
4. Track metrics using X-ENGAGEMENT-TRACKER.md

---

## Next Steps

**Which scheduling option would you prefer:**

1. **`at` command** (simplest, recommended)
2. **launchd** (macOS native)
3. **node-schedule** (most flexible)

Once you choose, I'll run the setup for you!
