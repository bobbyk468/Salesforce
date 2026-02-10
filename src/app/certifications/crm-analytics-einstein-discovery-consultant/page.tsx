import CertificationCard from '@/components/CertificationCard'
import ExamPrepContent from '@/components/ExamPrepContent'
import CertPageSeo, { CertPageFaq } from '@/components/CertPageSeo'
import CertPageIntro from '@/components/CertPageIntro'
import CertPageCta from '@/components/CertPageCta'
import ExamFeesSection from '@/components/ExamFeesSection'
import RelatedCertifications from '@/components/RelatedCertifications'
import CertTableOfContents from '@/components/CertTableOfContents'
import { getCertMetadata, getCertH1Text, getCertExamWeightageHeading, getCertPracticeQuestionsHeading, slugToDisplayName } from '@/lib/cert-seo-data'
import QuestionCard from '@/components/QuestionCard'
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

const slug = 'crm-analytics-einstein-discovery-consultant'
export const metadata = getCertMetadata(slug)

const sampleQuestions = [
  {
    question: "What is CRM Analytics (formerly Tableau CRM) used for?",
    options: ["Only reports", "Embedded analytics, dashboards, and data exploration on Salesforce data", "Email only", "CPQ only"],
    correctAnswer: 1,
    explanation: "CRM Analytics provides embedded analytics, dashboards, and data exploration on Salesforce and connected data.",
  },
  {
    question: "What does Einstein Discovery provide?",
    options: ["Only charts", "Predictive insights and recommendations powered by AI", "Slack only", "Static reports only"],
    correctAnswer: 1,
    explanation: "Einstein Discovery delivers AI-powered predictive insights and recommendations.",
  },
  {
    question: "Which role does a CRM Analytics and Einstein Discovery Consultant typically fulfill?",
    options: ["Email marketing", "Designing and implementing on CRM Analytics and Einstein Discovery in a customer-facing or internal architect role", "Slack configuration", "UI design only"],
    correctAnswer: 1,
    explanation: "They design and implement CRM Analytics and Einstein Discovery in customer-facing or architect roles.",
  },
  {
    question: "What is a Lens in CRM Analytics?",
    options: ["A report type", "A reusable dataset or query that powers dashboards", "An email", "A campaign"],
    correctAnswer: 1,
    explanation: "A Lens defines a dataset or query that can be reused across dashboards and apps.",
  },
  {
    question: "Which capability allows users to ask questions in natural language in CRM Analytics?",
    options: ["Only SAQL", "Einstein Ask (natural language to query)", "Dataflow only", "Dashboard only"],
    correctAnswer: 1,
    explanation: "Einstein Ask allows users to query data using natural language.",
  },
]

export default function CRMAnalyticsEinsteinDiscoveryConsultantPage() {
  const examSections = getExamWeightage(slug)
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <CertPageSeo slug={slug} certTitle={slugToDisplayName(slug)} />
      <CertPageIntro slug={slug} />
        
        {/* Prominent CTA above fold */}
        <CertPageCta slug={slug} certTitle={slugToDisplayName(slug)} />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
            {/* Exam Fees & Registration section */}
            <ExamFeesSection slug={slug} />
            
            <CertificationCard
            title={slugToDisplayName(slug)}
            code="Analytics & Discovery"
            description="Certified CRM Analytics and Einstein Discovery Consultants have experience designing and implementing on the CRM Analytics and Einstein Discovery platforms in a customer-facing or internal architect role."
            examDetails={{ questions: 60, passingScore: '~65%', duration: '105 min', cost: '$200' }}
            topics={['CRM Analytics', 'Einstein Discovery', 'Dashboards', 'Dataflows', 'Lenses', 'SAQL', 'Predictions', 'Best Practices', 'Governance', 'Integration']}
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
          
          <div id="more-questions" className="mt-12 bg-salesforce-blue/10 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Want More Practice Questions?</h3>
            <p className="text-gray-600 mb-6">Get access to our complete question bank with detailed explanations.</p>
            <a href="/contact" className="inline-block px-8 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-all duration-200 shadow-md hover:shadow-lg active:scale-95">Contact Us for Full Access</a>
          </div>

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