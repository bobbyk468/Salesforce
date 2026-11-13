import Link from '@/components/AppLink'
import { BookOpen, Target } from 'lucide-react'

/**
 * Long-form Agentforce Specialist (AI-201) study-guide content, consolidated
 * November 2026 from the previously separate /agentforce-specialist-study-guide
 * and /agentforce-specialist-exam-tips pages (both 301-redirected here) into
 * one flow: one section breakdown, one study plan, one set of scenario rules.
 *
 * Weightings follow EXAM_WEIGHTAGE['agentforce-specialist'] in
 * src/lib/exam-weightage-data.ts. src/tests/agentforce-mulesoft-facts.test.mjs
 * reads this file and checks the six section names, the 72% pass mark, the
 * official guide link, and the agent data-masking wording.
 */

const EXAM_GUIDE_URL = 'https://help.salesforce.com/s/articleView?id=005298924&language=en_US&type=1'
const MASKING_DOC_URL = 'https://help.salesforce.com/s/articleView?id=ai.agent_trust_data_masking.htm&language=en_US'

const sectionDeepDives: Array<{ name: string; weight: number; body: string }> = [
  {
    name: 'AI Agents',
    weight: 35,
    body: 'How an agent is built from Agent Script, including Canvas View and Script View; managing deterministic behavior with filters, variables, and template expressions; configuring standard and custom topics and actions; connecting agents to channels such as digital experience, email, voice, and Slack; and understanding the security context an agent runs in.',
  },
  {
    name: 'Prompt Engineering',
    weight: 20,
    body: 'Choosing and configuring Prompt Builder template types, access controls (Prompt Template Manager vs Prompt Template User), grounding techniques for a prompt, writing effective prompts, Trust Layer security and privacy features, and managing which models are accessible.',
  },
  {
    name: 'Data 360 Fundamentals',
    weight: 20,
    body: 'Agentforce Data Library concepts, and the core Data 360 pipeline: chunking unstructured content into passages, indexing those passages, and using retrievers to pull the right context into a prompt or agent response.',
  },
  {
    name: 'Testing, Deployment, and Maintenance',
    weight: 10,
    body: 'Testing an agent with Testing Center and understanding how its evaluations work, plus deployment considerations for moving an agent or prompt template from sandbox to production.',
  },
  {
    name: 'Governance and Observability',
    weight: 10,
    body: 'Managing and monitoring agents in production, and reviewing agent analytics to judge and optimize performance over time.',
  },
  {
    name: 'Multi-Agent Orchestration',
    weight: 5,
    body: 'Deciding when a multi-agent architecture is the right call for scalability and control, and understanding open multi-agent protocols such as Model Context Protocol (MCP) and Agent-to-Agent (A2A).',
  },
]

