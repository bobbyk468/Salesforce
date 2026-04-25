import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import { buildStudyGuideTitle } from '@/lib/seo-title-helpers'
import ExamTipsCrossLink from '@/components/ExamTipsCrossLink'
import CertInsightBlock from '@/components/CertInsightBlock'



const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'marketing-cloud-engagement-admin'
const pageTitle = buildStudyGuideTitle(slug)
const pageDescription = `Marketing Cloud Engagement Admin study guide: account setup, business units, data, compliance. $200, ~67% pass. Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/marketing-cloud-engagement-admin-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/marketing-cloud-engagement-admin-study-guide`,
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
  { name: 'Marketing Cloud Engagement Admin Study Guide', url: '/marketing-cloud-engagement-admin-study-guide' },
]

const examSections = [
  { name: 'Account Administration & Setup', weight: 26, note: 'Business Units: creating and managing sub-accounts, cross-BU sharing of content and data, BU-level branding and reply mail management. User roles and permissions: Administrator, Content Creator, Analyst, Marketing Cloud Connect User — capabilities and restrictions of each. Account-level settings: send classifications, delivery profiles, sender authentication packages (SAP). Reply Mail Management (RMM) configuration.' },
  { name: 'Data Management & Subscribers', weight: 24, note: 'Subscriber data model: All Subscribers list, subscriber key, email address as identifier. Data Extensions: types (Standard, Sendable, Testable), field types, primary keys, relationships. Contact Builder: attribute groups, populations, data designer. Subscriber statuses: Active, Bounced, Held, Unsubscribed — how each affects sending. Preference management and suppression lists.' },
  { name: 'Compliance & Deliverability', weight: 22, note: 'CAN-SPAM Act requirements: physical address, unsubscribe mechanism, honour within 10 days. GDPR for Marketing Cloud: consent tracking, data subject rights, data retention. Anti-spam best practices: sender reputation, bounce management, engagement-based sending. Dedicated IP addresses: warm-up process, send volume ramp-up. Sender authentication: SPF, DKIM, DMARC. IP warming schedules.' },
  { name: 'Email Sending & Tracking', weight: 18, note: 'Email studio: content builder, classic content — when to use each. Send classifications and delivery profiles: connecting sender profiles, reply mail management, and send throttling. Triggered sends: event-driven email configuration, triggered send definitions. Tracking and reporting: sends, deliveries, bounces, opens, clicks, unsubscribes — tracking pixel mechanics, link wrapping.' },
  { name: 'Reporting & Analytics', weight: 10, note: 'Built-in Marketing Cloud reports: send summary, tracking summary, email performance, deliverability reports. Datorama (now Marketing Cloud Intelligence) integration for cross-channel analytics. Intelligence Reports for Email (built-in). Export types: tracking extract, data extract automation. Sending frequency analysis and subscriber engagement scoring.' },
]

