import Link from '@/components/AppLink'
import { notFound } from 'next/navigation'
import { Award, ArrowRight, ChevronLeft } from 'lucide-react'
import { Metadata } from 'next'
import { getCategoryBySlug, CERTIFICATION_CATEGORIES, NOINDEX_ALIAS_HREFS } from '@/lib/certifications-data'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RoleAggregationSchemas from '@/components/RoleAggregationSchemas'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import CareerRoadmapDiagram from '@/components/CareerRoadmapDiagram'
import { RELEASE_YEAR } from '@/lib/release-data'
import { getRecognizedExamCode } from '@/lib/certification-exam-codes'
import LastUpdated from '@/components/LastUpdated'
import { getCredentialCardNote } from '@/lib/credential-status'
import { getCertAlias } from '@/lib/cert-alias-registry'
import { getCertificationGrid, getRoleCertCount, getCertRoleAssignment } from '@/lib/certification-grid-data'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return CERTIFICATION_CATEGORIES.map((c) => ({ slug: c.slug }))
}

const ROLE_TITLES: Record<string, string> = {
  architect:              `Salesforce Architect Career Path & Salary Guide (${RELEASE_YEAR})`,
  consultant:             `Salesforce Consultant Career Path & Salary Guide (${RELEASE_YEAR})`,
  marketing:              `Salesforce Marketing Cloud Career Path & Salary (${RELEASE_YEAR})`,
  associate:              `Salesforce Associate Career Path & Salary Guide (${RELEASE_YEAR})`,
  administrator:          `Salesforce Administrator Career Path & Salary (${RELEASE_YEAR})`,
  developer:              `Salesforce Developer Career Path & Salary Guide (${RELEASE_YEAR})`,
  tableau:                `Salesforce Tableau Career Path & Salary Guide (${RELEASE_YEAR})`,
  'accredited-professional': `Salesforce Accredited Professional Salary Guide (${RELEASE_YEAR})`,
  sales:                  `Salesforce Sales Career Path & Salary Guide (${RELEASE_YEAR})`,
  designer:               `Salesforce Designer Career Path & Salary Guide (${RELEASE_YEAR})`,
  claude:                 `Anthropic Claude Career Path & Salary Guide (${RELEASE_YEAR})`,
}

/** Grammatical person-noun for "What Does a ___ Do Day-to-Day?", category.name alone reads
 *  fine for job-title-shaped names (Administrator, Developer) but breaks for track names that
 *  aren't a role (Marketing, Tableau, Sales, Claude). */
const ROLE_PERSON_LABEL: Record<string, string> = {
  architect:              'Salesforce Architect',
  consultant:             'Salesforce Consultant',
  marketing:              'Salesforce Marketing Cloud Professional',
  associate:              'Salesforce Associate',
  administrator:          'Salesforce Administrator',
  developer:              'Salesforce Developer',
  tableau:                'Tableau Professional',
  'accredited-professional': 'Salesforce Accredited Professional',
  sales:                  'Salesforce Sales Professional',
  designer:               'Salesforce Designer',
  claude:                 'Claude AI Professional',
}

type FaqItem = { question: string; answer: string }
interface RoleCareerData {
  salaryRange: string
  seniorSalaryRange: string
  yearsToFirst: string
  dailyResponsibilities: string[]
  careerPath: string
  topSkills: string[]
}
interface RoleDecisionItem {
  audience: string
  certification: string
  href: string
  why: string
}
interface RoleResourceLink {
  label: string
  href: string
  note: string
}

const ROLE_CAREER_DATA: Record<string, RoleCareerData> = {
  administrator: {
    salaryRange: '$65,000–$85,000',
    seniorSalaryRange: '$90,000–$130,000',
    yearsToFirst: '3–6 months',
    dailyResponsibilities: [
      'Managing user accounts, profiles, permission sets, and login access',
      'Building and maintaining automation (Record-Triggered Flows, approval processes)',
      'Creating reports and dashboards for business stakeholders',
      'Data quality management: imports, deduplication, and validation rules',
      'Troubleshooting user issues and managing change requests',
    ],
    careerPath: 'ADM-201 → Advanced Administrator or App Builder → Sales/Service Cloud Consultant → Senior Admin or Functional Consultant',
    topSkills: ['Flow Builder', 'Security model (OWD/profiles/roles)', 'Reports & Dashboards', 'Data management', 'Stakeholder communication'],
  },
  developer: {
    salaryRange: '$85,000–$115,000',
    seniorSalaryRange: '$115,000–$155,000',
    yearsToFirst: '6–12 months',
    dailyResponsibilities: [
      'Writing Apex triggers, classes, and batch jobs following bulkification principles',
      'Building Lightning Web Components (LWC) for custom UI requirements',
      'Integrating Salesforce with external systems via REST/SOAP APIs',
      'Writing unit tests with System.assert() and maintaining 75%+ code coverage',
      'Deploying code via Change Sets, Salesforce CLI, or CI/CD pipelines',
    ],
    careerPath: 'PD1 → PD2 → JavaScript Developer I (optional) → Integration Architect or Application Architect → CTA',
    topSkills: ['Apex', 'LWC', 'SOQL/SOSL', 'Governor limits', 'REST integration', 'Test-driven development'],
  },
  consultant: {
    salaryRange: '$80,000–$110,000',
    seniorSalaryRange: '$110,000–$145,000',
    yearsToFirst: '1–2 years',
    dailyResponsibilities: [
      'Gathering requirements from business stakeholders and translating to Salesforce solutions',
      'Configuring Sales Cloud, Service Cloud, or Experience Cloud features declaratively',
      'Running workshops, demos, and user acceptance testing sessions',
      'Writing solution design documents and technical specifications',
      'Managing project scope, risks, and client expectations',
    ],
    careerPath: 'ADM-201 → Agentforce Sales Consultant (Sales-Con-201) or Agentforce Service Consultant (Service-Con-201) → Experience Cloud Consultant → Business Analyst → System Architect',
    topSkills: ['Requirements gathering', 'Solution design', 'Stakeholder management', 'Flow Builder', 'Data migration', 'Presentation skills'],
  },
  architect: {
    salaryRange: '$130,000–$160,000',
    seniorSalaryRange: '$155,000–$200,000+',
    yearsToFirst: '5–8 years',
    dailyResponsibilities: [
      'Designing multi-cloud Salesforce architectures for enterprise clients',
      'Defining integration patterns, API strategies, and data flows',
      'Reviewing and approving technical solutions for scalability and security',
      'Leading technical discovery, whiteboarding sessions, and architecture decisions',
      'Mentoring developer and consultant teams on best practices',
    ],
    careerPath: 'ADM-201 + PD1 → Integration/Data Architect → Application Architect → System Architect → CTA (Certified Technical Architect)',
    topSkills: ['System design', 'Integration architecture', 'Security model', 'Multi-org strategy', 'Performance optimisation', 'Stakeholder leadership'],
  },
  marketing: {
    salaryRange: '$65,000–$95,000',
    seniorSalaryRange: '$90,000–$125,000',
    yearsToFirst: '3–6 months',
    dailyResponsibilities: [
      'Building and managing email campaigns, journeys, and automations in Marketing Cloud',
      'Configuring data extensions, subscriber lists, and segmentation rules',
      'Writing AMPscript or SSJS for dynamic personalised content',
      'Setting up lead scoring, grading, and nurture programmes in Pardot/MCAE',
      'Reporting on campaign performance and optimising send schedules',
    ],
    careerPath: 'Email Specialist → Marketing Cloud Consultant → Pardot Specialist → Marketing Cloud Account Engagement Consultant',
    topSkills: ['Journey Builder', 'Automation Studio', 'AMPscript', 'Data Extensions', 'Segmentation', 'Email deliverability'],
  },
  designer: {
    salaryRange: '$75,000–$105,000',
    seniorSalaryRange: '$100,000–$135,000',
    yearsToFirst: '6–12 months',
    dailyResponsibilities: [
      'Conducting user research, creating wireframes and prototypes for Salesforce solutions',
      'Applying Lightning Design System (SLDS) principles to custom components',
      'Facilitating design thinking workshops and customer journey mapping sessions',
      'Collaborating with developers to implement accessible, responsive interfaces',
      'Running usability testing and iterating based on stakeholder feedback',
    ],
    careerPath: 'UX Designer → Strategy Designer → Senior Experience Designer → Design Lead or Service Design Principal',
    topSkills: ['Figma', 'Lightning Design System', 'Journey mapping', 'Usability testing', 'Accessibility (WCAG)', 'Design thinking'],
  },
  tableau: {
    salaryRange: '$75,000–$105,000',
    seniorSalaryRange: '$100,000–$135,000',
    yearsToFirst: '3–6 months',
    dailyResponsibilities: [
      'Building interactive dashboards and visualisations in Tableau Desktop or Tableau Cloud',
      'Connecting to Salesforce, databases, and cloud data sources for reporting',
      'Writing calculated fields, LOD expressions, and table calculations',
      'Publishing and managing workbooks on Tableau Server or Tableau Cloud',
      'Training end users and building self-service analytics capabilities',
    ],
    careerPath: 'Desktop Specialist/Foundations → Certified Data Analyst → Tableau Consultant → Tableau Architect',
    topSkills: ['Tableau Desktop', 'LOD expressions', 'Data blending', 'Dashboard design', 'Calculated fields', 'Performance optimisation'],
  },
  associate: {
    salaryRange: '$50,000–$70,000',
    seniorSalaryRange: '$65,000–$90,000',
    yearsToFirst: '1–3 months',
    dailyResponsibilities: [
      'Using Salesforce CRM for day-to-day business operations',
      'Understanding AI features like Einstein Copilot and Agentforce capabilities',
      'Collaborating with admin and developer teams on Salesforce projects',
      'Documenting processes and supporting end-user adoption',
    ],
    careerPath: 'Platform Foundations (Plat-101) → ADM-201 → App Builder → Specialist track of choice (AI Associate retired February 2026)',
    topSkills: ['Salesforce CRM navigation', 'AI literacy', 'Process documentation', 'Business analysis basics'],
  },
  'accredited-professional': {
    salaryRange: '$95,000–$125,000',
    seniorSalaryRange: '$120,000–$155,000',
    yearsToFirst: '2–4 years',
    dailyResponsibilities: [
      'Implementing specialist Salesforce clouds (Health, Financial Services, Field Service, etc.)',
      'Configuring industry-specific data models and business processes',
      'Advising clients on platform capabilities for regulated or complex industries',
      'Leading domain-specific discovery workshops and solution design',
    ],
    careerPath: 'ADM-201 + relevant Consultant cert → Industry AP credential → Senior Consultant or Solution Architect',
    topSkills: ['Industry cloud expertise', 'Solution design', 'Domain knowledge (health/finance/field)', 'Regulatory compliance', 'Client advisory'],
  },
  sales: {
    salaryRange: '$75,000–$105,000',
    seniorSalaryRange: '$100,000–$135,000',
    yearsToFirst: '6–12 months',
    dailyResponsibilities: [
      'Configuring Sales Cloud for sales teams: lead routing, opportunity management, forecasting',
      'Building automation for sales processes (approval processes, email alerts, Flow)',
      'Designing reports and dashboards for pipeline visibility and quota tracking',
      'Integrating Salesforce with marketing and ERP systems',
    ],
    careerPath: 'Agentforce Sales Foundations (Sales-101) → ADM-201 → Agentforce Sales Consultant (Sales-Con-201) → Revenue Management Consultant (Rev-Con-201) or CPQ Administrator (Sales-Admn-202)',
    topSkills: ['Sales Cloud configuration', 'Territory management', 'Forecasting', 'Pipeline reporting', 'Sales process automation'],
  },
  claude: {
    salaryRange: '$80,000–$145,000',
    seniorSalaryRange: '$150,000–$225,000',
    yearsToFirst: '6–12 months',
    dailyResponsibilities: [
      'Building AI-powered applications using the Claude API and Anthropic SDK',
      'Designing multi-agent systems and MCP integrations for enterprise clients',
      'Writing effective prompts and evaluating AI outputs for business use cases',
      'Architecting production-grade AI pipelines with security and observability',
      'Advising teams on responsible AI practices and model selection',
    ],
    careerPath: 'CCAO-F (Associate) → CCDV-F (Developer) or CCAR-F (Architect Foundations) → CCAR-P (Architect Professional)',
    topSkills: ['Claude API', 'Prompt engineering', 'MCP server design', 'Agentic architecture', 'AI security', 'Production reliability'],
  },
}

