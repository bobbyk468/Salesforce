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

const slug = 'email-specialist-practice-test'
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
// Canonical → main Email Specialist guide to avoid CTR dilution; this page is sub-intent (practice test only).
export async function generateMetadata(): Promise<Metadata> {
  const baseMetadata = getCertMetadata(slug)
  const canonical = `${baseUrl}/certifications/email-specialist`
  return {
    ...baseMetadata,
    alternates: { canonical },
    openGraph: {
      ...baseMetadata.openGraph,
      url: canonical,
    },
  }
}

const sampleQuestions = [
  {
    question: "Which content type allows for dynamic, personalized content based on subscriber data?",
    options: ["Static Content", "AMPscript", "HTML Block", "Text Block"],
    correctAnswer: 1,
    explanation: "AMPscript is Marketing Cloud's scripting language for dynamic, personalized email content based on subscriber data.",
  },
  {
    question: "What is a Data Extension used for in Marketing Cloud?",
    options: ["To create email templates", "To store subscriber and relational data", "To schedule sends", "To track email opens"],
    correctAnswer: 1,
    explanation: "Data Extensions store subscriber data, custom data, and relational data used for segmentation and personalization.",
  },
  {
    question: "Which feature sends emails at the optimal time for each subscriber?",
    options: ["Triggered Send", "Send Time Optimization", "Journey Builder", "Automation Studio"],
    correctAnswer: 1,
    explanation: "Send Time Optimization uses Einstein to send at the best time per subscriber.",
  },
]

export default function EmailSpecialistPracticeTestPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div data-critical-content className="max-w-7xl mx-auto px-4 py-12">
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
            code="Practice Test"
            description="Official-style practice test for the Marketing Cloud Email Specialist certification. Use this to gauge readiness and practice under exam-like conditions before taking the real exam."
            examDetails={{
              questions: 60,
              passingScore: "~65%",
              duration: "90 min",
              cost: "Practice only",
            }}
            topics={[
              "Email Studio & Content",
              "Data Extensions & Subscribers",
              "Send Management",
              "Tracking & Analytics",
              "Best Practices",
            ]}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{getCertPracticeQuestionsHeading(slug)}</h2>
            <p className="text-gray-600 mb-8">Test your knowledge with these sample questions aligned to the Email Specialist exam.</p>
            {sampleQuestions.map((q, index) => (
              <QuestionCard
                key={index}
                questionNumber={index + 1}
                question={q.question}
                options={q.options}
                correctAnswer={q.correctAnswer}
                explanation={q.explanation}
              />
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