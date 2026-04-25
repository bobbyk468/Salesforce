import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import { buildStudyGuideTitle } from '@/lib/seo-title-helpers'
import ExamTipsCrossLink from '@/components/ExamTipsCrossLink'
import CertInsightBlock from '@/components/CertInsightBlock'
import CredentialSchema from '@/components/CredentialSchema'




const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'pardot-consultant'
const pageTitle = buildStudyGuideTitle(slug)
const pageDescription = `Pardot Consultant study guide: exam sections, key topics, B2B marketing study plan. Pass in 2026 Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/pardot-consultant-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/pardot-consultant-study-guide`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Pardot Consultant', url: '/certifications/pardot-consultant' },
  { name: 'Pardot Consultant Study Guide', url: '/pardot-consultant-study-guide' },
]

const examSections = [
  { name: 'Visitors & Prospects', weight: 18, note: 'Prospect lifecycle, tracking, scoring models, grading criteria, and activity-based engagement detection.' },
  { name: 'Administration', weight: 17, note: 'Account configuration, user management, connectors, API integrations, and Pardot account settings.' },
  { name: 'Account Configuration', weight: 16, note: 'Business unit setup, domains, tracker domains, IP allowlisting, and organisation-level configuration.' },
  { name: 'Lead Management', weight: 15, note: 'Lead assignment rules, queues, CRM sync, opportunity influence, and marketing-to-sales handoff workflows.' },
  { name: 'Email Marketing', weight: 14, note: 'Email templates, send types, list email vs 1:1 email, deliverability, unsubscribe handling, and compliance.' },
  { name: 'Landing Pages & Forms', weight: 12, note: 'Form design, progressive profiling, form handlers, completion actions, and landing page layout design.' },
  { name: 'Engagement Studio & Reporting', weight: 8, note: 'Engagement Studio programme design, branching logic, wait steps, and Pardot reporting including lifecycle reporter.' },
]

const faqItems = [
  {
    question: 'What is the difference between Pardot Specialist and Pardot Consultant?',
    answer: 'Pardot Specialist (now called Account Engagement Specialist) tests operational knowledge: configuring and using the platform day-to-day. Pardot Consultant tests consultative and implementation knowledge: designing solutions for clients, configuring complex setups, integrating with Salesforce CRM, and advising on B2B marketing strategy. Consultant requires deeper understanding of implementation scenarios, multi-business-unit configurations, and technical integration. Holding the Specialist certification before Consultant is strongly recommended but not required.',
  },
  {
    question: 'What is the Pardot Consultant exam format?',
    answer: 'The Salesforce Certified Marketing Cloud Account Engagement Consultant (formerly Pardot Consultant) exam consists of 60 multiple-choice and multiple-select questions with a 105-minute time limit. The passing score is approximately 65%. The exam costs $200 for the first attempt, with a ~50% discount retake voucher after a failed attempt.',
  },
  {
    question: 'Do I need hands-on Pardot experience to pass the Consultant exam?',
    answer: 'Yes — the Pardot Consultant exam is scenario-heavy and tests applied knowledge, not just feature memorisation. Candidates without hands-on experience with Pardot (at least 6–12 months of implementation or admin experience) typically struggle with consultant-level questions. Access to a Pardot developer org or sandbox is strongly recommended for hands-on practice during study.',
  },
  {
    question: 'How does the Pardot Consultant exam differ from the Specialist?',
    answer: 'The Specialist exam tests whether you can operate Pardot (build emails, create forms, set up automation). The Consultant exam tests whether you can design Pardot solutions for clients — choosing the right architecture for complex scenarios, configuring multi-business-unit setups, advising on B2B lead management strategy, and troubleshooting advanced integrations. The Consultant exam has more "which approach is best for this scenario" questions vs feature-specific "how do you do X" questions.',
  },
  {
    question: 'What Salesforce CRM knowledge is needed for the Pardot Consultant exam?',
    answer: 'The exam expects solid knowledge of the Pardot-Salesforce CRM connector: how syncing works, field mapping, campaign influence, opportunity attribution, and the connected campaigns feature. Understanding Salesforce CRM data structures (leads vs contacts vs accounts) and how they map to Pardot prospects is critical. Candidates without a Salesforce Admin background may need extra study time on the CRM integration sections.',
  },
]

