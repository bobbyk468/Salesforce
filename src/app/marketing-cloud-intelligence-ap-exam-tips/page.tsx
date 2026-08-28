import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import ExamTipsCertLink from '@/components/ExamTipsCertLink'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'
import ApOccupationSchema from '@/components/ApOccupationSchema'
import CredentialSchema from '@/components/CredentialSchema'



const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'marketing-cloud-intelligence-ap'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Marketing Cloud Intelligence (Datorama) AP exam tips for ${RELEASE_CURRENT}: data streams, harmonisation, dashboards, KPIs.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/marketing-cloud-intelligence-ap-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/marketing-cloud-intelligence-ap-exam-tips`,
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
  { name: 'MC Intelligence AP Exam Tips', url: '/marketing-cloud-intelligence-ap-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Marketing Cloud Intelligence Accredited Professional exam format?',
    answer: 'The Marketing Cloud Intelligence AP (formerly Datorama) exam has 40 multiple-choice questions, a 60-minute time limit, a Pass/Fail result, and a $150 fee. It validates practitioner-level knowledge of Salesforce Marketing Cloud Intelligence: connecting marketing data streams, data harmonisation and mapping, building custom KPIs, and creating executive marketing dashboards.',
  },
  {
    question: 'What are the highest-weight MCI AP exam sections?',
    answer: 'Data Streams and Connections (30%) and Data Harmonisation and Modelling (25%) together account for 55% of the exam. Connecting data sources (Google Ads, Facebook, SFMC, Salesforce CRM) via TotalConnect, mapping fields to the MCI data model, creating custom dimensions and metrics, and building the unified marketing data model are the most tested areas.',
  },
  {
    question: 'What is TotalConnect and why is it important for the MCI AP exam?',
    answer: 'TotalConnect is MCI’s data integration layer that connects to hundreds of marketing platforms and ad channels. It has native connectors (Google Analytics, Facebook Ads, Salesforce CRM, Marketing Cloud), custom API connectors, and file upload connectors (CSV, FTP). The exam tests how to configure data stream connections, set up scheduling for automated data pulls, and troubleshoot connection failures.',
  },
  {
    question: 'What is data harmonisation in Marketing Cloud Intelligence?',
    answer: 'Data harmonisation maps incoming data fields from different sources to a unified MCI data model. For example, Facebook calls it "Impressions" and Google calls it "Impr." — harmonisation maps both to a single "Impressions" metric in MCI. The exam tests how to configure field mappings, create custom dimensions and metrics, set up cross-channel calculated metrics, and handle data conflicts when sources use different definitions.',
  },
  {
    question: 'What concepts do most Marketing Cloud Intelligence candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the Marketing Cloud Intelligence exam are: (1) Streams vs Workspaces — Data Ingestion vs Analysis; (2) Harmonised vs Raw Data — Why Metrics Don\'t Match Source Platforms; (3) Calculated Metrics vs Standard Metrics — Custom Formulas for Cross-Channel KPIs. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('marketing-cloud-intelligence-ap-exam-tips'),
]

export default function MarketingCloudIntelligenceApExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/marketing-cloud-intelligence-ap-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />
      <CredentialSchema
        certSlug="marketing-cloud-intelligence-ap"
        certName="Marketing Cloud Intelligence AP"
        description={pageDescription}
        pageUrl="/marketing-cloud-intelligence-ap-exam-tips"
      />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Marketing Cloud Intelligence AP Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The MCI AP exam validates your ability to implement Salesforce Marketing Cloud Intelligence
          for unified marketing analytics. These tips focus on data stream connections, harmonisation,
          and dashboard building that define this accreditation.
        </p>
      </header>

      <ContentPageAuthor />

      <ExamTipsCertLink certSlug={slug} />


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Fast Facts: MCI AP Focus Areas</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Data streams and connections</strong> — Configuring TotalConnect data streams from marketing platforms (Google Ads, Facebook/Meta Ads, SFMC, Salesforce CRM, LinkedIn), setting up API and file-based connectors, scheduling automated data pulls, validating data stream health, and troubleshooting failed connections and missing data.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Data harmonisation and modelling</strong> — Mapping source fields to MCI dimensions and metrics, creating custom dimensions (campaign taxonomy fields), calculated metrics (ROAS = Revenue / Ad Spend), cross-channel currency normalisation, and the MCI data model (Workspaces, Data Streams, Dimensions, Metrics, Custom KPIs).</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Dashboard design and KPIs</strong> — Building executive marketing dashboards with widgets (bar charts, scorecards, trend lines), configuring custom KPI alerts and goals, using Einstein Insights for AI-powered anomaly detection and recommendations, sharing dashboards via links and scheduled email reports, and managing user access and workspace permissions.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Section Weightings to Prioritise</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Data Streams and Connections</span>
            <span className="font-bold text-salesforce-blue ml-4">30%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Data Harmonisation and Modelling</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Dashboard Design and KPIs</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Einstein Insights and Automation</span>
            <span className="font-bold text-salesforce-blue ml-4">15%</span>
          </div>
          <p className="text-xs text-gray-600 pt-1">AP format: 40 questions, 60 minutes, Pass/Fail, $150. Data connections + harmonisation = 55% — getting clean, unified data into MCI is the core implementation challenge.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach MCI AP Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a marketing analytics scenario and ask which MCI feature, configuration,
          or approach addresses it. Marketing analytics domain knowledge (how ad platforms work,
          what KPIs matter) helps interpret scenarios accurately.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For data stream questions: when a data stream shows missing data, check: (1) the connection credentials are valid, (2) the API permissions include the required data, (3) the date range of the data pull covers the expected period, (4) the field mappings are correctly configured. When a stream shows ’No Data’ after a connection change, the most common cause is a permission scope issue on the connected account credentials.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For harmonisation questions: cross-channel metrics require mapping each source’s field name to one MCI metric. If Facebook uses ’Link Clicks’ and Google uses ’Clicks’ for the same concept, map both to a single ’Clicks’ metric in MCI. Calculated metrics combine metrics with formulas: CTR = Clicks / Impressions × 100. ROAS = Revenue / Cost. When a scenario says ’create a single clicks metric across all ad platforms’, configure a harmonised metric mapping — not separate widgets for each platform.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For KPI alert questions: Einstein Insights automatically detects anomalies in your metrics (a sudden drop in CTR, an unusual spike in cost). KPI Goals set target values for tracking progress. When a scenario says ’alert the marketing team when ROAS drops below 3x’, configure a KPI Goal with an alert threshold — not a scheduled report or custom Flow.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Before You Book the AP Exam</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          Pass 3 timed 40-question mocks before booking (Pass/Fail scoring)
        </p>
        <p className="text-sm text-gray-700 mt-3">
          MCI AP is for marketing analytics specialists and BI professionals implementing unified
          marketing measurement. Hands-on experience connecting real ad platforms and building
          dashboards is essential. Request a Marketing Cloud Intelligence trial through your
          Salesforce partner relationship for sandbox practice.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most Marketing Cloud Intelligence Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Streams vs Workspaces — Data Ingestion vs Analysis</p>
            <p className="text-sm text-gray-700">Streams are the data connectors that ingest raw marketing performance data from ad platforms, email tools, and CRMs into Marketing Cloud Intelligence. Workspaces are the analysis environments where data is combined, visualised, and reported. Candidates try to configure analytics in the Stream setup — Streams are only for ingestion; all analysis happens in Workspaces.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Harmonised vs Raw Data — Why Metrics Don’t Match Source Platforms</p>
            <p className="text-sm text-gray-700">Marketing Cloud Intelligence harmonises metrics from disparate platforms into a common schema (e.g., mapping "clicks" from Google Ads, Meta Ads, and Marketing Cloud into one unified "Clicks" metric). Raw data from each platform may use different field names and definitions. Candidates expect raw platform numbers to appear unchanged — the exam expects understanding of the harmonisation layer and why numbers may differ slightly from native platform reports.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Calculated Metrics vs Standard Metrics — Custom Formulas for Cross-Channel KPIs</p>
            <p className="text-sm text-gray-700">Standard metrics are ingested directly from source platforms (impressions, clicks, cost). Calculated metrics are custom formulas built in Intelligence (CPC = Cost / Clicks, ROAS = Revenue / Cost). Candidates try to pull ROAS and blended CPM directly from data streams — these cross-platform KPIs require Calculated Metric configuration in the workspace.</p>
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
          <Link href="/crm-analytics-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">CRM Analytics Exam Tips</span>
          </Link>
          <Link href="/data-360-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Data Cloud Consultant Exam Tips</span>
          </Link>
          <Link href="/marketing-cloud-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Marketing Cloud Consultant Exam Tips</span>
          </Link>
          <Link href="/consultant-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Consultant Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start MCI AP Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/marketing-cloud-intelligence-ap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            MCI AP Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/tableau-data-analyst-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Tableau Data Analyst Tips
          </Link>
          <Link href="/certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            All Certification Paths
          </Link>
        </div>
        <p className="text-xs text-gray-600 mt-4">
          After this exam, consider <Link href="/certifications/sales-cloud" className="text-salesforce-blue underline">Sales Cloud Consultant</Link> or <Link href="/certifications/service-cloud" className="text-salesforce-blue underline">Service Cloud Consultant</Link> next.
        </p>
      </section>
    </div>
  )
}