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

const slug = 'cpq-billing-ap'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does CPQ and Billing Consultant AP validate?", options: ["Only basics", "Fundamental knowledge and consulting skills to scope, design, build, and deploy Salesforce CPQ and Billing solutions", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Salesforce CPQ and Billing Consultant Professionals have the fundamental knowledge and consulting skills to scope, design, build, and deploy Salesforce CPQ and Salesforce Billing solutions." },
  { question: "Which products does this AP cover?", options: ["Only CPQ", "Salesforce CPQ and Salesforce Billing", "Only Billing", "Only Marketing Cloud"], correctAnswer: 1, explanation: "It covers Salesforce CPQ and Salesforce Billing." },
  { question: "What is a key activity for a CPQ and Billing Consultant?", options: ["Only coding", "Scoping, designing, building, and deploying CPQ and Billing solutions", "Only reporting", "Only email"], correctAnswer: 1, explanation: "They scope, design, build, and deploy CPQ and Billing solutions." },
  { question: "Which role typically pursues CPQ and Billing AP?", options: ["Marketers", "Partners and consultants working with CPQ and Billing", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and consultants working with CPQ and Billing pursue this credential." },
  { question: "What does CPQ stand for?", options: ["Customer Product Quality", "Configure, Price, Quote", "Central Purchase Queue", "Contract Pricing Query"], correctAnswer: 1, explanation: "CPQ stands for Configure, Price, Quote." },
]

export default function CPQBillingAPPage() {
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
            
            <CertificationCard title={slugToDisplayName(slug)} code="AP" description="Accredited Salesforce CPQ and Billing Consultant Professionals have the fundamental knowledge and consulting skills to scope, design, build, and deploy Salesforce CPQ and Salesforce Billing solutions." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['CPQ', 'Billing', 'Consulting', 'Scoping', 'Design', 'Deployment', 'Best Practices']}
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
            {sampleQuestions.map((q, i) => (<QuestionCard key={i} questionNumber={i + 1} question={q.question} options={q.options} correctAnswer={q.correctAnswer} explanation={q.explanation} />))}
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