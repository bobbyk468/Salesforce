# Trailblaze Prep — Site Structure Review v3

**For Gemini review. Updated after Spring '26 Phase 2 implementation.**
Documents the full current state of all ~195 pages after 4 implementation phases.

---

## What Changed Since v2

| Item | Status | Pages |
|---|---|---|
| Data Cloud → Data 360 rebrand | ✅ Done | Display name updated; 3 redirects added |
| Spring '26 breaking maintenance banner | ✅ Done | `/salesforce-certification-maintenance` |
| Admin weightage: +8% Agentforce, +17% Data & Analytics | ✅ Done | `exam-weightage-data.ts` |
| Path page breadcrumbs → 3-level | ✅ Done | 5 path pages |
| Gateway page breadcrumbs → 3-level | ✅ Done | 12 gateway pages |
| AP pages: `CredentialSchema` injected | ✅ Done | 23 AP exam-tips pages |
| Comparison Mesh: `RelatedComparisons` block | ✅ Done | 20 VS pages |
| Programmatic `validThrough` via `getReleaseWindow()` | ✅ Done | All 52 study guides (auto-updates with `RELEASE_CURRENT`) |

---

## Full Site at a Glance

| Page type | Count | Purpose |
|---|---|---|
| Cert pages (`/certifications/[slug]`) | 87 | Hub — exam details, practice questions, logistics |
| Study guides (`/[cert]-study-guide`) | 52 | Master — depth, difficulty, salary, pricing, 9 schemas |
| Exam tips (`/[cert]-exam-tips`) with study guide | 51 | Tactical — strategy, cross-linked to study guide |
| AP exam tips (`/[cert]-ap-exam-tips`) | 23 | AP-only — now carries `CredentialSchema` |
| Other exam tips (no study guide) | 13 | Stand-alone tips pages |
| VS/comparison (`/[cert-a]-vs-[cert-b]`) | 27 | Decision — `WhichFirstBlock` + `RelatedComparisons` |
| `/certification-comparison` hub | 1 | VS parent breadcrumb + full comparison index |
| Career path pages | 5 | `Home > Certifications > [Path]` (3-level) |
| Gateway / how-to pages | ~12 | `Home > Salesforce Careers > [Page]` (3-level) |
| Role pages (`/certifications/role/[slug]`) | 10 | Topical cluster hubs |
| Homepage | 1 | Brand + `Organization` + `WebSite` schema |

**Total indexed pages: ~195**

---

## Page Type Deep-Dives

### 1. Cert Pages — `/certifications/[slug]`

**Breadcrumbs (4-level):**
```
Home > Certifications > [Role] → /certifications/role/[roleSlug] > [Cert Name]
```

**Schema (7 types):** WebPage · BreadcrumbList · Article (with `@id` entity glue) · FAQPage · Course · EducationalOccupationalCredential · LearningResource · HowTo

**Pricing:** `ExamLogisticsSection` — fee, retake, score, questions, time. AP no-discount amber note. India GST (Asia/Kolkata only).

**Spring '26 update:** Admin cert now shows 8% Agentforce + 17% Data & Analytics in `ExamWeightageSection`.

---

### 2. Study Guide Pages — `/[cert]-study-guide`

**Breadcrumbs (3-level):**
```
Home > [Cert Name] → /certifications/[slug] > [Cert] Study Guide
```

**Schema (9 types):** WebPage · BreadcrumbList · Article · FAQPage · Course · LearningResource · HowTo · EducationalOccupationalCredential · Occupation (salary + `validThrough`)

**`validThrough` now programmatic:**
```typescript
validThrough: getReleaseWindow(RELEASE_CURRENT) // → "2026-06-30" for Spring '26
```
Auto-updates to the correct end-of-cycle date whenever `RELEASE_CURRENT` changes — no manual updates needed.

**Component render order:**
```
ContentPageSchemas (7 schemas)
CredentialSchema   (EducationalOccupationalCredential + Occupation)
ContentPageAuthor
ExamTipsCrossLink  → /[cert]-exam-tips (keyword anchor)
CertInsightBlock   difficulty / salary / "Is it worth it?"
ExamPricingCard    fee / retake / tier / India GST (India-only)
DifficultyHeatmap
[Main content]
FaqAccordion
RelatedGuides
```

