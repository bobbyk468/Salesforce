import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import ExamTipsCertLink from '@/components/ExamTipsCertLink'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'
import ApOccupationSchema from '@/components/ApOccupationSchema'
import CredentialSchema from '@/components/CredentialSchema'



const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'b2b-commerce-admin-ap'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce B2B Commerce Administrator AP exam tips for ${RELEASE_CURRENT}: storefront setup, product catalogue, pricing, buyer management.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/b2b-commerce-admin-ap-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/b2b-commerce-admin-ap-exam-tips`,
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
  { name: 'B2B Commerce Admin AP Exam Tips', url: '/b2b-commerce-admin-ap-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the B2B Commerce Administrator AP exam format?',
    answer: 'The B2B Commerce Administrator AP exam has 40 multiple-choice questions, a 60-minute time limit, a Pass/Fail result, and a $150 fee. It validates practitioner-level knowledge of administering Salesforce B2B Commerce: storefront configuration, product catalogue management, pricing and entitlement management, buyer group setup, and order management for B2B online commerce storefronts.',
  },
  {
    question: 'What are the highest-weight B2B Commerce Admin AP exam sections?',
    answer: 'Storefront and Catalogue Management (30%) and Pricing and Entitlements (25%) together account for 55% of the exam. Configuring product categories, catalogue visibility rules, buyer group entitlements (which products a buyer can see and purchase), and negotiated pricing for B2B accounts are the most heavily tested areas.',
  },
  {
    question: 'What is a Buyer Group in Salesforce B2B Commerce?',
    answer: 'A Buyer Group is a B2B Commerce concept that controls which products, price books, and storefront features an account can access. An account is assigned to one or more buyer groups. The buyer group entitlement determines which product catalogue is visible and which price book applies — enabling personalised storefront experiences for different customer segments (SMB vs. Enterprise vs. Government accounts).',
  },
  {
    question: 'How does pricing work in Salesforce B2B Commerce?',
    answer: 'B2B Commerce uses Salesforce Price Books for pricing. A buyer&apos;s account is assigned a price book through their Buyer Group entitlement. Volume pricing (tiered pricing by quantity) is configured using price book entries with quantity ranges. Negotiated pricing for specific accounts uses account-specific price books. The exam tests how to configure the pricing hierarchy: standard list price → volume price → account-negotiated price.',
  },
  {
    question: 'What concepts do most B2B Commerce Administrator candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the B2B Commerce Administrator exam are: (1) Price Lists vs Price Books — B2B Commerce Has Its Own Pricing Layer; (2) Buyer Groups vs Accounts — Access Is Granted Through the Group; (3) Quick Order vs Order Templates — Different Use Cases, Same Confusion. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('b2b-commerce-admin-ap-exam-tips'),
]

export default function B2bCommerceAdminApExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/b2b-commerce-admin-ap-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />
      <CredentialSchema
        certSlug="b2b-commerce-admin-ap"
        certName="B2B Commerce Admin AP"
        description={pageDescription}
        pageUrl="/b2b-commerce-admin-ap-exam-tips"
      />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce B2B Commerce Admin AP Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The B2B Commerce Admin AP validates your ability to administer Salesforce B2B Commerce
          storefronts. These tips focus on catalogue configuration, buyer group entitlements,
          and pricing management that define this accreditation.
        </p>
      </header>

      <ContentPageAuthor />

      <ExamTipsCertLink certSlug={slug} />


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">TL;DR: What B2B Commerce Admin AP Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Storefront and catalogue management</strong> — Configuring the B2B Commerce storefront (Experience Cloud site), product catalogue hierarchy (categories, subcategories), product listing and detail page configuration, search and filtering setup, and catalogue visibility rules controlling which products appear for which buyer groups.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Pricing and entitlements</strong> — Buyer Group configuration for account-level entitlements (which catalogue, which price book, which shipping methods), price book assignment for tiered and negotiated pricing, volume discount tiers, and how pricing priority works when multiple price books apply to a buyer account.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Buyer management and order configuration</strong> — Setting up buyer users and buyer accounts, configuring approval workflows for large orders (purchase order amounts exceeding buyer limits), managing the order lifecycle (draft → placed → confirmed → fulfilled), and configuring payment methods (purchase order, credit card, net terms) for B2B checkout.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Which Sections Carry the Most Weight</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Storefront and Catalogue Management</span>
            <span className="font-bold text-salesforce-blue ml-4">30%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Pricing and Entitlements</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Buyer Management and Orders</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Search, Tax, and Shipping</span>
            <span className="font-bold text-salesforce-blue ml-4">15%</span>
          </div>
          <p className="text-xs text-gray-600 pt-1">AP format: 40 questions, 60 minutes, Pass/Fail, $150. Buyer Groups are the defining B2B Commerce concept — understand how they control catalogue and pricing access.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach B2B Commerce Admin AP Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a B2B e-commerce administration scenario and ask which B2B Commerce
          configuration achieves it. B2B Commerce (built on Experience Cloud) has different
          administration patterns from standard Salesforce — focus on the B2B-specific features.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For buyer group questions: a Buyer Group is the entitlement container that controls what an account can see and buy. An account must be a member of a Buyer Group to access the storefront. The Buyer Group links to: an Entitlement Policy (which catalogue they can see), a Price Book (their pricing tier), and shipping/payment methods. When a scenario says &apos;enterprise customers should see different products and prices than SMB customers&apos;, create two Buyer Groups — one for enterprise, one for SMB.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For pricing questions: the pricing priority in B2B Commerce is: (1) account-specific negotiated price (highest priority), (2) volume/tiered price from the assigned price book, (3) standard list price. When a scenario describes &apos;this customer has a special negotiated price for Product A of $100 regardless of quantity&apos;, set an account-specific price book entry — not a discount rule or coupon code.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For order approval questions: B2B Commerce can require order approval for orders above a threshold (e.g., orders over $10,000 require manager approval). The approval workflow is configured in Salesforce Flows triggered when an order is submitted. When a scenario says &apos;all purchase orders above $5,000 need their purchasing manager to approve before fulfilment&apos;, configure an order approval threshold with a Flow-based approval process.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">AP Readiness Check</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          Pass 3 timed 40-question mocks before booking (Pass/Fail scoring)
        </p>
        <p className="text-sm text-gray-700 mt-3">
          B2B Commerce Admin AP is for administrators and implementation consultants managing
          B2B Commerce storefronts. Hands-on experience configuring Buyer Groups, catalogues,
          and pricing in a B2B Commerce sandbox is essential. The Salesforce B2B Commerce
          Administrator Trailmix on Trailhead is the primary study resource.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most B2B Commerce Administrator Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Price Lists vs Price Books — B2B Commerce Has Its Own Pricing Layer</p>
            <p className="text-sm text-gray-700">B2B Commerce uses Price Lists (not standard Salesforce Price Books) to manage account-specific or segment-specific pricing. Price Books apply to standard Salesforce Opportunities. Candidates confuse these when answering scenarios about why a buyer account sees the wrong price. In B2B Commerce, the Price List is resolved through the Buyer Group &rarr; Price List assignment — not through the standard Price Book hierarchy.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Buyer Groups vs Accounts — Access Is Granted Through the Group</p>
            <p className="text-sm text-gray-700">Buyer Groups are the mechanism that assigns buyer accounts to a specific storefront, price list, and entitlement policy. You do not grant storefront access directly to an Account. Candidates answer "assign the account to the storefront" — the correct answer is "add the account to a Buyer Group that has the storefront assignment." Missing this layer is the most common B2B Commerce admin exam mistake.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Quick Order vs Order Templates — Different Use Cases, Same Confusion</p>
            <p className="text-sm text-gray-700">Quick Order lets a buyer enter SKUs or upload a CSV to add multiple products to cart in one step — it is designed for buyers who know exactly what they want. Order Templates (Order Guides) are curated product lists merchants set up for accounts to reorder from. The exam tests which to recommend: buyer-driven fast reorder = Quick Order; merchant-curated repeat purchase list = Order Template.</p>
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
          <Link href="/b2b-commerce-developer-ap-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">B2B Commerce Developer AP Exam Tips</span>
          </Link>
          <Link href="/adm-201-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">ADM-201 Exam Tips</span>
          </Link>
          <Link href="/service-cloud-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Service Cloud Consultant Exam Tips</span>
          </Link>
          <Link href="/certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start B2B Commerce Admin AP Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/b2b-commerce-admin-ap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            B2B Commerce Admin AP Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/b2b-commerce-developer-ap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            B2B Commerce Developer AP
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