import Link from '@/components/AppLink'
import type { Metadata } from 'next'
import CertificationGrid from '@/components/CertificationGrid'
import { getCertificationGrid } from '@/lib/certification-grid-data'
import { Shield, Code, Mail, Briefcase, ArrowRight, TrendingUp, Layout, Target, Palette, GraduationCap, BadgeCheck } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'
import ContentPageAuthor from '@/components/ContentPageAuthor'
import { getWebPageJsonLd, getBreadcrumbListJsonLd } from '@/lib/schema-data'
import { CERTIFICATION_CATEGORIES } from '@/lib/certifications-data'
import LastUpdated from '@/components/LastUpdated'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'

export const metadata: Metadata = {
  title: { absolute: 'Salesforce Certifications List: Free Practice Tests & Guides' },
  description: 'Browse the complete 2026 Salesforce certification list with free practice questions, study guides, pass marks, exam fees, and prerequisite details by role.',
  alternates: {
    canonical: siteUrl,
    languages: { 'en-US': siteUrl, 'x-default': siteUrl },
  },
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
      { name: 'AI Associate (retired)', href: '/certifications/ai-associate' },
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
      { name: 'Platform Administrator Practice Test', href: '/certifications/administrator' },
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
      { name: 'Agentforce Sales Consultant', href: '/certifications/sales-cloud' },
      { name: 'Agentforce Service Consultant', href: '/certifications/service-cloud' },
      { name: 'Experience Cloud Consultant', href: '/certifications/experience-cloud' },
      { name: 'Agentforce Field Service Consultant', href: '/certifications/field-service' },
      { name: 'Data 360 Consultant', href: '/certifications/data-360-consultant' },
      { name: 'CRM Analytics and Einstein Discovery', href: '/certifications/crm-analytics-einstein-discovery-consultant' },
      { name: 'Education Cloud Consultant', href: '/certifications/education-cloud-consultant' },
      { name: 'Revenue Management Consultant', href: '/certifications/revenue-cloud-consultant' },
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
      { name: 'MC Account Engagement Specialist', href: '/certifications/pardot-specialist' },
      { name: 'MC Account Engagement Consultant', href: '/certifications/pardot-consultant' },
      { name: 'Marketing Cloud Email Specialist Practice Test', href: '/certifications/email-specialist' },
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
const additionalRoleCategories = CERTIFICATION_CATEGORIES.filter(
  ({ slug }) => !certificationCategories.some((category) => category.slug === slug),
)

const faqItems = [
  {
    question: 'How accurate are these practice questions?',
    answer:
      'Some question sets are imported from the SF-Questions repository with source-provided answers that have not been independently verified. These resources do not guarantee a passing score. Check current official documentation and the source notice on each exam page.',
  },
  {
    question: 'How often are the questions and study materials updated?',
    answer:
      'Content is revised as changes are identified. We do not promise a fixed review interval; always confirm current exam objectives, availability, and fees with the issuer before booking.',
  },
  {
    question: 'What certifications do you cover?',
    answer:
      'Browse study resources by Administrator, Developer, Consultant, Marketing, Architect, Accredited Professional, Designer, Tableau, and other tracks. Some historical or unverified credentials are retained with clear status notices.',
  },
  {
    question: 'What makes your materials different from other study resources?',
    answer:
      'The resources combine topic explanations, sample practice questions, study suggestions, and issuer references. They are designed to support hands-on learning, not replace the official exam guide.',
  },
  {
    question: 'Do I need hands-on experience before taking a Salesforce certification exam?',
    answer:
      'Yes. Salesforce recommends hands-on experience in a Developer Edition or Trailhead Playground for most certs. Our materials support that practice; they are not a substitute for using the platform.',
  },
]

export default async function Home() {
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
      'Explore Salesforce certification study guides and sample practice questions across Admin, Developer, Consultant and Architect tracks. Browse by role and start free.',
    path: '/',
    breadcrumbItems: homeBreadcrumb,
  })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(homeBreadcrumb)
  const certificationGrid = getCertificationGrid()
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/*
        The hero is gone: badge, H1, lead, CTAs, stat row, the sample-question
        card, the "Popular:" link run and the byline. The page now opens on
        the certification list itself, which is what visitors arrive for, so
        CertificationGrid carries the H1. The byline and "Last updated" move
        below the grid — they are trust signals worth keeping, just not the
        first thing on the page.
      */}
      <div className="bg-gray-50">
        <CertificationGrid categories={certificationGrid} headingLevel="h1" />
      </div>

      <div className="bg-gray-50 px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <LastUpdated />
          <ContentPageAuthor />
        </div>
      </div>

      {/* Browse by role (compact for smaller HTML; full grid on /certifications) */}
      <section className="py-20 px-4 cv-auto" aria-labelledby="browse-heading">
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
            {additionalRoleCategories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/certifications/role/${category.slug}`}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white border border-gray-200 rounded-lg font-medium text-gray-700 hover:bg-salesforce-blue/5 hover:border-salesforce-blue/50 hover:text-salesforce-dark transition-colors"
                >
                  {category.name}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6">
            <Link href="/certifications" className="inline-block py-1 font-semibold text-salesforce-blue hover:text-salesforce-dark">
              View all certifications
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16" aria-labelledby="preparation-guide-heading">
        <article className="mx-auto max-w-4xl space-y-5 text-gray-700 leading-relaxed">
          <h2 id="preparation-guide-heading" className="text-3xl font-bold text-gray-900">
            Salesforce Certification Preparation Guide &amp; Exam Overview
          </h2>
          <p>
            A Salesforce certification is most useful when it matches the work you want to do. Start by comparing the role categories above with your current experience and the tasks you want to perform: administration, application development, consulting, architecture, marketing, analytics, or another listed specialty. A role label is a starting point, not a prerequisite rule. Check the individual credential page and the current issuer exam guide for required prerequisites, recommended experience, exam format, fees, and whether the credential is currently available.
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Build a study plan from the exam objectives</h3>
          <p>
            Before studying, find the current official exam guide and use its objective areas as your checklist. Mark each topic as familiar, partly familiar, or new, then give more practice time to topics you have not used in a real Salesforce environment. The study resources and Salesforce certification practice questions linked from this directory can help you review terminology and check understanding. Treat practice scores as feedback about what to revisit; they cannot guarantee an exam result and should not replace hands-on work or the official guide.
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Use hands-on practice and verify changing details</h3>
          <p>
            Where possible, recreate the relevant tasks in a Salesforce Developer Edition, Trailhead Playground, or other environment appropriate to the product. For an administrator topic, that might mean configuring a feature and checking its effect on records and users. For a developer topic, it might mean building and testing a small component or automation. For a consultant or architect topic, practise explaining the trade-offs behind a solution and how it fits the stated requirements. Keep notes on mistakes, the reason an answer is correct, and the documentation you used to confirm it.
          </p>
          <h3 className="text-xl font-semibold text-gray-900">Choose the next step with care</h3>
          <p>
            Certification catalogs, exam names, fees, passing requirements, and objectives can change. Some credentials shown here may be retired, unavailable, or have incomplete public exam details; their pages identify those cases where known. Confirm the current status and booking terms with the issuer before paying for an exam. If you are deciding between tracks, use the role pages and certification paths to compare the sequence of topics and prerequisites. Then choose one exam, map its objectives to a weekly study routine, and revisit the plan after practice reveals gaps. This approach keeps your Salesforce study guide focused on skills you can demonstrate, while using questions as one part of preparation rather than as a substitute for learning.
          </p>
          <p>
            When a practice question conflicts with an exam guide or product documentation, pause and check the source material. Record the objective, product area, and release context alongside your notes so that later changes are easier to spot. This simple review habit helps separate what you understand from what you still need to verify, and it makes each study session more useful than repeating questions from memory.
          </p>
        </article>
      </section>

      {/* FAQ Section (accordion for scanability) */}
      <section className="py-20 px-4 bg-gray-50 cv-auto" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="faq-heading" className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions About Salesforce Certification Study Materials
          </h2>
          <FaqAccordion items={faqItems} questionHeadingLevel="h3" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-salesforce-dark text-white py-16 px-4 cv-auto">
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
