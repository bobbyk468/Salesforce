import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { getConceptFaqs } from '@/lib/exam-tips-concept-faqs'
import { buildExamTipsTitle } from '@/lib/seo-title-helpers'


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const slug = 'marketing-cloud-consultant'

const pageTitle = buildExamTipsTitle(slug)
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Marketing Cloud Consultant exam tips for ${RELEASE_CURRENT}: email strategy, automation, segmentation, analytics, and scenario approach to pass first attempt.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/marketing-cloud-consultant-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/marketing-cloud-consultant-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Marketing Cloud Consultant exam tips ${RELEASE_CURRENT}, how to pass Marketing Cloud Consultant, Salesforce Marketing Cloud certification study guide, Marketing Cloud Consultant first attempt`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Marketing Cloud Consultant Exam Tips', url: '/marketing-cloud-consultant-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Marketing Cloud Consultant exam format?',
    answer: 'The Salesforce Marketing Cloud Consultant exam has 60 multiple-choice questions, a 105-minute time limit, a 65% passing score, and a $200 fee. It tests applied knowledge of Marketing Cloud implementation and solution design, not just product features.',
  },
  {
    question: 'What are the highest-weight Marketing Cloud Consultant exam sections?',
    answer: 'Discovery and Architecture (28%) is the highest-weight section, followed by Account Configuration (22%). Together these account for 50% of the exam. Understanding subscriber data management and the Marketing Cloud data model is critical.',
  },
  {
    question: 'What is the difference between Marketing Cloud Consultant and Email Specialist?',
    answer: 'The Email Specialist certification covers email marketing execution within Marketing Cloud (building emails, journeys, segmentation). The Marketing Cloud Consultant certification tests architectural and implementation skills — how to design, configure, and integrate a Marketing Cloud org for a client. Consultant is more advanced and business-facing.',
  },
  {
    question: 'What prerequisites do I need for Marketing Cloud Consultant?',
    answer: 'Salesforce recommends the Marketing Cloud Email Specialist certification before Marketing Cloud Consultant. While not a hard prerequisite, it establishes the product knowledge that Consultant builds on. Real implementation experience with Marketing Cloud Studio and Journey Builder is also strongly recommended.',
  },
  {
    question: 'What concepts do most Marketing Cloud Consultant candidates get wrong?',
    answer: 'The most commonly misunderstood topics for the Marketing Cloud Consultant exam are: (1) Business Units — Data Isolation vs Sharing; (2) Sender Authentication Package (SAP) vs Default Branding Domain; (3) Suppression Lists vs Publication Lists vs Exclusion Lists. Candidates are most confidently wrong on these — learn the distinctions early to avoid losing marks on questions you expect to get right.',
  },
  ...getConceptFaqs('marketing-cloud-consultant-exam-tips'),
]

export default function MarketingCloudConsultantExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/marketing-cloud-consultant-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Marketing Cloud Consultant Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Marketing Cloud Consultant exam tests your ability to architect and implement Salesforce Marketing Cloud
          solutions. These tips focus on the discovery, data, and configuration decisions that make up the majority of exam questions.
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
            <p className="text-2xl font-bold text-salesforce-blue">67%</p>
            <p className="text-xs text-gray-600 mt-0.5">Passing Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-salesforce-blue">$200</p>
            <p className="text-xs text-gray-600 mt-0.5">Exam Fee</p>
          </div>
        </div>
      </section>


      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Marketing Cloud Consultant Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Architecture decisions</strong> — Single vs multi-business-unit setup, account hierarchy, data extension design, and subscriber key strategy.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Integration patterns</strong> — How Marketing Cloud connects to Sales/Service Cloud via Marketing Cloud Connect, and API/FTP data ingestion strategies.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Deliverability and compliance</strong> — IP warming, CAN-SPAM/GDPR considerations, send classification, and suppression list management.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Discovery and Architecture</span>
            <span className="font-bold text-salesforce-blue ml-4">28%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Account Configuration</span>
            <span className="font-bold text-salesforce-blue ml-4">22%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Reporting and Analytics</span>
            <span className="font-bold text-salesforce-blue ml-4">15%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Data Design and Management</span>
            <span className="font-bold text-salesforce-blue ml-4">13%</span>
          </div>
          <p className="text-xs text-gray-600 pt-1">Discovery and Architecture + Account Configuration = 50%. These are your highest-ROI study areas.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to Handle Scenario-Based Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Most Marketing Cloud Consultant questions describe a client&apos;s marketing operations and ask for the right
          architectural or configuration recommendation.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For business unit questions: ask whether the client needs separate data silos, distinct branding, or shared assets — these drive the business unit architecture.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For data questions: understand the difference between Subscriber Key, Contact Key, and data extension keys — these are heavily tested.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For integration questions: know the limitations of Marketing Cloud Connect vs API integration and when to recommend each.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Mock-Test Benchmark Before Booking</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          75%+ on 3 timed full mocks before booking
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Marketing Cloud Consultant has a lower first-attempt pass rate than Administrator-track exams.
          The architectural questions require real-world reasoning — mocks alone are insufficient without hands-on project experience.
        </p>
      </section>


            <section className="rounded-xl border border-amber-100 bg-amber-50 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">3 Concepts That Fail Most Marketing Cloud Consultant Candidates</h2>
        <p className="text-sm text-gray-600 mb-5">These are not the hardest topics — they are the ones where candidates are <strong>most confidently wrong</strong>. Learn the distinction early.</p>
        <div className="space-y-5">
          <div>
            <p className="font-semibold text-gray-900 mb-1">1. Business Units — Data Isolation vs Sharing</p>
            <p className="text-sm text-gray-700">Business Units (BUs) in Marketing Cloud partition data, assets, and sending permissions between teams or brands. A subscriber in one BU is separate from the same email address in another BU by default. Sharing across BUs requires deliberate configuration (shared Data Extensions, cross-BU sending). Candidates assume shared subscriber lists across BUs — the exam expects BU-specific subscriber isolation unless cross-BU sharing is explicitly configured.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">2. Sender Authentication Package (SAP) vs Default Branding Domain</p>
            <p className="text-sm text-gray-700">A Sender Authentication Package authenticates a specific sending domain (From address) for email deliverability — it aligns the envelope sender, header From, and link domains. Without SAP, Marketing Cloud uses Salesforce&apos;s shared authentication domain, which reduces deliverability. Candidates configure SAP as optional — the exam treats SAP configuration as essential for enterprise email deliverability.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">3. Suppression Lists vs Publication Lists vs Exclusion Lists</p>
            <p className="text-sm text-gray-700">Suppression Lists prevent sending to specific addresses globally regardless of subscription status (legal complaints, internal addresses). Publication Lists are subscriber opt-in lists for specific publications (newsletter, promotions). Exclusion Lists are Data Extensions used in send flows to explicitly exclude matching records from a specific send. Candidates use Suppression for send-specific exclusions — the exam expects Exclusion Lists for those and Suppression for global permanent blocks.</p>
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
          <Link href="/pardot-specialist-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Pardot Specialist Exam Tips</span>
          </Link>
          <Link href="/marketing-cloud-engagement-developer-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Marketing Cloud Engagement Developer Exam Tips</span>
          </Link>
          <Link href="/service-cloud-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Service Cloud Consultant Exam Tips</span>
          </Link>
          <Link href="/consultant-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Consultant Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Marketing Cloud Consultant Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/marketing-cloud-consultant" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Marketing Cloud Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/role/marketing" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            All Marketing Certifications
          </Link>
          <Link href="/email-specialist-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Email Specialist Exam Tips
          </Link>
        </div>
        <p className="text-xs text-gray-600 mt-4">
          After this exam, consider <Link href="/certifications/marketing-cloud-consultant" className="text-salesforce-blue underline">Marketing Cloud Engagement Consultant</Link> or <Link href="/certifications/pardot-consultant" className="text-salesforce-blue underline">Account Engagement (Pardot) Consultant</Link> next.
        </p>
      </section>
    </div>
  )
}