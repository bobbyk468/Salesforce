import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `CTA Evaluation Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `CTA Evaluation Exam tips: advanced architecture, large data, integration patterns. Written exam strategy for Review Board.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {  // Canonical to cert page — prevents GSC "chose different canonical"
  canonical: `${siteUrl}/certifications/technical-architect-evaluation`,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/technical-architect-evaluation-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `CTA Evaluation Exam tips ${RELEASE_CURRENT}, how to pass CTA written exam, Salesforce Technical Architect evaluation, architect written exam strategy`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'CTA Evaluation Exam Tips', url: '/technical-architect-evaluation-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the CTA Evaluation Exam and how does it differ from the Review Board?',
    answer: 'The Technical Architect Evaluation is the most prestigious credential in the Salesforce ecosystem — held by fewer than 1% of certified professionals. It validates the ability to design enterprise-scale Salesforce architectures across all domains simultaneously. CTAs command the highest salaries in the Salesforce job market and are sought by top SIs and consulting firms. The investment is significant (time, study, and fees), but for architects targeting the top of the Salesforce career ladder, it is widely considered the most valuable credential available.',
  },
  {
    question: 'What topics are covered in the CTA Evaluation Exam?',
    answer: 'The CTA Evaluation Exam covers advanced topics across all Salesforce architectural domains: large data volumes and query optimisation, enterprise integration architecture patterns, identity and access management at scale, security architecture and field-level security at large data volumes, deployment strategy for complex multi-org environments, multi-cloud solution architecture, and Salesforce governance and release management.',
  },
  {
    question: 'Is the Technical Architect Evaluation worth pursuing?',
    answer: 'The CTA Evaluation Exam has approximately 60 multiple-choice questions and a 120-minute time limit. The exact passing score is not publicly disclosed by Salesforce. The exam is notably more difficult than any other Salesforce written exam — it tests breadth across all architecture domains at an expert level, requiring you to hold and apply knowledge from the Application Architect and System Architect credential tracks simultaneously.',
  },
  {
    question: 'Which credentials are recommended before attempting the CTA Evaluation Exam?',
    answer: 'Salesforce strongly recommends completing both the Application Architect credential (Data Architect + Sharing &amp; Visibility Architect + Platform App Builder + System Architect) and System Architect credential (Integration Architect + Identity &amp; Access Management Architect + Dev Lifecycle &amp; Deployment Architect + System Architect) before the Evaluation Exam. Most successful candidates also have 5+ years of Salesforce architecture experience.',
  },
]

export default function TechnicalArchitectEvaluationExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/technical-architect-evaluation-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          CTA Evaluation Exam Tips ({RELEASE_CURRENT}): How to Pass the Written Architecture Exam
        </h1>
        <p className="text-lg text-gray-600">
          The CTA Evaluation Exam is the written gate to the Salesforce Certified Technical Architect
          credential. These tips focus on the advanced architecture topics, governor limits at scale,
          and multi-cloud design patterns tested in this expert-level written examination.
        </p>
      </header>

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Exam At a Glance</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">~60</p>
            <p className="text-xs text-gray-500 mt-0.5">Questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">120 min</p>
            <p className="text-xs text-gray-500 mt-0.5">Time Limit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">Not disclosed</p>
            <p className="text-xs text-gray-500 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$400</p>
            <p className="text-xs text-gray-500 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What the CTA Evaluation Exam Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Large data volumes and performance</strong> — Skinny tables for selective field queries on large objects, custom indexes for non-selective fields, data archiving with Big Objects, SOQL query optimisation, Apex batch processing at scale (chunking strategies, governor limit management), and platform cache usage for read-heavy workloads exceeding standard query limits.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Enterprise integration architecture</strong> — Choosing between synchronous REST, asynchronous Platform Events, Change Data Capture (CDC), Streaming API, and MuleSoft for different integration scenarios. Designing idempotent integrations, handling API limits (concurrent API calls, daily API call limits), and designing for high-availability integration that tolerates downstream system failures.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Multi-cloud and identity architecture</strong> — Designing multi-org Salesforce landscapes (single org vs. multi-org), external identity integration (SAML SSO, OAuth, delegated authentication), Experience Cloud authentication patterns, Salesforce Identity for external app authentication, and managing security across cloud boundaries.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Exam Domain Weighting (Approximate)</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Data Architecture and Management</span>
            <span className="font-bold text-salesforce-blue ml-4">~25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Integration Architecture</span>
            <span className="font-bold text-salesforce-blue ml-4">~20%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Security and Identity Architecture</span>
            <span className="font-bold text-salesforce-blue ml-4">~20%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Development Lifecycle and Deployment</span>
            <span className="font-bold text-salesforce-blue ml-4">~15%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Solution Architecture and Design</span>
            <span className="font-bold text-salesforce-blue ml-4">~20%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">Domain weights are approximate. The exam draws from all architect-level credentials. Breadth across all domains is tested — not depth in one area.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach CTA Evaluation Exam Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          The CTA Evaluation Exam presents complex scenarios with multiple correct-seeming answers.
          The correct answer is the architecturally best solution — not just a working solution.
          Always consider scale, maintainability, and Salesforce best practices.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For LDV questions: when an object exceeds 10 million records, standard SOQL queries without custom indexes can cause performance issues. Skinny tables (a stripped-down copy of frequently queried fields) dramatically speed up reporting queries. Defer sharing rules calculation for bulk data loads. Divide and conquer with batch sizes of 2,000 records max for Batch Apex. When a scenario describes reports timing out on a 50-million-record object, skinny tables are the first recommendation.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For integration pattern questions: real-time synchronous integration (REST callout) is appropriate for user-facing transactions requiring immediate confirmation. Asynchronous (Platform Events, Queues) is better for high volume or when response latency is acceptable. Change Data Capture captures all record changes for downstream consumption without polling. When a scenario describes &apos;10,000 records updated per hour needing to sync to an external system&apos;, use CDC — not synchronous REST callouts or scheduled Batch Apex.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For multi-org questions: single-org is simpler but has limits (data, users, complexity). Multi-org provides isolation (separate release cycles, security boundaries) but requires integration. The CTA exam typically rewards single-org solutions when technically feasible. When a scenario describes different business units wanting separate release cycles, consider hub-and-spoke with Salesforce-to-Salesforce integration before recommending full multi-org architecture.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Study Plan for the CTA Evaluation Exam</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          6–12 months of targeted preparation after App Architect + System Architect credentials
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Study all six architect-level credentials (Data Architect, Sharing &amp; Visibility Architect,
          Integration Architect, Identity &amp; Access Management Architect, Dev Lifecycle &amp; Deployment
          Architect, and Platform App Builder) at exam-passing depth. The Evaluation Exam tests
          all of these simultaneously. Many candidates retake individual architect exams to refresh
          knowledge before attempting the CTA Evaluation.
        </p>
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
          <Link href="/technical-architect-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Technical Architect Exam Tips</span>
          </Link>
          <Link href="/technical-architect-review-board-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Technical Architect Review Board Exam Tips</span>
          </Link>
          <Link href="/application-architect-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Application Architect Exam Tips</span>
          </Link>
          <Link href="/architect-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Architect Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start CTA Evaluation Exam Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/technical-architect-evaluation" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            CTA Evaluation Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/technical-architect-review-board-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Review Board Tips
          </Link>
          <Link href="/become-cta" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            How to Become a CTA
          </Link>
        </div>
      </section>
    </div>
  )
}
