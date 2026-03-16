import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Pardot Consultant vs Marketing Cloud Consultant (${RELEASE_CURRENT})`
const pageDescription = `Pardot vs Marketing Cloud Consultant: B2B vs B2C, exam differences, career paths. Which Salesforce marketing cert in 2026.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/pardot-consultant-vs-marketing-cloud-consultant` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/pardot-consultant-vs-marketing-cloud-consultant`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `pardot consultant vs marketing cloud consultant, account engagement vs marketing cloud certification, salesforce marketing certification comparison 2026`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Pardot Consultant vs Marketing Cloud Consultant', url: '/pardot-consultant-vs-marketing-cloud-consultant' },
]

const faqItems = [
  {
    question: 'What is the difference between Pardot Consultant and Marketing Cloud Consultant?',
    answer: 'Pardot Consultant (now called Account Engagement Consultant) covers B2B marketing automation: lead management, scoring, Engagement Studio, Salesforce CRM integration, and B2B campaign tracking. Marketing Cloud Consultant covers B2C digital marketing: Journey Builder, audience segmentation, cross-channel marketing, deliverability, and enterprise Marketing Cloud platform management. Both are $200 certifications but for different marketing platforms and audiences.',
  },
  {
    question: 'Which should I take: Pardot Consultant or Marketing Cloud Consultant?',
    answer: 'Choose based on which platform your clients or employer use. If you work with B2B companies using Marketing Cloud Account Engagement (Pardot) for lead nurturing and CRM-integrated marketing, take Pardot Consultant. If you work with B2C brands running large-scale email, SMS, and cross-channel campaigns in Marketing Cloud Engagement, take Marketing Cloud Consultant. Both are valuable; neither is universally "better" — it depends entirely on your work context.',
  },
  {
    question: 'Can I hold both Pardot Consultant and Marketing Cloud Consultant?',
    answer: 'Yes — both certifications can be held simultaneously and are independently maintained. Many marketing technology consultants at Salesforce partners hold both, as some enterprise clients use both Pardot for B2B sales enablement and Marketing Cloud Engagement for B2C campaigns. Holding both demonstrates broad marketing cloud expertise and is a career differentiator for senior MC consultant roles.',
  },
  {
    question: 'Which is more in demand: Pardot or Marketing Cloud Consultant?',
    answer: 'Marketing Cloud Consultant is generally more in demand in terms of job posting volume — Marketing Cloud Engagement powers high-volume consumer digital marketing programs at large enterprises. Pardot Consultant is highly valued in the B2B SaaS, technology, financial services, and professional services sectors where B2B marketing automation and Salesforce CRM integration are critical. Demand varies significantly by industry and company type.',
  },
  {
    question: 'What experience is needed before taking each consultant exam?',
    answer: 'Pardot Consultant: Recommended to hold Pardot Specialist first; 1–2 years of hands-on Pardot/Account Engagement implementation experience. Marketing Cloud Consultant: Recommended to hold Marketing Cloud Email Specialist first; 1–2 years of Marketing Cloud platform experience managing enterprise Marketing Cloud implementations including Journey Builder and audience management.',
  },
]

export default function PardotConsultantVsMarketingCloudConsultantPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/pardot-consultant-vs-marketing-cloud-consultant" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Certification Comparison</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Pardot Consultant vs Marketing Cloud Consultant ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Both are Salesforce marketing certifications — but they serve completely different marketing contexts. Here is how to decide which one to pursue based on your role and clients.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-xl border-2 border-salesforce-blue p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-900">Pardot Consultant</h2>
            <span className="text-xs font-semibold bg-salesforce-blue/10 text-salesforce-dark px-2 py-0.5 rounded-full">B2B Marketing</span>
          </div>
          <div className="space-y-2 text-sm text-gray-700 mb-4">
            <div className="flex justify-between"><span className="text-gray-500">Fee</span><span className="font-semibold">$200</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Questions</span><span className="font-semibold">60</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Time</span><span className="font-semibold">105 min</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Passing score</span><span className="font-semibold">~65%</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Platform</span><span className="font-semibold">Account Engagement</span></div>
          </div>
          <Link href="/pardot-consultant-study-guide" className="block text-center text-xs font-semibold text-salesforce-blue hover:underline">Study Guide →</Link>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-900">Marketing Cloud Consultant</h2>
            <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">B2C Marketing</span>
          </div>
          <div className="space-y-2 text-sm text-gray-700 mb-4">
            <div className="flex justify-between"><span className="text-gray-500">Fee</span><span className="font-semibold">$200</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Questions</span><span className="font-semibold">60</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Time</span><span className="font-semibold">105 min</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Passing score</span><span className="font-semibold">~67%</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Platform</span><span className="font-semibold">MC Engagement</span></div>
          </div>
          <Link href="/marketing-cloud-consultant-study-guide" className="block text-center text-xs font-semibold text-salesforce-blue hover:underline">Study Guide →</Link>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">B2B vs B2C: The Core Difference</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
          <div className="bg-blue-50 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">Account Engagement (Pardot)</h3>
            <ul className="space-y-2 text-blue-800">
              <li>✓ B2B lead nurturing & scoring</li>
              <li>✓ Sales &amp; marketing alignment</li>
              <li>✓ Salesforce CRM deep integration</li>
              <li>✓ Long buy cycles, high-value deals</li>
              <li>✓ Engagement Studio automation</li>
              <li>✓ Account-based marketing</li>
            </ul>
          </div>
          <div className="bg-purple-50 rounded-xl p-5">
            <h3 className="font-bold text-purple-900 mb-3">Marketing Cloud Engagement</h3>
            <ul className="space-y-2 text-purple-800">
              <li>✓ B2C cross-channel campaigns</li>
              <li>✓ High-volume email &amp; SMS sends</li>
              <li>✓ Journey Builder lifecycle automation</li>
              <li>✓ Consumer audience segmentation</li>
              <li>✓ Transactional messaging at scale</li>
              <li>✓ Enterprise digital marketing ops</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <dl className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
              <dd className="text-sm text-gray-700">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>

      <RelatedGuides links={getRelatedGuides('pardot-consultant-vs-marketing-cloud-consultant')} />

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Practice Marketing Certification Questions</h2>
        <p className="text-blue-100 mb-6">Free practice questions for both Pardot Consultant and Marketing Cloud Consultant exams.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/certifications/pardot-consultant" className="inline-flex items-center px-5 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm">
            Pardot Consultant Practice
          </Link>
          <Link href="/certifications/marketing-cloud-consultant" className="inline-flex items-center px-5 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
            MC Consultant Practice
          </Link>
        </div>
      </div>
    </div>
  )
}
