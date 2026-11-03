import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_YEAR } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import ExamTipsCertLink from '@/components/ExamTipsCertLink'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'
import StudyGuideCrossLink from '@/components/StudyGuideCrossLink'
import ExamPricingCard from '@/components/ExamPricingCard'




const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'mulesoft-developer-i'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  'Review MuleSoft Developer I objectives, Mule 4, DataWeave, connectors, error handling, and deployment exam topics.'

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
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'MuleSoft Developer I', url: '/certifications/mulesoft-developer-i' },
  { name: 'MuleSoft Developer I Exam Tips', url: '/mulesoft-developer-i-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the MuleSoft Developer I exam format?',
    answer: 'The MuleSoft Developer I exam has 60 multiple-choice questions plus up to five unscored questions, 120 minutes, 70% passing, US$200 registration and US$100 retake fees (taxes may apply); no prerequisite. The guide states Spring 24 alignment. It tests Mule 4 application development using Anypoint Studio, DataWeave 2.0, connectors, and error handling patterns.',
  },
  {
    question: 'What objective weights does the published guide list?',
    answer: 'The guide lists 12 objective weights: Creating Application Networks 7%; Designing APIs 8%; Accessing and Modifying Mule Events 10%; Structuring Mule Applications 10%; Building API Implementation Interfaces 7%; Using Connectors 10%; Processing Records 10%; Transforming Data 10%; Routing Events 8%; Handling Errors 8%; Debugging and Troubleshooting Mule Applications 5%; Deploying and Managing APIs and Integrations 7%. The guide states Spring 24 alignment.',
  },
  {
    question: 'What is DataWeave and how important is it for the exam?',
    answer: 'DataWeave is MuleSoft’s data transformation language, the primary way to map, filter, and reshape data in Mule 4 flows. The published Transforming Data objective is weighted 10%. You need to be comfortable reading and writing DataWeave 2.0 scripts: using map, filter, mapObject, pluck, and conditional logic to transform JSON, XML, and CSV payloads.',
  },
  {
    question: 'What is the difference between MuleSoft Developer I and Developer II?',
    answer: 'Developer I covers foundational Mule 4 application development, flows, connectors, DataWeave, and basic error handling. Developer II tests advanced topics: Anypoint MQ, batch processing, API-led connectivity design patterns, custom policy implementation, and advanced DataWeave. Developer I is the prerequisite foundation for Developer II.',
  },
  {
    question: 'Which Mule 4 concepts can I review?',
    answer: 'Review the issuer objectives for DataWeave, error handling, and deployment/management. This page does not make claims about question frequency or candidate performance.',
  },
]

export default function MuleSoftDeveloperIExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/mulesoft-developer-i-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems}   mainEntityUrl="/mulesoft-developer-i-study-guide"
      />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Study reference · {RELEASE_YEAR}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          MuleSoft Developer I Exam Tips ({RELEASE_YEAR})
        </h1>
        <p className="text-lg text-gray-600">
          The MuleSoft Developer I exam tests your ability to build Mule 4 integration applications using Anypoint
          Studio. These tips focus on DataWeave transformation, flow design, error handling, and API consumption
          that appear in the issuer-published exam objectives.
        </p>
      </header>

      <ContentPageAuthor />

      <ExamTipsCertLink certSlug={slug} />
      <StudyGuideCrossLink studyGuideSlug="mulesoft-developer-i-study-guide" certName="MuleSoft Developer I" />
      <ExamPricingCard
        certSlug="mulesoft-developer-i"
        certName="MuleSoft Developer I"
        certPageSlug="mulesoft-developer-i"
      />
      <p className="text-sm text-gray-600 mb-8">Primary source (Spring 24 alignment stated): <a className="text-salesforce-blue underline" href="https://help.salesforce.com/s/articleView?id=005298959&language=en_US&type=1" target="_blank" rel="noreferrer">Salesforce Certified MuleSoft Developer Exam Guide</a>.</p>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">TL;DR: What MuleSoft Developer I Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Mule 4 application design</strong>: Flows vs. subflows, event processors (choice, scatter-gather, for-each, parallel-for-each), message structure (payload, attributes, variables), and how data flows through a Mule application.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>DataWeave 2.0</strong>: Reading and writing DataWeave scripts to transform JSON, XML, and CSV. Key functions: map, filter, mapObject, pluck, groupBy, flatten, and type coercion. Understanding DataWeave’s functional programming model is essential.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Connectors and error handling</strong>: HTTP Request connector, Database connector, File connector, error types (connectivity, expression, security), On Error Continue vs. On Error Propagate, and retry strategies.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Published Objective Weights</h2>
        <div className="space-y-3 text-sm text-gray-700">
