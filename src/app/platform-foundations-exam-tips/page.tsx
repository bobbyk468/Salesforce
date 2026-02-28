import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Platform Foundations Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Platform Foundations exam tips for ${RELEASE_CURRENT}: core platform concepts, data model, security, automation, and scenario strategy to pass first attempt.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/platform-foundations-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/platform-foundations-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Platform Foundations exam tips ${RELEASE_CURRENT}, how to pass Salesforce Platform Foundations, Salesforce Foundations certification, entry-level Salesforce exam study guide`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Platform Foundations Exam Tips', url: '/platform-foundations-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Salesforce Platform Foundations exam format?',
    answer: 'The Salesforce Platform Foundations exam has 45 multiple-choice questions, a 70-minute time limit, a 65% passing score, and a $150 fee. It is an entry-level certification testing fundamental Salesforce platform concepts: navigation, objects, fields, automation basics, security model, and reports — positioned as a stepping stone before the full Administrator exam.',
  },
  {
    question: 'What are the highest-weight Platform Foundations exam sections?',
    answer: 'Core Salesforce Platform Concepts (30%) and Data and Security (25%) together account for 55% of the exam. Understanding standard and custom objects, field types, the Salesforce security model (profiles, permission sets, OWDs, sharing rules), basic automation (Flow), and reports/dashboards are the most tested areas.',
  },
  {
    question: 'What is the difference between Platform Foundations and Administrator (ADM-201)?',
    answer: 'Platform Foundations is an entry-level certification for beginners — it tests fundamental platform knowledge at a shallower depth than ADM-201. ADM-201 is the full administrator certification testing deeper knowledge across more topics. Platform Foundations is ideal for those who need to demonstrate basic Salesforce literacy before pursuing ADM-201 or a specialist certification.',
  },
  {
    question: 'Who should take Platform Foundations instead of going straight to ADM-201?',
    answer: 'Platform Foundations is recommended for professionals new to Salesforce who need to quickly demonstrate platform competency — business users, project managers, sales reps, or people starting in a Salesforce admin role. Those with 3+ months of Salesforce exposure may be better served by targeting ADM-201 directly to avoid unnecessary exam fees.',
  },
]

export default function PlatformFoundationsExamTipsPage() {
  const webPageJsonLd = getWebPageJsonLd({ name: pageTitle, description: pageDescription, path: '/platform-foundations-exam-tips', breadcrumbItems })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline: pageTitle, description: pageDescription, path: '/platform-foundations-exam-tips' })
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
          Salesforce Platform Foundations Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Platform Foundations exam is Salesforce&apos;s entry-level platform certification. It tests fundamental
          knowledge of the Salesforce platform: objects, fields, security, and automation basics.
          These tips focus on the core concepts that every Salesforce professional needs to know.
        </p>
      </header>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Platform Foundations Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Core platform concepts</strong> — Standard and custom objects, field types (text, number, picklist, lookup, master-detail), record pages, Lightning App Builder, and how Salesforce organises and relates data across objects.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Data and security model</strong> — The Salesforce security model: profiles (object-level access), permission sets (additional permissions), OWDs and sharing rules (record-level access). Understanding who can see which records and how sharing is controlled.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Automation and reporting</strong> — Basic Flow automation (screen flows for user interaction, auto-launched for background automation), validation rules, formula fields, and creating reports and dashboards. Basic understanding of Salesforce automation options and when to use each.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Core Salesforce Platform Concepts</span>
            <span className="font-bold text-salesforce-blue ml-4">30%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Data and Security</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Automation Basics</span>
            <span className="font-bold text-salesforce-blue ml-4">22%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Reports and Dashboards</span>
            <span className="font-bold text-salesforce-blue ml-4">18%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">Platform Concepts + Security + Automation = 77%. These three areas cover the vast majority of what every Salesforce user needs to know.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Platform Foundations Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a basic Salesforce configuration or business requirement and ask which feature,
          field type, or setting addresses it. Focus on standard Salesforce features — not custom development
          or advanced configuration that would be out of scope for a foundations exam.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For field type questions: Text fields store alphanumeric data. Number fields store numeric values. Lookup fields create a relationship to another object. Master-Detail fields create a tighter parent-child relationship where the child can&apos;t exist without the parent. Formula fields calculate values from other fields — they are read-only.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For security questions: profiles control which objects and fields a user can access. Permission sets add additional access on top of profiles. OWDs (Organisation-Wide Defaults) set the baseline sharing level for each object. Sharing rules open up access beyond OWDs. You can never use these to restrict access below what a profile grants.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For automation questions: validation rules prevent saving invalid data. Formula fields calculate read-only values. Flow automates processes (screen flow for guided users, auto-launched for background logic). When a scenario says &apos;when a record is saved, automatically update a field&apos;, the answer is an auto-launched Flow triggered on record save — not a manual process.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Platform Foundations is the most accessible Salesforce certification. Most candidates with
          1–2 months of Salesforce experience and 2–3 weeks of focused study can pass. Set up a
          free Salesforce Developer Edition org and hands-on practice with objects, fields,
          and basic Flow automation before booking.
        </p>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Platform Foundations Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/platform-foundations" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Platform Foundations Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/adm-201-exam-tips-2026" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Administrator Exam Tips
          </Link>
          <Link href="/admin-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Admin Certification Path
          </Link>
        </div>
      </section>
    </div>
  )
}
