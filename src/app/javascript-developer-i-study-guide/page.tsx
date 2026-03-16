import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `JavaScript Developer I Study Guide (${RELEASE_CURRENT})`
const pageDescription = `JavaScript Developer I study guide: 6 exam sections, async, ES6+, LWC. $200, 60 questions. Free practice questions. Pass first attempt.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/javascript-developer-i-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/javascript-developer-i-study-guide`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `salesforce javascript developer i study guide, JavaScript Developer certification 2026, JS developer exam prep, LWC javascript certification`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'JavaScript Developer I Study Guide', url: '/javascript-developer-i-study-guide' },
]

const examSections = [
  { name: 'Variables, Data Types & Collections', weight: 23, note: 'var vs let vs const, scope (block, function, global), hoisting, primitive types (string, number, boolean, null, undefined, symbol, BigInt), arrays, Maps, Sets, and WeakMaps.' },
  { name: 'Objects, Functions & Classes', weight: 25, note: 'Object literals, prototypal inheritance, ES6 classes, constructors, getters/setters, static methods, arrow functions, closures, IIFE, higher-order functions, and the module pattern.' },
  { name: 'Browser & Events', weight: 17, note: 'DOM manipulation (querySelector, createElement, appendChild), event listeners, event bubbling vs capturing, event delegation, the browser event loop, and Web APIs (fetch, localStorage, setTimeout).' },
  { name: 'Asynchronous Programming', weight: 14, note: 'Promises (then/catch/finally, Promise.all, Promise.race), async/await syntax, the call stack and event queue, microtask vs macrotask queue, and error handling in async code.' },
  { name: 'Debugging & Error Handling', weight: 12, note: 'try/catch/finally, custom Error types, error propagation, using browser DevTools (breakpoints, watch expressions, call stack), console methods, and understanding stack traces.' },
  { name: 'Server-Side JavaScript & Testing', weight: 9, note: 'Node.js basics (require/import, npm, package.json), Jest testing framework (describe, it, expect, mocks), unit testing functions and async code, and common testing patterns.' },
]

const faqItems = [
  {
    question: 'What is the Salesforce JavaScript Developer I certification?',
    answer: 'The Salesforce JavaScript Developer I certification validates JavaScript skills relevant to building Salesforce Lightning Web Components (LWC) and client-side solutions. It tests JavaScript fundamentals, ES6+ features, asynchronous programming, browser APIs, and testing — not Salesforce-specific APIs. The exam has 60 questions, 105 minutes, ~65% passing score, and a $200 fee.',
  },
  {
    question: 'Do I need Salesforce experience for the JavaScript Developer I exam?',
    answer: 'The JavaScript Developer I exam does not require prior Salesforce experience. It tests JavaScript language skills directly — most questions are about vanilla JavaScript, not Salesforce-specific APIs like apex or wire decorators. However, the certification is intended for developers who will use JavaScript in a Salesforce context (LWC, Visualforce, custom apps).',
  },
  {
    question: 'How is JavaScript Developer I different from Platform Developer I (PD1)?',
    answer: 'PD1 tests Salesforce-platform skills: Apex, Visualforce, Lightning components, governor limits, and Salesforce data model. JavaScript Developer I tests pure JavaScript language skills: ES6+, asynchronous programming, OOP with classes, browser DOM, and testing. Many developers take both — PD1 for Salesforce back-end, JS Dev I for front-end JavaScript skills.',
  },
  {
    question: 'What ES6+ features are tested on the JavaScript Developer I exam?',
    answer: 'Key ES6+ features tested include: arrow functions, destructuring (object and array), template literals, default parameters, rest and spread operators, classes and inheritance, let/const vs var, Promises and async/await, modules (import/export), Map and Set collections, and Symbol. Focus especially on how each ES6 feature differs from its ES5 equivalent.',
  },
  {
    question: 'How long should I study for the JavaScript Developer I exam?',
    answer: 'Plan for 6–8 weeks with 8–12 hours per week. Candidates with strong JavaScript experience can prepare in 4 weeks. The best preparation is writing code — build small projects using each concept (a Promise chain, an ES6 class hierarchy, an event-driven DOM app) rather than only reading documentation. Use the browser DevTools console to test snippets.',
  },
]

