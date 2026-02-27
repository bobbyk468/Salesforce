import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Data Architect Exam Tips (${RELEASE_CURRENT}): Salesforce Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Data Architect exam tips for ${RELEASE_CURRENT}: data modelling, large data volumes, master data management, and scenario strategy to pass first attempt.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/data-architect-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/data-architect-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Salesforce Data Architect exam tips ${RELEASE_CURRENT}, how to pass Data Architect, Salesforce data architect certification study guide, Data Architect first attempt`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Data Architect Exam Tips', url: '/data-architect-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Salesforce Data Architect exam format?',
    answer: 'The Salesforce Data Architect exam has 60 multiple-choice questions, a 105-minute time limit, a 63% passing score, and a $200 fee. It is a component exam for both the Application Architect and System Architect role-based credentials.',
  },
  {
    question: 'What are the highest-weight Salesforce Data Architect exam sections?',
    answer: 'Data Management (26%), Data Modelling (24%), and Master Data Management (18%) together account for 68% of the Data Architect exam. Large data volume strategy and data governance are the most nuanced topics and require real project experience.',
  },
  {
    question: 'What prerequisites do I need for the Salesforce Data Architect exam?',
    answer: 'There are no hard prerequisites, but Salesforce recommends Platform App Builder (DEV-402) as foundational knowledge before the Data Architect exam. Real experience with Salesforce data modelling, data loading, SOQL optimisation, and large-scale implementations is strongly recommended.',
  },
  {
    question: 'What is the hardest part of the Salesforce Data Architect exam?',
    answer: 'Large Data Volume (LDV) strategy is consistently the hardest section — skinny tables, custom indexes, query optimisation, and division management require hands-on experience that is difficult to learn from study materials alone. Master data management and data governance concepts are also highly scenario-based.',
  },
]

export default function DataArchitectExamTipsPage() {
  const webPageJsonLd = getWebPageJsonLd({ name: pageTitle, description: pageDescription, path: '/data-architect-exam-tips', breadcrumbItems })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline: pageTitle, description: pageDescription, path: '/data-architect-exam-tips' })
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
          Salesforce Data Architect Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Salesforce Data Architect exam tests your ability to design scalable, high-performance Salesforce data
          models. These tips focus on large data volume strategy, master data management, and the architectural
          thinking the exam rewards over product feature recall.
        </p>
      </header>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Data Architect Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Data modelling decisions</strong> — Object relationships, field strategy, external IDs, data normalisation vs. denormalisation trade-offs at scale.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Large data volume (LDV) strategy</strong> — When and how to use skinny tables, custom indexes, query optimisation, and the impact of record volume on performance.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Master data management</strong> — Duplicate management, data governance frameworks, external system integration patterns, and data quality strategy.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Data Management</span>
            <span className="font-bold text-salesforce-blue ml-4">26%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Data Modelling</span>
            <span className="font-bold text-salesforce-blue ml-4">24%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Master Data Management</span>
            <span className="font-bold text-salesforce-blue ml-4">18%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Data Governance</span>
            <span className="font-bold text-salesforce-blue ml-4">16%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">Data Management + Data Modelling + MDM = 68%. These three sections are your highest-ROI study areas.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Data Architect Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Data Architect questions describe a data challenge (scale, quality, integration, or performance) and ask
          which strategy or feature solves it. The correct answer always considers long-term performance
          at scale — not just immediate functionality.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For LDV questions: identify whether the bottleneck is SOQL performance, storage, or UI response time — each has a different solution (custom index, skinny table, or query optimisation).</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For data model questions: prefer normalised models in transactional systems; consider denormalisation only when query performance at millions of records is explicitly required.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For MDM questions: external IDs are the key tool for upsert operations and cross-system record matching — know when to use a single external ID vs. multiple external IDs per object.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For data migration questions: the Salesforce Data Loader vs. Bulk API vs. REST API choice depends on record volume and real-time vs. batch requirement — know the thresholds.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          76%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          The 63% passing score sounds achievable, but Data Architect questions are deeply scenario-based and require
          applied knowledge of data at scale. Candidates who only study documentation — without LDV project experience —
          consistently struggle with LDV and MDM sections. Hands-on practice is essential.
        </p>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Data Architect Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/data-architect" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Data Architect Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/application-architect-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Application Architect Tips
          </Link>
          <Link href="/architect-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Architect Certification Path
          </Link>
        </div>
      </section>
    </div>
  )
}
