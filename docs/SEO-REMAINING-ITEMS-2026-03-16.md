# TrailblazePrep — SEO Remaining Items

**Date:** 2026-03-16
**Status:** All "easy" Gemini-recommended items are done. These are the deferred/harder items.

---

## 🔴 High Priority

### 1. Difficulty Heatmap Data — ~78 Cert Pages

**What:** Add `DIFFICULTY_DATA` entries in `src/lib/difficulty-data.ts` for the ~78 certs that currently have no heatmap. The `DifficultyHeatmap` component is already mounted on every cert page but returns `null` silently when no data exists.

**Why:** The heatmap targets "how hard is the [Cert] exam?" featured snippets — a high-volume, zero-competition query pattern. Each heatmap row (Exam Section, Difficulty badge, Study Tip) gives Googlebot structured text it can surface as a rich result.

**Certs with data (9):**
`administrator`, `advanced-administrator`, `app-builder`, `developer-1`, `agentforce-specialist`, `sales-cloud`, `service-cloud`, `ai-associate`, `mulesoft-integration-foundations`

**Certs without data (~78):** All other cert pages.

**Data format per cert** (`src/lib/difficulty-data.ts`):
```ts
'agentforce-specialist': [
  { sectionName: 'Section Name', difficulty: 'hard', tip: 'One-sentence study tip.' },
  { sectionName: 'Another Section', difficulty: 'medium', tip: 'Study tip.' },
  // 5–8 rows per cert
],
```

**Difficulty values:** `'easy' | 'medium' | 'hard'`

**Effort:** Large — 78 certs × ~7 sections each = ~550 data rows. Recommend batch Python script with hardcoded content, grouped by cert family (Admin, Developer, Consultant, etc.).

**File:** `src/lib/difficulty-data.ts`
**Component:** `src/components/DifficultyHeatmap.tsx`

---

## 🟡 Medium Priority

### 2. Interactive SVG Roadmaps — Download/Share Option

**What:** Add a "Download as PNG" or "View full size" link below each SVG roadmap on the 5 path pages. Currently the SVGs are static — no way to save or share them.

**Why:** Gemini: "Encourage social sharing and backlinking from study groups." A downloadable roadmap PNG is shareable on LinkedIn, study Discord servers, and Reddit — each share is a potential backlink or citation.

**Pages affected (5):**
- `/admin-certification-path` — `AdminCertRoadmap`
- `/developer-certification-path` — `DeveloperCertRoadmap`
- `/consultant-certification-path` — `ConsultantCertRoadmap`
- `/architect-certification-path` — `ArchitectCertRoadmap`
- `/certification-path` — `OverviewCertRoadmap`

**Implementation options:**
- **Option A (simplest):** Host static PNG versions of each SVG on `/public/roadmaps/`. Add `<a href="/roadmaps/admin-cert-roadmap.png" download>` link below the SVG.
- **Option B (dynamic):** Client component using `html-to-image` or canvas export to convert the SVG DOM node to a PNG on click. No static files needed but requires a `'use client'` component.

**Component:** `src/components/CertRoadmapSvg.tsx`

**Effort:** Small-Medium. Option A takes ~30 min (export PNGs from browser, host as static assets, add download link to each path page). Option B takes longer due to client-side complexity.

---

## 🟢 Low Priority / Future

### 3. ~~Difficulty Heatmap — Study Guide Pages~~ ✅ DONE

`DifficultyHeatmap` added to all 52 study guide pages (commit `3461ccd`). Already renders for 9 certs with data; auto-activates for any cert as data is added to `difficulty-data.ts`.

---

### 4. ~~Salary Data on VS Comparison Pages~~ ✅ DONE (2026-03-17)

Avg Salary row added to all 26 VS pages that have a cert comparison table. Data in `src/lib`; template: one row per table with US salary ranges per cert.

---

### 5. ~~"3 Concepts" — One Dedicated FAQ Per Concept (261 Items)~~ ✅ DONE (2026-03-17)

87 exam-tips pages now have 3 dedicated concept FAQs each (261 items total), sourced from the amber "3 Concepts" section. Implemented via `src/lib/exam-tips-concept-faqs.ts` and `getConceptFaqs(pageSlug)`; scripts: `extract-concept-faqs.py`, `wire-concept-faqs.py`.

---

## Summary

| # | Item | Priority | Effort | Status |
|---|------|----------|--------|--------|
| 1 | Difficulty Heatmap data for ~78 certs | 🔴 High | Large | Open |
| 2 | SVG Roadmap download/share option | 🟡 Medium | Small-Med | Open |
| ~~3~~ | ~~Heatmap on study guide pages~~ | — | — | ✅ Done |
| ~~4~~ | ~~Salary data on VS pages~~ | — | — | ✅ Done (26 pages) |
| ~~5~~ | ~~3 dedicated FAQ items per concept~~ | — | — | ✅ Done (261 items) |
