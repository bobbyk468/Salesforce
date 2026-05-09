# Copilot review: X posting pipeline (GitHub Actions + Node)

Paste the **one-line prompt** at the bottom into Copilot, with this file (or the referenced paths) open for context.

## What to review

We want a **security, correctness, and edge-case** review of the automated X (Twitter) posting pipeline: queue JSON, scheduler, Git sync, and GitHub Actions.

## Goals

1. **No duplicate root tweets** — especially not many copies of the same hook when a run fails mid-thread or when CI checks out a stale queue.
2. **Queue on GitHub stays authoritative** — after a run, `scripts/x-content-queue.json` changes must be committed and pushed so the next job does not see wrong `status` values.
3. **Strict schedule order** — only the **earliest** pending row by `scheduledFor` runs when due; while `status === posting`, **only that thread** is processed until `posted`.
4. **Resume partial threads** — if the process stops after tweet *k*, the next run continues the reply chain instead of posting a new tweet 1.

## Primary artifacts

| Path | Role |
|------|------|
| `scripts/post-to-x.mjs` | Queue load/save, `schedule`, `post`, `engage`, X API |
| `scripts/x-content-queue.json` | Thread entries: `status`, `scheduledFor`, `tweets`, `postCheckpoint`, `firstTweetId`, `postingStartedAt`, etc. |
| `.github/workflows/x-posting.yml` | Cron + `workflow_dispatch`, secrets, commit/push after run |

## Implemented behavior (current)

### Scheduler (`cmdSchedule`)

- Calls **`repairQueueForSchedule`** first (when not dry-run, persists fixes):
  - **`pending` + `firstTweetId`** → coerced to **`posting`** so resume path runs.
  - **`posting`** older than **`X_POSTING_STALE_MS`** (default **2h**) with **no** `postCheckpoint` and **no** `firstTweetId** → reset to **`pending`** (empty stuck claim).
  - If stale but has checkpoint / `firstTweetId`, **warn only** (no auto-reset).
- If **any** row is **`posting`**, only that id is passed to **`cmdPost`** (resume). **Multiple `posting`** → `process.exit(1)`.
- Otherwise picks the **single earliest** `pending` with valid `scheduledFor`; posts only if **`scheduledFor <= now`**; tie-break on `id`.
- **`X_SCHEDULE_MAX_DUE`** — workflow sets `1`; caps items per invocation (currently always one “next” row).

### Poster (`cmdPost`)

- Validates **`posted`** / bad status.
- Resolves **`postCheckpoint`** (`nextTweetIndex`, `replyToTweetId`) for resume; supports quiz **`replyToEntryId`** when starting from index 0.
- After validation, **`pending`** → **`posting`** + **`postingStartedAt`** + **`saveQueue`** (claim before X API).
- After **each successful** main tweet: updates **`firstTweetId`**, **`postCheckpoint`**, **`saveQueue`**.
- On tweet API failure: logs one **JSON line** (`x_post_tweet_failed`) and rethrows.
- Completes with **`posted`**, clears **`postCheckpoint`** / **`postingStartedAt`**.

### Local vs CI

- **`scripts/.x-posting.lock`** — exclusive lock for local **`schedule`** / **`post`** (not under `GITHUB_ACTIONS` / `CI`).
- In CI, no lock file.

### Workflow (`.github/workflows/x-posting.yml`)

- **`contents: write`** for push.
- **`concurrency`**: `group: x-posting`, **`cancel-in-progress: false`** (comment explains: avoid aborting mid-thread).
- After schedule/engage steps: **commit + push** queue (and tips file if changed) with **`if: always() && !cancelled()`** when not dry-run, so failures after checkpoint writes still attempt push.
- Push: **`git pull --rebase`** + up to **3** **`git push`** attempts; final failure fails the job with `::error::`.

## Known tradeoffs (explicitly not done)

- **No git push after each tweet from Node** — checkpoint is on disk in the job; risk remains if the runner dies after tweet but before the push step (mitigated by `always()` push step).
- **No `cancel-in-progress: true`** — avoids killing an in-flight post; runs queue behind concurrency instead.
- **No X API “verify thread length”** after post — relies on checkpoints + queue state.

## Questions for Copilot

1. Are there **race conditions** or **JSON states** we still allow that could cause duplicate posts or skipped threads?
2. Is **`repairQueueForSchedule`** logic safe, or can it **mask** bugs / cause **wrong** resets?
3. Should **`process.exit`** inside `cmdPost` be replaced with **`throw`** so **`main()` `finally`** always releases the local lock? (Any other cleanup gaps?)
4. Any **GitHub Actions** improvements (permissions, `workflow_dispatch` recovery job, OIDC, etc.)?
5. Any **twitter-api-v2** usage issues (rate limits, error types, retries) worth a small retry wrapper?

---

**One-line prompt (paste above this doc in Copilot chat):**

> Review the X posting pipeline described in `scripts/copilot-x-posting-review-brief.md` and the implementation in `scripts/post-to-x.mjs` + `.github/workflows/x-posting.yml`. Focus on duplicate posts, queue/Git sync, stuck states, concurrency, and error handling; call out concrete fixes with severity.
