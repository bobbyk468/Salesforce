# @trailblazeprep — 45-day content plan (May 8 → June 21, 2026)

**Purpose:** Keep the pipeline full after the current pending batch, without gaps or random one-offs. Everything below assumes **value-first copy**, **lowercase**, **≤280/tweet**, **growth close + link-in-pattern** matching `x-content-queue.json`, and **2 hashtags max** where applicable.

**Daily floor (non-negotiable):** **at least 2–3 published tweets every calendar day** — standalone posts, quiz Q/A, engagement tweets, and **each tweet in a thread** all count. Heavy days (full thread drop) can be 6–10+ tweets; **light days must still hit 2–3** (e.g. tip + quiz answer + quote-boost or engagement). Voice must match **`docs/X-CONTENT-STYLE-RULES.md`** (human ecosystem veteran, not courseware).

**Already queued (do not duplicate themes blindly):** through **May 7** — failure arc, PD1 2-parter, which-cert, Spring ’26 short, Agentforce study, Agentforce quizzes, salary, admin→dev, exam day. See `x-content-queue.json` for exact dates.

**Weekly cert coverage (site-wide):** One **primary** certification per calendar week so the catalog is fully covered over **87 weeks** (deduped: shared `href`s across categories appear once; **practice-test** pages roll into their parent cert week). Source of truth: `scripts/x-content-weekly-cert-focus.json` (regenerate with `node scripts/build-weekly-cert-rotation.mjs`). Queue items are tagged automatically with **`scripts/tag-queue-cert-focus.mjs`**: **`certFocus` / `certPath`** = that week’s rotation spotlight (ET calendar week); **`topicCert` / `topicCertPath`** = the cert the copy is actually about when it differs (e.g. ADM threads during Platform Foundations week), or the only slug when the post is dated before the rotation anchor.

---

## Cadence target (2–3 tweets/day minimum)

**Weekly tweet count (all publishes):** target **21–28/week** (3–4/day average); **never below 14/week** (2/day floor).

| Type | Target / week | Notes |
|------|----------------|--------|
| **Main thread** | 2–3 threads | 6–9 tweets each; human “been in the weeds” voice per `X-CONTENT-STYLE-RULES.md` |
| **Single “tip”** | 4–7 | Short observations from real scenarios — fills gaps between threads |
| **Quiz** | 2–3 pairs (Q + A) | = **4–6** tweets/week; alternate ADM / Agentforce / App Builder |
| **Quote-boost** | 2–4 | `quiz-boost-list.md` + Agentforce hooks; counts toward daily floor |
| **Engagement** | 2 per main thread | Same day or +24h; reply fast on thread 1 |

### Sample week (hits ~3 tweets/day without burnout)

| Day | AM | Mid | PM | Approx. tweet count |
|-----|----|-----|-----|---------------------|
| Mon | Thread tweet 1–2 | Thread 3–5 | Engagement + tip | 8+ |
| Tue | Quiz Q | Quiz A + tip | Quote-boost | 3–4 |
| Wed | Thread tweet 1 (new arc) | Thread 2–4 | Engagement | 5+ |
| Thu | Tip | Quiz Q | Quiz A | 3 |
| Fri | Thread cont. or tip ×2 | Engagement | — | 3–5 |
| Sat | Tip + quote-boost | — | — | 2 |
| Sun | Light tip or “what are you studying?” | — | — | 2 |

Adjust for your timezone; **Sat/Sun can be lighter** as long as **weekly ≥14** and **no more than one sub-2-day** in a row if you can avoid it.

---

## Three new mini-series (Week 9–15)

These are **sequenced**, not interchangeable. Draft in this order so each can tease the next.

### Series D — **“ADM-201 traps that still eat people in 2026”** (4 beats)

| Beat | Format | Angle (outline) |
|------|--------|------------------|
| D1 | Thread | “Still on the exam guide:” 5–6 traps with **why** the wrong answer feels right (OWD vs sharing vs running user themes, declarative vs code, report vs bucket, etc.). **No** full Spring ’26 sermon — point to exam guide. |
| D2 | Thread or long tip | Automation traps: record-triggered vs scheduled vs before-save **as the exam frames them**; when Flow is the “best” answer. |
| D3 | Thread | Security combo traps: profiles + permission sets + **field-level** in one scenario (exam-style “BEST”). |
| D4 | Thread | “Exam wording decoder:” BEST / MOST / LEAST — how to survive without spiraling (pairs well with exam-day thread already queued). |

