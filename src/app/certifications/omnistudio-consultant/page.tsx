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

const slug = 'omnistudio-consultant'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is the primary focus of an OmniStudio Consultant?",
    options: ["Email only", "Designing and implementing solutions using OmniStudio tools that are sustainable, scalable, and meet customer business requirements", "Slack only", "CPQ only"],
    correctAnswer: 1,
    explanation: "OmniStudio Consultants design and implement OmniStudio solutions that are sustainable, scalable, and meet business requirements.",
  },
  {
    question: "Which OmniStudio tool is used for guided, step-by-step experiences?",
    options: ["DataRaptor only", "OmniScript", "FlexCard only", "Integration Procedure only"],
    correctAnswer: 1,
    explanation: "OmniScript provides guided, step-by-step digital experiences.",
  },
  {
    question: "What should an OmniStudio Consultant ensure for long-term success?",
    options: ["Only speed", "Sustainable and scalable design that contributes to long-term customer success", "No documentation", "Single use only"],
    correctAnswer: 1,
    explanation: "Consultants ensure solutions are sustainable, scalable, and contribute to long-term success.",
  },
  {
    question: "Which industries commonly use OmniStudio?",
    options: ["Retail only", "Financial Services, Insurance, and other industries", "Manufacturing only", "Education only"],
    correctAnswer: 1,
    explanation: "OmniStudio is used in Financial Services, Insurance, and other industries for digital flows.",
  },
  {
    question: "What is a FlexCard used for?",
    options: ["Only reports", "Displaying compact, card-based views of record data", "Email templates", "Slack messages"],
    correctAnswer: 1,
    explanation: "FlexCards display compact, card-based views of data with declarative layout.",
  },
  {
    question: "What is a DataRaptor used for in OmniStudio?",
    options: [
      "To send emails only",
      "To extract, load, or transform data (DEXT, DMLT, etc.)",
      "To create reports only",
      "To manage users"
    ],
    correctAnswer: 1,
    explanation: "DataRaptors handle data extract, load, and transform operations."
  },
  {
    question: "Which OmniStudio component invokes Apex or external services?",
    options: [
      "FlexCard only",
      "Integration Procedure",
      "OmniScript only",
      "DataRaptor only"
    ],
    correctAnswer: 1,
    explanation: "Integration Procedures call Apex and external systems."
  },
  {
    question: "What does OmniScript validation support?",
    options: [
      "No validation",
      "Required fields, custom validation, and conditional rules",
      "Only required",
      "Only custom"
    ],
    correctAnswer: 1,
    explanation: "OmniScript supports required, custom, and conditional validation."
  },
  {
    question: "Which deployment method is used for OmniStudio artifacts?",
    options: [
      "Change sets only",
      "OmniStudio FlexDeploy or source-driven deployment",
      "Manual copy only",
      "No deployment"
    ],
    correctAnswer: 1,
    explanation: "FlexDeploy and source-driven deployment manage OmniStudio artifacts."
  },
  {
    question: "What is the purpose of OmniScript elements?",
    options: [
      "To replace DataRaptors",
      "To define steps, fields, and actions in the OmniScript flow",
      "To create FlexCards only",
      "To send emails"
    ],
    correctAnswer: 1,
    explanation: "Elements define the structure and behavior of OmniScript steps."
  },
  {
    question: "Which OmniStudio feature supports conditional display?",
    options: [
      "No conditional logic",
      "Conditional visibility and branching based on data or user input",
      "Only branching",
      "Only visibility"
    ],
    correctAnswer: 1,
    explanation: "OmniScript supports conditional visibility and branching."
  },
  {
    question: "What does an OmniStudio Consultant ensure for scalability?",
    options: [
      "Ignore performance",
      "Reusable elements, efficient DataRaptors, and governance",
      "Single use only",
      "No reuse"
    ],
    correctAnswer: 1,
    explanation: "Reusable design and efficient DataRaptors support scalability."
  },
  {
    question: "Which OmniStudio artifact can be embedded in Lightning pages?",
    options: [
      "DataRaptor only",
      "OmniScript and FlexCards",
      "Integration Procedure only",
      "None"
    ],
    correctAnswer: 1,
    explanation: "OmniScript and FlexCards can be embedded in Lightning pages."
  },
  {
    question: "What is the benefit of OmniScript over custom Apex UI?",
    options: [
      "No benefit",
      "Declarative, faster to build, and easier to maintain for guided flows",
      "More complex",
      "Less flexible"
    ],
    correctAnswer: 1,
    explanation: "OmniScript is declarative and faster to build for guided flows."
  },
  {
    question: "Which industry use case is common for OmniStudio?",
    options: [
      "Retail only",
      "Quote-to-cash, onboarding, and service workflows in Financial Services",
      "Manufacturing only",
      "Education only"
    ],
    correctAnswer: 1,
    explanation: "Financial Services uses OmniStudio for quote-to-cash and onboarding."
  },
]

export default function OmniStudioConsultantPage() {
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
            code="OmniStudio Consultant"
            description="Certified OmniStudio Consultants are experts at designing and implementing solutions utilizing OmniStudio tools that are sustainable and scalable, meet customer business requirements, and contribute to long-term customer success."
            examDetails={{ questions: 60, passingScore: '~65%', duration: '105 min', cost: '$200' }}
            topics={['OmniScript', 'DataRaptor', 'FlexCards', 'Integration Procedures', 'Solution Design', 'Industries', 'Best Practices', 'Governance', 'Integration', 'Adoption']}
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
