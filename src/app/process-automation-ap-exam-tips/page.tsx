import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Process Automation AP Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Process Automation Accredited Professional exam tips for ${RELEASE_CURRENT}: Flow Builder, automation strategy, governor limits, and scenario strategy to pass first attempt.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/process-automation-ap-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/process-automation-ap-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Process Automation AP exam tips ${RELEASE_CURRENT}, how to pass Process Automation Accredited Professional, Salesforce Flow Builder certification, automation exam study guide`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Process Automation AP Exam Tips', url: '/process-automation-ap-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Process Automation Accredited Professional exam format?',
    answer: 'The Process Automation AP exam has 40 multiple-choice questions, a 60-minute time limit, a Pass/Fail result, and a $150 fee. It validates advanced Flow Builder skills: complex automation design, bulkification best practices, debugging, error handling, and knowing when to use Flow vs. Apex for process automation requirements.',
  },
  {
    question: 'What are the highest-weight Process Automation AP exam sections?',
    answer: 'Advanced Flow Builder (35%) and Automation Strategy and Design (25%) together account for 60% of the exam. Building complex flows with subflows, collections, loops, and custom error handling, as well as choosing the right automation tool for each scenario, are the most heavily tested areas.',
  },
  {
    question: 'What Flow types does the Process Automation AP exam test?',
    answer: 'All Flow types are tested: screen flows (guided UI for users), auto-launched flows (triggered by records, schedules, or platform events), record-triggered flows (before-save and after-save), scheduled flows (time-based automation), and platform event-triggered flows. Knowing when to use each type and the differences between before-save and after-save triggers is critical.',
  },
  {
    question: 'How does bulkification apply to Flow Builder for the exam?',
    answer: 'Flow bulkification means designing flows to process records in bulk without hitting governor limits. Best practices include: using Get Records with Filter conditions to retrieve multiple records in one query (not inside a loop), making DML operations outside of loops (using collection variables), and understanding how record-triggered flows process in bulk vs. how to avoid SOQL/DML in loops. The exam tests how to identify and fix bulkification anti-patterns.',
  },
]

export default function ProcessAutomationApExamTipsPage() {
  const webPageJsonLd = getWebPageJsonLd({ name: pageTitle, description: pageDescription, path: '/process-automation-ap-exam-tips', breadcrumbItems })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline: pageTitle, description: pageDescription, path: '/process-automation-ap-exam-tips' })
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
          Salesforce Process Automation AP Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Process Automation AP exam validates advanced Flow Builder skills for building complex,
          scalable automation. These tips focus on advanced flow patterns, bulkification best practices,
          and automation strategy that distinguish this accreditation from the Admin exam.
        </p>
      </header>

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Exam At a Glance</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">40</p>
            <p className="text-xs text-gray-500 mt-0.5">Questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">60 min</p>
            <p className="text-xs text-gray-500 mt-0.5">Time Limit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">Pass / Fail</p>
            <p className="text-xs text-gray-500 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$150</p>
            <p className="text-xs text-gray-500 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Process Automation AP Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Advanced Flow Builder</strong> — Complex flows using collection variables, loops (For Each, iterate over collections), subflows for modular design, dynamic record lookups, scheduled paths in record-triggered flows, custom error handling (Fault paths), and how to debug flows using the Flow Debug mode and Paused Flow interviews.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Bulkification and governor limits</strong> — Designing flows that process bulk records without hitting SOQL and DML governor limits. Key rules: never use Get Records inside a loop (query once, store in collection, loop over collection). Never use Create/Update Records inside a loop (use collection update). Understanding how record-triggered flows are bulkified automatically vs. how screen flows are not.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Automation strategy and tool selection</strong> — Choosing between Flow types for each requirement. Before-save flows for field updates (no new transaction, faster). After-save flows for cross-object updates and DML. Scheduled flows for time-based processing. Platform event flows for event-driven architecture. Knowing when Flow is insufficient and Apex is required.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Advanced Flow Builder</span>
            <span className="font-bold text-salesforce-blue ml-4">35%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Automation Strategy and Design</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Governor Limits and Bulkification</span>
            <span className="font-bold text-salesforce-blue ml-4">22%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Debugging and Error Handling</span>
            <span className="font-bold text-salesforce-blue ml-4">13%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">AP format: 40 questions, 60 minutes, Pass/Fail, $150. Advanced Flow + Strategy = 60% — this is not an entry-level Flow exam.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Process Automation AP Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a complex automation requirement and ask which Flow type, element,
          or design pattern addresses it correctly. Governor limit and bulkification questions test
          whether you know how to build production-quality flows.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For trigger timing questions: before-save flows run before the record is committed — use for updating fields on the triggering record (no DML needed, no governor limit consumption for record update). After-save flows run after commit — use for cross-object updates, sending emails, calling external systems. When a scenario says &apos;update a field on the same record when it is created&apos;, before-save is more efficient.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For collection/loop questions: the anti-pattern is querying inside a loop (one SOQL per iteration). The correct pattern is: (1) query all needed records into a collection before the loop, (2) loop over the collection in memory, (3) build a collection of records to update, (4) update all records with one DML after the loop. Questions often show buggy flow code — identify the bulkification problem.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For tool selection questions: use Flow for declarative automation that non-developers can maintain. Use Apex when you need complex logic (nested loops, complex string manipulation), real-time callouts from triggers, or functionality Flow doesn&apos;t support. Never recommend Workflow Rules or Process Builder for new automation — they are legacy tools. When in doubt between Flow options, choose the simplest tool that meets the requirement.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">AP Exam Benchmark</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          Pass 3 timed 40-question mocks before booking (Pass/Fail scoring)
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Process Automation AP is aimed at Salesforce professionals who build complex automated solutions.
          Strong candidates have built production record-triggered flows with multiple paths, subflows,
          and error handling. Build and debug flows in a Developer Edition org — the hands-on experience
          is essential for understanding bulkification in practice.
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Process Automation AP Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/process-automation-ap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Process Automation AP Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/adm-201-exam-tips-2026" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Administrator Exam Tips
          </Link>
          <Link href="/developer-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Developer Certification Path
          </Link>
        </div>
      </section>
    </div>
  )
}
