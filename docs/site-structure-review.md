# Trailblaze Prep — Full Site Structure Review

**For Gemini review. Current as of Spring '26 implementation cycle.**
Covers every page type, component stack, schema output, breadcrumb format, and cross-linking pattern.

---

## Site at a Glance

| Page type | Count | Primary purpose |
|---|---|---|
| Cert pages (`/certifications/[slug]`) | 87 | Hub — exam details, practice questions, logistics |
| Study guides (`/[cert]-study-guide`) | 52 | Topical authority — full preparation content |
| Exam tips (`/[cert]-exam-tips`) | 87 | Tactical — scenario strategy, high-weight topics |
| VS/comparison (`/[cert-a]-vs-[cert-b]`) | 20 | Decision — bottom-of-funnel comparison |
| Career path pages | 4 | Career journey — Admin, Developer, Consultant, Architect |
| Gateway / how-to pages | ~15 | Top-of-funnel — "which cert", "how to become", cost |
| Role pages (`/certifications/role/[slug]`) | ~10 | Navigation / link juice — role-based cert groupings |
| Homepage | 1 | Brand + search entry point |

**Total indexed pages: ~190**

---

## 1. Cert Pages — `/certifications/[slug]`

**The hub. Every study guide and exam tips page links here as the parent authority.**

### Component stack (render order)

```
CertPageSeo             ← 7 JSON-LD schema blocks (see below)
CertTableOfContents     ← sticky TOC: Exam Prep | Key Concepts | Practice Questions | FAQ
CertPageIntro           ← H1, intro paragraph, difficulty badge, social proof number
ExamWeightageSection    ← topic weightage table with percentages
[Key Concepts div]      ← 5 topic blocks with h2 + paragraph
ExamLogisticsSection    ← fee/retake/score/questions/time table
                           + AP no-discount amber note (AP pages)
                           + India GST note (Asia/Kolkata users only)
[Practice Questions]    ← 10 dynamic MCQs with explanations
RelatedCertifications   ← 3-4 cert cards
FaqAccordion            ← 5+ Q&A pairs
ExpertInsightCallout    ← E-E-A-T expert quote block (top cert pages)
```

### Schema output (CertPageSeo — 7 types)

| Schema type | Key fields |
|---|---|
| `WebPage` | name, description, breadcrumb, url |
| `BreadcrumbList` | Home > Cert Name |
| `Article` | headline, description, dateModified |
| `FAQPage` | 5+ Question/Answer pairs |
| `Course` | name, description, hasCourseInstance (online) |
| `EducationalOccupationalCredential` | name, credentialCategory, recognizedBy (Salesforce) |
| `LearningResource` | name, description, educationalLevel |
| `HowTo` (via CertPageSeo) | "How to prepare for [Cert]" with steps |

### Breadcrumbs
```
Home > [Cert Name]
```
**Gap for Gemini review:** Cert pages are still 2-level. The three-level upgrade (`Home > Role > Cert`) has not yet been applied here — only study guides and exam tips have it. This is the next breadcrumb priority.

### Pricing
`ExamLogisticsSection` shows fee and retake using `getExamCost(slug)` / `getRetakeCost(slug)`. Tiers are derived via `tierFromFeeString()` from `exam-pricing-data.ts`.

---

## 2. Study Guide Pages — `/[cert]-study-guide`

**The hub for content depth. Positioned as master resource; exam tips and cert page link here.**

### Component stack (render order)

```
ContentPageSchemas      ← 7 JSON-LD schema blocks (same types as cert page)
CredentialSchema        ← EducationalOccupationalCredential + Occupation (salary)
ContentPageAuthor       ← author attribution (E-E-A-T signal)
ExamTipsCrossLink       ← amber banner → /[cert]-exam-tips (keyword anchor text)
CertInsightBlock        ← difficulty 1–5 / salary range / "Is it worth it?" verdict
ExamPricingCard         ← exam fee / retake fee / tier badge / India GST (India-only)
DifficultyHeatmap       ← topic-level difficulty colour grid (most pages)
[Main study content]    ← key concepts, exam tips, topic breakdown
FaqAccordion            ← 4–6 Q&A pairs
RelatedGuides           ← 3 related cert or path links
```

### Schema output

