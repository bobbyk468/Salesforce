import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Award, ArrowRight, ChevronLeft } from 'lucide-react'
import { Metadata } from 'next'
import { getCategoryBySlug, CERTIFICATION_CATEGORIES } from '@/lib/certifications-data'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RoleAggregationSchemas from '@/components/RoleAggregationSchemas'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { RELEASE_CURRENT } from '@/lib/release-data'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return CERTIFICATION_CATEGORIES.map((c) => ({ slug: c.slug }))
}

const ROLE_TITLES: Record<string, string> = {
  architect:              `Salesforce Architect Certification Path (${RELEASE_CURRENT})`,
  consultant:             `Salesforce Consultant Cert Path: Free Practice (${RELEASE_CURRENT})`,
  marketing:              `Salesforce Marketing Cloud Certification (${RELEASE_CURRENT})`,
  associate:              `Salesforce Associate Certification (${RELEASE_CURRENT})`,
  administrator:          `Salesforce Admin Certification: ADM-201 + More (${RELEASE_CURRENT})`,
  developer:              `Salesforce Developer Certification (${RELEASE_CURRENT})`,
  tableau:                `Salesforce Tableau Certification Guide (${RELEASE_CURRENT})`,
  'accredited-professional': `Salesforce Accredited Professional Certs (${RELEASE_CURRENT})`,
  sales:                  `Salesforce Sales Certification Guide (${RELEASE_CURRENT})`,
  designer:               `Salesforce Designer Certifications (${RELEASE_CURRENT})`,
  claude:                 `Claude Certification Guide: All 4 Exams (${RELEASE_CURRENT})`,
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

const ROLE_CAREER_DATA: Record<string, RoleCareerData> = {
  administrator: {
    salaryRange: '$65,000–$95,000',
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
    careerPath: 'ADM-201 → Sales Cloud or Service Cloud Consultant → Experience Cloud Consultant → Business Analyst → System Architect',
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
    careerPath: 'AI Associate or Platform Foundations → ADM-201 → App Builder → Specialist track of choice',
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
    careerPath: 'ADM-201 → Sales Cloud Consultant → Sales Foundations (optional) → Service Cloud Consultant or CPQ Admin',
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

const ROLE_FAQS: Record<string, FaqItem[]> = {
  administrator: [
    { question: 'What is the first Salesforce certification for an administrator?', answer: 'The Salesforce Administrator (ADM-201) is the recommended first certification for anyone on the admin track. It covers the full platform — security model, automation, data management, reports, and dashboards. All other admin certifications (Advanced Administrator, App Builder) build on ADM-201 knowledge.' },
    { question: 'How long does it take to get the Salesforce Administrator certification?', answer: 'Most candidates with no prior Salesforce experience pass ADM-201 in 8–12 weeks of part-time study. Candidates with existing CRM or Salesforce user experience often pass in 4–6 weeks. The exam is 60 questions, 105 minutes, and requires a 65% score.' },
    { question: 'What admin certifications come after ADM-201?', answer: 'After ADM-201, the most common next certifications are Platform App Builder (declarative customisation), Advanced Administrator (advanced security and automation), and Salesforce Business Analyst. Admins who want to move into consulting typically take Sales Cloud Consultant or Service Cloud Consultant.' },
  ],
  developer: [
    { question: 'What is the first Salesforce developer certification?', answer: 'Platform Developer I (PD1) is the recommended first developer certification. It tests Apex, Apex triggers, Lightning Web Components (LWC), governor limits, testing, and REST integration. No prior Salesforce certification is required, but ADM-201 knowledge is strongly recommended.' },
    { question: 'What is the difference between PD1 and PD2?', answer: 'PD1 (Platform Developer I) tests foundational Apex, LWC, and deployment — the building blocks of Salesforce development. PD2 (Platform Developer II) tests advanced Apex patterns, integration architecture, performance optimisation, and complex data models. PD1 is required before PD2.' },
    { question: 'Do Salesforce developers need ADM-201 before PD1?', answer: 'ADM-201 is not a formal prerequisite for PD1, but it is strongly recommended. PD1 assumes knowledge of the Salesforce data model, sharing model, and deployment process — all ADM-201 topics. Candidates who skip ADM-201 typically struggle with the Salesforce Fundamentals section of PD1.' },
  ],
  consultant: [
    { question: 'What Salesforce certification do consultants need first?', answer: 'Salesforce recommends ADM-201 before any consultant certification. After ADM-201, the most common first consultant cert is Sales Cloud Consultant or Service Cloud Consultant, depending on your specialisation. Both have the same exam format: 60 questions, 105 minutes, 65% passing score, $200 fee.' },
    { question: 'Is the Sales Cloud or Service Cloud Consultant exam harder?', answer: 'Both are similarly difficult and test scenario-based application of Salesforce features to business requirements. Sales Cloud Consultant is slightly broader (territory management, forecasting, CPQ basics); Service Cloud Consultant is more technical in places (Omni-Channel routing, entitlements, CTI integration). Your background determines which feels harder.' },
    { question: 'How many consultant certifications should I aim for?', answer: 'Most Salesforce consultants hold 2–4 certifications. A common combination is ADM-201 + Sales Cloud Consultant + Service Cloud Consultant, which covers most CRM implementations. Adding Experience Cloud Consultant or Field Service Consultant expands your scope for specialist projects.' },
  ],
  architect: [
    { question: 'What is the path to Salesforce Certified Technical Architect (CTA)?', answer: 'The CTA path requires: Application Architect (4 certs: Data Architect, Sharing and Visibility Architect, Integration Architect, Dev Lifecycle Architect) + System Architect (4 certs: Identity and Access Management, Heroku Architect, Integration Architect, Dev Lifecycle Architect). After completing both, you sit a two-part CTA evaluation — a written exam and a live board review.' },
    { question: 'Which Salesforce architect certification should I take first?', answer: 'Most candidates start with Integration Architect or Data Architect — both test skills that complement consultant or developer experience. Integration Architect covers API design, middleware, and data synchronisation patterns. Data Architect covers MDM, data modelling, and ETL strategies. Both require strong ADM-201 and PD1 knowledge.' },
    { question: 'How long does the Salesforce architect path take?', answer: 'Completing all 8 architect credentials and the CTA evaluation typically takes 3–6 years of dedicated study alongside active project experience. Most successful CTA candidates have 8–10 years of Salesforce experience. The written CTA exam and board review are considered among the most difficult credentialling processes in the enterprise software industry.' },
  ],
  marketing: [
    { question: 'Which Marketing Cloud certification should I take first?', answer: 'For Marketing Cloud Engagement (formerly ExactTarget), start with the Marketing Cloud Email Specialist — it tests core Journey Builder, Email Studio, Content Builder, and Automation Studio knowledge. For Marketing Cloud Account Engagement (formerly Pardot), the Pardot Specialist is the entry point.' },
    { question: 'Is the Marketing Cloud Email Specialist hard?', answer: 'The Email Specialist exam (60 questions, 105 minutes, 65% passing) is considered moderately difficult. The highest-weight sections are Email Sending and Delivery (24%) and Journey Building (20%). Candidates without hands-on Marketing Cloud Engagement experience find it significantly harder — lab practice in a sandbox is essential.' },
  ],
  associate: [
    { question: 'Which Salesforce associate certification should I take first?', answer: 'The AI Associate ($75, 40 questions, 65%) is the easiest Salesforce certification available — no Salesforce experience required. For those who want a broader platform foundation, the Salesforce Platform Foundations associate cert covers core CRM, flow, and app-building concepts at an introductory level.' },
    { question: 'Is the AI Associate a good first Salesforce certification?', answer: 'Yes — the AI Associate is Salesforce\'s most accessible entry-level certification. It tests conceptual knowledge of AI (machine learning types, Einstein features, responsible AI principles) with no coding required. It is an ideal first certification for business analysts, marketers, and non-technical users who want to validate Salesforce AI knowledge.' },
  ],
  tableau: [
    { question: 'Which Tableau certification should I take first?', answer: 'Tableau Desktop Specialist (now Desktop Foundations) is the entry-level Tableau certification. It tests core Tableau Desktop skills: connecting to data, building charts (bar, line, scatter, maps), calculated fields, and basic dashboard design. The Tableau Certified Data Analyst is the next step, testing more advanced analysis and Prep Builder.' },
    { question: 'Is the Tableau Data Analyst exam difficult?', answer: 'The Tableau Certified Data Analyst exam (60 questions, 120 minutes, 75% passing score) is considered moderately difficult. The higher passing score (75% vs 65% for most Salesforce certs) makes it more demanding. Hands-on practice building dashboards in Tableau Desktop is essential — theoretical knowledge alone is insufficient.' },
  ],
  'accredited-professional': [
    { question: 'What is a Salesforce Accredited Professional (AP) certification?', answer: 'Salesforce Accredited Professional certifications validate implementation expertise in specific Salesforce industry clouds or add-on products. Examples include Field Service AP, Health Cloud AP, Financial Services Cloud AP, and B2B Commerce AP. APs are typically add-on credentials for consultants who already hold a relevant core certification.' },
    { question: 'Do I need ADM-201 before an Accredited Professional cert?', answer: 'Most Accredited Professional certifications do not formally require ADM-201, but they assume advanced Salesforce configuration knowledge. Field Service AP, for example, assumes deep familiarity with Service Cloud. Health Cloud AP requires Service Cloud or Sales Cloud knowledge. In practice, most AP candidates have 2+ years of hands-on Salesforce experience.' },
  ],
  claude: [
    { question: 'Which Claude certification should I take first?', answer: 'The Claude Certified Associate – Foundations (CCAO-F, $99) is the recommended starting point. It tests practical Claude skills — prompt writing, output evaluation, model selection, and responsible AI — with no coding required. Business professionals, consultants, and non-technical users should start here.' },
    { question: 'What is the difference between Claude Developer and Architect certifications?', answer: 'The Developer certification (CCDV-F) tests hands-on engineering skills: building with the Claude API, tool use, MCP servers, and shipping AI applications. The Architect certifications (CCAR-F and CCAR-P) test system design: multi-agent orchestration, Claude Code configuration, reliability patterns, and enterprise-scale architecture. Developers build; architects design.' },
    { question: 'Do I need a prerequisite for the Claude Architect Professional (CCAR-P)?', answer: 'Yes — the Claude Certified Architect – Foundations (CCAR-F) is a prerequisite for CCAR-P. The Professional exam builds on Foundations concepts and tests advanced topics: enterprise architecture, multi-agent orchestration, security, compliance, and cost optimization at scale.' },
  ],
}

const ROLE_DESCRIPTIONS: Record<string, string> = {
  architect:
    'Salesforce Architect cert path to CTA: Application, System, Integration, Data Architect. Free practice — no sign-up. Start now.',
  consultant:
    'Certified Salesforce Consultant: all exams — Sales Cloud, Service Cloud, Experience Cloud + more. Free practice, no sign-up. Start now.',
  marketing:
    'Salesforce Marketing Cloud certifications: Email Specialist, Marketing Cloud Consultant, Pardot Specialist + more. Free practice & study guides. Start free now.',
  associate:
    'Salesforce Associate certification: Platform Foundations ($75) and AI Associate ($200). Free practice & study guides. Start free now.',
  'accredited-professional':
    'Salesforce Accredited Professional certs: Field Service, B2B Commerce, Health Cloud + more. Free practice & study guides. Start free now.',
  administrator:
    'Salesforce Administrator certification: ADM-201, Advanced Admin (ADM-211), App Builder (DEV-402) + more. Free practice & study guides. Start free now.',
  developer:
    'Salesforce Developer certification: PD1, PD2, JavaScript Developer, MuleSoft, OmniStudio + more. Free practice & study guides. Start free now.',
  tableau:
    'Salesforce Tableau certification: Tableau Architect, Consultant, Data Analyst, Desktop Foundations + more. Free practice & study guides. Start free now.',
  sales:
    'Salesforce Sales certification: Sales Cloud Consultant and Certified Sales Foundations. Free practice & study guides. Start free now.',
  designer:
    'Salesforce Designer certifications: Platform Strategy Designer and UX Designer. Free practice & study guides. Start free now.',
  claude:
    'Claude certifications by Anthropic: Associate, Developer, Architect Foundations and Professional. Free practice questions and study guides. Start free now.',
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) return { title: 'Certification Not Found' }
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
  const canonicalUrl = `${siteUrl}/certifications/role/${slug}`
  // Use absolute title to avoid template duplication (template adds "| Trailblaze Prep")
  const title = ROLE_TITLES[slug] || `Salesforce ${category.name} Certifications (${RELEASE_CURRENT})`
  const description =
    ROLE_DESCRIPTIONS[slug] ||
    `Salesforce ${category.name} certifications: ${RELEASE_CURRENT} study guides, free practice questions, and exam weightage. Start free.`
  
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      type: 'website',
      url: canonicalUrl,
      images: [
        {
          url: `${siteUrl}/og?t=${encodeURIComponent(`Salesforce ${category.name} Certifications`)}&k=${slug}`,
          width: 1200,
          height: 630,
          alt: `${category.name} Certifications - Free Salesforce Study Guide`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(`Salesforce ${category.name} Certifications`)}&k=${slug}`, alt: title }],
    },
  }
}

export default async function RoleCertificationsPage({ params }: Props) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) notFound()
  const title = ROLE_TITLES[slug] || `Salesforce ${category.name} Certifications (${RELEASE_CURRENT})`
  const description =
    ROLE_DESCRIPTIONS[slug] ||
    `Salesforce ${category.name} certifications: ${RELEASE_CURRENT} study guides, free practice questions, and exam weightage. Start free.`

  const breadcrumb = [
    { name: 'Home', url: '/' },
    { name: 'Certifications', url: '/certifications' },
    { name: `${category.name} Certifications`, url: `/certifications/role/${slug}` },
  ]
  const roleFaqs = ROLE_FAQS[slug] ?? []
  const careerData = ROLE_CAREER_DATA[slug] ?? null

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
        roleCerts={category.items}
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
        <p className="text-xl text-gray-600 mb-2">
          {category.items.length} certification{category.items.length !== 1 ? 's' : ''} in this role. Pick one for practice questions and study materials.
        </p>
        <p className="text-gray-600">
          Each certification has its own study guide, exam weightage, and practice questions. Start with the one that matches your goal. Each cert page has exam weightage and practice questions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {category.items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="bg-white rounded-xl shadow-lg p-5 card-hover flex items-center justify-between group border border-gray-100 hover:border-salesforce-blue/50 transition-all duration-200"
          >
            <div className="flex items-center min-w-0">
              <div className="flex-shrink-0 w-10 h-10 bg-salesforce-blue/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-salesforce-blue/20 transition-colors duration-200">
                <Award className="h-6 w-6 text-salesforce-blue group-hover:scale-110 transition-transform duration-200" aria-label={`${item.name} certification badge icon`} />
              </div>
              <span className="font-medium text-gray-900 group-hover:text-salesforce-blue transition-colors duration-200 truncate">
                {item.name}
              </span>
            </div>
            <ArrowRight className="h-5 w-5 text-gray-600 group-hover:text-salesforce-blue group-hover:translate-x-1 flex-shrink-0 ml-2 transition-all duration-200" />
          </Link>
        ))}
      </div>

      {careerData && (
        <>
          {/* Salary & Career Overview */}
          <section className="mt-12 rounded-xl border border-gray-100 bg-white p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Salesforce {category.name} Career Overview</h2>
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
            <h2 className="text-xl font-bold text-gray-900 mb-4">What Does a Salesforce {category.name} Do Day-to-Day?</h2>
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
