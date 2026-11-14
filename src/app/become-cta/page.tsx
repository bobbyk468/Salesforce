import Link from '@/components/AppLink'
import { Metadata } from 'next'
import { Award, Target, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react'
import { CTA_JOURNEY_PHASES, getCtaJourneyCertCount, getCtaJourneyRequiredCount } from '@/lib/cta-journey-data'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import LastUpdated from '@/components/LastUpdated'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const metadataTitle = 'Become a Salesforce CTA: Career Path | Trailblaze Prep'
const ctaTitle = 'Become a Salesforce CTA | Trailblaze Prep'
const ogImageUrl = `${baseUrl}/og?t=${encodeURIComponent(metadataTitle)}`
const ctaDescription =
  'Follow the Salesforce CTA path from foundational certifications through architecture prerequisites to board review.'

export const metadata: Metadata = {
  title: { absolute: metadataTitle },
  description: ctaDescription,
  alternates: {
    canonical: `${baseUrl}/become-cta`,
    languages: { 'en-US': `${baseUrl}/become-cta`, 'x-default': `${baseUrl}/become-cta` },
  },
  openGraph: {
    title: metadataTitle,
    description: ctaDescription,
    type: 'article',
    url: `${baseUrl}/become-cta`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: metadataTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: metadataTitle,
    description: ctaDescription,
    images: [{ url: ogImageUrl, alt: metadataTitle }],
  },
}

const becomeCtaBreadcrumb = [{ name: 'Home', url: '/' }, { name: 'Become a CTA', url: '/become-cta' }]

const faqItems = [
  {
    question: 'What certifications do you need to become a Salesforce CTA?',
    answer: 'You need both Application Architect and System Architect. Salesforce grants Application Architect when you hold Platform App Builder, Platform Developer I, Data Architect, and Sharing and Visibility Architect. System Architect requires Platform Developer I, Integration Architect, Identity and Access Management Architect, and Development Lifecycle and Deployment Architect. Neither credential has its own exam.',
  },
  {
    question: 'How long does it take to become a Salesforce CTA?',
    answer: 'Many CTAs have 8–15 years of Salesforce experience before attempting the review board. With intensive focus, a minimum realistic timeline is 4–6 years: 1–2 years to build Admin/Developer credentials, followed by 2–4 years earning domain architect certifications and gaining the broad enterprise experience assessed by the board.',
  },
  {
    question: 'What is the Salesforce CTA review board?',
    answer: 'The CTA review board is a 2-hour panel evaluation. You present an architecture for a hypothetical business scenario to current Certified Technical Architects and defend decisions about integration, security, data architecture, and scalability. Passing requires broad knowledge of the Salesforce platform.',
  },
  {
    question: 'Where do you start on the path to becoming a Salesforce CTA?',
    answer: 'Begin with Salesforce Administrator (ADM-201) to learn platform fundamentals, then take Platform Developer I (PD1) to build Apex and automation knowledge. After that, pursue domain architect credentials such as Data Architect, Integration Architect, and Sharing and Visibility Architect in an order that fits your project experience.',
  },
]

/** Left-to-right arrow between boxes (first → second) */
function FlowArrowRight() {
  return (
    <div className="flex flex-shrink-0 items-center justify-center px-1 md:px-2 text-salesforce-blue" aria-hidden>
      <ArrowRight className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2.5} />
    </div>
  )
}

