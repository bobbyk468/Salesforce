import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'dev-lifecycle-deployment-architect'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Dev Lifecycle & Deployment Architect exam tips: release management, CI/CD, environment strategy. Pass first attempt Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/dev-lifecycle-deployment-architect-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/dev-lifecycle-deployment-architect-exam-tips`,
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
  { name: 'Dev Lifecycle & Deployment Architect Exam Tips', url: '/dev-lifecycle-deployment-architect-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Dev Lifecycle & Deployment Architect exam format?',
    answer: 'The Salesforce Dev Lifecycle & Deployment Architect exam has 60 multiple-choice questions, a 105-minute time limit, a 63% passing score, and a $200 fee. It is a component exam for the System Architect role-based credential and tests release management, DevOps strategy, and environment architecture.',
  },
  {
    question: 'What are the highest-weight Dev Lifecycle & Deployment Architect exam sections?',
    answer: 'Environment Strategy (30%) is the single highest-weight section, followed by Release Management (25%) and Deployment Strategy (20%). Together these three sections account for 75% of the exam. Sandbox hierarchy design and source-driven development are the most heavily tested topics.',
  },
  {
    question: 'What is tested in the Dev Lifecycle & Deployment Architect exam?',
    answer: 'The exam tests: sandbox environment strategies (when to use Developer vs. Full vs. Partial Copy sandboxes), release management frameworks (Salesforce DevOps Center, Gearset, Copado, SFDX), version control strategy, metadata deployment (change sets vs. SFDX vs. package-based development), and CI/CD pipeline design for Salesforce.',
  },
  {
    question: 'What makes the Dev Lifecycle & Deployment Architect exam hard?',
    answer: 'The exam requires architectural thinking about DevOps — not just knowledge of tools. Candidates must recommend sandbox strategies for organisations with multiple parallel development streams, design CI/CD pipelines, and understand the trade-offs between scratch orgs vs. sandboxes vs. packaging models. Real release management experience is essential.',
  },
  {
    question: 'What concepts do most Dev Lifecycle & Deployment Architect candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the Dev Lifecycle & Deployment Architect exam are: (1) Unlocked Packages vs Change Sets vs Metadata API — Choosing the Right Deployment Tool; (2) Scratch Orgs vs Sandboxes — Source-Driven vs Org-Driven Development; (3) CI/CD Pipeline Stages — What Runs in Each Environment. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('dev-lifecycle-deployment-architect-exam-tips'),
]

export default function DevLifecycleDeploymentArchitectExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/dev-lifecycle-deployment-architect-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Dev Lifecycle &amp; Deployment Architect Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Dev Lifecycle &amp; Deployment Architect exam tests your ability to design Salesforce development
          environments, release pipelines, and DevOps architectures. These tips focus on environment strategy,
          source control, and the deployment decisions the exam tests at architectural depth.
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Dev Lifecycle & Deployment Architect Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Environment strategy</strong> — Sandbox type selection (Developer, Developer Pro, Partial Copy, Full), environment hierarchy design for parallel development streams, and scratch org vs. sandbox decisions.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Release management</strong> — Source-driven development with SFDX, unlocked packages vs. change sets, CI/CD pipeline design, and branching strategy for Salesforce teams.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Deployment strategy</strong> — When to use change sets vs. SFDX CLI vs. package-based deployment, metadata dependency management, and rollback strategy.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Environment Strategy</span>
            <span className="font-bold text-salesforce-blue ml-4">30%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Release Management</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Deployment Strategy</span>
            <span className="font-bold text-salesforce-blue ml-4">20%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Development Lifecycle Best Practices</span>
            <span className="font-bold text-salesforce-blue ml-4">15%</span>
          </div>
          <p className="text-xs text-gray-600 pt-1">Environment Strategy + Release Management + Deployment = 75%. Sandbox hierarchy and SFDX are your core study topics.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Dev Lifecycle Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Dev Lifecycle questions describe an organisation&apos;s development setup and ask which environment strategy,
          deployment method, or release process is correct. The key is identifying the scale of the team and
          the frequency of releases.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For sandbox selection: Developer = individual dev work, no data needed; Partial Copy = testing with a subset of production data; Full = UAT/performance testing with production-scale data. Cost increases significantly from Developer → Full.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />Change sets are simple but create deployment dependencies that are hard to manage at scale. Recommend SFDX + source control when the scenario involves multiple parallel development streams or CI/CD requirements.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />Unlocked packages enable modular deployment and versioning — recommend them when the scenario requires packaging components for reuse across multiple orgs or precise version rollback.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For CI/CD questions: scratch orgs are disposable and ideal for automated testing pipelines. Sandboxes are persistent and better for long-running integration testing. Know the lifecycle differences.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          76%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Dev Lifecycle &amp; Deployment Architect questions are heavily scenario-based and require real release management
          experience. Candidates who have managed Salesforce deployments across multiple environments and
          implemented CI/CD pipelines are significantly better prepared than those who only study theory.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most Dev Lifecycle &amp; Deployment Architect Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Unlocked Packages vs Change Sets vs Metadata API — Choosing the Right Deployment Tool</p>
            <p className="text-sm text-gray-700">Change Sets are UI-based, work only between related orgs, and have no version control. Metadata API is scriptable but stateless (no package versioning). Unlocked Packages are modular, versioned, and installable across unrelated orgs — they are the modern recommended approach for complex org development. Candidates recommend Change Sets for all deployments — the exam expects Unlocked Packages for independent module deployment and CI/CD pipelines.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Scratch Orgs vs Sandboxes — Source-Driven vs Org-Driven Development</p>
            <p className="text-sm text-gray-700">Scratch Orgs are temporary, configuration-driven development environments spun up from source code — they enforce source-driven development. Sandboxes are copies of production (or another sandbox) and are better for QA and UAT. Candidates use sandboxes for development — the exam expects scratch orgs for feature development in a DX-based CI/CD pipeline.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. CI/CD Pipeline Stages — What Runs in Each Environment</p>
            <p className="text-sm text-gray-700">A typical Salesforce CI/CD pipeline: develop in scratch orgs → run unit tests in CI org → deploy to SIT sandbox → UAT sandbox → staging sandbox → production. Candidates skip stages or run unit tests only in production deployment — the exam expects unit tests to run at every stage, with integration tests in SIT and user acceptance in UAT.</p>
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
          <Link href="/integration-architect-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Integration Architect Exam Tips</span>
          </Link>
          <Link href="/system-architect-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">System Architect Exam Tips</span>
          </Link>
          <Link href="/pd1-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">PD1 Exam Tips</span>
          </Link>
          <Link href="/architect-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Architect Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Dev Lifecycle & Deployment Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/dev-lifecycle-deployment-architect" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Dev Lifecycle Practice Questions <ArrowRight className="h-4 w-4" />
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