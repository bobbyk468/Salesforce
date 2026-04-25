# Trailblaze Prep — Site Structure Review v2

**For Gemini review. Updated after Spring '26 implementation cycle — commit 59c6e63.**
All 6 gaps from the previous review have been addressed. This document reflects the current live state.

---

## What Changed Since v1

| Item | Status | Detail |
|---|---|---|
| Schema `@id` glue | ✅ Done | `Organization` has `@id: siteUrl/#organization`; `Article` publisher + author reference it |
| `validThrough` on salary | ✅ Done | `RELEASE_VALID_THROUGH = 2026-06-30` on all `MonetaryAmountDistribution` |
| `ExamPricingCard` on exam-tips | ✅ Done | 51 exam-tips pages now show fee/retake inline |
| Cert page breadcrumbs | ✅ Already done | `Home > Certifications > [Role] > [Cert]` (4-level via `getCertBreadcrumb`) |
| `/certification-comparison` hub | ✅ Done | 27 VS comparisons listed and grouped; VS breadcrumbs now 3-level |
| `mainEntityOfPage` on exam-tips | ✅ Done | 51 exam-tips Article schemas point to their study guide URL |

---

## Full Site at a Glance

| Page type | Count | Purpose |
|---|---|---|
| Cert pages (`/certifications/[slug]`) | 87 | Hub — exam details, practice questions, logistics |
| Study guides (`/[cert]-study-guide`) | 52 | Master content — depth, difficulty, salary, pricing |
| Exam tips (`/[cert]-exam-tips`) | 87 | Tactical — scenario strategy, high-weight topics |
| VS/comparison (`/[cert-a]-vs-[cert-b]`) | 27 | Decision — bottom-of-funnel comparison |
| `/certification-comparison` | 1 | VS hub — parent breadcrumb for all VS pages |
| Career path pages | 5 | Career journey by role |
| Gateway / how-to pages | ~15 | Top-of-funnel — "which cert", "how to become", cost |
| Role pages (`/certifications/role/[slug]`) | 10 | Topical cluster hub — role-based cert groupings |
| Homepage | 1 | Brand + search entry point |

**Total indexed pages: ~195**

---

## 1. Cert Pages — `/certifications/[slug]`

### Breadcrumbs (4-level)
```
Home > Certifications > [Role Name] → /certifications/role/[roleSlug] > [Cert Name]
```
Example: `Home > Certifications > Developer Certifications > Platform Developer I`

### Schema output (7 types via CertPageSeo)
`WebPage` · `BreadcrumbList` · `Article` · `FAQPage` · `Course` · `EducationalOccupationalCredential` · `LearningResource` · `HowTo`

**Article schema now includes:**
```json
{
  "publisher": { "@type": "Organization", "@id": "https://www.trailblazeprep.com/#organization" },
  "author": [{ "@type": "Organization", "@id": "https://www.trailblazeprep.com/#organization" }, { "@type": "Person", ... }]
}
```

### Pricing (ExamLogisticsSection)
Fee · retake · score · questions · time. AP amber note. India GST (Asia/Kolkata only).

---

## 2. Study Guide Pages — `/[cert]-study-guide`

### Breadcrumbs (3-level)
```
Home > [Cert Name] → /certifications/[slug] > [Cert] Study Guide
```

### Schema output (9 types)
`WebPage` · `BreadcrumbList` · `Article` · `FAQPage` · `Course` · `LearningResource` · `HowTo`
+ `EducationalOccupationalCredential` · `Occupation` (via CredentialSchema)

**Occupation schema now includes:**
```json
{
  "estimatedSalary": {
    "@type": "MonetaryAmountDistribution",
    "validThrough": "2026-06-30",
    "percentile10": 78000,
    "median": 91500,
    "percentile90": 105000
  }
}
```

### Component render order
```
ContentPageSchemas (7 schemas)
CredentialSchema   (EducationalOccupationalCredential + Occupation)
ContentPageAuthor
ExamTipsCrossLink  → /[cert]-exam-tips
CertInsightBlock   difficulty / salary / "Is it worth it?"
ExamPricingCard    fee / retake / tier / India GST (India-only)
DifficultyHeatmap
[Main content]
FaqAccordion
RelatedGuides
```

