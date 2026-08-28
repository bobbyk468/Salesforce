import Link from 'next/link'
import { Award, Mail, ExternalLink } from 'lucide-react'
import { CONTACT_EMAIL, CONTENT_LAST_UPDATED, SITE_NAME, SOCIAL_LINKS } from '@/lib/constants'
import ContentPageSchemas from '@/components/ContentPageSchemas'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const ogImageUrl = `${baseUrl}/og?t=About%20Trailblaze%20Prep%20%7C%20Salesforce%20Certification%20Prep`
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
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: 'About Trailblaze Prep' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Trailblaze Prep | Salesforce Certification Prep',
    description: aboutDescription,
    images: [{ url: ogImageUrl, alt: 'About Trailblaze Prep | Salesforce Certification Prep' }],
  },
}

const aboutBreadcrumb = [{ name: 'Home', url: '/' }, { name: 'About', url: '/about' }]

export default function AboutPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: SITE_NAME,
    url: siteUrl,
    logo: `${siteUrl}/og-image`,
    description:
      'Trailblaze Prep provides Salesforce certification study guides, exam weightage breakdowns, and practice questions updated for current Salesforce release cycles.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: CONTACT_EMAIL,
    },
    ...(SOCIAL_LINKS.length > 0 ? { sameAs: SOCIAL_LINKS.filter(Boolean) } : {}),
  }
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <ContentPageSchemas
        headline={`About Us | ${SITE_NAME}`}
        description={aboutDescription}
        path="/about"
        breadcrumbItems={aboutBreadcrumb}
      />

      <div data-lcp-header>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">About {SITE_NAME}</h1>
      </div>

      <section className="prose prose-gray max-w-none space-y-4 mb-10" aria-labelledby="who-heading">
        <h2 id="who-heading" className="text-xl font-semibold text-gray-900">
          Who we are
        </h2>
        <p className="text-gray-700">
          {SITE_NAME} is an independent study resource for people preparing for Salesforce certification exams.
          We are not affiliated with, endorsed by, or sponsored by Salesforce, Inc.
        </p>
        <p className="text-gray-700">
          <strong>Trademark notice:</strong> Salesforce, Trailblazer, Trailhead, and other Salesforce marks are trademarks of salesforce.com, inc. "{SITE_NAME}" is not affiliated with or endorsed by Salesforce’s Trailblazer program.
        </p>
        <p className="text-gray-700">
          We help you see how each exam is weighted by section, get clear exam tips and prerequisites, and practice with sample questions before the real exam.
        </p>
      </section>

      <section className="prose prose-gray max-w-none space-y-4 mb-10" aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="text-xl font-semibold text-gray-900">
          Our approach to exam prep
        </h2>
        <p className="text-gray-700">We focus on three things:</p>
        <ul className="text-gray-700 space-y-2 list-disc list-inside ml-4">
          <li><strong>Section-wise exam weightage</strong> — So you know where to spend your study time.</li>
          <li><strong>Exam prep content</strong> — Tips, prerequisites, focus areas, and a study strategy for each certification.</li>
          <li><strong>Sample practice questions with explanations</strong> — Aligned with official exam outlines.</li>
        </ul>
        <p className="text-gray-700">
          We do not offer braindumps or real exam questions. Our materials help you learn and check your knowledge.
        </p>
      </section>

      <section className="prose prose-gray max-w-none space-y-4 mb-10" aria-labelledby="originality-heading">
        <h2 id="originality-heading" className="text-xl font-semibold text-gray-900">
          Original content for SEO and learning
        </h2>
        <p className="text-gray-700">
          All content on this site is <strong>original and unique</strong>, written for Trailblaze Prep. We do not copy or scrape from other sites or study guides. Each certification page includes:
        </p>
        <ul className="text-gray-700 space-y-2 list-disc list-inside ml-4">
          <li><strong>Unique practice questions</strong> — Written to test concepts for that exam.</li>
          <li><strong>Original exam tips and strategies</strong> — Based on official outlines and experience.</li>
          <li><strong>Unique descriptions and explanations</strong> — Written fresh for this site.</li>
          <li><strong>Original analysis</strong> — Weightage comes from official outlines; our presentation and recommendations are our own.</li>
        </ul>
        <p className="text-gray-700 mt-4">
          Original content helps search engines index and rank our pages. Each page gives unique value for your exam prep.
        </p>
      </section>

      <section className="prose prose-gray max-w-none space-y-4 mb-10" aria-labelledby="freshness-heading">
        <h2 id="freshness-heading" className="text-xl font-semibold text-gray-900">
          Content freshness
        </h2>
        <p className="text-gray-700">
          Salesforce exams and outlines change. We review and update content to match the latest blueprints and product changes.
        </p>
        <p className="text-gray-700">
          Key pages are marked with a <strong>last updated</strong> date (currently {CONTENT_LAST_UPDATED}). Always check the official exam guide on Trailhead before booking.
        </p>
      </section>

      <section className="prose prose-gray max-w-none space-y-4 mb-10" aria-labelledby="author-heading">
        <h2 id="author-heading" className="text-xl font-semibold text-gray-900">
          Author and credentials
        </h2>
        <p className="text-gray-700">
          Content is written and reviewed by{' '}
          <Link href="/team" className="text-salesforce-blue font-medium hover:underline">
            Krishna Mohan
          </Link>
          , a multi-certified Salesforce professional holding the Administrator (ADM-201), Platform Developer I &amp; II, App Builder, and Consultant certifications. Krishna has hands-on experience delivering Salesforce implementations across Admin, Developer, and Consultant tracks.
        </p>
        <p className="text-gray-700">
          For editorial standards, review workflow, and full credentials, see our{' '}
          <Link href="/team" className="text-salesforce-blue font-medium hover:underline">
            Editorial Team page
          </Link>
          .
        </p>
      </section>

      <section className="prose prose-gray max-w-none space-y-4 mb-10" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="text-xl font-semibold text-gray-900">
          Contact and identity
        </h2>
        <p className="text-gray-700">
          Reach us at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-salesforce-blue font-medium hover:underline">
            {CONTACT_EMAIL}
          </a>
          . We welcome feedback and questions. For official certification info and Trailhead, see{' '}
          <a
            href="https://www.salesforce.com/trailblazer/certification"
            target="_blank"
            rel="noopener noreferrer"
            className="text-salesforce-blue font-medium hover:underline inline-flex items-center gap-1"
          >
            Salesforce Trailblazer Certification
            <ExternalLink className="h-4 w-4" />
          </a>.
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
