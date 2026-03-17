import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Marketing Cloud Foundations Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Marketing Cloud Engagement Foundations exam tips for ${RELEASE_CURRENT}: platform navigation, email sends, subscriber management.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/marketing-cloud-engagement-foundations-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/marketing-cloud-engagement-foundations-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Marketing Cloud Foundations exam tips ${RELEASE_CURRENT}, how to pass Marketing Cloud Engagement Foundations, Salesforce SFMC foundations certification, Marketing Cloud basics exam study guide`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Marketing Cloud Foundations Exam Tips', url: '/marketing-cloud-engagement-foundations-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Salesforce Marketing Cloud Engagement Foundations exam format?',
    answer: 'The Marketing Cloud Engagement Foundations exam has 40 multiple-choice questions, a 65-minute time limit, a 65% passing score, and a $150 fee. It is an entry-level certification testing basic Marketing Cloud navigation, email creation, subscriber management, and sending fundamentals.',
  },
  {
    question: 'What are the highest-weight Marketing Cloud Foundations exam sections?',
    answer: 'Email Studio Basics (30%) and Subscriber and Data Management (25%) together account for 55% of the exam. Creating and sending basic emails, understanding subscriber data extensions, send classifications, and how Marketing Cloud organises and manages contacts are the most tested areas.',
  },
  {
    question: 'What is the difference between Marketing Cloud Foundations and Email Specialist?',
    answer: 'Marketing Cloud Foundations is the entry-level certification testing basic Marketing Cloud literacy. Email Specialist is the practitioner-level certification testing deeper email marketing skills including deliverability, A/B testing, send classifications, and advanced subscriber management. Foundations is the stepping stone before Email Specialist.',
  },
  {
    question: 'What is a data extension in Marketing Cloud and why does it matter?',
    answer: 'A data extension is Marketing Cloud&apos;s primary data storage object — essentially a table that stores subscriber data for targeting and personalisation. Data extensions replace the legacy All Subscribers list for most use cases. Understanding when to use data extensions vs. lists, and how to relate data extensions to All Subscribers, is a core concept for all Marketing Cloud certifications.',
  },
  {
    question: 'What concepts do most Marketing Cloud Engagement Foundations candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the Marketing Cloud Engagement Foundations exam are: (1) Contact vs Subscriber — Two Different Identity Concepts; (2) All Subscribers List vs Publication Lists vs Data Extensions for Sending; (3) Email Studio vs Journey Builder — One-Time vs Ongoing. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('marketing-cloud-engagement-foundations-exam-tips'),
]

export default function MarketingCloudEngagementFoundationsExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/marketing-cloud-engagement-foundations-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Marketing Cloud Foundations Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Marketing Cloud Engagement Foundations exam is Salesforce&apos;s entry-level Marketing Cloud
          certification. It tests basic Email Studio skills, subscriber management, and how Marketing
          Cloud organises and sends email campaigns.
        </p>
      </header>

      <ContentPageAuthor />

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Exam At a Glance</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">40</p>
            <p className="text-xs text-gray-500 mt-0.5">Questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">70 min</p>
            <p className="text-xs text-gray-500 mt-0.5">Time Limit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">63%</p>
            <p className="text-xs text-gray-500 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$75</p>
            <p className="text-xs text-gray-500 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Marketing Cloud Foundations Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Email Studio basics</strong> — Creating emails with the drag-and-drop Content Builder, using basic AMPscript for personalisation (%%FirstName%% syntax), setting up send classifications (from name, from address, reply-to), and the send flow (define audience, select content, schedule, review, send).</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Subscriber and data management</strong> — All Subscribers vs. data extensions, subscriber statuses (Active, Held, Unsubscribed, Bounced), managing unsubscribes and opt-outs, creating lists and data extensions for targeting, and CAN-SPAM compliance basics.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Marketing Cloud platform</strong> — Business unit structure, user roles and permissions, Email Studio vs. Content Builder, basic Automation Studio for scheduling, and Marketing Cloud connect (integration with Salesforce CRM).</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Email Studio Basics</span>
            <span className="font-bold text-salesforce-blue ml-4">30%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Subscriber and Data Management</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Marketing Cloud Platform Basics</span>
            <span className="font-bold text-salesforce-blue ml-4">22%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Compliance and Deliverability Basics</span>
            <span className="font-bold text-salesforce-blue ml-4">18%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">Email Studio + Subscriber Management + Platform = 77%. CAN-SPAM compliance and subscriber statuses are frequently tested in compliance questions.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Marketing Cloud Foundations Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a basic email marketing scenario and ask which Marketing Cloud feature, tool,
          or setting achieves it. Focus on the native Marketing Cloud approach — not custom code
          (AMPscript at scale is for Email Specialist, not Foundations).
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For subscriber status questions: Active = can receive emails. Held = had a bounce, temporarily suppressed. Unsubscribed = opted out of all emails from this business unit. Bounced = permanent hard bounce, removed from sends. When a subscriber clicks &apos;unsubscribe&apos;, their status becomes Unsubscribed — not Bounced.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For content questions: Content Builder is the modern content creation tool. Classic Email Studio templates are the legacy approach. Content Builder reusable blocks allow a single piece of content to be used in multiple emails — changes to the block update all emails. When a question says &apos;manage content centrally&apos;, Content Builder reusable blocks is the answer.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For compliance questions: CAN-SPAM requires a physical postal address in every commercial email, a clear unsubscribe mechanism, and honouring opt-outs within 10 business days. Marketing Cloud handles compliance through Send Classifications — every email send must have a Send Classification that defines the from address and unsubscribe profile.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Marketing Cloud Foundations is an accessible entry-level certification. Most candidates with
          2–4 weeks of Marketing Cloud hands-on experience can pass. Request a free Marketing Cloud
          trial from Salesforce or use a sandbox org to practice creating and sending a basic email
          campaign before booking.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most Marketing Cloud Engagement Foundations Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Contact vs Subscriber — Two Different Identity Concepts</p>
            <p className="text-sm text-gray-700">A Contact in Marketing Cloud is a person record in Contact Builder identified by a Contact Key (often Salesforce CRM ID). A Subscriber is an email-specific opt-in record with a Subscriber Key. The same person can be both a Contact and a Subscriber, but they are stored differently. Candidates use the terms interchangeably — the exam distinguishes them: Contacts are cross-channel; Subscribers are email-channel specific.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. All Subscribers List vs Publication Lists vs Data Extensions for Sending</p>
            <p className="text-sm text-gray-700">The All Subscribers list is the master opt-out tracking list — it cannot be used for targeting sends. Publication Lists are opt-in subscription lists for specific content. Data Extensions (filtered or full) are the recommended targeting method for all complex sends. Candidates target sends using the All Subscribers list — the exam expects Data Extensions or Publication Lists for targeting.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Email Studio vs Journey Builder — One-Time vs Ongoing</p>
            <p className="text-sm text-gray-700">Email Studio is used for one-time or ad-hoc batch sends (campaigns, announcements). Journey Builder is used for ongoing automated programs triggered by events (welcome series, re-engagement journeys). Candidates build welcome emails in Email Studio — the exam expects Journey Builder for any automated, triggered, multi-step sequence.</p>
          </div>
        </div>
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
          <Link href="/consultant-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Consultant Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Marketing Cloud Foundations Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/marketing-cloud-engagement-foundations" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Marketing Cloud Foundations Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/email-specialist-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Email Specialist Tips
          </Link>
          <Link href="/certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            All Certification Paths
          </Link>
        </div>
      </section>
    </div>
  )
}
