# SEO & E-E-A-T Improvements — Gemini Review Document

## Context

This document covers three SEO improvements implemented on trailblazeprep.com in response to a search engine E-E-A-T and Helpful Content analysis. Two of the three priorities are already live. One is pending review before implementation.

The site has:
- 87 exam-tips pages (e.g. `/adm-201-exam-tips`)
- 52 study-guide pages (e.g. `/adm-201-study-guide`)
- 87 cert pages (e.g. `/certifications/administrator`)
- 20 VS/comparison pages (e.g. `/app-builder-vs-developer-i`)

---

## Priority 1 — Cannibalization Fix (LIVE — commit 92da036)

### Problem

Google was seeing three pages compete for the same "Salesforce Admin Exam" query:
- `/certifications/administrator` — cert details, exam format, practice questions
- `/adm-201-study-guide` — topic breakdown, key concepts, heatmap
- `/adm-201-exam-tips` — scenario strategy, time management, mock-test targets

Without clear hierarchy signals, Google split link equity across all three, resulting in none reaching Page 1 consistently.

### Solution Implemented

Two new banner components with specific anchor text, wired across 47 matched pairs:

**`StudyGuideCrossLink`** — inserted in every exam-tips page after the existing cert link:
```
Looking for a full study plan, topic breakdown, and key concepts?
→ View the comprehensive [Cert Name] Study Guide
```

**`ExamTipsCrossLink`** — inserted in every study-guide page after the author block:
```
Ready to sharpen your exam strategy?
→ Prepare with our curated [Cert Name] Exam Tips — high-weight topics,
  scenario strategy, and mock-test targets.
```

### Anchor Text Design

The anchor text is intentional:
- Exam Tips → Study Guide: `"View the comprehensive [Cert] Study Guide"` — positions study guide as the master resource
- Study Guide → Exam Tips: `"Prepare with our curated [Cert] Exam Tips"` — positions exam tips as the tactical supporting page

This tells Google's crawler that the **study guide is the hub** and the exam tips is a supporting, more specific resource — resolving the cannibalization without removing either page.

### Files

| File | Purpose |
|---|---|
| `src/components/StudyGuideCrossLink.tsx` | Blue banner for exam-tips → study guide |
| `src/components/ExamTipsCrossLink.tsx` | Amber banner for study-guide → exam tips |
| `scripts/add-cross-links.py` | Idempotent batch script — can be re-run safely |

### Coverage

- 47 exam-tips pages patched (matched pairs only)
- 47 study-guide pages patched
- 40 AP-only exam-tips pages correctly skipped (no study-guide exists)
- 1 study-guide with no exam-tips match skipped (`service-cloud-study-guide`)

### Questions for Gemini

1. Is the anchor text specific enough to signal the hub/spoke relationship, or should the study guide link use keyword-rich text like `"Salesforce Admin ADM-201 Study Guide"`?
2. The cross-links are styled as banners (not in-body links). Does Google weight banner links differently from in-content links for consolidation purposes?
3. Should the exam-tips page `canonical` meta tag point to itself, or to the study guide as the canonical? Currently both pages have self-referencing canonicals.

---

## Priority 2 — E-E-A-T Insight Blocks (LIVE — commit 92da036)

### Problem

All study-guide pages summarised official Salesforce exam documentation. Google's Helpful Content updates reward **first-hand experience** — content that provides a perspective official sources cannot or will not publish.

Trailhead and competitors like Focus on Force will never say:
- "This exam is genuinely difficult if you don't know Apex"
- "The salary premium on this cert is not worth the effort"
- "You can pass this in 2 weeks — here is how"

### Solution Implemented

**`CertInsightBlock`** — a structured three-row block added to all 47 study-guide pages immediately after the author attribution:

| Row | Content |
|---|---|
| Difficulty | Rating 1–5 with coloured bar + honest one-line explanation |
| Salary Range | US average for certified professionals with "Verified April 2026" freshness tag |
| Is it worth it? | Honest recommendation — includes negative opinions where warranted |

### Sample Data (ADM-201)

```
Difficulty: 3/5 — Moderate
"Scenario-heavy but zero coding. 4–6 weeks of hands-on practice in a Developer
org is the average prep time."

Salary Range: $78,000–$105,000 / year
US average for certified professionals · Verified April 2026

Is it worth it?
"The most widely required Salesforce credential. Opens admin, business analyst,
and junior consultant roles. Worth taking before anything else."
```

### Sample Data (Technical Architect — honest negative signal)

```
Difficulty: 5/5 — Expert
"A board review with a live architecture presentation in front of a panel. Less
than 1% of Salesforce professionals hold this. Years of architect experience
are the real prerequisite."

Salary Range: $160,000–$220,000+ / year
Verified April 2026

Is it worth it?
"The most prestigious credential in the Salesforce ecosystem. Transformative
salary impact and immediate market recognition. A multi-year investment."
```

### Files

| File | Purpose |
|---|---|
| `src/lib/cert-insights-data.ts` | Difficulty, salary, and "worth it" data for all 51 certs |
| `src/components/CertInsightBlock.tsx` | Renders the three-row insight panel |

