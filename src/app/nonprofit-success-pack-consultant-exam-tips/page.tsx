import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'nonprofit-success-pack-consultant'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce NPSP Consultant exam tips for ${RELEASE_CURRENT}: household model, gift entry, engagement plans. Scenario tips to pass first attempt.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/nonprofit-success-pack-consultant-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/nonprofit-success-pack-consultant-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `NPSP Consultant exam tips ${RELEASE_CURRENT}, how to pass Nonprofit Success Pack Consultant, Salesforce NPSP certification, nonprofit Salesforce exam study guide`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'NPSP Consultant Exam Tips', url: '/nonprofit-success-pack-consultant-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Salesforce NPSP Consultant exam format?',
    answer: 'The Nonprofit Success Pack (NPSP) Consultant exam has 60 multiple-choice questions, a 105-minute time limit, a 65% passing score, and a $200 fee ($100 retake). It tests implementation of Salesforce NPSP (Nonprofit Success Pack) — the legacy managed package for nonprofits — including the household account model, donations, grants, and engagement plans.',
  },
  {
    question: 'What are the highest-weight NPSP Consultant exam sections?',
    answer: 'Opportunity Management (25%) and Household Account Model (22%) together account for 47% of the exam. NPSP&apos;s unique approach to donations (via Opportunities), the household account model, soft credits, and gift entry are the most heavily tested areas.',
  },
  {
    question: 'What is the NPSP household account model?',
    answer: 'NPSP uses a unique account model where every contact is automatically associated with a Household Account. When two contacts are married or live together, they share one Household Account. This differs from standard Salesforce where Accounts represent companies. Understanding how NPSP creates, names, and manages household accounts is fundamental to this exam.',
  },
  {
    question: 'What is the difference between NPSP Consultant and Nonprofit Cloud Consultant?',
    answer: 'NPSP Consultant tests the legacy Nonprofit Success Pack managed package. Nonprofit Cloud Consultant tests the newer NPC (Nonprofit Cloud) platform. For organisations still on NPSP, this certification is relevant. Salesforce is migrating nonprofits to NPC over time — check which platform your clients use before deciding which exam to pursue.',
  },
  {
    question: 'What concepts do most NPSP Consultant candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the NPSP Consultant exam are: (1) Affiliation vs Relationship — Organisation Connection vs Person Connection; (2) Gift Entry — Templates Are Required for Batch Processing; (3) Engagement Plans — Not the Same as Campaigns. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('nonprofit-success-pack-consultant-exam-tips'),
]

