# Grok review brief: TrailblazePrep X plan — planned vs. implemented

**Purpose:** Paste into Grok (or any X-native reviewer) for a second opinion on reach, thread mechanics, and narrative risk. **Audience:** someone who has not read our threads.

**Account:** @trailblazeprep — Salesforce certification prep.

**Voice / constraints:** `docs/X-CONTENT-STYLE-RULES.md` (lowercase, human veteran, ≤280 chars/tweet, 2 hashtags max where used).

---

## What we planned

| Theme | Intent |
|--------|--------|
| **Growth** | Sequenced arcs (not random drops), practitioner voice, **2–3 published tweets/day** floor (threads, tips, quiz Q/A, engagement, quote-boosts count). |
| **Ops** | Single source of truth: `scripts/x-content-queue.json`. Optional multi-model review via `scripts/content-series-model-review-prompt.md` and `npm run content:advisors` (needs API keys). |
| **Narrative arcs** | `from-fail-to-seat`, `pd1-without-java`, `2026-stack`; plus **Series D** (ADM-201 traps), **E** (Agentforce mistakes), **F** (resume reality). |
| **Site coverage** | **87-week** rotation: one primary cert slug per ET week (Mon–Sun), deduped from `src/lib/certifications-data.ts`; anchor Monday **2026-05-04**. Data: `scripts/x-content-weekly-cert-focus.json`. |
| **Metadata** | Queue rows tagged with **`certFocus` / `certPath`** (weekly spotlight) and **`topicCert` / `topicCertPath`** when the post is about a different cert than the spotlight week. |

---

## What we implemented

| Area | Artifact | What it does |
|------|-----------|----------------|
| Queue | `scripts/x-content-queue.json` | All threads, tips, quizzes; `series` blocks; `tweetImages` + engagement `imageFile` for major arcs. |
| Weekly spotlight JSON | `scripts/x-content-weekly-cert-focus.json` | 87 rows: `weekStarting`, `certFocus`, `certPath`. |
| Rotation builder | `scripts/build-weekly-cert-rotation.mjs` | Regenerates weekly JSON from catalog order. |
| Tagging | `scripts/tag-queue-cert-focus.mjs` | `npm run x:tag-cert-focus` — applies `certFocus` + `topicCert`; **skips** false `topicCert` on `resume-reality-2026` when “Agentforce” appears only as a negative headline example. |
| Posting CLI | `scripts/post-to-x.mjs` | `npm run x:list` shows week vs topic cert lines. |
| Image pipeline | `scripts/generate-tweet-images.mjs` | Cover / stats / CTA / engagement PNGs under `scripts/tweet-images/`. **CTA** uses `topicCertPath` when set; if the **last** tweet is a **`p.s.` site spotlight**, CTA art attaches to the **prior** value tweet. **`--no-tips`** skips bulk tip PNG generation. Resume/career thread titles map CTA label to **“Certification Hub”** (`extractCertName`). |
| Plan doc | `scripts/x-content-plan-45d.md` | Cadence, series D/E/F, weekly cert note (updated after external review). |
| Gemini handoff | `scripts/content-plan-gemini-review-brief.md` | Earlier model brief + “adopted recommendations” table. |
| Tip text pool | `scripts/queue-tip-bodies.mjs` | Shared `TIP_BODIES` for all tip seeders (single place to edit bodies). |
| Density backfill | `scripts/seed-june-july-queue-tips.mjs` | Idempotent guard: won’t double-append `gw-bk26-*`. Fills **Jun 11–Jul 31** at **2 tips/day ET**. Imports pool. |
| August backfill | `scripts/seed-august-queue-tips.mjs` | **Aug 1–31**, **2 tips/day ET** (`gw-aug26-*`). Imports pool. |
| Range seeder | `scripts/seed-queue-tips-range.mjs` | `npm run x:seed-tips-range -- --from YYYY-MM-DD --to YYYY-MM-DD --prefix gw-sep26` — **2 tips/day ET**; refuses if `prefix-*` ids already exist. |

### Series scheduling (fatigue-aware)

