# Gemini Review Request — trailblazeprep.com Technical SEO Sprint

**Date:** April 2026
**Site:** trailblazeprep.com (Next.js 14, static, Vercel)
**Submitted by:** Krishna Mohan
**Purpose:** You reviewed our codebase last sprint and gave us 4 technical findings. We have implemented all of them. Please validate our implementations and advise on what to work on next.

---

## What You Asked Us to Fix (Your Previous Feedback)

You identified 4 issues:

1. **CLS on dynamic components** — `PracticeQuestionsSection` loaded with `ssr: false`, Googlebot saw a blank div
2. **E-E-A-T author image** — No `next/image`, CSS initials placeholder only
3. **Thin content / doorway page risk** — Template-heavy pages with no unique depth
4. **Course schema `provider`** — Missing on some schemas

---

## What We Implemented

### Fix 1 — CLS (✅ Complete)

Removed `ssr: false` from the `dynamic()` import of `PracticeQuestionsSection` in `CertificationBodyTemplate.tsx`. Next.js now SSRs question content to HTML on the server. Googlebot reads all questions in the first byte. Check Answer interactivity activates after hydration.

**File:** `src/components/certifications/CertificationBodyTemplate.tsx`

---

### Fix 2 — Author Image & E-E-A-T (✅ Complete)

Replaced CSS initials div with `next/image` in `ContentPageAuthor.tsx`. Real author headshot (`krishna-mohan.jpg`) is now in `public/authors/`. Component renders:

```tsx
<Image
  src="/authors/krishna-mohan.jpg"
  alt="Krishna Mohan — Salesforce certified author"
  width={32}
  height={32}
  className="h-8 w-8 rounded-full object-cover"
  priority
/>
```

Author bio displays: name, certifications (ADM-201, PD1, PD2, App Builder, Consultant), current release label, links to /team, /about, /contact.

**File:** `src/components/ContentPageAuthor.tsx`, `public/authors/krishna-mohan.jpg`

---

### Fix 3 — Thin Content (✅ Complete — 84/84 pages)

Two sub-items:

**a) Semantic headings** — Block headings in `KeyConceptsSection` and `ScenarioTipsSection` upgraded from `<p>` to `<h3>`. All promoted cert pages now have correct H1 → H2 → H3 hierarchy.

**b) Unique content enrichment** — All 84 promoted cert JSON files enriched with:
- `**bold**` markdown on first occurrence of domain-specific Salesforce terms (SOQL, OWD, Governor Limits, DataWeave, Journey Builder, Scheduling Policies, etc.)
- Internal `[cert name](/certifications/slug)` links within body text

**Files:** `src/components/certifications/CertificationBodyTemplate.tsx`, `src/lib/cert-page-spike/promoted-associate/*.json` (84 files)

---

### Fix 4 — Course Schema `provider` (✅ Already present)

`getCourseJsonLd()` in `schema-data.ts` already had `provider: { '@type': 'Organization', name: 'Trailblaze Prep', url: baseUrl }`. No change needed.

---

## Additional Improvements Made in the Same Sprint

Beyond your 4 items, we also fixed:

| Item | What We Did |
|---|---|
| **ToC crawler visibility** | Converted `<button onClick>` to `<a href="#id">` in `CertTableOfContents.tsx` — Googlebot can now follow in-page anchor links |
| **Markdown parser infinite loop** | Fixed lone `*` handling in `markdown-parser.tsx` — was crashing Vercel builds on pages with `dw.*` API notation |
| **Year/release in URLs** | Renamed year-specific slugs (e.g. `/adm-201-exam-tips-2026`) to generic (e.g. `/adm-201-exam-tips`). Added 301 redirects. Added `RELEASE_YEAR` constant — 241 title strings now auto-update from one constant per release |
| **Sitemap — 87 exam-tips pages** | All 87 exam-tips pages are self-canonical but were excluded from sitemap. Now dynamically included via `readdirSync` |
| **Sitemap `<lastmod>`** | Replaced `new Date()` (always today) with `new Date(RELEASE_DATE)` — accurate and tied to content refresh cycle |
| **Internal linking** | All 87 exam-tips pages are linked from their parent cert pages via `CertIntroParagraph` and the `SLUG_TO_EXAM_TIPS` map |

---

## Current Technical State

| Category | Status |
|---|---|
| Technical SEO | ✅ A+ |
| Core Web Vitals / CLS | ✅ Resolved |
| E-E-A-T (author image) | ✅ Real headshot live |
| Thin content (84/84 pages) | ✅ Complete |
| Schema (Course, FAQPage, LearningResource, Article, BreadcrumbList) | ✅ All present |
| Sitemap coverage | ✅ All canonical pages included |
| Internal linking | ✅ All exam-tips pages linked from parent certs |
| URL structure | ✅ No year/release in any URL |
| Release maintenance | ✅ One constant update per release cycle |

---

## What We Want You to Review Next

We believe the technical foundation is now complete. We are looking for your guidance on what the **next sprint** should focus on to move from A+ technical to **page 1 rankings** for target queries.

### Specific Questions

**1. Content depth — are we done?**
Each cert page has: exam weightage card, ExamPrepContent section, KeyConcepts (5 blocks with bold terms + internal links), ScenarioTips (5 blocks), DifficultyHeatmap, 5 practice questions with explanations. Is this enough unique depth per page, or do we need more sections?

**2. FAQ visibility**
We have FAQPage JSON-LD on all 103 pages (87 cert pages + 16 non-cert pages). The FAQ questions/answers are rendered visibly on the page inside `CertPageFaq`. Is there anything specific about the rendering (expand/collapse vs. always-visible) that affects FAQ snippet eligibility?

**3. Exam-tips pages — content depth**
The 87 exam-tips pages exist as separate routes with their own exam-tips-specific content (concept FAQs, study tips). Are these pages likely to rank independently for "[cert name] exam tips" queries, or would Google prefer to surface the parent cert page instead?

**4. Next content format**
We have: cert pages, exam-tips pages, study guide pages, comparison pages (vs), how-to pages, path pages. What content format or page type are we missing that would most improve our overall topical authority for Salesforce certification queries?

**5. Core Web Vitals — anything left?**
With SSR now enabled for practice questions, `next/image` for author photo, optimized CSS, and compressed responses — are there any remaining CWV concerns worth addressing?

---

## Tech Stack (for context)

- **Framework:** Next.js 14 App Router, fully static (SSG, 306 pages)
- **Hosting:** Vercel
- **Schema:** 7 JSON-LD types per cert page — WebPage, Article, BreadcrumbList, FAQPage, Course, LearningResource, EducationalOccupationalCredential
- **Sitemap:** Dynamic generation via TypeScript, `sitemap.ts`
- **Images:** `next/image` with AVIF/WebP formats, `minimumCacheTTL: 31536000`
- **Robots:** GPTBot, ClaudeBot, Google-Extended all explicitly allowed

---

## Ask

Please review the above and tell us:

1. Are our implementations of your original 4 feedback items correct and complete?
2. Are there any remaining issues you can identify from the descriptions above?
3. What should the next sprint focus on to move from technical A+ to page 1 rankings?

Thank you.
