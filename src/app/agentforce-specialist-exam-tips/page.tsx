import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Agentforce Specialist Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Agentforce Specialist exam tips (${RELEASE_CURRENT}): Einstein Copilot, agent actions, flow automation, and exam topics. Start free now.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/agentforce-specialist-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/agentforce-specialist-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Agentforce Specialist exam tips ${RELEASE_CURRENT}, how to pass Agentforce Specialist, Agentforce Specialist study guide, Salesforce AI certification tips, Einstein Copilot exam prep`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: `Agentforce Specialist Exam Tips`, url: '/agentforce-specialist-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Agentforce Specialist exam format?',
    answer: 'The Salesforce Certified Agentforce Specialist exam has 40 multiple-choice questions, a 70-minute time limit, a 63% passing score, and a $200 fee.',
  },
  {
    question: 'What does the Agentforce Specialist exam cover?',
    answer: 'The exam covers Agentforce agent configuration, AI agent actions, Einstein Copilot customisation, Flow automation integration, and model selection and grounding techniques.',
  },
  {
    question: 'Who should take the Agentforce Specialist certification?',
    answer: 'Salesforce Admins, Architects, and Consultants who work with or configure AI-powered automation. It is most valuable for professionals implementing Agentforce for customer service or sales use cases.',
  },
  {
    question: 'What study resources are available for Agentforce Specialist?',
    answer: 'Salesforce Trailhead, the official exam guide, and Agentforce documentation are the primary resources. Because the cert is new, third-party study materials are limited — focus on hands-on practice in a Salesforce org with Agentforce enabled.',
  },
  {
    question: 'What concepts do most Agentforce Specialist candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the Agentforce Specialist exam are: (1) Topics vs Actions vs Instructions — What Goes Where; (2) Apex Actions vs Flow Actions — When to Use Each; (3) Data Cloud Grounding vs Standard Object Data Access. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
]

export default function AgentforceSpecialistExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/agentforce-specialist-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Agentforce Specialist Exam Tips ({RELEASE_CURRENT}): How to Pass First Attempt
        </h1>
        <p className="text-lg text-gray-600">
          The Salesforce Agentforce Specialist certification validates your ability to configure, optimize, and deploy
          AI agents using Agentforce. This guide covers the exam weightage, key concepts, and the strategic
          preparation approach to pass on your first attempt.
        </p>
      </header>

      <ContentPageAuthor />

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Exam At a Glance</p>
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


      {/* Quick answer */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: Best Way to Pass Agentforce Specialist</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />The four exam sections are equally weighted at 25% each — no section can be skipped.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Master Agent Actions, Topics, and the Einstein Trust Layer first — these appear in scenario questions across all sections.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Practice in a Trailhead Playground using Agentforce and Agent Builder before sitting the exam. Hands-on experience separates passers from retakers.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Passing score is ~65%. Target 75%+ on mocks before booking. Exam is 60 questions in 105 minutes.</li>
        </ul>
      </section>

      {/* Exam weightage */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Agentforce Specialist Exam Weightage</h2>
        <p className="text-sm text-gray-600 mb-4">
          All four sections contribute equally. A weakness in any one area significantly impacts your score.
        </p>
        <div className="space-y-3">
          {[
            { section: 'Agentforce Configuration', weight: 25, note: 'Agent Builder, Agent Types, Topics, Actions, testing agents' },
            { section: 'Platform and Security', weight: 25, note: 'Einstein Trust Layer, data masking, audit trail, permissions, org security' },
            { section: 'Agent Capabilities and Optimization', weight: 25, note: 'Prompt Templates, Instructions, response tuning, feedback loops, handoff to humans' },
            { section: 'Integration and Best Practices', weight: 25, note: 'External actions, API integrations, Flow integration, deployment considerations' },
          ].map(({ section, weight, note }) => (
            <div key={section}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-800">{section}</span>
                <span className="text-salesforce-blue font-semibold">{weight}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mb-1">
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${weight}%` }} />
              </div>
              <p className="text-xs text-gray-500">{note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core concepts */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Core Concepts You Must Know</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <div>
            <p className="font-semibold text-gray-900 mb-1">Agent Builder and Agent Types</p>
            <p>Know the difference between Copilot (end-user-facing conversational assistant) and other agent types. Understand how to configure system prompts, add Topics, and assign Actions to Topics in Agent Builder.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Topics and Actions</p>
            <p>Topics define what an agent can do; Actions are the executable steps within a topic. Actions can be Flows, Apex, Prompt Templates, or API calls. The exam tests when to use each and how to chain them correctly.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Einstein Trust Layer</p>
            <p>The Trust Layer provides data masking before LLM calls, audit logging of all AI interactions, and toxicity filtering. Know what it does and does NOT do — it does not prevent all hallucinations but it does prevent PII leakage to external models.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Prompt Templates</p>
            <p>Prompt Templates let you standardize LLM instructions across the org. Know how to reference merge fields, ground prompts with data, and the difference between flex prompts and sales email prompts. Template versioning and testing in Prompt Builder is commonly tested.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Human Escalation and Handoff</p>
            <p>Agents must gracefully hand off to human agents when out of scope. Know the configurations for escalation conditions and how to route within Omni-Channel. The exam tests both the technical config and the UX best-practice reasoning.</p>
          </div>
        </div>
      </section>

      {/* Study plan */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">3-Week Agentforce Specialist Study Plan</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p><strong>Week 1 — Configuration and Security (50%):</strong> Complete the Agentforce Specialist Superbadge on Trailhead. Build a working agent in a Playground: create topics, assign actions, test conversations. Study Einstein Trust Layer architecture — what flows through it, what gets masked, and how audit logs work. Review org security: profiles, permission sets, and how they govern agent access.</p>
          <p><strong>Week 2 — Capabilities and Integration (50%):</strong> Practice with Prompt Builder — create and test flex prompts with merge fields. Build a Flow-based action and connect it to an Agent Topic. Study external action configuration (API-based actions, named credentials). Review best practices for testing agents and using the test panel in Agent Builder.</p>
          <p><strong>Week 3:</strong> Full timed mock exams (60 Q / 105 min). Focus on scenario questions that combine configuration + security (e.g., &ldquo;a user cannot see the agent — what is the likely permission issue?&rdquo;). Re-test any weak sections. Score 75%+ consistently before booking.</p>
        </div>
      </section>

      {/* Scenario tips */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Handle Agentforce Scenario Questions</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Configuration errors:</strong> When an agent gives wrong answers or cannot complete a task, look at Topics and Actions first. Incorrect topic scope or a missing action is the most common cause.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Security questions:</strong> If a user cannot access an agent feature, check permission sets and the Einstein feature license before checking org-wide defaults. Agentforce uses its own permission layer on top of standard Salesforce security.</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Integration scenarios:</strong> When choosing between a Flow action and an Apex action, default to Flow for declarative requirements. Use Apex only when Flow cannot meet the requirement (complex logic, callouts with custom error handling).</span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Trust Layer questions:</strong> If a question mentions PII leaving the org or compliance requirements, the answer almost always involves confirming Einstein Trust Layer is active and auditing is enabled — not restricting LLM use entirely.</span>
          </li>
        </ul>
      </section>

      {/* Mock benchmark */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="text-sm text-gray-700 mb-2">
          Agentforce Specialist passing score is ~65% (39/60 questions). Use this benchmark before scheduling:
        </p>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks (60 Q / 105 min), one week apart
        </p>
        <p className="text-sm text-gray-700 mt-3">
          This is a newer certification — the question pool is smaller than older exams, so question types repeat more.
          If you are missing questions on Einstein Trust Layer or Prompt Templates consistently, those sections reward
          specific hands-on practice more than additional reading.
        </p>
      </section>

      {/* CTA */}

            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most Agentforce Specialist Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Topics vs Actions vs Instructions — What Goes Where</p>
            <p className="text-sm text-gray-700">Topics define the scope and subject area an agent handles (e.g., Order Status, Returns). Instructions go inside a topic to tell the agent how to behave within that scope. Actions are the specific tasks the agent can perform (call an Apex method, run a Flow, query a Data Cloud segment). Candidates confuse instructions (behaviour guidance) with actions (executable capabilities) — these are distinct and the exam tests the distinction explicitly.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Apex Actions vs Flow Actions — When to Use Each</p>
            <p className="text-sm text-gray-700">Apex @InvocableMethod actions are used when the agent needs complex data processing, callouts, or operations not possible in Flow. Auto-Launched Flows are used for standard business logic, data manipulation, and multi-step orchestration. The exam tests which to recommend given a scenario: if it requires external API calls or complex Apex logic, use Apex; if it is achievable declaratively, use a Flow action.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Data Cloud Grounding vs Standard Object Data Access</p>
            <p className="text-sm text-gray-700">Agentforce agents access Salesforce object data through standard object access grants. Data Cloud grounding (real-time unified customer data) requires explicit Data Cloud setup — it is not automatic. Candidates assume agents automatically access all Salesforce data. Know that Data Cloud connection, permission sets, and segment configuration are required before an agent can ground on unified customer profiles.</p>
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
          <Link href="/ai-associate-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">AI Associate Exam Tips</span>
          </Link>
          <Link href="/adm-201-exam-tips-2026" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">ADM-201 Exam Tips</span>
          </Link>
          <Link href="/data-cloud-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Data Cloud Consultant Exam Tips</span>
          </Link>
          <Link href="/admin-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Admin Certification Path</span>
          </Link>
        </div>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Next Step</h2>
        <p className="text-sm text-gray-700 mb-4">
          Apply these tips with exam-style practice questions and the full Agentforce Specialist study guide:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/certifications/agentforce-specialist"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors"
          >
            Agentforce Specialist Practice Questions
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/certifications/ai-associate"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Start with AI Associate First
          </Link>
          <Link
            href="/certifications/role/administrator"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Browse AI Certification Path
          </Link>
        </div>
      </section>
    </div>
  )
}
