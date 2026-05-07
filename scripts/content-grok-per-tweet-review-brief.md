# Grok review brief: per-tweet quality audit for follower growth

Use this as the **user message** to Grok.  
Goal: get feedback **per tweet**, not just per thread.

## Objective

Our priority is to increase followers by publishing genuinely valuable Salesforce content.

Review each tweet for:

- practical value (does this teach something useful now?)
- credibility (real-org texture, not textbook fluff)
- shareability (quote/save/reply potential without engagement farming)
- follow conversion (does this make a smart reader want more?)

## Files to attach

- `scripts/x-content-queue.json`
- `docs/X-CONTENT-STYLE-RULES.md`
- `scripts/x-content-plan-45d.md`
- optional: `scripts/content-grok-tweet-quality-review-brief.md`

## Scope (important)

There are many pending items. Review in two passes:

1. **Pass 1 (highest impact first):**
   - `w5-thread-1-pd1-secrets`
   - `w5-thread-2-which-cert-first`
   - `w5-thread-3-failure-comeback`
   - `w6-thread-1-agentforce-study`
   - `w6-thread-2-spring26-changes`
   - `w7-thread-1-salary-truth`
   - `w7-thread-2-admin-to-developer`
   - `w8-thread-1-exam-day`
   - series D/E/F (`w9-*`, `w10-*`)

2. **Pass 2:** all other pending threads.

If output is too long, finish Pass 1 first.

## Required output format (per tweet)

For each thread, evaluate every tweet by index (`t0`, `t1`, ...):

- `score (1-10)` for each tweet
- `label`: `keep` | `tighten` | `rewrite`
- `why`: one short sentence
- `rewrite`: only if label is `tighten` or `rewrite`

Use this compact layout:

`t0: 7.5 | tighten | hook is generic for feed speed | <replacement tweet>`

After each thread include:

- `best tweet` (highest follower-conversion potential)
- `weakest tweet` (most likely to lose attention)
- `single biggest fix` (one change with highest lift)

## Scoring rubric (use consistently)

- **9-10:** high-value, specific, strongly follow-worthy
- **7-8:** solid but can be sharper
- **5-6:** useful but generic/wordy/low shareability
- **<=4:** weak hook, low value density, or trust risk

## Constraints for rewrites

- lowercase only
- max 280 chars
- no hype buzzwords
- no generic social advice
- keep claims policy-safe (retakes/salary/release claims)
- avoid engagement farming language

## Final summary required

After all scored tweets, give:

1. top 10 tweet rewrites with highest expected follower lift
2. repeated weak patterns across the queue
3. one rule update suggestion for `docs/X-CONTENT-STYLE-RULES.md`

## One-line ask you can paste above this file

> score our pending X content **tweet by tweet** for follower growth via practical Salesforce value; flag weak lines and rewrite them in our style with concise, specific, trust-safe copy.