export default function NPSPConsultantExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/nonprofit-success-pack-consultant-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce NPSP Consultant Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The NPSP Consultant exam tests your ability to implement Salesforce Nonprofit Success Pack for charitable
          organisations. These tips focus on the household account model, donation tracking, and engagement plan
          features that define the highest-weight sections of this exam.
        </p>
      </header>

      <ContentPageAuthor />

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Exam At a Glance</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">60</p>
            <p className="text-xs text-gray-600 mt-0.5">Questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">105 min</p>
            <p className="text-xs text-gray-600 mt-0.5">Time Limit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">65%</p>
            <p className="text-xs text-gray-600 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$200</p>
            <p className="text-xs text-gray-600 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What NPSP Consultant Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Household account model</strong> — How NPSP creates Household Accounts for every Contact, household naming rules, address management, and how NPSP handles relationship management between family members. One-to-one vs. household vs. individual account models.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Opportunity and gift management</strong> — NPSP donations flow through Opportunities with a record type. Soft Credits attribute a gift to multiple people. Hard Credits represent the primary donor. Gift Entry (Batch Gift Entry) for high-volume donation processing. Recurring Donations for monthly/annual giving.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Engagement Plans and Relationships</strong> — Engagement Plans for automated outreach sequences (tasks, calls, emails) triggered by donor stages. NPSP Relationships for tracking how contacts know each other (spouse, parent, colleague). Report types unique to NPSP for donor reporting.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Opportunity Management</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Household Account Model</span>
            <span className="font-bold text-salesforce-blue ml-4">22%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Engagement Plans and Relationships</span>
            <span className="font-bold text-salesforce-blue ml-4">20%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Reporting and Data Management</span>
            <span className="font-bold text-salesforce-blue ml-4">18%</span>
          </div>
          <p className="text-xs text-gray-600 pt-1">Opportunities + Household Model + Engagement = 67%. NPSP&apos;s unique objects and models differ significantly from standard Salesforce.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach NPSP Consultant Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a nonprofit scenario and ask which NPSP feature or configuration achieves it.
          NPSP has unique objects and automation that work differently from standard Salesforce —
          always choose the NPSP-native approach over custom Salesforce solutions.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For household questions: when a couple donates together, they share one Household Account. Soft Credits give attribution to both spouses. When a child becomes an adult and moves out, they get a new Household Account. NPSP automates household account creation — know when to configure vs. when to let automation handle it.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For recurring donation questions: NPSP Recurring Donations automatically create child Opportunities on a schedule. The Recurring Donation object holds the amount, frequency, and status. When a donor upgrades their monthly gift, update the Recurring Donation record — not the child Opportunities directly.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For engagement plan questions: Engagement Plan Templates define the sequence of tasks. An Engagement Plan is instantiated on a Contact when triggered by a stage change. Tasks in the plan have relative due dates (e.g., Day 3, Day 7). When a client needs automated donor stewardship sequences, Engagement Plans — not Process Builder or Flow — are the NPSP native answer.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          NPSP has its own managed package settings, unique objects, and automation that work differently
          from standard Salesforce. Install NPSP in a Developer Edition org and configure a complete
          household, donation tracking, and engagement plan scenario before booking.
          Hands-on experience is essential for this exam.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most NPSP Consultant Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Affiliation vs Relationship — Organisation Connection vs Person Connection</p>
            <p className="text-sm text-gray-700">Affiliations link a Contact to a non-Household Account (their employer, a board membership, a programme affiliation). Relationships link two Contacts to each other (spouse, sibling, colleague). Candidates use Relationships for all connection types — the exam expects Affiliations for Contact-to-Organisation connections and Relationships for Contact-to-Contact.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Gift Entry — Templates Are Required for Batch Processing</p>
            <p className="text-sm text-gray-700">NPSP Gift Entry requires a Gift Entry Template to be configured before batch gifts can be entered. Templates define which fields appear, default values, and matching rules for donors. Candidates try to enter gifts without configuring a template first — the exam expects Gift Entry Template setup as the prerequisite for efficient batch gift processing.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Engagement Plans — Not the Same as Campaigns</p>
            <p className="text-sm text-gray-700">Engagement Plans are NPSP-specific task templates that define a sequence of outreach tasks (call, email, letter) assigned to a constituent over time. Salesforce Campaigns track marketing lists and ROI. Candidates use Campaigns for stewardship outreach sequences — the exam expects Engagement Plans for personalised, task-driven constituent outreach.</p>
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
          <Link href="/nonprofit-cloud-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Nonprofit Cloud Exam Tips</span>
          </Link>
          <Link href="/service-cloud-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Service Cloud Consultant Exam Tips</span>
          </Link>
          <Link href="/experience-cloud-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Experience Cloud Exam Tips</span>
          </Link>
          <Link href="/consultant-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Consultant Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start NPSP Consultant Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/nonprofit-success-pack-consultant" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            NPSP Consultant Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/nonprofit-cloud-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Nonprofit Cloud Tips
          </Link>
          <Link href="/consultant-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Consultant Certification Path
          </Link>
        </div>
        <p className="text-xs text-gray-600 mt-4">
          After this exam, consider <Link href="/certifications/sales-cloud" className="text-salesforce-blue underline">Sales Cloud Consultant</Link> or <Link href="/certifications/service-cloud" className="text-salesforce-blue underline">Service Cloud Consultant</Link> next.
        </p>
      </section>
    </div>
  )
}