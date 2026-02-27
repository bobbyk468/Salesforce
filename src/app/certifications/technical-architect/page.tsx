import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import CertificationCard from '@/components/CertificationCard'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageIntro from '@/components/CertPageIntro'
import CertPageCta from '@/components/CertPageCta'
import ExamFeesSection from '@/components/ExamFeesSection'
import ExamLogisticsSection from '@/components/ExamLogisticsSection'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, getPracticeQuestionsIntro, slugToDisplayName } from '@/lib/cert-seo-data'
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

const slug = 'technical-architect'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What is the primary focus of a Salesforce Certified Technical Architect?",
    options: ["Only coding", "Designing and implementing secure, high-performance, integrated technical solutions within a client's landscape", "Email only", "Slack only"],
    correctAnswer: 1,
    explanation: "Technical Architects design and implement secure, high-performance, integrated solutions in a client's landscape.",
  },
  {
    question: "Which certifications are typically required before attempting the CTA board?",
    options: ["None", "Application Architect and System Architect (or equivalent)", "Email Specialist only", "Slack only"],
    correctAnswer: 1,
    explanation: "CTA board typically requires Application Architect and System Architect (or equivalent) as prerequisites.",
  },
  {
    question: "What does the CTA board exam assess?",
    options: ["Only multiple choice", "Scenario-based architecture design and presentation", "Only coding", "Only documentation"],
    correctAnswer: 1,
    explanation: "The CTA board is a scenario-based design and presentation exam.",
  },
  {
    question: "Which aspect is critical in Technical Architecture?",
    options: ["Only UI", "Security, performance, scalability, and integration", "Only reports", "Only dashboards"],
    correctAnswer: 1,
    explanation: "Security, performance, scalability, and integration are core to technical architecture.",
  },
  {
    question: "What is meant by 'integrated' in the context of CTA?",
    options: ["Only Salesforce", "Salesforce working with other systems (APIs, middleware, data flow)", "Only Apex", "Only LWC"],
    correctAnswer: 1,
    explanation: "Integrated means Salesforce and other systems working together via APIs and middleware.",
  },
  {
    question: "What does the CTA architecture scenario typically require?",
    options: [
      "Only coding",
      "End-to-end solution design covering data, integration, security, and scalability",
      "Only documentation",
      "Only testing"
    ],
    correctAnswer: 1,
    explanation: "CTA scenarios require comprehensive end-to-end solution design."
  },
  {
    question: "Which architectural concern is critical for high-volume orgs?",
    options: [
      "Only UI",
      "Governor limits, data volume, and query optimization",
      "Only reports",
      "Only dashboards"
    ],
    correctAnswer: 1,
    explanation: "High volume requires attention to limits, data, and queries."
  },
  {
    question: "What does 'secure' mean in CTA context?",
    options: [
      "Only encryption",
      "Sharing, authentication, encryption, and compliance",
      "Only sharing",
      "Only OWD"
    ],
    correctAnswer: 1,
    explanation: "Secure covers sharing, auth, encryption, and compliance."
  },
  {
    question: "Which presentation skill is important for the CTA board?",
    options: [
      "Only slides",
      "Clear communication of trade-offs, risks, and rationale",
      "Only coding",
      "Only documentation"
    ],
    correctAnswer: 1,
    explanation: "CTAs must clearly communicate trade-offs and rationale."
  },
  {
    question: "What is the purpose of an architecture decision record?",
    options: [
      "To replace design",
      "To document decisions, context, and consequences",
      "Only for code",
      "Only for testing"
    ],
    correctAnswer: 1,
    explanation: "ADRs document decisions and their context."
  },
  {
    question: "Which integration pattern supports scalability?",
    options: [
      "Point-to-point only",
      "Event-driven and loosely coupled architectures",
      "Synchronous only",
      "Tight coupling"
    ],
    correctAnswer: 1,
    explanation: "Event-driven and loosely coupled support scalability."
  },
  {
    question: "What does the CTA board evaluate?",
    options: [
      "Only technical knowledge",
      "Design quality, trade-offs, communication, and completeness",
      "Only coding",
      "Only deployment"
    ],
    correctAnswer: 1,
    explanation: "Board evaluates design, trade-offs, and communication."
  },
  {
    question: "Which consideration applies when designing for multiple business units?",
    options: [
      "Single org only",
      "Sharing, licensing, and data isolation strategies",
      "No isolation",
      "Ignore licensing"
    ],
    correctAnswer: 1,
    explanation: "Multi-BU requires sharing, licensing, and isolation strategy."
  },
  {
    question: "What is the benefit of a phased implementation approach?",
    options: [
      "No benefit",
      "Reduced risk, incremental value, and easier rollback",
      "Faster only",
      "Lower cost only"
    ],
    correctAnswer: 1,
    explanation: "Phased approach reduces risk and enables incremental value."
  },
  {
    question: "Which governance area does a CTA address?",
    options: [
      "Only coding standards",
      "Release management, change control, and technical debt",
      "Only documentation",
      "Only testing"
    ],
    correctAnswer: 1,
    explanation: "Governance covers release, change control, and technical debt."
  },
]

export default function TechnicalArchitectPage() {
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
            code="CTA"
            description="Salesforce Certified Technical Architects have experience in designing and implementing secure, high-performance, integrated technical solutions using the Force.com platform within the context of a client's architectural landscape."
            examDetails={{ questions: 'Board exam', passingScore: 'Board review', duration: 'Board', cost: '$6000' }}
            topics={['Solution Design', 'Security', 'Integration', 'Data', 'Sharing', 'Performance', 'Governance', 'Presentation', 'Scenario Analysis', 'Best Practices']}
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
