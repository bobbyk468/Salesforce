import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Nonprofit Cloud Consultant Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Nonprofit Cloud Consultant exam tips for ${RELEASE_CURRENT}: NPC data model, fundraising, programme management Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/nonprofit-cloud-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/nonprofit-cloud-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Nonprofit Cloud Consultant exam tips ${RELEASE_CURRENT}, how to pass Nonprofit Cloud Consultant, Salesforce NPC certification, Nonprofit Cloud exam study guide`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Nonprofit Cloud Consultant Exam Tips', url: '/nonprofit-cloud-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Salesforce Nonprofit Cloud Consultant exam format?',
    answer: 'The Salesforce Nonprofit Cloud Consultant exam has 60 multiple-choice questions, a 105-minute time limit, a 65% passing score, and a $200 fee ($100 retake). It tests implementation of Salesforce Nonprofit Cloud (NPC) — the next-generation nonprofit platform replacing NPSP — including fundraising, programme management, and outcome tracking.',
  },
  {
    question: 'What is the difference between Nonprofit Cloud (NPC) and NPSP?',
    answer: 'NPSP (Nonprofit Success Pack) is the legacy managed package for nonprofits. Nonprofit Cloud (NPC) is Salesforce&apos;s next-generation nonprofit platform built natively on Salesforce — it replaces NPSP with a more modern data model and deeper integration with Salesforce core features. The Nonprofit Cloud Consultant exam focuses on NPC; the NPSP Consultant exam focuses on the legacy NPSP package.',
  },
  {
    question: 'What are the highest-weight Nonprofit Cloud Consultant exam sections?',
    answer: 'Fundraising (30%) and Programme Management (25%) together account for 55% of the exam. Understanding gift transactions, donation processing, recurring giving, campaign management, programme delivery, and outcome measurement are the most heavily tested areas.',
  },
  {
    question: 'What nonprofit industry knowledge helps with this exam?',
    answer: 'Understanding how nonprofits operate — donation processing, grant management, volunteer coordination, beneficiary tracking, and impact measurement — is as important as knowing Salesforce configuration. Candidates with nonprofit sector experience perform better because the exam tests whether you can map nonprofit business processes to the NPC data model correctly.',
  },
  {
    question: 'What concepts do most Nonprofit Cloud candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the Nonprofit Cloud exam are: (1) NPSP Household Account Model — Contacts Are Primary, Accounts Are Secondary; (2) Soft Credits vs Hard Credits — Recognition vs Liability; (3) NPSP Recurring Donations — Open-Ended vs Fixed-Length. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
]

export default function NonprofitCloudExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/nonprofit-cloud-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Nonprofit Cloud Consultant Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Nonprofit Cloud Consultant exam tests your ability to implement Salesforce Nonprofit Cloud (NPC)
          for charitable organisations. These tips focus on the NPC data model, fundraising configuration,
          and programme management that define this exam.
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Nonprofit Cloud Consultant Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Fundraising and gift management</strong> — Gift transactions, gift commitments (recurring giving), payment schedules, soft credits, campaign management, and how NPC&apos;s fundraising data model relates to contacts, accounts, and opportunities.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Programme management</strong> — Programme delivery tracking, service delivery records, beneficiary management, and outcome measurement. Understanding how programme data supports impact reporting for grant reporting and donor communications.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>NPC data model and configuration</strong> — NPC&apos;s household model, relationship management between constituents, how NPC differs from NPSP, Salesforce Flows for nonprofit automation, and the Nonprofit Cloud setup and configuration process.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Fundraising</span>
            <span className="font-bold text-salesforce-blue ml-4">30%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Programme Management</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">NPC Data Model and Configuration</span>
            <span className="font-bold text-salesforce-blue ml-4">22%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Reporting and Impact Measurement</span>
            <span className="font-bold text-salesforce-blue ml-4">15%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">Fundraising + Programme + NPC Model = 77%. Understand the NPC data model deeply before attempting mock tests.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Nonprofit Cloud Consultant Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a nonprofit operational requirement and ask which NPC feature, data model object,
          or configuration approach addresses it. The correct answer always uses native NPC functionality —
          not NPSP patterns or custom Salesforce objects.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For gift management questions: in NPC, a Gift Transaction records a single gift event. A Gift Commitment tracks recurring giving pledges with a payment schedule. Soft Credits attribute a gift to multiple people (e.g., a couple). Know which object handles each scenario — they are different from NPSP&apos;s opportunity-based approach.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For programme questions: Service Deliveries record when a beneficiary received a service. Programme Engagements link a Contact to a Programme with a stage and start/end date. Outcome data flows from Service Delivery records to impact dashboards. Map the nonprofit&apos;s workflow to these objects.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For NPC vs. NPSP questions: NPC uses a different data model — Gift Transaction (not Opportunity for donations), Programme Engagement (not custom objects). When a question describes a scenario that could be solved by either, the NPC approach is always the correct answer for this exam.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Nonprofit Cloud (NPC) is Salesforce&apos;s newest nonprofit platform and exam content reflects the
          current NPC release. Candidates familiar with NPSP should study the NPC data model differences
          carefully — NPC uses different objects and terminology for many familiar nonprofit functions.
          Focus on the official Trailhead Nonprofit Cloud trail for current content.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most Nonprofit Cloud Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. NPSP Household Account Model — Contacts Are Primary, Accounts Are Secondary</p>
            <p className="text-sm text-gray-700">Salesforce Nonprofit Success Pack (NPSP) inverts the standard B2B model: the Contact (donor/constituent) is the primary record, and the Household Account is auto-created to hold household-level relationships and giving. Candidates answer relationship questions using standard B2B Account-Contact logic — the exam expects NPSP&apos;s Household model where Contacts drive the relationship.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Soft Credits vs Hard Credits — Recognition vs Liability</p>
            <p className="text-sm text-gray-700">Hard Credits are the actual donation amounts attributed to the donor who gave the money. Soft Credits recognise people who influenced the donation (a board member who introduced the donor) without financial liability. NPSP tracks both — candidates use a single Opportunity for all recognition. The exam expects Partial Soft Credits and Soft Credit Roles for recognising solicitors and influencers.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. NPSP Recurring Donations — Open-Ended vs Fixed-Length</p>
            <p className="text-sm text-gray-700">NPSP Recurring Donations can be Open-Ended (run indefinitely until cancelled) or Fixed-Length (a set number of installments). Each Recurring Donation creates Opportunity installments on a schedule. Candidates model monthly pledges as individual Opportunities — the exam expects Recurring Donation records with the correct recurrence type and the auto-generated installment Opportunity schedule.</p>
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
          <Link href="/nonprofit-success-pack-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Nonprofit Success Pack Exam Tips</span>
          </Link>
          <Link href="/service-cloud-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Service Cloud Consultant Exam Tips</span>
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Nonprofit Cloud Consultant Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/nonprofit-cloud" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Nonprofit Cloud Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/nonprofit-success-pack-consultant" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            NPSP Consultant Questions
          </Link>
          <Link href="/consultant-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Consultant Certification Path
          </Link>
        </div>
      </section>
    </div>
  )
}