/**
 * The opening two lines of each role hub.
 *
 * All 11 hubs used to open on the same two sentences ("Pick one for practice
 * questions and study materials. Each certification has its own study guide,
 * exam weightage, and practice questions."), which told a reader nothing about
 * the track they had just clicked into and gave 11 pages the same lead copy.
 * `lead` replaces the first line and `body` the second.
 */
const ROLE_INTRO_COPY: Record<string, { lead: string; body: string }> = {
  associate: {
    lead: 'The entry point to the platform, for candidates with no Salesforce experience yet.',
    body:
      'These are the cheapest and shortest exams on the platform, and Platform Foundations (Plat-101) carries a free retake. ' +
      'They test vocabulary and platform concepts rather than configuration depth, so they are the credential to hold while ' +
      'you build the hands-on hours a role-level exam assumes.',
  },
  administrator: {
    lead: 'The configuration track: who can see what, what the platform does automatically, and what the business can report on.',
    body:
      'Platform Administrator (Plat-Admn-201 / ADM-201) is the first credential almost every Salesforce career runs through, ' +
      'and the rest of this track splits from it by direction rather than by seniority: deeper security and troubleshooting, ' +
      'declarative app design, revenue tooling, or AI agent configuration.',
  },
  developer: {
    lead: 'The code track: Apex, SOQL, Lightning Web Components, and the integration work the declarative tools cannot reach.',
    body:
      'Platform Developer I (Plat-Dev-201 / PD1) is the gate the rest of the track sits behind, and it assumes you already ' +
      'know the data model an administrator configures. Pick the second exam by what you actually build \u2014 enterprise Apex, ' +
      'front-end JavaScript, commerce storefronts, or MuleSoft integrations.',
  },
  consultant: {
    lead: 'The delivery track: scenario exams about designing a solution for a client, not about clicking through setup.',
    body:
      'Every exam here assumes administrator-level platform knowledge and adds one product or industry cloud on top, so the ' +
      'questions read as project situations with trade-offs rather than feature recall. Choose by the cloud you are staffed ' +
      'on; the exam blueprint follows the implementation lifecycle for that product.',
  },
  marketing: {
    lead: 'The marketing operations track, split across the two platforms Salesforce sells into marketing teams.',
    body:
      'Marketing Cloud Engagement (formerly ExactTarget) and Marketing Cloud Account Engagement (formerly Pardot) are ' +
      'separate products with separate exams, and the credential names changed while both kept their old search names. ' +
      'Pick by the platform in your org, not by the newer-sounding title.',
  },
  architect: {
    lead: 'The design track: exams about constraints, governance, and the trade-offs behind a decision rather than its implementation.',
    body:
      'Most of this track is made of single-domain exams. Application Architect and System Architect are not exams at all \u2014 ' +
      'they are awarded for passing four component exams each \u2014 and Technical Architect (CTA) sits on top of both, with a ' +
      'paid evaluation and a live review board rather than a multiple-choice paper.',
  },
  'accredited-professional': {
    lead: 'Product and industry-cloud implementation depth, assessed as Accredited Professional designations rather than certifications.',
    body:
      'These are delivered through Partner Learning Camp rather than the certification catalog, so they are not listed with ' +
      'exam codes, and they assume you already know the core platform. They are worth holding when a project or partner ' +
      'requirement names the specific cloud; several in this track retire in February 2027.',
  },
  sales: {
    lead: 'The selling track: pipeline, forecasting, and the quote-to-cash path through Sales Cloud and Agentforce.',
    body:
      'Agentforce Sales Foundations (Sales-101) is the entry credential here, and the consultant-level selling exams sit in ' +
      'the Consultant track rather than this one. Read it as the starting point for a revenue-side career, not as a complete ' +
      'certification path on its own.',
  },
  designer: {
    lead: 'The experience track: two credentials that split designing the screens from deciding what gets built.',
    body:
      'Platform User Experience Designer (Plat-UX-101) is the craft exam \u2014 SLDS, accessibility, usability testing, and ' +
      'declarative UX. Platform Strategy Designer (Plat-UX-102) is the upstream one, about business value design and ' +
      'experience roadmaps. Neither assumes the other.',
  },
  tableau: {
    lead: 'The analytics track, run as Tableau\u2019s own certification programme under the Salesforce umbrella.',
    body:
      'These credentials carry Tableau\u2019s naming ("Tableau Certified Data Analyst"), not the Salesforce Certified prefix, and ' +
      'they are the only track here that tests a desktop product. Tableau Next Consultant is the exception: it covers ' +
      'Tableau on the Salesforce platform, over Data 360 and Agentforce.',
  },
  claude: {
    lead: 'Anthropic\u2019s own certification programme for building with Claude, tracked here alongside the Salesforce credentials.',
    body:
      'These are not Salesforce credentials and they are not scored or priced like one \u2014 Anthropic publishes no exam code, ' +
      'fee or pass mark we have been able to verify, so every page in this track is marked as unverified learning notes. ' +
      'Check Anthropic\u2019s own certification pages before planning around them.',
  },
}