| Schema type | Source | Key fields |
|---|---|---|
| `WebPage` | ContentPageSchemas | name, description, breadcrumb |
| `BreadcrumbList` | ContentPageSchemas | Home > Cert Name > Study Guide |
| `Article` | ContentPageSchemas | headline, dateModified |
| `FAQPage` | ContentPageSchemas | from faqItems array |
| `Course` | ContentPageSchemas | name, description |
| `LearningResource` | ContentPageSchemas | name, educationalLevel |
| `HowTo` | ContentPageSchemas | preparation steps |
| `EducationalOccupationalCredential` | CredentialSchema | name, educationalLevel (difficulty), recognizedBy |
| `Occupation` (nested) | CredentialSchema | estimatedSalary (percentile10/median/percentile90), US location |

**Total: 9 schema types per study guide page.**

### Breadcrumbs
```
Home > [Cert Name] → /certifications/[slug] > [Cert] Study Guide
```
3-level. Middle level is a live link to the cert page (hub/spoke signal).

### Cross-links
- **→ Exam Tips**: `ExamTipsCrossLink` — "Prepare with our [Cert Name] Exam Tips & Strategy Guide"
- **→ Cert page**: via breadcrumb middle level
- **→ Practice questions**: `ExamPricingCard` CTA — "Start [Cert Name] Practice Questions"

### Pricing
`ExamPricingCard` shows fee, retake, tier badge, and AP no-discount note. India GST via `IndiaGstNote` (Asia/Kolkata timezone only — invisible to US/EU users).

---

## 3. Exam Tips Pages — `/[cert]-exam-tips`

**Tactical, high-intent. Supporting page to the study guide hub.**

### Component stack (render order)

```
ContentPageSchemas      ← 7 JSON-LD schema blocks
ContentPageAuthor       ← author attribution
ExamTipsCertLink        ← blue banner → /certifications/[slug] (cert page)
StudyGuideCrossLink     ← blue banner → /[cert]-study-guide (keyword anchor text)
[Main tips content]     ← high-weight topics, scenario strategy, time management
                           concept FAQs, mock-test targets
FaqAccordion            ← 4–6 Q&A pairs
```

### Schema output
Same 7 types as study guide via `ContentPageSchemas` (WebPage, BreadcrumbList, Article, FAQPage, Course, LearningResource, HowTo).

**Not present (gaps for Gemini review):**
- No `CredentialSchema` — exam tips pages do not have `EducationalOccupationalCredential` schema
- No `ExamPricingCard` — exam fee not shown inline (user must click through to cert page)

### Breadcrumbs
```
Home > [Cert Name] → /certifications/[slug] > [Cert] Exam Tips
```
3-level. Same pattern as study guides.

### Cross-links
- **→ Cert page**: `ExamTipsCertLink` — "For the complete syllabus, passing score, and registration details, view our [Cert Name] Exam Guide"
- **→ Study guide**: `StudyGuideCrossLink` — "View the [Cert Name] Study Guide — complete syllabus, difficulty heatmap, and key concepts for exam day"

### AP exam tips pages (no study guide match)
~37 AP exam tips pages (e.g. `/advanced-field-service-ap-exam-tips`) have no corresponding study guide. They only have:
- `ExamTipsCertLink` → cert page
- No `StudyGuideCrossLink` (correctly skipped by batch script)

---

## 4. VS / Comparison Pages — `/[cert-a]-vs-[cert-b]`

**Bottom-of-funnel. User is at a decision point — comparing two credentials.**

### Component stack (render order)

```
ContentPageSchemas      ← 7 JSON-LD schema blocks
ContentPageAuthor       ← author attribution
WhichFirstBlock         ← decision guide (h3 recommendation — Featured Snippet target)
                           Take A if... / Take B if... / Our Recommendation
                           CTAs: Practice Questions + Exam Tips + Career Path
[Comparison content]    ← side-by-side table, difficulty, career outcomes
FaqAccordion            ← 4–5 Q&A pairs
RelatedGuides           ← related certs or path links
```

### Schema output
7 types via `ContentPageSchemas`. No `CredentialSchema` (covers two certs — not applicable).

### Breadcrumbs
```
Home > [Page Title]
```
**Gap:** Still 2-level. VS pages have not received the three-level breadcrumb upgrade. Suggested: `Home > Certification Comparison > [Cert A vs Cert B]`.

### WhichFirstBlock structure
```
┌─────────────────────────────────────────┐
│  Take [Cert A] if:   │  Take [Cert B] if:│
│  · condition 1       │  · condition 1    │
│  · condition 2       │  · condition 2    │
│  · condition 3       │  · condition 3    │
├─────────────────────────────────────────┤
│  <h3> Our Recommendation: [Cert Name]   │
│  [1–2 sentence honest reason]           │
│  [CTA] Start Practice Questions →       │
│  [CTA] Exam Tips & Strategy →           │
│  [CTA] Career Path →                    │
└─────────────────────────────────────────┘
```
The `<h3>` heading makes "Our Recommendation" a Featured Snippet candidate for comparison queries.

