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

const slug = 'marketing-cloud-personalization-ap'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does Marketing Cloud Personalization AP validate?", options: ["Only basics", "Skills and knowledge in designing, configuring, building, and implementing Marketing Cloud Personalization", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Marketing Cloud Personalization Professionals have demonstrated skills and knowledge in designing, configuring, building, and implementing Marketing Cloud Personalization." },
  { question: "What is Marketing Cloud Personalization used for?", options: ["Only email", "Delivering personalized experiences across web, mobile, and other touchpoints", "Only SMS", "Only social"], correctAnswer: 1, explanation: "It delivers personalized experiences across touchpoints." },
  { question: "What is a key activity for a Marketing Cloud Personalization Professional?", options: ["Only coding", "Designing, configuring, building, and implementing personalization solutions", "Only reporting", "Only lists"], correctAnswer: 1, explanation: "They design, configure, build, and implement personalization solutions." },
  { question: "Which role typically pursues Marketing Cloud Personalization AP?", options: ["Sales only", "Partners and implementers working with Marketing Cloud Personalization", "Designers only", "Developers only"], correctAnswer: 1, explanation: "Partners and implementers working with personalization pursue this credential." },
  { question: "What does personalization often rely on?", options: ["Only static content", "Data, segments, and real-time decisioning", "Only reports", "Only dashboards"], correctAnswer: 1, explanation: "Personalization relies on data, segments, and real-time decisioning." },
  { question: "What is real-time decisioning in personalization?", options: ["Batch only", "Instant content and offer selection based on user context", "Manual only", "Static only"], correctAnswer: 1, explanation: "Real-time decisioning selects content/offers instantly." },
  { question: "Which data source feeds Marketing Cloud Personalization?", options: ["Slack only", "CDP, Data Extensions, and event data", "Salesforce only", "No data"], correctAnswer: 1, explanation: "CDP and event data feed personalization." },
  { question: "What does web personalization target?", options: ["Email only", "Web pages, banners, and recommendations", "SMS only", "Social only"], correctAnswer: 1, explanation: "Web personalization targets pages and recommendations." },
  { question: "Which touchpoint does Marketing Cloud Personalization support?", options: ["Email only", "Web, mobile, email, and in-app", "SMS only", "Social only"], correctAnswer: 1, explanation: "Personalization supports web, mobile, email, and in-app." },
  { question: "What is the purpose of segments in personalization?", options: ["To replace data", "To target and tailor experiences by audience", "To send only", "To report only"], correctAnswer: 1, explanation: "Segments target and tailor experiences by audience." },
  { question: "Which integration connects personalization to Marketing Cloud?", options: ["Manual only", "CDP, Journey Builder, and Email Studio", "Slack only", "Service Cloud only"], correctAnswer: 1, explanation: "CDP and Journey Builder connect to personalization." },
  { question: "What does building personalization solutions involve?", options: ["Only design", "Configuring decision rules, segments, and experiences", "Only coding", "Only reports"], correctAnswer: 1, explanation: "Building involves rules, segments, and experiences." },
  { question: "Which best practice applies to personalization?", options: ["Ignore data", "Privacy-first, test experiences, and measure lift", "No testing", "Static only"], correctAnswer: 1, explanation: "Privacy-first, testing, and measurement support success." },
  { question: "What is the benefit of Marketing Cloud Personalization?", options: ["No benefit", "Relevant experiences that drive engagement and conversion", "Generic only", "Manual only"], correctAnswer: 1, explanation: "Personalization drives relevant engagement and conversion." },
  { question: "What is an offer in Marketing Cloud Personalization?", options: ["A report", "A content asset (banner, message) presented based on rules or segments", "An email only", "A workflow only"], correctAnswer: 1, explanation: "Offers are content assets presented conditionally based on rules and audience." },
]

export default function MarketingCloudPersonalizationAPPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="AP" description="Accredited Marketing Cloud Personalization Professionals have demonstrated skills and knowledge in designing, configuring, building, and implementing Marketing Cloud Personalization." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Marketing Cloud Personalization', 'Personalization', 'Web', 'Mobile', 'Decisioning', 'Best Practices']}
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
