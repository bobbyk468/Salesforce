# TrailblazePrep SEO Implementation Log

**Site:** https://www.trailblazeprep.com
**Stack:** Next.js 14 App Router, Static Site Generation, deployed on Vercel
**Branch:** `Winter'26`
**Last updated:** 2026-03-16

---

## Overview

Transformation from a standard content site to a feature-rich authority platform, implementing E-E-A-T signals, Information Gain features, and schema coverage across all 289 pages.

---

## ✅ COMPLETED

### Phase 1 — Technical SEO Baseline (Pre-Gemini Evaluation)

| Item | Scope | Commit |
|------|-------|--------|
| Canonical URLs on all 117 pages | Sitewide | Early commits |
| OG images + Twitter cards with `imageAlt` | 117 pages | Early commits |
| H1 on every page | 117 pages | Early commits |
| Breadcrumb schema (BreadcrumbList JSON-LD) | 117 pages | Early commits |
| Title ≤60 chars, description ≤160 chars | 117 pages | Early commits |
| Article JSON-LD on all content pages | All content pages | Early commits |
| FAQPage JSON-LD | 87 cert pages + 16 non-cert pages = 103 pages | Early commits |
| 7-schema block per cert page (CertPageSeo) | 87 cert pages | Early commits |
| Dynamic metadata on role pages | 10 role pages | Early commits |
| 301 Redirects for old slugs | `/integration-architecture-designer` → `/integration-architect`, `/javascript-developer-1` → `/javascript-developer-i` | `next.config.js` |
| Accessibility 100/100 PSI | Sitewide (contrast, heading order, ARIA) | `a345d24`–`1931a0e` |
| ContentPageAuthor byline | All 139 content pages | `db1f494` |
| Canonical URLs on exam tips pages | All 87 exam tips pages | `65877c4` |

---

### Phase 2 — E-E-A-T Signals

| Item | Scope | Detail | Commit |
|------|-------|--------|--------|
| **ContentPageAuthor component** | VS pages (27), path pages (5), exam tips pages (87) | Compact byline: "Written and reviewed by Krishna Mohan — ADM-201, PD1, PD2..." | `6233a40` |
| **"Verified by Krishna Mohan — 14× Certified" badge** | All 89 cert pages (via CertPageIntro) | Green shield badge with credentials, links to /team and Trailblazer.me | `6458cf0` |
| **Person schema JSON-LD** | All 89 cert pages (via CertPageIntro) | `@type: Person`, `sameAs: trailblazer/krishnamohan`, `knowsAbout` array | `5896c1f` |
| **Trailblazer.me profile link** | All 89 cert pages | Added to Verified-by badge alongside /team link | `5896c1f` |

---

### Phase 3 — Information Gain Features

#### Decision Matrices (VS Pages)
All 27 comparison pages have a "Decision Matrix: X or Y?" table with "Your Situation → Choose This Cert" rows.

| Pages | Commit |
|-------|--------|
| `adm-201-vs-app-builder`, `pd1-vs-pd2`, `adm-201-vs-advanced-administrator` | `6233a40` |
| `sales-cloud-vs-service-cloud`, `agentforce-specialist-vs-ai-associate`, `app-builder-vs-developer-1` | `7614b02` |
| All remaining 21 VS pages | `7614b02` |

#### "3 Concepts That Fail Most Candidates" — Exam Tips Pages
Amber-highlighted sections covering the 3 most confidently-wrong exam topics with mini-case-study explanations.

| Status | Pages | Commit |
|--------|-------|--------|
| First 12 (original) | adm-201, pd1, app-builder, service-cloud, email-specialist, tableau-data-analyst, slack-developer, agentforce, mulesoft-foundations, sales-cloud, advanced-admin, developer-2 | `7614b02` |
| PD1 + App Builder upgraded to mini-case-study style | 2 pages | `5896c1f` |
| Remaining 75 pages | All other exam tips pages (all cert families) | `53566cf` |
| **Total: all 87 exam tips pages** | ✅ 100% complete | — |

#### Difficulty Heatmap
Component: `src/components/DifficultyHeatmap.tsx`
Data file: `src/lib/difficulty-data.ts`

| Status | Certs with data | Commit |
|--------|----------------|--------|
| Component created + data for 9 certs | administrator, advanced-administrator, app-builder, developer-1, agentforce-specialist, sales-cloud, service-cloud, ai-associate, mulesoft-integration-foundations | `7614b02` |
| **Remaining ~78 certs** | ❌ No data yet — component returns `null` silently | Pending |

---

### Phase 4 — Content Depth

#### Key Concepts Sections (Cert Pages)
All 87 cert pages have `<div id="key-concepts">` with 5 topic blocks. Insertion point: before `<div id="practice-questions">`. TOC includes `{ id: 'key-concepts', title: 'Key Concepts' }`.

#### Role Pages — Long-Form Career Guides
All 10 role pages expanded from thin cert-grid template to full career guides.

| Data added per role | Commit |
|---------------------|--------|
| Salary range (entry + senior) | `c898368` |
| Years to first cert | `c898368` |
| Daily responsibilities (5–7 items) | `c898368` |
| Career path (linear progression) | `c898368` |
| Top skills (chip display) | `c898368` |

