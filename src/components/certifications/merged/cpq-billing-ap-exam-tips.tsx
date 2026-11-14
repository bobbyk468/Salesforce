/* Ported from /cpq-billing-ap-exam-tips, merged into /certifications/cpq-billing-ap in November 2026.
 * Content is the original page copy. Page chrome (metadata, JSON-LD, H1
 * header) was dropped because the hub page already provides it. */
import Link from '@/components/AppLink'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import ExamTipsCertLink from '@/components/ExamTipsCertLink'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'
import ApOccupationSchema from '@/components/ApOccupationSchema'
import CredentialSchema from '@/components/CredentialSchema'
import LastUpdated from '@/components/LastUpdated'



const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'cpq-billing-ap'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  'Prepare for the CPQ and Billing AP exam by reviewing product configuration, pricing, contracts, and invoicing topics.'

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'CPQ & Billing AP Exam Tips', url: '/cpq-billing-ap-exam-tips' },
]

export const faqItems = [
  {
    question: 'What is the Salesforce CPQ & Billing Accredited Professional exam format?',
    answer: 'The retired CPQ & Billing AP guide (Summer ’24) lists 35 scored questions plus up to five unscored questions, 60 minutes, a 74% passing score, and a $150 fee. Its outline covers CPQ and Billing technical design, implementation management, and new release capabilities.',
  },
  {
    question: 'What are the highest-weight CPQ & Billing AP exam sections?',
    answer: 'The official Summer ’24 guide weights Revenue Cloud Technical Design at 68%, Revenue Cloud Implementation Management at 29%, and New Release Capabilities at 3%. The exam is retired; use these only as historical outline weights.',
  },
  {
    question: 'What is the CPQ pricing waterfall and why does the exam test it?',
    answer: 'The CPQ pricing waterfall is the sequence of price calculations that determines the final net price on a quote line: List Price → Customer Price (after customer-specific pricing) → Partner Price (if applicable) → Regular Price (after discount schedules) → Special Price (manual override) → Net Price (after additional discounts). The exam tests which price field is affected by which type of discount and in what order.',
  },
  {
    question: 'How does CPQ Billing work and what does the exam test?',
    answer: 'Salesforce Billing generates invoices from contracted orders. After a CPQ quote becomes a contract and orders are activated, Billing creates invoice lines based on the billing frequency (monthly, annual, one-time), generates invoices on the billing date, tracks payments against invoices, and handles amendments to subscription billing. The exam tests the invoice generation process and how billing interacts with CPQ contracts.',
  },
  {
    question: 'What concepts do most CPQ Billing candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the CPQ Billing exam are: (1) Billing Schedule vs Invoice Schedule: When Each Is Created; (2) Proration: It Applies to Activations and Cancellations, Not Renewals; (3) Payment Gateway vs Payment Method: Architecture vs Data. Candidates are most confidently wrong on these. Learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('cpq-billing-ap-exam-tips'),
]

export default function CpqBillingApExamTipsContent() {
  return (
    <div className="mt-12">





      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">TL;DR: What CPQ &amp; Billing AP Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Product and pricing configuration</strong>: Product features, options, and bundles in CPQ; option constraints (Required, Optional, Exclusive); product rules (validation, selection, filter, alert); discount schedules (slab vs. range, volume discounts); the CPQ pricing waterfall (List → Customer → Partner → Regular → Special → Net price); and price rules for custom pricing logic.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Quoting and contracting</strong>: Creating and sending CPQ quotes, quote templates for branded PDF output, DocuSign integration for e-signatures, contracting (converting approved quotes to contracts), subscription products and contracted prices, and amendment and renewal flows for changing or extending existing contracts.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Billing and invoicing</strong>: Salesforce Billing invoice generation from activated orders, billing frequency (one-time, monthly, annual), invoice scheduling, payment processing and payment methods, credit notes and refunds, and how billing amendments sync with subscription contract changes from CPQ.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Which Sections Carry the Most Weight</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Revenue Cloud Technical Design</span>
            <span className="font-bold text-salesforce-blue ml-4">68%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Revenue Cloud Implementation Management</span>
            <span className="font-bold text-salesforce-blue ml-4">29%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">New Release Capabilities</span>
            <span className="font-bold text-salesforce-blue ml-4">3%</span>
          </div>
          <p className="text-xs text-gray-600 pt-1">These are the historical Summer ’24 guide weights. The exam retired on February 1, 2027; do not use them to plan a current booking.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach CPQ &amp; Billing AP Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a quoting or billing scenario and ask which CPQ feature, object,
          or configuration achieves it. Know the pricing waterfall cold, most pricing questions
          test which field is set by which action.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For pricing questions: List Price is the base price from the price book. Discount Schedules reduce List Price to Regular Price (volume-based). Special Price is a manual override by the sales rep. Additional Discount is a further % off the Special Price. Net Price is the final price the customer pays. When a scenario says ’apply a 10% volume discount automatically at 10 units’, configure a Discount Schedule, not a product rule or manual discount.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For product bundle questions: bundles have a parent product (the bundle) and optional/required features with options. Option constraints control which options can or cannot be selected together (Required: one option must be chosen; Exclusive: selecting one deselects others). When a scenario says ’the customer must choose exactly one of these three support tiers’, configure a Required option constraint with Min/Max of 1.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For contract/amendment questions: when a customer wants to add seats mid-term, create an Amendment Quote from the existing contract. The amendment calculates prorated charges for the remaining contract period. When a customer’s subscription expires, create a Renewal Quote. Amendments change an active contract; renewals extend it. When a question asks ’how to add 5 users to a customer’s existing annual contract’, the answer is an Amendment.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">AP Readiness Check</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          Review three timed mock sets using the historical 35-question format (74% passing score)
        </p>
        <p className="text-sm text-gray-700 mt-3">
          CPQ &amp; Billing AP is for implementation partners and in-house admins running Salesforce CPQ
          and Billing. Hands-on CPQ configuration experience (product bundles, discount schedules,
          quote templates) is essential. Set up a CPQ scratch org or trial org and configure a complete
          quote-to-cash workflow before booking.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most CPQ Billing Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics; they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">1. Billing Schedule vs Invoice Schedule: When Each Is Created</h3>
            <p className="text-sm text-gray-700">A Billing Schedule is created when a Salesforce CPQ Subscription order is activated, it defines the future billing dates and amounts for recurring revenue. Invoice Schedules are the individual line-item billing events within that schedule. Candidates conflate these: the Billing Schedule is the container; Invoice Schedules are the individual charge events. Knowing this hierarchy is essential for troubleshooting why a customer was billed incorrectly.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">2. Proration: It Applies to Activations and Cancellations, Not Renewals</h3>
            <p className="text-sm text-gray-700">Proration calculates the partial-period charge when a subscription starts or ends mid-period. It does NOT apply to renewals (which start on a clean period boundary). Candidates answer "the customer was charged a prorated amount on renewal" scenarios by checking proration settings, the exam expects them to check the renewal date alignment instead.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">3. Payment Gateway vs Payment Method: Architecture vs Data</h3>
            <p className="text-sm text-gray-700">A Payment Gateway is the Salesforce Billing integration with an external payment processor (Stripe, Adyen). A Payment Method is a specific payment instrument on file for a customer (credit card, ACH). Candidates conflate these: configuring a gateway is a one-time org setup; adding a Payment Method is a per-customer action. Exam scenarios about why a customer’s payment failed expect Payment Method troubleshooting, not gateway reconfiguration.</p>
          </div>
        </div>
      </section>

<section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Questions Candidates Ask</h2>
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">Related Study Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/certifications/cpq-administrator" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">CPQ Administrator Exam Tips</span>
          </Link>
          <Link href="/certifications/sales-cloud" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Sales Cloud Exam Tips</span>
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start CPQ &amp; Billing AP Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="#practice-questions" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            CPQ &amp; Billing AP Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/cpq-administrator" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            CPQ Administrator Tips
          </Link>
          <Link href="/certifications/revenue-cloud-consultant" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Revenue Cloud Consultant Tips
          </Link>
        </div>
        <p className="text-xs text-gray-600 mt-4">
          After this exam, consider <Link href="/certifications/sales-cloud" className="text-salesforce-blue underline">Sales Cloud Consultant</Link> or <Link href="/certifications/service-cloud" className="text-salesforce-blue underline">Service Cloud Consultant</Link> next.
        </p>
      </section>
    </div>
  )
}
