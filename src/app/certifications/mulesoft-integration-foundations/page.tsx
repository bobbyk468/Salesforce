import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import CertificationCard from '@/components/CertificationCard'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageIntro from '@/components/CertPageIntro'
import CertPageCta from '@/components/CertPageCta'
import ExamFeesSection from '@/components/ExamFeesSection'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, slugToDisplayName } from '@/lib/cert-seo-data'
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

const slug = 'mulesoft-integration-foundations'
export const metadata = getCertMetadata(slug)

const sampleQuestions = [
  {
    question: "Who is the MuleSoft Integration Foundations certification designed for?",
    options: ["Senior architects only", "Individuals who know core integration and API-led connectivity terminology and can work as informed members of a MuleSoft project team", "Developers only", "Marketers only"],
    correctAnswer: 1,
    explanation: "It is designed for individuals who know core integration and API-led connectivity and can work as informed team members.",
  },
  {
    question: "What is API-led connectivity?",
    options: ["Only REST", "An approach that organizes APIs in layers (System, Process, Experience) for reusable integration", "Only SOAP", "Only file transfer"],
    correctAnswer: 1,
    explanation: "API-led connectivity organizes APIs in System, Process, and Experience layers.",
  },
  {
    question: "Which layer in API-led connectivity exposes data from systems of record?",
    options: ["Experience API only", "System API", "Process API only", "No layers"],
    correctAnswer: 1,
    explanation: "System APIs expose data from systems of record.",
  },
  {
    question: "What is Anypoint Platform?",
    options: ["A CRM", "MuleSoft's platform for designing, building, and managing APIs and integrations", "An email tool", "A database"],
    correctAnswer: 1,
    explanation: "Anypoint Platform is MuleSoft's unified platform for APIs and integrations.",
  },
  {
    question: "Which term describes a reusable, composable integration asset?",
    options: ["Monolith", "API or connector", "Legacy system", "Silo"],
    correctAnswer: 1,
    explanation: "APIs and connectors are reusable, composable integration assets.",
  },
]

export default function MuleSoftIntegrationFoundationsPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
      <CertPageIntro slug={slug} />
        
        {/* Prominent CTA above fold */}
        <CertPageCta slug={slug} certTitle={slugToDisplayName(slug)} />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
            {/* Exam Fees & Registration section */}
            <ExamFeesSection slug={slug} />
            
            <CertificationCard
            title={slugToDisplayName(slug)}
            code="MuleSoft Associate"
            description="The Certified MuleSoft Integrations Foundations certification is designed for individuals who have knowledge of core integration and API-led connectivity terminology and can work as an informed member of a MuleSoft project team."
            examDetails={{ questions: 40, passingScore: '~65%', duration: '75 min', cost: '$75' }}
            topics={['API-led Connectivity', 'Anypoint Platform', 'APIs', 'Integration Basics', 'System/Process/Experience APIs', 'Terminology', 'Best Practices', 'Team Role']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
            <p className="text-gray-600 mb-8">Test your knowledge with these sample questions.</p>
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