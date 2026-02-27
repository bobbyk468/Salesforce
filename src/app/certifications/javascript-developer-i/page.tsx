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

const slug = 'javascript-developer-i'
export async function generateMetadata() {
  return getCertMetadata(slug)
}

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
  {
    question: "Which LWC wire adapter is used to get a record by Id?",
    options: [
      "getListUi",
      "getRecord",
      "getObjectInfo",
      "createRecord"
    ],
    correctAnswer: 1,
    explanation: "getRecord wire adapter fetches a record by Id with specified fields."
  },
  {
    question: "What does the spread operator (...) do in JavaScript?",
    options: [
      "Deletes properties",
      "Expands iterables or copies/merges objects",
      "Creates classes",
      "Handles errors"
    ],
    correctAnswer: 1,
    explanation: "The spread operator expands arrays or copies/merges object properties."
  },
  {
    question: "Which LWC lifecycle hook runs when the component is inserted into the DOM?",
    options: [
      "disconnectedCallback",
      "connectedCallback",
      "renderedCallback",
      "errorCallback"
    ],
    correctAnswer: 1,
    explanation: "connectedCallback runs when the component is added to the DOM."
  },
  {
    question: "What is the purpose of @wire in LWC?",
    options: [
      "To track state",
      "To reactively fetch data or call Apex imperatively with reactive parameters",
      "To expose properties",
      "To handle events"
    ],
    correctAnswer: 1,
    explanation: "@wire reactively fetches data when parameters change."
  },
  {
    question: "Which JavaScript method creates a new array from another without mutating the original?",
    options: [
      "push",
      "map or slice",
      "splice",
      "pop"
    ],
    correctAnswer: 1,
    explanation: "map and slice return new arrays; they don't mutate the original."
  },
  {
    question: "What does event.target refer to in a DOM event handler?",
    options: [
      "The parent element",
      "The element that dispatched the event",
      "The document",
      "The window"
    ],
    correctAnswer: 1,
    explanation: "event.target is the element that triggered the event."
  },
  {
    question: "Which Aura component attribute type is similar to @api in LWC?",
    options: [
      "aura:handler",
      "aura:attribute with access='global' or 'public'",
      "aura:registerEvent",
      "aura:method"
    ],
    correctAnswer: 1,
    explanation: "aura:attribute with public/global access exposes data like @api."
  },
  {
    question: "What is a JavaScript module?",
    options: [
      "A class only",
      "A file that exports bindings for reuse and encapsulates code",
      "A function only",
      "A variable only"
    ],
    correctAnswer: 1,
    explanation: "Modules export bindings and provide encapsulation via import/export."
  },
  {
    question: "Which LWC method is used to navigate programmatically?",
    options: [
      "window.location",
      "NavigationMixin.GeneratePage",
      "history.push",
      "NavigationMixin is not used"
    ],
    correctAnswer: 1,
    explanation: "NavigationMixin.GeneratePage enables programmatic navigation in LWC."
  },
  {
    question: "What does const prevent in JavaScript?",
    options: [
      "Variable declaration",
      "Reassignment of the variable binding (but not mutation of objects)",
      "All mutations",
      "Block scope"
    ],
    correctAnswer: 1,
    explanation: "const prevents reassignment; object/array contents can still be mutated."
  },
]

export default function JavaScriptDeveloperIPage() {
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
            
            <CertificationCard
              slug={slug}
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
            <p className="text-gray-600 mb-8">{getPracticeQuestionsIntro(sampleQuestions.length)}</p>
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
