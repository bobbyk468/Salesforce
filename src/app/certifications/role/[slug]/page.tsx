import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Award, ArrowRight, ChevronLeft } from 'lucide-react'
import { Metadata } from 'next'
import { getCategoryBySlug, CERTIFICATION_CATEGORIES } from '@/lib/certifications-data'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return CERTIFICATION_CATEGORIES.map((c) => ({ slug: c.slug }))
}

const ROLE_TITLES: Record<string, string> = {
  architect:              `Salesforce Architect Certification Path (${RELEASE_CURRENT})`,
  consultant:             `Salesforce Certified Consultant Certifications (${RELEASE_CURRENT})`,
  marketing:              `Salesforce Marketing Cloud Certification (${RELEASE_CURRENT})`,
  associate:              `Salesforce Associate Certification (${RELEASE_CURRENT})`,
  administrator:          `Salesforce Admin Certification: ADM-201 + More (${RELEASE_CURRENT})`,
  developer:              `Salesforce Developer Certification (${RELEASE_CURRENT})`,
  tableau:                `Salesforce Tableau Certification Guide (${RELEASE_CURRENT})`,
  'accredited-professional': `Salesforce Accredited Professional Certs (${RELEASE_CURRENT})`,
  sales:                  `Salesforce Sales Certification Guide (${RELEASE_CURRENT})`,
  designer:               `Salesforce Designer Certifications (${RELEASE_CURRENT})`,
}

const ROLE_KEYWORDS: Record<string, string> = {
  architect:              `Salesforce Architect certification ${RELEASE_CURRENT}, Application Architect, System Architect, Integration Architect, CTA path`,
  consultant:             `Salesforce Consultant certification ${RELEASE_CURRENT}, Sales Cloud Consultant, Service Cloud Consultant, Experience Cloud Consultant`,
  marketing:              `Salesforce Marketing certification ${RELEASE_CURRENT}, Email Specialist, Marketing Cloud Consultant, Pardot Specialist`,
  associate:              `Salesforce Associate certification ${RELEASE_CURRENT}, Platform Foundations, AI Associate, entry level Salesforce cert`,
  'accredited-professional': `Salesforce Accredited Professional ${RELEASE_CURRENT}, Field Service AP, B2B Commerce AP, Health Cloud AP`,
  administrator:          `Salesforce Administrator certification ${RELEASE_CURRENT}, ADM-201, Advanced Administrator, App Builder DEV-402`,
  developer:              `Salesforce Developer certification ${RELEASE_CURRENT}, Platform Developer I, PD1, Platform Developer II, PD2, JavaScript Developer`,
  tableau:                `Salesforce Tableau certification ${RELEASE_CURRENT}, Tableau Architect, Tableau Consultant, Tableau Data Analyst`,
  sales:                  `Salesforce Sales certification ${RELEASE_CURRENT}, Sales Cloud Consultant, Sales Foundations`,
  designer:               `Salesforce Designer certification ${RELEASE_CURRENT}, UX Designer, Strategy Designer`,
}

type FaqItem = { question: string; answer: string }
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
}

const ROLE_DESCRIPTIONS: Record<string, string> = {
  architect:
    'Salesforce Architect certification path to CTA: Application, System, Integration, Data Architect. Free practice questions & study guides. Start free.',
  consultant:
    'All Salesforce Certified Consultant certifications: Sales Cloud, Service Cloud, Experience Cloud, Field Service + more. Free practice exams. Start free.',
  marketing:
    'Salesforce Marketing Cloud certifications: Email Specialist, Marketing Cloud Consultant, Pardot Specialist + more. Free practice & study guides. Start free.',
  associate:
    'Salesforce Associate certification: Platform Foundations ($75) and AI Associate ($200). Free practice & study guides. Start free.',
  'accredited-professional':
    'Salesforce Accredited Professional certs: Field Service, B2B Commerce, Health Cloud + more. Free practice & study guides. Start free.',
  administrator:
    'Salesforce Administrator certification: ADM-201, Advanced Admin (ADM-211), App Builder (DEV-402) + more. Free practice & study guides. Start free.',
  developer:
    'Salesforce Developer certification: PD1, PD2, JavaScript Developer, MuleSoft, OmniStudio + more. Free practice & study guides. Start free.',
  tableau:
    'Salesforce Tableau certification: Tableau Architect, Consultant, Data Analyst, Desktop Foundations + more. Free practice & study guides. Start free.',
  sales:
    'Salesforce Sales certification: Sales Cloud Consultant and Certified Sales Foundations. Free practice & study guides. Start free.',
  designer:
    'Salesforce Designer certifications: Platform Strategy Designer and UX Designer. Free practice & study guides. Start free.',
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
    keywords: ROLE_KEYWORDS[slug] || `Salesforce ${category.name} certification ${RELEASE_CURRENT}, ${category.name} certification path`,
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
    { name: 'All Certifications', url: '/certifications' },
    { name: `${category.name} Certifications`, url: `/certifications/role/${slug}` },
  ]
  const webPageJsonLd = getWebPageJsonLd({
    name: title,
    description,
    path: `/certifications/role/${slug}`,
    breadcrumbItems: breadcrumb,
  })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumb)
  const roleFaqs = ROLE_FAQS[slug] ?? []
  const faqJsonLd = roleFaqs.length > 0 ? getFaqPageJsonLd(roleFaqs) : null

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
      <Link
        href="/certifications"
        className="inline-flex items-center text-salesforce-blue hover:text-salesforce-dark font-medium mb-8"
      >
        <ChevronLeft className="h-5 w-5 mr-1" />
        All certifications
      </Link>

      <div className="mb-10">
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
            <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-salesforce-blue group-hover:translate-x-1 flex-shrink-0 ml-2 transition-all duration-200" />
          </Link>
        ))}
      </div>

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
