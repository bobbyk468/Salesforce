# Gemini review brief: X content plan — planned vs. done

**Purpose:** Hand this to Gemini (or any reviewer) for a quick audit of strategy, gaps, and consistency. **Audience:** someone who has not read our prior threads.

**Account:** @trailblazeprep — Salesforce certification prep. **Voice and rules:** `docs/X-CONTENT-STYLE-RULES.md`.

---

## What we planned

1. **Growth on X**
   - **Sequenced** arcs (not random one-offs), veteran practitioner voice (human, not courseware).
   - **Floor:** at least **2–3 published tweets per calendar day** (threads, tips, quiz Q/A, engagement, quote-boosts all count).
   - Tactics: series continuity, polls/reply CTAs, link-in-reply where it fits, quote-boosts for posted quizzes without editing live tweets.

2. **Content operations**
   - Keep the **queue in-repo** (`scripts/x-content-queue.json`) as the source of scheduled threads/tips/quizzes.
   - Use **multi-model review** where helpful: prompt shell in `scripts/content-series-model-review-prompt.md`; parallel advisor script `scripts/query-content-advisors.mjs` (npm: `content:advisors`, requires provider API keys in env).

3. **Narrative series (encoded in the queue)**
   - **`from-fail-to-seat`:** failure → which cert first → exam day.
   - **`pd1-without-java`:** PD1 as platform/governor-limit comprehension, not “Java in the cloud.”
   - **`2026-stack`:** Spring ’26 exam angle → Agentforce study → Agentforce quizzes → salary → admin vs developer fork.
   - **Week 9–10 batch (pending):** ADM-201 traps (`adm201-traps-2026`), Agentforce mistakes (`agentforce-mistakes-2026`), resume reality (`resume-reality-2026`), plus tips and extra ADM quiz pairs — details in `scripts/x-content-plan-45d.md`.

4. **Site-wide certification coverage**
   - **One primary cert per calendar week** so every unique certification page in the product catalog gets a dedicated week over a full rotation (deduped slugs; practice-test URLs folded into parent cert weeks).
   - Editorial calendar anchor: first rotation Monday **2026-05-04** (ET weeks, Monday–Sunday).

---

## What we did

| Area | Deliverable | Notes |
|------|-------------|--------|
| Queue | `scripts/x-content-queue.json` | Pending arcs, tips, quizzes, `series` metadata where applicable. |
| 45-day plan | `scripts/x-content-plan-45d.md` | Cadence, sample week, series D/E/F, weekly cert note. |
| Weekly rotation data | `scripts/x-content-weekly-cert-focus.json` | **87 weeks**, each with `weekStarting` (Monday), `certFocus` slug, `certPath`. |
| Rotation generator | `scripts/build-weekly-cert-rotation.mjs` | Rebuild JSON from ordered slug list aligned with `src/lib/certifications-data.ts`. |
| Queue tagging | `scripts/tag-queue-cert-focus.mjs` | npm: `x:tag-cert-focus`. Adds **`certFocus` / `certPath`** (week spotlight) and **`topicCert` / `topicCertPath`** when copy targets a different cert (e.g. ADM threads during “Platform Foundations” week) or when `scheduledFor` is before the rotation anchor. |
| CLI visibility | `scripts/post-to-x.mjs` (`x:list`) | Shows `week →` and `topic →` when set; handles missing `scheduledFor` as `(not scheduled)`. |
| Style | `docs/X-CONTENT-STYLE-RULES.md` | Human / veteran voice + unified prompt prefix (per prior edits). |
| Multi-model prompt | `scripts/content-series-model-review-prompt.md` | What to ask Grok/ChatGPT/Claude/Gemini about series order, hooks, risk, format. |

**Validation we relied on:** Unique slugs in `x-content-weekly-cert-focus.json` match the deduped set from `certifications-data.ts` (87 slugs); practice-test slugs excluded from their own week.

---

## Concepts for reviewers (avoid confusion)

- **`certFocus`** = *this calendar week’s site spotlight* in the 87-week rotation (SEO / coverage framing).
- **`topicCert`** = *what the tweet thread is actually about* when that differs from the week spotlight, or the only cert tag for pre-anchor dates.

Example: an ADM-201 traps thread scheduled during the “Platform Foundations” week should carry both: week spotlight + `topicCert: administrator`.

---

## Gemini review — adopted (May 2026)

| Recommendation | What we changed |
|----------------|-----------------|
| **CTAs:** body = `topicCert`; weekly spotlight = separate final **p.s.** tweet only | Series D (D1–D4) includes an extra closing tweet with the weekly `certFocus` URL; body links stay on topic. Documented in `docs/X-CONTENT-STYLE-RULES.md`. |
| **87-week order ≠ social order** | Same doc: rotation is site coverage; feed stays mixed via `topicCert`. |
| **Fatigue:** space Series E; push Series F after salary/fork | **Series F:** `w9-thread-5-resume-needle-f1` **May 29**, `w9-tip-resume-donts-f2` **May 30**. **Series E:** `w10-thread-1` **Jun 3**, `-2` **Jun 6**, `-3` **Jun 10**. D4 tease points to resume content late May. |
| **Risk scan** | Pending exam-day retake wording softened; admin→dev salary comparison softened; Series E Agentforce claims qualified. Posted salary thread unchanged on X. |
| **Thin May** | Added many short tips (`gw-may-*`, `gw-jun-*`) so each **May 7–31** ET day has ≥**2** pending **queue rows** (not counting tweet count inside threads). |

After editing the queue: `npm run x:tag-cert-focus`.

---

## Not done / follow-ups (explicit)

- **June+ backlog:** extend `x-content-queue.json` and plan beyond the current May-heavy batch if you want the 45-day window fully populated through late June.
- **Quote-boost IDs:** fill `firstTweetId` / URLs in boost helper docs (e.g. pending Agentforce + new ADM quizzes) after those tweets are posted.
- **Advisor script:** `content:advisors` is only useful when API keys are configured; script skips missing providers.
- **Optional:** align every CTA URL in copy to `certFocus` for a given week — we intentionally allow body links to match `topicCert` (e.g. admin prep links on ADM threads).

---

## Questions useful for Gemini

1. Given **week spotlight vs. topic** tagging, should CTAs in tweet bodies **always** use `topicCert` when present, or sometimes **both** (spotlight + topic) in a thread?
2. Does the **87-week rotation** order (associates → admins → devs → …) match how you’d **sequence** social narrative for maximum follow-through, or should social order diverge from catalog order?
3. Any **overlap or fatigue** risk** between Series D/E/F and the older **`2026-stack`** / **`from-fail-to-seat`** arcs still in the queue?
4. **Risk scan:** salary bands, retake windows, Agentforce exam claims — flag anything that should be softened or sourced.
5. **2–3 tweets/day:** where is the queue **thin** on dates after the last pending `scheduledFor`?

---

## Files to attach for a concrete review

- `scripts/x-content-queue.json` (pending entries only, or full file if comparing to posted history).
- `scripts/x-content-plan-45d.md`
- `scripts/x-content-weekly-cert-focus.json` (first ~15 weeks + any week matching your review window).
- `docs/X-CONTENT-STYLE-RULES.md`