const ROLE_DECISION_DATA: Record<string, RoleDecisionItem[]> = {
  administrator: [
    { audience: 'New to Salesforce admin work', certification: 'Administrator (ADM-201)', href: '/certifications/administrator', why: 'Best first credential for user setup, security, automation, reports, and platform operations.' },
    { audience: 'Already passed ADM-201', certification: 'Advanced Administrator', href: '/certifications/advanced-administrator', why: 'Deepens security, automation, data management, and troubleshooting skills for senior admin roles.' },
    { audience: 'Declarative builder path', certification: 'Platform App Builder', href: '/certifications/app-builder', why: 'Validates app design, data model decisions, automation, and UX configuration without Apex.' },
  ],
  developer: [
    { audience: 'First developer cert', certification: 'Platform Developer I (PD1)', href: '/certifications/developer-1', why: 'Core Apex, SOQL, LWC, testing, and platform fundamentals for Salesforce developers.' },
    { audience: 'Experienced Salesforce developer', certification: 'Platform Developer II', href: '/certifications/developer-2', why: 'Advanced Apex patterns, integrations, performance, and enterprise development practices.' },
    { audience: 'Frontend-heavy developer', certification: 'JavaScript Developer I', href: '/certifications/javascript-developer-i', why: 'Useful when you build LWC-heavy interfaces and want broader JavaScript validation.' },
  ],
  marketing: [
    { audience: 'Starting in Marketing Cloud Engagement', certification: 'Email Specialist', href: '/certifications/email-specialist', why: 'Best first SFMC credential for Email Studio, Journey Builder, segmentation, and deliverability.' },
    { audience: 'Account Engagement / Pardot user', certification: 'Pardot Specialist', href: '/certifications/pardot-specialist', why: 'Targets lead nurturing, scoring, grading, automation rules, and B2B marketing operations.' },
    { audience: 'Implementation consultant', certification: 'Marketing Cloud Consultant', href: '/certifications/marketing-cloud-consultant', why: 'Scenario-heavy credential for solution design, governance, integration, and client delivery.' },
  ],
  associate: [
    { audience: 'Start here: best entry-level cert', certification: 'Platform Foundations (Plat-101)', href: '/certifications/platform-foundations', why: 'The #1 recommended first Salesforce credential: $75, 40 questions, 62% to pass, and a free retake. Covers CRM, app building, Flow, security, and platform vocabulary with no prior experience needed.' },
    { audience: 'Researching AI Associate', certification: 'AI Associate (Retired Feb 2026 \u2013 Historical Guide)', href: '/certifications/ai-associate', why: 'Retired in February 2026 and no longer bookable. Kept as a historical guide only; take Platform Foundations (Plat-101) instead.' },
    { audience: 'Next practical step after associate', certification: 'Administrator (ADM-201)', href: '/certifications/administrator', why: 'Turns platform awareness into a job-relevant admin credential with stronger search demand.' },
  ],
  consultant: [
    { audience: 'CRM implementation consultant', certification: 'Agentforce Sales Consultant (formerly Sales Cloud Consultant, Sales-Con-201)', href: '/certifications/sales-cloud', why: 'Best fit for lead-to-cash, opportunity management, forecasting, and sales process design. 60 scored questions, 105 minutes, 73% to pass.' },
    { audience: 'Support/contact center consultant', certification: 'Agentforce Service Consultant (formerly Service Cloud Consultant, Service-Con-201)', href: '/certifications/service-cloud', why: 'Targets case management, Omni-Channel, Knowledge, entitlements, and service operations. 60 scored questions, 105 minutes, 78% to pass.' },
    { audience: 'Portal/community consultant', certification: 'Experience Cloud Consultant', href: '/certifications/experience-cloud', why: 'Useful for partner portals, customer communities, external identity, and self-service sites.' },
  ],
  architect: [
    { audience: 'Integration-heavy background', certification: 'Integration Architect', href: '/certifications/integration-architect', why: 'Strong first architect cert for APIs, middleware, eventing, identity, and integration trade-offs.' },
    { audience: 'Data/modeling background', certification: 'Data Architect', href: '/certifications/data-architect', why: 'Best for LDV, MDM, data modeling, migration, governance, and enterprise data strategy.' },
    { audience: 'CTA path planning', certification: 'Application Architect', href: '/certifications/application-architect', why: 'A practical milestone toward CTA that bundles multiple domain architect credentials.' },
  ],
  'accredited-professional': [
    { audience: 'Banking, insurance, or wealth delivery', certification: 'Agentforce Financial Services Professional', why: 'Take this when your project work is Financial Services Cloud: householding and relationship data models, financial account and policy objects, referral and onboarding flows, and the compliance constraints banks and insurers put on a Salesforce org. Assumes a Sales or Service Cloud baseline.', href: '/certifications/financial-services-cloud-ap' },
    { audience: 'Payer, provider, or life-sciences delivery', certification: 'Agentforce Health Professional', why: 'Take this when you implement Health Cloud: patient and member data models, care plans and care teams, utilisation management, HL7/FHIR-shaped integration, and the HIPAA handling rules that shape sharing and field-level security on health orgs.', href: '/certifications/health-cloud-ap' },
    { audience: 'B2B commerce storefront delivery', certification: 'B2B Commerce Administrator Professional', why: 'Take this when you administer B2B Commerce: price lists and entitlement policies, account-specific catalogs, cart and checkout configuration, and the order flow between storefront, CPQ, and Order Management. The most product-specific of the three and the least dependent on an industry cloud.', href: '/certifications/b2b-commerce-admin-ap' },
  ],
  designer: [
    { audience: 'Interface and interaction work', certification: 'Platform UX Designer (Plat-UX-101)', why: 'The hands-on craft credential. Tests Lightning Design System (SLDS) tokens and components, user research and usability testing methods, accessibility to WCAG, and declarative UX: page layouts, dynamic forms, and Lightning App Builder. Pick this if you design and ship the screens themselves.', href: '/certifications/ux-designer' },
    { audience: 'Business value and roadmap work', certification: 'Platform Strategy Designer (Plat-UX-102)', why: 'The upstream credential. Tests business value design, experience roadmapping, stakeholder alignment, opportunity framing, and measuring design outcomes against business metrics. Pick this if you decide what gets built and in what order, rather than drawing the interface.', href: '/certifications/strategy-designer' },
  ],
  tableau: [
    { audience: '1. Beginner / first Tableau cert', certification: 'Tableau Desktop Foundations (Analytics-101)', why: 'Start here with no analytics background. Connecting to data, building the core chart types, calculated fields, and basic dashboard assembly in Tableau Desktop.', href: '/certifications/tableau-desktop-foundations' },
    { audience: '2. Core analyst role', certification: 'Tableau Certified Data Analyst (Analytics-DA-201)', why: 'The credential hiring managers actually screen for. Explore and Analyze Data alone is 41% of the exam: LOD expressions, table calculations, data blending, and Prep Builder flows.', href: '/certifications/tableau-data-analyst' },
    { audience: '3. Data 360 & Agentforce analytics', certification: 'Tableau Next Consultant (Analytics-Con-202)', why: 'The consulting step. Tableau Next on the Salesforce platform: semantic models over Data 360, Agentforce-driven analytics, and delivering governed analytics to a client org.', href: '/certifications/tableau-next-consultant' },
  ],
  claude: [
    { audience: 'Non-technical / first Claude cert', certification: 'Claude Certified Associate \u2013 Foundations (CCAO-F)', why: 'No coding. Prompt construction, evaluating and correcting model output, choosing between Claude models for a task, context handling, and responsible-AI limits. Built for business users, analysts, and consultants adopting Claude in day-to-day work.', href: '/certifications/claude-certified-associate' },
    { audience: 'Engineers shipping on the API', certification: 'Claude Certified Developer \u2013 Foundations (CCDV-F)', why: 'Hands-on build skills. The Messages API and SDK, tool use and structured output, MCP servers, prompt caching and token budgeting, streaming, and taking a Claude application to production with evaluations and error handling.', href: '/certifications/claude-certified-developer' },
    { audience: 'Architects designing AI systems', certification: 'Claude Certified Architect \u2013 Foundations (CCAR-F) then Professional (CCAR-P)', why: 'System design rather than implementation. CCAR-F covers multi-agent orchestration, Claude Code configuration, and reliability patterns. CCAR-P builds on it, and requires it, for enterprise architecture, security and compliance, and cost optimisation at scale.', href: '/certifications/claude-certified-architect-foundations' },
  ],
  sales: [
    { audience: 'First sales-track credential', certification: 'Agentforce Sales Foundations (Sales-101)', why: 'The entry point. Core Sales Cloud objects, lead and opportunity handling, and Agentforce selling features, with no consultant-level scenario depth.', href: '/certifications/sales-foundations' },
    { audience: 'Implementing Sales Cloud for clients', certification: 'Agentforce Sales Consultant (Sales-Con-201)', why: 'The main sales consulting credential. Lead-to-cash design, territory management, forecasting, and sales process configuration. 60 scored questions, 105 minutes, 73% to pass.', href: '/certifications/sales-cloud' },
    { audience: 'Quoting, pricing, and billing work', certification: 'Revenue Management Consultant (Rev-Con-201)', why: 'For revenue lifecycle projects: product and pricing models, quoting, contracts, amendments, and renewals across Revenue Cloud.', href: '/certifications/revenue-cloud-consultant' },
    { audience: 'CPQ administration', certification: 'CPQ Administrator (Sales-Admn-202)', why: 'The configuration-depth credential for Salesforce CPQ: product bundles, price rules, discount schedules, and quote templates. Pairs with the Sales Consultant cert on enterprise sales programmes.', href: '/certifications/cpq-administrator' },
  ],
}

