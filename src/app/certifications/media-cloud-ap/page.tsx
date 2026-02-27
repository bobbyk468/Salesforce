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

const slug = 'media-cloud-ap'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  { question: "What does Media Cloud AP validate?", options: ["Only basics", "Knowledge, skills, and experience to plan, design, and implement business value through Media Cloud", "Only reporting", "Only Slack"], correctAnswer: 1, explanation: "Accredited Media Cloud Professionals have knowledge, skills, and experience to plan, design, and implement business value to customers through Media Cloud." },
  { question: "Which industry does Media Cloud serve?", options: ["Retail only", "Media and entertainment (e.g., ad sales, content, rights)", "Healthcare only", "Education only"], correctAnswer: 1, explanation: "Media Cloud serves media and entertainment industries." },
  { question: "What is a key use case for Media Cloud?", options: ["Only email", "Ad sales, rights management, and campaign management", "Only CPQ", "Only Slack"], correctAnswer: 1, explanation: "Ad sales, rights management, and campaign management are key use cases." },
  { question: "Which role typically pursues Media Cloud AP?", options: ["Marketers", "Partners and implementers in media and entertainment", "Sales only", "Designers only"], correctAnswer: 1, explanation: "Partners and implementers in media pursue this credential." },
  { question: "What does 'implement business value' mean in Media Cloud context?", options: ["Only shipping", "Delivering solutions that drive outcomes for media customers", "Only reporting", "Only dashboards"], correctAnswer: 1, explanation: "It means delivering solutions that drive outcomes for media customers." },
  { question: "What is ad sales management in Media Cloud?", options: ["Email only", "Managing ad inventory, proposals, and sales workflows for media", "Only reports", "Only dashboards"], correctAnswer: 1, explanation: "Ad sales covers inventory, proposals, and sales processes." },
  { question: "What is rights management in media?", options: ["Only legal", "Managing content rights, licensing, and distribution terms", "Only marketing", "Only sales"], correctAnswer: 1, explanation: "Rights management tracks content rights and licensing." },
  { question: "Which Salesforce products does Media Cloud often integrate with?", options: ["Slack only", "Industries CPQ, Billing, and CRM for media workflows", "Marketing Cloud only", "Commerce Cloud only"], correctAnswer: 1, explanation: "Media Cloud integrates with CPQ, Billing, and CRM." },
  { question: "What does campaign management mean in media context?", options: ["Email campaigns only", "Managing ad campaigns, flight dates, and delivery", "Only social", "Only SEO"], correctAnswer: 1, explanation: "Campaign management covers ad campaigns and delivery." },
  { question: "Why is the media industry unique for CRM?", options: ["It isn't", "Complex rights, inventory, and multi-party workflows", "Only standard objects", "Only simple pricing"], correctAnswer: 1, explanation: "Media has complex rights, inventory, and workflows." },
  { question: "What does 'plan and design' mean for Media Cloud?", options: ["Only coding", "Planning the solution architecture and designing the implementation", "Only reporting", "Only deployment"], correctAnswer: 1, explanation: "Plan = roadmap; design = solution architecture." },
  { question: "What is a rate card in media ad sales?", options: ["A report only", "Pricing structure for ad inventory (CPM, CPC, packages)", "A workflow only", "An email list"], correctAnswer: 1, explanation: "Rate cards define ad pricing and package structures for media sales." },
  { question: "What is ad inventory?", options: ["A report", "Available ad slots or units that can be sold", "A workflow only", "An email list"], correctAnswer: 1, explanation: "Ad inventory is the sellable ad space or units." },
  { question: "Which use case does Media Cloud support for content?", options: ["Only email", "Content rights, licensing, and distribution tracking", "Only CPQ", "Only Slack"], correctAnswer: 1, explanation: "Content rights and distribution are key use cases." },
  { question: "What does implement mean for Media Cloud AP?", options: ["Only coding", "Configuring and deploying the solution for the customer", "Only design", "Only training"], correctAnswer: 1, explanation: "Implement = configure and deploy." },
]

export default function MediaCloudAPPage() {
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
            
            <CertificationCard slug={slug} title={slugToDisplayName(slug)} code="AP" description="Accredited Media Cloud Professionals have knowledge, skills, and experience to plan, design, and implement business value to customers through Media Cloud." examDetails={{ questions: 60, passingScore: '~65%', duration: '90 min', cost: '$100' }} topics={['Media Cloud', 'Ad Sales', 'Rights', 'Campaign Management', 'Best Practices']}
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
