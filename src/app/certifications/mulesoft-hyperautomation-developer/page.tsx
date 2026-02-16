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

const slug = 'mulesoft-hyperautomation-developer'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "What does hyperautomation typically involve?",
    options: ["Only RPA", "Combining RPA, integration, AI, and process automation across systems", "Only email", "Only Slack"],
    correctAnswer: 1,
    explanation: "Hyperautomation combines RPA, integration (e.g., MuleSoft), AI, and process automation for end-to-end automation.",
  },
  {
    question: "Which MuleSoft product supports automation and integration in hyperautomation solutions?",
    options: ["Email Studio", "Anypoint Platform and Mule runtime", "CPQ only", "Commerce Cloud only"],
    correctAnswer: 1,
    explanation: "Anypoint Platform and Mule provide the integration layer for connecting systems in hyperautomation.",
  },
  {
    question: "What is the role of a MuleSoft Hyperautomation Developer?",
    options: ["Only UI design", "Developing hyperautomation solutions across Salesforce and MuleSoft products", "Only data entry", "Only reporting"],
    correctAnswer: 1,
    explanation: "They develop hyperautomation solutions that span Salesforce and MuleSoft products.",
  },
  {
    question: "Which capability is often part of a hyperautomation architecture?",
    options: ["Static spreadsheets only", "APIs, workflows, and event-driven integration", "Manual processes only", "Single system only"],
    correctAnswer: 1,
    explanation: "Hyperautomation uses APIs, workflows, and event-driven integration to connect and automate processes.",
  },
  {
    question: "What benefit does hyperautomation aim to deliver?",
    options: ["More manual work", "End-to-end process automation and reduced manual effort", "Fewer integrations", "Slower delivery"],
    correctAnswer: 1,
    explanation: "Hyperautomation aims to automate end-to-end processes and reduce manual effort across the enterprise.",
  },
]

export default function MuleSoftHyperautomationDeveloperPage() {
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
            code="Hyperautomation"
            description="Certified MuleSoft Hyperautomation Developers develop hyperautomation solutions across the Salesforce and MuleSoft products."
            examDetails={{ questions: 60, passingScore: '~68%', duration: '105 min', cost: '$200' }}
            topics={['Hyperautomation', 'MuleSoft Integration', 'RPA', 'Workflows', 'APIs', 'Events', 'Salesforce Integration', 'Best Practices', 'Architecture', 'Deployment']}
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