import FullQuestionBankCta from '@/components/FullQuestionBankCta'
import Link from 'next/link'
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
import { Metadata } from 'next'
import { getExamWeightage } from '@/lib/exam-weightage-data'

import dynamic from 'next/dynamic'
import DifficultyHeatmap from '@/components/DifficultyHeatmap'
const PracticeQuestionsSection = dynamic(
  () => import('@/components/PracticeQuestionsSection'),
  {
    ssr: false,
    loading: () => (
      <div id="practice-questions" className="mt-12 min-h-[440px] w-full" aria-hidden="true" />
    ),
  }
)

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
        <CertIntroParagraph slug={slug} />
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

          {/* Key Concepts */}
          <div id="key-concepts" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">JavaScript Developer I: Key Concepts for the Exam</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">JavaScript ES6+ Fundamentals</p>
                <p>The exam tests modern JavaScript syntax. let and const for block-scoped variables (never var). Arrow functions and lexical this binding. Destructuring for arrays and objects. Template literals (backtick strings). Spread/rest operators. Promises for async operations. async/await for readable async code. The exam presents code snippets and asks about scoping, closures, prototype chain, or async behaviour &mdash; understanding ES6+ is the foundation for LWC development.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Web Component Standards (W3C)</p>
                <p>Lightning Web Components are built on Web Component standards: Custom Elements (define new HTML elements), Shadow DOM (encapsulated styles and markup), HTML Templates (declarative rendering). Understanding these standards is tested because LWC implements them directly. Shadow DOM encapsulation means CSS from outside cannot affect component internals by default. The exam tests how the Shadow DOM affects event propagation (events do not cross shadow boundaries unless composed:true is set).</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Lightning Web Components: Lifecycle and Reactivity</p>
                <p>LWC lifecycle hooks: connectedCallback (component added to DOM), disconnectedCallback (removed from DOM), renderedCallback (after every render). @track (now redundant &mdash; all properties are reactive by default), @api (public property, set by parent), @wire (reactive data binding to Apex or platform adapters). The exam tests which lifecycle hook to use for a given scenario &mdash; connectedCallback for initial data fetch, renderedCallback for post-render DOM manipulation (with caution).</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Apex Integration: @wire and Imperative Calls</p>
                <p>@wire automatically calls Apex and re-calls when parameters change &mdash; use for read-only data that should refresh reactively. Imperative calls (calling Apex directly like a JS function) are used when you need explicit control &mdash; on button click, or when combining results. @wire uses the getRecord and getFieldValue adapters from lightning/uiRecordApi for record access. The @AuraEnabled(cacheable=true) annotation is required on Apex methods called via @wire. The exam tests which approach to use for a given data-fetching scenario.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Security in LWC and LockerService</p>
                <p>Locker Service is Salesforce&apos;s security architecture for Lightning components &mdash; it isolates components from each other and restricts access to the DOM. LWC uses Lightning Web Security (LWS) &mdash; similar isolation but more permissive for standard APIs. The exam tests what Locker/LWS prevents (direct DOM manipulation of other components, eval(), dangerous APIs). Permission checks should be done server-side in Apex, not in the component (UI checks can be bypassed). CRUD and FLS enforcement belongs in the @AuraEnabled Apex method, not the component.</p>
              </div>
            </div>
          </div>


          {/* How to Pass Scenario Strategy */}
          <div id="scenario-tips" className="mt-12 rounded-xl border border-gray-100 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pass the Salesforce JavaScript Developer I Exam</h2>
            <p className="text-sm text-gray-600 mb-5">
              The JavaScript Developer I exam tests core JavaScript and modern web concepts applied in the Salesforce context. Treat it as a JavaScript fundamentals exam first — LWC knowledge is important, but strong ES6+ and async programming foundations are what carry candidates through.
            </p>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Master ES6+ Syntax</p>
                <p>Arrow functions, destructuring, spread/rest operators, template literals, modules (import/export), and classes are heavily tested. Know how each differs from ES5 equivalents and common pitfalls.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Promises &amp; Async/Await</p>
                <p>Understand the Promise lifecycle (pending, fulfilled, rejected), chaining with .then()/.catch()/.finally(), and how async/await is syntactic sugar over promises. Know how errors propagate and how Promise.all() works.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Closures, Scope &amp; &apos;this&apos;</p>
                <p>These classic JavaScript topics appear frequently. Understand lexical scope, how closures capture variables from outer functions, and the four rules that determine what &apos;this&apos; refers to (default, implicit, explicit, new binding).</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">LWC Lifecycle &amp; Reactivity</p>
                <p>Know the LWC component lifecycle hooks: constructor, connectedCallback, renderedCallback, disconnectedCallback. Understand reactive properties, how @track (legacy) and @api work, and how the wire service fetches data reactively.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">The Event Loop &amp; Web APIs</p>
                <p>Understand call stack, event loop, microtask queue (promises), and macrotask queue (setTimeout). Know the fetch API, async patterns for HTTP calls, and how LWC&apos;s shadow DOM restricts direct DOM manipulation.</p>
              </div>
            </div>
          </div>

          

          <DifficultyHeatmap slug={slug} />

          <PracticeQuestionsSection
            heading={getCertPracticeQuestionsHeading(slug)}
            introText={getPracticeQuestionsIntro(sampleQuestions.length)}
            questions={sampleQuestions}
          />

          
                    <FullQuestionBankCta slug={slug} certTitle={slugToDisplayName(slug)} />

                    <section className="mt-8 rounded-xl border border-blue-100 bg-blue-50/40 p-5 sm:p-6" aria-labelledby="next-certs-heading">
            <h2 id="next-certs-heading" className="text-base font-semibold text-gray-900 mb-3">Next Certifications After Developer</h2>
            <p className="text-sm text-gray-700 mb-2">After this certification, common next steps in the developer track:</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/certifications/developer-2" className="text-salesforce-blue font-medium hover:underline">Platform Developer II</Link></li>
              <li><Link href="/certifications/app-builder" className="text-salesforce-blue font-medium hover:underline">Platform App Builder</Link></li>
              <li><Link href="/certifications/javascript-developer-i" className="text-salesforce-blue font-medium hover:underline">JavaScript Developer I</Link></li>
              <li><Link href="/certifications/role/developer" className="text-salesforce-blue font-medium hover:underline">Developer certification path</Link></li>
            </ul>
          </section>

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
              { id: 'key-concepts', title: 'Key Concepts' },
              { id: 'scenario-tips', title: 'How to Pass' },
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