const ROLE_RESOURCE_LINKS: Record<string, RoleResourceLink[]> = {
  administrator: [
    { label: 'Platform Administrator (Plat-Admn-201 / ADM-201) Study Guide', href: '/certifications/administrator', note: 'Canonical ADM-201 guide: full study plan, section weightage, and practice questions.' },
    { label: 'ADM-201 Exam Tips & Trap Checklist', href: '/certifications/administrator#adm201-traps', note: 'Last-week revision traps, now on the canonical ADM-201 page rather than a separate URL.' },
    { label: 'ADM-201 vs Platform App Builder', href: '/adm-201-vs-app-builder', note: 'Decision page for the most common second-cert question.' },
  ],
  marketing: [
    { label: 'Marketing Cloud Certification Path', href: '/marketing-cloud-certification-path', note: 'Role path for Email Specialist, Consultant, Pardot, and SFMC developer tracks.' },
    { label: 'Pardot Certification Guide', href: '/pardot-certification', note: 'Dedicated Account Engagement / Pardot certification intent page.' },
    { label: 'Marketing Cloud Admin vs Developer', href: '/marketing-cloud-admin-vs-developer', note: 'Decision page for SFMC technical vs admin paths.' },
  ],
  associate: [
    { label: 'Salesforce Associate Certification Cost', href: '/salesforce-associate-certification-cost', note: 'Cost, format, and next-step guidance for associate-level certs.' },
    { label: 'Platform Foundations vs AI Associate', href: '/platform-foundations-vs-ai-associate', note: 'Compares the two entry-level options.' },
    { label: 'Which Salesforce Certification First?', href: '/which-salesforce-certification-first', note: 'Decision guide for beginners choosing a first credential.' },
  ],
  developer: [
    { label: 'PD1 Study Guide', href: '/certifications/developer-1', note: 'Core guide for Platform Developer I.' },
    { label: 'PD1 vs PD2', href: '/pd1-vs-pd2', note: 'Clarifies progression and readiness.' },
    { label: 'JavaScript Developer I vs PD1', href: '/javascript-developer-i-vs-pd1', note: 'Helps developers choose the right first technical credential.' },
  ],
  consultant: [
    { label: 'Sales Cloud vs Service Cloud', href: '/sales-cloud-vs-service-cloud', note: 'Compares the two highest-demand consultant certs.' },
    { label: 'Service Cloud Consultant Study Guide', href: '/certifications/service-cloud', note: 'Canonical guide for Service Cloud Consultant prep.' },
    { label: 'How to Become a Salesforce Consultant', href: '/how-to-become-salesforce-consultant', note: 'Career path and certification sequencing.' },
  ],
  architect: [
    { label: 'Architect Certification Path', href: '/architect-certification-path', note: 'Full roadmap toward Application Architect, System Architect, and CTA.' },
    { label: 'System vs Application Architect', href: '/system-architect-vs-application-architect', note: 'Helps candidates choose the next architect milestone.' },
    { label: 'Become a Salesforce CTA', href: '/become-cta', note: 'Long-term CTA roadmap and board-review guidance.' },
  ],
  sales: [
    { label: 'Agentforce Sales Consultant (Sales-Con-201) Study Guide', href: '/certifications/sales-cloud', note: 'The flagship selling credential: section weightage, pass mark, and practice questions.' },
    { label: 'Sales Cloud vs Service Cloud', href: '/sales-cloud-vs-service-cloud', note: 'Decision page for the most common consultant-track fork on the revenue side.' },
    { label: 'CPQ Administrator vs Revenue Management Consultant', href: '/cpq-admin-vs-revenue-cloud-consultant', note: 'Compares the two quote-to-cash credentials this hub recommends after Sales-Con-201.' },
    { label: 'Consultant Certification Path', href: '/consultant-certification-path', note: 'Where the consultant-level selling exams sit once you are past Sales-101.' },
  ],
  designer: [
    { label: 'Platform UX Designer (Plat-UX-101) Study Guide', href: '/certifications/ux-designer', note: 'The craft exam: SLDS, accessibility, usability testing, and declarative UX.' },
    { label: 'UX Designer vs Strategy Designer', href: '/ux-designer-vs-strategy-designer', note: 'Decision page for the only real fork in this two-credential track.' },
    { label: 'Business Analyst vs Strategy Designer', href: '/business-analyst-vs-strategy-designer', note: 'For candidates choosing between requirements work and experience strategy.' },
  ],
  tableau: [
    { label: 'Tableau Certified Data Analyst (Analytics-DA-201) Study Guide', href: '/certifications/tableau-data-analyst', note: 'The credential hiring managers screen for: LOD expressions, table calcs, and Prep Builder.' },
    { label: 'Tableau Desktop Foundations (Analytics-101) Study Guide', href: '/certifications/tableau-desktop-foundations', note: 'The entry exam if you have no analytics background yet.' },
    { label: 'Data Cloud vs CRM Analytics', href: '/data-cloud-vs-crm-analytics', note: 'Clarifies where Tableau sits against the Salesforce-native analytics products.' },
  ],
  claude: [
    { label: 'Claude Certified Associate \u2013 Foundations (CCAO-F) Notes', href: '/certifications/claude-certified-associate', note: 'The no-code entry point: prompt construction, output evaluation, and model selection.' },
    { label: 'Claude Certified Developer \u2013 Foundations (CCDV-F) Notes', href: '/certifications/claude-certified-developer', note: 'The build track: Messages API, tool use, MCP servers, and production evaluations.' },
    { label: 'Claude Certified Architect \u2013 Foundations (CCAR-F) Notes', href: '/certifications/claude-certified-architect-foundations', note: 'System design: multi-agent orchestration, Claude Code configuration, reliability patterns.' },
  ],
}

