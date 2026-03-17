import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'app-builder'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `DEV-402 exam tips (${RELEASE_CURRENT}): 4-week study plan, scenario strategies, and high-weight topic focus. Start free practice now.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/app-builder-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/app-builder-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Platform App Builder exam tips ${RELEASE_CURRENT}, how to pass DEV-402, Salesforce App Builder study guide, DEV-402 exam tips, app builder certification tips`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'App Builder Exam Tips', url: '/app-builder-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the App Builder (DEV-402) exam format?',
    answer: 'The Salesforce Platform App Builder exam (DEV-402) has 60 multiple-choice questions, a 105-minute time limit, a 68% passing score, and a $200 fee.',
  },
  {
    question: 'What are the highest-weight App Builder topics?',
    answer: 'Declarative customisation (37%) and Data Modelling (23%) together account for 60% of the exam. Lightning App Builder, custom objects, formula fields, and validation rules are the most tested skills.',
  },
  {
    question: 'How hard is the Platform App Builder exam?',
    answer: 'Moderate difficulty — it sits one step above ADM-201. Most candidates with admin experience pass in 4–6 weeks of study. Hands-on practice in a Developer Edition org is essential.',
  },
  {
    question: 'What is the difference between ADM-201 and App Builder?',
    answer: 'ADM-201 tests administration and configuration; App Builder tests building custom applications declaratively using objects, flows, Lightning pages, and the AppExchange. There is about 30% content overlap in automation and data topics.',
  },
  {
    question: 'What concepts do most App Builder candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the App Builder exam are: (1) Declarative-First: The Exam Always Prefers Flow Over Apex; (2) Master-Detail vs Lookup: The Sharing and Roll-Up Difference; (3) Lightning App Builder Visibility Rules vs Profile-Based Assignment. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('app-builder-exam-tips'),
]

