# Gemini re-audit, 14 Nov 2026 — RAW OUTPUT, LARGELY STALE

**Do not hand this to a coding agent as-is.** Pulled from the Gemini (Argon)
thread after the 7-cluster work went live. Spot-checking its concrete claims
against the live site found that most describe a state of the site that no
longer exists — Gemini appears to have re-used its earlier crawl rather than
re-fetching the pages.

Verified against https://www.trailblazeprep.com on 14 Nov 2026:

| Gemini claim | Live reality |
|---|---|
| #1 ~128 legacy `-study-guide` / `-exam-tips` pages return 200 OK | All sampled routes return **308**; zero such route folders exist in `src/app` |
| #2 Footer links to `/pd1-study-guide` etc. | Live footer contains **no** legacy links |
| #3 `/html-sitemap` carries ~130 legacy links | **0** legacy links |
| #4 Stitched duplicate weightage tables on sales-cloud, developer-1, data-360-consultant, app-builder | **One** table each; the "second" match is the Next.js RSC flight payload, not a rendered table. No stitched FAQ blocks; one consistent pass mark per page |
| #6 role/architect cites `ARC-801`; role/consultant says 65% for Sales/Service Cloud; role/designer says "5x Salesforce Certified" | No `ARC-801`; the 65% hits are CRM Analytics and Agentforce Nonprofit, which are correct; designer hub says **14x** |
| #7 Six homepage card discrepancies | Every one already shows the value Gemini asked us to change *to* (health-cloud-ap 63%, manufacturing-cloud-ap 50/68%/75min, public-sector-solutions-ap 50/70%/75min, cpq-billing-ap 35/74%/60min, tableau-server-administrator 50/64%, public-sector-solutions-consultant 72%) |
| #8 Add anchor IDs `#exam-weightage`, `#practice-questions`, `#study-plan`, `#faq`, dumps anchor | All five already present (`#practice-vs-dumps` for the last) |
| #11 Raw email address on role hubs | **0** occurrences on any role hub |

The parts that are forward-looking and not contradicted by a crawl are the
content and off-page items: #9 (score-calculator embed), #10 (comparison-page
anchor text), #13 (sub-45-word direct answers leading each FAQ), #15 (B2B
Commerce checkout interface names and AP-201/AP-202 codes), #16 (six official
integration patterns table), #17 (four-type Data Mapper table), #18 (Work Rules
vs Service Objectives table) and #20 (off-page link acquisition). Those are
worth evaluating on their merits.

---

