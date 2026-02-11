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

const slug = 'health-cloud-ap'
export const metadata = getCertMetadata(slug)

const sampleQuestions = [
  { question: "What does Health Cloud AP validate?", options: ["Only basics", "Skills and knowledge to implement Salesforce Health Cloud with industry-specific data models", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Health Cloud Professionals have demonstrated the skills and knowledge to implement the Salesforce Health Cloud solution with industry-specific data models." },
  { question: "Which industry does Health Cloud serve?", options: ["Retail only", "Healthcare (e.g., providers, payers, life sciences)", "Manufacturing only", "Education only"], correctAnswer: 1, explanation: "Health Cloud serves healthcare organizations." },
  { question: "What is a key use case for Health Cloud?", options: ["Only email", "Patient engagement, care coordination, and healthcare workflows", "Only CPQ", "Only Slack"], correctAnswer: 1, explanation: "Patient engagement, care coordination, and healthcare workflows are key use cases." },
  { question: "Which role typically pursues Health Cloud AP?", options: ["Marketers", "Partners and implementers in healthcare", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and implementers in healthcare pursue this credential." },
  { question: "What does 'industry-specific data model' mean for Health Cloud?", options: ["Only standard objects", "Data model tailored for healthcare (e.g., patients, care plans, encounters)", "Only custom objects", "Only reports"], correctAnswer: 1, explanation: "It refers to a data model tailored for healthcare." },
]

export default function HealthCloudAPPage() {
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
            
            <CertificationCard title={slugToDisplayName(slug)} code="AP" description="Accredited Health Cloud Professionals have demonstrated the skills and knowledge to implement the Salesforce Health Cloud solution with industry-specific data models." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Health Cloud', 'Patient Engagement', 'Care Coordination', 'Data Model', 'Healthcare', 'Best Practices']}
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