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

const slug = 'public-sector-solutions-ap'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does Public Sector Solutions AP validate?", options: ["Only basics", "Driving successful outcomes by leveraging Public Sector solutions implementation considerations and best practices that align with a company's vision and business value goals", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Public Sector Solutions Professionals drive successful outcomes by leveraging Public Sector solutions implementation considerations and best practices that best align with a company's vision and business value goals." },
  { question: "Which sector does Public Sector Solutions serve?", options: ["Retail only", "Government, public sector, and civic organizations", "Healthcare only", "Education only"], correctAnswer: 1, explanation: "Public Sector Solutions serves government and public sector organizations." },
  { question: "What is a key activity for a Public Sector Solutions Professional?", options: ["Only coding", "Implementing Public Sector solutions with best practices and alignment to business value", "Only reporting", "Only lists"], correctAnswer: 1, explanation: "They implement Public Sector solutions with best practices and alignment to business value." },
  { question: "Which role typically pursues Public Sector Solutions AP?", options: ["Marketers", "Partners and implementers working with public sector", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and implementers working with public sector pursue this credential." },
  { question: "What does 'business value goals' mean in Public Sector context?", options: ["Only revenue", "Outcomes that align with agency mission and citizen/customer value", "Only cost", "Only speed"], correctAnswer: 1, explanation: "It means outcomes that align with agency mission and citizen/customer value." },
  { question: "Which Public Sector consideration is critical?", options: ["Only UI", "Compliance, security, and citizen experience", "Only reports", "Only dashboards"], correctAnswer: 1, explanation: "Compliance, security, and citizen experience are critical." },
  { question: "What does Public Sector Solutions implementation include?", options: ["Only coding", "Industry-specific data models, workflows, and best practices", "Only reports", "Only emails"], correctAnswer: 1, explanation: "Implementation includes industry data models and workflows." },
  { question: "Which Salesforce product supports Public Sector?", options: ["Slack only", "Public Sector Solutions, Experience Cloud, and CRM", "Marketing Cloud only", "Commerce Cloud only"], correctAnswer: 1, explanation: "Public Sector Solutions and Experience Cloud support government." },
  { question: "What is the purpose of Public Sector best practices?", options: ["Only deployment", "Align with government processes, compliance, and citizen value", "Only design", "Only testing"], correctAnswer: 1, explanation: "Best practices align with government processes and compliance." },
  { question: "Which use case is common for Public Sector?", options: ["Retail only", "Case management, licensing, and citizen services", "Manufacturing only", "CPQ only"], correctAnswer: 1, explanation: "Case management, licensing, and citizen services are common." },
  { question: "What does agency mission alignment mean?", options: ["Only revenue", "Solutions that support government goals and citizen outcomes", "Only cost", "Only speed"], correctAnswer: 1, explanation: "Alignment means supporting government goals and citizen outcomes." },
  { question: "Which integration is common for Public Sector?", options: ["Slack only", "Legacy systems, payment, and identity providers", "Marketing Cloud only", "Commerce Cloud only"], correctAnswer: 1, explanation: "Public Sector integrates with legacy and payment systems." },
  { question: "What does Public Sector Solutions Professional need?", options: ["Only coding", "Public sector domain knowledge and implementation best practices", "Only reports", "Only dashboards"], correctAnswer: 1, explanation: "Professionals need domain knowledge and best practices." },
  { question: "Which best practice applies to Public Sector implementation?", options: ["Ignore compliance", "Compliance, accessibility, and citizen-centric design", "No accessibility", "Single channel only"], correctAnswer: 1, explanation: "Compliance, accessibility, and citizen-centric design are key." },
  { question: "What is Section 508 in Public Sector context?", options: ["A Salesforce feature", "US federal accessibility law requiring digital content to be accessible", "A report type", "A workflow only"], correctAnswer: 1, explanation: "Section 508 mandates accessibility for federal digital systems—critical for Public Sector." },
]

export default function PublicSectorSolutionsAPPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="AP" description="Accredited Public Sector Solutions Professionals drive successful outcomes by leveraging Public Sector solutions implementation considerations and best practices that best align with a company's vision and business value goals." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Public Sector', 'Government', 'Implementation', 'Best Practices', 'Business Value']}
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
            {sampleQuestions.map((q, i) => (<QuestionCard key={i} questionNumber={i + 1} question={q.question} options={q.options} correctAnswer={q.correctAnswer} explanation={q.explanation} />))}
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
