# Week 1 Deep-Dive Thread Scripts — Ready to Post

**Status:** Copy/paste directly to X. Images specified for each thread start.

---

## Thread 1: OWD vs Sharing vs Permission Sets (Monday, April 17 at 9:00 AM ET)

**Image for Tweet 1:** Hierarchy pyramid diagram (OWD at base → Sharing rules → Perm Sets)

**Tweet 1 (Thread Start):**
```
most people think access control is one thing. it's not.

OWD, sharing rules, and permission sets are three different layers. confusing them is why 60% of admins fail ADM-201.

here's the actual hierarchy:

🧵
```

**Tweet 2:**
```
layer 1: organization-wide defaults (OWD)

OWD sets the FLOOR. it's the most restrictive setting. if OWD says "private", nobody can see the record unless something else grants access.

you CANNOT use permission sets or anything else to override this. it's the foundation.

example: opportunity OWD = private → reps can't see ANY opportunities unless...
```

**Tweet 3:**
```
layer 2: role hierarchy + sharing rules

role hierarchy: managers see subordinates' records (one direction only, up the chain)

sharing rules: "let all users in the sales role see all accounts" without changing OWD

key difference: sharing rules are MANUAL exceptions. OWD is the DEFAULT.

if OWD is private, you NEED a sharing rule to grant access. permission sets alone won't work.
```

**Tweet 4:**
```
layer 3: permission sets

permission sets ADD access on top of what OWD allows.

they CANNOT restrict. they CANNOT override.

example:
- OWD = public read only
- perm set = "edit on accounts"
- result: user can edit accounts (perm set opened it)

but if:
- OWD = private
- perm set = "edit on accounts"
- result: user still can't see accounts (OWD blocks it, perm set can't override)
```

**Tweet 5:**
```
the mistake everyone makes:

"just give them a permission set that says 'read all accounts'"

WRONG. if OWD is private, that perm set does nothing.

RIGHT: loosen OWD OR create a sharing rule OR both.

this one concept separates 70% scores from 85%+ scores on ADM-201.

save this.

#ADM201 #SalesforceAdmin
```

---

## Thread 2: Permission Sets Can't Override OWD (Wednesday, April 19 at 9:00 AM ET)

**Image for Tweet 1:** Red X diagram showing "Permission Set ❌ Override OWD"

**Tweet 1 (Thread Start):**
```
myth: permission sets control access.

reality: permission sets are slaves to OWD.

if you believe differently, you're about to fail an exam question. here's why this matters:

🧵
```

**Tweet 2:**
```
the mental model most people have:

permission set = "the thing that lets people access stuff"

the actual mental model:

permission set = "the thing that lets people access stuff THAT OWD ALREADY ALLOWED"

OWD is the law. permission sets are exceptions to the law.

exceptions cannot override the law.
```

**Tweet 3:**
```
concrete example: you need to give a sales rep access to cases they don't own.

❌ WRONG approach: create a permission set with "read all cases"
→ doesn't work if OWD is private

✅ RIGHT approach: create a sharing rule that says "sales reps can read all cases"
→ works regardless of OWD

why the difference? because sharing rules are built to override OWD. permission sets are not.
```

**Tweet 4:**
```
the full access stack (from most to least restrictive):

1. OWD = the floor (most restrictive)
2. Role hierarchy = can loosen OWD (up the chain only)
3. Sharing rules = manual exceptions to OWD
4. Permission sets = grant additional permissions WITHIN what's allowed by OWD
5. Field security = restrict specific fields (acts as a ceiling)

memorize this order. the exam tests it constantly.
```

**Tweet 5:**
```
the trick question on the exam:

"admin needs to give service reps access to accounts they don't own. OWD is private. which tool?"

most people say: permission set

correct answer: sharing rule (or manual sharing)

why? because permission sets can't override the private OWD.

if you got this wrong, study the hierarchy until you dream it.

#ADM201
```

---

## Thread 3: Omni-Channel vs Case Assignment Rules (Friday, April 21 at 9:00 AM ET)

**Image for Tweet 1:** Split diagram showing "Omni-Channel (supervisor-driven)" vs "Case Assignment Rules (admin-driven)"

**Tweet 1 (Thread Start):**
```
everyone studying ADM-201 confuses these two tools.

omni-channel and case assignment rules solve the same problem but in opposite ways.

if you don't know the difference, you will get this question wrong on the exam.

here's the breakdown:

🧵
```

