import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `MuleSoft Developer I Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `MuleSoft Developer I exam tips for ${RELEASE_CURRENT}: Mule 4 flows, connectors, DataWeave, error handling, and scenario strategy to pass first attempt.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/mulesoft-developer-i-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/mulesoft-developer-i-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `MuleSoft Developer I exam tips ${RELEASE_CURRENT}, how to pass MuleSoft Developer I, MCPA-Level-1 study guide, MuleSoft certification tips 2026`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'MuleSoft Developer I Exam Tips', url: '/mulesoft-developer-i-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the MuleSoft Developer I exam format?',
    answer: 'The MuleSoft Developer I exam has 60 multiple-choice questions, a 120-minute time limit, a 70% passing score, and a $200 fee ($100 retake). It tests Mule 4 application development using Anypoint Studio, DataWeave 2.0, connectors, and error handling patterns.',
  },
  {
    question: 'What are the highest-weight MuleSoft Developer I exam sections?',
    answer: 'Designing Mule Applications (30%) and Consuming Web Services (22%) together account for 52% of the exam. Building Mule flows, configuring HTTP connectors, using DataWeave for data transformation, and implementing error handling strategies are the most heavily tested topics.',
  },
  {
    question: 'What is DataWeave and how important is it for the exam?',
    answer: 'DataWeave is MuleSoft&apos;s data transformation language — the primary way to map, filter, and reshape data in Mule 4 flows. It is tested heavily across multiple sections. You need to be comfortable reading and writing DataWeave 2.0 scripts: using map, filter, mapObject, pluck, and conditional logic to transform JSON, XML, and CSV payloads.',
  },
  {
    question: 'What is the difference between MuleSoft Developer I and Developer II?',
    answer: 'Developer I covers foundational Mule 4 application development — flows, connectors, DataWeave, and basic error handling. Developer II tests advanced topics: Anypoint MQ, batch processing, API-led connectivity design patterns, custom policy implementation, and advanced DataWeave. Developer I is the prerequisite foundation for Developer II.',
  },
]

export default function MuleSoftDeveloperIExamTipsPage() {
  const webPageJsonLd = getWebPageJsonLd({ name: pageTitle, description: pageDescription, path: '/mulesoft-developer-i-exam-tips', breadcrumbItems })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline: pageTitle, description: pageDescription, path: '/mulesoft-developer-i-exam-tips' })
  const faqJsonLd = getFaqPageJsonLd(faqItems)

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          MuleSoft Developer I Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The MuleSoft Developer I exam tests your ability to build Mule 4 integration applications using Anypoint
          Studio. These tips focus on DataWeave transformation, flow design, error handling, and API consumption
          that define the highest-weight sections of this exam.
        </p>
      </header>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What MuleSoft Developer I Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Mule 4 application design</strong> — Flows vs. subflows, event processors (choice, scatter-gather, for-each, parallel-for-each), message structure (payload, attributes, variables), and how data flows through a Mule application.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>DataWeave 2.0</strong> — Reading and writing DataWeave scripts to transform JSON, XML, and CSV. Key functions: map, filter, mapObject, pluck, groupBy, flatten, and type coercion. Understanding DataWeave&apos;s functional programming model is essential.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Connectors and error handling</strong> — HTTP Request connector, Database connector, File connector, error types (connectivity, expression, security), On Error Continue vs. On Error Propagate, and retry strategies.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Designing Mule Applications</span>
            <span className="font-bold text-salesforce-blue ml-4">30%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Consuming Web Services</span>
            <span className="font-bold text-salesforce-blue ml-4">22%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">DataWeave Transformations</span>
            <span className="font-bold text-salesforce-blue ml-4">20%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Error Handling</span>
            <span className="font-bold text-salesforce-blue ml-4">16%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">Flow Design + Web Services + DataWeave = 72%. Master DataWeave and scatter-gather patterns before booking.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach MuleSoft Developer I Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe an integration scenario and ask which Mule 4 component, pattern, or DataWeave expression
          achieves it. Read for the requirement (parallel calls, sequential calls, data transformation, error recovery)
          and map it to the correct Anypoint Studio component.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For flow component questions: scatter-gather runs routes in parallel and merges results; for-each processes a collection sequentially; parallel-for-each processes a collection in parallel; choice routes to one branch based on conditions. Know which component to use for each concurrency/routing scenario.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For error handling questions: On Error Continue catches the error and continues processing; On Error Propagate catches and re-throws (the flow fails). A global error handler catches errors not handled locally. Reconnection strategies (reconnect, reconnect-forever) apply to connector connectivity errors only.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For DataWeave questions: read the input and output format carefully. Use output application/json before the DataWeave body to set the output MIME type. The %dw 2.0 directive is always required. Understand that payload refers to the current message payload and vars refers to flow variables.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          78%+ on 3 timed full mocks before booking (70% passing score)
        </p>
        <p className="text-sm text-gray-700 mt-3">
          MuleSoft Developer I has a 70% passing score — higher than most Salesforce exams. Build at least
          5 Mule 4 applications in Anypoint Studio with real HTTP APIs, DataWeave transformations, and error
          handling before booking. Candidates who only study theory without hands-on Anypoint Studio
          experience consistently fail the DataWeave and error handling sections.
        </p>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start MuleSoft Developer I Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/mulesoft-developer-i" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            MuleSoft Developer I Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/mulesoft-integration-foundations-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            MuleSoft Integration Foundations Tips
          </Link>
          <Link href="/developer-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Developer Certification Path
          </Link>
        </div>
      </section>
    </div>
  )
}
