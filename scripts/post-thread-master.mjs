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

// Thread data
const threads = {
  1: {
    image: 'assets/week-1-images/1-owd-hierarchy.png',
    tweets: [
      `most people think access control is one thing. it's not.\n\nOWD, sharing rules, and permission sets are three different layers. confusing them is why 60% of admins fail ADM-201.\n\nhere's the actual hierarchy:\n\n🧵`,
      `layer 1: organization-wide defaults (OWD)\n\nOWD sets the FLOOR. it's the most restrictive setting. if OWD says "private", nobody can see the record unless something else grants access.\n\nyou CANNOT use permission sets or anything else to override this. it's the foundation.\n\nexample: opportunity OWD = private → reps can't see ANY opportunities unless...`,
      `layer 2: role hierarchy + sharing rules\n\nrole hierarchy: managers see subordinates' records (one direction only, up the chain)\n\nsharing rules: "let all users in the sales role see all accounts" without changing OWD\n\nkey difference: sharing rules are MANUAL exceptions. OWD is the DEFAULT.\n\nif OWD is private, you NEED a sharing rule to grant access. permission sets alone won't work.`,
      `layer 3: permission sets\n\npermission sets ADD access on top of what OWD allows.\n\nthey CANNOT restrict. they CANNOT override.\n\nexample:\n- OWD = public read only\n- perm set = "edit on accounts"\n- result: user can edit accounts (perm set opened it)\n\nbut if:\n- OWD = private\n- perm set = "edit on accounts"\n- result: user still can't see accounts (OWD blocks it, perm set can't override)`,
      `the mistake everyone makes:\n\n"just give them a permission set that says 'read all accounts'"\n\nWRONG. if OWD is private, that perm set does nothing.\n\nRIGHT: loosen OWD OR create a sharing rule OR both.\n\nthis one concept separates 70% scores from 85%+ scores on ADM-201.\n\nsave this.\n\n#ADM201 #SalesforceExam`
    ]
  },
  2: {
    image: 'assets/week-1-images/2-permission-sets-override.png',
    tweets: [
      `myth: permission sets control access.\n\nreality: permission sets are slaves to OWD.\n\nif you believe differently, you're about to fail an exam question. here's why this matters:\n\n🧵`,
      `the mental model most people have:\n\npermission set = "the thing that lets people access stuff"\n\nthe actual mental model:\n\npermission set = "the thing that lets people access stuff THAT OWD ALREADY ALLOWED"\n\nOWD is the law. permission sets are exceptions to the law.\n\nexceptions cannot override the law.`,
      `concrete example: you need to give a sales rep access to cases they don't own.\n\n❌ WRONG approach: create a permission set with "read all cases"\n→ doesn't work if OWD is private\n\n✅ RIGHT approach: create a sharing rule that says "sales reps can read all cases"\n→ works regardless of OWD\n\nwhy the difference? because sharing rules are built to override OWD. permission sets are not.`,
      `the full access stack (from most to least restrictive):\n\n1. OWD = the floor (most restrictive)\n2. Role hierarchy = can loosen OWD (up the chain only)\n3. Sharing rules = manual exceptions to OWD\n4. Permission sets = grant additional permissions WITHIN what's allowed by OWD\n5. Field security = restrict specific fields (acts as a ceiling)\n\nmemorize this order. the exam tests it constantly.`,
      `the trick question on the exam:\n\n"admin needs to give service reps access to accounts they don't own. OWD is private. which tool?"\n\nmost people say: permission set\n\ncorrect answer: sharing rule (or manual sharing)\n\nwhy? because permission sets can't override the private OWD.\n\nif you got this wrong, study the hierarchy until you dream it.\n\n#ADM201`
    ]
  },
  3: {
    image: 'assets/week-1-images/3-omnichannel-vs-assignment.png',
    tweets: [
      `everyone studying ADM-201 confuses these two tools.\n\nomni-channel and case assignment rules solve the same problem but in opposite ways.\n\nif you don't know the difference, you will get this question wrong on the exam.\n\nhere's the breakdown:\n\n🧵`,
      `case assignment rules: ADMIN controls everything\n\nhow it works: case arrives → rule fires → admin-defined logic routes it\n\nwho controls it: admin changes rules in setup\n\nwhen to use: you have predictable, static routing logic (all cases from company X go to team Y)\n\nconstraint: every time you want different logic, admin has to go into setup and change the rule`,
      `omni-channel: SUPERVISOR controls capacity in real-time\n\nhow it works: cases arrive in a queue → supervisors manage their own queue → they pull cases as they have capacity\n\nwho controls it: supervisors, not admins\n\nwhen to use: you need flexibility. supervisors should manage their own workload without admin changes.\n\nconstraint: you need queues and proper setup, but once it's done, supervisors own it`,
      `the key difference (memorize this):\n\ncase assignment rules = PUSH (admin pushes cases to reps based on rules)\n\nomni-channel = PULL (supervisors pull cases from a queue based on capacity)\n\nexample:\n- assignment rule: "all billing cases go to the billing team"\n- omni-channel: "billing supervisors see a queue of billing cases and pull them when they have time"\n\nopposite models.`,
      `the exam will ask:\n\n"supervisors need to manage their own queue capacity in real-time without admin help every time. which tool?"\n\nanswer: omni-channel\n\n"cases need to route based on static logic defined by the admin. which tool?"\n\nanswer: case assignment rules\n\nif you can distinguish between "admin-controlled" vs "supervisor-controlled", you pass this question every time.\n\nsave this.\n\n#ADM201`
    ]
  },
  4: {
    image: 'assets/week-1-images/4-multi-agent-orchestration.png',
    tweets: [
      `everyone's hyped about agentforce. "agents orchestrate together and solve everything"\n\nreality: multi-agent orchestration has three gotchas that kill most implementations.\n\nhere's what you actually need to know for the agentforce specialist exam:\n\n🧵`,
      `gotcha 1: agent B doesn't automatically inherit agent A's context\n\nwhen you hand off from agent A to agent B, you have to EXPLICITLY pass the variables you want B to see.\n\nif you don't, agent B starts blind. it has no idea what A was working on.\n\nthis is why most multi-agent implementations have silent failures. developers assume context carries over. it doesn't.`,
      `gotcha 2: you cannot orchestrate agents from a flow\n\ncommon mistake: "let's use a flow to call agents A, B, and C in sequence"\n\nreality: agent A can CALL a flow. but flows cannot CALL agents. it's one-way.\n\nthis constraint reshapes your whole architecture. if you need agent-to-agent orchestration, you do it with handoff actions, not flows.`,
      `gotcha 3: orchestration context is transient\n\nonce agent A hands off to agent B, agent A can't see what B is doing.\n\nthey're isolated after the handoff. if A needs to know B's results, you have to explicitly report back at the end.\n\nthis kills designs where agent A is supposed to monitor agent B's progress in real-time.`,
      `so what does work?\n\nagent A → passes variables explicitly → hands off to agent B\n\nagent B does work → executes final action to report results back\n\nagent A receives results and decides next steps\n\nthis is orchestration. it's deliberate, it's explicit, and it requires understanding the constraints.\n\nif you design without these guardrails, you will build something that fails in production.\n\nbookmark this for the exam.\n\n#Agentforce #Spring26`
    ]
  }
};

