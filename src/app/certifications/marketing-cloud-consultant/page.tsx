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

const slug = 'marketing-cloud-consultant'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "Which Marketing Cloud tool is best suited for creating multi-channel customer journeys?",
    options: [
      "Email Studio",
      "Journey Builder",
      "Automation Studio",
      "Content Builder"
    ],
    correctAnswer: 1,
    explanation: "Journey Builder is designed specifically for creating multi-channel customer journeys with branching logic, wait times, and personalized touchpoints."
  },
  {
    question: "What is the purpose of Contact Builder in Marketing Cloud?",
    options: [
      "To create email templates",
      "To manage and link customer data across data extensions",
      "To schedule email sends",
      "To track customer engagement"
    ],
    correctAnswer: 1,
    explanation: "Contact Builder provides a unified view of customer data by linking data extensions and creating relationships between different data sources."
  },
  {
    question: "Which feature should be used to personalize content at scale across multiple channels?",
    options: [
      "Dynamic Content",
      "Content Builder",
      "AMPscript",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Dynamic Content, Content Builder, and AMPscript all work together to enable content personalization across channels in Marketing Cloud."
  },
  {
    question: "What is the recommended approach for integrating Marketing Cloud with Salesforce CRM?",
    options: [
      "API Integration",
      "Marketing Cloud Connect",
      "Data Import",
      "FTP Sync"
    ],
    correctAnswer: 1,
    explanation: "Marketing Cloud Connect is the official integration that syncs subscribers, contacts, and data between Marketing Cloud and Salesforce CRM."
  },
  {
    question: "Which Einstein feature predicts the best time to send emails to individual subscribers?",
    options: [
      "Einstein Engagement Scoring",
      "Einstein Send Time Optimization",
      "Einstein Copy Insights",
      "Einstein Content Selection"
    ],
    correctAnswer: 1,
    explanation: "Einstein Send Time Optimization analyzes subscriber engagement patterns and predicts the optimal time to send emails to each individual."
  },
  {
    question: "A consultant needs to segment subscribers based on their engagement history over the past 6 months. Which tool is most appropriate for this task?",
    options: [
      "SQL Query Activity in Automation Studio",
      "Data Filter in Email Studio",
      "Einstein Engagement Scoring",
      "Contact Builder"
    ],
    correctAnswer: 0,
    explanation: "An SQL Query Activity is the most powerful tool for creating complex segments based on data from multiple data extensions, such as engagement data stored in data views."
  },
  {
    question: "What is the primary function of a Sender Authentication Package (SAP)?",
    options: [
      "To encrypt email sends",
      "To authenticate users logging into Marketing Cloud",
      "To improve email deliverability and brand reputation by dedicating an IP address and domain",
      "To provide pre-built email templates"
    ],
    correctAnswer: 2,
    explanation: "An SAP is crucial for deliverability. It includes a dedicated IP address, a custom sending domain, and link/image wrapping, all of which help build a positive sender reputation with ISPs."
  },
  {
    question: "In Journey Builder, what is the function of a 'Decision Split' activity?",
    options: [
      "To send an email to a random sample of a population",
      "To divide a journey's audience into multiple paths based on subscriber attributes or engagement data",
      "To wait for a specific amount of time before proceeding",
      "To update a contact's data in a data extension"
    ],
    correctAnswer: 1,
    explanation: "A Decision Split allows you to create different paths in a journey. For example, you can send one message to contacts who opened a previous email and a different message to those who did not."
  },
  {
    question: "Which data model is recommended for most Marketing Cloud implementations?",
    options: [
      "Using only lists",
      "Using only data extensions",
      "A hybrid model of lists and data extensions",
      "Using a single data extension for all subscribers"
    ],
    correctAnswer: 1,
    explanation: "Data extensions are highly recommended over lists because they are more scalable, flexible, and allow for storing relational data. While lists still exist, data extensions are the standard for modern implementations."
  },
  {
    question: "What is the difference between Automation Studio and Journey Builder?",
    options: [
      "Automation Studio is for email sends only, while Journey Builder is for multi-channel journeys",
      "Automation Studio is a data management tool, while Journey Builder is a marketing orchestration tool",
      "There is no difference",
      "Automation Studio is for real-time triggers, while Journey Builder is for scheduled automations"
    ],
    correctAnswer: 1,
    explanation: "Automation Studio is primarily used for data-related tasks like SQL queries, imports, and extracts. Journey Builder is used for orchestrating customer journeys across multiple channels based on customer behavior."
  },
  {
    question: "A company wants to send an email to a subscriber as soon as they submit a form on their website. Which tool should be used?",
    options: [
        "A scheduled automation in Automation Studio",
        "A triggered send using the API",
        "A/B Testing",
        "An Email Send Flow in Email Studio"
    ],
    correctAnswer: 1,
    explanation: "Triggered sends are designed for real-time, individual email sends that are initiated by an external event, such as a form submission. This is typically done via an API call."
  },
  {
    question: "How can you ensure that commercial emails comply with CAN-SPAM regulations within Marketing Cloud?",
    options: [
        "By always including an image in the email",
        "By using a 'Transactional' send classification",
        "By ensuring every commercial email contains an unsubscribe link, a physical mailing address, and a clear subject line",
        "By sending emails only between 9 AM and 5 PM"
    ],
    correctAnswer: 2,
    explanation: "CAN-SPAM requires that all commercial emails provide a clear way for subscribers to opt-out, include the sender's physical address, and not have misleading subject lines. Marketing Cloud provides tools to manage this, such as standard footers."
  },
  {
    question: "What is the primary purpose of Reply Mail Management (RMM)?",
    options: [
        "To automatically send a response to every email reply",
        "To manage and process automatic replies and out-of-office notifications to keep the sender's list clean",
        "To forward all email replies to a single inbox",
        "To delete all replies to a sent email"
    ],
    correctAnswer: 1,
    explanation: "RMM handles replies to your marketing emails, automatically processing things like out-of-office messages and unsubscribe requests made by replying, which helps maintain list hygiene."
  },
  {
    question: "A consultant wants to create a journey that sends a follow-up email to subscribers who clicked a link in a previous email, but not to those who didn't. Which Journey Builder activity should be used?",
    options: [
        "Random Split",
        "Engagement Split",
        "Decision Split based on attribute",
        "Einstein STO"
    ],
    correctAnswer: 1,
    explanation: "An Engagement Split is specifically designed to route contacts down a path based on their engagement with a previous email in the journey, such as an open or a click."
  },
  {
    question: "When should a consultant recommend Journey Builder over Automation Studio?",
    options: ["For all use cases", "For 1:1 customer journeys that react to behavior; Automation Studio for scheduled ETL and batch activities", "Only for batch emails", "Only for data imports"],
    correctAnswer: 1,
    explanation: "Journey Builder is for behavior-triggered, 1:1 journeys. Automation Studio is for scheduled ETL, data management, and batch activities."
  },
]

