import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Marketing Cloud Developer Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Marketing Cloud Developer exam tips for ${RELEASE_CURRENT}: AMPscript, SSJS, SQL queries, API integration Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {  // Canonical to cert page — prevents GSC "chose different canonical"
  canonical: `${siteUrl}/certifications/marketing-cloud-engagement-developer`,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/marketing-cloud-engagement-developer-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Marketing Cloud Developer exam tips ${RELEASE_CURRENT}, how to pass Marketing Cloud Developer, Salesforce SFMC Developer certification, AMPscript SSJS exam study guide`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Marketing Cloud Developer Exam Tips', url: '/marketing-cloud-engagement-developer-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Salesforce Marketing Cloud Developer exam format?',
    answer: 'The Salesforce Marketing Cloud Developer exam has 60 multiple-choice questions, a 105-minute time limit, a 65% passing score, and a $200 fee ($100 retake). It tests AMPscript, Server-Side JavaScript (SSJS), SQL for data extensions, Marketing Cloud APIs, and Cloud Pages development.',
  },
  {
    question: 'What are the highest-weight Marketing Cloud Developer exam sections?',
    answer: 'AMPscript (30%) and Server-Side JavaScript (20%) together account for 50% of the exam. Writing and debugging AMPscript for dynamic email content, personalisation, and subscriber data lookup is the single most important skill for this exam.',
  },
  {
    question: 'What is AMPscript and how is it used in Marketing Cloud?',
    answer: 'AMPscript is Marketing Cloud&apos;s proprietary scripting language for dynamic content in emails, SMS, landing pages, and Cloud Pages. It uses functions like Lookup(), LookupRows(), RetrieveSalesforceObjects(), and SetValue() to personalise content based on subscriber data. Understanding AMPscript syntax and function signatures is essential for this exam.',
  },
  {
    question: 'What SQL knowledge is needed for Marketing Cloud Developer?',
    answer: 'Marketing Cloud uses SQL for Query Activities in Automation Studio — queries run against data extensions (not a traditional database). You need standard SELECT, WHERE, JOIN, and GROUP BY. Specific Marketing Cloud SQL nuances: you cannot use subqueries in some contexts, data extensions are referenced by name as tables, and results write to a target data extension. The SQL tested is relatively straightforward ANSI SQL.',
  },
]

export default function MarketingCloudEngagementDeveloperExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/marketing-cloud-engagement-developer-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Marketing Cloud Developer Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Marketing Cloud Developer exam tests your ability to build dynamic, data-driven marketing content
          using AMPscript, SSJS, SQL, and the Marketing Cloud API. These tips focus on the scripting
          skills and data extension patterns that define the highest-weight sections of this exam.
        </p>
      </header>

      <ContentPageAuthor />

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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Marketing Cloud Developer Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>AMPscript</strong> — Writing AMPscript for dynamic email and landing page personalisation. Key functions: Lookup(), LookupRows(), LookupOrderedRows(), IIF(), FormatDate(), Format(), RetrieveSalesforceObjects(), and ContentBlockByID(). Know the syntax differences between email and Cloud Page AMPscript.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Server-Side JavaScript (SSJS) and SQL</strong> — SSJS for Cloud Pages and Automation Studio scripting. SQL Query Activities against data extensions for audience segmentation. Understanding which language to use in which Marketing Cloud context.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Marketing Cloud APIs</strong> — REST and SOAP API endpoints for subscriber management, data extension operations, and triggered send initiation. OAuth 2.0 authentication for API access, and when to use REST vs. SOAP for specific operations.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">AMPscript</span>
            <span className="font-bold text-salesforce-blue ml-4">30%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Server-Side JavaScript (SSJS)</span>
            <span className="font-bold text-salesforce-blue ml-4">20%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">SQL and Data Management</span>
            <span className="font-bold text-salesforce-blue ml-4">18%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">API Integration</span>
            <span className="font-bold text-salesforce-blue ml-4">16%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">AMPscript + SSJS + SQL = 68%. Scripting skills are the core of this exam. Build real dynamic emails before booking.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Marketing Cloud Developer Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions present a personalisation or automation requirement and ask which script, function, or API
          call achieves it. For scripting questions, look for syntax errors, incorrect function usage, or
          wrong variable scoping as common distractors.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For AMPscript function questions: Lookup() returns a single field value from a data extension row; LookupRows() returns all rows matching the filter as a rowset; LookupOrderedRows() returns rows in a specified order. When you need to loop through multiple rows, use LookupRows() with a FOR loop.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For SSJS vs. AMPscript questions: AMPscript runs inline in emails and Cloud Pages; SSJS runs in Script Activities in Automation Studio and Cloud Pages. SSJS cannot be used in email sends (only AMPscript can). For automations that need to query and write data without sending an email, SSJS Script Activity is the correct answer.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For API questions: REST API uses JSON and is preferred for new integrations; SOAP API uses XML and is required for some legacy operations (email send definitions, data extension row operations). OAuth 2.0 Client Credentials grant type is used for server-to-server API access — no user login required.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Build at least 5 dynamic emails using AMPscript with data extension lookups and conditional
          content before booking. The exam tests practical scripting knowledge that cannot be learned
          theoretically — candidates without hands-on AMPscript experience fail the code-reading
          questions consistently.
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
          <Link href="/marketing-cloud-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Marketing Cloud Consultant Exam Tips</span>
          </Link>
          <Link href="/email-specialist-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Email Specialist Exam Tips</span>
          </Link>
          <Link href="/developer-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Developer Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Marketing Cloud Developer Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/marketing-cloud-engagement-developer" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Marketing Cloud Developer Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/email-specialist-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Email Specialist Tips
          </Link>
          <Link href="/developer-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Developer Certification Path
          </Link>
        </div>
      </section>
    </div>
  )
}