export default function PardotConsultantStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/pardot-consultant-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />
      <CredentialSchema
        certSlug="pardot-consultant"
        certName="Pardot Consultant"
        description={pageDescription}
        pageUrl="/pardot-consultant-study-guide"
      />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Marketing Cloud Track</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce Pardot Consultant Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          A complete study guide for the Salesforce Certified Marketing Cloud Account Engagement Consultant (Pardot Consultant) exam — exam sections, B2B marketing automation concepts, a study plan, and passing tips.
        </p>
      </div>

      <ContentPageAuthor />
      <ExamTipsCrossLink examTipsSlug="pardot-consultant-exam-tips" certName="Pardot Consultant" />
      <CertInsightBlock certSlug="pardot-consultant" />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '60' },
          { label: 'Time Limit', value: '105 min' },
          { label: 'Passing Score', value: '~65%' },
          { label: 'Exam Fee', value: '$200' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Exam Sections &amp; Weightings</h2>
        <div className="space-y-4">
          {examSections.map((section) => (
            <div key={section.name}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-gray-900">{section.name}</span>
                <span className="text-sm font-bold text-salesforce-blue">{section.weight}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mb-1">
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${section.weight * 5.5}%` }} />
              </div>
              <p className="text-xs text-gray-600">{section.note}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What Each Section Tests</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: 'Prospects & Scoring', items: ['Prospect vs visitor distinction', 'Scoring rules & categories', 'Grading profiles', 'Activity-based scoring', 'Score decay & automation'] },
            { title: 'Administration', items: ['User roles & permissions', 'Salesforce connector setup', 'API access & connectors', 'Email authentication (SPF, DKIM)', 'Audit trail & notifications'] },
            { title: 'Lead Management', items: ['Assignment rules & queues', 'Salesforce campaign sync', 'Opportunity influence tracking', 'Connected campaigns', 'B2B lead lifecycle design'] },
            { title: 'Engagement Studio', items: ['Programme design & branching', 'Wait steps vs triggers', 'Engagement metrics', 'Test & pause modes', 'Lifecycle reporting'] },
          ].map((card) => (
            <div key={card.title} className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-2 text-sm">{card.title}</p>
              <ul className="space-y-1">
                {card.items.map((item) => (
                  <li key={item} className="text-xs text-gray-600 flex gap-2">
                    <span className="text-salesforce-blue font-bold flex-shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">8-Week Study Plan</h2>
        <div className="space-y-3">
          {[
            { week: 'Week 1', focus: 'Pardot fundamentals review', tasks: 'Review Pardot Specialist content if not already certified. Understand the full prospect lifecycle and tracking mechanisms.' },
            { week: 'Week 2', focus: 'Administration & account setup', tasks: 'Study multi-business unit configuration, tracker domain setup, email authentication, and account-level settings.' },
            { week: 'Week 3', focus: 'Salesforce CRM integration', tasks: 'Deep dive on the Salesforce connector: field mapping, sync behaviour, connected campaigns, and opportunity influence.' },
            { week: 'Week 4', focus: 'Lead management & scoring', tasks: 'Study scoring models, grading profiles, assignment rules, and the B2B marketing-to-sales handoff workflow design.' },
            { week: 'Week 5', focus: 'Email, forms & landing pages', tasks: 'Study email deliverability best practices, form progressive profiling, completion actions, and form handlers vs native forms.' },
            { week: 'Week 6', focus: 'Engagement Studio & reporting', tasks: 'Build and test Engagement Studio programmes. Study the lifecycle reporter and campaign performance metrics.' },
            { week: 'Week 7', focus: 'Consultant scenario practice', tasks: 'Focus on scenario-based questions: which configuration is best for this client scenario, and why?' },
            { week: 'Week 8', focus: 'Full mock exams', tasks: 'Take timed full mock exams. Target 78%+ before booking to account for scenario difficulty.' },
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
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
        <h2 className="text-base font-bold text-gray-900 mb-3">Compare Certifications</h2>
        <ul className="space-y-2">
          <li><Link href="/pardot-consultant-vs-marketing-cloud-consultant" className="text-sm text-salesforce-dark hover:underline font-medium">→ Pardot Consultant vs Marketing Cloud Consultant comparison</Link></li>
          <li><Link href="/pardot-specialist-vs-pardot-consultant" className="text-sm text-salesforce-dark hover:underline font-medium">→ Pardot Specialist vs Pardot Consultant — key differences</Link></li>
        </ul>
      </div>


      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Practice Pardot Consultant Questions</h2>
        <p className="text-white mb-6">Free practice questions for the Account Engagement Consultant exam — test scenario-based knowledge before the real exam.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/certifications/pardot-consultant" className="inline-flex items-center px-5 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm">
            Pardot Consultant Practice
          </Link>
          <Link href="/certifications/pardot-specialist" className="inline-flex items-center px-5 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
            Pardot Specialist Practice
          </Link>
        </div>
      </div>

      
            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">What Comes After This Certification?</h2>
        <p className="text-sm text-gray-700">
          After this certification, consider: <Link href="/certifications/marketing-cloud-consultant" className="text-salesforce-blue font-medium hover:underline">Marketing Cloud Engagement Consultant</Link>, <Link href="/certifications/pardot-consultant" className="text-salesforce-blue font-medium hover:underline">Account Engagement (Pardot) Consultant</Link>, or <Link href="/certifications/email-specialist" className="text-salesforce-blue font-medium hover:underline">Marketing Cloud Email Specialist</Link>.
        </p>
      </section>

      <DifficultyHeatmap slug="pardot-consultant" />
      {/* Hub CTA */}
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white mt-10">
        <h2 className="text-2xl font-bold mb-2">Ready to Test Your Knowledge?</h2>
        <p className="text-white mb-6">Try the Pardot Consultant free practice exam — scored with full explanations.</p>
        <Link
          href="/certifications/pardot-consultant"
          className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Pardot Consultant Free Practice Exam &rarr;
        </Link>
      </div>
    </div>
  )
}