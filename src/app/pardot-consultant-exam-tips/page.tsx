import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'pardot-consultant'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Pardot Consultant exam tips for ${RELEASE_CURRENT}: lead nurturing, scoring, grading, Salesforce sync, engagement studio. Pass first attempt.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/pardot-consultant-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/pardot-consultant-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Pardot Consultant exam tips ${RELEASE_CURRENT}, Account Engagement Consultant certification, how to pass Pardot Consultant exam, lead scoring grading Pardot study guide`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Pardot Consultant Exam Tips', url: '/pardot-consultant-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Salesforce Pardot Consultant exam format?',
    answer: 'The Salesforce Pardot Consultant (now officially named Account Engagement Consultant) exam has 60 multiple-choice questions, a 105-minute time limit, a 68% passing score, and a $200 fee ($100 retake). It tests Engagement Studio, lead scoring and grading, Salesforce-Pardot sync, automation rules, completion actions, segmentation lists, and reporting.',
  },
  {
    question: 'What are the highest-weight Pardot Consultant exam sections?',
    answer: 'Engagement Studio &amp; Automation (30%) and Lead Scoring, Grading &amp; Qualification (18%) together account for 48% of the exam. Mastering engagement programs — branching logic, triggers, and actions — is the single most important skill. Understanding how scores and grades work separately (score = interest level, grade = fit to ideal customer) is the second priority.',
  },
  {
    question: 'How does the Salesforce-Pardot sync work for the exam?',
    answer: 'Pardot syncs with Salesforce through the Connector. Prospects in Pardot map to Leads and Contacts in Salesforce. The sync runs every 2-10 minutes. Key exam rules: Pardot only syncs with Leads and Contacts — not Accounts or Opportunities directly. When a CRM value conflicts with a Pardot value, the CRM wins by default (unless overridden). Deleted CRM records do not delete Pardot prospects. Understanding sync direction and conflict resolution is frequently tested.',
  },
  {
    question: 'What is the difference between automation rules and completion actions in Pardot?',
    answer: 'Automation rules run retroactively against the entire prospect database and continuously — they fire whenever criteria are met, even for existing prospects. Completion actions run only at the moment a specific action is completed (e.g., form submit, email click) and only for new interactions. Segmentation rules are one-time static snapshots. For scenarios where you need to retroactively apply changes to existing prospects, automation rules are the answer; for real-time responses to new activity, completion actions are correct.',
  },
  {
    question: 'What concepts do most Pardot (Account Engagement) Consultant candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the Pardot (Account Engagement) Consultant exam are: (1) Completion Actions vs Automation Rules vs Dynamic Lists — Three Trigger Mechanisms; (2) Prospect Grades vs Scores — Profile Fit vs Engagement; (3) Pardot Business Units — Separate Instances Under One Salesforce Org. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('pardot-consultant-exam-tips'),
]

export default function PardotConsultantExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/pardot-consultant-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Pardot Consultant Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Pardot Consultant (Account Engagement Consultant) exam tests your ability to design and
          implement B2B marketing automation solutions using Engagement Studio, lead scoring and grading,
          Salesforce sync configuration, and segmentation. These tips focus on the automation logic
          and qualification patterns that define the highest-weight sections.
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
            <p className="text-2xl font-bold text-salesforce-blue">68%</p>
            <p className="text-xs text-gray-600 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$200</p>
            <p className="text-xs text-gray-600 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Pardot Consultant Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Engagement Studio</strong> — Building multi-step lead nurturing programs with triggers (email open, link click, form submit, page visit), rules (score, grade, field value), and actions (send email, add to list, assign to user, notify). Understanding wait steps, branching paths, and how completion actions on assets interact with running programs.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Lead Scoring &amp; Grading</strong> — Score measures prospect engagement (behaviour-based, goes up/down). Grade measures fit to your ideal customer profile (demographic-based, A–F scale). Both are needed for sales-readiness decisions. Know which activities increase score, how custom scoring works, and what makes a prospect sales-ready based on both criteria.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Salesforce Sync &amp; Connector</strong> — Prospect-to-Lead/Contact sync configuration, sync frequency, conflict resolution (CRM wins by default), assignment rules, custom field mapping, and the Pardot Connector user setup. Understanding what triggers a sync and what does not is tested extensively.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Engagement Studio &amp; Automation</span>
            <span className="font-bold text-salesforce-blue ml-4">30%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Lead Scoring, Grading &amp; Qualification</span>
            <span className="font-bold text-salesforce-blue ml-4">18%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Salesforce Integration &amp; Sync</span>
            <span className="font-bold text-salesforce-blue ml-4">17%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Administration &amp; Account Setup</span>
            <span className="font-bold text-salesforce-blue ml-4">16%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Email Marketing &amp; Reporting</span>
            <span className="font-bold text-salesforce-blue ml-4">19%</span>
          </div>
          <p className="text-xs text-gray-600 pt-1">Engagement Studio + Scoring/Grading = 48%. Master these two areas first before moving to integration and reporting topics.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Pardot Consultant Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions present a marketing automation requirement — a team wants to nurture leads who
          downloaded a whitepaper but have not yet requested a demo — and ask which Pardot tool,
          configuration, or sequence achieves the goal correctly.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For automation tool selection questions: Completion actions fire immediately when an asset interaction occurs (real-time, individual). Automation rules run continuously against all prospects matching criteria (retroactive, batch-style). Segmentation rules run once at creation (static snapshot). Engagement Studio orchestrates multi-step sequences with delays and branching. Match the right tool to the requirement: retroactive = automation rule; new-interaction-only = completion action; complex multi-step nurture = Engagement Studio.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For scoring questions: Default score profile assigns +1 for email open, +5 for link click, +50 for form submit, +100 for request a demo form. Scores decay over time with inactivity. Scores can be manually adjusted. When a prospect&apos;s score drops or is manually reset, it does not affect grade. Score and grade are completely independent — a prospect can have a high score (very engaged) but a low grade (wrong industry/company size).</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For Salesforce sync questions: Always check what triggers the sync — field edits in Pardot, form submissions, manual sync triggers, and connector user activity. The connector user in Salesforce must have the Pardot Connector permission set and API access. When a prospect is converted from Lead to Contact in Salesforce, Pardot automatically re-links to the Contact record if the email address matches.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Build at least one complete Engagement Studio program in a Pardot sandbox before booking —
          include a branching path based on email open, a score threshold check, and a CRM assignment
          action. Candidates who have only studied theory consistently misidentify which automation
          tool to use in scenario questions because the tools&apos; distinctions only become clear
          through hands-on configuration.
        </p>
      </section>

            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most Pardot (Account Engagement) Consultant Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Completion Actions vs Automation Rules vs Dynamic Lists — Three Trigger Mechanisms</p>
            <p className="text-sm text-gray-700">Completion Actions fire once when a specific form/email/link action occurs (form submit triggers email send). Automation Rules run continuously, checking all prospects against criteria at intervals — they can fire multiple times. Dynamic Lists update list membership in real time based on criteria but do not trigger actions. Candidates use Completion Actions for ongoing nurture logic — the exam expects Automation Rules for criteria-based continuous processing.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Prospect Grades vs Scores — Profile Fit vs Engagement</p>
            <p className="text-sm text-gray-700">Score measures engagement: points added for email opens, clicks, form fills. Grade measures profile fit: how well a prospect matches the ideal customer profile (industry, company size, title). Candidates use Score to prioritise all leads — the exam expects both to be used together: high score + high grade = prioritise; high score + low grade = nurture; low score + high grade = re-engage.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Pardot Business Units — Separate Instances Under One Salesforce Org</p>
            <p className="text-sm text-gray-700">Pardot Business Units (BUs) allow multiple separate Pardot environments under one Salesforce org — each BU has its own prospects, lists, campaigns, and sending domains. Prospects are NOT shared between BUs by default. Candidates assume all Pardot BUs share one prospect database — the exam expects BU-specific prospect isolation and the Connected Campaigns feature for aligning Pardot and Salesforce campaign reporting.</p>
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
          <Link href="/pardot-specialist-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Pardot Specialist Exam Tips</span>
          </Link>
          <Link href="/marketing-cloud-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Marketing Cloud Consultant Exam Tips</span>
          </Link>
          <Link href="/service-cloud-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Service Cloud Consultant Exam Tips</span>
          </Link>
          <Link href="/admin-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Admin Certification Path</span>
          </Link>
        </div>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Pardot Consultant Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/pardot-consultant" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Pardot Consultant Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/pardot-specialist-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Pardot Specialist Tips
          </Link>
          <Link href="/marketing-cloud-consultant-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            MC Consultant Tips
          </Link>
        </div>
        <p className="text-xs text-gray-600 mt-4">
          After this exam, consider <Link href="/certifications/marketing-cloud-consultant" className="text-salesforce-blue underline">Marketing Cloud Engagement Consultant</Link> or <Link href="/certifications/pardot-consultant" className="text-salesforce-blue underline">Account Engagement (Pardot) Consultant</Link> next.
        </p>
      </section>
    </div>
  )
}