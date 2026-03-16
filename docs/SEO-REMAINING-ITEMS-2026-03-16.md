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

### 4. Salary Data on VS Comparison Pages

**What:** Add salary comparison data to the remaining 25 VS pages. Two pages already have this (`pd1-vs-pd2`, `adm-201-vs-app-builder`) and serve as a template — a row with "Avg Salary with Cert A vs Cert B" information.

**Why:** Salary data is high-intent content — it answers "which cert pays more?" which is a common comparison query. Adds a concrete differentiator to thin VS pages.

**Template (from `pd1-vs-pd2`):**
```tsx
<tr>
  <td className="py-2.5 pr-4 font-medium">Avg Salary</td>
  <td className="py-2.5 pr-4">$X–$Y (US)</td>
  <td className="py-2.5">$A–$B (US)</td>
</tr>
```

**Effort:** Medium — requires salary research for each cert pair (25 pages). Could be scripted insertion once content is prepared.

---

### 5. "3 Concepts" — One Dedicated FAQ Per Concept (261 Items)

**What:** Each exam tips page currently has 1 summary FAQ item covering all 3 concepts. Adding one dedicated FAQ item per concept would give 4 FAQ items total per page (1 summary + 3 individual) for maximum PAA box coverage.

**Example for ADM-201:**
```js
{ question: 'Why do most ADM-201 candidates fail questions about OWD vs Profiles vs Roles?',
  answer: 'Candidates treat OWD, Profiles, and Roles as independent settings, but they combine additively — OWD sets the baseline, Role Hierarchy opens upward, and Sharing Rules extend horizontally. The most permissive rule wins for access.' }
```

**Scope:** 87 pages × 3 additional items = 261 FAQ items.

**Effort:** Large. Requires writing specific Q&A from each concept's body text. Could be partially automated from the amber section content.

**Note:** The 1-summary FAQ item (added in Session 2) already gives PAA eligibility. This is additive, not a baseline requirement.

---

## Summary

| # | Item | Priority | Effort | Blocked? |
|---|------|----------|--------|----------|
| 1 | Difficulty Heatmap data for ~78 certs | 🔴 High | Large | No |
| 2 | SVG Roadmap download/share option | 🟡 Medium | Small-Med | No |
| ~~3~~ | ~~Heatmap on study guide pages~~ | ~~🟢 Low~~ | ~~Small~~ | ✅ Done |
| 4 | Salary data on 25 VS pages | 🟢 Low | Medium | No |
| 5 | 3 dedicated FAQ items per concept | 🟢 Low | Large | No |
