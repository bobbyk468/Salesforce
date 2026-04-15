import { notFound } from 'next/navigation'
import CertificationBodyTemplate from '@/components/certifications/CertificationBodyTemplate'
import { getCertMetadata } from '@/lib/cert-seo-data'
import {
  SPIKED_CERT_SLUGS,
  certSpikeBodyBySlug,
  isSpikedCertSlug,
} from '@/lib/cert-page-spike/registry'
import { ADMINISTRATOR_SLUG, administratorMetadataDescription } from '@/lib/cert-page-spike/administrator-data'
import type { Metadata } from 'next'
import type { CertSpikeBodyData } from '@/lib/cert-page-spike/types'

export function generateStaticParams() {
  return SPIKED_CERT_SLUGS.map((slug) => ({ slug }))
}

type PageProps = { params: { slug: string } }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  if (!isSpikedCertSlug(params.slug)) notFound()
  if (params.slug === ADMINISTRATOR_SLUG) {
    const baseMetadata = getCertMetadata(params.slug)
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
  return getCertMetadata(params.slug)
}

export default async function CertificationBySlugPage({ params }: PageProps) {
  if (!isSpikedCertSlug(params.slug)) notFound()
  const body = certSpikeBodyBySlug[params.slug]
  // Note: Legacy bodies (template: 'legacy') are not used; LEGACY_CERT_SLUGS is empty.
  // Type assertion is safe because the union excludes LegacySpikeBody at the CertificationBodyTemplate boundary.
  return <CertificationBodyTemplate slug={params.slug} body={body as Exclude<CertSpikeBodyData, { template: 'legacy' }>} />
}
