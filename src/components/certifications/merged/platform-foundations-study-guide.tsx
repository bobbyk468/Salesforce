/* Ported from /platform-foundations-study-guide, merged into /certifications/platform-foundations in November 2026.
 * Content is the original page copy. Page chrome (metadata, JSON-LD, H1
 * header) was dropped because the hub page already provides it. */
import Link from '@/components/AppLink'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import { buildStudyGuideTitle } from '@/lib/seo-title-helpers'
import ExamTipsCrossLink from '@/components/ExamTipsCrossLink'
import CertInsightBlock from '@/components/CertInsightBlock'
import CredentialSchema from '@/components/CredentialSchema'
import ExamPricingCard from '@/components/ExamPricingCard'
import LastUpdated from '@/components/LastUpdated'





const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'platform-foundations'
const pageTitle = buildStudyGuideTitle(slug)
const pageDescription = `Platform Foundations study guide: review exam sections, key topics, and a plan for the $75 associate exam with practice questions.`
const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Platform Foundations', url: '/certifications/platform-foundations' },
  { name: 'Platform Foundations Study Guide', url: '/platform-foundations-study-guide' },
]

const examSections = [
  { name: 'Salesforce Ecosystem', weight: 32, note: 'Customer 360, the main product clouds (Sales, Service, Marketing, Experience, Data 360), AppExchange, Trailhead, and the Trailblazer Community.' },
  { name: 'Navigation', weight: 28, note: 'Lightning Experience, the App Launcher, global search, list views, the Home page, and Salesforce Mobile.' },
  { name: 'Data Model', weight: 25, note: 'Standard objects (Lead, Account, Contact, Opportunity, Case), custom objects, fields, and lookup vs master-detail relationships.' },
  { name: 'Reports & Dashboards', weight: 15, note: 'What a report and a dashboard do, list views, and reading data back out of Salesforce.' },
]

export const faqItems = [
  {
    question: 'What is the Salesforce Platform Foundations certification?',
    answer: 'The Salesforce Platform Foundations certification is an associate-level credential ($75) that validates foundational knowledge of the Salesforce platform, how it works, its data model, basic automation, security, and app development concepts. It is designed for professionals new to Salesforce who want a formal credential demonstrating platform fundamentals. It does not require prior Salesforce experience and serves as an entry point before pursuing the Administrator or Platform Developer I certification.',
  },
  {
    question: 'What is the Platform Foundations exam format?',
    answer: 'The exam consists of 40 scored multiple-choice questions (plus up to 5 unscored questions) with a 70-minute time limit. The passing score is 62%. The exam costs $75 for the first attempt; a failed attempt gets a retake voucher for about 50% off. It can be taken online (proctored) or at a Pearson VUE testing centre.',
  },
  {
    question: 'How does Platform Foundations compare to AI Associate?',
    answer: 'Both are $75 associate-level certifications requiring no experience. AI Associate focuses specifically on AI and Salesforce Einstein AI features: AI concepts, responsible AI, and Salesforce AI products. Platform Foundations focuses on the broader Salesforce platform, data model, automation, security, and app development. Platform Foundations provides broader foundation for a Salesforce career; AI Associate is more specialised. Many candidates pursue both as entry-level credentials.',
  },
  {
    question: 'Who should take Platform Foundations?',
    answer: 'Platform Foundations is ideal for: professionals starting a Salesforce career who want a credential before committing to the full Administrator exam; business users and power users who work with Salesforce daily and want formal recognition; project managers, business analysts, and consultants who work alongside Salesforce teams; and students and career-changers building a Salesforce foundation. It requires no prior platform experience.',
  },
  {
    question: 'Should I take Platform Foundations or Administrator first?',
    answer: 'If you are fully committed to a Salesforce career and have time to study, many candidates skip Platform Foundations and go directly for the Administrator certification (which carries significantly more career value at $200). Platform Foundations is best as a confidence-builder and entry point if you are unsure whether Salesforce is the right path, or if you want a quick credential while studying for Administrator. The Administrator certification is much more recognised by employers.',
  },
]

