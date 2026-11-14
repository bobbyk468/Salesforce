import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import { CheckCircle2 } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { RELEASE_CURRENT } from '@/lib/release-data'
import LastUpdated from '@/components/LastUpdated'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Editorial Policy & Exam Data Review | Trailblaze Prep`
const pageDescription =
  'How Trailblaze Prep reviews Salesforce exam guides, fees, practice questions, update dates, source references, and corrections.'
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/editorial-policy`,
    languages: { 'en-US': `${siteUrl}/editorial-policy`, 'x-default': `${siteUrl}/editorial-policy` },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/editorial-policy`,
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
  { name: 'Editorial Policy', url: '/editorial-policy' },
]

const faqItems = [
  {
    question: 'Does Trailblaze Prep use real Salesforce exam questions?',
    answer:
      'No. Trailblaze Prep does not publish braindumps, leaked exam content, or real exam questions. Practice questions are original, exam-style questions written to match public official exam objectives.',
  },
  {
    question: 'How often is exam data reviewed?',
    answer:
      `Exam names, fees, passing scores, durations, question counts, and official source links are reviewed against Salesforce public exam-guide pages during each Salesforce release cycle. The current site release is ${RELEASE_CURRENT}.`,
  },
  {
    question: 'How can I report incorrect exam data?',
    answer: 'Use the contact form with the page URL, the field that looks wrong, and the official Salesforce source you are comparing against.',
  },
]

const reviewSteps = [
  'Use official Salesforce certification pages and exam guides as the primary source for exam names, costs, durations, question counts, and section weightage.',
  'Flag older certification names and aliases such as ADM-201 or Pardot while also using the current official Salesforce naming where relevant.',
  'Write original practice questions from public objectives and common implementation scenarios, not from leaked or memorized exam content.',
  'Add visible official-source references on certification pages so readers can verify the latest exam guide before booking.',
  'Update high-impression pages first when Search Console data shows CTR weakness, intent mismatch, or stale snippets.',
]

export default function EditorialPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas
        headline={pageTitle}
        description={pageDescription}
        path="/editorial-policy"
        breadcrumbItems={breadcrumbItems}
        faqItems={faqItems}
      />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Editorial Policy &amp; Exam Data Review</h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          Trailblaze Prep is an independent Salesforce certification study resource. This page explains how we review exam details, write practice questions, use sources, and correct errors.
        </p>
      </header>

      <ContentPageAuthor />

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Our editorial standards</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          {reviewSteps.map((step) => (
            <li key={step} className="flex gap-2">
              <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Source hierarchy</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <p><strong className="text-gray-900">Primary sources:</strong> We use Salesforce certification pages, exam guides, pricing pages, and release documentation as primary sources.</p>
          <p><strong className="text-gray-900">Secondary context:</strong> For context, we may use candidate feedback, implementation experience, public Trailhead learning paths, and Search Console query data.</p>
          <p><strong className="text-gray-900">Not accepted:</strong> We do not use braindumps, leaked exams, memory-based real exam questions, or copied copyrighted question banks.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Corrections and update process</h2>
        <p className="text-sm text-gray-700 mb-3">
          Exam details can change when Salesforce updates guides, retires or renames credentials, or changes prices. When we find a mismatch, we check the official source and update the related page details, FAQ, schema, and internal cards.
        </p>
        <p className="text-sm text-gray-700">
          To report an issue, use the{' '}
          <Link href="/contact#contact-form" className="text-salesforce-blue font-medium hover:underline">
            contact form
          </Link>{' '}
          with the Trailblaze Prep URL and the official source you used.
        </p>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Useful verification pages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <Link href="/salesforce-certification-cost" className="rounded-lg bg-white border border-gray-100 p-4 font-medium text-salesforce-blue hover:underline">
            Salesforce certification cost guide
          </Link>
          <Link href="/salesforce-certification-passing-score" className="rounded-lg bg-white border border-gray-100 p-4 font-medium text-salesforce-blue hover:underline">
            Salesforce passing score guide
          </Link>
          <Link href="/salesforce-certification-validity" className="rounded-lg bg-white border border-gray-100 p-4 font-medium text-salesforce-blue hover:underline">
            Certification validity and maintenance
          </Link>
          <Link href="/certifications" className="rounded-lg bg-white border border-gray-100 p-4 font-medium text-salesforce-blue hover:underline">
            All certification pages
          </Link>
        </div>
      </section>
    </div>
  )
}
