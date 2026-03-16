# TrailblazePrep — Complete Page Inventory
**Date:** 2026-03-16 | **Total pages:** ~286 | **Stack:** Next.js 14 App Router, Static Site Generation, Vercel

---

## Site Context (for Gemini)

- **Domain:** trailblazeprep.com (new, ~6 weeks indexed as of March 2026)
- **Purpose:** Salesforce certification study guides, free practice questions (15 per cert page), exam tips
- **Tech:** Next.js 14 SSG, Tailwind CSS, Vercel — 100/100 PSI on all pages
- **Schema:** 7 JSON-LD types per cert page (WebPage, BreadcrumbList, Article, FAQPage, Course, LearningResource, HowTo)
- **Author:** Krishna Mohan — ADM-201, PD1, PD2, App Builder, Consultant certified
- **Primary competition:** Salesforce Trailhead, Focus on Force, Salesforce Ben, Udemy
- **GSC status (March 2026):** 63 clicks / ~20k impressions / 0.32% CTR — rankings improving, CTR is the problem

---

## Category 1 — Core / Navigation Pages (8 pages)

| URL | Title | Purpose |
|-----|-------|---------|
| `/` | Salesforce Certification Learning Hub | Homepage — cert category grid, quick-start CTA, featured certs |
| `/certifications` | All Salesforce Certifications (Winter '26) | Full catalog hub — all 87 certs browsable by role category |
| `/about` | About Trailblaze Prep | Mission, methodology, team overview, EducationalOrganization schema |
| `/team` | Editorial Team | Krishna Mohan author profile, credentials, LinkedIn; Person JSON-LD |
| `/contact` | Contact | Enquiry form (Resend-powered), question bank access requests |
| `/html-sitemap` | HTML Sitemap | User-facing sitemap of all pages grouped by category |
| `/privacy` | Privacy Policy | Legal — data collection, cookies, GDPR basics |
| `/terms` | Terms of Use | Legal — acceptable use, no-braindumps policy |

---

## Category 2 — Certification Pages: Main Catalog (87 pages)

**URL pattern:** `/certifications/[slug]`
**Purpose per page:** Exam hub — logistics (cost, questions, passing score, duration), section weightage, exam tips, 15 free practice questions with explanations, key concepts, related certs, FAQ.

**Content structure (all cert pages):**
1. H1 (cert name + "Free Practice Questions" or "Study Guide")
2. Exam At a Glance stats card (questions / time / passing score / fee)
3. Section weightage bar chart
4. Exam Prep tips (written)
5. Key Concepts (5 topic blocks)
6. Practice Questions (15 Q&A with explanations)
7. Related Certifications
8. FAQ (4–6 questions with answers)
9. Sidebar: Table of Contents

**Pages (87 total):**

### Administrator Track (8 pages)
| URL | Title |
|-----|-------|
| `/certifications/administrator` | ADM-201 Certification: Free Practice Exam (2026) ★ Top performer |
| `/certifications/advanced-administrator` | Advanced Administrator (ADM-211) Study Guide |
| `/certifications/app-builder` | Platform App Builder Certification Guide |
| `/certifications/agentforce-specialist` | Agentforce Specialist Certification Guide |
| `/certifications/business-analyst` | Business Analyst Certification Guide |
| `/certifications/cpq-administrator` | CPQ Administrator Certification Guide |
| `/certifications/marketing-cloud-engagement-admin` | Marketing Cloud Engagement Admin Guide |
| `/certifications/slack-administrator` | Slack Administrator Certification Guide |

### Developer Track (8 pages)
| URL | Title |
|-----|-------|
| `/certifications/developer-1` | PD1 Certification: Free Practice Exam (2026) ★ Highest impressions (1,115) |
| `/certifications/developer-2` | Platform Developer II (PD2) Guide |
| `/certifications/javascript-developer-i` | JavaScript Developer I Certification Guide |
| `/certifications/b2c-commerce-developer` | B2C Commerce Developer Certification Guide |
| `/certifications/industries-cpq-developer` | Industries CPQ Developer Guide |
| `/certifications/omnistudio-developer` | OmniStudio Developer Certification Guide |
| `/certifications/marketing-cloud-engagement-developer` | Marketing Cloud Engagement Developer Guide |
| `/certifications/mulesoft-developer-i` | MuleSoft Developer I Certification Guide |

### Consultant Track (13 pages)
| URL | Title |
|-----|-------|
| `/certifications/sales-cloud` | Sales Cloud Consultant Guide |
| `/certifications/service-cloud` | Service Cloud Consultant Guide |
| `/certifications/marketing-cloud-consultant` | Marketing Cloud Consultant Guide |
| `/certifications/pardot-consultant` | Pardot (Account Engagement) Consultant Guide |
| `/certifications/pardot-specialist` | Pardot Specialist Guide |
| `/certifications/experience-cloud` | Experience Cloud Consultant Guide |
| `/certifications/field-service` | Field Service Consultant Guide |
| `/certifications/data-cloud-consultant` | Data Cloud Consultant Guide |
| `/certifications/revenue-cloud-consultant` | Revenue Cloud Consultant Guide |
| `/certifications/omnistudio-consultant` | OmniStudio Consultant Guide |
| `/certifications/nonprofit-success-pack-consultant` | NPSP Consultant Guide |
| `/certifications/nonprofit-cloud` | Nonprofit Cloud Consultant Guide |
| `/certifications/education-cloud-consultant` | Education Cloud Consultant Guide |

### Architect Track (14 pages)
| URL | Title |
|-----|-------|
| `/certifications/application-architect` | Application Architect Guide |
| `/certifications/system-architect` | System Architect Guide ★ Position dropped -9.1 |
| `/certifications/technical-architect` | Certified Technical Architect (CTA) Guide |
| `/certifications/technical-architect-evaluation` | CTA Architect Evaluation Guide |
| `/certifications/technical-architect-review-board` | CTA Review Board Guide |
| `/certifications/integration-architect` | Integration Architect Guide |
| `/certifications/data-architect` | Data Architect Guide |
| `/certifications/sharing-visibility-architect` | Sharing & Visibility Architect Guide |
| `/certifications/dev-lifecycle-deployment-architect` | Dev Lifecycle & Deployment Architect Guide |
| `/certifications/identity-access-management-architect` | IAM Architect Guide |
| `/certifications/b2b-solution-architect` | B2B Solution Architect Guide |
| `/certifications/b2c-solution-architect` | B2C Solution Architect Guide |
| `/certifications/mulesoft-integration-architect` | MuleSoft Integration Architect Guide |
| `/certifications/mulesoft-platform-architect` | MuleSoft Platform Architect Guide |

### Accredited Professional / Industry Cloud (44 pages)
*(process-automation-ap, marketing-cloud-intelligence-ap, mulesoft-developer-ii, heroku-architect, crm-analytics, tableau-*, health-cloud-ap, financial-services-cloud-ap, manufacturing-cloud-ap, energy-utilities-ap, communications-cloud-ap, consumer-goods-*, contact-center-ap, loyalty-management-ap, media-cloud-ap, net-zero-cloud-ap, public-sector-solutions-ap, order-management-*, b2b-commerce-*, advanced-field-service-ap, heroku-developer-ap, cpq-billing-ap, sales-foundations, platform-foundations, ai-associate, mulesoft-integration-foundations, mulesoft-catalyst-consultant, mulesoft-hyperautomation-developer, marketing-cloud-engagement-foundations, marketing-cloud-advanced-cross-channel-ap, marketing-cloud-personalization-ap, slack-consultant, slack-developer, ux-designer, strategy-designer)*

---

## Category 3 — Role Pages: Dynamic Template (10 role paths)

**URL pattern:** `/certifications/role/[slug]`
**Purpose:** Aggregator page listing all certifications within a career role. Includes a description of the role, list of relevant certs, and recommended path order.

| Role Slug | Title | Cert Count |
|-----------|-------|-----------|
| `administrator` | Salesforce Administrator Certifications | 8 |
| `developer` | Salesforce Developer Certifications | 8 |
| `consultant` | Salesforce Consultant Certifications ★ Position dropped -9.8 | 13 |
| `architect` | Salesforce Architect Certifications | 14 |
| `marketing` | Salesforce Marketing Certifications | ~10 |
| `associate` | Salesforce Associate Certifications | 4 |
| `designer` | Salesforce Designer Certifications | 2 |
| `tableau` | Salesforce Tableau Certifications | 5 |
| `accredited-professional` | Salesforce Accredited Professional Certifications | ~20 |
| `sales` | Salesforce Sales Certifications | 2 |

**Current issue:** Dynamic template (239 lines) — thin content vs. competitors at position 35–50.

---

## Category 4 — Exam Tips Pages (84 pages)

**URL pattern:** `/[cert-name]-exam-tips` or `/[cert-name]-exam-tips-2026`
**Purpose:** Focused exam strategy page for a specific certification. Covers the exam format stats, the top 3–5 areas where candidates fail, topic-specific tips (e.g. governor limits for PD1), FAQ, and CTA to the main cert page.

**Structure (all exam tips pages):**
1. Exam At a Glance (stats card)
2. Top tips by exam section (H2/H3 per topic area)
3. Common mistakes to avoid
4. FAQ (4 questions)
5. CTA back to cert page and practice questions

**High-impression pages (GSC data):**
- `/adm-201-exam-tips-2026` — flagship tips page
- `/pd1-exam-tips-2026` — developer exam tips
- `/service-cloud-consultant-exam-tips`
- `/agentforce-specialist-exam-tips`
- `/mulesoft-integration-foundations-exam-tips`
- `/slack-developer-exam-tips`

*(Full list: adm-201, advanced-administrator, advanced-field-service-ap, agentforce-specialist, ai-associate, app-builder, application-architect, b2b-commerce-admin-ap, b2b-commerce-developer-ap, b2b-solution-architect, business-analyst, communications-cloud-ap, consumer-goods-cloud-ap, consumer-goods-tpm-ap, contact-center-ap, cpq-administrator, cpq-billing-ap, crm-analytics, data-architect, data-cloud-consultant, dev-lifecycle-deployment-architect, education-cloud-consultant, email-specialist, energy-utilities-ap, experience-cloud, field-service, financial-services-cloud-ap, health-cloud-ap, heroku-architect, heroku-developer-ap, identity-access-management-architect, industries-cpq-developer, integration-architect, javascript-developer-i, loyalty-management-ap, manufacturing-cloud-ap, marketing-cloud-consultant, marketing-cloud-engagement-admin, marketing-cloud-engagement-developer, marketing-cloud-engagement-foundations, marketing-cloud-advanced-cross-channel-ap, marketing-cloud-intelligence-ap, marketing-cloud-personalization-ap, media-cloud-ap, mulesoft-catalyst-consultant, mulesoft-developer-i, mulesoft-developer-ii, mulesoft-hyperautomation-developer, mulesoft-integration-architect, mulesoft-integration-foundations, mulesoft-platform-architect, net-zero-cloud-ap, nonprofit-cloud, nonprofit-success-pack-consultant, omnistudio-consultant, omnistudio-developer, order-management-admin-ap, order-management-developer-ap, pardot-consultant, pardot-specialist, pd1-exam-tips-2026, pd2-exam-tips-2026, platform-foundations, process-automation-ap, public-sector-solutions-ap, revenue-cloud-consultant, sales-cloud, sales-foundations, sharing-visibility-architect, slack-administrator, slack-consultant, slack-developer, strategy-designer, system-architect, tableau-architect, tableau-consultant, tableau-data-analyst, tableau-desktop-foundations, tableau-server-administrator, technical-architect, technical-architect-evaluation, technical-architect-review-board, ux-designer)*

---

## Category 5 — Study Guide Pages (52 pages)

**URL pattern:** `/[cert-name]-study-guide`
**Purpose:** Longer-form study reference for a specific certification. Covers all exam sections with topic detail, study order, difficulty assessment, and links to the cert page for practice questions.

**Structure (all study guide pages):**
1. Exam At a Glance stats
2. Exam Sections table (section name, weight %, topic summary)
3. High-yield topics deep dive (H2/H3 per section)
4. Study plan / timeline
5. FAQ (4–5 questions)
6. CTA to cert page

*(Full list: adm-201, advanced-administrator, agentforce-specialist, ai-associate, app-builder, application-architect, b2b-solution-architect, b2c-commerce-architect, b2c-commerce-developer, b2c-solution-architect, business-analyst, cpq-administrator, crm-analytics, data-architect, data-cloud-consultant, dev-lifecycle-deployment-architect, education-cloud-consultant, email-specialist, experience-cloud-consultant, field-service-consultant, identity-access-management-architect, integration-architect, javascript-developer-i, marketing-cloud-consultant, marketing-cloud-engagement-admin, marketing-cloud-engagement-developer, marketing-cloud-engagement-foundations, mulesoft-developer-i, mulesoft-developer-ii, mulesoft-integration-architect, mulesoft-integration-foundations, mulesoft-platform-architect, nonprofit-cloud-consultant, nonprofit-success-pack-consultant, omnistudio-consultant, omnistudio-developer, pardot-consultant, pardot-specialist, pd1, pd2, platform-foundations, revenue-cloud-consultant, sales-cloud-consultant, service-cloud-consultant, service-cloud, sharing-visibility-architect, slack-administrator, strategy-designer, system-architect, tableau-data-analyst, technical-architect, ux-designer)*

---

## Category 6 — Comparison / VS Pages (26 pages)

**URL pattern:** `/[cert-a]-vs-[cert-b]`
**Purpose:** Decision-helper pages for candidates choosing between two certifications. Covers difficulty comparison, prerequisites, career outcomes, cost, and a recommendation based on current experience level.

**Structure (all comparison pages):**
1. Side-by-side comparison table (format, cost, difficulty, prerequisites)
2. Who should take Cert A section
3. Who should take Cert B section
4. Career path / salary outcomes
5. Final recommendation
6. FAQ

| URL | Compares |
|-----|---------|
| `/pd1-vs-pd2` | Platform Developer I vs Platform Developer II |
| `/adm-201-vs-app-builder` | Administrator vs App Builder — which first? |
| `/app-builder-vs-developer-i` | App Builder vs Platform Developer I |
| `/javascript-developer-i-vs-pd1` | JavaScript Developer I vs PD1 |
| `/system-architect-vs-application-architect` | System vs Application Architect |
| `/integration-architect-vs-system-architect` | Integration vs System Architect |
| `/sales-cloud-vs-service-cloud` | Sales Cloud vs Service Cloud Consultant |
| `/sales-cloud-vs-experience-cloud-consultant` | Sales Cloud vs Experience Cloud Consultant |
| `/pardot-specialist-vs-pardot-consultant` | Pardot Specialist vs Pardot Consultant |
| `/pardot-consultant-vs-marketing-cloud-consultant` | Pardot Consultant vs Marketing Cloud Consultant |
| `/mulesoft-developer-i-vs-ii` | MuleSoft Developer I vs II |
| `/mulesoft-developer-i-vs-integration-foundations` | MuleSoft Developer I vs Integration Foundations |
| `/data-cloud-vs-crm-analytics` | Data Cloud vs CRM Analytics Consultant |
| `/data-cloud-vs-marketing-cloud` | Data Cloud vs Marketing Cloud |
| `/administrator-vs-advanced-administrator` | Administrator vs Advanced Administrator |
| `/agentforce-specialist-vs-ai-associate` | Agentforce Specialist vs AI Associate |
| `/platform-foundations-vs-ai-associate` | Platform Foundations vs AI Associate |
| `/field-service-vs-service-cloud-consultant` | Field Service vs Service Cloud Consultant |
| `/education-cloud-vs-nonprofit-cloud-consultant` | Education Cloud vs Nonprofit Cloud |
| `/omnistudio-developer-vs-consultant` | OmniStudio Developer vs Consultant |
| `/b2b-vs-b2c-solution-architect` | B2B vs B2C Solution Architect |
| `/cpq-admin-vs-cpq-billing-ap` | CPQ Admin vs CPQ & Billing AP |
| `/cpq-admin-vs-revenue-cloud-consultant` | CPQ Admin vs Revenue Cloud Consultant |
| `/marketing-cloud-admin-vs-developer` | Marketing Cloud Admin vs Developer |
| `/business-analyst-vs-strategy-designer` | Business Analyst vs Strategy Designer |
| `/ux-designer-vs-strategy-designer` | UX Designer vs Strategy Designer |

---

## Category 7 — Certification Path Pages (5 pages)

**URL pattern:** `/[role]-certification-path`
**Purpose:** End-to-end career roadmap for a Salesforce role. Shows the recommended cert order, prerequisites, time investment, and links to each cert page. Targets queries like "salesforce admin certification path 2026."

| URL | Title |
|-----|-------|
| `/certification-path` | Salesforce Certification Paths (all roles overview) |
| `/admin-certification-path` | Salesforce Admin Cert Path: Which Cert First? |
| `/developer-certification-path` | Salesforce Developer Cert Path: Which First? |
| `/consultant-certification-path` | Salesforce Consultant Certification Path |
| `/architect-certification-path` | Salesforce Architect Path: App & System Architect |

---

## Category 8 — Commercial / Info Pages (21 pages)

**URL pattern:** `/salesforce-[topic]` or `/how-to-[topic]` or `/is-salesforce-[topic]`
**Purpose:** Commercial intent and informational pages targeting high-volume queries about Salesforce careers, costs, and certification decisions. These support brand authority and capture top-of-funnel queries.

| URL | Purpose |
|-----|---------|
| `/salesforce-certification-cost` | Exam fees, retake costs, discount vouchers for all 87 certs |
| `/salesforce-certification-salary` | Salary data by cert tier and role |
| `/salesforce-certification-difficulty` | Difficulty ranking of all certs (easiest → hardest) |
| `/salesforce-certification-maintenance` | How maintenance works, release cycles, deadlines |
| `/salesforce-certification-validity` | How long certs last before expiry |
| `/salesforce-certification-passing-score` | Passing scores by cert and tier |
| `/salesforce-exam-retake-policy` | Retake wait times, costs, limits |
| `/salesforce-certification-voucher` | Discount codes, partner vouchers, how to get 50% off |
| `/salesforce-free-certification` | How to get free Salesforce certifications (Trailhead promotions) |
| `/salesforce-certifications-list` | Complete list of all active certifications |
| `/salesforce-certification-difficulty` | Difficulty tier ranking |
| `/how-to-become-salesforce-administrator` | Career guide: path into admin role |
| `/how-to-become-salesforce-developer` | Career guide: path into developer role |
| `/how-to-become-salesforce-consultant` | Career guide: path into consultant role |
| `/how-to-become-salesforce-architect` | Career guide: path into architect role |
| `/how-to-register-salesforce-exam` | Step-by-step: booking on Webassessor |
| `/how-to-study-for-salesforce-certification` | Study methodology, resources, timelines |
| `/is-salesforce-certification-worth-it` | ROI analysis: salary uplift, job market demand |
| `/salesforce-admin-vs-developer-career` | Career comparison: admin path vs developer path |
| `/which-salesforce-certification-first` | Decision guide for beginners |
| `/become-cta` | CTA (Certified Technical Architect) aspirant guide |

---

## Questions for Gemini

For each page category below, please evaluate:

1. **Content depth** — What should each page contain to rank on page 1 for its target query? What does the top-ranking competitor page (Salesforce Ben, Focus on Force, Trailhead) include that we likely don't?

2. **Intent matching** — What is the primary search intent for users landing on this page type? Are we matching transactional intent ("I want practice questions"), informational intent ("I want to understand this cert"), or navigational intent?

3. **Differentiation / Information Gain** — What original data, first-hand experience, or content that competitors don't have should we add to each page type?

4. **Internal linking** — Which pages should link to which? What is the right hub-and-spoke structure for a Salesforce cert prep site?

5. **Conversion** — Each page ultimately wants the user to either (a) start practice questions, (b) contact for a full question bank, or (c) explore related certs. What CTA placement and copy best serves each page type?

### Specific questions by category:

**Cert Pages (87 pages):**
- Should all 87 cert pages have the same structure, or should pages with different traffic profiles (high-impression vs. zero-impression) have different strategies?
- What content signals most strongly differentiate a cert page at position 50 from one at position 25?
- How much content (word count / line count) is typical for a cert prep page that ranks in the top 5?

**Exam Tips Pages (84 pages):**
- Exam tips pages canonicalise to the cert page to avoid duplicate content. Is this the right strategy, or should they have their own canonical and compete independently?
- What is the ideal length and structure for an exam tips page? How do the top-ranking "how to pass [cert]" pages differ from a generic tips list?

**Study Guide Pages (52 pages):**
- Study guides are separate pages with unique canonical URLs. What depth of content (number of sections, word count) is needed to rank in the top 10 for "[cert name] study guide"?
- Should study guides link back to the cert page as the "practice" destination, or should they embed a question or two directly?

**Comparison / VS Pages (26 pages):**
- Comparison pages target decision queries ("X vs Y which should I take"). What is the right content structure to rank for these queries?
- Should comparison pages have a clear winner/recommendation, or be neutral? What do the top-ranking comparison pages do?

**Path Pages (5 pages):**
- Certification path pages target career journey queries. What content makes these pages rank — text guides, visual flowcharts, or something else?
- How long should a certification path page be? Are there schema types that help (HowTo? Course? JobPosting)?

**Commercial / Info Pages (21 pages):**
- Pages like /salesforce-certification-cost and /salesforce-certification-salary target high-volume informational queries. What original data (actual salary figures, actual exam fee tables) would make these rank?
- These pages currently have no practice questions or cert-specific content — should they have more interactive elements?
