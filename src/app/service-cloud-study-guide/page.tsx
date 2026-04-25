import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight, BookOpen } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import type { Metadata } from 'next'
import { buildStudyGuideTitle } from '@/lib/seo-title-helpers'
import CredentialSchema from '@/components/CredentialSchema'
import ExamPricingCard from '@/components/ExamPricingCard'



const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'service-cloud'
const pageTitle = buildStudyGuideTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Service Cloud Consultant exam notes (${RELEASE_CURRENT}): Omni-Channel routing, entitlements, Lightning Knowledge, and case management — with free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/service-cloud-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/service-cloud-study-guide`,
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
  { name: 'Service Cloud Consultant Study Guide', url: '/service-cloud-study-guide' },
]

const faqItems = [
  {
    question: 'How many sections does the Service Cloud Consultant exam have?',
    answer: 'The Service Cloud Consultant exam covers 8 sections: Case Management (32%), Interaction Channels (11%), Knowledge Management (10%), Service Cloud Solution Design (9%), Contact Center Analytics (9%), Integrations and Data Management (8%), Service Console (8%), and Service Cloud Platform (13%). Case Management is the single largest section at 32% — this is where most exam time should be invested.',
  },
  {
    question: 'What is the passing score for Service Cloud Consultant?',
    answer: 'The Service Cloud Consultant passing score is 65%. The exam has 60 multiple-choice questions, a 105-minute time limit, and a $200 fee ($100 retake). Salesforce recommends having the ADM-201 certification before attempting Service Cloud Consultant.',
  },
  {
    question: 'What are the hardest topics on the Service Cloud Consultant exam?',
    answer: 'Omni-Channel routing configuration (queue-based vs skills-based routing, presence statuses, capacity models) and Entitlements/Milestones (SLA management, milestone conditions, actions) are consistently the hardest topics. The exam tests detailed configuration decisions for both — not just that these features exist.',
  },
  {
    question: 'Do I need ADM-201 before attempting Service Cloud Consultant?',
    answer: 'Salesforce recommends but does not require ADM-201 before Service Cloud Consultant. In practice, the exam assumes deep familiarity with object relationships, sharing model, automation tools, and queues — all ADM-201 topics. Candidates without ADM-201 knowledge typically find Service Cloud Consultant significantly harder and should study ADM-201 concepts first.',
  },
]

const examSections = [
  { name: 'Case Management', weight: 32, note: 'Case lifecycle, queues, assignment rules, escalation rules, auto-response rules, case teams, email-to-case, web-to-case' },
  { name: 'Service Cloud Platform', weight: 13, note: 'Service Cloud configuration, Lightning console apps, macros, quick text, Einstein features in Service Cloud' },
  { name: 'Interaction Channels', weight: 11, note: 'Email-to-case, web-to-case, live chat, messaging, voice (CTI), social customer service, self-service portals' },
  { name: 'Knowledge Management', weight: 10, note: 'Knowledge article types, data categories, article visibility, Knowledge in Service Console, Lightning Knowledge setup' },
  { name: 'Contact Center Analytics', weight: 9, note: 'Case reports, service-specific dashboards, SLA adherence reporting, agent productivity metrics' },
  { name: 'Service Cloud Solution Design', weight: 9, note: 'Gathering requirements, matching business requirements to Service Cloud features, ROI and business case scenarios' },
  { name: 'Integrations and Data Management', weight: 8, note: 'CTI integration, third-party telephony, data migration for cases/contacts, external data sources' },
  { name: 'Service Console', weight: 8, note: 'Console navigation, split view, workspace tabs, subtabs, macros, keyboard shortcuts, utility bar configuration' },
]

export default function ServiceCloudStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/service-cloud-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />
      <CredentialSchema
        certSlug="service-cloud-consultant"
        certName="Service Cloud Consultant"
        description={pageDescription}
        pageUrl="/service-cloud-study-guide"
      />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Service Cloud Consultant Study Guide ({RELEASE_CURRENT}): Complete Exam Prep
        </h1>
        <p className="text-lg text-gray-600">
          The Salesforce Service Cloud Consultant certification validates your ability to design and implement
          customer service solutions. This study guide covers every exam section with the case management,
          Omni-Channel, Knowledge, and entitlement details you need to pass — not just the topic list.
        </p>
      </header>

      <ContentPageAuthor />
      <ExamPricingCard
        certSlug="service-cloud"
        certName="Service Cloud Consultant"
        certPageSlug="service-cloud"
      />

      {/* Exam snapshot */}
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
          Retake fee: $100. Salesforce recommends ADM-201 before attempting. 2+ years of Service Cloud implementation experience strongly recommended.
        </p>
      </section>

      {/* Exam weightage */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Service Cloud Consultant Exam Sections and Weightage</h2>
        <p className="text-sm text-gray-600 mb-4">
          Case Management alone is 32% of the exam — master it first. Combined with Platform and Interaction Channels, the top three sections are 56%.
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

      {/* Section deep-dives */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What Each Section Actually Tests</h2>
        <div className="space-y-5 text-sm text-gray-700">
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Case Management (32%)
            </p>
            <p>The largest section. <strong>Case queues:</strong> cases in a queue are visible to all queue members — agents must accept (take ownership) to claim a case. <strong>Assignment rules:</strong> evaluated in order (top to bottom), only the first matching rule fires. If no rule matches, the case is assigned to the default case owner. <strong>Escalation rules:</strong> trigger based on case age (open case, hours since creation); can change priority, reassign, or send notification. <strong>Auto-response rules:</strong> send automated emails to contacts when a case is created (web-to-case, email-to-case). Evaluated in order — first match fires. <strong>Case teams:</strong> predefined groups of agents with different access roles (read-only, read/write) who collaborate on a case — not the same as queues. <strong>Email-to-Case:</strong> routes inbound emails to cases; On-Demand Email-to-Case (Salesforce-hosted) vs Email-to-Case (organisation-hosted). <strong>Web-to-Case:</strong> HTML form generates cases from website submissions.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Omni-Channel and Interaction Channels (11%)
            </p>
            <p><strong>Omni-Channel routing models:</strong> Queue-based routing (routes work to queues, agents manually pull or are pushed from queue); Skills-based routing (routes directly to agents matching required skills, with fallback to queue). <strong>Routing configurations:</strong> push vs pull routing, capacity models (concurrent = number of work items, effort-based = weighted capacity per item), presence statuses (online, busy, offline) control agent availability. <strong>Service channels:</strong> each channel (cases, chats, messaging sessions) has a dedicated service channel object. <strong>Interaction channels:</strong> Email-to-Case (async), Live Agent/Chat (synchronous), Messaging (SMS, WhatsApp — async), Voice (CTI/phone). Know which channel is synchronous vs asynchronous and when each is recommended.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Knowledge Management (10%)
            </p>
            <p><strong>Lightning Knowledge:</strong> articles are categorised by data categories; visibility is controlled by data category visibility settings on profiles/permission sets. <strong>Article types:</strong> in Lightning Knowledge, all articles share a single article type (unlike Classic Knowledge). <strong>Article lifecycle:</strong> Draft → Published → Archived. Agents can suggest articles to customers from cases; articles can be attached to cases for tracking. <strong>Knowledge in Service Console:</strong> Knowledge One component shows relevant articles based on case subject/description. <strong>Key exam scenario:</strong> "agents need to search and attach articles while viewing a case in the console" → add Knowledge One component to the Service Console record page. Ensure agents have the Knowledge User permission.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Entitlements and Milestones (in Service Cloud Platform)
            </p>
            <p><strong>Entitlements</strong> define the level of support a customer is entitled to (e.g., 24/7 phone support, 4-hour response SLA). Linked to accounts, contacts, or assets. <strong>Milestones</strong> are required steps within an entitlement process (e.g., &ldquo;First Response&rdquo; in 4 hours, &ldquo;Case Resolution&rdquo; in 24 hours). Milestone conditions determine when the milestone is triggered (e.g., case opened with Priority = High). Milestone actions fire at specific times: on entry, on success (milestone completed), on violation (time exceeded). <strong>Entitlement processes</strong> bundle milestones and apply to cases — activate the process on the entitlement. <strong>Key exam point:</strong> cases must have an entitlement assigned for milestones to track.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Service Console (8%)
            </p>
            <p>Lightning Service Console is a Lightning app with the &ldquo;console navigation&rdquo; style. <strong>Workspace tabs</strong> are the primary records (e.g., open case); <strong>subtabs</strong> are related records (e.g., the account, contact) accessed from the workspace. <strong>Split view</strong> shows a list view alongside the record — agents can switch cases without leaving the current record. <strong>Macros:</strong> automated actions that run multiple steps in sequence (send email, update field, change status) with a single click — saves agent time on repetitive tasks. <strong>Quick Text</strong> stores predefined message snippets agents insert into emails/chats. <strong>Utility bar:</strong> persistent panel at the bottom of the console for frequently used tools (notes, open CTI, macros).</p>
          </div>
        </div>
      </section>

      {/* Key decision frameworks */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Case Routing Decision Framework</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <p className="text-xs text-gray-600 font-semibold uppercase tracking-wider">Use this when a scenario describes a case routing requirement:</p>
          <ul className="space-y-2">
            <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><span><strong>Route to a team, agents pull cases manually</strong> → Queue-based Omni-Channel or standard assignment rules to queues</span></li>
            <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><span><strong>Route automatically to the right individual agent based on skills</strong> → Skills-based Omni-Channel routing</span></li>
            <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><span><strong>Assign cases by criteria (account region, case type) without push routing</strong> → Case Assignment Rules</span></li>
            <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><span><strong>Escalate a case if unresolved for X hours</strong> → Case Escalation Rules</span></li>
            <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><span><strong>Track SLA compliance (4-hour first response)</strong> → Entitlements with Milestones</span></li>
            <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><span><strong>Send automated confirmation when case is received via web form</strong> → Auto-response Rules</span></li>
          </ul>
        </div>
      </section>

      {/* Study plan */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">6-Week Service Cloud Consultant Study Plan</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p><strong>Week 1 — Case Management (32%):</strong> Case queues, assignment rules, escalation rules, auto-response rules, email-to-case, web-to-case, case teams. Practice: configure an assignment rule that routes high-priority cases to a VIP queue. Configure an escalation rule to reassign after 4 hours.</p>
          <p><strong>Week 2 — Omni-Channel Routing (11%):</strong> Queue-based vs skills-based routing, presence statuses, routing configurations (capacity, push vs pull), service channels. Practice: enable Omni-Channel, create a routing configuration, assign agents skills, and test routing via the Omni-Channel Widget.</p>
          <p><strong>Week 3 — Knowledge + Entitlements (18%):</strong> Lightning Knowledge article lifecycle, data categories, article visibility, article in Service Console. Entitlements, milestones, entitlement processes, milestone actions. Practice: create an entitlement process with two milestones (4-hour first response, 24-hour resolution) with violation actions.</p>
          <p><strong>Week 4 — Service Console + Channels (19%):</strong> Console navigation, workspace tabs/subtabs, macros, quick text, utility bar. Interaction channels (live agent/chat, messaging, voice/CTI). Practice: configure a Lightning Service Console app with Knowledge One component, macro, and quick text.</p>
          <p><strong>Week 5 — Analytics + Solution Design (18%):</strong> Service-specific reports (case age, CSAT, first contact resolution), dashboards, SLA adherence. Solution design scenarios — matching business requirements to features. Review Salesforce1/mobile considerations for field service agents.</p>
          <p><strong>Week 6:</strong> Full timed mock exams (60 Q / 105 min), weak-area targeted revision. Score 75%+ consistently before booking.</p>
        </div>
      </section>

      {/* Scenario tips */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Approach Service Cloud Scenario Questions</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Case routing questions:</strong> Identify the routing trigger — criteria-based assignment with no real-time push = Assignment Rules. Needs real-time push to available agents = Omni-Channel. Needs skill matching = Skills-based Omni-Channel. Needs SLA tracking after case is assigned = Entitlements.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Entitlement questions:</strong> If the scenario mentions &ldquo;SLA breach,&rdquo; &ldquo;response time,&rdquo; or &ldquo;escalation after X hours based on contract,&rdquo; the answer involves Entitlements and Milestones. Assignment rules handle routing; entitlements handle time-based SLA compliance. These are frequently confused on the exam.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Knowledge questions:</strong> &ldquo;Agents need to find and share articles from the case record&rdquo; = Knowledge One component on the record page. &ldquo;Customer needs to search a help centre&rdquo; = Experience Cloud (community) with Knowledge enabled. &ldquo;Articles should only be visible to agents, not customers&rdquo; = data category visibility settings.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Channel selection questions:</strong> Customer expects an immediate response, human-to-human interaction = Live Chat. Customer sends a message at any time, agent responds when available = Messaging (SMS/WhatsApp). Customer calls in = CTI integration. Customer submits a form = Web-to-Case. Customer emails the company = Email-to-Case.</span>
          </li>
        </ul>
      </section>

      {/* Mock benchmark */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks (60 Q / 105 min) before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Service Cloud Consultant&apos;s most common failure point is Omni-Channel routing — specifically the distinction
          between queue-based and skills-based routing and the capacity model configuration. If you are repeatedly
          missing routing questions, spend additional time in a sandbox configuring Omni-Channel from scratch.
          Hands-on configuration is the most efficient way to learn routing behaviour.
        </p>
      </section>

      {/* Top topics */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Top 10 Topics to Review the Day Before</h2>
        <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
          <li>Case queue vs assignment rules — queues are storage; assignment rules route to queues or users</li>
          <li>Assignment rules evaluation order — first match fires; no match goes to default case owner</li>
          <li>Escalation rules — based on case age (hours open), not SLA contracts (that is Entitlements)</li>
          <li>Omni-Channel: queue-based (push to queue) vs skills-based (push to agent with matching skills)</li>
          <li>Presence status — agent must be Online to receive work; Busy stops new work assignment</li>
          <li>Entitlement + Milestone — cases need an entitlement assigned for milestones to track SLA</li>
          <li>Milestone actions: on entry (when milestone starts), on success (met), on violation (exceeded time)</li>
          <li>Lightning Knowledge: all articles share one type; data categories control article visibility</li>
          <li>Email-to-Case vs On-Demand Email-to-Case — org-hosted (firewall friendly) vs Salesforce-hosted</li>
          <li>Macros — automate repetitive agent actions (update field, send email, change status) in Service Console</li>
        </ol>
      </section>

      {/* Related links */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/service-cloud-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Service Cloud Exam Tips {RELEASE_CURRENT}</span>
          </Link>
          <Link href="/sales-cloud-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Sales Cloud Exam Tips</span>
          </Link>
          <Link href="/adm-201-study-guide" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">ADM-201 Study Guide</span>
          </Link>
          <Link href="/consultant-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Consultant Certification Path</span>
          </Link>
        </div>
      </section>

      <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 mb-8">
        <h2 className="text-base font-bold text-gray-900 mb-3">More Service Cloud Resources</h2>
        <ul className="space-y-2">
          <li><Link href="/service-cloud-consultant-study-guide" className="text-sm text-salesforce-dark hover:underline font-medium">→ Service Cloud Consultant Study Guide — overview and exam strategy</Link></li>
          <li><Link href="/field-service-vs-service-cloud-consultant" className="text-sm text-salesforce-dark hover:underline font-medium">→ Field Service vs Service Cloud Consultant — which cert to take?</Link></li>
        </ul>
      </div>

      {/* CTA */}
      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Practice With Real Exam-Style Questions</h2>
        <p className="text-sm text-gray-700 mb-4">
          Apply this study guide with free Service Cloud Consultant practice questions and exam weightage breakdown:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/certifications/service-cloud"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors"
          >
            Service Cloud Practice Questions
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/service-cloud-consultant-exam-tips"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Service Cloud Exam Tips
          </Link>
          <Link
            href="/consultant-certification-path"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Consultant Cert Path
          </Link>
        </div>
      </section>

      
            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">What Comes After This Certification?</h2>
        <p className="text-sm text-gray-700">
          After this certification, consider: <Link href="/certifications/sales-cloud" className="text-salesforce-blue font-medium hover:underline">Sales Cloud Consultant</Link>, <Link href="/certifications/service-cloud" className="text-salesforce-blue font-medium hover:underline">Service Cloud Consultant</Link>, or <Link href="/certifications/experience-cloud" className="text-salesforce-blue font-medium hover:underline">Experience Cloud Consultant</Link>.
        </p>
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