/** Down arrow: next phase */
function FlowArrowDown() {
  return (
    <div className="flex justify-center py-3 md:py-4" aria-hidden>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-salesforce-blue">
        <path d="M12 5v14M12 19l-6-6M12 19l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

export default function BecomeCtaPage() {
  const totalCerts = getCtaJourneyCertCount()
  const requiredCerts = getCtaJourneyRequiredCount()

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={ctaTitle} description={ctaDescription} path="/become-cta" breadcrumbItems={becomeCtaBreadcrumb} faqItems={faqItems} />
      {/* Hero */}
      <div data-lcp-header className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-6">
          <Target className="h-4 w-4" />
          From beginner to CTA
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Become a Certified Technical Architect
        </h1>
        <LastUpdated />
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
          Follow the stages from platform basics to the CTA review board. Each box shows a certification in the path.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            {requiredCerts} required
          </span>
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700">
            <Sparkles className="h-4 w-4 text-amber-500" />
            {totalCerts} certs in flow
          </span>
        </div>
      </div>

      <section className="mb-10 rounded-xl border border-gray-100 bg-white p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">What This CTA Roadmap Is For</h2>
        <div className="space-y-3 text-sm leading-6 text-gray-700">
          <p>
            The Salesforce Certified Technical Architect path involves more than a single exam. It moves through platform
            fundamentals, development, domain architect credentials, solution design, and the CTA evaluation and review board.
            Use this roadmap to see where each certification fits.
          </p>
          <p>
            If you are early in your career, use the first phases to build a foundation. If you already lead implementations,
            review the architect phases to find gaps in identity, integration, data, sharing, deployment, or application design.
            Plan each step around your experience instead of collecting certifications without a clear purpose.
          </p>
          <p>
            Before moving to the next credential, try to apply its skills on a real project. CTA reviewers assess how you
            weigh trade-offs. Strong candidates can explain why they chose a sharing model, integration pattern, identity flow,
            data strategy, or deployment approach for a particular business need.
          </p>
          <p>
            Choose a next credential that builds a skill you need, then pair study with implementation practice. Admins may
            want more development and data-model experience; developers may need to deepen sharing, identity, and stakeholder
            communication; consultants may benefit from architecture concepts and better discovery of non-functional needs.
          </p>
        </div>
      </section>

      {/* Flowchart: boxes connected left-to-right (first → second), phases stacked top to bottom */}
      <div className="flex flex-col items-stretch max-w-6xl mx-auto overflow-x-auto">
        {CTA_JOURNEY_PHASES.map((phase, phaseIndex) => (
          <div key={phase.phase} id={`phase-${phase.phase}`} className="scroll-mt-24">
            {/* Phase label */}
            <div className="mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-salesforce-blue text-white text-sm font-bold flex-shrink-0">
                {phase.phase}
              </span>
              <div>
                <h2 className="text-base font-bold text-gray-900">{phase.title}</h2>
                <p className="text-sm text-gray-600">{phase.description}</p>
              </div>
            </div>

            {/* Row: [Box] → [Box] → [Box], left to right flow (scroll on small screens) */}
            <div className="flex flex-nowrap items-stretch gap-0 min-h-[100px] pb-2 md:pb-0 overflow-x-auto">
              {phase.certs.map((cert, certIndex) => (
                <div key={cert.href} className="flex items-stretch gap-0 flex-shrink-0">
                  {certIndex > 0 && <FlowArrowRight />}
                  <Link
                    href={cert.href}
                    className={`group flex flex-col min-w-[140px] max-w-[180px] md:min-w-[160px] md:max-w-[200px] p-4 rounded-xl border-2 transition-all shadow-sm hover:shadow-md hover:scale-[1.02] ${
                      cert.required
                        ? 'bg-white border-emerald-300 hover:border-emerald-500'
                        : 'bg-white border-gray-200 hover:border-salesforce-blue/50'
                    }`}
                  >
                    <span className="font-semibold text-gray-900 group-hover:text-salesforce-blue transition-colors text-sm leading-tight">
                      {cert.name}
                    </span>
                    {cert.required && (
                      <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-emerald-700">
                        <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0" />
                        Required
                      </span>
                    )}
                    {cert.note && !cert.required && (
                      <span className="mt-1 text-xs text-gray-600 line-clamp-2">{cert.note}</span>
                    )}
                    {cert.prerequisites && cert.prerequisites.length > 0 && (
                      <span className="mt-2 text-xs text-gray-600" title={cert.prerequisites.map((p) => p.name).join(', ')}>
                        ← {cert.prerequisites.map((p) => p.name).join(', ')}
                      </span>
                    )}
                  </Link>
                </div>
              ))}
            </div>

            {/* Down arrow: next phase */}
            {phaseIndex < CTA_JOURNEY_PHASES.length - 1 && <FlowArrowDown />}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-12 p-4 rounded-xl bg-white border border-gray-100 shadow-sm max-w-2xl mx-auto">
        <p className="text-sm font-semibold text-gray-700 mb-2">Flow legend</p>
        <ul className="text-sm text-gray-600 space-y-1">
          <li className="flex items-center gap-2">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            Left to right shows sequence: complete the first item, then the second, then the third
          </li>
          <li className="flex items-center gap-2">
            <span className="text-salesforce-blue">↓</span>
            Down points to the next phase; finish the row above first
          </li>
          <li className="flex items-center gap-2">
            <span className="w-4 h-4 rounded border-2 border-emerald-200 bg-white flex-shrink-0" />
            Required for CTA
          </li>
          <li className="flex items-center gap-2">
            <span className="w-4 h-4 rounded border-2 border-gray-200 bg-white flex-shrink-0" />
            Recommended / optional
          </li>
        </ul>
      </div>

      {/* Summary & CTA */}
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
            <Award className="h-5 w-5 text-salesforce-blue" />
            Minimum path to CTA
          </h3>
          <p className="text-gray-600 text-sm">
            Complete the required certifications in order: Platform Foundations → Administrator → App Builder → Developer I → Developer II → all four Domain Architects → Application Architect + System Architect → Technical Architect (CTA) → Evaluation → Review Board.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-salesforce-blue/10 border border-salesforce-blue/20">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Start the flow</h3>
          <p className="text-gray-700 text-sm mb-4">
            Start with Platform Foundations or browse the other certification paths.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/certifications/platform-foundations"
              className="inline-flex items-center gap-1 px-4 py-2 bg-salesforce-blue text-white rounded-lg font-medium hover:bg-salesforce-dark transition-colors text-sm"
            >
              Platform Foundations
            </Link>
            <Link
              href="/certification-path"
              className="inline-flex items-center gap-1 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm"
            >
              All paths
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
