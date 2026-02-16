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
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, slugToDisplayName } from '@/lib/cert-seo-data'
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

const slug = 'marketing-cloud-engagement-admin'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is the primary focus of a Marketing Cloud Engagement Administrator?",
    options: [
      "Writing AMPscript",
      "Configuring Marketing Cloud products using industry and product best practices",
      "Designing Pardot campaigns",
      "Managing Salesforce CRM only"
    ],
    correctAnswer: 1,
    explanation: "Certified Marketing Cloud Engagement Administrators have hands-on experience configuring Marketing Cloud products utilizing industry and product best practices."
  },
  {
    question: "Which area must an Engagement Administrator thoroughly navigate?",
    options: [
      "Only Email Studio",
      "Setup and subscriber data management",
      "Slack workspace settings",
      "CPQ product configuration"
    ],
    correctAnswer: 1,
    explanation: "They understand data structure in subscriber data management and can thoroughly navigate Setup."
  },
  {
    question: "What is Subscriber Data Management in Marketing Cloud?",
    options: [
      "A reporting tool",
      "The structure and management of contact/subscriber data across data extensions and lists",
      "Email template storage",
      "Journey Builder only"
    ],
    correctAnswer: 1,
    explanation: "Subscriber data management refers to how contact and subscriber data is structured and managed in Data Extensions and lists."
  },
  {
    question: "Which Marketing Cloud product is typically configured by an Engagement Administrator?",
    options: [
      "Sales Cloud",
      "Email Studio, Journey Builder, Automation Studio",
      "Heroku",
      "Experience Cloud"
    ],
    correctAnswer: 1,
    explanation: "Engagement Administrators configure core Marketing Cloud engagement products including Email Studio, Journey Builder, and Automation Studio."
  },
  {
    question: "What best practice should an Engagement Administrator follow when configuring sends?",
    options: [
      "Send to all contacts without segmentation",
      "Use suppression lists, test sends, and follow deliverability best practices",
      "Disable tracking",
      "Use only one data extension"
    ],
    correctAnswer: 1,
    explanation: "Best practices include using suppression lists, conducting test sends, and following deliverability guidelines."
  },
]

export default function MarketingCloudEngagementAdminPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div data-critical-content className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
      <CertPageIntro slug={slug} />
        <ExamLogisticsSection slug={slug} />
        
        {/* Prominent CTA above fold */}
        <CertPageCta slug={slug} certTitle={slugToDisplayName(slug)} />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
            {/* Exam Fees & Registration section */}
            <ExamFeesSection slug={slug} />
            
            <CertificationCard
            title={slugToDisplayName(slug)}
            code="MC Engagement Admin"
            description="Certified Marketing Cloud Engagement Administrators have hands-on experience configuring Marketing Cloud products utilizing industry and product best practices. They understand data structure in subscriber data management and can thoroughly navigate Setup."
            examDetails={{
              questions: 60,
              passingScore: "~65%",
              duration: "105 min",
              cost: "$200",
            }}
            topics={[
              "Marketing Cloud Setup",
              "Subscriber Data Management",
              "Email Studio",
              "Journey Builder",
              "Automation Studio",
              "Content Builder",
              "Contact Builder",
              "Deliverability",
              "Reporting",
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