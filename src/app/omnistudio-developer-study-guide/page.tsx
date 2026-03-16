import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `OmniStudio Developer Study Guide (${RELEASE_CURRENT})`
const pageDescription = `OmniStudio Developer study guide: 4 sections, DataRaptors, FlexCards, Integration Procedures. $200. Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/omnistudio-developer-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/omnistudio-developer-study-guide`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `salesforce omnistudio developer study guide, omnistudio certification 2026, OmniScript exam prep, DataRaptor FlexCard study guide`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'OmniStudio Developer Study Guide', url: '/omnistudio-developer-study-guide' },
]

const examSections = [
  { name: 'OmniScript', weight: 32, note: 'Building guided user experiences with OmniScript steps (Text Block, Type Ahead, Formula, Navigation Action, Calculation Matrix, Set Values, Response Action). Step groups, conditional visibility, and data JSON manipulation within OmniScript.' },
  { name: 'DataRaptors', weight: 26, note: 'Four DataRaptor types: Extract (read Salesforce data), Load (write to Salesforce), Transform (manipulate JSON without Salesforce), Turbo Extract (fast key-based read). Field mapping, formula functions, and filter conditions.' },
  { name: 'OmniStudio FlexCards', weight: 21, note: 'Building dynamic FlexCards with datasources (DataRaptor, Integration Procedure, SOQL), card states, conditional rendering, flyout panels, and embedded FlexCards. Custom Lightning Web Components inside FlexCards.' },
  { name: 'Integration Procedures', weight: 21, note: 'Orchestrating multi-step server-side logic with Integration Procedure elements: DataRaptor actions, HTTP actions (callouts), Loop actions, Conditional actions, and Set Values. Performance optimisation with parallel execution.' },
]

const faqItems = [
  {
    question: 'What is the Salesforce OmniStudio Developer certification?',
    answer: 'The Salesforce OmniStudio Developer certification validates skills in building guided UI experiences (OmniScript), data components (DataRaptors), cards (FlexCards), and server-side orchestration (Integration Procedures) using Salesforce OmniStudio — the low-code framework used primarily in Salesforce Industries clouds. The exam has 60 questions, 105 minutes, ~65% passing score, and a $200 fee.',
  },
  {
    question: 'Who should take the OmniStudio Developer exam?',
    answer: 'The OmniStudio Developer exam is ideal for developers and technical consultants implementing Salesforce Industries solutions (Health Cloud, Financial Services Cloud, Communications Cloud, Public Sector Solutions, etc.). OmniStudio replaces custom Apex/LWC development in many Industry Cloud use cases, so proficiency is increasingly required on Industry Cloud projects.',
  },
  {
    question: 'What is the difference between OmniScript and Integration Procedure?',
    answer: 'OmniScript is a client-side guided UI framework — it runs in the browser and creates step-by-step forms and guided flows for users. Integration Procedures are server-side logic components — they run on the server and orchestrate data operations (Salesforce reads/writes, external callouts, data transformations). OmniScripts typically call Integration Procedures to fetch or save data.',
  },
  {
    question: 'What are the four DataRaptor types?',
    answer: 'DataRaptor Extract reads data from Salesforce objects and returns JSON. DataRaptor Load writes data to Salesforce objects from JSON. DataRaptor Transform manipulates JSON data without touching Salesforce (pure data transformation). DataRaptor Turbo Extract is a fast, key-based read optimised for simple single-object lookups — faster than Extract but less flexible.',
  },
  {
    question: 'How long should I study for the OmniStudio Developer exam?',
    answer: 'Plan for 6–8 weeks with 10–12 hours per week. Hands-on practice is essential — build real OmniScripts, DataRaptors, FlexCards, and Integration Procedures in a dev org with OmniStudio enabled. The exam is scenario-based, testing which OmniStudio component to use for a given requirement and how to configure it correctly.',
  },
]