export default function AgentforceSpecialistMergedGuide() {
  return (
    <>
      {/* What each section actually tests */}
      <section id="section-deep-dives" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Agentforce Specialist (AI-201) Exam Sections: Topics and Weightings
        </h2>
        <p className="text-sm text-gray-600 mb-5">
          AI Agents alone is 35% of the outline, and with Prompt Engineering and Data 360 Fundamentals it reaches 75%. Start there, then cover the three smaller sections.
        </p>
        <div className="space-y-5 text-sm text-gray-700">
          {sectionDeepDives.map(({ name, weight, body }) => (
            <div key={name}>
              <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
                {name} ({weight}%)
              </p>
              <p>{body}</p>
            </div>
          ))}
          <p>
            Salesforce documents that pattern-based and field-based data masking is disabled for agents. Review the feature-specific configuration rather than assuming automatic PII masking.
          </p>
        </div>
        <p className="text-sm text-gray-700 mt-5 pt-5 border-t border-gray-100">
          Already have section-level scores from a practice test? Run them through the{' '}
          <Link href="/tools/score-calculator" className="text-salesforce-blue font-medium hover:underline">
            Salesforce Exam Score Calculator
          </Link>{' '}
          to see where you stand against the 72% pass mark.
        </p>
        <p className="text-xs text-gray-600 mt-3">
          Primary sources:{' '}
          <a className="text-salesforce-blue underline" href={EXAM_GUIDE_URL} target="_blank" rel="noreferrer nofollow noopener">
            official exam guide
          </a>{' '}
          ·{' '}
          <a className="text-salesforce-blue underline" href={MASKING_DOC_URL} target="_blank" rel="noreferrer nofollow noopener">
            Agentforce data-masking documentation
          </a>
        </p>
      </section>

      {/* 6-week study plan */}
      <section id="study-plan" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">6-Week Agentforce Specialist Study Plan (AI-201)</h2>
        <p className="text-sm text-gray-600 mb-5">
          Use this six-week plan as a starting point and adjust it to your experience. Hands-on practice is a study option, not a formal exam prerequisite.
        </p>
        <div className="space-y-4 text-sm text-gray-700">
          <p>
            <strong>Week 1 &mdash; Prompt Engineering (20%) and Data 360 Fundamentals (20%):</strong> Review the published objectives and Salesforce documentation. Complete Trailhead&apos;s &ldquo;Agentforce Basics&rdquo; and &ldquo;Einstein Trust Layer&rdquo; modules. Practice: enable Agentforce in a Developer Edition org and explore the Agent Builder interface.
          </p>
          <p>
            <strong>Week 2 &mdash; AI Agents (35%), design:</strong> Study the agent types (Service Agent, SDR Agent, custom), use case selection, topic scope planning, and action selection (Flow vs Apex vs Prompt Template). Practice: design a multi-topic agent for a customer service scenario on paper before building it.
          </p>
          <p>
            <strong>Weeks 3 and 4 &mdash; AI Agents (35%), build:</strong> Build at least two complete agents with multiple topics and action types. For each one, write topic instructions, add a Flow action and a Prompt Template action, configure input and output variables, and set guardrails.
          </p>
          <p>
            <strong>Week 5 &mdash; Testing, Deployment, and Maintenance (10%), Governance and Observability (10%), and Multi-Agent Orchestration (5%):</strong> Practice the Conversation Preview workflow and Testing Center. Deliberately break an agent with wrong action inputs or vague instructions, then diagnose and fix it. Study channel deployment, escalation configuration, and when a multi-agent design is warranted.
          </p>
          <p>
            <strong>Week 6 &mdash; Timed practice:</strong> Take full timed mock exams (60 questions, 105 minutes) and review missed questions against the official objectives. The guide lists a 72% passing score; Salesforce does not publish a mock-score threshold.
          </p>
        </div>
      </section>

      {/* Scenario decision rules */}
      <section id="scenario-rules" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Decision Rules for Agentforce Specialist Scenario Questions</h2>
        <p className="text-sm text-gray-600 mb-5">
          Most questions describe a business need or an agent that misbehaves. Identify which part of the agent the scenario is about before choosing an answer.
        </p>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span>
              <strong>Action type questions:</strong> for data retrieval or updates with no custom code, choose a Flow action. For complex logic, callouts with custom error handling, or limit-sensitive operations, choose an Apex action. For generating a natural-language response from record data, such as summarizing a case, choose a Prompt Template action.
            </span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span>
              <strong>Topic instruction questions:</strong> good instructions are specific and bounded. When a scenario describes an agent responding out of scope, the fix is usually to revise the topic instructions with explicit constraints, not to create a new agent or action.
            </span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span>
              <strong>Trust Layer questions:</strong> capabilities vary by feature and configuration. Salesforce documents that pattern-based and field-based data masking is disabled for agents, so do not assume all PII is automatically masked, and check the documented retention terms for the specific service.
            </span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span>
              <strong>Access questions:</strong> if a user cannot reach an agent feature, check permission sets and feature licensing before org-wide defaults.
            </span>
          </li>
          <li className="flex gap-2">
            <Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />
            <span>
              <strong>Debugging questions:</strong> work top down. First check topic routing (is the right topic selected?), then action invocation (are the inputs populated correctly?), then the action itself (does the Flow or Apex return the expected output?).
            </span>
          </li>
        </ul>
      </section>

      {/* Three concepts to distinguish */}
      <section id="common-mistakes" className="mt-12 rounded-xl border border-amber-100 bg-amber-50 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Three Agentforce Concepts to Distinguish</h2>
        <p className="text-sm text-gray-600 mb-5">
          Use the current Salesforce guide and product documentation to check terminology and configuration details.
        </p>
        <div className="space-y-5 text-sm text-gray-700">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">1. Topics vs. Actions vs. Instructions: What Goes Where</h3>
            <p>Topics define an agent&apos;s scope, instructions guide its behavior within that scope, and actions are the configured capabilities it can invoke, such as a Flow, Apex, or Prompt Template action. Data sources depend on configuration and access controls.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">2. Apex Actions vs. Flow Actions: When to Use Each</h3>
            <p>Apex @InvocableMethod actions suit complex data processing, callouts, or operations not possible in Flow. Auto-launched flows suit standard business logic, data manipulation, and multi-step orchestration. If the requirement is achievable declaratively, use a Flow action.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">3. Data 360 Grounding vs. Standard Object Data Access</h3>
            <p>Agents reach Salesforce object data through the access granted to the agent&apos;s security context. Data 360 grounding needs explicit setup; it is not automatic, and it is not a prerequisite for every agent data path.</p>
          </div>
        </div>
      </section>

      {/* Day-before review list */}
      <section id="day-before" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Top 10 Topics to Review the Day Before</h2>
        <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
          <li>The six objective names and weights in the official guide</li>
          <li>Trust Layer features and their documented configuration, including agent data-masking limits</li>
          <li>Topics vs. actions: topics define scope, actions execute specific tasks</li>
          <li>Three action types: Flow (declarative), Apex (programmatic), Prompt Template (generated text)</li>
          <li>Topic instructions: vague instructions lead to off-topic responses</li>
          <li>Agent Script: Canvas View vs. Script View, variables, and filters</li>
          <li>Data 360 pipeline: chunking, indexing, and retrievers</li>
          <li>Conversation Preview vs. Testing Center: interactive checks vs. batch evaluation</li>
          <li>Sandbox-to-production deployment of agents and prompt templates</li>
          <li>Human escalation, and when MCP or A2A multi-agent designs apply</li>
        </ol>
      </section>
    </>
  )
}
