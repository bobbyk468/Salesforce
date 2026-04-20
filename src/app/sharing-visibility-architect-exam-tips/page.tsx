import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'sharing-visibility-architect'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Sharing & Visibility Architect exam tips for ${RELEASE_CURRENT}: OWD design, sharing rules, role hierarchy Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/sharing-visibility-architect-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/sharing-visibility-architect-exam-tips`,
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
  { name: 'Sharing & Visibility Architect Exam Tips', url: '/sharing-visibility-architect-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Salesforce Sharing & Visibility Architect exam format?',
    answer: 'The Salesforce Sharing & Visibility Architect exam has 60 multiple-choice questions, a 105-minute time limit, a 63% passing score, and a $200 fee. It is a component exam for the Application Architect role-based credential and tests the full Salesforce sharing and security model.',
  },
  {
    question: 'What are the highest-weight Sharing & Visibility Architect exam sections?',
    answer: 'Designing the Sharing Model (35%) is the single highest-weight section, making it by far the most important study area. Record-Level Access (20%) and Field and Object Security (18%) round out the top three, accounting for 73% of the exam together.',
  },
  {
    question: 'What prerequisites do I need for Sharing & Visibility Architect?',
    answer: 'There are no hard prerequisites, but Salesforce recommends Salesforce Administrator (ADM-201) before Sharing & Visibility Architect since the exam builds directly on the sharing model topics in ADM-201 but at a deeper, architectural level. Real experience designing OWDs and sharing rules for complex multi-team organisations is essential.',
  },
  {
    question: 'What is the hardest part of the Sharing & Visibility Architect exam?',
    answer: 'The performance implications of sharing configurations are the hardest area — candidates must understand when complex sharing rules cause query performance degradation at large data volumes, and when to recommend implicit sharing vs. explicit sharing vs. manual sharing. These architectural trade-offs require real project experience.',
  },
  {
    question: 'What concepts do most Sharing & Visibility Architect candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the Sharing & Visibility Architect exam are: (1) OWD + Role Hierarchy + Sharing Rules — The Correct Evaluation Order; (2) With Sharing vs Without Sharing vs Inherited Sharing in Apex; (3) Territory Management vs Role Hierarchy — Two Separate Sharing Mechanisms. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('sharing-visibility-architect-exam-tips'),
]

export default function SharingVisibilityArchitectExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/sharing-visibility-architect-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Sharing &amp; Visibility Architect Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Sharing &amp; Visibility Architect exam tests your ability to design and optimise Salesforce record-level
          security architectures. These tips focus on OWD strategy, sharing model design, and the performance
          implications that the exam tests at an architectural depth.
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Sharing & Visibility Architect Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Sharing model design</strong> — OWD strategy, role hierarchy depth trade-offs, implicit vs. explicit sharing, and when each sharing mechanism is the right architectural choice.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Performance implications</strong> — How sharing rule complexity affects query performance at large data volumes, and when to favour restrictive OWDs over permissive ones to maintain performance.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Special sharing scenarios</strong> — Community/portal user access, territory management sharing, Apex managed sharing, and sharing for external users.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Designing the Sharing Model</span>
            <span className="font-bold text-salesforce-blue ml-4">35%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Record-Level Access</span>
            <span className="font-bold text-salesforce-blue ml-4">20%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Field and Object Security</span>
            <span className="font-bold text-salesforce-blue ml-4">18%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Large Data Volumes and Performance</span>
            <span className="font-bold text-salesforce-blue ml-4">12%</span>
          </div>
          <p className="text-xs text-gray-600 pt-1">Designing the Sharing Model is 35% alone — this is your single most important study topic.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Sharing Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Sharing &amp; Visibility questions describe an organisation&apos;s access requirements and ask which configuration
          satisfies them. Always start from the most restrictive baseline and open access incrementally.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />The OWD baseline principle: set OWDs to the most restrictive setting required by any subset of users. Never set OWD to Public Read/Write if any user group needs restricted access.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />Sharing rule order: role hierarchy grants access UP the hierarchy (not sideways). Criteria-based sharing rules open access across the hierarchy. Manual sharing is for ad-hoc exceptions — it is not an architectural solution.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For performance questions: sharing recalculation at large data volumes is expensive. Overly complex sharing rules (many criteria-based rules + large record counts) cause performance degradation. Simpler role-hierarchy-based sharing is always more performant.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For Apex managed sharing: only use it when standard sharing mechanisms cannot meet the requirement. It requires a sharing reason and bypasses normal recalculation — know the implications.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          76%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Sharing &amp; Visibility Architect has one of the highest retry rates of any Salesforce exam.
          The performance implications and Apex managed sharing scenarios are not learnable from
          documentation alone — design real sharing models in a sandbox before sitting the exam.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most Sharing &amp; Visibility Architect Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. OWD + Role Hierarchy + Sharing Rules — The Correct Evaluation Order</p>
            <p className="text-sm text-gray-700">Salesforce evaluates record access in this order: OWD (baseline) → Role Hierarchy (opens access upward) → Sharing Rules (open access horizontally) → Manual Sharing (record-by-record grants). Candidates apply sharing rules expecting them to restrict access below OWD — sharing rules can only OPEN access, never restrict below OWD. The only way to restrict below OWD is to change OWD itself.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. With Sharing vs Without Sharing vs Inherited Sharing in Apex</p>
            <p className="text-sm text-gray-700">Apex classes declared "with sharing" enforce the running user&apos;s sharing rules. "Without sharing" bypasses sharing (runs as admin). "Inherited sharing" passes the sharing context from the calling class. Candidates use "without sharing" for all utility classes to avoid access issues — the exam expects "with sharing" for user-facing operations and "without sharing" only for system-level operations with a documented security justification.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Territory Management vs Role Hierarchy — Two Separate Sharing Mechanisms</p>
            <p className="text-sm text-gray-700">The Role Hierarchy extends record access to managers above the record owner. Territory Management grants access to accounts and their related records based on geographic or segment-based territory assignment — independent of the Role Hierarchy. A user can gain access to an Account through Territory assignment even if they are not above the owner in the Role Hierarchy. Candidates assume territory access is role-based.</p>
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
          <Link href="/data-architect-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Data Architect Exam Tips</span>
          </Link>
          <Link href="/identity-access-management-architect-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Identity and Access Management Architect Exam Tips</span>
          </Link>
          <Link href="/adm-201-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">ADM-201 Exam Tips</span>
          </Link>
          <Link href="/architect-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Architect Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Sharing & Visibility Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/sharing-visibility-architect" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Sharing & Visibility Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/application-architect-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Application Architect Tips
          </Link>
          <Link href="/architect-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Architect Certification Path
          </Link>
        </div>
        <p className="text-xs text-gray-600 mt-4">
          After this exam, consider <Link href="/certifications/application-architect" className="text-salesforce-blue underline">Application Architect</Link> or <Link href="/certifications/system-architect" className="text-salesforce-blue underline">System Architect</Link> next.
        </p>
      </section>
    </div>
  )
}