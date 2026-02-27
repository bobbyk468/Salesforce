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

const ROLE_TITLES: Record<string, string> = {
  architect:              `Salesforce Architect Certification Guide (${RELEASE_CURRENT})`,
  consultant:             `Salesforce Consultant Certification Guide (${RELEASE_CURRENT})`,
  marketing:              `Salesforce Marketing Certification (${RELEASE_CURRENT})`,
  associate:              `Salesforce Associate Certification (${RELEASE_CURRENT})`,
  administrator:          `Salesforce Admin Certification: ADM-201 + More (${RELEASE_CURRENT})`,
  developer:              `Salesforce Developer Certification (${RELEASE_CURRENT})`,
  tableau:                `Salesforce Tableau Certification Guide (${RELEASE_CURRENT})`,
  'accredited-professional': `Salesforce Accredited Professional Certs (${RELEASE_CURRENT})`,
  sales:                  `Salesforce Sales Certification Guide (${RELEASE_CURRENT})`,
  designer:               `Salesforce Designer Certifications (${RELEASE_CURRENT})`,
}

const ROLE_KEYWORDS: Record<string, string> = {
  architect:              `Salesforce Architect certification ${RELEASE_CURRENT}, Application Architect, System Architect, Integration Architect, CTA path`,
  consultant:             `Salesforce Consultant certification ${RELEASE_CURRENT}, Sales Cloud Consultant, Service Cloud Consultant, Experience Cloud Consultant`,
  marketing:              `Salesforce Marketing certification ${RELEASE_CURRENT}, Email Specialist, Marketing Cloud Consultant, Pardot Specialist`,
  associate:              `Salesforce Associate certification ${RELEASE_CURRENT}, Platform Foundations, AI Associate, entry level Salesforce cert`,
  'accredited-professional': `Salesforce Accredited Professional ${RELEASE_CURRENT}, Field Service AP, B2B Commerce AP, Health Cloud AP`,
  administrator:          `Salesforce Administrator certification ${RELEASE_CURRENT}, ADM-201, Advanced Administrator, App Builder DEV-402`,
  developer:              `Salesforce Developer certification ${RELEASE_CURRENT}, Platform Developer I, PD1, Platform Developer II, PD2, JavaScript Developer`,
  tableau:                `Salesforce Tableau certification ${RELEASE_CURRENT}, Tableau Architect, Tableau Consultant, Tableau Data Analyst`,
  sales:                  `Salesforce Sales certification ${RELEASE_CURRENT}, Sales Cloud Consultant, Sales Foundations`,
  designer:               `Salesforce Designer certification ${RELEASE_CURRENT}, UX Designer, Strategy Designer`,
}

const ROLE_DESCRIPTIONS: Record<string, string> = {
  architect:
    'Salesforce Architect certification: Application, System, Integration, Data, Technical Architect (CTA). Free practice & study guides. Start free.',
  consultant:
    'Salesforce Consultant certification: Sales Cloud, Service Cloud, Experience Cloud, Data Cloud + more. Free practice & study guides. Start free.',
  marketing:
    'Salesforce Marketing certification: Email Specialist, Marketing Cloud Consultant, Pardot + more. Free practice & study guides. Start free.',
  associate:
    'Salesforce Associate certification: Platform Foundations ($75) and AI Associate ($200). Free practice & study guides. Start free.',
  'accredited-professional':
    'Salesforce Accredited Professional certs: Field Service, B2B Commerce, Health Cloud + more. Free practice & study guides. Start free.',
  administrator:
    'Salesforce Administrator certification: ADM-201, Advanced Admin (ADM-211), App Builder (DEV-402) + more. Free practice & study guides. Start free.',
  developer:
    'Salesforce Developer certification: PD1, PD2, JavaScript Developer, MuleSoft, OmniStudio + more. Free practice & study guides. Start free.',
  tableau:
    'Salesforce Tableau certification: Tableau Architect, Consultant, Data Analyst, Desktop Foundations + more. Free practice & study guides. Start free.',
  sales:
    'Salesforce Sales certification: Sales Cloud Consultant and Certified Sales Foundations. Free practice & study guides. Start free.',
  designer:
    'Salesforce Designer certifications: Platform Strategy Designer and UX Designer. Free practice & study guides. Start free.',
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) return { title: 'Certification Not Found' }
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'
  const canonicalUrl = `${siteUrl}/certifications/role/${slug}`
  // Use absolute title to avoid template duplication (template adds "| Trailblaze Prep")
  const title = ROLE_TITLES[slug] || `Salesforce ${category.name} Certifications (${RELEASE_CURRENT})`
  const description =
    ROLE_DESCRIPTIONS[slug] ||
    `Salesforce ${category.name} certifications: ${RELEASE_CURRENT} study guides, free practice questions, and exam weightage. Start free.`
  
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
          url: `${siteUrl}/og?t=${encodeURIComponent(`Salesforce ${category.name} Certifications`)}&k=${slug}`,
          width: 1200,
          height: 630,
          alt: `${category.name} Certifications - Free Salesforce Study Guide`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [{ url: `${siteUrl}/og?t=${encodeURIComponent(`Salesforce ${category.name} Certifications`)}&k=${slug}`, alt: title }],
    },
    keywords: ROLE_KEYWORDS[slug] || `Salesforce ${category.name} certification ${RELEASE_CURRENT}, ${category.name} certification path`,
  }
}

export default async function RoleCertificationsPage({ params }: Props) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) notFound()
  const title = ROLE_TITLES[slug] || `Salesforce ${category.name} Certifications (${RELEASE_CURRENT})`
  const description =
    ROLE_DESCRIPTIONS[slug] ||
    `Salesforce ${category.name} certifications: ${RELEASE_CURRENT} study guides, free practice questions, and exam weightage. Start free.`

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
        <p className="text-xl text-gray-600 mb-2">
          {category.items.length} certification{category.items.length !== 1 ? 's' : ''} in this role. Pick one for practice questions and study materials.
        </p>
        <p className="text-gray-600">
          Each certification has its own study guide, exam weightage, and practice questions. Start with the one that matches your goal. Each cert page has exam weightage and practice questions.
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

      <div className="mt-12 text-center flex flex-wrap justify-center gap-3">
        <Link
          href="/certifications"
          className="inline-flex items-center px-6 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
        >
          <ChevronLeft className="h-5 w-5 mr-2" />
          Back to all certifications
        </Link>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200"
        >
          Home
        </Link>
      </div>
    </div>
  )
}
