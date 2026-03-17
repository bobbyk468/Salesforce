import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'administrator'
const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `ADM-201 exam tips for ${RELEASE_CURRENT}: study plan, high-weight topics, scenario strategy, time management, and mock-test targets to help you pass first attempt.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/adm-201-exam-tips-2026` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/adm-201-exam-tips-2026`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `ADM-201 exam tips ${RELEASE_CURRENT}, how to pass ADM-201 first attempt, Salesforce Administrator exam tips, ADM-201 study plan, ADM-201 mock test strategy`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: `ADM-201 Exam Tips ${RELEASE_CURRENT}`, url: '/adm-201-exam-tips-2026' },
]

const faqItems = [
  {
    question: 'What is the ADM-201 exam format?',
    answer: 'The ADM-201 exam has 65 multiple-choice questions, a 105-minute time limit, a 65% passing score, and a $200 fee. It is administered online or at a Pearson VUE test centre.',
  },
  {
    question: 'What are the highest-weight ADM-201 exam sections?',
    answer: 'Configuration and Setup (20%) and Object Manager and Lightning App Builder (20%) together account for 40% of the exam. Sales and Marketing Applications (14%) is the next highest.',
  },
  {
    question: 'How long should I study for ADM-201?',
    answer: 'Most candidates with some Salesforce experience need 4–6 weeks of dedicated study. Build hands-on skills in a free Developer Edition org — ADM-201 is scenario-based and rewards practical experience over memorisation.',
  },
  {
    question: 'Is ADM-201 hard to pass on the first attempt?',
    answer: 'ADM-201 has roughly a 70% first-attempt pass rate. It is scenario-heavy, so practising with mock exams at 75%+ consistently is the best predictor of readiness. Focus on use-case style questions, not just feature lists.',
  },
  {
    question: 'What concepts do most ADM-201 candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the ADM-201 exam are: (1) OWD vs Profiles vs Roles — Three Layers, One Wrong Answer; (2) Flow vs Process Builder — Know the Exam\'s Recommended Tool; (3) Reports vs Dashboards — Joined Reports and Filter Limits. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('adm-201-exam-tips-2026'),
]

export default function Adm201ExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/adm-201-exam-tips-2026" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          ADM-201 Exam Tips ({RELEASE_CURRENT}): How to Pass on Your First Attempt
        </h1>
        <p className="text-lg text-gray-600">
          If you are preparing for Salesforce Administrator certification, these practical tips help you focus on high-weight sections,
          answer scenario-based questions, and use mocks effectively.
        </p>
      </header>

      <ContentPageAuthor />

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Exam At a Glance</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">60</p>
            <p className="text-xs text-gray-600 mt-0.5">Questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">105 min</p>
            <p className="text-xs text-gray-600 mt-0.5">Time Limit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">65%</p>
            <p className="text-xs text-gray-600 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$200</p>
            <p className="text-xs text-gray-600 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: Best Way to Pass ADM-201</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Study high-weight sections first: Configuration and Setup + Object Manager/App Builder = 40% of the exam.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Practice in a Developer Edition org daily. ADM-201 is scenario-heavy and rewards hands-on understanding.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Take timed mocks (65 questions / 105 minutes). Most candidates are ready when they consistently score 75%+.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">4-Week ADM-201 Study Plan</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p><strong>Week 1:</strong> Configuration and Setup, Organization settings, users, profiles, and permission basics.</p>
          <p><strong>Week 2:</strong> Object Manager, Lightning App Builder, page layouts, record types, and field behavior.</p>
          <p><strong>Week 3:</strong> Automation (Flow), data management, reports, dashboards, and analytics permissions.</p>
          <p><strong>Week 4:</strong> Full mock exams, weak-area revision, and final checkpoints before exam booking.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Handle Scenario-Based Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Many ADM-201 questions describe a business situation and ask for the best admin action.
          Do not just memorize facts. Map each scenario to the right feature: security, sharing, automation, or reporting.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />Identify the primary requirement first (access, automation, data quality, reporting).</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />Eliminate options that solve a different problem, even if technically valid.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />Prefer current best-practice tools (Flow over legacy automation where applicable).</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="text-sm text-gray-700 mb-2">
          Use this minimum benchmark before scheduling your exam:
        </p>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks, one week apart
        </p>
        <p className="text-sm text-gray-700 mt-3">
          This reduces retake risk and improves first-attempt pass confidence.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most ADM-201 Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. OWD vs Profiles vs Roles — Three Layers, One Wrong Answer</p>
            <p className="text-sm text-gray-700">Organisation-Wide Defaults (OWD) sets the baseline access floor for all records. Profiles control object and field permissions — what objects a user can see at all. Roles expand record-level access above the OWD floor. Most wrong answers come from candidates applying the right rule to the wrong layer: using roles to restrict access (you can&apos;t — roles only open access upward) or forgetting that profiles cannot override OWD to restrict access.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Flow vs Process Builder — Know the Exam&apos;s Recommended Tool</p>
            <p className="text-sm text-gray-700">Salesforce has deprecated Process Builder and Workflow Rules in favour of Record-Triggered Flows. Exam scenarios now expect Flow as the answer when the question describes record-based automation. Candidates who still default to &ldquo;use Process Builder&rdquo; lose those marks. Know the four Flow types: Record-Triggered, Scheduled, Screen, and Auto-Launched, and when each is appropriate.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Reports vs Dashboards — Joined Reports and Filter Limits</p>
            <p className="text-sm text-gray-700">Joined Reports allow cross-object reporting across multiple report types in a single view — a feature candidates frequently forget exists. Dashboard filter limitations trip up candidates: dashboard filters only support field equality (exact match), not contains or starts-with. Also know that dashboard refresh frequency is limited by Salesforce edition.</p>
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
          <Link href="/app-builder-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">App Builder Exam Tips</span>
          </Link>
          <Link href="/advanced-administrator-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Advanced Administrator Exam Tips</span>
          </Link>
          <Link href="/service-cloud-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Service Cloud Consultant Exam Tips</span>
          </Link>
          <Link href="/admin-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Admin Certification Path</span>
          </Link>
        </div>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Next Step</h2>
        <p className="text-sm text-gray-700 mb-4">
          Apply these tips with real exam-style practice:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/certifications/administrator"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors"
          >
            Start ADM-201 Practice Test
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/certifications/role/administrator"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Browse Administrator Certification Path
          </Link>
          <Link
            href="/adm-201-vs-app-builder"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Compare ADM-201 vs App Builder
          </Link>
        </div>
        <p className="text-xs text-gray-600 mt-4">
          When you&apos;re consistently scoring 75%+ on ADM-201 mocks, your next move is to either deepen admin skills with{' '}
          <Link href="/certifications/advanced-administrator" className="text-salesforce-blue underline">
            Advanced Administrator
          </Link>
          {' '}or branch into implementation with{' '}
          <Link href="/certifications/sales-cloud" className="text-salesforce-blue underline">
            Sales Cloud Consultant
          </Link>
          {' '}or{' '}
          <Link href="/certifications/service-cloud" className="text-salesforce-blue underline">
            Service Cloud Consultant
          </Link>
          .
        </p>
        <p className="text-xs text-gray-600 mt-4">
          After this exam, consider <Link href="/certifications/advanced-administrator" className="text-salesforce-blue underline">Advanced Administrator</Link> or <Link href="/certifications/app-builder" className="text-salesforce-blue underline">Platform App Builder</Link> next.
        </p>
      </section>
    </div>
  )
}