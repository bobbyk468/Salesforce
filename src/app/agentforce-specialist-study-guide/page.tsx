import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight, BookOpen } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_YEAR } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import { buildStudyGuideTitle } from '@/lib/seo-title-helpers'
import ExamTipsCrossLink from '@/components/ExamTipsCrossLink'
import CertInsightBlock from '@/components/CertInsightBlock'
import CredentialSchema from '@/components/CredentialSchema'
import ExamPricingCard from '@/components/ExamPricingCard'
import LastUpdated from '@/components/LastUpdated'





const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'agentforce-specialist'

const pageTitle = buildStudyGuideTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  'Study Agentforce Specialist exam objectives, Agent Builder, topics and actions, testing, and structured practice questions.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/agentforce-specialist-study-guide`,
    languages: { 'en-US': `${siteUrl}/agentforce-specialist-study-guide`, 'x-default': `${siteUrl}/agentforce-specialist-study-guide` },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/agentforce-specialist-study-guide`,
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
  { name: 'Agentforce Specialist', url: '/certifications/agentforce-specialist' },
  { name: 'Agentforce Specialist Study Guide', url: '/agentforce-specialist-study-guide' },
]

const faqItems = [
  {
    question: 'What is the Agentforce Specialist exam format?',
    answer: 'The current Salesforce guide lists 60 multiple-choice questions plus up to five unscored questions, 105 minutes, a 72% passing score, a US$200 registration fee, and a US$100 retake fee (taxes may apply). It lists no prerequisite. It tests Agent Builder configuration, topic and action design, prompt engineering within agents, testing methodologies, and responsible AI deployment.',
  },
  {
    question: 'What exam objectives and weights does Salesforce list?',
    answer: 'The published outline lists Prompt Engineering (20%), Data 360 Fundamentals (20%), AI Agents (35%), Testing, Deployment, and Maintenance (10%), Governance and Observability (10%), and Multi-Agent Orchestration (5%). See the linked official guide for the objectives.',
  },
  {
    question: 'Do I need hands-on Agent Builder experience for the Agentforce Specialist exam?',
    answer: 'Salesforce recommends combining relevant on-the-job experience with self-study; its guide has no prerequisite. Use the official objectives to structure practice with agent configuration, testing, and the other listed areas.',
  },
  {
    question: 'What is the difference between agent topics and agent actions?',
    answer: 'Topics define the scope and context of an agent conversation, what subjects the agent can discuss and how it should behave. Each topic has a name, description, and instructions (the natural language guidance that shapes the agent’s reasoning). Actions are the specific capabilities available within a topic; these are Flows, Apex methods, or Prompt Templates that the agent invokes to retrieve data, run logic, or generate responses. Topics frame the conversation; actions execute specific tasks.',
  },
]

const examSections = [
  { name: 'Prompt Engineering', weight: 20, note: 'Study the prompt-engineering objectives in the current Salesforce exam guide.' },
  { name: 'Data 360 Fundamentals', weight: 20, note: 'Review the Data 360 objectives listed in the exam guide.' },
  { name: 'AI Agents', weight: 35, note: 'Review agent objectives, including configuration and capabilities, as specified by Salesforce.' },
  { name: 'Testing, Deployment, and Maintenance', weight: 10, note: 'Use the published objectives to guide testing and lifecycle review.' },
  { name: 'Governance and Observability', weight: 10, note: 'Review governance and observability objectives in the issuer guide.' },
  { name: 'Multi-Agent Orchestration', weight: 5, note: 'Review the multi-agent orchestration objectives in the issuer guide.' },
]

export default function AgentforceSpecialistStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/agentforce-specialist-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />
      <CredentialSchema
        certSlug="agentforce-specialist"
        certName="Agentforce Specialist"
        description={pageDescription}
        pageUrl="/agentforce-specialist-study-guide"
      />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Study reference · {RELEASE_YEAR}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Agentforce Specialist Study Guide ({RELEASE_YEAR}): Complete Exam Prep
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          The Agentforce Specialist credential validates knowledge of Agentforce configuration and related published objectives.
          It validates your ability to design, build, test, and deploy autonomous AI agents using Salesforce
          Agentforce, including agent configuration, actions, testing, and the published objectives.
          This guide organizes study around the published exam objectives.
        </p>
      </header>

      <ContentPageAuthor />
      <ExamTipsCrossLink examTipsSlug="agentforce-specialist-exam-tips" certName="Agentforce Specialist" />
      <CertInsightBlock certSlug="agentforce-specialist" />
      <ExamPricingCard
        certSlug="agentforce-specialist"
        certName="Agentforce Specialist"
        certPageSlug="agentforce-specialist"
      />
      <p className="text-sm text-gray-600 mb-8">Primary sources: <a className="text-salesforce-blue underline" href="https://help.salesforce.com/s/articleView?id=005298924&language=en_US&type=1" target="_blank" rel="noreferrer">official exam guide</a> · <a className="text-salesforce-blue underline" href="https://help.salesforce.com/s/articleView?id=ai.agent_trust_data_masking.htm&language=en_US" target="_blank" rel="noreferrer">Agentforce data-masking documentation</a></p>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Agentforce Specialist Exam at a Glance</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Questions', value: '60' },
            { label: 'Time Limit', value: '105 min' },
            { label: 'Passing Score', value: '72%' },
            { label: 'Exam Fee', value: '$200' },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-lg bg-gray-50 border border-gray-100 p-3 text-center">
              <p className="text-xl font-bold text-salesforce-blue">{value}</p>
              <p className="text-xs text-gray-600 mt-1">{label}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-600 mt-4">
          60 scored questions plus up to five unscored. Passing score: 72%. Retake fee: US$100 plus applicable taxes. Prerequisite: none; Salesforce recommends relevant experience and self-study.
        </p>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Agentforce Specialist Exam Sections and Weightage</h2>
        <p className="text-sm text-gray-600 mb-4">
          Objective weights below follow the Salesforce exam guide. Use them to organize study; consult the linked guide for the complete objectives.
        </p>
        <div className="space-y-3">
          {examSections.map(({ name, weight, note }) => (
            <div key={name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-800">{name}</span>
                <span className="text-salesforce-blue font-semibold">{weight}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mb-1">
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${weight}%` }} />
              </div>
              <p className="text-xs text-gray-600">{note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What Each Section Actually Tests</h2>
        <div className="space-y-3 text-sm text-gray-700">
          {examSections.map((section) => <p key={section.name}><strong>{section.name} ({section.weight}%):</strong> {section.note}</p>)}
          <p>Salesforce documents that pattern-based and field-based data masking is disabled for agents. Review the feature-specific configuration rather than assuming automatic PII masking.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">6-Week Agentforce Specialist Study Plan</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p><strong>Week 1: Prompt Engineering and Data 360:</strong> Review the corresponding published objectives and Salesforce documentation. Complete Trailhead’s &ldquo;Agentforce Basics&rdquo; and &ldquo;Einstein Trust Layer&rdquo; modules. Practice: enable Agentforce in a Developer Edition org and explore the Agent Builder interface.</p>
          <p><strong>Week 2: AI Agents:</strong> Study the agent types (Service Agent, SDR Agent, custom), use case selection, topic scope planning, and action selection (Flow vs Apex vs Prompt Template). Practice: design on paper a multi-topic agent for a customer service scenario before building it.</p>
          <p><strong>Week 3 &amp; 4: AI Agents (35%):</strong> Build at least 2 complete agents with multiple topics and multiple action types. For each agent: write topic instructions, add a Flow action and a Prompt Template action, configure input/output variables, and set guardrails. Use the issuer objectives to select relevant practice tasks.</p>
          <p><strong>Week 5: Testing, Deployment, Maintenance, Governance, and Observability:</strong> Practice the Conversation Preview workflow, deliberately break an agent (wrong action inputs, vague instructions) and then diagnose and fix the issue. Study channel deployment options and escalation configuration.</p>
          <p><strong>Week 6:</strong> Full timed mock exams (60 Q / 105 min). Review missed questions against the issuer objectives and practice under timed conditions.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Approach Agentforce Specialist Scenario Questions</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Action type selection questions:</strong> If the requirement involves data retrieval or updates and no custom code is needed, a Flow action is correct. If complex logic or governor-limit-sensitive operations are needed, Apex action. If the requirement involves generating a natural language response using record data (e.g., summarising a case), a Prompt Template action is the answer. Match the action type to the requirement’s complexity and output type.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Topic instruction design questions:</strong> Good instructions are specific and bounded. An instruction like &ldquo;Help customers with billing questions only, do not discuss product features&rdquo; is better than &ldquo;Help customers.&rdquo; When a scenario describes an agent responding inappropriately, the fix is almost always to revise the topic instructions to add explicit constraints, not to create a new agent or action.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Trust Layer questions:</strong> Trust Layer capabilities vary by feature and configuration. Salesforce documents that pattern-based and field-based data masking is disabled for agents; do not assume all PII is automatically masked. Review the Salesforce documentation for the specific service retention terms; do not generalize across all services.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Debugging questions:</strong> When an agent gives an incorrect response: first check topic routing (is the correct topic being selected?), then check action invocation (are the action inputs being populated correctly?), then check the action itself (does the Flow or Apex return the expected output?). Debugging follows the top-down order: topic → action → underlying logic.</span>
          </li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Timed Practice</h2>
        <p className="text-sm text-gray-700 mb-2">
          The Salesforce guide lists a 72% passing score; this is not a mock-test benchmark.
        </p>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          Timed practice (105-minute exam window) before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Use timed practice to identify areas for further review; no issuer-endorsed mock-score threshold is specified. Practice configuring and testing agents where your environment permits,
          hands-on practice is a study option, not a formal exam prerequisite.
        </p>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Top 10 Topics to Review the Day Before</h2>
        <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
          <li>Review the six objective names and weights in the official guide linked above.</li>
          <li>Trust Layer features and their documented configuration, including agent data-masking considerations</li>
          <li>Topics vs Actions: topics define scope; actions execute specific tasks</li>
          <li>Three action types: Flow (declarative), Apex (programmatic), Prompt Template (AI-generated text)</li>
          <li>Topic instructions: specificity matters, vague instructions = off-topic responses</li>
          <li>Agent types: Service Agent, SDR Agent, custom, when to use each</li>
          <li>Guardrails: how to prevent agents from taking unauthorised actions</li>
          <li>Conversation Preview: how to test and debug agent conversations in Agent Builder</li>
          <li>Review the deployment and maintenance objectives listed by Salesforce.</li>
          <li>Human escalation: how and when agents hand off to human agents</li>
        </ol>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Practice With Real Exam-Style Questions</h2>
        <p className="text-sm text-gray-700 mb-4">
          Apply this study guide with free Agentforce Specialist practice questions and scenario-based prep:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/agentforce-specialist" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Agentforce Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/agentforce-specialist-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Agentforce Exam Tips
          </Link>
          <Link href="/ai-associate-study-guide" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            AI Associate Study Guide
          </Link>
        </div>
        <p className="text-xs text-gray-600 mt-4">
          <Link href="/agentforce-specialist-vs-ai-associate" className="text-salesforce-blue underline">
            Agentforce Specialist vs AI Associate, which to take first? →
          </Link>
        </p>
      </section>

      
            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">What Comes After This Certification?</h2>
        <p className="text-sm text-gray-700">
          After this certification, consider: <Link href="/certifications/advanced-administrator" className="text-salesforce-blue font-medium hover:underline">Advanced Administrator</Link>, <Link href="/certifications/app-builder" className="text-salesforce-blue font-medium hover:underline">Platform App Builder</Link>, or <Link href="/certifications/sales-cloud" className="text-salesforce-blue font-medium hover:underline">Sales Cloud Consultant</Link>.
        </p>
      </section>

      <DifficultyHeatmap slug="agentforce-specialist" />
      {/* Hub CTA */}
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white mt-10">
        <h2 className="text-2xl font-bold mb-2">Ready to Test Your Knowledge?</h2>
        <p className="text-white mb-6">Try the Agentforce Specialist free practice exam, scored with full explanations.</p>
        <Link
          href="/certifications/agentforce-specialist"
          className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Agentforce Specialist Free Practice Exam &rarr;
        </Link>
      </div>
    </div>
  )
}