- **Series D** (ADM traps): D1–D4 remain the technical “palate cleanser” after heavy Agentforce + career beats in `2026-stack`.
- **Series F** (resume): **May 29** (main thread), **May 30** (F2 tip) — spaced after salary / admin→dev fork.
- **Series E** (Agentforce mistakes): **Jun 3, Jun 6, Jun 10** — space after earlier Agentforce volume.

### Thread CTAs (external review compromise)

- **Body / value tweet:** primary link stays on **`topicCert`** (e.g. administrator prep on ADM trap threads).
- **Weekly spotlight:** extra final **`p.s.`** tweet with **`certFocus`** URL only (not mixed into the same tweet as the main CTA). Documented in `docs/X-CONTENT-STYLE-RULES.md`.

### Media readiness (Series D, E, F1)

PNG sets (cover, stats, CTA, 2× engagement) generated for **Series D** (four threads), **Series E** (three threads), and **F1** (`w9-thread-5-resume-needle-f1`). **F2** (`w9-tip-resume-donts-f2`) is a **single-tip** row — no thread-style triple; use the normal tips image path if you attach art.

### Git snapshot (content stack)

Recent commits on branch (newest first): **`c281b9d`** (F1 CTA title + August seed), **`87968cd`** (E + F1 thread images), **`e9b164c`** (D images, CTA generator fix, June–July seed, tip PNG batch), **`8405338`** (rotation + tagging + Gemini adoption). Adjust if your branch differs.

---

## Concepts (don’t conflate these)

- **`certFocus`** — This week’s **site** spotlight (87-week SEO/coverage rotation).
- **`topicCert`** — What the **copy** is actually about when that differs from the spotlight (or pre-rotation dates).

---

## Grok round 2 — adopted in repo

- **Series D opener (D1):** Named trap + 2026 outline angle (`w9-thread-1-adm201-traps-d1` tweet 0).
- **Series E:** Guardrail/prod hook + outline still tests routing/actions after Spring ’26 multi-agent (E1); E2/E3 one-liners frame **exam-guide depth** vs earlier stack hype (`w10-thread-*`).
- **Series F opener (F1):** Resume line that makes recruiters skip certs (`w9-thread-5-resume-needle-f1` tweet 0).
- **Exam-day retake copy:** Score report + Webassessor + first retake ≠ later sits; avoid parroting timing from memory/X (`w8-thread-1-exam-day` — canonical queue copy; thread already **posted**).
- **Ops:** Parameterized tip seeder `seed-queue-tips-range.mjs` + shared `queue-tip-bodies.mjs` (September+ without duplicating month scripts).

## What we still might do (non-blocking)

- **Quote-boost hygiene** — `firstTweetId` / URLs in `scripts/quiz-boost-*.md` after posts go live.
- **Posted salary thread** — Left as-is on X; **new** copy follows softer salary / retake / Agentforce language in style rules.

---

## Questions tuned for Grok / X

1. **Thread 1 hooks:** For Series D/E/F openers, which first line would you A/B for max scroll-stop on tech Twitter vs cert Twitter?
2. **Reply velocity:** For ADM trap threads (poll-style tweet 7), is same-day OP replies or a delayed “summary” reply better for distribution?
3. **Duplication:** With Agentforce in both `2026-stack` and Series E (weeks apart), what’s the minimum **wording** change you’d want so it doesn’t feel like a rerun?
4. **Risk:** Any phrasing in pending **salary-adjacent** or **exam policy** tweets that still reads “fact-check bait” on X?
5. **Quote-tweet strategy:** Which 1–2 beats are strongest **quote-bait** for practitioners (not influencers) without sounding like engagement farming?

---

## Files to attach for a concrete pass

- `scripts/x-content-queue.json` (filter `status: pending` if the file is huge).
- `docs/X-CONTENT-STYLE-RULES.md`
- `scripts/x-content-plan-45d.md`
- `scripts/content-plan-gemini-review-brief.md` (for overlap with prior review)
- Optional: first ~20 weeks of `scripts/x-content-weekly-cert-focus.json`

---

## One-line ask you can paste above the file

> You’re reviewing @trailblazeprep’s **in-repo X queue** for a Salesforce cert prep brand. Compare **planned vs implemented** in the markdown, then answer the Grok-tuned questions in **short bullets**. Flag **reach** and **backlash** risks only where you’d change copy or schedule — not generic social advice.
