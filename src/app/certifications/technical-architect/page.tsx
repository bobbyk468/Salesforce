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

const slug = 'technical-architect'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is the primary focus of a Salesforce Certified Technical Architect?",
    options: ["Only coding", "Designing and implementing secure, high-performance, integrated technical solutions within a client's landscape", "Email only", "Slack only"],
    correctAnswer: 1,
    explanation: "Technical Architects design and implement secure, high-performance, integrated solutions in a client's landscape.",
  },
  {
    question: "Which certifications are typically required before attempting the CTA board?",
    options: ["None", "Application Architect and System Architect (or equivalent)", "Email Specialist only", "Slack only"],
    correctAnswer: 1,
    explanation: "CTA board typically requires Application Architect and System Architect (or equivalent) as prerequisites.",
  },
  {
    question: "What does the CTA board exam assess?",
    options: ["Only multiple choice", "Scenario-based architecture design and presentation", "Only coding", "Only documentation"],
    correctAnswer: 1,
    explanation: "The CTA board is a scenario-based design and presentation exam.",
  },
  {
    question: "Which aspect is critical in Technical Architecture?",
    options: ["Only UI", "Security, performance, scalability, and integration", "Only reports", "Only dashboards"],
    correctAnswer: 1,
    explanation: "Security, performance, scalability, and integration are core to technical architecture.",
  },
  {
    question: "What is meant by 'integrated' in the context of CTA?",
    options: ["Only Salesforce", "Salesforce working with other systems (APIs, middleware, data flow)", "Only Apex", "Only LWC"],
    correctAnswer: 1,
    explanation: "Integrated means Salesforce and other systems working together via APIs and middleware.",
  },
]

export default function TechnicalArchitectPage() {
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
            code="CTA"
            description="Salesforce Certified Technical Architects have experience in designing and implementing secure, high-performance, integrated technical solutions using the Force.com platform within the context of a client's architectural landscape."
            examDetails={{ questions: 'Board exam', passingScore: 'Board review', duration: 'Board', cost: '$6000' }}
            topics={['Solution Design', 'Security', 'Integration', 'Data', 'Sharing', 'Performance', 'Governance', 'Presentation', 'Scenario Analysis', 'Best Practices']}
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