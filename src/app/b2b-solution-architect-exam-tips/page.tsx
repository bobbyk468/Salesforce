import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `B2B Solution Architect Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce B2B Solution Architect exam tips for ${RELEASE_CURRENT}: multi-cloud B2B architecture, Sales Cloud, CPQ, Marketing Cloud B2B.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {  // Canonical to cert page — prevents GSC "chose different canonical"
  canonical: `${siteUrl}/certifications/b2b-solution-architect`,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/b2b-solution-architect-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `B2B Solution Architect exam tips ${RELEASE_CURRENT}, how to pass B2B Solution Architect, Salesforce multi-cloud B2B architecture, B2B architect exam study guide`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'B2B Solution Architect Exam Tips', url: '/b2b-solution-architect-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Salesforce B2B Solution Architect exam format?',
    answer: 'The Salesforce B2B Solution Architect exam has 60 multiple-choice questions, a 105-minute time limit, a 63% passing score, and a $200 fee ($100 retake). It tests the ability to design multi-cloud B2B solutions spanning Sales Cloud, Service Cloud, CPQ, Revenue Cloud, Pardot/Account Engagement, and Experience Cloud.',
  },
  {
    question: 'What are the highest-weight B2B Solution Architect exam sections?',
    answer: 'Architect Multi-Cloud Solutions (35%) and Understand Customer Discovery (20%) together account for 55% of the exam. Designing cross-cloud data flows, integrating CPQ with billing systems, connecting Pardot to Sales Cloud for lead management, and conducting architecture discovery are the most heavily tested areas.',
  },
  {
    question: 'What multi-cloud B2B scenarios does this exam test?',
    answer: 'The exam tests real B2B sales scenarios involving multiple Salesforce products: lead-to-cash (Pardot → Sales Cloud → CPQ → Revenue Cloud), account-based marketing (Sales Cloud + Pardot), customer portal (Experience Cloud + Sales/Service Cloud), and partner relationship management (Sales Cloud PRM). You must know how data flows between these clouds.',
  },
  {
    question: 'What prerequisites are needed for B2B Solution Architect?',
    answer: 'Salesforce recommends Sales Cloud Consultant + CPQ Specialist + Pardot Consultant (or equivalent experience) as the foundation. This is an expert-level exam — most candidates have 5+ years of Salesforce implementation experience across multiple clouds. Architect-level thinking (trade-offs, cross-cloud integration, long-term maintainability) is required.',
  },
]

export default function B2BSolutionArchitectExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/b2b-solution-architect-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce B2B Solution Architect Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The B2B Solution Architect exam tests your ability to design multi-cloud solutions for B2B
          enterprises. These tips focus on cross-cloud integration patterns, lead-to-cash architecture,
          and the discovery-to-design process that defines this advanced certification.
        </p>
      </header>

      <ContentPageAuthor />

      <section className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-3">Exam At a Glance</p>
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What B2B Solution Architect Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Multi-cloud B2B architecture</strong> — Designing solutions that span Sales Cloud, CPQ, Revenue Cloud, Pardot/Account Engagement, Service Cloud, and Experience Cloud. Understanding how data flows across clouds, where master data lives, and how to avoid data silos.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Lead-to-cash process design</strong> — Architecting the full B2B sales cycle: Pardot for marketing automation → Sales Cloud for pipeline management → CPQ for quoting → Revenue Cloud for billing → Service Cloud for post-sale support. Integration points and data hand-offs between each stage.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Discovery and recommendation</strong> — Conducting architecture discovery with stakeholders, identifying constraints and non-functional requirements (NFRs), evaluating trade-offs between solution approaches, and recommending the right architecture for a given B2B business context.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Architect Multi-Cloud Solutions</span>
            <span className="font-bold text-salesforce-blue ml-4">35%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Understand Customer Discovery</span>
            <span className="font-bold text-salesforce-blue ml-4">20%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Recommend Solution and Establish Governance</span>
            <span className="font-bold text-salesforce-blue ml-4">18%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Understand B2B Business Processes</span>
            <span className="font-bold text-salesforce-blue ml-4">17%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">Multi-Cloud Architecture = 35% — the single largest section. Know every cloud&apos;s role in the B2B sales lifecycle.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach B2B Solution Architect Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a B2B enterprise scenario and ask which multi-cloud architecture, integration
          approach, or design decision is most appropriate. Think at the systems level — not just
          individual features — and consider the long-term implications of each choice.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For cross-cloud data questions: Account and Contact are master data in Salesforce CRM — they should not be duplicated. Pardot syncs prospects to Leads/Contacts in Sales Cloud. CPQ reads Account and Contact from Sales Cloud — it does not maintain its own. Revenue Cloud extends Order and Contract objects in Sales Cloud. Know where each cloud&apos;s data lives.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For lead management questions: Pardot prospects become Salesforce Leads when they meet a score/grade threshold. Leads convert to Contacts when sales qualifies them. The Pardot-Sales Cloud sync must be carefully designed — connected campaigns, marketing attribution, and lead scoring alignment are common exam topics.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For architecture trade-off questions: architect-level questions have no single correct technical answer — they have a most appropriate answer given the context. Evaluate options against: simplicity (fewest moving parts), maintainability (who owns it long-term), performance (NFRs), and cost (licence implications of adding another cloud).</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          B2B Solution Architect is an expert-level credential. Most candidates have 5+ years of Salesforce
          implementation experience and hold multiple consultant certifications before attempting this exam.
          Deep hands-on experience with at least 3 of the B2B clouds (Sales Cloud, CPQ, Pardot, Revenue Cloud)
          is expected before booking.
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
          <Link href="/b2b-commerce-admin-ap-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">B2B Commerce Admin AP Exam Tips</span>
          </Link>
          <Link href="/system-architect-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">System Architect Exam Tips</span>
          </Link>
          <Link href="/architect-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Architect Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start B2B Solution Architect Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/b2b-solution-architect" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            B2B Solution Architect Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/cpq-administrator-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            CPQ Specialist Tips
          </Link>
          <Link href="/architect-certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Architect Certification Path
          </Link>
        </div>
      </section>
    </div>
  )
}