### All 20 VS pages
`app-builder-vs-developer-i`, `adm-201-vs-app-builder`, `pd1-vs-pd2`, `agentforce-specialist-vs-ai-associate`, `integration-architect-vs-system-architect`, `business-analyst-vs-strategy-designer`, `data-cloud-vs-crm-analytics`, `sales-cloud-vs-service-cloud`, `mulesoft-developer-i-vs-ii`, `administrator-vs-advanced-administrator`, `field-service-vs-service-cloud-consultant`, `ux-designer-vs-strategy-designer`, `education-cloud-vs-nonprofit-cloud-consultant`, `platform-foundations-vs-ai-associate`, `pardot-specialist-vs-pardot-consultant`, `b2b-vs-b2c-solution-architect`, `javascript-developer-i-vs-pd1`, `marketing-cloud-admin-vs-developer`, `salesforce-admin-vs-developer-career`, `cpq-admin-vs-cpq-billing-ap`

---

## 5. Career Path Pages

**4 dedicated paths: Admin, Developer, Consultant, Architect.**

### URLs
- `/admin-certification-path`
- `/developer-certification-path`
- `/consultant-certification-path`
- `/architect-certification-path`
- `/certification-path` (overview of all paths)

### Component stack
```
ContentPageSchemas      ← 7 schema types
ContentPageAuthor
CertificationPathContent ← stage-by-stage cert roadmap
RoadmapWithDownload     ← SVG roadmap with PDF download CTA
FaqAccordion
```

### Breadcrumbs
```
Home > [Path Name]
```
2-level. No upgrade applied yet.

---

## 6. Gateway / How-To Pages (~15 pages)

**Top-of-funnel. Captures career-switcher and beginner intent.**

### Pages
- `/which-salesforce-certification-first`
- `/how-to-become-salesforce-administrator`
- `/how-to-become-salesforce-developer`
- `/how-to-become-salesforce-consultant`
- `/how-to-become-salesforce-architect`
- `/how-to-register-salesforce-exam`
- `/how-to-study-for-salesforce-certification`
- `/salesforce-certification-cost`
- `/salesforce-certification-maintenance`
- `/salesforce-certification-exam-day-tips`
- `/salesforce-certifications-list`

### Component stack
```
ContentPageSchemas      ← 7 schema types
ContentPageAuthor
[Page-specific content] ← guides, tables, step-by-step sections
FaqAccordion
```

### Schema
All use `ContentPageSchemas` — same 7 types. `salesforce-certification-cost` and similar commercial pages have `FAQPage` schema with cost-related Q&A.

### Breadcrumbs
```
Home > [Page Title]
```
2-level throughout.

---

## 7. Role Pages — `/certifications/role/[slug]`

**Navigation and link juice. Groups certs by Salesforce role.**

These pages exist primarily to create clean site hierarchy for crawlers. They link to all certs within a role (e.g. `/certifications/role/developer` lists PD1, PD2, JavaScript Developer I, etc.).

### Schema
Dynamic metadata via `getCertMetadata`. Role pages use `ContentPageSchemas`.

---

## 8. Homepage — `/`

### Schema output (layout.tsx)
```
Organization JSON-LD    ← name, url, logo, sameAs (social), knowsAbout, contactPoint
WebSite JSON-LD         ← name, url, potentialAction (SearchAction)
```

### Metadata
- OG image: `/og?t=[title]` (dynamic)
- Title: "Free Salesforce Cert Practice Tests | Trailblaze Prep"
- `themeColor`: `#0176D3`

---

## Cross-Linking Architecture Summary

```
Homepage
  └─► All Certifications page
        └─► Cert Page (/certifications/[slug])          ← HUB
              ├─► Study Guide (/[cert]-study-guide)      ← MASTER CONTENT
              │     ├─► Exam Tips (ExamTipsCrossLink)
              │     └─► Practice Questions (ExamPricingCard CTA)
              └─► Exam Tips (/[cert]-exam-tips)          ← TACTICAL
                    ├─► Cert Page (ExamTipsCertLink)
                    └─► Study Guide (StudyGuideCrossLink)

VS Pages (/[cert-a]-vs-[cert-b])
  └─► Cert Pages (via WhichFirstBlock CTAs)
  └─► Exam Tips (via WhichFirstBlock secondary CTA)
  └─► Career Paths (via WhichFirstBlock tertiary CTA)

Career Path Pages
  └─► Cert Pages (stage-by-stage roadmap)
  └─► Study Guides (related content)
```

