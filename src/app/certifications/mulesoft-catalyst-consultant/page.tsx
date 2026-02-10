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

const slug = 'mulesoft-catalyst-consultant'
export const metadata = getCertMetadata(slug)

const sampleQuestions = [
  { question: "What does a MuleSoft Catalyst Consultant do?", options: ["Only coding", "Use MuleSoft Catalyst principles in delivery engagements to achieve business outcomes", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Certified Catalyst Consultants use MuleSoft Catalyst principles in delivery engagements to achieve business outcomes." },
  { question: "What is MuleSoft Catalyst?", options: ["Only a product", "A methodology and set of principles for API-led delivery and business outcomes", "Only Anypoint", "Only Mule runtime"], correctAnswer: 1, explanation: "MuleSoft Catalyst is a methodology for API-led delivery and business outcomes." },
  { question: "What is a key activity for a Catalyst Consultant?", options: ["Only coding", "Applying Catalyst principles in delivery engagements", "Only reporting", "Only lists"], correctAnswer: 1, explanation: "They apply Catalyst principles in delivery engagements." },
  { question: "Which role typically pursues MuleSoft Catalyst Consultant?", options: ["Marketers", "Consultants and delivery leads working with MuleSoft", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Consultants and delivery leads working with MuleSoft pursue this credential." },
  { question: "What does 'business outcomes' mean in Catalyst context?", options: ["Only revenue", "Measurable results achieved through API-led delivery (e.g., speed, reuse)", "Only cost", "Only speed"], correctAnswer: 1, explanation: "Business outcomes are measurable results achieved through API-led delivery." },
]

export default function MuleSoftCatalystConsultantPage() {
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
            
            <CertificationCard title={slugToDisplayName(slug)} code="Catalyst" description="Certified Catalyst Consultants use MuleSoft Catalyst principles in delivery engagements to achieve business outcomes." examDetails={{ questions: 60, passingScore: '~68%', duration: '120 min', cost: '$400' }} topics={['MuleSoft Catalyst', 'API-led', 'Delivery', 'Business Outcomes', 'Best Practices']}
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