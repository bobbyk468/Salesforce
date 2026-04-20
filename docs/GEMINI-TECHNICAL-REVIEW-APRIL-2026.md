# Gemini Technical & SEO Review — April 2026

**Date:** April 2026
**Scope:** Full site technical audit — performance, SEO, schema, content quality, crawlability

---

## Feedback Received

### 1. ToC Accessibility (Crawler Visibility)

**Gemini finding:** Table of Contents links were `<button>` elements. Googlebot does not execute `onClick` JavaScript and could not follow the anchor links to page sections.

**Resolution:** Converted all `<button onClick>` elements in `CertTableOfContents.tsx` to `<a href="#section-id">` anchor tags with `e.preventDefault()` + scroll logic. Googlebot now sees crawlable in-page links.

---

### 2. Subheading Semantic Hierarchy

**Gemini finding:** Key Concepts and Scenario Tips block headings were `<p>` elements styled to look like headings — semantically invisible to crawlers and screen readers.

**Resolution:** Updated `KeyConceptsSection` and `ScenarioTipsSection` in `CertificationBodyTemplate.tsx` to use `<h3>` instead of `<p>`. All 84 promoted cert pages now have correct H1 → H2 → H3 hierarchy.

---

### 3. Thin Content / Content Depth

**Gemini finding (general guidance):** Pages with plain text paragraphs and no structured content landmarks risk "thin content" classification. The AI validated that the `KeyConcepts` + `ScenarioTips` section structure is the correct approach to avoid this.

**User decision:** No new action required. Continue rolling out `keyConcepts` and `scenarioTips` blocks across all remaining certs using the existing JSON body format.

**Current status:** 56 of 84 promoted cert JSON files enriched with:
- `**bold**` markdown on first occurrence of key Salesforce terms (Assignment Rules, SOQL, OWD, etc.)
- Internal `[cert name](/certifications/slug)` links within body text

---

### 4. CLS / Skeleton Loader (Practice Questions)

**Gemini finding:** `PracticeQuestionsSection` was loaded with `ssr: false` (dynamic import). Googlebot received a blank `<div>` placeholder — no question content was visible without JavaScript execution.

**User decision:** Option (b) — render questions server-side, lazy-load only the interactive "Check Answer" logic.

**Resolution:** Removed `ssr: false` from the `dynamic()` import in `CertificationBodyTemplate.tsx`. Next.js now SSRs `PracticeQuestionsSection` — all questions render to HTML on the server. "Check Answer" interactivity activates after client hydration (progressive enhancement). Googlebot sees real content immediately.

---

### 5. Author Image & E-E-A-T Signals

**Gemini finding:** The author byline used a CSS initials placeholder (`KM` in a colored div) instead of a real photo. Google's E-E-A-T guidelines treat named authors with photos more favorably than anonymous/icon-only bylines.

**User decision:** Add `next/image` component pointing to `/authors/placeholder.jpg` until the real headshot is ready.

**Resolution:**
- Added `next/image` to `ContentPageAuthor.tsx` replacing the CSS initials div
- Created `public/authors/placeholder.jpg` as the temporary placeholder
- **To complete:** Drop `krishna-mohan.jpg` into `public/authors/` — the `<Image src>` attribute is the only line that needs changing

---

### 6. Course Schema — `provider` Property

**Gemini finding:** Course JSON-LD should include a `provider` property to identify the organization offering the course, improving structured data validity.

**User decision:** Skip `offers` schema (free practice tests only). Just confirm `provider` is present.

**Resolution:** `getCourseJsonLd()` in `schema-data.ts` already had `provider: { '@type': 'Organization', name: 'Trailblaze Prep', url: baseUrl }` — no change required.

---

### 7. Year/Release in URLs

**Gemini finding (related GSC issue):** Year-specific URL slugs (e.g., `/adm-201-exam-tips-2026`) require re-indexing every release cycle and cause redirect chains when content is updated.

**User decision:** No year or release name in any URL. Year/release info belongs in page content only.

**Resolutions:**
- Renamed `adm-201-exam-tips-2026`, `pd1-exam-tips-2026`, `pd2-exam-tips-2026` routes to generic slugs
- Added 301 redirects in `next.config.js` for all old year-specific paths
- Added `RELEASE_YEAR` constant to `release-data.ts` — replaces all 241 hardcoded `'2026'` strings in page titles so a single constant update covers all pages next release
- Fixed stale internal link in `developer-2.json` (`/pd1-exam-tips-2026` → `/pd1-exam-tips`)

---

### 8. Sitemap Coverage

**Gemini/GSC finding:** 87 exam-tips pages were self-canonical but excluded from `sitemap.xml` (comment was outdated — it said canonical pointed to parent cert pages, which was no longer true).

**Resolution:** `sitemap.ts` now dynamically generates exam-tips entries via `readdirSync` on `src/app/` — any new exam-tips route is automatically included without manual sitemap edits.

---

## Files Changed

| File | Change |
|---|---|
| `src/components/CertTableOfContents.tsx` | `<button>` → `<a href>` for all ToC items |
| `src/components/certifications/CertificationBodyTemplate.tsx` | `<p>` → `<h3>` in KeyConcepts/ScenarioTips; removed `ssr: false` from PracticeQuestionsSection |
| `src/components/ContentPageAuthor.tsx` | Added `next/image` with `/authors/placeholder.jpg` |
| `public/authors/placeholder.jpg` | Placeholder image (swap with `krishna-mohan.jpg` when ready) |
| `src/lib/release-data.ts` | Added `RELEASE_YEAR` constant |
| `src/lib/cert-seo-data.ts` | Replaced 241 hardcoded `2026` with `${RELEASE_YEAR}`; descriptions already process through `withCurrentReleaseLabel()` |
| `src/app/sitemap.ts` | Dynamic exam-tips URL generation via `readdirSync` |
| `src/lib/cert-page-spike/promoted-associate/developer-2.json` | Fixed stale href `/pd1-exam-tips-2026` → `/pd1-exam-tips` |
| `src/lib/cert-page-spike/markdown-parser.tsx` | Fixed infinite loop on lone `*` characters (e.g. `dw.*` API notation) |
| `next.config.js` | 301 redirects for year-specific → generic exam-tips slugs |
| `src/lib/cert-page-spike/promoted-associate/*.json` (56 files) | Bold terms + internal links added via markdown |

---

## For Next Release (e.g. Summer '26)

Update only `src/lib/release-data.ts`:

```ts
export const RELEASE_CURRENT = "Summer '26"
export const RELEASE_PREVIOUS = "Spring '26"
export const RELEASE_YEAR = '2026'        // stays 2026 until calendar year changes
export const RELEASE_DATE = '2026-07-01'  // update to actual refresh date
```

No URL changes. No redirect additions. No sitemap edits.

---

## Pending

- [ ] Drop `krishna-mohan.jpg` into `public/authors/` and update `src` in `ContentPageAuthor.tsx`
- [ ] Continue enriching remaining 28 cert JSON bodies (those with no matching bold terms yet)
