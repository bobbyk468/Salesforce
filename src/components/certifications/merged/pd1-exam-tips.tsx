/* Ported from /pd1-exam-tips, merged into /certifications/developer-1 in November 2026.
 * Content is the original page copy. Page chrome (metadata, JSON-LD, H1
 * header) was dropped because the hub page already provides it. */
import Link from '@/components/AppLink'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import ExamTipsCertLink from '@/components/ExamTipsCertLink'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'
import StudyGuideCrossLink from '@/components/StudyGuideCrossLink'
import ExamPricingCard from '@/components/ExamPricingCard'
import LastUpdated from '@/components/LastUpdated'



const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const slug = 'developer-1'
const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription = `Platform Developer I exam tips for ${RELEASE_CURRENT}: review Apex governor limits, bulkification, trigger practices, and coverage rules.`
const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Platform Developer I', url: '/certifications/developer-1' },
  { name: `PD1 Exam Tips ${RELEASE_CURRENT}`, url: '/pd1-exam-tips' },
]

export const faqItems = [
  {
    question: 'What is the PD1 exam format?',
    answer: 'The Platform Developer exam has 60 questions, up to five additional unscored questions, 105 minutes, and a 68% passing score. The fee is $200 plus applicable taxes.',
  },
  {
    question: 'What are the highest-weight PD1 topics?',
    answer: 'Process Automation and Logic accounts for 28% and Developer Fundamentals for 27%. Review the data model, Apex, triggers, and platform limits.',
  },
  {
    question: 'How long does it take to prepare for PD1?',
    answer: 'Preparation time depends on your experience. Set aside time to write and test Apex as well as review the exam guide.',
  },
  {
    question: 'What is the hardest part of the PD1 exam?',
    answer: 'The difficult areas depend on your experience. Practise governor limits, bulk processing, collections, and trigger context variables.',
  },
  {
    question: 'What concepts do most PD1 candidates get wrong?',
    answer: 'Review queries inside loops, the uses of @wire, @api, and @track, and how tests use assertions to check behavior.',
  },
  ...getConceptFaqs('pd1-exam-tips'),
]

