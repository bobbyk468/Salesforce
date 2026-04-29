# Ahrefs-Style SEO Audit — trailblazeprep.com
**Date:** 2026-04-29 | **Audited by:** Claude Code (codebase static analysis)

---

## Overview

Static analysis of the Next.js 14 codebase against the checks Ahrefs Site Audit runs. Issues are grouped by severity. Each entry includes the problem, affected file with line reference, and a specific code-level fix.

---

## CRITICAL

### 1. Generic H1 on Most Cert Pages
- **Affected:** ~85 cert pages (all except `administrator` and `developer-1`)
- **File:** `src/lib/cert-seo-data.ts` line 2661 — `getCertH1Text()`
- **Problem:** Only two slugs (`administrator`, `developer-1`) have custom H1s. Every other cert falls through to:
  ```
  `${primaryName} – Complete ${TITLE_YEAR} Guide`
  ```
  This is a generic, low-differentiation H1. Ahrefs measures H1 ↔ title tag alignment — when the H1 says "Complete 2026 Guide" but the title says "Free [Cert] Practice Exam", there is a topical mismatch. Pages like `slack-developer` (position 8, 1,684 impressions) are leaving easy CTR gains on the table.
- **Fix:** Add custom H1 overrides for the top 10 pages by impressions. Pattern to follow:

  ```ts
  // In getCertH1Text(), add before the final return:
  if (slug === 'slack-developer') {
    return `Salesforce Certified Slack Developer: Free Practice Exam & Study Guide (${TITLE_YEAR})`
  }
  if (slug === 'email-specialist') {
    return `Salesforce Email Specialist (MC Email): Free Practice Exam & Study Guide (${TITLE_YEAR})`
  }
  if (slug === 'pardot-specialist') {
    return `Salesforce Pardot Specialist: Free Practice Exam & Study Guide (${TITLE_YEAR})`
  }
  // ... repeat for: data-360-consultant, marketing-cloud-consultant, app-builder,
  //     mulesoft-integration-architect, service-cloud, data-architect, developer-2
  ```

---

## WARNING

### 2. Exam Weightage Schema — Validate Against schema.org
- **Affected:** All cert pages that render an exam weightage section
- **File:** `src/lib/exam-weightage-data.ts` (schema output); rendered in `CertPageSeo.tsx`
- **Problem:** The exam weightage is output as structured data. If it uses any non-standard `@type` combination (e.g. `Table` + `ItemList` hybrid), Google's Rich Results Test will flag it as invalid. Ahrefs picks this up as "Invalid structured data."
- **Fix:**
  1. Run the Rich Results Test on any cert page: https://search.google.com/test/rich-results
  2. If errors are reported, update the schema to use standard `ItemList` with `ListItem` children:
  ```json
  {
    "@type": "ItemList",
    "name": "ADM-201 Exam Weightage by Section",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Configuration & Setup", "description": "20%" },
      { "@type": "ListItem", "position": 2, "name": "Object Manager & Lightning App Builder", "description": "20%" }
    ]
  }
  ```

### 3. Practice Test Pages — Add `noindex` to Eliminate GSC "Duplicate" Warning
- **Affected:** `/certifications/administrator-practice-test`, `/certifications/email-specialist-practice-test`
- **Files:** `src/lib/cert-seo-data.ts` lines 59–72 (canonical mapping); practice test page files
- **Problem:** Both pages are canonicalized to their parent (ADM-201 and Email Specialist) and excluded from sitemap. However, Googlebot may still crawl and index them, surfacing them in GSC Coverage as "Duplicate without user-selected canonical." Adding `noindex` eliminates the risk entirely.
- **Fix:** Add `robots: { index: false }` in the `generateMetadata` export of both practice test pages:
  ```ts
  // In src/app/certifications/administrator-practice-test/page.tsx
  export async function generateMetadata(): Promise<Metadata> {
    return {
      // ... existing metadata ...
      robots: { index: false, follow: true },
    }
  }
  ```

