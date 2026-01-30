import CertificationCard from '@/components/CertificationCard'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageIntro from '@/components/CertPageIntro'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertMetadata, getCertH1Text, slugToDisplayName } from '@/lib/cert-seo-data'
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

const slug = 'order-management-developer-ap'
export const metadata = getCertMetadata(slug)

const sampleQuestions = [
  { question: "What does Order Management Developer AP validate?", options: ["Only basics", "Skills and knowledge in configuring and customizing Salesforce Order Management", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Order Management Developer Professionals have demonstrated skills and knowledge in configuring and customizing Salesforce Order Management." },
  { question: "What is a key activity for an Order Management Developer?", options: ["Only administration", "Configuring and customizing Order Management", "Only reporting", "Only lists"], correctAnswer: 1, explanation: "They configure and customize Order Management." },
  { question: "Which role typically pursues Order Management Developer AP?", options: ["Marketers", "Partners and developers working with Order Management", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and developers working with Order Management pursue this credential." },
  { question: "What does customization in Order Management often involve?", options: ["Only UI", "Fulfillment flows, integrations, and extensions", "Only reports", "Only dashboards"], correctAnswer: 1, explanation: "Customization involves fulfillment flows, integrations, and extensions." },
  { question: "Which product does Order Management often integrate with?", options: ["Only Marketing Cloud", "CPQ, Commerce, and fulfillment systems", "Only Service Cloud", "Only Slack"], correctAnswer: 1, explanation: "Order Management integrates with CPQ, Commerce, and fulfillment systems." },
]

export default function OrderManagementDeveloperAPPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
      <CertPageIntro slug={slug} />
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <CertificationCard title={slugToDisplayName(slug)} code="AP" description="Accredited Order Management Developer Professionals have demonstrated skills and knowledge in configuring and customizing Salesforce Order Management." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Order Management', 'Development', 'Customization', 'Fulfillment', 'Integrations', 'Best Practices']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample Practice Questions</h2>
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
              { id: 'faq', title: 'Frequently Asked Questions' }]}
          />
        </aside>
      </div>
    </div>
  )
}