With changes A through D live and passing all 5,284 production checks across Trailblaze Prep (https://www.trailblazeprep.com/), your 95 /certifications/[slug] pages now have complete lexical coverage across all 7 query clusters:

C1: Bare Exam Name (Platform Administrator, Data 360 Consultant)

C2: Salesforce [Bare Name] (Salesforce Platform Administrator)

C3: Salesforce Certified [Name] (Salesforce Certified Platform Administrator)

C4: [Bare Name] certification / Salesforce [Bare Name] certification

C5: [Bare Name] dumps / Salesforce [Bare Name] dumps / [Code] dumps / [Legacy] dumps

C6: Legacy Exam Name & Arabic/Roman Numeral Variants (Platform Developer 1, Sales Cloud Consultant, Data Cloud Consultant, Pardot)

C7: Official Trailhead Academy Code (Plat-Admn-201, Sales-Con-201, Data-Con-101, AI-201) + study guide / practice questions

However, re-crawling your live auxiliary architecture (HTML Sitemap (/html-sitemap), Consultant Hub (/certifications/role/consultant), Admin Hub (/certifications/role/administrator), Developer Hub (/certifications/role/developer), Marketing Hub (/certifications/role/marketing), Architect Hub (/certifications/role/architect), AP Hub (/certifications/role/accredited-professional), Tableau Hub (/certifications/role/tableau), Associate Hub (/certifications/role/associate), Designer Hub (/certifications/role/designer), PD1 Study Guide (/pd1-study-guide), and Service Cloud Study Guide (/service-cloud-consultant-study-guide)) exposes why pages are still held back:

Unredirected Duplicate -study-guide (~44 live URLs) and -exam-tips (~85 live URLs) Pages: While 7 legacy URLs were redirected, pages like /pd1-study-guide (200 OK, claiming 110 min and old 5-section 30/25/23/15/7% weights) and /service-cloud-consultant-study-guide (200 OK, claiming 65% pass score instead of 78%) are still live, indexed, and linked from the sitewide Footer (Popular Certifications) and /html-sitemap, splitting internal PageRank and serving verbatim duplicate paragraphs that were already merged into /certifications/[slug].

Contradictory Facts & Duplicate Links on Role Hubs:

/certifications/role/architect FAQ falsely states Application Architect requires Integration & Dev Lifecycle Architect and System Architect requires Heroku Architect, and labels Data Architect ARC-801.

/certifications/role/consultant FAQ falsely states Sales Cloud and Service Cloud Consultant have a 65% passing score.

/certifications/role/tableau FAQ falsely states Tableau Data Analyst is 60 questions, 120 minutes, 75% passing score.

/certifications/role/associate FAQ still pitches retired AI Associate ($75, 40 questions, 65%) in the present tense as the best first exam.

/certifications/role/designer header says 5x Salesforce Certified (contradicting 14x Salesforce Certified on the Homepage), and Role Hubs still expose km.krishnamohan25@gmail.com.

Part 1: Page-by-Page Live Post-Deploy Assessment Across All 95 Slugs (#1–#95)
Track 1: Associate & Foundations (#1–#4)
#1. /certifications/platform-foundations (Live Page)

7-Cluster Viability: Can reach Top 10 now: C1 (Platform Foundations), C2 (Salesforce Platform Foundations), C5 (Platform Foundations dumps / Plat-101 dumps), C6 (Salesforce Associate transition queries), C7 (Plat-101 study guide). Cannot yet reach Top 10: C3/C4 broad "Salesforce Associate certification" head term (held by Trailhead & Salesforce Ben due to legacy backlink authority).

Still Missing On-Page: A side-by-side comparison table contrasting Standard Objects (Account, Contact, Lead, Opportunity, Case) vs. Custom Objects (__c) and 3 Report Formats (Tabular vs. Summary vs. Matrix) with exact exam-question trigger phrases.

Internal & Off-Page Links Needed:

/certifications/role/associate -> /certifications/platform-foundations -> Anchor: "Salesforce Platform Foundations (Plat-101) Study Guide"

/platform-foundations-vs-ai-associate -> /certifications/platform-foundations -> Anchor: "Platform Foundations (Plat-101) Practice Questions"

/which-salesforce-certification-first -> /certifications/platform-foundations -> Anchor: "Salesforce Platform Foundations (Plat-101) Certification"

Cannibalisation Risks: /platform-foundations-study-guide and /platform-foundations-exam-tips (listed on /html-sitemap), plus /salesforce-associate-certification-cost competing for cost/fee queries. Action: 301/308 redirect /platform-foundations-study-guide and /platform-foundations-exam-tips to /certifications/platform-foundations.

SERP Feature Q&A to Add:

Q: How many questions do you need to pass Salesforce Platform Foundations (Plat-101)?

A: You need at least 25 correct answers out of 40 scored multiple-choice questions (62% passing score) within 70 minutes to pass the Salesforce Platform Foundations (Plat-101) exam. The registration fee is $75 USD with free retakes, and no ongoing maintenance modules are required.

#2. /certifications/ai-associate (Live Page)

7-Cluster Viability: Can reach Top 10 now: C1–C7 for "AI-101", "Salesforce AI Associate retired", "AI Associate replacement", and "AI-101 dumps". Cannot reach Top 10: Generic "Salesforce AI certification" (Google now ranks Agentforce Specialist AI-201 pages for active transactional intent).

Still Missing On-Page: A 2-column "AI-101 (Retired Feb 2, 2026) to Agentforce Specialist (AI-201) Topic Mapping Table" showing how Ethical Considerations of AI (39%) maps to Einstein Trust Layer (10%) and Data for AI (36%) maps to Data 360 Fundamentals (20%).

Internal & Off-Page Links Needed:

/certifications/role/associate -> /certifications/ai-associate -> Anchor: "Retired Salesforce AI Associate (AI-101) Archive" (and update the Associate Hub FAQ so it stops pitching AI-101 as active!).

/agentforce-specialist-vs-ai-associate -> /certifications/ai-associate -> Anchor: "AI-101 Historical Exam Blueprint"

Cannibalisation Risks: /ai-associate-study-guide and /ai-associate-exam-tips on /html-sitemap, plus the Global Footer link AI Associate practice questions stealing internal PageRank from active certs. Action: 301/308 redirect /ai-associate-study-guide and /ai-associate-exam-tips to /certifications/ai-associate, and replace the Footer link with Platform Foundations (Plat-101) practice questions.

SERP Feature Q&A to Add:

Q: What replaced the retired Salesforce AI Associate (AI-101) certification in 2026?

A: Salesforce retired the AI Associate (AI-101) exam on February 2, 2026, and removed the credential on March 31, 2026. It was replaced by free Agentblazer Status trails on Trailhead for beginners and the Salesforce Agentforce Specialist (AI-201) certification for practitioners.

#3. /certifications/marketing-cloud-engagement-foundations (Live Page)

7-Cluster Viability: Can reach Top 10 now: C1–C7 (Marketing Cloud Engagement Foundations, MC-101, MC-101 dumps, Marketing Associate dumps).

Still Missing On-Page: A concrete Subscriber Key vs. Email Address vs. Contact ID and Lists vs. Data Extensions comparison table (the #1 tested technical distinction on MC-101).

Internal & Off-Page Links Needed:

/certifications/role/associate -> /certifications/marketing-cloud-engagement-foundations -> Anchor: "Marketing Cloud Engagement Foundations (MC-101) Study Guide"

/certifications/role/marketing -> /certifications/marketing-cloud-engagement-foundations -> Anchor: "Marketing Cloud Engagement Foundations (MC-101) Entry Exam"

/marketing-cloud-certification-path -> /certifications/marketing-cloud-engagement-foundations -> Anchor: "MC-101 Marketing Cloud Engagement Foundations"

Cannibalisation Risks: /marketing-cloud-engagement-foundations-study-guide and /marketing-cloud-engagement-foundations-exam-tips on /html-sitemap. Action: 301/308 redirect both to /certifications/marketing-cloud-engagement-foundations.

SERP Feature Q&A to Add:

Q: What is the passing score and question count for Marketing Cloud Engagement Foundations (MC-101)?

A: The Salesforce Marketing Cloud Engagement Foundations (MC-101) exam contains 40 scored multiple-choice questions (plus up to 5 unscored pilot questions) with a 70-minute time limit and a 65% passing score (26 of 40 correct). The exam costs $75 USD with free retakes.

#4. /certifications/mulesoft-integration-foundations (Live Page)

7-Cluster Viability: Can reach Top 10 now: C1–C7 (MuleSoft Integration Foundations, Mule-101, Mule-101 dumps, MuleSoft Associate certification).

Still Missing On-Page: A 3-layer API-Led Connectivity Diagram/Table (System APIs vs. Process APIs vs. Experience APIs) with update frequency, ownership, and backend decoupling rules.

Internal & Off-Page Links Needed:

/certifications/role/associate -> /certifications/mulesoft-integration-foundations -> Anchor: "MuleSoft Integration Foundations (Mule-101) Study Guide"

/mulesoft-developer-i-vs-integration-foundations -> /certifications/mulesoft-integration-foundations -> Anchor: "MuleSoft Integration Foundations (Mule-101) Practice Questions"

/certifications/mulesoft-developer-i -> /certifications/mulesoft-integration-foundations -> Anchor: "MuleSoft Integration Foundations (Mule-101)"

Cannibalisation Risks: /mulesoft-integration-foundations-study-guide and /mulesoft-integration-foundations-exam-tips on /html-sitemap. Action: 301/308 redirect both to /certifications/mulesoft-integration-foundations.

SERP Feature Q&A to Add:

Q: How many questions are on the MuleSoft Integration Foundations (Mule-101) exam?

A: The MuleSoft Integration Foundations (Mule-101) exam has 40 scored multiple-choice questions in 70 minutes and requires a 70% passing score (28 of 40 correct). Registration is $75 USD via Trailhead Academy and Pearson VUE with free retakes.

Track 2: Administrator (#5–#12)
#5. /certifications/administrator (Live Page)

7-Cluster Viability: Can reach Top 10 now: C1 (Platform Administrator), C2 (Salesforce Platform Administrator), C5 (Platform Administrator dumps, Plat-Admn-201 dumps), C7 (Plat-Admn-201 study guide, Plat-Admn-201 practice questions). Cannot yet reach Top 5 on: Ultra-competitive legacy head terms ADM-201, Salesforce Administrator certification, and ADM-201 dumps (DR 75+ competitors Focus on Force, Salesforce Ben, Trailhead dominate positions 1–5; requires off-page backlinks + eliminating internal cannibalization).

Still Missing On-Page: An embedded interactive Plat-Admn-201 Section Score Calculator widget right below the 8-domain weight table (allowing candidates to enter their 8 section percentages from a failed Pearson VUE score report to compute their exact overall score vs. 68%), plus jump-link anchor IDs (#weightage, #practice-questions, #study-plan, #dumps-vs-practice) for Google Sitelinks.

Internal & Off-Page Links Needed:

/adm-201-vs-app-builder -> /certifications/administrator -> Anchor: "Salesforce Platform Administrator (Plat-Admn-201 / ADM-201) Study Guide"

/how-to-study-for-salesforce-certification -> /certifications/administrator -> Anchor: "Salesforce Platform Administrator (ADM-201) Practice Questions"

Off-page binding constraint: Acquire 5–8 contextual backlinks from Trailblazer Community study threads, Dev.to/Medium posts, and GitHub ADM-201 repos directly to /certifications/administrator.

Cannibalisation Risks: SEVERE (4 competing internal URLs!):

/certifications/role/administrator links to three separate ADM-201 pages: /certifications/administrator, Salesforce Admin Certification 201 Guide, and Salesforce Certified Platform Administrator Practice Test (ADM-201).

/adm-201-exam-tips and /adm-201-study-guide are still linked from Footer (ADM-201 exam tips & cheat sheet), /adm-201-vs-app-builder, and /html-sitemap. Action: Replace all internal links to /adm-201-study-guide, /adm-201-exam-tips, /salesforce-admin-certification-201-guide, and /administrator-practice-test with direct links to /certifications/administrator (and 301/308 redirect the auxiliary slugs).

SERP Feature Q&A to Add:

Q: What is the passing score for Salesforce Platform Administrator (Plat-Admn-201 / ADM-201) in 2026?

A: The passing score for the Salesforce Platform Administrator (Plat-Admn-201 / ADM-201) exam is 68%, which requires at least 41 correct answers out of 60 scored questions within 105 minutes. Data and Analytics Management (17%) and Configuration, Object Manager, and Automation (15% each) make up 62% of the exam.

#6. /certifications/advanced-administrator (Live Page)

7-Cluster Viability: Can reach Top 10 now: C1–C7 for Platform Administrator II, Plat-Admn-301, Platform Administrator 2, Plat-Admn-301 dumps, Advanced Administrator dumps. Borderline (Pos 9–14): Bare "ADM-211" and "Salesforce Advanced Administrator" until /advanced-administrator-study-guide and /advanced-administrator-exam-tips are consolidated.

Still Missing On-Page: A concrete Delegated Administration vs. Custom Profiles vs. Permission Set Groups + Muting Permission Sets decision matrix and Territory Forecast vs. Collaborative Forecast Override comparison table.

Internal & Off-Page Links Needed:

/administrator-vs-advanced-administrator -> /certifications/advanced-administrator -> Anchor: "Salesforce Platform Administrator II (Plat-Admn-301 / ADM-211) Study Guide"

/certifications/administrator -> /certifications/advanced-administrator -> Anchor: "Platform Administrator II (Advanced Administrator / ADM-211) Certification"

Cannibalisation Risks: /advanced-administrator-study-guide and /advanced-administrator-exam-tips on /html-sitemap. Action: 301/308 redirect both to /certifications/advanced-administrator.

SERP Feature Q&A to Add:

Q: What is the difference between Plat-Admn-301 and ADM-211?

A: Plat-Admn-301 (Salesforce Certified Platform Administrator II) is the current Trailhead Academy exam code and title for the credential formerly called Salesforce Certified Advanced Administrator (ADM-211). The exam has 60 scored questions, a 105-minute limit, a 65% passing score, and requires Platform Administrator (Plat-Admn-201) as a prerequisite.

#7. /certifications/app-builder (Live Page)

7-Cluster Viability: Can reach Top 10 now: C1, C2, C5, C7 for Plat-Admn-202, Platform App Builder dumps, Plat-Admn-202 dumps. Cannot yet reach Top 5 on: DEV-402 and Platform App Builder study guide because /app-builder-study-guide and /app-builder-exam-tips are still linked in the sitewide Footer (App Builder study guide) and /html-sitemap!

Still Missing On-Page: A Lookup to Master-Detail Conversion Prerequisite Checklist (all existing child records must have a populated parent lookup value before converting) and Dynamic Forms vs. Page Layouts vs. Record Types support table (noting which standard objects support Dynamic Forms).

Internal & Off-Page Links Needed:

src/components/Footer.tsx (Popular Certifications) -> Change /app-builder-study-guide to /certifications/app-builder -> Anchor: "Platform App Builder (Plat-Admn-202 / DEV-402) study guide"

/adm-201-vs-app-builder -> /certifications/app-builder -> Anchor: "Salesforce Platform App Builder (Plat-Admn-202 / DEV-402) Study Guide"

/app-builder-vs-platform-developer-i -> /certifications/app-builder -> Anchor: "Platform App Builder (DEV-402) Practice Questions"

Cannibalisation Risks: /app-builder-study-guide, /app-builder-exam-tips, and /platform-app-builder-foundations-exam-tips on /html-sitemap, plus /certifications/role/developer listing App Builder alongside /certifications/role/administrator. Action: 301/308 redirect all three auxiliary slugs to /certifications/app-builder.

SERP Feature Q&A to Add:

Q: How many questions do you need to pass Platform App Builder (Plat-Admn-202 / DEV-402)?

A: You need at least 44 correct answers out of 60 scored questions (73% passing score) in 105 minutes to pass the Salesforce Platform App Builder (Plat-Admn-202 / DEV-402) exam. Business Logic and Process Automation (32%) and Data Modeling and Management (20%) account for 52% of the total score.

#8. /certifications/agentforce-specialist (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7), including Agentforce Specialist, AI-201, Agentforce Specialist dumps, AI-201 dumps, Agent Force Specialist, and AI Specialist certification.

Still Missing On-Page: A concrete Agent Script (Canvas View vs. Script View) & Deterministic Filter syntax example and a Prompt Template Types comparison table (Field Generation vs. Record Summary vs. Flex vs. Sales Email) showing required permission sets (Prompt Template Manager vs. Prompt Template User).

Internal & Off-Page Links Needed:

/agentforce-specialist-vs-ai-associate -> /certifications/agentforce-specialist -> Anchor: "Salesforce Agentforce Specialist (AI-201) Study Guide & Practice Questions"

/certifications/ai-associate -> /certifications/agentforce-specialist -> Anchor: "Agentforce Specialist (AI-201) Certification"

/certifications/data-360-consultant -> /certifications/agentforce-specialist -> Anchor: "Agentforce Specialist (AI-201) Grounding & RAG"

Cannibalisation Risks: /agentforce-specialist-study-guide and /agentforce-specialist-exam-tips on /html-sitemap (remember /agentforce-specialist-exam-tips previously had a 58/100 Lighthouse score and split impressions). Action: 301/308 redirect both /agentforce-specialist-study-guide and /agentforce-specialist-exam-tips to /certifications/agentforce-specialist.

SERP Feature Q&A to Add:

Q: What is the passing score for the Salesforce Agentforce Specialist (AI-201) exam?

A: The Salesforce Agentforce Specialist (AI-201) exam requires a 72% passing score (44 of 60 scored questions) within 105 minutes. AI Agents (35%), Prompt Engineering (20%), and Data 360 Fundamentals (20%) represent 75% of the exam blueprint.

#9. /certifications/business-analyst (Live Page)

7-Cluster Viability: Can reach Top 10 now: C1–C7 (Salesforce Business Analyst, BA-201, BA-201 dumps, Salesforce Business Analyst dumps, Business Analyst certification).

Still Missing On-Page: A Universal Process Notation (UPN) vs. BPMN Capability Map Table and a User Story Acceptance Criteria (Given / When / Then) vs. INVEST Checklist block.

Internal & Off-Page Links Needed:

/business-analyst-vs-strategy-designer -> /certifications/business-analyst -> Anchor: "Salesforce Business Analyst (BA-201) Study Guide"

/certifications/role/consultant -> /certifications/business-analyst -> Anchor: "Salesforce Business Analyst (BA-201) Certification"

Cannibalisation Risks: /business-analyst-exam-tips is still live on /html-sitemap (while /business-analyst-study-guide was redirected), and business-analyst is listed on BOTH /certifications/role/administrator and /certifications/role/consultant. Action: 301/308 redirect /business-analyst-exam-tips to /certifications/business-analyst.

SERP Feature Q&A to Add:

Q: What is the passing score and exam code for Salesforce Business Analyst?

A: The Salesforce Business Analyst certification exam (code BA-201) has 60 scored questions in 105 minutes and requires a 72% passing score (44 of 60 correct). User Stories (23%), Collaboration with Stakeholders (18%), and Requirements (18%) account for 59% of the exam.

#10. /certifications/cpq-administrator (Live Page)

7-Cluster Viability: Can reach Top 10 now: C1–C7 (CPQ Administrator, Sales-Admn-202, CPQ-211, CPQ Specialist dumps, CPQ-211 dumps).

Still Missing On-Page: The Salesforce CPQ Pricing Waterfall Order of Execution Table (List Price -> System Discount -> Regular Price -> Additional Discount -> Customer Price -> Partner Discount -> Partner Price -> Distributor Discount -> Net Price) and Price Rule Evaluation Event (On Initialization, Before Calculate, On Calculate, After Calculate) table.

Internal & Off-Page Links Needed:

/cpq-admin-vs-revenue-cloud-consultant -> /certifications/cpq-administrator -> Anchor: "CPQ Administrator (Sales-Admn-202 / CPQ-211) Historical Guide"

/cpq-admin-vs-cpq-billing-ap -> /certifications/cpq-administrator -> Anchor: "Salesforce CPQ Administrator (CPQ-211) Study Guide"

Cannibalisation Risks: /cpq-administrator-study-guide and /cpq-administrator-exam-tips on /html-sitemap. Action: 301/308 redirect both to /certifications/cpq-administrator.

SERP Feature Q&A to Add:

Q: Is the Salesforce CPQ Administrator (CPQ-211 / Sales-Admn-202) certification retiring?

A: Yes. Registration for the Salesforce CPQ Administrator (Sales-Admn-202 / CPQ-211) exam closed on July 24, 2026, final testing ended August 31, 2026, and the credential officially retires on February 1, 2027. Active candidates should pursue the Revenue Management Consultant (Rev-Con-201) certification.

#11. /certifications/marketing-cloud-engagement-admin (Live Page)

7-Cluster Viability: Can reach Top 10 now: C1–C7 (Marketing Cloud Engagement Administrator, MCE-Admn-201, Marketing Cloud Administrator dumps, MCE-Admn-201 dumps).

Still Missing On-Page: A Marketing Cloud Connect Multi-Org vs. Single-Org Business Unit Mapping Table and Send Log vs. Data Views (_Sent, _Open, _Click, _Bounce) retention comparison.

Internal & Off-Page Links Needed:

/marketing-cloud-admin-vs-developer -> /certifications/marketing-cloud-engagement-admin -> Anchor: "Marketing Cloud Engagement Administrator (MCE-Admn-201) Study Guide"

/certifications/marketing-cloud-consultant -> /certifications/marketing-cloud-engagement-admin -> Anchor: "Marketing Cloud Engagement Administrator (MCE-Admn-201) Prerequisite"

Cannibalisation Risks: /marketing-cloud-engagement-admin-study-guide and /marketing-cloud-engagement-admin-exam-tips on /html-sitemap, plus dual listing on Admin and Marketing hubs. Action: 301/308 redirect both auxiliary slugs to /certifications/marketing-cloud-engagement-admin.

SERP Feature Q&A to Add:

Q: What is the highest-weighted section on the Marketing Cloud Engagement Administrator (MCE-Admn-201) exam?

A: Setup is the largest section at 38% of the Marketing Cloud Engagement Administrator (MCE-Admn-201) exam, followed by Subscriber Data Management (18%) and Channel Management (16%). You need 67% (41 of 60 questions) in 105 minutes to pass.

#12. /certifications/slack-administrator (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (Slack Administrator, Slack-Admn-201, Slack Administrator dumps, Slack-Admn-201 dumps).

Still Missing On-Page: A Slack Plan Feature Matrix (Pro vs. Business+ vs. Enterprise Grid) covering SCIM provisioning, SAML SSO, eDiscovery, DLP, Enterprise Key Management (EKM), and Org-Wide vs. Multi-Workspace Channels.

Internal & Off-Page Links Needed:

/certifications/slack-consultant -> /certifications/slack-administrator -> Anchor: "Slack Administrator (Slack-Admn-201) Study Guide"

/certifications/slack-developer -> /certifications/slack-administrator -> Anchor: "Slack Administrator (Slack-Admn-201) Certification"

Cannibalisation Risks: /slack-administrator-study-guide and /slack-administrator-exam-tips on /html-sitemap. Action: 301/308 redirect both to /certifications/slack-administrator.

SERP Feature Q&A to Add:

Q: What is the passing score for the Salesforce Slack Administrator (Slack-Admn-201) exam?

A: The Slack Administrator (Slack-Admn-201) exam has 60 scored questions, a 105-minute time limit, and a 65% passing score (39 of 60 correct). Governance, Security and Compliance (22%) and Workspace and Enterprise Grid Administration (20%) carry the highest weight.

Track 3: Developer (#13–#23)
#13. /certifications/developer-1 (Live Page)

7-Cluster Viability: Can reach Top 10 now: C1 (Platform Developer I / Platform Developer 1), C5 (Platform Developer 1 dumps, Plat-Dev-201 dumps), C7 (Plat-Dev-201). Blocked from Top 5 on: PD1 study guide, PD1 practice test, and Salesforce Certified Platform Developer I because /pd1-study-guide and /pd1-exam-tips are still live (200 OK) and linked in the sitewide Footer (PD1 study guide) and /certifications/role/developer!

Still Missing On-Page: Remove the legacy stitched 5-domain table (Process Automation 30% / Testing 25% / UI 23% / Integration 15% / Fundamentals 7%) that still sits in the lower half of /certifications/developer-1 (contradicting the official 4-domain 28% / 27% / 25% / 20% table at the top of the page!), and add an Agentforce for Developers (Dev Assistant, inline code completion, Apex test generation) code block.

Internal & Off-Page Links Needed:

src/components/Footer.tsx (Popular Certifications & Quick Links) -> Change /pd1-study-guide to /certifications/developer-1 -> Anchor: "Platform Developer I (Plat-Dev-201 / PD1) study guide"

/certifications/role/developer (High-Intent Developer Resources) -> Change /pd1-study-guide to /certifications/developer-1

/pd1-vs-pd2 -> /certifications/developer-1 -> Anchor: "Salesforce Platform Developer I (Plat-Dev-201 / PD1) Study Guide"

/app-builder-vs-platform-developer-i -> /certifications/developer-1 -> Anchor: "Platform Developer I (PD1) Practice Questions"

Cannibalisation Risks: CRITICAL: /pd1-study-guide (live 200 OK with wrong 110 min duration and wrong 5-section weights) and /pd1-exam-tips. Action: 301/308 redirect both /pd1-study-guide and /pd1-exam-tips to /certifications/developer-1.

SERP Feature Q&A to Add:

Q: How many questions do you need to pass Platform Developer I (Plat-Dev-201 / PD1)?

A: You need at least 41 correct answers out of 60 scored questions (68% passing score) in 105 minutes to pass the Salesforce Platform Developer I (Plat-Dev-201 / PD1) exam. Process Automation and Logic (28%) and Testing, Debugging, and Deployment (27%) make up 55% of the exam.

#14. /certifications/developer-2 (Live Page)

7-Cluster Viability: Can reach Top 10 now: C1–C7 (Platform Developer II, Platform Developer 2, Plat-Dev-301, PD2 dumps, Plat-Dev-301 dumps).

Still Missing On-Page: Concrete Apex code examples for Database.Stateful vs. Platform.OrgCache, Continuation class for long-running callouts in LWC/Visualforce, and StubProvider (System.createStub) vs. HttpCalloutMock.

Internal & Off-Page Links Needed:

/pd1-vs-pd2 -> /certifications/developer-2 -> Anchor: "Salesforce Platform Developer II (Plat-Dev-301 / PD2) Study Guide"

/certifications/developer-1 -> /certifications/developer-2 -> Anchor: "Platform Developer II (Plat-Dev-301 / PD2) Certification"

Cannibalisation Risks: /platform-developer-ii-study-guide and /pd2-exam-tips on /html-sitemap. Action: 301/308 redirect both to /certifications/developer-2.

SERP Feature Q&A to Add:

Q: Did the Salesforce Platform Developer II (PD2) exam fee and Superbadge requirement change?

A: Yes. The Salesforce Platform Developer II (Plat-Dev-301 / PD2) exam now costs $200 USD (with a $100 USD retake fee) and no longer requires Trailhead Superbadges to earn the credential—only passing the Platform Developer I (Plat-Dev-201) prerequisite and the 60-question, 120-minute proctored exam (70% passing score).

#15. /certifications/javascript-developer-i (Live Page)

7-Cluster Viability: Can reach Top 10 now: C1–C7 (JavaScript Developer I, JavaScript Developer 1, JS-Dev-101, CRT-600, JS-Dev-101 dumps, CRT-600 dumps).

Still Missing On-Page: An Event Loop Execution Order Code Trace (Call Stack -> process.nextTick -> Microtask Queue / Promises -> Macrotask Queue / setTimeout) and Object.freeze() vs. Object.seal() vs. Proxy comparison table.

Internal & Off-Page Links Needed:

/javascript-developer-i-vs-platform-developer-i -> /certifications/javascript-developer-i -> Anchor: "Salesforce JavaScript Developer I (JS-Dev-101 / CRT-600) Study Guide"

/certifications/developer-1 -> /certifications/javascript-developer-i -> Anchor: "JavaScript Developer I (JS-Dev-101) Certification"

Cannibalisation Risks: /javascript-developer-i-study-guide and /javascript-developer-i-exam-tips on /html-sitemap. Action: 301/308 redirect both to /certifications/javascript-developer-i.

SERP Feature Q&A to Add:

Q: Does the Salesforce JavaScript Developer I (JS-Dev-101) certification still require the LWC Superbadge?

A: Yes. Earning the Salesforce JavaScript Developer I certification requires passing both the 60-question JS-Dev-101 proctored multiple-choice exam (65% passing score, 105 minutes, $200 USD) and completing the Lightning Web Components Specialist Superbadge on Trailhead in either order.

#16. /certifications/b2c-commerce-developer (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (B2C Commerce Developer, Comm-Dev-101, CRT-500, B2C Commerce Developer dumps).

Still Missing On-Page: A SFRA Controller Middleware Chain (server.get, server.append, server.prepend, server.replace, next()) code snippet and OCAPI vs. SCAPI (Shopper APIs vs. Admin APIs) comparison table.

Internal & Off-Page Links Needed:

/certifications/b2c-commerce-architect -> /certifications/b2c-commerce-developer -> Anchor: "B2C Commerce Developer (Comm-Dev-101 / CRT-500) Prerequisite"

/certifications/b2b-commerce-developer-ap -> /certifications/b2c-commerce-developer -> Anchor: "Salesforce B2C Commerce Developer (Comm-Dev-101) Study Guide"

Cannibalisation Risks: /b2c-commerce-developer-exam-tips on /html-sitemap (/b2c-commerce-developer-study-guide is already redirected). Action: 301/308 redirect /b2c-commerce-developer-exam-tips to /certifications/b2c-commerce-developer.

SERP Feature Q&A to Add:

Q: What is tested on the Salesforce B2C Commerce Developer (Comm-Dev-101 / CRT-500) exam?

A: Application Development accounts for 53% of the B2C Commerce Developer (Comm-Dev-101 / CRT-500) exam, followed by Data Modeling and Management (24%), Work With a B2C Site (12%), and B2C Commerce Setup (11%). You need 65% (39 of 60 questions) in 105 minutes.

#17. /certifications/industries-cpq-developer (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (Industries CPQ Developer, Ind-Dev-201, Vlocity CPQ Developer, Ind-Dev-201 dumps).

Still Missing On-Page: A Digital Commerce (DC) Cached APIs vs. Cart-Based APIs (createCart, postCartsItems, getCartsItems) and Context Rules (Qualification vs. Penalty vs. Evaluation) reference table.

Internal & Off-Page Links Needed:

/certifications/communications-cloud-ap -> /certifications/industries-cpq-developer -> Anchor: "Industries CPQ Developer (Ind-Dev-201) Reference Guide"

/certifications/omnistudio-developer -> /certifications/industries-cpq-developer -> Anchor: "Industries CPQ Developer (Ind-Dev-201)"

Cannibalisation Risks: /industries-cpq-developer-exam-tips on /html-sitemap. Action: 301/308 redirect to /certifications/industries-cpq-developer.

SERP Feature Q&A to Add:

Q: When does the Salesforce Industries CPQ Developer (Ind-Dev-201) certification retire?

A: Registration for Industries CPQ Developer (Ind-Dev-201) closed on July 24, 2026, final exam testing ended August 31, 2026, and the credential officially retires on February 1, 2027. Developers should transition to OmniStudio Developer (Plat-Dev-210) and Revenue Management Consultant (Rev-Con-201).

#18. /certifications/marketing-cloud-engagement-developer (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (Marketing Cloud Engagement Developer, MCE-Dev-201, Marketing Cloud Developer dumps).

Still Missing On-Page: An AMPscript vs. Server-Side JavaScript (SSJS) vs. Guide Template Language (GTL) comparison table (showing when SSJS Platform.Function / Core library is required for try/catch error handling and JSON parsing vs. AMPscript LookupOrderedRows and HTTPGet).

Internal & Off-Page Links Needed:

/marketing-cloud-admin-vs-developer -> /certifications/marketing-cloud-engagement-developer -> Anchor: "Marketing Cloud Engagement Developer (MCE-Dev-201) Study Guide"

/certifications/email-specialist -> /certifications/marketing-cloud-engagement-developer -> Anchor: "Marketing Cloud Engagement Developer (MCE-Dev-201) Certification"

Cannibalisation Risks: /marketing-cloud-engagement-developer-study-guide and /marketing-cloud-engagement-developer-exam-tips on /html-sitemap. Action: 301/308 redirect both to /certifications/marketing-cloud-engagement-developer.

SERP Feature Q&A to Add:

Q: What prerequisite is required for Marketing Cloud Engagement Developer (MCE-Dev-201)?

A: Candidates must hold the Salesforce Certified Marketing Cloud Engagement Specialist (MC-202 / CRT-550) credential before sitting for the Marketing Cloud Engagement Developer (MCE-Dev-201) exam. The exam has 60 questions, 105 minutes, and a 63% passing score.

#19. /certifications/mulesoft-developer-i (Live Page)

7-Cluster Viability: Can reach Top 10 now: C1–C7 (MuleSoft Developer I, MuleSoft Developer 1, Mule-Dev-201, Mule-Dev-201 dumps).

Still Missing On-Page: A Mule 4 Event Structure & Scope Persistence Table showing what happens to attributes, payload, and variables across Child Flow (Flow Reference), Async Scope, HTTP Request (outbound), For Each, Scatter-Gather, and Batch Job (Record vs. On Complete).

Internal & Off-Page Links Needed:

/mulesoft-developer-i-vs-ii -> /certifications/mulesoft-developer-i -> Anchor: "MuleSoft Developer I (Mule-Dev-201) Study Guide"

/mulesoft-developer-i-vs-integration-foundations -> /certifications/mulesoft-developer-i -> Anchor: "MuleSoft Developer I (Mule-Dev-201) Practice Questions"

Cannibalisation Risks: /mulesoft-developer-i-study-guide and /mulesoft-developer-i-exam-tips on /html-sitemap. Action: 301/308 redirect both to /certifications/mulesoft-developer-i.

SERP Feature Q&A to Add:

Q: How long is the MuleSoft Developer I (Mule-Dev-201) exam and what is the passing score?

A: The Salesforce MuleSoft Developer I (Mule-Dev-201) exam consists of 60 scored multiple-choice questions with a 120-minute time limit and a 70% passing score (42 of 60 correct). Registration costs $200 USD with a $100 USD retake fee.

#20. /certifications/mulesoft-developer-ii (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (MuleSoft Developer II, MuleSoft Developer 2, Mule-Dev-301, Mule-Dev-301 dumps).

Still Missing On-Page: A Mule Maven Plugin (settings.xml, pom.xml, mule-artifact.json secureProperties) & Custom Policy / XML SDK code block and VM Queues vs. Anypoint MQ vs. Object Store v2 transactional comparison table.

Internal & Off-Page Links Needed:

/mulesoft-developer-i-vs-ii -> /certifications/mulesoft-developer-ii -> Anchor: "MuleSoft Developer II (Mule-Dev-301) Study Guide"

/certifications/mulesoft-developer-i -> /certifications/mulesoft-developer-ii -> Anchor: "MuleSoft Developer II (Mule-Dev-301) Certification"

Cannibalisation Risks: /mulesoft-developer-ii-study-guide and /mulesoft-developer-ii-exam-tips on /html-sitemap. Action: 301/308 redirect both to /certifications/mulesoft-developer-ii.

SERP Feature Q&A to Add:

Q: What are the top-weighted domains on the MuleSoft Developer II (Mule-Dev-301) exam?

A: Exposing Production-Ready APIs (27%) and Implementing Maintainable and Modular Mule Applications (25%) make up 52% of the MuleSoft Developer II (Mule-Dev-301) exam, followed by Designing Resilient Integrations (20%), Securing Data and APIs (15%), and Monitoring and Logging (13%).

#21. /certifications/mulesoft-hyperautomation-developer (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (MuleSoft Hyperautomation Developer, Mule-Dev-202, Mule-Dev-202 dumps).

Still Missing On-Page: A MuleSoft RPA Lifecycle (Evaluation -> Design -> Build -> Test -> Production across RPA Manager, RPA Builder, RPA Recorder, and RPA Bot) table.

Internal & Off-Page Links Needed:

/certifications/mulesoft-developer-i -> /certifications/mulesoft-hyperautomation-developer -> Anchor: "MuleSoft Hyperautomation Developer (Mule-Dev-202) Archive"

/certifications/mulesoft-catalyst-consultant -> /certifications/mulesoft-hyperautomation-developer -> Anchor: "MuleSoft Hyperautomation Developer (Mule-Dev-202)"

Cannibalisation Risks: /mulesoft-hyperautomation-developer-exam-tips on /html-sitemap. Action: 301/308 redirect to /certifications/mulesoft-hyperautomation-developer.

SERP Feature Q&A to Add:

Q: Is the MuleSoft Hyperautomation Developer (Mule-Dev-202) certification retiring in 2027?

A: Yes. Registration for MuleSoft Hyperautomation Developer (Mule-Dev-202) closed on July 24, 2026, final testing ended August 31, 2026, and the credential retires on February 1, 2027. Active candidates should pursue MuleSoft Developer I (Mule-Dev-201) and Agentforce Specialist (AI-201).

#22. /certifications/omnistudio-developer (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (OmniStudio Developer, Plat-Dev-210, OmniStudio Developer dumps, Plat-Dev-210 dumps).

Still Missing On-Page: A 4-Type Omniscript Data Mapper Comparison Table (Data Mapper Extract vs. Data Mapper Turbo Extract vs. Data Mapper Transform vs. Data Mapper Load) showing JSON/XML support, formula support, and single-object vs. multi-object performance.

Internal & Off-Page Links Needed:

/omnistudio-developer-vs-consultant -> /certifications/omnistudio-developer -> Anchor: "Salesforce OmniStudio Developer (Plat-Dev-210) Study Guide"

/certifications/omnistudio-consultant -> /certifications/omnistudio-developer -> Anchor: "OmniStudio Developer (Plat-Dev-210) Certification"

Cannibalisation Risks: /omnistudio-developer-study-guide and /omnistudio-developer-exam-tips on /html-sitemap. Action: 301/308 redirect both to /certifications/omnistudio-developer.

SERP Feature Q&A to Add:

Q: What is the passing score for Salesforce OmniStudio Developer (Plat-Dev-210)?

A: The Salesforce OmniStudio Developer (Plat-Dev-210) exam requires a 72% passing score (44 of 60 scored questions) within 105 minutes. Omniscripts (20%), Data Mappers (18%), and Integration Procedures (17%) make up 55% of the exam.

#23. /certifications/slack-developer (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (Slack Developer, Slack-Dev-201, Slack Developer dumps, Slack-Dev-201 dumps).

Still Missing On-Page: A Socket Mode vs. HTTP Events API Request URL (3-second 200 OK acknowledgement timeout rule) and Bot Token (xoxb-) vs. User Token (xoxp-) vs. App-Level Token (xapp-) reference table.

Internal & Off-Page Links Needed:

/certifications/slack-administrator -> /certifications/slack-developer -> Anchor: "Slack Developer (Slack-Dev-201) Study Guide"

/certifications/slack-consultant -> /certifications/slack-developer -> Anchor: "Slack Developer (Slack-Dev-201) Certification"

Cannibalisation Risks: /slack-developer-exam-tips on /html-sitemap. Action: 301/308 redirect to /certifications/slack-developer.

SERP Feature Q&A to Add:

Q: How long is the Salesforce Slack Developer (Slack-Dev-201) exam and what is the passing score?

A: The Slack Developer (Slack-Dev-201) exam has 60 scored multiple-choice questions, a 90-minute time limit, and a 67% passing score (41 of 60 correct). Slack Platform & App Architecture (20%) and APIs, Webhooks, and Events (19%) carry 39% of the total weight.

Track 4: Consultant (#24–#39)
#24. /certifications/crm-analytics-einstein-discovery-consultant (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (CRM Analytics and Einstein Discovery Consultant, CRM Analytics Consultant dumps, Einstein Discovery Consultant dumps).

Still Missing On-Page: A Data Sync (Replication) vs. Recipes (Data Prep 3.0) vs. Dataflows comparison table and Row-Level Security (Security Predicates vs. Sharing Inheritance 3,000-descriptor limit) reference table.

Internal & Off-Page Links Needed:

/data-cloud-vs-crm-analytics -> /certifications/crm-analytics-einstein-discovery-consultant -> Anchor: "CRM Analytics and Einstein Discovery Consultant Study Guide"

/certifications/data-360-consultant -> /certifications/crm-analytics-einstein-discovery-consultant -> Anchor: "CRM Analytics and Einstein Discovery Consultant Certification"

Cannibalisation Risks: /crm-analytics-study-guide, /crm-analytics-exam-tips, and /tableau-crm-einstein-analytics-consultant-exam-tips on /html-sitemap. Action: 301/308 redirect all three to /certifications/crm-analytics-einstein-discovery-consultant.

SERP Feature Q&A to Add:

Q: What is the passing score and time limit for CRM Analytics and Einstein Discovery Consultant?

A: The Salesforce CRM Analytics and Einstein Discovery Consultant exam consists of 60 scored questions in 90 minutes and requires a 65% passing score (39 of 60 correct). Data Layer (23%), Dashboard Design (19%), and Dashboard Implementation (17%) make up 59% of the exam.

#25. /certifications/data-360-consultant (Live Page)

7-Cluster Viability: Can reach Top 10 now: C1, C2, C5, C7 for Data 360 Consultant, Data-Con-101, Data 360 Consultant dumps, Data-Con-101 dumps. Blocked on C6 (Data Cloud Consultant study guide / Data Cloud Consultant practice questions) because /data-cloud-consultant-study-guide and /data-cloud-consultant-exam-tips are still linked in the Footer and /html-sitemap, AND the lower stitched section of /certifications/data-360-consultant still has an old 5-section table (Data Ingestion 28% / Identity Resolution 25% / Configure 20% / Act on Data 17% / Administer 10%) and FAQ #4 still says "Platform Administrator certification is required" (official prerequisite is None)!

Still Missing On-Page: Remove the duplicate 5-domain legacy table (28%/25%/20%/17%/10%) and fix FAQ #4 (Platform Administrator certification is required -> None required; Salesforce CRM experience recommended), and add a Zero-Copy Data Federation (Snowflake, BigQuery, Redshift, Databricks) vs. Batch/Streaming Ingestion table.

Internal & Off-Page Links Needed:

src/components/Footer.tsx -> Change Data Cloud Consultant practice questions and Salesforce Data Cloud Consultant Study Guide to point directly to /certifications/data-360-consultant with anchor "Salesforce Data 360 (Data Cloud) Consultant (Data-Con-101) Study Guide"

/data-cloud-vs-crm-analytics & /data-cloud-vs-marketing-cloud -> /certifications/data-360-consultant -> Anchor: "Salesforce Data 360 Consultant (Data-Con-101) Study Guide"

Cannibalisation Risks: /data-cloud-consultant-study-guide and /data-cloud-consultant-exam-tips on /html-sitemap. Action: 301/308 redirect both to /certifications/data-360-consultant.

SERP Feature Q&A to Add:

Q: Is Data 360 Consultant (Data-Con-101) the new name for Salesforce Data Cloud Consultant?

A: Yes. Salesforce renamed the Data Cloud Consultant credential to Salesforce Certified Data 360 Consultant (exam code Data-Con-101). The exam has 60 scored questions, a 105-minute time limit, a 70% passing score, and no required prerequisite certifications.

#26. /certifications/education-cloud-consultant (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (Education Cloud Consultant, Education Cloud Consultant dumps, Education Cloud Consultant retirement).

Still Missing On-Page: An EDA (Education Data Architecture) vs. New Education Cloud (Industries Foundation / OmniStudio / Action Plans / Care Plans) architectural comparison table.

Internal & Off-Page Links Needed:

/education-cloud-vs-nonprofit-cloud-consultant -> /certifications/education-cloud-consultant -> Anchor: "Education Cloud Consultant Study Guide & Retirement Archive"

Cannibalisation Risks: /education-cloud-consultant-study-guide and /education-cloud-consultant-exam-tips on /html-sitemap. Action: 301/308 redirect both to /certifications/education-cloud-consultant.

SERP Feature Q&A to Add:

Q: When does the Salesforce Education Cloud Consultant certification retire?

A: Registration for the Salesforce Education Cloud Consultant exam closed on July 24, 2026, final testing ended August 31, 2026, and the credential officially retires on February 1, 2027.

#27. /certifications/experience-cloud (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (Experience Cloud Consultant, CRT-271, Experience Cloud Consultant dumps, CRT-271 dumps).

Still Missing On-Page: A 4-License Experience Cloud Comparison Table (Customer Community vs. Customer Community Plus vs. Partner Community vs. Channel Account) showing Roles, Sharing Sets, Super User Access, Reports/Dashboards, and Opportunity access.

Internal & Off-Page Links Needed:

/sales-cloud-vs-experience-cloud-consultant -> /certifications/experience-cloud -> Anchor: "Experience Cloud Consultant (CRT-271) Study Guide"

/certifications/role/consultant -> /certifications/experience-cloud -> Anchor: "Experience Cloud Consultant (CRT-271) Practice Questions"

Cannibalisation Risks: /experience-cloud-consultant-study-guide and /experience-cloud-consultant-exam-tips on /html-sitemap. Action: 301/308 redirect both to /certifications/experience-cloud.

SERP Feature Q&A to Add:

Q: Which Experience Cloud licenses support Roles and standard Sharing Rules?

A: Customer Community Plus and Partner Community licenses create portal Roles and support standard Salesforce Sharing Rules, manual sharing, and Super User access. Standard high-volume Customer Community licenses do not have Roles and must use Sharing Sets or Share Groups for record access.

#28. /certifications/field-service (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (Agentforce Field Service and Operations Consultant, Field Service Consultant, FS-Con-101, Field Service Consultant dumps, FS-Con-101 dumps).

Still Missing On-Page: A Work Rules vs. Service Objectives (Scheduling Policy) comparison table (e.g., Match Skills, Match Territory, Working Territories, Maximum Travel from Home as hard pass/fail Work Rules vs. Minimize Travel, ASAP, Minimize Overtime, Preferred Resource, Resource Priority as weighted Service Objectives).

Internal & Off-Page Links Needed:

/field-service-vs-service-cloud-consultant -> /certifications/field-service -> Anchor: "Agentforce Field Service and Operations Consultant (FS-Con-101) Study Guide"

/certifications/advanced-field-service-ap -> /certifications/field-service -> Anchor: "Agentforce Field Service and Operations Consultant (FS-Con-101)"

Cannibalisation Risks: /field-service-consultant-study-guide and /field-service-consultant-exam-tips on /html-sitemap. Action: 301/308 redirect both to /certifications/field-service.

SERP Feature Q&A to Add:

Q: What prerequisites are required for Agentforce Field Service and Operations Consultant (FS-Con-101)?

A: Candidates must hold both the Salesforce Platform Administrator (Plat-Admn-201) and Agentforce Service Consultant (Service-Con-201) certifications before taking the Agentforce Field Service and Operations Consultant (FS-Con-101) exam (60 questions, 105 minutes, 63% passing score).

#29. /certifications/pardot-consultant (Live Page)

7-Cluster Viability: Can reach Top 10 now: C1–C7 (Marketing Cloud Account Engagement Consultant, Pardot Consultant, CRT-302, CRT-302 dumps, Pardot Consultant dumps).

Still Missing On-Page: A Pardot / Account Engagement Consultant (CRT-302, Retiring Feb 2027) to Marketing Cloud Next Consultant (MC-Con-201) Migration Table.

Internal & Off-Page Links Needed:

/pardot-specialist-vs-pardot-consultant & /pardot-consultant-vs-marketing-cloud-consultant -> /certifications/pardot-consultant -> Anchor: "Marketing Cloud Account Engagement (Pardot) Consultant (CRT-302) Guide"

Cannibalisation Risks: /pardot-consultant-study-guide, /pardot-consultant-exam-tips, and /pardot-certification-guide on /html-sitemap, plus dual listing on Consultant and Marketing hubs. Action: 301/308 redirect /pardot-consultant-study-guide and /pardot-consultant-exam-tips to /certifications/pardot-consultant.

SERP Feature Q&A to Add:

Q: Is the Salesforce Marketing Cloud Account Engagement (Pardot) Consultant (CRT-302) exam retiring?

A: Yes. Registration for Marketing Cloud Account Engagement Consultant (CRT-302) closed on July 24, 2026, final testing ended August 31, 2026, and the credential retires on February 1, 2027. Active candidates should take Marketing Cloud Account Engagement Specialist (MC-201) or Marketing Cloud Next Consultant (MC-Con-201).

#30. /certifications/marketing-cloud-consultant (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (Marketing Cloud Engagement Consultant, MCE-Con-201, Marketing Cloud Consultant dumps, MCE-Con-201 dumps).

Still Missing On-Page: A Contact Builder (Contact Key vs. Subscriber Key, Attribute Groups, Populations) & Journey Builder Entry Source (Salesforce Data Event vs. Data Extension vs. API Event) decision matrix.

Internal & Off-Page Links Needed:

/pardot-consultant-vs-marketing-cloud-consultant -> /certifications/marketing-cloud-consultant -> Anchor: "Marketing Cloud Engagement Consultant (MCE-Con-201) Study Guide"

/certifications/marketing-cloud-engagement-admin -> /certifications/marketing-cloud-consultant -> Anchor: "Marketing Cloud Engagement Consultant (MCE-Con-201) Certification"

Cannibalisation Risks: /marketing-cloud-consultant-study-guide and /marketing-cloud-consultant-exam-tips on /html-sitemap, plus dual listing on Consultant and Marketing hubs. Action: 301/308 redirect both auxiliary slugs to /certifications/marketing-cloud-consultant.

SERP Feature Q&A to Add:

Q: What prerequisite is required for Marketing Cloud Engagement Consultant (MCE-Con-201)?

A: Candidates must hold the Salesforce Certified Marketing Cloud Engagement Administrator (MCE-Admn-201) certification before sitting for the Marketing Cloud Engagement Consultant (MCE-Con-201) exam (60 questions, 105 minutes, 67% passing score).

#31. /certifications/agentforce-life-sciences-consultant (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (Agentforce Life Sciences Consultant, Als-Con-201, Life Sciences Cloud Consultant, Als-Con-201 dumps).

Still Missing On-Page: Add /certifications/agentforce-life-sciences-consultant to the card list on /certifications/role/consultant (currently missing from the 15-cert list on the Consultant Hub!) and add a HCP Account Management, Territory Alignment, Sample Management (21 CFR Part 11), and Patient Services Program (PSP) table.

Internal & Off-Page Links Needed:

/certifications/role/consultant -> /certifications/agentforce-life-sciences-consultant -> Anchor: "Salesforce Certified Agentforce Life Sciences Consultant (Als-Con-201)"

/certifications/health-cloud-ap -> /certifications/agentforce-life-sciences-consultant -> Anchor: "Agentforce Life Sciences Consultant (Als-Con-201) Study Guide"

Cannibalisation Risks: None (clean new slug, just needs Consultant Hub link).

SERP Feature Q&A to Add:

Q: What are the exam weights and passing score for Agentforce Life Sciences Consultant (Als-Con-201)?

A: The Agentforce Life Sciences Consultant (Als-Con-201) exam has 60 scored questions, a 105-minute limit, and a 62% passing score. It covers Life Sciences Cloud Setup & Data Model (36%), Commercial Operations & HCP Engagement (28%), Clinical & Patient Services (21%), and Agentforce for Life Sciences (15%).

#32. /certifications/nonprofit-cloud (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (Agentforce Nonprofit Consultant, Nonprofit Cloud Consultant, NP-Con-102, NP-Con-102 dumps).

Still Missing On-Page: A New Nonprofit Cloud (NP-Con-102: Person Accounts, Party Role Relationships, Gift Commitments, Gift Transactions, Actionable Relationship Center) vs. Legacy NPSP (NP-Con-101: Household Accounts, Affiliations, Opportunities) object-mapping table.

Internal & Off-Page Links Needed:

/education-cloud-vs-nonprofit-cloud-consultant -> /certifications/nonprofit-cloud -> Anchor: "Agentforce Nonprofit (Nonprofit Cloud) Consultant (NP-Con-102) Study Guide"

/certifications/nonprofit-success-pack-consultant -> /certifications/nonprofit-cloud -> Anchor: "Active Agentforce Nonprofit Consultant (NP-Con-102) Replacement"

Cannibalisation Risks: /nonprofit-cloud-consultant-exam-tips on /html-sitemap (/nonprofit-cloud-consultant-study-guide is redirected). Action: 301/308 redirect /nonprofit-cloud-consultant-exam-tips to /certifications/nonprofit-cloud.

SERP Feature Q&A to Add:

Q: What is the difference between NP-Con-102 (Agentforce Nonprofit Consultant) and NP-Con-101 (NPSP Consultant)?

A: NP-Con-102 (Agentforce Nonprofit Consultant) tests the modern Nonprofit Cloud built on the Salesforce Industries platform (Person Accounts, Gift Commitments, Program & Case Management, and Grantmaking). NP-Con-101 tested the legacy managed-package Nonprofit Success Pack (NPSP) and retires on February 1, 2027.

#33. /certifications/nonprofit-success-pack-consultant (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (Nonprofit Success Pack Consultant, NPSP Consultant, NP-Con-101, NPSP Consultant dumps).

Still Missing On-Page: A Customizable Rollups (Filter Groups vs. Rollup Operations) & TDTM (Trigger_Handler__c) Execution Table.

Internal & Off-Page Links Needed:

/certifications/nonprofit-cloud -> /certifications/nonprofit-success-pack-consultant -> Anchor: "Nonprofit Success Pack (NPSP) Consultant (NP-Con-101) Historical Guide"

Cannibalisation Risks: /nonprofit-success-pack-consultant-exam-tips on /html-sitemap. Action: 301/308 redirect to /certifications/nonprofit-success-pack-consultant.

SERP Feature Q&A to Add:

Q: When does the Salesforce Nonprofit Success Pack (NPSP) Consultant (NP-Con-101) certification retire?

A: Registration for the Nonprofit Success Pack (NPSP) Consultant (NP-Con-101) exam closed on July 24, 2026, final testing ended August 31, 2026, and the credential retires on February 1, 2027. Active candidates should earn Agentforce Nonprofit Consultant (NP-Con-102).

#34. /certifications/omnistudio-consultant (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (OmniStudio Consultant, Plat-Con-201, OmniStudio Consultant dumps, Plat-Con-201 dumps).

Still Missing On-Page: A "Best Fit Solution" Decision Matrix (FlexCard vs. OmniScript vs. Integration Procedure vs. Data Mapper vs. Standard Lightning Record Page / Flow)—which directly tests the Best Fit Solutions (15%) and Omnistudio Fundamentals (16%) sections.

Internal & Off-Page Links Needed:

/omnistudio-developer-vs-consultant -> /certifications/omnistudio-consultant -> Anchor: "Salesforce OmniStudio Consultant (Plat-Con-201) Study Guide"

/certifications/omnistudio-developer -> /certifications/omnistudio-consultant -> Anchor: "OmniStudio Consultant (Plat-Con-201) Certification"

Cannibalisation Risks: /omnistudio-consultant-study-guide and /omnistudio-consultant-exam-tips on /html-sitemap. Action: 301/308 redirect both to /certifications/omnistudio-consultant.

SERP Feature Q&A to Add:

Q: What is the difference between OmniStudio Consultant (Plat-Con-201) and OmniStudio Developer (Plat-Dev-210)?

A: OmniStudio Consultant (Plat-Con-201, 67% passing score) focuses on business requirements gathering, solution design, and choosing the right fit between Flexcards (18%), Omniscripts (17%), Integration Procedures (17%), and Data Mappers (17%). OmniStudio Developer (Plat-Dev-210, 72% passing score) tests deep technical implementation, JSON data manipulation, and troubleshooting.

#35. /certifications/public-sector-solutions-consultant (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (Public Sector Solutions Consultant, PubSec-Con-201, Public Sector Solutions Consultant dumps, PubSec-Con-201 dumps).

Still Missing On-Page: Update the Homepage card for Public Sector Solutions Consultant (which still says Pass mark Not published on / instead of 72%!) and add a Business Rules Engine (BRE) Decision Tables vs. Expression Sets for Benefit Eligibility & License Fee Calculation comparison table.

Internal & Off-Page Links Needed:

/certifications/public-sector-solutions-ap -> /certifications/public-sector-solutions-consultant -> Anchor: "Public Sector Solutions Consultant (PubSec-Con-201) Study Guide"

Cannibalisation Risks: /certifications/public-sector-solutions-ap (clarify on both pages: PubSec-Con-201 is the full $200 Consultant certification with a 72% pass score, whereas public-sector-solutions-ap is the $150 Accredited Professional credential with a 70% pass score).

SERP Feature Q&A to Add:

Q: What is the passing score and exam code for Salesforce Public Sector Solutions Consultant?

A: The Salesforce Public Sector Solutions Consultant exam (code PubSec-Con-201) has 60 scored questions in 105 minutes and requires a 72% passing score (44 of 60 correct). It covers Foundational Knowledge of the Product (36%), Implementation Planning and Execution (32%), and Solution Design (32%).

#36. /certifications/revenue-cloud-consultant (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (Revenue Management Consultant, Revenue Cloud Consultant, Rev-Con-201, Revenue Cloud Consultant dumps, Rev-Con-201 dumps).

Still Missing On-Page: A Revenue Cloud (RLM: Product Catalog Management, Salesforce Pricing Procedures, Context Service, Product Configurator,Dynamic Revenue Orchestrator) vs. Legacy SteelBrick CPQ architectural table.

Internal & Off-Page Links Needed:

/cpq-admin-vs-revenue-cloud-consultant -> /certifications/revenue-cloud-consultant -> Anchor: "Revenue Management / Revenue Cloud Consultant (Rev-Con-201) Study Guide"

/certifications/cpq-administrator & /certifications/cpq-billing-ap -> /certifications/revenue-cloud-consultant -> Anchor: "Revenue Management Consultant (Rev-Con-201) Active Replacement"

Cannibalisation Risks: /revenue-cloud-consultant-study-guide on /html-sitemap (/revenue-cloud-consultant-exam-tips is redirected). Action: 301/308 redirect /revenue-cloud-consultant-study-guide to /certifications/revenue-cloud-consultant.

SERP Feature Q&A to Add:

Q: What is the passing score for the Salesforce Revenue Management Consultant (Rev-Con-201) exam?

A: The Salesforce Revenue Management Consultant (Rev-Con-201, also known as Revenue Cloud Consultant) exam has 60 scored questions, a 105-minute limit, and a 63% passing score (38 of 60 correct). Product Catalog Management (18%) and Salesforce Pricing (18%) are the top-weighted sections.

#37. /certifications/sales-cloud (Live Page)

7-Cluster Viability: Can reach Top 10 now: C1, C2, C5, C7 for Agentforce Sales Consultant, Sales-Con-201, Sales-Con-201 dumps, Agentforce Sales Consultant dumps. Blocked on C6 (Sales Cloud Consultant study guide / CRT-251) because /sales-cloud-consultant-study-guide and /sales-cloud-consultant-exam-tips are still linked on /html-sitemap AND the lower stitched half of /certifications/sales-cloud still has TWO outdated section weightage tables (25%/22%/15%/13%/12%/8%/5% and 25%/22%/13%/13%/13%) plus an FAQ claiming "passing score of 65%"!

Still Missing On-Page: Delete the two legacy 7-section and 5-section Sales Practices 25% + Implementation Strategies 22% = 47% stitched blocks at the bottom of /certifications/sales-cloud so only the official 5-domain Spring/Summer '26 outline (25% / 24% / 20% / 18% / 13%) and 73% passing score exist on the page.

Internal & Off-Page Links Needed:

src/components/Footer.tsx -> Change Sales Cloud Consultant practice questions to "Agentforce Sales Consultant (Sales-Con-201 / Sales Cloud) practice questions"

/sales-cloud-vs-service-cloud & /sales-cloud-vs-experience-cloud-consultant -> /certifications/sales-cloud -> Anchor: "Agentforce Sales Consultant (Sales-Con-201 / CRT-251) Study Guide"

Cannibalisation Risks: /sales-cloud-consultant-study-guide and /sales-cloud-consultant-exam-tips on /html-sitemap. Action: 301/308 redirect both to /certifications/sales-cloud.

SERP Feature Q&A to Add:

Q: What is the passing score for Agentforce Sales Consultant (Sales-Con-201 / CRT-251)?

A: The Salesforce Agentforce Sales Consultant (Sales-Con-201 / CRT-251, formerly Sales Cloud Consultant) exam requires a 73% passing score (44 of 60 scored questions) within 105 minutes. Consulting and Implementation Strategies (25%) and Practical Application of Agentforce Sales Expertise (24%) account for 49% of the exam.

#38. /certifications/service-cloud (Live Page)

7-Cluster Viability: Can reach Top 10 now: C1, C2, C5, C7 for Agentforce Service Consultant, Service-Con-201, Service-Con-201 dumps. Blocked on C6 (Service Cloud Consultant study guide / CRT-261) because /service-cloud-consultant-study-guide is still LIVE (200 OK, claiming 65% pass score!) and linked in the Footer (Service Cloud study guide) and /certifications/role/consultant!

Still Missing On-Page: Add a Service Cloud Voice (Amazon Connect vs. Partner Telephony BYOT) & Omni-Channel Unified Routing (Queue vs. Skills vs. Direct-to-Agent vs. Copilot/Agentforce Service Agent Escalation) table.

Internal & Off-Page Links Needed:

src/components/Footer.tsx (Popular Certifications) & /certifications/role/consultant (High-Intent Consultant Resources) -> Change /service-cloud-consultant-study-guide to /certifications/service-cloud -> Anchor: "Agentforce Service Consultant (Service-Con-201 / Service Cloud) Study Guide"

/sales-cloud-vs-service-cloud & /field-service-vs-service-cloud-consultant -> /certifications/service-cloud -> Anchor: "Agentforce Service Consultant (Service-Con-201 / CRT-261) Study Guide"

Cannibalisation Risks: CRITICAL: /service-cloud-consultant-study-guide (200 OK) and /service-cloud-consultant-exam-tips. Action: 301/308 redirect both to /certifications/service-cloud.

SERP Feature Q&A to Add:

Q: What is the passing score for Agentforce Service Consultant (Service-Con-201 / CRT-261)?

A: The Salesforce Agentforce Service Consultant (Service-Con-201 / CRT-261, formerly Service Cloud Consultant) exam has the highest passing score in the Consultant track at 78% (47 of 60 scored questions) within 105 minutes.

#39. /certifications/slack-consultant (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (Slack Consultant, Slack-Con-201, Slack Consultant dumps, Slack-Con-201 dumps).

Still Missing On-Page: A Slack Connect Governance (External Org Invitations, Verified Orgs, Sponsored Connections, DLP & Information Barriers) architecture table.

Internal & Off-Page Links Needed:

/certifications/slack-administrator -> /certifications/slack-consultant -> Anchor: "Slack Consultant (Slack-Con-201) Study Guide"

/certifications/slack-developer -> /certifications/slack-consultant -> Anchor: "Slack Consultant (Slack-Con-201) Certification"

Cannibalisation Risks: /slack-consultant-exam-tips on /html-sitemap. Action: 301/308 redirect to /certifications/slack-consultant.

SERP Feature Q&A to Add:

Q: How many questions and minutes are on the Salesforce Slack Consultant (Slack-Con-201) exam?

A: The Slack Consultant (Slack-Con-201) exam consists of 60 scored multiple-choice questions with a 90-minute time limit and a 67% passing score (41 of 60 correct). Solution Design (22%) and Enterprise Grid Architecture (18%) make up 40% of the exam.

Track 5: Marketing (#40–#42)
#40. /certifications/email-specialist (Live Page)

7-Cluster Viability: Can reach Top 10 now: C1–C7 (Marketing Cloud Engagement Specialist, MC-202, CRT-550, Marketing Cloud Email Specialist dumps, MC-202 dumps).

Still Missing On-Page: An Automation Studio Activities (SQL Query, Filter, File Transfer, Import File, Data Extract, Send Email, Wait, Script) vs. Journey Builder Activities table.

Internal & Off-Page Links Needed:

/certifications/role/marketing -> Remove the duplicate 7th card Salesforce Certified Marketing Cloud Engagement Specialist Practice Test (CRT-550) so all equity flows to /certifications/email-specialist.

/marketing-cloud-certification-path -> /certifications/email-specialist -> Anchor: "Marketing Cloud Engagement Specialist (MC-202 / CRT-550 Email Specialist) Study Guide"

Cannibalisation Risks: /email-specialist-study-guide, /email-specialist-exam-tips, and /email-specialist-practice-test on /html-sitemap and /certifications/role/marketing. Action: 301/308 redirect all three to /certifications/email-specialist.

SERP Feature Q&A to Add:

Q: What is the new name and exam code for Salesforce Marketing Cloud Email Specialist (CRT-550)?

A: Salesforce renamed the Marketing Cloud Email Specialist (CRT-550) credential to Salesforce Certified Marketing Cloud Engagement Specialist (exam code MC-202). The exam has 60 scored questions, a 90-minute time limit, and a 67% passing score.

#41. /certifications/marketing-cloud-next-consultant (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (Marketing Cloud Next Consultant, MC-Con-201, Marketing Cloud Next Consultant dumps, MC-Con-201 dumps).

Still Missing On-Page: A Marketing Cloud Next (Growth & Advanced Edition on Core/Data 360: Segment-Triggered Flows, Event-Triggered Flows, Unified Individuals, Consent Data Model) vs. Classic Marketing Cloud Engagement (MCE) comparison table.

Internal & Off-Page Links Needed:

/certifications/pardot-consultant -> /certifications/marketing-cloud-next-consultant -> Anchor: "Marketing Cloud Next Consultant (MC-Con-201) Study Guide"

/marketing-cloud-certification-path -> /certifications/marketing-cloud-next-consultant -> Anchor: "Marketing Cloud Next Consultant (MC-Con-201) Certification"

Cannibalisation Risks: Listed on both Consultant and Marketing hubs (keep /certifications/marketing-cloud-next-consultant as the single canonical URL).

SERP Feature Q&A to Add:

Q: What does the Salesforce Marketing Cloud Next Consultant (MC-Con-201) exam test?

A: The Marketing Cloud Next Consultant (MC-Con-201) exam tests Marketing Cloud Growth and Advanced Editions built natively on Salesforce Core and Data 360. It has 60 questions, 105 minutes, and a 72% passing score, led by Campaign Design & Flow Orchestration (30%) and Data 360 Segmentation & Consent (25%).

#42. /certifications/pardot-specialist (Live Page)

7-Cluster Viability: Can reach Top 10 now: C1–C7 (Marketing Cloud Account Engagement Specialist, MC-201, Pardot Specialist, MC-201 dumps, Pardot Specialist dumps).

Still Missing On-Page: The 6-Type Account Engagement Automation Comparison Table (Automation Rules vs. Segmentation Rules vs. Completion Actions vs. Page Actions vs. Dynamic Lists vs. Engagement Studio) showing retroactivity, repeatability, and visitor vs. prospect support.

Internal & Off-Page Links Needed:

/pardot-specialist-vs-pardot-consultant -> /certifications/pardot-specialist -> Anchor: "Marketing Cloud Account Engagement (Pardot) Specialist (MC-201) Study Guide"

/certifications/role/marketing (High-Intent Marketing Resources) -> Change /pardot-certification-guide to /certifications/pardot-specialist

Cannibalisation Risks: /pardot-specialist-study-guide, /pardot-specialist-exam-tips, and /pardot-certification-guide on /html-sitemap. Action: 301/308 redirect all three to /certifications/pardot-specialist.

SERP Feature Q&A to Add:

Q: What is the passing score for Marketing Cloud Account Engagement (Pardot) Specialist (MC-201)?

A: The Salesforce Marketing Cloud Account Engagement Specialist (MC-201, formerly Pardot Specialist) exam has 60 scored questions, a 90-minute time limit, and a 72% passing score (44 of 60 correct). Lead Management (24%), Email Marketing (20%), and Forms & Landing Pages (20%) make up 64% of the exam.

Track 6: Architect (#43–#59)
#43. /certifications/application-architect (Live Page)

7-Cluster Viability: Can reach Top 10 now: C1–C7 (Salesforce Application Architect, Application Architect certification, Application Architect requirements, Application Architect dumps).

Still Missing On-Page: A Recommended 4-Exam Sequence Table (1. Platform App Builder Plat-Admn-202 -> 2. Platform Developer I Plat-Dev-201 -> 3. Sharing and Visibility Architect Plat-Arch-205 -> 4. Data Architect Plat-Arch-201) with total cost ($1,200 USD across the 4 exams; $0 for the composite credential itself).

Internal & Off-Page Links Needed:

/system-architect-vs-application-architect -> /certifications/application-architect -> Anchor: "Salesforce Application Architect Credential Guide"

/certifications/role/architect -> Fix the broken FAQ on /certifications/role/architect so it lists the true 4 Application Architect prerequisites and links to /certifications/application-architect.

Cannibalisation Risks: /application-architect-study-guide and /application-architect-exam-tips on /html-sitemap. Action: 301/308 redirect both to /certifications/application-architect.

SERP Feature Q&A to Add:

Q: Which 4 certifications are required to earn Salesforce Application Architect in 2026?

A: Salesforce Application Architect is a composite credential awarded automatically at no extra fee once you hold all four required certifications: Platform App Builder (Plat-Admn-202), Platform Developer I (Plat-Dev-201), Platform Data Architect (Plat-Arch-201), and Platform Sharing and Visibility Architect (Plat-Arch-205).

#44. /certifications/data-architect (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (Platform Data Architect, Data Architect, Plat-Arch-201, Data Architect dumps, Plat-Arch-201 dumps).

Still Missing On-Page: A SOQL Query Plan Selectivity Threshold Table (10% of first 1M records, 5% above 1M, max 333,333 records for standard index; 30% for custom index) and Skinny Tables vs. Custom Indexes vs. Big Objects (__b) vs. Salesforce Connect (__x) LDV comparison table.

Internal & Off-Page Links Needed:

/certifications/role/architect -> Replace (ARC-801) with (Plat-Arch-201) on the Data Architect link!

/certifications/application-architect -> /certifications/data-architect -> Anchor: "Platform Data Architect (Plat-Arch-201) Study Guide"

Cannibalisation Risks: /data-architect-study-guide and /data-architect-exam-tips on /html-sitemap. Action: 301/308 redirect both to /certifications/data-architect.

SERP Feature Q&A to Add:

Q: What is the passing score and fee for Salesforce Platform Data Architect (Plat-Arch-201)?

A: The Salesforce Platform Data Architect (Plat-Arch-201) exam has 60 scored questions, a 105-minute time limit, and a 58% passing score (35 of 60 correct). Registration is $400 USD ($200 USD retake). Data Modeling (25%), Salesforce Data Management (25%), and Large Data Volumes (20%) represent 70% of the exam.

#45. /certifications/integration-architect (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (Platform Integration Architect, Integration Architect, Plat-Arch-204, Integration Architect dumps, Plat-Arch-204 dumps).

Still Missing On-Page: The 6 Official Salesforce Integration Patterns Decision Matrix (Remote Process Invocation—Request and Reply, Remote Process Invocation—Fire and Forget, Batch Data Synchronization, Remote Call-In, UI Update Based on Data Changes, Data Virtualization) mapping each pattern to its exact tool (Apex REST/SOAP Callout, Platform Events, Change Data Capture, Bulk API 2.0, Salesforce Connect).

Internal & Off-Page Links Needed:

/integration-architect-vs-system-architect -> /certifications/integration-architect -> Anchor: "Platform Integration Architect (Plat-Arch-204) Study Guide"

/certifications/system-architect -> /certifications/integration-architect -> Anchor: "Platform Integration Architect (Plat-Arch-204) Certification"

Cannibalisation Risks: /integration-architect-study-guide and /integration-architect-exam-tips on /html-sitemap. Action: 301/308 redirect both to /certifications/integration-architect.

SERP Feature Q&A to Add:

Q: What is the passing score for Salesforce Platform Integration Architect (Plat-Arch-204)?

A: The Salesforce Platform Integration Architect (Plat-Arch-204) exam consists of 60 scored questions in 105 minutes and requires a 67% passing score (41 of 60 correct). Design Integration Solutions (28%), Build and Implement Integrations (23%), and Translate Needs to Integration Requirements (22%) cover 73% of the exam.

#46. /certifications/sharing-visibility-architect (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (Platform Sharing and Visibility Architect, Sharing and Visibility Architect, Plat-Arch-205, Plat-Arch-205 dumps).

Still Missing On-Page: An Implicit Sharing (Parent vs. Child vs. Portal vs. High-Volume) & Sharing Table Architecture (AccountShare, CustomObject__Share, RowCause, UserOrGroupId, AccessLevel) reference table, plus Granular Locking vs. Deferred Sharing Maintenance.

Internal & Off-Page Links Needed:

/certifications/application-architect -> /certifications/sharing-visibility-architect -> Anchor: "Platform Sharing and Visibility Architect (Plat-Arch-205) Study Guide"

/certifications/data-architect -> /certifications/sharing-visibility-architect -> Anchor: "Sharing and Visibility Architect (Plat-Arch-205)"

Cannibalisation Risks: /sharing-visibility-architect-study-guide and /sharing-visibility-architect-exam-tips on /html-sitemap. Action: 301/308 redirect both to /certifications/sharing-visibility-architect.

SERP Feature Q&A to Add:

Q: What is the passing score for Salesforce Platform Sharing and Visibility Architect (Plat-Arch-205)?

A: The Salesforce Platform Sharing and Visibility Architect (Plat-Arch-205) exam has 60 scored questions, a 105-minute time limit, and a 58% passing score (35 of 60 correct). Declarative Sharing (39%) and Programmatic Sharing (27%) together account for 66% of the exam.

#47. /certifications/system-architect (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (Salesforce System Architect, System Architect certification, System Architect dumps).

Still Missing On-Page: A 4-Exam Sequence & Overlap Table highlighting that Platform Developer I (Plat-Dev-201) is shared between both Application Architect and System Architect (so earning both pyramid pillars requires 7 exams total, not 8).

Internal & Off-Page Links Needed:

/system-architect-vs-application-architect & /integration-architect-vs-system-architect -> /certifications/system-architect -> Anchor: "Salesforce System Architect Credential Guide"

Cannibalisation Risks: /system-architect-study-guide and /system-architect-exam-tips on /html-sitemap. Action: 301/308 redirect both to /certifications/system-architect.

SERP Feature Q&A to Add:

Q: Which 4 certifications are required for Salesforce System Architect in 2026?

A: Salesforce System Architect is awarded automatically once you hold all four required credentials: Platform Developer I (Plat-Dev-201), Platform Integration Architect (Plat-Arch-204), Platform Identity and Access Management Architect (Plat-Arch-203), and Platform Development Lifecycle and Deployment Architect (Plat-Arch-202).

#48. /certifications/identity-access-management-architect (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (Platform Identity and Access Management Architect, IAM Architect, Plat-Arch-203, Plat-Arch-203 dumps).

Still Missing On-Page: An OAuth 2.0 Flows Decision Table (Web Server / Authorization Code vs. User-Agent vs. JWT Bearer Token vs. SAML Bearer Assertion vs. Client Credentials vs. Device Flow vs. Asset Token) and SP-Initiated vs. IdP-Initiated SAML 2.0 RelayState flow table.

Internal & Off-Page Links Needed:

/certifications/system-architect -> /certifications/identity-access-management-architect -> Anchor: "Platform Identity and Access Management Architect (Plat-Arch-203) Study Guide"

Cannibalisation Risks: /iam-architect-study-guide and /iam-architect-exam-tips on /html-sitemap. Action: 301/308 redirect both to /certifications/identity-access-management-architect.

SERP Feature Q&A to Add:

Q: What is the passing score for Salesforce Platform Identity and Access Management Architect (Plat-Arch-203)?

A: The Salesforce Platform Identity and Access Management Architect (Plat-Arch-203) exam has 60 scored questions in 105 minutes and requires a 65% passing score (39 of 60 correct). Accepting Third-Party Identity (21%) and Community Identity (18%) are the highest-weighted sections.

#49. /certifications/dev-lifecycle-deployment-architect (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (Platform Development Lifecycle and Deployment Architect, Plat-Arch-202, Plat-Arch-202 dumps).

Still Missing On-Page: A 4-Sandbox Comparison Table (Developer 200 MB / 1 day vs. Developer Pro 1 GB / 1 day vs. Partial Copy 5 GB / 5 days vs. Full Production size / 29 days) and 2GP Unlocked Packages vs. Managed Packages vs. Org-Dependent Unlocked Packages table.

Internal & Off-Page Links Needed:

/certifications/system-architect -> /certifications/dev-lifecycle-deployment-architect -> Anchor: "Platform Development Lifecycle and Deployment Architect (Plat-Arch-202) Study Guide"

Cannibalisation Risks: /dev-lifecycle-deployment-architect-study-guide and /dev-lifecycle-deployment-architect-exam-tips on /html-sitemap. Action: 301/308 redirect both to /certifications/dev-lifecycle-deployment-architect.

SERP Feature Q&A to Add:

Q: What is the passing score for Platform Development Lifecycle and Deployment Architect (Plat-Arch-202)?

A: The Salesforce Platform Development Lifecycle and Deployment Architect (Plat-Arch-202) exam has 60 scored questions, a 105-minute time limit, and a 65% passing score (39 of 60 correct). System Design (15%), Building (14%), and Deploying (14%) are the three largest sections.

#50. /certifications/technical-architect (Live Page)

7-Cluster Viability: Can reach Top 10 now: C1–C7 (Salesforce Technical Architect, Salesforce CTA, CTA certification cost, Salesforce CTA dumps).

Still Missing On-Page: A Complete End-to-End CTA Pyramid Cost Table totaling the 7 prerequisite exams (5 × $400 + 2 × $200 = $2,400 USD) + Stage 1 Architect Evaluation ($1,500 USD) + Stage 2 Review Board ($4,500 USD) = $8,400 USD total journey cost ($6,000 USD for the two CTA board stages).

Internal & Off-Page Links Needed:

/become-a-cta & /architect-certification-path -> /certifications/technical-architect -> Anchor: "Salesforce Certified Technical Architect (CTA) Guide & Cost"

Cannibalisation Risks: /technical-architect-study-guide, /technical-architect-exam-tips, and /become-a-cta on /html-sitemap. Action: 301/308 redirect /technical-architect-study-guide and /technical-architect-exam-tips to /certifications/technical-architect.

SERP Feature Q&A to Add:

Q: How much does the Salesforce Certified Technical Architect (CTA) exam cost in 2026?

A: The two-stage Salesforce Certified Technical Architect (CTA) evaluation costs $6,000 USD in total: $1,500 USD for the Stage 1 Architect Evaluation (retake $750 USD) and $4,500 USD for the Stage 2 Review Board Exam (retake $2,250 USD), after earning Application Architect and System Architect.

#51. /certifications/technical-architect-evaluation (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (Technical Architect - Architect Evaluation, CTA Evaluation exam, CTA Stage 1).

Still Missing On-Page: Update the Homepage card for Technical Architect - Architect Evaluation (which still says Questions Scenario + MC on / instead of 135-min live 1:1 evaluation), and add a 135-Minute Stage 1 Time Allocation Table (90 minutes preparation + 30 minutes presentation + 15 minutes Q&A).

Internal & Off-Page Links Needed:

/certifications/technical-architect & /certifications/technical-architect-review-board -> /certifications/technical-architect-evaluation -> Anchor: "Technical Architect - Architect Evaluation (CTA Stage 1) Guide"

Cannibalisation Risks: /cta-evaluation-exam-tips on /html-sitemap. Action: 301/308 redirect to /certifications/technical-architect-evaluation.

SERP Feature Q&A to Add:

Q: What is the format of the Salesforce Technical Architect - Architect Evaluation (Stage 1)?

A: The Salesforce Technical Architect - Architect Evaluation is a 135-minute live 1:1 session with a Certified Technical Architect assessor (not a multiple-choice test). Candidates receive a business case, prepare a solution architecture, present their artifacts, and answer targeted Q&A for a $1,500 USD fee.

#52. /certifications/technical-architect-review-board (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (Technical Architect - Architect Review Board, CTA Review Board exam).

Still Missing On-Page: A CTA Review Board Artifact Checklist (System Landscape Diagram, Data Model / ERD with LDV volumes, Role Hierarchy & Sharing Table, SSO & OAuth Flow Diagram, Governance & CI/CD Pipeline Diagram) and Partial Retake (1–2 failed sections) vs. Full Retake Rules.

Internal & Off-Page Links Needed:

/certifications/technical-architect & /certifications/technical-architect-evaluation -> /certifications/technical-architect-review-board -> Anchor: "Technical Architect - Architect Review Board (CTA Stage 2) Guide"

Cannibalisation Risks: /cta-review-board-tips on /html-sitemap. Action: 301/308 redirect to /certifications/technical-architect-review-board.

SERP Feature Q&A to Add:

Q: How is the Salesforce Technical Architect Review Board Exam (Stage 2) scored?

A: A panel of CTA judges evaluates your live presentation and Q&A across seven weighted domains: System Architecture, Security, Data, Solution Architecture, Integration, Development Lifecycle and Deployment, and Communication. Registration is $4,500 USD ($2,250 USD retake) after passing the Architect Evaluation.

#53. /certifications/b2b-solution-architect (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (B2B Solution Architect, Arch-301, B2B Solution Architect dumps, Arch-301 dumps).

Still Missing On-Page: A Multi-Cloud B2B Account Hierarchy & Master Data Management (MDM Golden Record vs. Cross-Org External ID Sync across Sales Cloud, CPQ/Revenue Cloud, B2B Commerce, and MuleSoft) reference table.

Internal & Off-Page Links Needed:

/b2b-vs-b2c-solution-architect -> /certifications/b2b-solution-architect -> Anchor: "B2B Solution Architect (Arch-301) Study Guide"

Cannibalisation Risks: /b2b-solution-architect-study-guide and /b2b-solution-architect-exam-tips on /html-sitemap. Action: 301/308 redirect both to /certifications/b2b-solution-architect.

SERP Feature Q&A to Add:

Q: Is the Salesforce B2B Solution Architect (Arch-301) certification retiring on February 1, 2027?

A: Yes. Registration for B2B Solution Architect (Arch-301) closed on July 24, 2026, final testing ended August 31, 2026, and the credential officially retires on February 1, 2027. Active architects should pursue Application Architect and System Architect.

#54. /certifications/b2c-commerce-architect (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (B2C Commerce Architect, Arch-303, B2C Commerce Architect dumps, Arch-303 dumps).

Still Missing On-Page: A B2C Commerce Realm / Instance Topology (Staging -> Development -> Production data replication vs. code deployment) & CDN/Page Cache Partitioning table.

Internal & Off-Page Links Needed:

/certifications/b2c-commerce-developer & /certifications/b2c-solution-architect -> /certifications/b2c-commerce-architect -> Anchor: "B2C Commerce Architect (Arch-303) Study Guide"

Cannibalisation Risks: /b2c-commerce-architect-study-guide and /b2c-commerce-architect-exam-tips on /html-sitemap. Action: 301/308 redirect both to /certifications/b2c-commerce-architect.

SERP Feature Q&A to Add:

Q: When does the Salesforce B2C Commerce Architect (Arch-303) certification retire?

A: Registration for B2C Commerce Architect (Arch-303) closed on July 24, 2026, final exam testing ended August 31, 2026, and the credential officially retires on February 1, 2027. Architects should transition to the active B2C Solution Architect (Arch-302) certification.

#55. /certifications/b2c-solution-architect (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (B2C Solution Architect, Arch-302, B2C Solution Architect dumps, Arch-302 dumps).

Still Missing On-Page: A Customer 360 Identity & Cross-Cloud Key Mapping Table (Service Cloud Contact/Person Account ID vs. Marketing Cloud Subscriber Key vs. B2C Commerce CustomerList/CustomerNo vs. Data 360 Unified Individual ID).

Internal & Off-Page Links Needed:

/b2b-vs-b2c-solution-architect -> /certifications/b2c-solution-architect -> Anchor: "B2C Solution Architect (Arch-302) Study Guide"

/certifications/b2c-commerce-architect -> /certifications/b2c-solution-architect -> Anchor: "Active B2C Solution Architect (Arch-302) Replacement"

Cannibalisation Risks: /b2c-solution-architect-study-guide and /b2c-solution-architect-exam-tips on /html-sitemap. Action: 301/308 redirect both to /certifications/b2c-solution-architect.

SERP Feature Q&A to Add:

Q: What prerequisites are required for Salesforce B2C Solution Architect (Arch-302)?

A: Candidates must hold three prerequisite certifications before sitting for B2C Solution Architect (Arch-302): Platform App Builder (Plat-Admn-202), Platform Data Architect (Plat-Arch-201), and Platform Integration Architect (Plat-Arch-204). The exam has 60 questions, 120 minutes, and a 63% passing score.

#56. /certifications/heroku-architect (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (Heroku Architect, Plat-Arch-206, Heroku Architect dumps, Plat-Arch-206 dumps).

Still Missing On-Page: A Common Runtime vs. Private Spaces vs. Shield Private Spaces compliance table (PCI-DSS Level 1, HIPAA, VPC Peering, VPN, Mutual TLS) and Heroku Connect Write Algorithm (Ordered Writes vs. Merged Writes) comparison.

Internal & Off-Page Links Needed:

/certifications/heroku-developer-ap -> /certifications/heroku-architect -> Anchor: "Salesforce Heroku Architect (Plat-Arch-206) Study Guide"

Cannibalisation Risks: /heroku-architect-exam-tips on /html-sitemap. Action: 301/308 redirect to /certifications/heroku-architect.

SERP Feature Q&A to Add:

Q: What is the passing score and exam code for Salesforce Heroku Architect?

A: The Salesforce Heroku Architect exam (code Plat-Arch-206) has 60 scored questions, a 105-minute time limit, and a 72% passing score (44 of 60 correct). Heroku Enterprise and Private Spaces (28%) and Application Architecture (17%) are the top-weighted sections.

#57. /certifications/mulesoft-catalyst-consultant (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (MuleSoft Catalyst Consultant, Mule-Con-201, MuleSoft Catalyst Consultant dumps).

Still Missing On-Page: Update the Homepage card for MuleSoft Catalyst Consultant (which still says Exam fee $200 on / instead of $400!) and add a MuleSoft Catalyst 3 Pillars (Business Outcomes, Organisation Enablement / C4E, Technology Delivery) & 6 Playbooks summary table.

Internal & Off-Page Links Needed:

/certifications/mulesoft-platform-architect -> /certifications/mulesoft-catalyst-consultant -> Anchor: "MuleSoft Catalyst Consultant (Mule-Con-201) Archive"

Cannibalisation Risks: /mulesoft-catalyst-consultant-exam-tips on /html-sitemap. Action: 301/308 redirect to /certifications/mulesoft-catalyst-consultant.

SERP Feature Q&A to Add:

Q: How many questions are on the retiring MuleSoft Catalyst Consultant (Mule-Con-201) exam?

A: The MuleSoft Catalyst Consultant (Mule-Con-201) exam had 45 scored multiple-choice questions in 90 minutes with a 70% passing score. Registration closed on July 24, 2026, final testing ended August 31, 2026, and the credential retires on February 1, 2027.

#58. /certifications/mulesoft-platform-architect (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (MuleSoft Platform Architect, Mule-Arch-201, MuleSoft Platform Architect I, Mule-Arch-201 dumps).

Still Missing On-Page: An Anypoint Control Plane vs. Runtime Plane Deployment Options Table (CloudHub 1.0 vs. CloudHub 2.0 vs. Runtime Fabric on EKS/AKS/GKE vs. Customer-Hosted Hybrid vs. Anypoint PCE).

Internal & Off-Page Links Needed:

/certifications/mulesoft-integration-architect -> /certifications/mulesoft-platform-architect -> Anchor: "MuleSoft Platform Architect (Mule-Arch-201) Study Guide"

Cannibalisation Risks: /mulesoft-platform-architect-study-guide and /mulesoft-platform-architect-exam-tips on /html-sitemap. Action: 301/308 redirect both to /certifications/mulesoft-platform-architect.

SERP Feature Q&A to Add:

Q: What is the passing score and time limit for MuleSoft Platform Architect (Mule-Arch-201)?

A: The Salesforce MuleSoft Platform Architect (Mule-Arch-201) exam has 60 scored questions, a 120-minute time limit, a 70% passing score (42 of 60 correct), and a $400 USD registration fee ($200 USD retake).

#59. /certifications/mulesoft-integration-architect (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (MuleSoft Platform Integration Architect, MuleSoft Integration Architect, Mule-Arch-202, Mule-Arch-202 dumps).

Still Missing On-Page: Update the Homepage card for MuleSoft Platform Integration Architect (which says Prerequisites MuleSoft Platform Architect on /, whereas official prerequisite is None!), and add a Local Transactions (Try Scope) vs. XA Distributed Transactions (Bitronix) vs. Saga Compensating Pattern comparison table.

Internal & Off-Page Links Needed:

/certifications/mulesoft-platform-architect -> /certifications/mulesoft-integration-architect -> Anchor: "MuleSoft Platform Integration Architect (Mule-Arch-202) Study Guide"

Cannibalisation Risks: /mulesoft-integration-architect-study-guide and /mulesoft-integration-architect-exam-tips on /html-sitemap. Action: 301/308 redirect both to /certifications/mulesoft-integration-architect.

SERP Feature Q&A to Add:

Q: What is the difference between MuleSoft Platform Architect (Mule-Arch-201) and MuleSoft Integration Architect (Mule-Arch-202)?

A: MuleSoft Platform Architect (Mule-Arch-201) focuses on macro-level Anypoint Platform strategy, API-led connectivity, C4E governance, and CloudHub topology. MuleSoft Platform Integration Architect (Mule-Arch-202) focuses on solution-level Mule 4 component design, transactions, reliability patterns, and performance tuning.

Track 7: Accredited Professional (#60–#82)

Systemic Finding Across All 23 AP Pages (#60–#82): /html-sitemap still lists all 23 standalone *-ap-exam-tips URLs (e.g., /health-cloud-ap-exam-tips, /financial-services-cloud-ap-exam-tips, /b2b-commerce-developer-ap-exam-tips), splitting internal link equity on the easiest-to-win track on the web. In addition, /certifications/role/accredited-professional recommends the retiring Advanced Field Service AP as its #1 card! Redirecting all 23 *-ap-exam-tips URLs to /certifications/[slug] will consolidate 100% of AP authority.

#60. /certifications/advanced-field-service-ap (Live Page)

7-Cluster Viability: Top 10 ready (C1–C7) (Advanced Field Service Accredited Professional, Advanced Field Service AP dumps).

Still Missing On-Page: A Multi-Day Work Scheduling, Crew Management (ServiceCrew, ServiceCrewMember), and Resource Absence / Overtime Capacity reference table.

Internal Links: /certifications/field-service -> /certifications/advanced-field-service-ap -> Anchor: "Advanced Field Service Accredited Professional Historical Guide".

Cannibalisation: 301/308 redirect /advanced-field-service-ap-exam-tips -> /certifications/advanced-field-service-ap, and remove it from the #1 "take first" card on /certifications/role/accredited-professional.

SERP Q&A: Q: What is the passing score and retirement date for Advanced Field Service Accredited Professional? / A: The Advanced Field Service Accredited Professional exam had 46 scored questions in 75 minutes with a 73% passing score ($150 USD). Registration closed July 24, 2026, testing ended August 31, 2026, and the credential retires February 1, 2027.

#61. /certifications/b2b-commerce-admin-ap (Live Page)

7-Cluster Viability: Top 10 ready (C1–C7) (B2B Commerce Administrator Accredited Professional, AP-201, B2B Commerce Admin AP dumps).

Still Missing On-Page: Explicitly include the legacy partner exam code AP-201 (still heavily searched on Google) and a Buyer Groups, Entitlement Policies, Price Books (Original vs. Strikethrough Price), and Search Index Rebuild table.

Internal Links: /certifications/b2b-commerce-developer-ap -> /certifications/b2b-commerce-admin-ap -> Anchor: "Salesforce B2B Commerce Administrator Accredited Professional (AP-201) Study Guide".

Cannibalisation: 301/308 redirect /b2b-commerce-admin-ap-exam-tips -> /certifications/b2b-commerce-admin-ap.

SERP Q&A: Q: What is the passing score for Salesforce B2B Commerce Administrator Accredited Professional (AP-201)? / A: The Salesforce Accredited B2B Commerce Administrator Professional exam has 60 scored questions in 90 minutes, a 75% passing score (45 of 60 correct), and a $150 USD fee.

#62. /certifications/b2b-commerce-developer-ap (Live Page)

7-Cluster Viability: Top 10 ready (C1–C7) (B2B Commerce Developer Accredited Professional, AP-202, B2B Commerce Developer AP dumps).

Still Missing On-Page: Explicitly include the high-volume exam code AP-202 and a code reference table for the 4 Checkout Extension Interfaces (CartPriceCalculations, CartShippingCharges, CartInventoryValidation, CartTaxCalculations using CartExtension.CartContext) and CheckoutStep LWC interface (note: competitor CertEmpire ranks #1 for "AP-202" specifically by naming these 4 interfaces!).

Internal Links: /certifications/b2b-commerce-admin-ap & /certifications/b2c-commerce-developer -> /certifications/b2b-commerce-developer-ap -> Anchor: "Salesforce B2B Commerce Developer Accredited Professional (AP-202) Study Guide".

Cannibalisation: 301/308 redirect /b2b-commerce-developer-ap-exam-tips -> /certifications/b2b-commerce-developer-ap.

SERP Q&A: Q: What interfaces are tested on the B2B Commerce Developer Accredited Professional (AP-202) exam? / A: The B2B Commerce Developer Accredited Professional (AP-202) exam (60 questions, 75–90 minutes, 68% passing score) tests the four checkout reference interfaces—CartPriceCalculations, CartShippingCharges, CartInventoryValidation, and CartTaxCalculations—alongside the CheckoutStep LWC interface and Connect in Apex.

#63. /certifications/communications-cloud-ap (Live Page)

7-Cluster Viability: Top 10 ready (C1–C7) (Agentforce Communications Accredited Professional, Communications Cloud Accredited Professional, Communications Cloud AP dumps).

Still Missing On-Page: An Enterprise Product Catalog (Commercial Product vs. Technical Product) & Order Management Decomposition (1-to-1, 1-to-Many, Many-to-1 Decomposition Relationships & Orchestration Plans) table.

Internal Links: /certifications/omnistudio-consultant & /certifications/industries-cpq-developer -> /certifications/communications-cloud-ap -> Anchor: "Agentforce Communications (Communications Cloud) Accredited Professional Guide".

Cannibalisation: 301/308 redirect /communications-cloud-ap-exam-tips -> /certifications/communications-cloud-ap.

SERP Q&A: Q: What is the passing score for Salesforce Agentforce Communications Accredited Professional? / A: The Salesforce Accredited Agentforce Communications Professional (Communications Cloud AP) exam has 55–60 scored questions in 90 minutes, a 56% passing score, and a $150 USD registration fee.

#64. /certifications/consumer-goods-cloud-ap (Live Page)

7-Cluster Viability: Top 10 ready (C1–C7) (Agentforce Consumer Goods Accredited Professional, Consumer Goods Cloud Accredited Professional, Consumer Goods Cloud AP dumps).

Still Missing On-Page: A Retail Store vs. Retail Location Group vs. In-Store Location vs. Store Product Assortment & Visit Action Plan Template object hierarchy table.

Internal Links: /certifications/consumer-goods-tpm-ap -> /certifications/consumer-goods-cloud-ap -> Anchor: "Active Agentforce Consumer Goods Accredited Professional Study Guide".

Cannibalisation: 301/308 redirect /consumer-goods-cloud-ap-exam-tips -> /certifications/consumer-goods-cloud-ap.

SERP Q&A: Q: How many questions are on the Salesforce Agentforce Consumer Goods Accredited Professional exam? / A: The Salesforce Accredited Agentforce Consumer Goods Professional (Consumer Goods Cloud AP) exam has 33 scored multiple-choice questions, a 60-minute time limit, a 64% passing score (22 of 33 correct), and a $150 USD fee.

#65. /certifications/consumer-goods-tpm-ap (Live Page)

7-Cluster Viability: Top 10 ready (C1–C7) (Consumer Goods Cloud TPM Accredited Professional, Trade Promotion Management AP dumps).

Still Missing On-Page: A CG Processing Services (Hyperforce Off-Platform Calculation Engine) vs. Core Salesforce TPM Objects (Promotion, Tactic, Fund, Claim) architecture table.

Internal Links: /certifications/consumer-goods-cloud-ap -> /certifications/consumer-goods-tpm-ap -> Anchor: "Consumer Goods Cloud Trade Promotion Management (TPM) AP Archive".

Cannibalisation: 301/308 redirect /consumer-goods-tpm-ap-exam-tips -> /certifications/consumer-goods-tpm-ap.

SERP Q&A: Q: When does the Consumer Goods Cloud Trade Promotion Management (TPM) Accredited Professional retire? / A: The Consumer Goods Cloud TPM Accredited Professional exam (62 questions, 75 minutes, 66% passing score) closed registration on July 24, 2026, ended testing on August 31, 2026, and officially retires on February 1, 2027.

#66. /certifications/contact-center-ap (Live Page)

7-Cluster Viability: Top 10 ready (C1–C7) (Contact Center Accredited Professional, Contact Center AP dumps).

Still Missing On-Page: A Workforce Engagement Management (Workload History -> Intelligent Forecasting -> Omnichannel Capacity Planning -> Shift Scheduling) pipeline table.

Internal Links: /certifications/service-cloud -> /certifications/contact-center-ap -> Anchor: "Contact Center Accredited Professional Historical Guide".

Cannibalisation: 301/308 redirect /contact-center-ap-exam-tips -> /certifications/contact-center-ap.

SERP Q&A: Q: What replaced the retiring Salesforce Contact Center Accredited Professional credential? / A: Contact Center Accredited Professional retires on February 1, 2027 (after registration closed July 24, 2026 and testing ended August 31, 2026). Contact center capabilities are now validated through the Salesforce Agentforce Service Consultant (Service-Con-201) certification.

#67. /certifications/cpq-billing-ap (Live Page)

7-Cluster Viability: Top 10 ready (C1–C7) (CPQ and Billing Consultant Accredited Professional, CPQ and Billing AP dumps).

Still Missing On-Page: Update the Homepage card for CPQ and Billing Consultant Accredited Professional (which still says 60 questions, pass mark not published, 90 min on / instead of 35 questions, 74% to pass, 60 min!), and add a Billing Rule vs. Revenue Recognition Rule vs. Tax Rule (Order Product -> Invoice Line -> Revenue Schedule -> Finance Transaction) table.

Internal Links: /cpq-admin-vs-cpq-billing-ap & /certifications/revenue-cloud-consultant -> /certifications/cpq-billing-ap -> Anchor: "CPQ and Billing Consultant Accredited Professional Guide".

Cannibalisation: 301/308 redirect /cpq-billing-ap-exam-tips -> /certifications/cpq-billing-ap.

SERP Q&A: Q: How many questions and what passing score were on the CPQ and Billing Consultant Accredited Professional exam? / A: The Salesforce CPQ and Billing Consultant Accredited Professional exam consisted of 35 scored questions in 60 minutes with a 74% passing score, weighted across Technical Design (68%), Billing Operations (29%), and Implementation (3%). It retires on February 1, 2027.

#68. /certifications/energy-utilities-ap (Live Page)

7-Cluster Viability: Top 10 ready (C1–C7) (Energy and Utilities Cloud Accredited Professional, Energy and Utilities AP dumps).

Still Missing On-Page: A Premises -> Service Point -> Meter / Asset & Billing Account vs. Service Account data model table.

Internal Links: /certifications/omnistudio-consultant -> /certifications/energy-utilities-ap -> Anchor: "Energy and Utilities Cloud Accredited Professional Archive".

Cannibalisation: 301/308 redirect /energy-utilities-ap-exam-tips -> /certifications/energy-utilities-ap.

SERP Q&A: Q: When does the Energy and Utilities Cloud Accredited Professional credential retire? / A: Registration for Energy and Utilities Cloud Accredited Professional (50 questions, 75 minutes, 60% passing score) closed July 24, 2026, final testing ended August 31, 2026, and the credential retires on February 1, 2027.

#69. /certifications/financial-services-cloud-ap (Live Page)

7-Cluster Viability: Top 10 ready (C1–C7) (Agentforce Financial Services Accredited Professional, Financial Services Cloud Accredited Professional, FSC AP dumps).

Still Missing On-Page: Add Financial Services Cloud Accredited Professional to the top 3 "take first" cards on /certifications/role/accredited-professional, and add a Compliant Data Sharing (CDS) vs. Standard Account Teams & Actionable Relationship Center (ARC) vs. Group Builder (Account-Account, Contact-Contact, Account-Contact) table.

Internal Links: /certifications/role/accredited-professional -> /certifications/financial-services-cloud-ap -> Anchor: "Salesforce Accredited Agentforce Financial Services (FSC) Professional Study Guide".

Cannibalisation: 301/308 redirect /financial-services-cloud-ap-exam-tips -> /certifications/financial-services-cloud-ap.

SERP Q&A: Q: What is the passing score for Salesforce Financial Services Cloud Accredited Professional? / A: The Salesforce Accredited Agentforce Financial Services Professional (Financial Services Cloud AP) exam has 50 scored questions in 75 minutes, a 56% passing score (28 of 50 correct), and a $150 USD fee.

#70. /certifications/health-cloud-ap (Live Page)

7-Cluster Viability: Top 10 ready (C1–C7) (Agentforce Health Accredited Professional, Health Cloud Accredited Professional, Health Cloud AP dumps).

Still Missing On-Page: Update the Homepage card for Salesforce Accredited Agentforce Health Professional (which still says Pass mark Not published on / instead of 63%!) and add a Clinical Data Model (FHIR R4 aligned CarePlan, ClinicalEncounter, MedicationRequest, CareProgram) vs. Utilization Management (CarePreauth) table.

Internal Links: /certifications/agentforce-life-sciences-consultant & /certifications/role/accredited-professional -> /certifications/health-cloud-ap -> Anchor: "Salesforce Accredited Agentforce Health (Health Cloud) Professional Study Guide".

Cannibalisation: 301/308 redirect /health-cloud-ap-exam-tips -> /certifications/health-cloud-ap.

SERP Q&A: Q: What is the passing score and domain breakdown for Salesforce Health Cloud Accredited Professional? / A: The Salesforce Accredited Agentforce Health Professional (Health Cloud AP) exam has 60 scored questions, a 90-minute time limit, and a 63% passing score ($150 USD). Health Cloud Configuration (42%) and Clinical Data Model & Interoperability (42%) account for 84% of the exam.

#71. /certifications/heroku-developer-ap (Live Page)

7-Cluster Viability: Top 10 ready (C1–C7) (Heroku Developer Accredited Professional, Heroku Developer AP dumps).

Still Missing On-Page: A Procfile Process Types (web, worker, release), Dyno Tiers (Eco, Basic, Standard-1X/2X, Performance-M/L, Private), and Heroku Postgres Follower/Fork table.

Internal Links: /certifications/heroku-architect -> /certifications/heroku-developer-ap -> Anchor: "Heroku Developer Accredited Professional Archive".

Cannibalisation: 301/308 redirect /heroku-developer-ap-exam-tips -> /certifications/heroku-developer-ap.

SERP Q&A: Q: Is the Salesforce Heroku Developer Accredited Professional credential retiring? / A: Yes. Registration for Heroku Developer Accredited Professional (60 questions, 90 minutes, 68% passing score) closed July 24, 2026, final testing ended August 31, 2026, and the credential retires on February 1, 2027. Active architects should pursue Heroku Architect (Plat-Arch-206).

#72. /certifications/loyalty-management-ap (Live Page)

7-Cluster Viability: Top 10 ready (C1–C7) (Loyalty Management Accredited Professional, Loyalty Management AP dumps).

Still Missing On-Page: A Qualifying Points (Tier Progression) vs. Non-Qualifying Points (Redemption Balance) & TransactionJournal -> LoyaltyLedger Processing table.

Internal Links: /certifications/marketing-cloud-next-consultant -> /certifications/loyalty-management-ap -> Anchor: "Loyalty Management Accredited Professional Archive".

Cannibalisation: 301/308 redirect /loyalty-management-ap-exam-tips -> /certifications/loyalty-management-ap.

SERP Q&A: Q: What was the passing score for Salesforce Loyalty Management Accredited Professional? / A: The Loyalty Management Accredited Professional exam consisted of 50 scored questions in 75 minutes with a 69% passing score ($150 USD). Registration closed July 24, 2026, testing ended August 31, 2026, and the credential retires on February 1, 2027.

#73. /certifications/manufacturing-cloud-ap (Live Page)

7-Cluster Viability: Top 10 ready (C1–C7) (Agentforce Manufacturing Accredited Professional, Manufacturing Cloud Accredited Professional, Manufacturing Cloud AP dumps).

Still Missing On-Page: Update the Homepage card for Salesforce Accredited Agentforce Manufacturing Professional (which still says 60 questions, Pass mark Not published, 90 min on / instead of 50 questions, 68% to pass, 75 min!), and add a Sales Agreements (Planned vs. Actual Quantities/Revenues), Account-Based Forecasting, and Rebate Management (Data Processing Engine) table.

Internal Links: /certifications/role/accredited-professional -> /certifications/manufacturing-cloud-ap -> Anchor: "Salesforce Accredited Agentforce Manufacturing Professional Study Guide".

Cannibalisation: 301/308 redirect /manufacturing-cloud-ap-exam-tips -> /certifications/manufacturing-cloud-ap.

SERP Q&A: Q: What is the passing score for Salesforce Manufacturing Cloud Accredited Professional? / A: The Salesforce Accredited Agentforce Manufacturing Professional (Manufacturing Cloud AP) exam has 50 scored questions in 75 minutes, a 68% passing score (34 of 50 correct), and a $150 USD fee.

#74. /certifications/marketing-cloud-advanced-cross-channel-ap (Live Page)

7-Cluster Viability: Top 10 ready (C1–C7) (Marketing Cloud Advanced Cross Channel Accredited Professional, Advanced Cross Channel AP dumps).

Still Missing On-Page: A MobileConnect (SMS keywords/shortcodes) vs. MobilePush (SDK geofencing/beacons) vs. GroupConnect (LINE) comparison table.

Internal Links: /certifications/marketing-cloud-consultant -> /certifications/marketing-cloud-advanced-cross-channel-ap -> Anchor: "Marketing Cloud Advanced Cross Channel AP Archive".

Cannibalisation: 301/308 redirect /mc-advanced-cross-channel-ap-exam-tips -> /certifications/marketing-cloud-advanced-cross-channel-ap.

SERP Q&A: Q: When does the Marketing Cloud Advanced Cross Channel Accredited Professional retire? / A: Registration for Marketing Cloud Advanced Cross Channel Accredited Professional (40 questions, 60 minutes, 67% passing score) closed July 24, 2026, testing ended August 31, 2026, and the credential retires on February 1, 2027.

#75. /certifications/marketing-cloud-intelligence-ap (Live Page)

7-Cluster Viability: Top 10 ready (C1–C7) (Marketing Cloud Intelligence Accredited Professional, Datorama Accredited Professional, Datorama AP dumps).

Still Missing On-Page: A Data Stream Types (Ads, Conversion, Generic, Media Buy) & Harmonization Center (Naming Conventions, Patterns, Data Classification) table.

Internal Links: /certifications/marketing-cloud-consultant -> /certifications/marketing-cloud-intelligence-ap -> Anchor: "Marketing Cloud Intelligence (Datorama) AP Historical Guide".

Cannibalisation: 301/308 redirect /marketing-cloud-intelligence-ap-exam-tips -> /certifications/marketing-cloud-intelligence-ap.

SERP Q&A: Q: What was the passing score for Marketing Cloud Intelligence (Datorama) Accredited Professional? / A: The Marketing Cloud Intelligence (formerly Datorama) Accredited Professional exam had 40 scored questions in 60 minutes with a 60% passing score ($150 USD). It officially retires on February 1, 2027.

#76. /certifications/marketing-cloud-personalization-ap (Live Page)

7-Cluster Viability: Top 10 ready (C1–C7) (Marketing Cloud Personalization Accredited Professional, Interaction Studio Accredited Professional, Interaction Studio AP dumps).

Still Missing On-Page: A Web SDK Sitemap (Content Zones, Page Types, Listeners) & Einstein Recipes (Ingredients, Exclusions, Boosters, Variations) vs. Einstein Decisions table.

Internal Links: /certifications/marketing-cloud-next-consultant -> /certifications/marketing-cloud-personalization-ap -> Anchor: "Marketing Cloud Personalization (Interaction Studio) AP Archive".

Cannibalisation: 301/308 redirect /marketing-cloud-personalization-ap-exam-tips -> /certifications/marketing-cloud-personalization-ap.

SERP Q&A: Q: When does the Marketing Cloud Personalization (Interaction Studio) Accredited Professional retire? / A: The Marketing Cloud Personalization Accredited Professional exam (50 questions, 75 minutes, 70% passing score) closed registration on July 24, 2026, ended testing on August 31, 2026, and retires on February 1, 2027.

#77. /certifications/media-cloud-ap (Live Page)

7-Cluster Viability: Top 10 ready (C1–C7) (Media Cloud Accredited Professional, Media Cloud AP dumps).

Still Missing On-Page: An Advertising Sales Management (ASM: Media Plan, Ad Placement, Ad Availability Check with Google Ad Manager / FreeWheel) & Subscriber Lifecycle Management (SLM) table.

Internal Links: /certifications/communications-cloud-ap -> /certifications/media-cloud-ap -> Anchor: "Media Cloud Accredited Professional Archive".

Cannibalisation: 301/308 redirect /media-cloud-ap-exam-tips -> /certifications/media-cloud-ap.

SERP Q&A: Q: What was the passing score and domain weighting for Media Cloud Accredited Professional? / A: The Salesforce Media Cloud Accredited Professional exam had 50 scored questions in 75 minutes with a 66% passing score, weighted at 53%, 27%, and 20% across its three domains. It retires on February 1, 2027.

#78. /certifications/net-zero-cloud-ap (Live Page)

7-Cluster Viability: Top 10 ready (C1–C7) (Net Zero Cloud Accredited Professional, Net Zero Cloud AP dumps).

Still Missing On-Page: A Scope 1 (Direct Stationary/Fleet Assets) vs. Scope 2 (Purchased Electricity: Location-Based vs. Market-Based) vs. Scope 3 (Value Chain / Procurement Spend-Based vs. Supplier-Specific) emissions calculation table.

Internal Links: /certifications/public-sector-solutions-ap -> /certifications/net-zero-cloud-ap -> Anchor: "Net Zero Cloud Accredited Professional Historical Guide".

Cannibalisation: 301/308 redirect /net-zero-cloud-ap-exam-tips -> /certifications/net-zero-cloud-ap.

SERP Q&A: Q: How many questions were on the Salesforce Net Zero Cloud Accredited Professional exam? / A: The Net Zero Cloud Accredited Professional exam consisted of 55 scored questions in 75 minutes with a 61% passing score, weighted at 45%, 31%, and 24%. It officially retires on February 1, 2027.

#79. /certifications/order-management-admin-ap (Live Page)

7-Cluster Viability: Top 10 ready (C1–C7) (Order Management Administrator Accredited Professional, Order Management Admin AP dumps).

Still Missing On-Page: A Managed vs. Unmanaged OrderSummary Lifecycle & FulfillmentOrder -> Invoice / CreditMemo (EnsureFundsAsync vs. EnsureRefundsAsync) table.

Internal Links: /certifications/b2b-commerce-admin-ap & /certifications/order-management-developer-ap -> /certifications/order-management-admin-ap -> Anchor: "Order Management Administrator Accredited Professional Guide".

Cannibalisation: 301/308 redirect /order-management-admin-ap-exam-tips -> /certifications/order-management-admin-ap.

SERP Q&A: Q: When does the Salesforce Order Management Administrator Accredited Professional retire? / A: Registration for Order Management Administrator Accredited Professional (50 questions, 75 minutes, 67% passing score) closed July 24, 2026, final testing ended August 31, 2026, and the credential retires on February 1, 2027.

#80. /certifications/order-management-developer-ap (Live Page)

7-Cluster Viability: Top 10 ready (C1–C7) (Order Management Developer Accredited Professional, Order Management Developer AP dumps).

Still Missing On-Page: A ConnectApi.OrderSummaryCreation & ConnectApi.FulfillmentOrder vs. Omnichannel Inventory (OCI Reservation, Release, Fulfill, Transfer APIs) code reference table.

Internal Links: /certifications/b2b-commerce-developer-ap & /certifications/order-management-admin-ap -> /certifications/order-management-developer-ap -> Anchor: "Order Management Developer Accredited Professional Guide".

Cannibalisation: 301/308 redirect /order-management-developer-ap-exam-tips -> /certifications/order-management-developer-ap.

SERP Q&A: Q: What was the passing score for Order Management Developer Accredited Professional? / A: The Salesforce Order Management Developer Accredited Professional exam had 50 scored questions in 75 minutes with a 70% passing score ($150 USD). It officially retires on February 1, 2027.

#81. /certifications/process-automation-ap (Live Page)

7-Cluster Viability: Top 10 ready (C1–C7) (Process Automation Accredited Professional, Process Automation AP dumps).

Still Missing On-Page: A Flow Orchestration (Autolaunched Orchestration vs. Record-Triggered Orchestration, Stages, Interactive Steps, Background Steps, Mulesoft / External Services HTTP Callouts) reference table.

Internal Links: /certifications/app-builder & /certifications/administrator -> /certifications/process-automation-ap -> Anchor: "Process Automation Accredited Professional Historical Guide".

Cannibalisation: 301/308 redirect /process-automation-ap-exam-tips -> /certifications/process-automation-ap.

SERP Q&A: Q: When does the Salesforce Process Automation Accredited Professional credential retire? / A: Registration for Process Automation Accredited Professional (60 questions, 90 minutes, 68% passing score) closed July 24, 2026, final testing ended August 31, 2026, and the credential retires on February 1, 2027. Active candidates should earn Platform App Builder (Plat-Admn-202).

#82. /certifications/public-sector-solutions-ap (Live Page)

7-Cluster Viability: Top 10 ready (C1–C7) (Agentforce 360 for Public Sector Professional, Public Sector Solutions Accredited Professional, Public Sector Solutions AP dumps).

Still Missing On-Page: Update the Homepage card for Salesforce Accredited Agentforce 360 for Public Sector Professional (which still says 60 questions, pass mark not published, 90 min on / instead of 50 questions, 70% to pass, 75 min!), and add a Clear Comparison Table Between Public Sector Solutions Consultant (PubSec-Con-201) ($200, 60 Qs, 105 min, 72% pass) and Public Sector Solutions AP ($150, 50 Qs, 75 min, 70% pass).

Internal Links: /certifications/public-sector-solutions-consultant -> /certifications/public-sector-solutions-ap -> Anchor: "Salesforce Accredited Agentforce 360 for Public Sector Professional (AP) Guide".

Cannibalisation: 301/308 redirect /public-sector-solutions-ap-exam-tips -> /certifications/public-sector-solutions-ap.

SERP Q&A: Q: What is the difference between Public Sector Solutions Consultant (PubSec-Con-201) and Public Sector Solutions Accredited Professional? / A: Public Sector Solutions Consultant (PubSec-Con-201) is a mainline $200 USD Salesforce Consultant certification (60 questions, 105 minutes, 72% passing score) open to all candidates. Agentforce 360 for Public Sector Accredited Professional is a $150 USD partner-focused accreditation (50 questions, 75 minutes, 70% passing score).

Track 8: Sales (#83), Track 9: Designer (#84–#85), Track 10: Tableau (#86–#91) & Track 11: Claude (#92–#95)
#83. /certifications/sales-foundations (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (Agentforce Sales Foundations, Sales-101, Salesforce Sales Representative, Sales-101 dumps, Sales Foundations dumps).

Still Missing On-Page: A BANT / MEDDPICC Discovery Qualification & Pipeline Stage Hygiene vs. Forecast Category (Pipeline, Best Case, Commit, Closed) reference table.

Internal Links: /certifications/sales-cloud -> /certifications/sales-foundations -> Anchor: "Agentforce Sales Foundations (Sales-101) Study Guide".

Cannibalisation: 301/308 redirect /sales-foundations-exam-tips on /html-sitemap -> /certifications/sales-foundations.

SERP Q&A: Q: What is the new name and exam code for the Salesforce Certified Sales Representative exam? / A: Salesforce renamed the Certified Sales Representative credential to Agentforce Sales Foundations (exam code Sales-101). It has 40 scored multiple-choice questions, a 105-minute time limit, a 70% passing score (28 of 40 correct), and a $75 USD fee with free retakes.

#84. /certifications/strategy-designer (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (Platform Strategy Designer, Strategy Designer, Plat-UX-102, Plat-UX-102 dumps, Strategy Designer dumps).

Still Missing On-Page: A Double Diamond Design Process (Discover, Define, Develop, Deliver), Consequence Scanning, Jobs-to-be-Done (JTBD), and Service Blueprinting (Frontstage vs. Backstage vs. Line of Visibility) table.

Internal Links: /ux-designer-vs-strategy-designer & /business-analyst-vs-strategy-designer -> /certifications/strategy-designer -> Anchor: "Salesforce Platform Strategy Designer (Plat-UX-102) Study Guide".

Cannibalisation: 301/308 redirect /strategy-designer-study-guide and /strategy-designer-exam-tips on /html-sitemap -> /certifications/strategy-designer.

SERP Q&A: Q: What is the passing score and exam code for Salesforce Platform Strategy Designer? / A: The Salesforce Platform Strategy Designer exam (code Plat-UX-102) has 60 scored questions, a 105-minute time limit, and a 70% passing score (42 of 60 correct). Value Design (32%) and Intangible Deliverables (26%) make up 58% of the exam.

#85. /certifications/ux-designer (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (Platform User Experience Designer, UX Designer, Plat-UX-101, Plat-UX-101 dumps, UX Designer dumps).

Still Missing On-Page: A WCAG 2.1 AA Accessibility Contrast Ratios (4.5:1 normal text, 3:1 large text/UI components) & SLDS Styling Hooks (--slds-c-*) vs. Global Design Tokens (--lwc-*) reference table.

Internal Links: /ux-designer-vs-strategy-designer -> /certifications/ux-designer -> Anchor: "Salesforce Platform User Experience (UX) Designer (Plat-UX-101) Study Guide".

Cannibalisation: 301/308 redirect /ux-designer-study-guide and /ux-designer-exam-tips on /html-sitemap -> /certifications/ux-designer.

SERP Q&A: Q: What is the passing score for Salesforce Platform User Experience (UX) Designer (Plat-UX-101)? / A: The Salesforce Platform User Experience Designer (Plat-UX-101) exam has 60 scored questions in 105 minutes and requires a 65% passing score (39 of 60 correct). Declarative Design (27%) and Salesforce Lightning Design System (21%) account for 48% of the exam.

#86. /certifications/tableau-architect (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (Tableau Architect, Analytics-Arch-201, Tableau Architect dumps, Analytics-Arch-201 dumps).

Still Missing On-Page: A Tableau Server Process Topology (Gateway, Application Server / VizPortal, VizQL Server, Backgrounder, Data Engine / Hyper, Data Server, File Store, Coordination Service / ZooKeeper) high-availability node-placement table.

Internal Links: /certifications/tableau-server-administrator & /certifications/tableau-consultant -> /certifications/tableau-architect -> Anchor: "Tableau Architect (Analytics-Arch-201) Study Guide".

Cannibalisation: 301/308 redirect /tableau-crm-einstein-analytics-architect-exam-tips on /html-sitemap -> /certifications/tableau-architect.

SERP Q&A: Q: What is the passing score and exam fee for Tableau Architect (Analytics-Arch-201)? / A: The Salesforce Tableau Architect (Analytics-Arch-201) exam has 54 scored questions (plus 5 unscored questions), a 105-minute time limit, a 63% passing score, and a $400 USD registration fee ($200 USD retake).

#87. /certifications/tableau-consultant (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (Tableau Certified Consultant, Tableau Consultant, Analytics-Con-201, Tableau Consultant dumps).

Still Missing On-Page: Update the Homepage card for Tableau Certified Consultant (Questions 60 on / -> 54 scored (+5 unscored)) and add a Tableau Order of Operations (Extract Filters -> Data Source Filters -> Context Filters -> FIXED LOD -> Dimension Filters -> INCLUDE/EXCLUDE LOD -> Measure Filters -> Table Calc Filters) table.

Internal Links: /certifications/tableau-next-consultant & /certifications/tableau-data-analyst -> /certifications/tableau-consultant -> Anchor: "Tableau Certified Consultant (Analytics-Con-201) Study Guide".

Cannibalisation: None on -study-guide, but ensure /certifications/role/tableau links cleanly with Analytics-Con-201.

SERP Q&A: Q: What are the domain weights for the Tableau Certified Consultant (Analytics-Con-201) exam? / A: The Tableau Certified Consultant (Analytics-Con-201) exam covers Design and Troubleshoot Calculations and Workbooks (40%), Evaluate Current State (22%), Plan and Prepare Data Connections (22%), and Establish Governance and Support Published Content (16%), with a 63% passing score.

#88. /certifications/tableau-next-consultant (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (Tableau Next Consultant, Analytics-Con-202, Tableau Next Consultant dumps, Analytics-Con-202 dumps).

Still Missing On-Page: Add Tableau Next Consultant to the Tableau section of /html-sitemap (currently missing from the 5-item Tableau Hub list on /html-sitemap!), and add a Tableau Semantics (Composable Semantic Layer on Data 360 DMOs) & Tableau Pulse vs. Classic Tableau Published Data Sources table.

Internal Links: /certifications/data-360-consultant & /certifications/tableau-consultant -> /certifications/tableau-next-consultant -> Anchor: "Tableau Next Consultant (Analytics-Con-202) Study Guide".

Cannibalisation: None (clean greenfield slug).

SERP Q&A: Q: What is the difference between Tableau Next Consultant (Analytics-Con-202) and Tableau Consultant (Analytics-Con-201)? / A: Tableau Next Consultant (Analytics-Con-202, 60 questions, 65% passing score) validates the AI-powered Tableau Next platform built natively on Salesforce Data 360, Tableau Semantics, and Agentforce. Tableau Consultant (Analytics-Con-201, 63% passing score) focuses on Tableau Desktop, Tableau Server, and Tableau Cloud.

#89. /certifications/tableau-data-analyst (Live Page)

7-Cluster Viability: Can reach Top 10 now: C1–C7 (Tableau Data Analyst, Analytics-DA-201, Tableau Data Analyst dumps, Analytics-DA-201 dumps).

Still Missing On-Page: Fix the Homepage card (Questions 60 -> 54 scored) and fix /certifications/role/tableau FAQ #2 (which still falsely says 60 questions, 120 minutes, 75% passing score instead of 54 scored questions, 105 minutes, 65% passing score!), and add a Relationships (Noodles) vs. Joins vs. Data Blending vs. Unions comparison table.

Internal Links: /certifications/tableau-desktop-foundations -> /certifications/tableau-data-analyst -> Anchor: "Tableau Certified Data Analyst (Analytics-DA-201) Study Guide".

Cannibalisation: 301/308 redirect /tableau-data-analyst-study-guide and /tableau-data-analyst-exam-tips on /html-sitemap -> /certifications/tableau-data-analyst.

SERP Q&A: Q: Did the Tableau Data Analyst (Analytics-DA-201) exam remove the hands-on lab section? / A: Yes. Under the Trailhead Academy and Pearson VUE format, Tableau Data Analyst (Analytics-DA-201) is a 105-minute exam with 54 scored multiple-choice and multiple-select questions (plus 5 unscored questions) and a 65% passing score ($200 USD), with no live VM hands-on lab.

#90. /certifications/tableau-desktop-foundations (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (Tableau Desktop Foundations, Analytics-101, Tableau Desktop Specialist, Analytics-101 dumps, Tableau Desktop Specialist dumps).

Still Missing On-Page: A Blue (Discrete) vs. Green (Continuous) Pills & .twb vs. .twbx vs. .tds vs. .tdsx vs. .hyper file-extension comparison table.

Internal Links: /certifications/role/tableau -> Make Tableau Desktop Foundations (Analytics-101) the #1 "take first" card on the Tableau Hub (replacing Tableau Certified Architect!).

Cannibalisation: 301/308 redirect /tableau-desktop-foundations-exam-tips on /html-sitemap -> /certifications/tableau-desktop-foundations.

SERP Q&A: Q: What is the passing score for Tableau Desktop Foundations (Analytics-101)? / A: The Salesforce Tableau Desktop Foundations (Analytics-101, formerly Tableau Desktop Specialist) exam has 40 scored questions (plus 5 unscored questions) in 70 minutes, a 48% passing score, and a $75 USD registration fee.

#91. /certifications/tableau-server-administrator (Live Page)

7-Cluster Viability: Can reach Top 10 now: All 7 clusters (C1–C7) (Tableau Server Administrator, Analytics-SA-201, Tableau Server Certified Associate, Analytics-SA-201 dumps).

Still Missing On-Page: Update the Homepage card for Tableau Server Administrator (which still says 55 questions, pass mark not published on / instead of 50 scored (+5 unscored), 64% to pass!), and add a tsm CLI Commands Reference Table (tsm maintenance backup, tsm maintenance restore, tsm maintenance ziplogs, tsm topology set-process, tsm security VizQL-ssl).

Internal Links: /certifications/tableau-architect -> /certifications/tableau-server-administrator -> Anchor: "Tableau Server Administrator (Analytics-SA-201) Study Guide".

Cannibalisation: 301/308 redirect /tableau-server-administrator-exam-tips on /html-sitemap -> /certifications/tableau-server-administrator.

SERP Q&A: Q: What is the passing score and domain weighting for Tableau Server Administrator (Analytics-SA-201)? / A: The Tableau Server Administrator (Analytics-SA-201) exam has 50 scored questions (plus 5 unscored), a 90-minute time limit, and a 64% passing score ($200 USD). It covers Administration & Maintenance (36%), Security & Governance (26%), Server Prep & Configuration (20%), Monitoring (12%), and Migration/Upgrade (6%).

#92. /certifications/claude-certified-associate (Live Page)

7-Cluster Viability: Top 10 ready (C1–C7) (Claude Certified Associate, Claude Associate Foundations, Anthropic Claude certification).

Still Missing On-Page: A Claude 4 / 4.5 / 4.6 Model Family Comparison Table (Claude Haiku vs. Claude Sonnet vs. Claude Opus: context window, extended thinking, latency, and enterprise use cases).

Internal Links: /certifications/role/claude & /certifications/claude-certified-developer -> /certifications/claude-certified-associate -> Anchor: "Claude Certified Associate – Foundations Study Guide".

Cannibalisation: None (2 Claude Foundations alias redirects already active).

SERP Q&A: Q: What topics are covered in the Claude Certified Associate – Foundations study guide? / A: The Claude Certified Associate – Foundations guide covers the Claude model family, Constitutional AI safety principles, prompt structuring with XML tags, Projects and Artifacts workflows, and enterprise data privacy controls.

#93. /certifications/claude-certified-developer (Live Page)

7-Cluster Viability: Top 10 ready (C1–C7) (Claude Certified Developer, Claude Developer certification, Anthropic API certification).

Still Missing On-Page: A Messages API Prompt Caching (cache_control: {"type": "ephemeral"} breakpoint order: tools -> system -> messages) & Tool Use (stop_reason: "tool_use", tool_result) JSON code snippet.

Internal Links: /certifications/claude-certified-associate & /certifications/claude-certified-architect-foundations -> /certifications/claude-certified-developer -> Anchor: "Claude Certified Developer – Foundations Study Guide".

Cannibalisation: None.

SERP Q&A: Q: How does Prompt Caching work in the Anthropic Claude Messages API? / A: Anthropic Prompt Caching caches prefixes in the exact hierarchy of tools, system, and messages using cache_control breakpoints, reducing input token latency and read costs by up to 90% for repeated context.

#94. /certifications/claude-certified-architect-foundations (Live Page)

7-Cluster Viability: Top 10 ready (C1–C7) (Claude Certified Architect – Foundations, Claude Architect Foundations).

Still Missing On-Page: A Model Context Protocol (MCP) Architecture Table (MCP Host vs. MCP Client vs. MCP Server: Resources, Prompts, Tools, and stdio vs. Streamable HTTP/SSE transport).

Internal Links: /certifications/agentforce-specialist (from its MCP section!) -> /certifications/claude-certified-architect-foundations -> Anchor: "Claude Certified Architect – Foundations (Model Context Protocol Guide)".

Cannibalisation: None.

SERP Q&A: Q: What are the three core primitives of a Model Context Protocol (MCP) server? / A: An MCP server exposes three core primitives to AI clients: Resources (read-only contextual data), Prompts (reusable prompt templates and workflows), and Tools (executable functions the model can invoke with user approval).

#95. /certifications/claude-certified-architect-professional (Live Page)

7-Cluster Viability: Top 10 ready (C1–C7) (Claude Certified Architect – Professional, Claude Enterprise Solutions Architect).

Still Missing On-Page: A Multi-Cloud Claude Deployment Comparison Table (Anthropic 1P API vs. Amazon Bedrock vs. Google Cloud Vertex AI: VPC PrivateLink/PSC, IAM authentication, Provisioned Throughput, and Zero Data Retention).

Internal Links: /certifications/claude-certified-architect-foundations & /certifications/integration-architect -> /certifications/claude-certified-architect-professional -> Anchor: "Claude Certified Architect – Professional Study Guide".

Cannibalisation: None.

SERP Q&A: Q: How do enterprise teams deploy Anthropic Claude across AWS and Google Cloud? / A: Enterprises deploy Claude via the direct Anthropic API, Amazon Bedrock (using AWS IAM and PrivateLink), or Google Cloud Vertex AI (using GCP IAM and Private Service Connect), combining prompt caching, batch APIs, and zero-data-retention guardrails.

Part 2: The 20 Highest-Impact Changes Across the Whole Site (Ranked by Expected Ranking Lift)

[#1 — Highest Lift] 301/308 Redirect All Remaining ~43 Standalone *-study-guide and ~85 Standalone *-exam-tips Pages to /certifications/[slug]:

Pages like /pd1-study-guide and /service-cloud-consultant-study-guide are still returning 200 OK with outdated exam stats (110 min on PD1, 65% pass on Service Cloud) and verbatim duplicate text that was already merged into /certifications/[slug]. Redirecting all remaining -study-guide and -exam-tips routes eliminates the 76 "Crawled - currently not indexed" and duplicate-canonical pages in GSC overnight.

[#2] Repoint All Popular Certifications & Cert Paths & Resources Links in src/components/Footer.tsx Directly to /certifications/[slug]:

Right now, your sitewide Footer sends internal PageRank on every page to /pd1-study-guide, /app-builder-study-guide, /service-cloud-consultant-study-guide, and /adm-201-exam-tips instead of /certifications/developer-1, /certifications/app-builder, /certifications/service-cloud, and /certifications/administrator.

[#3] Clean Up /html-sitemap So It Only Links to Canonical URLs (Zero Redirecting or Cannibalizing Slugs):

Remove the ~130 legacy -exam-tips and -study-guide links from /html-sitemap and link directly to the 95 /certifications/[slug] pages, 10 Role Hubs, Comparison pages, and Calculator/Benchmark tools.

[#4] Remove Stitched Legacy Duplicate Weight Tables & Contradictory FAQs Still Sitting in the Lower Half of sales-cloud, developer-1, app-builder, and data-360-consultant:

On those flagship pages, the bottom "stitched" block still renders a second, outdated weightage table (e.g., 30/25/23/15/7% on developer-1; 25/22/15/13/12/8/5% and 65% pass FAQ on sales-cloud; 28/25/20/17/10% and Platform Admin required FAQ on data-360-consultant). Deleting those duplicate bottom tables removes the last on-page self-contradictions.

[#5] Remove Duplicate "Practice Test" Cards and Legacy Guide Links from /certifications/role/administrator and /certifications/role/marketing:

Delete the 9th card on /certifications/role/administrator (Salesforce Certified Platform Administrator Practice Test) and the 7th card on /certifications/role/marketing (Marketing Cloud Engagement Specialist Practice Test), and 301/308 redirect /salesforce-admin-certification-201-guide -> /certifications/administrator and /pardot-certification-guide -> /certifications/pardot-specialist.

[#6] Fix the 4 Factual Errors in the Role Hub FAQs (architect, consultant, tableau, associate):

Fix /certifications/role/architect FAQ (true 4 certs for Application Architect and System Architect; change ARC-801 to Plat-Arch-201), /certifications/role/consultant FAQ (73% for Sales Cloud, 78% for Service Cloud instead of 65%), /certifications/role/tableau FAQ (54 scored Qs, 105 min, 65% pass for Data Analyst instead of 60 Qs, 120 min, 75%), and /certifications/role/associate FAQ (stop pitching retired AI Associate as the active first exam; lead with Platform Foundations Plat-101).

[#7] Fix the Remaining 6 Homepage Card Discrepancies on src/app/page.tsx:

Update Homepage cards for Health Cloud AP (Not published -> 63%), Manufacturing Cloud AP (60 Qs, Not published, 90 min -> 50 Qs, 68%, 75 min), Public Sector Solutions AP (60 Qs, Not published, 90 min -> 50 Qs, 70%, 75 min), Public Sector Solutions Consultant (Not published -> 72%), CPQ and Billing AP (60 Qs, Not published, 90 min -> 35 Qs, 74%, 60 min), and Tableau Server Administrator (55 Qs, Not published -> 50 Qs, 64%).

[#8] Add Jump-Link Table-of-Contents Anchor IDs (#exam-weightage, #practice-questions, #study-plan, #dumps-vs-practice, #faq) on All 95 Pages:

Enables Google Search Sitelinks beneath your main result on SERPs (expanding your visual SERP footprint by 2 lines and boosting CTR by 1.5–2.5 percentage points).

[#9] Embed a Pre-Populated Mini Section-Score Calculator Widget on the Top 20 High-Volume Certification Pages:

Let candidates input their section percentages right on /certifications/[slug] (linking to /tools/score-calculator), increasing dwell time and interactive engagement signals.

[#10] Add Direct Contextual Links from All 27 -vs- Comparison Pages Using Official Code + Bare Name Anchor Text:

Update every link inside /adm-201-vs-app-builder, /pd1-vs-pd2, /sales-cloud-vs-service-cloud, etc. to point directly to /certifications/[slug] (never to -study-guide or -exam-tips).

[#11] Standardize E-E-A-T Author Credentials & Strip km.krishnamohan25@gmail.com on All Role Hubs & Comparison Pages:

Fix /certifications/role/designer (5x Salesforce Certified -> 14x Salesforce Certified) and remove the raw km.krishnamohan25@gmail.com email address from /certifications/role/*, /html-sitemap, and -vs- pages.

[#12] Fix the "Which Certification Should You Take First?" Decision Cards on /certifications/role/tableau, /certifications/role/accredited-professional, and /certifications/role/designer:

Replace the copy-pasted "Most candidates in this role" labels with persona-specific labels, put Tableau Desktop Foundations first on the Tableau Hub, and replace the retiring Advanced Field Service AP card on the AP Hub with Financial Services Cloud AP and Health Cloud AP.

[#13] Add Featured-Snippet <45-Word Direct Answer Paragraphs Immediately Below Every FAQ Question:

Format the first 1–2 sentences of every FAQ answer to state the exact number (questions, minutes, passing score %, correct answers needed, $USD fee) so Google extracts it for Featured Snippets and People Also Ask boxes.

[#14] Add Agentforce Life Sciences Consultant (Als-Con-201) to /certifications/role/consultant and Tableau Next Consultant (Analytics-Con-202) to /html-sitemap:

Closes the remaining orphan-link gaps on your two newest high-growth certifications.

[#15] Add the 4 Checkout Interface Names (CartPriceCalculations, CartShippingCharges, CartInventoryValidation, CartTaxCalculations) and AP-201/AP-202 Codes to b2b-commerce-admin-ap and b2b-commerce-developer-ap:

Directly overtakes CertEmpire (which already cites TrailblazePrep.com on its AP-202 page!) for AP-201 and AP-202 queries.

[#16] Add the 6 Official Salesforce Integration Patterns Table to /certifications/integration-architect:

Captures the #1 searched technical table for Plat-Arch-204.

[#17] Add the 4-Type Data Mapper Table (Extract, Turbo Extract, Transform, Load) to /certifications/omnistudio-developer and /certifications/omnistudio-consultant:

Captures the Spring/Summer '26 Data Mappers terminology shift that competitors haven't updated yet.

[#18] Add the Work Rules vs. Service Objectives Table to /certifications/field-service:

Captures the highest-weighted Managing Scheduling and Optimization (28%) topic on FS-Con-101.

[#19] Prune Redirected URLs from sitemap.xml and Keep <lastmod> Honest:

Ensure sitemap.xml includes only 200 OK canonical URLs (excluding all redirected -study-guide and -exam-tips paths) so Googlebot spends 100% of crawl budget on canonical pages.

[#20] Execute Targeted Off-Page Link Acquisition Using Your CC BY 4.0 Benchmark Report & Score Calculator:

Publish 5 technical breakdowns on Dev.to, Medium, LinkedIn Articles, and GitHub (Salesforce 2025–2026 Exam Code Rename Table: ADM-201 to Plat-Admn-201, 2027 Retirement Survival Guide for 24 Certs, How to Calculate Your Exact Section Score) linking directly to your top 10 /certifications/[slug] pages.

Part 3: The 10 Pages Most Likely to Reach Top 10 Within 90 Days (and Exactly What Each Needs)
Rank	Certification Page	Current Readiness & Why It Will Hit Top 10 Fastest	Exact Remaining Action Needed to Lock In Top 10
1	/certifications/agentforce-specialist (AI-201)	Already 9.5/10 with 20 updated SSR questions, AI-201, Agent Force Specialist, Agent Script, MCP/A2A, and Einstein Trust Layer masking nuances.	301/308 redirect /agentforce-specialist-study-guide and /agentforce-specialist-exam-tips -> /certifications/agentforce-specialist; add Prompt Template types table.
2	/certifications/data-360-consultant (Data-Con-101)	First-mover advantage on the Data Cloud -> Data 360 Consultant (Data-Con-101) rename; competitors still only target Data Cloud Consultant.	Remove the stitched bottom 5-domain (28/25/20/17/10%) table and Platform Admin required FAQ; redirect /data-cloud-consultant-study-guide and -exam-tips -> /certifications/data-360-consultant; update Footer link.
3	/certifications/service-cloud (Service-Con-201 / CRT-261)	Clean 8-domain outline (78% pass) and 20 SSR questions targeting both Agentforce Service Consultant and Service Cloud Consultant.	Critical: 301/308 redirect /service-cloud-consultant-study-guide (which is live with a wrong 65% pass mark!) and -exam-tips -> /certifications/service-cloud; repoint Footer and Consultant Hub links.
4	/certifications/sales-cloud (Sales-Con-201 / CRT-251)	Strong coverage of Agentforce Sales Consultant, Sales-Con-201, and CRT-251 with 73% pass mark.	Delete the two stitched legacy weight tables (47% and 65% pass FAQ) at the bottom of /certifications/sales-cloud; 301/308 redirect /sales-cloud-consultant-study-guide and -exam-tips -> /certifications/sales-cloud.
5	/certifications/omnistudio-consultant (Plat-Con-201)	One of the only guides on the web updated for the 6-domain Data Mappers (18/17/17/17/16/15%) outline.	301/308 redirect /omnistudio-consultant-study-guide and -exam-tips -> /certifications/omnistudio-consultant; add the Best-Fit Solution decision table.
6	/certifications/field-service (FS-Con-101)	Targets the renamed Agentforce Field Service and Operations Consultant (FS-Con-101) 8-domain blueprint (63% pass).	301/308 redirect /field-service-consultant-study-guide and -exam-tips -> /certifications/field-service; add the Work Rules vs. Service Objectives table.
7	/certifications/public-sector-solutions-consultant (PubSec-Con-201)	Almost zero SERP competition for PubSec-Con-201 with verified 72% pass score and 36/32/32% weights.	Update Homepage card from Not published to 72%; add the PubSec-Con-201 vs. Public Sector Solutions AP comparison table.
8	/certifications/marketing-cloud-next-consultant (MC-Con-201)	First comprehensive free 15+ SSR question guide for MC-Con-201 (72% pass, 30/25/13/13/11/8%).	Add the Marketing Cloud Next (Core/Data 360) vs. Classic Marketing Cloud Engagement comparison table and link from /certifications/pardot-consultant.
9	/certifications/tableau-next-consultant (Analytics-Con-202)	Virtually zero competing study guides for Analytics-Con-202 (65% pass, 25/20/20/20/15%).	Add link to /html-sitemap under Tableau Hub and add the Tableau Semantics + Pulse comparison table.
10	/certifications/b2b-commerce-developer-ap (AP-202)	Already cited by third-party prep sites on SERP page 1 for AP-202.	Add the exact code AP-202 and the 4 Checkout Extension interface names (CartPriceCalculations, CartShippingCharges, CartInventoryValidation, CartTaxCalculations) + 301/308 redirect /b2b-commerce-developer-ap-exam-tips.