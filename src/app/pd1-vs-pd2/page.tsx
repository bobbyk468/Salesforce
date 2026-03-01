import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Salesforce PD1 vs PD2 (${RELEASE_CURRENT}): Which to Take First?`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `PD1 vs PD2 (${RELEASE_CURRENT}): Compare difficulty, exam content, and career impact to choose the right developer cert. Start free practice today.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/pd1-vs-pd2` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/pd1-vs-pd2`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `PD1 vs PD2, Salesforce Platform Developer I vs II, PD1 PD2 difference, which Salesforce developer cert first, PD2 difficulty, PD1 prerequisites`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'PD1 vs PD2', url: '/pd1-vs-pd2' },
]

const faqItems = [
  {
    question: 'Can you take PD2 without PD1?',
    answer: 'No — Salesforce Platform Developer II (PD2) officially requires PD1 certification as a prerequisite. You cannot register for PD2 without holding an active PD1 credential.',
  },
  {
    question: 'Which is harder, PD1 or PD2?',
    answer: 'PD2 is significantly harder. While PD1 tests Apex fundamentals and governor limits, PD2 tests advanced design patterns, complex REST and SOAP integrations, and performance optimisation. Most PD2 candidates need 6–12 months of real project experience after PD1.',
  },
  {
    question: 'How long after PD1 should you wait before taking PD2?',
    answer: 'Most candidates wait 12–18 months after PD1 to gain sufficient project experience. PD2 is not an exam you can pass on study alone — it requires applied knowledge of trigger frameworks, selector/domain/service layers, and enterprise integration patterns.',
  },
  {
    question: 'Are PD1 and PD2 both needed for the architect track?',
    answer: 'Yes — PD1 and PD2 are both typically required on the path to Certified Technical Architect (CTA). PD2 is also a recommended (though not always required) precursor to Integration Architect and Application Architect.',
  },
]