export default function Pd1ExamTipsContent() {
  return (
    <div className="mt-12">





      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: Best Way to Pass PD1</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Process Automation and Logic is 28% of the exam. Practise Apex, triggers, limits, and asynchronous work.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Write and test Apex in a Developer Edition org. Trace examples to understand why each pattern works.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Use timed practice sets to find gaps. The listed exam passing score is 68%.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">PD1 Exam Weightage at a Glance</h2>
        <p className="text-sm text-gray-600 mb-4">
          Focus time proportionally. Process Automation and Logic and Developer Fundamentals together represent 55% of the exam.
        </p>
        <div className="space-y-3">
          {[
            { section: 'Process Automation and Logic', weight: 28, note: 'Apex, triggers, Flow, and asynchronous work' },
            { section: 'Developer Fundamentals', weight: 27, note: 'Platform concepts, data models, and design choices' },
            { section: 'User Interface', weight: 25, note: 'Lightning components and Visualforce' },
            { section: 'Testing, Debugging, and Deployment', weight: 20, note: 'Tests, debugging, and deployment' },
          ].map(({ section, weight, note }) => (
            <div key={section}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-800">{section}</span>
                <span className="text-salesforce-blue font-semibold">{weight}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mb-1">
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${weight}%` }} />
              </div>
              <p className="text-xs text-gray-600">{note}</p>
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
              <tr><td className="py-2 pr-4">Records processed by DML per transaction</td><td className="py-2 pr-4 font-medium text-salesforce-blue">10,000</td><td className="py-2">10,000</td></tr>
              <tr><td className="py-2 pr-4">Total records retrieved by SOQL</td><td className="py-2 pr-4 font-medium text-salesforce-blue">50,000</td><td className="py-2">50,000</td></tr>
              <tr><td className="py-2 pr-4">Apex CPU time</td><td className="py-2 pr-4 font-medium text-salesforce-blue">10,000 ms</td><td className="py-2">60,000 ms</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-600 mt-3">
          Practise applying these limits to code, including queries and DML in loops. Check the execution context and documented exceptions.
        </p>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">4-Week PD1 Study Plan</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p><strong>Week 1: Salesforce Fundamentals &amp; Data Modeling:</strong> Platform data model, object relationships (lookup vs master-detail), field types, schema builder, SOQL (relationship queries, aggregate functions, dynamic SOQL), SOSL, and DML operations.</p>
          <p><strong>Week 2: Logic and Process Automation (28%):</strong> Apex fundamentals, trigger events (before/after, isNew, isUpdate, isDelete), bulkification patterns, governor limits, async Apex (Future, Batch, Queueable, Scheduled), and error handling.</p>
          <p><strong>Week 3: Testing, Deployment &amp; UI:</strong> Writing @isTest classes, Test.startTest()/stopTest(), Test.runAs(), mock data, 75% coverage requirement, debugging logs, changeset/metadata deployment, and LWC fundamentals (@api, @wire, @AuraEnabled).</p>
          <p><strong>Week 4:</strong> Full timed mock exams (60 Q / 105 min), weak-area targeted revision, and final review of governor limit scenarios before booking.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Handle PD1 Scenario Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Practise reading both code snippets and business requirements. Identify the execution context, constraints, and the behavior each answer would produce.
        </p>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Code review questions:</strong> Check whether queries or DML run repeatedly inside loops. Consider collecting records and doing the operation in bulk.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Requirement questions:</strong> Match the requirement to an asynchronous tool. Consider Batch for large datasets, Queueable for chaining, and Scheduled Apex for timed work.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Testing questions:</strong> Review overall coverage requirements, test data setup, @TestVisible, and how Test.runAs() changes the user context.</span>
          </li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Booking Readiness Benchmark</h2>
        <p className="text-sm text-gray-700 mb-2">
          PD1 passing score is 68% (41/60 questions). Use this benchmark before scheduling:
        </p>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          80%+ on 3 timed full mocks (60 Q / 105 min), one week apart
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Use practice results as feedback, not a guarantee. If triggers or asynchronous Apex remain difficult, build and test examples before booking.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most PD1 Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">Review these distinctions while working through your practice code.</p>
        <div className="space-y-5">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">1. SOQL Inside For-Loops: The Governor Limit That Kills Your Score</h3>
            <p className="text-sm text-gray-700">A query inside a loop can exceed the limit when it runs repeatedly. Look at the execution context and number of iterations; where appropriate, query once outside the loop and use a map or list.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">2. @wire vs @api vs @track: One Wrong Decorator, One Wrong Answer</h3>
            <p className="text-sm text-gray-700">Review how Lightning Web Component decorators serve different purposes. <code className="bg-amber-100 px-1 rounded text-xs">@wire</code> connects a property to a Salesforce data service (Apex or UI API) reactively. <code className="bg-amber-100 px-1 rounded text-xs">@api</code> exposes a property or method to a parent component; it is public. <code className="bg-amber-100 px-1 rounded text-xs">@track</code> can observe changes to supported object and array properties. Ordinary fields are reactive when their assigned values change.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">3. Test Classes: Coverage Is Not Enough: Assertions Are Required</h3>
            <p className="text-sm text-gray-700">Coverage shows which lines ran; assertions check whether the result is correct. Include meaningful assertions, and use <code className="bg-amber-100 px-1 rounded text-xs">HttpCalloutMock</code> for HTTP callout tests.</p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Questions Candidates Ask</h2>
        <div className="space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <h3 className="font-semibold text-gray-900 mb-1">{item.question}</h3>
              <div className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: item.answer }} />
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Related Study Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/certifications/developer-2" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">PD2 Exam Tips</span>
          </Link>
          <Link href="/certifications/javascript-developer-i" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">JavaScript Developer I Exam Tips</span>
          </Link>
          <Link href="/certifications/app-builder" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
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
          <Link href="#practice-questions"
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
        <p className="text-xs text-gray-600 mt-4">
          After this exam, consider <Link href="/certifications/developer-2" className="text-salesforce-blue underline">Platform Developer II</Link> or <Link href="/certifications/app-builder" className="text-salesforce-blue underline">Platform App Builder</Link> next.
        </p>
      </section>
    </div>
  )
}
