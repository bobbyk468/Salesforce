import Link from '@/components/AppLink'
import { Award, Mail, ExternalLink } from 'lucide-react'
import { CONTENT_LAST_UPDATED, SITE_NAME, SOCIAL_LINKS } from '@/lib/constants'
import ContentPageSchemas from '@/components/ContentPageSchemas'
import LastUpdated from '@/components/LastUpdated'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
const ogImageUrl = `${baseUrl}/og?t=About%20Trailblaze%20Prep%20%7C%20Salesforce%20Certification%20Prep`
const aboutDescription =
  'Trailblaze Prep offers Salesforce exam guides and free practice questions for Admin, Developer, and Consultant candidates.'

export const metadata = {
  title: { absolute: `About Trailblaze Prep | Salesforce Certification Prep` },
  description: aboutDescription,
  alternates: {
    canonical: `${baseUrl}/about`,
    languages: { 'en-US': `${baseUrl}/about`, 'x-default': `${baseUrl}/about` },
  },
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
      url: `${baseUrl}/contact`,
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
        <LastUpdated />
      </div>

      <section className="prose prose-gray max-w-none space-y-4 mb-10" aria-labelledby="who-heading">
        <h2 id="who-heading" className="text-xl font-semibold text-gray-900">
          Who we are
        </h2>
        <p className="text-gray-700">
          {SITE_NAME} offers independent study materials for people preparing for Salesforce certification exams.
          We are not affiliated with, endorsed by, or sponsored by Salesforce, Inc.
        </p>
        <p className="text-gray-700">
          <strong>Trademark notice:</strong> Salesforce, Trailblazer, Trailhead, and other Salesforce marks are trademarks of salesforce.com, inc. "{SITE_NAME}" is not affiliated with or endorsed by Salesforce’s Trailblazer program.
        </p>
        <p className="text-gray-700">
          Our guides explain the topics covered in each exam, their relative weight, and any prerequisites. You can also use our tips and sample questions to check your understanding.
        </p>
      </section>

      <section className="prose prose-gray max-w-none space-y-4 mb-10" aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="text-xl font-semibold text-gray-900">
          Our approach to exam prep
        </h2>
        <p className="text-gray-700">Our study guides include:</p>
        <ul className="text-gray-700 space-y-2 list-disc list-inside ml-4">
          <li><strong>Section-wise exam weightage</strong>: See which exam topics carry the most weight.</li>
          <li><strong>Exam prep content</strong>: Find prerequisites, key topics, and ideas for your study plan.</li>
          <li><strong>Sample practice questions with explanations</strong>: Test your understanding of topics in the exam outline.</li>
        </ul>
        <p className="text-gray-700">
          Our materials are designed to help you learn concepts and check your knowledge. We do not offer exam dumps or actual exam questions.
        </p>
      </section>

      <section className="prose prose-gray max-w-none space-y-4 mb-10" aria-labelledby="originality-heading">
        <h2 id="originality-heading" className="text-xl font-semibold text-gray-900">
          How we develop our content
        </h2>
        <p className="text-gray-700">
          Our certification guides bring exam information and study advice together in one place. We use the issuer&apos;s published guides for details such as fees, passing scores, and topic weights, and cite those sources. Each certification page includes:
        </p>
        <ul className="text-gray-700 space-y-2 list-disc list-inside ml-4">
          <li><strong>Practice questions</strong>: Questions to help you review exam concepts.</li>
          <li><strong>Exam tips and strategies</strong>: Study suggestions informed by exam outlines and experience.</li>
          <li><strong>Descriptions and explanations</strong>: Plain-language descriptions and explanations.</li>
          <li><strong>Exam topic guidance</strong>: Exam weights come from official outlines; our study recommendations explain how to use them.</li>
        </ul>
        <p className="text-gray-700 mt-4">
          Use these resources alongside hands-on practice and the official exam guide.
        </p>
      </section>

      <section className="prose prose-gray max-w-none space-y-4 mb-10" aria-labelledby="freshness-heading">
        <h2 id="freshness-heading" className="text-xl font-semibold text-gray-900">
          Content freshness
        </h2>
        <p className="text-gray-700">
          Salesforce exams and products change over time. We review our guides as exam outlines and product features change.
        </p>
        <p className="text-gray-700">
          Key pages show a <strong>last updated</strong> date (currently {CONTENT_LAST_UPDATED}). Check the official exam guide on Trailhead before you book.
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
          Reach us through the{' '}
          <Link href="/contact#contact-form" className="text-salesforce-blue font-medium hover:underline">
            contact form
          </Link>
          . We welcome feedback and questions. For official certification info and Trailhead, see{' '}
          <a
            href="https://www.salesforce.com/trailblazer/certification"
            target="_blank"
            rel="noopener noreferrer nofollow"
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
