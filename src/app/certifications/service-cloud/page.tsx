import Link from 'next/link'
import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import CertificationCard from '@/components/CertificationCard'
import CertIntroParagraph from '@/components/CertIntroParagraph'
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

const slug = 'service-cloud'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "A company wants to automatically route cases to agents based on skills and availability. Which feature should be implemented?",
    options: [
      "Case Assignment Rules",
      "Omni-Channel",
      "Workflow Rules",
      "Process Builder"
    ],
    correctAnswer: 1,
    explanation: "Omni-Channel routes work items to agents in real-time based on their skills, availability, and current workload capacity."
  },
  {
    question: "What is the purpose of Service Level Agreements (SLAs) in Service Cloud?",
    options: [
      "To track customer satisfaction",
      "To define response and resolution time targets",
      "To calculate agent productivity",
      "To manage knowledge articles"
    ],
    correctAnswer: 1,
    explanation: "Service Level Agreements (SLAs) define the response and resolution times that your support team commits to for different types of cases."
  },
  {
    question: "Which feature allows customers to find answers to common questions without contacting support?",
    options: [
      "Case Comments",
      "Knowledge Base",
      "Chatter",
      "Email-to-Case"
    ],
    correctAnswer: 1,
    explanation: "Knowledge Base allows you to create and publish articles that customers can search and read to find answers to common questions."
  },
  {
    question: "A company wants to capture customer cases from their website. Which Service Cloud feature should be used?",
    options: [
      "Email-to-Case",
      "Web-to-Case",
      "Live Agent",
      "Social Customer Service"
    ],
    correctAnswer: 1,
    explanation: "Web-to-Case allows you to capture cases from your company's website using a form that creates cases directly in Salesforce."
  },
  {
    question: "What is the benefit of using Macros in Service Cloud?",
    options: [
      "Automated case creation",
      "Batch processing of cases",
      "One-click execution of repetitive tasks",
      "Automated customer notifications"
    ],
    correctAnswer: 2,
    explanation: "Macros allow agents to complete repetitive tasks with a single click, such as sending an email, updating a field, and adding a comment."
  },
  {
    question: "What is the purpose of Entitlements in Service Cloud?",
    options: [
      "To track customer satisfaction",
      "To define service level agreements and track support coverage",
      "To calculate agent productivity",
      "To manage knowledge articles"
    ],
    correctAnswer: 1,
    explanation: "Entitlements define the support coverage a customer receives, including service level agreements (SLAs) and support hours, and can be associated with cases."
  },
  {
    question: "A company wants to route cases to agents based on their expertise in specific products. Which feature should be configured?",
    options: [
      "Case Assignment Rules",
      "Omni-Channel with Skills-Based Routing",
      "Workflow Rules",
      "Process Builder"
    ],
    correctAnswer: 1,
    explanation: "Omni-Channel with Skills-Based Routing routes cases to agents based on their skills, ensuring cases are handled by the most qualified agents."
  },
  {
    question: "Which feature allows customers to submit cases through a community portal?",
    options: [
      "Email-to-Case",
      "Web-to-Case",
      "Community Case Creation",
      "Chatter"
    ],
    correctAnswer: 2,
    explanation: "Community Case Creation allows customers to submit cases directly through Experience Cloud (Community) portals, providing self-service support capabilities."
  },
  {
    question: "What is the benefit of using Case Feed in Service Cloud?",
    options: [
      "Automatic case creation",
      "Collaborative case management with comments, posts, and file attachments",
      "Integration with external systems",
      "Automated case assignment"
    ],
    correctAnswer: 1,
    explanation: "Case Feed provides a collaborative interface where agents can add comments, posts, attach files, and collaborate on resolving cases."
  },
  {
    question: "A company wants to track the time agents spend on cases. Which feature should be used?",
    options: [
      "Case Comments",
      "Case Feed",
      "Case Milestones",
      "Time Tracking"
    ],
    correctAnswer: 2,
    explanation: "Case Milestones track key events in a case lifecycle and can be used with Entitlements to measure performance against SLAs."
  },
  {
    question: "Which feature allows agents to see suggested knowledge articles while working on a case?",
    options: [
      "Knowledge Base",
      "Einstein Article Recommendations",
      "Case Feed",
      "Macros"
    ],
    correctAnswer: 1,
    explanation: "Einstein Article Recommendations use AI to suggest relevant knowledge articles to agents based on the case details, helping them resolve cases faster."
  },
  {
    question: "What is the purpose of Service Contracts in Service Cloud?",
    options: [
      "To track customer satisfaction",
      "To define support coverage and entitlements for customers",
      "To calculate agent productivity",
      "To manage knowledge articles"
    ],
    correctAnswer: 1,
    explanation: "Service Contracts define the support coverage and entitlements for customers, including contract terms, start/end dates, and associated entitlements."
  },
  {
    question: "A company wants to allow customers to chat with support agents in real-time. Which feature should be implemented?",
    options: [
      "Email-to-Case",
      "Web-to-Case",
      "Live Agent Chat",
      "Social Customer Service"
    ],
    correctAnswer: 2,
    explanation: "Live Agent Chat allows customers to chat with support agents in real-time through a chat widget on your website or community portal."
  },
  {
    question: "Which feature allows agents to see all their work items (cases, chats, etc.) in a single interface?",
    options: [
      "Case Feed",
      "Omni-Channel",
      "Service Console",
      "Knowledge Base"
    ],
    correctAnswer: 2,
    explanation: "Service Console provides a unified interface where agents can see all their work items, cases, knowledge articles, and customer information in one place."
  },
  {
    question: "Which feature defines support entitlements and service level agreements (SLAs) for cases?",
    options: ["Case Assignment Rules", "Entitlements and Milestones", "Omni-Channel", "Knowledge Base"],
    correctAnswer: 1,
    explanation: "Entitlements define what support a customer receives; Milestones track SLA timers (e.g., first response, resolution) against those entitlements."
  },
]

