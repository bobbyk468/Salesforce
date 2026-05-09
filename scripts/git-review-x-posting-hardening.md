# Git / PR review: X posting hardening (immediate reply + engage)

## Purpose

Follow-up to Copilot review: reduce duplicate or stuck behavior when **immediate link replies** or **engagement** tweets fail mid-flight, and clarify queue repair logging / Actions concurrency.

## Changes

### 1. `scripts/post-to-x.mjs` — immediate reply (`cmdPost`)

**Problem:** If main tweets finished and `saveQueue` cleared the checkpoint only *after* the immediate reply tweet, a crash during the link reply left `posting` + checkpoint state such that a retry could post the **link reply again**.

**Change:**

- After the main tweet loop (or `skipMainTweets` path leading into immediate reply), **before** calling the X API for `immediateReply`:
  - Clear `postCheckpoint` and `postingStartedAt`
  - Set `status: posted`, `postedAt`, `firstTweetId`
  - `saveQueue()`
- Post the immediate reply inside `try/catch`; on success set optional `immediateReplyPostedAt` and save again.
- On failure: emit structured JSON (`event: x_immediate_reply_failed`) and rethrow so CI can fail and push logs.
- Threads **without** `immediateReply` still finalize in an `else` branch (same fields as before, single save).

**Tradeoff:** If the link reply fails, the thread is already **`posted`** on X for the main chain; the link tweet may be missing until you fix and re-run manually. That is preferable to duplicate link replies.

### 2. `scripts/post-to-x.mjs` — engagement (`cmdEngage`)

**Problem:** Uncaught failure on one engagement tweet could leave behavior unclear; marking `engagementPosted` after a partial loop is wrong.

**Change:**

- Inner loop uses index `engIdx` and wraps `client.v2.tweet` in `try/catch`.
- On failure: log JSON (`event: x_engage_tweet_failed`, `engagementIndex`, etc.), set `engagementStoppedEarly`, **break**.
- Set `engagementPosted` / `engagementPostedAt` only if **`!engagementStoppedEarly`** (and not dry-run).

**Limitation:** If the first engagement tweet succeeded and the second failed, the next eligible `engage` run may **repeat** the first reply (no per-index checkpoint). Acceptable for now; a future improvement could track `engagementLastIndex`.

### 3. `scripts/post-to-x.mjs` — repair logging

- When coercing `pending` + `firstTweetId` → `posting`, the warning now notes **has checkpoint / no checkpoint** and that repeats warrant investigation.

### 4. `.github/workflows/x-posting.yml`

- Comment under `concurrency`: GitHub **queues** same-group runs; they do not run in parallel.

## Review checklist

- [ ] Immediate-reply threads: confirm happy path still sets `immediateReplyPostedAt` when link tweet succeeds.
- [ ] Immediate-reply failure: queue shows `posted` + no `immediateReplyPostedAt`; workflow fails; no duplicate link reply on retry.
- [ ] Engagement: API failure mid-loop does not set `engagementPosted`; success path still sets it when all tweets succeed.
- [ ] Branch protection: bot can still push queue commits (or document bypass).

## Note on `process.exit` vs lock file

`main()` uses `try/finally` to release `scripts/.x-posting.lock`. In Node.js, **`process.exit()` does not run `finally`** on the way out. Code paths that call `process.exit(1)` inside `cmdPost` / `cmdSchedule` can still leave a stale lock if triggered before `releaseLock`; remove the lock manually if that happens. Prefer throwing over `process.exit` in library-style code if tightening this further.

## Suggested commit message

```
fix(x): finalize thread before immediate reply; harden engage loop

- Mark posted + save before link-reply API; set immediateReplyPostedAt on success
- Engage: try/catch per tweet, JSON errors, skip engagementPosted if stopped early
- Richer repair warning; workflow concurrency clarification comment
```

---

## Paste as PR summary (comment or description)

**X posting — immediate reply, engagement, lock validation**

- **Immediate reply:** Main thread is saved as `posted` *before* the link-reply X API call, so a failure there does not leave `posting` + checkpoint (avoids duplicate link replies on retry). `immediateReplyPostedAt` records success; `x_immediate_reply_failed` JSON on failure.
- **Engagement:** Each reply is try/catch; `engagementPosted` is set only if every tweet succeeds. Failures log `x_engage_tweet_failed` with `engagementIndex`. Partial success may duplicate earlier engagement tweets on the next run (documented limitation).
- **Repair:** `pending` + `firstTweetId` warning now includes checkpoint hint for ops.
- **Actions:** Comment clarifies concurrency group **queues** runs (no parallel same-group jobs).
- **Lock:** `post` usage is validated **before** acquiring `scripts/.x-posting.lock`, so bad `npm run … post` usage does not leak the lock. Header documents that `process.exit()` still skips `finally` on internal validation errors.

---

## Follow-up: lock file + `process.exit`

**Resolved for CLI usage:** Invalid `post` (missing thread id) exits before lock acquisition.

**Remaining:** `cmdPost` / `cmdSchedule` still call `process.exit(1)` on validation errors after the lock is held (rare). Mitigation: delete stale `scripts/.x-posting.lock` locally. A deeper fix would replace those exits with `throw` and a single `catch` in `main`.
