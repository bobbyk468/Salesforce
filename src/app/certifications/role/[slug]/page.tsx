import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Award, ArrowRight, ChevronLeft } from 'lucide-react'
import { Metadata } from 'next'
import { getCategoryBySlug, CERTIFICATION_CATEGORIES } from '@/lib/certifications-data'
import { getWebPageJsonLd, getBreadcrumbListJsonLd } from '@/lib/schema-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return CERTIFICATION_CATEGORIES.map((c) => ({ slug: c.slug }))
}

const ROLE_DESCRIPTIONS: Record<string, string> = {
  consultant:
    'Salesforce Consultant certifications: Sales Cloud, Service Cloud, Experience Cloud, Data Cloud, and more, with practice questions and concise study guides.',
  'accredited-professional':
    'Salesforce Accredited Professional certifications by product and industry, with practice questions, exam weightage, and study guides for each AP exam.',
  administrator:
    'Browse Salesforce Administrator track certifications: ADM-201, Advanced Administrator, App Builder, and more. Compare exams and find the right study guide.',
  developer:
    'Salesforce Developer certifications: Platform Developer I/II, JavaScript, MuleSoft, and OmniStudio, with practice questions, exam weightage, and study guides.',
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) return { title: 'Certification Not Found' }
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
  const canonicalUrl = `${siteUrl}/certifications/role/${slug}`
  // Use absolute title to avoid template duplication (template adds "| Trailblaze Prep")
  const title = `${category.name} Salesforce Certifications (${RELEASE_CURRENT})`
  const description =
    ROLE_DESCRIPTIONS[slug] ||
    `Browse Salesforce ${category.name} certifications with ${RELEASE_CURRENT} study guides, free practice questions, and exam weightage. Find your next certification path and start practicing now.`
  
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      type: 'website',
      url: canonicalUrl,
      images: [
        {
          url: `${siteUrl}/og-image`,
          width: 1200,
          height: 630,
          alt: `${category.name} Certifications - Salesforce Study Guide`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${siteUrl}/og-image`],
    },
  }
}

export default async function RoleCertificationsPage({ params }: Props) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) notFound()
  const title = `${category.name} Salesforce Certifications (${RELEASE_CURRENT})`
  const description =
    ROLE_DESCRIPTIONS[slug] ||
    `Browse Salesforce ${category.name} certifications with ${RELEASE_CURRENT} study guides, free practice questions, and exam weightage. Find your next certification path and start practicing now.`

  const breadcrumb = [
    { name: 'Home', url: '/' },
    { name: 'All Certifications', url: '/certifications' },
    { name: `${category.name} Certifications`, url: `/certifications/role/${slug}` },
  ]
  const webPageJsonLd = getWebPageJsonLd({
    name: title,
    description,
    path: `/certifications/role/${slug}`,
    breadcrumbItems: breadcrumb,
  })
  const breadcrumbJsonLd = getBreadcrumbListJsonLd(breadcrumb)

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Link
        href="/certifications"
        className="inline-flex items-center text-salesforce-blue hover:text-salesforce-dark font-medium mb-8"
      >
        <ChevronLeft className="h-5 w-5 mr-1" />
        All certifications
      </Link>

      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{category.name} Certifications</h1>
        <p className="text-xl text-gray-600">
          {category.items.length} certification{category.items.length !== 1 ? 's' : ''} in this role. Pick one for practice questions and study materials.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {category.items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="bg-white rounded-xl shadow-lg p-5 card-hover flex items-center justify-between group border border-gray-100 hover:border-salesforce-blue/50 transition-all duration-200"
          >
            <div className="flex items-center min-w-0">
              <div className="flex-shrink-0 w-10 h-10 bg-salesforce-blue/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-salesforce-blue/20 transition-colors duration-200">
                <Award className="h-6 w-6 text-salesforce-blue group-hover:scale-110 transition-transform duration-200" aria-label={`${item.name} certification badge icon`} />
              </div>
              <span className="font-medium text-gray-900 group-hover:text-salesforce-blue transition-colors duration-200 truncate">
                {item.name}
              </span>
            </div>
            <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-salesforce-blue group-hover:translate-x-1 flex-shrink-0 ml-2 transition-all duration-200" />
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/certifications"
          className="inline-flex items-center px-6 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
        >
          <ChevronLeft className="h-5 w-5 mr-2" />
          Back to all certifications
        </Link>
      </div>
    </div>
  )
}
