import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Target, ArrowRight } from 'lucide-react'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

const pageTitle = `Media Cloud AP Exam Tips (${RELEASE_CURRENT}): Study Guide`
const ogImageUrl = `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`
const pageDescription =
  `Salesforce Media Cloud Accredited Professional exam tips for ${RELEASE_CURRENT}: media sales, order management, subscriber management.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/media-cloud-ap-exam-tips` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/media-cloud-ap-exam-tips`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: ogImageUrl, alt: pageTitle }],
  },
  keywords:
    `Media Cloud AP exam tips ${RELEASE_CURRENT}, how to pass Media Cloud Accredited Professional, Salesforce media industry certification, media sales exam`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Media Cloud AP Exam Tips', url: '/media-cloud-ap-exam-tips' },
]

const faqItems = [
  {
    question: 'What is the Media Cloud Accredited Professional exam format?',
    answer: 'The Media Cloud AP exam has 40 multiple-choice questions, a 60-minute time limit, a Pass/Fail result, and a $150 fee. It validates practitioner-level knowledge of Salesforce Media Cloud: the media industry data model, advertising sales management, subscriber and audience management, content monetisation, and OmniStudio-powered media business processes for broadcasters, publishers, and streaming companies.',
  },
  {
    question: 'What are the highest-weight Media Cloud AP exam sections?',
    answer: 'Media Sales and Advertising Management (30%) and Subscriber and Audience Management (25%) together account for 55% of the exam. Managing advertising inventory, building media proposals and orders, tracking advertiser performance, and managing subscriber lifecycle (acquisition, retention, churn) are the most tested areas.',
  },
  {
    question: 'How does Salesforce Media Cloud handle advertising sales?',
    answer: 'Media Cloud uses a media-specific sales process: advertisers and agencies request proposals for media inventory (TV spots, digital ad placements, sponsorships). Media planners create proposals with media plans showing available inventory. Approved proposals become insertion orders. Media Cloud tracks campaign delivery, generates billing, and manages the advertiser relationship throughout the campaign lifecycle.',
  },
  {
    question: 'What subscriber management features does Media Cloud include?',
    answer: 'Media Cloud manages subscription lifecycle for streaming, publishing, and broadcast companies: subscriber acquisition (sign-up flows), entitlement management (which content the subscriber can access based on their plan), billing and payment management, retention offers for at-risk subscribers, win-back campaigns for churned subscribers, and audience segmentation for targeted content recommendations.',
  },
]

export default function MediaCloudApExamTipsPage() {
  const webPageJsonLd = getWebPageJsonLd({ name: pageTitle, description: pageDescription, path: '/media-cloud-ap-exam-tips', breadcrumbItems })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumbItems)
  const articleJsonLd = getArticleJsonLd({ headline: pageTitle, description: pageDescription, path: '/media-cloud-ap-exam-tips' })
  const faqJsonLd = getFaqPageJsonLd(faqItems)

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <header data-lcp-header className="mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Salesforce Media Cloud AP Exam Tips ({RELEASE_CURRENT}): How to Pass
        </h1>
        <p className="text-lg text-gray-600">
          The Media Cloud AP exam validates your ability to implement Salesforce Media Cloud for
          broadcasters, publishers, and streaming companies. These tips focus on advertising sales,
          subscriber management, and media industry data model that define this accreditation.
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Answer: What Media Cloud AP Tests</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Media sales and advertising management</strong> — The advertising sales lifecycle: advertiser account management, request for proposal (RFP) intake, media planning and proposal creation, avails checking (available inventory), insertion order management, campaign trafficking, and advertiser billing and collections through the media billing workflow.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Subscriber and audience management</strong> — Managing consumer subscribers (direct-to-consumer streaming or publication subscribers): sign-up and entitlement provisioning, subscription plan management, payment and billing, retention offer configuration for at-risk subscribers, churn prediction, and audience segmentation for personalised content and offers.</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 flex-shrink-0" /><strong>Media Cloud data model and OmniStudio</strong> — The Media Cloud data model built on the TMF standard (Products, Offers, Orders in the media context), OmniStudio for media-specific guided processes (subscriber sign-up OmniScripts, advertiser onboarding flows), and how Media Cloud integrates with content delivery, ad-tech, and billing systems.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Highest-Weight Exam Sections</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Media Sales and Advertising Management</span>
            <span className="font-bold text-salesforce-blue ml-4">30%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Subscriber and Audience Management</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-2">
            <span className="font-medium text-gray-900">Media Cloud Data Model and OmniStudio</span>
            <span className="font-bold text-salesforce-blue ml-4">25%</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="font-medium text-gray-900">Analytics and Revenue Management</span>
            <span className="font-bold text-salesforce-blue ml-4">15%</span>
          </div>
          <p className="text-xs text-gray-500 pt-1">AP format: 40 questions, 60 minutes, Pass/Fail, $150. OmniStudio is the technology foundation for Media Cloud — complete OmniStudio training before attempting Media Cloud AP.</p>
        </div>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Scenario Strategy: How to Approach Media Cloud AP Questions</h2>
        <p className="text-sm text-gray-700 mb-3">
          Questions describe a media industry scenario (advertising sales or subscriber management)
          and ask which Media Cloud feature or configuration addresses it. Media industry knowledge
          (how ad agencies buy TV time, how streaming subscriptions work) is valuable context.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For advertising sales questions: the Media Cloud advertising workflow is: Advertiser/Agency contacts media company → RFP created → Media Planner checks avails and creates Proposal → Advertiser approves → Insertion Order generated → Campaign trafficked to ad server → Campaign delivers and data flows back → Advertiser billed. When a question asks about a specific stage, map it to the correct object in this workflow.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For subscriber questions: subscriber entitlement is what content they can access based on their plan (Basic, Standard, Premium). When a subscriber upgrades their plan, their entitlements are updated immediately. Retention offers (discount for 3 months to prevent cancellation) are triggered when a subscriber indicates intent to cancel. When a scenario says &apos;a subscriber is cancelling — what can we offer them&apos;, the answer involves a retention offer workflow, not just a cancellation confirmation page.</li>
          <li className="flex gap-2"><Target className="h-4 w-4 mt-0.5 text-salesforce-blue flex-shrink-0" />For OmniStudio in media context: subscriber sign-up is an OmniScript that collects plan selection, payment info, and account creation. Content entitlement provisioning uses an Integration Procedure to connect Salesforce entitlement records with the content delivery system. When a question asks how a &apos;subscriber is granted access to premium content after payment&apos;, the answer involves an Integration Procedure updating the entitlement in the content platform — not just a Salesforce record update.</li>
        </ul>
      </section>

      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">AP Exam Benchmark</h2>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          <Clock className="h-4 w-4" />
          Pass 3 timed 40-question mocks before booking (Pass/Fail scoring)
        </p>
        <p className="text-sm text-gray-700 mt-3">
          Media Cloud AP is for implementation consultants on media industry projects. Media Cloud
          is built on the same technology stack as Communications Cloud (OmniStudio + TMF data model),
          so completing OmniStudio Consultant first is recommended. The Salesforce Media Cloud
          Trailmix is the primary structured study resource.
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
          <Link href="/communications-cloud-ap-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Communications Cloud AP Exam Tips</span>
          </Link>
          <Link href="/sales-cloud-exam-tips" className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-salesforce-blue/40 hover:bg-salesforce-blue/5 transition-colors group">
            <ArrowRight className="h-4 w-4 text-salesforce-blue flex-shrink-0" />
            <span className="text-sm font-medium text-gray-800 group-hover:text-salesforce-blue">Sales Cloud Exam Tips</span>
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">Start Media Cloud AP Prep</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/certifications/media-cloud-ap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors">
            Media Cloud AP Practice Questions <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/certifications/communications-cloud-ap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            Communications Cloud AP
          </Link>
          <Link href="/certification-path" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
            All Certification Paths
          </Link>
        </div>
      </section>
    </div>
  )
}
