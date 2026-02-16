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

const slug = 'ai-associate'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "Who is the AI Associate credential designed for?",
    options: ["Developers only", "Individuals with knowledge of AI, from beginners to experienced", "Architects only", "Marketers only"],
    correctAnswer: 1,
    explanation: "The AI Associate is designed for individuals who may have knowledge of AI, whether beginners or more experienced.",
  },
  {
    question: "What does the AI Associate certification validate?",
    options: ["Only coding", "Foundational skills in ethical and responsible handling of data as they apply to AI in CRM", "Only reporting", "Only integration"],
    correctAnswer: 1,
    explanation: "It validates foundational skills in ethical and responsible data handling as they apply to AI in CRM.",
  },
  {
    question: "Which principle is important when applying AI in CRM?",
    options: ["Speed only", "Ethical and responsible use of data", "Cost only", "Complexity only"],
    correctAnswer: 1,
    explanation: "Ethical and responsible handling of data is central to AI in CRM.",
  },
  {
    question: "What role does data play in AI on the Salesforce platform?",
    options: ["No role", "Data quality and governance are critical for trustworthy AI outcomes", "Only storage", "Only backup"],
    correctAnswer: 1,
    explanation: "Data quality and governance are critical for trustworthy AI outcomes.",
  },
  {
    question: "Which Salesforce product often incorporates AI capabilities?",
    options: ["Only Heroku", "Einstein and Customer 360 products", "Only Slack", "Only MuleSoft"],
    correctAnswer: 1,
    explanation: "Einstein and Customer 360 products incorporate AI capabilities.",
  },
]

export default function AIAssociatePage() {
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
            
            <CertificationCard
            title={slugToDisplayName(slug)}
            code="AI Associate"
            description="The Salesforce AI Associate credential is designed for individuals who may have knowledge of AI, whether beginners or more experienced. It validates foundational skills in ethical and responsible handling of data as they apply to AI in CRM."
            examDetails={{ questions: 40, passingScore: '~65%', duration: '75 min', cost: '$75' }}
            topics={['AI Fundamentals', 'Ethics & Responsibility', 'Data in AI', 'Einstein', 'CRM & AI', 'Governance', 'Trust', 'Best Practices']}
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