### Questions for Gemini

1. **Schema opportunity**: The salary range and difficulty data could be wrapped in `Product` or `Course` schema markup (`aggregateRating`, `offers`). Should we add this to `CertInsightBlock` or to the `ContentPageSchemas` component that already handles per-page schema? Would Google surface difficulty/salary as rich snippets?
2. **Freshness signal**: The "Verified April 2026" tag is static text. Should it be pulled from a constant like `RELEASE_CURRENT` so it updates automatically each season, or is a manual quarterly update sufficient for Google's freshness scoring?
3. **Salary data sourcing**: Currently using US Glassdoor/LinkedIn aggregate estimates. Would adding a visible citation (e.g. "Source: Salesforce Talent Alliance, 2026") increase the E-E-A-T signal, or would it be treated as a link to a competitor?

---

## Priority 3 — "Which First?" Decision Block (PENDING — not yet built)

### Problem

VS/comparison pages attract bottom-of-funnel users at a decision point. Currently these pages compare the two certifications but stop short of giving a definitive recommendation based on the user's situation. Users who don't find a clear answer return to Google ("pogo-sticking"), which signals low satisfaction.

### Planned Solution

A **`WhichFirstBlock`** component added to all 20 VS pages. Structure:

```
┌─────────────────────────────────────────┐
│  Which should you take first?           │
├─────────────────────────────────────────┤
│  Take [Cert A] if:                      │
│  · You are in a non-developer role      │
│  · You have < 1 year Salesforce exp     │
│  · You want to build toward consulting  │
│                                         │
│  Take [Cert B] if:                      │
│  · You write Apex or want to            │
│  · You are already PD1-certified        │
│  · Your org needs technical developers  │
├─────────────────────────────────────────┤
│  Our Recommendation                     │
│  "[Cert A] — reason in 1–2 sentences."  │
│                                         │
│  → Start with [Cert A] practice tests   │ ← internal link
│  → Explore the [career path] →          │ ← internal link to career guide
└─────────────────────────────────────────┘
```

### Implementation Plan

1. Create `src/components/WhichFirstBlock.tsx` — accepts `certA`, `certB`, `conditionsA[]`, `conditionsB[]`, `recommendation`, `certASlug`, `certBSlug`, `careerPathSlug` as props
2. Add data inline to each of the 20 VS pages (each comparison is unique — no central data file needed)
3. Wire internal links: recommendation → practice exam page + relevant career/path guide

### Target VS Pages (priority order based on SERP estimates)

| Page | Est. Rank | Priority |
|---|---|---|
| `/agentforce-specialist-vs-ai-associate` | Top 1–3 | Highest |
| `/cpq-admin-vs-cpq-billing-ap` | Top 1–5 | High |
| `/javascript-developer-i-vs-pd1` | Page 1 middle | High |
| `/data-cloud-vs-crm-analytics` | Page 1 bottom | High |
| `/app-builder-vs-developer-i` | Page 2 (battleground) | Medium |
| `/business-analyst-vs-strategy-designer` | Page 2 | Medium |
| `/integration-architect-vs-system-architect` | Page 2 | Medium |
| All remaining 13 VS pages | Page 2–3 | Lower |

### Questions for Gemini

1. **Flowchart vs list**: The analysis suggested a flowchart format. Would an interactive decision tree (JavaScript-rendered) provide a stronger dwell-time signal than a static bulleted list, or is the rendering complexity not worth the benefit?
2. **Internal linking strategy**: Each recommendation should link to the practice exam on the cert page. Should the anchor text be generic ("start with practice questions") or keyword-specific ("ADM-201 free practice questions")?
3. **"Our Recommendation" wording**: Using first-person "our recommendation" is an experience signal. Does placing it in a visually distinct callout box increase the chance of it being pulled as a Featured Snippet, or does the box structure prevent that?
4. **Duplicate content risk**: If 20 VS pages all have structurally identical `WhichFirstBlock` HTML with different content, is there a risk Google treats them as templated content rather than unique recommendations?

---

## Summary Table

| Priority | Change | Status | Pages affected |
|---|---|---|---|
| 1 | Canonical cross-links (hub/spoke) | **Live** | 94 pages |
| 2 | Difficulty/Salary/Worth-it blocks | **Live** | 47 pages |
| 3 | "Which First?" decision blocks | **Pending review** | 20 pages |

---

## Overall Architecture Questions for Gemini

1. The site now has three interconnected content types for each cert (cert page → study guide → exam tips). Should breadcrumb schema reflect this three-level hierarchy, or keep the current flat `Home > Page` pattern?
2. `CertInsightBlock` renders salary data client-side from a TypeScript constant. For Google to index the salary content correctly, should it be server-rendered (it currently is, since it's a Server Component), or is there a risk it's treated as dynamic content?
3. The batch script (`add-cross-links.py`) modifies 94 page files simultaneously. From a crawl budget perspective, is a single large deployment better than staged rollouts for a site of this size (~190 pages)?