**Tweet 2:**
```
case assignment rules: ADMIN controls everything

how it works: case arrives → rule fires → admin-defined logic routes it

who controls it: admin changes rules in setup

when to use: you have predictable, static routing logic (all cases from company X go to team Y)

constraint: every time you want different logic, admin has to go into setup and change the rule
```

**Tweet 3:**
```
omni-channel: SUPERVISOR controls capacity in real-time

how it works: cases arrive in a queue → supervisors manage their own queue → they pull cases as they have capacity

who controls it: supervisors, not admins

when to use: you need flexibility. supervisors should manage their own workload without admin changes.

constraint: you need queues and proper setup, but once it's done, supervisors own it
```

**Tweet 4:**
```
the key difference (memorize this):

case assignment rules = PUSH (admin pushes cases to reps based on rules)

omni-channel = PULL (supervisors pull cases from a queue based on capacity)

example:
- assignment rule: "all billing cases go to the billing team"
- omni-channel: "billing supervisors see a queue of billing cases and pull them when they have time"

opposite models.
```

**Tweet 5:**
```
the exam will ask:

"supervisors need to manage their own queue capacity in real-time without admin help every time. which tool?"

answer: omni-channel

"cases need to route based on static logic defined by the admin. which tool?"

answer: case assignment rules

if you can distinguish between "admin-controlled" vs "supervisor-controlled", you pass this question every time.

save this.

#ADM201
```

---

## Thread 4: Multi-Agent Orchestration Reality (Saturday, April 22 at 9:00 AM ET)

**Image for Tweet 1:** Architecture diagram showing "Agent A → Handoff → Agent B" with context passing boxes

**Tweet 1 (Thread Start):**
```
everyone's hyped about agentforce. "agents orchestrate together and solve everything"

reality: multi-agent orchestration has three gotchas that kill most implementations.

here's what you actually need to know for the agentforce specialist exam:

🧵
```

**Tweet 2:**
```
gotcha 1: agent B doesn't automatically inherit agent A's context

when you hand off from agent A to agent B, you have to EXPLICITLY pass the variables you want B to see.

if you don't, agent B starts blind. it has no idea what A was working on.

this is why most multi-agent implementations have silent failures. developers assume context carries over. it doesn't.
```

**Tweet 3:**
```
gotcha 2: you cannot orchestrate agents from a flow

common mistake: "let's use a flow to call agents A, B, and C in sequence"

reality: agent A can CALL a flow. but flows cannot CALL agents. it's one-way.

this constraint reshapes your whole architecture. if you need agent-to-agent orchestration, you do it with handoff actions, not flows.
```

**Tweet 4:**
```
gotcha 3: orchestration context is transient

once agent A hands off to agent B, agent A can't see what B is doing.

they're isolated after the handoff. if A needs to know B's results, you have to explicitly report back at the end.

this kills designs where agent A is supposed to monitor agent B's progress in real-time.
```

**Tweet 5:**
```
so what does work?

agent A → passes variables explicitly → hands off to agent B

agent B does work → executes final action to report results back

agent A receives results and decides next steps

this is orchestration. it's deliberate, it's explicit, and it requires understanding the constraints.

if you design without these guardrails, you will build something that fails in production.

bookmark this for the exam.

#Agentforce #Spring26
```

---

## Usage Notes

### Posting Strategy
- **Thread 1 (Mon 9am):** OWD hierarchy — establishes foundational authority
- **Thread 2 (Wed 9am):** Permission Sets reality — reinforces the concept
- **Thread 3 (Fri 9am):** Omni-Channel clarity — moves into more specific scenarios
- **Thread 4 (Sat 9am):** Agentforce gotchas — positions you as Agentforce expert

### Copy/Paste Instructions
1. Open X on your phone or desktop
2. Click "Compose"
3. Copy Tweet 1 (thread start)
4. Paste into X
5. Upload the image specified
6. Click "Post"
7. Wait 10 seconds
8. Click "Reply to your own post"
9. Copy Tweet 2
10. Paste + Post
11. Repeat for Tweets 3, 4, 5
12. Add hashtags to final tweet

### Image Requirements
You need 4 images (one per thread):

