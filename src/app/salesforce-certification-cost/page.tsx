import type { Metadata } from 'next'
import Link from 'next/link'
import { DollarSign, RefreshCw, Info, CheckCircle2, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Salesforce Cert Cost (${RELEASE_CURRENT}): Exam Fees & Retake Prices`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce exam fees (${RELEASE_CURRENT}): most certs $200, Architects $400, AP certs $150. Retake fees and bundle options fully explained.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/salesforce-certification-cost` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/salesforce-certification-cost`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Salesforce certification cost ${RELEASE_CURRENT}, Salesforce exam fee, Salesforce certification price, Salesforce retake fee, how much does Salesforce certification cost`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Salesforce Certification Cost', url: '/salesforce-certification-cost' },
]

const faqItems = [
  {
    question: 'How much does a Salesforce certification cost?',
    answer: 'Most Salesforce certifications cost $200 for the exam and $100 for a retake. Foundations certs (Platform Foundations, MuleSoft Integration Foundations) cost $75. AP certs cost $100. Domain Architect exams cost $400, and the Certified Technical Architect (CTA) review board costs $6,000.',
  },
  {
    question: 'What is the Salesforce certification retake fee?',
    answer: 'Retake fees are approximately 50% of the exam fee. Most $200 certs have a $100 retake fee. Foundations certs ($75 exam) have a $37.50 retake fee. AP certs ($100 exam) have a $50 retake. There is a 1-day wait for the first retake and a 14-day wait for subsequent attempts.',
  },
  {
    question: 'How many times can you retake a Salesforce certification?',
    answer: 'Salesforce allows up to 6 exam attempts per year for the same credential. After the first failed attempt, you must wait 1 day before retaking. Subsequent retakes require a 14-day waiting period each.',
  },
  {
    question: 'Is there a free Salesforce certification option?',
    answer: 'Salesforce does not offer free certifications, but some employers, partner programmes, and Trailhead GO subscriptions cover exam vouchers. Foundations certs start at $75 and are the lowest-cost entry point on the certification path.',
  },
]

const priceTiers = [
  {
    tier: 'Foundations',
    fee: '$75',
    retake: '$37.50',
    note: 'Entry-level credentials: Platform Foundations, MuleSoft Integration Foundations',
    certs: [
      { name: 'Platform Foundations', href: '/certifications/platform-foundations' },
      { name: 'MuleSoft Integration Foundations', href: '/certifications/mulesoft-integration-foundations' },
    ],
    color: 'emerald',
  },
  {
    tier: 'Accredited Professional (AP)',
    fee: '$100',
    retake: '$50',
    note: 'Product-specific credentials (B2B Commerce, Health Cloud, Manufacturing Cloud, and more)',
    certs: [
      { name: 'B2B Commerce Admin AP', href: '/certifications/b2b-commerce-admin-ap' },
      { name: 'Health Cloud AP', href: '/certifications/health-cloud-ap' },
      { name: 'Financial Services Cloud AP', href: '/certifications/financial-services-cloud-ap' },
      { name: 'Manufacturing Cloud AP', href: '/certifications/manufacturing-cloud-ap' },
    ],
    color: 'blue',
  },
  {
    tier: 'Core Certifications',
    fee: '$200',
    retake: '$100',
    note: 'Admin, Developer, Consultant, and most Specialist certs — the largest group',
    certs: [
      { name: 'Platform Administrator (ADM-201)', href: '/certifications/administrator' },
      { name: 'Platform Developer I (PD1)', href: '/certifications/developer-1' },
      { name: 'Sales Cloud Consultant', href: '/certifications/sales-cloud' },
      { name: 'Service Cloud Consultant', href: '/certifications/service-cloud' },
    ],
    color: 'salesforce',
  },
  {
    tier: 'Tableau',
    fee: '$250',
    retake: '$125',
    note: 'Tableau-specific certifications (Data Analyst, Consultant, Server Admin, Architect)',
    certs: [
      { name: 'Tableau Data Analyst', href: '/certifications/tableau-data-analyst' },
      { name: 'Tableau Consultant', href: '/certifications/tableau-consultant' },
      { name: 'Tableau Server Administrator', href: '/certifications/tableau-server-administrator' },
    ],
    color: 'purple',
  },
  {
    tier: 'Architect Credentials',
    fee: '$400',
    retake: '$200',
    note: 'Domain architect certs: Data, Integration, Sharing & Visibility, System, Application, and more',
    certs: [
      { name: 'Data Architect', href: '/certifications/data-architect' },
      { name: 'Integration Architect', href: '/certifications/integration-architect' },
      { name: 'System Architect', href: '/certifications/system-architect' },
      { name: 'Application Architect', href: '/certifications/application-architect' },
    ],
    color: 'orange',
  },
  {
    tier: 'Certified Technical Architect (CTA)',
    fee: '$6,000',
    retake: '$3,000',
    note: 'Salesforce\'s highest credential. Includes a review board presentation evaluated by a panel of CTAs.',
    certs: [
      { name: 'Certified Technical Architect', href: '/certifications/technical-architect' },
    ],
    color: 'red',
  },
]