export default function MarketingCloudConsultantPage() {
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
            code="MC Consultant"
            description="The Marketing Cloud Consultant certification validates your expertise in implementing Marketing Cloud solutions for digital marketing campaigns."
            examDetails={{
              questions: 60,
              passingScore: "67%",
              duration: "105 min",
              cost: "$200",
            }}
            topics={[
              "Discovery & Solution Design",
              "Email Studio",
              "Journey Builder",
              "Automation Studio",
              "Content Builder",
              "Contact Builder",
              "Analytics & Reporting",
              "Data Management",
              "Salesforce Integration",
              "Best Practices"
            ]}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Concepts for the Marketing Cloud Consultant Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The Marketing Cloud Consultant exam tests your ability to design and implement solutions. It's not just about knowing features, but also about applying them to business scenarios.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Discovery & Solution Architecture</p>
                <p>This involves gathering business requirements and translating them into a technical solution. You need to understand how to design data models, recommend the right Marketing Cloud products, and think about long-term scalability. Understanding Business Units and when to use them is critical.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Data Design and Management</p>
                <p>Contact Builder is the heart of Marketing Cloud. You must understand how to link data extensions to create a single view of the customer. Be comfortable with the difference between Lists and Data Extensions, and why Data Extensions are preferred. Basic SQL knowledge for queries in Automation Studio is also tested.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Automation Tools: Journey Builder vs. Automation Studio</p>
                <p>Know the difference: Journey Builder is for 1:1 customer journeys that react to customer behavior. Automation Studio is for ETL (Extract, Transform, Load) and other data management tasks on a schedule. You'll be given scenarios and asked to choose the right tool.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Marketing Cloud Connect</p>
                <p>This is the integration between Marketing Cloud and Sales/Service Cloud. You need to know how to configure it, what data is synchronized, and how to troubleshoot common issues. Understanding how to use Salesforce data to segment and personalize in Marketing Cloud is key.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Personalization with AMPscript and Dynamic Content</p>
                <p>You'll be tested on your ability to personalize content. Understand how to use personalization strings, Dynamic Content blocks, and basic AMPscript functions like `LookupRows()` to pull data from data extensions into your emails.</p>
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
