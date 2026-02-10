# SEO Validation: 87 Certification Pages

This document checks the current site against the recommended structure and content for 87+ certification pages (one topic per page, unique content, keyword focus, site structure, avoiding cannibalization, metadata templates).

---

## 1. One page per certification (unique content)

| Requirement | Status | Notes |
|-------------|--------|------|
| Dedicated page per certification | ✅ | Each cert has its own route: `/certifications/[slug]` (e.g. `/certifications/administrator`, `/certifications/developer-1`). |
| One main topic/keyword per page | ✅ | Each page focuses on a single certification; title, H1, and content are cert-specific. |
| **Exam outline section (bullets + weightage)** | ✅ | `exam-weightage-data.ts` provides **unique section names and percentages per cert**. `CertificationCard` renders "Exam Weightage by Section" with cert-specific data. |
| **Study strategy (timeline, focus, tips)** | ✅ | `exam-prep-content-data.ts` provides **per-cert** `examTips`, `prerequisites`, `focusAreas`, `studyStrategy`, `whyItMatters` for many certs; others use a shared default. Consider expanding custom content for all 87. |
| **FAQs specific to that cert** | ⚠️ | FAQs are **templated**: same 3 questions for all certs with the cert name injected ("What is covered on the [Cert] exam?", "How do I prepare?", "Where is the official outline?"). Recommendation: add cert-specific FAQs where useful (e.g. "Is there a prerequisite for [Cert]?", "How hard is [Cert]?") via overrides in `cert-seo-data.ts`. |
| **Unique practice questions per cert** | ✅ | Each cert page defines its own `sampleQuestions` array (Admin questions on Admin page, Developer/Apex on Developer page, etc.). Content is **unique per cert**. |
| Shared content kept short / linked | ✅ | Generic advice (e.g. Trailhead) lives in `ExamPrepContent` and default prep; no long duplicated blocks across 87 pages. |

**Summary (1):** Structure is in place. Main gap: FAQs are generic; consider cert-specific FAQ overrides for stronger differentiation.

---

## 2. Keyword focus per page

| Requirement | Status | Notes |
|-------------|--------|------|
| **One main keyword** (e.g. "Salesforce Administrator certification exam guide") | ⚠️ | Current metadata uses cert name + "Practice Questions & Exam Weightage". Recommended: explicit main keyword (e.g. "Salesforce Administrator certification exam guide" or "Salesforce Administrator study guide & practice questions") in title. |
| **2–4 long-tail variants** | ⚠️ | Long-tail phrases (e.g. "how to pass Salesforce Admin on first attempt", "Salesforce Admin exam weightage by topic") are not systematically placed in H2/H3 or first paragraph. Can add 1–2 per page in subheadings or intro. |
| **Main keyword in `<title>`** | ✅ | `getCertMetadata(slug)` sets title with cert name; recommendation is to align with template: "[Certification Name] \| Salesforce Certification Study Guide & Practice Questions" and include exam code (ADM-201, PD1) where applicable. |
| **Main keyword in H1** | ✅ | `CertificationCard` uses cert **title** as H1 (e.g. "Salesforce Certified Platform Administrator"). Cert name = primary keyword. |
| **Main keyword in first paragraph** | ✅ | First paragraph is the cert **description** (e.g. "The Salesforce Administrator certification validates..."). Cert-specific. |
| **Main keyword in 1–2 subheadings (H2/H3)** | ✅ | "Exam Weightage by Section", "Sample Practice Questions", "Frequently Asked Questions", plus `ExamPrepContent` sections. Could add one H2 with a long-tail phrase per page. |

**Summary (2):** Title/description template and exam code in metadata can be tightened; H1 and first paragraph are already keyword-aligned.

---

## 3. Site structure

| Requirement | Status | Notes |
|-------------|--------|------|
| **Logical grouping by role** | ✅ | Role-based hubs exist: `/certifications/role/[slug]` (e.g. `/certifications/role/administrator`, `/certifications/role/developer`). Certifications are grouped by Associate, Administrator, Developer, Consultant, etc. |
| **URL structure** | ⚠️ | Current: `/certifications/administrator`, `/certifications/developer-1`. Recommendation was role-in-path (e.g. `/administrator/administrator`, `/developer/platform-developer-i`). Changing would break existing links; many sites keep `/certifications/[slug]` successfully. **Optional** to migrate; not required for SEO if internal linking is strong. |
| **Central hub page** | ✅ | `/certifications` lists all roles and links to each role hub (e.g. "All Salesforce Certifications" with cards per role). Acts as the central hub. |
| **Link from cert page → role hub** | ❌ | Breadcrumb is currently: Home > Certifications > Cert Name. **Missing:** link to the **role hub** (e.g. "Administrator") so users and crawlers can reach "All Administrator certs". |
| **Link from cert page → "All Certifications"** | ✅ | Breadcrumb includes "Certifications" linking to `/certifications`. |

**Summary (3):** Hub and role grouping are good. Add a role hub link in the breadcrumb on each cert page (e.g. Home > Certifications > [Role] > Cert Name).

---

## 4. Avoiding keyword cannibalization and duplication

