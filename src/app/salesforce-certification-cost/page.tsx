import type { Metadata } from 'next'
import { RETAKE_POLICY } from '@/lib/exam-policy-facts'
import Link from '@/components/AppLink'
import { DollarSign, RefreshCw, Info, CheckCircle2, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import LastUpdated from '@/components/LastUpdated'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Salesforce Cert Cost (${RELEASE_CURRENT}): Exam Fees & Retake Prices`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription = `Salesforce exam fees for ${RELEASE_CURRENT}: compare typical prices, architect and AP fees, retakes, and available exam bundles.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/salesforce-certification-cost`,
    languages: { 'en-US': `${siteUrl}/salesforce-certification-cost`, 'x-default': `${siteUrl}/salesforce-certification-cost` },
  },
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
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Salesforce Careers', url: '/certifications' },
  { name: 'Salesforce Certification Cost Guide', url: '/salesforce-certification-cost' },
]

const faqItems = [
  {
    question: 'How much does a Salesforce certification cost?',
    answer: 'Most Salesforce exams cost $200, with a $100 retake fee. Foundations exams, such as Platform Foundations and MuleSoft Integration Foundations, cost $75. Accredited Professional (AP) exams cost $150 and usually have no discounted retake. Domain Architect exams cost $400. The Certified Technical Architect (CTA) path is priced separately.',
  },
  {
    question: 'What is the Salesforce certification retake fee?',
    answer: 'Most standard retakes cost about half the original exam fee. A $200 exam usually has a $100 retake fee; a $75 Foundations exam has a $37.50 retake fee. AP exams cost $150 and usually charge the same fee for each attempt. The first retake requires a one-day wait; later attempts require a 14-day wait.',
  },
  {
    question: 'How many times can you retake a Salesforce certification?',
    answer: 'You can make three attempts at the same exam during each release cycle. After the first failure, wait 24 hours. After the second, wait 14 days. After the third, wait until the next release cycle, when your attempts reset. Retakes cost 50% of the original price, and Foundations exams have no retake fee.',
  },
  {
    question: 'Is there a free Salesforce certification option?',
    answer: 'Salesforce exams are not free, but some employers, partner programmes, and Trailhead GO subscriptions provide vouchers. Foundations exams start at $75 and are the lowest-cost entry point on this certification path.',
  },
]

const priceTiers = [
  {
    tier: 'Foundations',
    fee: '$75',
    retake: '$37.50',
    note: 'Entry-level exams include Platform Foundations and MuleSoft Integration Foundations.',
    certs: [
      { name: 'Platform Foundations', href: '/certifications/platform-foundations' },
      { name: 'MuleSoft Integration Foundations', href: '/certifications/mulesoft-integration-foundations' },
    ],
    color: 'emerald',
  },
  {
    tier: 'Accredited Professional (AP)',
    fee: '$150',
    retake: '$150',
    note: 'Product-specific exams include B2B Commerce, Health Cloud, and Manufacturing Cloud.',
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
    note: 'Includes most Administrator, Developer, Consultant, and Specialist exams.',
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
    note: 'Tableau exams include Data Analyst, Consultant, Server Administrator, and Architect.',
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
    note: 'Domain Architect exams include Data, Integration, Sharing and Visibility, System, and Application.',
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
    note: 'Salesforce\'s highest credential includes a board presentation evaluated by a panel of CTAs.',
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
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">

      <ContentPageAuthor />
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Certification Cost ({RELEASE_CURRENT})
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          Salesforce exam fees range from $75 to $6,000, depending on the credential. Most Administrator, Developer, and Consultant exams cost $200. See exam and retake fees, regional pricing, and ways to reduce costs.
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
        <p className="text-xs text-gray-600 mt-3 flex gap-1.5">
          <Info className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" />
          Fees are in USD and regional taxes may apply. Confirm the final amount in your Salesforce certification account before booking.
        </p>
      </section>

      {/* Regional pricing table */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-1">Regional Pricing: USD vs INR</h2>
        <p className="text-sm text-gray-600 mb-4">
          Pearson VUE exam prices in India are usually lower than the USD list price. This table gives approximate INR equivalents based on current exchange rates. Regional prices can change, so confirm the final amount in your Salesforce certification account before booking.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full text-sm text-left border-collapse">
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
                <td className="py-2.5 pr-4 font-semibold">$150</td>
                <td className="py-2.5 pr-4">~₹12,500</td>
                <td className="py-2.5">$150</td>
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
        <p className="text-xs text-gray-600 mt-3 flex gap-1.5">
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
                    <p className="text-xs font-medium text-gray-600 mb-0.5">Retake</p>
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
          <RefreshCw className="h-5 w-5 text-gray-600" />
          Retake Policy
        </h2>
        <ul className="space-y-2.5 text-sm text-gray-700">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Wait <strong>{RETAKE_POLICY.waitAfterFirstFail}</strong> before your first retake.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Wait <strong>{RETAKE_POLICY.waitAfterSecondFail}</strong> before your second retake.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />You can make <strong>{RETAKE_POLICY.attemptsPerCycle} attempts per release cycle</strong>. After a third failure, wait {RETAKE_POLICY.afterThirdFail}.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Most retakes cost about <strong>50% of the original exam fee</strong>.</li>
        </ul>
      </section>

      {/* Savings tips */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-gray-600" />
          How to Reduce Certification Costs
        </h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2">
            <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />
            <span><strong>Pass on your first attempt:</strong> This is the biggest way to reduce costs. Use the free practice questions on each certification page to check your readiness before booking.</span>
          </li>
          <li className="flex gap-2">
            <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />
            <span><strong>Trailhead GO or employer vouchers:</strong> Some employers and Salesforce partner programmes cover exam fees. Check your company’s learning budget before paying yourself.</span>
          </li>
          <li className="flex gap-2">
            <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />
            <span><strong>Consider lower-cost tiers:</strong> Foundations exams ($75) are the least expensive entry point. AP exams ($150) may suit people who already work with a specific Salesforce product cloud.</span>
          </li>
          <li className="flex gap-2">
            <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />
            <span><strong>Plan your architect path:</strong> Domain Architect exams ($400) count toward the CTA path. Plan your exam sequence to avoid repeating material.</span>
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Prepare Before You Pay</h2>
        <p className="text-sm text-gray-700 mb-4">
          Review free practice questions and exam weightings for every certification. No sign-up is required.
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
