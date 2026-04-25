import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import ExamTipsCertLink from '@/components/ExamTipsCertLink'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'
import StudyGuideCrossLink from '@/components/StudyGuideCrossLink'
import ExamPricingCard from '@/components/ExamPricingCard'




const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'advanced-administrator'
const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Advanced Administrator (ADM-211) exam tips for ${RELEASE_CURRENT}: security, automation, data management Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/advanced-administrator-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/advanced-administrator-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Advanced Administrator', url: '/certifications/advanced-administrator' },
  { name: 'Advanced Administrator Exam Tips', url: '/advanced-administrator-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Salesforce Advanced Administrator (ADM-211) exam format?',
    answer: 'The Salesforce Advanced Administrator exam has 60 multiple-choice questions, a 105-minute time limit, a 65% passing score, and a $200 fee. It requires the Salesforce Administrator (ADM-201) certification as a prerequisite and tests complex configuration scenarios beyond the ADM-201 level.',
  },
  {
    question: 'What are the highest-weight Advanced Administrator exam sections?',
    answer: 'Security and Access (20%) and Extending Custom Objects and Applications (18%) are the highest-weight sections, together accounting for 38% of the ADM-211 exam. Advanced Process Automation (15%) and Analytics: Reports and Dashboards (14%) round out the key study areas.',
  },
  {
    question: 'How hard is the Advanced Administrator exam compared to ADM-201?',
    answer: 'ADM-211 is significantly harder than ADM-201. It tests complex multi-step scenarios involving combinations of security model configurations, advanced automation, and data management — not individual feature knowledge. Most candidates need at least 2 years of hands-on Salesforce administration experience before attempting ADM-211.',
  },
  {
    question: 'What is the best way to study for the Advanced Administrator exam?',
    answer: 'Focus on complex security scenarios involving combinations of OWD, role hierarchy, sharing rules, permission sets, and field-level security applied simultaneously. Study advanced automation (complex Flow logic, Approval Processes with dynamic routing) and advanced reporting (joined reports, matrix reports, report formulas). Practice scenario questions — the exam describes a complex requirement and asks which combination of features solves it.',
  },
  {
    question: 'What concepts do most Advanced Administrator candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the Advanced Administrator exam are: (1) Record-Triggered Flow — Before-Save vs After-Save vs Scheduled Paths; (2) Territory Management 2.0 — Assignment Rules vs Sharing Rules; (3) Change Data Capture vs Platform Events — Choosing the Right Tool. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('advanced-administrator-exam-tips'),
]

