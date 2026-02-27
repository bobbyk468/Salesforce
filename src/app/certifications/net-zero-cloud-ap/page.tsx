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

const slug = 'net-zero-cloud-ap'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does Net Zero Cloud AP validate?", options: ["Only basics", "Knowledge, skills, and experience with managing and collecting key sustainability data", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Net Zero Cloud Professionals have demonstrated knowledge, skills, and experience with managing and collecting key sustainability data." },
  { question: "What is Net Zero Cloud used for?", options: ["Only email", "Sustainability and carbon footprint management", "Only CPQ", "Only Slack"], correctAnswer: 1, explanation: "Net Zero Cloud is used for sustainability and carbon footprint management." },
  { question: "What is a key activity for a Net Zero Cloud Professional?", options: ["Only coding", "Managing and collecting sustainability data", "Only reporting", "Only lists"], correctAnswer: 1, explanation: "They manage and collect sustainability data." },
  { question: "Which role typically pursues Net Zero Cloud AP?", options: ["Marketers", "Partners and implementers working with sustainability and Net Zero Cloud", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and implementers working with sustainability pursue this credential." },
  { question: "What does 'sustainability data' often include?", options: ["Only sales data", "Carbon emissions, energy usage, and environmental metrics", "Only marketing data", "Only financial data"], correctAnswer: 1, explanation: "Sustainability data includes carbon emissions, energy usage, and environmental metrics." },
  { question: "What is carbon footprint tracking?", options: ["Only sales", "Measuring and reporting carbon emissions (Scope 1, 2, 3)", "Only marketing", "Only finance"], correctAnswer: 1, explanation: "Carbon footprint tracks emissions across Scopes 1, 2, and 3." },
  { question: "What are Scope 1, 2, and 3 emissions?", options: ["Report types", "Scope 1 = direct, 2 = energy indirect, 3 = value chain indirect", "Workflow stages", "Dashboard filters"], correctAnswer: 1, explanation: "Scopes 1–3 categorize emissions by source." },
  { question: "Which activity does a Net Zero Cloud Professional perform?", options: ["Only reporting", "Configuring data collection, managing sustainability metrics, and supporting reporting", "Only coding", "Only marketing"], correctAnswer: 1, explanation: "Professionals configure data collection and manage metrics." },
  { question: "What does 'managing' sustainability data mean?", options: ["Only viewing", "Collecting, validating, and maintaining environmental data for reporting", "Only deleting", "Only exporting"], correctAnswer: 1, explanation: "Managing includes collecting, validating, and maintaining data." },
  { question: "Why is sustainability reporting important?", options: ["Not important", "Regulatory compliance, stakeholder disclosure, and ESG commitments", "Only for internal use", "Only for marketing"], correctAnswer: 1, explanation: "Reporting supports compliance and ESG disclosure." },
  { question: "Which Salesforce product does Net Zero Cloud extend?", options: ["Marketing Cloud", "Sustainability Cloud (Net Zero Cloud) for environmental data", "Commerce Cloud", "Slack"], correctAnswer: 1, explanation: "Net Zero Cloud is the sustainability product." },
  { question: "What is ESG?", options: ["A report type", "Environmental, Social, and Governance—sustainability and responsibility metrics", "A workflow", "An object"], correctAnswer: 1, explanation: "ESG covers environmental, social, and governance metrics." },
  { question: "What does data collection involve for Net Zero Cloud?", options: ["Only manual entry", "Integrating sources (e.g., energy, travel) and mapping to sustainability metrics", "Only reports", "Only dashboards"], correctAnswer: 1, explanation: "Data collection integrates sources and maps to metrics." },
  { question: "What is Science Based Targets initiative (SBTi) in sustainability?", options: ["A report type", "A framework for setting emissions reduction targets aligned with climate science", "A data source only", "A dashboard only"], correctAnswer: 1, explanation: "SBTi provides standards for science-based emissions reduction targets." },
  { question: "What is a sustainability metric?", options: ["Only revenue", "A measured value such as tons CO2e, MWh energy, or water usage", "Only sales", "Only marketing"], correctAnswer: 1, explanation: "Sustainability metrics quantify environmental impact." },
]

export default function NetZeroCloudAPPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="AP" description="Accredited Net Zero Cloud Professionals have demonstrated knowledge, skills, and experience with managing and collecting key sustainability data." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Net Zero Cloud', 'Sustainability', 'Carbon', 'Emissions', 'Data Collection', 'Best Practices']}
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
