/* Ported from /email-specialist-study-guide, merged into /certifications/email-specialist in November 2026.
 * Content is the original page copy. Page chrome (metadata, JSON-LD, H1
 * header) was dropped because the hub page already provides it. */
import Link from '@/components/AppLink'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_YEAR } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import { buildStudyGuideTitle } from '@/lib/seo-title-helpers'
import ExamTipsCrossLink from '@/components/ExamTipsCrossLink'
import CertInsightBlock from '@/components/CertInsightBlock'
import CredentialSchema from '@/components/CredentialSchema'
import ExamPricingCard from '@/components/ExamPricingCard'
import LastUpdated from '@/components/LastUpdated'





const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'email-specialist'
const pageTitle = buildStudyGuideTitle(slug)
const pageDescription = 'Review Marketing Cloud Engagement Specialist objectives, email automation, subscriber data, analytics, and practice questions.'

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Marketing Cloud Email Specialist', url: '/certifications/email-specialist' },
  { name: 'Email Specialist Study Guide', url: '/email-specialist-study-guide' },
]

const examSections = [
  { name: 'Email Marketing Best Practices', weight: 10, note: 'Evaluate email design and programs, deliverability, and subscriber acquisition and retention.' },
  { name: 'Content Creation and Delivery', weight: 24, note: 'Prepare and customize messages, configure sends, report on email performance, and select relevant Einstein capabilities.' },
  { name: 'Marketing Automation', weight: 26, note: 'Review the official guide objectives for Marketing Cloud automation tools and campaign workflows.' },
  { name: 'Subscriber and Data Management', weight: 26, note: 'Review subscriber and data management objectives, including data models, segmentation, and subscriber status.' },
  { name: 'Insights and Analytics', weight: 14, note: 'Review reporting and analytics objectives in the current official exam guide.' },
]

export const faqItems = [
  {
    question: 'What is the Salesforce Marketing Cloud Email Specialist certification?',
    answer: 'The Salesforce Certified Marketing Cloud Engagement Specialist credential covers email marketing skills in Marketing Cloud. The exam has 60 multiple-choice questions and up to five unscored questions, 90 minutes, a 67% passing score, and a $200 registration fee. No prerequisite is required; MKT 101 attendance is highly recommended.',
  },
  {
    question: 'Do I need Marketing Cloud experience before the Email Specialist exam?',
    answer: 'No formal prerequisite is required. Salesforce describes a typical audience with Marketing Cloud Email application experience and recommends MKT 101; hands-on practice and the official study resources can help you review the objectives.',
  },
  {
    question: 'What is the difference between a list and a data extension in Marketing Cloud?',
    answer: 'Lists are simple, flat subscriber tables managed in Email Studio; they are easy to use but limited in size and flexibility. Data Extensions are custom relational database tables that support complex data models, multiple columns, relationships between tables, and SQL queries. Data Extensions are the preferred approach for any production Marketing Cloud implementation. The exam tests when to use each.',
  },
  {
    question: 'What is the hardest part of the Email Specialist exam?',
    answer: 'The official outline assigns the largest weights to Marketing Automation and Subscriber and Data Management (26% each), followed by Content Creation and Delivery (24%). Review each section against the official objectives and focus extra practice where your knowledge is weakest.',
  },
  {
    question: 'Is the Email Specialist required before Marketing Cloud Consultant?',
    answer: 'The Marketing Cloud Engagement Specialist exam guide lists no prerequisite. Check the current Marketing Cloud Engagement Consultant exam guide for its own prerequisite requirements before registering.',
  },
]