### 4. Redirect Verification — Data Cloud → Data 360
- **Affected:** 3 URL pairs
- **File:** `next.config.js` lines 68–82
- **Problem:** Three 301 redirects handle the Data Cloud → Data 360 rebrand. These are currently single-hop (no chain) and the destination pages exist. The risk is: if destination pages are ever renamed or redirected again, a chain forms silently. Ahrefs flags redirect chains as a warning and penalises the PageRank passed through.
- **Fix:** No code change needed now. Monitoring action:
  1. In Ahrefs → Site Audit → Redirects, filter for chains involving `data-cloud` or `data-360`
  2. In GSC → Coverage, watch for destination URLs appearing under "Redirect"
  3. Add a code comment in `next.config.js` to flag this risk:
  ```js
  // CAUTION: If data-360-consultant is ever renamed, update the destination here
  // to avoid a redirect chain. Ahrefs flags A→B→C chains and reduces PageRank flow.
  ```

### 5. Meta Descriptions — Duplicate Pattern Across AP Certs
- **Affected:** ~30 Accredited Professional cert pages
- **File:** `src/lib/cert-seo-data.ts` lines 820–886 — `ctrDescriptionOverrides`
- **Problem:** All AP cert descriptions follow an identical template:
  ```
  "Free [Cert Name] AP practice exam: 60 questions, ~65% passing score, 90 min. $100 fee. Spring '26 study guide with exam tips & detailed explanations included."
  ```
  Ahrefs flags near-identical descriptions as "Duplicate meta descriptions." While they're technically unique (different cert names), the structural similarity means they offer no differentiated SERP snippet. GSC also shows these AP pages have near-zero clicks despite impressions.
- **Fix:** Add a differentiating hook for each AP description. Minimum viable improvement — add a unique benefit line per AP cert:
  ```ts
  'process-automation-ap': `Free Process Automation AP exam prep: covers Flow Builder, approval processes & automation rules. 60 Qs, ~65% pass, 90 min. $100 fee. Spring '26 guide.`,
  'contact-center-ap': `Free Contact Center AP exam prep: covers Service Cloud Voice, CTI & omni-channel routing. 60 Qs, ~65% pass, 90 min. $100 fee. Spring '26 guide.`,
  // ... one unique hook per AP cert
  ```

### 6. Sitemap Auto-Discovery Gap — Manual Study Guide List
- **Affected:** Study guide pages (15+ pages)
- **File:** `src/app/sitemap.ts`
- **Problem:** Exam-tips and role pages are discovered automatically from the filesystem. Study guide pages are on a manual list. Any new study guide added to `src/app/` but not added to the sitemap list will be invisible to Googlebot and Ahrefs crawler.
- **Fix:** Replace the manual list with filesystem discovery. Follow the same pattern already used for exam-tips pages:
  ```ts
  // Current (manual — fragile):
  const studyGuidePages = [
    '/adm-201-study-guide',
    '/developer-1-study-guide',
    // ...
  ]

  // Proposed (auto-discovery — safe):
  const studyGuideDirs = await fs.readdir(path.join(process.cwd(), 'src/app'))
  const studyGuidePages = studyGuideDirs
    .filter(d => d.endsWith('-study-guide'))
    .map(d => `/${d}`)
  ```

---

## INFO / MINOR

### 7. Build-Time Title Length Assertion
- **File:** `src/lib/cert-seo-data.ts` (`clampTitle()` at line ~500)
- **Problem:** `clampTitle()` truncates titles at runtime but there is no build-time test. A typo in a cert entry (e.g. forgetting to use `clampTitle`) could ship an over-length title silently.
- **Fix:** Add a test file `src/lib/__tests__/cert-seo-data.test.ts`:
  ```ts
  import { getAllCertSlugs, buildCertMetadata } from '../cert-seo-data'

  test('all cert titles are ≤60 characters', () => {
    for (const slug of getAllCertSlugs()) {
      const { title } = buildCertMetadata(slug)
      expect(title.length).toBeLessThanOrEqual(60)
    }
  })

  test('all cert descriptions are ≤160 characters', () => {
    for (const slug of getAllCertSlugs()) {
      const { description } = buildCertMetadata(slug)
      expect(description.length).toBeLessThanOrEqual(160)
    }
  })
  ```

### 8. OG `imageAlt` Coverage Spot-Check
- **File:** `src/lib/cert-seo-data.ts`
- **Problem:** `imageAlt` was added to all 87 cert entries. Confirm none were missed.
- **Fix (verification command — no code change):**
  ```bash
  grep -c "imageAlt" src/lib/cert-seo-data.ts
  # Should equal the number of cert entries (87+)
  ```
  If the count is lower than expected, search for cert entries missing the field:
  ```bash
  grep -B5 "twitterCard\|twitter:" src/lib/cert-seo-data.ts | grep -v "imageAlt"
  ```

### 9. Robots.txt — Undocumented Env Var Dependency
- **File:** `src/app/robots.ts`
- **Problem:** The canonical host in robots.txt comes from `NEXT_PUBLIC_SITE_URL`. If set to the apex domain (`trailblazeprep.com`) instead of `https://www.trailblazeprep.com`, Googlebot will see an inconsistent host declaration.
- **Fix:** Add a defensive fallback and a comment:
  ```ts
  // robots.ts
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.trailblazeprep.com')
    .replace(/^https?:\/\/(?!www\.)/, 'https://www.') // ensure www prefix

  export default function robots(): MetadataRoute.Robots {
    return {
      rules: { userAgent: '*', allow: '/' },
      sitemap: `${siteUrl}/sitemap.xml`,
      host: siteUrl,
    }
  }
  ```