export default function OmnistudioDeveloperStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/omnistudio-developer-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      {/* Header */}
      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Study Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce OmniStudio Developer Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Your complete guide to passing the OmniStudio Developer exam — OmniScript, DataRaptors, FlexCards, Integration Procedures, and scenario-based practice.
        </p>
      </div>

      {/* Exam At a Glance */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '60' },
          { label: 'Time Limit', value: '105 min' },
          { label: 'Passing Score', value: '~65%' },
          { label: 'Exam Fee', value: '$200' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Exam Sections */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Exam Sections &amp; Weightings</h2>
        <div className="space-y-4">
          {examSections.map((section) => (
            <div key={section.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-800">{section.name}</span>
                <span className="text-salesforce-blue font-semibold">{section.weight}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${section.weight * 3.1}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What Each Section Tests */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What Each Section Tests</h2>
        <div className="space-y-4">
          {examSections.map((section) => (
            <div key={section.name} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full bg-salesforce-blue/10 text-salesforce-dark text-xs font-bold">{section.weight}%</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{section.name}</h3>
                  <p className="text-sm text-gray-600">{section.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6-Week Study Plan */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">6-Week Study Plan</h2>
        <div className="space-y-3 text-sm">
          {[
            { week: 'Week 1', focus: 'OmniStudio foundations — enable OmniStudio in a dev org, explore App Designer, understand the four core components and when each is used.' },
            { week: 'Week 2', focus: 'DataRaptors — build all four DataRaptor types (Extract, Load, Transform, Turbo Extract). Practice field mapping, formula functions, and filter conditions.' },
            { week: 'Week 3', focus: 'OmniScript — build a multi-step OmniScript using Text Block, Type Ahead, Formula, Set Values, and Navigation Action steps. Practice conditional visibility and data JSON path expressions.' },
            { week: 'Week 4', focus: 'Integration Procedures — build an Integration Procedure with DataRaptor actions, Set Values, Conditional actions, and Loop actions. Test parallel execution for performance.' },
            { week: 'Week 5', focus: 'FlexCards — build FlexCards with DataRaptor and Integration Procedure datasources. Configure card states, conditional rendering, flyout panels, and embedded FlexCards.' },
            { week: 'Week 6', focus: 'Full mock exams. Focus on scenarios: given a requirement, which component should you use? Which DataRaptor type? Which Integration Procedure element? Review weak areas.' },
          ].map((item) => (
            <div key={item.week} className="flex gap-3">
              <span className="flex-shrink-0 font-semibold text-salesforce-blue w-16">{item.week}</span>
              <span className="text-gray-700">{item.focus}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scenario Tips */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Scenario Strategy Tips</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">1.</span><span><strong>Component selection framework:</strong> Needs UI? → OmniScript. Needs to display data on a record page? → FlexCard. Needs server-side data orchestration? → Integration Procedure. Needs to read/write Salesforce data or transform JSON? → DataRaptor.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">2.</span><span><strong>DataRaptor type selection:</strong> Reading multiple related objects? Use Extract. Writing to Salesforce? Use Load. Transforming JSON without Salesforce? Use Transform. Reading a single record by ID for speed? Use Turbo Extract.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">3.</span><span><strong>Integration Procedure execution order:</strong> By default, elements run sequentially. Use the Parallel option on a Loop Block or Group to run multiple actions simultaneously — always test that parallel elements are truly independent before enabling.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">4.</span><span><strong>OmniScript data JSON:</strong> All OmniScript data lives in a single JSON document. Use %node:value% syntax to reference values from other steps. Set Values steps are used to initialise or copy data within the JSON.</span></li>
        </ul>
      </div>

      {/* Mock Benchmark */}
      <div className="bg-salesforce-blue/5 rounded-xl border border-salesforce-blue/20 p-5 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Mock Exam Benchmark</h2>
        <p className="text-sm text-gray-700">Aim for <strong>75%+ on practice exams</strong> before scheduling. OmniScript (32%) is the largest section — make sure you know all major step types and the data JSON model. DataRaptors (26%) are the second biggest focus. Together these two sections account for 58% of the exam.</p>
      </div>

      {/* Top 10 Review */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Top 10 Concepts to Review</h2>
        <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
          <li>The four DataRaptor types and when to use each</li>
          <li>DataRaptor field mapping: source path, target path, formula functions</li>
          <li>OmniScript step types: Text Block, Type Ahead, Formula, Set Values, Navigation Action, Calculation Matrix</li>
          <li>OmniScript conditional visibility using formulas and data JSON values</li>
          <li>Integration Procedure elements: DataRaptor action, HTTP action, Set Values, Conditional, Loop</li>
          <li>Integration Procedure parallel execution and performance optimisation</li>
          <li>FlexCard datasources: DataRaptor, Integration Procedure, SOQL</li>
          <li>FlexCard states (default, active, error) and conditional state rendering</li>
          <li>Flyout panels and embedded FlexCards within a parent FlexCard</li>
          <li>OmniScript data JSON structure and %node:path% reference syntax</li>
        </ol>
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <dl className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
              <dd className="text-sm text-gray-700">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* CTA */}
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Ready to Practice?</h2>
        <p className="text-blue-100 mb-6">Test yourself with free OmniStudio Developer practice questions covering all 4 exam sections.</p>
        <Link
          href="/certifications/omnistudio-developer"
          className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Start Free Practice Questions
        </Link>
      </div>
    </div>
  )
}
