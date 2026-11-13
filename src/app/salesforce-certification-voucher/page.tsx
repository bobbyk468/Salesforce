import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import LastUpdated from '@/components/LastUpdated'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Salesforce Cert Voucher & Discount Guide (${RELEASE_CURRENT})`
const pageDescription = `Find Salesforce certification discounts and vouchers through events, Trailhead promotions, partner benefits, and exam retakes.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/salesforce-certification-voucher`,
    languages: { 'en-US': `${siteUrl}/salesforce-certification-voucher`, 'x-default': `${siteUrl}/salesforce-certification-voucher` },
  },
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
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Salesforce Certification Voucher Guide', url: '/salesforce-certification-voucher' },
]

const faqItems = [
  {
    question: 'Are there legitimate Salesforce certification discounts?',
    answer: 'Yes. Salesforce offers several legitimate discounts and vouchers. These may come through events such as Dreamforce, World Tour, and TrailblazerDX; employee benefits at Salesforce partners; Trailhead Academy promotions; or the discounted retake available after a failed attempt. Offers and eligibility vary.',
  },
  {
    question: 'Does Salesforce offer a 50% retake discount?',
    answer: 'Yes. After a failed exam, Salesforce offers a discounted retake at about 50% of the original fee. For example, a $200 exam retake costs about $100, and a $400 architect exam retake costs about $200. The discount appears in your Trailhead Academy account after a failed attempt. It has no time limit.',
  },
  {
    question: 'Can I get a free Salesforce certification at Dreamforce?',
    answer: 'Salesforce has offered free or discounted associate-level exams at Dreamforce in the past. Offers have included Platform Foundations and MuleSoft Integration Foundations. AI Associate retired in February 2026 and can no longer be booked. Availability changes each year and is announced closer to the event. In-person attendance may require paid Dreamforce registration. Check the Salesforce Trailhead blog for current offers.',
  },
  {
    question: 'Do Salesforce partner employees get exam discounts?',
    answer: 'Employees of registered Salesforce partners, including ISVs, system integrators, and resellers, may receive exam subsidies. Benefits depend on the partner tier and agreement. Some large partners cover the full exam fee for relevant certifications. Ask your HR or learning team about your employer\'s policy.',
  },
  {
    question: 'Are there Trailhead vouchers for free certifications?',
    answer: 'Salesforce has run limited-time Trailhead promotions that award exam vouchers for completing specific trails or superbadges. These offers are temporary. Follow @Trailhead and check the Salesforce Trailhead blog for announcements. Past promotions have typically lasted 30–90 days.',
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
        <LastUpdated />
        <p className="text-lg text-gray-600">
          Find ways to lower Salesforce exam costs through event offers, partner benefits, Trailhead promotions, and retake discounts.
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
              { label: 'Dreamforce (San Francisco, September)', detail: 'Salesforce\'s main annual conference has offered free associate-level exam vouchers to registered attendees, including Platform Foundations. AI Associate was also offered before it retired. In-person attendance has been required for voucher access.' },
              { label: 'World Tour Events (Global, throughout year)', detail: 'Salesforce World Tour events in cities such as London, Sydney, and New York sometimes offer free or discounted exams. Check each event\'s agenda for current details.' },
              { label: 'TrailblazerDX (San Francisco, March)', detail: 'This developer-focused conference has offered certification promotions for developer exams such as PD1, PD2, and JavaScript Developer I.' },
            ],
          },
          {
            title: '2. The 50% Retake Voucher (Guaranteed)',
            color: 'border-blue-200 bg-blue-50',
            titleColor: 'text-blue-900',
            bodyColor: 'text-blue-800',
            content: [
              { label: 'How it works', detail: 'After you fail a Salesforce certification exam, a discounted retake voucher appears in your Trailhead Academy account. The discount is about 50% of the original fee.' },
              { label: 'Cost examples', detail: 'A $200 exam retake costs about $100. A $400 architect exam retake costs about $200. A $75 associate exam retake costs about $38.' },
              { label: 'No expiry pressure', detail: 'Retake vouchers do not have a short expiry, so you can use one when you are ready. Check current scheduling rules before booking another attempt.' },
            ],
          },
          {
            title: '3. Salesforce Partner Employee Benefits',
            color: 'border-purple-200 bg-purple-50',
            titleColor: 'text-purple-900',
            bodyColor: 'text-purple-800',
            content: [
              { label: 'Consulting partner (SI) employees', detail: 'Some large Salesforce system integrators, such as Accenture, Deloitte, Cognizant, and Slalom, cover all certification exam fees for employees. Check your employer\'s learning and development policy or HR portal.' },
              { label: 'ISV partner employees', detail: 'Independent software vendors that build on Salesforce may subsidize relevant certifications, such as Platform Developer I or App Builder, for their developers.' },
              { label: 'Salesforce itself', detail: 'Salesforce employees receive free access to certification exams as an employee benefit.' },
            ],
          },
          {
            title: '4. Trailhead Promotions (Periodic)',
            color: 'border-amber-200 bg-amber-50',
            titleColor: 'text-amber-900',
            bodyColor: 'text-amber-800',
            content: [
              { label: 'Trail-based vouchers', detail: 'Salesforce has offered free exam vouchers for completing selected Trailhead trails or earning superbadges. These campaigns run for a limited time.' },
              { label: 'Certification bundle promotions', detail: 'Trailhead Academy sometimes offers a lower price for a bundle of certifications, such as ADM-201 and App Builder. Check its website for current prices.' },
              { label: 'How to find current promos', detail: 'Follow @Trailhead and @SalesforceAdmns on social media, check the Salesforce blog, and join Trailblazer Community groups for promotion announcements.' },
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
        <p className="text-sm text-gray-700">Be cautious with third-party sites that advertise steeply discounted Salesforce exam vouchers. Exams are booked through Trailhead Academy and delivered via Pearson VUE (OnVUE), and voucher codes must be valid Salesforce-issued codes. Use the discount sources listed above.</p>
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
        <p className="text-white mb-6">Prepare with free practice questions before booking your exam.</p>
        <Link href="/certifications" className="inline-flex items-center px-6 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors">
          Browse Free Practice Questions
        </Link>
      </div>
    </div>
  )
}