### 10. Internal Linking Depth for AP Cert Pages
- **Affected:** ~30 Accredited Professional cert pages
- **Problem:** AP cert pages are only reachable from the `/certifications` listing page and the sitemap. There are no contextual "Related Certifications" links from parent cert pages (e.g. the `service-cloud` page does not link to `contact-center-ap`, even though they're closely related). Low internal link count signals low importance to Googlebot.
- **Fix:** Add a "Related Accredited Professionals" section at the bottom of parent cert pages. Example for `src/app/certifications/service-cloud/page.tsx`:
  ```tsx
  <section className="mt-8">
    <h3 className="text-lg font-semibold">Related Accredited Professionals</h3>
    <ul>
      <li><Link href="/certifications/contact-center-ap">Contact Center AP</Link></li>
      <li><Link href="/certifications/order-management-admin-ap">Order Management Admin AP</Link></li>
    </ul>
  </section>
  ```
  A mapping object in `cert-seo-data.ts` (e.g. `CERT_TO_RELATED_APS`) would make this data-driven rather than hardcoded per page.

---

## Summary Table

| # | Issue | Severity | File | Fix Complexity |
|---|-------|----------|------|----------------|
| 1 | Generic H1 on ~85 cert pages | Critical | `cert-seo-data.ts:2661` | Low — add slug conditions |
| 2 | Exam weightage schema validation | Warning | `exam-weightage-data.ts` | Medium — validate first, then fix schema |
| 3 | Practice test pages missing `noindex` | Warning | Practice test `page.tsx` files | Low — add one metadata field |
| 4 | Redirect chain risk (Data Cloud) | Warning | `next.config.js:68` | None now — monitoring + comment |
| 5 | Duplicate AP cert meta descriptions | Warning | `cert-seo-data.ts:820–886` | Medium — write 30 unique descriptions |
| 6 | Sitemap manual list for study guides | Warning | `sitemap.ts` | Low — swap to filesystem discovery |
| 7 | No build-time title/description assertion | Info | New test file | Low — add test |
| 8 | OG imageAlt coverage spot-check | Info | `cert-seo-data.ts` | None — grep verification only |
| 9 | Robots.txt env var undocumented | Info | `robots.ts` | Low — add fallback + comment |
| 10 | Thin internal linking on AP pages | Info | Parent cert page files | Medium — add related AP section |

---

## Recommended Priority Order

| Week | Issues | Rationale |
|------|--------|-----------|
| Week 1 | 1, 3 | H1 customization on top 10 pages has direct CTR impact; `noindex` on practice pages is a 5-min fix |
| Week 2 | 2, 6 | Schema validation needs Rich Results Test first; sitemap fix prevents future orphaned pages |
| Week 3 | 5, 10 | AP description rewrites (30 descriptions) + internal linking (data-driven section) |
| Ongoing | 4, 7, 8, 9 | Monitoring, build tests, and defensive code — no urgency |
