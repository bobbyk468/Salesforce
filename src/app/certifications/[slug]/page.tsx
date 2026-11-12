import { notFound } from 'next/navigation'
import CertificationBodyTemplate from '@/components/certifications/CertificationBodyTemplate'
import { getCertMetadata } from '@/lib/cert-seo-data'
import {
  SPIKED_CERT_SLUGS,
  certSpikeBodyBySlug,
  isSpikedCertSlug,
} from '@/lib/cert-page-spike/registry'
import { ADMINISTRATOR_SLUG, administratorMetadataDescription } from '@/lib/cert-page-spike/administrator-data'
import { RELEASE_YEAR } from '@/lib/release-data'
import type { Metadata } from 'next'
import type { CertSpikeBodyData } from '@/lib/cert-page-spike/types'

export function generateStaticParams() {
  return SPIKED_CERT_SLUGS.map((slug) => ({ slug }))
}

type PageProps = { params: Promise<{ slug: string }> }

const PRACTICE_TEST_SLUGS = ['administrator-practice-test', 'email-specialist-practice-test']
const PRACTICE_TEST_TITLE_LABELS: Record<string, string> = {
  'administrator-practice-test': 'ADM-201 Salesforce Admin',
  'email-specialist-practice-test': 'CRT-550 Email Specialist',
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  if (!isSpikedCertSlug(slug)) notFound()
  // Practice test pages are canonicalized to parent cert pages, noindex prevents
  // GSC "Duplicate without user-selected canonical" warnings.
  if (PRACTICE_TEST_SLUGS.includes(slug)) {
    const base = getCertMetadata(slug)
    // The two legacy test aliases keep distinct, readable titles while their
    // noindex and parent canonical continue to identify the main exam page.
    const testTitle = `${PRACTICE_TEST_TITLE_LABELS[slug]} Practice Test Guide (${RELEASE_YEAR})`
    return {
      ...base,
      title: { absolute: testTitle },
      openGraph: base.openGraph ? { ...base.openGraph, title: testTitle } : base.openGraph,
      twitter: base.twitter ? { ...base.twitter, title: testTitle } : base.twitter,
      robots: { index: false, follow: true },
      // No hreflang here: these aliases are noindex and canonicalize to the
      // parent cert page, so a self-referencing annotation would be wrong.
      alternates: { canonical: base.alternates?.canonical },
    }
  }
  if (slug === ADMINISTRATOR_SLUG) {
    const baseMetadata = getCertMetadata(slug)
    const descriptionText = administratorMetadataDescription
    return {
      ...baseMetadata,
      description: descriptionText,
      openGraph: {
        ...baseMetadata.openGraph,
        description: descriptionText,
      },
      twitter: {
        ...baseMetadata.twitter,
        description: descriptionText,
      },
    }
  }
  return getCertMetadata(slug)
}

export default async function CertificationBySlugPage({ params }: PageProps) {
  const { slug } = await params
  if (!isSpikedCertSlug(slug)) notFound()
  const body = certSpikeBodyBySlug[slug]
  // Note: Legacy bodies (template: 'legacy') are not used; LEGACY_CERT_SLUGS is empty.
  // Type assertion is safe because the union excludes LegacySpikeBody at the CertificationBodyTemplate boundary.
  return <CertificationBodyTemplate slug={slug} body={body as Exclude<CertSpikeBodyData, { template: 'legacy' }>} />
}
