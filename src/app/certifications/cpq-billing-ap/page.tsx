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

const slug = 'cpq-billing-ap'
export const metadata = getCertMetadata(slug)

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
    <div className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
      <CertPageIntro slug={slug} />
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
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
          
          <div id="more-questions" className="mt-12 bg-salesforce-blue/10 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Want More Practice Questions?</h3>
            <p className="text-gray-600 mb-6">Get access to our complete question bank.</p>
            <a href="/contact" className="inline-block px-8 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-all duration-200 shadow-md hover:shadow-lg active:scale-95">Contact Us for Full Access</a>
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