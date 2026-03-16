import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `PD1 Exam Tips (${RELEASE_CURRENT}): Platform Developer I Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `PD1 exam tips (${RELEASE_CURRENT}): Apex governor limits, bulkification, trigger best practices, and 75% coverage rule. Start free practice.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {  // Canonical to cert page — prevents GSC "chose different canonical"
  canonical: `${siteUrl}/certifications/developer-1`,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/pd1-exam-tips-2026`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `PD1 exam tips ${RELEASE_CURRENT}, how to pass Salesforce Platform Developer I, PD1 study guide, Apex governor limits, PD1 practice exam, Salesforce developer certification tips`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: `PD1 Exam Tips ${RELEASE_CURRENT}`, url: '/pd1-exam-tips-2026' },
]

const faqItems = [
  {
    question: 'What is the PD1 exam format?',
    answer: 'The Salesforce Platform Developer I exam (CRT-450) has 60 multiple-choice questions, a 105-minute time limit, a 68% passing score, and a $200 exam fee.',
  },
  {
    question: 'What are the highest-weight PD1 topics?',
    answer: 'Logic and Process Automation (38%) is the largest section on PD1, followed by Data Management and Integration (11%). Focus on governor limits, trigger best practices, Apex patterns, and bulkification.',
  },
  {
    question: 'How long does it take to prepare for PD1?',
    answer: '6–8 weeks with daily coding practice. Writing Apex code hands-on is essential — candidates who only read Trailhead without practising tend to struggle with scenario questions.',
  },
  {
    question: 'What is the hardest part of the PD1 exam?',
    answer: 'Governor limits and bulkification. Every Apex scenario expects bulk-safe code — no SOQL or DML inside loops, use of Maps and Sets for batch operations, and correct trigger context variable usage.',
  },
]

export default function Pd1ExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/pd1-exam-tips-2026" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          PD1 Exam Tips ({RELEASE_CURRENT}): How to Pass Platform Developer I First Attempt
        </h1>
        <p className="text-lg text-gray-600">
          Platform Developer I (PD1) is Salesforce&apos;s most code-intensive associate-level cert. These tips focus on
          the areas that trip up candidates most: governor limits, bulkification, and the 75% code coverage requirement.
        </p>
      </header>

      <ContentPageAuthor />

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Exam At a Glance</p>
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
            <p className="text-2xl font-bold text-salesforce-blue">65%</p>
            <p className="text-xs text-gray-500 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$200</p>
            <p className="text-xs text-gray-500 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: Best Way to Pass PD1</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Logic and Process Automation is 28% of the exam — master Apex triggers, governor limits, and async patterns first.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Write real Apex code every day. PD1 scenarios require you to identify bugs and select correct patterns, not just recall facts.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Take timed mocks (60 questions / 110 minutes). You are ready when you consistently score 78%+ — the passing score is 68%.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">PD1 Exam Weightage at a Glance</h2>
        <p className="text-sm text-gray-600 mb-4">
          Focus time proportionally. The top three sections cover 73% of the exam.
        </p>
        <div className="space-y-3">
          {[
            { section: 'Logic and Process Automation', weight: 28, note: 'Apex, triggers, async (Future, Batch, Queueable)' },
            { section: 'Salesforce Fundamentals', weight: 23, note: 'Platform concepts, data model, security model' },
            { section: 'Data Modeling and Management', weight: 22, note: 'SOQL, SOSL, DML, relationships, schema' },
            { section: 'Testing, Debugging, and Deployment', weight: 14, note: '75% coverage rule, Test.runAs(), debugging tools' },
            { section: 'User Interface', weight: 13, note: 'LWC basics, @AuraEnabled, Lightning Data Service' },
          ].map(({ section, weight, note }) => (
            <div key={section}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-800">{section}</span>
                <span className="text-salesforce-blue font-semibold">{weight}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mb-1">
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${weight}%` }} />
              </div>
              <p className="text-xs text-gray-500">{note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Governor Limits You Must Know Cold</h2>
        <p className="text-sm text-gray-700 mb-4">
          PD1 tests governor limits directly and through scenario questions. Memorise these before exam day:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th scope="col" className="text-left py-2 pr-4 font-semibold text-gray-700">Limit</th>
                <th scope="col" className="text-left py-2 pr-4 font-semibold text-gray-700">Synchronous</th>
                <th scope="col" className="text-left py-2 font-semibold text-gray-700">Asynchronous</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-600">
              <tr><td className="py-2 pr-4">SOQL queries per transaction</td><td className="py-2 pr-4 font-medium text-salesforce-blue">100</td><td className="py-2">200</td></tr>
              <tr><td className="py-2 pr-4">DML statements per transaction</td><td className="py-2 pr-4 font-medium text-salesforce-blue">150</td><td className="py-2">150</td></tr>
              <tr><td className="py-2 pr-4">Records per DML operation</td><td className="py-2 pr-4 font-medium text-salesforce-blue">10,000</td><td className="py-2">10,000</td></tr>
              <tr><td className="py-2 pr-4">Total records retrieved by SOQL</td><td className="py-2 pr-4 font-medium text-salesforce-blue">50,000</td><td className="py-2">50,000</td></tr>
              <tr><td className="py-2 pr-4">Apex CPU time</td><td className="py-2 pr-4 font-medium text-salesforce-blue">10,000 ms</td><td className="py-2">60,000 ms</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          The exam will ask you to identify code that violates these limits — especially SOQL/DML inside for loops.
        </p>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">4-Week PD1 Study Plan</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p><strong>Week 1 — Salesforce Fundamentals &amp; Data Modeling (45%):</strong> Platform data model, object relationships (lookup vs master-detail), field types, schema builder, SOQL (relationship queries, aggregate functions, dynamic SOQL), SOSL, and DML operations.</p>
          <p><strong>Week 2 — Logic and Process Automation (28%):</strong> Apex fundamentals, trigger events (before/after, isNew, isUpdate, isDelete), bulkification patterns, governor limits, async Apex (Future, Batch, Queueable, Scheduled), and error handling.</p>
          <p><strong>Week 3 — Testing, Deployment &amp; UI (27%):</strong> Writing @isTest classes, Test.startTest()/stopTest(), Test.runAs(), mock data, 75% coverage requirement, debugging logs, changeset/metadata deployment, and LWC fundamentals (@api, @wire, @AuraEnabled).</p>
          <p><strong>Week 4:</strong> Full timed mock exams (60 Q / 110 min), weak-area targeted revision, and final review of governor limit scenarios before booking.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Handle PD1 Scenario Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Most PD1 questions give you a code snippet or business requirement and ask you to identify the problem or select the best implementation.
          Two strategies work here:
        </p>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Code review questions:</strong> Look for DML or SOQL inside a loop first — that is the most common governor limit trap. If you see it, the answer involves moving operations outside the loop.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Requirement questions:</strong> Map the requirement to the right async tool. Use Future for single-record callouts, Batch for large data volumes, Queueable for chaining jobs, and Scheduled for time-based execution.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Testing questions:</strong> If the scenario asks about code coverage or test data, remember: 75% overall is required, @TestVisible exposes private members, and Test.runAs() tests user-context behaviour.</span>
          </li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="text-sm text-gray-700 mb-2">
          PD1 passing score is 68% (41/60 questions). Use this benchmark before scheduling:
        </p>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          78%+ on 3 timed full mocks (60 Q / 110 min), one week apart
        </p>
        <p className="text-sm text-gray-700 mt-3">
          The 10-point buffer above the passing score accounts for first-attempt nerves and unfamiliar question phrasing.
          If you are failing the Logic &amp; Process Automation questions consistently, spend another week on triggers and async Apex before booking.
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
          <Link href="/pd2-exam-tips-2026" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">PD2 Exam Tips</span>
          </Link>
          <Link href="/javascript-developer-i-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">JavaScript Developer I Exam Tips</span>
          </Link>
          <Link href="/app-builder-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">App Builder Exam Tips</span>
          </Link>
          <Link href="/developer-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Developer Certification Path</span>
          </Link>
        </div>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Next Step</h2>
        <p className="text-sm text-gray-700 mb-4">
          Apply these tips with real exam-style practice questions:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/certifications/developer-1"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors"
          >
            Start PD1 Practice Test
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/developer-certification-path"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Full Developer Certification Path
          </Link>
          <Link
            href="/certifications/developer-2"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            What Comes After PD1? PD2 →
          </Link>
        </div>
      </section>
    </div>
  )
}
