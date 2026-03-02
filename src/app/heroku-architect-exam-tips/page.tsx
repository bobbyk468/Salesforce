import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Heroku Architect Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Heroku Architect exam tips for ${RELEASE_CURRENT}: Heroku architecture, Salesforce integration, security, scalability.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {  // Canonical to cert page — prevents GSC "chose different canonical"
  canonical: `${siteUrl}/certifications/heroku-architect`,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/heroku-architect-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Heroku Architect exam tips ${RELEASE_CURRENT}, how to pass Heroku Architect, Salesforce Heroku certification, Heroku architecture study guide`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Heroku Architect Exam Tips', url: '/heroku-architect-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Salesforce Heroku Architect exam format?',
    answer: 'The Salesforce Heroku Architect exam has 60 multiple-choice questions, a 105-minute time limit, a 67% passing score, and a $200 fee ($100 retake). It tests the ability to architect Heroku applications integrated with Salesforce: platform services, security, performance, scalability, and the Salesforce-Heroku integration patterns.',
  },
  {
    question: 'What are the highest-weight Heroku Architect exam sections?',
    answer: 'Heroku Architecture and Design (30%) and Salesforce-Heroku Integration (25%) together account for 55% of the exam. Understanding Heroku dynos, add-ons, Heroku Postgres, Heroku Connect for data synchronisation, and when to use Heroku vs. Salesforce Platform for different application requirements are the most heavily tested areas.',
  },
  {
    question: 'What is Heroku Connect and why is it important for this exam?',
    answer: 'Heroku Connect is a managed data synchronisation service that syncs Salesforce data to a Heroku Postgres database in near real-time. It is a key integration pattern for Heroku-Salesforce architectures. The exam tests when to use Heroku Connect vs. direct API integration, how to configure sync mappings, and the limitations of Heroku Connect (API limits, sync latency, supported object types).',
  },
  {
    question: 'When should an architect choose Heroku over Salesforce Platform?',
    answer: 'Heroku is preferred when you need: open-source language flexibility (Node.js, Python, Ruby, Java), high-volume public-facing web applications, complex compute workloads that exceed Salesforce governor limits, or when mixing Salesforce and non-Salesforce data sources. Salesforce Platform is preferred for CRM-centric applications, declarative automation, and when staying within the Salesforce ecosystem is a priority.',
  },
]

export default function HerokuArchitectExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/heroku-architect-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Heroku Architect Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Heroku Architect exam tests your ability to design Heroku applications and their integration
          with Salesforce. These tips focus on Heroku platform services, Heroku Connect, and the
          architectural decision-making that defines this exam.
        </p>
      </header>

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Exam At a Glance</p>
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Heroku Architect Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Heroku platform architecture</strong> — Dyno types (web, worker, one-off), process model, add-ons ecosystem (Heroku Postgres, Redis, Kafka), buildpacks, Pipelines for CI/CD, review apps, and Private Spaces for network-isolated deployments.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Salesforce integration patterns</strong> — Heroku Connect for bidirectional data sync with Salesforce, direct Salesforce REST/SOAP API calls from Heroku apps, Platform Events for event-driven integration, and External Objects via Salesforce Connect pointing to Heroku Postgres.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Security and scalability</strong> — Heroku Private Spaces for compliance (PCI, HIPAA), Shield Postgres for encryption at rest, configuring SSL/TLS for Heroku apps, horizontal scaling (dyno formation), and database connection pooling for high-throughput applications.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Heroku Architecture and Design</span>
            <span className="font-bold text-salesforce-blue ml-4">30%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Salesforce-Heroku Integration</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Security and Compliance</span>
            <span className="font-bold text-salesforce-blue ml-4">22%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Performance and Scalability</span>
            <span className="font-bold text-salesforce-blue ml-4">15%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">Architecture + Integration + Security = 77%. The Heroku Connect data sync pattern and Private Spaces security model are the most exam-critical topics.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Heroku Architect Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe an application or integration requirement and ask which Heroku architecture
          decision, integration pattern, or platform feature is appropriate. Always consider the
          requirement dimensions: real-time vs. batch, compliance requirements, and data volume.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For integration pattern questions: Heroku Connect = near-real-time bidirectional sync of Salesforce data to Postgres (best for data that Heroku apps read and write back to Salesforce). Direct API = synchronous Salesforce API calls for real-time reads/writes. Platform Events = event-driven async integration. External Objects = read Heroku Postgres data from Salesforce without syncing it.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For compliance questions: Heroku Private Spaces provide network isolation (no public internet exposure), a dedicated runtime environment, and compliance features for PCI DSS and HIPAA. Heroku Shield adds additional encryption and logging. When a scenario mentions regulated data (payment cards, health data), Private Spaces + Shield is the answer.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For scaling questions: horizontal scaling = add more dynos (handles more concurrent requests). Vertical scaling = increase dyno size (handles larger memory workloads). Worker dynos process background jobs — scale them separately from web dynos. Connection pooling (PgBouncer) is required when many dynos need database connections simultaneously.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Heroku Architect is a specialist certification primarily taken by Salesforce technical architects
          who need to design Heroku-based solutions. Real Heroku deployment experience — building and
          deploying an application, configuring Heroku Connect, and managing a Private Spaces environment —
          is strongly recommended before booking.
        </p>
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
          <Link href="/pd1-exam-tips-2026" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Heroku Architect Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/heroku-architect" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Heroku Architect Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/integration-architect-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Integration Architect Tips
          </Link>
          <Link href="/architect-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Architect Certification Path
          </Link>
        </div>
      </section>
    </div>
  )
}
