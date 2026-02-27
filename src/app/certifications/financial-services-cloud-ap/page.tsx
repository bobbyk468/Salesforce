import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import CertificationCard from '@/components/CertificationCard'
import CertIntroParagraph from '@/components/CertIntroParagraph'
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

const slug = 'financial-services-cloud-ap'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does Financial Services Cloud AP validate?", options: ["Only basics", "Skills and knowledge to implement Salesforce Financial Services Cloud", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Financial Services Cloud Professionals have demonstrated the skills and knowledge to implement the Salesforce Financial Services Cloud." },
  { question: "Which industry does Financial Services Cloud serve?", options: ["Retail only", "Financial services (e.g., banking, wealth management, insurance)", "Manufacturing only", "Education only"], correctAnswer: 1, explanation: "Financial Services Cloud serves financial services industries." },
  { question: "What is a key use case for Financial Services Cloud?", options: ["Only email", "Wealth management, banking, and insurance workflows", "Only CPQ", "Only Slack"], correctAnswer: 1, explanation: "Wealth management, banking, and insurance workflows are key use cases." },
  { question: "Which role typically pursues Financial Services Cloud AP?", options: ["Marketers", "Partners and implementers in financial services", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and implementers in financial services pursue this credential." },
  { question: "What does implementation of Financial Services Cloud often involve?", options: ["Only UI", "Industry data model, workflows, and compliance considerations", "Only reports", "Only dashboards"], correctAnswer: 1, explanation: "Implementation involves industry data model, workflows, and compliance." },
  { question: "What is wealth management in Financial Services Cloud?", options: ["Only banking", "Managing client relationships, assets, and financial planning", "Only insurance", "Only marketing"], correctAnswer: 1, explanation: "Wealth management covers client assets and financial planning." },
  { question: "Which data model objects are specific to Financial Services Cloud?", options: ["Standard objects only", "Financial Account, Goals, and industry-specific objects", "Only Contact", "Only Account"], correctAnswer: 1, explanation: "Financial Account, Goals, and related objects support wealth management." },
  { question: "Why is compliance critical for Financial Services Cloud?", options: ["Not critical", "Financial services are regulated (e.g., KYC, suitability); data and processes must comply", "Only for marketing", "Only for sales"], correctAnswer: 1, explanation: "Regulations like KYC and suitability require compliance." },
  { question: "What does household mean in Financial Services Cloud?", options: ["Single account only", "A group of related clients (e.g., family) sharing financial relationships", "Only contact", "Only opportunity"], correctAnswer: 1, explanation: "Households group related clients for wealth management." },
  { question: "Which use case does Financial Services Cloud support for banking?", options: ["Retail only", "Consumer banking, commercial banking, and lending workflows", "Manufacturing only", "Education only"], correctAnswer: 1, explanation: "Banking use cases include consumer, commercial, and lending." },
  { question: "What is a Financial Goal in Financial Services Cloud?", options: ["A report", "A client's financial objective (e.g., retirement, education) to track progress", "A case type", "An email template"], correctAnswer: 1, explanation: "Financial Goals track client objectives and progress." },
  { question: "Which industry segment uses Financial Services Cloud for insurance?", options: ["Retail only", "Insurance carriers for policy and claims workflows", "Manufacturing only", "Education only"], correctAnswer: 1, explanation: "Insurance carriers use FSC for policy and claims." },
  { question: "What does 'scope' mean for Financial Services Cloud implementation?", options: ["Only coding", "Gathering requirements and defining solution scope", "Only deployment", "Only training"], correctAnswer: 1, explanation: "Scope = requirements gathering and solution definition." },
  { question: "Which Salesforce product does Financial Services Cloud extend?", options: ["Commerce Cloud", "Sales Cloud and Service Cloud with financial services data model", "Marketing Cloud only", "Slack only"], correctAnswer: 1, explanation: "FSC extends Sales Cloud and Service Cloud." },
  { question: "What is KYC in financial services context?", options: ["A report type", "Know Your Customer—verifying client identity for compliance", "A workflow only", "An email template"], correctAnswer: 1, explanation: "KYC is the process of verifying client identity for regulatory compliance." },
]

export default function FinancialServicesCloudAPPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div data-critical-content className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
        <CertIntroParagraph slug={slug} />
        {/* Prominent CTA above fold */}
        <CertPageCta slug={slug} certTitle={slugToDisplayName(slug)} />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
            {/* Exam Fees & Registration section */}
            <ExamFeesSection slug={slug} />
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="AP" description="Accredited Financial Services Cloud Professionals have demonstrated the skills and knowledge to implement the Salesforce Financial Services Cloud." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Financial Services Cloud', 'Wealth Management', 'Banking', 'Insurance', 'Data Model', 'Best Practices']}
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