export default function Pd1VsPd2Page() {
  const webPageJsonLd = getWebPageJsonLd({
    name: pageTitle,
    description: pageDescription,
    path: '/pd1-vs-pd2',
    breadcrumbItems,
  })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({
    headline: pageTitle,
    description: pageDescription,
    path: '/pd1-vs-pd2',
  })
  const faqJsonLd = getFaqPageJsonLd(faqItems)

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Certification Comparison · {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce PD1 vs PD2: Which Developer Certification Should You Take First?
        </h1>
        <p className="text-lg text-gray-600">
          Platform Developer I and Platform Developer II are sequential Salesforce developer credentials.
          PD1 is required before PD2, and the jump in difficulty is significant. Here is what separates them.
        </p>
      </header>

      {/* Side-by-side table */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Side-by-Side Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-2.5 pr-4 font-semibold text-gray-900 w-1/3">Factor</th>
                <th className="py-2.5 pr-4 font-semibold text-salesforce-blue">PD1 — Platform Developer I</th>
                <th className="py-2.5 font-semibold text-purple-700">PD2 — Platform Developer II</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 divide-y divide-gray-100">
              <tr>
                <td className="py-2.5 pr-4 font-medium">Exam Code</td>
                <td className="py-2.5 pr-4">PD1</td>
                <td className="py-2.5">PD2</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Questions / Time</td>
                <td className="py-2.5 pr-4">60 questions · 110 min</td>
                <td className="py-2.5">60 questions · 120 min</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Passing Score</td>
                <td className="py-2.5 pr-4">68%</td>
                <td className="py-2.5">65%</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Exam Fee</td>
                <td className="py-2.5 pr-4">$200 (retake $100)</td>
                <td className="py-2.5">$200 (retake $100)</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Prerequisites</td>
                <td className="py-2.5 pr-4">None (recommended: ADM-201)</td>
                <td className="py-2.5 font-medium text-red-600">PD1 certification required</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Primary Focus</td>
                <td className="py-2.5 pr-4">Apex basics, SOQL/DML, governor limits, triggers, LWC fundamentals, testing</td>
                <td className="py-2.5">Advanced Apex patterns, complex integrations (REST/SOAP), performance, MVC architecture, callouts</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Difficulty</td>
                <td className="py-2.5 pr-4">Moderate — heavy on memorisation of limits and testing rules</td>
                <td className="py-2.5">Harder — requires applied design pattern experience</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Exam Style</td>
                <td className="py-2.5 pr-4">Identify bugs, select correct Apex patterns, testing scenarios</td>
                <td className="py-2.5">Architecture and design decisions, complex multi-system integration scenarios</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Best For</td>
                <td className="py-2.5 pr-4">Developers starting on Salesforce, career switchers, admins adding code skills</td>
                <td className="py-2.5">Experienced Apex devs moving toward senior or architect tracks</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* What changes PD1 → PD2 */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">What Gets Harder in PD2?</h2>
        <p className="text-sm text-gray-700 mb-4">
          PD1 tests whether you understand Apex and the Salesforce data model. PD2 tests whether you can make the right
          architectural decision under complex constraints. The specific jumps:
        </p>
        <ul className="space-y-2.5 text-sm text-gray-700">
          <li className="flex gap-2">
            <CheckCircle2 className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Integration depth:</strong> PD2 covers REST and SOAP callouts, Named Credentials, Platform Events, and streaming API — none of which appear significantly in PD1.</span>
          </li>
          <li className="flex gap-2">
            <CheckCircle2 className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Design patterns:</strong> Expect questions on Trigger framework patterns, Selector/Domain/Service layer architecture (FFLib), and when to use each async mechanism at scale.</span>
          </li>
          <li className="flex gap-2">
            <CheckCircle2 className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Performance:</strong> Query optimization, SOSL vs SOQL trade-offs, collection efficiency, and managing heap/CPU in complex transactions.</span>
          </li>
          <li className="flex gap-2">
            <CheckCircle2 className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Testing:</strong> PD2 expects comprehensive test strategies — mock callouts (HttpCalloutMock, WebServiceMock), test data isolation, and complex assertion patterns.</span>
          </li>
        </ul>
      </section>

      {/* Who should take PD2 and when */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">When Are You Ready for PD2?</h2>
        <p className="text-sm text-gray-700 mb-3">
          Most candidates who struggle with PD2 attempt it too soon after PD1.
          Salesforce recommends practical experience before sitting PD2 — and the exam reflects that.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />You have built real integrations (REST callouts, Platform Events, external system connections).</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />You can explain and choose between trigger framework patterns (one trigger per object, handler pattern, etc.).</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />You are comfortable mocking HTTP callouts in test classes and achieving meaningful assertion coverage.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />You score 80%+ consistently on PD1-level practice exams — PD1 fundamentals should feel automatic at the PD2 stage.</li>
        </ul>
      </section>

      {/* Career outcomes */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Career Impact: PD1 vs PD1 + PD2</h2>
        <p className="text-sm text-gray-700 mb-3">
          PD1 alone opens mid-level Salesforce developer roles. Adding PD2 signals senior-level readiness and is often listed as preferred or required for architect-track positions.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-lg border border-salesforce-blue/20 bg-salesforce-blue/5 p-4">
            <p className="text-sm font-semibold text-salesforce-blue mb-2">With PD1</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Salesforce Developer (junior–mid)</li>
              <li>Admin with development skills</li>
              <li>Trailhead/Flows developer roles</li>
            </ul>
          </div>
          <div className="rounded-lg border border-purple-200 bg-purple-50/50 p-4">
            <p className="text-sm font-semibold text-purple-700 mb-2">With PD1 + PD2</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Senior Salesforce Developer</li>
              <li>Technical Lead / Solution Architect path</li>
              <li>Integration Developer roles</li>
              <li>Prerequisite satisfied for CTA track</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start With PD1 Practice</h2>
        <p className="text-sm text-gray-700 mb-4">
          Free practice questions, exam weightage, and governor limit reference for both certifications.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/certifications/developer-1"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors"
          >
            PD1 Practice Questions
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/certifications/developer-2"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            PD2 Study Guide
          </Link>
          <Link
            href="/pd1-exam-tips-2026"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            PD1 Exam Tips {RELEASE_CURRENT}
          </Link>
          <Link
            href="/pd2-exam-tips-2026"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            PD2 Exam Tips {RELEASE_CURRENT}
          </Link>
          <Link
            href="/developer-certification-path"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Full Developer Cert Path
          </Link>
        </div>
      </section>
    </div>
  )
}
