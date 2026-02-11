# ADM-201 Page — SEO Launch Checklist

Based on a **pure SEO evaluation** (ranking, CTR, crawl efficiency). This doc maps the evaluation’s “Bottom Line” to current implementation.

---

## 1. Add FAQ schema — ✅ Done

**Evaluation:** “No FAQ schema implemented” (3/5) → “Biggest single SEO win.”

**Implementation:**
- **FAQPage** JSON-LD is output by `CertPageSeo` via `getCertFaqJsonLd(slug, certTitle)` in `src/lib/cert-seo-data.ts`.
- Rendered as `<script type="application/ld+json">` on every cert page, including ADM-201.
- FAQ content in the visible FAQ section and in schema are the same (same `getCertFaq()` source).

**Verify on live:**  
`curl -s 'https://www.trailblazeprep.com/certifications/administrator' | grep -o '"@type":"FAQPage"'`  
Or use [Google Rich Results Test](https://search.google.com/test/rich-results) with the page URL.

**Note:** If the evaluator saw “no FAQ schema,” they may have checked an older build or a different URL. Current code has it.

---

## 2. Lock a manual meta description — ✅ Done

**Evaluation:** “Page deserves a hand-written description” (4/5).

**Recommended copy (from evaluation):**  
> Prepare for the Salesforce Certified Platform Administrator (ADM-201) exam with a Winter ’26–updated study guide, section-wise weightage, free practice questions, and full mock exams. No sign-up required.

**Implementation:**
- Set in `src/app/certifications/administrator/page.tsx`: `descriptionText` in `generateMetadata()`.
- Used for `description`, `openGraph.description`, and `twitter.description`.
- Wording matches the recommendation (Winter ’26, free practice, no sign-up, full mocks).

---

## 3. Confirm expandable content is crawlable — ✅ Done

**Evaluation:** “Ensure syllabus checklist content is present in DOM on load, not injected after interaction.”

**Implementation:**
- Syllabus checklist uses a **native `<details>` element** (no JS toggling).
- The table and all text inside `<details>` are in the initial HTML (SSR); only the open/closed state is visual.
- Crawlers receive the full content in the first response. No change needed.

---

## 4. Slightly reduce above-the-fold noise — ✅ Done

**Evaluation:** “On this page only: collapse or visually de-emphasize certification mega-menu.”

**Implementation:**
- In `Header.tsx`, `isCertDetailPage(pathname)` is true for `/certifications/administrator` (and any single cert URL).
- When true, the “Choose your role” certification bar is **not rendered** (`!hideRoleBar`).
- Above-the-fold focus on ADM-201 content is already in place.

---

## Summary

| SEO item                         | Status   | Where |
|----------------------------------|----------|--------|
| FAQ schema                       | ✅ Done  | CertPageSeo → getCertFaqJsonLd |
| HowTo schema                     | ✅ Done  | CertPageSeo → getCertHowToJsonLd |
| Manual meta description          | ✅ Done  | administrator/page.tsx generateMetadata |
| Syllabus in DOM on load          | ✅ Done  | Native `<details>`, SSR |
| Cert mega-menu hidden on cert page | ✅ Done  | Header isCertDetailPage |

No further code changes are required for the evaluation’s four “move to dominant” items.

---

## Internal linking (already strong)

**Evaluation (4/5):** “Add 1–2 internal links from other admin-related pages pointing *to* this page with anchors like ‘ADM-201 study guide’, ‘Salesforce Administrator exam prep’.”

**Current implementation:**
- **Related certifications** on Advanced Administrator and App Builder (and others in the same role) link to this page with descriptive anchor text (e.g. “Platform Administrator (ADM-201) practice questions and study guide”) via `RelatedCertifications` + `getRelatedCerts()`.
- ADM-201 page’s **comparison section** links out to Advanced Administrator and App Builder; those pages link back via Related certifications.
- **Reinforcement added:**  
  - **Advanced Administrator page:** One line after the intro: “If you haven’t passed the entry-level admin exam yet, start with our [ADM-201 study guide](/certifications/administrator) first.”  
  - **App Builder page:** One line after the intro: “New to Salesforce admin? Our [Salesforce Administrator (ADM-201) exam prep](/certifications/administrator) is the usual first step.”

---

## Next (if you want)

- **Final SEO launch checklist** — This doc is it; use the “Verify on live” steps after deploy.
- **Internal-link anchor strategy** — Use “ADM-201 study guide” and “Salesforce Administrator exam prep” when adding new links from admin/consultant pages to this page.
- **Competitor comparison** — Compare this page vs top-ranking ADM-201 results to validate SERP readiness (content, schema, meta).
