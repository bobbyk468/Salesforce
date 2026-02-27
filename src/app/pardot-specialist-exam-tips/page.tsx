import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Pardot Specialist Exam Tips (${RELEASE_CURRENT}): Marketing Automation Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Pardot Specialist exam tips for ${RELEASE_CURRENT}: lead scoring, engagement programs, forms, and scenario strategy to pass first attempt.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/pardot-specialist-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/pardot-specialist-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Pardot Specialist exam tips ${RELEASE_CURRENT}, how to pass Pardot Specialist, Salesforce Marketing Automation certification study guide, Pardot exam first attempt`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Pardot Specialist Exam Tips', url: '/pardot-specialist-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Pardot Specialist exam format?',
    answer: 'The Salesforce Pardot Specialist exam has 60 multiple-choice questions, a 90-minute time limit, a 65% passing score, and a $200 fee. It tests practical knowledge of Pardot marketing automation configuration, lead management, and campaign execution.',
  },
  {
    question: 'What are the highest-weight Pardot Specialist exam sections?',
    answer: 'Lead Management (34%) is the highest-weight section, followed by Email Marketing (19%) and Engagement Studio (17%). Together these three sections account for 70% of the exam. Lead scoring, grading, and nurture program design are the most tested topics.',
  },
  {
    question: 'Is the Pardot Specialist certification hard?',
    answer: 'The Pardot Specialist exam is considered moderately difficult. The 65% passing threshold is standard, but many questions are scenario-based — asking what Pardot feature to use for a specific marketing automation need rather than just what a feature does. Real Pardot implementation experience helps significantly.',
  },
  {
    question: 'What is the difference between Pardot Specialist and Pardot Consultant?',
    answer: 'The Pardot Specialist certification tests execution-level knowledge — configuring forms, automations, email templates, and Engagement Studio programs. The Pardot Consultant exam tests architectural and strategy-level decisions — how to design a full Pardot implementation for a client. Specialist should be completed before Consultant.',
  },
]

export default function PardotSpecialistExamTipsPage() {
  const webPageJsonLd = getWebPageJsonLd({ name: pageTitle, description: pageDescription, path: '/pardot-specialist-exam-tips', breadcrumbItems })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline: pageTitle, description: pageDescription, path: '/pardot-specialist-exam-tips' })
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
          Pardot Specialist Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Pardot Specialist exam tests your ability to configure and execute marketing automation in Salesforce
          Marketing Cloud Account Engagement (Pardot). These tips focus on lead management, Engagement Studio,
          and the scenario-based questions that make up the bulk of the exam.
        </p>
      </header>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Pardot Specialist Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Lead management</strong> — Lead scoring, grading, prospect lifecycle stages, and how Pardot syncs with Salesforce CRM records.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Engagement Studio</strong> — Building nurture programs, setting wait steps, branching rules, and completion actions based on prospect behavior.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Forms and landing pages</strong> — Form handlers, progressive profiling, thank-you page redirects, and conversion tracking configuration.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Lead Management</span>
            <span className="font-bold text-salesforce-blue ml-4">34%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Email Marketing</span>
            <span className="font-bold text-salesforce-blue ml-4">19%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Engagement Studio</span>
            <span className="font-bold text-salesforce-blue ml-4">17%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Pardot Forms, Form Handlers &amp; Landing Pages</span>
            <span className="font-bold text-salesforce-blue ml-4">12%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">Lead Management + Email + Engagement Studio = 70%. These three sections are your highest-ROI study areas.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Pardot Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Most Pardot questions describe a marketing scenario and ask which Pardot feature or configuration solves it.
          The correct answer is always the most native Pardot approach — not custom code or workarounds.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For lead scoring questions: understand the difference between score (implicit behaviour) and grade (explicit fit) — and when to use each to trigger sales alerts.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For Engagement Studio: know when to use a Wait step vs a Rule step vs an Action step, and the order in which Pardot evaluates them.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For Salesforce sync questions: understand that Pardot syncs with the assigned user&apos;s CRM permissions — connector user setup is a common exam topic.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          The 65% threshold sounds achievable, but lead management questions are nuanced — the difference between
          automation rules, segmentation lists, and completion actions trips up many candidates.
          Hands-on practice in a Pardot sandbox is strongly recommended.
        </p>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Pardot Specialist Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/pardot-consultant" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Pardot Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/role/marketing" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            All Marketing Certifications
          </Link>
          <Link href="/marketing-cloud-consultant-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Marketing Cloud Consultant Tips
          </Link>
        </div>
      </section>
    </div>
  )
}
