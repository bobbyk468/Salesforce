import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Marketing Cloud Engagement Developer Study Guide (${RELEASE_CURRENT})`
const pageDescription = `Marketing Cloud Engagement Developer study guide: AMPscript, SSJS, REST API, data management. Pass in 2026 Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/marketing-cloud-engagement-developer-study-guide` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/marketing-cloud-engagement-developer-study-guide`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `marketing cloud engagement developer study guide, mc engagement developer exam, salesforce marketing cloud developer certification 2026, ampscript ssjs exam prep`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'MC Engagement Developer Study Guide', url: '/marketing-cloud-engagement-developer-study-guide' },
]

const examSections = [
  { name: 'Data Management & Analytics', weight: 22, note: 'Data extensions, data relationships, subscriber model, segmentation, SQL queries, and Analytics Builder.' },
  { name: 'Platform Development & Customisation', weight: 22, note: 'AMPscript, SSJS, CloudPages, landing pages, custom preference centres, and platform extension development.' },
  { name: 'Debugging & Troubleshooting', weight: 20, note: 'Error identification in AMPscript/SSJS, send logging, data view queries, and resolving common send failures.' },
  { name: 'Setup, Security & Architecture', weight: 18, note: 'Business unit hierarchy, role-based access control, security settings, IP allowlisting, and API authentication.' },
  { name: 'Email Design & Development', weight: 18, note: 'HTML email coding, Content Builder, dynamic content blocks, personalisation strings, and rendering across clients.' },
]

const faqItems = [
  {
    question: 'What coding languages does the MC Engagement Developer exam cover?',
    answer: 'The exam primarily covers AMPscript (Marketing Cloud\'s native personalisation language) and Server-Side JavaScript (SSJS). You need to be able to read, interpret, and debug code written in both languages. The exam also covers Marketing Cloud REST and SOAP API usage, though you do not need to write full API implementations from memory — understanding request/response structures and authentication methods is sufficient.',
  },
  {
    question: 'What is the MC Engagement Developer exam format?',
    answer: 'The exam consists of 60 multiple-choice and multiple-select questions with a 90-minute time limit. The passing score is approximately 63%. The exam costs $200 for the first attempt, with a ~50% discount retake voucher after a failed attempt. It can be taken online (proctored) or at a Kryterion testing centre.',
  },
  {
    question: 'Do I need to memorise AMPscript syntax for the exam?',
    answer: 'You need to understand AMPscript functions and logic well enough to identify correct vs incorrect code in exam questions. Common functions to know: Lookup, LookupRows, AttributeValue, IIF, FormatDate, Substring, Concat, and dynamic content functions. You do not need to write scripts from scratch during the exam, but you will need to read code snippets and identify errors or predict outputs.',
  },
  {
    question: 'What experience level is needed for the MC Engagement Developer exam?',
    answer: 'The exam targets developers with at least 1–2 years of hands-on Marketing Cloud development experience. Candidates should have real experience building AMPscript personalisation, creating CloudPages, working with data extensions, and using the Marketing Cloud API. Candidates without hands-on development experience — even with theoretical study — typically find the debugging and coding sections very difficult.',
  },
  {
    question: 'What is the difference between MC Engagement Developer and MC Engagement Admin?',
    answer: 'Marketing Cloud Engagement Admin focuses on platform configuration, account administration, data management, compliance settings, and operational marketing management. Marketing Cloud Engagement Developer focuses on technical development: AMPscript, SSJS, CloudPages, REST API integration, and custom development. Admin is appropriate for marketing operations professionals; Developer is appropriate for technical developers building custom MC solutions.',
  },
]

