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



const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'developer-2'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `PD2 exam tips for ${RELEASE_CURRENT}: advanced Apex patterns, integration, design patterns, and mock-test strategy to pass Platform Developer II first attempt.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/pd2-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/pd2-exam-tips`,
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
  { name: 'Platform Developer II', url: '/certifications/developer-2' },
  { name: `PD2 Exam Tips ${RELEASE_CURRENT}`, url: '/pd2-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the PD2 exam format?',
    answer: 'The Platform Developer II (PD2) exam has 60 multiple-choice questions, a 120-minute time limit, a 65% passing score, and a $200 fee. It requires PD1 certification as a prerequisite.',
  },
  {
    question: 'What are the highest-weight PD2 exam sections?',
    answer: 'Apex and the Salesforce Platform (28%), Process Automation and Logic (25%), and Debugging, Testing, and Deployment (23%) together account for 76% of the PD2 exam. Mastering these three sections is essential to pass.',
  },
  {
    question: 'How hard is the PD2 exam compared to PD1?',
    answer: 'PD2 is significantly harder than PD1. It tests advanced design patterns (trigger frameworks, selector/domain/service layers), complex REST/SOAP integrations, and asynchronous Apex. Most candidates need 12–18 months of real Apex project experience after PD1 before attempting PD2.',
  },
  {
    question: 'How should I prepare for the PD2 exam?',
    answer: 'Build real Apex projects using enterprise design patterns (Separation of Concerns, trigger frameworks). Practice REST and SOAP callouts with Named Credentials and HttpCalloutMock. Study Platform Events and the Streaming API. Take timed mocks — aim for 75%+ consistently before booking.',
  },
  {
    question: 'What concepts do most Platform Developer II (PD2) candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the Platform Developer II (PD2) exam are: (1) Apex Design Patterns — Separation of Concerns in Trigger Architecture; (2) Asynchronous Apex: Future vs Queueable vs Batch vs Scheduled; (3) Platform Cache — Partitioned Storage That Does Not Persist Across Deployments. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('pd2-exam-tips'),
]