Roles covered: `administrator`, `developer`, `consultant`, `architect`, `marketing`, `designer`, `tableau`, `associate`, `accredited-professional`, `sales`

#### Regional Pricing Table
Added to `salesforce-certification-cost` — USD vs INR table for all 6 cert tiers with exchange rate disclaimer.
Commit: `6458cf0`

#### Regional Salary Table
Added to `salesforce-certification-salary` — mid-level salary by role across US / UK / Australia / India.
Commit: `6458cf0`

---

### Phase 5 — Visual SEO

#### SVG Certification Roadmaps
Component: `src/components/CertRoadmapSvg.tsx`

| SVG | Page | Commit |
|-----|------|--------|
| `AdminCertRoadmap` | `/admin-certification-path` | `6458cf0` |
| `DeveloperCertRoadmap` | `/developer-certification-path` | `6458cf0` |
| `ConsultantCertRoadmap` | `/consultant-certification-path` | `6458cf0` |
| `ArchitectCertRoadmap` | `/architect-certification-path` | `6458cf0` |
| `OverviewCertRoadmap` | `/certification-path` | `6458cf0` |

`<title>` and `<desc>` elements added inside all SVGs for Googlebot text indexing.
Commit: `5896c1f`

---

### Phase 6 — Title Tag CTR Optimisation
`buildWinterTitle()` in `src/lib/cert-seo-data.ts` updated so the fallback candidates include "Free Practice Exam" — affects ~65 certs not in the explicit title override map.
Commit: `c898368`

---

### Phase 7 — Bug Fixes

| Bug | Fix | Commit |
|-----|-----|--------|
| experience-cloud-exam-tips primary CTA → `/certifications/nonprofit-cloud` | Fixed → `/certifications/experience-cloud` | `5896c1f` |
| cpq-administrator-exam-tips CTA → `/certifications/cpq-billing-ap` | Fixed → `/certifications/cpq-administrator` | `5896c1f` |
| data-cloud-consultant-exam-tips CTA → `/certifications/crm-analytics-einstein-discovery-consultant` | Fixed → `/certifications/data-cloud-consultant` | `5896c1f` |
| marketing-cloud-consultant-exam-tips CTA → `/certifications/marketing-cloud-engagement-admin` | Fixed → `/certifications/marketing-cloud-consultant` | `5896c1f` |
| pardot-specialist-exam-tips CTA → `/certifications/pardot-consultant` | Fixed → `/certifications/pardot-specialist` | `5896c1f` |

---

## ❌ PENDING

### High Priority (Gemini P0/P1)

#### 1. FAQSchema for "3 Concepts" Sections — All 87 Exam Tips Pages
**What:** Add 1–3 FAQ items per exam tips page based on the "3 Concepts" content, so Google indexes them as People Also Ask (PAA) answers.
**Why:** Gemini: "If you ask 'Why do students fail the PD1?' and answer it in the schema, you'll dominate the PAA boxes."
**How:** Add to each page's `faqItems` array:
```js
{
  question: 'What concepts do most [Cert] candidates get wrong?',
  answer: 'The most commonly misunderstood topics are: [concept 1 brief], [concept 2 brief], [concept 3 brief].'
}
```
**Scope:** 87 pages — needs a Python script
**Effort:** Medium (bulk script + content summarisation)

---

#### 2. Difficulty Heatmap Data — Remaining ~78 Cert Pages
**What:** Add `DIFFICULTY_DATA` entries in `src/lib/difficulty-data.ts` for the 78 certs that currently have no heatmap data. The `DifficultyHeatmap` component is already on all cert pages but returns `null` for certs without data.
**Why:** The heatmap is a strong featured snippet magnet for "how hard is [cert] exam?" queries.
**Certs with data (9):** administrator, advanced-administrator, app-builder, developer-1, agentforce-specialist, sales-cloud, service-cloud, ai-associate, mulesoft-integration-foundations
**Certs without data (~78):** All remaining cert pages
**Effort:** Large (content for 78 certs × ~7 sections each)

---

#### 3. Hub-and-Spoke Internal Link Audit — Study Guide Pages
**What:** Verify every study guide page (`/adm-201-study-guide` etc.) has a prominent CTA at the bottom: "Ready to test your knowledge? Try the [Cert Name] Free Practice Exam →" linking to the cert hub page.
**Why:** Gemini: "Spoke pages (tips, study-guide) are leaking authority. Every tips and study-guide page must funnel traffic back to the Hub."
**Scope:** All study guide pages
**Effort:** Small (audit + targeted edits)

---

### Medium Priority (Gemini P2)

#### 4. /team Page — Trailblazer.me Profile Verification
**What:** The `/team` page should prominently display Krishna Mohan's Trailblazer.me profile URL and list all 14 certifications with badge links. This "closes the loop" on the Verified-by badge — Google validates trust by following the link chain.
**Why:** Gemini: "If the badge links to a verified Salesforce credential transcript, it's a 10/10."
**Effort:** Small (update /team page)

