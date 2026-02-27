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

const slug = 'omnistudio-developer'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "Which OmniStudio tool is used to create guided, step-by-step digital experiences?",
    options: ["Apex only", "OmniScript", "Visualforce", "LWC only"],
    correctAnswer: 1,
    explanation: "OmniScript provides declarative, step-by-step guided experiences without code.",
  },
  {
    question: "What is DataRaptor used for in OmniStudio?",
    options: ["Sending emails", "Data extraction, load, and transform (DET, DLT, DTT)", "Slack messages", "CPQ configuration"],
    correctAnswer: 1,
    explanation: "DataRaptors handle data extraction (DET), load (DLT), and transform (DTT) for OmniStudio.",
  },
  {
    question: "Which component displays a compact, card-based view of record data?",
    options: ["OmniScript", "FlexCard", "DataRaptor", "Integration Procedure"],
    correctAnswer: 1,
    explanation: "FlexCards display compact, card-based views of data with declarative layout.",
  },
  {
    question: "What is an Integration Procedure in OmniStudio?",
    options: ["A report", "A reusable server-side flow that orchestrates APIs and DataRaptors", "An email template", "A dashboard"],
    correctAnswer: 1,
    explanation: "Integration Procedures orchestrate server-side logic, APIs, and DataRaptors.",
  },
  {
    question: "Which industry solution commonly uses OmniStudio?",
    options: ["Retail only", "Financial Services, Insurance, and other industries for digital flows", "Manufacturing only", "Education only"],
    correctAnswer: 1,
    explanation: "OmniStudio is used across Financial Services, Insurance, and other industries for digital experiences.",
  },
  {
    question: "What is DET (DataRaptor Extract) used for?",
    options: [
      "To load only",
      "To extract data from Salesforce or external sources",
      "To transform only",
      "To send emails"
    ],
    correctAnswer: 1,
    explanation: "DET extracts data from Salesforce or external sources."
  },
  {
    question: "Which OmniScript element type defines a step?",
    options: [
      "DataRaptor only",
      "Step or Type element",
      "FlexCard only",
      "Integration Procedure only"
    ],
    correctAnswer: 1,
    explanation: "Step and Type elements define OmniScript structure."
  },
  {
    question: "What does FlexCard data source support?",
    options: [
      "No data",
      "Apex, DataRaptor, or Integration Procedure",
      "OmniScript only",
      "Email only"
    ],
    correctAnswer: 1,
    explanation: "FlexCards can use Apex, DataRaptor, or Integration Procedure."
  },
  {
    question: "Which OmniStudio feature supports conditional navigation?",
    options: [
      "No support",
      "conditional branching and navigation rules",
      "Static only",
      "Linear only"
    ],
    correctAnswer: 1,
    explanation: "Conditional branching controls OmniScript flow."
  },
  {
    question: "What is the purpose of an Integration Procedure output?",
    options: [
      "To replace input",
      "To return data to the caller (OmniScript, FlexCard)",
      "To delete only",
      "To log only"
    ],
    correctAnswer: 1,
    explanation: "Integration Procedure outputs return data to callers."
  },
  {
    question: "Which deployment tool is used for OmniStudio?",
    options: [
      "Change Sets only",
      "FlexDeploy or source-driven deployment",
      "Data Loader only",
      "Workbench only"
    ],
    correctAnswer: 1,
    explanation: "FlexDeploy and source-driven deployment manage OmniStudio."
  },
  {
    question: "What does OmniScript Save behavior control?",
    options: [
      "Nothing",
      "When and how OmniScript state is persisted",
      "Only navigation",
      "Only validation"
    ],
    correctAnswer: 1,
    explanation: "Save behavior controls state persistence."
  },
  {
    question: "Which OmniStudio component can invoke Apex?",
    options: [
      "DataRaptor only",
      "Integration Procedure",
      "FlexCard only",
      "OmniScript only"
    ],
    correctAnswer: 1,
    explanation: "Integration Procedures can invoke Apex."
  },
  {
    question: "What is the purpose of FlexCard merge fields?",
    options: [
      "To replace DataRaptor",
      "To display dynamic data from the data source",
      "To send emails",
      "To create reports"
    ],
    correctAnswer: 1,
    explanation: "Merge fields display dynamic data in FlexCards."
  },
  {
    question: "Which best practice applies to OmniStudio development?",
    options: [
      "Ignore testing",
      "Reusable elements, error handling, and user testing",
      "Single use only",
      "No reuse"
    ],
    correctAnswer: 1,
    explanation: "Reusable design, error handling, and testing support quality."
  },
]

export default function OmniStudioDeveloperPage() {
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
            code="OmniStudio Developer"
            description="Certified OmniStudio Developers have hands-on experience designing and configuring cloud applications using various OmniStudio declarative development tools."
            examDetails={{ questions: 60, passingScore: '~65%', duration: '105 min', cost: '$200' }}
            topics={['OmniScript', 'DataRaptor', 'FlexCards', 'Integration Procedures', 'Digital Experience', 'Industries', 'Best Practices', 'Testing', 'Deployment', 'Integration']}
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
