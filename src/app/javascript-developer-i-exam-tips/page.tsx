import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `JavaScript Developer I Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce JavaScript Developer I exam tips for ${RELEASE_CURRENT}: JavaScript fundamentals, LWC, Apex integration Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {  // Canonical to cert page — prevents GSC "chose different canonical"
  canonical: `${siteUrl}/certifications/javascript-developer-i`,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/javascript-developer-i-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `JavaScript Developer I exam tips ${RELEASE_CURRENT}, how to pass Salesforce JavaScript Developer I, JSD1 exam study guide, Salesforce LWC certification`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'JavaScript Developer I Exam Tips', url: '/javascript-developer-i-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Salesforce JavaScript Developer I exam format?',
    answer: 'The Salesforce JavaScript Developer I exam has 60 multiple-choice questions, a 105-minute time limit, a 65% passing score, and a $200 fee ($100 retake). It tests JavaScript language fundamentals, browser APIs, Node.js basics, testing, and Lightning Web Components (LWC).',
  },
  {
    question: 'What are the highest-weight JavaScript Developer I exam sections?',
    answer: 'JavaScript Fundamentals (23%) and Lightning Web Components (25%) together account for 48% of the exam. Variables, closures, promises, async/await, the event loop, and LWC component lifecycle are the most heavily tested topics.',
  },
  {
    question: 'Do I need Apex knowledge for JavaScript Developer I?',
    answer: 'The exam primarily tests JavaScript, not Apex. However, you need to understand how LWC components interact with Apex — wire adapters, imperative Apex calls, and how @AuraEnabled methods work. Deep Apex coding knowledge is not required but understanding the Apex-LWC boundary is.',
  },
  {
    question: 'What is the hardest part of the JavaScript Developer I exam?',
    answer: 'Asynchronous JavaScript (Promises, async/await, event loop execution order) and LWC lifecycle hooks are the most frequently cited challenges. Candidates who only know JavaScript superficially — without understanding closures, prototype chain, and the event loop — struggle with the trick questions in these areas.',
  },
]

export default function JavaScriptDeveloperIExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/javascript-developer-i-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce JavaScript Developer I Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The JavaScript Developer I exam tests your knowledge of JavaScript language fundamentals and Lightning Web
          Components. These tips focus on the asynchronous patterns, LWC lifecycle, and browser APIs that define
          the hardest questions on this exam.
        </p>
      </header>

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Exam At a Glance</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">60</p>
            <p className="text-xs text-gray-500 mt-0.5">Questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">105 min</p>
            <p className="text-xs text-gray-500 mt-0.5">Time Limit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">65%</p>
            <p className="text-xs text-gray-500 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$200</p>
            <p className="text-xs text-gray-500 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What JavaScript Developer I Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>JavaScript fundamentals</strong> — Variable scoping (var/let/const), closures, prototype chain, the event loop, promises, async/await, and error handling. The exam tests language behaviour, not just syntax.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Lightning Web Components (LWC)</strong> — Component lifecycle hooks (@api, @track, @wire), event communication between parent and child, wire adapters vs. imperative Apex calls, and reactive properties.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Browser and Node fundamentals</strong> — DOM manipulation, fetch API, modules (import/export), and Node.js basics (npm, module system). Testing concepts with Jest are also tested.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Lightning Web Components</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">JavaScript Fundamentals</span>
            <span className="font-bold text-salesforce-blue ml-4">23%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Asynchronous Programming</span>
            <span className="font-bold text-salesforce-blue ml-4">20%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Testing and Debugging</span>
            <span className="font-bold text-salesforce-blue ml-4">14%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">LWC + Fundamentals + Async = 68%. Master the event loop, promises, and LWC lifecycle before anything else.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach JavaScript Developer I Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions present JavaScript code snippets and ask what the output is, or describe an LWC requirement
          and ask which decorator or pattern to use. Read code questions carefully — variable hoisting,
          closure scope, and promise resolution order are common traps.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For async questions: understand the order of execution — synchronous code first, then microtasks (Promise.then), then macrotasks (setTimeout). This determines output order in code-reading questions.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For LWC questions: @api exposes properties to parent components; @wire connects to Salesforce data; @track (legacy) makes complex objects reactive. Know when to use wire vs. imperative Apex calls — wire for read-only data that refreshes automatically, imperative for conditional/user-triggered data loads.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For event questions: custom events use CustomEvent and dispatch upward. Child-to-parent: fire event from child, listen with on[eventname] in parent template. Parent-to-child: use @api property or method call. Know this direction — it is tested directly.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Build at least 3–5 LWC components in a Salesforce scratch org or Developer Edition before booking.
          Candidates who only study theory without hands-on LWC experience consistently struggle with
          the implementation scenario questions that make up the bulk of the exam.
        </p>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <dl className="space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
              <dd className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: item.answer }} />
            </div>
          ))}
        </dl>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Related Exam Tips</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/pd1-exam-tips-2026" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">PD1 Exam Tips</span>
          </Link>
          <Link href="/app-builder-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">App Builder Exam Tips</span>
          </Link>
          <Link href="/pd1-vs-pd2" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">PD1 vs PD2</span>
          </Link>
          <Link href="/developer-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Developer Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start JavaScript Developer I Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/javascript-developer-i" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            JavaScript Developer I Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/pd1-exam-tips-2026" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Platform Developer I Tips
          </Link>
          <Link href="/developer-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Developer Certification Path
          </Link>
        </div>
      </section>
    </div>
  )
}
