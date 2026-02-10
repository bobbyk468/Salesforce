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

const slug = 'slack-consultant'
export const metadata = getCertMetadata(slug)

const sampleQuestions = [
  {
    question: "What is the primary focus of a Slack Consultant?",
    options: ["Email only", "Helping clients maximize Slack through solution design, change management, and user adoption", "CPQ only", "UI design only"],
    correctAnswer: 1,
    explanation: "Slack Consultants help clients maximize Slack through solution design, change management, and user adoption.",
  },
  {
    question: "Which area does a Slack Consultant typically address?",
    options: ["Only technical setup", "Transforming collaboration through solution design, change management, and adoption", "Only reporting", "Only integrations"],
    correctAnswer: 1,
    explanation: "They focus on transforming collaboration via design, change management, and adoption.",
  },
  {
    question: "What is change management in the context of Slack?",
    options: ["Code deployment only", "Helping organizations adopt new ways of working with Slack", "Email templates only", "CPQ configuration only"],
    correctAnswer: 1,
    explanation: "Change management helps organizations adopt new collaboration practices with Slack.",
  },
  {
    question: "Which Slack feature supports external collaboration?",
    options: ["Only internal channels", "Slack Connect for secure collaboration with external organizations", "Email only", "Slack Connect is not a feature"],
    correctAnswer: 1,
    explanation: "Slack Connect enables secure collaboration with external partners via shared channels.",
  },
  {
    question: "What should a Slack Consultant recommend for user adoption?",
    options: ["No training", "Training, champions, and governance that support adoption", "Only technical docs", "Only admin settings"],
    correctAnswer: 1,
    explanation: "Training, champions, and governance are key to driving Slack adoption.",
  },
]

export default function SlackConsultantPage() {
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
            code="Slack Consultant"
            description="Certified Slack Consultants help clients maximize the potential of Slack by transforming their organization's collaboration through solution design, change management, and user adoption."
            examDetails={{ questions: 60, passingScore: '~65%', duration: '105 min', cost: '$200' }}
            topics={['Slack Solution Design', 'Change Management', 'User Adoption', 'Channels & Structure', 'Integrations', 'Governance', 'Slack Connect', 'Best Practices', 'Analytics', 'Security']}
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
          
          <div id="more-questions" className="mt-12 bg-salesforce-blue/10 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Want More Practice Questions?</h3>
            <p className="text-gray-600 mb-6">Get access to our complete question bank with detailed explanations.</p>
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