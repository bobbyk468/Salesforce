// Salary data verified April 2026 — US averages (Glassdoor, LinkedIn, Salesforce Talent Alliance)
// Difficulty: 1 = Very Easy, 2 = Easy, 3 = Moderate, 4 = Hard, 5 = Expert

export interface CertInsight {
  difficulty: 1 | 2 | 3 | 4 | 5
  difficultyNote: string
  salaryRange: string
  worthIt: string
}

export const CERT_INSIGHTS: Record<string, CertInsight> = {
  'adm-201': {
    difficulty: 3,
    difficultyNote: 'Scenario-heavy but zero coding. 4–6 weeks of hands-on practice in a Developer org is the average prep time.',
    salaryRange: '$78,000–$105,000',
    worthIt: 'The most widely required Salesforce credential. Opens admin, business analyst, and junior consultant roles. Worth taking before anything else.',
  },
  'advanced-administrator': {
    difficulty: 3,
    difficultyNote: 'Builds directly on ADM-201. Tests deeper topics — territory management, advanced automation, Salesforce Connect. Study gaps are easy to identify.',
    salaryRange: '$90,000–$120,000',
    worthIt: 'A strong complement to ADM-201 for experienced admins. Useful for senior admin roles but less valued by employers than a consultant cert.',
  },
  'agentforce-specialist': {
    difficulty: 2,
    difficultyNote: 'Newest exam on this list. Low competition, conceptual and configuration-focused. Easier while the ecosystem is still catching up.',
    salaryRange: '$100,000–$140,000',
    worthIt: 'Absolutely — Agentforce and AI skills are the highest-demand Salesforce capability in 2026. Take this now while it is still a differentiator.',
  },
  'ai-associate': {
    difficulty: 1,
    difficultyNote: 'The easiest Salesforce certification. Conceptual AI literacy only — no hands-on configuration required. Most candidates pass in under 2 weeks.',
    salaryRange: '$80,000–$120,000',
    worthIt: 'A fast credential to earn. Best used as a stepping stone into Agentforce Specialist or AI Specialist — not a strong standalone salary driver.',
  },
  'app-builder': {
    difficulty: 2,
    difficultyNote: 'Declarative-only exam. Heavy overlap with ADM-201 content. No coding required — the natural next step after Admin.',
    salaryRange: '$85,000–$115,000',
    worthIt: 'A logical second cert after Admin. Opens architect career paths and proves declarative depth. Quick win relative to effort.',
  },
  'application-architect': {
    difficulty: 4,
    difficultyNote: 'One of four domain exams required for System Architect. Tests data modeling, integration patterns, and security architecture at an enterprise level.',
    salaryRange: '$125,000–$165,000',
    worthIt: 'Strong salary signal for senior solution architects. Required on the CTA path. Not worth pursuing unless aiming for architect-level roles.',
  },
  'b2b-solution-architect': {
    difficulty: 4,
    difficultyNote: 'Covers multi-cloud architecture across Sales, Service, Experience, and Revenue Cloud. Broad scope — real multi-org experience helps significantly.',
    salaryRange: '$130,000–$175,000',
    worthIt: 'High-value cert for architects working in enterprise B2B environments. Salary premium is real for candidates with matching experience.',
  },
  'b2c-commerce-architect': {
    difficulty: 4,
    difficultyNote: 'Niche B2C Commerce (Salesforce Commerce Cloud) architecture exam. Requires hands-on SFCC platform experience — hard to fake.',
    salaryRange: '$120,000–$160,000',
    worthIt: 'Valuable in e-commerce-focused organizations. Limited in scope — only worth pursuing if Commerce Cloud is your core platform.',
  },
  'b2c-commerce-developer': {
    difficulty: 4,
    difficultyNote: 'SFCC ISML, controllers, pipelines, and cartridge architecture. Very platform-specific — study resources outside official docs are limited.',
    salaryRange: '$105,000–$145,000',
    worthIt: 'Solid for developers in Commerce Cloud shops. Niche market but high demand within it. Pairs well with a general developer cert.',
  },
  'b2c-solution-architect': {
    difficulty: 4,
    difficultyNote: 'Multi-cloud architecture across B2C use cases — Commerce, Marketing, Service. Scenario-heavy with real enterprise architecture depth required.',
    salaryRange: '$130,000–$170,000',
    worthIt: 'High earning potential in organizations running the full Salesforce B2C stack. Niche but lucrative.',
  },
  'business-analyst': {
    difficulty: 3,
    difficultyNote: 'Requirements gathering, user stories, process mapping, and stakeholder management. Good for non-technical Salesforce professionals building toward consulting.',
    salaryRange: '$80,000–$110,000',
    worthIt: 'Underrated cert for career switchers and BA-to-consultant paths. Not a top salary driver on its own but pairs well with a functional cert.',
  },
  'cpq-administrator': {
    difficulty: 4,
    difficultyNote: 'CPQ is a niche and complex product. Product rules, pricing rules, quote templates — the exam tests configuration depth that takes months to build.',
    salaryRange: '$88,000–$125,000',
    worthIt: 'High demand and low supply of CPQ-certified professionals. Salary premium is real if you are already working with CPQ in a client environment.',
  },
  'crm-analytics': {
    difficulty: 3,
    difficultyNote: 'Tableau CRM / Einstein Analytics platform. Dashboard design, SAQL queries, and dataflow configuration. Easier with hands-on app experience.',
    salaryRange: '$90,000–$125,000',
    worthIt: 'Good add-on for analytics-focused admins and consultants. Standalone value is moderate — strongest when paired with a functional cert.',
  },
  'data-architect': {
    difficulty: 4,
    difficultyNote: 'One of the four CTA domain exams. Tests large-scale data modeling, data migration, big objects, and external data integration strategy.',
    salaryRange: '$120,000–$160,000',
    worthIt: 'Mandatory on the CTA path. Also valuable standalone for architects working on complex data migration or multi-org consolidation projects.',
  },
  'data-360-consultant': {
    difficulty: 4,
    difficultyNote: 'Fastest-growing Salesforce product — and the study materials are still catching up. Unified profiles, calculated insights, and activation targets require real platform time.',
    salaryRange: '$108,000–$150,000',
    worthIt: 'One of the most valuable certs to earn right now. Data Cloud expertise is scarce and in high demand across enterprise accounts.',
  },
  'dev-lifecycle-deployment-architect': {
    difficulty: 4,
    difficultyNote: 'One of the four CTA domain exams. Covers DevOps, source control, sandbox strategy, and release management at enterprise scale.',
    salaryRange: '$120,000–$158,000',
    worthIt: 'Essential for technical architects managing multi-team deployments. Required on CTA path. Also directly applicable to DevOps-focused roles.',
  },
  'education-cloud-consultant': {
    difficulty: 3,
    difficultyNote: 'Niche industry cloud with limited competition and a focused exam scope. Manageable for consultants already working in higher education.',
    salaryRange: '$85,000–$118,000',
    worthIt: 'Low competition makes this a strong differentiator for consultants specialising in education sector clients.',
  },
  'email-specialist': {
    difficulty: 2,
    difficultyNote: 'Marketing Cloud Email Studio focused. More manageable than the full Marketing Cloud Consultant exam. Good entry point into the Marketing Cloud stack.',
    salaryRange: '$72,000–$100,000',
    worthIt: 'Solid for email marketers moving into Salesforce roles. Lower salary ceiling than other certs but useful as an entry credential.',
  },
  'experience-cloud-consultant': {
    difficulty: 3,
    difficultyNote: 'Community setup, guest user sharing, LWR vs Aura templates, and portal licensing. Scenario-heavy with a focus on real-world portal design decisions.',
    salaryRange: '$88,000–$120,000',
    worthIt: 'Good mid-level cert. Demand is steady — most enterprise Salesforce implementations include a customer or partner portal.',
  },
  'field-service-consultant': {
    difficulty: 4,
    difficultyNote: 'Field Service Lightning is a complex scheduling product — skills-based routing, service territories, work types. Hands-on FSL experience is essential.',
    salaryRange: '$90,000–$128,000',
    worthIt: 'High value in field operations industries (utilities, telco, manufacturing). Limited supply of certified professionals keeps salaries competitive.',
  },
  'identity-access-management-architect': {
    difficulty: 4,
    difficultyNote: 'One of the four CTA domain exams. OAuth flows, SAML, SSO, connected apps, and certificate management. Security expertise is not optional here.',
    salaryRange: '$125,000–$165,000',
    worthIt: 'Required on the CTA path. Highly valuable in enterprises with complex identity requirements — financial services, healthcare, government.',
  },
  'integration-architect': {
    difficulty: 4,
    difficultyNote: 'Broad scope — APIs, middleware, event-driven architecture, security, governance. Real enterprise integration project experience is the best preparation.',
    salaryRange: '$120,000–$168,000',
    worthIt: 'Strong salary premium. Integration skills are perpetually in short supply. One of the better architect-tier investments outside the CTA path.',
  },
  'javascript-developer-i': {
    difficulty: 4,
    difficultyNote: 'LWC, JavaScript ES6+, Salesforce DX, testing with Jest. Requires genuine frontend development experience — not a study-your-way-through cert.',
    salaryRange: '$102,000–$142,000',
    worthIt: 'Good differentiation for Salesforce developers who work on complex UI. Pairs naturally with Platform Developer I.',
  },
  'marketing-cloud-consultant': {
    difficulty: 3,
    difficultyNote: 'Multi-channel campaign strategy, Marketing Cloud Connect, and subscriber data management. Less technical than developer exams but broad scope.',
    salaryRange: '$88,000–$125,000',
    worthIt: 'Strong in organisations running Marketing Cloud at scale. Solid consulting credential for the marketing automation space.',
  },
  'marketing-cloud-engagement-admin': {
    difficulty: 3,
    difficultyNote: 'Platform setup, Business Units, user permissions, and deliverability. Focused exam — achievable with 6–8 weeks of Marketing Cloud platform time.',
    salaryRange: '$82,000–$112,000',
    worthIt: 'Good entry-level Marketing Cloud credential. Solid if you are already working in an MC environment.',
  },
  'marketing-cloud-engagement-developer': {
    difficulty: 4,
    difficultyNote: 'AMPscript, SSJS, API integration, and custom content blocks. Requires real Marketing Cloud developer experience — documentation alone is not enough.',
    salaryRange: '$98,000–$135,000',
    worthIt: 'High demand in agencies and consulting firms that deliver Marketing Cloud implementations. Strong earning potential.',
  },
  'marketing-cloud-engagement-foundations': {
    difficulty: 2,
    difficultyNote: 'Introductory Marketing Cloud exam. Broad conceptual knowledge, minimal hands-on depth. Good first step into the Marketing Cloud certification stack.',
    salaryRange: '$72,000–$98,000',
    worthIt: 'Entry-level credential — useful as a foundation but rarely a standalone salary driver. Pair with Email Specialist or MC Consultant.',
  },
  'mulesoft-developer-i': {
    difficulty: 4,
    difficultyNote: 'Anypoint Platform, flows, connectors, DataWeave, and API management. Steep learning curve if you are new to integration middleware.',
    salaryRange: '$102,000–$142,000',
    worthIt: 'MuleSoft skills are highly portable — the platform is used across many Salesforce customers. Solid investment with a clear salary premium.',
  },
  'mulesoft-developer-ii': {
    difficulty: 4,
    difficultyNote: 'Advanced DataWeave, performance optimization, and complex integration patterns. Requires solid MuleSoft Developer I experience as a foundation.',
    salaryRange: '$115,000–$155,000',
    worthIt: 'Good progression from MuleSoft Developer I. Opens senior developer and technical lead roles in integration-focused teams.',
  },
  'mulesoft-integration-architect': {
    difficulty: 5,
    difficultyNote: 'Enterprise architecture patterns, API-led connectivity at scale, and governance strategy. One of the hardest MuleSoft exams — real architect experience required.',
    salaryRange: '$135,000–$180,000',
    worthIt: 'Top-tier MuleSoft credential. Commands a significant salary premium in the integration consulting market.',
  },
  'mulesoft-integration-foundations': {
    difficulty: 2,
    difficultyNote: 'Introductory MuleSoft exam. Conceptual API design and integration basics. Achievable without deep technical background.',
    salaryRange: '$75,000–$105,000',
    worthIt: 'Entry point into the MuleSoft stack. Useful for non-developers exploring integration concepts, but pair with Developer I for real career leverage.',
  },
  'mulesoft-platform-architect': {
    difficulty: 5,
    difficultyNote: 'Governance, API management strategy, and enterprise-scale MuleSoft deployments. Requires deep platform experience and real architecture decisions.',
    salaryRange: '$140,000–$185,000',
    worthIt: 'Elite MuleSoft credential. Limited talent supply and very high demand from large enterprise accounts.',
  },
  'nonprofit-cloud-consultant': {
    difficulty: 3,
    difficultyNote: 'Nonprofit Success Pack (NPSP) configuration, fundraising, and program management features. Manageable for consultants already working with nonprofit clients.',
    salaryRange: '$78,000–$110,000',
    worthIt: 'Low competition — most Salesforce pros avoid nonprofit-specific certs. Strong differentiator if your clients are nonprofits or NGOs.',
  },
  'nonprofit-success-pack-consultant': {
    difficulty: 3,
    difficultyNote: 'NPSP-focused — gifts, relationships, household accounts, and grant management. Niche but achievable for consultants with NPSP project experience.',
    salaryRange: '$78,000–$108,000',
    worthIt: 'Useful for consultants in the nonprofit vertical. Standalone salary impact is modest but differentiation value is high.',
  },
  'omnistudio-consultant': {
    difficulty: 3,
    difficultyNote: 'OmniStudio FlexCards, OmniScripts, Integration Procedures, and DataRaptors. Requires hands-on Vlocity/OmniStudio experience — learning by doing is essential.',
    salaryRange: '$90,000–$125,000',
    worthIt: 'Growing demand as Salesforce Industries Cloud expands. Good cert if you work on telco, utilities, insurance, or health implementations.',
  },
  'omnistudio-developer': {
    difficulty: 4,
    difficultyNote: 'Deeper technical OmniStudio — custom LWC integration, DataRaptor performance tuning, and complex OmniScript design. Requires real development experience.',
    salaryRange: '$100,000–$138,000',
    worthIt: 'Strong niche credential. OmniStudio Developer skills are scarce — high earning potential within Industries Cloud projects.',
  },
  'pardot-consultant': {
    difficulty: 3,
    difficultyNote: 'Marketing Cloud Account Engagement (formerly Pardot) implementation strategy, scoring, grading, and Salesforce connector. Manageable with real B2B marketing background.',
    salaryRange: '$85,000–$118,000',
    worthIt: 'Good for B2B marketing consultants. Solid demand in mid-market accounts using Account Engagement for lead nurturing.',
  },
  'pardot-specialist': {
    difficulty: 2,
    difficultyNote: 'Email marketing, automation rules, dynamic content, and basic engagement studio in Account Engagement. Good first cert for B2B marketers.',
    salaryRange: '$72,000–$100,000',
    worthIt: 'Entry-level B2B marketing credential. Pair with Pardot Consultant for a stronger consulting profile.',
  },
  'pd1': {
    difficulty: 4,
    difficultyNote: 'Apex, SOQL, LWC, governor limits, test classes. Requires real coding experience — this is not a study-your-way-through exam. Hands-on org work is essential.',
    salaryRange: '$98,000–$138,000',
    worthIt: 'Essential for any Salesforce developer career. Consistently high demand and a clear salary ceiling above non-certified developers.',
  },
  'pd2': {
    difficulty: 5,
    difficultyNote: 'The hardest Salesforce developer exam. Apex design patterns, performance optimization, advanced SOQL, complex LWC. Most candidates need 3–6 months after PD1.',
    salaryRange: '$115,000–$158,000',
    worthIt: 'Strong signal for senior developer roles. Fewer than 10% of Salesforce developers hold this — differentiation value is high.',
  },
  'platform-foundations': {
    difficulty: 1,
    difficultyNote: 'Entry-level conceptual exam covering Salesforce platform basics. The easiest credential in the Salesforce portfolio — minimal technical depth required.',
    salaryRange: '$65,000–$90,000',
    worthIt: 'Good for career switchers starting from zero. Salary impact is low on its own — treat it as a first step toward Admin or other credentials.',
  },
  'revenue-cloud-consultant': {
    difficulty: 4,
    difficultyNote: 'CPQ, Billing, and Revenue Lifecycle Management integration — complex product with multi-system dependencies. Real Revenue Cloud project experience is necessary.',
    salaryRange: '$98,000–$138,000',
    worthIt: 'Growing demand as Salesforce pushes Revenue Cloud hard in 2026. Solid investment for consultants in quote-to-cash implementations.',
  },
  'sales-cloud-consultant': {
    difficulty: 3,
    difficultyNote: 'Requires both platform knowledge and real Sales Cloud process experience — pipeline management, forecasting, territory management. Business context matters as much as product knowledge.',
    salaryRange: '$90,000–$125,000',
    worthIt: 'One of the most widely needed consultant certs. High demand across every industry using Salesforce CRM.',
  },
  'service-cloud-consultant': {
    difficulty: 4,
    difficultyNote: 'Deep configuration knowledge required — Omni-Channel routing, entitlements, milestones, and knowledge management. One of the harder functional consultant exams.',
    salaryRange: '$92,000–$130,000',
    worthIt: 'Strong demand in service-intensive industries. Pairs well with Sales Cloud Consultant for full-service CRM consulting profiles.',
  },
  'sharing-visibility-architect': {
    difficulty: 4,
    difficultyNote: 'One of the four CTA domain exams. OWD, role hierarchy, sharing rules, permission sets, field-level security — all tested at enterprise scale and edge cases.',
    salaryRange: '$122,000–$162,000',
    worthIt: 'Required on the CTA path. Also highly applicable for architects troubleshooting complex sharing models in large multi-org environments.',
  },
  'slack-administrator': {
    difficulty: 2,
    difficultyNote: 'Slack workspace configuration, channels, governance, and basic integrations. Manageable — less technically demanding than most Salesforce credentials.',
    salaryRange: '$78,000–$108,000',
    worthIt: 'Niche but growing. More relevant in organisations that have adopted Slack as a core collaboration platform post-Salesforce acquisition.',
  },
  'strategy-designer': {
    difficulty: 3,
    difficultyNote: 'Human-centred design, research methods, journey mapping, and stakeholder communication. Very different from technical Salesforce exams — a thinking and process cert.',
    salaryRange: '$85,000–$118,000',
    worthIt: 'Undervalued credential. Differentiates consultants who can lead design thinking workshops and translate business needs into Salesforce solutions.',
  },
  'system-architect': {
    difficulty: 5,
    difficultyNote: 'Requires all four domain exams (Data, Sharing, Identity, DevOps) plus a live board review for CTA. This is the hardest certification path in the Salesforce ecosystem.',
    salaryRange: '$135,000–$185,000',
    worthIt: 'The highest non-CTA credential. Commands a significant salary premium and is a prerequisite for Technical Architect review. Long path — plan 12–24 months.',
  },
  'tableau-data-analyst': {
    difficulty: 3,
    difficultyNote: 'Tableau Desktop — charts, calculations, LOD expressions, and dashboard design. Requires real Tableau hands-on time. The LOD expressions are the hardest part.',
    salaryRange: '$88,000–$122,000',
    worthIt: 'Good for analysts and BI professionals. Tableau remains widely used outside Salesforce too — the skill transfers broadly.',
  },
  'technical-architect': {
    difficulty: 5,
    difficultyNote: 'A board review with a live architecture presentation in front of a panel. Less than 1% of Salesforce professionals hold this. Years of architect experience are the real prerequisite.',
    salaryRange: '$160,000–$220,000+',
    worthIt: 'The most prestigious credential in the Salesforce ecosystem. Transformative salary impact and immediate market recognition. A multi-year investment.',
  },
  'ux-designer': {
    difficulty: 2,
    difficultyNote: 'UX fundamentals, accessibility, Lightning Design System, and user research basics. Accessible to non-developers — a conceptual and process-oriented exam.',
    salaryRange: '$82,000–$115,000',
    worthIt: 'Useful for consultants and admins who work closely on UI and user adoption. Lower standalone value — strongest when paired with a functional or developer cert.',
  },
}

export function getCertInsight(slug: string): CertInsight | null {
  return CERT_INSIGHTS[slug] ?? null
}

export const DIFFICULTY_LABELS: Record<number, string> = {
  1: 'Very Easy',
  2: 'Easy',
  3: 'Moderate',
  4: 'Hard',
  5: 'Expert',
}

export const DIFFICULTY_COLOURS: Record<number, string> = {
  1: '#22c55e',
  2: '#84cc16',
  3: '#f59e0b',
  4: '#f97316',
  5: '#ef4444',
}
