import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Service Cloud Consultant Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Service Cloud Consultant exam tips (${RELEASE_CURRENT}): omnichannel routing, case management, SLAs, and escalation rules. Start free practice.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/service-cloud-consultant-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/service-cloud-consultant-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Service Cloud Consultant exam tips ${RELEASE_CURRENT}, how to pass Service Cloud Consultant, Salesforce Service Cloud study guide, Service Cloud Consultant exam prep, case management certification`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Service Cloud Consultant Exam Tips', url: '/service-cloud-consultant-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Service Cloud Consultant exam format?',
    answer: 'The Salesforce Service Cloud Consultant exam has 60 multiple-choice questions, a 105-minute time limit, a 67% passing score, and a $200 fee.',
  },
  {
    question: 'What are the highest-weight Service Cloud Consultant topics?',
    answer: 'Case Management (15%), Service Console Productivity (15%), and Omni-Channel Routing (13%) are the top-weighted sections. Together they account for over 40% of the exam.',
  },
  {
    question: 'Do I need ADM-201 for the Service Cloud Consultant exam?',
    answer: 'Salesforce recommends ADM-201 as a prerequisite but does not officially require it. However, strong Salesforce admin knowledge is essential — most exam scenarios require an understanding of platform-wide configuration.',
  },
  {
    question: 'How long to study for Service Cloud Consultant?',
    answer: '6–8 weeks with hands-on org practice. Focus on real-world case management scenarios, entitlements, milestones, Omni-Channel configuration, and Knowledge article lifecycle.',
  },
]

export default function ServiceCloudConsultantExamTipsPage() {
  const webPageJsonLd = getWebPageJsonLd({
    name: pageTitle,
    description: pageDescription,
    path: '/service-cloud-consultant-exam-tips',
    breadcrumbItems,
  })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({
    headline: pageTitle,
    description: pageDescription,
    path: '/service-cloud-consultant-exam-tips',
  })
  const faqJsonLd = getFaqPageJsonLd(faqItems)

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Service Cloud Consultant Exam Tips ({RELEASE_CURRENT}): How to Pass First Attempt
        </h1>
        <p className="text-lg text-gray-600">
          The Salesforce Service Cloud Consultant certification tests your ability to design and implement
          customer service solutions. Unlike the ADM-201, this exam requires you to make <em>design decisions</em> —
          the right feature for the right scenario. These tips focus on where candidates lose marks.
        </p>
      </header>

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Exam At a Glance</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">60</p>
            <p className="text-xs text-gray-500 mt-0.5">Questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">105 min</p>
            <p className="text-xs text-gray-500 mt-0.5">Time Limit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">67%</p>
            <p className="text-xs text-gray-500 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$200</p>
            <p className="text-xs text-gray-500 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>


      {/* Quick answer */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: Best Way to Pass Service Cloud Consultant</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Prerequisite: ADM-201 certification is required before sitting this exam.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Solution Design (25%) is the highest-weight section — every question here requires knowing which Service Cloud feature best solves the described business problem.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Know Omni-Channel routing in detail: routing models (queue-based, skill-based), capacity, and Service Channel setup are consistently tested.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Exam: 60 questions, 105 minutes, 67% passing score. Target 77%+ on mocks before booking.</li>
        </ul>
      </section>

      {/* Exam weightage */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Service Cloud Consultant Exam Weightage</h2>
        <p className="text-sm text-gray-600 mb-4">
          Solution Design, Data Model, Automation, and Configuration each carry 20–25%. No section can be skipped.
        </p>
        <div className="space-y-3">
          {[
            { section: 'Solution Design', weight: 25, note: 'Choosing the right feature for each service scenario, implementation tradeoffs' },
            { section: 'Service Cloud Data Model', weight: 20, note: 'Cases, accounts, contacts, assets, entitlements, milestones, service contracts' },
            { section: 'Service Cloud Automation', weight: 20, note: 'Case assignment rules, escalation rules, auto-response, Omni-Channel, macros' },
            { section: 'Service Cloud Analytics', weight: 15, note: 'Service reports, dashboards, SLA monitoring, first contact resolution metrics' },
            { section: 'Service Cloud Configuration', weight: 20, note: 'Service Console, Knowledge base, Live Agent/Messaging, CTI, Email-to-Case' },
          ].map(({ section, weight, note }) => (
            <div key={section}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-800">{section}</span>
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

      {/* Key concepts */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Key Concepts You Must Know</h2>
        <div className="space-y-5 text-sm text-gray-700">
          <div>
            <p className="font-semibold text-gray-900 mb-1">Case Management Lifecycle</p>
            <p>Know the full case lifecycle: web-to-case / email-to-case capture → assignment rules (evaluated top to bottom, first match wins) → queue → escalation rules (time-based triggers) → auto-response rules (sent to customer, only one fires per case). The exam tests the order of evaluation and what happens when no rule matches.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Omni-Channel Routing</p>
            <p>Omni-Channel routes work items to the most qualified available agent. Know: queue-based routing (items go to a queue, agents pull from it) vs skill-based routing (items route directly to an agent with matching skills). Understand capacity — agents have a work capacity limit and items have a capacity weight. Pending-status issues often come from capacity being maxed.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Salesforce Knowledge</p>
            <p>Articles have record types, data categories (for visibility), and approval processes. Knowledge articles can be surfaced in the Service Console, in communities, or sent via email. Know the difference between draft, published, and archived states. Translations and versioning are also tested.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Entitlements and Milestones</p>
            <p>Entitlements define what level of support a customer is entitled to (e.g., 24-hour response SLA). Milestones are time-dependent steps within an entitlement process (e.g., &ldquo;First Response within 4 hours&rdquo;). Know how to set up warning and violation actions on milestones, and what triggers them to start/stop.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Service Console and CTI</p>
            <p>The Service Console is a multi-pane interface optimised for high-volume support. Know the components: utility bar (persistent tools), subtabs (related records), keyboard shortcuts, and macros (repeatable action sequences). CTI (Computer Telephony Integration) integrates phone systems — Open CTI vs Salesforce CTI Toolkit — and is commonly tested in the configuration section.</p>
          </div>
        </div>
      </section>

      {/* Study plan */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">4-Week Service Cloud Consultant Study Plan</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p><strong>Week 1 — Case Management and Data Model (40%):</strong> Case lifecycle (web-to-case, email-to-case, assignment rules, escalation, auto-response), entitlements and milestones, service contracts, assets, and the service data model. Practice: configure a case assignment rule that routes by case origin and product.</p>
          <p><strong>Week 2 — Configuration and Automation (40%):</strong> Service Console setup, Omni-Channel (routing config, service channels, queues, capacity), macros, Knowledge base (article record types, data categories, approval workflows). Practice: set up Omni-Channel with two service channels and test capacity-based routing.</p>
          <p><strong>Week 3 — Solution Design and Analytics (35%):</strong> Focus on design scenarios — given a business requirement, choose between Knowledge vs FAQ page, Email-to-Case vs Web-to-Case, Omni-Channel vs case queues. Review service analytics: SLA reports, case resolution time, CSAT, first contact resolution. Practice: design a solution for a 50-agent contact centre described in a scenario.</p>
          <p><strong>Week 4:</strong> Full timed mock exams (60 Q / 105 min), weak-area revision. Score 77%+ consistently before booking.</p>
        </div>
      </section>

      {/* Scenario tips */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Handle Service Cloud Scenario Questions</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Channel selection questions:</strong> Web-to-case for web form submissions (up to 5,000/day). Email-to-case for inbound email (On-Demand Email-to-Case for firewall environments). Live Agent/Messaging for real-time chat. Choose the channel that matches the described customer interaction method.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Routing questions:</strong> If agents specialise in product areas, skill-based routing. If the team is generalist and agents pick from a shared queue, queue-based routing. If the question mentions &ldquo;priority&rdquo; routing for VIP customers, that is skill-based with a higher skill score weight.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>SLA questions:</strong> If the requirement is time-based and tied to a customer contract, entitlements + milestones. If it is a simple escalation based on case age, escalation rules. If it notifies the customer, auto-response rules.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Knowledge visibility questions:</strong> Data categories control which users can see which articles. Channel settings control where articles appear (internal, community, public). If agents see an article but customers cannot, check the channel setting and data category visibility — not the article status.</span>
          </li>
        </ul>
      </section>

      {/* Mock benchmark */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="text-sm text-gray-700 mb-2">
          Service Cloud Consultant passing score is 67% (40/60 questions). Use this benchmark before scheduling:
        </p>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          77%+ on 3 timed full mocks (60 Q / 105 min), one week apart
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Service Cloud Consultant fails are often caused by weak knowledge of Omni-Channel routing and entitlements.
          If you are consistently missing Solution Design questions, focus on feature selection scenarios: build a
          decision table listing each Service Cloud feature, when to use it, and when not to use it.
        </p>
      </section>

      {/* CTA */}

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <dl className="space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
              <dd className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: item.answer }} />
            </div>
          ))}
        </dl>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Related Exam Tips</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/sales-cloud-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Sales Cloud Consultant Exam Tips</span>
          </Link>
          <Link href="/adm-201-exam-tips-2026" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">ADM-201 Exam Tips</span>
          </Link>
          <Link href="/field-service-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Field Service Consultant Exam Tips</span>
          </Link>
          <Link href="/consultant-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Consultant Certification Path</span>
          </Link>
        </div>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Next Step</h2>
        <p className="text-sm text-gray-700 mb-4">
          Apply these tips with free Service Cloud Consultant practice questions and the full study guide:
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
            href="/certifications/role/consultant"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Browse Consultant Cert Path
          </Link>
          <Link
            href="/certifications/administrator"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Start with ADM-201 First
          </Link>
        </div>
      </section>
    </div>
  )
}