export default function EmailSpecialistStudyGuideContent() {
  return (
    <div className="mt-12">


      <CertInsightBlock certSlug="email-specialist" />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '60 + up to 5 unscored' },
          { label: 'Time Limit', value: '90 min' },
          { label: 'Passing Score', value: '67%' },
          { label: 'Exam Fee', value: '$200' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Section Breakdown</h2>
        <div className="space-y-4">
          {examSections.map((section) => (
            <div key={section.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-800">{section.name}</span>
                <span className="text-salesforce-blue font-semibold">{section.weight}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${section.weight * 4.1}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Section-by-Section Breakdown</h2>
        <div className="space-y-4">
          {examSections.map((section) => (
            <div key={section.name} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full bg-salesforce-blue/10 text-salesforce-dark text-xs font-bold">{section.weight}%</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{section.name}</h3>
                  <p className="text-sm text-gray-600">{section.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">8-Week Study Plan</h2>
        <div className="space-y-3 text-sm">
          {[
            { week: 'Week 1', focus: 'Marketing Cloud account structure, business units, user roles, sender profiles, reply mail management. Set up a trial org and navigate Email Studio.' },
            { week: 'Week 2', focus: 'Subscriber management: All Subscribers, lists vs data extensions, subscriber key, profile centre, preference centre, unsubscribe flows.' },
            { week: 'Week 3', focus: 'Email creation: Content Builder blocks and templates, dynamic content, AMPscript basics for personalisation, A/B testing setup.' },
            { week: 'Week 4', focus: 'Email Sending & Delivery, send classifications, delivery profiles, SAP, STO. Bounce types (hard, soft, technical), suppression lists, compliance.' },
            { week: 'Week 5', focus: 'Deliverability in depth: SPF, DKIM, DMARC explained, IP warming, dedicated vs shared IPs, reputation monitoring, CAN-SPAM and GDPR.' },
            { week: 'Week 6', focus: 'Journey Builder, entry sources, all journey activities, decision splits vs engagement splits, goal metrics, testing and activation.' },
            { week: 'Week 7', focus: 'Reporting, tracking metrics, data views (Bounces, Clicks, Opens), Intelligence Reports, tracking extracts, custom reports.' },
            { week: 'Week 8', focus: 'Full mock exams. Focus on Journey Builder scenarios (which activity for which use case) and deliverability questions (which bounce type applies).' },
          ].map((item) => (
            <div key={item.week} className="flex gap-3">
              <span className="flex-shrink-0 font-semibold text-salesforce-blue w-16">{item.week}</span>
              <span className="text-gray-700">{item.focus}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">How to Read Scenario Questions</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">1.</span><span><strong>Bounce type classification:</strong> Hard bounce = permanent delivery failure (invalid address) → automatically unsubscribed. Soft bounce = temporary failure (mailbox full, server unavailable) → retried. Technical bounce = infrastructure issue (block, challenge-response). Know which category triggers automatic unsubscription.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">2.</span><span><strong>Journey entry source selection:</strong> Data Extension entry for scheduled or batch sends; Salesforce Data entry for CRM-triggered journeys; API Event for real-time triggers from external systems; Date-Based entry for anniversary or renewal journeys. For practice scenarios, match the trigger type to the entry source.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">3.</span><span><strong>Decision Split vs Engagement Split:</strong> Decision Split branches based on data attributes (contact field values). Engagement Split branches based on email interaction behaviour (opened, clicked, not opened). Pick the right one based on whether the branching condition is data-driven or interaction-driven.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">4.</span><span><strong>Suppression list vs publication list:</strong> Suppression lists prevent sends to specific addresses regardless of subscription status. Publication lists are opt-in lists for specific content types. A contact can be on a publication list but also suppressed; suppression always wins.</span></li>
        </ul>
      </div>

      <div className="bg-salesforce-blue/5 rounded-xl border border-salesforce-blue/20 p-5 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Readiness Benchmark</h2>
        <p className="text-sm text-gray-700">Use practice exams to identify gaps, then review the official objectives. Marketing Automation and Subscriber and Data Management are each 26% of the exam outline; Content Creation and Delivery is 24%. No practice score guarantees an exam result.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">10 Must-Know Concepts</h2>
        <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
          <li>Hard vs soft vs technical bounce types and automatic unsubscription rules</li>
          <li>Send classification components: sender profile, delivery profile, send classification</li>
          <li>SPF, DKIM, DMARC, what each does and how they improve deliverability</li>
          <li>Journey Builder entry sources: Data Extension, Salesforce Data, API Event, Date-Based</li>
          <li>Decision Split vs Engagement Split, data-driven vs behaviour-driven branching</li>
          <li>Subscriber key and its role as the unique identifier in Marketing Cloud</li>
          <li>Suppression lists vs publication lists vs exclusion lists</li>
          <li>Dynamic content, attribute-based and filter-based content blocks</li>
          <li>CAN-SPAM compliance requirements: unsubscribe mechanism, physical address, from name</li>
          <li>Data views: Bounces, Clicks, Opens, Unsubscribes, used for SQL queries in reports</li>
        </ol>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Common Questions</h2>
        <dl className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
              <dd className="text-sm text-gray-700">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>

            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Where to Go Next</h2>
        <p className="text-sm text-gray-700">
          After this certification, consider: <Link href="/certifications/marketing-cloud-consultant" className="text-salesforce-blue font-medium hover:underline">Marketing Cloud Engagement Consultant</Link>, <Link href="/certifications/pardot-consultant" className="text-salesforce-blue font-medium hover:underline">Marketing Cloud Account Engagement Consultant</Link>, or <span className="text-salesforce-blue font-medium hover:underline">Marketing Cloud Email Specialist</span>.
        </p>
      </section>

      <DifficultyHeatmap slug="email-specialist" />
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Put It Into Practice</h2>
        <p className="text-white mb-6">Test yourself with free Email Specialist practice questions covering all 6 exam sections.</p>
        <Link href="#practice-questions" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Start Free Practice Questions
        </Link>
      </div>
    </div>
  )
}
