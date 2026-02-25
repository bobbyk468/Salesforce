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

const slug = 'pardot-consultant'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "A client wants to implement lead scoring that accounts for both explicit and implicit data. What should the consultant recommend?",
    options: [
      "Use Scoring only",
      "Use Grading only",
      "Use both Scoring and Grading together",
      "Use Automation Rules"
    ],
    correctAnswer: 2,
    explanation: "Using both Scoring (implicit data/behavior) and Grading (explicit data/profile fit) together provides a complete picture of lead quality."
  },
  {
    question: "What is the recommended approach for syncing Pardot prospects to Salesforce Leads vs Contacts?",
    options: [
      "Always sync to Leads",
      "Always sync to Contacts",
      "Use connector settings to define sync behavior",
      "Manual assignment only"
    ],
    correctAnswer: 2,
    explanation: "The Salesforce connector settings allow you to configure whether prospects sync to Leads or Contacts based on matching rules and business requirements."
  },
  {
    question: "A company has multiple business units. How should Pardot be configured?",
    options: [
      "Single Business Unit with tags",
      "Multiple Business Units with separate prospect databases",
      "Separate Pardot accounts",
      "Use campaigns for separation"
    ],
    correctAnswer: 1,
    explanation: "Multiple Business Units allow separate prospect databases, user permissions, and branding while sharing a single Salesforce org."
  },
  {
    question: "What is the best practice for implementing progressive profiling?",
    options: [
      "Use dependent fields",
      "Use progressive profiling feature in form settings",
      "Create multiple forms",
      "Use hidden fields"
    ],
    correctAnswer: 1,
    explanation: "Pardot's progressive profiling feature automatically shows different fields to returning visitors based on what data you already have."
  },
  {
    question: "How should connected campaigns be used?",
    options: [
      "To replace Pardot campaigns",
      "To sync Pardot and Salesforce campaigns bidirectionally",
      "For reporting purposes only",
      "To track email engagement"
    ],
    correctAnswer: 1,
    explanation: "Connected Campaigns allows bidirectional sync between Pardot and Salesforce campaigns, enabling unified reporting and ROI tracking."
  },
]

export default function PardotConsultantPage() {
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
            code="Pardot Consultant"
            description="The Pardot Consultant certification validates your expertise in designing and implementing Pardot solutions aligned with business requirements."
            examDetails={{
              questions: 60,
              passingScore: "68%",
              duration: "105 min",
              cost: "$200",
            }}
            topics={[
              "Discovery & Solution Design",
              "Implementation",
              "Lead Management",
              "Scoring & Grading Models",
              "Engagement Programs",
              "Forms & Landing Pages",
              "Salesforce Integration",
              "Reporting & Analytics",
              "Data Migration",
              "Optimization"
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
            <p className="text-gray-600 mb-8">
              Test your knowledge with these sample questions.
            </p>
            
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
