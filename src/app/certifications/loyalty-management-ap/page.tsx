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

const slug = 'loyalty-management-ap'
export const metadata = getCertMetadata(slug)

const sampleQuestions = [
  { question: "What does Loyalty Management AP validate?", options: ["Only basics", "2-3 years experience designing solutions using Loyalty Management and leading implementation within customer organizations", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Loyalty Management Professionals have 2-3 years' experience designing solutions using Loyalty Management and can lead implementation within customer organizations." },
  { question: "Which Salesforce product does Loyalty Management refer to?", options: ["Marketing Cloud only", "Loyalty Management for customer loyalty programs and engagement", "Service Cloud", "Slack"], correctAnswer: 1, explanation: "Loyalty Management is Salesforce's product for loyalty programs." },
  { question: "What is a key activity for a Loyalty Management Professional?", options: ["Only coding", "Designing and leading implementation of loyalty solutions", "Only reporting", "Only email"], correctAnswer: 1, explanation: "They design and lead implementation of loyalty solutions." },
  { question: "Which role typically pursues Loyalty Management AP?", options: ["Marketers", "Partners and implementers with 2-3 years loyalty experience", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and implementers with loyalty experience pursue this credential." },
  { question: "What does loyalty program implementation often involve?", options: ["Only UI", "Points, tiers, rewards, and engagement flows", "Only reports", "Only dashboards"], correctAnswer: 1, explanation: "Implementation involves points, tiers, rewards, and engagement flows." },
]

export default function LoyaltyManagementAPPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
      <CertPageIntro slug={slug} />
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <CertificationCard title={slugToDisplayName(slug)} code="AP" description="Accredited Loyalty Management Professionals has 2-3 years' experience designing solutions using the Loyalty Management functionality and can lead the implementation of these solutions within a customer organization." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Loyalty Management', 'Loyalty Programs', 'Points', 'Rewards', 'Engagement', 'Best Practices']}
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