| Thread | Image | Type | Notes |
|---|---|---|---|
| Thread 1 | OWD → Sharing → Perm Sets hierarchy | Pyramid/flowchart | Show restrictive to permissive |
| Thread 2 | Red X: "Permission Set ❌ Override OWD" | Diagram | Visual: can't override concept |
| Thread 3 | Split diagram: Admin (push) vs Supervisor (pull) | Comparison | Show opposite models |
| Thread 4 | Agent A → Handoff → Agent B (with context boxes) | Architecture | Show context passing + isolation |

**Create these images using:**
- Figma (free tier, best for architecture)
- Canva (fast templates, good for flowcharts)
- Google Slides (screenshot the final slide)

### Engagement Strategy for Each Thread
After posting the full thread:
1. Wait 30 minutes
2. Check for replies
3. Reply to EVERY reply (validate, add context, ask follow-up)
4. Like 5-10 relevant replies from other accounts
5. Track: replies, bookmarks, profile visits

---

## Week 1 Schedule (Complete)

**Monday, April 17**
- 9:00 AM: Thread 1 (OWD Hierarchy) — **Use this script**
- 1:00 PM: Quick Win (Study Tip: "Memorization vs. Problem-Based Learning")
- 5:00 PM: Question Hook ("What's your biggest access control confusion?")

**Tuesday, April 18**
- 9:00 AM: Deep Dive (pick one from enhanced tweets)
- 1:00 PM: Quick Win (Study Tip)
- 5:00 PM: Question Hook

**Wednesday, April 19**
- 9:00 AM: Thread 2 (Permission Sets Reality) — **Use this script**
- 1:00 PM: Quick Win (Study Tip)
- 5:00 PM: Question Hook

**Thursday, April 20**
- 9:00 AM: Deep Dive
- 1:00 PM: Quick Win
- 5:00 PM: Community/Hot Take

**Friday, April 21**
- 9:00 AM: Thread 3 (Omni-Channel vs Assignment Rules) — **Use this script**
- 1:00 PM: Quick Win
- 5:00 PM: Question Hook

**Saturday, April 22**
- 9:00 AM: Thread 4 (Multi-Agent Orchestration) — **Use this script**
- 1:00 PM: Study Tip (Agentforce-specific)

**Sunday, April 23**
- 9:00 AM: Quick Win (Spring '26 highlight)
- 5:00 PM: Week-ahead preview (community/meta post)

---

## Tone Validation Checklist

✅ **Anti-Fluff** (not Anti-AI): Each thread explains HOW things work, WHEN to use them, WHAT can go wrong. This is analytical, not dismissive.

✅ **Lowercase attitude, uppercase technical precision**: "omni-channel" (lowercase concept) but "OWD" (acronym capitalized). Sentences start lowercase when conversational ("if you got this wrong...").

✅ **Authority voice**: "here's the breakdown", "save this", "bookmark this", "the exam will ask". Positions you as someone who knows what matters.

✅ **Ecosystem-grounded**: All threads tie to either ADM-201 exam OR Agentforce Specialist exam. Not generic; specific to Salesforce.

✅ **Educational intent**: Each thread answers a question test-takers actually have. "Why do I need sharing rules if I have permission sets?" This is valuable, not engagement bait.

---

## Next Steps After Posting

1. **Monday evening (after Thread 1):** Measure which type of engagement you got most (replies vs. bookmarks vs. shares). Adjust Tuesday/Wednesday strategies accordingly.

2. **Wednesday evening:** Check if your profile conversion rate is improving. Did the OWD thread drive any profile visits → follows?

3. **Friday evening:** By now, you should see a pattern. Which threads resonated? (Replies, bookmarks, shares). Use that data to decide on Week 2 deep-dives.

4. **Sunday (Week 1 Review):** Compile metrics and send to Grok + Gemini for Week 2 guidance. Example:
   - Thread 1 (OWD): 12 replies, 18 bookmarks, 4 profile visits
   - Thread 2 (Perm Sets): 8 replies, 22 bookmarks, 3 profile visits
   - Thread 3 (Omni-Channel): 15 replies, 25 bookmarks, 6 profile visits
   - Thread 4 (Multi-Agent): 7 replies, 10 bookmarks, 2 profile visits

This data tells you: "Omni-Channel resonates most" → double down in Week 2.

---

## Ready to Post

All 4 threads are ready to copy/paste. Start with Thread 1 tomorrow at 9:00 AM ET.

After you post Thread 1 and measure Week 1 results, we'll move to **#2: LinkedIn Carousel Template** so you can scale these threads across LinkedIn in parallel.

**Questions before you post?**