/**
 * Certifications a hub should surface even though the shared grid counts them
 * under another role.
 *
 * `getCertRoleAssignment` gives every credential exactly one owning role so the
 * hub count, the homepage pill and the card list cannot drift. That is right for
 * counting and wrong for browsing: the marketing hub recommended two Marketing
 * Cloud consultant exams in its own decision table and roadmap while showing only
 * two cards, and the sales hub recommended three selling exams while showing one
 * card in a two-column grid. These slugs are rendered as clearly-labelled
 * cross-links underneath the owned cards, so the count stays truthful and the hub
 * still lists everything it tells you to take.
 */
const ROLE_CROSS_LISTED_CERTS: Record<string, string[]> = {
  marketing: ['marketing-cloud-consultant', 'pardot-consultant'],
  sales: ['sales-cloud', 'revenue-cloud-consultant', 'cpq-administrator'],
}

/**
 * The "How to Use This ___ Certification Hub" copy, per track.
 *
 * All 11 hubs shared one paragraph that listed every track on the site ("daily
 * configuration, implementation consulting, custom development, architecture,
 * marketing operations, analytics, or industry-cloud delivery") and described
 * Salesforce org configuration, which is wrong on the Tableau hub and wrong twice
 * over on the Claude hub, where none of the credentials are Salesforce ones.
 * `ROLE_HUB_USAGE` replaces the first paragraph per role; the second paragraph
 * about the decision cards is shared, because it describes this page rather than
 * the track.
 */
const ROLE_HUB_USAGE: Record<string, string> = {
  administrator:
    'Read this hub in the order the work happens. The decision cards below sort the track by what you do in Setup today, ' +
    'not by how long you have held the job: user and access management, automation, or data and reporting. Once a card ' +
    'matches, open the certification page for section weightage, question count, pass mark, official source references, ' +
    'and free practice questions, then come back for the career roadmap to see what the exam after it usually is.',
  developer:
    'Read this hub from your current codebase outward. The decision cards sort the track by what you actually ship \u2014 ' +
    'Apex and triggers, front-end JavaScript, commerce storefronts, or MuleSoft integrations \u2014 rather than by exam ' +
    'difficulty, because the second credential here is a specialisation rather than a promotion. Open a certification page ' +
    'for section weightage, question count, pass mark, and free practice questions, and use the roadmap below to see which ' +
    'architect domain each development path feeds into.',
  consultant:
    'Read this hub by the cloud you are staffed on, which is the single filter that matters here: the decision cards sort ' +
    'the track by the product or industry you deliver, and each exam page then gives you the blueprint for that product\u2019s ' +
    'implementation lifecycle, its pass mark (they differ by several points between clouds), and free practice questions. If ' +
    'you have not passed Platform Administrator yet, start there instead; every exam on this page assumes it.',
  architect:
    'Read this hub by the domain you already defend in a design review. The decision cards sort the track by that domain \u2014 ' +
    'integration, data, identity, or sharing and visibility \u2014 because the component exams are taken in any order and the ' +
    'cheapest first exam is usually the one closest to your current work. The roadmap below shows how those components ' +
    'combine into Application Architect and System Architect, neither of which is itself an exam, and where the CTA ' +
    'evaluation and review board sit after them.',
  marketing:
    'Settle one thing before you read anything else on this page: which platform your org runs. Marketing Cloud Engagement ' +
    'and Marketing Cloud Account Engagement have separate exams, and both were renamed while keeping their old search names, ' +
    'so a credential title alone will not tell you. Once you know, the decision cards point you at the specialist exam for ' +
    'that platform, and the consultant credential above it is listed in the cards below even though it is counted under the ' +
    'consultant track.',
  associate:
    'Treat this hub as a starting line rather than a plan. There is effectively one exam to book here \u2014 Platform ' +
    'Foundations (Plat-101), which includes a free retake \u2014 and the decision cards exist mainly to tell you when to skip ' +
    'this track entirely and go straight to Platform Administrator. Open the certification page for the question count, pass ' +
    'mark, and free practice questions, then use the roadmap below to pick the role-level exam this credential buys you time ' +
    'to prepare for.',
  sales:
    'Read this hub as the revenue side of the platform rather than as a self-contained track. Agentforce Sales Foundations ' +
    '(Sales-101) is the only credential counted under it; the three exams it leads to are counted under the Consultant and ' +
    'Administrator tracks, so they are cross-listed in the cards below instead of being left off the page. The decision ' +
    'cards sort them by where you sit in quote-to-cash: pipeline and forecasting, or pricing, quoting, and renewals.',
  designer:
    'There is one question to answer on this hub, and the decision cards are built around it: do you draw the interface, or ' +
    'do you decide what gets built? Platform User Experience Designer is the craft exam and Platform Strategy Designer is ' +
    'the upstream one, neither is a prerequisite for the other, and holding both is unusual. Open the exam page for section ' +
    'weightage and free practice questions, and note that both assume enough Setup fluency to configure page layouts and ' +
    'dynamic forms yourself.',
  tableau:
    'Read this hub as a Tableau programme that Salesforce distributes, not as a Salesforce track. Nothing here tests org ' +
    'configuration, so judge your readiness on hours spent in Tableau Desktop rather than on Setup experience, and expect ' +
    'the credential names to carry Tableau branding rather than the Salesforce Certified prefix. The decision cards are ' +
    'numbered because this track really is sequential, with one exception: Tableau Next Consultant sits on the Salesforce ' +
    'platform, over Data 360 and Agentforce, and can be taken out of order.',
  claude:
    'Read this hub with one caveat in front of everything else: these are Anthropic credentials, not Salesforce ones, and ' +
    'Anthropic publishes no exam code, fee, or pass mark we have been able to verify, so every page in this track is marked ' +
    'as unverified learning notes and you should check Anthropic\u2019s own certification pages before planning around them. ' +
    'Nothing here tests org configuration. The decision cards sort the track by how you work with the model \u2014 using ' +
    'Claude with no code, shipping on the API and MCP, or designing the systems and cost model around it \u2014 and only ' +
    'CCAR-P has a stated prerequisite, CCAR-F.',
  'accredited-professional':
    'Read this hub as delivery credentials rather than career steps. These are Accredited Professional designations, issued ' +
    'through Partner Learning Camp rather than the certification catalog, which is why they carry no exam codes and why the ' +
    'cards below show learning topics instead of published exam facts. The right one is almost always whichever cloud your ' +
    'current project runs on, and each assumes you already hold the platform, consultant, or admin credential underneath it. ' +
    'Several in this track retire in February 2027, so check the status note on a card before booking study time.',
}

/**
 * Anthropic’s shorthand for each Claude credential.
 *
 * These are not exam codes: Anthropic publishes none, and the exam-code registry
 * must keep rendering nothing for this track. The Claude hub’s decision table
 * already shows the shorthand, so the cards carry it from this local map to match,
 * without it leaking into titles, H1s, or credential structured data.
 */
const CLAUDE_CARD_SHORTHAND: Record<string, string> = {
  'claude-certified-associate': 'CCAO-F',
  'claude-certified-developer': 'CCDV-F',
  'claude-certified-architect-foundations': 'CCAR-F',
  'claude-certified-architect-professional': 'CCAR-P',
}

/** Column count that leaves no empty trailing slot for a small card set. Three
 *  columns only pay off at 3 or 6 cards; 2 and 4 read better as a 2-up grid. */
function balancedGridColumns(count: number): string {
  if (count % 3 === 0) return 'md:grid-cols-3'
  if (count % 2 === 0) return 'md:grid-cols-2'
  return 'md:grid-cols-3'
}