---

### 3. Exam Tips Pages — `/[cert]-exam-tips`

**Breadcrumbs (3-level):**
```
Home > [Cert Name] → /certifications/[slug] > [Cert] Exam Tips
```

**Schema (7 types + `mainEntityOfPage`):**
Article now includes:
```json
{ "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.trailblazeprep.com/adm-201-study-guide" } }
```

**Component render order:**
```
ContentPageSchemas (7 schemas + mainEntityOfPage → study guide)
ContentPageAuthor
ExamTipsCertLink   → /certifications/[slug]
StudyGuideCrossLink → /[cert]-study-guide (keyword anchor)
ExamPricingCard    fee / retake / tier / India GST (India-only)
[Main content]
FaqAccordion
```

---

### 4. AP Exam Tips Pages — `/[cert]-ap-exam-tips` (23 pages)

**New in v3:** `CredentialSchema` now injected on all 23 AP exam tips pages.

**Schema (8 types):** WebPage · BreadcrumbList · Article · FAQPage · Course · LearningResource · HowTo + **EducationalOccupationalCredential** (minimal — no Occupation/salary since AP data is limited)

**Component render order:**
```
ContentPageSchemas (7 schemas)
CredentialSchema   (EducationalOccupationalCredential only)
ContentPageAuthor
ExamTipsCertLink   → /certifications/[slug]
[Main content]
FaqAccordion
```

---

### 5. VS / Comparison Pages — `/[cert-a]-vs-[cert-b]` (27 pages)

**Breadcrumbs (3-level):**
```
Home > Certification Comparison → /certification-comparison > [Cert A vs Cert B]
```

**New in v3:** `RelatedComparisons` block at the bottom of all 20 mapped VS pages.

**Component render order:**
```
ContentPageSchemas (7 schemas)
ContentPageAuthor
WhichFirstBlock    decision guide + <h3> recommendation (Featured Snippet)
[Comparison content + table]
FaqAccordion
RelatedGuides      (existing)
RelatedComparisons 3-4 links to same-track VS pages + hub link
```

**RelatedComparisons format:**
```
Related Comparisons
[Admin vs Advanced Admin →] [App Builder vs PD1 →] [Admin vs Developer Career →]
See all comparisons at Certification Comparison Hub →
```

---

### 6. `/certification-comparison` Hub Page

**Breadcrumbs:** `Home > Certification Comparison`

**Content:** 27 VS comparisons grouped by: AI & Agentforce · Admin Track · Career Decision · Developer Track · MuleSoft · Consultant Track · Data & Analytics · Revenue Cloud · Marketing Cloud · Architect Track · Designer Track · Industry Cloud

**Schema:** 7 types via ContentPageSchemas including FAQPage with 4 comparison Q&As.

---

### 7. Career Path Pages (5 pages)

**Breadcrumbs (3-level — new in v3):**
```
Home > Certifications → /certifications > [Role] Certification Path
```

---

### 8. Gateway / How-To Pages (~12 pages)

**Breadcrumbs (3-level — new in v3):**
```
Home > Salesforce Careers → /certifications > [How to become / Guide title]
```

---

## Schema Coverage Matrix (v3 — Current State)

| Page type | WebPage | BreadcrumbList | Article | FAQPage | Course | LearningResource | HowTo | CredentialSchema | Occupation | mainEntityOfPage |
|---|---|---|---|---|---|---|---|---|---|---|
| Cert page | ✅ | ✅ (4-level) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| Study guide | ✅ | ✅ (3-level) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅+validThrough | ❌ |
| Exam tips (with guide) | ✅ | ✅ (3-level) | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ → study guide |
| AP exam tips | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ minimal | ❌ | ❌ |
| VS pages | ✅ | ✅ (3-level) | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Comparison hub | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Path pages | ✅ | ✅ (3-level) | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Gateway pages | ✅ | ✅ (3-level) | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |

---

## Breadcrumb Coverage (v3 — All Current)

| Page type | Format | Levels |
|---|---|---|
| Cert pages | Home > Certifications > Role > Cert | 4 ✅ |
| Study guides | Home > Cert Name > Study Guide | 3 ✅ |
| Exam tips | Home > Cert Name > Exam Tips | 3 ✅ |
| VS pages | Home > Certification Comparison > Page | 3 ✅ |
| Path pages | Home > Certifications > Path Name | 3 ✅ |
| Gateway pages | Home > Salesforce Careers > Page | 3 ✅ |
| AP exam tips | Home > Page Title | 2 ⚠️ |
| Role pages | Home > Page Title | 2 ⚠️ |

---

## Freshness Signals (v3)

| Signal | Location | Auto-updates? |
|---|---|---|
| `RELEASE_CURRENT = "Spring '26"` | Every page title/tag | Manual (1 line) |
| `validThrough` on Occupation salary | Study guide CredentialSchema | ✅ Auto via `getReleaseWindow()` |
| `RELEASE_DATE = '2026-04-05'` | Article `dateModified` | Manual |
| Breaking banner | Maintenance page | Manual |
| Admin weightage (8% Agentforce) | `exam-weightage-data.ts` | Manual |

---

## Data 360 Rebrand (Spring '26)

Salesforce renamed **Data Cloud Consultant** → **Salesforce Certified Data 360 Consultant** (March 29, 2026).

**Changes applied:**
- Display name updated in `cert-seo-data.ts`
- Page descriptions updated on study guide + exam tips
- Redirects added in `next.config.js`:
  - `/certifications/data-360-consultant` → `/certifications/data-cloud-consultant`
  - `/data-360-consultant-study-guide` → `/data-cloud-consultant-study-guide`
  - `/data-360-consultant-exam-tips` → `/data-cloud-consultant-exam-tips`

**Gap for Gemini:** The redirects currently go FROM the new name TO the old URL slug (keeping old as canonical). Should we migrate the URL slug itself to `data-360-consultant` for full SEO alignment, or is the display name update sufficient since Google respects the `EducationalOccupationalCredential` name field over the URL?

---

## Open Questions for Gemini v3

### 1. Occupation schema on cert pages
Study guides have full `Occupation` + `estimatedSalary`. Cert pages have `EducationalOccupationalCredential` but no salary. Should cert pages also emit `Occupation` to make them the authoritative salary entity for their cert? Or does the cert page's breadcrumb position as parent already inherit salary authority from the study guide?

### 2. AP exam tips: adding Occupation salary
23 AP exam tips now have minimal `CredentialSchema` (no Occupation/salary). AP cert insights data is sparse. Should we add estimated salary ranges for AP certs, or leave AP pages without Occupation schema to avoid publishing unverified YMYL data?

### 3. `mainEntityOfPage` on VS pages
VS pages currently have no `mainEntityOfPage`. Should the recommended cert's page be the `mainEntityOfPage`? E.g., `app-builder-vs-developer-i` recommends App Builder → `mainEntityOfPage: /certifications/app-builder`. Or would this confuse Google about the comparison page's own identity?

### 4. Role page breadcrumbs
Role pages (`/certifications/role/[slug]`) are still 2-level (`Home > [Role] Certifications`). Since cert pages already link UP to role pages as the parent breadcrumb level, upgrading role pages to 3-level would complete the full `Home > Certifications > Role > Cert` chain. Suggested: `Home > Certifications → /certifications > [Role] Certifications`.

### 5. RelatedComparisons on hub page
The `/certification-comparison` hub lists all 27 VS pages. Should the hub page also have a `relatedLink` or `hasPart` schema property listing all VS pages? This would make the hub explicitly signal its role as the parent entity of the comparison cluster.

### 6. `getReleaseWindow` — future-proofing
`releaseDates.ts` currently has entries through Summer '27. When Winter '27 prep begins (~October 2027), a new entry is needed. Should this file be auto-generated from a JSON config, or is a manually maintained TypeScript file sufficient given the 3-per-year update cadence?
