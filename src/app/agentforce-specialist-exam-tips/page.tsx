import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_YEAR } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import ExamTipsCertLink from '@/components/ExamTipsCertLink'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'
import StudyGuideCrossLink from '@/components/StudyGuideCrossLink'
import ExamPricingCard from '@/components/ExamPricingCard'




const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'agentforce-specialist'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  'Prepare for Agentforce Specialist with current exam objectives, Agent Builder, topics, actions, testing, and focused practice.'

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
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Agentforce Specialist', url: '/certifications/agentforce-specialist' },
  { name: `Agentforce Specialist Exam Tips`, url: '/agentforce-specialist-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Agentforce Specialist exam format?',
    answer: 'The Salesforce Certified Agentforce Specialist exam has 60 multiple-choice questions plus up to five unscored questions, 105 minutes, 72% passing score, US$200 registration and US$100 retake fees (taxes may apply); prerequisite: none.',
  },
  {
    question: 'What does the Agentforce Specialist exam cover?',
    answer: 'The current outline lists Prompt Engineering (20%), Data 360 Fundamentals (20%), AI Agents (35%), Testing, Deployment, and Maintenance (10%), Governance and Observability (10%), and Multi-Agent Orchestration (5%).',
  },
  {
    question: 'Who should take the Agentforce Specialist certification?',
    answer: 'Salesforce Admins, Architects, and Consultants who work with or configure AI-powered automation. It is most valuable for professionals implementing Agentforce for customer service or sales use cases.',
  },
  {
    question: 'What study resources are available for Agentforce Specialist?',
    answer: 'Salesforce Trailhead, the official exam guide, and Agentforce documentation are the primary resources. Use the current Salesforce exam guide and linked product documentation as primary references; hands-on practice is optional preparation.',
  },
  {
    question: 'Which distinctions can I review while studying?',
    answer: 'Use the official exam guide objectives to review agent concepts and distinguish topics, instructions, actions, and configured data sources. This page does not assess question frequency or candidate performance.',
  },
]

