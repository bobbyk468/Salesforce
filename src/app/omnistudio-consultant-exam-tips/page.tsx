import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'omnistudio-consultant'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce OmniStudio Consultant exam tips for ${RELEASE_CURRENT}: solution design, FlexCards, OmniScripts, implementation strategy.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/omnistudio-consultant-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/omnistudio-consultant-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `OmniStudio Consultant exam tips ${RELEASE_CURRENT}, how to pass OmniStudio Consultant, Salesforce OmniStudio consulting certification, Vlocity consultant exam tips`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'OmniStudio Consultant Exam Tips', url: '/omnistudio-consultant-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Salesforce OmniStudio Consultant exam format?',
    answer: 'The Salesforce OmniStudio Consultant exam has 60 multiple-choice questions, a 105-minute time limit, a 65% passing score, and a $200 fee ($100 retake). It tests the ability to design and implement OmniStudio solutions: requirements analysis, tool selection, FlexCards, OmniScripts, and Integration Procedures.',
  },
  {
    question: 'What is the difference between the OmniStudio Consultant and Developer exams?',
    answer: 'The OmniStudio Developer exam tests hands-on technical configuration of OmniStudio components (how to build them). The OmniStudio Consultant exam tests solution design and tool selection (which tool to use for which business requirement). Consultants must understand when to use FlexCards vs. OmniScripts vs. Integration Procedures for different business scenarios.',
  },
  {
    question: 'What are the highest-weight OmniStudio Consultant exam sections?',
    answer: 'Solution Design (30%) and OmniScript Implementation (25%) together account for 55% of the exam. Mapping client requirements to the correct OmniStudio tool, designing guided interaction flows, and recommending the appropriate data retrieval approach are the most heavily tested skills.',
  },
  {
    question: 'What industry knowledge helps with OmniStudio Consultant?',
    answer: 'OmniStudio is primarily used in industries like Financial Services Cloud, Health Cloud, Energy and Utilities, and Communications Cloud. Understanding common use cases in these industries — guided onboarding, case intake flows, financial product configuration — helps contextualise the scenario questions on this exam.',
  },
  {
    question: 'What concepts do most OmniStudio Consultant candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the OmniStudio Consultant exam are: (1) OmniScript vs FlexCard — Process vs Display; (2) DataRaptor Load vs DataRaptor Transform vs DataRaptor Turbo Extract; (3) Integration Procedures — Server-Side, Invocable by OmniScript or API. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('omnistudio-consultant-exam-tips'),
]