### Cross-links out
- → Exam Tips: `ExamTipsCrossLink` (keyword anchor)
- → Cert page: via breadcrumb middle level
- → Practice questions: `ExamPricingCard` CTA

---

## 3. Exam Tips Pages — `/[cert]-exam-tips`

### Breadcrumbs (3-level)
```
Home > [Cert Name] → /certifications/[slug] > [Cert] Exam Tips
```

### Schema output (7 types via ContentPageSchemas)
`WebPage` · `BreadcrumbList` · `Article` · `FAQPage` · `Course` · `LearningResource` · `HowTo`

**Article schema now includes `mainEntityOfPage`:**
```json
{
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.trailblazeprep.com/adm-201-study-guide"
  }
}
```
This tells Google: "This exam tips page is *about* the credential. The study guide is the *authority*."

### Component render order
```
ContentPageSchemas (7 schemas + mainEntityOfPage)
ContentPageAuthor
ExamTipsCertLink   → /certifications/[slug]
StudyGuideCrossLink → /[cert]-study-guide
ExamPricingCard    fee / retake / tier / India GST (India-only)
[Main content]
FaqAccordion
```

### Cross-links out
- → Cert page: `ExamTipsCertLink`
- → Study guide: `StudyGuideCrossLink` (keyword anchor)
- → Practice questions: `ExamPricingCard` CTA

### AP exam tips (no study guide match — 36 pages)
No `StudyGuideCrossLink`, no `ExamPricingCard`. Only `ExamTipsCertLink` → cert page.

---

## 4. VS / Comparison Pages — `/[cert-a]-vs-[cert-b]`

### Breadcrumbs (3-level)
```
Home > Certification Comparison → /certification-comparison > [Cert A vs Cert B]
```

### Schema output (7 types)
`WebPage` · `BreadcrumbList` · `Article` · `FAQPage` · `Course` · `LearningResource` · `HowTo`

### Component render order
```
ContentPageSchemas
ContentPageAuthor
WhichFirstBlock    decision guide with <h3> recommendation (Featured Snippet target)
[Comparison content + table]
FaqAccordion
RelatedGuides
```

### WhichFirstBlock structure
```
Take [Cert A] if:              Take [Cert B] if:
· condition 1                  · condition 1
· condition 2                  · condition 2
· condition 3                  · condition 3

<h3>Our Recommendation: [Cert Name]</h3>
[1-2 sentence honest reason]
[CTA] Start Practice Questions →
[CTA] Exam Tips & Strategy →
[CTA] Career Path →
```

---

## 5. `/certification-comparison` Hub Page

**New page created this cycle.** Parent breadcrumb for all 27 VS pages.

### Schema
`ContentPageSchemas` — 7 types including `FAQPage` with 4 comparison Q&As.

### Content
27 VS comparisons grouped by track:
`AI & Agentforce` · `Admin Track` · `Career Decision` · `Developer Track` · `MuleSoft` · `Consultant Track` · `Data & Analytics` · `Revenue Cloud` · `Marketing Cloud` · `Architect Track` · `Designer Track` · `Industry Cloud`

### Breadcrumbs
```
Home > Certification Comparison
```

---

## 6. Career Path Pages

`/admin-certification-path` · `/developer-certification-path` · `/consultant-certification-path` · `/architect-certification-path` · `/certification-path`

### Schema: 7 types via ContentPageSchemas
### Breadcrumbs: `Home > [Path Name]` (2-level — upgrade pending)

---

## 7. Gateway / How-To Pages (~15 pages)

`/which-salesforce-certification-first` · `/how-to-become-salesforce-*` · `/salesforce-certification-cost` · `/salesforce-certification-maintenance` etc.

### Schema: 7 types
### Breadcrumbs: `Home > [Page Title]` (2-level)

---

## Schema Coverage Matrix (Current State)

| Page type | WebPage | BreadcrumbList | Article | FAQPage | Course | LearningResource | HowTo | CredentialSchema | Occupation | mainEntityOfPage |
|---|---|---|---|---|---|---|---|---|---|---|
| Cert page | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| Study guide | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Exam tips | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ → study guide |
| VS pages | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Comparison hub | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Path pages | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Gateway pages | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |

