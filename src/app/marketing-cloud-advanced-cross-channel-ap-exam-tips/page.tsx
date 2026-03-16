import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `MC Advanced Cross-Channel AP Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Marketing Cloud Advanced Cross-Channel AP exam tips for ${RELEASE_CURRENT}: Journey Builder, mobile push, advertising audiences.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {  // Canonical to cert page — prevents GSC "chose different canonical"
  canonical: `${siteUrl}/certifications/marketing-cloud-advanced-cross-channel-ap`,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/marketing-cloud-advanced-cross-channel-ap-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Marketing Cloud Advanced Cross-Channel AP exam tips ${RELEASE_CURRENT}, MC cross-channel certification, Journey Builder AP exam, multi-channel marketing Salesforce`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'MC Advanced Cross-Channel AP Exam Tips', url: '/marketing-cloud-advanced-cross-channel-ap-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Marketing Cloud Advanced Cross-Channel AP exam format?',
    answer: 'The Marketing Cloud Advanced Cross-Channel AP exam has 40 multiple-choice questions, a 60-minute time limit, a Pass/Fail result, and a $150 fee. It validates advanced cross-channel marketing skills: complex Journey Builder automation, mobile push and in-app messaging, advertising audience management, and advanced personalisation across email, SMS, push, and social channels.',
  },
  {
    question: 'What are the highest-weight MC Advanced Cross-Channel AP exam sections?',
    answer: 'Advanced Journey Builder (35%) and Mobile and Advertising Channels (25%) together account for 60% of the exam. Building complex multi-branch journeys with decision splits, entry sources, exit criteria, and goal measurement, as well as configuring mobile push and Advertising Studio for social retargeting, are the most heavily tested areas.',
  },
  {
    question: 'How does Journey Builder differ from basic automation for this exam?',
    answer: 'Basic automation (Automation Studio) runs a send on a schedule or trigger. Journey Builder orchestrates a personalised, multi-step customer journey based on each individual&apos;s behaviour and profile. The Advanced Cross-Channel AP tests complex Journey Builder scenarios: multi-channel journeys (email + SMS + push), decision splits based on engagement data, re-entry logic, journey goals and measurement, and how to integrate Journey Builder with external systems via API events.',
  },
  {
    question: 'What is Advertising Studio and how does the exam test it?',
    answer: 'Advertising Studio connects Marketing Cloud subscriber data to advertising platforms (Facebook, Google, LinkedIn, Twitter) for audience targeting. You can create lookalike audiences from your best customers, suppress current customers from acquisition campaigns, and retarget website visitors. The exam tests how to configure audience segments, sync contact data to advertising platforms, and measure advertising campaign performance alongside email metrics.',
  },
]

export default function MarketingCloudAdvancedCrossChannelApExamTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/marketing-cloud-advanced-cross-channel-ap-exam-tips" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Marketing Cloud Advanced Cross-Channel AP Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The MC Advanced Cross-Channel AP validates expertise in complex Journey Builder automation,
          mobile messaging, and advertising audience management. These tips focus on the multi-channel
          orchestration skills that distinguish this advanced accreditation.
        </p>
      </header>

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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What MC Advanced Cross-Channel AP Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Advanced Journey Builder</strong> — Complex journey design with multiple entry sources (data extension, API event, Salesforce data event), decision splits (engagement-based, attribute-based, Einstein-based), multi-channel paths (email → wait → check open → SMS if not opened), journey goals and exit criteria, re-entry logic, and transactional sending within journeys.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Mobile and push messaging</strong> — MobilePush for iOS and Android push notifications, in-app messaging for mobile app users, SMS/MMS with MobileConnect, keyword-based opt-in management for SMS, and how to integrate mobile channels into Journey Builder for a unified cross-channel experience.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Advertising Studio and social</strong> — Syncing Marketing Cloud audiences to Facebook Custom Audiences and Google Customer Match, creating lookalike audiences for prospecting, suppressing existing customers from acquisition ads, retargeting website abandoners via social advertising, and measuring advertising ROI alongside email metrics in Marketing Cloud Intelligence.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Advanced Journey Builder</span>
            <span className="font-bold text-salesforce-blue ml-4">35%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Mobile and Push Messaging</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Advertising Studio and Social</span>
            <span className="font-bold text-salesforce-blue ml-4">22%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Analytics and Attribution</span>
            <span className="font-bold text-salesforce-blue ml-4">13%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">AP format: 40 questions, 60 minutes, Pass/Fail, $150. Advanced Journey Builder = 35% — complex multi-channel journey design is the core skill tested.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach MC Advanced Cross-Channel AP Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a complex customer engagement scenario and ask which Journey Builder
          configuration, mobile channel, or advertising approach achieves it. Think about the full
          customer journey across all channels — not just email.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For journey design questions: use Decision Splits to branch journeys based on engagement (opened email, clicked link) or profile attributes (loyalty tier, purchase history). Use Einstein Split for AI-driven channel optimisation (let Einstein decide whether to send email or SMS next). Use Wait activities with specific outcomes (wait until email is opened, or wait 3 days and move on). When a scenario says &apos;send a follow-up SMS only if the email wasn&apos;t opened within 48 hours&apos;, use a Decision Split on Email Open after a 48-hour Wait.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For mobile push questions: push notifications require the app to have MobilePush SDK installed and the user to have granted notification permissions. Quiet hours prevent sending push notifications during specified hours (e.g., 10pm–8am). Geofencing triggers location-based push when a device enters a defined area. When a scenario says &apos;send a push notification when a customer is near our store&apos;, configure a geofence-triggered push — not a time-based send.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For Advertising Studio questions: Custom Audiences sync Marketing Cloud subscribers to Facebook. Lookalike Audiences use Custom Audiences as a seed to find new similar prospects. Suppression lists exclude current customers from acquisition ads. When a scenario says &apos;find new customers who look like our top 1,000 buyers&apos;, create a Custom Audience from the top 1,000 buyers and use it to generate a Facebook Lookalike Audience for prospecting campaigns.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">AP Exam Benchmark</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          Pass 3 timed 40-question mocks before booking (Pass/Fail scoring)
        </p>
        <p className="text-sm text-gray-700 mt-3">
          MC Advanced Cross-Channel AP assumes you hold the Email Specialist credential and have
          hands-on Journey Builder experience. Build complex multi-channel journeys in a Marketing
          Cloud sandbox before booking — the Journey Builder canvas and decision split logic are
          difficult to understand from documentation alone.
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
          <Link href="/email-specialist-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Email Specialist Exam Tips</span>
          </Link>
          <Link href="/marketing-cloud-consultant-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Marketing Cloud Consultant Exam Tips</span>
          </Link>
          <Link href="/marketing-cloud-personalization-ap-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Marketing Cloud Personalization AP Exam Tips</span>
          </Link>
          <Link href="/consultant-certification-path" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Consultant Certification Path</span>
          </Link>
        </div>
      </section>


      <section className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start MC Advanced Cross-Channel AP Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/marketing-cloud-advanced-cross-channel-ap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            MC Advanced Cross-Channel Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/email-specialist-exam-tips" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Email Specialist Tips
          </Link>
          <Link href="/certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            All Certification Paths
          </Link>
        </div>
      </section>
    </div>
  )
}