| Requirement | Status | Notes |
|-------------|--------|------|
| **Unique exam outline / weightage per cert** | ✅ | `EXAM_WEIGHTAGE` in `exam-weightage-data.ts` is **per-cert** (different section names and percentages). |
| **Unique study strategy per cert** | ✅ | `EXAM_PREP_CONTENT` has custom entries for many certs; rest use a shared default. Expanding custom entries for all 87 would further reduce duplication. |
| **Unique FAQs per cert** | ⚠️ | Same 3 FAQ templates for all; only cert name changes. Cert-specific overrides (prerequisite, difficulty, etc.) would help. |
| **Unique practice questions per cert** | ✅ | Each page has its own `sampleQuestions` (topic-specific). |
| **No long repeated blocks** | ✅ | Shared content is componentized (e.g. ExamPrepContent, default prep); no copy-paste of long paragraphs across pages. |

**Summary (4):** Exam outline, weightage, and practice questions are unique. Study strategy is unique where defined; FAQs are templated—add overrides for stronger uniqueness.

---

## 5. Metadata template

| Requirement | Status | Notes |
|-------------|--------|------|
| **Title pattern** | ⚠️ | Current: "[Cert Name] \| Practice Questions & Exam Weightage". Recommended: "[Certification Name] \| Salesforce Certification Study Guide & Practice Questions". Exam code (ADM-201, PD1) in title when available. |
| **Meta description (~150–160 chars)** | ⚠️ | Current: "Prepare for [Title] with practice questions, section-wise exam weightage, and study guide. Know where to focus—start free." Recommended: "Prepare for the [Certification Name] exam with section-wise weightage, focused study plan, and sample questions. Learn what to study and how to pass on first attempt." Include cert name and exam code. |
| **Cert name + exam code in title and description** | ⚠️ | Cert name is in both; exam code is **not** in metadata (only on the page in CertificationCard). Add exam code to title/description for key certs (Admin, App Builder, PD1, etc.). |

**Summary (5):** Align title and description with the recommended template and add exam codes where applicable.

---

## 6. Priority and expectations

| Point | Status | Notes |
|-------|--------|------|
| **Competitive certs** (Admin, App Builder, Sales Cloud, Service Cloud, PD1) | N/A | Harder to rank; long-tail queries ("[cert name] exam weightage", "[cert name] study plan 2026") are more realistic. Site already has weightage and study content; can add year or "study plan" in copy. |
| **Niche certs** (specific Architects, some Marketing/Tableau) | N/A | Detailed, high-quality pages with unique content and long-tail phrases can be easier wins. Current structure supports this. |

---

## Implemented (this pass)

- **Metadata template** (`cert-seo-data.ts`): Title is now `[Cert Name] (Exam Code) | Salesforce Certification Study Guide & Practice Questions` (exam code when in `SLUG_TO_EXAM_CODE`). Description: "Prepare for the [Cert] (Code) exam with section-wise weightage, focused study plan, and sample questions. Learn what to study and how to pass on first attempt." (capped at 160 chars). Exam codes added for: administrator (ADM-201), advanced-administrator (ADM-211), developer-1 (PD1), developer-2 (PD2), app-builder, practice tests, sales-cloud, service-cloud, technical-architect, CTA evaluation/review board.
- **Breadcrumb with role hub** (`CertPageSeo` + `cert-seo-data.ts`): Each cert page breadcrumb is now **Home > Certifications > [Role] > Cert Name**. "Certifications" links to `/certifications` (All Certifications). "[Role]" links to `/certifications/role/[roleSlug]` (e.g. Administrator hub). Implemented via `getRoleSlugForCert(slug)` in `certifications-data.ts` and optional `roleSlug`/`roleName` in `getCertBreadcrumb` and `getCertBreadcrumbJsonLd`.
- **SEO validation doc** (`docs/SEO-VALIDATION.md`): Checklist created and saved for ongoing reference.

## Optional next steps

- Add cert-specific FAQ overrides in `cert-seo-data.ts` for high-value certs (e.g. prerequisite, difficulty).
- Add 1–2 long-tail H2s per page (e.g. "[Cert] exam weightage by topic", "[Cert] study plan").
- Expand `SLUG_TO_EXAM_CODE` and custom `EXAM_PREP_CONTENT` for all 87 certs where useful.
- Consider role-in-URL migration only if you have a clear redirect strategy and need stronger semantic grouping in URLs.

---

## Conclusion

- **One page per certification:** ✅ with unique exam outline, weightage, and practice questions; study strategy unique where defined; FAQs templated.
- **Keyword focus:** ✅ H1 and first paragraph are cert-specific; title/description template and exam code in metadata improved.
- **Site structure:** ✅ Central hub and role hubs; ✅ link to All Certifications; ✅ role hub link added in breadcrumb.
- **Cannibalization:** ✅ No long duplicated content; uniqueness is strong for weightage and questions; FAQs and some study strategy could be more cert-specific.
- **Metadata:** ✅ Template and exam code in title/description aligned with recommendations.

All 87 pages are in a good position for visibility per certification query, with the above tweaks applied and optional enhancements available for even stronger differentiation.