---

## Schema Coverage by Page Type

| Page type | WebPage | BreadcrumbList | Article | FAQPage | Course | LearningResource | HowTo | CredentialSchema | Occupation |
|---|---|---|---|---|---|---|---|---|---|
| Cert page | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Study guide | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Exam tips | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| VS pages | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| Path pages | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| Gateway pages | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |

---

## Breadcrumb Coverage

| Page type | Current format | Levels | Status |
|---|---|---|---|
| Study guides | Home > Cert Name > Study Guide | 3 | ✅ Complete |
| Exam tips | Home > Cert Name > Exam Tips | 3 | ✅ Complete |
| Cert pages | Home > Cert Name | 2 | ⚠️ Upgrade pending |
| VS pages | Home > Page Title | 2 | ⚠️ Upgrade pending |
| Path pages | Home > Path Name | 2 | ⚠️ Upgrade pending |
| Gateway pages | Home > Page Title | 2 | ⚠️ Upgrade pending |

---

## Pricing Display Coverage

| Page type | Shows pricing | India GST | AP no-discount note |
|---|---|---|---|
| Cert page (ExamLogisticsSection) | ✅ Fee + retake + score + questions + time | ✅ India-only | ✅ |
| Study guide (ExamPricingCard) | ✅ Fee + retake + tier badge | ✅ India-only | ✅ |
| Exam tips | ❌ Links to cert page for pricing | — | — |
| VS pages | ❌ | — | — |

---

## E-E-A-T Signals by Page Type

| Signal | Cert page | Study guide | Exam tips | VS page |
|---|---|---|---|---|
| Author block | ✅ | ✅ | ✅ | ✅ |
| Difficulty rating (honest) | ❌ | ✅ CertInsightBlock | ❌ | ❌ |
| Salary data (verified date) | ❌ | ✅ CertInsightBlock | ❌ | ❌ |
| "Is it worth it?" verdict | ❌ | ✅ CertInsightBlock | ❌ | ❌ |
| Honest recommendation | ❌ | ❌ | ❌ | ✅ WhichFirstBlock |
| Expert quote callout | ✅ (top pages) | ❌ | ❌ | ❌ |
| RELEASE_CURRENT freshness tag | ✅ | ✅ | ✅ | ✅ |

---

## Open Gaps — Questions for Gemini

### 1. Cert page breadcrumbs (highest priority remaining)
Cert pages are still `Home > Cert Name` (2-level). The Gemini spec suggested `Home > Role/Category > Cert Name`. Since cert pages are the hub for study guides and exam tips (which already link back to them), upgrading cert breadcrumbs would complete the full three-level hierarchy. Should the middle level link to the role page (`/certifications/role/developer`) or the certification path page (`/developer-certification-path`)?

### 2. CredentialSchema on exam tips pages
Study guides have `EducationalOccupationalCredential` + `Occupation` schema. Exam tips pages do not. Would adding the same schema to exam tips pages create beneficial entity duplication across the content cluster, or would Google see it as conflicting signals since the URL is different?

### 3. ExamPricingCard on exam tips pages
Exam tips pages currently rely on `ExamTipsCertLink` to drive users to the cert page for pricing. Would adding an inline `ExamPricingCard` on exam tips pages improve conversion (user gets price without clicking away), or would it create canonical overlap with the cert page's `ExamLogisticsSection`?

### 4. VS page breadcrumbs
VS pages are `Home > Page Title` (2-level). Suggested upgrade: `Home > Certification Comparison > [Cert A vs Cert B]`. This would require creating a `/certification-comparison` hub page or using an existing page as the middle level. Does Google expect a real landing page at the middle breadcrumb URL, or can it be a virtual/redirect path?

### 5. Occupation schema salary data freshness
`CredentialSchema` emits salary data verified "Spring '26" tied to `RELEASE_CURRENT`. When Salesforce releases Summer '26, the `RELEASE_CURRENT` constant will update automatically — but the salary data in `cert-insights-data.ts` is manually maintained. Should the `Occupation` schema include a `validThrough` date field to signal when the salary data needs review?

### 6. Organization schema on content pages
The homepage `layout.tsx` emits an `Organization` JSON-LD block that appears on every page. Content pages also emit `Article` schema via `ContentPageSchemas`. Is there value in adding `author` and `publisher` fields to the `Article` schema pointing to the same `Organization` entity, or does the presence of `Organization` in the layout already establish this link implicitly?
