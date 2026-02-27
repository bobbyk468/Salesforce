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
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, getPracticeQuestionsIntro, slugToDisplayName } from '@/lib/cert-seo-data'
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
  {
    question: "What is the Gift Entry feature in NPSP?",
    options: [
      "A report",
      "A streamlined interface for entering and processing donations",
      "An email template",
      "A campaign"
    ],
    correctAnswer: 1,
    explanation: "Gift Entry provides a streamlined interface for donation entry."
  },
  {
    question: "Which NPSP setting controls soft credit behavior?",
    options: [
      "No setting",
      "Household settings and soft credit allocation",
      "Campaign only",
      "Opportunity only"
    ],
    correctAnswer: 1,
    explanation: "Household settings control soft credit allocation."
  },
  {
    question: "What does NPSP data model support for nonprofits?",
    options: [
      "Standard objects only",
      "Donations, households, affiliations, and engagements",
      "Leads only",
      "Campaigns only"
    ],
    correctAnswer: 1,
    explanation: "NPSP supports donations, households, affiliations, and engagements."
  },
  {
    question: "Which NPSP feature supports payment processing?",
    options: [
      "Manual only",
      "Payment object and payment gateway integration",
      "Opportunity only",
      "Campaign only"
    ],
    correctAnswer: 1,
    explanation: "Payment object and gateways support payment processing."
  },
  {
    question: "What is the purpose of NPSP migration?",
    options: [
      "To replace NPSP",
      "To move data from legacy systems or customize NPSP",
      "To delete only",
      "To backup only"
    ],
    correctAnswer: 1,
    explanation: "Migration moves data from legacy or custom implementations."
  },
  {
    question: "Which reporting need is common for NPSP?",
    options: [
      "Only sales pipeline",
      "Donor retention, campaign ROI, and gift summary",
      "Only support cases",
      "Only product sales"
    ],
    correctAnswer: 1,
    explanation: "NPSP reporting covers donor retention and gift summary."
  },
  {
    question: "What does the Engagement Plan support?",
    options: [
      "Only marketing",
      "Templated task sequences for stewardship",
      "Only email",
      "Only events"
    ],
    correctAnswer: 1,
    explanation: "Engagement Plans create stewardship task sequences."
  },
  {
    question: "Which integration is common for NPSP?",
    options: [
      "CPQ only",
      "Payment processors, fundraising platforms, and accounting",
      "Marketing Cloud only",
      "Slack only"
    ],
    correctAnswer: 1,
    explanation: "NPSP integrates with payment and fundraising platforms."
  },
  {
    question: "What does an NPSP Consultant need to understand?",
    options: [
      "Only UI",
      "NPSP data model, nonprofit processes, and configuration",
      "Only CRM",
      "Only Marketing Cloud"
    ],
    correctAnswer: 1,
    explanation: "Consultants need NPSP data model and nonprofit process knowledge."
  },
  {
    question: "Which best practice applies to NPSP implementation?",
    options: [
      "Ignore data",
      "Clean data, align with nonprofit processes, and train users",
      "No training",
      "Single user only"
    ],
    correctAnswer: 1,
    explanation: "Clean data, process alignment, and training support success."
  },
]

export default function NonprofitSuccessPackConsultantPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div data-critical-content className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
        
        {/* Prominent CTA above fold */}
        <CertPageCta slug={slug} certTitle={slugToDisplayName(slug)} />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
            {/* Exam Fees & Registration section */}
            <ExamFeesSection slug={slug} />
            
            <CertificationCard
              slug={slug}
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
            <p className="text-gray-600 mb-8">{getPracticeQuestionsIntro(sampleQuestions.length)}</p>
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
