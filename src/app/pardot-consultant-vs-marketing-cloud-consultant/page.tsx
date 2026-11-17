import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import CredentialStatusNotice from '@/components/CredentialStatusNotice'
import { getPublishedExamFacts } from '@/lib/cert-seo-data'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import LastUpdated from '@/components/LastUpdated'
import WhichFirstBlock from '@/components/WhichFirstBlock'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Pardot Consultant vs Marketing Cloud Consultant (${RELEASE_CURRENT})`
const pageDescription = `Pardot vs Marketing Cloud Consultant: B2B vs B2C, exam differences, career paths. Which Salesforce marketing cert in 2026.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/pardot-consultant-vs-marketing-cloud-consultant`,
    languages: { 'en-US': `${siteUrl}/pardot-consultant-vs-marketing-cloud-consultant`, 'x-default': `${siteUrl}/pardot-consultant-vs-marketing-cloud-consultant` },
  },
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
}

/**
 * Exam facts from the certification registry in cert-seo-data.ts and the
 * closure banner from credential-status.ts. Account Engagement Consultant is
 * closed, so every card, FAQ, matrix row and CTA on this page has to point at
 * Marketing Cloud Engagement Consultant instead; reading one source is what
 * keeps them from drifting back.
 */
function examFacts(slug: string) {
  const f = getPublishedExamFacts(slug)
  if (!f) throw new Error(`No published exam facts for ${slug}`)
  return f
}

const mce = examFacts('marketing-cloud-consultant')
const mcae = examFacts('pardot-consultant')

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Certification Comparison', url: '/certification-comparison' },
  { name: 'Pardot Consultant vs Marketing Cloud Consultant', url: '/pardot-consultant-vs-marketing-cloud-consultant' },
]

const faqItems = [
  {
    question: 'What is the difference between Pardot Consultant and Marketing Cloud Consultant?',
    answer: 'Pardot Consultant, now called Account Engagement Consultant, covers B2B marketing automation, including lead management and scoring, Engagement Studio, Salesforce CRM integration, and campaign tracking. Marketing Cloud Consultant covers B2C digital marketing, including Journey Builder, audience segmentation, cross-channel campaigns, deliverability, and Marketing Cloud operations. Both exams cost $200, but they cover different platforms and audiences.',
  },
  {
    question: 'Which should I take: Pardot Consultant or Marketing Cloud Consultant?',
    answer: 'Marketing Cloud Engagement Consultant (MCE-Con-201), because Account Engagement Consultant can no longer be booked: registration closed on July 24, 2026, August 31, 2026 was the last sitting, and the credential retires on February 1, 2027. If your work is B2B lead nurturing on Account Engagement, Salesforce points candidates to Marketing Cloud Next Consultant (MC-Con-201) and Account Engagement Specialist (MC-201) instead.',
  },
  {
    question: 'Can I hold both Pardot Consultant and Marketing Cloud Consultant?',
    answer: 'Only if you already passed Account Engagement Consultant before it closed on August 31, 2026. Holders keep it on their Trailblazer Profile, marked Retired from February 1, 2027, with no maintenance required, and can add Marketing Cloud Engagement Consultant alongside it. It can no longer be earned, so a new combination has to be built from exams that are still open.',
  },
  {
    question: 'Which is more in demand: Pardot or Marketing Cloud Consultant?',
    answer: 'Marketing Cloud Consultant, and it is also the only one of the two still awarded. It appears in more job postings because large enterprises use Marketing Cloud Engagement for high-volume consumer marketing. Account Engagement skills remain valued in B2B SaaS, technology, financial services, and professional services, but since August 31, 2026 they can no longer be evidenced with this certification.',
  },
  {
    question: 'What experience is needed before taking each consultant exam?',
    answer: 'For Marketing Cloud Consultant, the exam that is still open, this page recommends Marketing Cloud Email Specialist first and 1–2 years of platform experience, including Journey Builder and audience management. Account Engagement Consultant recommended Account Engagement Specialist first and 1–2 years of hands-on implementation experience, which is now a guide to the skills rather than to an exam booking.',
  },
]

export default function PardotConsultantVsMarketingCloudConsultantPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/pardot-consultant-vs-marketing-cloud-consultant" breadcrumbItems={breadcrumbItems} faqItems={faqItems} aboutEntities={['/certifications/pardot-consultant', '/certifications/marketing-cloud-consultant']} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Certification Comparison</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Pardot Consultant vs Marketing Cloud Consultant ({RELEASE_CURRENT})
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          These credentials cover different marketing platforms. Account Engagement supports B2B marketing, while Marketing Cloud Engagement supports B2C and cross-channel campaigns. Only one of them is still open: Salesforce closed Account Engagement Consultant on 31 August 2026, so Marketing Cloud Engagement Consultant (MCE-Con-201) is the exam to book.
        </p>
      </div>

      <CredentialStatusNotice slug="pardot-consultant" />

      <ContentPageAuthor />

      <WhichFirstBlock
        certA={{
          name: "Marketing Cloud Engagement Consultant",
          certSlug: "marketing-cloud-consultant",
          examTipsSlug: "certifications/marketing-cloud-consultant",
          conditions: [
          "Your org runs Marketing Cloud Engagement, formerly ExactTarget",
          "Your work is high-volume journeys, sends, and data extensions",
          "You build in Journey Builder and Automation Studio",
          `You need ${mce.passingScore} across ${mce.questions} questions in ${mce.duration}, ${mce.fee}`,
          ],
        }}
        certB={{
          name: "Marketing Cloud Account Engagement Consultant",
          certSlug: "pardot-consultant",
          unavailable: "exam closed August 2026",
          conditions: [
          "B2B lead nurturing, scoring, grading, and automation rules",
          "Account Engagement, formerly Pardot, implementation work",
          "Still the reference if you deliver on that platform today",
          "Credential retires 1 February 2027",
          ],
        }}
        recommendation={{
          certName: "Marketing Cloud Engagement Consultant",
          certSlug: "marketing-cloud-consultant",
          examTipsSlug: "certifications/marketing-cloud-consultant",
          reason: "This stopped being a platform preference when Salesforce closed Account Engagement Consultant registration: 31 August 2026 was the last sitting and the credential retires on 1 February 2027, leaving Marketing Cloud Engagement Consultant (MCE-Con-201) as the bookable marketing consultant exam. If you deliver on Account Engagement, the retired outline is still the best description of that work, but it is no longer a credential you can earn.",
          careerPathSlug: "marketing-cloud-certification-path",
          careerPathLabel: "Marketing Cloud Certification Path",
        }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-xl border-2 border-salesforce-blue p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-900">Marketing Cloud Engagement Consultant</h2>
            <span className="text-xs font-semibold bg-salesforce-blue/10 text-salesforce-dark px-2 py-0.5 rounded-full">Open: B2C Marketing</span>
          </div>
          <div className="space-y-2 text-sm text-gray-700 mb-4">
            <div className="flex justify-between"><span className="text-gray-600">Fee</span><span className="font-semibold">{mce.fee}</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Questions</span><span className="font-semibold">{mce.questions}</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Time</span><span className="font-semibold">{mce.duration}</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Passing score</span><span className="font-semibold">{mce.passingScore}</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Platform</span><span className="font-semibold">MC Engagement</span></div>
          </div>
          <Link href="/certifications/marketing-cloud-consultant" className="block py-1 text-center text-xs font-semibold text-salesforce-blue hover:underline">Study Guide →</Link>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-900">Account Engagement Consultant</h2>
            <span className="text-xs font-semibold bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full">Exam closed August 2026</span>
          </div>
          <div className="space-y-2 text-sm text-gray-700 mb-4">
            <div className="flex justify-between"><span className="text-gray-600">Fee</span><span className="font-semibold">{mcae.fee}</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Questions</span><span className="font-semibold">{mcae.questions}</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Time</span><span className="font-semibold">{mcae.duration}</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Passing score</span><span className="font-semibold">{mcae.passingScore}</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Platform</span><span className="font-semibold">Account Engagement</span></div>
          </div>
          <p className="mb-2 text-xs text-gray-600">Published figures, kept for reference. Registration closed 24 July 2026; the credential retires 1 February 2027.</p>
          <Link href="/certifications/pardot-consultant" className="block py-1 text-center text-xs font-semibold text-salesforce-blue hover:underline">Study Guide →</Link>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">The Main Difference: B2B and B2C Marketing</h2>
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

            <section className="rounded-xl border border-gray-100 bg-white p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Choose Between Pardot Consultant and Marketing Cloud Consultant</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full text-sm text-left border-collapse">
            <thead><tr className="border-b-2 border-gray-200">
              <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Your Situation</th>
              <th scope="col" className="py-2.5 font-semibold text-emerald-700">Choose This Cert</th>
            </tr></thead>
            <tbody className="text-gray-700 divide-y divide-gray-100">
              <tr><td className="py-2.5 pr-4">B2B marketing automation, lead scoring, and CRM-synced campaigns</td><td className="py-2.5 font-semibold text-purple-700">Account Engagement Specialist (MC-201) or Marketing Cloud Next Consultant; the MCAE Consultant exam closed</td></tr>
              <tr><td className="py-2.5 pr-4">High-volume B2C email campaigns, Journey Builder, or multi-channel marketing</td><td className="py-2.5 font-semibold text-purple-700">Marketing Cloud Engagement Consultant</td></tr>
              <tr><td className="py-2.5 pr-4">Enterprise B2B company using Salesforce CRM for sales pipeline</td><td className="py-2.5 font-semibold text-purple-700">Marketing Cloud Next Consultant, Salesforce&apos;s named successor for Account Engagement work</td></tr>
              <tr><td className="py-2.5 pr-4">Client sends millions of emails to consumers and needs personalised journeys</td><td className="py-2.5 font-semibold text-purple-700">Marketing Cloud Engagement Consultant</td></tr>
              <tr><td className="py-2.5 pr-4">Want the credential that is still awarded</td><td className="py-2.5 font-semibold text-purple-700">Marketing Cloud Engagement Consultant, the bookable exam of the two</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <RelatedGuides links={getRelatedGuides('pardot-consultant-vs-marketing-cloud-consultant')} />

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Practise with Marketing Certification Questions</h2>
        <p className="text-white mb-6">Marketing Cloud Engagement Consultant is the bookable exam. The Account Engagement bank stays up as study material for its closed outline.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/certifications/marketing-cloud-consultant" className="inline-flex items-center px-5 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm">
            MC Engagement Consultant Practice
          </Link>
          <Link href="/certifications/pardot-consultant" className="inline-flex items-center px-5 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
            Account Engagement Practice (closed exam)
          </Link>
        </div>
      </div>
    </div>
  )
}
