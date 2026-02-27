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

const slug = 'platform-foundations'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "Who is the Salesforce Associate certification designed for?",
    options: ["Developers only", "Individuals with up to 6 months of user experience on Salesforce", "Architects only", "Marketers only"],
    correctAnswer: 1,
    explanation: "The Associate certification is designed for individuals who may have up to 6 months of user experience.",
  },
  {
    question: "What does the Customer 360 Platform refer to?",
    options: ["Only Sales Cloud", "The integrated set of Salesforce products that connect customer data across the organization", "Only Marketing Cloud", "Only Service Cloud"],
    correctAnswer: 1,
    explanation: "Customer 360 is Salesforce's integrated platform connecting customer data across products.",
  },
  {
    question: "Which object is central to the Salesforce CRM data model?",
    options: ["Report", "Account", "Dashboard", "Email Template"],
    correctAnswer: 1,
    explanation: "Account is a core object representing companies or people you do business with.",
  },
  {
    question: "What is a Record in Salesforce?",
    options: ["A report type", "A single row of data in an object (e.g., one Account)", "A dashboard", "A permission set"],
    correctAnswer: 1,
    explanation: "A record is a single row of data in an object.",
  },
  {
    question: "Which feature allows users to see their tasks and calendar?",
    options: ["Reports only", "Home page and Activity components", "Only dashboards", "Only list views"],
    correctAnswer: 1,
    explanation: "The Home page and Activity components show tasks and calendar.",
  },
  {
    question: "What is a Dashboard in Salesforce?",
    options: [
      "A single report",
      "A collection of report components displayed together for at-a-glance visibility",
      "A list view only",
      "An email template"
    ],
    correctAnswer: 1,
    explanation: "Dashboards display multiple report charts and metrics in a single view."
  },
  {
    question: "Which Salesforce feature enables real-time collaboration on records?",
    options: [
      "Reports only",
      "Chatter and Activity",
      "Validation rules only",
      "Workflow rules"
    ],
    correctAnswer: 1,
    explanation: "Chatter and Activity enable comments, mentions, and collaboration on records."
  },
  {
    question: "What does the Lightning Experience refer to?",
    options: [
      "A mobile app only",
      "The modern Salesforce user interface with responsive design and enhanced features",
      "Classic only",
      "An API"
    ],
    correctAnswer: 1,
    explanation: "Lightning Experience is the modern, responsive Salesforce UI."
  },
  {
    question: "Which object typically represents a person or company you do business with?",
    options: [
      "Opportunity",
      "Account",
      "Task",
      "Report"
    ],
    correctAnswer: 1,
    explanation: "Account represents companies or people you do business with."
  },
  {
    question: "What is a List View in Salesforce?",
    options: [
      "A report type",
      "A filtered list of records from an object displayed in a table format",
      "A dashboard only",
      "A permission set"
    ],
    correctAnswer: 1,
    explanation: "List views show filtered records in a tabular layout for quick access."
  },
  {
    question: "Which navigation element helps users find records and apps in Salesforce?",
    options: [
      "Report Builder only",
      "App Launcher and global search",
      "Validation rules only",
      "Workflow"
    ],
    correctAnswer: 1,
    explanation: "App Launcher and global search help users navigate and find content."
  },
  {
    question: "What does the Customer 360 Platform aim to achieve?",
    options: [
      "Only sales automation",
      "A single, unified view of the customer across all touchpoints and systems",
      "Only service cloud",
      "Only marketing"
    ],
    correctAnswer: 1,
    explanation: "Customer 360 unifies customer data across sales, service, marketing, and more."
  },
  {
    question: "Which feature allows users to access Salesforce on mobile devices?",
    options: [
      "Desktop only",
      "Salesforce Mobile App",
      "Email only",
      "Reports only"
    ],
    correctAnswer: 1,
    explanation: "The Salesforce Mobile App provides full CRM access on phones and tablets."
  },
  {
    question: "What is the purpose of Reports in Salesforce?",
    options: [
      "To send emails only",
      "To organize, filter, and display data from your Salesforce records",
      "To create dashboards only",
      "To assign tasks"
    ],
    correctAnswer: 1,
    explanation: "Reports query and display data from your org's objects and records."
  },
  {
    question: "Which Salesforce concept represents a potential sale?",
    options: [
      "Account",
      "Opportunity",
      "Contact",
      "Lead"
    ],
    correctAnswer: 1,
    explanation: "Opportunity represents a potential sale or deal being pursued."
  },
]

export default function PlatformFoundationsPage() {
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
            code="Associate"
            description="The Salesforce Associate Certification is designed for individuals who may have up to 6 months of user experience. It validates foundational knowledge and understanding of the Customer 360 Platform."
            examDetails={{ questions: 40, passingScore: '~65%', duration: '75 min', cost: '$75' }}
            topics={['Customer 360', 'Objects & Records', 'Navigation', 'Reports & Dashboards', 'Collaboration', 'Mobile', 'Security Basics', 'Data Model']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
            <p className="text-gray-600 mb-8">{getPracticeQuestionsIntro(sampleQuestions.length)}</p>
            {sampleQuestions.map((q, index) => (
              <QuestionCard key={index} questionNumber={index + 1} question={q.question} options={q.options} correctAnswer={q.correctAnswer} explanation={q.explanation} />
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
