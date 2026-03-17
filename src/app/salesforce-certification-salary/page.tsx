import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Salesforce Certification Salary (${RELEASE_CURRENT}) | Pay by Cert`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce certification salary data for ${RELEASE_CURRENT}: ADM-201, PD1, Sales Cloud, Service Cloud, architect tracks. See which certs pay the most.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/salesforce-certification-salary` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/salesforce-certification-salary`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Salesforce certification salary ${RELEASE_CURRENT}, how much do Salesforce certifications pay, Salesforce certified salary, Salesforce architect salary, Salesforce admin salary`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Salesforce Certification Salary', url: '/salesforce-certification-salary' },
]

const faqItems = [
  {
    question: 'Do Salesforce certifications increase salary?',
    answer: 'Yes — Salesforce certifications are directly linked to higher compensation. According to Mason Frank\'s annual Salesforce salary survey, certified professionals earn 15–25% more than non-certified peers in equivalent roles. Multiple certifications compound the effect, with professionals holding 3+ certifications commanding the highest salaries.',
  },
  {
    question: 'Which Salesforce certification pays the most?',
    answer: 'Salesforce Technical Architect (CTA) is the highest-paying Salesforce credential, with average salaries exceeding $180,000 USD for full-time roles. Application Architect and System Architect holders earn $140,000–$170,000 on average. Among consultant certifications, Marketing Cloud Consultant and Revenue Cloud Consultant command the highest premiums due to demand and supply imbalance.',
  },
  {
    question: 'What is the average Salesforce Administrator salary with ADM-201?',
    answer: 'Certified Salesforce Administrators (ADM-201) earn $70,000–$100,000 USD annually in the United States at the entry to mid level. With 3-5 years of experience and additional certifications (Advanced Administrator, App Builder), salaries typically reach $95,000–$130,000.',
  },
  {
    question: 'What is the average Salesforce developer salary with PD1?',
    answer: 'Salesforce Platform Developer I (PD1) certified developers earn $90,000–$125,000 USD annually for mid-level roles in the United States. Adding Platform Developer II (PD2) increases this to $120,000–$155,000. Developers who progress to the architect track (Application or System Architect) earn $140,000–$170,000+.',
  },
]

export default function SalesforceCertificationSalaryPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/salesforce-certification-salary" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Certification Salary ({RELEASE_CURRENT}): How Much Do Certified Professionals Earn?
        </h1>
        <p className="text-lg text-gray-600">
          Salesforce certifications are among the highest-ROI professional credentials in enterprise technology.
          Here is what certified Salesforce professionals earn across roles, experience levels, and certification tracks —
          and which certifications deliver the largest salary uplift.
        </p>
      </header>

      {/* Key data */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: Salary by Certification Track (United States)</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Role / Certification</th>
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Entry Level</th>
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Mid Level</th>
                <th scope="col" className="py-2.5 font-semibold text-gray-900">Senior / Multiple Certs</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 divide-y divide-gray-100">
              <tr>
                <td className="py-2.5 pr-4 font-medium">Salesforce Administrator (ADM-201)</td>
                <td className="py-2.5 pr-4">$65,000–$80,000</td>
                <td className="py-2.5 pr-4">$80,000–$100,000</td>
                <td className="py-2.5">$100,000–$130,000</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Advanced Admin (ADM-211)</td>
                <td className="py-2.5 pr-4">$85,000–$100,000</td>
                <td className="py-2.5 pr-4">$100,000–$125,000</td>
                <td className="py-2.5">$120,000–$145,000</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Platform Developer I (PD1)</td>
                <td className="py-2.5 pr-4">$85,000–$105,000</td>
                <td className="py-2.5 pr-4">$105,000–$130,000</td>
                <td className="py-2.5">$125,000–$155,000</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Platform Developer II (PD2)</td>
                <td className="py-2.5 pr-4">$105,000–$125,000</td>
                <td className="py-2.5 pr-4">$125,000–$150,000</td>
                <td className="py-2.5">$145,000–$175,000</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Sales/Service Cloud Consultant</td>
                <td className="py-2.5 pr-4">$90,000–$110,000</td>
                <td className="py-2.5 pr-4">$110,000–$135,000</td>
                <td className="py-2.5">$130,000–$160,000</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Marketing Cloud Consultant</td>
                <td className="py-2.5 pr-4">$95,000–$115,000</td>
                <td className="py-2.5 pr-4">$115,000–$145,000</td>
                <td className="py-2.5">$140,000–$170,000</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Application / System Architect</td>
                <td className="py-2.5 pr-4">$130,000–$150,000</td>
                <td className="py-2.5 pr-4">$150,000–$175,000</td>
                <td className="py-2.5">$170,000–$200,000+</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium text-red-700">Certified Technical Architect (CTA)</td>
                <td className="py-2.5 pr-4 text-red-700 font-semibold" colSpan={3}>$180,000–$250,000+ (extremely rare credential)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-600 mt-3">Salary ranges reflect United States market data. UK, Australia, and European markets typically run 20–35% lower in absolute terms. Consultant/contractor day rates can be significantly higher than employment salaries.</p>
      </section>

      {/* Regional salary comparison */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-1">Salesforce Salary by Region</h2>
        <p className="text-sm text-gray-600 mb-4">
          Salary ranges vary significantly by geography. The table below shows typical mid-level certified professional salaries for the same role across key markets.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Role (Mid-Level)</th>
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">United States</th>
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">United Kingdom</th>
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Australia</th>
                <th scope="col" className="py-2.5 font-semibold text-gray-900">India</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 divide-y divide-gray-100">
              <tr>
                <td className="py-2.5 pr-4 font-medium">Salesforce Administrator</td>
                <td className="py-2.5 pr-4">$80k–$100k</td>
                <td className="py-2.5 pr-4">£45k–£65k</td>
                <td className="py-2.5 pr-4">A$85k–A$110k</td>
                <td className="py-2.5">₹8L–₹18L</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Platform Developer I</td>
                <td className="py-2.5 pr-4">$105k–$130k</td>
                <td className="py-2.5 pr-4">£55k–£80k</td>
                <td className="py-2.5 pr-4">A$100k–A$135k</td>
                <td className="py-2.5">₹12L–₹25L</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Consultant (Sales/Service)</td>
                <td className="py-2.5 pr-4">$110k–$135k</td>
                <td className="py-2.5 pr-4">£60k–£85k</td>
                <td className="py-2.5 pr-4">A$110k–A$145k</td>
                <td className="py-2.5">₹15L–₹30L</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Marketing Cloud Consultant</td>
                <td className="py-2.5 pr-4">$115k–$145k</td>
                <td className="py-2.5 pr-4">£65k–£90k</td>
                <td className="py-2.5 pr-4">A$120k–A$155k</td>
                <td className="py-2.5">₹18L–₹35L</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Application / System Architect</td>
                <td className="py-2.5 pr-4">$150k–$175k</td>
                <td className="py-2.5 pr-4">£80k–£110k</td>
                <td className="py-2.5 pr-4">A$150k–A$195k</td>
                <td className="py-2.5">₹30L–₹60L</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Technical Architect (CTA)</td>
                <td className="py-2.5 pr-4">$180k–$250k+</td>
                <td className="py-2.5 pr-4">£120k–£180k</td>
                <td className="py-2.5 pr-4">A$200k–A$280k</td>
                <td className="py-2.5">₹60L–₹1.5Cr</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-600 mt-3">
          Figures are annual base salary (excluding bonus and equity). UK and Australian salaries are lower in absolute terms but comparable in purchasing power. India figures reflect demand from global SIs and captive centres. L = Lakhs, Cr = Crores.
        </p>
      </section>

      {/* What drives salary */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">What Actually Drives Salesforce Salary?</h2>
        <p className="text-sm text-gray-700 mb-3">
          Certifications are a signal — but they are not the primary salary driver. These factors matter more:
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Years of hands-on experience</strong> — Employers pay for real implementations, not exam passes. Certified professionals with 5+ years consistently earn at the top of salary ranges.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Certification stack (multiple certs)</strong> — The largest salary premiums come from 3+ certifications. Each additional certification signals both breadth and commitment to the platform.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Industry and cloud specialisation</strong> — Marketing Cloud, Revenue Cloud, and Health Cloud specialists command premiums due to lower supply of certified professionals.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Consulting vs. in-house</strong> — Consultant/contractor roles at System Integrators (SIs) like Accenture, Deloitte, and Slalom typically pay more than equivalent in-house roles, especially in the United States.</li>
        </ul>
      </section>

      {/* Best certs for salary uplift */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest ROI Certifications for Salary Growth</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <div>
              <span className="font-medium text-gray-900">Platform Developer II (PD2)</span>
              <p className="text-xs text-gray-600">Best uplift from admin/developer level to senior developer</p>
            </div>
            <span className="font-bold text-emerald-700 ml-4 whitespace-nowrap">+$20–35k</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <div>
              <span className="font-medium text-gray-900">Application Architect (role credential)</span>
              <p className="text-xs text-gray-600">Biggest single jump for developer-to-architect transition</p>
            </div>
            <span className="font-bold text-emerald-700 ml-4 whitespace-nowrap">+$30–50k</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <div>
              <span className="font-medium text-gray-900">Marketing Cloud Consultant</span>
              <p className="text-xs text-gray-600">High demand, relatively low supply of certified specialists</p>
            </div>
            <span className="font-bold text-emerald-700 ml-4 whitespace-nowrap">+$15–30k</span>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <span className="font-medium text-gray-900">Advanced Administrator (ADM-211)</span>
              <p className="text-xs text-gray-600">Best uplift from admin level without switching to developer track</p>
            </div>
            <span className="font-bold text-emerald-700 ml-4 whitespace-nowrap">+$15–25k</span>
          </div>
        </div>
        <p className="text-xs text-gray-600 pt-3">Salary uplift estimates are approximate and market/experience-dependent. Your mileage will vary based on employer, location, and existing experience.</p>
      </section>

      {/* Start */}
      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Earning Your Next Certification</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Plan Your Cert Path <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/salesforce-certification-cost" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Exam Costs & Fees
          </Link>
          <Link href="/certifications" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            All Certifications
          </Link>
        </div>
      </section>
    </div>
  )
}
