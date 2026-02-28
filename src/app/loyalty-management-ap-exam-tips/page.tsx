import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Loyalty Management AP Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Loyalty Management Accredited Professional exam tips for ${RELEASE_CURRENT}: loyalty programmes, tiers, points management, partner integration, and scenario strategy to pass.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/loyalty-management-ap-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/loyalty-management-ap-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Loyalty Management AP exam tips ${RELEASE_CURRENT}, how to pass Loyalty Management Accredited Professional, Salesforce loyalty programme certification, points management exam`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Loyalty Management AP Exam Tips', url: '/loyalty-management-ap-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Loyalty Management Accredited Professional exam format?',
    answer: 'The Loyalty Management AP exam has 40 multiple-choice questions, a 60-minute time limit, a Pass/Fail result, and a $150 fee. It validates practitioner-level knowledge of Salesforce Loyalty Management: loyalty programme configuration, tier management, points and rewards, member management, and partner ecosystem integration for retail, hospitality, and airline loyalty programmes.',
  },
  {
    question: 'What are the highest-weight Loyalty Management AP exam sections?',
    answer: 'Loyalty Programme Configuration (30%) and Points and Rewards Management (25%) together account for 55% of the exam. Setting up loyalty programme tiers (Silver, Gold, Platinum), configuring point accrual rules (earn 1 point per $1 spent), point redemption thresholds, and reward voucher issuance are the most heavily tested areas.',
  },
  {
    question: 'How does Salesforce Loyalty Management handle tiers?',
    answer: 'Loyalty tiers define the levels within a programme (e.g., Bronze, Silver, Gold, Platinum). Tier qualification rules determine when a member advances (e.g., spend $1,000 in a calendar year to reach Gold). Each tier can have different earning multipliers (Gold members earn 2x points), exclusive benefits (lounge access, free upgrades), and redemption opportunities. The exam tests how to configure tier rules, qualification periods, and tier downgrade logic.',
  },
  {
    question: 'What is a Loyalty Partner in Salesforce Loyalty Management?',
    answer: 'Loyalty Partners are external companies that participate in the programme — allowing members to earn or redeem points outside the primary brand (e.g., airline miles earned at a hotel partner). The exam tests how to configure partner earning rules, set up partner API integration for real-time point accrual, and manage the financial settlement between the loyalty programme operator and the partner.',
  },
]

export default function LoyaltyManagementApExamTipsPage() {
  const webPageJsonLd = getWebPageJsonLd({ name: pageTitle, description: pageDescription, path: '/loyalty-management-ap-exam-tips', breadcrumbItems })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline: pageTitle, description: pageDescription, path: '/loyalty-management-ap-exam-tips' })
  const faqJsonLd = getFaqPageJsonLd(faqItems)

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Loyalty Management AP Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Loyalty Management AP exam validates your ability to implement Salesforce Loyalty Management
          for retail, hospitality, and travel programmes. These tips focus on programme configuration,
          tier management, and points mechanics that define this accreditation.
        </p>
      </header>

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Exam At a Glance</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">40</p>
            <p className="text-xs text-gray-500 mt-0.5">Questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">60 min</p>
            <p className="text-xs text-gray-500 mt-0.5">Time Limit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">Pass / Fail</p>
            <p className="text-xs text-gray-500 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$150</p>
            <p className="text-xs text-gray-500 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Loyalty Management AP Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Loyalty programme configuration</strong> — Setting up loyalty programmes with tiers (Bronze/Silver/Gold/Platinum), defining tier qualification rules (spend threshold, purchase frequency), tier maintenance period (calendar year vs. rolling 12 months), and configuring tier-specific benefits, earning multipliers, and reward catalogues.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Points and rewards management</strong> — Point accrual rules (earn X points per $1 spent, bonus points for specific products), point expiry rules (points expire after 12 months of inactivity), redemption rules (minimum threshold to redeem, redemption rate), and reward voucher issuance and management through the Rewards Catalogue.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Member management and promotions</strong> — Loyalty member enrolment and profile management, promotional campaigns (double points for a limited period), segment-based targeted promotions, partner programme integration for cross-brand earning, and using Data Cloud or Marketing Cloud to drive personalised loyalty communications.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Loyalty Programme Configuration</span>
            <span className="font-bold text-salesforce-blue ml-4">30%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Points and Rewards Management</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Member Management and Promotions</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Partner Integration and Analytics</span>
            <span className="font-bold text-salesforce-blue ml-4">15%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">AP format: 40 questions, 60 minutes, Pass/Fail, $150. Tier configuration and point accrual/redemption rules are the defining mechanics — understand them thoroughly.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Loyalty Management AP Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a loyalty programme requirement and ask which Salesforce Loyalty Management
          configuration, object, or rule achieves it. Think like a loyalty programme manager
          designing the mechanics of a real consumer loyalty scheme.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For tier qualification questions: tier qualifications are typically based on accumulated qualifying points or spend within a measurement period. The measurement period can be calendar year (resets Jan 1) or rolling 12 months (always looks back 12 months). Tier downgrade occurs at the end of the period if the member falls below the threshold. When a scenario says &apos;members keep their status until the end of the year even if they fall below the requirement&apos;, set a fixed calendar year period with end-of-year evaluation.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For points questions: accrual rules define when and how many points are earned (1 point per $1 at checkout, 500 bonus points for a first purchase). Accrual processes run when a transaction event is received. Point liability is the financial cost of outstanding unredeemed points. When a scenario says &apos;award 2x points during the holiday season&apos;, configure a promotional accrual rule with a date range — not a permanent rule change.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For partner questions: partner earning rules define which partner transactions earn points and at what rate. Partner settlement calculates how much the programme owes the partner (or vice versa) for points earned through partner activities. When a question says &apos;hotel stays earn airline miles at a 1 mile per dollar rate&apos;, configure a Partner Accrual Rule linking the hotel partner&apos;s transactions to the airline loyalty programme.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">AP Exam Benchmark</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          Pass 3 timed 40-question mocks before booking (Pass/Fail scoring)
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Loyalty Management AP is for implementation consultants and in-house teams running enterprise
          loyalty programmes. Domain knowledge of loyalty programme mechanics (how airlines, hotels,
          and retailers structure their programmes) is as valuable as product knowledge for this exam.
          The Salesforce Loyalty Management Trailmix is the primary structured study resource.
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

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Loyalty Management AP Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/loyalty-management-ap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Loyalty Management AP Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/marketing-cloud-personalization-ap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            MC Personalization AP Questions
          </Link>
          <Link href="/certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            All Certification Paths
          </Link>
        </div>
      </section>
    </div>
  )
}
