import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Sales Foundations Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Sales Foundations exam tips for ${RELEASE_CURRENT}: Sales Cloud basics, leads and opportunities, forecasting, and scenario strategy to pass first attempt.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/sales-foundations-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/sales-foundations-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Sales Foundations exam tips ${RELEASE_CURRENT}, how to pass Salesforce Sales Foundations, Salesforce Sales Cloud basics certification, entry-level sales exam study guide`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Sales Foundations Exam Tips', url: '/sales-foundations-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Salesforce Sales Foundations exam format?',
    answer: 'The Salesforce Sales Foundations exam has 40 multiple-choice questions, a 65-minute time limit, a 65% passing score, and a $150 fee. It is an entry-level certification testing fundamental Sales Cloud knowledge: the sales process in Salesforce, leads, opportunities, accounts and contacts, activities, and basic reporting for sales teams.',
  },
  {
    question: 'What are the highest-weight Sales Foundations exam sections?',
    answer: 'Sales Process and Pipeline Management (30%) and Leads and Opportunity Management (25%) together account for 55% of the exam. Understanding how leads convert to contacts, accounts, and opportunities, managing an opportunity pipeline through stages, and tracking sales activities are the most heavily tested areas.',
  },
  {
    question: 'What is the difference between Sales Foundations and the Sales Cloud Consultant?',
    answer: 'Sales Foundations is an entry-level certification testing basic Sales Cloud usage — the sales rep and sales manager perspective. Sales Cloud Consultant is the professional-level certification testing how to configure and implement Sales Cloud for clients: territory management, forecasting configuration, sales process design, and advanced pipeline management. Foundations is ideal for sales reps and managers; Consultant is for implementation professionals.',
  },
  {
    question: 'Who should take the Salesforce Sales Foundations exam?',
    answer: 'Sales Foundations is designed for sales representatives, account managers, sales operations professionals, and anyone who uses Salesforce for selling. It validates that you understand how to use Salesforce effectively as a sales tool — managing your pipeline, logging activities, tracking opportunities, and using reports and dashboards to manage your performance.',
  },
]

export default function SalesFoundationsExamTipsPage() {
  const webPageJsonLd = getWebPageJsonLd({ name: pageTitle, description: pageDescription, path: '/sales-foundations-exam-tips', breadcrumbItems })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline: pageTitle, description: pageDescription, path: '/sales-foundations-exam-tips' })
  const faqJsonLd = getFaqPageJsonLd(faqItems)

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Sales Foundations Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Sales Foundations exam is Salesforce&apos;s entry-level Sales Cloud certification. It tests
          fundamental knowledge of using Salesforce for sales — the lead-to-cash process, pipeline
          management, and activity tracking that every sales professional needs.
        </p>
      </header>

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Exam At a Glance</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">40</p>
            <p className="text-xs text-gray-500 mt-0.5">Questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">65 min</p>
            <p className="text-xs text-gray-500 mt-0.5">Time Limit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">65%</p>
            <p className="text-xs text-gray-500 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$150</p>
            <p className="text-xs text-gray-500 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Sales Foundations Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Sales process and pipeline</strong> — The Salesforce sales process: how leads convert to contacts, accounts, and opportunities; managing opportunities through stage gates; setting probability and expected revenue; using opportunity lists and Kanban views to manage pipeline; and understanding close date accuracy.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Leads and opportunity management</strong> — Lead sources, lead assignment rules, lead conversion (what gets created, what carries over), opportunity products, price books, quotes, and the relationship between opportunities, contacts, and accounts in the sales data model.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Activities, forecasting, and reporting</strong> — Logging calls, emails, tasks, and events. Understanding Salesforce Forecasting (forecast categories: Commit, Best Case, Pipeline, Closed). Creating and reading opportunity pipeline reports, activity reports, and sales dashboard metrics that sales managers use to coach their teams.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Sales Process and Pipeline Management</span>
            <span className="font-bold text-salesforce-blue ml-4">30%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Leads and Opportunity Management</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Activities and Collaboration</span>
            <span className="font-bold text-salesforce-blue ml-4">22%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Forecasting and Reporting</span>
            <span className="font-bold text-salesforce-blue ml-4">18%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">Sales Process + Leads + Activities = 77%. Understand the lead-to-opportunity conversion process thoroughly — it is tested frequently.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Sales Foundations Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a sales scenario and ask which Salesforce feature, object, or action
          the sales rep or manager should use. Think from the sales rep&apos;s perspective — what does
          Salesforce natively provide to manage the sales process?
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For lead conversion questions: converting a lead creates a Contact, Account (if not matched), and optionally an Opportunity. The lead&apos;s company becomes the Account name. Lead fields can be mapped to Contact, Account, and Opportunity fields during conversion. After conversion, the original Lead record still exists in a converted state — it is not deleted.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For forecast questions: the four forecast categories are Closed (deals won), Commit (high confidence deals), Best Case (deals the rep hopes to close), and Pipeline (all other open deals). The sales manager&apos;s forecast roll-up aggregates their team&apos;s individual forecasts. When a question asks about &apos;deals the rep is confident about&apos;, the answer is the Commit category.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For activity questions: tasks are to-do items with a due date (call this customer by Friday). Events are calendar appointments with a start and end time (demo call at 2pm). Logging a call creates a completed activity (task with &apos;Completed&apos; status). When a question asks &apos;how does a rep record that they spoke to a customer&apos;, the answer is Log a Call (creates a completed task).</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Sales Foundations is designed for sales professionals who use Salesforce daily — not
          administrators or developers. The best preparation is hands-on use of Salesforce&apos;s Sales
          Cloud features. If you have 3+ months of daily Salesforce use as a sales rep, you
          likely already know most of what is tested.
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
          <Link href="/sales-cloud-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Sales Cloud Exam Tips</span>
          </Link>
          <Link href="/adm-201-exam-tips-2026" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">ADM-201 Exam Tips</span>
          </Link>
          <Link href="/platform-foundations-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Platform Foundations Exam Tips</span>
          </Link>
          <Link href="/certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Sales Foundations Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/sales-foundations" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Sales Foundations Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/sales-cloud" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Sales Cloud Consultant Questions
          </Link>
          <Link href="/certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            All Certification Paths
          </Link>
        </div>
      </section>
    </div>
  )
}
