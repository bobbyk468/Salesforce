import Link from 'next/link'
import { Metadata } from 'next'
import { Award, Target, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react'
import { CTA_JOURNEY_PHASES, getCtaJourneyCertCount, getCtaJourneyRequiredCount } from '@/lib/cta-journey-data'
import ContentPageSchemas from '@/components/ContentPageSchemas'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const ctaTitle = 'How to Become a Salesforce Certified Technical Architect (CTA) | Trailblaze Prep'
const ogImageUrl = `${baseUrl}/og?t=${encodeURIComponent(ctaTitle)}`
const ctaDescription =
  'Complete path to Salesforce CTA certification from beginner to board review. Covers Admin, Developer, Domain & System Architect prerequisites.'

export const metadata: Metadata = {
  title: { absolute: ctaTitle },
  description: ctaDescription,
  alternates: { canonical: `${baseUrl}/become-cta` },
  openGraph: {
    title: ctaTitle,
    description: ctaDescription,
    type: 'article',
    url: `${baseUrl}/become-cta`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: ctaTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: ctaTitle,
    description: ctaDescription,
    images: [{ url: ogImageUrl, alt: ctaTitle }],
  },
  keywords:
    'CTA path, Certified Technical Architect, Salesforce CTA, CTA from beginner, Technical Architect certification, Application Architect, System Architect',
}

const becomeCtaBreadcrumb = [{ name: 'Home', url: '/' }, { name: 'Become a CTA', url: '/become-cta' }]

const faqItems = [
  {
    question: 'What certifications do you need to become a Salesforce CTA?',
    answer: 'The CTA path requires completing the Application Architect credential (which includes Sharing and Visibility Architect, Data Architect, Development Lifecycle and Deployment Architect, and Integration Architect) and the System Architect credential (which includes Identity and Access Management Architect, Heroku Architect, and others). Together these are the domain architect prerequisites before the CTA review board.',
  },
  {
    question: 'How long does it take to become a Salesforce CTA?',
    answer: 'Most CTAs have 8–15 years of Salesforce experience before attempting the review board. The minimum realistic timeline with intensive focus is 4–6 years: 1–2 years building Admin/Developer credentials, then 2–4 years earning the domain architect certifications and accumulating the breadth of enterprise project experience the review board evaluates.',
  },
  {
    question: 'What is the Salesforce CTA review board?',
    answer: 'The CTA review board is a 2-hour panel evaluation where candidates present a solution architecture to a panel of existing Certified Technical Architects. Candidates receive a hypothetical business scenario and must defend architectural decisions covering integration, security, data architecture, and scalability. Passing requires broad expertise across the entire Salesforce platform.',
  },
  {
    question: 'Where do you start on the path to becoming a Salesforce CTA?',
    answer: 'Start with the Salesforce Administrator (ADM-201) certification to build platform fundamentals, then progress to Platform Developer I (PD1) for Apex and automation depth. From there, pursue the domain architect credentials (Data Architect, Integration Architect, Sharing and Visibility Architect, etc.) in order of your project experience.',
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
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
          Flow from zero experience to CTA. Follow the path below—each box is a certification you can study.
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
                <p className="text-sm text-gray-500">{phase.description}</p>
              </div>
            </div>

            {/* Row: [Box] → [Box] → [Box] — left to right flow (scroll on small screens) */}
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
                      <span className="mt-1 text-xs text-gray-500 line-clamp-2">{cert.note}</span>
                    )}
                    {cert.prerequisites && cert.prerequisites.length > 0 && (
                      <span className="mt-2 text-xs text-gray-500" title={cert.prerequisites.map((p) => p.name).join(', ')}>
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
            Left to right = order: first, then second, then third
          </li>
          <li className="flex items-center gap-2">
            <span className="text-salesforce-blue">↓</span>
            Down = next phase (complete row above, then go to next row)
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
            Follow the required certs in order: Platform Foundations → Administrator → App Builder → Developer I → Developer II → all four Domain Architects → Application Architect + System Architect → Technical Architect (CTA) → Evaluation → Review Board.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-salesforce-blue/10 border border-salesforce-blue/20">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Start the flow</h3>
          <p className="text-gray-700 text-sm mb-4">
            Begin with Platform Foundations or see all certification paths.
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
