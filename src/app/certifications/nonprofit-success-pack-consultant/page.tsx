import CertificationCard from '@/components/CertificationCard'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageIntro from '@/components/CertPageIntro'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertMetadata, getCertH1Text, slugToDisplayName } from '@/lib/cert-seo-data'
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

const slug = 'nonprofit-success-pack-consultant'
export const metadata = getCertMetadata(slug)

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
    <div className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
      <CertPageIntro slug={slug} />
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <CertificationCard
            title={slugToDisplayName(slug)}
            code="NPSP"
            description="Certified Nonprofit Success Pack Consultants have experience designing and implementing nonprofit managed package solutions in a customer-facing role."
            examDetails={{ questions: 60, passingScore: '~65%', duration: '105 min', cost: '$200' }}
            topics={['NPSP', 'Donations', 'Households', 'Recurring Giving', 'Data Model', 'Reports', 'Best Practices', 'Migration', 'Integration', 'Governance']}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          <div id="practice-questions" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample Practice Questions</h2>
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
              { id: 'faq', title: 'Frequently Asked Questions' }]}
          />
        </aside>
      </div>
    </div>
  )
}