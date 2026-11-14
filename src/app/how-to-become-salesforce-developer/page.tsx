import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import { CheckCircle2, Clock, ArrowRight, BookOpen, Target } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import LastUpdated from '@/components/LastUpdated'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `How to Become a Salesforce Developer (${RELEASE_CURRENT} Guide)`
const pageDescription = 'Plan a Salesforce Developer path from fundamentals to Platform Developer I with a study timeline, resources, and career guidance.'

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/how-to-become-salesforce-developer`,
    languages: { 'en-US': `${siteUrl}/how-to-become-salesforce-developer`, 'x-default': `${siteUrl}/how-to-become-salesforce-developer` },
  },
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
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Salesforce Careers', url: '/certifications' },
  { name: 'How to Become a Salesforce Developer', url: '/how-to-become-salesforce-developer' },
]

const faqItems = [
  {
    question: 'How long does it take to become a Salesforce Developer?',
    answer: 'Plan for 6–12 months to go from no Salesforce experience to PD1 certification and job readiness. The technical path is steeper than the admin path: Apex is similar to Java, and Lightning Web Components requires JavaScript skills. People with experience in Java, C#, Python, or JavaScript may prepare for PD1 in 12–16 weeks of focused study. Beginners may need 6–9 months.',
  },
  {
    question: 'Do I need to know programming before becoming a Salesforce Developer?',
    answer: 'Programming experience helps, but it is not required. Salesforce recommends taking ADM-201 before PD1 so you understand the platform, data model, and security before writing Apex. If you are new to programming, allow extra time to learn Apex basics. JavaScript is also important for Lightning Web Components.',
  },
  {
    question: 'What is the Salesforce Platform Developer I (PD1) certification?',
    answer: 'PD1 (Platform Developer I, exam DEV-450) is the core Salesforce developer certification. It covers Apex triggers and classes, SOQL and SOSL, governor limits, Lightning Web Components (LWC), Visualforce basics, testing (Test.startTest/stopTest and assert methods), and deployment (change sets and SFDX). The exam has 60 questions, lasts 105 minutes, has a 68% passing score, and costs $200.',
  },
  {
    question: 'What is the Salesforce developer salary in 2026?',
    answer: 'Entry-level Salesforce Developers with PD1 and 0–2 years of experience typically earn $75,000–$100,000 USD. Mid-level developers with PD1 and PD2 and 2–5 years of experience earn $100,000–$140,000. Senior developers and architects earn $140,000–$180,000+. Contract developers typically earn $85–$130 per hour. Pay varies by location; US tech hubs pay 20–40% above national averages.',
  },
  {
    question: 'What comes after Platform Developer I?',
    answer: 'After PD1, common next steps include Platform Developer II (PD2), which covers advanced Apex, integration architecture, and performance; JavaScript Developer I, which focuses on JavaScript and LWC skills; or the architect path, starting with Integration Architect or Data Architect. The architect path assumes strong PD1 knowledge. Many developers also earn admin-track credentials such as App Builder or Advanced Administrator.',
  },
]

const steps = [
  {
    step: '1',
    title: 'Learn Salesforce Platform Basics',
    time: '4–6 weeks',
    description: 'Learn how the Salesforce platform works before you write Apex. Start with Trailhead and the Salesforce Fundamentals trail, which covers objects, fields, the data model, security (profiles, roles, and sharing), and basic automation. Create a free Salesforce Developer Edition org to practice along the way.',
    resources: ['Salesforce Platform Basics (Trailhead)', 'Data Modeling trail (Trailhead)', 'Free Salesforce Developer Edition org'],
  },
  {
    step: '2',
    title: 'Learn Apex Fundamentals',
    time: '4–6 weeks',
    description: 'Apex is Salesforce\'s Java-like programming language. Learn its syntax, data types, collections (List, Set, Map), SOQL and SOSL, triggers (before/after, insert/update/delete), classes, exception handling, and governor limits. Also study the 75% code coverage requirement for deployment. Practice writing triggers and classes in your Developer Edition org.',
    resources: ['Apex Basics & Database trail (Trailhead)', 'Apex Developer Guide (Salesforce docs)', 'Trigger Fundamentals trail'],
  },
  {
    step: '3',
    title: 'Learn Lightning Web Components (LWC)',
    time: '3–4 weeks',
    description: 'Lightning Web Components (LWC) is Salesforce\'s front-end framework built on web standards. Build your JavaScript (ES6+) skills first. Then learn component structure (HTML template, JS controller, CSS), data binding, event handling (@api, @track, and @wire decorators), calling Apex from LWC, and deploying components with SFDX. JavaScript Developer I can complement this study.',
    resources: ['JavaScript Skills for Salesforce Developers (Trailhead)', 'Lightning Web Components Basics (Trailhead)', 'LWC Dev Guide (developer.salesforce.com)'],
  },
  {
    step: '4',
    title: 'Study Platform Developer I (PD1) Exam',
    time: '3–4 weeks',
    description: 'Once you know Apex and LWC, prepare for the PD1 exam sections: Developer Fundamentals (27%), Process Automation and Logic (28%), User Interface (25%), and Testing, Debugging, and Deployment (20%). Use practice questions to find weak areas and aim for at least 75% on mock exams before scheduling.',
    resources: ['Trailblaze Prep PD1 practice questions (free)', 'PD1 Study Guide', 'PD1 Exam Tips 2026'],
  },
  {
    step: '5',
    title: 'Get Project Experience',
    time: 'Ongoing',
    description: 'Certification can help you get noticed, but project experience also matters. Gain experience through pro bono work with Salesforce.org Nonprofit, open-source projects, or Salesforce implementations at your current employer. Document your work in a GitHub portfolio; employers may review code samples along with certifications.',
    resources: ['Salesforce.org Nonprofit volunteer opportunities', 'GitHub portfolio with Apex/LWC samples', 'Salesforce Stack Exchange (answer questions to build reputation)'],
  },
]

export default function HowToBecomeSalesforceDeveloperPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/how-to-become-salesforce-developer" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      {/* Header */}
      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">

      <ContentPageAuthor />
          <span>Career Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          How to Become a Salesforce Developer ({RELEASE_CURRENT})
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          Follow the path from learning Salesforce development to PD1 certification and your first development role. Review the skills and study resources along the way.
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
            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
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
                    <span className="inline-flex items-center gap-1 text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded-full">
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
            { cert: 'ADM-201 (Administrator)', note: 'Recommended first; builds your knowledge of the Salesforce platform' },
            { cert: 'Platform Developer I (PD1)', note: 'Core developer skills: Apex, LWC, SOQL, governor limits, and deployment' },
            { cert: 'JavaScript Developer I', note: 'Covers JavaScript and ES6+ skills used in LWC development' },
            { cert: 'Platform Developer II (PD2)', note: 'Advanced Apex patterns, integration architecture, and performance' },
            { cert: 'Architect Track', note: 'After PD1 and PD2: Integration Architect, Data Architect, Application Architect, then CTA' },
          ].map((item, i) => (
            <div key={item.cert} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-salesforce-blue/10 text-salesforce-dark text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
              <div>
                <span className="font-semibold text-gray-900">{item.cert}</span>
                <span className="text-gray-600">: {item.note}</span>
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
            { level: 'Entry-Level', range: '$75k–$100k', desc: 'PD1 certified, with 0–2 years of experience' },
            { level: 'Mid-Level', range: '$100k–$140k', desc: 'PD1 and PD2, with 2–5 years of experience' },
            { level: 'Senior/Architect', range: '$140k–$180k+', desc: 'Several certifications, with 5+ years of experience' },
          ].map((tier) => (
            <div key={tier.level} className="rounded-lg bg-gray-50 border border-gray-100 p-4 text-center">
              <div className="text-sm text-gray-600 mb-1">{tier.level}</div>
              <div className="text-xl font-bold text-salesforce-blue mb-1">{tier.range}</div>
              <div className="text-xs text-gray-600">{tier.desc}</div>
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
        <p className="text-white mb-6">Use free PD1 practice questions to build your developer skills.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/certifications/developer-1#practice-questions" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            PD1 Practice Questions <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link href="/certifications/developer-1" className="inline-flex items-center px-6 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
            <BookOpen className="mr-2 h-4 w-4" /> PD1 Study Guide
          </Link>
        </div>
      </div>
    </div>
  )
}