export default function Pd2ExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas
        headline={pageTitle}
        description={pageDescription}
        path="/pd2-exam-tips"
        breadcrumbItems={breadcrumbItems}
        faqItems={faqItems}
      />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          PD2 Exam Tips ({RELEASE_CURRENT}): How to Pass Platform Developer II
        </h1>
        <p className="text-lg text-gray-600">
          Platform Developer II (PD2) is the most challenging Salesforce developer credential.
          These tips help you focus on advanced Apex patterns, integration architecture, and the
          design principles that distinguish PD2 from entry-level developer exams.
        </p>
      </header>

      <ContentPageAuthor />

      <ExamTipsCertLink certSlug={slug} />
      <StudyGuideCrossLink studyGuideSlug="pd2-study-guide" certName="Platform Developer II" />


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What PD2 Actually Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Not just Apex syntax</strong> — PD2 expects enterprise-grade design patterns: trigger frameworks, Separation of Concerns (SoC), and selector/domain/service layers.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Integration depth</strong> — REST and SOAP callouts with Named Credentials, HttpCalloutMock, WebServiceMock, and proper error handling patterns.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Async Apex mastery</strong> — Batch, Queueable, Schedulable, and Platform Events are tested at implementation depth, not just awareness level.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">High-Weight PD2 Exam Sections to Prioritise</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Apex and the Salesforce Platform</span>
            <span className="font-bold text-salesforce-blue ml-4">28%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Process Automation and Logic</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Debugging, Testing, and Deployment</span>
            <span className="font-bold text-salesforce-blue ml-4">23%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Integration and Data Management</span>
            <span className="font-bold text-salesforce-blue ml-4">24%</span>
          </div>
          <p className="text-xs text-gray-600 pt-1">The top three sections account for 76% of the exam. Focus your first four weeks here.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach PD2 Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          PD2 questions describe a technical requirement or architectural problem and ask which pattern, mechanism,
          or configuration is the right solution. The correct answer always follows enterprise design principles —
          separation of concerns, testability, and scalability.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For async questions: choose the mechanism based on volume and latency. Queueable = chaining + object context; Batch = millions of records; Schedulable = time-based; Platform Events = decoupled integration.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For integration questions: REST callouts use Named Credentials and HttpCalloutMock in tests; SOAP uses WebServiceMock. Always pick the mock that matches the callout type.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For design pattern questions: if the scenario describes multiple objects or cross-object logic, the answer involves a Service layer or Selector layer — not a trigger directly.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Advanced Apex Patterns You Must Know</h2>
        <p className="text-sm text-gray-700 mb-3">
          PD2 questions test whether you understand <em>why</em> patterns exist, not just that they exist.
          For each pattern, know: when to use it, what problem it solves, and what the anti-pattern looks like.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><strong>Trigger framework (handler pattern):</strong> One trigger per object, logic in handler class, no business logic in trigger itself.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><strong>Selector / Domain / Service layers:</strong> Separation of Concerns for enterprise Apex. Know what each layer owns and why mixing them creates bulk API failures.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><strong>HttpCalloutMock and WebServiceMock:</strong> Every integration test needs a mock. PD2 tests whether you mock correctly, not just whether tests pass.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" /><strong>Platform Events and CDC:</strong> Decoupled architecture for async integration. Know when to use PE vs Queueable vs Batch.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="text-sm text-gray-700 mb-2">
          PD2 has a lower first-attempt pass rate than PD1. Use this minimum benchmark:
        </p>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks — only then book
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Unlike PD1, scoring 70% in mocks is not sufficient for PD2 — the real exam is harder in the
          integration and design-pattern sections. Be conservative.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most Platform Developer II (PD2) Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Apex Design Patterns — Separation of Concerns in Trigger Architecture</p>
            <p className="text-sm text-gray-700">PD2 tests Apex design patterns: Trigger Handler pattern separates trigger logic from the trigger file. Service Layer pattern contains reusable business logic. Selector pattern centralises SOQL queries. Domain Layer validates and processes records. Candidates write all logic directly in Apex triggers — the exam expects Trigger Handler pattern at minimum, and asks which layer a specific piece of logic belongs in.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Asynchronous Apex: Future vs Queueable vs Batch vs Scheduled</p>
            <p className="text-sm text-gray-700">@future: runs one asynchronous method, no chaining, no state. Queueable: like @future but supports chaining, object parameters, and monitoring. Batch: processes large data volumes in chunks (up to 50M records). Scheduled: executes on a cron-like schedule. Candidates use @future for all async operations — the exam expects Queueable when chaining is needed, Batch for large data sets, and Scheduled for recurring jobs.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Platform Cache — Partitioned Storage That Does Not Persist Across Deployments</p>
            <p className="text-sm text-gray-700">Platform Cache stores computed values (formula results, complex SOQL outputs) in an in-memory cache with a defined TTL, reducing repeated computation. Org Cache is shared across all users; Session Cache is user-session-specific. Cache is NOT persistent — values are lost on deployment, maintenance, or TTL expiry. Candidates design Platform Cache as a permanent data store — the exam expects fallback logic to regenerate values on cache miss.</p>
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
          <Link href="/pd1-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">PD1 Exam Tips</span>
          </Link>
          <Link href="/pd1-vs-pd2" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">PD1 vs PD2</span>
          </Link>
          <Link href="/javascript-developer-i-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">JavaScript Developer I Exam Tips</span>
          </Link>
          <Link href="/developer-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Developer Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start PD2 Prep</h2>
        <p className="text-sm text-gray-700 mb-4">
          Apply these tips with real exam-style practice:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/certifications/developer-2"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors"
          >
            PD2 Practice Questions
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/pd1-vs-pd2"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            PD1 vs PD2 Comparison
          </Link>
          <Link
            href="/developer-certification-path"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Developer Certification Path
          </Link>
        </div>
        <p className="text-xs text-gray-600 mt-4">
          After this exam, consider <Link href="/certifications/developer-2" className="text-salesforce-blue underline">Platform Developer II</Link> or <Link href="/certifications/app-builder" className="text-salesforce-blue underline">Platform App Builder</Link> next.
        </p>
      </section>
    </div>
  )
}