# Gemini deep-research prompt — 95-page SERP audit for trailblazeprep.com

Paste the block below into Gemini (deep research / task mode). The page
inventory is generated from `src/lib/cert-keyword-clusters.ts`, so it stays in
step with what the site actually renders.

---

## Role

You are an SEO analyst auditing a single site, `https://www.trailblazeprep.com`,
against live Google SERPs. The goal is Top 10 Google rankings for Salesforce
certification queries across all 95 certification pages.

## Task

For **each** of the 95 pages listed at the end, run the query set below against
live Google results, then report what is working and what is not.

### Query set per page (7 intent patterns)

Using that page's `bareName`, `vendorPrefix` (Salesforce or Anthropic) and its
aliases/codes:

1. `{bareName}`
2. `{vendorPrefix} {bareName}`
3. `{vendorPrefix} Certified {bareName}`
4. `{bareName} certification` and `{vendorPrefix} {bareName} certification`
5. `{bareName} dumps`, `{vendorPrefix} {bareName} dumps`, `{code} dumps`, `{legacyName} dumps`
6. each legacy exam name, including Arabic vs Roman numeral variants
   (`Platform Developer 1` vs `Platform Developer I`, `Platform Administrator 2`
   vs `II`, `JavaScript Developer 1` vs `I`, `MuleSoft Developer 1`/`2` vs `I`/`II`)
7. each official Trailhead Academy code and each legacy code

### For each page, report

- **Current position** for each query pattern: the trailblazeprep.com URL that
  ranks, its position, or "not in top 100".
- **Who outranks it** in the top 10, and what those pages have that this one
  does not: content depth, entity coverage, schema types, internal links,
  referring domains, freshness signals, SERP feature ownership (featured
  snippet, People Also Ask, sitelinks, video, image pack).
- **Cannibalisation**: any other trailblazeprep.com URL competing for the same
  query (exam-tips pages, comparison pages, role hubs, practice-test aliases).
- **What is working**: the specific on-page element earning the current
  position, and the queries where this page is already competitive.
- **What is not working**, named concretely: missing entity or alias, thin
  section, wrong intent match, title/description not matching the query,
  missing schema property, orphaned page, slow page, duplicate H2, etc.
- **Required changes**, written as instructions a coding agent can apply without
  further research: exact file-level intent, exact copy to add or rewrite, exact
  schema properties and values, exact internal links to add (source URL →
  target URL → anchor text). Rank them by expected ranking impact and say which
  are one-line fixes versus new sections.

### Site context (already shipped — do not re-recommend)

Every one of the 95 pages already renders:
- a naming-variant disambiguation paragraph in the first 150 words, naming the
  bare name, vendor-prefixed name, "Certified" name, both "... certification"
  phrasings, and every official code, legacy code and numeral alias;
- an "Official Exam Code of Conduct: Practice Questions vs. Unofficial
  {bareName} ({code}) Dumps" section with a six-row comparison table, naming the
  exact `"{bareName} dumps"`, `"{vendorPrefix} {bareName} dumps"`, `"{code} dumps"`
  and `"{legacyName} dumps"` phrasings;
- a dumps FAQ answer in both the visible FAQ and the `FAQPage` JSON-LD;
- keyword-rich H2s: `{bareName} Certification Exam Fee, Retake Cost & Registration`,
  `{bareName} Certification Validity & Maintenance Schedule`,
  `Why the {vendorPrefix} {bareName} Certification Matters`;
- `alternateName` and `keywords` on the `WebPage`, `LearningResource` and
  `EducationalOccupationalCredential` JSON-LD, carrying every alias and code;
- canonical, OG/Twitter tags, breadcrumbs, one H1, Article/Quiz/Breadcrumb schema.

So focus on what is **still** missing: off-page signals, internal link
architecture, content gaps against the pages that actually rank, SERP feature
capture, and page-level intent mismatches.

### Output format

One section per page, in the order listed, with a compact table of
`query | our position | top-ranked competitor | gap | fix`. Finish with:
- a cross-site section on patterns that repeat across many pages,
- a prioritised list of the 20 highest-impact changes across the whole site,
- the 10 pages with the best chance of reaching Top 10 within 90 days, with
  what each needs.

Do not pad. Where you cannot establish a live position, say so rather than
estimating.

## The 95 pages

(base URL `https://www.trailblazeprep.com`)

