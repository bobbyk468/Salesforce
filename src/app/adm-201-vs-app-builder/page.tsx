import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { getWebPageJsonLd, getBreadcrumbListJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const ogImageUrl = `${siteUrl}/og-image`

const pageTitle = 'Admin(ADM-201) vs App Builder (DEV-402): Which Cert Should be First?'
const pageDescription =
  'Compare ADM-201 and DEV-402 by difficulty, exam focus, career outcomes, and study time to choose the right first Salesforce certification.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/adm-201-vs-app-builder` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/adm-201-vs-app-builder`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [ogImageUrl],
  },
  keywords:
    'ADM-201 vs App Builder, DEV-402 vs ADM-201, which Salesforce certification first, Salesforce admin vs app builder, ADM-201 difficulty comparison',
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'ADM-201 vs App Builder', url: '/adm-201-vs-app-builder' },
]

export default function Adm201VsAppBuilderPage() {
  const webPageJsonLd = getWebPageJsonLd({
    name: pageTitle,
    description: pageDescription,
    path: '/adm-201-vs-app-builder',
    breadcrumbItems,
  })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Certification Comparison
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          ADM-201 vs App Builder (DEV-402): Which Salesforce Cert Should You Take First?
        </h1>
        <p className="text-lg text-gray-600">
          Both certifications are declarative and popular for Salesforce careers, but they test different strengths.
          This guide helps you choose the right starting point based on your role and goals.
        </p>
      </header>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Side-by-Side Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-2.5 pr-4 font-semibold text-gray-900">Factor</th>
                <th className="py-2.5 pr-4 font-semibold text-salesforce-blue">ADM-201 (Administrator)</th>
                <th className="py-2.5 font-semibold text-purple-700">DEV-402 (App Builder)</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Primary Focus</td>
                <td className="py-2.5 pr-4">Core admin operations, security, automation, reports</td>
                <td className="py-2.5">Data modeling, app design, declarative build patterns</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Difficulty</td>
                <td className="py-2.5 pr-4">Moderate (broad coverage)</td>
                <td className="py-2.5">Moderate-to-harder (deeper configuration depth)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Best For</td>
                <td className="py-2.5 pr-4">New admins, support/admin roles, career switchers</td>
                <td className="py-2.5">Admins moving toward solution design/custom apps</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium">Exam Style</td>
                <td className="py-2.5 pr-4">Operational scenarios across many topics</td>
                <td className="py-2.5">Design/build scenarios with object and app patterns</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Recommended Order</td>
                <td className="py-2.5 pr-4" colSpan={2}>Start with ADM-201, then move to DEV-402 for a stronger progression.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Which One Should You Take First?</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Choose <strong>ADM-201 first</strong> if you are new to Salesforce or preparing for admin-focused roles.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Choose <strong>DEV-402 next</strong> if you want to build custom applications after mastering admin fundamentals.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />For most candidates, the best path is ADM-201 -&gt; DEV-402 -&gt; Advanced Administrator or Consultant tracks.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Career Outcome Differences</h2>
        <p className="text-sm text-gray-700 mb-3">
          ADM-201 signals readiness for day-to-day Salesforce administration: user setup, access controls, standard automation, data integrity, and reporting.
          App Builder validates that you can design and build custom apps with stronger declarative architecture skills.
        </p>
        <p className="text-sm text-gray-700">
          If your immediate goal is to get into Salesforce operations roles quickly, ADM-201 usually gives faster job-market relevance.
          If your goal is solution design and custom implementations, adding DEV-402 shortly after ADM-201 creates a stronger profile.
        </p>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Recommended Next Step</h2>
        <p className="text-sm text-gray-700 mb-4">
          Start with ADM-201 and use section-wise exam weightage + practice questions to prepare efficiently.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/certifications/administrator"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors"
          >
            Go to ADM-201 Study Guide
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/adm-201-exam-tips-2026"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Read ADM-201 Exam Tips {RELEASE_CURRENT}
          </Link>
        </div>
      </section>
    </div>
  )
}