export default function MarketingCloudEngagementDeveloperStudyGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/marketing-cloud-engagement-developer-study-guide" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Marketing Cloud Track</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Marketing Cloud Engagement Developer Study Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          A complete study guide for the Salesforce Certified Marketing Cloud Engagement Developer exam — AMPscript, SSJS, data management, REST API, and debugging techniques to pass with confidence.
        </p>
      </div>

      <ContentPageAuthor />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Questions', value: '60' },
          { label: 'Time Limit', value: '90 min' },
          { label: 'Passing Score', value: '~63%' },
          { label: 'Exam Fee', value: '$200' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Exam Sections &amp; Weightings</h2>
        <div className="space-y-4">
          {examSections.map((section) => (
            <div key={section.name}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-gray-900">{section.name}</span>
                <span className="text-sm font-bold text-salesforce-blue">{section.weight}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mb-1">
                <div className="bg-salesforce-blue h-2 rounded-full" style={{ width: `${section.weight * 4.5}%` }} />
              </div>
              <p className="text-xs text-gray-500">{section.note}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Core Technical Topics to Master</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: 'AMPscript', items: ['Lookup & LookupRows functions', 'IIF conditional logic', 'FormatDate & date manipulation', 'Dynamic content blocks', 'Nested AMPscript in HTML'] },
            { title: 'Server-Side JavaScript', items: ['SSJS vs AMPscript use cases', 'Platform.Load for libraries', 'HTTP call patterns', 'Variable scope in SSJS', 'Debugging SSJS errors'] },
            { title: 'Data Management', items: ['Data extension design', 'SQL for Automation Studio', 'Subscriber data model', 'Data relationships (joins)', 'Send logging data views'] },
            { title: 'API & Integration', items: ['REST vs SOAP API', 'OAuth 2.0 authentication', 'Triggered send API calls', 'Data extension CRUD via API', 'Error handling in API responses'] },
          ].map((card) => (
            <div key={card.title} className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-2 text-sm">{card.title}</p>
              <ul className="space-y-1">
                {card.items.map((item) => (
                  <li key={item} className="text-xs text-gray-600 flex gap-2">
                    <span className="text-salesforce-blue font-bold flex-shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">8-Week Study Plan</h2>
        <div className="space-y-3">
          {[
            { week: 'Week 1–2', focus: 'AMPscript mastery', tasks: 'Build AMPscript code in a real MC sandbox. Practice Lookup, LookupRows, IIF, FormatDate. Read and debug code snippets daily.' },
            { week: 'Week 3', focus: 'SSJS & CloudPages', tasks: 'Build CloudPages using SSJS. Practice HTTP calls, variable handling, and Platform library methods.' },
            { week: 'Week 4', focus: 'Data management & SQL', tasks: 'Design data extensions. Write SQL queries for Automation Studio. Understand subscriber model and send logging data views.' },
            { week: 'Week 5', focus: 'Email HTML & dynamic content', tasks: 'Build HTML emails with dynamic content blocks. Practice personalisation strings. Test rendering across email clients.' },
            { week: 'Week 6', focus: 'API & integration', tasks: 'Practice REST API calls with Postman. Understand OAuth authentication. Build triggered send examples via API.' },
            { week: 'Week 7', focus: 'Debugging & troubleshooting', tasks: 'Practice identifying errors in AMPscript/SSJS code. Study common send failure scenarios and send log analysis.' },
            { week: 'Week 8', focus: 'Full mock exams', tasks: 'Take timed full mock exams. Target 75%+ before booking.' },
          ].map((item) => (
            <div key={item.week} className="flex gap-4">
              <div className="flex-shrink-0 w-20 text-xs font-bold text-salesforce-blue pt-0.5">{item.week}</div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{item.focus}</p>
                <p className="text-xs text-gray-600">{item.tasks}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

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
      <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 mb-8">
        <h2 className="text-base font-bold text-gray-900 mb-3">Compare Certifications</h2>
        <ul className="space-y-2">
          <li><Link href="/marketing-cloud-admin-vs-developer" className="text-sm text-salesforce-dark hover:underline font-medium">→ Marketing Cloud Admin vs Developer — full comparison</Link></li>
        </ul>
      </div>


      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Practice MC Engagement Developer Questions</h2>
        <p className="text-white mb-6">Free practice questions for the Marketing Cloud Engagement Developer exam.</p>
        <Link href="/certifications/marketing-cloud-engagement-developer" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Start Free Practice Questions
        </Link>
      </div>
    </div>
  )
}
