import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Tableau Architect Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Tableau Architect exam tips for ${RELEASE_CURRENT}: enterprise deployment, security, performance, Tableau Server governance.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/tableau-architect-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/tableau-architect-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Tableau Architect exam tips ${RELEASE_CURRENT}, how to pass Tableau Architect, Tableau certified architect study guide, Tableau enterprise deployment exam`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Tableau Architect Exam Tips', url: '/tableau-architect-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Tableau Architect exam format?',
    answer: 'The Tableau Architect exam has 60 multiple-choice questions, a 120-minute time limit, a 75% passing score, and a $600 fee. It is Tableau&apos;s expert-level certification testing enterprise Tableau Server and Tableau Cloud architecture, deployment design, security, performance tuning, and governance at scale.',
  },
  {
    question: 'What are the highest-weight Tableau Architect exam sections?',
    answer: 'System Architecture and Infrastructure (30%) and Security and Authentication (25%) together account for 55% of the exam. Designing Tableau Server topology for enterprise scale, configuring authentication (SAML, OpenID), implementing Row-Level Security (RLS), and performance optimisation are the most heavily tested architect skills.',
  },
  {
    question: 'What prerequisites are needed for the Tableau Architect exam?',
    answer: 'Tableau strongly recommends completing the Tableau Server Certified Associate exam (now Tableau Server Administrator) before attempting Architect. Real experience designing and managing enterprise Tableau Server deployments is essential. This is an expert-level exam — most candidates have 3+ years of Tableau Server administration and architecture experience.',
  },
  {
    question: 'What is the hardest part of the Tableau Architect exam?',
    answer: 'Performance optimisation and high-availability architecture are the most challenging areas. Candidates must understand VizQL Server, Backgrounder, Data Engine, and Cache Server processes and how to tune them for workload. Designing multi-node Tableau Server deployments with load balancing, failover, and optimal process distribution requires deep hands-on experience.',
  },
]

export default function TableauArchitectExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/tableau-architect-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Tableau Architect Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Tableau Architect exam is Tableau&apos;s expert-level certification for enterprise deployment
          architects. These tips focus on the Tableau Server topology, security architecture, and
          performance optimisation that define this advanced exam.
        </p>
      </header>

      <ContentPageAuthor />

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Exam At a Glance</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">45</p>
            <p className="text-xs text-gray-500 mt-0.5">Questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">120 min</p>
            <p className="text-xs text-gray-500 mt-0.5">Time Limit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">70%</p>
            <p className="text-xs text-gray-500 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$250</p>
            <p className="text-xs text-gray-500 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Tableau Architect Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>System architecture</strong> — Designing Tableau Server topologies for enterprise scale: node distribution, process configuration (VizQL, Data Engine, Backgrounder, Cache Server), high availability, load balancing, and Tableau Cloud vs. Tableau Server deployment decisions.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Security architecture</strong> — Authentication methods (SAML, OpenID Connect, Kerberos), authorisation model (projects, groups, content permissions), Row-Level Security implementation approaches (user filters, VizQL-based security, database security), and network security for Tableau deployments.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Performance and governance</strong> — Extract refresh scheduling, Hyper data engine optimisation, background task management, user activity monitoring, and enterprise governance frameworks for Tableau deployments at scale (hundreds of users, thousands of workbooks).</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">System Architecture and Infrastructure</span>
            <span className="font-bold text-salesforce-blue ml-4">30%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Security and Authentication</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Performance Optimisation</span>
            <span className="font-bold text-salesforce-blue ml-4">22%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Governance and Compliance</span>
            <span className="font-bold text-salesforce-blue ml-4">15%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">Architecture + Security + Performance = 77%. Enterprise topology design and RLS implementation are the highest-value study areas.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Tableau Architect Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe an enterprise deployment challenge and ask which architecture decision, configuration,
          or security approach is correct. Think about scale first — what works for 50 users may not scale
          to 5,000. The correct architect answer prioritises performance, security, and maintainability.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For topology questions: add VizQL nodes for more concurrent user sessions. Add Backgrounder nodes for faster extract refreshes. Add Data Engine nodes for better Hyper extract performance. The correct node to add depends on which bottleneck the question describes — match the symptom to the correct process.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For RLS questions: database security (passing user identity to the database) is the most scalable approach for large datasets. VizQL-based user filters (filtering on [TableauUserName()] in the workbook) are simpler to implement but harder to audit at scale. Virtual connections in Tableau Cloud provide centralised, governed data access with built-in RLS.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For authentication questions: SAML delegates authentication to an Identity Provider (IdP) — users log in via their corporate SSO. OpenID Connect uses OAuth 2.0 flows for identity. Kerberos allows single sign-on in Windows domain environments. When a question says &apos;use corporate SSO credentials for Tableau&apos;, SAML is the answer.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          80%+ on 3 timed full mocks before booking (75% passing score)
        </p>
        <p className="text-sm text-gray-700 mt-3">
          The Tableau Architect has the highest passing score (75%) and fee ($600) of any Tableau certification.
          Only attempt this exam after managing a multi-node Tableau Server environment in production.
          The architecture and performance questions cannot be answered correctly without real-world
          enterprise Tableau Server experience.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most Tableau Architect Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Extracts vs Live Connections — Performance vs Currency Trade-Off</p>
            <p className="text-sm text-gray-700">Extracts are snapshots of data stored in Tableau&apos;s columnar format (.hyper files) — fast query performance but data is only as fresh as the last refresh. Live connections query the source database directly — always current but performance depends on source database speed. Candidates use Live connections for all scenarios to ensure data freshness — the exam expects Extracts when performance is the priority and query load on the source must be minimised.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Row-Level Security — Data Source Filters vs User Attribute Functions</p>
            <p className="text-sm text-gray-700">Row-Level Security in Tableau can be implemented via Data Source Filters (a fixed filter applied to the published data source) or User Attribute Functions (ISMEMBEROF, USERNAME — dynamic filters based on logged-in user). Data Source Filters apply to all users of the data source. User Attribute Functions filter per user. Candidates apply Data Source Filters for multi-user security — the exam expects User Attribute Functions for individual user-based data access control.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Tableau Server Roles — Creator vs Explorer vs Viewer</p>
            <p className="text-sm text-gray-700">Creator can connect to new data, build and publish workbooks, and manage projects. Explorer can edit published workbooks and create new content from existing data sources. Viewer can only view published workbooks. Candidates assign Creator licences to all power users — the exam expects Explorer for users who need to edit dashboards but not connect to raw data, reducing licence cost.</p>
          </div>
        </div>
      </section>

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
          <Link href="/tableau-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Tableau Consultant Exam Tips</span>
          </Link>
          <Link href="/tableau-data-analyst-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Tableau Data Analyst Exam Tips</span>
          </Link>
          <Link href="/crm-analytics-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">CRM Analytics Exam Tips</span>
          </Link>
          <Link href="/architect-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Architect Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Tableau Architect Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/tableau-architect" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Tableau Architect Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/tableau-data-analyst-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Tableau Data Analyst Tips
          </Link>
          <Link href="/architect-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Architect Certification Path
          </Link>
        </div>
      </section>
    </div>
  )
}