export default function AdvancedAdministratorExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/advanced-administrator-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems}   mainEntityUrl="/advanced-administrator-study-guide"
      />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Advanced Administrator Exam Tips ({RELEASE_CURRENT}): How to Pass ADM-211
        </h1>
        <p className="text-lg text-gray-600">
          The Advanced Administrator (ADM-211) exam tests complex, multi-layered Salesforce configuration scenarios.
          These tips focus on the security model combinations, advanced automation, and analytical
          capabilities the exam tests beyond the ADM-201 level.
        </p>
      </header>

      <ContentPageAuthor />

      <ExamTipsCertLink certSlug={slug} />
      <StudyGuideCrossLink studyGuideSlug="advanced-administrator-study-guide" certName="Advanced Administrator" />
      <ExamPricingCard
        certSlug="advanced-administrator"
        certName="Advanced Administrator"
        certPageSlug="advanced-administrator"
      />


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What ADM-211 Actually Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Complex security architectures</strong> — Not just individual settings, but how OWDs, role hierarchy, sharing rules, profiles, permission sets, and field-level security interact in multi-team organisations.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Advanced automation</strong> — Complex multi-step Flows (screen flows, scheduled flows, autolaunched flows), Approval Processes with dynamic escalation and parallel approval paths.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Data management at scale</strong> — Duplicate management strategies, mass data operations, field history tracking limitations, and data archiving approaches.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Security and Access</span>
            <span className="font-bold text-salesforce-blue ml-4">20%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Extending Custom Objects and Applications</span>
            <span className="font-bold text-salesforce-blue ml-4">18%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Advanced Process Automation</span>
            <span className="font-bold text-salesforce-blue ml-4">15%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Analytics: Reports and Dashboards</span>
            <span className="font-bold text-salesforce-blue ml-4">14%</span>
          </div>
          <p className="text-xs text-gray-600 pt-1">Security + Custom Objects + Automation = 53%. These three sections define the exam. Complex security scenarios are the most common failure point.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach ADM-211 Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          ADM-211 questions describe a complex business requirement and ask which combination of Salesforce features satisfies it.
          Unlike ADM-201, the answer is rarely a single feature — it is often a combination of configurations working together.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For complex security questions: identify all constraints simultaneously (what can this group see? what can they edit? do any subsets need exceptions?). Work through OWD → role → sharing rule → profile → permission set in that order.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For automation questions: Flow is always the modern answer. Choose between Record-Triggered Flow (automated, no user interaction), Screen Flow (guided user input), and Scheduled Flow (time-based) based on the trigger described in the scenario.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For reporting questions: Joined reports combine multiple report types. Matrix reports show data by two dimensions. Summary reports group by one dimension. Formula fields in reports vs. summary formulas are frequently confused — know the difference.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          76%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          ADM-211 requires 2+ years of real Salesforce administration experience. Candidates who attempt it
          within 3-6 months of ADM-201 typically fail. The complex security and automation scenarios
          are not learnable from study guides alone — you need to have faced these challenges in real orgs.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most Advanced Administrator Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Record-Triggered Flow — Before-Save vs After-Save vs Scheduled Paths</p>
            <p className="text-sm text-gray-700">Before-Save flows run before the record is committed — they can modify the triggering record without DML and cannot create related records. After-Save flows run after commit and can create/update related records but cost DML governor limits. Scheduled Paths run at a future date/time on records that meet criteria at that point. Candidates choose wrong path types for scenarios: before-save for creating child records (impossible), after-save for modifying the trigger record without DML (inefficient).</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Territory Management 2.0 — Assignment Rules vs Sharing Rules</p>
            <p className="text-sm text-gray-700">Territory Management 2.0 controls which accounts and their related objects a user can access based on geographic or segment-based territory models. Sharing rules extend access horizontally between peers. Candidates answer territory management questions using sharing rule logic. Key distinction: territory models have states (Planning, Active, Archived) and run assignment rules to associate accounts to territories — sharing rules have no concept of model states.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Change Data Capture vs Platform Events — Choosing the Right Tool</p>
            <p className="text-sm text-gray-700">Change Data Capture (CDC) streams granular record changes (create/update/delete/undelete) from Salesforce to external systems that subscribe via the API. Platform Events are custom event messages published and subscribed to within and outside Salesforce for event-driven architecture. Candidates answer &ldquo;stream Salesforce record changes to a data warehouse&rdquo; questions with Platform Events (wrong — that&apos;s CDC) and &ldquo;trigger async workflows on new order events&rdquo; with CDC (wrong — that&apos;s Platform Events).</p>
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
          <Link href="/adm-201-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">ADM-201 Exam Tips</span>
          </Link>
          <Link href="/app-builder-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">App Builder Exam Tips</span>
          </Link>
          <Link href="/administrator-vs-advanced-administrator" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Admin vs Advanced Admin</span>
          </Link>
          <Link href="/admin-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Admin Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Advanced Administrator Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/advanced-administrator" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            ADM-211 Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/adm-201-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            ADM-201 Exam Tips
          </Link>
          <Link href="/admin-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Admin Certification Path
          </Link>
        </div>
        <p className="text-xs text-gray-600 mt-4">
          After this exam, consider <Link href="/certifications/advanced-administrator" className="text-salesforce-blue underline">Advanced Administrator</Link> or <Link href="/certifications/app-builder" className="text-salesforce-blue underline">Platform App Builder</Link> next.
        </p>
      </section>
    </div>
  )
}