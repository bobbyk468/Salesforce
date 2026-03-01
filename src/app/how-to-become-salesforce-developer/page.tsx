import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, ArrowRight, BookOpen, Target } from 'lucide-react'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `How to Become a Salesforce Developer (${RELEASE_CURRENT} Guide)`
const pageDescription = `How to become a Salesforce Developer in 2026: from zero to PD1 certified in 12–16 weeks. Step-by-step guide with free resources, salary data, and career tips.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/how-to-become-salesforce-developer` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/how-to-become-salesforce-developer`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `how to become salesforce developer, salesforce developer career path, PD1 certification guide, salesforce developer salary 2026, learn salesforce development`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'How to Become a Salesforce Developer', url: '/how-to-become-salesforce-developer' },
]

const faqItems = [
  {
    question: 'How long does it take to become a Salesforce Developer?',
    answer: 'From no prior Salesforce experience to PD1 certified and job-ready, expect 6–12 months. The technical learning curve is steeper than the admin path: Apex is a statically typed language similar to Java, and Lightning Web Components requires JavaScript proficiency. Candidates with prior programming experience (Java, C#, Python, JavaScript) typically reach PD1 in 12–16 weeks of focused study. True beginners may take 6–9 months.',
  },
  {
    question: 'Do I need to know programming before becoming a Salesforce Developer?',
    answer: 'Prior programming experience is very helpful but not strictly required. Salesforce recommends starting with ADM-201 (admin certification) before PD1 — the Salesforce platform, data model, and security model must be understood before writing Apex. If you have no programming background, budget extra time for Apex fundamentals. JavaScript knowledge is increasingly important for Lightning Web Components.',
  },
  {
    question: 'What is the Salesforce Platform Developer I (PD1) certification?',
    answer: 'PD1 (Platform Developer I, exam DEV-450) is the foundational Salesforce developer certification. It tests Apex triggers and classes, SOQL and SOSL, governor limits, Lightning Web Components (LWC), Visualforce basics, testing (Test.startTest/stopTest, assert methods), and deployment (change sets, SFDX). The exam is 60 questions, 105 minutes, ~65% passing score, $200 fee.',
  },
  {
    question: 'What is the Salesforce developer salary in 2026?',
    answer: 'Entry-level Salesforce Developers (PD1 certified, 0–2 years experience) typically earn $75,000–$100,000 USD. Mid-level developers with PD1 + PD2 and 2–5 years of experience earn $100,000–$140,000. Senior developers and architects earn $140,000–$180,000+. Contract Salesforce developers typically earn $85–$130 per hour. Salaries vary significantly by location — US tech hubs pay 20–40% more than national averages.',
  },
  {
    question: 'What comes after Platform Developer I?',
    answer: 'After PD1, the most common next steps are: Platform Developer II (PD2) — tests advanced Apex patterns, integration architecture, performance optimisation; JavaScript Developer I — validates JavaScript/LWC skills specifically; Salesforce Architect path — starting with Integration Architect or Data Architect requires strong PD1 knowledge. Many developers also pursue administrator-track certs (App Builder, Advanced Admin) alongside their developer credentials.',
  },
]

const steps = [
  {
    step: '1',
    title: 'Learn Salesforce Platform Basics',
    time: '4–6 weeks',
    description: 'Before writing a single line of Apex, you need to understand the Salesforce platform thoroughly. Start with Trailhead — the Salesforce Fundamentals trail covers objects, fields, the data model, security model (profiles, roles, sharing), and basic automation. Create a free Salesforce Developer Edition org and follow along hands-on.',
    resources: ['Salesforce Platform Basics (Trailhead)', 'Data Modeling trail (Trailhead)', 'Free Salesforce Developer Edition org'],
  },
  {
    step: '2',
    title: 'Learn Apex Fundamentals',
    time: '4–6 weeks',
    description: 'Apex is Salesforce\'s proprietary Java-like language. Study Apex syntax, data types, collections (List, Set, Map), SOQL and SOSL, triggers (before/after, insert/update/delete), classes, exception handling, and governor limits. The 75% code coverage requirement for deployment is a key concept. Practice writing triggers and classes in your Developer Edition org.',
    resources: ['Apex Basics & Database trail (Trailhead)', 'Apex Developer Guide (Salesforce docs)', 'Trigger Fundamentals trail'],
  },
  {
    step: '3',
    title: 'Learn Lightning Web Components (LWC)',
    time: '3–4 weeks',
    description: 'LWC is Salesforce\'s modern front-end framework built on Web Standards. You need solid JavaScript (ES6+) before starting LWC. Learn LWC component structure (HTML template, JS controller, CSS), data binding, event handling (@api, @track, @wire decorators), calling Apex from LWC, and deploying components with SFDX. JavaScript Developer I certification complements this step.',
    resources: ['JavaScript Skills for Salesforce Developers (Trailhead)', 'Lightning Web Components Basics (Trailhead)', 'LWC Dev Guide (developer.salesforce.com)'],
  },
  {
    step: '4',
    title: 'Study Platform Developer I (PD1) Exam',
    time: '3–4 weeks',
    description: 'With solid Apex and LWC knowledge, focus PD1 exam preparation on the specific exam sections: Salesforce Fundamentals (23%), Process Automation &amp; Logic (38%), User Interface (25%), and Testing, Debugging &amp; Deployment (14%). Practice questions, review weak areas, and target 75%+ on mocks before scheduling.',
    resources: ['Trailblaze Prep PD1 practice questions (free)', 'PD1 Study Guide', 'PD1 Exam Tips 2026'],
  },
  {
    step: '5',
    title: 'Get Project Experience',
    time: 'Ongoing',
    description: 'Certification opens doors, but project experience closes the deal. Contribute to Salesforce projects through pro bono work (Salesforce.org Nonprofit), open-source projects, or internal Salesforce implementations at your current employer. Document your work in a GitHub portfolio — Salesforce employers increasingly review code samples alongside certifications.',
    resources: ['Salesforce.org Nonprofit volunteer opportunities', 'GitHub portfolio with Apex/LWC samples', 'Salesforce Stack Exchange (answer questions to build reputation)'],
  },
]

export default function HowToBecomeSalesforceDeveloperPage() {
  const webPageJsonLd = getWebPageJsonLd({ name: pageTitle, description: pageDescription, path: '/how-to-become-salesforce-developer', breadcrumbItems })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline: pageTitle, description: pageDescription, path: '/how-to-become-salesforce-developer' })
  const faqJsonLd = getFaqPageJsonLd(faqItems)

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Header */}
      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-blue text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Career Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          How to Become a Salesforce Developer ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          From zero to Salesforce Developer — the step-by-step path to PD1 certification, LWC skills, and your first Salesforce development role.
        </p>
      </div>

      {/* At a Glance */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Time to PD1', value: '12–16 wks' },
          { label: 'Exam Fee', value: '$200' },
          { label: 'Entry Salary', value: '$75k–$100k' },
          { label: 'Key Cert', value: 'PD1' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Step-by-Step Guide */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step Developer Path</h2>
        <div className="space-y-6">
          {steps.map((item) => (
            <div key={item.step} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-salesforce-blue text-white flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <span className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      <Clock className="h-3 w-3" /> {item.time}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                  <ul className="space-y-1">
                    {item.resources.map((r) => (
                      <li key={r} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certification Path */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Salesforce Developer Certification Path</h2>
        <div className="space-y-3 text-sm text-gray-700">
          {[
            { cert: 'ADM-201 (Administrator)', note: 'Recommended first — establishes Salesforce platform knowledge' },
            { cert: 'Platform Developer I (PD1)', note: 'Core developer credential — Apex, LWC, SOQL, governor limits, deployment' },
            { cert: 'JavaScript Developer I', note: 'Validates JavaScript/ES6+ skills used in LWC development' },
            { cert: 'Platform Developer II (PD2)', note: 'Advanced developer — Apex patterns, integration architecture, performance' },
            { cert: 'Architect Track', note: 'After PD1+PD2: Integration Architect, Data Architect → Application Architect → CTA' },
          ].map((item, i) => (
            <div key={item.cert} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-salesforce-blue/10 text-salesforce-blue text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
              <div>
                <span className="font-semibold text-gray-900">{item.cert}</span>
                <span className="text-gray-500"> — {item.note}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Salary Info */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Salesforce Developer Salary ({RELEASE_CURRENT})</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { level: 'Entry-Level', range: '$75k–$100k', desc: 'PD1 certified, 0–2 years experience' },
            { level: 'Mid-Level', range: '$100k–$140k', desc: 'PD1 + PD2, 2–5 years experience' },
            { level: 'Senior/Architect', range: '$140k–$180k+', desc: 'Multiple certs, 5+ years experience' },
          ].map((tier) => (
            <div key={tier.level} className="rounded-lg bg-gray-50 border border-gray-100 p-4 text-center">
              <div className="text-sm text-gray-500 mb-1">{tier.level}</div>
              <div className="text-xl font-bold text-salesforce-blue mb-1">{tier.range}</div>
              <div className="text-xs text-gray-500">{tier.desc}</div>
            </div>
          ))}
        </div>
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
      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Start Your Developer Journey</h2>
        <p className="text-blue-100 mb-6">Practice free PD1 questions and build your developer knowledge today.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/certifications/developer-1" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            PD1 Practice Questions <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link href="/pd1-study-guide" className="inline-flex items-center px-6 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
            <BookOpen className="mr-2 h-4 w-4" /> PD1 Study Guide
          </Link>
        </div>
      </div>
    </div>
  )
}
