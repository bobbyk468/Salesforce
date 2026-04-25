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
const slug = 'integration-architect'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Integration Architect exam tips for ${RELEASE_CURRENT}: integration patterns, API strategy, middleware Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/integration-architect-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/integration-architect-exam-tips`,
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
  { name: 'Integration Architect', url: '/certifications/integration-architect' },
  { name: 'Integration Architect Exam Tips', url: '/integration-architect-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Salesforce Integration Architect exam format?',
    answer: 'The Salesforce Integration Architect exam has 60 multiple-choice questions, a 120-minute time limit, a 63% passing score, and a $200 fee. It is a component exam for the System Architect role-based credential and tests integration strategy, API patterns, and middleware architecture.',
  },
  {
    question: 'What are the highest-weight Integration Architect exam sections?',
    answer: 'Integration Architecture (27%) and Salesforce Platform Architecture (23%) together account for 50% of the exam. API design patterns, middleware selection (MuleSoft vs. point-to-point vs. custom), and Platform Events are the most heavily tested topics.',
  },
  {
    question: 'What prerequisites do I need for the Integration Architect exam?',
    answer: 'There are no hard prerequisites, but Salesforce recommends Platform Developer I (PD1) and experience with REST/SOAP APIs before attempting Integration Architect. Real integration project experience — connecting Salesforce to ERP, marketing, or billing systems — is essential for the scenario-based questions.',
  },
  {
    question: 'What is the difference between Integration Architect and Platform Developer II for integrations?',
    answer: 'Platform Developer II tests how to write integration code (REST callouts, SOAP, Named Credentials, HttpCalloutMock). Integration Architect tests when and how to choose the right integration pattern at an architectural level — REST vs. SOAP vs. bulk API vs. streaming, middleware vs. point-to-point vs. ESB, and security architecture for integrations.',
  },
  {
    question: 'What concepts do most Integration Architect candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the Integration Architect exam are: (1) Real-Time vs Near-Real-Time vs Batch — Choosing the Right Integration Pattern; (2) Idempotency — Why Retry Logic Requires Idempotent Operations; (3) Salesforce Connect vs Heroku Connect vs MuleSoft — Three Different Integration Approaches. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('integration-architect-exam-tips'),
]

export default function IntegrationArchitectExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/integration-architect-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems}   mainEntityUrl="/integration-architect-study-guide"
      />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Integration Architect Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Salesforce Integration Architect exam tests your ability to design enterprise integration architectures
          connecting Salesforce to external systems. These tips focus on integration pattern selection,
          API strategy, and the architectural trade-offs the exam tests.
        </p>
      </header>

      <ContentPageAuthor />

      <ExamTipsCertLink certSlug={slug} />
      <StudyGuideCrossLink studyGuideSlug="integration-architect-study-guide" certName="Integration Architect" />
      <ExamPricingCard
        certSlug="integration-architect"
        certName="Integration Architect"
        certPageSlug="integration-architect"
      />


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Integration Architect Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Integration pattern selection</strong> — When to use REST vs. SOAP vs. Bulk API vs. Streaming API vs. Platform Events, and the trade-offs of each for specific integration scenarios.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Middleware architecture</strong> — When to recommend point-to-point integration vs. middleware (MuleSoft, Dell Boomi) vs. a custom ESB, and the governance implications of each choice.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Security for integrations</strong> — OAuth flows (User-Agent, Username-Password, JWT Bearer, Web Server), Named Credentials, and certificate management for secure system-to-system communication.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Integration Architecture</span>
            <span className="font-bold text-salesforce-blue ml-4">27%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Salesforce Platform Architecture</span>
            <span className="font-bold text-salesforce-blue ml-4">23%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Security Architecture</span>
            <span className="font-bold text-salesforce-blue ml-4">18%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Data Integration</span>
            <span className="font-bold text-salesforce-blue ml-4">16%</span>
          </div>
          <p className="text-xs text-gray-600 pt-1">Integration Architecture + Platform Architecture = 50%. Integration pattern selection is your single most important study topic.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Integration Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Every Integration Architect question describes an integration requirement and asks which pattern or technology fits.
          Answer by identifying three constraints: volume, latency requirement, and system ownership.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />High volume + batch = Bulk API. Real-time + low latency = REST API. Event-driven = Platform Events. Message queue = MuleSoft or custom middleware. Learn this decision matrix cold.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For middleware questions: point-to-point is fast but creates spaghetti as systems multiply. Recommend middleware whenever the scenario involves 3+ integrated systems or complex transformation requirements.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For security questions: know all four OAuth flows and when to use each. JWT Bearer = server-to-server without user interaction. Web Server = user-initiated. Username-Password = legacy/not recommended. User-Agent = deprecated.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For Change Data Capture questions: CDC is for near-real-time sync of Salesforce changes to external systems. Platform Events is for publishing custom events. Know the difference and when each applies.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          76%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Integration Architect has a lower first-attempt pass rate than most architect component exams.
          The questions require genuine integration project experience — candidates who have only studied
          theory consistently fail middleware and OAuth flow questions.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most Integration Architect Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Real-Time vs Near-Real-Time vs Batch — Choosing the Right Integration Pattern</p>
            <p className="text-sm text-gray-700">Real-time integration executes synchronously during a transaction (callout mid-save) — adds latency and risk of timeout. Near-real-time uses Platform Events or Change Data Capture to trigger async processing within seconds. Batch syncs data on a schedule (hourly, nightly). Candidates recommend real-time callouts for data that needs to be "current" — the exam expects near-real-time (Platform Events) for that pattern and real-time only for blocking decisions (credit checks, inventory holds).</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Idempotency — Why Retry Logic Requires Idempotent Operations</p>
            <p className="text-sm text-gray-700">An idempotent operation produces the same result whether executed once or multiple times. Integration retries can cause duplicate records or double-charges if operations are not idempotent. Exam scenarios about retry handling expect idempotency design: use upsert (not insert) on retry, include a correlation ID, check if a record already exists before creating. Candidates design retry without idempotency safeguards.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Salesforce Connect vs Heroku Connect vs MuleSoft — Three Different Integration Approaches</p>
            <p className="text-sm text-gray-700">Salesforce Connect exposes external data as External Objects in real time without importing it (best for small record sets queried infrequently). Heroku Connect maintains a Postgres replica of Salesforce data for high-performance querying. MuleSoft API-led connectivity builds reusable integration APIs across systems. Candidates recommend MuleSoft for all integration scenarios — the exam tests which tool fits the specific requirement.</p>
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
          <Link href="/system-architect-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">System Architect Exam Tips</span>
          </Link>
          <Link href="/data-architect-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Data Architect Exam Tips</span>
          </Link>
          <Link href="/integration-architect-vs-system-architect" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Integration Architect vs System Architect</span>
          </Link>
          <Link href="/architect-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Architect Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Integration Architect Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/identity-access-management-architect" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Integration Architect Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/system-architect-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            System Architect Exam Tips
          </Link>
          <Link href="/architect-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Architect Certification Path
          </Link>
        </div>
        <p className="text-xs text-gray-600 mt-4">
          After this exam, consider <Link href="/certifications/application-architect" className="text-salesforce-blue underline">Application Architect</Link> or <Link href="/certifications/system-architect" className="text-salesforce-blue underline">System Architect</Link> next.
        </p>
      </section>
    </div>
  )
}