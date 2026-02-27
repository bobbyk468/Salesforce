import Link from 'next/link'
import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import CertificationCard from '@/components/CertificationCard'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageIntro from '@/components/CertPageIntro'
import CertPageCta from '@/components/CertPageCta'
import ExamLogisticsSection from '@/components/ExamLogisticsSection'
import ExamFeesSection from '@/components/ExamFeesSection'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, getPracticeQuestionsIntro, slugToDisplayName } from '@/lib/cert-seo-data'
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

const slug = 'agentforce-specialist'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is the primary responsibility of an Agentforce Specialist?",
    options: [
      "Developing Apex code for agents",
      "Managing and optimizing Agentforce with deep platform and Agentforce knowledge",
      "Designing marketing campaigns",
      "Configuring CPQ products"
    ],
    correctAnswer: 1,
    explanation: "Certified Agentforce Specialists manage and optimize Agentforce and have deep understanding of both Salesforce platform configuration and Agentforce capabilities."
  },
  {
    question: "What is a Topic in Agentforce?",
    options: [
      "A Salesforce report category used to group related dashboards",
      "A defined area of expertise that tells an agent when and how to handle a specific type of customer request, along with the actions available for that topic",
      "A Flow element that triggers when a record is created",
      "A permission set group that controls agent access to Salesforce objects"
    ],
    correctAnswer: 1,
    explanation: "Topics define the agent's scope — each topic specifies the instructions, tone, and available actions for a particular type of request such as order management or billing enquiries.",
  },
  {
    question: "What is an Agent Action in Agentforce?",
    options: [
      "A page layout configuration for the Agent Console",
      "A discrete task the agent can perform — such as running a Flow, calling an Apex method, invoking an external API, or generating content from a Prompt Template",
      "An automated email triggered when a case is escalated",
      "A custom Lightning Web Component displayed in the agent chat window"
    ],
    correctAnswer: 1,
    explanation: "Agent Actions are the executable steps available within a topic. Supported action types include Flows, Apex, external services, prompt templates, and standard Salesforce actions.",
  },
  {
    question: "Agentforce integrates with which Salesforce capability for unified customer data context?",
    options: [
      "Marketing Cloud Journeys",
      "Data Cloud",
      "Commerce Cloud product catalog",
      "Slack channels"
    ],
    correctAnswer: 1,
    explanation: "Data Cloud provides unified customer profiles that Agentforce can query to ground agent responses with accurate, real-time customer context.",
  },
  {
    question: "What is the Einstein Trust Layer and why is it important for Agentforce?",
    options: [
      "A Salesforce reporting framework that tracks agent performance KPIs",
      "A security framework that masks PII before sending prompts to the LLM, enforces zero data retention, and provides audit logs of all AI interactions",
      "An approval process that requires human sign-off on every agent response before delivery",
      "A custom Flow that validates agent outputs against a compliance rule set"
    ],
    correctAnswer: 1,
    explanation: "The Einstein Trust Layer ensures that customer data is protected when Agentforce interacts with external LLMs — masking sensitive fields, preventing data retention by model providers, and logging all AI activity for audit.",
  },
  {
    question: "What are Guardrails in an Agentforce agent configuration?",
    options: [
      "Row-level security rules that restrict which records the agent can access",
      "Instructions that define what the agent should never do — for example, never discuss competitor pricing, never make promises about refunds",
      "Rate limits that prevent the agent from sending more than a set number of messages per hour",
      "A/B testing rules that route conversations between different agent versions"
    ],
    correctAnswer: 1,
    explanation: "Guardrails are negative instructions that constrain agent behaviour — preventing it from going off-topic, making unauthorised commitments, or generating harmful content.",
  },
  {
    question: "Which channel can Agentforce agents be deployed to for self-service customer interactions?",
    options: [
      "Only internal Salesforce Service Console",
      "Experience Cloud sites, messaging channels (SMS, WhatsApp), and web chat widgets",
      "Only Slack and email",
      "Only Salesforce mobile app push notifications"
    ],
    correctAnswer: 1,
    explanation: "Agentforce agents can be deployed across multiple channels including Experience Cloud, web chat, and messaging platforms — enabling self-service without needing to reach a human agent.",
  },
  {
    question: "What is the role of Prompt Builder in the Agentforce ecosystem?",
    options: [
      "Building Lightning Record Page layouts for agent workspace components",
      "Creating and managing reusable prompt templates that merge static instructions with dynamic CRM and Data Cloud data for agent actions",
      "Configuring inbound routing rules for Omni-Channel skill-based assignment",
      "Writing Apex test classes for custom agent action methods"
    ],
    correctAnswer: 1,
    explanation: "Prompt Builder enables admins and specialists to create prompt templates that combine instructions with live CRM data — used for field generation, record summaries, sales emails, and agent actions.",
  },
  {
    question: "How does an Agentforce agent know which Topic to apply to an incoming customer message?",
    options: [
      "It uses the case category field to match the record type",
      "It uses a large language model to classify the customer's intent and match it to the most relevant Topic based on the topic's description and scope",
      "It requires the customer to select a topic from a dropdown menu at the start of the conversation",
      "It assigns topics randomly and escalates if it cannot resolve the request in two turns"
    ],
    correctAnswer: 1,
    explanation: "Agentforce's reasoning engine (the LLM) classifies user intent and selects the most relevant Topic based on the topic descriptions and scope configured by the specialist.",
  },
  {
    question: "What should an Agentforce Specialist do when an agent provides incorrect or off-topic responses?",
    options: [
      "Delete the agent and rebuild it from scratch",
      "Review and refine the Topic instructions, tighten guardrails, improve prompt template grounding, and test with diverse conversation scenarios",
      "Add more Agent Actions to give the agent more options to choose from",
      "Increase the LLM temperature setting to improve response creativity"
    ],
    correctAnswer: 1,
    explanation: "Tuning agent performance requires iterative refinement of topic instructions, guardrails, and prompt templates — alongside testing with real-world conversation variations to identify and fix gaps.",
  },
  {
    question: "Which Agentforce capability allows an agent to hand off a conversation to a human service agent when it cannot resolve the issue?",
    options: [
      "Agent Escalation Flow",
      "The Escalate to Agent standard action, which transfers the conversation and full context to Omni-Channel routing",
      "A Workflow Rule that triggers a Case creation when sentiment is negative",
      "An outbound email notification to the service team's shared inbox"
    ],
    correctAnswer: 1,
    explanation: "Agentforce includes a standard escalation action that hands the conversation — including full transcript and context — to a human agent via Omni-Channel, ensuring seamless transitions.",
  },
  {
    question: "What is the primary exam focus of the Agentforce Specialist certification?",
    options: [
      "Writing Apex classes and LWC components for custom Agentforce integrations",
      "Configuring and optimising Agentforce agents — including topics, actions, prompt templates, guardrails, channels, and Data Cloud grounding",
      "Designing enterprise data architecture for Data Cloud ingestion pipelines",
      "Administering Service Cloud Omni-Channel routing and Einstein Case Classification"
    ],
    correctAnswer: 1,
    explanation: "The Agentforce Specialist exam tests the ability to declaratively configure agents: defining topics and actions, crafting prompt templates, applying guardrails, deploying to channels, and grounding agents with Data Cloud.",
  },
  {
    question: "What is the purpose of Agentforce guardrails?",
    options: ["To improve response creativity", "To define negative constraints — what the agent must never do", "To increase LLM temperature", "To add more data sources"],
    correctAnswer: 1,
    explanation: "Guardrails are negative constraints that prevent the agent from taking certain actions or making certain statements."
  },
  {
    question: "Which action type can an Agentforce agent use to invoke a Flow?",
    options: ["Only Apex", "Flow action — agents can invoke Flows as discrete actions", "Only external APIs", "Only prompt templates"],
    correctAnswer: 1,
    explanation: "Flow is one of the standard action types an agent can use to perform automated tasks."
  },
  {
    question: "When should Data Cloud grounding be enabled for an Agentforce agent?",
    options: ["Never", "When the agent needs access to unified customer profiles and real CRM data for grounded responses", "Only for external channels", "Only for testing"],
    correctAnswer: 1,
    explanation: "Data Cloud grounding provides the agent with unified customer data for accurate, data-backed responses."
  },
]

