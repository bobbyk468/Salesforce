/* Ported from /data-360-consultant-exam-tips, merged into /certifications/data-360-consultant in November 2026.
 * Content is the original page copy. Page chrome (metadata, JSON-LD, H1
 * header) was dropped because the hub page already provides it. */
import Link from '@/components/AppLink'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import ExamTipsCertLink from '@/components/ExamTipsCertLink'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'
import StudyGuideCrossLink from '@/components/StudyGuideCrossLink'
import ExamPricingCard from '@/components/ExamPricingCard'
import LastUpdated from '@/components/LastUpdated'




const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'data-360-consultant'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  'Prepare for the Data 360 Consultant exam with data ingestion, identity resolution, segmentation, and activation topic review.'

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Data 360 Consultant', url: '/certifications/data-360-consultant' },
  { name: 'Data 360 Consultant Exam Tips', url: '/data-360-consultant-exam-tips' },
]

export const faqItems = [
  {
    question: 'What is the Salesforce Data 360 Consultant exam format?',
    answer: 'The Salesforce Data 360 Consultant exam has 60 multiple-choice questions, a 105-minute time limit, a 70% passing score, and a $200 fee ($100 retake). It tests implementation of Salesforce Data 360 (formerly Customer Data Platform / CDP): data ingestion, data model mapping, identity resolution, segmentation, and activation.',
  },
  {
    question: 'What are the highest-weight Data 360 Consultant exam sections?',
    answer: 'Data Activations and Utilization (20%), Data Source Connection and Ingestion (18%), and Data Enhancements, Sharing, and Analysis (18%) together account for 56% of the exam. Understanding how to ingest data from multiple sources, map it to the Data 360 data model, resolve customer identities across systems, and activate audiences to marketing channels are the core skills.',
  },
  {
    question: 'What is identity resolution in Data 360 and why is it tested heavily?',
    answer: 'Identity resolution is Data 360’s process of linking data from multiple sources to a single unified customer profile (Unified Individual). It uses match rules and reconciliation rules to merge duplicate records across data streams. Identity resolution quality directly affects segmentation accuracy, understanding how match rules work is one of the most tested topics.',
  },
  {
    question: 'What prerequisites help with the Data 360 Consultant exam?',
    answer: 'Salesforce Administrator (ADM-201) is the recommended foundation. Marketing Cloud or Salesforce CRM experience is beneficial as Data 360 connects to these systems. Understanding basic data concepts (data modelling, ETL, customer profiles) is important. The exam is evolving rapidly. Focus on the latest Trailhead Data 360 trails and the official exam guide.',
  },
  {
    question: 'What concepts do most Data 360 Consultant candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the Data 360 Consultant exam are: (1) Data Streams vs Data Model Objects vs Calculated Insights; (2) Identity Resolution: Matching Rules and Reconciliation Rules; (3) Segments vs Activation Targets vs Data Actions. Candidates are most confidently wrong on these. Learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('data-360-consultant-exam-tips'),
]

export default function Data360ConsultantExamTipsContent() {
  return (
    <div className="mt-12">





      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Data 360 Consultant Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Data ingestion and modelling</strong>: Connecting data sources (Marketing Cloud, CRM, web, mobile, third-party), configuring Data Stream ingestion, mapping source data to the Data 360 data model (Subject Areas, Data Model Objects), and data category types (profile, engagement, other).</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Identity resolution</strong>: Configuring match rules (exact, fuzzy), reconciliation rules (most recent, most frequent, source priority), understanding how Unified Individual profiles are built from multiple sources, and debugging identity resolution quality issues.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Segmentation and activation</strong>: Building segments using the Segment Builder (rules, filters, related objects), calculated insights for derived attributes, and activating segments to Marketing Cloud, Paid Media (Facebook, Google), and other activation targets. Refresh cadence and activation mapping.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Data Activations and Utilization</span>
            <span className="font-bold text-salesforce-blue ml-4">20%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Data Source Connection and Ingestion</span>
            <span className="font-bold text-salesforce-blue ml-4">18%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Data Enhancements, Sharing, and Analysis</span>
            <span className="font-bold text-salesforce-blue ml-4">18%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Harmonization and Unification</span>
            <span className="font-bold text-salesforce-blue ml-4">17%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Solution Positioning</span>
            <span className="font-bold text-salesforce-blue ml-4">14%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Data 360 Setup and Administration</span>
            <span className="font-bold text-salesforce-blue ml-4">13%</span>
          </div>
          <p className="text-xs text-gray-600 pt-1">Activations + Ingestion + Enhancements = 56%. The end-to-end data flow from source to activation is the exam backbone.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Data 360 Consultant Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a data integration or customer data challenge and ask which Data 360 feature
          or configuration approach addresses it. Trace the scenario through the ingestion → modelling →
          identity resolution → segmentation → activation pipeline to identify the right stage.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For data model questions: Data 360 has three data categories: Profile (who the customer is), Engagement (what they did), and Other (supporting data). Profile data maps to DMOs in the Individual subject area. Engagement data maps to DMOs in the Engagement subject area. Mapping source fields to the correct DMO and category is a core exam skill.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For identity resolution questions: match rules define how records from different sources are linked (email match, phone match, loyalty ID match). Reconciliation rules define which value wins when two sources disagree on a field value. When match rates are low, the answer is to add more match rules, not change reconciliation rules.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For activation questions: segments activate to activation targets. Marketing Cloud activation requires a data extension target mapping. Map each segment attribute to a data extension field. Paid media activation requires an identity attribute (email, phone) that the ad platform can match against. Know which identity types each activation target supports.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          80%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Data 360 is one of Salesforce’s fastest-evolving products. Focus on the current official exam
          guide and Trailhead Data 360 Consultant trail, content from 2024 or earlier may be outdated.
          Hands-on experience configuring Data 360 in a sandbox or free trial org is strongly recommended
          before booking.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most Data 360 Consultant Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics; they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">1. Data Streams vs Data Model Objects vs Calculated Insights</h3>
            <p className="text-sm text-gray-700">Data Streams are the ingestion pipelines that bring external data into Data 360 (from Salesforce, S3, MuleSoft, etc.). Data Model Objects (DMOs) are the unified data entities in the canonical data model (Individual, Unified Individual, Sales Order, etc.). Calculated Insights are derived metrics computed on top of DMOs (e.g., total purchase value per customer). Candidates mix these three layers, ingestion (Stream) vs canonical model (DMO) vs analytics (Insight).</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">2. Identity Resolution: Matching Rules and Reconciliation Rules</h3>
            <p className="text-sm text-gray-700">Matching Rules define how Data 360 identifies that two records from different sources refer to the same individual (e.g., match on email + phone). Reconciliation Rules define which source wins when the same field has conflicting values across matched records (e.g., Salesforce CRM field wins over Marketing Cloud field for first name). Candidates confuse what each rule type does, matching = who is the same person; reconciliation = which value is the truth.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">3. Segments vs Activation Targets vs Data Actions</h3>
            <p className="text-sm text-gray-700">Segments are audience groups built from Data 360 data using filter criteria. Activation Targets are the destinations where a segment is sent (e.g., Marketing Cloud, Advertising Studio). Data Actions trigger business events (e.g., create a Salesforce Case) based on segment membership changes. Candidates use &ldquo;activation&rdquo; when the correct answer is a &ldquo;data action&rdquo; (activations send to marketing channels; data actions trigger Salesforce-side events).</p>
          </div>
        </div>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Related Exam Tips</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/certifications/agentforce-specialist" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Agentforce Specialist Exam Tips</span>
          </Link>
          <Link href="/certifications/ai-associate" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">AI Associate Exam Tips</span>
          </Link>
          <Link href="/certifications/crm-analytics-einstein-discovery-consultant" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">CRM Analytics Exam Tips</span>
          </Link>
          <Link href="/data-cloud-vs-crm-analytics" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Data Cloud vs CRM Analytics</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Data 360 Consultant Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="#practice-questions" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Analytics Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/marketing-cloud-engagement-admin" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Marketing Cloud Questions
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