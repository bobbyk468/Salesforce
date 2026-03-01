import type { Metadata } from 'next'
import Link from 'next/link'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Salesforce Slack Administrator Study Guide (${RELEASE_CURRENT})`
const pageDescription = `Slack Administrator study guide: exam sections, workspace config, security, integrations, and tips to pass the Salesforce Slack Admin exam.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/slack-administrator-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/slack-administrator-study-guide`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `slack administrator study guide, salesforce slack admin exam, slack administrator certification 2026, slack admin exam prep`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Slack Administrator Study Guide', url: '/slack-administrator-study-guide' },
]

const examSections = [
  { name: 'Workspace Configuration & Administration', weight: 28, note: 'Setting up workspaces, channels, naming conventions, workspace settings, and administrative management tasks.' },
  { name: 'User Administration & Security', weight: 22, note: 'User provisioning, SSO/SCIM, guest users, permissions, data access controls, and two-factor authentication.' },
  { name: 'Compliance & Data Retention', weight: 20, note: 'Message retention policies, data export settings, DLP (Data Loss Prevention) integrations, and eDiscovery.' },
  { name: 'App & Integration Management', weight: 18, note: 'App approval workflows, Slack app directory management, Salesforce for Slack configuration, and webhook integrations.' },
  { name: 'Slack Connect & Billing', weight: 12, note: 'Slack Connect channel setup for external collaboration, billing management, plan types, and licence management.' },
]

const faqItems = [
  {
    question: 'Who is the Slack Administrator certification for?',
    answer: 'The Salesforce Certified Slack Administrator certification is designed for IT administrators, Salesforce admins, and operations professionals who manage Slack at the enterprise level — setting up workspaces, managing users and security, configuring compliance settings, and administering integrations. It is a strong credential for IT professionals at Salesforce customer organisations and consulting partners who need to demonstrate Slack administration expertise.',
  },
  {
    question: 'What is the Slack Administrator exam format?',
    answer: 'The exam consists of 60 multiple-choice and multiple-select questions with a 90-minute time limit. The passing score is approximately 65%. The exam costs $200 for the first attempt, with a ~50% discount retake voucher after a failed attempt. It can be taken online (proctored) or at a Kryterion testing centre.',
  },
  {
    question: 'Do I need the Salesforce Administrator certification first?',
    answer: 'No — the Slack Administrator certification is independent of the core Salesforce Administrator credential. You can take it without any prior Salesforce certifications. However, if you are primarily a Salesforce admin who also manages Slack, the Salesforce Administrator knowledge is a useful complement. The exam focuses specifically on Slack platform administration, not the broader Salesforce CRM platform.',
  },
  {
    question: 'What Slack plan features does the exam cover?',
    answer: 'The exam covers features across Slack Free, Pro, Business+, and Enterprise Grid plans. Governance and compliance features (data retention policies, DLP integrations, eDiscovery exports, SSO) are Enterprise Grid features. Exam questions often test which plan is required for specific features — know the feature tier distinctions, especially what requires Enterprise Grid vs Business+ plans.',
  },
  {
    question: 'How important is hands-on Slack experience for passing this exam?',
    answer: 'Hands-on experience with Slack as an administrator is strongly recommended — ideally at the Business+ or Enterprise Grid level where governance and compliance features are available. Many exam questions involve scenario-based administration decisions that are difficult to answer without real workspace management experience. If you do not have admin access at work, Slack offers a free trial that can be used to explore most admin settings.',
  },
]

export default function SlackAdministratorStudyGuidePage() {
  const webPageJsonLd = getWebPageJsonLd({ name: pageTitle, description: pageDescription, path: '/slack-administrator-study-guide', breadcrumbItems })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline: pageTitle, description: pageDescription, path: '/slack-administrator-study-guide' })
  const faqJsonLd = getFaqPageJsonLd(faqItems)

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-blue text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Collaboration Track</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce Slack Administrator Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          A complete study guide for the Salesforce Certified Slack Administrator exam — workspace configuration, user security, compliance, app integrations, and Slack Connect.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '60' },
          { label: 'Time Limit', value: '90 min' },
          { label: 'Passing Score', value: '~65%' },
          { label: 'Exam Fee', value: '$200' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
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
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${section.weight * 3.5}%` }} />
              </div>
              <p className="text-xs text-gray-500">{section.note}</p>
            </div>
          ))}
        </div>
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

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Practice Slack Admin Questions</h2>
        <p className="text-blue-100 mb-6">Free practice questions for the Salesforce Slack Administrator exam.</p>
        <Link href="/certifications/slack-administrator" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Start Free Practice Questions
        </Link>
      </div>
    </div>
  )
}
