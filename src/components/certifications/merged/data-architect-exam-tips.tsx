/* Ported from /data-architect-exam-tips, merged into /certifications/data-architect in November 2026.
 * Content is the original page copy. Page chrome (metadata, JSON-LD, H1
 * header) was dropped because the hub page already provides it. */
import Link from '@/components/AppLink'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_YEAR } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import ExamTipsCertLink from '@/components/ExamTipsCertLink'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import StudyGuideCrossLink from '@/components/StudyGuideCrossLink'
import ExamPricingCard from '@/components/ExamPricingCard'
import LastUpdated from '@/components/LastUpdated'




const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'data-architect'

const metadataTitle = `Salesforce Data Architect Exam Tips and Study Plan (${RELEASE_YEAR})`
const pageTitle = `Salesforce Data Architect Exam Tips (${RELEASE_YEAR})`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(metadataTitle)}`
const pageDescription =
  'Review Salesforce Data Architect topics including data modeling, large data volumes, and master data management before the exam.'

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Data Architect', url: '/certifications/data-architect' },
  { name: 'Data Architect Exam Tips', url: '/data-architect-exam-tips' },
]

export const faqItems = [
  {
    question: 'What is the Salesforce Data Architect exam format?',
    answer: 'The Salesforce Certified Platform Data Architect exam has 60 scored multiple-choice questions plus up to five unscored questions, a 105-minute time limit, and a 58% passing score. The registration fee is US$400 and the retake fee is US$200, plus applicable taxes. Salesforce lists no prerequisite.',
  },
  {
    question: 'What are the highest-weight Salesforce Data Architect exam sections?',
    answer: 'Salesforce lists six weighted domains: Data Modeling/Database Design (25%), Master Data Management (5%), Salesforce Data Management (25%), Data Governance (10%), Large Data Volume Considerations (20%), and Data Migration (15%).',
  },
  {
    question: 'What prerequisites do I need for the Salesforce Data Architect exam?',
    answer: 'Salesforce lists no prerequisite. Its recommended certifications (not required) include Platform App Builder, Platform Developer, and Platform Developer II.',
  },
  {
    question: 'What is the hardest part of the Salesforce Data Architect exam?',
    answer: 'The official guide does not rank domains by difficulty. Consider reviewing the full set of objectives, including scalable data models, performance, archiving and purging, and virtualized data options.',
  },
  {
    question: 'What topics should I review for the Data Architect exam?',
    answer: 'Use the official exam outline to review all six domains. For large data volume topics, compare indexing, data-model design, performance, archiving, purging, and virtualized data options against the stated requirements.',
  },
  ...getConceptFaqs('data-architect-exam-tips'),
]

export default function DataArchitectExamTipsContent() {
  return (
    <div className="mt-12">





      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Fast Facts: Data Architect Focus Areas</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Data modelling decisions</strong>: Object relationships, field strategy, external IDs, data normalisation vs. denormalisation trade-offs at scale.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Large data volume (LDV) strategy</strong>: When and how to use skinny tables, custom indexes, query optimisation, and the impact of record volume on performance.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Master data management</strong>: Duplicate management, data governance frameworks, external system integration patterns, and data quality strategy.</li>
        </ul>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Data Architect Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Practice mapping a data challenge to the relevant published objective, then compare design options against
          the scenario's requirements and trade-offs.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For LDV questions: identify whether the bottleneck is SOQL performance, storage, or UI response time; each has a different solution (custom index, skinny table, or query optimisation).</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For data model questions: prefer normalised models in transactional systems; consider denormalisation only when query performance at millions of records is explicitly required.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For MDM questions: external IDs are the key tool for upsert operations and cross-system record matching. Know when to use a single external ID vs. multiple external IDs per object.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For migration planning: compare data quality at load time, large-volume migration performance, and export requirements before selecting tools and methods.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Know You’re Ready</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          The passing score is 58%. Use the published objectives to organize preparation, and practice explaining
          how your proposed design addresses the stated data requirements.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Large Data Volume Design Concepts</h2>
        <p className="text-sm text-gray-600 mb-5">Compare these platform capabilities against the query and data requirements in a design scenario.</p>
        <div className="space-y-5">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">1. Skinny Tables vs Custom Indexes: Different Performance Tools, Different Use Cases</h3>
            <p className="text-sm text-gray-700">Skinny tables can avoid joins for supported read-only operations and are maintained by Salesforce; contact Salesforce Support to request them. Custom indexes help the query optimizer when they suit the filter and data distribution. These are distinct options, not interchangeable fixes.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">2. External Objects vs Big Objects: Real-Time vs Archive</h3>
            <p className="text-sm text-gray-700">External Objects surface data held in an external system through Salesforce Connect. Big Objects support high-volume data storage and access patterns on the Salesforce platform. Select an approach based on data location, access needs, and the applicable platform capabilities.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">3. Data Masking vs Field Encryption vs Classic Encryption: Three Security Layers</h3>
            <p className="text-sm text-gray-700">Field-level encryption, Shield Platform Encryption, and sandbox data masking serve different protection goals. Compare them against the data sensitivity, access needs, environment, and compliance requirements; check current Salesforce documentation for supported fields and feature behavior.</p>
          </div>
        </div>
      </section>

<section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">FAQs From Candidates</h2>
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">Keep Studying</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/certifications/integration-architect" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Integration Architect Exam Tips</span>
          </Link>
          <Link href="/certifications/sharing-visibility-architect" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Sharing Visibility Architect Exam Tips</span>
          </Link>
          <Link href="/certifications/crm-analytics-einstein-discovery-consultant" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">CRM Analytics Exam Tips</span>
          </Link>
          <Link href="/architect-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Architect Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Data Architect Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="#practice-questions" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Data Architect Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/application-architect" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Application Architect Tips
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
