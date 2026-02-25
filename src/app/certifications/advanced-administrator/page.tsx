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
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, slugToDisplayName } from '@/lib/cert-seo-data'
import dynamic from 'next/dynamic'
import { Metadata } from 'next'

const PracticeQuestionsSection = dynamic(() => import('@/components/PracticeQuestionsSection'), { ssr: false })
import { getExamWeightage } from '@/lib/exam-weightage-data'
import Link from 'next/link'
import { RELEASE_CURRENT } from '@/lib/release-data'

const slug = 'advanced-administrator'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "An organization wants to automatically share records with users based on criteria. Which feature should be used?",
    options: [
      "Manual Sharing",
      "Role Hierarchy",
      "Sharing Rules",
      "Public Groups"
    ],
    correctAnswer: 2,
    explanation: "Sharing Rules allow you to automatically share records with users or groups based on record ownership or criteria."
  },
  {
    question: "What is required before creating a roll-up summary field on a custom object?",
    options: [
      "A lookup relationship to the parent object",
      "A master-detail relationship where the custom object is the detail",
      "An external ID field",
      "A formula field"
    ],
    correctAnswer: 1,
    explanation: "Roll-up summary fields can only be created on objects that are the master in a master-detail relationship."
  },
  {
    question: "Which feature allows administrators to track changes to setup configuration?",
    options: [
      "Debug Log",
      "Setup Audit Trail",
      "Field History Tracking",
      "Event Monitoring"
    ],
    correctAnswer: 1,
    explanation: "Setup Audit Trail tracks the last 180 days of setup changes made by administrators in your organization."
  },
  {
    question: "A company needs to ensure that duplicate leads are not created. Which feature should be implemented?",
    options: [
      "Validation Rules",
      "Duplicate Rules with Matching Rules",
      "Unique Field",
      "Apex Trigger"
    ],
    correctAnswer: 1,
    explanation: "Duplicate Rules combined with Matching Rules allow you to detect and prevent duplicate records from being created."
  },
  {
    question: "What is the purpose of a Permission Set Group?",
    options: [
      "To assign multiple profiles to a user",
      "To bundle permission sets together for easier assignment",
      "To create a hierarchy of permissions",
      "To restrict access to objects"
    ],
    correctAnswer: 1,
    explanation: "Permission Set Groups allow you to bundle multiple permission sets together, making it easier to assign a collection of permissions to users."
  },
]

export default function AdvancedAdministratorPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div data-critical-content className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
        <p className="text-sm text-gray-600 mb-6">
          If you haven&apos;t passed the entry-level admin exam yet, start with our{' '}
          <Link href="/certifications/administrator" className="text-salesforce-blue font-medium hover:underline">ADM-201 study guide</Link> first.
          {' '}For faster prep, use our{' '}
          <Link href="/adm-201-exam-tips-2026" className="text-salesforce-blue font-medium hover:underline">ADM-201 exam tips ({RELEASE_CURRENT})</Link>{' '}
          and{' '}
          <Link href="/adm-201-vs-app-builder" className="text-salesforce-blue font-medium hover:underline">ADM-201 vs App Builder guide</Link>.
        </p>
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
            code="ADM-211"
            description="The Advanced Administrator certification validates your advanced knowledge of Salesforce administration, including complex security models, advanced automation, and performance optimization."
            examDetails={{
              questions: 60,
              passingScore: "65%",
              duration: "105 min",
              cost: "$200",
            }}
            topics={[
              "Security & Access",
              "Advanced Automation",
              "Approval Processes",
              "Data Management",
              "Advanced Reporting",
              "Performance Optimization",
              "Change Management",
              "Auditing & Monitoring",
              "Content Management",
              "AppExchange"
            ]}
            examSections={examSections}
            h1Text={getCertH1Text(slug)}
          examWeightageHeading={getCertExamWeightageHeading(slug)}
          />

          <div id="exam-prep">
            <ExamPrepContent slug={slug} />
          </div>

          <PracticeQuestionsSection
            heading={getCertPracticeQuestionsHeading(slug)}
            introText="Test your knowledge with these sample questions. Click on an answer to select it, then check your answer to see if you're correct."
            questions={sampleQuestions}
          />

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
