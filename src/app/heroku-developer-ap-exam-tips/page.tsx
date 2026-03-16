import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Heroku Developer AP Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Heroku Developer Accredited Professional exam tips for ${RELEASE_CURRENT}: Heroku deployments, dynos, add-ons, Salesforce integration.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/heroku-developer-ap-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/heroku-developer-ap-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Heroku Developer AP exam tips ${RELEASE_CURRENT}, how to pass Heroku Developer AP, Salesforce Heroku certification, Heroku dyno deployment exam`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Heroku Developer AP Exam Tips', url: '/heroku-developer-ap-exam-tips' },
]

const faqItems = [
  {
    question: 'How hard is the Heroku Developer ap exam?',
    answer: 'The Heroku Developer ap is a Pass/Fail accredited professional exam (40 questions, 60 minutes, $150) designed for practitioners with hands-on implementation experience. It is considered moderately challenging for those who have configured Heroku Developer ap on real customer projects. Candidates without hands-on experience often find the specialised data model and feature configuration scenarios harder than expected. Most experienced practitioners pass with 3–4 weeks of focused review using the official Salesforce Trailmix for this accreditation.',
  },
  {
    question: 'What are the highest-weight Heroku Developer AP exam sections?',
    answer: 'Heroku Application Deployment (30%) and Dyno Management and Scaling (25%) together account for 55% of the exam. Deploying applications via Git, configuring dyno types (web, worker, one-off), horizontal and vertical scaling, understanding dyno sleeping behaviour for free/eco dynos, and managing config vars are the most tested areas.',
  },
  {
    question: 'What is Heroku Connect and how does the exam test it?',
    answer: 'Heroku Connect is a Heroku add-on that synchronises data between a Heroku PostgreSQL database and a Salesforce org. It enables Heroku applications to read and write Salesforce data through a PostgreSQL database interface, without using Salesforce APIs directly. The exam tests how to configure Heroku Connect mappings, set sync direction (Salesforce to Heroku, Heroku to Salesforce, or bidirectional), and handle conflict resolution.',
  },
  {
    question: 'What Heroku add-ons are commonly tested in the Developer AP exam?',
    answer: 'The exam commonly tests Heroku Postgres (managed PostgreSQL database), Heroku Redis (managed Redis cache), Heroku Data for Redis (additional cache and queue support), SendGrid (transactional email), Papertrail (log management), and New Relic (performance monitoring). Understanding how to provision add-ons, access credentials via config vars, and scale add-on plans is tested.',
  },
  {
    question: 'What concepts do most Heroku Developer candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the Heroku Developer exam are: (1) Ephemeral Filesystem — Files Written to Dyno Are Lost on Restart; (2) Config Vars vs .env — Environment Variables Are Not in Code; (3) Release Phase — Run Migrations Before New Code Goes Live. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
]

export default function HerokuDeveloperApExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/heroku-developer-ap-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Heroku Developer AP Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Heroku Developer AP validates your expertise in building and deploying applications
          on Heroku. These tips focus on application deployment, dyno management, Heroku Connect,
          and the add-on ecosystem that define this accreditation.
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
            <p className="text-2xl font-bold text-salesforce-blue">60 min</p>
            <p className="text-xs text-gray-500 mt-0.5">Time Limit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">Pass / Fail</p>
            <p className="text-xs text-gray-500 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$150</p>
            <p className="text-xs text-gray-500 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Heroku Developer AP Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Application deployment and management</strong> — Deploying apps to Heroku via Git push, buildpacks (automatic detection of language and runtime), Procfile for defining process types, config vars for environment configuration, Heroku Pipelines for staging/production promotion workflows, and Review Apps for pull request preview environments.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Dynos and scaling</strong> — Dyno types (eco, basic, standard-1x, standard-2x, performance-M, performance-L), web dynos (handle HTTP requests), worker dynos (background jobs), one-off dynos (ad-hoc commands), dyno sleeping for eco/basic tier, horizontal scaling (more dynos), vertical scaling (larger dyno type), and autoscaling configuration.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Heroku Connect and Salesforce integration</strong> — Configuring Heroku Connect to sync Salesforce objects to Heroku Postgres, setting up field mappings and sync direction, handling polling interval and event-driven sync, conflict resolution strategies, and building Heroku applications that read and write Salesforce data via the synced Postgres database.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Application Deployment and Management</span>
            <span className="font-bold text-salesforce-blue ml-4">30%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Dynos and Scaling</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Heroku Connect and Salesforce Integration</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Add-ons and Monitoring</span>
            <span className="font-bold text-salesforce-blue ml-4">15%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">AP format: 40 questions, 60 minutes, Pass/Fail, $150. Dyno types and Heroku Connect are the most distinctively Heroku topics — prioritise these over general web development knowledge.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Heroku Developer AP Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a Heroku deployment or integration scenario and ask which Heroku feature,
          command, or configuration achieves it. Think in terms of Heroku&apos;s container model — every
          app component runs in ephemeral dynos.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For dyno type questions: web dynos respond to HTTP requests — they are the only dyno type that receives web traffic. Worker dynos run background jobs (processing a queue, sending emails). One-off dynos run a single command and exit (database migration, admin task). When a scenario says &apos;run a database migration during deployment&apos;, use a one-off dyno (heroku run) — not a web dyno or worker dyno.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For Heroku Connect questions: Heroku Connect sync direction options are: (1) Salesforce to Heroku only (read-only mirror), (2) Heroku to Salesforce only (Heroku app writes to Salesforce), (3) Bidirectional (both can update, conflicts resolved by timestamp). When a scenario says &apos;a Heroku app needs to update customer records in Salesforce in real time&apos;, configure a bidirectional or Heroku-to-Salesforce sync — not a read-only connection.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For scaling questions: horizontal scaling (adding more web dynos) handles more concurrent users. Vertical scaling (using a larger dyno type) handles more memory-intensive workloads. Autoscaling automatically adds web dynos when response time increases above a threshold. When a scenario says &apos;the app slows down during peak traffic hours due to memory exhaustion&apos;, vertical scaling (larger dyno) is more appropriate than horizontal scaling (more small dynos).</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">AP Exam Benchmark</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          Pass 3 timed 40-question mocks before booking (Pass/Fail scoring)
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Heroku Developer AP requires hands-on Heroku experience — deploy a real application,
          configure Heroku Connect to sync Salesforce data, and experiment with dyno scaling
          before booking. A free Heroku account provides sufficient access to practice all
          core exam concepts. The Heroku Dev Center is the primary reference documentation.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most Heroku Developer Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Ephemeral Filesystem — Files Written to Dyno Are Lost on Restart</p>
            <p className="text-sm text-gray-700">Heroku dynos have an ephemeral filesystem: any file written during a dyno session is lost when the dyno restarts (which happens at least daily). Candidates design apps that write user uploads or generated files to the local filesystem — the exam expects external storage (AWS S3, Heroku Postgres) for persistent files.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Config Vars vs .env — Environment Variables Are Not in Code</p>
            <p className="text-sm text-gray-700">Config Vars are Heroku&apos;s secure environment variable store — set via the dashboard or CLI and injected at runtime. They should never be hardcoded in application code or checked into version control. Candidates put API keys in .env files and push them to Git — the exam expects Config Vars for all secrets and environment-specific settings.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Release Phase — Run Migrations Before New Code Goes Live</p>
            <p className="text-sm text-gray-700">The Release Phase is a Heroku feature that runs a command (e.g., a database migration script) after a new slug is built but before it is deployed to dynos. If the release phase command fails, the deployment is rolled back automatically. Candidates run migrations manually after deployment — the exam expects Release Phase configuration for zero-downtime database migrations.</p>
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
          <Link href="/pd1-exam-tips-2026" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">PD1 Exam Tips</span>
          </Link>
          <Link href="/heroku-architect-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Heroku Architect Exam Tips</span>
          </Link>
          <Link href="/integration-architect-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Integration Architect Exam Tips</span>
          </Link>
          <Link href="/developer-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Developer Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Heroku Developer AP Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/heroku-developer-ap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Heroku Developer AP Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/heroku-architect-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Heroku Architect Tips
          </Link>
          <Link href="/developer-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Developer Certification Path
          </Link>
        </div>
      </section>
    </div>
  )
}
