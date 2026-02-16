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

const slug = 'sharing-visibility-architect'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is the primary focus of a Sharing and Visibility Architect?",
    options: ["Only reports", "Designing sound, scalable solutions that meet sharing and visibility security requirements", "Email only", "Slack only"],
    correctAnswer: 1,
    explanation: "They design solutions that meet sharing and visibility security requirements.",
  },
  {
    question: "Which layer determines the baseline record access in Salesforce?",
    options: ["Sharing rules only", "Organization-Wide Defaults (OWD)", "Permission sets only", "Profiles only"],
    correctAnswer: 1,
    explanation: "OWD defines the baseline access level for each object (Private, Public Read Only, etc.).",
  },
  {
    question: "What is the purpose of a Sharing Rule?",
    options: ["To restrict access", "To extend access to records based on ownership or criteria", "To delete records", "To send emails"],
    correctAnswer: 1,
    explanation: "Sharing rules open access to records that OWD would otherwise restrict.",
  },
  {
    question: "Which sharing mechanism is used for criteria-based sharing?",
    options: ["Only role hierarchy", "Criteria-Based Sharing Rules", "Only manual share", "Only OWD"],
    correctAnswer: 1,
    explanation: "Criteria-Based Sharing Rules grant access based on record field values.",
  },
  {
    question: "What does 'visibility' mean in the context of this certification?",
    options: ["Only UI", "What data a user can see based on sharing, OWD, and permissions", "Only reports", "Only dashboards"],
    correctAnswer: 1,
    explanation: "Visibility is what data a user can see, governed by sharing and permissions.",
  },
]

export default function SharingVisibilityArchitectPage() {
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
            code="Sharing & Visibility"
            description="Certified Platform Sharing and Visibility Architects are fluent in designing sound, scalable, and high-performing technical solutions on the Salesforce Platform that meet sharing and visibility security requirements."
            examDetails={{ questions: 60, passingScore: '~68%', duration: '120 min', cost: '$400' }}
            topics={['OWD', 'Sharing Rules', 'Role Hierarchy', 'Permission Sets', 'Profiles', 'Criteria-Based Sharing', 'Performance', 'Governance', 'Best Practices', 'Security']}
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