async function postThread(threadNumber) {
  try {
    const thread = threads[threadNumber];
    if (!thread) {
      console.error(`❌ Thread ${threadNumber} not found`);
      process.exit(1);
    }

    console.log(`\n📤 Posting Thread ${threadNumber}...\n`);

    // Upload image
    const imagePath = path.resolve(thread.image);
    if (!fs.existsSync(imagePath)) {
      console.error(`❌ Image not found: ${imagePath}`);
      process.exit(1);
    }

    const imageBuffer = fs.readFileSync(imagePath);
    const mediaResponse = await rwClient.v2.uploadMedia(imageBuffer, {
      mimeType: 'image/png',
    });

    const mediaId = mediaResponse;
    console.log(`✅ Image uploaded\n`);

    // Post first tweet with image
    const firstTweet = await rwClient.v2.tweet(thread.tweets[0], {
      media: { media_ids: [mediaId.toString()] }
    });

    const threadId = firstTweet.data.id;
    console.log(`✅ Tweet 1 posted`);

    // Post remaining tweets as thread replies
    for (let i = 1; i < thread.tweets.length; i++) {
      await rwClient.v2.tweet(thread.tweets[i], {
        reply: { in_reply_to_tweet_id: threadId }
      });
      console.log(`✅ Tweet ${i + 1} posted`);
    }

    console.log(`\n🎉 Thread ${threadNumber} COMPLETE!\n`);

  } catch (error) {
    console.error(`\n❌ Error posting thread ${threadNumber}:`, error.message);
    process.exit(1);
  }
}

// Get thread number from command line argument
const threadNumber = parseInt(process.argv[2]);
if (!threadNumber || threadNumber < 1 || threadNumber > 4) {
  console.error('Usage: node post-thread-master.mjs <1-4>');
  process.exit(1);
}

postThread(threadNumber);