---

#### 5. Mobile Responsiveness Audit — New Tables and Matrices
**What:** Check INP (Interaction to Next Paint) on mobile for the new Decision Matrix tables (27 VS pages), Difficulty Heatmaps (9 cert pages), and Regional Pricing tables. All use `overflow-x-auto` which should handle horizontal scroll, but verify no pinch-zoom required.
**Why:** Gemini: "If a user has to pinch and zoom on mobile to read your comparison table, Google will penalize your Mobile Usability score."
**Effort:** Small (PSI audit on 3–5 representative pages)

---

#### 6. Interactive SVG Roadmaps — Download/Share Option
**What:** Add a "Download as PNG" or "View full size" button below each SVG roadmap on the 5 path pages.
**Why:** Gemini: "Encourage social sharing and backlinking from study groups."
**Effort:** Small-Medium (client component with canvas export or link to a static PNG)

---

#### 7. "Transactional CTA" Prominence — Practice Exam Pages
**What:** On all ~65 cert pages with "Free Practice Exam" in the title, ensure the "Start Test" / "Start Practice" button is the most visually prominent element above the fold.
**Why:** Gemini: "Ensure the 'Start Test' button is the most prominent element."
**Effort:** Small (CSS/layout audit)

---

#### 8. Schema Audit — Person Schema Author Breadcrumb
**What:** Ensure the Person schema on cert pages connects to the Article schema's `author` field — creating a verifiable chain: Article → author → Person → sameAs → Trailblazer.me.
**Current state:** Person schema is added separately in CertPageIntro. The Article schema in `ContentPageSchemas` may have a generic author field.
**Why:** Gemini: "Add Person schema to Krishna Mohan's profile and link every 'Verified by' badge to it."
**Effort:** Small (check and update Article schema `author` field in ContentPageSchemas)

---

### Low Priority / Future

#### 9. Difficulty Heatmap — Study Guide Pages
**What:** Consider adding a simplified version of the Difficulty Heatmap to the study guide pages (not just cert hub pages).
**Effort:** Small once data exists

#### 10. Salary Data on VS Pages
**What:** The two VS pages that already have salary data (`pd1-vs-pd2`, `adm-201-vs-app-builder`) serve as a template. Consider adding salary comparison rows to the remaining 25 VS pages.
**Effort:** Medium (content + scripted insertion)

#### 11. "3 Concepts" — Additional FAQ Items (3 Per Page)
**What:** Beyond a single summary FAQ item (item #1 above), each "3 Concepts" could have one dedicated FAQ per concept for maximum PAA coverage.
**Effort:** Large (87 pages × 3 items each = 261 FAQ items)

---

## Page Inventory Summary

| Page Type | Count | Key Features |
|-----------|-------|-------------|
| Cert hub pages | 87 | 7 schemas, Key Concepts, Difficulty Heatmap (9 with data), Verified-by badge, Person schema |
| Exam tips pages | 87 | ContentPageAuthor, 3 Concepts (all 87), FAQ schema, hub CTA |
| VS comparison pages | 27 | ContentPageAuthor, Decision Matrix, hub CTAs |
| Role career guides | 10 | Salary, responsibilities, career path, skills |
| Path pages | 5 | ContentPageAuthor, SVG roadmap |
| Commercial pages | 2+ | Regional pricing table, salary-by-region table |
| **Total** | **~289** | — |

---

## File Architecture Reference

```
src/
├── app/
│   ├── certifications/[slug]/page.tsx     — 87 cert hub pages
│   ├── certifications/role/[slug]/page.tsx — 10 role career guides
│   ├── *-exam-tips*/page.tsx              — 87 exam tips pages
│   ├── *-vs-*/page.tsx                    — 27 comparison pages
│   ├── *-certification-path*/page.tsx     — 5 path pages
│   ├── salesforce-certification-cost/     — Regional pricing table
│   └── salesforce-certification-salary/   — Regional salary table
├── components/
│   ├── CertPageIntro.tsx                  — Verified-by badge + Person schema (all cert pages)
│   ├── ContentPageAuthor.tsx              — Author byline (tips, VS, path pages)
│   ├── DifficultyHeatmap.tsx              — Heatmap component (9 certs have data)
│   ├── CertRoadmapSvg.tsx                 — SVG roadmaps (5 path pages)
│   └── CertPageSeo.tsx                    — 7-schema block (all cert pages)
└── lib/
    ├── cert-seo-data.ts                   — Titles, descriptions, FAQ, schema data
    ├── difficulty-data.ts                 — Heatmap data (9 certs)
    └── release-data.ts                    — RELEASE_CURRENT = "Winter '26"
```

---

## Gemini Evaluation History

| Evaluation | Date | Key Findings |
|-----------|------|-------------|
| 1st evaluation (10 core pages) | ~2026-03-01 | E-E-A-T gaps, missing decision matrices, thin role pages |
| 2nd evaluation (full site) | ~2026-03-10 | P0: role guides, title CTR; P1: SVG roadmaps, verified-by, cost calculator |
| 3rd evaluation (after this session) | Pending | Send updated URLs for re-evaluation |
