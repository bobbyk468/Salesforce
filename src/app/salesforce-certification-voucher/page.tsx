import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Salesforce Certification Voucher & Discount Guide (${RELEASE_CURRENT})`
const pageDescription = `Salesforce cert discounts and vouchers: Dreamforce, Trailhead, partner discounts, 50% retake vouchers Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/salesforce-certification-voucher` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/salesforce-certification-voucher`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `salesforce certification voucher, salesforce exam discount 2026, salesforce certification 50% off, how to get salesforce certification discount`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Salesforce Certification Voucher Guide', url: '/salesforce-certification-voucher' },
]

const faqItems = [
  {
    question: 'Are there legitimate Salesforce certification discounts?',
    answer: 'Yes — Salesforce offers several legitimate discount and voucher opportunities. The most reliable are: (1) Salesforce events like Dreamforce, World Tour, and TrailblazerDX, which often include free or discounted exam vouchers with conference registration; (2) Salesforce partner employee benefits — employees of Salesforce consulting partners typically receive subsidised exam fees; (3) the Trailhead Academy, which sometimes offers promotional pricing on certification bundles; and (4) the 50% off retake voucher available after a failed first attempt.',
  },
  {
    question: 'Does Salesforce offer a 50% retake discount?',
    answer: 'Yes — if you fail a Salesforce certification exam, Salesforce provides a discounted retake at approximately 50% of the original fee. For a $200 exam, the retake is approximately $100. For a $400 architect exam, the retake is approximately $200. The retake discount is automatically available in your Webassessor account after a failed attempt. There is no time limit on using the retake voucher.',
  },
  {
    question: 'Can I get a free Salesforce certification at Dreamforce?',
    answer: 'Salesforce has historically offered free or heavily discounted associate-level certification opportunities at Dreamforce. These typically include the AI Associate, Platform Foundations, or MuleSoft Integration Foundations exams — all $75 standard fee. Availability varies by year and is announced close to the event. Dreamforce registration (which itself has fees for in-person attendance) is typically required. Check the official Salesforce Trailhead blog as Dreamforce approaches for current offers.',
  },
  {
    question: 'Do Salesforce partner employees get exam discounts?',
    answer: 'Yes — employees of registered Salesforce consulting partners (ISV, SI, reseller partners) often receive Salesforce certification exam subsidies as a partner benefit. The exact benefit varies by partner tier and agreement. Some large Salesforce partners cover 100% of exam fees for employees pursuing relevant certifications. Check your employer\'s HR or L&D team, and your Salesforce partner agreement details.',
  },
  {
    question: 'Are there Trailhead vouchers for free certifications?',
    answer: 'Salesforce has run Trailhead promotional campaigns that include exam vouchers — typically tied to completing specific Trailhead trails or superbadge challenges. These are not permanent offers; they are time-limited promotions. Follow @Trailhead on social media and check the Salesforce Trailhead blog regularly for announcements. When Salesforce runs these promotions, they typically last 30–90 days.',
  },
]

export default function SalesforceCertificationVoucherPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/salesforce-certification-voucher" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">

      <ContentPageAuthor />
          <span>Cost Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Salesforce Certification Voucher &amp; Discount Guide ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Legitimate ways to reduce your Salesforce certification exam costs — from event vouchers and partner benefits to retake discounts and Trailhead promotions.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Retake Discount', value: '~50%' },
          { label: 'Associate Exams', value: '$75' },
          { label: 'Standard Exams', value: '$200' },
          { label: 'Architect Exams', value: '$400' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-salesforce-blue">{stat.value}</div>
            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="space-y-6 mb-10">
        {[
          {
            title: '1. Salesforce Events (Most Reliable)',
            color: 'border-green-200 bg-green-50',
            titleColor: 'text-green-900',
            bodyColor: 'text-green-800',
            content: [
              { label: 'Dreamforce (San Francisco, September)', detail: 'Salesforce\'s flagship annual conference. Historically includes free associate-level exam vouchers (AI Associate, Platform Foundations) for registered attendees. In-person attendance is required for exam voucher access.' },
              { label: 'World Tour Events (Global, throughout year)', detail: 'Salesforce World Tour events in major cities (London, Sydney, New York, etc.) sometimes include discounted or free exam opportunities for attendees. Check the specific event agenda as announced.' },
              { label: 'TrailblazerDX (San Francisco, March)', detail: 'Developer-focused Salesforce conference. Has offered certification promotions for developer-track certifications (PD1, PD2, JavaScript Developer I) to registered attendees.' },
            ],
          },
          {
            title: '2. The 50% Retake Voucher (Guaranteed)',
            color: 'border-blue-200 bg-blue-50',
            titleColor: 'text-blue-900',
            bodyColor: 'text-blue-800',
            content: [
              { label: 'How it works', detail: 'After failing a Salesforce certification exam, a discounted retake voucher appears automatically in your Webassessor account. The discount is approximately 50% of the original exam fee.' },
              { label: 'Cost examples', detail: '$200 exam → ~$100 retake. $400 architect exam → ~$200 retake. $75 associate exam → ~$38 retake.' },
              { label: 'No expiry pressure', detail: 'Retake vouchers do not have a short expiry — you can use them when you are ready. Salesforce does not enforce a waiting period between attempts, so you can reschedule as soon as you feel prepared.' },
            ],
          },
          {
            title: '3. Salesforce Partner Employee Benefits',
            color: 'border-purple-200 bg-purple-50',
            titleColor: 'text-purple-900',
            bodyColor: 'text-purple-800',
            content: [
              { label: 'Consulting partner (SI) employees', detail: 'Many large Salesforce System Integrator partners (Accenture, Deloitte, Cognizant, Slalom, etc.) cover 100% of certification exam fees for employees. Check your employer\'s Learning & Development policy or HR portal.' },
              { label: 'ISV partner employees', detail: 'Independent Software Vendors (ISVs) building on the Salesforce platform often subsidise relevant certifications (Platform Developer I, App Builder) for their developers.' },
              { label: 'Salesforce itself', detail: 'Salesforce employees receive free access to all certification exams as an employee benefit.' },
            ],
          },
          {
            title: '4. Trailhead Promotions (Periodic)',
            color: 'border-amber-200 bg-amber-50',
            titleColor: 'text-amber-900',
            bodyColor: 'text-amber-800',
            content: [
              { label: 'Trail-based vouchers', detail: 'Salesforce has run promotions where completing a specific Trailhead trail or earning a superbadge unlocks a free exam voucher. These are time-limited campaigns, not permanent offers.' },
              { label: 'Certification bundle promotions', detail: 'Salesforce Trailhead Academy occasionally runs multi-cert bundle pricing (e.g., ADM-201 + App Builder together at a reduced rate). Monitor the Trailhead Academy website for current pricing.' },
              { label: 'How to find current promos', detail: 'Follow @Trailhead and @SalesforceAdmns on social media. Check the Salesforce blog. Join Trailblazer Community groups — community members share promotion announcements quickly.' },
            ],
          },
        ].map((section) => (
          <div key={section.title} className={`rounded-xl border p-6 ${section.color}`}>
            <h2 className={`text-lg font-bold mb-4 ${section.titleColor}`}>{section.title}</h2>
            <div className="space-y-3">
              {section.content.map((item) => (
                <div key={item.label}>
                  <p className={`text-sm font-semibold ${section.titleColor} mb-0.5`}>{item.label}</p>
                  <p className={`text-sm ${section.bodyColor}`}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8">
        <h2 className="text-base font-bold text-gray-900 mb-2">What About Third-Party Voucher Sites?</h2>
        <p className="text-sm text-gray-700">Be cautious of third-party websites claiming to sell Salesforce exam vouchers at steep discounts. Salesforce exams are administered through Webassessor (Kryterion) — voucher codes must be valid Salesforce-issued codes. Unofficial voucher sellers are either scams or operating in violation of Salesforce&apos;s terms of service. The legitimate discount sources are the ones listed above.</p>
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

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Prepare Before You Pay</h2>
        <p className="text-white mb-6">Use free practice questions to get exam-ready — minimise retake fees by passing first time.</p>
        <Link href="/certifications" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Browse Free Practice Questions
        </Link>
      </div>
    </div>
  )
}
