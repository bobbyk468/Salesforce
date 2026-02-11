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

const slug = 'javascript-developer-i'
export const metadata = getCertMetadata(slug)

const sampleQuestions = [
  {
    question: "Which JavaScript feature is used to handle asynchronous operations without blocking the main thread?",
    options: ["Callbacks only", "Promises and async/await", "Synchronous loops", "var declarations"],
    correctAnswer: 1,
    explanation: "Promises and async/await are the modern JavaScript approach for handling asynchronous operations.",
  },
  {
    question: "What is the primary use of Lightning Web Components (LWC) in the Salesforce ecosystem?",
    options: ["Backend Apex only", "Building reactive UI components that run on the Lightning Platform", "Email templates", "Data modeling"],
    correctAnswer: 1,
    explanation: "LWC is the standard for building performant, reusable UI components on the Salesforce Lightning Platform.",
  },
  {
    question: "Which keyword creates a block-scoped variable in JavaScript?",
    options: ["var", "let", "function", "global"],
    correctAnswer: 1,
    explanation: "let (and const) create block-scoped variables; var is function-scoped.",
  },
  {
    question: "What does the shadow DOM provide in web components?",
    options: ["Server-side rendering", "Encapsulation of styles and markup", "Database access", "API keys"],
    correctAnswer: 1,
    explanation: "Shadow DOM provides style and markup encapsulation so component internals don't leak out.",
  },
  {
    question: "Which LWC decorator makes a property available to the component's template?",
    options: ["@api", "@track", "@wire", "@invocable"],
    correctAnswer: 0,
    explanation: "@api exposes a public property that can be set by a parent component.",
  },
]

export default function JavaScriptDeveloperIPage() {
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
            code="JS Developer I"
            description="Certified JavaScript Developers have experience developing front-end and/or back-end JavaScript applications for the web stack, and work with JavaScript related technologies like Lightning Web Components."
            examDetails={{ questions: 60, passingScore: '~68%', duration: '105 min', cost: '$200' }}
            topics={['JavaScript Fundamentals', 'ES6+', 'DOM & Events', 'Lightning Web Components', 'Aura Basics', 'Debugging', 'Testing', 'Performance', 'Security', 'Salesforce APIs']}
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