import FullQuestionBankCta from '@/components/FullQuestionBankCta'
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

const slug = 'marketing-cloud-engagement-developer'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

const sampleQuestions = [
  {
    question: "Which Marketing Cloud scripting language is used for server-side logic in emails and landing pages?",
    options: ["Apex", "AMPscript", "Visualforce", "LWC"],
    correctAnswer: 1,
    explanation: "AMPscript is Marketing Cloud's scripting language for personalization and dynamic content in emails and landing pages.",
  },
  {
    question: "What is Server-Side JavaScript (SSJS) used for in Marketing Cloud?",
    options: ["Client-side only", "Script Activities in Automation Studio and advanced scripting", "CPQ configuration", "Slack apps"],
    correctAnswer: 1,
    explanation: "SSJS is used in Script Activities and for advanced server-side logic in Marketing Cloud.",
  },
  {
    question: "Which function retrieves a value from a Data Extension row in AMPscript?",
    options: ["LOOKUP", "VLOOKUP", "GET", "RETRIEVE"],
    correctAnswer: 0,
    explanation: "The LOOKUP function retrieves a single value from a Data Extension based on matching criteria.",
  },
  {
    question: "What is the purpose of personalization strings in Marketing Cloud emails?",
    options: ["To encrypt data", "To insert dynamic content from subscriber attributes", "To schedule sends", "To delete contacts"],
    correctAnswer: 1,
    explanation: "Personalization strings (e.g., %%First_Name%%) insert subscriber or data extension values into content.",
  },
  {
    question: "Which Marketing Cloud product is used to build and host landing pages with dynamic content?",
    options: ["Sales Cloud", "Cloud Pages", "Slack", "Heroku"],
    correctAnswer: 1,
    explanation: "Cloud Pages (formerly Landing Pages) host web pages with AMPscript and dynamic content.",
  },
]

export default function MarketingCloudEngagementDeveloperPage() {
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
            code="MC Engagement Developer"
            description="Certified Marketing Cloud Developers have experience developing across the full platform. They create personalized, dynamic messages and landing pages, and are fluent in Marketing Cloud scripting languages."
            examDetails={{ questions: 60, passingScore: '~67%', duration: '105 min', cost: '$200' }}
            topics={['AMPscript', 'SSJS', 'Data Extensions', 'Cloud Pages', 'Email Development', 'APIs', 'Automation', 'Personalization', 'Testing', 'Best Practices']}
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