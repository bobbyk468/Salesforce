import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import ExamTipsCertLink from '@/components/ExamTipsCertLink'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'
import StudyGuideCrossLink from '@/components/StudyGuideCrossLink'



const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'cpq-administrator'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce CPQ Specialist exam tips for ${RELEASE_CURRENT}: product catalogue, pricing rules, quote configuration Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/cpq-administrator-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/cpq-administrator-exam-tips`,
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
  { name: 'CPQ Administrator', url: '/certifications/cpq-administrator' },
  { name: 'CPQ Specialist Exam Tips', url: '/cpq-administrator-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Salesforce CPQ Specialist exam format?',
    answer: 'The Salesforce CPQ Specialist exam has 60 multiple-choice questions, a 105-minute time limit, a 65% passing score, and a $200 fee ($100 retake). It tests configuration of Salesforce CPQ (Configure, Price, Quote) including product catalogue, pricing rules, quote templates, and approvals.',
  },
  {
    question: 'What are the highest-weight CPQ Specialist exam sections?',
    answer: 'Products and Bundles (28%) and Pricing (26%) together account for 54% of the exam. Understanding product options, feature categories, configuration attributes, and how pricing rules (list price, discount schedules, block pricing) apply in sequence is the core of this exam.',
  },
  {
    question: 'What is the hardest part of the CPQ Specialist exam?',
    answer: 'Pricing rule logic is the most complex area — candidates must understand the sequence of price calculations (before/after override, discount schedules vs. pricing rules), when each pricing method applies, and how price waterfall fields interact. Product bundle configuration with nested options and constraints is also challenging.',
  },
  {
    question: 'What prerequisites help with the CPQ Specialist exam?',
    answer: 'Salesforce Administrator (ADM-201) provides the foundation. Real hands-on experience configuring Salesforce CPQ (formerly Steelbrick) is strongly recommended — the exam tests practical configuration knowledge that cannot be learned theoretically. Trailhead CPQ Specialist modules are essential study material.',
  },
  {
    question: 'What concepts do most CPQ Administrator candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the CPQ Administrator exam are: (1) Price Rules vs Discount Schedules — Two Ways to Affect Price; (2) Product Rules: Validation vs Alert vs Selection vs Filter; (3) Quote Line Editor vs Product Catalog — Two Different Entry Points. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('cpq-administrator-exam-tips'),
]

export default function CPQAdministratorExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/cpq-administrator-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce CPQ Specialist Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The CPQ Specialist exam tests your ability to configure Salesforce CPQ for complex product catalogues,
          dynamic pricing, and quote generation. These tips focus on the pricing waterfall, bundle configuration,
          and approval logic that define the hardest sections of this exam.
        </p>
      </header>

      <ContentPageAuthor />

      <ExamTipsCertLink certSlug={slug} />
      <StudyGuideCrossLink studyGuideSlug="cpq-administrator-study-guide" certName="CPQ Administrator" />


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What CPQ Specialist Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Products and bundles</strong> — Product options, feature categories, configuration attributes, option constraints, and product rules (validation, selection, filter, alert). Understanding nested bundles and dynamic options is essential.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Pricing</strong> — Price waterfall (list price → best price → customer price → net price), discount schedules, block pricing, pricing rules, and price actions. Know the sequence and when each pricing mechanism applies.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Quotes and approvals</strong> — Quote templates, line columns, quote document generation, approval rules and conditions, and how approvals chain together. Also covers subscription products, amendments, and renewals.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Products and Bundles</span>
            <span className="font-bold text-salesforce-blue ml-4">28%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Pricing</span>
            <span className="font-bold text-salesforce-blue ml-4">26%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Quote Templates and Approvals</span>
            <span className="font-bold text-salesforce-blue ml-4">18%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Subscriptions and Renewals</span>
            <span className="font-bold text-salesforce-blue ml-4">14%</span>
          </div>
          <p className="text-xs text-gray-600 pt-1">Products + Pricing = 54%. Master the price waterfall and bundle options before anything else.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach CPQ Specialist Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a quoting or pricing requirement and ask which CPQ feature or configuration achieves it.
          The correct answer is always the most native CPQ approach — not custom Apex or standard Salesforce automation.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For product rule questions: understand the four types — Validation (prevents invalid selections), Selection (auto-adds/removes options), Alert (shows warnings), Filter (hides options). Match the rule type to the business requirement described.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For pricing questions: pricing rules fire before or after the standard price waterfall. &apos;Before Calculate&apos; rules modify unit price fields; &apos;After Calculate&apos; rules override the result. Discount schedules apply to line quantity — know the slab/range vs. percent-of-total types.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For subscription questions: subscription products have a Subscription Type and Subscription Term. Renewals create new Opportunities and Quotes automatically when Renewal Forecast is enabled. Know the difference between Evergreen and Termed subscriptions.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          CPQ is a managed package with its own configuration UI distinct from standard Salesforce setup.
          Candidates without hands-on CPQ experience in a sandbox or Developer Edition consistently
          struggle with the nuanced product rule and pricing questions. Build a product catalogue
          with bundles and pricing rules before sitting the exam.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most CPQ Administrator Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Price Rules vs Discount Schedules — Two Ways to Affect Price</p>
            <p className="text-sm text-gray-700">Discount Schedules automatically apply tiered discounts based on quantity or term — they are table-driven and apply before Price Rules. Price Rules are condition-based (if field X = Y, then set price field Z to value) and apply in a defined sequence. Candidates apply Price Rules for volume discount scenarios — the exam expects Discount Schedules for table-driven volume pricing.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Product Rules: Validation vs Alert vs Selection vs Filter</p>
            <p className="text-sm text-gray-700">Validation rules block a quote from being saved if a product combination is invalid. Alert rules warn the user but allow saving. Selection rules automatically add, remove, or hide products based on configuration choices. Filter rules narrow down products shown in the Product Catalog based on criteria. Candidates use Validation when they should use Alert (blocking vs warning distinction) or use Selection when Filter is appropriate.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Quote Line Editor vs Product Catalog — Two Different Entry Points</p>
            <p className="text-sm text-gray-700">The Product Catalog is the source where sales reps search and add products to a quote. The Quote Line Editor (QLE) is where they review, adjust quantities, apply discounts, and configure selected products. Proration, bundling, and block pricing logic all operate within the QLE. Candidates design product search and filtering in the QLE when it belongs in the Product Catalog search configuration.</p>
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
          <Link href="/sales-cloud-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Sales Cloud Exam Tips</span>
          </Link>
          <Link href="/service-cloud-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Service Cloud Consultant Exam Tips</span>
          </Link>
          <Link href="/cpq-admin-vs-cpq-billing-ap" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">CPQ Admin vs CPQ Billing AP</span>
          </Link>
          <Link href="/consultant-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Consultant Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start CPQ Specialist Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/cpq-administrator" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            CPQ Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/sales-cloud" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Sales Cloud Practice Questions
          </Link>
          <Link href="/consultant-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Consultant Certification Path
          </Link>
        </div>
        <p className="text-xs text-gray-600 mt-4">
          After this exam, consider <Link href="/certifications/advanced-administrator" className="text-salesforce-blue underline">Advanced Administrator</Link> or <Link href="/certifications/app-builder" className="text-salesforce-blue underline">Platform App Builder</Link> next.
        </p>
      </section>
    </div>
  )
}