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

const slug = 'loyalty-management-ap'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

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
    <div data-critical-content className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
        
        {/* Prominent CTA above fold */}
        <CertPageCta slug={slug} certTitle={slugToDisplayName(slug)} />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
            {/* Exam Fees & Registration section */}
            <ExamFeesSection slug={slug} />
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="AP" description="Accredited Loyalty Management Professionals has 2-3 years' experience designing solutions using the Loyalty Management functionality and can lead the implementation of these solutions within a customer organization." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Loyalty Management', 'Loyalty Programs', 'Points', 'Rewards', 'Engagement', 'Best Practices']}
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
