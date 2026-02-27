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

const slug = 'consumer-goods-tpm-ap'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does Consumer Goods Cloud TPM AP validate?", options: ["Only basics", "Knowledge, skills, and experience to discover, design, plan, and deliver product value with Consumer Goods Cloud TPM", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Consumer Goods Cloud TPM Professionals have the knowledge, skills, and experience to discover, design, plan, and deliver product value with Consumer Goods Cloud TPM." },
  { question: "What does TPM stand for?", options: ["Total Product Management", "Trade Promotion Management", "Technical Process Model", "Task Project Manager"], correctAnswer: 1, explanation: "TPM stands for Trade Promotion Management." },
  { question: "What is Trade Promotion Management used for?", options: ["Only email", "Planning, executing, and measuring trade promotions and incentives", "Only CPQ", "Only Slack"], correctAnswer: 1, explanation: "TPM is used for planning, executing, and measuring trade promotions." },
  { question: "Which role typically pursues Consumer Goods TPM AP?", options: ["Marketers", "Partners and implementers in consumer goods trade promotion", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and implementers in consumer goods trade promotion pursue this credential." },
  { question: "What does 'deliver product value' mean in TPM context?", options: ["Only shipping", "Delivering business value through trade promotion programs and analytics", "Only reporting", "Only dashboards"], correctAnswer: 1, explanation: "It means delivering business value through trade promotion programs and analytics." },
  { question: "What does trade promotion planning involve?", options: ["Only execution", "Budget allocation, calendar, and promotion design", "Only reporting", "Only dashboards"], correctAnswer: 1, explanation: "Planning covers budget, calendar, and promotion design." },
  { question: "Which Consumer Goods Cloud object supports TPM?", options: ["Lead only", "Promotion, plan, and budget objects", "Opportunity only", "Campaign only"], correctAnswer: 1, explanation: "Promotion, plan, and budget objects support TPM." },
  { question: "What does trade promotion analytics measure?", options: ["Only spend", "ROI, lift, and promotion effectiveness", "Only volume", "Only discounts"], correctAnswer: 1, explanation: "Analytics measures ROI, lift, and effectiveness." },
  { question: "Which integration supports TPM?", options: ["Slack only", "ERP, syndicated data, and retail systems", "Marketing Cloud only", "Service Cloud only"], correctAnswer: 1, explanation: "TPM integrates with ERP and syndicated data." },
  { question: "What is the purpose of trade promotion management?", options: ["Only discounts", "Plan, execute, and measure promotions with retailers", "Only reporting", "Only lists"], correctAnswer: 1, explanation: "TPM plans, executes, and measures trade promotions." },
  { question: "Which industry uses Consumer Goods Cloud TPM?", options: ["Healthcare only", "CPG, retail, and consumer goods", "Financial services only", "Education only"], correctAnswer: 1, explanation: "CPG and consumer goods use TPM." },
  { question: "What does TPM discover phase include?", options: ["Only coding", "Requirements and opportunity assessment", "Only deployment", "Only reporting"], correctAnswer: 1, explanation: "Discover phase includes requirements and assessment." },
  { question: "Which best practice applies to TPM implementation?", options: ["Ignore analytics", "Align with trade calendar and measure ROI", "No measurement", "Single promotion only"], correctAnswer: 1, explanation: "Align with trade calendar and measure ROI." },
  { question: "What does TPM design phase cover?", options: ["Only UI", "Promotion structure, workflows, and data model", "Only reports", "Only dashboards"], correctAnswer: 1, explanation: "Design covers structure, workflows, and data model." },
  { question: "What is promotion lift in TPM analytics?", options: ["Only spend", "The incremental sales or volume attributed to a promotion vs baseline", "Only discount %", "Only distribution"], correctAnswer: 1, explanation: "Lift measures incremental performance caused by the promotion." },
]

export default function ConsumerGoodsTPMAPPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="AP" description="Accredited Consumer Goods Cloud Trade Promotion Management (TPM) Professionals have the knowledge, skills, and experience to discover, design, plan, and deliver product value to customers with Consumer Goods Cloud TPM." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Consumer Goods Cloud', 'TPM', 'Trade Promotion', 'Planning', 'Analytics', 'Best Practices']}
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
