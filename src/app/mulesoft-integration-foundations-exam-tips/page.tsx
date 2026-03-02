import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `MuleSoft Foundations Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `MuleSoft Foundations exam tips (${RELEASE_CURRENT}): 3-week study plan, API-led connectivity essentials, and mock exam strategies. Start free.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {  // Canonical to cert page — prevents GSC "chose different canonical"
  canonical: `${siteUrl}/certifications/mulesoft-integration-foundations`,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/mulesoft-integration-foundations-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `MuleSoft Integration Foundations exam tips ${RELEASE_CURRENT}, how to pass MuleSoft Integration Foundations, MuleSoft foundations study guide, MuleSoft API-led connectivity exam, Anypoint Platform certification tips`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'MuleSoft Integration Foundations Exam Tips', url: '/mulesoft-integration-foundations-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the MuleSoft Integration Foundations exam format?',
    answer: 'The MuleSoft Integration Foundations exam has 60 multiple-choice questions, a 90-minute time limit, a 66% passing score, and a $200 fee.',
  },
  {
    question: 'What are the highest-weight MuleSoft Foundations topics?',
    answer: 'API-led connectivity (26%) and MuleSoft Anypoint Platform fundamentals (24%) are the core focus areas. Understanding the System, Process, and Experience API layers is essential.',
  },
  {
    question: 'Is MuleSoft Foundations a prerequisite for other MuleSoft certs?',
    answer: 'No — it is an entry-level standalone certification. However, the concepts it validates (API-led connectivity, Anypoint Platform) provide a strong foundation before taking MuleSoft Developer I.',
  },
  {
    question: 'How hard is the MuleSoft Integration Foundations exam?',
    answer: 'It is the easiest MuleSoft certification. 3–4 weeks of study combined with hands-on practice in Anypoint Studio (available as a free trial) is sufficient for most candidates.',
  },
]

export default function MuleSoftIntegrationFoundationsExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/mulesoft-integration-foundations-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          MuleSoft Integration Foundations Exam Tips ({RELEASE_CURRENT}): How to Pass First Attempt
        </h1>
        <p className="text-lg text-gray-600">
          The MuleSoft Integration Foundations certification targets project team members who need working knowledge
          of API-led connectivity and the Anypoint Platform — not developers writing Mule code. These tips help you
          focus on the right concepts and avoid over-engineering your study plan.
        </p>
      </header>

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Exam At a Glance</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">45</p>
            <p className="text-xs text-gray-500 mt-0.5">Questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">60 min</p>
            <p className="text-xs text-gray-500 mt-0.5">Time Limit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">70%</p>
            <p className="text-xs text-gray-500 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$75</p>
            <p className="text-xs text-gray-500 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: Best Way to Pass MuleSoft Integration Foundations</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />The exam has 40 questions in 70 minutes. Passing score is 70% (28/40 questions). Aim for 80%+ on practice sets before booking.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />The exam fee is $75 USD — significantly lower than most Salesforce/MuleSoft certifications. It is accessible to non-developers on a project team.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />API-led connectivity (System, Process, Experience layers) is the most-tested concept. Understand the purpose of each layer and why the pattern exists.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Know what each Anypoint Platform tool does: Design Center, Exchange, Studio, API Manager, Runtime Manager. Questions often describe a task and ask which tool handles it.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">3-Week MuleSoft Integration Foundations Study Plan</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p><strong>Week 1:</strong> Integration fundamentals and API-led connectivity. Understand why point-to-point integration creates spaghetti architecture and how API-led connectivity solves it with reusable, composable layers. Memorise the three layers: System APIs (unlock data from systems of record), Process APIs (orchestrate and transform), Experience APIs (tailor data to the consumer channel).</p>
          <p><strong>Week 2:</strong> Anypoint Platform tools. Design Center (API design in RAML or OpenAPI), Anypoint Exchange (asset marketplace for APIs and connectors), Anypoint Studio (local IDE for building Mule apps), API Manager (security policies, rate limits, SLA tiers, client app management), Runtime Manager (deploy and monitor Mule apps, view logs and metrics). DataWeave is MuleSoft&apos;s data transformation language — know what it does, not how to write it.</p>
          <p><strong>Week 3:</strong> Core concepts and terminology. Mule Events (payload + attributes + variables), Connectors (pre-built, reusable components for systems like Salesforce, SAP, databases), the business value of composable integration (reuse, self-service, reduced IT backlog). Practice with full 40-question mock exams targeting 80%+ before booking.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Handle MuleSoft Foundations Exam Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Most questions describe a business scenario or a platform task and ask which API layer, tool, or concept applies.
          The exam does not test coding, so focus on understanding purpose and use case.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><span><strong>API layer questions:</strong> System API = unlock SAP, Salesforce, databases (backend, stable, change rarely). Process API = orchestrate calls to multiple System APIs, apply business logic, transform data. Experience API = expose data tailored to mobile, web, or partner portals. If a question says &ldquo;expose data from SAP&rdquo; the answer is System API. If &ldquo;combine data from three systems&rdquo; it is Process API.</span></li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><span><strong>Anypoint Platform tool questions:</strong> Design = Design Center. Publish/discover assets = Exchange. Build locally = Studio. Apply security policies and manage client access = API Manager. Deploy and monitor = Runtime Manager. Know these five associations cold.</span></li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><span><strong>Business value questions:</strong> The key outcome of API-led connectivity is reuse and self-service. Teams can consume published APIs without rebuilding integrations, reducing time-to-delivery. Avoid answers that focus only on cost savings — the primary value is speed and reusability.</span></li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><span><strong>Terminology questions:</strong> A Connector provides pre-built connectivity to an external system. A Mule Event is the unit of data flowing through a flow (payload + attributes + variables). DataWeave transforms data formats (JSON to XML, CSV to JSON, etc.) within integration flows.</span></li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="text-sm text-gray-700 mb-2">
          Use this minimum benchmark before scheduling your MuleSoft Integration Foundations exam:
        </p>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          80%+ on 2 timed practice sets (40 questions / 70 minutes each)
        </p>
        <p className="text-sm text-gray-700 mt-3">
          The official passing score is 70% (28/40 questions). Reaching 80%+ on practice sets means you have a 10-point buffer
          and are well above the threshold. Given the exam&apos;s conceptual focus, candidates with strong API-led connectivity
          understanding typically pass in 2–3 weeks of focused study.
        </p>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <dl className="space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
              <dd className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: item.answer }} />
            </div>
          ))}
        </dl>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Next Step</h2>
        <p className="text-sm text-gray-700 mb-4">
          Apply these tips with real MuleSoft Integration Foundations practice questions:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/certifications/mulesoft-integration-foundations"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors"
          >
            Start MuleSoft Foundations Practice Test
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
