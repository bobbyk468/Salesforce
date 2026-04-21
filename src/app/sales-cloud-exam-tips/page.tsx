import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import ExamTipsCertLink from '@/components/ExamTipsCertLink'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'sales-cloud'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Sales Cloud Consultant exam tips for ${RELEASE_CURRENT}: opportunity management, forecasting, CPQ basics. Scenario tips to pass first attempt.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/sales-cloud-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/sales-cloud-exam-tips`,
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
  { name: 'Sales Cloud Consultant Exam Tips', url: '/sales-cloud-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Sales Cloud Consultant exam format?',
    answer: 'The Salesforce Sales Cloud Consultant exam has 60 multiple-choice questions, a 105-minute time limit, a 65% passing score, and a $200 fee. It is scenario-based and tests applied knowledge of sales processes, not just feature configuration.',
  },
  {
    question: 'What are the highest-weight Sales Cloud Consultant exam sections?',
    answer: 'Sales Practices (25%) and Sales Cloud Solution Design (22%) together account for 47% of the exam. Opportunity Management, Forecasting, and Territory Management are the most heavily tested functional areas within these sections.',
  },
  {
    question: 'What prerequisites do I need for the Sales Cloud Consultant exam?',
    answer: 'Salesforce recommends the Salesforce Administrator (ADM-201) certification before attempting Sales Cloud Consultant. While it is not a hard prerequisite, ADM-201 covers the platform fundamentals that Sales Cloud Consultant builds on. At least 2 years of Sales Cloud implementation experience is strongly recommended.',
  },
  {
    question: 'What is the best way to study for Sales Cloud Consultant?',
    answer: 'Focus on understanding sales process design, not just feature configuration. Study opportunity stages, forecasting categories, territory management, and CPQ integration at a conceptual level. Practice scenario-based questions — the exam tests what you would recommend in a given business context, not just what a feature does.',
  },
  {
    question: 'What concepts do most Sales Cloud Consultant candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the Sales Cloud Consultant exam are: (1) Forecasting Categories — Not the Same as Opportunity Stage; (2) Collaborative Forecasting vs Territory Forecasting — Role Hierarchy vs Territory Model; (3) Lead Conversion Field Mapping — Not All Fields Map Automatically. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('sales-cloud-exam-tips'),
]

export default function SalesCloudExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/sales-cloud-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Sales Cloud Consultant Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Sales Cloud Consultant exam tests your ability to design and implement Salesforce Sales Cloud solutions.
          These tips help you focus on the scenario-based questions that differentiate passing candidates from those who
          only know the features.
        </p>
      </header>

      <ContentPageAuthor />

      <ExamTipsCertLink certSlug={slug} />


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Sales Cloud Consultant Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Sales process design</strong> — Opportunity stages, forecasting categories, pipeline management, and territory hierarchy design for specific business scenarios.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Solution design trade-offs</strong> — When to use standard Salesforce features vs custom development, and how to map business requirements to the right Sales Cloud capabilities.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Integration and data migration</strong> — Sales data import strategies, duplicate management, and how Sales Cloud integrates with ERP, marketing, and CPQ systems.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Sales Practices</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Sales Cloud Solution Design</span>
            <span className="font-bold text-salesforce-blue ml-4">22%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Marketing and Leads</span>
            <span className="font-bold text-salesforce-blue ml-4">13%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Account and Contact Management</span>
            <span className="font-bold text-salesforce-blue ml-4">13%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Forecasting, Reports &amp; Dashboards</span>
            <span className="font-bold text-salesforce-blue ml-4">13%</span>
          </div>
          <p className="text-xs text-gray-600 pt-1">Sales Practices + Solution Design = 47% of the exam. Master these two first.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Handle Scenario-Based Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Sales Cloud Consultant questions describe a client&apos;s sales process and ask you to recommend a solution.
          The correct answer is always the simplest configuration that meets all stated requirements.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />Identify the primary sales process requirement before evaluating options (forecasting, pipeline visibility, territory coverage, etc.).</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />Prefer standard Salesforce features over custom code — the exam rewards declarative solutions.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For territory management questions: understand Enterprise Territory Management vs classic territories and when each applies.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          The 65% passing score is lower than it appears — the scenario-based format means one wrong assumption
          can cascade. Aim for 75%+ consistently in practice before booking.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most Sales Cloud Consultant Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Forecasting Categories — Not the Same as Opportunity Stage</p>
            <p className="text-sm text-gray-700">Salesforce Forecast Categories are rollup buckets: Pipeline, Best Case, Commit, Closed Won, Omitted. They map from Opportunity Stage but can be overridden. Candidates answer "what determines the forecast category?" with Stage — but the exam tests the distinction: Stage drives the default category, but sales reps can override the category independently of Stage. Forecast visibility is driven by the Forecast Category, not the Stage directly.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Collaborative Forecasting vs Territory Forecasting — Role Hierarchy vs Territory Model</p>
            <p className="text-sm text-gray-700">Collaborative Forecasting rolls up quota and pipeline through the standard Role Hierarchy. Territory Forecasting rolls up through the Territory Model (which may differ from the role structure). They are separate systems — enabling one does not enable the other. Candidates assume one forecast setup covers both — the exam expects explicit configuration of each independently.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Lead Conversion Field Mapping — Not All Fields Map Automatically</p>
            <p className="text-sm text-gray-700">When converting a Lead, Salesforce maps standard Lead fields to standard Account, Contact, and Opportunity fields automatically. Custom Lead fields do NOT map to converted object fields unless explicitly configured in Lead Field Mapping. Candidates expect all custom Lead data to appear on the converted Contact — the exam expects Lead Field Mapping configuration for every custom field that should survive conversion.</p>
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
          <Link href="/service-cloud-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Service Cloud Consultant Exam Tips</span>
          </Link>
          <Link href="/adm-201-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">ADM-201 Exam Tips</span>
          </Link>
          <Link href="/cpq-administrator-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">CPQ Administrator Exam Tips</span>
          </Link>
          <Link href="/consultant-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Consultant Certification Path</span>
          </Link>
        </div>
      </section>
      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Sales Cloud Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/sales-cloud" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Sales Cloud Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/role/consultant" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            All Consultant Certifications
          </Link>
          <Link href="/certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Plan Your Cert Path
          </Link>
        </div>
        <p className="text-xs text-gray-600 mt-4">
          Many candidates follow Sales Cloud with{' '}
          <Link href="/certifications/service-cloud" className="text-salesforce-blue underline">
            Service Cloud Consultant
          </Link>
          {' '}to cover both sides of the revenue funnel, or with{' '}
          <Link href="/certifications/experience-cloud" className="text-salesforce-blue underline">
            Experience Cloud Consultant
          </Link>
          {' '}if they design partner and customer portals.
        </p>
        <p className="text-xs text-gray-600 mt-4">
          After this exam, consider <Link href="/certifications/sales-cloud" className="text-salesforce-blue underline">Sales Cloud Consultant</Link> or <Link href="/certifications/service-cloud" className="text-salesforce-blue underline">Service Cloud Consultant</Link> next.
        </p>
      </section>
    </div>
  )
}