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

const slug = 'mulesoft-platform-architect'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does a MuleSoft Platform Architect do?", options: ["Only coding", "Define and be responsible for an organization's Anypoint Platform strategy", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Certified MuleSoft Platform Architect architects have proven knowledge and skills to define and be responsible for an organization's Anypoint Platform strategy." },
  { question: "What is Anypoint Platform?", options: ["A CRM", "MuleSoft's unified platform for designing, building, and managing APIs and integrations", "An email tool", "A database only"], correctAnswer: 1, explanation: "Anypoint Platform is MuleSoft's unified platform for APIs and integrations." },
  { question: "What is a key activity for a MuleSoft Platform Architect?", options: ["Only coding", "Defining and owning Anypoint Platform strategy", "Only reporting", "Only lists"], correctAnswer: 1, explanation: "They define and own Anypoint Platform strategy." },
  { question: "Which role typically pursues MuleSoft Platform Architect?", options: ["Marketers", "Architects and senior consultants defining integration strategy", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Architects and senior consultants defining integration strategy pursue this credential." },
  { question: "What does 'platform strategy' mean in MuleSoft context?", options: ["Only APIs", "API-led connectivity, governance, and integration architecture", "Only Mule runtime", "Only CloudHub"], correctAnswer: 1, explanation: "Platform strategy includes API-led connectivity, governance, and integration architecture." },
  { question: "What does Anypoint Platform governance include?", options: ["Only deployment", "API policies, design standards, and lifecycle management", "Only design", "Only runtime"], correctAnswer: 1, explanation: "Governance covers policies, standards, and lifecycle." },
  { question: "Which deployment option does Anypoint Platform support?", options: ["CloudHub only", "CloudHub, on-prem, and hybrid", "On-prem only", "No deployment"], correctAnswer: 1, explanation: "Anypoint supports cloud, on-prem, and hybrid deployment." },
  { question: "What is the purpose of API design standards?", options: ["To replace APIs", "Consistency, reusability, and maintainability", "To delete only", "To create only"], correctAnswer: 1, explanation: "Design standards ensure consistency and reusability." },
  { question: "Which capability does Runtime Manager provide?", options: ["Design only", "Deploy, monitor, and manage Mule applications", "API design only", "No management"], correctAnswer: 1, explanation: "Runtime Manager deploys and manages Mule applications." },
  { question: "What does integration architecture encompass?", options: ["Only APIs", "System, Process, and Experience API layers", "Only Mule", "Only CloudHub"], correctAnswer: 1, explanation: "Integration architecture includes API layers." },
  { question: "Which role defines platform strategy?", options: ["Developers only", "Platform Architects", "Sales only", "Marketers only"], correctAnswer: 1, explanation: "Platform Architects define platform strategy." },
  { question: "What is the benefit of API-led connectivity?", options: ["No benefit", "Reusability, agility, and reduced point-to-point complexity", "More complexity", "Slower delivery"], correctAnswer: 1, explanation: "API-led connectivity promotes reusability and agility." },
  { question: "Which Anypoint component manages API lifecycle?", options: ["Mule only", "Design Center, Exchange, and API Manager", "CloudHub only", "Runtime only"], correctAnswer: 1, explanation: "Design Center, Exchange, and API Manager manage lifecycle." },
  { question: "What does a Platform Architect own?", options: ["Only code", "Platform strategy, governance, and standards", "Only deployment", "Only testing"], correctAnswer: 1, explanation: "Platform Architects own strategy, governance, and standards." },
  { question: "Which best practice applies to platform strategy?", options: ["Ignore governance", "Align with business goals and enable self-service", "No alignment", "Ad-hoc only"], correctAnswer: 1, explanation: "Strategy should align with business and enable self-service." },
]

export default function MuleSoftPlatformArchitectPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="MuleSoft Architect" description="Certified MuleSoft Platform Architect architects have proven knowledge and skills to define and be responsible for an organization's Anypoint Platform strategy." examDetails={{ questions: 60, passingScore: '~68%', duration: '120 min', cost: '$400' }} topics={['Anypoint Platform', 'API-led', 'Strategy', 'Governance', 'Integration', 'Best Practices']}
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