const faqItems = [
  {
    question: 'What is the Marketing Cloud Engagement Administrator certification?',
    answer: 'The Marketing Cloud Engagement Administrator certification validates expertise in configuring and managing Salesforce Marketing Cloud — including account setup, business unit management, user permissions, data management, subscriber management, compliance, and deliverability. The exam has 60 questions, 90-minute time limit, ~67% passing score, and a $200 fee.',
  },
  {
    question: 'What is the difference between Marketing Cloud Admin and Email Specialist?',
    answer: 'The Email Specialist certification focuses on email marketing execution: building emails, creating journeys, managing lists, deliverability, and reporting. The Administrator certification focuses on platform administration: configuring accounts, managing business units, setting up user access, managing data extensions, and compliance settings. Admin is deeper in platform configuration; Email Specialist is broader in marketing campaign execution.',
  },
  {
    question: 'What is a Business Unit in Marketing Cloud?',
    answer: 'A Business Unit (BU) is a sub-account within Marketing Cloud that operates independently with its own users, content, data, and sending settings — while sharing the parent account\'s IP reputation and billing. Business Units are used for: separating brands within one company, managing regional marketing teams independently, restricting user access to specific BU data, and maintaining separate branding and reply mail management per BU.',
  },
  {
    question: 'What is subscriber key in Marketing Cloud?',
    answer: 'The subscriber key is a unique identifier for each subscriber in Marketing Cloud — typically the email address or a CRM ID (e.g., Salesforce Contact ID). Using a consistent subscriber key across systems ensures accurate subscriber management and prevents duplicate records. If a subscriber changes their email address, the subscriber key remains the same, preserving their history and suppression status.',
  },
  {
    question: 'What does IP warming mean in Marketing Cloud?',
    answer: 'IP warming is the process of gradually increasing email sending volume from a new dedicated IP address to build a positive sender reputation with ISPs (Internet Service Providers). ISPs track the history of each IP — new IPs have no reputation. Sending too much email too quickly from a new IP causes deliverability problems. A typical warm-up schedule starts with 500–1,000 sends/day to highly engaged subscribers and doubles volume every 1–2 weeks until reaching target volume.',
  },
]

export default function MarketingCloudEngagementAdminStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/marketing-cloud-engagement-admin-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Study Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Marketing Cloud Engagement Administrator Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Your complete guide to passing the Marketing Cloud Engagement Admin exam — account configuration, business units, subscriber management, compliance, and deliverability.
        </p>
      </div>

      <ContentPageAuthor />
      <ExamTipsCrossLink examTipsSlug="marketing-cloud-engagement-admin-exam-tips" certName="Marketing Cloud Engagement Admin" />
      <CertInsightBlock certSlug="marketing-cloud-engagement-admin" />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '60' },
          { label: 'Time Limit', value: '90 min' },
          { label: 'Passing Score', value: '~67%' },
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
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-800">{section.name}</span>
                <span className="text-salesforce-blue font-semibold">{section.weight}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${section.weight * 3.3}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What Each Section Tests</h2>
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
            { week: 'Week 1', focus: 'Account setup — navigate a Marketing Cloud trial account. Configure account-level settings: reply mail management, send classifications, delivery profiles. Create a Business Unit with its own branding.' },
            { week: 'Week 2', focus: 'User management — create users with different roles (Administrator, Content Creator, Analyst). Test what each role can and cannot access. Review BU-level user assignment.' },
            { week: 'Week 3', focus: 'Subscriber data model — understand All Subscribers, subscriber key, email address. Create a sendable data extension. Configure Contact Builder: attribute groups, populations, relationships.' },
            { week: 'Week 4', focus: 'Subscriber statuses and suppression — understand Active, Bounced, Held, Unsubscribed statuses and how they affect sending. Configure exclusion lists and suppression lists. Test RMM (reply mail management) unsubscribe flow.' },
            { week: 'Week 5', focus: 'Compliance — memorise CAN-SPAM requirements (physical address, unsubscribe within 10 days). Review GDPR consent tracking in Marketing Cloud. Understand double opt-in configuration.' },
            { week: 'Week 6', focus: 'Deliverability — study bounce types (hard vs soft), bounce management settings, and how bounced subscribers become Held. Review SPF/DKIM/DMARC setup. Understand IP warming schedules.' },
            { week: 'Week 7', focus: 'Email sending and triggered sends — configure a triggered send definition. Review send classification hierarchy: delivery profile → sender profile → reply mail management. Understand tracking mechanics.' },
            { week: 'Week 8', focus: 'Full mock exams. Account Administration (26%) and Data Management (24%) are the largest sections. Focus on Business Unit design and subscriber status scenarios. Aim for 75%+ before booking.' },
          ].map((item) => (
            <div key={item.week} className="flex gap-3">
              <span className="flex-shrink-0 font-semibold text-salesforce-blue w-16">{item.week}</span>
              <span className="text-gray-700">{item.focus}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Scenario Strategy Tips</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">1.</span><span><strong>Business Unit design is frequently tested:</strong> When a scenario describes a company with multiple brands or regional teams that need separate content, users, and data — Business Units are the answer. Understand cross-BU sharing limitations: data and content can be shared upward from child BU to parent, but not sideways between sibling BUs.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">2.</span><span><strong>Subscriber key vs email address:</strong> The subscriber key is the unique identifier — it can be any value (CRM ID, email, phone). Using email as subscriber key causes problems when subscribers change email addresses. Best practice: use Salesforce Contact ID as subscriber key to maintain consistent identity across systems.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">3.</span><span><strong>Hard bounce = Held status:</strong> A hard bounce (permanent delivery failure) automatically changes a subscriber to Held status — Marketing Cloud will not send to Held subscribers. Soft bounces (temporary failures) do not immediately trigger Held. Know the bounce classification logic tested in the exam.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">4.</span><span><strong>CAN-SPAM vs GDPR:</strong> CAN-SPAM (US law) allows opt-out — you can email without consent but must provide unsubscribe. GDPR (EU law) requires opt-in — you must have explicit consent before emailing. When a scenario mentions EU subscribers or GDPR, the answer always involves obtaining consent before sending.</span></li>
        </ul>
      </div>

      <div className="bg-salesforce-blue/5 rounded-xl border border-salesforce-blue/20 p-5 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Mock Exam Benchmark</h2>
        <p className="text-sm text-gray-700">Aim for <strong>75%+ on practice exams</strong> before scheduling. Marketing Cloud Admin is very configuration-specific — questions describe exact Marketing Cloud settings and ask what each does. Hands-on experience in a Marketing Cloud trial account is essential for the Account Administration and Data Management sections.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Top 10 Concepts to Review</h2>
        <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
          <li>Business Units: purpose, cross-BU sharing rules, user assignment</li>
          <li>User roles: Administrator, Content Creator, Analyst, MC Connect User — capabilities</li>
          <li>Send classification hierarchy: delivery profile → sender profile → reply mail management</li>
          <li>Subscriber key: best practice, relationship to email address, why CRM ID is preferred</li>
          <li>Data Extensions: types (Standard, Sendable, Testable), primary keys, field types</li>
          <li>Subscriber statuses: Active, Bounced, Held, Unsubscribed — what triggers each</li>
          <li>Bounce types: hard vs soft, bounce threshold settings, Held status trigger</li>
          <li>CAN-SPAM requirements: what is legally required in every commercial email</li>
          <li>GDPR for Marketing Cloud: opt-in requirement, consent tracking, right to erasure</li>
          <li>IP warming: why it matters, typical warm-up schedule, ISP reputation building</li>
        </ol>
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
          <li><Link href="/marketing-cloud-admin-vs-developer" className="text-sm text-salesforce-dark hover:underline font-medium">→ Marketing Cloud Admin vs Developer — which cert to take?</Link></li>
        </ul>
      </div>


            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">What Comes After This Certification?</h2>
        <p className="text-sm text-gray-700">
          After this certification, consider: <Link href="/certifications/marketing-cloud-consultant" className="text-salesforce-blue font-medium hover:underline">Marketing Cloud Engagement Consultant</Link>, <Link href="/certifications/pardot-consultant" className="text-salesforce-blue font-medium hover:underline">Account Engagement (Pardot) Consultant</Link>, or <Link href="/certifications/email-specialist" className="text-salesforce-blue font-medium hover:underline">Marketing Cloud Email Specialist</Link>.
        </p>
      </section>

      <DifficultyHeatmap slug="marketing-cloud-engagement-admin" />
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Ready to Practice?</h2>
        <p className="text-white mb-6">Free Marketing Cloud Engagement Admin practice questions covering all 5 exam sections.</p>
        <Link
          href="/certifications/marketing-cloud-engagement-admin"
          className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Start Free Practice Questions
        </Link>
      </div>
    </div>
  )
}