---

## Breadcrumb Coverage (Current State)

| Page type | Format | Levels | Status |
|---|---|---|---|
| Cert pages | Home > Certifications > Role > Cert | 4 | ✅ Complete |
| Study guides | Home > Cert Name > Study Guide | 3 | ✅ Complete |
| Exam tips | Home > Cert Name > Exam Tips | 3 | ✅ Complete |
| VS pages | Home > Certification Comparison > Page | 3 | ✅ Complete |
| Path pages | Home > Path Name | 2 | ⚠️ Upgrade pending |
| Gateway pages | Home > Page Title | 2 | ⚠️ Upgrade pending |

---

## Pricing Display (Current State)

| Page type | Fee shown | Retake shown | Tier badge | AP note | India GST |
|---|---|---|---|---|---|
| Cert page (ExamLogisticsSection) | ✅ | ✅ | ❌ | ✅ | ✅ India-only |
| Study guide (ExamPricingCard) | ✅ | ✅ | ✅ | ✅ | ✅ India-only |
| Exam tips (ExamPricingCard) | ✅ | ✅ | ✅ | ✅ | ✅ India-only |
| VS pages | ❌ | ❌ | ❌ | ❌ | ❌ |

---

## E-E-A-T Signals (Current State)

| Signal | Cert | Study Guide | Exam Tips | VS |
|---|---|---|---|---|
| Author block | ✅ | ✅ | ✅ | ✅ |
| Difficulty rating | ❌ | ✅ | ❌ | ❌ |
| Salary + `validThrough` | ❌ | ✅ | ❌ | ❌ |
| "Is it worth it?" | ❌ | ✅ | ❌ | ❌ |
| Honest recommendation | ❌ | ❌ | ❌ | ✅ |
| Expert quote callout | ✅ top pages | ❌ | ❌ | ❌ |
| `RELEASE_CURRENT` freshness | ✅ | ✅ | ✅ | ✅ |
| `@id` entity glue | ✅ | ✅ | ✅ | ✅ |

---

## Open Questions for Gemini v2

### 1. Occupation schema on cert pages
Study guides have full `EducationalOccupationalCredential + Occupation` via `CredentialSchema`. Cert pages have `EducationalOccupationalCredential` (via `CertPageSeo`) but no `Occupation`/salary. Should we add `Occupation` with `estimatedSalary` to cert pages too — making them the salary authority — or keep salary exclusively on study guides to signal study guides as the deeper content?

### 2. Career path page breadcrumbs
Still 2-level (`Home > Admin Certification Path`). Suggested upgrade: `Home > Certifications > Admin Certification Path`. Does the middle level need to be a real page (e.g. `/certifications`) or can it be a logical grouping? `/certifications` is already a page on the site.

### 3. `mainEntityOfPage` on VS pages
VS pages currently have no `mainEntityOfPage`. Should a VS page's `mainEntityOfPage` point to the *recommended* cert's cert page? For example, `app-builder-vs-developer-i` recommends App Builder — should its Article `mainEntityOfPage` point to `/certifications/app-builder`?

### 4. AP exam tips: CredentialSchema
AP exam tips pages (36 pages with no study guide) currently have no `CredentialSchema`. Gemini v1 said "AP pages should carry the CredentialSchema since they have no study guide." Should we add `EducationalOccupationalCredential` to AP exam tips pages, using the cert-insights data where available and a minimal schema where not?

### 5. `validThrough` update process
`RELEASE_VALID_THROUGH = '2026-06-30'` in `release-data.ts`. When Summer '26 releases (~July 2026), this needs to change to `'2026-09-30'`. Should this be updated manually alongside `RELEASE_CURRENT`, or is there a way to derive it programmatically (e.g. `RELEASE_CURRENT` → end-of-quarter date mapping)?

### 6. Comparison hub internal linking
`/certification-comparison` lists 27 VS pages. Should each VS page also have a `RelatedGuides` block linking back to the hub and to 2-3 related VS pages? This would create a stronger comparison cluster signal for Google.