**CTA:** Admin practice page + **follow** line. Cross-link: “part 2 tomorrow” on D1 if you split across days.

### Series E — **“Agentforce Specialist: mistakes I see in the wild”** (3 beats)

| Beat | Format | Angle |
|------|--------|--------|
| E1 | Thread | Treating it like a chatbot demo vs **Topics / Instructions / Actions** discipline. |
| E2 | Thread | Skipping **guardrails** and debugging order (topic → inputs → action). |
| E3 | Thread | “Passed Admin, failed Agentforce mental model” — what transfers vs what doesn’t. |

**CTA:** Agentforce prep URL + follow line. Tie to **Series D** only lightly (“after 201, this is the next trap”).

### Series F — **“What actually moves the resume in 2026”** (2 beats, bridges salary/admin-dev)

| Beat | Format | Angle |
|------|--------|--------|
| F1 | **Single high-impact thread** | Projects + measurable outcomes **before** cert stack; 1 template for a bullet. Explicitly bridges the salary + fork threads (same audience, next funnel step). |
| F2 | Tip or short thread | LinkedIn + resume **don’ts** (keyword stuffing, superbadge without story). |

---

## Week-by-week sketch (May 8 → June 21)

*Dates are **ET-friendly** suggestions; drop into `scheduledFor` when you add JSON entries.*

| Week | Dates (approx) | Primary focus | Suggested drops |
|------|----------------|---------------|-----------------|
| **9** | May 8–14 | Series D opens (palate cleanser after Agentforce-heavy stack) | D1–D2 threads; quiz pairs + tips; optional **p.s.** tweet on D beats for weekly `certFocus` link (see style rules) |
| **10** | May 15–21 | Series D mid; **no** Series F yet (space after salary/fork arc) | D3; quiz + tips; keep Agentforce volume low here |
| **11** | May 22–28 | Series D closes | D4; tips + quizzes; **Series F not before late May** per cadence review |
| **12** | May 29 – Jun 4 | Series F (resume reality) | F1 May 29; F2 May 30; light tips around both |
| **13** | Jun 5–11 | Series E (Agentforce mistakes) — **after** breathing room | E1 Jun 3; E2 Jun 6; E3 Jun 10; daily tips + quote-boosts |
| **14** | Jun 12–18 | **Summer ’26 awareness** (light) | Short maintenance thread; **5+** tips; quote best threads |
| **15** | Jun 19–21 | Buffer + measure | AMA-style Q; pin refresh; **still 2–3 tweets/day** (tips + engagement) |

**Summer ’26:** Full release content can **follow** this 45-day window; week 14 is only **teaser + maintenance** so you don’t collide with the already-posted Spring ’26 mega-thread.

---

## Backlog artifacts (status)

1. **`scripts/quiz-boost-agentforce-pending.md`** — Q-only quote hooks for pending Agentforce quizzes + new ADM quizzes (fill `firstTweetId` links after first post).
2. **`x-content-queue.json`** — Week 9–10 batch added: **Series D** (`adm201-traps-2026`, 4 threads May 8–16), **Series F** resume (`resume-reality-2026`, thread + tip), **Series E** Agentforce (`agentforce-mistakes-2026`, 3 threads May 22–28), **7 tips**, **2 ADM quiz pairs**. Adjust `scheduledFor` if they collide with your real calendar.
3. **Optional:** `scripts/x-content-templates-week9+.md` — opener patterns + growth close variants (reduces copy drift).

---

## Metrics (lightweight, end of Week 9 and Week 15)

- Follower delta / week  
- Link clicks (if UTM on trailblazeprep.com from X)  
- Replies on poll tweets vs non-poll  
- Which **series** had the best save/reply rate → extend with +1 episode, don’t start a fourth parallel arc

---

## What not to do for 45 days

- Don’t run **four** unrelated series at once; max **2** active arcs + quizzes/tips.  
- Don’t repeat **Spring ’26 narrative** at mega-thread length (exam-guide angle only).  
- Don’t stack **two salary threads**; F1/F2 are **resume**, not comp bands.

---

## Immediate next action (you)

1. Approve week-9 **exact** post dates (Mon/Wed/Fri threads often work).  
2. Say whether **D1** or **F1** should ship first after May 7 (recommendation: **D1** May 8–9, **F1** by May 17–20 to ride salary/admin-dev momentum).  
3. When ready, ask to **draft full thread JSON** for Series D1 + E1 + F1 with growth lines pre-baked.
