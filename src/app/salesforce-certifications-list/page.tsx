import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import { CERTIFICATION_CATEGORIES } from '@/lib/certifications-data'
import { getExamCost } from '@/lib/cert-seo-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `All Salesforce Certifications (${RELEASE_CURRENT}): List by Role`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Complete Salesforce certifications list (${RELEASE_CURRENT}) grouped by role: Admin, Developer, Architect, Consultant, and more. Free practice.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/salesforce-certifications-list` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/salesforce-certifications-list`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `all Salesforce certifications ${RELEASE_CURRENT}, Salesforce certification list, Salesforce certifications complete list, how many Salesforce certifications are there, Salesforce cert catalog`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'All Salesforce Certifications', url: '/salesforce-certifications-list' },
]

const faqItems = [
  {
    question: 'How many Salesforce certifications are there in 2026?',
    answer: 'Salesforce offers over 40 certifications across role tracks including Administrator, Developer, Architect, Consultant, Marketer, and Specialist. The catalog includes foundational credentials, role-based certifications, and Accredited Professional (AP) product-specific credentials.',
  },
  {
    question: 'Which Salesforce certification should I get first?',
    answer: 'Most people start with the Salesforce Administrator (ADM-201) certification. It covers core platform concepts used in all other certifications and is the most widely recognised entry-level credential. Developers typically start with Platform Developer I (PD1) instead.',
  },
  {
    question: 'Are Salesforce certifications worth it in 2026?',
    answer: 'Yes. Salesforce certifications remain highly valued in the job market. Certified professionals typically command higher salaries, and certifications are commonly listed in job postings as requirements or preferred qualifications.',
  },
  {
    question: 'Do Salesforce certifications expire?',
    answer: 'Salesforce certifications require periodic maintenance. When a new Salesforce release introduces exam-relevant changes, certified professionals must pass a maintenance module on Trailhead to keep their certification active. Most certifications require maintenance twice a year.',
  },
]

/** Role badge colours */
const roleBadgeColor: Record<string, string> = {
  associate: 'bg-emerald-100 text-emerald-800',
  administrator: 'bg-blue-100 text-blue-800',
  developer: 'bg-purple-100 text-purple-800',
  consultant: 'bg-orange-100 text-orange-800',
  architect: 'bg-red-100 text-red-800',
  'accredited-professional': 'bg-gray-100 text-gray-700',
  designer: 'bg-pink-100 text-pink-800',
  marketing: 'bg-yellow-100 text-yellow-800',
  tableau: 'bg-teal-100 text-teal-800',
  mulesoft: 'bg-indigo-100 text-indigo-800',
}

function feeBadgeClass(fee: string) {
  if (fee === '$75') return 'text-emerald-700 bg-emerald-50'
  if (fee === '$100') return 'text-blue-700 bg-blue-50'
  if (fee === '$200') return 'text-gray-700 bg-gray-50'
  if (fee === '$250') return 'text-teal-700 bg-teal-50'
  if (fee === '$400') return 'text-orange-700 bg-orange-50'
  return 'text-red-700 bg-red-50'
}

export default function SalesforceListPage() {const totalCerts = CERTIFICATION_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0)

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/salesforce-certifications-list" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          All Salesforce Certifications ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Salesforce offers <strong>{totalCerts} certifications</strong> across {CERTIFICATION_CATEGORIES.length} role tracks.
          Each certification below links to a free study guide with exam weightage, practice questions, and prep tips.
        </p>
      </header>

      {/* Summary stats */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Total Certs', value: totalCerts },
          { label: 'Role Tracks', value: CERTIFICATION_CATEGORIES.length },
          { label: 'Free Study Guides', value: totalCerts },
          { label: 'Exam Fee Range', value: '$75–$6k' },
        ].map(({ label, value }) => (
          <div key={label} className="rounded-xl border border-gray-100 bg-white p-4 text-center">
            <p className="text-2xl font-bold text-salesforce-blue">{value}</p>
            <p className="text-xs text-gray-500 mt-1">{label}</p>
          </div>
        ))}
      </section>

      {/* Role-grouped cert table */}
      <div className="space-y-10">
        {CERTIFICATION_CATEGORIES.map((category) => {
          const badgeClass = roleBadgeColor[category.slug] || 'bg-gray-100 text-gray-700'
          return (
            <section key={category.slug} aria-labelledby={`${category.slug}-heading`}>
              <div className="flex items-center gap-3 mb-4">
                <h2 id={`${category.slug}-heading`} className="text-xl font-bold text-gray-900">
                  {category.name}
                </h2>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${badgeClass}`}>
                  {category.items.length} cert{category.items.length !== 1 ? 's' : ''}
                </span>
                <Link
                  href={`/certifications/role/${category.slug}`}
                  className="ml-auto text-xs text-salesforce-blue hover:underline flex-shrink-0"
                >
                  Browse {category.name} path →
                </Link>
              </div>

              <div className="rounded-xl border border-gray-100 bg-white overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <th scope="col" className="text-left py-2.5 px-4 font-semibold text-gray-600 w-full">Certification</th>
                      <th scope="col" className="text-right py-2.5 px-4 font-semibold text-gray-600 whitespace-nowrap">Exam Fee</th>
                      <th scope="col" className="py-2.5 px-4 w-8" aria-label="Link" />
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {category.items.map((item) => {
                      const slug = item.href.replace('/certifications/', '').replace(/\/$/, '')
                      const fee = getExamCost(slug)
                      return (
                        <tr key={item.href} className="hover:bg-salesforce-blue/5 transition-colors">
                          <td className="py-2.5 px-4">
                            <Link
                              href={item.href}
                              className="font-medium text-gray-800 hover:text-salesforce-blue transition-colors"
                            >
                              {item.name}
                            </Link>
                          </td>
                          <td className="py-2.5 px-4 text-right">
                            <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${feeBadgeClass(fee)}`}>
                              {fee}
                            </span>
                          </td>
                          <td className="py-2.5 px-4">
                            <Link href={item.href} aria-label={`Study guide for ${item.name}`}>
                              <ArrowRight className="h-4 w-4 text-gray-400 hover:text-salesforce-blue transition-colors" />
                            </Link>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </section>
          )
        })}
      </div>

      {/* Bottom CTA */}
      <section className="mt-12 rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Not sure which cert to take first?</h2>
        <p className="text-sm text-gray-700 mb-4">
          Use the certification path planner to find the right sequence based on your role and experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/certification-path"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors"
          >
            Plan Your Certification Path
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/salesforce-certification-cost"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            View All Exam Fees
          </Link>
        </div>
      </section>
    </div>
  )
}
