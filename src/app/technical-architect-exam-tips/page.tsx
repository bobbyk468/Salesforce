import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Salesforce Technical Architect Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Technical Architect exam tips for ${RELEASE_CURRENT}: CTA pathway, system architecture, integration, security, Review Board strategy.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/technical-architect-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/technical-architect-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Salesforce Technical Architect exam tips ${RELEASE_CURRENT}, how to pass CTA exam, Certified Technical Architect strategy, CTA Review Board tips`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Technical Architect Exam Tips', url: '/technical-architect-exam-tips' },
]

const faqItems = [
  {
    question: 'Is the Technical Architect worth pursuing?',
    answer: 'The Technical Architect is the most prestigious credential in the Salesforce ecosystem — held by fewer than 1% of certified professionals. It validates the ability to design enterprise-scale Salesforce architectures across all domains simultaneously. CTAs command the highest salaries in the Salesforce job market and are sought by top SIs and consulting firms. The investment is significant (time, study, and fees), but for architects targeting the top of the Salesforce career ladder, it is widely considered the most valuable credential available.',
  },
  {
    question: 'What prerequisites are needed before attempting the CTA?',
    answer: 'Salesforce recommends: Application Architect credential (Data Architect + Sharing &amp; Visibility Architect + App Builder + System Architect) and/or System Architect credential (Integration Architect + Identity &amp; Access Management Architect + Dev Lifecycle &amp; Deployment Architect + System Architect). Candidates typically have 5–10 years of Salesforce experience before attempting the CTA.',
  },
  {
    question: 'What is the CTA Review Board and how should I prepare for it?',
    answer: 'The Review Board presents a complex multi-cloud business scenario and asks the candidate to design an enterprise solution architecture. Candidates have time to prepare their presentation, then present to 4 CTA examiners who ask challenging follow-up questions. Preparation involves practicing with real-world scenario presentations, joining CTA study groups, and working with a CTA mentor. Oral communication and architectural justification are as important as technical knowledge.',
  },
  {
    question: 'What topics are covered in the CTA Evaluation Exam?',
    answer: 'The CTA Evaluation Exam covers advanced Salesforce architecture topics: enterprise data modelling, large data volumes, integration architecture patterns, identity and access management, security architecture, deployment strategy for large orgs, and multi-cloud solution design. It tests breadth across all Salesforce architectural domains at an expert level.',
  },
  {
    question: 'What concepts do most Technical Architect candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the Technical Architect exam are: (1) CTA Is a Review Board — Not a Written Exam; (2) Holistic Architecture — Every Decision Involves Trade-Offs; (3) Governance and Delivery — Architecture Without Delivery Plan Is Incomplete. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('technical-architect-exam-tips'),
]

export default function TechnicalArchitectExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/technical-architect-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Certified Technical Architect (CTA) Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Salesforce CTA is the highest Salesforce credential — requiring both a written evaluation
          exam and a live Review Board presentation. These tips cover the CTA pathway, evaluation exam
          strategy, and Review Board preparation for the most elite Salesforce certification.
        </p>
      </header>

      <ContentPageAuthor />

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Exam At a Glance</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">2 stages</p>
            <p className="text-xs text-gray-500 mt-0.5">Questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">~4.5 hr total</p>
            <p className="text-xs text-gray-500 mt-0.5">Time Limit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">Pass / Fail</p>
            <p className="text-xs text-gray-500 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$3,400</p>
            <p className="text-xs text-gray-500 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What the CTA Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Enterprise architecture breadth</strong> — Advanced data modelling (large data volumes, skinny tables, custom indexes), integration architecture (SOAP, REST, event-driven, middleware), security architecture (authentication, authorisation, field-level security at scale), and deployment strategy for large complex orgs with multiple environments and release trains.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Multi-cloud solution design</strong> — Designing solutions that span multiple Salesforce clouds (Sales Cloud, Service Cloud, Experience Cloud, Marketing Cloud, MuleSoft) and integrate with external systems. Understanding which cloud handles which business function and how they exchange data without creating tight coupling.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Review Board presentation skills</strong> — Presenting a well-structured architecture solution to a panel of CTA examiners: clearly defining the problem, making and defending architectural trade-offs, communicating technical decisions in business terms, and answering probing follow-up questions under pressure.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">CTA Pathway and Credential Requirements</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Application Architect credential (recommended)</span>
            <span className="font-bold text-salesforce-blue ml-4">Prerequisite</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">System Architect credential (recommended)</span>
            <span className="font-bold text-salesforce-blue ml-4">Prerequisite</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">CTA Evaluation Exam (written)</span>
            <span className="font-bold text-salesforce-blue ml-4">$400</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">CTA Review Board (live presentation)</span>
            <span className="font-bold text-salesforce-blue ml-4">$3,000</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">Most candidates spend 1–3 years preparing for the CTA after earning the Application and System Architect credentials. The Review Board pass rate is approximately 30–40% per attempt.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach CTA Review Board Scenarios</h2>
        <p className="text-sm text-gray-700 mb-3">
          Review Board scenarios describe a complex enterprise with multiple business requirements,
          technical constraints, and competing priorities. The examiners evaluate your ability to
          make defensible architectural decisions — not just list features.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />Structure every architectural decision as: context (what constraint or requirement drives this decision), options considered (what alternatives you evaluated), chosen approach (what you selected and why), and trade-offs accepted (what you gave up and why that is acceptable). Examiners probe every &apos;why&apos; — know your justifications cold.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For integration questions: synchronous integration (REST/SOAP) when the caller needs an immediate response and latency is acceptable. Event-driven (Platform Events, Change Data Capture) when decoupling is more important than immediacy. Middleware (MuleSoft) when transformation, routing, or orchestration is needed. Never use callouts in Apex triggers — always use async patterns.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For large data volume questions: when record counts exceed 10 million, consider: skinny tables for frequently-queried field subsets, custom indexes for non-selective fields, archiving strategies (Big Objects), and query optimisation. Batch Apex is the standard for processing large volumes — know its limits (50 million records per batch job, 2,000 Apex jobs in the queue).</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">CTA Review Board Preparation Timeline</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          12–18 months of dedicated preparation after App + System Architect credentials
        </p>
        <p className="text-sm text-gray-700 mt-3">
          The most effective CTA preparation is scenario practice with other CTA candidates and mentors.
          Join the official Salesforce CTA Study Group on the Trailblazer Community. Practice presenting
          architectural solutions to peers and recording yourself to improve communication clarity.
          The Review Board tests communication as much as technical knowledge.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most Technical Architect Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. CTA Is a Review Board — Not a Written Exam</p>
            <p className="text-sm text-gray-700">The Certified Technical Architect credential is awarded via a Review Board presentation: a panel of existing CTAs evaluates a candidate on a scenario they prepare and defend live. There is no multiple-choice exam. Candidates prepare for CTA like a standard exam — the Review Board requires deep scenario analysis, architecture defence, and communication skills, not just technical knowledge recall.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Holistic Architecture — Every Decision Involves Trade-Offs</p>
            <p className="text-sm text-gray-700">The CTA Review Board evaluates whether candidates can make defensible architecture decisions under constraints (budget, timeline, org maturity, data volume). "Best practice" answers that ignore constraints are penalised. Candidates recommend ideal-state architectures — the exam expects pragmatic recommendations that explicitly acknowledge trade-offs and justify the chosen approach given the scenario constraints.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Governance and Delivery — Architecture Without Delivery Plan Is Incomplete</p>
            <p className="text-sm text-gray-700">A sound CTA proposal covers not just the technical architecture but also: governance model (who owns what), release/deployment strategy, testing approach, and post-go-live support model. Candidates present technology-only solutions — the board expects end-to-end delivery considerations including team structure, change management, and risk mitigation.</p>
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
          <Link href="/application-architect-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Application Architect Exam Tips</span>
          </Link>
          <Link href="/system-architect-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">System Architect Exam Tips</span>
          </Link>
          <Link href="/technical-architect-evaluation-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Technical Architect Evaluation Exam Tips</span>
          </Link>
          <Link href="/architect-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Architect Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start CTA Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/technical-architect" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Technical Architect Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/technical-architect-evaluation" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            CTA Evaluation Exam Questions
          </Link>
          <Link href="/become-cta" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            How to Become a CTA
          </Link>
        </div>
      </section>
    </div>
  )
}
