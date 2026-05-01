import Link from 'next/link'
import type { Metadata } from 'next'
import {
  Shield,
  Code,
  Mail,
  Briefcase,
  Award,
  ArrowRight,
  BookOpen,
  CheckCircle,
  TrendingUp,
  Layout,
  Target,
  Palette,
  GraduationCap,
  BadgeCheck,
  BarChart3,
  Sparkles,
} from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { getWebPageJsonLd, getBreadcrumbListJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

export const metadata: Metadata = {
  alternates: { canonical: siteUrl },
}

/** Role slug for "View all" link: /certifications/role/[slug] */
const certificationCategories = [
  {
    slug: 'associate',
    title: 'Associate',
    description: 'Foundational credentials for the Customer 360 Platform',
    icon: GraduationCap,
    color: 'from-slate-500 to-slate-700',
    certifications: [
      { name: 'Platform Foundations', href: '/certifications/platform-foundations' },
      { name: 'AI Associate', href: '/certifications/ai-associate' },
      { name: 'Marketing Cloud Engagement Foundations', href: '/certifications/marketing-cloud-engagement-foundations' },
      { name: 'MuleSoft Integration Foundations', href: '/certifications/mulesoft-integration-foundations' },
    ],
  },
  {
    slug: 'administrator',
    title: 'Administrator',
    description: 'Master Salesforce administration, security, and automation',
    icon: Shield,
    color: 'from-blue-500 to-blue-700',
    certifications: [
      { name: 'Platform Administrator (ADM-201)', href: '/certifications/administrator' },
      { name: 'Platform Administrator II (ADM-211)', href: '/certifications/advanced-administrator' },
      { name: 'Platform App Builder', href: '/certifications/app-builder' },
      { name: 'Agentforce Specialist', href: '/certifications/agentforce-specialist' },
      { name: 'Business Analyst', href: '/certifications/business-analyst' },
      { name: 'CPQ Administrator', href: '/certifications/cpq-administrator' },
      { name: 'Marketing Cloud Engagement Admin', href: '/certifications/marketing-cloud-engagement-admin' },
      { name: 'Slack Administrator', href: '/certifications/slack-administrator' },
      { name: 'Platform Administrator Practice Test', href: '/certifications/administrator-practice-test' },
    ],
  },
  {
    slug: 'developer',
    title: 'Developer',
    description: 'Build custom applications with Apex, LWC, MuleSoft, and more',
    icon: Code,
    color: 'from-purple-500 to-purple-700',
    certifications: [
      { name: 'Platform App Builder', href: '/certifications/app-builder' },
      { name: 'Platform Developer I & II', href: '/certifications/developer-1' },
      { name: 'JavaScript Developer I', href: '/certifications/javascript-developer-i' },
      { name: 'B2C Commerce Developer', href: '/certifications/b2c-commerce-developer' },
      { name: 'Industries CPQ Developer', href: '/certifications/industries-cpq-developer' },
      { name: 'Marketing Cloud Engagement Developer', href: '/certifications/marketing-cloud-engagement-developer' },
      { name: 'MuleSoft Developer I & II', href: '/certifications/mulesoft-developer-i' },
      { name: 'MuleSoft Hyperautomation', href: '/certifications/mulesoft-hyperautomation-developer' },
      { name: 'OmniStudio Developer', href: '/certifications/omnistudio-developer' },
      { name: 'Slack Developer', href: '/certifications/slack-developer' },
    ],
  },
  {
    slug: 'consultant',
    title: 'Consultant',
    description: 'Design and implement solutions across Sales, Service, and industry clouds',
    icon: Briefcase,
    color: 'from-green-500 to-green-700',
    certifications: [
      { name: 'Sales Cloud Consultant', href: '/certifications/sales-cloud' },
      { name: 'Service Cloud Consultant', href: '/certifications/service-cloud' },
      { name: 'Experience Cloud Consultant', href: '/certifications/experience-cloud' },
      { name: 'Field Service Consultant', href: '/certifications/field-service' },
      { name: 'Data Cloud Consultant', href: '/certifications/data-360-consultant' },
      { name: 'CRM Analytics & Einstein Discovery', href: '/certifications/crm-analytics-einstein-discovery-consultant' },
      { name: 'Education Cloud Consultant', href: '/certifications/education-cloud-consultant' },
      { name: 'Revenue Cloud Consultant', href: '/certifications/revenue-cloud-consultant' },
      { name: 'Nonprofit Cloud & NPSP', href: '/certifications/nonprofit-cloud' },
      { name: 'OmniStudio Consultant', href: '/certifications/omnistudio-consultant' },
      { name: 'Slack Consultant', href: '/certifications/slack-consultant' },
    ],
  },
  {
    slug: 'marketing',
    title: 'Marketing',
    description: 'Digital marketing automation and customer engagement',
    icon: Mail,
    color: 'from-orange-500 to-orange-700',
    certifications: [
      { name: 'Marketing Cloud Email Specialist', href: '/certifications/email-specialist' },
      { name: 'Marketing Cloud Engagement Admin', href: '/certifications/marketing-cloud-engagement-admin' },
      { name: 'Marketing Cloud Engagement Consultant', href: '/certifications/marketing-cloud-consultant' },
      { name: 'Marketing Cloud Engagement Developer', href: '/certifications/marketing-cloud-engagement-developer' },
      { name: 'Account Engagement (Pardot) Specialist', href: '/certifications/pardot-specialist' },
      { name: 'Account Engagement (Pardot) Consultant', href: '/certifications/pardot-consultant' },
      { name: 'Marketing Cloud Email Specialist Practice Test', href: '/certifications/email-specialist-practice-test' },
    ],
  },
  {
    slug: 'architect',
    title: 'Architect',
    description: 'Design secure, scalable, high-performing solutions on the platform',
    icon: Layout,
    color: 'from-indigo-500 to-indigo-700',
    certifications: [
      { name: 'Application Architect', href: '/certifications/application-architect' },
      { name: 'Data Architect', href: '/certifications/data-architect' },
      { name: 'Integration Architect', href: '/certifications/integration-architect' },
      { name: 'Sharing & Visibility Architect', href: '/certifications/sharing-visibility-architect' },
      { name: 'System Architect', href: '/certifications/system-architect' },
      { name: 'Identity & Access Mgmt Architect', href: '/certifications/identity-access-management-architect' },
      { name: 'Dev Lifecycle & Deployment Architect', href: '/certifications/dev-lifecycle-deployment-architect' },
      { name: 'Technical Architect (CTA)', href: '/certifications/technical-architect' },
      { name: 'CTA - Architect Evaluation', href: '/certifications/technical-architect-evaluation' },
      { name: 'CTA - Architect Review Board', href: '/certifications/technical-architect-review-board' },
    ],
  },
  {
    slug: 'accredited-professional',
    title: 'Accredited Professional',
    description: 'Product and industry credentials for Salesforce Partners',
    icon: BadgeCheck,
    color: 'from-violet-500 to-violet-700',
    certifications: [
      { name: 'Advanced Field Service AP', href: '/certifications/advanced-field-service-ap' },
      { name: 'B2B Commerce Admin & Developer AP', href: '/certifications/b2b-commerce-admin-ap' },
      { name: 'Communications Cloud AP', href: '/certifications/communications-cloud-ap' },
      { name: 'Consumer Goods Cloud & TPM AP', href: '/certifications/consumer-goods-cloud-ap' },
      { name: 'Contact Center AP', href: '/certifications/contact-center-ap' },
      { name: 'CPQ and Billing AP', href: '/certifications/cpq-billing-ap' },
      { name: 'Energy & Utilities AP', href: '/certifications/energy-utilities-ap' },
      { name: 'Financial Services & Health Cloud AP', href: '/certifications/financial-services-cloud-ap' },
      { name: 'Heroku Developer AP', href: '/certifications/heroku-developer-ap' },
      { name: 'Loyalty, Manufacturing, Media Cloud AP', href: '/certifications/loyalty-management-ap' },
      { name: 'Marketing Cloud (Cross Channel, Intelligence, Personalization) AP', href: '/certifications/marketing-cloud-advanced-cross-channel-ap' },
      { name: 'Net Zero Cloud AP', href: '/certifications/net-zero-cloud-ap' },
      { name: 'Order Management Admin & Developer AP', href: '/certifications/order-management-admin-ap' },
      { name: 'Process Automation AP', href: '/certifications/process-automation-ap' },
      { name: 'Public Sector Solutions AP', href: '/certifications/public-sector-solutions-ap' },
    ],
  },
  {
    slug: 'sales',
    title: 'Sales Professional',
    description: 'Sales excellence and customer-centric methodology',
    icon: Target,
    color: 'from-amber-500 to-amber-700',
    certifications: [
      { name: 'Certified Sales Foundations', href: '/certifications/sales-foundations' },
    ],
  },
  {
    slug: 'designer',
    title: 'Designer',
    description: 'Human-centered experience strategy and UX design',
    icon: Palette,
    color: 'from-rose-500 to-rose-700',
    certifications: [
      { name: 'Platform Strategy Designer', href: '/certifications/strategy-designer' },
      { name: 'User Experience (UX) Designer', href: '/certifications/ux-designer' },
    ],
  },
  {
    slug: 'tableau',
    title: 'Tableau',
    description: 'Analytics and data visualization with Tableau',
    icon: TrendingUp,
    color: 'from-cyan-500 to-cyan-700',
    certifications: [
      { name: 'Tableau Architect', href: '/certifications/tableau-architect' },
      { name: 'Tableau Consultant', href: '/certifications/tableau-consultant' },
      { name: 'Tableau Data Analyst', href: '/certifications/tableau-data-analyst' },
      { name: 'Tableau Desktop Foundations', href: '/certifications/tableau-desktop-foundations' },
      { name: 'Tableau Server Administrator', href: '/certifications/tableau-server-administrator' },
    ],
  },
]

const faqItems = [
  {
    question: 'How accurate are these practice questions?',
    answer:
      'They are aligned with official Salesforce exam outlines and updated regularly. They test the same concepts you will see on the real exam. Use them to gauge readiness and find gaps.',
  },
  {
    question: 'How often are the questions and study materials updated?',
    answer:
      'We review and update content to match the latest exam blueprints and product changes. When Salesforce changes exams or weightage, we update our section weightage and topics.',
  },
  {
    question: 'What certifications do you cover?',
    answer:
      'We cover all major Salesforce certifications: Associate, Administrator, Developer, Consultant, Marketing, Architect, Accredited Professional, Sales, Designer, and Tableau. Each page has exam weightage, tips, prerequisites, and practice questions.',
  },
  {
    question: 'What makes your materials different from other study resources?',
    answer:
      'We give section-wise exam weightage for every certification so you know where to focus. Each page has exam tips, prerequisites, focus areas, and a study strategy—not just questions. Content is easy to scan.',
  },
  {
    question: 'Do I need hands-on experience before taking a Salesforce certification exam?',
    answer:
      'Yes. Salesforce recommends hands-on experience in a Developer Edition or Trailhead Playground for most certs. Our materials support that practice; they are not a substitute for using the platform.',
  },
]

export default function Home() {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Trailblaze Prep',
    url: siteUrl,
    description:
      'Independent Salesforce certification preparation resource: practice questions, section-wise exam weightage, and study guides for Admin, Developer, Consultant, Architect, and more.',
  }

  const webSiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Trailblaze Prep',
    description:
      'Salesforce certification practice questions, exam weightage by section, and study guides for Admin, Developer, Consultant, Marketing, Architect, and Tableau.',
    url: siteUrl,
    publisher: { '@type': 'Organization', name: 'Trailblaze Prep', url: siteUrl },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${siteUrl}/certifications?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  const homeBreadcrumb = [{ name: 'Home', url: '/' }]
  const webPageJsonLd = getWebPageJsonLd({
    name: 'Salesforce Certification Practice Questions & Study Guides | Trailblaze Prep',
    description:
      'Prepare for every Salesforce certification with practice questions, section-wise exam weightage, and study guides. Admin, Developer, Consultant, Architect & more. Browse by role and start free.',
    path: '/',
    breadcrumbItems: homeBreadcrumb,
  })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(homeBreadcrumb)

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero Section */}
      <section data-lcp-hero className="py-16 sm:py-24 px-4" aria-label="Primary content">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-12 lg:gap-16 items-center">

            {/* Left: heading, lead, CTAs, stats */}
            <div>
              <span className="inline-flex items-center gap-2 bg-salesforce-blue/10 text-salesforce-dark font-semibold text-sm px-4 py-1.5 rounded-full border border-salesforce-blue/20 mb-5">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Updated for {RELEASE_CURRENT}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-5">
                Pass your{' '}
                <span className="hero-gradient-text">Salesforce certification</span>
                {' '}on the first try.
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl mb-8">
                Practice questions, exam weightage, and study guides for every Salesforce certification &mdash; Admin, Developer, Consultant, Architect, Marketing Cloud, MuleSoft, Tableau, and more.
              </p>
              <div className="flex flex-wrap gap-3 mb-9">
                <Link
                  href="/certifications/administrator"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-salesforce-blue text-white rounded-lg font-semibold text-base hover:bg-salesforce-dark transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
                >
                  Start Free ADM-201 Practice Test
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/certifications"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-salesforce-blue rounded-lg font-semibold text-base border border-salesforce-blue/25 hover:bg-salesforce-blue/5 hover:border-salesforce-blue/50 transition-all duration-200 shadow-sm"
                >
                  <BookOpen className="h-4 w-4" aria-hidden="true" />
                  Browse Certifications
                </Link>
              </div>
              <div className="flex gap-8">
                <div>
                  <div className="text-2xl font-bold text-salesforce-dark leading-none">90+</div>
                  <div className="text-sm text-gray-500 mt-1">Certifications</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-salesforce-dark leading-none">4,200+</div>
                  <div className="text-sm text-gray-500 mt-1">Practice Questions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-salesforce-dark leading-none">100%</div>
                  <div className="text-sm text-gray-500 mt-1">Free</div>
                </div>
              </div>
            </div>

            {/* Right: sample practice question card (desktop only) */}
            <div className="hidden lg:block">
              <div className="bg-white border border-gray-100 rounded-3xl p-7 relative overflow-hidden shadow-2xl shadow-gray-200/40">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white to-blue-50/40 pointer-events-none" aria-hidden="true" />
                <div className="relative">
                  <div className="flex justify-between items-center mb-5">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Sample question &middot; ADM-201</span>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">Free</span>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-xl p-5">
                    <div className="flex justify-between text-xs text-gray-500 mb-2.5">
                      <span className="font-mono font-semibold text-salesforce-blue">ADM-201 &middot; Q12</span>
                      <span>Single-select</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-900 leading-snug mb-4">
                      A Sales Manager wants to receive an email when an Opportunity is updated. Which automation should the admin recommend?
                    </p>
                    <div className="space-y-2">
                      <div className="flex gap-2.5 items-start p-3 border border-gray-100 rounded-xl text-sm text-gray-700">
                        <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold flex-shrink-0 text-gray-600" aria-hidden="true">A</span>
                        <span>Approval Process triggered on edit</span>
                      </div>
                      <div className="flex gap-2.5 items-start p-3 border border-emerald-200 rounded-xl text-sm text-emerald-900 bg-emerald-50">
                        <span className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-xs font-bold flex-shrink-0 text-white" aria-hidden="true">B</span>
                        <span>Flow with a Record-Triggered Email Alert</span>
                      </div>
                      <div className="flex gap-2.5 items-start p-3 border border-gray-100 rounded-xl text-sm text-gray-700">
                        <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold flex-shrink-0 text-gray-600" aria-hidden="true">C</span>
                        <span>Validation Rule with custom error message</span>
                      </div>
                      <div className="flex gap-2.5 items-start p-3 border border-gray-100 rounded-xl text-sm text-gray-700">
                        <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold flex-shrink-0 text-gray-600" aria-hidden="true">D</span>
                        <span>Sharing Rule based on owner role</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Popular reads — SEO internal links */}
          <p className="text-sm text-gray-500 mt-10">
            Popular:{' '}
            <Link href="/adm-201-exam-tips" className="underline hover:text-salesforce-dark font-medium">ADM-201 exam tips</Link>
            {' · '}
            <Link href="/adm-201-vs-app-builder" className="underline hover:text-salesforce-dark font-medium">ADM-201 vs App Builder</Link>
            {' · '}
            <Link href="/which-salesforce-certification-first" className="underline hover:text-salesforce-dark font-medium">Which cert first?</Link>
            {' · '}
            <Link href="/how-to-study-for-salesforce-certification" className="underline hover:text-salesforce-dark font-medium">How to study</Link>
            {' · '}
            <Link href="/how-to-become-salesforce-consultant" className="underline hover:text-salesforce-dark font-medium">Become a Consultant</Link>
            {' · '}
            <Link href="/how-to-become-salesforce-developer" className="underline hover:text-salesforce-dark font-medium">Become a Developer</Link>
            {' · '}
            <Link href="/salesforce-admin-vs-developer-career" className="underline hover:text-salesforce-dark font-medium">Admin vs Developer</Link>
            {' · '}
            <Link href="/salesforce-certification-difficulty" className="underline hover:text-salesforce-dark font-medium">Difficulty ranking</Link>
            {' · '}
            <Link href="/ux-designer-vs-strategy-designer" className="underline hover:text-salesforce-dark font-medium">UX vs Strategy Designer</Link>
            {' · '}
            <Link href="/app-builder-vs-developer-i" className="underline hover:text-salesforce-dark font-medium">App Builder vs PD1</Link>
            {' · '}
            <Link href="/business-analyst-study-guide" className="underline hover:text-salesforce-dark font-medium">Business Analyst guide</Link>
            {' · '}
            <Link href="/tableau-data-analyst-study-guide" className="underline hover:text-salesforce-dark font-medium">Tableau Data Analyst</Link>
            {' · '}
            <Link href="/salesforce-certification-validity" className="underline hover:text-salesforce-dark font-medium">Cert validity</Link>
            {' · '}
            <Link href="/field-service-vs-service-cloud-consultant" className="underline hover:text-salesforce-dark font-medium">Field vs Service Cloud</Link>
            {' · '}
            <Link href="/education-cloud-vs-nonprofit-cloud-consultant" className="underline hover:text-salesforce-dark font-medium">Education vs Nonprofit Cloud</Link>
            {' · '}
            <Link href="/cpq-admin-vs-revenue-cloud-consultant" className="underline hover:text-salesforce-dark font-medium">CPQ vs Revenue Cloud</Link>
          </p>
        </div>
      </section>

      {/* Features — Why Trailblaze Prep */}
      <section className="py-20 px-4 bg-gray-50" aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto mb-4">
            <ContentPageAuthor />
          </div>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-semibold text-salesforce-blue uppercase tracking-widest bg-salesforce-blue/10 px-3 py-1.5 rounded-full mb-4">
              Why Trailblaze Prep
            </span>
            <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to pass — in one place.
            </h2>
            <p className="text-lg text-gray-600">
              Each certification page has section weightage, study tips, prerequisites, and practice questions written against the official exam outline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-salesforce-blue/30 card-hover">
              <div className="w-12 h-12 rounded-xl bg-salesforce-blue flex items-center justify-center text-white mb-5 flex-shrink-0">
                <Target className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Section weightage</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Know exactly how each topic is weighted. Spend more time on the 30% sections, less on the 5% ones.</p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-salesforce-blue/30 card-hover">
              <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center text-white mb-5 flex-shrink-0">
                <BookOpen className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Practice questions</h3>
              <p className="text-gray-500 text-sm leading-relaxed">4,200+ questions aligned with official Salesforce exam outlines, each with a written explanation.</p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-salesforce-blue/30 card-hover">
              <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center text-white mb-5 flex-shrink-0">
                <BadgeCheck className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Study guides</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Crisp, exam-focused notes &mdash; no fluff. Skim the night before or read top-to-bottom over a weekend.</p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-salesforce-blue/30 card-hover">
              <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center text-white mb-5 flex-shrink-0">
                <BarChart3 className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Real exam stats</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Question count, passing score, duration, and fee for every cert. Confirmed against current Salesforce docs.</p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-salesforce-blue/30 card-hover">
              <div className="w-12 h-12 rounded-xl bg-salesforce-dark flex items-center justify-center text-white mb-5 flex-shrink-0">
                <TrendingUp className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{RELEASE_CURRENT} ready</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Updated within 30 days of every Salesforce release. We track the changelog so you don&apos;t have to.</p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-salesforce-blue/30 card-hover">
              <div className="w-12 h-12 rounded-xl bg-salesforce-blue flex items-center justify-center text-white mb-5 flex-shrink-0">
                <CheckCircle className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% free, no login</h3>
              <p className="text-gray-500 text-sm leading-relaxed">No paywall, no email gate, no ads. Bookmarked by 60,000+ admins, devs, and consultants.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by role (compact for smaller HTML; full grid on /certifications) */}
      <section className="py-20 px-4" aria-labelledby="browse-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="browse-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Salesforce Certifications by Role
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Choose your path and start preparing with exam weightage, tips, and practice questions.
          </p>
          <ul className="flex flex-wrap justify-center gap-3">
            {certificationCategories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/certifications/role/${category.slug}`}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white border border-gray-200 rounded-lg font-medium text-gray-700 hover:bg-salesforce-blue/5 hover:border-salesforce-blue/50 hover:text-salesforce-dark transition-colors"
                >
                  {category.title}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6">
            <Link href="/certifications" className="font-semibold text-salesforce-blue hover:text-salesforce-dark">
              View all certifications
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ Section (accordion for scanability) */}
      <section className="py-20 px-4 bg-gray-50" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="faq-heading" className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions About Salesforce Certification Study Materials
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-salesforce-dark text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Certified?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Start your preparation today with our proven study materials
          </p>
          <Link
            href="/certifications/administrator"
            className="inline-flex items-center px-8 py-4 bg-white text-salesforce-dark rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Free ADM-201 Practice Test
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
