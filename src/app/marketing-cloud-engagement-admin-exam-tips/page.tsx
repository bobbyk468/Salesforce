import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Marketing Cloud Engagement Admin Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Marketing Cloud Engagement Administrator exam tips for ${RELEASE_CURRENT}: email studio, automation studio, data extensions, deliverability.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  // Canonical to cert page — prevents GSC "chose different canonical"
  alternates: { canonical: `${siteUrl}/certifications/marketing-cloud-engagement-admin` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/marketing-cloud-engagement-admin-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Marketing Cloud Engagement Admin exam tips ${RELEASE_CURRENT}, how to pass Marketing Cloud Administrator, Salesforce SFMC Admin certification, Email Studio Automation Studio exam study guide`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Marketing Cloud Engagement Admin Exam Tips', url: '/marketing-cloud-engagement-admin-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Salesforce Marketing Cloud Engagement Administrator exam format?',
    answer: 'The Salesforce Marketing Cloud Engagement Administrator exam has 60 multiple-choice questions, a 90-minute time limit, a 67% passing score, and a $200 fee ($100 retake). It tests Email Studio, Mobile Studio, Automation Studio, Contact Builder, data extensions, deliverability, and account administration.',
  },
  {
    question: 'What are the highest-weight sections in the Marketing Cloud Admin exam?',
    answer: 'Email Studio (28%) and Automation Studio (20%) together account for 48% of the exam. These two tools are the core of day-to-day Marketing Cloud administration. Understanding send classifications, triggered sends, automation activities, and subscriber management is critical to passing.',
  },
  {
    question: 'What data extension knowledge is needed for Marketing Cloud Admin?',
    answer: 'You need to understand the difference between standard data extensions and synchronized data extensions (from Contact Builder), how to create sendable vs non-sendable data extensions, field types (text, date, boolean, decimal, email, phone, locale), retention settings, and how data extensions relate to subscribers. SQL for Query Activities in Automation Studio is also tested at a basic level.',
  },
  {
    question: 'How important is email deliverability for this exam?',
    answer: 'Deliverability accounts for approximately 12% of the exam. Key topics include: IP warming strategy, CAN-SPAM and GDPR compliance within Marketing Cloud, bounce management (soft vs hard bounces), unsubscribe and opt-out processes, sender authentication (SPF, DKIM, DMARC), and how to use the Deliverability dashboard. Understanding how Salesforce handles subscriber status changes (active, unsubscribed, bounced) is frequently tested.',
  },
]

export default function MarketingCloudEngagementAdminExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/marketing-cloud-engagement-admin-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Marketing Cloud Engagement Admin Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Marketing Cloud Engagement Administrator exam tests your ability to configure and manage
          Email Studio, Automation Studio, Contact Builder, Mobile Studio, and account settings.
          These tips focus on the configuration scenarios and subscriber management patterns that
          define the highest-weight sections of this exam.
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
            <p className="text-2xl font-bold text-salesforce-blue">90 min</p>
            <p className="text-xs text-gray-500 mt-0.5">Time Limit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">67%</p>
            <p className="text-xs text-gray-500 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$200</p>
            <p className="text-xs text-gray-500 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Marketing Cloud Admin Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Email Studio</strong> — Building, testing, and sending emails. Send classifications (commercial vs transactional), triggered sends, A/B testing, content blocks, dynamic content rules, and subscriber lists vs data extensions as the sending audience.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Automation Studio</strong> — Building multi-step automations using SQL Query, File Transfer, Import, Send, Data Extract, and Script activities. Understanding scheduled vs triggered automation entry sources and the correct activity order for audience building workflows.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Contact Builder &amp; Data Extensions</strong> — Designing the Contact data model, attribute groups, population configuration, and data relationships. Creating sendable data extensions, managing subscriber keys, and synchronising Salesforce CRM data via Marketing Cloud Connect.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Email Studio</span>
            <span className="font-bold text-salesforce-blue ml-4">28%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Automation Studio</span>
            <span className="font-bold text-salesforce-blue ml-4">20%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Contact Builder &amp; Data Management</span>
            <span className="font-bold text-salesforce-blue ml-4">18%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Deliverability &amp; Compliance</span>
            <span className="font-bold text-salesforce-blue ml-4">12%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Mobile Studio &amp; Account Administration</span>
            <span className="font-bold text-salesforce-blue ml-4">22%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">Email Studio + Automation Studio = 48%. Configure real automations and triggered sends in a sandbox account before booking.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Marketing Cloud Admin Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions present a business scenario — a marketing team wants to send a transactional receipt,
          automate a welcome journey, or import a customer list nightly — and ask which configuration
          or tool achieves the requirement correctly and efficiently.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For send classification questions: transactional sends bypass unsubscribe rules because they are legally required communications (receipts, password resets). Commercial sends must honour the unsubscribe opt-out. Misclassifying a commercial send as transactional violates CAN-SPAM — always identify the business purpose before choosing classification.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For automation sequencing questions: Import Activity must complete before a Query Activity that references the newly imported data extension. Data Extract and File Transfer activities work together to export data to SFTP — File Transfer moves the extract to an external location; running File Transfer alone without Data Extract first produces nothing. Order matters in automation flows.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For data extension vs list questions: Lists are legacy and simpler but less powerful. Data extensions support multiple fields per subscriber, SQL queries, and are preferred for complex data models. When a scenario mentions &quot;custom attributes&quot;, multi-field subscriber data, or SQL queries, the answer is almost always a data extension, not a list.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Build at least one complete automation in a Marketing Cloud sandbox — an import, query, and
          scheduled send workflow — before taking this exam. Candidates who have only studied
          conceptually consistently fail Automation Studio scenario questions because the tool&apos;s
          activity logic (what runs in what order, and why) only becomes clear through hands-on use.
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
          <Link href="/marketing-cloud-engagement-developer-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Marketing Cloud Developer Exam Tips</span>
          </Link>
          <Link href="/email-specialist-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Email Specialist Exam Tips</span>
          </Link>
          <Link href="/marketing-cloud-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Marketing Cloud Consultant Exam Tips</span>
          </Link>
          <Link href="/adm-201-exam-tips-2026" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">ADM-201 Exam Tips</span>
          </Link>
        </div>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Marketing Cloud Admin Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/marketing-cloud-engagement-admin" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Marketing Cloud Admin Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/email-specialist-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Email Specialist Tips
          </Link>
          <Link href="/marketing-cloud-engagement-developer-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            MC Developer Tips
          </Link>
        </div>
      </section>
    </div>
  )
}
