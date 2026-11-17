import type { Metadata } from 'next'
import Link from '@/components/AppLink'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import CredentialStatusNotice from '@/components/CredentialStatusNotice'
import { getPublishedExamFacts } from '@/lib/cert-seo-data'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import WhichFirstBlock from '@/components/WhichFirstBlock'
import RelatedComparisons from '@/components/RelatedComparisons'
import LastUpdated from '@/components/LastUpdated'



const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `Pardot Specialist vs Pardot Consultant (${RELEASE_CURRENT})`
const pageDescription = `Compare Pardot Specialist and Consultant by fees, difficulty, and tested skills to choose your Salesforce marketing credential.`
export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/pardot-specialist-vs-pardot-consultant`,
    languages: { 'en-US': `${siteUrl}/pardot-specialist-vs-pardot-consultant`, 'x-default': `${siteUrl}/pardot-specialist-vs-pardot-consultant` },
  },
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
}

/**
 * Exam facts from the certification registry in cert-seo-data.ts and the
 * closure banner from credential-status.ts. Account Engagement (Pardot)
 * Consultant closed on 31 August 2026, so this page can recommend Specialist
 * as the next exam but must not present Consultant as the step after it.
 */
function examFacts(slug: string) {
  const f = getPublishedExamFacts(slug)
  if (!f) throw new Error(`No published exam facts for ${slug}`)
  return f
}

const specialist = examFacts('pardot-specialist')
const consultant = examFacts('pardot-consultant')

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Certification Comparison', url: '/certification-comparison' },
  { name: 'Pardot Specialist vs Pardot Consultant', url: '/pardot-specialist-vs-pardot-consultant' },
]

const faqItems = [
  {
    question: 'What is the difference between Pardot Specialist and Pardot Consultant?',
    answer: 'Pardot Specialist focuses on hands-on work such as lead scoring, emails, landing pages, Engagement Studio, and prospect management. Pardot Consultant focuses on planning and advising, including multi-business-unit design, implementation choices, sync problems, and governance.',
  },
  {
    question: 'Should I take Pardot Specialist before Pardot Consultant?',
    answer: 'Specialist is the only one of the two you can take: Pardot Consultant closed on August 31, 2026. It was always strongly recommended first, because Consultant assumed a strong grasp of Pardot features and added consulting and architecture topics. Candidates who skip Specialist may find the Consultant exam harder.',
  },
  {
    question: 'Which Pardot certification has more job market value?',
    answer: 'Pardot Specialist, because it is the only one of the two still awarded. Pardot Consultant carried more weight for consulting and senior marketing operations roles, and partner consulting firms treated it as a baseline, but it closed on August 31, 2026 and retires on February 1, 2027. Specialist covers the entry-level marketing automation skills most in-house marketing roles ask for.',
  },
  {
    question: 'What is the Pardot Consultant exam format?',
    answer: 'Account Engagement Consultant closed to new registrations on July 24, 2026 and the last sitting was August 31, 2026, so this is the published format rather than a bookable one: 60 questions, a 105-minute limit, a 68% passing score, and a $200 fee. Its scenarios ask you to choose a Pardot setup or approach for a business need. Topics include Pardot features, requirements gathering, solution design, data migration, and implementation strategy.',
  },
  {
    question: 'Do I need Salesforce Admin (ADM-201) before Pardot Consultant?',
    answer: 'ADM-201 is not a formal prerequisite, but it is strongly recommended. The Pardot Consultant exam covers Salesforce integration, including connector sync, campaign alignment, lead routing, and Salesforce Engage. Familiarity with leads, contacts, and campaigns helps with these topics.',
  },
]

export default function PardotSpecialistVsPardotConsultantPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/pardot-specialist-vs-pardot-consultant" breadcrumbItems={breadcrumbItems} faqItems={faqItems} aboutEntities={['/certifications/pardot-specialist', '/certifications/pardot-consultant']} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Comparison</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Pardot Specialist vs Pardot Consultant ({RELEASE_CURRENT})
        </h1>
        <LastUpdated />
        <p className="text-lg text-gray-600">
          Both credentials cover Account Engagement, but at different levels. Specialist is the one you can still book, and it covers hands-on platform work. The Consultant exam closed on 31 August 2026, so its outline is now a description of implementation and advisory skills rather than a credential to plan for.
        </p>
      </div>

      <CredentialStatusNotice slug="pardot-consultant" />

      <ContentPageAuthor />
      <WhichFirstBlock
        certA={{
          name: "Pardot Specialist",
          certSlug: "pardot-specialist",
          examTipsSlug: "certifications/pardot-specialist",
          conditions: [
          "You are new to Account Engagement (formerly Pardot)",
          "You work in a B2B marketing role and want a foundational credential",
          "You manage email campaigns, automation rules, or lead scoring",
          "You are building toward the Pardot Consultant certification",
          ],
        }}
        certB={{
          name: "Pardot Consultant",
          certSlug: "pardot-consultant",
          unavailable: "exam closed August 2026",
          conditions: [
          "Designing and implementing full Account Engagement solutions for clients",
          "Multi-business-unit architecture and complex connector troubleshooting",
          "Implementation strategy, data migration, and governance",
          "Credential retires 1 February 2027",
          ],
        }}
        recommendation={{
          certName: "Pardot Specialist",
          certSlug: "pardot-specialist",
          examTipsSlug: "certifications/pardot-specialist",
          reason: "Pardot Specialist is the Account Engagement credential Salesforce still awards, so it is the one to sit. The progression this page used to describe no longer exists: Consultant registration closed on 24 July 2026, 31 August 2026 was the last sitting, and the credential retires on 1 February 2027. For advisory work beyond Specialist, Salesforce points candidates to Marketing Cloud Next Consultant (MC-Con-201).",
          
        }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {[
          {
            name: 'Pardot Specialist',
            href: '/certifications/pardot-specialist',
            badge: 'Take this one',
            badgeColor: 'bg-green-100 text-green-800',
            fee: specialist.fee, questions: String(specialist.questions), time: specialist.duration, passing: specialist.passingScore,
            level: 'Practitioner, hands-on execution',
            best: 'Marketing automation specialists, email marketers, marketing ops professionals',
            skills: ['Lead scoring and grading models', 'Engagement Studio programs', 'Forms, landing pages, and automation rules', 'Email marketing and deliverability', 'Pardot-Salesforce connector basics'],
          },
          {
            name: 'Pardot Consultant',
            href: '/certifications/pardot-consultant',
            badge: 'Exam closed August 2026',
            badgeColor: 'bg-amber-100 text-amber-900',
            fee: consultant.fee, questions: String(consultant.questions), time: consultant.duration, passing: consultant.passingScore,
            level: 'Strategic, architecture and consulting',
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">How the Credentials Differ</h2>
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
                { aspect: 'Bookable now?', s: 'Yes', c: 'No, exam closed 31 August 2026; credential retires 1 February 2027' },
                { aspect: 'Time limit', s: specialist.duration, c: consultant.duration },
                { aspect: 'Question style', s: 'Feature-based scenarios', c: 'Client consulting scenarios' },
                { aspect: 'Multi-BU tested?', s: 'Basic concepts', c: 'Advanced architecture' },
                { aspect: 'Connector depth', s: 'Standard sync knowledge', c: 'Complex troubleshooting' },
                { aspect: 'Fee', s: specialist.fee, c: consultant.fee },
                { aspect: 'Recommended prior cert', s: 'None required', c: 'Pardot Specialist + ADM-201, when the exam was open' },
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">Choose Between Pardot Specialist and Pardot Consultant</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full text-sm text-left border-collapse">
            <thead><tr className="border-b-2 border-gray-200">
              <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Your Situation</th>
              <th scope="col" className="py-2.5 font-semibold text-emerald-700">Choose This Cert</th>
            </tr></thead>
            <tbody className="text-gray-700 divide-y divide-gray-100">
              <tr><td className="py-2.5 pr-4">Day-to-day Pardot user, running campaigns, managing prospects, using Engagement Studio</td><td className="py-2.5 font-semibold text-salesforce-blue">Pardot Specialist</td></tr>
              <tr><td className="py-2.5 pr-4">Implementing Pardot for clients or designing the full marketing automation architecture</td><td className="py-2.5 font-semibold text-purple-700">Marketing Cloud Next Consultant (MC-Con-201); the MCAE Consultant exam closed</td></tr>
              <tr><td className="py-2.5 pr-4">New to Pardot/MCAE, no prior certification</td><td className="py-2.5 font-semibold text-salesforce-blue">Pardot Specialist</td></tr>
              <tr><td className="py-2.5 pr-4">Consultant or agency delivering Pardot implementations</td><td className="py-2.5 font-semibold text-purple-700">Pardot Specialist now, then Marketing Cloud Next Consultant for advisory depth</td></tr>
              <tr><td className="py-2.5 pr-4">Already hold Pardot Consultant</td><td className="py-2.5 font-semibold text-gray-700">You keep it, marked Retired from 1 February 2027, with no maintenance required</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <RelatedGuides links={getRelatedGuides('pardot-specialist-vs-pardot-consultant')} />

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Start with Pardot Specialist</h2>
        <p className="text-white mb-6">Pardot Specialist is the bookable exam. The Consultant bank stays up as study material for its closed outline.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/certifications/pardot-specialist" className="inline-flex items-center px-5 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm">
            Pardot Specialist Practice
          </Link>
          <Link href="/certifications/pardot-consultant" className="inline-flex items-center px-5 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
            Pardot Consultant Practice (closed exam)
          </Link>
        </div>
      </div>
      <RelatedComparisons
        links={[
          { slug: "sales-cloud-vs-service-cloud", label: "Sales Cloud vs Service Cloud" },
          { slug: "marketing-cloud-admin-vs-developer", label: "Marketing Cloud Admin vs Developer" },
          { slug: "cpq-admin-vs-cpq-billing-ap", label: "CPQ Admin vs CPQ Billing AP" },
        ]}
      />
    </div>
  )
}