const ROLE_FAQS: Record<string, FaqItem[]> = {
  administrator: [
    { question: 'What is the first Salesforce certification for an administrator?', answer: 'The Salesforce Administrator (ADM-201) is the recommended first certification for anyone on the admin track. It covers the full platform, security model, automation, data management, reports, and dashboards. All other admin certifications (Advanced Administrator, App Builder) build on ADM-201 knowledge.' },
    { question: 'How long does it take to get the Salesforce Administrator certification?', answer: 'Most candidates with no prior Salesforce experience pass ADM-201 in 8–12 weeks of part-time study. Candidates with existing CRM or Salesforce user experience often pass in 4–6 weeks. The exam is 60 questions, 105 minutes, and requires a 68% score.' },
    { question: 'What admin certifications come after ADM-201?', answer: 'After ADM-201, the most common next certifications are Platform App Builder (declarative customisation), Advanced Administrator (advanced security and automation), and Salesforce Business Analyst. Admins who want to move into consulting typically take Sales Cloud Consultant or Service Cloud Consultant.' },
  ],
  developer: [
    { question: 'What is the first Salesforce developer certification?', answer: 'Platform Developer I (PD1) is the recommended first developer certification. It tests Apex, Apex triggers, Lightning Web Components (LWC), governor limits, testing, and REST integration. No prior Salesforce certification is required, but ADM-201 knowledge is strongly recommended.' },
    { question: 'What is the difference between PD1 and PD2?', answer: 'PD1 (Platform Developer I) tests foundational Apex, LWC, and deployment, the building blocks of Salesforce development. PD2 (Platform Developer II) tests advanced Apex patterns, integration architecture, performance optimisation, and complex data models. PD1 is required before PD2.' },
    { question: 'Do Salesforce developers need ADM-201 before PD1?', answer: 'ADM-201 is not a formal prerequisite for PD1, but it is strongly recommended. PD1 assumes knowledge of the Salesforce data model, sharing model, and deployment process, all ADM-201 topics. Candidates who skip ADM-201 typically struggle with the Salesforce Fundamentals section of PD1.' },
  ],
  consultant: [
    { question: 'What Salesforce certification do consultants need first?', answer: 'Salesforce recommends ADM-201 before any consultant certification. After ADM-201, the most common first consultant cert is Sales Cloud Consultant or Service Cloud Consultant, depending on your specialisation. Both are 60 scored questions in 105 minutes for a $200 fee, and both require the Platform Administrator credential. The pass marks differ: 73% for Agentforce Sales Consultant (formerly Sales Cloud Consultant) and 78% for Agentforce Service Consultant (formerly Service Cloud Consultant).' },
    { question: 'Is the Sales Cloud or Service Cloud Consultant exam harder?', answer: 'Both are similarly difficult and test scenario-based application of Salesforce features to business requirements. Sales Cloud Consultant is slightly broader (territory management, forecasting, CPQ basics); Service Cloud Consultant is more technical in places (Omni-Channel routing, entitlements, CTI integration). Your background determines which feels harder.' },
    { question: 'How many consultant certifications should I aim for?', answer: 'Most Salesforce consultants hold 2–4 certifications. A common combination is ADM-201 + Sales Cloud Consultant + Service Cloud Consultant, which covers most CRM implementations. Adding Experience Cloud Consultant or Field Service Consultant expands your scope for specialist projects.' },
  ],
  architect: [
    { question: 'What is the path to Salesforce Certified Technical Architect (CTA)?', answer: 'CTA requires both of the composite architect credentials first. Application Architect requires four exams: Platform App Builder, Platform Developer I, Platform Data Architect, and Platform Sharing & Visibility Architect. System Architect requires four exams: Platform Developer I, Platform Integration Architect, Platform Identity & Access Management Architect, and Platform Dev Lifecycle & Deployment Architect. Platform Developer I counts toward both tracks, so the two composites together are seven unique exams rather than eight. You then take the Architect Evaluation ($1,500), a 135-minute live scenario session with a CTA judge, followed by the Architect Review Board ($4,500).' },
    { question: 'Which Salesforce architect certification should I take first?', answer: 'Most candidates start with Integration Architect or Data Architect, both test skills that complement consultant or developer experience. Integration Architect covers API design, middleware, and data synchronisation patterns. Data Architect covers MDM, data modelling, and ETL strategies. Both require strong ADM-201 and PD1 knowledge.' },
    { question: 'How long does the Salesforce architect path take?', answer: 'Completing the seven component exams and both CTA stages typically takes 3–6 years of dedicated study alongside active project experience. Most successful CTA candidates have 8–10 years of Salesforce experience. The Architect Evaluation and Review Board are considered among the most difficult credentialling processes in the enterprise software industry.' },
  ],
  marketing: [
    { question: 'Which Marketing Cloud certification should I take first?', answer: 'For Marketing Cloud Engagement (formerly ExactTarget). Start with the Marketing Cloud Email Specialist, it tests core Journey Builder, Email Studio, Content Builder, and Automation Studio knowledge. For Marketing Cloud Account Engagement (formerly Pardot), the Pardot Specialist is the entry point.' },
    { question: 'Is the Marketing Cloud Engagement Specialist (Email Specialist) exam hard?', answer: 'The Marketing Cloud Engagement Specialist exam (60 questions, 90 minutes, 67% passing) is considered moderately difficult. The highest-weight sections are Marketing Automation (26%) and Subscriber and Data Management (26%). Candidates without hands-on Marketing Cloud Engagement experience find it significantly harder, lab practice in a sandbox is essential.' },
  ],
  associate: [
    { question: 'Which Salesforce associate certification should I take first?', answer: 'Platform Foundations (Plat-101) is the #1 recommended entry-level Salesforce certification: $75, 40 questions, a 62% passing score, and a free retake included. No Salesforce experience is required, and it covers core CRM, Flow, app building, security, and platform vocabulary. AI Associate retired in February 2026, so Platform Foundations is now the single entry point for the associate track.' },
    { question: 'Is the AI Associate a good first Salesforce certification?', answer: 'No, not any more: AI Associate retired in February 2026 and can no longer be booked. It was Salesforce\'s most accessible entry-level certification, testing conceptual AI knowledge with no coding. Platform Foundations is the current equivalent starting point, and this site keeps the AI Associate material as a historical reference.' },
  ],
  tableau: [
    { question: 'Which Tableau certification should I take first?', answer: 'Tableau Desktop Specialist (now Desktop Foundations) is the entry-level Tableau certification. It tests core Tableau Desktop skills: connecting to data, building charts (bar, line, scatter, maps), calculated fields, and basic dashboard design. The Tableau Certified Data Analyst is the next step, testing more advanced analysis and Prep Builder.' },
    { question: 'Is the Tableau Data Analyst exam difficult?', answer: 'The Tableau Data Analyst exam (60 scored questions, 105 minutes, 65% passing score, $200) is considered moderately difficult. Explore and Analyze Data is 41% of the exam, so most of the marks come from analysis rather than setup. Hands-on practice building dashboards in Tableau Desktop is essential; theoretical knowledge alone is insufficient.' },
  ],
  designer: [
    { question: 'Should I take the Platform UX Designer or the Platform Strategy Designer first?', answer: 'Take Platform UX Designer (Plat-UX-101) first if you design and build the interface: it tests Lightning Design System (SLDS) components and tokens, user research and usability testing, accessibility to WCAG, and declarative UX through page layouts, dynamic forms, and Lightning App Builder. Take Platform Strategy Designer (Plat-UX-102) first if your work is upstream of the screens: business value design, experience roadmapping, stakeholder alignment, and measuring design outcomes against business metrics. Neither is a prerequisite for the other.' },
    { question: 'Do Salesforce designer certifications require admin or developer experience?', answer: 'Neither designer credential formally requires ADM-201, but Platform UX Designer assumes you can navigate Setup and configure declarative UI: page layouts, record pages, dynamic forms, and the Lightning App Builder. Candidates from a pure Figma or agency background usually need hands-on time in a Developer Edition org before they pass. Platform Strategy Designer is lighter on platform mechanics and heavier on research, framing, and business-value reasoning.' },
    { question: 'Are the Salesforce designer certifications worth it for a UX career?', answer: 'They are worth it if you work inside the Salesforce ecosystem, where they are the only recognised proof that a designer understands platform constraints. Designer roles in the ecosystem pay roughly $75,000 to $105,000 at entry and $100,000 to $135,000 at senior level. Outside Salesforce delivery work, a portfolio carries far more weight than either credential, so treat these as ecosystem signals rather than general UX qualifications.' },
  ],
  'accredited-professional': [
    { question: 'What is a Salesforce Accredited Professional (AP) certification?', answer: 'Salesforce Accredited Professional certifications validate implementation expertise in specific Salesforce industry clouds or add-on products. Examples include Field Service AP, Health Cloud AP, Financial Services Cloud AP, and B2B Commerce AP. APs are typically add-on credentials for consultants who already hold a relevant core certification.' },
    { question: 'Do I need ADM-201 before an Accredited Professional cert?', answer: 'Most Accredited Professional certifications do not formally require ADM-201, but they assume advanced Salesforce configuration knowledge. Field Service AP, for example, assumes deep familiarity with Service Cloud. Health Cloud AP requires Service Cloud or Sales Cloud knowledge. In practice, most AP candidates have 2+ years of hands-on Salesforce experience.' },
  ],
  claude: [
    { question: 'Which Claude certification should I take first?', answer: 'The Claude Certified Associate – Foundations (CCAO-F) is the natural starting point; its fee is not published by the issuer. It tests practical Claude skills, prompt writing, output evaluation, model selection, and responsible AI, with no coding required. Business professionals, consultants, and non-technical users should start here.' },
    { question: 'What is the difference between Claude Developer and Architect certifications?', answer: 'The Developer certification (CCDV-F) tests hands-on engineering skills: building with the Claude API, tool use, MCP servers, and shipping AI applications. The Architect certifications (CCAR-F and CCAR-P) test system design: multi-agent orchestration, Claude Code configuration, reliability patterns, and enterprise-scale architecture. Developers build; architects design.' },
    { question: 'Do I need a prerequisite for the Claude Architect Professional (CCAR-P)?', answer: 'Yes, the Claude Certified Architect – Foundations (CCAR-F) is a prerequisite for CCAR-P. The Professional exam builds on Foundations concepts and tests advanced topics: enterprise architecture, multi-agent orchestration, security, compliance, and cost optimization at scale.' },
  ],
}

