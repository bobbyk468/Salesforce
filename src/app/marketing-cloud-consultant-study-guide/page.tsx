import type { Metadata } from 'next'
import Link from 'next/link'
import { Clock, Target, ArrowRight, BookOpen } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Marketing Cloud Consultant Study Guide (${RELEASE_CURRENT}): Pass the Exam`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Marketing Cloud Consultant study guide: discovery, architecture, integration, data, Journey Builder. Pass first attempt.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/marketing-cloud-consultant-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/marketing-cloud-consultant-study-guide`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Marketing Cloud Consultant study guide ${RELEASE_CURRENT}, how to pass Marketing Cloud Consultant exam, Salesforce SFMC Consultant certification prep, Journey Builder exam topics, Marketing Cloud integration exam`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Marketing Cloud Consultant Study Guide', url: '/marketing-cloud-consultant-study-guide' },
]

const faqItems = [
  {
    question: 'What is the Marketing Cloud Consultant exam format?',
    answer: 'The Marketing Cloud Consultant exam has 60 multiple-choice questions, a 105-minute time limit, a 67% passing score, and a $200 fee ($100 retake). It requires the Email Specialist certification as a prerequisite and 2+ years of Marketing Cloud implementation experience. The exam tests solution architecture, Salesforce CRM integration, data management, and multi-channel journey design.',
  },
  {
    question: 'What are the highest-weight Marketing Cloud Consultant exam sections?',
    answer: 'Discovery and Architecture (28%) is the largest section — it tests your ability to gather requirements, design solutions, and make architectural decisions for Marketing Cloud implementations. Integration (24%) is the second-largest, covering Salesforce CRM integration (Marketing Cloud Connect), APIs, and third-party system connections. Together they account for 52% of the exam.',
  },
  {
    question: 'What is Marketing Cloud Connect and why is it important for this exam?',
    answer: 'Marketing Cloud Connect (MC Connect) is the native integration between Salesforce Marketing Cloud and Salesforce CRM. It enables synchronisation of Leads, Contacts, Campaigns, and custom objects between the two systems. The exam tests: sync configuration, the Connected App setup, which objects sync (Leads, Contacts, Users, Campaigns — not Accounts directly), how to send to CRM reports and campaigns from Marketing Cloud, and how to use Synchronized Data Extensions (SDEs) for audience building based on CRM data.',
  },
  {
    question: 'How does Journey Builder differ from Automation Studio for this exam?',
    answer: 'Journey Builder is the multi-channel lifecycle management tool — it manages individual customer journeys based on events and decisions (e.g., welcome series, nurture paths, re-engagement flows). Automation Studio is the operational data processing tool — it runs scheduled or triggered automations (SQL queries, file imports, data extracts). Journey Builder is triggered by individual contact events; Automation Studio processes data in bulk batches. The exam tests when to use each tool, and how they work together (Automation Studio often feeds audiences that Journey Builder consumes).',
  },
]

const examSections = [
  { name: 'Discovery and Architecture', weight: 28, note: 'Requirements gathering, solution design, account architecture (business units, child accounts), scalability planning, scope and effort estimation' },
  { name: 'Integration', weight: 24, note: 'Marketing Cloud Connect (CRM sync), Connected App, Synchronized Data Extensions, API-based integration (REST/SOAP), third-party system connections' },
  { name: 'Account Management', weight: 16, note: 'Business unit strategy, sender profiles, send classifications, reply mail management, user roles and permissions, account settings' },
  { name: 'Data Management', weight: 20, note: 'Data architecture (data extensions vs lists), Contact Builder, data model design, retention policies, data quality, subscriber management at scale' },
  { name: 'Messaging and Journeys', weight: 12, note: 'Journey Builder design patterns, multi-channel journeys (email + SMS + push), Journey entry sources, decision splits, goal definition' },
]

export default function MarketingCloudConsultantStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/marketing-cloud-consultant-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Marketing Cloud Consultant Study Guide ({RELEASE_CURRENT}): Complete Exam Prep
        </h1>
        <p className="text-lg text-gray-600">
          The Marketing Cloud Consultant certification validates your ability to design and architect
          full Marketing Cloud implementations — from discovery and solution design through Salesforce
          CRM integration, data architecture, and multi-channel journey orchestration. This guide covers
          every section with the depth needed to pass.
        </p>
      </header>

      <ContentPageAuthor />

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Marketing Cloud Consultant Exam at a Glance</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Questions', value: '60' },
            { label: 'Time Limit', value: '105 min' },
            { label: 'Passing Score', value: '67%' },
            { label: 'Exam Fee', value: '$200' },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-lg bg-gray-50 border border-gray-100 p-3 text-center">
              <p className="text-xl font-bold text-salesforce-blue">{value}</p>
              <p className="text-xs text-gray-500 mt-1">{label}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-4">
          Email Specialist certification required as prerequisite. Retake fee: $100. 2+ years of Marketing Cloud implementation experience expected.
        </p>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Marketing Cloud Consultant Exam Sections and Weightage</h2>
        <p className="text-sm text-gray-600 mb-4">
          Discovery &amp; Architecture (28%) + Integration (24%) = 52% of the exam. Mastering solution design decisions and MC Connect integration is the foundation for passing.
        </p>
        <div className="space-y-3">
          {examSections.map(({ name, weight, note }) => (
            <div key={name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-800">{name}</span>
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">What Each Section Actually Tests</h2>
        <div className="space-y-5 text-sm text-gray-700">
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Discovery and Architecture (28%)
            </p>
            <p>This is the most consultant-oriented section — it tests your ability to gather requirements and make architectural decisions. Key areas: <strong>Account architecture:</strong> when to use a single business unit vs multiple business units (BUs) — multiple BUs isolate subscriber data, permissions, and sending domains per brand or region. <strong>Sender authentication:</strong> Private domain (SAP) vs Shared IP — private domain needed for high-volume, brand-sensitive senders; shared IP is fine for low-volume senders. <strong>Scalability design:</strong> understand how to design for millions of subscribers (data extension strategy, contact model planning, data retention). Estimate scope and effort for an MC implementation — the exam tests whether you can identify what is in scope, what is custom, and what is out-of-the-box.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Integration (24%)
            </p>
            <p><strong>Marketing Cloud Connect:</strong> the native Salesforce CRM integration. Setup requires a Connected App in Salesforce, the MC Connect permission set, and an API user. Objects that sync: Leads, Contacts, Users, and Campaigns. <strong>Synchronized Data Extensions (SDEs):</strong> pre-built data extensions that receive CRM data via MC Connect — they update on the MC Connect sync schedule. SDEs are used in Automation Studio and Journey Builder entry sources to target CRM-based audiences without manual imports. <strong>API integration:</strong> REST API for new integrations (JSON, OAuth 2.0 authentication), SOAP API for legacy systems (XML, user credentials authentication). Know the REST endpoints for subscriber management, data extension operations, and triggered sends.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Data Management (20%)
            </p>
            <p>Data architecture decisions drive everything else in a Marketing Cloud implementation. <strong>Data extensions vs lists:</strong> lists are legacy and simpler; data extensions support multi-field subscriber attributes, SQL queries, and complex data models — the answer is almost always data extensions for any new implementation. <strong>Contact Builder:</strong> the data model layer — Contact objects, attribute groups, and population configuration. Know how to set up the Contact model so that data extensions link to the right Contact. <strong>Data retention:</strong> set retention periods per data extension (on send, fixed date, after X days). <strong>Subscriber management at scale:</strong> subscriber key strategy — using CRM Contact ID as the subscriber key enables seamless MC Connect data joining.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Account Management (16%)
            </p>
            <p><strong>Business units:</strong> child accounts within an MC organisation that have their own subscriber lists, permissions, and sending. Parent business unit admins can access child BUs; child BU users cannot access other BUs by default. <strong>Sender profiles:</strong> store the From name, From email, and Reply-To email used for sends. <strong>Send classifications:</strong> commercial (must honour unsubscribes) vs transactional (bypass unsubscribes — for legally required communications). <strong>Reply mail management (RMM):</strong> how Marketing Cloud handles replies to sends — unsubscribe replies, auto-replies, and manually managed replies. <strong>User roles:</strong> know the hierarchy — Account Administrator, Marketing Cloud Administrator, Marketing Cloud Viewer — and what each can do.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Messaging and Journeys (12%)
            </p>
            <p><strong>Journey Builder:</strong> event-driven, individual-level marketing automation. Entry sources: data extension entry (batch), API event entry (real-time trigger from external system), Salesforce entry (CRM object trigger), audience entry (Ad Studio). Journey canvases: Splits (engagement, decision, random), Waits, Messages (email, SMS, push), Updates (update data extension or Salesforce record). <strong>Goal definition:</strong> set a goal condition to measure journey effectiveness and optionally exit contacts who have achieved the goal. Know the difference between &ldquo;goal exit&rdquo; (contact leaves journey when goal achieved) and &ldquo;evaluate goal at re-entry&rdquo;.</p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">6-Week Marketing Cloud Consultant Study Plan</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p><strong>Week 1 — Discovery &amp; Architecture (28%):</strong> Study business unit strategy (single vs multi-BU), sender authentication (private domain vs shared IP), and implementation scoping. Practice: design an MC account architecture for a multi-brand company with separate marketing teams per region.</p>
          <p><strong>Week 2 — Integration: MC Connect (part of 24%):</strong> Configure Marketing Cloud Connect in a sandbox (requires both MC and CRM access). Set up a Connected App, configure the MC connector user, and verify that SDEs populate with CRM data. Practice sending to a CRM report from Marketing Cloud.</p>
          <p><strong>Week 3 — Integration: APIs &amp; Third-Party (part of 24%):</strong> Study REST API authentication (OAuth 2.0 Client Credentials), key REST endpoints (subscriber, data extension row operations, triggered send), and when to use REST vs SOAP. Study external system integration patterns.</p>
          <p><strong>Week 4 — Data Management (20%):</strong> Design a Contact Builder data model. Configure data extension retention policies. Design a subscriber key strategy (CRM Contact ID). Practice: design a data model for a retail company with purchase history, preferences, and CRM sync.</p>
          <p><strong>Week 5 — Account Management &amp; Journeys (16% + 12%):</strong> Configure sender profiles, send classifications, and reply mail management. Build a multi-step Journey Builder journey with entry via API event, email and SMS channels, decision splits based on engagement, and a goal condition.</p>
          <p><strong>Week 6:</strong> Full timed mock exams. Score 75%+ before booking (above the 67% threshold). Architecture and integration scenario questions are the hardest — focus revision there.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Approach Marketing Cloud Consultant Scenario Questions</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Business unit questions:</strong> If a scenario has multiple brands needing separate subscriber lists, compliance domains, or independent admin teams, the answer is multiple business units. If it is one brand with regional personalisation only, a single BU with dynamic content is sufficient. Multiple BUs add configuration overhead — only recommend them when genuine data isolation or administrative separation is required.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Journey Builder vs Automation Studio questions:</strong> Individual-triggered, real-time workflows = Journey Builder (welcome series, post-purchase follow-up, re-engagement). Bulk data operations on a schedule = Automation Studio (nightly import, SQL query to build audience, data extract to SFTP). A common scenario: Automation Studio runs nightly to populate a data extension, then Journey Builder uses that data extension as an entry source. They are complementary, not competing.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>MC Connect sync questions:</strong> SDEs populate from CRM on the MC Connect sync schedule (every 15 minutes). They are read-only in Marketing Cloud — you cannot write back to SDEs directly. To update CRM records from MC, use a Journey Builder Update step or Automation Studio Script Activity via the API. When a scenario requires near-real-time CRM data in Marketing Cloud, SDEs are the answer — not manual imports.</span>
          </li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks (60 Q / 105 min) before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          The most common failure mode for Marketing Cloud Consultant is underestimating the architecture
          section. Candidates who come from an operational Marketing Cloud background (running campaigns,
          building emails) often know the tools well but lack the solution design and scoping skills the
          consultant exam demands. Practise designing solutions from scratch — not just using features you
          already know.
        </p>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Top 10 Topics to Review the Day Before</h2>
        <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
          <li>Business units: when to use multi-BU (brand isolation, admin separation) vs single BU</li>
          <li>Private domain (SAP) vs shared IP: high-volume brand senders need private domain</li>
          <li>MC Connect: syncs Leads, Contacts, Users, Campaigns — not Accounts directly</li>
          <li>Synchronized Data Extensions: read-only CRM mirror, updates on MC Connect schedule</li>
          <li>Subscriber key strategy: use CRM Contact ID to enable seamless MC Connect joins</li>
          <li>Send classifications: commercial (unsubscribe-respected) vs transactional (bypass)</li>
          <li>Journey Builder entry sources: data extension, API event, Salesforce entry, audience</li>
          <li>Journey goal: measure effectiveness and optionally exit contacts who achieve the goal</li>
          <li>Journey Builder vs Automation Studio: individual real-time vs bulk scheduled</li>
          <li>REST vs SOAP API: REST (JSON, OAuth 2.0) for new integrations; SOAP (XML) for legacy</li>
        </ol>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Practice With Real Exam-Style Questions</h2>
        <p className="text-sm text-gray-700 mb-4">
          Apply this study guide with free Marketing Cloud Consultant practice questions:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/marketing-cloud-consultant" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            MC Consultant Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/marketing-cloud-consultant-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            MC Consultant Exam Tips
          </Link>
          <Link href="/marketing-cloud-engagement-admin-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            MC Admin Exam Tips
          </Link>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          <Link href="/data-cloud-vs-marketing-cloud" className="text-salesforce-blue underline">
            Data Cloud vs Marketing Cloud — which certification to pursue? →
          </Link>
        </p>
      </section>
    </div>
  )
}
