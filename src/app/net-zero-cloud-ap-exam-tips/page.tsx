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
const slug = 'net-zero-cloud-ap'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Net Zero Cloud Accredited Professional exam tips for ${RELEASE_CURRENT}: carbon accounting, emissions tracking, sustainability reporting.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/net-zero-cloud-ap-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/net-zero-cloud-ap-exam-tips`,
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
  { name: 'Net Zero Cloud AP Exam Tips', url: '/net-zero-cloud-ap-exam-tips' },
]

const faqItems = [
  {
    question: 'How hard is the Net Zero Cloud ap exam?',
    answer: 'The Net Zero Cloud ap is a Pass/Fail accredited professional exam (40 questions, 60 minutes, $150) designed for practitioners with hands-on implementation experience. It is considered moderately challenging for those who have configured Net Zero Cloud ap on real customer projects. Candidates without hands-on experience often find the specialised data model and feature configuration scenarios harder than expected. Most experienced practitioners pass with 3–4 weeks of focused review using the official Salesforce Trailmix for this accreditation.',
  },
  {
    question: 'What are Scope 1, 2, and 3 emissions and why does the exam test them?',
    answer: 'Scope 1 emissions are direct emissions from owned or controlled sources (company vehicles, on-site combustion). Scope 2 are indirect emissions from purchased energy (electricity, heat). Scope 3 are all other indirect emissions in the value chain (supplier emissions, business travel, product end-of-life). Net Zero Cloud tracks all three scopes. The exam tests how to configure emission factors and data sources for each scope type.',
  },
  {
    question: 'What are the highest-weight Net Zero Cloud AP exam sections?',
    answer: 'Carbon Accounting and Emissions Data (30%) and Sustainability Reporting (25%) together account for 55% of the exam. Setting up emission factors, configuring data ingestion for energy and activity data, calculating carbon footprints, and generating reports compliant with GHG Protocol or TCFD frameworks are the most tested areas.',
  },
  {
    question: 'What sustainability reporting standards does Net Zero Cloud support?',
    answer: 'Net Zero Cloud supports major sustainability reporting frameworks: GHG Protocol (the global standard for greenhouse gas accounting), CDP (Carbon Disclosure Project), TCFD (Task Force on Climate-related Financial Disclosures), and SEC climate disclosure requirements. The exam tests which reporting standard applies to which compliance scenario and how Net Zero Cloud&apos;s reports map to each framework.',
  },
  {
    question: 'What concepts do most Net Zero Cloud candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the Net Zero Cloud exam are: (1) Scope 1 vs Scope 2 vs Scope 3 Emissions — Different Tracking Responsibilities; (2) Carbon Credits vs Carbon Offsets — Purchased vs Generated; (3) Emission Factors — Why Records Don\'t Match Industry Benchmarks. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('net-zero-cloud-ap-exam-tips'),
]

export default function NetZeroCloudApExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/net-zero-cloud-ap-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />
      <CredentialSchema
        certSlug="net-zero-cloud-ap"
        certName="Net Zero Cloud AP"
        description={pageDescription}
        pageUrl="/net-zero-cloud-ap-exam-tips"
      />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-dark mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Net Zero Cloud AP Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Net Zero Cloud AP exam validates your ability to implement Salesforce Net Zero Cloud
          for corporate sustainability programmes. These tips focus on carbon accounting, Scope emissions
          tracking, and sustainability reporting that define this accreditation.
        </p>
      </header>

      <ContentPageAuthor />

      <ExamTipsCertLink certSlug={slug} />


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Net Zero Cloud AP Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Carbon accounting and emissions data</strong> — Configuring emission factors for electricity, fuel, and transportation; setting up data ingestion from utility bills, ERP systems, and IoT sensors; calculating Scope 1 (direct), Scope 2 (energy), and Scope 3 (value chain) emissions; and the GHG Protocol methodology for carbon accounting.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Sustainability target setting and tracking</strong> — Setting science-based reduction targets (SBTi alignment), tracking progress against targets over time, managing carbon offset purchases and retirement of carbon credits, and using Net Zero Cloud&apos;s dashboards to monitor sustainability performance across business units and geographies.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>ESG reporting and disclosure</strong> — Generating reports for CDP, TCFD, GHG Protocol, and SEC climate disclosure requirements. Configuring audit trails for data lineage and assurance. Managing supplier sustainability data collection via supplier scorecards. Understanding the difference between mandatory and voluntary reporting frameworks.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Carbon Accounting and Emissions Data</span>
            <span className="font-bold text-salesforce-blue ml-4">30%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Sustainability Reporting and Disclosure</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Target Setting and Progress Tracking</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Data Ingestion and Integration</span>
            <span className="font-bold text-salesforce-blue ml-4">15%</span>
          </div>
          <p className="text-xs text-gray-600 pt-1">AP format: 40 questions, 60 minutes, Pass/Fail, $150. Knowing Scope 1/2/3 definitions and GHG Protocol methodology is the foundation for all carbon accounting questions.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Net Zero Cloud AP Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a corporate sustainability scenario and ask which Net Zero Cloud feature,
          configuration, or reporting framework applies. Sustainability industry knowledge is as
          important as product knowledge for this exam.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For Scope classification questions: Scope 1 = combustion of fuel you own or control (your company&apos;s fleet vehicles, natural gas in your building). Scope 2 = electricity you buy (market-based or location-based method). Scope 3 = everything else in your value chain (employee commuting, business air travel, supplier manufacturing, product end-of-life disposal). When a question describes a scenario, identify the emission source and classify which scope it belongs to before answering.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For reporting framework questions: GHG Protocol = the universal carbon accounting standard (how to calculate emissions). CDP = a disclosure questionnaire submitted to investors and customers. TCFD = framework for disclosing climate-related financial risks and opportunities. SEC climate rules = mandatory disclosure for public US companies. When a scenario says &apos;investors are asking for climate risk disclosure&apos;, the answer involves TCFD. When a scenario says &apos;calculate total carbon footprint&apos;, GHG Protocol methodology is the basis.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For emission factor questions: emission factors convert activity data (kWh of electricity, litres of fuel) into CO2e (carbon dioxide equivalent). Net Zero Cloud uses configurable emission factors from EPA, IPCC, or custom sources. When a question asks &apos;how does Net Zero Cloud calculate emissions from electricity use&apos;, the answer is: multiply kWh consumed by the emission factor for that energy source in that region.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">AP Exam Benchmark</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          Pass 3 timed 40-question mocks before booking (Pass/Fail scoring)
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Net Zero Cloud AP requires both Salesforce product knowledge and sustainability domain knowledge.
          Study the GHG Protocol Corporate Standard (freely available online) alongside Net Zero Cloud
          Trailhead content. Candidates with experience in corporate sustainability, ESG reporting,
          or environmental consulting have an advantage on the domain knowledge questions.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most Net Zero Cloud Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Scope 1 vs Scope 2 vs Scope 3 Emissions — Different Tracking Responsibilities</p>
            <p className="text-sm text-gray-700">Scope 1: direct emissions from owned/controlled sources (company vehicles, on-site combustion). Scope 2: indirect emissions from purchased electricity, heat, or steam. Scope 3: all other indirect emissions in the value chain (business travel, supply chain, customer product use). Candidates use a single Emission record for all scopes — the exam expects Scope-specific record types and understanding that Scope 3 data often comes from external suppliers via data ingestion.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Carbon Credits vs Carbon Offsets — Purchased vs Generated</p>
            <p className="text-sm text-gray-700">Carbon Credits are purchased instruments that represent the right to emit one tonne of CO2. Carbon Offsets are projects (reforestation, renewable energy) that reduce or remove emissions, generating credits. In Net Zero Cloud, purchased offsets are tracked as Sustainability Adjustments. Candidates conflate these — the exam distinguishes between emissions reduction (operational improvements) and offset purchases (compensating for remaining emissions).</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Emission Factors — Why Records Don&apos;t Match Industry Benchmarks</p>
            <p className="text-sm text-gray-700">Net Zero Cloud calculates emissions by multiplying activity data (litres of fuel, kWh of electricity) by Emission Factors (kg CO2e per unit). Emission Factor libraries are sourced from regulatory bodies (EPA, IPCC) and vary by region and time period. Candidates assume a single global emission factor for electricity — the exam expects region-specific grid emission factors (European electricity is cleaner than coal-heavy grids).</p>
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
          <Link href="/energy-utilities-ap-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Energy Utilities AP Exam Tips</span>
          </Link>
          <Link href="/adm-201-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">ADM-201 Exam Tips</span>
          </Link>
          <Link href="/service-cloud-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Service Cloud Consultant Exam Tips</span>
          </Link>
          <Link href="/certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Net Zero Cloud AP Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/net-zero-cloud-ap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Net Zero Cloud AP Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/energy-utilities-ap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Energy &amp; Utilities AP Questions
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