<div className="flex justify-between items-start border-b border-gray-100 pb-2"><span className="font-medium text-gray-900">Creating Application Networks</span><span className="font-bold text-salesforce-blue ml-4">7%</span></div>
<div className="flex justify-between items-start border-b border-gray-100 pb-2"><span className="font-medium text-gray-900">Designing APIs</span><span className="font-bold text-salesforce-blue ml-4">8%</span></div>
<div className="flex justify-between items-start border-b border-gray-100 pb-2"><span className="font-medium text-gray-900">Accessing and Modifying Mule Events</span><span className="font-bold text-salesforce-blue ml-4">10%</span></div>
<div className="flex justify-between items-start border-b border-gray-100 pb-2"><span className="font-medium text-gray-900">Structuring Mule Applications</span><span className="font-bold text-salesforce-blue ml-4">10%</span></div>
<div className="flex justify-between items-start border-b border-gray-100 pb-2"><span className="font-medium text-gray-900">Building API Implementation Interfaces</span><span className="font-bold text-salesforce-blue ml-4">7%</span></div>
<div className="flex justify-between items-start border-b border-gray-100 pb-2"><span className="font-medium text-gray-900">Using Connectors</span><span className="font-bold text-salesforce-blue ml-4">10%</span></div>
<div className="flex justify-between items-start border-b border-gray-100 pb-2"><span className="font-medium text-gray-900">Processing Records</span><span className="font-bold text-salesforce-blue ml-4">10%</span></div>
<div className="flex justify-between items-start border-b border-gray-100 pb-2"><span className="font-medium text-gray-900">Transforming Data</span><span className="font-bold text-salesforce-blue ml-4">10%</span></div>
<div className="flex justify-between items-start border-b border-gray-100 pb-2"><span className="font-medium text-gray-900">Routing Events</span><span className="font-bold text-salesforce-blue ml-4">8%</span></div>
<div className="flex justify-between items-start border-b border-gray-100 pb-2"><span className="font-medium text-gray-900">Handling Errors</span><span className="font-bold text-salesforce-blue ml-4">8%</span></div>
<div className="flex justify-between items-start border-b border-gray-100 pb-2"><span className="font-medium text-gray-900">Debugging and Troubleshooting Mule Applications</span><span className="font-bold text-salesforce-blue ml-4">5%</span></div>
<div className="flex justify-between items-start border-b border-gray-100 pb-2"><span className="font-medium text-gray-900">Deploying and Managing APIs and Integrations</span><span className="font-bold text-salesforce-blue ml-4">7%</span></div>
          <p className="text-xs text-gray-600 pt-1">The available Salesforce guide states Spring 24 alignment. Confirm current requirements with Salesforce before scheduling.</p>
          <a className="text-salesforce-blue underline" href="https://help.salesforce.com/s/articleView?id=005298959&amp;language=en_US&amp;type=1" target="_blank" rel="noreferrer">Official exam guide</a>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Booking Readiness Benchmark</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          Use timed practice to identify objectives for further review
        </p>
        <p className="text-sm text-gray-700 mt-3">
          The guide lists a 70% passing score and no prerequisite. The published guide states Spring 24 alignment; verify current requirements with Salesforce. Practice the listed objectives using official documentation and relevant exercises.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Three Mule 4 concepts to distinguish</h2>
        <p className="text-sm text-gray-600 mb-5">Use the official objectives as a checklist; no candidate-frequency claims are made here.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. DataWeave Type System: Coercion, Null Safety, and Default Operator</p>
            <p className="text-sm text-gray-700">DataWeave is strongly typed at runtime. Type coercion (as String, as Number) fails silently and returns null if the source cannot be cast, check DataWeave null-handling behavior in current product documentation. The default operator (??) provides a fallback value when an expression is null. payload.field default ’N/A’ prevents null propagation. The exam guide includes data transformation objectives; it does not publish question-frequency data.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Error Handling Scope: Try, On Error Continue vs On Error Propagate</p>
            <p className="text-sm text-gray-700">On Error Continue catches the error, executes the error handler, and continues the flow as if the error did not occur, the original message proceeds. On Error Propagate catches the error, executes the error handler, and then re-throws the error, the calling flow receives the error. Select the error handler behavior that matches whether processing should continue or propagate the error. Know which error scopes nest inside which.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. CloudHub vs Runtime Fabric: Worker Size vs Container Config</p>
            <p className="text-sm text-gray-700">CloudHub 1.0 uses workers (vCores, memory sizes) on Salesforce-managed infrastructure. CloudHub 2.0 and Runtime Fabric use containers with explicit memory/vCPU allocation on Kubernetes. Exam questions about deployment options test which platform applies to which scenario: customer-managed Kubernetes clusters = RTF; fully managed Salesforce cloud = CloudHub. Consult current deployment documentation for platform-specific resource configuration.</p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Questions Candidates Ask</h2>
        <dl className="space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
              <dd className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: item.answer }} />
            </div>
          ))}
        </dl>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Related Study Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/mulesoft-integration-foundations-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">MuleSoft Integration Foundations Exam Tips</span>
          </Link>
          <Link href="/mulesoft-developer-ii-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">MuleSoft Developer II Exam Tips</span>
          </Link>
          <Link href="/mulesoft-developer-i-vs-ii" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">MuleSoft Developer I vs II</span>
          </Link>
          <Link href="/developer-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Developer Certification Path</span>
          </Link>
        </div>
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
        <p className="text-xs text-gray-600 mt-4">
          After this exam, consider <Link href="/certifications/developer-2" className="text-salesforce-blue underline">Platform Developer II</Link> or <Link href="/certifications/app-builder" className="text-salesforce-blue underline">Platform App Builder</Link> next.
        </p>
      </section>
    </div>
  )
}