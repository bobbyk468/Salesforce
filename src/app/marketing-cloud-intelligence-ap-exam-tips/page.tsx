import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Marketing Cloud Intelligence AP Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Marketing Cloud Intelligence (Datorama) AP exam tips for ${RELEASE_CURRENT}: data streams, harmonisation, dashboards, KPIs.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {  // Canonical to cert page — prevents GSC "chose different canonical"
  canonical: `${siteUrl}/certifications/marketing-cloud-intelligence-ap`,
  },
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
  keywords:
    `Marketing Cloud Intelligence AP exam tips ${RELEASE_CURRENT}, Datorama certification, how to pass MCI AP exam, marketing analytics Salesforce`,
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
    answer: 'TotalConnect is MCI&apos;s data integration layer that connects to hundreds of marketing platforms and ad channels. It has native connectors (Google Analytics, Facebook Ads, Salesforce CRM, Marketing Cloud), custom API connectors, and file upload connectors (CSV, FTP). The exam tests how to configure data stream connections, set up scheduling for automated data pulls, and troubleshoot connection failures.',
  },
  {
    question: 'What is data harmonisation in Marketing Cloud Intelligence?',
    answer: 'Data harmonisation maps incoming data fields from different sources to a unified MCI data model. For example, Facebook calls it "Impressions" and Google calls it "Impr." — harmonisation maps both to a single "Impressions" metric in MCI. The exam tests how to configure field mappings, create custom dimensions and metrics, set up cross-channel calculated metrics, and handle data conflicts when sources use different definitions.',
  },
]

export default function MarketingCloudIntelligenceApExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/marketing-cloud-intelligence-ap-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
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

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Exam At a Glance</p>
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What MCI AP Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Data streams and connections</strong> — Configuring TotalConnect data streams from marketing platforms (Google Ads, Facebook/Meta Ads, SFMC, Salesforce CRM, LinkedIn), setting up API and file-based connectors, scheduling automated data pulls, validating data stream health, and troubleshooting failed connections and missing data.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Data harmonisation and modelling</strong> — Mapping source fields to MCI dimensions and metrics, creating custom dimensions (campaign taxonomy fields), calculated metrics (ROAS = Revenue / Ad Spend), cross-channel currency normalisation, and the MCI data model (Workspaces, Data Streams, Dimensions, Metrics, Custom KPIs).</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Dashboard design and KPIs</strong> — Building executive marketing dashboards with widgets (bar charts, scorecards, trend lines), configuring custom KPI alerts and goals, using Einstein Insights for AI-powered anomaly detection and recommendations, sharing dashboards via links and scheduled email reports, and managing user access and workspace permissions.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
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
          <p className="text-xs text-gray-500 pt-1">AP format: 40 questions, 60 minutes, Pass/Fail, $150. Data connections + harmonisation = 55% — getting clean, unified data into MCI is the core implementation challenge.</p>
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
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For data stream questions: when a data stream shows missing data, check: (1) the connection credentials are valid, (2) the API permissions include the required data, (3) the date range of the data pull covers the expected period, (4) the field mappings are correctly configured. When a stream shows &apos;No Data&apos; after a connection change, the most common cause is a permission scope issue on the connected account credentials.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For harmonisation questions: cross-channel metrics require mapping each source&apos;s field name to one MCI metric. If Facebook uses &apos;Link Clicks&apos; and Google uses &apos;Clicks&apos; for the same concept, map both to a single &apos;Clicks&apos; metric in MCI. Calculated metrics combine metrics with formulas: CTR = Clicks / Impressions × 100. ROAS = Revenue / Cost. When a scenario says &apos;create a single clicks metric across all ad platforms&apos;, configure a harmonised metric mapping — not separate widgets for each platform.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For KPI alert questions: Einstein Insights automatically detects anomalies in your metrics (a sudden drop in CTR, an unusual spike in cost). KPI Goals set target values for tracking progress. When a scenario says &apos;alert the marketing team when ROAS drops below 3x&apos;, configure a KPI Goal with an alert threshold — not a scheduled report or custom Flow.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">AP Exam Benchmark</h2>
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
          <Link href="/crm-analytics-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">CRM Analytics Exam Tips</span>
          </Link>
          <Link href="/data-cloud-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
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
      </section>
    </div>
  )
}