export default function ServiceCloudPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div data-critical-content className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
        <CertIntroParagraph slug={slug} />
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
            code="SVC"
            description="The Service Cloud Consultant certification validates your expertise in designing and implementing Service Cloud solutions for customer service operations."
            examDetails={{
              questions: 60,
              passingScore: "67%",
              duration: "105 min",
              cost: "$200",
            }}
            topics={[
              "Service Cloud Solution Design",
              "Case Management",
              "Knowledge Management",
              "Omni-Channel",
              "Service Console",
              "Entitlements & SLAs",
              "Service Analytics",
              "Communities for Service",
              "Field Service",
              "Integration"
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Cloud Consultant: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Case Management: Origins, Assignment, and Escalation</p>
                <p><strong>Web-to-Case</strong> captures cases from website forms. <strong>Email-to-Case</strong> converts inbound emails into cases. <strong>Case Assignment Rules</strong> route cases to users or queues based on criteria. <strong>Escalation Rules</strong> automatically reassign or send alerts when cases breach time thresholds. The exam frequently presents a routing scenario and asks whether to use Assignment Rules, Omni-Channel, or Escalation Rules — know the trigger condition for each: rules are criteria-based, Omni-Channel is real-time workload-based.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Entitlements, Milestones, and Service Contracts</p>
                <p><strong>Entitlements</strong> define the support a customer is contractually entitled to (e.g., 24/7 phone support, 4-hour response). <strong>Entitlement Processes</strong> define milestone timelines within an entitlement period. <strong>Milestones</strong> track specific SLA events — First Response, Resolution — with configurable warning and violation actions. <strong>Service Contracts</strong> aggregate entitlements for a customer or account over a contract period. The exam tests the hierarchy: Contract → Entitlement → Entitlement Process → Milestones.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Omni-Channel: Routing Models and Agent Capacity</p>
                <p><strong>Queue-Based Routing</strong> sends work to a queue and the first available agent picks it up. <strong>Skills-Based Routing</strong> matches cases to agents with the required skill set. <strong>Capacity Models</strong>: Tab-based (each open record counts as one unit), Status-based (agents declare availability by status). Agent <strong>Presence Configurations</strong> define which channels an agent handles and their capacity per channel. The exam tests which routing model and capacity configuration match a given support scenario.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Knowledge Management: Articles, Data Categories, and Case Deflection</p>
                <p><strong>Knowledge Articles</strong> have a lifecycle: Draft → Review → Published → Archived. <strong>Data Category Groups</strong> control which articles different users and customer portal visitors can see — a common exam topic for multi-product or multi-region organisations. <strong>Case Deflection</strong> surfaces suggested articles before a customer submits a case (requires Knowledge enabled on the community/portal). <strong>Einstein Article Recommendations</strong> suggest relevant articles to agents in real-time based on case fields. Know the difference between Article Types (Lightning Knowledge uses one unified type).</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Service Console: Macros, Quick Text, and Einstein Features</p>
                <p>The <strong>Service Console</strong> is a multi-panel app layout for agents — with split view, utility bar, and subtabs for related records. <strong>Macros</strong> execute a sequence of actions with a single click (update a field, send an email, add a note). <strong>Quick Text</strong> inserts pre-approved message snippets into emails or chats. Einstein for Service adds: <strong>Case Classification</strong> (auto-suggests field values), <strong>Reply Recommendations</strong> (suggests chat responses), and <strong>Next Best Action</strong> (recommendation strategies based on Einstein Recommendation Builder).</p>
              </div>
            </div>
          </div>


          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Service Cloud Consultant Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The Service Cloud Consultant exam tests your ability to design and configure a complete service operation. Questions are scenario-based and focus on case routing decisions, Knowledge management, entitlements, and channel strategy.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Case Routing: Which Tool When</p>
                <p>Know all routing options: Assignment Rules (criteria-based), Queues (manual or rules-based), Omni-Channel (capacity-based, real-time), and Einstein Case Routing (AI-driven). Match each to the right complexity level.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Knowledge Management</p>
                <p>Understand the Knowledge data model (articles, data categories, channels), how to link articles to cases, approval processes for publishing, and how Lightning Knowledge differs from Classic Knowledge.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Entitlements &amp; SLAs</p>
                <p>Know how Entitlement Processes define SLA milestones, how Entitlements link to accounts and contacts, and how warning/violation actions trigger when milestones are at risk. Milestone Actions are heavily tested.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Omni-Channel Configuration</p>
                <p>Know the difference between Queue-Based and Skills-Based routing, how to configure service channels and routing configurations, and how to monitor agent capacity with the Omni Supervisor.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Self-Service &amp; Deflection</p>
                <p>Experience Cloud portals, Einstein Bots, and Knowledge self-service reduce case volume. Know how to measure deflection rate and which configuration choices increase self-service success.</p>
              </div>
            </div>
          </div>

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
            <p className="text-gray-600 mb-8">
              {getPracticeQuestionsIntro(sampleQuestions.length, ". Click on an answer to select it, then check your answer to see if you're correct.")}
            </p>

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

          {/* Service Cloud study resources */}
          <section className="mt-8 rounded-xl border border-blue-100 bg-blue-50/40 p-5 sm:p-6" aria-labelledby="svc-guides-heading">
            <h2 id="svc-guides-heading" className="text-base font-semibold text-gray-900 mb-3">Service Cloud Study Resources</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/service-cloud-consultant-exam-tips" className="text-salesforce-blue font-medium hover:underline">
                  Service Cloud Consultant Exam Tips →
                </Link>
                <span className="text-gray-600 ml-2">Case management, Omni-Channel routing, entitlements, and Knowledge — scenario strategy for all 5 exam sections.</span>
              </li>
              <li>
                <Link href="/certifications/role/consultant" className="text-salesforce-blue font-medium hover:underline">
                  Browse Full Consultant Certification Path →
                </Link>
                <span className="text-gray-600 ml-2">Service Cloud, Sales Cloud, Experience Cloud, and more consultant credentials compared.</span>
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
              { id: 'scenario-tips', title: 'How to Pass' },
              { id: 'practice-questions', title: 'Practice Questions' },
              { id: 'more-questions', title: 'Get More Questions' },
              { id: 'related-certs', title: 'Related Certifications' },
              { id: 'faq', title: 'Exam FAQs' },
            ]}
          />
        </aside>
      </div>
    </div>
  )
}
