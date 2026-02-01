import CertificationCard from '@/components/CertificationCard'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageIntro from '@/components/CertPageIntro'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, slugToDisplayName } from '@/lib/cert-seo-data'
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

const slug = 'marketing-cloud-consultant'
export const metadata = getCertMetadata(slug)

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
]

export default function MarketingCloudConsultantPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
      <CertPageIntro slug={slug} />
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <CertificationCard
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

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
            <p className="text-gray-600 mb-8">
              Test your knowledge with these sample questions.
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

          <div id="more-questions" className="mt-12 bg-salesforce-blue/10 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Want More Practice Questions?</h3>
            <p className="text-gray-600 mb-6">
              Get access to our complete question bank with detailed explanations.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
            >
              Contact Us for Full Access
            </a>
          </div>

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