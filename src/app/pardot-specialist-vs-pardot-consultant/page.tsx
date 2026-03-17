import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Pardot Specialist vs Pardot Consultant (${RELEASE_CURRENT})`
const pageDescription = `Pardot Specialist vs Pardot Consultant certification comparison (${RELEASE_CURRENT}): fees, difficulty, skills tested, and which Pardot cert to take first.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/pardot-specialist-vs-pardot-consultant` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/pardot-specialist-vs-pardot-consultant`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `pardot specialist vs pardot consultant, MCAE specialist vs consultant, which pardot certification, salesforce marketing cloud account engagement certification`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Pardot Specialist vs Pardot Consultant', url: '/pardot-specialist-vs-pardot-consultant' },
]

const faqItems = [
  {
    question: 'What is the difference between Pardot Specialist and Pardot Consultant?',
    answer: 'Pardot Specialist tests hands-on practitioner skills: building lead scoring models, creating emails and landing pages, configuring Engagement Studio programs, and managing prospects. Pardot Consultant tests strategic consulting skills: designing multi-business-unit Pardot architectures, advising clients on implementation strategy, troubleshooting complex sync issues, and designing governance frameworks. Specialist = doing; Consultant = advising and architecting.',
  },
  {
    question: 'Should I take Pardot Specialist before Pardot Consultant?',
    answer: 'Yes — Pardot Specialist is strongly recommended before Pardot Consultant. The Consultant exam assumes deep Specialist-level knowledge of all Pardot features and adds a consulting/architecture layer on top. Salesforce recommends holding Pardot Specialist before attempting Pardot Consultant. Most candidates who skip Specialist and go directly to Consultant find the exam significantly harder than expected.',
  },
  {
    question: 'Which Pardot certification has more job market value?',
    answer: 'Pardot Consultant has more job market value for consulting career tracks and senior marketing ops roles. Pardot Specialist is the entry credential that opens doors to marketing automation roles and is sufficient for in-house marketing team positions. For Salesforce partner consulting firms, Pardot Consultant is typically the baseline expectation. For an internal marketing operations manager role, Pardot Specialist is usually sufficient.',
  },
  {
    question: 'What is the Pardot Consultant exam format?',
    answer: 'The Pardot Consultant exam has 60 questions, 105-minute time limit, ~65% passing score, and a $200 fee. It is scenario-based — questions describe business requirements and client situations and ask which Pardot configuration, architecture, or approach best solves them. It covers Pardot across all features plus consulting topics: requirements gathering, solution design, data migration, and implementation strategy.',
  },
  {
    question: 'Do I need Salesforce Admin (ADM-201) before Pardot Consultant?',
    answer: 'ADM-201 is not formally required, but it is strongly recommended. Pardot Consultant tests Salesforce-Pardot integration deeply: connector sync behaviour, campaign alignment, lead routing from Pardot to Salesforce, and Salesforce Engage configuration. Understanding the Salesforce CRM data model (leads, contacts, campaigns) is essential for these topics. Most Pardot Consultant candidates hold ADM-201 or equivalent experience.',
  },
]

export default function PardotSpecialistVsPardotConsultantPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/pardot-specialist-vs-pardot-consultant" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Comparison</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Pardot Specialist vs Pardot Consultant ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Both Pardot certifications test the same platform — but at very different levels. Here&apos;s which to take first and when to go for the Consultant credential.
        </p>
      </div>

      <ContentPageAuthor />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {[
          {
            name: 'Pardot Specialist',
            href: '/certifications/pardot-specialist',
            badge: 'Take First',
            badgeColor: 'bg-green-100 text-green-800',
            fee: '$200', questions: '60', time: '90 min', passing: '~65%',
            level: 'Practitioner — hands-on execution',
            best: 'Marketing automation specialists, email marketers, marketing ops professionals',
            skills: ['Lead scoring and grading models', 'Engagement Studio programs', 'Forms, landing pages, and automation rules', 'Email marketing and deliverability', 'Pardot-Salesforce connector basics'],
          },
          {
            name: 'Pardot Consultant',
            href: '/certifications/pardot-consultant',
            badge: 'Take Second',
            badgeColor: 'bg-salesforce-blue/10 text-salesforce-dark',
            fee: '$200', questions: '60', time: '105 min', passing: '~65%',
            level: 'Strategic — architecture and consulting',
            best: 'Salesforce consulting partners, senior marketing ops architects, solution architects',
            skills: ['Multi-business-unit Pardot architecture', 'Implementation strategy and requirements gathering', 'Complex connector sync troubleshooting', 'Data migration and cleansing strategy', 'Governance and change management'],
          },
        ].map((cert) => (
          <div key={cert.name} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-lg font-bold text-gray-900">{cert.name}</h2>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${cert.badgeColor}`}>{cert.badge}</span>
            </div>
            <div className="grid grid-cols-4 gap-2 mb-4">
              {[{ l: 'Fee', v: cert.fee }, { l: 'Questions', v: cert.questions }, { l: 'Time', v: cert.time }, { l: 'Pass', v: cert.passing }].map((s) => (
                <div key={s.l} className="text-center bg-gray-50 rounded-lg p-2">
                  <div className="font-bold text-salesforce-dark text-xs">{s.v}</div>
                  <div className="text-xs text-gray-600">{s.l}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mb-1"><strong>Level:</strong> {cert.level}</p>
            <p className="text-sm text-gray-600 mb-3"><strong>Best for:</strong> {cert.best}</p>
            <ul className="space-y-1 mb-4">
              {cert.skills.map((s) => (
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
                <th scope="col" className="text-left py-2 pr-4 text-salesforce-blue font-medium">Pardot Specialist</th>
                <th scope="col" className="text-left py-2 text-salesforce-blue font-medium">Pardot Consultant</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { aspect: 'Focus', s: 'Execution & daily use', c: 'Strategy & architecture' },
                { aspect: 'Time limit', s: '90 minutes', c: '105 minutes' },
                { aspect: 'Question style', s: 'Feature-based scenarios', c: 'Client consulting scenarios' },
                { aspect: 'Multi-BU tested?', s: 'Basic concepts', c: 'Advanced architecture' },
                { aspect: 'Connector depth', s: 'Standard sync knowledge', c: 'Complex troubleshooting' },
                { aspect: 'Fee', s: '$200', c: '$200' },
                { aspect: 'Recommended prior cert', s: 'None required', c: 'Pardot Specialist + ADM-201' },
                { aspect: 'Avg Salary', s: '$70–95k (US)', c: '$85–115k (US)' },
              ].map((row) => (
                <tr key={row.aspect}>
                  <td className="py-2 pr-4 text-gray-600">{row.aspect}</td>
                  <td className="py-2 pr-4 text-gray-900">{row.s}</td>
                  <td className="py-2 text-gray-900">{row.c}</td>
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">Decision Matrix: Pardot Specialist or Pardot Consultant?</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full text-sm text-left border-collapse">
            <thead><tr className="border-b-2 border-gray-200">
              <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Your Situation</th>
              <th scope="col" className="py-2.5 font-semibold text-emerald-700">Choose This Cert</th>
            </tr></thead>
            <tbody className="text-gray-700 divide-y divide-gray-100">
              <tr><td className="py-2.5 pr-4">Day-to-day Pardot user — running campaigns, managing prospects, using Engagement Studio</td><td className="py-2.5 font-semibold text-salesforce-blue">Pardot Specialist</td></tr>
              <tr><td className="py-2.5 pr-4">Implementing Pardot for clients or designing the full marketing automation architecture</td><td className="py-2.5 font-semibold text-purple-700">Pardot Consultant</td></tr>
              <tr><td className="py-2.5 pr-4">New to Pardot/MCAE — no prior certification</td><td className="py-2.5 font-semibold text-salesforce-blue">Specialist first — Consultant builds on Specialist knowledge</td></tr>
              <tr><td className="py-2.5 pr-4">Consultant or agency delivering Pardot implementations</td><td className="py-2.5 font-semibold text-purple-700">Pardot Consultant — required for partner-level credibility</td></tr>
              <tr><td className="py-2.5 pr-4">Both — what order?</td><td className="py-2.5 font-semibold text-gray-700">Specialist first, then Consultant after 6+ months of hands-on use</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <RelatedGuides links={getRelatedGuides('pardot-specialist-vs-pardot-consultant')} />

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Start with Pardot Specialist</h2>
        <p className="text-white mb-6">Free practice questions for both Pardot certifications.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/certifications/pardot-specialist" className="inline-flex items-center px-5 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm">
            Pardot Specialist Practice
          </Link>
          <Link href="/certifications/pardot-consultant" className="inline-flex items-center px-5 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
            Pardot Consultant Practice
          </Link>
        </div>
      </div>
    </div>
  )
}
