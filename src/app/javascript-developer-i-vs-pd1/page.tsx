import type { Metadata } from 'next'
import Link from 'next/link'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import RelatedGuides from '@/components/RelatedGuides'
import { getRelatedGuides } from '@/lib/related-guides-data'
import { RELEASE_CURRENT } from '@/lib/release-data'
import ContentPageAuthor from '@/components/ContentPageAuthor'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const pageTitle = `JavaScript Developer I vs Platform Developer I (${RELEASE_CURRENT})`
const pageDescription = `JavaScript Developer I vs Platform Developer I (PD1): which Salesforce developer cert first? Compare exam format, skills, career value.`

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/javascript-developer-i-vs-pd1` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: `${siteUrl}/javascript-developer-i-vs-pd1`,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(pageTitle)}`, alt: pageTitle }],
  },
  keywords: `javascript developer i vs platform developer i, JS dev I vs PD1, salesforce developer certification comparison, which salesforce developer cert first`,
}

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'JavaScript Developer I vs Platform Developer I', url: '/javascript-developer-i-vs-pd1' },
]

const faqItems = [
  {
    question: 'Which should I take first — JavaScript Developer I or Platform Developer I?',
    answer: 'Take Platform Developer I (PD1) first. PD1 is the foundational Salesforce developer certification and is required or recommended before most other developer credentials. It establishes your Apex, SOQL, LWC, and deployment knowledge — the core Salesforce development stack. JavaScript Developer I validates JavaScript language skills specifically and is a complementary credential rather than a prerequisite for other Salesforce paths.',
  },
  {
    question: 'What is the main difference between JavaScript Developer I and Platform Developer I?',
    answer: 'Platform Developer I (PD1) tests Salesforce-platform-specific skills: Apex triggers, Apex classes, SOQL, governor limits, Lightning Web Components within Salesforce, change sets, and SFDX deployment. JavaScript Developer I tests pure JavaScript language skills: ES6+ syntax, closures, Promises, async/await, DOM events, and Jest testing. PD1 is primarily Salesforce-specific; JS Dev I is language-agnostic JavaScript.',
  },
  {
    question: 'Do I need JavaScript knowledge for the Platform Developer I exam?',
    answer: 'Basic JavaScript is helpful for PD1 since Lightning Web Components (LWC) use JavaScript. However, the PD1 exam tests Salesforce LWC concepts (@api, @wire, @track decorators, component communication) rather than deep JavaScript language knowledge. Strong Apex knowledge is more important than JavaScript depth for PD1. JavaScript Developer I is the certification that validates deep JavaScript proficiency.',
  },
  {
    question: 'Can I take both certifications?',
    answer: 'Yes, and many Salesforce developers hold both. PD1 + JavaScript Developer I is a strong combination for full-stack Salesforce developers — PD1 validates your Apex/platform skills, JS Dev I validates your JavaScript/LWC skills. Together they demonstrate both back-end (Apex) and front-end (JavaScript/LWC) Salesforce development competency.',
  },
  {
    question: 'Which certification has more job market demand?',
    answer: 'Platform Developer I (PD1) has significantly more job market demand. PD1 is the foundational developer credential that employers look for first when hiring Salesforce developers. JavaScript Developer I is a valuable secondary credential but is rarely listed as a standalone requirement. For maximum career impact, prioritise PD1, then add JavaScript Developer I as a complementary certification.',
  },
]