const colorMap: Record<string, { border: string; bg: string; badge: string; text: string }> = {
  emerald: { border: 'border-emerald-200', bg: 'bg-emerald-50/50', badge: 'bg-emerald-100 text-emerald-800', text: 'text-emerald-700' },
  blue: { border: 'border-blue-200', bg: 'bg-blue-50/50', badge: 'bg-blue-100 text-blue-800', text: 'text-blue-700' },
  salesforce: { border: 'border-salesforce-blue/30', bg: 'bg-salesforce-blue/5', badge: 'bg-salesforce-blue/10 text-salesforce-dark', text: 'text-salesforce-blue' },
  purple: { border: 'border-purple-200', bg: 'bg-purple-50/50', badge: 'bg-purple-100 text-purple-800', text: 'text-purple-700' },
  orange: { border: 'border-orange-200', bg: 'bg-orange-50/50', badge: 'bg-orange-100 text-orange-800', text: 'text-orange-700' },
  red: { border: 'border-red-200', bg: 'bg-red-50/50', badge: 'bg-red-100 text-red-800', text: 'text-red-700' },
}

export default function SalesforceCertificationCostPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/salesforce-certification-cost" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Certification Cost ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Salesforce exam fees range from $75 to $6,000 depending on the credential tier.
          Most admin, developer, and consultant certs cost $200. Here is the full breakdown with retake prices and savings tips.
        </p>
      </header>

      {/* Quick reference table */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Exam Fee Quick Reference</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th scope="col" className="text-left py-2 pr-6 font-semibold text-gray-700">Cert Tier</th>
                <th scope="col" className="text-left py-2 pr-6 font-semibold text-gray-700">Exam Fee</th>
                <th scope="col" className="text-left py-2 font-semibold text-gray-700">Retake Fee</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {priceTiers.map(({ tier, fee, retake }) => (
                <tr key={tier}>
                  <td className="py-2.5 pr-6 text-gray-800">{tier}</td>
                  <td className="py-2.5 pr-6 font-semibold text-gray-900">{fee}</td>
                  <td className="py-2.5 text-gray-600">{retake}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3 flex gap-1.5">
          <Info className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" />
          Fees are in USD. Regional taxes may apply. Always confirm the final amount in your Salesforce certification account before booking.
        </p>
      </section>

      {/* Regional pricing table */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-1">Regional Pricing: USD vs INR</h2>
        <p className="text-sm text-gray-600 mb-4">
          Pearson VUE pricing in India is typically lower than the USD list price. The table below shows approximate INR equivalents at current exchange rates. Always confirm the final price in your Salesforce certification account before booking — regional pricing can change.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Cert Tier</th>
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">USD (Global)</th>
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">INR (India, approx.)</th>
                <th scope="col" className="py-2.5 font-semibold text-gray-900">USD Retake</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 divide-y divide-gray-100">
              <tr>
                <td className="py-2.5 pr-4">Foundations</td>
                <td className="py-2.5 pr-4 font-semibold">$75</td>
                <td className="py-2.5 pr-4">~₹6,200</td>
                <td className="py-2.5">$37.50</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Accredited Professional (AP)</td>
                <td className="py-2.5 pr-4 font-semibold">$100</td>
                <td className="py-2.5 pr-4">~₹8,300</td>
                <td className="py-2.5">$50</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Core Certifications</td>
                <td className="py-2.5 pr-4 font-semibold">$200</td>
                <td className="py-2.5 pr-4">~₹16,600</td>
                <td className="py-2.5">$100</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Tableau</td>
                <td className="py-2.5 pr-4 font-semibold">$250</td>
                <td className="py-2.5 pr-4">~₹20,800</td>
                <td className="py-2.5">$125</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Architect Credentials</td>
                <td className="py-2.5 pr-4 font-semibold">$400</td>
                <td className="py-2.5 pr-4">~₹33,200</td>
                <td className="py-2.5">$200</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4">Certified Technical Architect (CTA)</td>
                <td className="py-2.5 pr-4 font-semibold">$6,000</td>
                <td className="py-2.5 pr-4">~₹4,98,000</td>
                <td className="py-2.5">$3,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3 flex gap-1.5">
          <Info className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" />
          INR prices are indicative (USD &times; ~83 exchange rate). Pearson VUE may apply regional discounts; verify exact pricing on the official Salesforce certification registration page before purchase.
        </p>
      </section>

      {/* Per-tier detail cards */}
      <section className="space-y-6 mb-10">
        <h2 className="text-2xl font-bold text-gray-900">Fees by Certification Tier</h2>
        {priceTiers.map(({ tier, fee, retake, note, certs, color }) => {
          const c = colorMap[color]
          return (
            <div key={tier} className={`rounded-xl border ${c.border} ${c.bg} p-5`}>
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{tier}</h3>
                  <p className="text-sm text-gray-600 mt-0.5">{note}</p>
                </div>
                <div className="flex gap-3 flex-shrink-0">
                  <div className="text-center">
                    <p className={`text-xs font-medium ${c.text} mb-0.5`}>Exam</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${c.badge}`}>{fee}</span>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-medium text-gray-500 mb-0.5">Retake</p>
                    <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-gray-100 text-gray-700">{retake}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {certs.map(({ name, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="inline-flex items-center gap-1 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-full px-3 py-1 hover:border-salesforce-blue hover:text-salesforce-blue transition-colors"
                  >
                    {name}
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </section>

      {/* Retake policy */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <RefreshCw className="h-5 w-5 text-gray-500" />
          Retake Policy
        </h2>
        <ul className="space-y-2.5 text-sm text-gray-700">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />You can retake after a <strong>1-day waiting period</strong> for the first retake.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Subsequent retakes require a <strong>14-day waiting period</strong> each.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />You may attempt the same exam a maximum of <strong>6 times per year</strong>.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Retake fees are roughly <strong>50% of the exam fee</strong> for most tiers.</li>
        </ul>
      </section>

      {/* Savings tips */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-gray-500" />
          How to Reduce Certification Costs
        </h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2">
            <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />
            <span><strong>Pass first attempt:</strong> The single best cost reduction. Use free practice questions on each cert page to benchmark readiness before booking.</span>
          </li>
          <li className="flex gap-2">
            <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />
            <span><strong>Trailhead GO / employer vouchers:</strong> Some employers and Salesforce partner programmes cover exam fees. Check your company&apos;s L&D budget before paying out of pocket.</span>
          </li>
          <li className="flex gap-2">
            <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />
            <span><strong>Start with lower-cost tiers:</strong> Foundations certs ($75) and AP certs ($100) build prerequisite knowledge at a lower entry cost before moving to $200 exams.</span>
          </li>
          <li className="flex gap-2">
            <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />
            <span><strong>Architect track sequence:</strong> Domain architect exams ($400) count toward the CTA path. Plan the sequence to avoid re-covering the same material in separate sittings.</span>
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Prepare Before You Pay</h2>
        <p className="text-sm text-gray-700 mb-4">
          Free practice questions and exam weightage for every cert — no sign-up required.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/certifications"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors"
          >
            Browse All Certifications
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/certification-path"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Plan Your Certification Path
          </Link>
        </div>
      </section>
    </div>
  )
}