export default function AppBuilderExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/app-builder-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Platform App Builder Exam Tips ({RELEASE_CURRENT}): How to Pass DEV-402 First Attempt
        </h1>
        <p className="text-lg text-gray-600">
          The DEV-402 exam is scenario-driven and tests declarative app building across data modelling, automation,
          security, and app design. These tips show you how to focus your study time and tackle each scenario type.
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
            <p className="text-2xl font-bold text-salesforce-blue">63%</p>
            <p className="text-xs text-gray-600 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$200</p>
            <p className="text-xs text-gray-600 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: Best Way to Pass DEV-402</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />The DEV-402 has 60 questions in 105 minutes. Passing score is 63%. Aim for 76%+ on full mocks before booking.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Highest-weight sections: Data Modelling &amp; Management (24%) and Process Automation &amp; Logic (27%) — cover these first.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />Practice declaratively in a Developer Edition org. The exam rewards hands-on understanding of when and why to use each feature.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" />The ADM-201 (Salesforce Administrator) is a recommended prerequisite — take it first if you haven&apos;t already.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Process Automation and Logic</span>
            <span className="font-bold text-salesforce-blue ml-4">27%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Data Modelling and Management</span>
            <span className="font-bold text-salesforce-blue ml-4">24%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Security and Access</span>
            <span className="font-bold text-salesforce-blue ml-4">15%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">App Design and User Interface</span>
            <span className="font-bold text-salesforce-blue ml-4">15%</span>
          </div>
          <p className="text-xs text-gray-600 pt-1">Process Automation + Data Modelling = 51%. Master flows, record types, and object relationships first.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">4-Week DEV-402 Study Plan</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <p><strong>Week 1:</strong> Data Modelling &amp; Management — object relationships (lookup vs master-detail, junction objects), roll-up summary fields, formula fields, validation rules, and schema design patterns.</p>
          <p><strong>Week 2:</strong> Process Automation &amp; Logic — Record-Triggered Flows for field updates and cross-object automation, Approval Processes for multi-step human approvals, and when to choose each tool. Workflow Rules and Process Builder are legacy — know them for elimination only.</p>
          <p><strong>Week 3:</strong> Security &amp; App Design — OWD, role hierarchy, sharing rules, permission sets, field-level security, Lightning App Builder (page types, Dynamic Forms), record types, page layout assignments.</p>
          <p><strong>Week 4:</strong> Full mock exams (aim for 76%+), revision of weak sections, reporting &amp; dashboards, and mobile/deployment basics. Book the exam only after hitting the mock benchmark consistently.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Handle DEV-402 Scenario Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Most DEV-402 questions present a business requirement and ask which declarative feature best meets it.
          The key is identifying the constraint in each scenario before selecting an answer.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><span><strong>Relationship questions:</strong> Use Master-Detail when child records should cascade-delete with the parent and when you need roll-up summary fields. Use Lookup when the child can exist independently. A junction object (two master-detail relationships) solves many-to-many.</span></li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><span><strong>Automation questions:</strong> Default answer is Flow (Record-Triggered). Choose Approval Process only when a multi-step human approval with rejection paths is described. Never choose Workflow Rule or Process Builder unless the scenario explicitly forbids Flow.</span></li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><span><strong>Security questions:</strong> Read the security model in order — OWD sets the baseline, role hierarchy opens up, sharing rules grant additional access, Field-Level Security and page layouts control visibility. Permission Sets grant permissions beyond a profile. Record Types control picklist values and page layout assignment, not field visibility.</span></li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><span><strong>Watch for key phrases:</strong> &ldquo;without code&rdquo; = declarative only; &ldquo;most efficient&rdquo; = native feature over custom-built; &ldquo;administrators only&rdquo; = profile-based; &ldquo;certain users&rdquo; = permission sets or sharing rules.</span></li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="text-sm text-gray-700 mb-2">
          Use this minimum benchmark before scheduling your DEV-402 exam:
        </p>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          76%+ on 3 timed full mocks (60 questions / 105 minutes each)
        </p>
        <p className="text-sm text-gray-700 mt-3">
          The official passing score is 63% (38/60 questions), but scoring at 76%+ on mocks significantly reduces retake risk
          and accounts for exam-day variance in question difficulty.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most App Builder Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Declarative-First: The Exam Always Prefers Flow Over Apex</p>
            <p className="text-sm text-gray-700">When a scenario can be solved by either a Record-Triggered Flow or an Apex trigger, the correct exam answer is always Flow. This is the &ldquo;declarative-first&rdquo; principle. The trap is candidates who have real-world Apex experience choosing the code solution — the exam penalises this. Only choose Apex when the scenario explicitly states something Flow cannot do, such as complex callouts or cross-object DML that Flow does not support.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Master-Detail vs Lookup: The Sharing and Roll-Up Difference</p>
            <p className="text-sm text-gray-700">Master-Detail relationships roll up summary fields (Count, Sum, Min, Max) from child to parent automatically — Lookup relationships cannot. More critically, Master-Detail OWD is inherited: if a Master record is Private, child records follow that access level regardless of the child object&apos;s own OWD. Lookup child records do NOT inherit OWD. Exam scenarios ask you to choose between them — if the scenario mentions roll-up summaries or shared security, choose Master-Detail.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Lightning App Builder Visibility Rules vs Profile-Based Assignment</p>
            <p className="text-sm text-gray-700">Component Visibility Rules in Lightning App Builder control whether a component is rendered on the page based on record field values, user permissions, or device type — they do NOT prevent the page from loading. Profile-based Page Layout Assignment controls which layout a profile sees. Candidates confuse these: if a scenario says &ldquo;only show this component to managers,&rdquo; the answer is Visibility Rules (using a custom permission or profile check), not a separate page layout.</p>
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
          <Link href="/adm-201-exam-tips-2026" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">ADM-201 Exam Tips</span>
          </Link>
          <Link href="/advanced-administrator-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Advanced Administrator Exam Tips</span>
          </Link>
          <Link href="/experience-cloud-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Experience Cloud Consultant Exam Tips</span>
          </Link>
          <Link href="/adm-201-vs-app-builder" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">ADM-201 vs App Builder Comparison</span>
          </Link>
        </div>
      </section>

      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Next Step</h2>
        <p className="text-sm text-gray-700 mb-4">
          Apply these tips with real DEV-402 practice questions:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/certifications/app-builder"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors"
          >
            Start App Builder Practice Test
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/adm-201-vs-app-builder"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Compare ADM-201 vs App Builder
          </Link>
        </div>
        <p className="text-xs text-gray-600 mt-4">
          After you&apos;re consistently scoring 75%+ on App Builder mocks, the most common next steps are{' '}
          <Link href="/certifications/advanced-administrator" className="text-salesforce-blue underline">
            Advanced Administrator
          </Link>
          {' '}on the admin track, or cloud-specific roles like{' '}
          <Link href="/certifications/sales-cloud" className="text-salesforce-blue underline">
            Sales Cloud Consultant
          </Link>
          {' '}and{' '}
          <Link href="/certifications/service-cloud" className="text-salesforce-blue underline">
            Service Cloud Consultant
          </Link>
          {' '}if you want to move into implementations.
        </p>
        <p className="text-xs text-gray-600 mt-4">
          After this exam, consider <Link href="/certifications/developer-2" className="text-salesforce-blue underline">Platform Developer II</Link> or <Link href="/certifications/app-builder" className="text-salesforce-blue underline">Platform App Builder</Link> next.
        </p>
      </section>
    </div>
  )
}