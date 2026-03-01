import Link from 'next/link'
import { Award, ArrowRight } from 'lucide-react'
import { Metadata } from 'next'
import { CERTIFICATION_CATEGORIES } from '@/lib/certifications-data'
import { getWebPageJsonLd, getBreadcrumbListJsonLd, getArticleJsonLd, getFaqPageJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const indexTitle = `All Salesforce Certifications (${RELEASE_CURRENT}) | Free Practice`
const indexDescription =
  `Browse 90+ Salesforce certifications by role: ${RELEASE_CURRENT} weightage, free practice, study guides. Find your cert path.`
const ogImageUrl = `${baseUrl}/og?t=${encodeURIComponent(indexTitle)}`

export const metadata: Metadata = {
  title: { absolute: indexTitle },
  description: indexDescription,
  alternates: {
    canonical: `${baseUrl}/certifications`,
  },
  openGraph: {
    title: indexTitle,
    description: indexDescription,
    type: 'website',
    url: `${baseUrl}/certifications`,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'All Salesforce Certifications - Practice Questions & Study Guides',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: indexTitle,
    description: indexDescription,
    images: [{ url: ogImageUrl, alt: indexTitle }],
  },
}

const certsBreadcrumb: { name: string; url: string }[] = [
  { name: 'Home', url: '/' },
  { name: 'All Certifications', url: '/certifications' },
]

const faqItems = [
  {
    question: 'How many Salesforce certifications are there?',
    answer: `Salesforce offers 40+ certification credentials plus 50+ Accredited Professional (AP) designations, for a total of more than 90 credential types. They are organised across eight tracks: Administrator, Developer, Consultant, Architect, Marketing Cloud, Commerce Cloud, MuleSoft, Tableau, and Designer. Salesforce releases updated exam outlines three times per year (aligned to Spring, Summer, and Winter releases) — the current release is ${RELEASE_CURRENT}.`,
  },
  {
    question: 'Which Salesforce certification should I get first?',
    answer: 'For most people, Salesforce Administrator (ADM-201) is the recommended starting point. It covers the core platform — objects, security, automation, reports — and is a prerequisite or assumed knowledge for most Consultant and Architect certifications. If you are a developer, Platform Developer I (PD1) is the developer equivalent entry point. If you are already working on a specific product (e.g., Marketing Cloud, MuleSoft), start with the foundations exam for that product.',
  },
  {
    question: 'How much do Salesforce certifications cost?',
    answer: 'Most Salesforce exams cost $200 (full credentials) or $150 (Accredited Professional exams). Foundational-level exams (AI Associate, Platform Foundations, Sales Foundations, MuleSoft Integration Foundations) cost $75. Tableau certifications cost $250. The CTA pathway involves $400 for the evaluation exam and $3,000 for the Review Board. Retakes cost $100 for most exams. See the full fee table at our Salesforce certification cost guide.',
  },
  {
    question: 'How long does it take to get Salesforce certified?',
    answer: 'Study time varies by cert and experience. Administrator (ADM-201): 4–6 weeks for candidates with some Salesforce exposure, 8–10 weeks from scratch. Platform Developer I: 6–8 weeks for developers with coding experience. Consultant-level certs (Sales Cloud, Service Cloud): 6–10 weeks with implementation experience. Architect-level certs: 10–16 weeks each. The fastest path is to work through the official Trailhead Trailmix for your target cert combined with timed practice tests.',
  },
  {
    question: 'Are Salesforce certifications worth it in Winter\'s 26?',
    answer: 'Yes. Salesforce certified professionals earn 20–35% higher salaries than their non-certified peers, according to Salesforce ecosystem salary surveys. Administrator certified professionals earn an average of $90,000–$110,000 in the US; architects earn $150,000–$200,000+. Beyond salary, certifications are often a hiring requirement at Salesforce consulting partners. With Agentforce and AI capabilities expanding the platform in Winter \'26, Data Cloud and Agentforce Specialist certifications are seeing particularly strong job market demand.',
  },
]

const topCerts = [
  { name: 'Salesforce Administrator', href: '/certifications/administrator', desc: 'The most popular entry-point cert. Covers core platform administration, automation, and reporting.' },
  { name: 'Platform Developer I', href: '/certifications/developer-1', desc: 'Entry-level developer cert. Tests Apex, SOQL, Visualforce, and Lightning Web Component basics.' },
  { name: 'Agentforce Specialist', href: '/certifications/agentforce-specialist', desc: 'The new AI certification. Tests Agentforce Topics, Actions, and prompt template configuration.' },
  { name: 'AI Associate', href: '/certifications/ai-associate', desc: 'Foundational AI cert. 40 questions, $75 fee. Tests AI concepts, ethics, and Salesforce AI features.' },
  { name: 'App Builder', href: '/certifications/app-builder', desc: 'Builds on Admin knowledge. Tests Lightning App Builder, page layouts, and declarative automation.' },
  { name: 'Service Cloud Consultant', href: '/certifications/service-cloud', desc: 'Consultant-level cert for Service Cloud. Tests omni-channel, entitlements, and case management.' },
  { name: 'Sales Cloud Consultant', href: '/certifications/sales-cloud', desc: 'Consultant-level cert for Sales Cloud. Tests leads, opportunities, forecasting, and territory management.' },
  { name: 'Data Cloud Consultant', href: '/certifications/data-cloud-consultant', desc: 'Covers Salesforce Data Cloud data unification, identity resolution, segmentation, and AI activation.' },
]

export default function CertificationsIndexPage() {
  const webPageJsonLd = getWebPageJsonLd({
    name: indexTitle,
    description: indexDescription,
    path: '/certifications',
    breadcrumbItems: certsBreadcrumb,
  })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(certsBreadcrumb)
  const articleJsonLd = getArticleJsonLd({
    headline: indexTitle,
    description: indexDescription,
    path: '/certifications',
  })
  const faqJsonLd = getFaqPageJsonLd(faqItems)

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `All Salesforce Certifications (${RELEASE_CURRENT})`,
    description: indexDescription,
    numberOfItems: CERTIFICATION_CATEGORIES.length,
    itemListElement: CERTIFICATION_CATEGORIES.map((cat, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `${cat.name} Certifications`,
      url: `${baseUrl}/certifications/role/${cat.slug}`,
    })),
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />

      <header className="text-center mb-10">
        <p className="inline-flex items-center rounded-full bg-salesforce-blue/10 px-3 py-1 text-sm font-medium text-salesforce-blue mb-4">
          Updated for {RELEASE_CURRENT}
        </p>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">All Salesforce Certifications ({RELEASE_CURRENT})</h1>
        <p className="text-xl text-gray-600 mb-3 max-w-3xl mx-auto">
          Salesforce offers 90+ credentials across Administrator, Developer, Consultant, Architect, Marketing Cloud, MuleSoft, Tableau, and Designer tracks. Every certification page on Trailblaze Prep includes {RELEASE_CURRENT} exam weightage, free practice questions, and a study plan.
        </p>
        <p className="text-gray-600 max-w-3xl mx-auto">
          New to Salesforce? Start with <Link href="/certifications/administrator" className="text-salesforce-blue hover:underline font-medium">Administrator (ADM-201)</Link>. Already an admin? Progress to <Link href="/certifications/app-builder" className="text-salesforce-blue hover:underline font-medium">App Builder</Link> or a <Link href="/consultant-certification-path" className="text-salesforce-blue hover:underline font-medium">Consultant track</Link>. Working in AI? The <Link href="/certifications/agentforce-specialist" className="text-salesforce-blue hover:underline font-medium">Agentforce Specialist</Link> and <Link href="/certifications/ai-associate" className="text-salesforce-blue hover:underline font-medium">AI Associate</Link> certifications are the highest-demand credentials in {RELEASE_CURRENT}.
        </p>
      </header>

      {/* Most Popular Certifications */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-5">Most Popular Salesforce Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {topCerts.map((cert) => (
            <Link
              key={cert.href}
              href={cert.href}
              className="bg-white rounded-xl border border-gray-100 p-4 hover:border-salesforce-blue/50 hover:shadow-md transition-all group"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-semibold text-gray-900 group-hover:text-salesforce-blue transition-colors">{cert.name}</p>
                  <p className="text-sm text-gray-500 mt-1">{cert.desc}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-salesforce-blue flex-shrink-0 mt-1 transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Browse by Role */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Browse Certifications by Role</h2>
        <p className="text-gray-600 mb-5 text-sm">Each role page lists all certifications in that track with exam details, difficulty ratings, and direct links to practice questions.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATION_CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={`/certifications/role/${category.slug}`}
              className="bg-white rounded-xl shadow-sm p-6 flex items-center justify-between group border border-gray-100 hover:border-salesforce-blue/50 transition-all duration-200"
              aria-label={`Browse ${category.name} certifications`}
            >
              <div className="flex items-center">
                <Award className="h-10 w-10 text-salesforce-blue mr-4" aria-label={`${category.name} certification category icon`} />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-salesforce-blue transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {category.items.length} certification{category.items.length !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-salesforce-blue group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </section>

      {/* Certification Tracks Overview */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Salesforce Certification Tracks — What to Know</h2>
        <div className="space-y-3 text-sm text-gray-700">
          <p><strong className="text-gray-900">Administrator track:</strong> <Link href="/certifications/administrator" className="text-salesforce-blue hover:underline">Administrator (ADM-201)</Link>, <Link href="/certifications/advanced-administrator" className="text-salesforce-blue hover:underline">Advanced Administrator</Link>, <Link href="/certifications/app-builder" className="text-salesforce-blue hover:underline">Platform App Builder</Link>, and Accredited Professional specialisations. Best starting point for non-developers entering the Salesforce ecosystem.</p>
          <p><strong className="text-gray-900">Developer track:</strong> <Link href="/certifications/developer-1" className="text-salesforce-blue hover:underline">Platform Developer I (PD1)</Link>, <Link href="/certifications/developer-2" className="text-salesforce-blue hover:underline">Platform Developer II (PD2)</Link>, <Link href="/certifications/javascript-developer-i" className="text-salesforce-blue hover:underline">JavaScript Developer I</Link>, and <Link href="/certifications/omnistudio-developer" className="text-salesforce-blue hover:underline">OmniStudio Developer</Link>. Best for software engineers building on the Salesforce platform.</p>
          <p><strong className="text-gray-900">Consultant track:</strong> <Link href="/certifications/sales-cloud" className="text-salesforce-blue hover:underline">Sales Cloud</Link>, <Link href="/certifications/service-cloud" className="text-salesforce-blue hover:underline">Service Cloud</Link>, <Link href="/certifications/experience-cloud" className="text-salesforce-blue hover:underline">Experience Cloud</Link>, <Link href="/certifications/marketing-cloud-engagement-admin" className="text-salesforce-blue hover:underline">Marketing Cloud</Link>, and industry-specific credentials. Requires ADM-201 knowledge and real implementation experience. See the full <Link href="/consultant-certification-path" className="text-salesforce-blue hover:underline">Consultant certification path</Link>.</p>
          <p><strong className="text-gray-900">Architect track:</strong> Application Architect (4 exams), System Architect (3 exams), and the <Link href="/certifications/technical-architect" className="text-salesforce-blue hover:underline">Certified Technical Architect (CTA)</Link> at the pinnacle. The architect path is the longest and most demanding in the ecosystem. See the full <Link href="/architect-certification-path" className="text-salesforce-blue hover:underline">Architect certification path</Link>.</p>
          <p><strong className="text-gray-900">AI &amp; Data track:</strong> <Link href="/certifications/ai-associate" className="text-salesforce-blue hover:underline">AI Associate</Link> (foundational, $75), <Link href="/certifications/agentforce-specialist" className="text-salesforce-blue hover:underline">Agentforce Specialist</Link>, and <Link href="/certifications/data-cloud-consultant" className="text-salesforce-blue hover:underline">Data Cloud Consultant</Link> are the fastest-growing certifications in {RELEASE_CURRENT} with the strongest job market demand.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="rounded-xl border border-gray-100 bg-white p-6 mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions About Salesforce Certifications</h2>
        <dl className="space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
              <dd className="text-sm text-gray-700">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* CTA */}
      <div className="bg-salesforce-blue/10 rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Find Your Certification Path</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Not sure which cert to pursue next? Use our role-based paths to see the recommended order and prerequisites.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/salesforce-certifications-list"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
          >
            View Complete Cert List
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/admin-certification-path"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-all duration-200"
          >
            Admin Path
          </Link>
          <Link
            href="/developer-certification-path"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-all duration-200"
          >
            Developer Path
          </Link>
          <Link
            href="/salesforce-certification-cost"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-all duration-200"
          >
            Exam Fees &amp; Costs
          </Link>
        </div>
      </div>
    </div>
  )
}
