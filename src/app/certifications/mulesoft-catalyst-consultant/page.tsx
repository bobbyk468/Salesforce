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

const slug = 'mulesoft-catalyst-consultant'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does a MuleSoft Catalyst Consultant do?", options: ["Only coding", "Use MuleSoft Catalyst principles in delivery engagements to achieve business outcomes", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Certified Catalyst Consultants use MuleSoft Catalyst principles in delivery engagements to achieve business outcomes." },
  { question: "What is MuleSoft Catalyst?", options: ["Only a product", "A methodology and set of principles for API-led delivery and business outcomes", "Only Anypoint", "Only Mule runtime"], correctAnswer: 1, explanation: "MuleSoft Catalyst is a methodology for API-led delivery and business outcomes." },
  { question: "What is a key activity for a Catalyst Consultant?", options: ["Only coding", "Applying Catalyst principles in delivery engagements", "Only reporting", "Only lists"], correctAnswer: 1, explanation: "They apply Catalyst principles in delivery engagements." },
  { question: "Which role typically pursues MuleSoft Catalyst Consultant?", options: ["Marketers", "Consultants and delivery leads working with MuleSoft", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Consultants and delivery leads working with MuleSoft pursue this credential." },
  { question: "What does 'business outcomes' mean in Catalyst context?", options: ["Only revenue", "Measurable results achieved through API-led delivery (e.g., speed, reuse)", "Only cost", "Only speed"], correctAnswer: 1, explanation: "Business outcomes are measurable results achieved through API-led delivery." },
  { question: "What does API-led connectivity emphasize?", options: ["Point-to-point only", "Reusable APIs in System, Process, and Experience layers", "No reuse", "Single API only"], correctAnswer: 1, explanation: "API-led connectivity uses reusable API layers." },
  { question: "Which Catalyst principle supports faster delivery?", options: ["Manual only", "Reuse, design-first, and incremental delivery", "No design", "Big bang only"], correctAnswer: 1, explanation: "Reuse and design-first support faster delivery." },
  { question: "What does a Catalyst Consultant help achieve?", options: ["Only code", "Business outcomes through API-led methodology", "Only reports", "Only deployment"], correctAnswer: 1, explanation: "Consultants drive outcomes through Catalyst methodology." },
  { question: "Which stakeholder does Catalyst engage?", options: ["Developers only", "Business and IT for alignment", "Only IT", "Only business"], correctAnswer: 1, explanation: "Catalyst engages both business and IT stakeholders." },
  { question: "What is the purpose of Catalyst delivery practices?", options: ["To replace MuleSoft", "To achieve predictable, outcome-focused delivery", "To code only", "To deploy only"], correctAnswer: 1, explanation: "Catalyst practices aim for predictable, outcome-focused delivery." },
  { question: "Which MuleSoft product supports Catalyst methodology?", options: ["Email only", "Anypoint Platform and design tools", "Slack only", "CPQ only"], correctAnswer: 1, explanation: "Anypoint Platform supports Catalyst practices." },
  { question: "What does 'reuse' mean in Catalyst context?", options: ["Single use only", "APIs and assets designed for reuse across projects", "No reuse", "Copy-paste only"], correctAnswer: 1, explanation: "Reuse means APIs and assets used across projects." },
  { question: "Which role applies Catalyst principles?", options: ["Sales only", "Consultants, architects, and delivery leads", "Marketers only", "End users only"], correctAnswer: 1, explanation: "Consultants and architects apply Catalyst principles." },
  { question: "What is the benefit of Catalyst for organizations?", options: ["No benefit", "Faster time-to-value and reduced integration debt", "Slower only", "Higher cost only"], correctAnswer: 1, explanation: "Catalyst supports faster time-to-value and reduced debt." },
  { question: "Which best practice does Catalyst promote?", options: ["Ignore governance", "Design-first, reuse, and governance", "No design", "Ad-hoc only"], correctAnswer: 1, explanation: "Catalyst promotes design-first, reuse, and governance." },
]

export default function MuleSoftCatalystConsultantPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="Catalyst" description="Certified Catalyst Consultants use MuleSoft Catalyst principles in delivery engagements to achieve business outcomes." examDetails={{ questions: 60, passingScore: '~68%', duration: '120 min', cost: '$400' }} topics={['MuleSoft Catalyst', 'API-led', 'Delivery', 'Business Outcomes', 'Best Practices']}
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
