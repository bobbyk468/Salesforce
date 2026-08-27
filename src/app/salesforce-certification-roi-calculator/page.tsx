import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calculator, CheckCircle2 } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Salesforce Certification ROI Calculator (${RELEASE_CURRENT})`
const pageDescription =
  'Estimate Salesforce certification ROI by comparing exam fees, retake cost, study time, salary uplift, and payback period across popular cert tracks.'
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/salesforce-certification-roi-calculator` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/salesforce-certification-roi-calculator`,
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
  { name: 'Salesforce Certification ROI Calculator', url: '/salesforce-certification-roi-calculator' },
]

const faqItems = [
  {
    question: 'What is the highest ROI Salesforce certification?',
    answer:
      'For most entry-level candidates, Salesforce Administrator has the best ROI because the exam cost is relatively low and the credential is widely recognized. For experienced professionals, Platform Developer II, Marketing Cloud Consultant, and Architect-track credentials can produce larger salary jumps.',
  },
  {
    question: 'How do you calculate Salesforce certification ROI?',
    answer:
      'Compare exam fees, expected retake cost, study time, and likely salary uplift. A simple payback formula is: total certification cost divided by expected annual salary uplift, multiplied by 12 months.',
  },
  {
    question: 'Do certifications guarantee a salary increase?',
    answer:
      'No. Certifications improve hiring signal and promotion leverage, but salary depends on hands-on experience, role scope, geography, cloud specialization, and employer demand.',
  },
]

const roiRows = [
  {
    cert: 'Salesforce Administrator (ADM-201)',
    href: '/certifications/administrator',
    examCost: '$200',
    studyTime: '4-8 weeks',
    likelyUplift: '$8k-$20k',
    payback: '1-4 weeks after uplift',
    bestFor: 'First Salesforce job, admin role, career switchers',
  },
  {
    cert: 'Platform Developer I (PD1)',
    href: '/certifications/developer-1',
    examCost: '$200',
    studyTime: '6-10 weeks',
    likelyUplift: '$10k-$25k',
    payback: '1-3 weeks after uplift',
    bestFor: 'Developers moving into Salesforce engineering',
  },
  {
    cert: 'Platform Developer II (PD2)',
    href: '/certifications/developer-2',
    examCost: '$200',
    studyTime: '8-12 weeks',
    likelyUplift: '$20k-$35k',
    payback: 'Under 2 weeks after uplift',
    bestFor: 'Mid-level developers aiming for senior roles',
  },
  {
    cert: 'Marketing Cloud Consultant',
    href: '/certifications/marketing-cloud-consultant',
    examCost: '$200',
    studyTime: '6-10 weeks',
    likelyUplift: '$15k-$30k',
    payback: '1-3 weeks after uplift',
    bestFor: 'Marketing Cloud specialists and consultants',
  },
  {
    cert: 'Application or System Architect',
    href: '/architect-certification-path',
    examCost: '$200-$400 per exam',
    studyTime: '10-16 weeks per cert',
    likelyUplift: '$30k-$50k+',
    payback: '1-2 months after uplift',
    bestFor: 'Senior admins, developers, and consultants moving into architecture',
  },
]

export default function SalesforceCertificationRoiCalculatorPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <ContentPageSchemas
        headline={pageTitle}
        description={pageDescription}
        path="/salesforce-certification-roi-calculator"
        breadcrumbItems={breadcrumbItems}
        faqItems={faqItems}
      />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800 mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Salesforce Certification ROI Calculator ({RELEASE_CURRENT})</h1>
        <p className="text-lg text-gray-600">
          Use this guide to estimate whether a Salesforce certification is worth the exam fee, study time, and retake risk for your current role.
        </p>
      </header>

      <ContentPageAuthor />

      <section className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-emerald-600 p-3 text-white">
            <Calculator className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Quick ROI formula</h2>
            <p className="text-sm text-gray-700 mb-3">
              <strong>Payback period in months = total certification cost / expected annual salary uplift x 12.</strong>
            </p>
            <p className="text-sm text-gray-600">
              Example: if ADM-201 costs $200 and helps unlock a $10,000 annual salary uplift, the fee pays back in roughly 0.24 months. Study time, experience, and location matter more than the exam fee itself.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Certification ROI by Track</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[760px] w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Certification</th>
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Exam cost</th>
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Study time</th>
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Likely uplift</th>
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Payback</th>
                <th scope="col" className="py-2.5 font-semibold text-gray-900">Best for</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              {roiRows.map((row) => (
                <tr key={row.cert}>
                  <td className="py-3 pr-4 font-medium">
                    <Link href={row.href} className="text-salesforce-blue hover:underline">
                      {row.cert}
                    </Link>
                  </td>
                  <td className="py-3 pr-4">{row.examCost}</td>
                  <td className="py-3 pr-4">{row.studyTime}</td>
                  <td className="py-3 pr-4 font-semibold text-emerald-700">{row.likelyUplift}</td>
                  <td className="py-3 pr-4">{row.payback}</td>
                  <td className="py-3">{row.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-600 mt-3">
          Uplift ranges are directional, not guarantees. Use them with the salary guide, job descriptions in your market, and your current experience level.
        </p>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to use this before choosing a cert</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Pick the cert that maps to your next role, not just the easiest exam.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Check the full exam fee and retake fee before booking.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Estimate study time honestly. Eight weeks of focused study has an opportunity cost even if the exam fee is low.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Prioritize certs with job-description demand in your target geography.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Next steps</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/salesforce-certification-salary" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Compare Salaries <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/salesforce-certification-cost" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            View Exam Fees
          </Link>
          <Link href="/certifications/administrator" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Start with ADM-201
          </Link>
        </div>
      </section>
    </div>
  )
}
