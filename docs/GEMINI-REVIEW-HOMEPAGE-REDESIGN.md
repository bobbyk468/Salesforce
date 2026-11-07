# Review brief for Gemini — Trailblaze Prep homepage redesign

**Date:** 2026-11-07
**Site:** https://www.trailblazeprep.com — independent Salesforce certification study resource
**Stack:** Next.js 16.4.4 (App Router), React 18, TypeScript, Tailwind v4, static export on Cloudflare Workers
**Goal stated by the owner:** "improve SEO readability and UX — the homepage looks clumsy / rugged"

Be adversarial. We want the weaknesses in our plan, not validation. If the
plan is wrong, say so plainly and say what to do instead.

---

## 1. Current homepage, measured

Live at `/`, source `src/app/page.tsx` (559 lines).

| Metric | Value |
| --- | --- |
| H1 | "Prepare for your Salesforce certification with confidence." |
| Title tag | "Free Salesforce Exam Practice Tests \| Trailblaze Prep" (53 chars) |
| Words in `<main>` | **274** (third-party audit counts 625 incl. chrome, and flags it as thin content) |
| Links in `<main>` | **35** |
| Page height | 6671px |
| Mobile PSI | 97 · Desktop 99 · CLS 0 · TBT 0s |

Section order:

1. Hero — H1, lead, 2 CTAs, stats; a rotating sample-question card on desktop only
2. "Popular reads" — 16 inline text links
3. H2 "Build your study plan in one place." — 6 feature blurbs (H3 each):
   Section weightage / Practice questions / Study guides / Exam reference
   details / Issuer references / 100% free, no login
4. H2 "Explore Salesforce Certifications by Role" — 11 pill links to
   `/certifications/role/{slug}`, then "View all certifications"
5. H2 FAQ accordion
6. H2 "Ready to Get Certified?" CTA band

Points 3 and 4 are generic marketing copy. No certification is named with any
of its actual data anywhere above the fold.

## 2. The three pages that overlap

| URL | H1 | Unique cert links | Words |
| --- | --- | --- | --- |
| `/` | Prepare for your Salesforce certification with confidence. | 35 | 274 |
| `/certifications` | All Salesforce Certifications (Summer '26) | 38 | 771 |
| `/salesforce-certifications-list` | All Salesforce Certifications by Role (Summer '26) | **104** | 875 |

All three target variations of "salesforce certifications". We suspect
cannibalization. The owner has not yet decided whether to consolidate.

## 3. The reference the owner wants to emulate

https://www.salesforceben.com/salesforce-certifications/ — "Complete List of
Salesforce Certifications 2026". Structure:

- H1, author byline, short intro
- Filter tab bar: Foundations / Admins / Designers / Consultants / Architects /
  Marketers / Developers / Artificial Intelligence
- 3-column responsive grid of certification cards. Each card:
  official Salesforce badge PNG, cert name (H3), level ("Mid-level"),
  recommended experience ("1-2 years"), prerequisites ("None required" /
  "Administrator"), cost ("200"), link to the official exam guide, link to
  their own guide.
- ~60 cards. Rendered server-side; the grid is the page.

Note they use **Salesforce's official certification badge images**. Our site
states prominently that it is independent and not affiliated with Salesforce.

## 4. Data we already hold (so cards are feasible)

From `src/lib/cert-seo-data.ts` and friends, keyed by cert slug:

| Field | Coverage |
| --- | --- |
| Exam cost (`SLUG_TO_EXAM_COST`) | 91 certs |
| Questions / passing score / duration (`SLUG_TO_EXAM_LOGISTICS`) | 91 |
| Difficulty (`SLUG_TO_DIFFICULTY`) | 63 — **28 missing** |
| Official exam-guide URL (`SLUG_TO_EXAM_GUIDE_URL`) | 34 — **~60 missing** |
| Exam-tips page link (`SLUG_TO_EXAM_TIPS`) | 89 |
| Study-guide page link (`SLUG_TO_STUDY_GUIDE`) | 51 |
| Prerequisites (`src/lib/cert-prerequisites.ts`) | exists |
| Catalog: 94 unique cert hrefs across 11 role categories | — |
| Median salary per role (`SLUG_TO_OCCUPATION_DATA`) | exists |

So we could show *more* per card than Salesforce Ben does (pass mark, question
count, duration, salary), and we have 104 certs to their ~60.

## 5. The decision already taken

The owner has chosen: **put the card grid on the homepage `/`**, replacing the
six generic feature blurbs, and keep the two list pages as they are for now.

## 6. What we want from you

1. **Challenge the choice of page.** Is putting a 104-card directory on the
   brand homepage the right call for SEO and UX, or should it live on
   `/salesforce-certifications-list` (which already has all 104 certs in the
   same 11 role groups) with only a condensed "popular certs" row on `/`?
   Give a verdict, not a both-sides summary.
2. **Cannibalization.** With the grid on `/`, does keeping all three pages
   make the overlap worse? What is the minimum intervention that fixes it?
3. **UX of the grid itself.** Filter tabs vs. role sections stacked on one
   page vs. both. Client-side filtering costs interactivity and hydration;
   static sections cost scroll length. Which, for 104 items on mobile?
4. **Card anatomy.** Which fields earn their place, and which are noise?
   Rank them. We can show: name, level, cost, question count, pass mark,
   duration, prerequisites, median salary, link to our cert page, link to our
   study guide, link to the official exam guide.
5. **The 28 missing difficulty values and ~60 missing exam-guide URLs.** Do we
   ship with gaps (inconsistent cards), omit the fields entirely, or block on
   backfilling the data first?
6. **Official Salesforce badge images** on an explicitly independent site —
   trademark and trust implications. Recommend for or against.
7. **"Clumsy / rugged".** Read the section list in §1. Independently of the
   grid, what is actually making this homepage feel unpolished? Be specific
   about hierarchy, density and rhythm.
8. **Thin content.** Does a card grid genuinely fix a 274-word page, or is it
   structured data that search engines will not count as content? If the
   latter, what prose does the homepage need?
9. **Top 5 actions, prioritized**, with expected impact and risk for each.

Assume the repo is the source of truth. Be concrete; cite section names from
§1 where you can. Do not pad.
