import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const ogImageUrl = `${siteUrl}/og-image`

const pageTitle = `ADM-201 Exam Tips (${RELEASE_CURRENT}): Salesforce Admin Study Guide`
const pageDescription =
  `ADM-201 exam tips for ${RELEASE_CURRENT}: study plan, high-weight topics, scenario strategy, time management, and mock-test targets to help you pass first attempt.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/adm-201-exam-tips-2026` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/adm-201-exam-tips-2026`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [ogImageUrl],
  },
  keywords:
    `ADM-201 exam tips ${RELEASE_CURRENT}, how to pass ADM-201 first attempt, Salesforce Administrator exam tips, ADM-201 study plan, ADM-201 mock test strategy`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: `ADM-201 Exam Tips ${RELEASE_CURRENT}`, url: '/adm-201-exam-tips-2026' },
]

export default function Adm201ExamTipsPage() {
  const webPageJsonLd = getWebPageJsonLd({
    name: pageTitle,
    description: pageDescription,
    path: '/adm-201-exam-tips-2026',
    breadcrumbItems,
  })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({
    headline: pageTitle,
    description: pageDescription,
    path: '/adm-201-exam-tips-2026',
  })

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          ADM-201 Exam Tips ({RELEASE_CURRENT}): How to Pass on Your First Attempt
        </h1>
        <p className="text-lg text-gray-600">
          If you are preparing for Salesforce Administrator certification, these practical tips help you focus on high-weight sections,
          answer scenario-based questions, and use mocks effectively.
        </p>
      </header>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: Best Way to Pass ADM-201</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Study high-weight sections first: Configuration and Setup + Object Manager/App Builder = 40% of the exam.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Practice in a Developer Edition org daily. ADM-201 is scenario-heavy and rewards hands-on understanding.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Take timed mocks (65 questions / 105 minutes). Most candidates are ready when they consistently score 75%+.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">4-Week ADM-201 Study Plan</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p><strong>Week 1:</strong> Configuration and Setup, Organization settings, users, profiles, and permission basics.</p>
          <p><strong>Week 2:</strong> Object Manager, Lightning App Builder, page layouts, record types, and field behavior.</p>
          <p><strong>Week 3:</strong> Automation (Flow), data management, reports, dashboards, and analytics permissions.</p>
          <p><strong>Week 4:</strong> Full mock exams, weak-area revision, and final checkpoints before exam booking.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Handle Scenario-Based Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Many ADM-201 questions describe a business situation and ask for the best admin action.
          Do not just memorize facts. Map each scenario to the right feature: security, sharing, automation, or reporting.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />Identify the primary requirement first (access, automation, data quality, reporting).</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />Eliminate options that solve a different problem, even if technically valid.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />Prefer current best-practice tools (Flow over legacy automation where applicable).</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="text-sm text-gray-700 mb-2">
          Use this minimum benchmark before scheduling your exam:
        </p>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks, one week apart
        </p>
        <p className="text-sm text-gray-700 mt-3">
          This reduces retake risk and improves first-attempt pass confidence.
        </p>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Next Step</h2>
        <p className="text-sm text-gray-700 mb-4">
          Apply these tips with real exam-style practice:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/certifications/administrator"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors"
          >
            Start ADM-201 Practice Test
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/certifications/role/administrator"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Browse Administrator Certification Path
          </Link>
          <Link
            href="/adm-201-vs-app-builder"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Compare ADM-201 vs App Builder
          </Link>
        </div>
      </section>
    </div>
  )
}
