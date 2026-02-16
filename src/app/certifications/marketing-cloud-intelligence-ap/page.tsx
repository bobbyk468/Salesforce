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

const slug = 'marketing-cloud-intelligence-ap'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does Marketing Cloud Intelligence AP validate?", options: ["Only basics", "Skills and knowledge in technical implementation to effectively deliver Marketing Cloud Intelligence projects for customers", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Marketing Cloud Intelligence Professionals have demonstrated skills and knowledge in technical implementation to effectively deliver Marketing Cloud Intelligence projects for customers." },
  { question: "What is Marketing Cloud Intelligence?", options: ["Only reports", "Analytics and intelligence capabilities within Marketing Cloud (e.g., CDP, analytics)", "Only email", "Only journeys"], correctAnswer: 1, explanation: "Marketing Cloud Intelligence includes analytics and intelligence capabilities." },
  { question: "What is a key activity for a Marketing Cloud Intelligence Professional?", options: ["Only coding", "Technical implementation of Marketing Cloud Intelligence solutions", "Only reporting", "Only lists"], correctAnswer: 1, explanation: "They implement Marketing Cloud Intelligence solutions technically." },
  { question: "Which role typically pursues Marketing Cloud Intelligence AP?", options: ["Sales only", "Partners and implementers working with Marketing Cloud Intelligence", "Designers only", "Marketers only"], correctAnswer: 1, explanation: "Partners and implementers working with Marketing Cloud Intelligence pursue this credential." },
  { question: "What does 'deliver projects' mean in this context?", options: ["Only shipping", "Implementing and delivering Marketing Cloud Intelligence solutions for customers", "Only reporting", "Only dashboards"], correctAnswer: 1, explanation: "It means implementing and delivering solutions for customers." },
]

export default function MarketingCloudIntelligenceAPPage() {
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
            
            <CertificationCard title={slugToDisplayName(slug)} code="AP" description="Accredited Marketing Cloud Intelligence Professional have demonstrated skills and knowledge in technical implementation to effectively deliver Marketing Cloud Intelligence projects for customers." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Marketing Cloud Intelligence', 'Analytics', 'CDP', 'Technical Implementation', 'Best Practices']}
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