export default function OmniStudioConsultantExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/omnistudio-consultant-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce OmniStudio Consultant Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The OmniStudio Consultant exam tests your ability to design OmniStudio solutions for client requirements.
          These tips focus on solution design, tool selection between FlexCards, OmniScripts, and Integration
          Procedures, and the implementation strategy questions that define this exam.
        </p>
      </header>

      <ContentPageAuthor />

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Exam At a Glance</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">60</p>
            <p className="text-xs text-gray-600 mt-0.5">Questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">105 min</p>
            <p className="text-xs text-gray-600 mt-0.5">Time Limit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">65%</p>
            <p className="text-xs text-gray-600 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$200</p>
            <p className="text-xs text-gray-600 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What OmniStudio Consultant Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Solution design and tool selection</strong> — Analysing client requirements and determining the right OmniStudio component: FlexCard for contextual data display, OmniScript for guided user interactions, Integration Procedure for server-side orchestration, and DataRaptor for Salesforce data access.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>OmniScript implementation strategy</strong> — Designing multi-step guided flows: step branching logic, reusable sub-script patterns, validation strategies, and how OmniScripts call back-end Integration Procedures to retrieve and save data.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Integration and data design</strong> — Designing Integration Procedures for complex data scenarios, choosing between DataRaptor types for different data retrieval patterns, and understanding how external system calls fit into an OmniStudio solution.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Solution Design</span>
            <span className="font-bold text-salesforce-blue ml-4">30%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">OmniScript Implementation</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Integration and Data Design</span>
            <span className="font-bold text-salesforce-blue ml-4">22%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">FlexCards and Display Design</span>
            <span className="font-bold text-salesforce-blue ml-4">15%</span>
          </div>
          <p className="text-xs text-gray-600 pt-1">Solution Design + OmniScript + Integration = 77%. Knowing when and why to use each tool is as important as knowing how.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach OmniStudio Consultant Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a business requirement and ask which OmniStudio tool or design approach satisfies it.
          The correct answer is always the most appropriate native OmniStudio approach — not custom LWC development
          or standard Salesforce automation when OmniStudio tools apply.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For tool selection: FlexCard = display data contextually on a record page (no user input). OmniScript = step-by-step guided process with user input and decision branching. Integration Procedure = server-side logic with no UI. DataRaptor = direct Salesforce read/write. Memorise these distinctions.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For multi-step flow questions: OmniScript steps can branch based on user input. Reusable sub-scripts can be embedded inside parent OmniScripts. When a requirement says &apos;reuse this interaction in multiple processes&apos;, the answer is a sub-OmniScript — not duplicating the steps in each parent script.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For data retrieval questions: use DataRaptor Extract for simple Salesforce reads. Use Integration Procedure with DataRaptor Extract action for complex reads that aggregate data. Use Integration Procedure with HTTP Action for external REST API calls. The question will describe the data source — match it to the correct tool.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          The OmniStudio Consultant exam rewards solution design thinking. Candidates who have configured
          OmniStudio components and understand the &apos;why&apos; behind each tool&apos;s design perform better
          than those who only know the &apos;how&apos;. Pair technical knowledge with requirements analysis practice.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most OmniStudio Consultant Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. OmniScript vs FlexCard — Process vs Display</p>
            <p className="text-sm text-gray-700">OmniScripts orchestrate guided, multi-step processes (wizards, intake forms, service interactions) with conditional branching and data operations. FlexCards display contextual summary information about a record in a compact card format — they are read-oriented, not process-oriented. Candidates use OmniScripts to display record summaries — the exam expects FlexCards for at-a-glance display and OmniScripts for interactive workflows.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. DataRaptor Load vs DataRaptor Transform vs DataRaptor Turbo Extract</p>
            <p className="text-sm text-gray-700">DataRaptor Load writes data to Salesforce objects (DML). DataRaptor Transform reshapes data between JSON structures without touching Salesforce records. DataRaptor Turbo Extract reads Salesforce data quickly using bulk SOQL. Candidates use DataRaptor Load for data transformations — the exam expects Transform for reshaping payloads and Load only when writing to Salesforce objects.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Integration Procedures — Server-Side, Invocable by OmniScript or API</p>
            <p className="text-sm text-gray-700">Integration Procedures run server-side (no browser round-trip) and can call external APIs, DataRaptors, and Apex. OmniScripts can invoke them via Remote Action. They can also be called directly via REST API. Candidates design all external API calls inside OmniScript client steps — the exam expects Integration Procedures for server-side orchestration to reduce browser-to-server trips.</p>
          </div>
        </div>
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
          <Link href="/omnistudio-developer-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">OmniStudio Developer Exam Tips</span>
          </Link>
          <Link href="/omnistudio-developer-vs-consultant" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">OmniStudio Developer vs Consultant</span>
          </Link>
          <Link href="/service-cloud-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Service Cloud Consultant Exam Tips</span>
          </Link>
          <Link href="/consultant-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Consultant Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start OmniStudio Consultant Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/omnistudio-consultant" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            OmniStudio Consultant Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/omnistudio-developer-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            OmniStudio Developer Tips
          </Link>
          <Link href="/consultant-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Consultant Certification Path
          </Link>
        </div>
        <p className="text-xs text-gray-600 mt-4">
          After this exam, consider <Link href="/certifications/sales-cloud" className="text-salesforce-blue underline">Sales Cloud Consultant</Link> or <Link href="/certifications/service-cloud" className="text-salesforce-blue underline">Service Cloud Consultant</Link> next.
        </p>
      </section>
    </div>
  )
}