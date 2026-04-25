import type { Metadata } from 'next'
import Link from 'next/link'
import { Clock, Target, ArrowRight, BookOpen } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import { buildStudyGuideTitle } from '@/lib/seo-title-helpers'
import ExamTipsCrossLink from '@/components/ExamTipsCrossLink'
import CertInsightBlock from '@/components/CertInsightBlock'
import CredentialSchema from '@/components/CredentialSchema'




const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'service-cloud'

const pageTitle = buildStudyGuideTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Service Cloud Consultant study guide: exam sections, Omni-Channel, entitlements, case management, knowledge base. Pass first attempt.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/service-cloud-consultant-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/service-cloud-consultant-study-guide`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Service Cloud Consultant', url: '/certifications/service-cloud' },
  { name: 'Service Cloud Consultant Study Guide', url: '/service-cloud-consultant-study-guide' },
]

const faqItems = [
  {
    question: 'What is the Service Cloud Consultant exam format?',
    answer: 'The Service Cloud Consultant exam has 60 multiple-choice questions, a 105-minute time limit, a 65% passing score, and a $200 fee ($100 retake). ADM-201 certification is strongly recommended, and 2+ years of Service Cloud implementation experience is expected. The exam tests your ability to design and implement omnichannel customer service solutions.',
  },
  {
    question: 'What are the highest-weight Service Cloud Consultant exam sections?',
    answer: 'Service Cloud Solution Design (22%) is the largest section — it tests your ability to design service architectures for complex requirements. Case Management (15%) and Knowledge Management (18%) are the next two highest. Together the top three sections account for 55% of the exam.',
  },
  {
    question: 'What is Omni-Channel in Service Cloud and why is it tested heavily?',
    answer: 'Omni-Channel is Salesforce&apos;s unified routing engine that distributes work (cases, chats, leads, custom objects) to agents based on their availability, capacity, and skills. The exam tests: routing models (queue-based routing — first-in-first-out to a queue; skills-based routing — match work to agents with the right skill set; external routing — route through third-party CTI), agent capacity (size-based vs tab-based), and presence statuses. Omni-Channel is one of the most commonly failed topics because it has many configuration nuances.',
  },
  {
    question: 'How does entitlement management work in Service Cloud?',
    answer: 'Entitlements define the level of support a customer is entitled to (e.g., 24/7 phone support, 4-hour response SLA). An Entitlement Process defines the series of time-dependent milestones that must be completed for each case. Milestones are checkpoints (e.g., &quot;First Response within 2 hours&quot;) that trigger escalation actions if breached. The exam tests: entitlement templates (auto-assign entitlements to cases), milestone actions (notifications and escalation), and how entitlements relate to Accounts, Contacts, and Assets.',
  },
]

const examSections = [
  { name: 'Service Cloud Solution Design', weight: 22, note: 'Designing service architectures, channel strategy (phone, chat, email, social), contact centre design, Salesforce for Service deployment patterns' },
  { name: 'Knowledge Management', weight: 18, note: 'Knowledge base setup, article types and fields, data categories, article lifecycle (draft, review, publish, archive), Knowledge search, Lightning Knowledge migration' },
  { name: 'Omni-Channel', weight: 15, note: 'Queue-based vs skills-based vs external routing, agent capacity (size vs tab), presence statuses, Omni-Channel Supervisor, routing configuration' },
  { name: 'Case Management', weight: 15, note: 'Case assignment rules, queues, escalation rules, auto-response rules, case teams, case merge, email-to-case, web-to-case setup' },
  { name: 'Integration and Data Management', weight: 12, note: 'CTI integration, telephony, third-party chat integration, data migration for service orgs, contact centre data architecture' },
  { name: 'Service Console', weight: 10, note: 'Console navigation, utility bar, split view, keyboard shortcuts, macros, console components, Highlights Panel configuration' },
  { name: 'Entitlement Management', weight: 8, note: 'Entitlement processes, milestones, milestone actions, entitlement templates, SLA tracking, breach escalation' },
]

export default function ServiceCloudConsultantStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/service-cloud-consultant-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />
      <CredentialSchema
        certSlug="service-cloud-consultant"
        certName="Service Cloud Consultant"
        description={pageDescription}
        pageUrl="/service-cloud-consultant-study-guide"
      />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Service Cloud Consultant Study Guide ({RELEASE_CURRENT}): Complete Exam Prep
        </h1>
        <p className="text-lg text-gray-600">
          The Service Cloud Consultant certification validates your ability to design and implement
          Salesforce-based contact centre and customer service solutions — from Omni-Channel routing
          and entitlement management to Knowledge bases and CTI integration. This guide covers every
          exam section at the depth needed to pass.
        </p>
      </header>

      <ContentPageAuthor />
      <ExamTipsCrossLink examTipsSlug="service-cloud-consultant-exam-tips" certName="Service Cloud Consultant" />
      <CertInsightBlock certSlug="service-cloud-consultant" />

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Service Cloud Consultant Exam at a Glance</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Questions', value: '60' },
            { label: 'Time Limit', value: '105 min' },
            { label: 'Passing Score', value: '65%' },
            { label: 'Exam Fee', value: '$200' },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-lg bg-gray-50 border border-gray-100 p-3 text-center">
              <p className="text-xl font-bold text-salesforce-blue">{value}</p>
              <p className="text-xs text-gray-600 mt-1">{label}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-600 mt-4">
          ADM-201 recommended. Retake fee: $100. Contact centre or customer service implementation experience strongly recommended.
        </p>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Service Cloud Consultant Exam Sections and Weightage</h2>
        <p className="text-sm text-gray-600 mb-4">
          Solution Design (22%) + Knowledge Management (18%) + Omni-Channel (15%) + Case Management (15%) = 70% of the exam.
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
              <p className="text-xs text-gray-600">{note}</p>
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
              Service Cloud Solution Design (22%)
            </p>
            <p>The largest section tests your ability to design a complete service solution for a business requirement. Key decision frameworks: when to recommend Email-to-Case vs web-to-case vs manually created cases, how to design a channel strategy (which contact channels to enable for which customer segments), and how to architect a contact centre with Salesforce as the CRM layer alongside third-party telephony (CTI). Know the Call Centre feature: integrates with third-party CTI adapters (Five9, Genesys, Amazon Connect) to surface caller information as cases are created. Also know the difference between an inbound service flow (customer initiates contact) vs outbound (agent initiates) and how each is supported in Service Cloud.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Knowledge Management (18%)
            </p>
            <p>Salesforce Knowledge is the built-in knowledge base for agent and customer self-service. Key topics: <strong>Lightning Knowledge</strong> (the current standard — single Knowledge object, custom fields per record type; replaces Classic Knowledge&apos;s article types). <strong>Data Categories</strong> — hierarchical categories that control article visibility (which customer communities see which articles, which agents see which internal articles). <strong>Article lifecycle:</strong> draft → In Review → Published → Archived. <strong>Knowledge search:</strong> how articles surface in the Service Console search, in Experience Cloud portals, and in Einstein Search. Know the difference between Lightning Knowledge (record types replace article types) and Classic Knowledge (deprecated but still tested for migrations).</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Omni-Channel (15%)
            </p>
            <p>Omni-Channel routes work items to agents. Know the three routing models: <strong>Queue-based routing</strong> — work items go into a queue, agents pull from the queue or work is pushed based on capacity; <strong>Skills-based routing</strong> — work is matched to agents who have the required skill (routing configurations specify which skill is needed); <strong>External routing</strong> — integration with third-party routing systems (e.g., telephony ACD). <strong>Agent capacity:</strong> Size-based (each work item has a weight; agent receives work until capacity is full) vs Tab-based (each open work item tab counts as 1, regardless of type). <strong>Presence statuses:</strong> define what types of work an agent can receive while in each status — know that agents can decline work if it is not the right type for their current status.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Case Management (15%)
            </p>
            <p>Case routing: Assignment Rules evaluate conditions top-down and assign to a user or queue when criteria match — if no rule matches, the case goes to the default case owner. Escalation Rules: trigger time-based escalations (e.g., if a case is open for 4 hours without a response, escalate to manager). Auto-response rules: send automated email replies to contacts when cases are created via web-to-case or email-to-case. <strong>Email-to-Case:</strong> inbound emails create cases — know how threading (Reply-To address format) keeps replies associated to the correct case. <strong>Web-to-Case:</strong> HTML form submissions create cases — know field mapping and spam filtering.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Entitlement Management (8%)
            </p>
            <p>Entitlements link to Accounts (or Contacts, Assets) and define the SLA terms. An <strong>Entitlement Process</strong> defines the milestone sequence — each milestone has a time trigger, completion criteria, and optional actions (warning email at 75% elapsed time, escalation email on breach). <strong>Entitlement Templates</strong> auto-apply an entitlement to a case when the contact, account, or asset has an active entitlement. Know that milestones can be paused (e.g., waiting for customer response) using milestone completion criteria on the case.</p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">6-Week Service Cloud Consultant Study Plan</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p><strong>Week 1 — Solution Design (22%):</strong> Study contact centre architecture patterns, channel strategy design, and Salesforce Call Centre + CTI integration concepts. Practice: design a service architecture on paper for a given scenario (e.g., a retail company with email, chat, and phone channels).</p>
          <p><strong>Week 2 — Knowledge Management (18%):</strong> Enable Lightning Knowledge in a Developer Edition org. Create record types, data categories, and the article lifecycle workflow. Configure Knowledge search in the Service Console. Understand the migration path from Classic to Lightning Knowledge.</p>
          <p><strong>Week 3 — Omni-Channel (15%):</strong> Configure Omni-Channel in a sandbox: create a service channel, routing configuration, presence statuses, and queue. Enable skills-based routing. Assign an agent and test work routing. Understand the Omni-Channel Supervisor dashboard for real-time monitoring.</p>
          <p><strong>Week 4 — Case Management (15%):</strong> Configure Email-to-Case (with threading) and Web-to-Case. Build assignment rules, escalation rules, and auto-response rules. Practice: trace a case from web submission through assignment rule routing to escalation.</p>
          <p><strong>Week 5 — Entitlements, Console &amp; Integration (8% + 10% + 12%):</strong> Build an entitlement process with 2 milestones and breach actions. Configure the Service Console: Highlights Panel, utility bar, macros. Study CTI and third-party integration concepts for contact centres.</p>
          <p><strong>Week 6:</strong> Full timed mock exams. Score 75%+ before booking. Focus revision on Omni-Channel routing configuration — it is the most consistently failed topic.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Approach Service Cloud Consultant Scenario Questions</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Omni-Channel routing questions:</strong> When a scenario requires work to go to the next available agent in a queue (no skill matching), the answer is queue-based routing. When cases must be matched to agents with specific skills (e.g., Spanish-speaking agents for Spanish cases), the answer is skills-based routing. When the routing system is third-party telephony (a call centre ACD), the answer is external routing. Agents must have a Presence Status that includes the relevant service channel — if a status doesn&apos;t include the channel, agents in that status won&apos;t receive that type of work.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Knowledge visibility questions:</strong> Data Categories control which articles are visible to which audiences — internal (agent-only), partner, and customer (public). If a scenario says certain articles should only be visible to premium customers, the answer involves Data Category visibility settings on the Experience Cloud site. If articles should only be visible to agents (not customers), the answer is setting the article&apos;s channel to &ldquo;Internal App&rdquo; only.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Case routing questions:</strong> Assignment rules assign new cases — they evaluate top-down and stop at the first matching rule. Escalation rules handle cases that have been open too long — they use time-based triggers. Auto-response rules send emails — they fire only on case creation. If a scenario asks what happens when no assignment rule matches, the answer is the case goes to the Default Case Owner (configurable in Support Settings).</span>
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
          The most common failure mode for Service Cloud Consultant is insufficient hands-on Omni-Channel
          experience. Candidates who study Omni-Channel conceptually — without configuring it in a sandbox —
          consistently miss routing model questions because the distinctions only become clear through
          hands-on configuration. Build at least one Omni-Channel routing setup before booking.
        </p>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Top 10 Topics to Review the Day Before</h2>
        <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
          <li>Omni-Channel routing models: queue-based (FIFO pool) vs skills-based (matched to agent) vs external</li>
          <li>Agent capacity: size-based (weighted) vs tab-based (count of open items)</li>
          <li>Presence statuses: which channels an agent receives while in each status</li>
          <li>Lightning Knowledge: record types replace article types; Data Categories control visibility</li>
          <li>Article lifecycle: draft → In Review → Published → Archived</li>
          <li>Case assignment rules: evaluate top-down, stop at first match, default owner if no match</li>
          <li>Escalation rules: time-based triggers on open cases (not assignment)</li>
          <li>Email-to-Case threading: Reply-To address keeps replies linked to the original case</li>
          <li>Entitlement processes: milestone sequence with time triggers, warning actions, breach actions</li>
          <li>Data Categories: control which Knowledge articles are visible to which Experience Cloud audiences</li>
        </ol>
      </section>
      <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 mb-8">
        <h2 className="text-base font-bold text-gray-900 mb-3">Compare Certifications</h2>
        <ul className="space-y-2">
          <li><Link href="/field-service-vs-service-cloud-consultant" className="text-sm text-salesforce-dark hover:underline font-medium">→ Field Service vs Service Cloud Consultant — which cert to take?</Link></li>
        </ul>
      </div>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Practice With Real Exam-Style Questions</h2>
        <p className="text-sm text-gray-700 mb-4">
          Apply this study guide with free Service Cloud Consultant practice questions:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/service-cloud" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Service Cloud Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/service-cloud-consultant-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Service Cloud Exam Tips
          </Link>
          <Link href="/sales-cloud-vs-service-cloud" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Sales Cloud vs Service Cloud
          </Link>
          <Link href="/field-service-vs-service-cloud-consultant" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Field Service vs Service Cloud
          </Link>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">What Comes After Service Cloud Consultant?</h2>
        <p className="text-sm text-gray-700 mb-3">
          After you&apos;ve passed Service Cloud, you can either deepen your service specialism or round out a broader consultant profile:
        </p>
        <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
          <li>
            Go deeper into field operations with{' '}
            <Link href="/field-service-vs-service-cloud-consultant" className="text-salesforce-blue font-medium hover:underline">
              Field Service Consultant
            </Link>
            {' '}if your org runs onsite work orders or dispatches technicians.
          </li>
          <li>
            Pair Service Cloud with{' '}
            <Link href="/certifications/sales-cloud" className="text-salesforce-blue font-medium hover:underline">
              Sales Cloud Consultant
            </Link>
            {' '}to design full customer journeys from lead to ticket resolution.
          </li>
          <li>
            If you own customer/partner communities, add{' '}
            <Link href="/certifications/experience-cloud" className="text-salesforce-blue font-medium hover:underline">
              Experience Cloud Consultant
            </Link>
            {' '}to cover self-service and portal experiences on top of your service processes.
          </li>
        </ul>
      </section>

      
      <DifficultyHeatmap slug="service-cloud" />
      {/* Hub CTA */}
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white mt-10">
        <h2 className="text-2xl font-bold mb-2">Ready to Test Your Knowledge?</h2>
        <p className="text-white mb-6">Try the Service Cloud Consultant free practice exam — scored with full explanations.</p>
        <Link
          href="/certifications/service-cloud"
          className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Service Cloud Consultant Free Practice Exam &rarr;
        </Link>
      </div>
    </div>
  )
}