export default function JavascriptDeveloperIStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/javascript-developer-i-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      {/* Header */}
      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Study Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce JavaScript Developer I Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Your complete guide to passing the JavaScript Developer I exam — ES6+, async programming, OOP, DOM events, testing, and free practice questions.
        </p>
      </div>

      {/* Exam At a Glance */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '60' },
          { label: 'Time Limit', value: '105 min' },
          { label: 'Passing Score', value: '~65%' },
          { label: 'Exam Fee', value: '$200' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Exam Sections */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Exam Sections &amp; Weightings</h2>
        <div className="space-y-4">
          {examSections.map((section) => (
            <div key={section.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-800">{section.name}</span>
                <span className="text-salesforce-blue font-semibold">{section.weight}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${section.weight * 4}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What Each Section Tests */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What Each Section Tests</h2>
        <div className="space-y-4">
          {examSections.map((section) => (
            <div key={section.name} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full bg-salesforce-blue/10 text-salesforce-dark text-xs font-bold">{section.weight}%</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{section.name}</h3>
                  <p className="text-sm text-gray-600">{section.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6-Week Study Plan */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">6-Week Study Plan</h2>
        <div className="space-y-3 text-sm">
          {[
            { week: 'Week 1', focus: 'Variables, scope, hoisting — understand var vs let vs const, temporal dead zone, block vs function scope, and how hoisting affects declarations.' },
            { week: 'Week 2', focus: 'Objects, Functions & Classes — write ES6 classes with inheritance, practice closures, arrow functions, destructuring, spread/rest, and the module pattern.' },
            { week: 'Week 3', focus: 'Browser & DOM — query and manipulate the DOM, add event listeners, understand bubbling vs capturing, implement event delegation on a list.' },
            { week: 'Week 4', focus: 'Async programming — write Promises from scratch, chain .then()/.catch(), use Promise.all() and Promise.race(), refactor to async/await, handle errors properly.' },
            { week: 'Week 5', focus: 'Error handling & Debugging — implement try/catch/finally, create custom Error classes, practice reading stack traces, use Chrome DevTools breakpoints.' },
            { week: 'Week 6', focus: 'Testing with Jest — write unit tests for functions (describe, it, expect), mock dependencies, test async functions. Then full mock exams under time pressure.' },
          ].map((item) => (
            <div key={item.week} className="flex gap-3">
              <span className="flex-shrink-0 font-semibold text-salesforce-blue w-16">{item.week}</span>
              <span className="text-gray-700">{item.focus}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scenario Tips */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Scenario Strategy Tips</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">1.</span><span><strong>Scope and hoisting traps:</strong> var declarations are hoisted to the top of their function scope; let and const are hoisted to their block scope but not initialised (temporal dead zone). Many exam questions present code and ask what it outputs — trace through hoisting first.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">2.</span><span><strong>Promise chaining vs async/await:</strong> Both are tested. Know that async functions always return a Promise, that await unwraps the Promise value, and that errors in async functions must be caught with try/catch. Know that Promise.all() rejects if ANY promise rejects.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">3.</span><span><strong>Event bubbling vs capturing:</strong> Events bubble from the target element up to the document. Event capturing goes down from the document to the target. addEventListener&apos;s third argument (true = capture, false = bubble, default). Event.stopPropagation() stops the phase; Event.preventDefault() blocks default browser behaviour.</span></li>
          <li className="flex gap-2"><span className="text-salesforce-blue font-bold flex-shrink-0">4.</span><span><strong>this keyword context:</strong> In a regular function, this is determined by how the function is called. Arrow functions inherit this from their enclosing lexical scope. This distinction is commonly tested in class method and callback scenarios.</span></li>
        </ul>
      </div>

      {/* Mock Benchmark */}
      <div className="bg-salesforce-blue/5 rounded-xl border border-salesforce-blue/20 p-5 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Mock Exam Benchmark</h2>
        <p className="text-sm text-gray-700">Aim for <strong>75%+ on practice exams</strong> before scheduling. Objects, Functions &amp; Classes (25%) and Variables (23%) together account for nearly half the exam — master scope, closures, and ES6 class syntax first. Many exam questions show a code snippet and ask what it outputs, so trace through execution order carefully.</p>
      </div>

      {/* Top 10 Review */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Top 10 Concepts to Review</h2>
        <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
          <li>var vs let vs const — scope, hoisting, temporal dead zone</li>
          <li>Closures — function remembering its outer scope variables after outer function returns</li>
          <li>ES6 classes: constructor, inheritance (extends/super), static methods, getters/setters</li>
          <li>Arrow functions — no own this, no arguments object, implicit return</li>
          <li>Destructuring: object and array syntax &mdash; pulling values from objects and arrays into variables</li>
          <li>Promises: then/catch/finally chains, Promise.all, Promise.race, Promise.allSettled</li>
          <li>async/await: error handling with try/catch, parallel execution with Promise.all</li>
          <li>Event bubbling vs capturing and event.stopPropagation vs preventDefault</li>
          <li>Prototype chain and prototypal inheritance (Object.create, __proto__)</li>
          <li>Jest testing: describe/it/expect, .toBe vs .toEqual, mocking with jest.fn()</li>
        </ol>
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <dl className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
              <dd className="text-sm text-gray-700">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* CTA */}
      <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 mb-8">
        <h2 className="text-base font-bold text-gray-900 mb-3">Compare Certifications</h2>
        <ul className="space-y-2">
          <li><Link href="/javascript-developer-i-vs-pd1" className="text-sm text-salesforce-dark hover:underline font-medium">→ JavaScript Developer I vs Platform Developer I — comparison</Link></li>
        </ul>
      </div>

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Ready to Practice?</h2>
        <p className="text-blue-100 mb-6">Test yourself with free JavaScript Developer I practice questions covering all 6 exam sections.</p>
        <Link
          href="/certifications/javascript-developer-i"
          className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Start Free Practice Questions
        </Link>
      </div>
    </div>
  )
}
