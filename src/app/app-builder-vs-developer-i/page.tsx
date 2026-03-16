import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `App Builder vs Platform Developer I (${RELEASE_CURRENT})`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `App Builder vs Platform Developer I: exam scope, coding needs, difficulty, career paths. Which cert first for your Salesforce career.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/app-builder-vs-developer-i` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/app-builder-vs-developer-i`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `App Builder vs Platform Developer I, Salesforce App Builder or PD1, which cert after ADM-201, App Builder vs PD1 comparison 2026`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'App Builder vs Platform Developer I', url: '/app-builder-vs-developer-i' },
]

const faqItems = [
  {
    question: 'Should I take App Builder or Platform Developer I after ADM-201?',
    answer: 'It depends on your role. If you work primarily as a Salesforce admin or no-code/low-code builder (flows, process automation, custom objects, Lightning pages), take App Builder first. If you write or want to write Apex code and work with LWC or Visualforce, take Platform Developer I. Many professionals take App Builder first because it builds directly on ADM-201 content and requires no coding background.',
  },
  {
    question: 'Is App Builder easier than Platform Developer I?',
    answer: 'Yes — App Builder is generally considered easier than Platform Developer I. App Builder tests declarative (no-code) platform knowledge and shares significant overlap with ADM-201 content. Platform Developer I requires Apex programming, Salesforce Object Query Language (SOQL), SOSL, triggers, test classes, and LWC fundamentals — a coding skill set that requires dedicated technical preparation.',
  },
  {
    question: 'Do I need to know how to code for the App Builder exam?',
    answer: 'No. The App Builder exam tests declarative development — Lightning App Builder, Lightning pages, custom objects and fields, validation rules, formula fields, flows, process automation, and AppExchange. No Apex code or LWC JavaScript is required. However, the exam does test understanding of when to use declarative vs programmatic approaches (i.e., recognising scenarios where code is needed vs not).',
  },
  {
    question: 'What coding skills does Platform Developer I require?',
    answer: 'Platform Developer I (PD1) requires proficiency in: Apex (classes, triggers, governor limits, asynchronous Apex — future, queueable, batch, scheduled), SOQL and SOSL queries, Visualforce pages (basics), Lightning Web Components (LWC fundamentals — HTML, CSS, JavaScript), and Salesforce testing framework (writing test classes, assert methods, achieving 75%+ code coverage). Apex triggers and governor limits are the most heavily tested topics.',
  },
]

export default function AppBuilderVsDeveloperIPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/app-builder-vs-developer-i" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Certification Comparison · {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce App Builder vs Platform Developer I: Which to Take?
        </h1>
        <p className="text-lg text-gray-600">
          App Builder and Platform Developer I are the two most common second certifications after ADM-201.
          App Builder tests declarative (no-code) development; PD1 tests programmatic (Apex, LWC) development.
          The right choice depends on your current role, coding ability, and career direction.
        </p>
      </header>

      {/* Side-by-side table */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Side-by-Side Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900 w-1/3">Factor</th>
                <th scope="col" className="py-2.5 pr-4 font-semibold text-salesforce-blue">App Builder</th>
                <th scope="col" className="py-2.5 font-semibold text-emerald-700">Platform Developer I</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 divide-y divide-gray-100">
              <tr>
                <td className="py-2.5 pr-4 font-medium">Questions / Time</td>
                <td className="py-2.5 pr-4">60 questions · 105 min</td>
                <td className="py-2.5">60 questions · 105 min</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Passing Score</td>
                <td className="py-2.5 pr-4">63%</td>
                <td className="py-2.5">65%</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Exam Fee</td>
                <td className="py-2.5 pr-4">$200 (retake $100)</td>
                <td className="py-2.5">$200 (retake $100)</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Coding Required</td>
                <td className="py-2.5 pr-4">No — declarative only</td>
                <td className="py-2.5">Yes — Apex, LWC, SOQL required</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Primary Focus</td>
                <td className="py-2.5 pr-4">Lightning App Builder, flows, custom objects, AppExchange, Lightning pages</td>
                <td className="py-2.5">Apex triggers, governor limits, SOQL/SOSL, LWC, test classes</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Overlap with ADM-201</td>
                <td className="py-2.5 pr-4">High — ~40% shared knowledge base</td>
                <td className="py-2.5">Low — ~20% shared (data model, security)</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Difficulty</td>
                <td className="py-2.5 pr-4">Moderate — manageable with platform experience</td>
                <td className="py-2.5">Moderate-Hard — requires active coding practice</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium">Career Path</td>
                <td className="py-2.5 pr-4">Admin → Technical Admin → Business Analyst → Consultant</td>
                <td className="py-2.5">Developer → Senior Developer → Technical Architect</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* What's different */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Key Content Differences</h2>
        <div className="grid sm:grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-semibold text-salesforce-blue mb-2">App Builder — Unique Topics</p>
            <ul className="space-y-1.5 text-gray-700">
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />Lightning App Builder and Lightning Experience customisation</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />Screen flows, record-triggered flows, scheduled flows</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />AppExchange evaluation and installation</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />Custom objects, fields, relationships, and formula fields</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-salesforce-blue flex-shrink-0" />When to use declarative vs programmatic solutions</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-emerald-700 mb-2">Platform Developer I — Unique Topics</p>
            <ul className="space-y-1.5 text-gray-700">
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" />Apex classes, triggers, and DML operations</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" />SOQL and SOSL queries; bulkification patterns</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" />Governor limits and when they are exceeded</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" />Lightning Web Components (HTML, JavaScript, @wire)</li>
              <li className="flex gap-2"><CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-600 flex-shrink-0" />Apex test classes, code coverage, and test data setup</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Which to take first */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Which to Take First?</h2>
        <p className="text-sm text-gray-700 mb-3">
          Choose based on your current role and whether you write code in your Salesforce work.
          You can hold both certifications — they are complementary, not competing.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-lg border border-salesforce-blue/20 bg-salesforce-blue/5 p-4">
            <p className="text-sm font-semibold text-salesforce-dark mb-2">Take App Builder First If:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>You are a Salesforce Admin looking to expand platform skills</li>
              <li>You work with flows, Lightning pages, and custom objects daily</li>
              <li>You have no Apex programming background</li>
              <li>Your role is non-technical (consultant, analyst, BA)</li>
            </ul>
          </div>
          <div className="rounded-lg border border-emerald-200 bg-emerald-50/50 p-4">
            <p className="text-sm font-semibold text-emerald-700 mb-2">Take Platform Developer I First If:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>You write Apex code or LWC components in your current role</li>
              <li>You are a software developer transitioning to Salesforce</li>
              <li>Your goal is a developer or architect career track</li>
              <li>You already have a coding background (Java, Python, JavaScript)</li>
            </ul>
          </div>
        </div>
      </section>

      <RelatedGuides links={getRelatedGuides('app-builder-vs-developer-i')} />

      {/* CTA */}
      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Practice for Both</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/app-builder" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            App Builder Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/developer-1" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            PD1 Practice Questions
          </Link>
          <Link href="/app-builder-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            App Builder Exam Tips
          </Link>
          <Link href="/pd1-exam-tips-2026" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            PD1 Exam Tips
          </Link>
        </div>
      </section>
    </div>
  )
}
