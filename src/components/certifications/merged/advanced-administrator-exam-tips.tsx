/* Ported from /advanced-administrator-exam-tips, merged into /certifications/advanced-administrator in November 2026.
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
const slug = 'advanced-administrator'
const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Advanced Administrator (ADM-211) exam tips for ${RELEASE_CURRENT}: security, automation, data management.`

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Advanced Administrator', url: '/certifications/advanced-administrator' },
  { name: 'Advanced Administrator Exam Tips', url: '/advanced-administrator-exam-tips' },
]

export const faqItems = [
  {
    question: 'What is the Salesforce Advanced Administrator (ADM-211) exam format?',
    answer: 'The Salesforce Advanced Administrator exam has 60 multiple-choice questions, a 105-minute time limit, a 65% passing score, and a $200 fee. It requires the Salesforce Administrator (ADM-201) certification as a prerequisite and tests complex configuration scenarios beyond the ADM-201 level.',
  },
  {
    question: 'What are the highest-weight Advanced Administrator exam sections?',
    answer: 'Security and Access and Process Automation each account for 20% of the listed outline. Objects and Applications accounts for 19%. Use the official guide to check the current weights before you book.',
  },
  {
    question: 'How hard is the Advanced Administrator exam compared to ADM-201?',
    answer: 'ADM-211 builds on administrator knowledge and asks you to apply security, automation, and data-management features to more complex requirements. Hands-on administration experience can help you prepare.',
  },
  {
    question: 'What is the best way to study for the Advanced Administrator exam?',
    answer: 'Practise security scenarios that involve object permissions, field access, and record sharing. Review Flow, approval processes, joined and matrix reports, then explain why each feature fits a requirement.',
  },
  {
    question: 'What concepts do most Advanced Administrator candidates get wrong?',
    answer: 'Review when to use before-save, after-save, and scheduled flow paths; how territory assignments differ from sharing rules; and when Change Data Capture or Platform Events fit an integration.',
  },
  ...getConceptFaqs('advanced-administrator-exam-tips'),
]

export default function AdvancedAdministratorExamTipsContent() {
  return (
    <div className="mt-12">





      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What ADM-211 Actually Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Complex security architectures</strong>: Not just individual settings, but how OWDs, role hierarchy, sharing rules, profiles, permission sets, and field-level security interact in multi-team organisations.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Advanced automation</strong>: Complex multi-step Flows (screen flows, scheduled flows, autolaunched flows), Approval Processes with dynamic escalation and parallel approval paths.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Data management at scale</strong>: Duplicate management strategies, mass data operations, field history tracking limitations, and data archiving approaches.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Security and Access</span>
            <span className="font-bold text-salesforce-blue ml-4">20%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Objects and Applications</span>
            <span className="font-bold text-salesforce-blue ml-4">19%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Process Automation</span>
            <span className="font-bold text-salesforce-blue ml-4">20%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Data and Analytics Management</span>
            <span className="font-bold text-salesforce-blue ml-4">13%</span>
          </div>
          <p className="text-xs text-gray-600 pt-1">Security, Objects and Applications, and Process Automation together make up 59% of the listed outline.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach ADM-211 Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Some questions describe a business need and ask you to select one or more features that meet it. Identify the required result and any constraints before comparing the options.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For security questions, identify what users must see and edit. Check object and field permissions separately from record access, then consider any exceptions.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For automation questions, compare record-triggered, screen, and scheduled flows. Consider an approval process when people must review and approve a record.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For reporting questions, compare joined blocks, matrix groupings, and summary groupings. Review when to use a report formula or summary formula.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Hands-on administration can help you apply the concepts. Use timed practice sets to find weak areas, then build and test the relevant configurations in a suitable org.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Three Concepts to Compare</h2>
        <p className="text-sm text-gray-600 mb-5">Review these three distinctions and practise choosing the feature that meets each requirement.</p>
        <div className="space-y-5">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">1. Record-Triggered Flow: Before-Save vs After-Save vs Scheduled Paths</h3>
            <p className="text-sm text-gray-700">Before-save flows can update the triggering record efficiently. After-save flows can work with related records and perform actions that require a saved record. Scheduled paths run later according to their configured timing and conditions.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">2. Territory Management 2.0: Assignment Rules vs Sharing Rules</h3>
            <p className="text-sm text-gray-700">Territory Management uses models and assignment rules to associate accounts with territories. Sharing rules grant record access to groups of users. Compare their purposes and review the planning, active, and archived model states.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">3. Change Data Capture vs Platform Events: Choosing the Right Tool</h3>
            <p className="text-sm text-gray-700">Change Data Capture publishes supported record changes for subscribers. Platform Events carry custom event messages between publishers and subscribers. Decide whether the requirement is to follow record changes or publish a business event.</p>
          </div>
        </div>
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
          <Link href="/certifications/administrator" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">ADM-201 Exam Tips</span>
          </Link>
          <Link href="/certifications/app-builder" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">App Builder Exam Tips</span>
          </Link>
          <Link href="/administrator-vs-advanced-administrator" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Admin vs Advanced Admin</span>
          </Link>
          <Link href="/admin-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Admin Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Advanced Administrator Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="#practice-questions" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            ADM-211 Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/administrator" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            ADM-201 Exam Tips
          </Link>
          <Link href="/admin-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Admin Certification Path
          </Link>
        </div>
        <p className="text-xs text-gray-600 mt-4">
          After this exam, consider <span className="text-salesforce-blue underline">Advanced Administrator</span> or <Link href="/certifications/app-builder" className="text-salesforce-blue underline">Platform App Builder</Link> next.
        </p>
      </section>
    </div>
  )
}