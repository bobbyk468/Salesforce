/* Ported from /slack-administrator-study-guide, merged into /certifications/slack-administrator in November 2026.
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
const slug = 'slack-administrator'
const pageTitle = buildStudyGuideTitle(slug)
const pageDescription = `Slack Administrator study guide: review workspace setup, security, and integrations for the Salesforce Slack exam.`
const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Slack Administrator', url: '/certifications/slack-administrator' },
  { name: 'Slack Administrator Study Guide', url: '/slack-administrator-study-guide' },
]

const examSections = [
  { name: 'Governance, Security and Compliance', weight: 22, note: 'Security policies, compliance for message history, tracking security concerns in Enterprise Grid, PII handling, workspace migration to Enterprise Grid, and conversation moderation.' },
  { name: 'App and AI Administration and Automations', weight: 20, note: 'Implementing Slack AI, managing app installation and approvals, and evaluating app scopes against security policy.' },
  { name: 'Fundamentals', weight: 18, note: 'Matching features to requirements, correct access levels, Admin vs Owner responsibilities, and when to use each Slack plan.' },
  { name: 'Workspace and Org Management', weight: 17, note: 'Managing channels, cross-workspace channel permissions, workspace-wide settings, multi-workspace access, and Slack Connect configuration.' },
  { name: 'User Lifecycle Management', weight: 13, note: 'Provisioning and deactivating users, authentication and provisioning by plan, IdP group management, Slack Connect and Guest access, and user group permissions.' },
  { name: 'Enabling Slack Success (Analytics and Adoption)', weight: 10, note: 'Monitoring feature adoption, assessing user feedback, aligning Slack with business unit needs, and building a champion network.' },
]

export const faqItems = [
  {
    question: 'Who is the Slack Administrator certification for?',
    answer: 'The Salesforce Certified Slack Administrator certification is designed for IT administrators, Salesforce admins, and operations professionals who manage Slack at the enterprise level, setting up workspaces, managing users and security, configuring compliance settings, and administering integrations. It is a strong credential for IT professionals at Salesforce customer organisations and consulting partners who need to demonstrate Slack administration expertise.',
  },
  {
    question: 'What is the Slack Administrator exam format?',
    answer: 'The exam consists of 60 scored multiple-choice and multiple-select questions (plus up to 5 unscored) with a 105-minute time limit. The passing score is 65%. The exam costs $200 for the first attempt; a failed attempt gets a retake voucher for about 50% off ($100). It can be taken online (proctored) or at a Pearson VUE testing centre.',
  },
  {
    question: 'Do I need the Salesforce Administrator certification first?',
    answer: 'No, the Slack Administrator certification is independent of the core Salesforce Administrator credential. You can take it without any prior Salesforce certifications. However, if you are primarily a Salesforce admin who also manages Slack, the Salesforce Administrator knowledge is a useful complement. The exam focuses specifically on Slack platform administration, not the broader Salesforce CRM platform.',
  },
  {
    question: 'What Slack plan features does the exam cover?',
    answer: 'The exam covers features across Slack Free, Pro, Business+, and Enterprise Grid plans. Governance and compliance features (data retention policies, DLP integrations, eDiscovery exports, SSO) are Enterprise Grid features. Exam questions often test which plan is required for specific features. Know the feature tier distinctions, especially what requires Enterprise Grid vs Business+ plans.',
  },
  {
    question: 'How important is hands-on Slack experience for passing this exam?',
    answer: 'Hands-on experience with Slack as an administrator is strongly recommended, ideally at the Business+ or Enterprise Grid level where governance and compliance features are available. Many exam questions involve scenario-based administration decisions that are difficult to answer without real workspace management experience. If you do not have admin access at work, Slack offers a free trial that can be used to explore most admin settings.',
  },
]

export default function SlackAdministratorStudyGuideContent() {
  return (
    <div className="mt-12">


      <CertInsightBlock certSlug="slack-administrator" />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '60' },
          { label: 'Time Limit', value: '105 min' },
          { label: 'Passing Score', value: '65%' },
          { label: 'Exam Fee', value: '$200' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">How the Exam Is Weighted</h2>
        <div className="space-y-4">
          {examSections.map((section) => (
            <div key={section.name}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-gray-900">{section.name}</span>
                <span className="text-sm font-bold text-salesforce-blue">{section.weight}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mb-1">
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${section.weight * 4.5}%` }} />
              </div>
              <p className="text-xs text-gray-600">{section.note}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-700 mt-4">
          Already have section-level scores from a practice test? Run them through the{' '}
          <Link href="/tools/score-calculator" className="text-salesforce-blue font-medium hover:underline">
            Salesforce Exam Score Calculator
          </Link>{' '}
          to see where you stand against the 65% pass mark.
        </p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Key Slack Admin Topics by Section</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: 'Workspace Setup', items: ['Channel types (public, private, shared)', 'Default channels & conventions', 'Workspace icons & naming', 'Multi-workspace org setup', 'Enterprise Grid architecture'] },
            { title: 'User Management', items: ['SSO with SAML 2.0', 'SCIM user provisioning', 'Guest user types & restrictions', 'Permission sets & admin roles', 'Deactivating & exporting user data'] },
            { title: 'Compliance & Governance', items: ['Message retention policies', 'Data export (standard & corporate)', 'DLP integration configuration', 'eDiscovery requirements', 'Audit logs & monitoring'] },
            { title: 'Apps & Integrations', items: ['App approval workflow', 'Salesforce for Slack setup', 'Workflow Builder basics', 'Restricting app installs', 'OAuth app management'] },
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


            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Your Next Certification Step</h2>
        <p className="text-sm text-gray-700">
          After this certification, consider: <Link href="/certifications/advanced-administrator" className="text-salesforce-blue font-medium hover:underline">Advanced Administrator</Link>, <Link href="/certifications/app-builder" className="text-salesforce-blue font-medium hover:underline">Platform App Builder</Link>, or <Link href="/certifications/sales-cloud" className="text-salesforce-blue font-medium hover:underline">Sales Cloud Consultant</Link>.
        </p>
      </section>

      <DifficultyHeatmap slug="slack-administrator" />
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Practice Slack Admin Questions</h2>
        <p className="text-white mb-6">Free practice questions for the Salesforce Slack Administrator exam.</p>
        <Link href="#practice-questions" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Start Free Practice Questions
        </Link>
      </div>
    </div>
  )
}