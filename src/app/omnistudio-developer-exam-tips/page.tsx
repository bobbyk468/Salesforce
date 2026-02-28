import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `OmniStudio Developer Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce OmniStudio Developer exam tips for ${RELEASE_CURRENT}: FlexCards, OmniScripts, DataRaptors, Integration Procedures, and scenario strategy to pass first attempt.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/omnistudio-developer-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/omnistudio-developer-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `OmniStudio Developer exam tips ${RELEASE_CURRENT}, how to pass OmniStudio Developer, Salesforce OmniStudio certification study guide, FlexCard DataRaptor exam tips`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'OmniStudio Developer Exam Tips', url: '/omnistudio-developer-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Salesforce OmniStudio Developer exam format?',
    answer: 'The Salesforce OmniStudio Developer exam has 60 multiple-choice questions, a 105-minute time limit, a 65% passing score, and a $200 fee ($100 retake). It tests configuration and development using OmniStudio tools: FlexCards, OmniScripts, DataRaptors, and Integration Procedures.',
  },
  {
    question: 'What are the highest-weight OmniStudio Developer exam sections?',
    answer: 'OmniScripts (28%) and DataRaptors (25%) together account for 53% of the exam. Building guided interaction flows, configuring data transformation with DataRaptors, and chaining Integration Procedures are the core skills tested.',
  },
  {
    question: 'What is the difference between a DataRaptor and an Integration Procedure?',
    answer: 'DataRaptors are low-code tools for reading, transforming, and writing Salesforce data — they work directly with standard and custom Salesforce objects via SOQL. Integration Procedures are server-side processes that orchestrate multiple actions (DataRaptors, HTTP actions, Apex) in sequence, often used to aggregate data from multiple sources for OmniScripts or FlexCards.',
  },
  {
    question: 'What prerequisites help with the OmniStudio Developer exam?',
    answer: 'Salesforce Administrator (ADM-201) is the recommended foundation. Experience with Industries Cloud products (Financial Services Cloud, Health Cloud, etc.) that use OmniStudio is strongly recommended. Complete the Trailhead OmniStudio Developer Superbadge before sitting the exam.',
  },
]

export default function OmniStudioDeveloperExamTipsPage() {
  const webPageJsonLd = getWebPageJsonLd({ name: pageTitle, description: pageDescription, path: '/omnistudio-developer-exam-tips', breadcrumbItems })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline: pageTitle, description: pageDescription, path: '/omnistudio-developer-exam-tips' })
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
          Salesforce OmniStudio Developer Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The OmniStudio Developer exam tests your ability to build guided user experiences and data integrations
          using the OmniStudio toolset. These tips focus on OmniScript configuration, DataRaptor transformation
          logic, and Integration Procedure orchestration that define the exam.
        </p>
      </header>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What OmniStudio Developer Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>OmniScripts</strong> — Building guided interaction flows with steps, elements, and conditional navigation. Understanding script reuse, error handling, and how OmniScripts call Integration Procedures and DataRaptors to load and save data.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>DataRaptors</strong> — The four DataRaptor types: Extract (read Salesforce data), Transform (reshape data), Load (write to Salesforce), and Turbo Extract (optimised read without transformation). Know when to use each type.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>FlexCards and Integration Procedures</strong> — FlexCards display contextual data in a card format, sourced via DataRaptors or Integration Procedures. Integration Procedures orchestrate multi-step server actions including HTTP callouts to external systems.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">OmniScripts</span>
            <span className="font-bold text-salesforce-blue ml-4">28%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">DataRaptors</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Integration Procedures</span>
            <span className="font-bold text-salesforce-blue ml-4">22%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">FlexCards</span>
            <span className="font-bold text-salesforce-blue ml-4">17%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">OmniScripts + DataRaptors + Integration Procedures = 75%. These three tools are the exam. Know them hands-on.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach OmniStudio Developer Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a business interaction or data requirement and ask which OmniStudio tool or
          configuration achieves it. The correct answer always uses the most appropriate native OmniStudio
          component — not Apex or standard Salesforce automation when OmniStudio tools exist.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For tool selection questions: OmniScript = guided UI flow for agents/users. FlexCard = read-only data display on a record page. Integration Procedure = server-side orchestration (no UI). DataRaptor = Salesforce data read/write/transform. Match the requirement to the right tool.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For DataRaptor type questions: when the requirement involves reading Salesforce records for display, use Extract. When reshaping data between systems, use Transform. When saving user input back to Salesforce, use Load. Turbo Extract is for performance-optimised reads without field mapping.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For Integration Procedure questions: they run server-side and can call HTTP actions, DataRaptors, and Apex remote actions in sequence. When a scenario requires calling an external REST API from within an OmniScript, the answer is an Integration Procedure with an HTTP Action element — not a direct Apex callout from the OmniScript.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          OmniStudio is a distinct tool ecosystem used primarily in Industries Cloud implementations.
          Candidates without direct OmniStudio project experience should complete the full Trailhead
          OmniStudio Developer trail and Superbadge before booking — the exam tests specific
          configuration decisions that only become clear from hands-on practice.
        </p>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start OmniStudio Developer Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/omnistudio-developer" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            OmniStudio Developer Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/omnistudio-consultant" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            OmniStudio Consultant Questions
          </Link>
          <Link href="/developer-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Developer Certification Path
          </Link>
        </div>
      </section>
    </div>
  )
}
