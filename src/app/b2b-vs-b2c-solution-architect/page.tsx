import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import WhichFirstBlock from '@/components/WhichFirstBlock'
import RelatedComparisons from '@/components/RelatedComparisons'



const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `B2B vs B2C Solution Architect Certification (${RELEASE_CURRENT})`
const pageDescription = `B2B vs B2C Solution Architect: exam format, skills, industry focus. Which architect cert to pursue in 2026 Free practice questions.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/b2b-vs-b2c-solution-architect` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/b2b-vs-b2c-solution-architect`,
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
  { name: 'Certification Comparison', url: '/certification-comparison' },
  { name: 'B2B vs B2C Solution Architect', url: '/b2b-vs-b2c-solution-architect' },
]

const faqItems = [
  {
    question: 'What is the difference between B2B and B2C Solution Architect certifications?',
    answer: 'The Salesforce B2B Solution Architect certification focuses on enterprise sales and commerce architectures — integrating B2B Commerce, Sales Cloud, CPQ, Revenue Cloud, and partner portals across complex B2B sales cycles. The B2C Solution Architect certification focuses on consumer-facing commerce architectures — B2C Commerce (Salesforce Commerce Cloud), Marketing Cloud personalisation, and omnichannel consumer engagement. B2B is enterprise/manufacturing/distribution focused; B2C is retail/consumer goods focused.',
  },
  {
    question: 'Which should I take — B2B or B2C Solution Architect?',
    answer: 'Choose based on your client and project experience. If you work with enterprise clients on complex sales cycles (CPQ, Revenue Cloud, partner communities, B2B Commerce) → B2B Solution Architect. If you work on consumer e-commerce and retail implementations (Salesforce Commerce Cloud, Marketing Cloud personalisation, loyalty programmes) → B2C Solution Architect. The two certifications serve fundamentally different industry segments.',
  },
  {
    question: 'What prerequisites are required for B2B Solution Architect?',
    answer: 'No formal prerequisites are listed, but Salesforce recommends holding relevant foundational certifications: Sales Cloud Consultant, Service Cloud Consultant, and either CPQ Administrator or Experience Cloud Consultant. B2B Solution Architect is a cross-cloud, scenario-based exam that assumes deep knowledge across the Salesforce B2B stack. Most candidates have 4–6 years of Salesforce implementation experience.',
  },
  {
    question: 'What prerequisites are required for B2C Solution Architect?',
    answer: 'No formal prerequisites are listed, but Salesforce recommends Marketing Cloud Email Specialist, B2C Commerce Developer, and Experience Cloud Consultant as relevant foundational credentials. B2C Solution Architect tests cross-cloud integrations between Commerce Cloud, Marketing Cloud, Service Cloud, and Einstein personalisation. Deep hands-on B2C Commerce and Marketing Cloud experience is essential.',
  },
  {
    question: 'Are B2B and B2C Solution Architect exams similar in format?',
    answer: 'Both exams follow the same format: 60 questions, 120 minutes, approximately 68% passing score, and a $400 fee. Both are scenario-based, testing multi-cloud architecture decisions rather than single-product features. The key difference is the Salesforce product ecosystem each exam covers — B2B Commerce, CPQ, Revenue Cloud (B2B) vs B2C Commerce, Marketing Cloud, personalisation (B2C).',
  },
]

export default function B2bVsB2cSolutionArchitectPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/b2b-vs-b2c-solution-architect" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Comparison</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          B2B vs B2C Solution Architect ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Two Salesforce architect-level credentials covering fundamentally different commerce ecosystems. Here&apos;s how to choose the right one for your career.
        </p>
      </div>

      <ContentPageAuthor />
      <WhichFirstBlock
        certA={{
          name: "B2B Solution Architect",
          certSlug: "b2b-solution-architect",
          examTipsSlug: "b2b-solution-architect-exam-tips",
          conditions: [
          "Your clients are enterprise B2B organisations using Sales, Service, and Revenue Cloud",
          "You architect multi-cloud solutions for business-to-business use cases",
          "You work with complex CRM, CPQ, and partner portal implementations",
          "You want an architect credential outside the CTA path",
          ],
        }}
        certB={{
          name: "B2C Solution Architect",
          certSlug: "b2c-solution-architect",
          examTipsSlug: "b2c-solution-architect-exam-tips",
          conditions: [
          "Your clients are consumer-facing businesses using Commerce, Marketing, and Service Cloud",
          "You design solutions for B2C e-commerce, loyalty, or marketing automation",
          "You work with Salesforce Commerce Cloud or Marketing Cloud integrations",
          "You architect high-volume consumer data flows",
          ],
        }}
        recommendation={{
          certName: "B2B Solution Architect",
          certSlug: "b2b-solution-architect",
          examTipsSlug: "b2b-solution-architect-exam-tips",
          reason: "B2B Solution Architect applies to a broader range of Salesforce's core CRM clients. B2C is the right choice only if your practice is specifically in consumer e-commerce or B2C Marketing Cloud — otherwise B2B gives you wider applicability.",
          careerPathSlug: "architect-certification-path",
          careerPathLabel: "Architect Certification Path",
        }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {[
          {
            name: 'B2B Solution Architect',
            href: '/certifications/b2b-solution-architect',
            focus: 'Enterprise sales, commerce & revenue',
            industries: 'Manufacturing, distribution, wholesale, technology',
            fee: '$400', questions: '60', time: '120 min', passing: '~68%',
            clouds: ['B2B Commerce', 'Sales Cloud + CPQ', 'Revenue Cloud', 'Experience Cloud (partner)', 'Service Cloud'],
          },
          {
            name: 'B2C Solution Architect',
            href: '/certifications/b2c-solution-architect',
            focus: 'Consumer commerce & marketing',
            industries: 'Retail, consumer goods, fashion, hospitality',
            fee: '$400', questions: '60', time: '120 min', passing: '~68%',
            clouds: ['B2C Commerce (Commerce Cloud)', 'Marketing Cloud Engagement', 'Marketing Cloud Personalisation', 'Service Cloud', 'Loyalty Management'],
          },
        ].map((cert) => (
          <div key={cert.name} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-3">{cert.name}</h2>
            <div className="grid grid-cols-4 gap-2 mb-4">
              {[{ l: 'Fee', v: cert.fee }, { l: 'Questions', v: cert.questions }, { l: 'Time', v: cert.time }, { l: 'Pass', v: cert.passing }].map((s) => (
                <div key={s.l} className="text-center bg-gray-50 rounded-lg p-2">
                  <div className="font-bold text-salesforce-dark text-xs">{s.v}</div>
                  <div className="text-xs text-gray-600">{s.l}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mb-1"><strong>Focus:</strong> {cert.focus}</p>
            <p className="text-sm text-gray-600 mb-3"><strong>Industries:</strong> {cert.industries}</p>
            <p className="text-sm font-medium text-gray-800 mb-2">Key Clouds:</p>
            <ul className="space-y-1 mb-4">
              {cert.clouds.map((s) => (
                <li key={s} className="text-sm text-gray-700 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-salesforce-blue flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            <Link href={cert.href} className="inline-flex items-center text-salesforce-blue font-medium text-sm hover:underline">
              Free Practice Questions →
            </Link>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Key Differences</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th scope="col" className="text-left py-2 pr-4 text-gray-600 font-medium">Aspect</th>
                <th scope="col" className="text-left py-2 pr-4 text-salesforce-blue font-medium">B2B Solution Architect</th>
                <th scope="col" className="text-left py-2 text-salesforce-blue font-medium">B2C Solution Architect</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { aspect: 'Customer type', b2b: 'Businesses buying from businesses', b2c: 'Consumers buying from brands' },
                { aspect: 'Sales cycle', b2b: 'Long, complex (months)', b2c: 'Short, transactional (minutes)' },
                { aspect: 'Key product', b2b: 'B2B Commerce + CPQ', b2c: 'Salesforce Commerce Cloud (B2C)' },
                { aspect: 'Marketing focus', b2b: 'Account-based, partner channels', b2c: 'Personalisation, loyalty, email' },
                { aspect: 'Typical project', b2b: 'Partner portal + CPQ + Revenue Cloud', b2c: 'Storefront + Marketing Cloud + Loyalty' },
                { aspect: 'Fee', b2b: '$400', b2c: '$400' },
                { aspect: 'Format', b2b: '60 Q, 120 min, ~68%', b2c: '60 Q, 120 min, ~68%' },
                { aspect: 'Avg Salary', b2b: '$130–165k (US)', b2c: '$125–160k (US)' },
              ].map((row) => (
                <tr key={row.aspect}>
                  <td className="py-2 pr-4 text-gray-600">{row.aspect}</td>
                  <td className="py-2 pr-4 text-gray-900">{row.b2b}</td>
                  <td className="py-2 text-gray-900">{row.b2c}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">Decision Matrix: B2B or B2C Solution Architect?</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full text-sm text-left border-collapse">
            <thead><tr className="border-b-2 border-gray-200">
              <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Your Situation</th>
              <th scope="col" className="py-2.5 font-semibold text-emerald-700">Choose This Cert</th>
            </tr></thead>
            <tbody className="text-gray-700 divide-y divide-gray-100">
              <tr><td className="py-2.5 pr-4">Delivering CPQ, Account hierarchies, or complex B2B sales processes</td><td className="py-2.5 font-semibold text-salesforce-blue">B2B Solution Architect</td></tr>
              <tr><td className="py-2.5 pr-4">Working with Commerce Cloud storefronts or high-volume consumer transactions</td><td className="py-2.5 font-semibold text-purple-700">B2C Solution Architect</td></tr>
              <tr><td className="py-2.5 pr-4">Enterprise clients with complex quoting, contracts, and partner channels</td><td className="py-2.5 font-semibold text-salesforce-blue">B2B Solution Architect</td></tr>
              <tr><td className="py-2.5 pr-4">Retail or DTC brands needing personalised commerce experiences</td><td className="py-2.5 font-semibold text-purple-700">B2C Solution Architect</td></tr>
              <tr><td className="py-2.5 pr-4">Background in Sales Cloud, Service Cloud, or CPQ implementations</td><td className="py-2.5 font-semibold text-salesforce-blue">B2B Solution Architect</td></tr>
              <tr><td className="py-2.5 pr-4">Background in B2C Commerce, Marketing Cloud, or storefront development</td><td className="py-2.5 font-semibold text-purple-700">B2C Solution Architect</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <RelatedGuides links={getRelatedGuides('b2b-vs-b2c-solution-architect')} />

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Explore Both Architect Paths</h2>
        <p className="text-white mb-6">Free practice questions for both Solution Architect certifications.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/certifications/b2b-solution-architect" className="inline-flex items-center px-5 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm">
            B2B Architect Practice
          </Link>
          <Link href="/certifications/b2c-solution-architect" className="inline-flex items-center px-5 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
            B2C Architect Practice
          </Link>
        </div>
      </div>
      <RelatedComparisons
        links={[
          { slug: "integration-architect-vs-system-architect", label: "Integration vs System Architect" },
          { slug: "business-analyst-vs-strategy-designer", label: "Business Analyst vs Strategy Designer" },
          { slug: "salesforce-admin-vs-developer-career", label: "Admin vs Developer Career" },
        ]}
      />
    </div>
  )
}
