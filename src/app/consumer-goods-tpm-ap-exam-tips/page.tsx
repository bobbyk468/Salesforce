import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'consumer-goods-tpm-ap'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Consumer Goods Trade Promotion Management AP exam tips for ${RELEASE_CURRENT}: trade promotions, fund management, settlements.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/consumer-goods-tpm-ap-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/consumer-goods-tpm-ap-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Consumer Goods TPM AP exam tips ${RELEASE_CURRENT}, how to pass CG TPM AP, Salesforce trade promotion management certification, CGC TPM exam`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Consumer Goods TPM AP Exam Tips', url: '/consumer-goods-tpm-ap-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Consumer Goods TPM Accredited Professional exam format?',
    answer: 'The Consumer Goods Trade Promotion Management (TPM) AP exam has 40 multiple-choice questions, a 60-minute time limit, a Pass/Fail result, and a $150 fee. It validates practitioner-level knowledge of Salesforce CGC Trade Promotion Management: trade promotion planning, promotional fund management, trade promotion settlements, and ROI measurement for CPG companies.',
  },
  {
    question: 'What is Trade Promotion Management in Consumer Goods Cloud?',
    answer: 'Trade Promotion Management (TPM) is the process of planning, executing, and evaluating promotional spend with retail customers (like Walmart or Kroger). CPG companies spend 15-25% of revenue on trade promotions (price reductions, display fees, slotting fees, cooperative advertising). Salesforce CGC TPM helps manage this spend: planning promotions, allocating funds, tracking actual performance, and settling deductions.',
  },
  {
    question: 'What are the highest-weight CGC TPM AP exam sections?',
    answer: 'Trade Promotion Planning (30%) and Fund and Deduction Management (25%) together account for 55% of the exam. Configuring promotional scenarios, allocating trade funds to accounts and product groups, managing deduction claims from retailers, and reconciling actual promotion spend against planned budgets are the most heavily tested areas.',
  },
  {
    question: 'What is a trade promotion deduction and how is it managed in Salesforce?',
    answer: 'A deduction is when a retailer withholds payment from an invoice to cover agreed promotion costs. For example, if a retailer ran a price reduction promotion and expects the CPG company to fund the margin difference, they deduct it from their invoice payment. Salesforce TPM tracks these deductions, matches them to approved promotions, validates the amounts, and processes the settlement (approve, dispute, or write off).',
  },
  {
    question: 'What concepts do most Consumer Goods TPM candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the Consumer Goods TPM exam are: (1) Trade Promotion vs Fund vs Tactic — Three Levels, One Plan; (2) Settlement vs Deduction vs Claim — Post-Promotion Financial Flow; (3) Account Planning Integration — Trade Plans Are Linked to Account Plans. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('consumer-goods-tpm-ap-exam-tips'),
]

export default function ConsumerGoodsTpmApExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/consumer-goods-tpm-ap-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Consumer Goods TPM AP Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Consumer Goods TPM AP validates your expertise in Salesforce Trade Promotion Management
          for CPG companies. These tips focus on trade promotion planning, fund management, deduction
          settlement, and ROI measurement that define this accreditation.
        </p>
      </header>

      <ContentPageAuthor />

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Exam At a Glance</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">40</p>
            <p className="text-xs text-gray-600 mt-0.5">Questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">60 min</p>
            <p className="text-xs text-gray-600 mt-0.5">Time Limit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">Pass / Fail</p>
            <p className="text-xs text-gray-600 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$150</p>
            <p className="text-xs text-gray-600 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Consumer Goods TPM AP Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Trade promotion planning</strong> — Creating trade promotions with promotional tactics (temporary price reductions, display fees, feature ads, off-invoice discounts), planning volumes and expected ROI, applying promotion templates for common scenarios, managing the promotion approval workflow, and linking promotions to trade fund budgets.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Fund and budget management</strong> — Configuring trade fund pools (annual budgets allocated by account or product group), fund disbursement rules (how much of the fund can be committed to promotions), tracking committed vs. remaining fund balances, and preventing over-commitment of trade spend beyond the available budget.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Deduction and settlement management</strong> — Managing retailer deduction claims linked to approved promotions, validating deduction amounts against promotional agreements, processing settlements (approve, partial approve, dispute), writing off invalid deductions, and reconciling actual trade spend against planned budgets for period-end reporting.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Trade Promotion Planning</span>
            <span className="font-bold text-salesforce-blue ml-4">30%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Fund and Budget Management</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Deduction and Settlement Management</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">ROI Measurement and Analytics</span>
            <span className="font-bold text-salesforce-blue ml-4">15%</span>
          </div>
          <p className="text-xs text-gray-600 pt-1">AP format: 40 questions, 60 minutes, Pass/Fail, $150. Trade promotion domain knowledge (how CPG companies manage retail promotional spend) is as valuable as Salesforce product knowledge for this exam.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach CGC TPM AP Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a trade promotion management scenario and ask which Salesforce TPM
          feature, object, or workflow addresses it. Trade promotion industry knowledge is as
          important as product knowledge for this exam.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For promotion planning questions: each promotion tactic has a type (temporary price reduction, display, feature, BOGO) and financial parameters (cost per case, scan-down rate, or fixed fee). Linking the tactic to an approved trade fund commits that amount from the fund balance. When a scenario says &apos;plan a $50,000 display promotion at Walmart for Q4&apos;, create a Promotion with a Display Tactic, link it to the Walmart account fund, and commit the $50,000 — verify the fund has sufficient balance first.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For deduction questions: when a retailer deducts from an invoice, a Deduction record is created in Salesforce. The deduction is matched to an approved Promotion to validate it. Valid deductions are settled (approved) and close out the promotion obligation. Invalid deductions are disputed (no matching approved promotion) or written off (small amounts not worth pursuing). When a scenario says &apos;the retailer deducted $5,000 for a promotion we never approved&apos;, the answer is to dispute the deduction — not write it off immediately.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For ROI questions: Promotion ROI = (Incremental Revenue from Promotion - Total Promotion Cost) / Total Promotion Cost. Salesforce TPM calculates this using actual scan-down data from point-of-sale systems. When a scenario says &apos;calculate whether the Q4 holiday promotion was profitable&apos;, the answer involves comparing actual promoted sales uplift against the total trade spend — using the Promotion analytics dashboard in CGC TPM.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">AP Exam Benchmark</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          Pass 3 timed 40-question mocks before booking (Pass/Fail scoring)
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Consumer Goods TPM AP is for implementation teams and in-house users at CPG companies.
          Domain expertise in trade promotion management (how CPG companies manage promotional spend
          with retailers) is essential — the exam tests business process understanding as much as
          Salesforce configuration. The CGC TPM Trailmix is the primary study resource.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most Consumer Goods TPM Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Trade Promotion vs Fund vs Tactic — Three Levels, One Plan</p>
            <p className="text-sm text-gray-700">A Trade Promotion is the top-level campaign container. Funds (promotional budgets) are allocated to the promotion. Tactics are the specific promotional activities within it (display, feature ad, price discount). Candidates answer fund questions at the promotion level and vice versa. The hierarchy is Promotion → Fund → Tactic — know which object stores which attribute.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Settlement vs Deduction vs Claim — Post-Promotion Financial Flow</p>
            <p className="text-sm text-gray-700">After a promotion runs, retailers submit Claims or Deductions (short payments). Settlements are the reconciled financial outcomes. Candidates use "claim" and "deduction" interchangeably — the exam distinguishes them: a Deduction is a short payment on an invoice; a Claim is a request for reimbursement. Settlement closes the loop by matching claims against accruals.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Account Planning Integration — Trade Plans Are Linked to Account Plans</p>
            <p className="text-sm text-gray-700">Consumer Goods TPM integrates Trade Promotion Management with Account Planning. Trade promotions must be linked to an Account Plan (the strategic plan for a retail account). Candidates design promotions without Account Plan linkage — the exam expects you to show how promotional spending rolls up to the account-level plan for P&amp;L visibility.</p>
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
          <Link href="/consumer-goods-cloud-ap-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Consumer Goods Cloud AP Exam Tips</span>
          </Link>
          <Link href="/revenue-cloud-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Revenue Cloud Consultant Exam Tips</span>
          </Link>
          <Link href="/adm-201-exam-tips-2026" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">ADM-201 Exam Tips</span>
          </Link>
          <Link href="/consultant-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Consultant Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Consumer Goods TPM AP Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/consumer-goods-tpm-ap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            CGC TPM AP Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/consumer-goods-cloud-ap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Consumer Goods Cloud AP
          </Link>
          <Link href="/certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            All Certification Paths
          </Link>
        </div>
        <p className="text-xs text-gray-600 mt-4">
          After this exam, consider <Link href="/certifications/sales-cloud" className="text-salesforce-blue underline">Sales Cloud Consultant</Link> or <Link href="/certifications/service-cloud" className="text-salesforce-blue underline">Service Cloud Consultant</Link> next.
        </p>
      </section>
    </div>
  )
}