1. /certifications/platform-foundations — Platform Foundations (Salesforce) | aliases: Plat-101, Salesforce Associate
2. /certifications/ai-associate — AI Associate (Salesforce) | aliases: AI-101
3. /certifications/marketing-cloud-engagement-foundations — Marketing Cloud Engagement Foundations (Salesforce) | aliases: MC-101, Marketing Associate
4. /certifications/mulesoft-integration-foundations — MuleSoft Integration Foundations (Salesforce) | aliases: Mule-101, MuleSoft Associate
5. /certifications/administrator — Platform Administrator (Salesforce) | aliases: Plat-Admn-201, ADM-201, Salesforce Administrator
6. /certifications/advanced-administrator — Advanced Administrator (Salesforce) | aliases: Plat-Admn-301, ADM-211, Platform Administrator II, Platform Administrator 2
7. /certifications/app-builder — Platform App Builder (Salesforce) | aliases: Plat-Admn-202, DEV-402, App Builder
8. /certifications/agentforce-specialist — Agentforce Specialist (Salesforce) | aliases: AI-201, Agent Force Specialist, AI Specialist
9. /certifications/business-analyst — Business Analyst (Salesforce) | aliases: BA-201
10. /certifications/cpq-administrator — CPQ Administrator (Salesforce) | aliases: Sales-Admn-202, CPQ-211, CPQ Specialist
11. /certifications/marketing-cloud-engagement-admin — Marketing Cloud Engagement Administrator (Salesforce) | aliases: MCE-Admn-201, Marketing Cloud Administrator
12. /certifications/slack-administrator — Slack Administrator (Salesforce) | aliases: Slack-Admn-201, Slack Certified Administrator
13. /certifications/developer-1 — Platform Developer I (Salesforce) | aliases: Plat-Dev-201, PD1, Platform Developer 1, CRT-450
14. /certifications/developer-2 — Platform Developer II (Salesforce) | aliases: Plat-Dev-301, PD2, Platform Developer 2
15. /certifications/javascript-developer-i — JavaScript Developer I (Salesforce) | aliases: JS-Dev-101, CRT-600, JavaScript Developer 1
16. /certifications/b2c-commerce-developer — B2C Commerce Developer (Salesforce) | aliases: Comm-Dev-101, CRT-500
17. /certifications/industries-cpq-developer — Industries CPQ Developer (Salesforce) | aliases: Ind-Dev-201, Vlocity CPQ Developer
18. /certifications/marketing-cloud-engagement-developer — Marketing Cloud Engagement Developer (Salesforce) | aliases: MCE-Dev-201, Marketing Cloud Developer
19. /certifications/mulesoft-developer-i — MuleSoft Developer I (Salesforce) | aliases: Mule-Dev-201, MuleSoft Developer 1
20. /certifications/mulesoft-developer-ii — MuleSoft Developer II (Salesforce) | aliases: Mule-Dev-301, MuleSoft Developer 2
21. /certifications/mulesoft-hyperautomation-developer — MuleSoft Hyperautomation Developer (Salesforce) | aliases: Mule-Dev-202, MuleSoft Hyperautomation Specialist
22. /certifications/omnistudio-developer — OmniStudio Developer (Salesforce) | aliases: Plat-Dev-210
23. /certifications/slack-developer — Slack Developer (Salesforce) | aliases: Slack-Dev-201, Slack Certified Developer
24. /certifications/crm-analytics-einstein-discovery-consultant — CRM Analytics and Einstein Discovery Consultant (Salesforce) | aliases: CRM Analytics Consultant, Einstein Discovery Consultant
25. /certifications/data-360-consultant — Data 360 Consultant (Salesforce) | aliases: Data-Con-101, Data Cloud Consultant
26. /certifications/education-cloud-consultant — Education Cloud Consultant (Salesforce)
27. /certifications/experience-cloud — Experience Cloud Consultant (Salesforce) | aliases: CRT-271, Community Cloud Consultant
28. /certifications/field-service — Field Service Consultant (Salesforce) | aliases: FS-Con-101, Agentforce Field Service and Operations Consultant
29. /certifications/pardot-consultant — Marketing Cloud Account Engagement Consultant (Salesforce) | aliases: CRT-302, Pardot Consultant
30. /certifications/marketing-cloud-consultant — Marketing Cloud Engagement Consultant (Salesforce) | aliases: MCE-Con-201, Marketing Cloud Consultant
31. /certifications/agentforce-life-sciences-consultant — Agentforce Life Sciences Consultant (Salesforce) | aliases: Als-Con-201, Life Sciences Cloud Consultant
32. /certifications/nonprofit-cloud — Nonprofit Cloud Consultant (Salesforce) | aliases: NP-Con-102, Agentforce Nonprofit Consultant
33. /certifications/nonprofit-success-pack-consultant — Nonprofit Success Pack (NPSP) Consultant (Salesforce) | aliases: NP-Con-101, NPSP Consultant
34. /certifications/omnistudio-consultant — OmniStudio Consultant (Salesforce) | aliases: Plat-Con-201
35. /certifications/public-sector-solutions-consultant — Public Sector Solutions Consultant (Salesforce) | aliases: PubSec-Con-201
36. /certifications/revenue-cloud-consultant — Revenue Management Consultant (Salesforce) | aliases: Rev-Con-201, Revenue Cloud Consultant
37. /certifications/sales-cloud — Agentforce Sales Consultant (Salesforce) | aliases: Sales-Con-201, CRT-251, Sales Cloud Consultant
38. /certifications/service-cloud — Agentforce Service Consultant (Salesforce) | aliases: Service-Con-201, CRT-261, Service Cloud Consultant
39. /certifications/slack-consultant — Slack Consultant (Salesforce) | aliases: Slack-Con-201, Slack Certified Consultant
40. /certifications/email-specialist — Marketing Cloud Engagement Specialist (Salesforce) | aliases: MC-202, CRT-550, Marketing Cloud Email Specialist
41. /certifications/marketing-cloud-next-consultant — Marketing Cloud Next Consultant (Salesforce) | aliases: MC-Con-201
42. /certifications/pardot-specialist — Marketing Cloud Account Engagement Specialist (Salesforce) | aliases: MC-201, Pardot Specialist
43. /certifications/application-architect — Application Architect (Salesforce)
44. /certifications/data-architect — Data Architect (Salesforce) | aliases: Plat-Arch-201, Platform Data Architect
45. /certifications/integration-architect — Integration Architect (Salesforce) | aliases: Plat-Arch-204, Platform Integration Architect
46. /certifications/sharing-visibility-architect — Sharing and Visibility Architect (Salesforce) | aliases: Plat-Arch-205, Platform Sharing and Visibility Architect
47. /certifications/system-architect — System Architect (Salesforce)
48. /certifications/identity-access-management-architect — Identity and Access Management Architect (Salesforce) | aliases: Plat-Arch-203, Platform Identity and Access Management Architect
49. /certifications/dev-lifecycle-deployment-architect — Development Lifecycle and Deployment Architect (Salesforce) | aliases: Plat-Arch-202, Platform Development Lifecycle and Deployment Architect
50. /certifications/technical-architect — Technical Architect (Salesforce) | aliases: CTA
51. /certifications/technical-architect-evaluation — Technical Architect - Architect Evaluation (Salesforce) | aliases: CTA Architect Evaluation
52. /certifications/technical-architect-review-board — Technical Architect - Architect Review Board (Salesforce) | aliases: CTA Review Board
53. /certifications/b2b-solution-architect — B2B Solution Architect (Salesforce) | aliases: Arch-301
54. /certifications/b2c-commerce-architect — B2C Commerce Architect (Salesforce) | aliases: Arch-303
55. /certifications/b2c-solution-architect — B2C Solution Architect (Salesforce) | aliases: Arch-302
56. /certifications/heroku-architect — Heroku Architect (Salesforce) | aliases: Plat-Arch-206
57. /certifications/mulesoft-catalyst-consultant — MuleSoft Catalyst Consultant (Salesforce) | aliases: Mule-Con-201
58. /certifications/mulesoft-platform-architect — MuleSoft Platform Architect (Salesforce) | aliases: Mule-Arch-201, MuleSoft Platform Architect I
59. /certifications/mulesoft-integration-architect — MuleSoft Platform Integration Architect (Salesforce) | aliases: Mule-Arch-202, MuleSoft Integration Architect
60. /certifications/advanced-field-service-ap — Advanced Field Service Accredited Professional (Salesforce) | aliases: Advanced Field Service AP
61. /certifications/b2b-commerce-admin-ap — B2B Commerce Administrator Accredited Professional (Salesforce) | aliases: B2B Commerce for Administrators Accredited Professional
62. /certifications/b2b-commerce-developer-ap — B2B Commerce Developer Accredited Professional (Salesforce) | aliases: B2B Commerce for Developers Accredited Professional
63. /certifications/communications-cloud-ap — Communications Cloud Accredited Professional (Salesforce) | aliases: Agentforce Communications, Agentforce Communications Accredited Professional
64. /certifications/consumer-goods-cloud-ap — Consumer Goods Cloud Accredited Professional (Salesforce) | aliases: Agentforce Consumer Goods, Agentforce Consumer Goods Accredited Professional
65. /certifications/consumer-goods-tpm-ap — Consumer Goods Cloud TPM Accredited Professional (Salesforce) | aliases: Trade Promotion Management Accredited Professional
66. /certifications/contact-center-ap — Contact Center Accredited Professional (Salesforce) | aliases: Contact Center AP
67. /certifications/cpq-billing-ap — CPQ and Billing Consultant Accredited Professional (Salesforce) | aliases: CPQ and Billing AP
68. /certifications/energy-utilities-ap — Energy and Utilities Cloud Accredited Professional (Salesforce) | aliases: Energy and Utilities AP
69. /certifications/financial-services-cloud-ap — Financial Services Cloud Accredited Professional (Salesforce) | aliases: Agentforce Financial Services, Agentforce Financial Services Accredited Professional
70. /certifications/health-cloud-ap — Health Cloud Accredited Professional (Salesforce) | aliases: Agentforce Health, Agentforce Health Accredited Professional
71. /certifications/heroku-developer-ap — Heroku Developer Accredited Professional (Salesforce) | aliases: Heroku Developer AP
72. /certifications/loyalty-management-ap — Loyalty Management Accredited Professional (Salesforce) | aliases: Loyalty Management AP
73. /certifications/manufacturing-cloud-ap — Manufacturing Cloud Accredited Professional (Salesforce) | aliases: Agentforce Manufacturing, Agentforce Manufacturing Accredited Professional
74. /certifications/marketing-cloud-advanced-cross-channel-ap — Marketing Cloud Advanced Cross Channel Accredited Professional (Salesforce) | aliases: Advanced Cross Channel AP
75. /certifications/marketing-cloud-intelligence-ap — Marketing Cloud Intelligence Accredited Professional (Salesforce) | aliases: Datorama, Datorama Accredited Professional
76. /certifications/marketing-cloud-personalization-ap — Marketing Cloud Personalization Accredited Professional (Salesforce) | aliases: Interaction Studio, Interaction Studio Accredited Professional
77. /certifications/media-cloud-ap — Media Cloud Accredited Professional (Salesforce) | aliases: Media Cloud AP
78. /certifications/net-zero-cloud-ap — Net Zero Cloud Accredited Professional (Salesforce) | aliases: Net Zero Cloud AP
79. /certifications/order-management-admin-ap — Order Management Administrator Accredited Professional (Salesforce) | aliases: Order Management Administrator AP
80. /certifications/order-management-developer-ap — Order Management Developer Accredited Professional (Salesforce) | aliases: Order Management Developer AP
81. /certifications/process-automation-ap — Process Automation Accredited Professional (Salesforce) | aliases: Process Automation AP
82. /certifications/public-sector-solutions-ap — Public Sector Solutions Accredited Professional (Salesforce) | aliases: Agentforce 360, Agentforce 360 for Public Sector Professional
83. /certifications/sales-foundations — Agentforce Sales Foundations (Salesforce) | aliases: Sales-101, Sales Foundations, Sales Representative
84. /certifications/strategy-designer — Platform Strategy Designer (Salesforce) | aliases: Plat-UX-102, Strategy Designer
85. /certifications/ux-designer — Platform User Experience Designer (Salesforce) | aliases: Plat-UX-101, UX Designer, User Experience Designer
86. /certifications/tableau-architect — Tableau Architect (Salesforce) | aliases: Analytics-Arch-201, Tableau Certified Architect
87. /certifications/tableau-consultant — Tableau Consultant (Salesforce) | aliases: Analytics-Con-201, Tableau Certified Consultant
88. /certifications/tableau-next-consultant — Tableau Next Consultant (Salesforce) | aliases: Analytics-Con-202
89. /certifications/tableau-data-analyst — Tableau Data Analyst (Salesforce) | aliases: Analytics-DA-201, Tableau Certified Data Analyst
90. /certifications/tableau-desktop-foundations — Tableau Desktop Foundations (Salesforce) | aliases: Analytics-101, Tableau Desktop Specialist
91. /certifications/tableau-server-administrator — Tableau Server Administrator (Salesforce) | aliases: Analytics-SA-201, Tableau Server Certified Associate
92. /certifications/claude-certified-associate — Claude Certified Associate (Anthropic) | aliases: Claude Associate, Claude Associate Foundations
93. /certifications/claude-certified-developer — Claude Certified Developer (Anthropic) | aliases: Claude Developer, Claude Developer Foundations
94. /certifications/claude-certified-architect-foundations — Claude Certified Architect (Anthropic) | aliases: Claude Architect Foundations
95. /certifications/claude-certified-architect-professional — Claude Certified Architect (Anthropic) | aliases: Claude Architect Professional