function fitRoleTitle(title: string, roleName: string): string {
  const candidates = [
    title,
    /Guide/i.test(title) ? '' : `${title} Guide`,
    title.replace(/\s*\(\d{4}\)$/, ` | Career Guide (${RELEASE_YEAR})`),
    `${roleName} Certifications: Career Path & Study Guide`,
    `Explore ${roleName} Certifications: Career and Study Guide`,
  ].filter(Boolean)
  return candidates.find((candidate) => candidate.length >= 50 && candidate.length <= 60)
    ?? candidates.find((candidate) => candidate.length <= 60)
    ?? `${roleName} Certification Career Path & Guide`
}

function fitRoleDescription(roleName: string): string {
  const candidates = [
    `${roleName} certifications: compare credentials, career paths, role responsibilities, and study guides to plan your next step.`,
    `Explore ${roleName} credentials, career paths, and study guides. Compare role options and plan your next step.`,
    `${roleName} certifications: explore role responsibilities, career paths, credential options, and study resources. Compare guides to choose your next step.`,
  ]
  return candidates.find((candidate) => candidate.length >= 100 && candidate.length <= 130)
    ?? candidates.find((candidate) => candidate.length <= 130)
    ?? `Explore ${roleName} credentials, career paths, and study guides. Compare role options and plan your next step.`
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) return { title: 'Certification Not Found' }
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
  const canonicalUrl = `${siteUrl}/certifications/role/${slug}`
  // Use absolute title to avoid template duplication (template adds "| Trailblaze Prep")
  const title = fitRoleTitle(
    ROLE_TITLES[slug] || `Salesforce ${category.name} Certifications (${RELEASE_YEAR})`,
    category.name,
  )
  const description = fitRoleDescription(category.name)
  
  return {
    title: { absolute: title },
    description,
    alternates: {
    canonical: canonicalUrl,
    languages: { 'en-US': canonicalUrl, 'x-default': canonicalUrl },
  },
    openGraph: {
      title,
      description,
      type: 'website',
      url: canonicalUrl,
      images: [
        {
          url: `${siteUrl}/og?t=${encodeURIComponent(`${category.name} Certifications`)}&k=${slug}`,
          width: 1200,
          height: 630,
          alt: `${category.name} Certifications - Study Guide`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(`${category.name} Certifications`)}&k=${slug}`, alt: title }],
    },
  }
}

export default async function RoleCertificationsPage({ params }: Props) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) notFound()
  const gridCertBySlug = new Map(getCertificationGrid().flatMap((group) => group.certs.map((cert) => [cert.slug, cert] as const)))
  // The two practice-test aliases are noindexed duplicates of the canonical
  // exam pages; linking them from a role hub splits the anchor equity that
  // should all land on /certifications/administrator and
  // /certifications/email-specialist.
  // A certification listed under two role tracks is counted under the first
  // one by the shared grid; the hub lists exactly what the grid assigns it, so
  // the card list, this hub's count and the homepage pill cannot drift apart.
  const certRoleAssignment = getCertRoleAssignment()
  const roleCertCount = getRoleCertCount(slug)
  const toRoleCard = (item: { name: string; href: string }) => {
    const certSlug = item.href.split('/').filter(Boolean).at(-1) ?? ''
    const alias = getCertAlias(certSlug)
    const examCode = alias
      ? [alias.code, ...(alias.legacy ?? [])].filter(Boolean).join(' / ')
      : getRecognizedExamCode(certSlug)
    const baseName = alias?.bare ?? item.name
    // Anthropic publishes no exam code, so the Claude credentials fall through
    // the exam-code path and would render bare while this hub's own decision
    // table shows their shorthand. Append it here only.
    const shorthand = CLAUDE_CARD_SHORTHAND[certSlug]
    const name = examCode && !baseName.includes(examCode)
      ? `${baseName} (${examCode})`
      : shorthand && !baseName.includes(shorthand)
        ? `${baseName} (${shorthand})`
        : baseName
    const facts = gridCertBySlug.get(certSlug)
    return { ...item, name, statusNote: getCredentialCardNote(certSlug), facts }
  }
  const roleCerts = category.items
    .filter((item) => !NOINDEX_ALIAS_HREFS.has(item.href))
    .filter((item) => {
      const certSlug = item.href.split('/').filter(Boolean).at(-1) ?? ''
      return certRoleAssignment.get(certSlug) === slug
    })
    .map(toRoleCard)
  // Credentials this hub recommends that the shared grid counts under another
  // role. Listed after the owned cards and labelled with their owning track, so
  // the hub count stays truthful while the card grid matches the decision table.
  const crossListedSlugs = ROLE_CROSS_LISTED_CERTS[slug] ?? []
  const crossListedCerts = crossListedSlugs
    .map((certSlug) => {
      const item = category.items.find((candidate) => candidate.href.endsWith(`/${certSlug}`))
      if (!item || NOINDEX_ALIAS_HREFS.has(item.href)) return null
      const ownerSlug = certRoleAssignment.get(certSlug)
      if (!ownerSlug || ownerSlug === slug) return null
      const ownerName = getCategoryBySlug(ownerSlug)?.name ?? ownerSlug
      return { ...toRoleCard(item), ownerName }
    })
    .filter((cert): cert is NonNullable<typeof cert> => cert !== null)
  /** Owned cards first, then the cross-listed ones, in one grid so a hub with a
   *  single owned credential does not render a lone card beside an empty column. */
  const hubCerts: Array<ReturnType<typeof toRoleCard> & { ownerName?: string }> = [
    ...roleCerts,
    ...crossListedCerts,
  ]
  const title = fitRoleTitle(
    ROLE_TITLES[slug] || `Salesforce ${category.name} Certifications (${RELEASE_YEAR})`,
    category.name,
  )
  const description = fitRoleDescription(category.name)

  const breadcrumb = [
    { name: 'Home', url: '/' },
    { name: 'Certifications', url: '/certifications' },
    { name: `${category.name} Certifications`, url: `/certifications/role/${slug}` },
  ]
  const roleFaqs = ROLE_FAQS[slug] ?? []
  const careerData = ROLE_CAREER_DATA[slug] ?? null
  // Every role now has hand-written decision cards. The fallback stays as a
  // guard for a newly added category, but it describes the actual credential
  // instead of the old placeholder copy.
  const decisionItems = ROLE_DECISION_DATA[slug] ?? roleCerts.slice(0, 3).map((item) => ({
    audience: `${category.name} track`,
    certification: item.name,
    href: item.href,
    why: `Open the ${item.name} guide for exam weightage, format, official source references, and free practice questions.`,
  }))
  const resourceLinks = ROLE_RESOURCE_LINKS[slug] ?? []
  const introCopy = ROLE_INTRO_COPY[slug]

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <ContentPageSchemas
        headline={title}
        description={description}
        path={`/certifications/role/${slug}`}
        breadcrumbItems={breadcrumb}
        faqItems={roleFaqs}
      />
      <RoleAggregationSchemas
        roleTitle={category.name}
        roleCerts={roleCerts}
        rolePath={`/certifications/role/${slug}`}
      />
      <Link
        href="/certifications"
        className="inline-flex items-center text-salesforce-blue hover:text-salesforce-dark font-medium mb-8"
      >
        <ChevronLeft className="h-5 w-5 mr-1" />
        All certifications
      </Link>

      <ContentPageAuthor />

      <div data-lcp-header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{category.name} Certifications</h1>
        <LastUpdated />
        <p className="text-xl text-gray-600 mb-2">
          {roleCertCount} certification{roleCertCount !== 1 ? 's' : ''} in this role.{' '}
          {introCopy?.lead ?? 'Pick one for practice questions and study materials.'}
        </p>
        <p className="text-gray-600">
          {introCopy?.body ??
            'Each certification has its own study guide, exam weightage, and practice questions. Start with the one that matches your goal.'}
        </p>
      </div>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Use This {category.name} Certification Hub</h2>
        <div className="space-y-3 text-sm leading-6 text-gray-700">
          <p>
            {ROLE_HUB_USAGE[slug] ??
              'This page is designed as a role-level decision guide, not just a directory. Start by choosing the certification ' +
                'that matches your current work, then open the certification page to review exam weightage, format, official ' +
                'source references, and free practice questions.'}
          </p>
          <p>
            If two certifications look similar, use the decision cards below before committing study time. They point to the
            best first exam for common candidate profiles and connect this role hub to deeper study guides, comparison pages,
            exam tips, and certification-path resources. That internal path helps you move from broad research to a specific
            exam plan without bouncing between unrelated pages.
          </p>
          {slug === 'accredited-professional' && (
            <p>
              Accredited Professional credentials are different from core Salesforce certifications because they usually
              validate product or industry-cloud implementation depth. Use them after you already understand the relevant
              platform, consultant, or admin baseline. The best AP choice is normally the one tied to your current delivery
              work, such as Health Cloud, Financial Services Cloud, Field Service, Communications Cloud, CPQ, or Commerce.
            </p>
          )}
        </div>
      </section>

      <section className="rounded-2xl border border-salesforce-blue/20 bg-gradient-to-br from-salesforce-blue/5 to-white p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Which {category.name} certification should you take first?
        </h2>
        <p className="text-sm text-gray-600 mb-5">
          Use this quick decision table before opening every exam page.
        </p>
        <div className={`grid ${balancedGridColumns(decisionItems.length)} gap-4`}>
          {decisionItems.map((item) => (
            <Link
              key={`${item.audience}-${item.href}`}
              href={item.href}
              className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm hover:border-salesforce-blue/50 hover:shadow-md transition-all"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-salesforce-blue mb-2">{item.audience}</p>
              <p className="font-bold text-gray-900 mb-2">{item.certification}</p>
              <p className="text-sm text-gray-600">{item.why}</p>
            </Link>
          ))}
        </div>
      </section>

      {resourceLinks.length > 0 && (
        <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">High-Intent {category.name} Resources</h2>
          <div className={`grid ${balancedGridColumns(resourceLinks.length)} gap-4`}>
            {resourceLinks.map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="rounded-lg bg-gray-50 border border-gray-100 p-4 hover:bg-salesforce-blue/5 hover:border-salesforce-blue/30 transition-colors"
              >
                <p className="font-semibold text-gray-900 mb-1">{resource.label}</p>
                <p className="text-sm text-gray-600">{resource.note}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {hubCerts.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`bg-white rounded-xl shadow-lg p-5 card-hover flex items-center justify-between group border transition-all duration-200 hover:border-salesforce-blue/50 ${
              item.ownerName ? 'border-dashed border-gray-200' : 'border-gray-100'
            }`}
          >
            <div className="flex items-center min-w-0">
              <div className="flex-shrink-0 w-10 h-10 bg-salesforce-blue/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-salesforce-blue/20 transition-colors duration-200">
                <Award className="h-6 w-6 text-salesforce-blue group-hover:scale-110 transition-transform duration-200" aria-label={`${item.name} certification badge icon`} />
              </div>
              <span className="min-w-0">
                <span className="block font-medium text-gray-900 group-hover:text-salesforce-blue transition-colors duration-200 break-words">
                  {item.name}
                </span>
                {item.ownerName && (
                  <span className="mt-1 inline-block rounded bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-700">
                    Counted under {item.ownerName}
                  </span>
                )}
                {item.statusNote && (
                  <span className="mt-1 inline-block rounded bg-amber-50 px-2 py-1 text-xs font-semibold text-amber-900">{item.statusNote}</span>
                )}
                {item.facts && (
                  <span className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-600">
                    {item.facts.questions && <span>{item.facts.questions} questions</span>}
                    {item.facts.duration && <span>{item.facts.duration}</span>}
                    {item.facts.passingScore && <span>{item.facts.passingScore} pass</span>}
                    {item.facts.cost && <span>{item.facts.cost}</span>}
                  </span>
                )}
              </span>
            </div>
            <ArrowRight className="h-5 w-5 text-gray-600 group-hover:text-salesforce-blue group-hover:translate-x-1 flex-shrink-0 ml-2 transition-all duration-200" />
          </Link>
        ))}
      </div>

      {crossListedCerts.length > 0 && (
        <p className="mt-4 text-sm text-gray-600">
          The dashed cards are the next exams this hub recommends in its decision table and roadmap. Each is counted under
          another track, so they sit outside the {roleCertCount} certification{roleCertCount !== 1 ? 's' : ''} this role is
          credited with rather than being left off the page.
        </p>
      )}

      {careerData && (
        <>
          {/* Salary & Career Overview */}
          <section className="mt-12 rounded-xl border border-gray-100 bg-white p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {slug === 'claude'
                ? 'Anthropic Claude Partner Certification Overview'
                : `Salesforce ${category.name} Career Overview`}
            </h2>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div className="rounded-lg bg-salesforce-blue/5 border border-salesforce-blue/20 p-4 text-center">
                <p className="text-xs font-semibold text-salesforce-blue uppercase tracking-wide mb-1">Entry Salary</p>
                <p className="text-lg font-bold text-gray-900">{careerData.salaryRange}</p>
              </div>
              <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-4 text-center">
                <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-1">Senior Salary</p>
                <p className="text-lg font-bold text-gray-900">{careerData.seniorSalaryRange}</p>
              </div>
              <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 text-center">
                <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">Time to First Cert</p>
                <p className="text-lg font-bold text-gray-900">{careerData.yearsToFirst}</p>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-900 mb-2">Typical Career Path</p>
              <p className="text-sm text-gray-700 bg-gray-50 rounded-lg px-4 py-3">{careerData.careerPath}</p>
            </div>
            <CareerRoadmapDiagram roleName={category.name} path={careerData.careerPath} />
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Top Skills Required</p>
              <div className="flex flex-wrap gap-2">
                {careerData.topSkills.map((skill) => (
                  <span key={skill} className="inline-flex rounded-full bg-salesforce-blue/10 px-3 py-1 text-xs font-medium text-salesforce-dark">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Daily Responsibilities */}
          <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">What Does a {ROLE_PERSON_LABEL[slug] ?? `Salesforce ${category.name}`} Do Day-to-Day?</h2>
            <ul className="space-y-2.5">
              {careerData.dailyResponsibilities.map((resp, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <span className="flex-shrink-0 mt-0.5 h-5 w-5 rounded-full bg-salesforce-blue/10 flex items-center justify-center text-xs font-bold text-salesforce-dark">{i + 1}</span>
                  {resp}
                </li>
              ))}
            </ul>
          </section>
        </>
      )}

      {roleFaqs.length > 0 && (
        <section className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <dl className="space-y-4">
            {roleFaqs.map((item, i) => (
              <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
                <dd className="text-sm text-gray-700">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      <div className="mt-12 text-center flex flex-wrap justify-center gap-3">
        <Link
          href="/certifications"
          className="inline-flex items-center px-6 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
        >
          <ChevronLeft className="h-5 w-5 mr-2" />
          Back to all certifications
        </Link>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200"
        >
          Home
        </Link>
      </div>
    </div>
  )
}
