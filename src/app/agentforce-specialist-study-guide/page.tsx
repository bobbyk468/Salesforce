import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight, BookOpen } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
import { buildStudyGuideTitle } from '@/lib/seo-title-helpers'
import ExamTipsCrossLink from '@/components/ExamTipsCrossLink'
import CertInsightBlock from '@/components/CertInsightBlock'



const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'agentforce-specialist'

const pageTitle = buildStudyGuideTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Agentforce Specialist study guide: 5 sections, Agent Builder, topics, testing strategies. Pass first attempt Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/agentforce-specialist-study-guide` },
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
    answer: 'The Agentforce Specialist exam has 60 multiple-choice and multiple-select questions, a 105-minute time limit, a 73% passing score, and a $200 fee ($100 retake). It tests Agent Builder configuration, topic and action design, prompt engineering within agents, testing methodologies, and responsible AI deployment.',
  },
  {
    question: 'What are the highest-weight Agentforce Specialist exam sections?',
    answer: 'Agent Building (35%) is the single most important section — it covers Agent Builder hands-on configuration. Agentforce Concepts (17%) and Agent Design (22%) together provide the framework and architecture knowledge. Testing and Debugging (14%) is critical because the exam heavily tests how to validate agent behaviour before deployment.',
  },
  {
    question: 'Do I need hands-on Agent Builder experience for the Agentforce Specialist exam?',
    answer: 'Yes — hands-on experience is essential. The exam tests practical configuration: creating agents in Agent Builder, defining topics with instructions, adding actions (Flows, Apex, Prompt Templates), setting guardrails, and testing conversations. Candidates who study only conceptually consistently fail Agent Building questions. Use a free Salesforce Developer Edition org with Agentforce enabled.',
  },
  {
    question: 'What is the difference between agent topics and agent actions?',
    answer: 'Topics define the scope and context of an agent conversation — what subjects the agent can discuss and how it should behave. Each topic has a name, description, and instructions (the natural language guidance that shapes the agent&apos;s reasoning). Actions are the specific capabilities available within a topic — these are Flows, Apex methods, or Prompt Templates that the agent invokes to retrieve data, run logic, or generate responses. Topics frame the conversation; actions execute specific tasks.',
  },
]

const examSections = [
  { name: 'Agentforce Concepts', weight: 17, note: 'What Agentforce is, the autonomous agent lifecycle, reasoning engine, Trust Layer, Einstein Trust Layer data privacy' },
  { name: 'Agent Design', weight: 22, note: 'Designing agent scope, identifying use cases, selecting agent type (Service Agent, Sales Agent, custom), planning topics and actions' },
  { name: 'Agent Building', weight: 35, note: 'Agent Builder configuration, creating and editing topics, defining agent instructions, adding and configuring actions (Flow, Apex, Prompt Template)' },
  { name: 'Testing and Debugging', weight: 14, note: 'Testing agent conversations in Agent Builder, evaluating response quality, identifying reasoning failures, debugging action invocation errors' },
  { name: 'Deployment and Management', weight: 12, note: 'Deploying agents to channels (Service Cloud, Experience Cloud, embedded), managing agent versions, monitoring agent performance and adoption' },
]

export default function AgentforceSpecialistStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/agentforce-specialist-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Agentforce Specialist Study Guide ({RELEASE_CURRENT}): Complete Exam Prep
        </h1>
        <p className="text-lg text-gray-600">
          The Agentforce Specialist certification is the most in-demand new Salesforce credential of 2026.
          It validates your ability to design, build, test, and deploy autonomous AI agents using Salesforce
          Agentforce — including Agent Builder, topics, actions, guardrails, and the Einstein Trust Layer.
          This guide covers every exam section with the depth you need to pass.
        </p>
      </header>

      <ContentPageAuthor />
      <ExamTipsCrossLink examTipsSlug="agentforce-specialist-exam-tips" certName="Agentforce Specialist" />
      <CertInsightBlock certSlug="agentforce-specialist" />

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Agentforce Specialist Exam at a Glance</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Questions', value: '60' },
            { label: 'Time Limit', value: '105 min' },
            { label: 'Passing Score', value: '73%' },
            { label: 'Exam Fee', value: '$200' },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-lg bg-gray-50 border border-gray-100 p-3 text-center">
              <p className="text-xl font-bold text-salesforce-blue">{value}</p>
              <p className="text-xs text-gray-600 mt-1">{label}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-600 mt-4">
          73% passing score — higher than most Salesforce exams (ADM-201 is 65%). Retake fee: $100. Requires hands-on Agent Builder experience.
        </p>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Agentforce Specialist Exam Sections and Weightage</h2>
        <p className="text-sm text-gray-600 mb-4">
          Agent Building (35%) is the single largest section. Spending the majority of your prep time in Agent Builder is mandatory — not optional.
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
        <div className="space-y-5 text-sm text-gray-700">
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Agentforce Concepts (17%)
            </p>
            <p>This section tests your understanding of how Agentforce agents work autonomously — the reasoning loop (perceive, plan, act, reflect), how the large language model (LLM) interprets user input against topic instructions, and how the Einstein Trust Layer ensures data is not used to train external models. Know the difference between Copilot (assisted, user-driven) and Agentforce agents (autonomous, goal-driven). Also understand the Zero Retention data policy: customer data sent to LLMs through Salesforce is not retained by the external model provider.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Agent Design (22%)
            </p>
            <p>Design questions present a business requirement and ask which agent type, topic structure, or action approach is most appropriate. Know the standard agent types: Service Agent (for customer service use cases), Sales Development Representative (SDR) agent (for outbound sales), and custom agents. For topic design, understand that good topic instructions are specific (defining what the agent should and should not do), and that vague instructions lead to off-topic responses. <strong>Common design mistake:</strong> creating a single topic that tries to do everything — topics should be scoped to a coherent task set.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Agent Building (35%)
            </p>
            <p>The largest section and the one most dependent on hands-on experience. Know how to: (1) create an agent in Agent Builder and set its system prompt / role description, (2) create topics with well-structured instructions that guide agent behaviour, (3) add actions — understand the three action types: Flow actions (declarative), Apex actions (programmatic), and Prompt Template actions (AI-generated responses). For each action, you must define the input/output variables clearly so the agent knows what data to pass. Also know guardrails: topics can be configured to block the agent from taking actions it should not take.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Testing and Debugging (14%)
            </p>
            <p>Testing agents is done through the Conversation Preview panel in Agent Builder — you interact with the agent as a user would and inspect how it reasons through the conversation. Know how to identify: topic misclassification (agent routes to the wrong topic), action invocation failure (agent calls an action with incorrect inputs), and reasoning loops (agent gets stuck). The exam tests your ability to diagnose which layer is failing — the topic instructions, the action configuration, or the underlying Flow/Apex logic.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-salesforce-blue" />
              Deployment and Management (12%)
            </p>
            <p>Agents are deployed to channels: Service Cloud (embedded in the console), Experience Cloud (customer-facing portals), or via the Messaging and Bots framework. Know that agent versions allow you to test changes without impacting the live agent. Monitoring: use the Agent Analytics dashboard to track conversation volume, resolution rates, and escalation rates. Escalation to a human agent is a key feature — know how to configure escalation conditions within topic instructions.</p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">6-Week Agentforce Specialist Study Plan</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p><strong>Week 1 — Concepts &amp; Architecture (17%):</strong> Study the Agentforce reasoning engine, Trust Layer, Zero Retention policy, and how Agentforce differs from Einstein Copilot. Complete Trailhead&apos;s &ldquo;Agentforce Basics&rdquo; and &ldquo;Einstein Trust Layer&rdquo; modules. Practice: enable Agentforce in a Developer Edition org and explore the Agent Builder interface.</p>
          <p><strong>Week 2 — Agent Design Principles (22%):</strong> Study the agent types (Service Agent, SDR Agent, custom), use case selection, topic scope planning, and action selection (Flow vs Apex vs Prompt Template). Practice: design on paper a multi-topic agent for a customer service scenario before building it.</p>
          <p><strong>Week 3 &amp; 4 — Agent Building (35%):</strong> Build at least 2 complete agents with multiple topics and multiple action types. For each agent: write topic instructions, add a Flow action and a Prompt Template action, configure input/output variables, and set guardrails. This is the most time-intensive week and the most critical for passing.</p>
          <p><strong>Week 5 — Testing and Deployment (14% + 12%):</strong> Practice the Conversation Preview workflow — deliberately break an agent (wrong action inputs, vague instructions) and then diagnose and fix the issue. Study channel deployment options and escalation configuration.</p>
          <p><strong>Week 6:</strong> Full timed mock exams (60 Q / 105 min). Target 80%+ before booking — the 73% threshold is high.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Approach Agentforce Specialist Scenario Questions</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Action type selection questions:</strong> If the requirement involves data retrieval or updates and no custom code is needed, a Flow action is correct. If complex logic or governor-limit-sensitive operations are needed, Apex action. If the requirement involves generating a natural language response using record data (e.g., summarising a case), a Prompt Template action is the answer. Match the action type to the requirement&apos;s complexity and output type.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Topic instruction design questions:</strong> Good instructions are specific and bounded. An instruction like &ldquo;Help customers with billing questions only — do not discuss product features&rdquo; is better than &ldquo;Help customers.&rdquo; When a scenario describes an agent responding inappropriately, the fix is almost always to revise the topic instructions to add explicit constraints, not to create a new agent or action.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Trust Layer questions:</strong> The Einstein Trust Layer sits between Salesforce and the external LLM. It: (1) masks sensitive data (PII) before sending to the model, (2) enforces Zero Retention so data is not stored by the provider, (3) uses Audit Trail to log all AI interactions. When a scenario asks how to ensure customer data is not used to train the external model, the answer is the Einstein Trust Layer / Zero Retention policy.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Debugging questions:</strong> When an agent gives an incorrect response: first check topic routing (is the correct topic being selected?), then check action invocation (are the action inputs being populated correctly?), then check the action itself (does the Flow or Apex return the expected output?). Debugging follows the top-down order: topic → action → underlying logic.</span>
          </li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="text-sm text-gray-700 mb-2">
          Agentforce Specialist passing score is 73% — significantly higher than most Salesforce exams.
        </p>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          80%+ on 3 timed full mocks (60 Q / 105 min) before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Set your mock benchmark at 80% (above the 73% passing threshold) because the actual exam includes
          scenario-based questions that are harder than typical practice question banks. Candidates who book
          at exactly 73% mock scores frequently fail. Build at least 2 complete agents before booking —
          there is no substitute for Agent Builder hands-on experience.
        </p>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Top 10 Topics to Review the Day Before</h2>
        <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
          <li>Agentforce reasoning loop: perceive → plan → act → reflect (how agents process conversations)</li>
          <li>Einstein Trust Layer: Zero Retention policy, PII masking, audit logging</li>
          <li>Topics vs Actions: topics define scope; actions execute specific tasks</li>
          <li>Three action types: Flow (declarative), Apex (programmatic), Prompt Template (AI-generated text)</li>
          <li>Topic instructions: specificity matters — vague instructions = off-topic responses</li>
          <li>Agent types: Service Agent, SDR Agent, custom — when to use each</li>
          <li>Guardrails: how to prevent agents from taking unauthorised actions</li>
          <li>Conversation Preview: how to test and debug agent conversations in Agent Builder</li>
          <li>Channel deployment: Service Cloud, Experience Cloud, Messaging</li>
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
            Agentforce Specialist vs AI Associate — which to take first? →
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
        <p className="text-white mb-6">Try the Agentforce Specialist free practice exam — scored with full explanations.</p>
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