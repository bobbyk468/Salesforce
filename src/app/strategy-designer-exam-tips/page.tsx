import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Strategy Designer Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Strategy Designer exam tips for ${RELEASE_CURRENT}: design thinking, business strategy, value maps, journey design Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/strategy-designer-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/strategy-designer-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Strategy Designer exam tips ${RELEASE_CURRENT}, how to pass Strategy Designer, Salesforce design thinking certification, Strategy Designer exam study guide`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Strategy Designer Exam Tips', url: '/strategy-designer-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Salesforce Strategy Designer exam format?',
    answer: 'The Salesforce Strategy Designer exam has 60 multiple-choice questions, a 105-minute time limit, a 65% passing score, and a $200 fee ($100 retake). It tests design thinking methodologies, business strategy alignment, value mapping, and how to facilitate discovery and design sessions for Salesforce implementations.',
  },
  {
    question: 'What are the highest-weight Strategy Designer exam sections?',
    answer: 'Strategy and Vision (28%) and Design Methods (25%) together account for 53% of the exam. Aligning business strategy with technology solutions, using design thinking frameworks (empathy, define, ideate, prototype, test), creating value maps, and facilitating stakeholder workshops are the most heavily tested skills.',
  },
  {
    question: 'What is the difference between Strategy Designer and UX Designer?',
    answer: 'UX Designer focuses on user experience design: information architecture, wireframing, usability testing, and designing intuitive Salesforce interfaces. Strategy Designer focuses on business strategy and design thinking: aligning solutions to business outcomes, facilitating discovery workshops, and creating strategic frameworks (value maps, ecosystem maps). Both use design thinking but at different levels.',
  },
  {
    question: 'What design thinking frameworks does the Strategy Designer exam test?',
    answer: 'The exam tests the full design thinking process: Empathise (research, user interviews, personas), Define (problem framing, How Might We statements), Ideate (brainstorming, co-creation), Prototype (low-fidelity models), and Test (validation). Additionally, value proposition design, business model canvas, and journey mapping are tested as strategic frameworks.',
  },
]

export default function StrategyDesignerExamTipsPage() {
  const webPageJsonLd = getWebPageJsonLd({ name: pageTitle, description: pageDescription, path: '/strategy-designer-exam-tips', breadcrumbItems })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline: pageTitle, description: pageDescription, path: '/strategy-designer-exam-tips' })
  const faqJsonLd = getFaqPageJsonLd(faqItems)

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Strategy Designer Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Strategy Designer exam tests your ability to apply design thinking and business strategy
          frameworks to Salesforce implementations. These tips focus on design methods, value mapping,
          and stakeholder facilitation that define the highest-weight sections.
        </p>
      </header>

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Exam At a Glance</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">60</p>
            <p className="text-xs text-gray-500 mt-0.5">Questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">105 min</p>
            <p className="text-xs text-gray-500 mt-0.5">Time Limit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">65%</p>
            <p className="text-xs text-gray-500 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$200</p>
            <p className="text-xs text-gray-500 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Strategy Designer Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Strategy and vision</strong> — Aligning Salesforce implementations to business outcomes, identifying key stakeholders and their goals, creating a shared vision for digital transformation, and translating business strategy into technology decisions.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Design thinking methods</strong> — Applying the design thinking process (Empathise, Define, Ideate, Prototype, Test) to CRM and digital transformation projects. User research methods, journey mapping, value proposition design, and co-creation facilitation.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Stakeholder management and change</strong> — Facilitating discovery workshops, creating shared language between business and technology teams, managing executive alignment, and linking design decisions to measurable business outcomes.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Strategy and Vision</span>
            <span className="font-bold text-salesforce-blue ml-4">28%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Design Methods</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Stakeholder Facilitation</span>
            <span className="font-bold text-salesforce-blue ml-4">22%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Measuring Outcomes</span>
            <span className="font-bold text-salesforce-blue ml-4">18%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">Strategy + Design Methods + Facilitation = 75%. This exam rewards practitioners with real discovery and facilitation experience.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Strategy Designer Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a client engagement scenario and ask which design thinking method, facilitation
          approach, or strategic framework is most appropriate. The correct answer is always the most
          structured, validated approach — not ad-hoc or purely technical solutions.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For design phase questions: Empathise = research before designing. Define = frame the problem correctly (How Might We statements). Ideate = generate many solutions without judging. Prototype = build low-fidelity mockups quickly. Test = validate with real users. When asked which phase to apply to a scenario, identify what is needed: understanding, problem definition, generation, or validation.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For value mapping questions: a Value Map connects customer jobs (what customers are trying to do), pains (negative outcomes), and gains (positive outcomes) to the product&apos;s pain relievers and gain creators. When a scenario asks how to demonstrate business value, the answer is a value proposition canvas or value map — not a business case document.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For facilitation questions: design workshops should include diverse stakeholders (business, technology, users). Affinity mapping groups insights from research. Dot voting prioritises ideas democratically. When a workshop has conflicting stakeholder views, the correct next step is co-creation — not making a unilateral recommendation.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Strategy Designer is unique among Salesforce certifications because it tests design thinking and
          business strategy rather than product configuration. Candidates with backgrounds in consulting,
          product management, or human-centred design perform better. Study the IDEO design thinking
          framework and Salesforce&apos;s own design principles alongside the official exam guide.
        </p>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <dl className="space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
              <dd className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: item.answer }} />
            </div>
          ))}
        </dl>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Related Exam Tips</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/ux-designer-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">UX Designer Exam Tips</span>
          </Link>
          <Link href="/business-analyst-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Business Analyst Exam Tips</span>
          </Link>
          <Link href="/business-analyst-vs-strategy-designer" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Business Analyst vs Strategy Designer</span>
          </Link>
          <Link href="/certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Strategy Designer Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/strategy-designer" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Strategy Designer Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/ux-designer-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            UX Designer Exam Tips
          </Link>
          <Link href="/certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            All Certification Paths
          </Link>
        </div>
      </section>
    </div>
  )
}