export default function AgentforceSpecialistExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/agentforce-specialist-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems}   mainEntityUrl="/agentforce-specialist-study-guide"
      />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Study reference · {RELEASE_YEAR}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Agentforce Specialist Exam Tips ({RELEASE_YEAR})
        </h1>
        <p className="text-lg text-gray-600">
          The Salesforce Agentforce Specialist certification validates your ability to configure, optimize, and deploy
          AI agents using Agentforce. This guide covers the exam weightage, key concepts, and the strategic
          preparation approach aligned to the published issuer objectives.
        </p>
      </header>

      <ContentPageAuthor />

      <ExamTipsCertLink certSlug={slug} />
      <StudyGuideCrossLink studyGuideSlug="agentforce-specialist-study-guide" certName="Agentforce Specialist" />
      <ExamPricingCard
        certSlug="agentforce-specialist"
        certName="Agentforce Specialist"
        certPageSlug="agentforce-specialist"
      />
      <p className="text-sm text-gray-600 mb-8">Primary source: <a className="text-salesforce-blue underline" href="https://help.salesforce.com/s/articleView?id=005298924&language=en_US&type=1" target="_blank" rel="noreferrer">Salesforce Agentforce Specialist Exam Guide</a> · <a className="text-salesforce-blue underline" href="https://help.salesforce.com/s/articleView?id=ai.agent_trust_data_masking.htm&language=en_US" target="_blank" rel="noreferrer">Agentforce data-masking documentation</a></p>


      {/* Quick answer */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: Best Way to Pass Agentforce Specialist</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />The six published objective weights are 20%, 20%, 35%, 10%, 10%, and 5%; review all objectives.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Master Agent Actions, Topics, and the Einstein Trust Layer first, these appear in scenario questions across all sections.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Practice in a Trailhead Playground using Agentforce and Agent Builder before sitting the exam. Hands-on practice can help connect study to configuration tasks.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />The current guide lists 72% passing; it allows 105 minutes for 60 scored and up to five unscored questions.</li>
        </ul>
      </section>

      {/* Exam weightage */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Agentforce Specialist Exam Weightage</h2>
        <p className="text-sm text-gray-600 mb-4">
          The objective names and weights below follow the current Salesforce exam guide.
        </p>
        <div className="space-y-3">
          {[
            { section: 'Prompt Engineering', weight: 20, note: 'Published objective' },
            { section: 'Data 360 Fundamentals', weight: 20, note: 'Published objective' },
            { section: 'AI Agents', weight: 35, note: 'Published objective' },
            { section: 'Testing, Deployment, and Maintenance', weight: 10, note: 'Published objective' },
            { section: 'Governance and Observability', weight: 10, note: 'Published objective' },
            { section: 'Multi-Agent Orchestration', weight: 5, note: 'Published objective' },
          ].map(({ section, weight, note }) => (
            <div key={section}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-800">{section}</span>
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
            <p>Capabilities depend on feature and configuration. Salesforce states that pattern-based and field-based data masking is disabled for agents; do not assume blanket PII masking.</p>
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
          <p><strong>Week 1: Configuration and Security (50%):</strong> Complete the Agentforce Specialist Superbadge on Trailhead. Build a working agent in a Playground: create topics, assign actions, test conversations. Review documented Trust Layer capabilities and configuration, including the agent masking limitation. Review org security: profiles, permission sets, and how they govern agent access.</p>
          <p><strong>Week 2: Capabilities and Integration (50%):</strong> Practice with Prompt Builder, create and test flex prompts with merge fields. Build a Flow-based action and connect it to an Agent Topic. Study external action configuration (API-based actions, named credentials). Review best practices for testing agents and using the test panel in Agent Builder.</p>
          <p><strong>Week 3:</strong> Full timed mock exams (60 Q / 105 min). Focus on scenario questions that combine configuration + security (e.g., &ldquo;a user cannot see the agent; what is the likely permission issue?&rdquo;). Re-test any weak sections. Review errors against the official objectives.</p>
        </div>
      </section>

      {/* Scenario tips */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Handle Agentforce Scenario Questions</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span><strong>Configuration errors:</strong> When an agent gives wrong answers or cannot complete a task, look at Topics and Actions first. Incorrect topic scope or a missing action is the one area to inspect; also check the relevant configuration and documentation.</span>
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
            <span><strong>Trust Layer questions:</strong> If a question mentions PII leaving the org or compliance requirements, the answer almost always involves confirming Einstein Trust Layer is active and auditing is enabled, not restricting LLM use entirely.</span>
          </li>
        </ul>
      </section>

      {/* Mock benchmark */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Timed Practice</h2>
        <p className="text-sm text-gray-700 mb-2">
          Use timed practice to identify objectives for additional study; no issuer-endorsed mock-score benchmark is specified.
        </p>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          Use timed practice; review missed objectives
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Practice questions are study aids, not evidence of live exam frequency. Review official objectives and the linked Salesforce documentation.
        </p>
      </section>

      {/* CTA */}

            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Three Agentforce concepts to distinguish</h2>
        <p className="text-sm text-gray-600 mb-5">Use the current Salesforce guide and product documentation to check terminology and configuration details.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Topics vs Actions vs Instructions: What Goes Where</p>
            <p className="text-sm text-gray-700">Topics define an agent’s scope, instructions guide behavior, and actions are configured capabilities such as Flow or Apex actions. Data sources depend on configuration and access controls. Instructions provide behavior guidance; actions are configured capabilities. Consult the issuer objectives for exam scope.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Apex Actions vs Flow Actions: When to Use Each</p>
            <p className="text-sm text-gray-700">Apex @InvocableMethod actions are used when the agent needs complex data processing, callouts, or operations not possible in Flow. Auto-Launched Flows are used for standard business logic, data manipulation, and multi-step orchestration. The exam tests which to recommend given a scenario: if it requires external API calls or complex Apex logic, use Apex; if it is achievable declaratively. Use a Flow action.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Data Cloud Grounding vs Standard Object Data Access</p>
            <p className="text-sm text-gray-700">Agentforce agents access Salesforce object data through standard object access grants. Data Cloud grounding (real-time unified customer data) requires explicit Data Cloud setup; it is not automatic. Agent data sources depend on configured capabilities and access controls; Data 360 is not a universal prerequisite. See Salesforce documentation for supported sources and permissions.</p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <p className="font-semibold text-gray-900 mb-1">{item.question}</p>
              <div className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: item.answer }} />
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Related Exam Tips</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/ai-associate-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">AI Associate Exam Tips</span>
          </Link>
          <Link href="/adm-201-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">ADM-201 Exam Tips</span>
          </Link>
          <Link href="/data-360-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
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
        <p className="text-xs text-gray-600 mt-4">
          After this exam, consider{' '}
          <Link href="/certifications/advanced-administrator" className="text-salesforce-dark underline">
            Advanced Administrator
          </Link>{' '}
          or{' '}
          <Link href="/certifications/app-builder" className="text-salesforce-dark underline">
            Platform App Builder
          </Link>{' '}
          next.
        </p>
      </section>
    </div>
  )
}