export default function JavascriptDeveloperIVsPd1Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ContentPageSchemas headline={pageTitle} description={pageDescription} path="/javascript-developer-i-vs-pd1" breadcrumbItems={breadcrumbItems} faqItems={faqItems} />

      <div data-lcp-header className="mb-10">
        <div className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark text-sm font-semibold px-3 py-1 rounded-full mb-4">
          <span>Comparison</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          JavaScript Developer I vs Platform Developer I ({RELEASE_CURRENT})
        </h1>
        <p className="text-lg text-gray-600">
          Two Salesforce developer certifications — one focused on JavaScript language skills, one on Salesforce platform development. Here&apos;s how to choose.
        </p>
      </div>

      <ContentPageAuthor />

      {/* Quick comparison */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {[
          {
            name: 'JavaScript Developer I',
            href: '/certifications/javascript-developer-i',
            fee: '$200', questions: '60', time: '105 min', passing: '~65%',
            focus: 'Pure JavaScript language skills',
            best: 'Front-end developers, LWC specialists, JS engineers',
            skills: ['ES6+ syntax, closures, classes', 'Promises & async/await', 'DOM events & browser APIs', 'Jest testing framework', 'Node.js basics'],
          },
          {
            name: 'Platform Developer I (PD1)',
            href: '/certifications/developer-1',
            fee: '$200', questions: '60', time: '105 min', passing: '~65%',
            focus: 'Salesforce platform development',
            best: 'Salesforce developers, Apex engineers, full-stack Salesforce devs',
            skills: ['Apex triggers & classes', 'SOQL & SOSL', 'Governor limits', 'Lightning Web Components (Salesforce)', 'Change sets & SFDX deployment'],
          },
        ].map((cert) => (
          <div key={cert.name} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-3">{cert.name}</h2>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[{ l: 'Fee', v: cert.fee }, { l: 'Questions', v: cert.questions }, { l: 'Passing', v: cert.passing }].map((s) => (
                <div key={s.l} className="text-center bg-gray-50 rounded-lg p-2">
                  <div className="font-bold text-salesforce-dark text-sm">{s.v}</div>
                  <div className="text-xs text-gray-500">{s.l}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mb-3"><strong>Focus:</strong> {cert.focus}</p>
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

      {/* Key differences */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Key Differences at a Glance</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th scope="col" className="text-left py-2 pr-4 text-gray-500 font-medium">Aspect</th>
                <th scope="col" className="text-left py-2 pr-4 text-salesforce-blue font-medium">JS Developer I</th>
                <th scope="col" className="text-left py-2 text-salesforce-blue font-medium">Platform Developer I</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { aspect: 'Primary Language', js: 'JavaScript (vanilla)', pd1: 'Apex (+ JavaScript for LWC)' },
                { aspect: 'Salesforce-specific?', js: 'No — pure JS language', pd1: 'Yes — Salesforce platform' },
                { aspect: 'Main skills', js: 'ES6+, async, OOP, DOM, testing', pd1: 'Apex, SOQL, LWC, governor limits' },
                { aspect: 'Prerequisite for?', js: 'Nothing formally', pd1: 'PD2, Architect track' },
                { aspect: 'Job market demand', js: 'Moderate (secondary cert)', pd1: 'Very high (primary cert)' },
                { aspect: 'Recommended order', js: 'Take after PD1', pd1: 'Take first' },
                { aspect: 'Coding required?', js: 'Conceptual + code reading', pd1: 'Conceptual + code reading' },
              ].map((row) => (
                <tr key={row.aspect}>
                  <td className="py-2 pr-4 text-gray-500">{row.aspect}</td>
                  <td className="py-2 pr-4 text-gray-900">{row.js}</td>
                  <td className="py-2 text-gray-900">{row.pd1}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Who should take each */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Take JavaScript Developer I if&hellip;</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2"><span className="text-green-500 font-bold flex-shrink-0 mt-0.5">✓</span>You are a front-end developer wanting Salesforce credentials</li>
            <li className="flex items-start gap-2"><span className="text-green-500 font-bold flex-shrink-0 mt-0.5">✓</span>You already hold PD1 and want to strengthen your JS/LWC credentials</li>
            <li className="flex items-start gap-2"><span className="text-green-500 font-bold flex-shrink-0 mt-0.5">✓</span>You specialise in Lightning Web Component development</li>
            <li className="flex items-start gap-2"><span className="text-green-500 font-bold flex-shrink-0 mt-0.5">✓</span>You come from a JavaScript/Node.js background entering Salesforce</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Take Platform Developer I if&hellip;</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2"><span className="text-green-500 font-bold flex-shrink-0 mt-0.5">✓</span>You are starting a Salesforce developer career</li>
            <li className="flex items-start gap-2"><span className="text-green-500 font-bold flex-shrink-0 mt-0.5">✓</span>You want the credential required for architect and advanced developer paths</li>
            <li className="flex items-start gap-2"><span className="text-green-500 font-bold flex-shrink-0 mt-0.5">✓</span>You write Apex triggers, classes, or any server-side Salesforce code</li>
            <li className="flex items-start gap-2"><span className="text-green-500 font-bold flex-shrink-0 mt-0.5">✓</span>You want maximum job market impact from a single developer credential</li>
          </ul>
        </div>
      </div>

      {/* FAQ */}
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">Decision Matrix: JavaScript Developer I or PD1?</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[500px] w-full text-sm text-left border-collapse">
            <thead><tr className="border-b-2 border-gray-200">
              <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Your Situation</th>
              <th scope="col" className="py-2.5 font-semibold text-emerald-700">Choose This Cert</th>
            </tr></thead>
            <tbody className="text-gray-700 divide-y divide-gray-100">
              <tr><td className="py-2.5 pr-4">Building LWC components and front-end Lightning experience</td><td className="py-2.5 font-semibold text-salesforce-blue">JavaScript Developer I</td></tr>
              <tr><td className="py-2.5 pr-4">Writing Apex triggers, SOQL, DML, or backend business logic</td><td className="py-2.5 font-semibold text-purple-700">PD1 — the core Salesforce developer credential</td></tr>
              <tr><td className="py-2.5 pr-4">Front-end or web developer transitioning into Salesforce</td><td className="py-2.5 font-semibold text-salesforce-blue">JSD1 — your JavaScript skills transfer directly</td></tr>
              <tr><td className="py-2.5 pr-4">Java, C#, or backend developer entering Salesforce</td><td className="py-2.5 font-semibold text-purple-700">PD1 — Apex is closer to Java than JavaScript</td></tr>
              <tr><td className="py-2.5 pr-4">Targeting senior developer or architect track roles</td><td className="py-2.5 font-semibold text-purple-700">PD1 — more widely required for architect pathway</td></tr>
              <tr><td className="py-2.5 pr-4">Both — which first?</td><td className="py-2.5 font-semibold text-gray-700">PD1 first, then JSD1 to round out the developer profile</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <RelatedGuides links={getRelatedGuides('javascript-developer-i-vs-pd1')} />

      <div className="bg-salesforce-blue rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Start Practising Today</h2>
        <p className="text-white mb-6">Free practice questions for both developer certifications.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/certifications/developer-1" className="inline-flex items-center px-5 py-3 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm">
            PD1 Practice Questions
          </Link>
          <Link href="/certifications/javascript-developer-i" className="inline-flex items-center px-5 py-3 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
            JS Dev I Practice
          </Link>
        </div>
      </div>
    </div>
  )
}
