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

const slug = 'nonprofit-success-pack-consultant'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is the Nonprofit Success Pack (NPSP)?",
    options: ["A CRM product for retail", "A managed package that extends Salesforce for nonprofits (donations, households, etc.)", "A Marketing Cloud product", "A CPQ product"],
    correctAnswer: 1,
    explanation: "NPSP is a managed package that provides donation management, households, and nonprofit-specific features on Salesforce.",
  },
  {
    question: "How does NPSP differ from Nonprofit Cloud (NPC)?",
    options: ["They are identical", "NPSP is the managed package; NPC is the industry solution that may include NPSP and more", "NPC is only for K-12", "NPSP is for B2B only"],
    correctAnswer: 1,
    explanation: "NPSP is the managed package; Nonprofit Cloud is the broader industry solution that can include NPSP.",
  },
  {
    question: "Which role does an NPSP Consultant typically fulfill?",
    options: ["Email marketing only", "Designing and implementing nonprofit managed package solutions in a customer-facing role", "Slack configuration only", "UI design only"],
    correctAnswer: 1,
    explanation: "They design and implement NPSP and nonprofit package solutions in a customer-facing role.",
  },
  {
    question: "What is a Household in NPSP?",
    options: ["A report", "A grouping of related contacts (e.g., family) for giving and communications", "An email list", "A campaign"],
    correctAnswer: 1,
    explanation: "Households group related contacts for household-level giving and communication.",
  },
  {
    question: "Which NPSP feature supports recurring donations?",
    options: ["Only one-time gifts", "Recurring Donations object with installment opportunities", "Campaigns only", "Leads only"],
    correctAnswer: 1,
    explanation: "The Recurring Donations object creates installment opportunities based on the donation schedule.",
  },
]

export default function NonprofitSuccessPackConsultantPage() {
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
            code="NPSP"
            description="Certified Nonprofit Success Pack Consultants have experience designing and implementing nonprofit managed package solutions in a customer-facing role."
            examDetails={{ questions: 60, passingScore: '~65%', duration: '105 min', cost: '$200' }}
            topics={['NPSP', 'Donations', 'Households', 'Recurring Giving', 'Data Model', 'Reports', 'Best Practices', 'Migration', 'Integration', 'Governance']}
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