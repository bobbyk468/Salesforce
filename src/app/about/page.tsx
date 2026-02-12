import Link from 'next/link'
import { Award, Mail, ExternalLink } from 'lucide-react'
import { CONTACT_EMAIL, CONTENT_LAST_UPDATED, SITE_NAME } from '@/lib/constants'
import { getWebPageJsonLd, getBreadcrumbListJsonLd } from '@/lib/schema-data'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const aboutDescription =
  'Trailblaze Prep helps you pass Salesforce certifications with free practice questions, exam weightage, and study guides for Admin, Developer, and more.'

export const metadata = {
  title: { absolute: `About Trailblaze Prep | Salesforce Certification Prep` },
  description: aboutDescription,
  alternates: { canonical: `${baseUrl}/about` },
  openGraph: {
    title: 'About Trailblaze Prep | Salesforce Certification Prep',
    description: aboutDescription,
    type: 'website',
    url: `${baseUrl}/about`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Trailblaze Prep | Salesforce Certification Prep',
    description: aboutDescription,
  },
}

const aboutBreadcrumb = [{ name: 'Home', url: '/' }, { name: 'About', url: '/about' }]

export default function AboutPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: siteUrl,
    description:
      'Independent Salesforce certification preparation resource: practice questions, section-wise exam weightage, and study guides for Admin, Developer, Consultant, Architect, and more.',
    email: CONTACT_EMAIL,
  }
  const webPageJsonLd = getWebPageJsonLd({
    name: `About Us | ${SITE_NAME}`,
    description: aboutDescription,
    path: '/about',
    breadcrumbItems: aboutBreadcrumb,
  })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(aboutBreadcrumb)

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <h1 className="text-3xl font-bold text-gray-900 mb-6">About {SITE_NAME}</h1>

      <section className="prose prose-gray max-w-none space-y-4 mb-10" aria-labelledby="who-heading">
        <h2 id="who-heading" className="text-xl font-semibold text-gray-900">
          Who we are
        </h2>
        <p className="text-gray-700">
          {SITE_NAME} is an independent study resource for people preparing for Salesforce certification exams.
          We are not affiliated with, endorsed by, or sponsored by Salesforce, Inc. <strong>Trademark Notice:</strong> Salesforce, Trailblazer, Trailhead, and all other Salesforce marks are trademarks of salesforce.com, inc. "{SITE_NAME}" is not affiliated with or endorsed by Salesforce's Trailblazer program. Our goal is to help you see
          exactly how each exam is weighted by section, get clear exam tips and prerequisites, and practice with
          sample questions before you sit the real exam.
        </p>
      </section>

      <section className="prose prose-gray max-w-none space-y-4 mb-10" aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="text-xl font-semibold text-gray-900">
          Our approach to exam prep
        </h2>
        <p className="text-gray-700">
          We focus on three things that matter for exam prep: (1) <strong>Section-wise exam weightage</strong> so
          you know where to spend your study time. (2) <strong>Exam prep content</strong>—tips, prerequisites,
          focus areas, and a study strategy written for each certification. (3) <strong>Sample practice
          questions with explanations</strong>, aligned with official exam outlines. We do not offer braindumps
          or real exam questions; our materials are designed to help you learn and validate your knowledge.
        </p>
      </section>

      <section className="prose prose-gray max-w-none space-y-4 mb-10" aria-labelledby="originality-heading">
        <h2 id="originality-heading" className="text-xl font-semibold text-gray-900">
          Original content for SEO and learning
        </h2>
        <p className="text-gray-700">
          All content on this site is <strong>original and unique</strong>—written specifically for Trailblaze Prep. We do not copy or scrape content from other websites, study guides, or exam prep resources. Each certification page includes:
        </p>
        <ul className="text-gray-700 space-y-2 list-disc list-inside ml-4">
          <li><strong>Unique practice questions</strong>—Each certification has its own set of original practice questions written to test the concepts covered in that exam, not copied from other sources.</li>
          <li><strong>Original exam tips and strategies</strong>—Our exam tips, prerequisites, focus areas, and study strategies are written based on our analysis of official exam outlines and real-world experience, not duplicated from other sites.</li>
          <li><strong>Unique descriptions and explanations</strong>—Every certification description and question explanation is written fresh for this site to ensure originality.</li>
          <li><strong>Original analysis</strong>—While exam weightage percentages are based on official Salesforce exam outlines (publicly available on Trailhead), our presentation, analysis, and recommendations are original.</li>
        </ul>
        <p className="text-gray-700 mt-4">
          This original content approach helps ensure that search engines like Google can properly index and rank our pages, as duplicate content can negatively impact SEO. Each page provides unique value to help you prepare for your certification exam.
        </p>
      </section>

      <section className="prose prose-gray max-w-none space-y-4 mb-10" aria-labelledby="freshness-heading">
        <h2 id="freshness-heading" className="text-xl font-semibold text-gray-900">
          Content freshness
        </h2>
        <p className="text-gray-700">
          Salesforce exams and outlines change over time. We review and update our content on a regular basis
          to align with the latest exam blueprints and product changes. Key certification pages and study
          materials are marked with a <strong>last updated</strong> date (currently {CONTENT_LAST_UPDATED}) so
          you can see how fresh the content is. Always double-check the official exam guide on Trailhead before
          booking your exam.
        </p>
      </section>

      <section className="prose prose-gray max-w-none space-y-4 mb-10" aria-labelledby="author-heading">
        <h2 id="author-heading" className="text-xl font-semibold text-gray-900">
          Author and credentials
        </h2>
        <p className="text-gray-700">
          The content on this site is created by practitioners with experience in Salesforce implementations
          and certification preparation. We focus on section-wise exam weightage, practice questions with
          explanations, and study strategies aligned with official outlines. If you hold Salesforce
          certifications or have years of experience, you can add your credentials and LinkedIn profile below
          to build trust with visitors.
        </p>
        <p className="text-gray-600 text-sm">
          <strong>Placeholder:</strong> Add your Salesforce certifications (e.g. Administrator, Sales Cloud
          Consultant), years of experience, and a link to your LinkedIn profile here. This helps establish
          E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) for exam-prep content.
        </p>
      </section>

      <section className="prose prose-gray max-w-none space-y-4 mb-10" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="text-xl font-semibold text-gray-900">
          Contact and identity
        </h2>
        <p className="text-gray-700">
          You can reach us at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-salesforce-blue font-medium hover:underline">
            {CONTACT_EMAIL}
          </a>
          . We welcome feedback, correction suggestions, and questions about our materials. For official
          certification information, exam schedules, and Trailhead learning paths, use{' '}
          <a
            href="https://www.salesforce.com/trailblazer/certification"
            target="_blank"
            rel="noopener noreferrer"
            className="text-salesforce-blue font-medium hover:underline inline-flex items-center gap-1"
          >
            Salesforce Trailblazer Certification
            <ExternalLink className="h-4 w-4" />
          </a>
          .
        </p>
      </section>

      <div className="flex flex-wrap gap-4">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-colors"
        >
          <Mail className="h-5 w-5" />
          Contact Us
        </Link>
        <Link
          href="/certifications"
          className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
        >
          <Award className="h-5 w-5" />
          All Certifications
        </Link>
      </div>
    </div>
  )
}
