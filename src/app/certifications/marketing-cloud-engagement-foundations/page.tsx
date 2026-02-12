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

const slug = 'marketing-cloud-engagement-foundations'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "Who is the Marketing Cloud Engagement Foundations certification designed for?",
    options: ["Developers only", "Individuals with foundational understanding of the platform and up to 6 months of Marketing Cloud experience", "Architects only", "Sales only"],
    correctAnswer: 1,
    explanation: "It is designed for individuals with foundational understanding and up to 6 months of Marketing Cloud Engagement experience.",
  },
  {
    question: "Which Marketing Cloud product is used for email campaigns?",
    options: ["Slack", "Email Studio", "Heroku", "Commerce Cloud"],
    correctAnswer: 1,
    explanation: "Email Studio is used for building and sending email campaigns.",
  },
  {
    question: "What is a Subscriber in Marketing Cloud?",
    options: ["A report", "A contact or recipient who can receive marketing communications", "A dashboard", "An admin"],
    correctAnswer: 1,
    explanation: "A subscriber is a contact or recipient in Marketing Cloud.",
  },
  {
    question: "Which concept is central to Marketing Cloud data?",
    options: ["Only reports", "Data Extensions and subscriber management", "Only emails", "Only journeys"],
    correctAnswer: 1,
    explanation: "Data Extensions and subscriber management are central to Marketing Cloud data.",
  },
  {
    question: "What does Journey Builder allow marketers to do?",
    options: ["Only send one email", "Create multi-step, automated customer journeys", "Only run reports", "Only manage lists"],
    correctAnswer: 1,
    explanation: "Journey Builder creates multi-step, automated customer journeys.",
  },
]

export default function MarketingCloudEngagementFoundationsPage() {
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
            code="Marketing Associate"
            description="The Salesforce Marketing Associate certification is designed for individuals with a foundational understanding of the Salesforce platform and up to six months of experience with Salesforce Marketing Cloud Engagement."
            examDetails={{ questions: 40, passingScore: '~65%', duration: '75 min', cost: '$75' }}
            topics={['Marketing Cloud Basics', 'Email Studio', 'Subscribers', 'Data Extensions', 'Journey Builder', 'Reporting', 'Best Practices', 'Platform']}
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