export default function PlatformFoundationsStudyGuideContent() {
  return (
    <div className="mt-12">


      <CertInsightBlock certSlug="platform-foundations" />

      <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-8">
        <p className="text-sm text-green-800"><strong>Entry-level certification:</strong> No prior Salesforce experience required. 40 questions, 70-minute limit, 62% passing score. Most candidates pass with 3–4 weeks of focused Trailhead study.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '40' },
          { label: 'Time Limit', value: '70 min' },
          { label: 'Passing Score', value: '62%' },
          { label: 'Exam Fee', value: '$75' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Weightings by Section</h2>
        <div className="space-y-4">
          {examSections.map((section) => (
            <div key={section.name}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-gray-900">{section.name}</span>
                <span className="text-sm font-bold text-salesforce-blue">{section.weight}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mb-1">
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${section.weight * 3.3}%` }} />
              </div>
              <p className="text-xs text-gray-600">{section.note}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-sm text-gray-700 mb-8">
        Already have section-level scores from a practice test? Run them through the{' '}
        <Link href="/tools/score-calculator" className="text-salesforce-blue font-medium hover:underline">
          Salesforce Exam Score Calculator
        </Link>{' '}
        to see where you stand against the 62% pass mark.
      </p>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">4-Week Study Plan</h2>
        <div className="space-y-3">
          {[
            { week: 'Week 1', focus: 'Salesforce Ecosystem (32%)', tasks: 'Complete Trailhead "Salesforce Platform Basics" and "CRM for Lightning Experience" modules. Learn Customer 360, the main product clouds, AppExchange, and Trailhead itself, this is the single heaviest section.' },
            { week: 'Week 2', focus: 'Navigation (28%) & Data Model (25%)', tasks: 'Practice the App Launcher, global search, list views, and Salesforce Mobile. Study standard vs custom objects, field types, and relationship types (lookup vs master-detail). Build objects in a Trailhead Playground.' },
            { week: 'Week 3', focus: 'Reports & Dashboards (15%) plus review', tasks: 'Learn what reports and dashboards do and how list views differ from both. Revisit anything shaky from Weeks 1 and 2.' },
            { week: 'Week 4', focus: 'Mock exams & review', tasks: 'Take full timed practice exams. Target 75%+ before booking. Review any weak areas identified in practice results.' },
          ].map((item) => (
            <div key={item.week} className="flex gap-4">
              <div className="flex-shrink-0 w-16 text-xs font-bold text-salesforce-blue pt-0.5">{item.week}</div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{item.focus}</p>
                <p className="text-xs text-gray-600">{item.tasks}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Questions Candidates Ask</h2>
        <dl className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
              <dd className="text-sm text-gray-700">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 mb-8">
        <h2 className="text-base font-bold text-gray-900 mb-3">Compare the Alternatives</h2>
        <ul className="space-y-2">
          <li><Link href="/platform-foundations-vs-ai-associate" className="text-sm text-salesforce-dark hover:underline font-medium">→ Platform Foundations vs AI Associate, comparison guide</Link></li>
        </ul>
      </div>


            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Plan Your Next Certification</h2>
        <p className="text-sm text-gray-700">
          After this certification, consider: <Link href="/certifications/administrator" className="text-salesforce-blue font-medium hover:underline">Platform Administrator (ADM-201)</Link>, <Link href="/certifications/developer-1" className="text-salesforce-blue font-medium hover:underline">Platform Developer I</Link>, or <Link href="/certifications/ai-associate" className="text-salesforce-blue font-medium hover:underline">AI Associate</Link>.
        </p>
      </section>

      <DifficultyHeatmap slug="platform-foundations" />
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Practice Platform Foundations Questions</h2>
        <p className="text-white mb-6">Free practice questions for the Salesforce Platform Foundations exam, start studying now.</p>
        <Link href="#practice-questions" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Start Free Practice Questions
        </Link>
      </div>
    </div>
  )
}