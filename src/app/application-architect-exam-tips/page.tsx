import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Application Architect Exam Tips (${RELEASE_CURRENT}): Salesforce Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Application Architect exam tips for ${RELEASE_CURRENT}: declarative design, Apex patterns, data modelling, and scenario strategy to pass first attempt.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/application-architect-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/application-architect-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Salesforce Application Architect exam tips ${RELEASE_CURRENT}, how to pass Application Architect, Salesforce architect certification study guide, Application Architect first attempt`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Application Architect Exam Tips', url: '/application-architect-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Salesforce Application Architect credential?',
    answer: 'The Salesforce Application Architect is a role-based credential (not a single exam) that requires passing four component certifications: Platform App Builder (DEV-402), Platform Developer I (PD1), Salesforce Data Architect, and Salesforce Sharing & Visibility Architect. Passing all four automatically earns the Application Architect credential.',
  },
  {
    question: 'What order should I take Application Architect component exams?',
    answer: 'Most candidates start with Platform App Builder, then Platform Developer I, then Data Architect, and finally Sharing & Visibility Architect. App Builder and PD1 are foundational and overlap significantly with ADM-201, making them the best entry points.',
  },
  {
    question: 'How hard is the Salesforce Application Architect credential?',
    answer: 'The Application Architect credential is considered moderately difficult overall, but the individual component exams vary. App Builder (68% pass threshold) and PD1 (68%) are achievable with 4-8 weeks of study each. Data Architect and Sharing & Visibility Architect are harder and require real project experience.',
  },
  {
    question: 'What are the highest-weight topics in the Application Architect component exams?',
    answer: 'Across the four components, the most tested topics are: data modelling and relationships (Data Architect), sharing rules and OWD design (Sharing & Visibility Architect), declarative automation vs. code decisions (App Builder), and Apex design patterns including governor limits (PD1). These cross-cutting topics appear across multiple exams.',
  },
]

export default function ApplicationArchitectExamTipsPage() {
  const webPageJsonLd = getWebPageJsonLd({ name: pageTitle, description: pageDescription, path: '/application-architect-exam-tips', breadcrumbItems })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline: pageTitle, description: pageDescription, path: '/application-architect-exam-tips' })
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
          Salesforce Application Architect Exam Tips ({RELEASE_CURRENT}): How to Pass All 4 Components
        </h1>
        <p className="text-lg text-gray-600">
          The Salesforce Application Architect credential is earned by passing four component certifications:
          App Builder, Platform Developer I, Data Architect, and Sharing &amp; Visibility Architect.
          These tips cover the exam strategy for each component and how to prepare efficiently across all four.
        </p>
      </header>

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Exam At a Glance</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">60</p>
            <p className="text-xs text-gray-500 mt-0.5">Questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">105 min</p>
            <p className="text-xs text-gray-500 mt-0.5">Time Limit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">67%</p>
            <p className="text-xs text-gray-500 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$200</p>
            <p className="text-xs text-gray-500 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: How the Application Architect Credential Works</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>No single exam</strong> — Application Architect is a role-based credential earned automatically when you pass all four component exams. There is no separate Application Architect exam.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Four components</strong> — Platform App Builder (DEV-402), Platform Developer I (PD1), Data Architect, and Sharing &amp; Visibility Architect.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Recommended order</strong> — App Builder → PD1 → Data Architect → Sharing &amp; Visibility Architect. The first two build the foundation the latter two require.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Component Exam Overview</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-3">
            <div>
              <span className="font-medium text-gray-900">Platform App Builder (DEV-402)</span>
              <p className="text-xs text-gray-500 mt-0.5">Data modelling, Flow automation, Lightning App Builder, security model</p>
            </div>
            <span className="font-bold text-salesforce-blue ml-4 whitespace-nowrap">68% pass</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-3">
            <div>
              <span className="font-medium text-gray-900">Platform Developer I (PD1)</span>
              <p className="text-xs text-gray-500 mt-0.5">Apex basics, SOQL/DML, governor limits, triggers, LWC, testing</p>
            </div>
            <span className="font-bold text-salesforce-blue ml-4 whitespace-nowrap">68% pass</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-3">
            <div>
              <span className="font-medium text-gray-900">Data Architect</span>
              <p className="text-xs text-gray-500 mt-0.5">Data modelling strategy, large data volumes, master data management, migration</p>
            </div>
            <span className="font-bold text-salesforce-blue ml-4 whitespace-nowrap">63% pass</span>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <span className="font-medium text-gray-900">Sharing &amp; Visibility Architect</span>
              <p className="text-xs text-gray-500 mt-0.5">OWD design, sharing rules, role hierarchy, manual sharing, performance implications</p>
            </div>
            <span className="font-bold text-salesforce-blue ml-4 whitespace-nowrap">63% pass</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">All four exams: 60 questions · 105–120 minutes · $200 fee each</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Each Component</h2>
        <p className="text-sm text-gray-700 mb-3">
          Application Architect component exams share a common thread: every question tests whether you can choose the right
          Salesforce feature for a given architectural constraint. The pattern is always: understand the constraint first, then select the solution.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><strong>App Builder:</strong> Always prefer declarative over code. The exam tests your ability to solve requirements without Apex — Flow is the default answer for automation.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><strong>PD1:</strong> Governor limits are the key constraint. When a scenario involves bulk records, the answer always involves bulkification, SOQL outside loops, and proper test coverage.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><strong>Data Architect:</strong> Large data volume (LDV) questions test skinny tables, custom indexes, and query optimisation. Always consider the impact on query performance before recommending a data model.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><strong>Sharing &amp; Visibility:</strong> Read the sharing model in layers — OWD → role hierarchy → sharing rules → manual sharing. The answer is always the most restrictive configuration that still meets the stated requirement.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking Each Component</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          76%+ on 3 timed mocks per component before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Data Architect and Sharing &amp; Visibility Architect have lower first-attempt pass rates than App Builder and PD1.
          Budget more preparation time for these two — real project experience designing data models and sharing configurations
          is strongly recommended before attempting them.
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

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Related Exam Tips</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/system-architect-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">System Architect Exam Tips</span>
          </Link>
          <Link href="/integration-architect-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Integration Architect Exam Tips</span>
          </Link>
          <Link href="/data-architect-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Data Architect Exam Tips</span>
          </Link>
          <Link href="/architect-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Architect Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Application Architect Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/application-architect" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Application Architect Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/app-builder-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            App Builder Exam Tips
          </Link>
          <Link href="/pd1-exam-tips-2026" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            PD1 Exam Tips
          </Link>
          <Link href="/architect-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Full Architect Certification Path
          </Link>
        </div>
      </section>
    </div>
  )
}