export default function AgentforceSpecialistPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div data-critical-content className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
        
        {/* Prominent CTA above fold */}
        <CertPageCta slug={slug} certTitle={slugToDisplayName(slug)} />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
            {/* Exam Fees & Registration section */}
            <ExamFeesSection slug={slug} />
            
            <CertificationCard
              slug={slug}
            title={slugToDisplayName(slug)}
            code="Agentforce"
            description="Certified Agentforce Specialists are responsible for managing and optimizing Agentforce and have deep understanding of both Salesforce platform configuration and Agentforce capabilities."
            examDetails={{
              questions: 60,
              passingScore: "~65%",
              duration: "105 min",
              cost: "$200",
            }}
            topics={[
              "Agentforce Configuration",
              "Prompt Builder",
              "AI Agents",
              "Data Cloud Integration",
              "Service Cloud",
              "Conversation Flows",
              "Platform Configuration",
              "Optimization",
              "Best Practices",
              "Troubleshooting"
            ]}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Agentforce Specialist: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Topics and Actions — the Core Configuration Unit</p>
                <p>An agent is built from Topics and Actions. Each Topic defines an area of expertise — including the description (used by the LLM to route requests), instructions, and available actions. Actions are the discrete tasks the agent can perform: Flows, Apex methods, external service calls, prompt templates, or standard actions like escalate to human. Exam questions often present a requirement and ask which action type or topic configuration is correct.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Guardrails and Agent Instructions</p>
                <p>Guardrails are negative constraints — they tell the agent what it must never do (e.g., never discuss pricing changes, never make commitments on behalf of finance). Agent instructions define tone, persona, and scope. Both are critical for safe, on-brand deployment. The exam tests the difference between positive instructions (what to do) and guardrails (what not to do).</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Einstein Trust Layer for Agentforce</p>
                <p>The Einstein Trust Layer protects customer data when Agentforce sends prompts to external LLMs. It masks PII automatically, enforces zero data retention by model providers, and logs all AI activity for audit. This is a compliance-critical concept — the exam tests knowledge of what the Trust Layer does and why it matters in an Agentforce deployment.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Data Cloud Grounding</p>
                <p>Data Cloud provides Agentforce with unified customer profiles — enabling grounded responses based on real customer data. Without Data Cloud, an agent can only access data through explicit actions. With Data Cloud, the agent has broader context available at query time. Know when Data Cloud integration is required vs optional for a given agent scenario.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Channels and Escalation</p>
                <p>Agentforce agents can be deployed across Experience Cloud, web chat, Slack, and messaging channels (SMS, WhatsApp). The Escalate to Agent standard action hands off the conversation — including full transcript — to Omni-Channel routing for a human agent. Know which channels require which configuration steps and when escalation is the appropriate action type.</p>
              </div>
            </div>
          </div>

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
            <p className="text-gray-600 mb-8">{getPracticeQuestionsIntro(sampleQuestions.length)}</p>
            
            {sampleQuestions.map((q, index) => (
              <QuestionCard
                key={index}
                questionNumber={index + 1}
                question={q.question}
                options={q.options}
                correctAnswer={q.correctAnswer}
                explanation={q.explanation}
              />
            ))}
          </div>

                    <FullQuestionBankCta slug={slug} certTitle={slugToDisplayName(slug)} />

          <div id="related-certs">
            <RelatedCertifications currentSlug={slug} />
          </div>

          {/* Agentforce study resources */}
          <section className="mt-8 rounded-xl border border-blue-100 bg-blue-50/40 p-5 sm:p-6" aria-labelledby="agentforce-guides-heading">
            <h2 id="agentforce-guides-heading" className="text-base font-semibold text-gray-900 mb-3">Agentforce Specialist Study Resources</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/agentforce-specialist-exam-tips" className="text-salesforce-blue font-medium hover:underline">
                  Agentforce Specialist Exam Tips →
                </Link>
                <span className="text-gray-600 ml-2">Einstein Trust Layer, Prompt Templates, Agent Topics & Actions, and mock-test benchmark to pass first attempt.</span>
              </li>
              <li>
                <Link href="/certifications/ai-associate" className="text-salesforce-blue font-medium hover:underline">
                  Start with Salesforce AI Associate →
                </Link>
                <span className="text-gray-600 ml-2">Build your AI foundation before Agentforce Specialist. Covers AI concepts, responsible AI, and Einstein capabilities.</span>
              </li>
            </ul>
          </section>

          {/* FAQ section - rendered after H1 for proper SEO structure */}
          <div id="faq">
            <CertPageFaq slug={slug} certTitle={slugToDisplayName(slug)} />
          </div>
        </div>

        {/* Sidebar - Table of Contents */}
        <aside className="lg:col-span-1">
          <CertTableOfContents
            sections={[
              { id: 'exam-prep', title: 'Exam Prep Content' },
              { id: 'key-concepts', title: 'Key Concepts' },
              { id: 'practice-questions', title: 'Practice Questions' },
              { id: 'more-questions', title: 'Get More Questions' },
              { id: 'related-certs', title: 'Related Certifications' },
              { id: 'faq', title: 'Exam FAQs' }]}
          />
        </aside>
      </div>
    </div>
  )
}
