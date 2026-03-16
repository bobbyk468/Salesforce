import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Marketing Cloud Email Specialist Study Guide (${RELEASE_CURRENT})`
const pageDescription = `Salesforce Email Specialist study guide (${RELEASE_CURRENT}): 6 exam sections, Journey Builder, deliverability tips, 8-week plan, and free practice questions. $200 fee.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/email-specialist-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/email-specialist-study-guide`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `salesforce email specialist study guide, marketing cloud email specialist certification 2026, email specialist exam prep, Marketing Cloud certification`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Email Specialist Study Guide', url: '/email-specialist-study-guide' },
]

const examSections = [
  { name: 'Email Sending & Delivery', weight: 24, note: 'Send classifications, delivery profiles, sender authentication (SPF, DKIM, DMARC), bounce management (hard vs soft), suppression lists, compliance (CAN-SPAM, GDPR), and deliverability best practices.' },
  { name: 'Journey Building', weight: 20, note: 'Journey Builder entry sources (data extension, Salesforce data, API event, audience, date-based). Journey activities: Email, Wait, Decision Split, Engagement Split, Update Contact, Salesforce Activity. Journey testing, activation, and goal metrics.' },
  { name: 'Subscriber & List Management', weight: 18, note: 'All Subscribers list, publications, suppression lists, data extensions vs lists, subscriber key, profile and preference centre, unsubscribe management, and data extension relationships.' },
  { name: 'Email Design & Creation', weight: 16, note: 'Content Builder: blocks, templates, layout blocks, dynamic content. AMPscript basics for personalisation. A/B testing setup (subject line, content, from name). Preview and test sends.' },
  { name: 'Reporting & Analytics', weight: 12, note: 'Email performance metrics: open rate, click rate, bounce rate, unsubscribe rate, delivery rate. Tracking extracts, data views, Intelligence Reports. Setting up tracking and measuring campaign performance.' },
  { name: 'Account Management', weight: 10, note: 'Marketing Cloud account hierarchy (enterprise, business units), user roles and permissions, sender profile, reply mail management, and connect to Sales/Service Cloud via Marketing Cloud Connect.' },
]

const faqItems = [
  {
    question: 'What is the Salesforce Marketing Cloud Email Specialist certification?',
    answer: 'The Marketing Cloud Email Specialist certification validates skills in building email campaigns in Salesforce Marketing Cloud Engagement — including Email Studio, Content Builder, Journey Builder, subscriber management, and deliverability. The exam has 60 questions, 105 minutes, ~65% passing score, and a $200 fee. It is the entry-level Marketing Cloud certification and a prerequisite for Marketing Cloud Consultant.',
  },
  {
    question: 'Do I need Marketing Cloud experience before the Email Specialist exam?',
    answer: 'Hands-on Marketing Cloud Engagement experience is essential. The exam tests practical scenarios — configuring a Journey, setting up send classifications, managing suppression lists — that cannot be learned from documentation alone. Request a Marketing Cloud trial environment or work through the Trailhead Marketing Cloud Trailmix with a live sandbox before sitting the exam.',
  },
  {
    question: 'What is the difference between a list and a data extension in Marketing Cloud?',
    answer: 'Lists are simple, flat subscriber tables managed in Email Studio — they are easy to use but limited in size and flexibility. Data Extensions are custom relational database tables that support complex data models, multiple columns, relationships between tables, and SQL queries. Data Extensions are the preferred approach for any production Marketing Cloud implementation. The exam tests when to use each.',
  },
  {
    question: 'What is the hardest part of the Email Specialist exam?',
    answer: 'Email Sending & Delivery (24%) and Journey Building (20%) are the highest-weighted and most commonly cited as hardest sections. Deliverability (SPF, DKIM, DMARC, bounce types) requires technical understanding. Journey Builder requires hands-on practice — understanding which entry source and activity type to use for a given scenario is tested directly and requires sandbox experience.',
  },
  {
    question: 'Is the Email Specialist required before Marketing Cloud Consultant?',
    answer: 'Yes — the Salesforce Marketing Cloud Consultant certification requires the Marketing Cloud Email Specialist as a formal prerequisite. You must pass Email Specialist before you can sit the Consultant exam. This makes Email Specialist the first step on the Marketing Cloud certification path.',
  },
]

export default function EmailSpecialistStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/email-specialist-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Study Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Marketing Cloud Email Specialist Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Your complete guide to passing the Email Specialist exam — Journey Builder, deliverability, subscriber management, Content Builder, and free practice questions.
        </p>
      </div>

      <ContentPageAuthor />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '60' },
          { label: 'Time Limit', value: '105 min' },
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
            { week: 'Week 1', focus: 'Marketing Cloud account structure — business units, user roles, sender profiles, reply mail management. Set up a trial org and navigate Email Studio.' },
            { week: 'Week 2', focus: 'Subscriber management — All Subscribers, lists vs data extensions, subscriber key, profile centre, preference centre, unsubscribe flows.' },
            { week: 'Week 3', focus: 'Email creation — Content Builder blocks and templates, dynamic content, AMPscript basics for personalisation, A/B testing setup.' },
            { week: 'Week 4', focus: 'Email Sending & Delivery — send classifications, delivery profiles, SAP, STO. Bounce types (hard, soft, technical), suppression lists, compliance.' },
            { week: 'Week 5', focus: 'Deliverability deep dive — SPF, DKIM, DMARC explained, IP warming, dedicated vs shared IPs, reputation monitoring, CAN-SPAM and GDPR.' },
            { week: 'Week 6', focus: 'Journey Builder — entry sources, all journey activities, decision splits vs engagement splits, goal metrics, testing and activation.' },
            { week: 'Week 7', focus: 'Reporting — tracking metrics, data views (Bounces, Clicks, Opens), Intelligence Reports, tracking extracts, custom reports.' },
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">Scenario Strategy Tips</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">1.</span><span><strong>Bounce type classification:</strong> Hard bounce = permanent delivery failure (invalid address) → automatically unsubscribed. Soft bounce = temporary failure (mailbox full, server unavailable) → retried. Technical bounce = infrastructure issue (block, challenge-response). Know which category triggers automatic unsubscription.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">2.</span><span><strong>Journey entry source selection:</strong> Data Extension entry for scheduled or batch sends; Salesforce Data entry for CRM-triggered journeys; API Event for real-time triggers from external systems; Date-Based entry for anniversary or renewal journeys. The exam presents a scenario — match the trigger type to the entry source.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">3.</span><span><strong>Decision Split vs Engagement Split:</strong> Decision Split branches based on data attributes (contact field values). Engagement Split branches based on email interaction behaviour (opened, clicked, not opened). Pick the right one based on whether the branching condition is data-driven or interaction-driven.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">4.</span><span><strong>Suppression list vs publication list:</strong> Suppression lists prevent sends to specific addresses regardless of subscription status. Publication lists are opt-in lists for specific content types. A contact can be on a publication list but also suppressed — suppression always wins.</span></li>
        </ul>
      </div>

      <div className="bg-salesforce-blue/5 rounded-xl border border-salesforce-blue/20 p-5 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Mock Exam Benchmark</h2>
        <p className="text-sm text-gray-700">Aim for <strong>75%+ on practice exams</strong> before scheduling. Email Sending &amp; Delivery (24%) is the largest section — master bounce types, suppression logic, and SPF/DKIM/DMARC. Journey Building (20%) requires hands-on sandbox experience to answer scenario questions confidently. Together these two sections account for 44% of the exam.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Top 10 Concepts to Review</h2>
        <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
          <li>Hard vs soft vs technical bounce types and automatic unsubscription rules</li>
          <li>Send classification components: sender profile, delivery profile, send classification</li>
          <li>SPF, DKIM, DMARC — what each does and how they improve deliverability</li>
          <li>Journey Builder entry sources: Data Extension, Salesforce Data, API Event, Date-Based</li>
          <li>Decision Split vs Engagement Split — data-driven vs behaviour-driven branching</li>
          <li>Subscriber key and its role as the unique identifier in Marketing Cloud</li>
          <li>Suppression lists vs publication lists vs exclusion lists</li>
          <li>Dynamic content — attribute-based and filter-based content blocks</li>
          <li>CAN-SPAM compliance requirements: unsubscribe mechanism, physical address, from name</li>
          <li>Data views: Bounces, Clicks, Opens, Unsubscribes — used for SQL queries in reports</li>
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

      <DifficultyHeatmap slug="email-specialist" />
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Ready to Practice?</h2>
        <p className="text-white mb-6">Test yourself with free Email Specialist practice questions covering all 6 exam sections.</p>
        <Link href="/certifications/email-specialist" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Start Free Practice Questions
        </Link>
      </div>
    </div>
  )
}
