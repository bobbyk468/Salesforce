import type { CertSpikeBodyData, LegacySpikeBody } from './types'
import { AI_ASSOCIATE_SLUG, aiAssociateCertPageBody } from './ai-associate-data'
import { APP_BUILDER_SLUG, appBuilderCertPageBody } from './app-builder-data'
import { ADMINISTRATOR_SLUG, administratorCertPageBody } from './administrator-data'
import {
  ADVANCED_ADMINISTRATOR_SLUG,
  advancedAdministratorCertPageBody,
} from './advanced-administrator-data'
import { DEVELOPER_1_SLUG, developer1CertPageBody } from './developer-1-data'
import { LEGACY_CERT_SLUGS, type LegacyCertSlug } from './legacy-cert-slugs.generated'
import {
  PROMOTED_ASSOCIATE_SLUGS,
  promotedAssociateCertBodies,
} from './promoted-associate/promoted-index'

const legacyCertSpikeBodies = Object.fromEntries(
  LEGACY_CERT_SLUGS.map((slug) => [slug, { template: 'legacy' as const } satisfies LegacySpikeBody]),
) as Record<LegacyCertSlug, LegacySpikeBody>

/** Slugs for `src/app/certifications/[slug]/page.tsx`. Track progress: `npm run cert:migration`. */
export const SPIKED_CERT_SLUGS = [
  AI_ASSOCIATE_SLUG,
  APP_BUILDER_SLUG,
  ADMINISTRATOR_SLUG,
  ADVANCED_ADMINISTRATOR_SLUG,
  DEVELOPER_1_SLUG,
  ...(PROMOTED_ASSOCIATE_SLUGS as readonly string[]),
  ...LEGACY_CERT_SLUGS,
] as const

export type SpikedCertSlug = (typeof SPIKED_CERT_SLUGS)[number]

export function isSpikedCertSlug(s: string): s is SpikedCertSlug {
  return (SPIKED_CERT_SLUGS as readonly string[]).includes(s)
}

export const certSpikeBodyBySlug: Record<SpikedCertSlug, CertSpikeBodyData> = {
  ...promotedAssociateCertBodies,
  ...legacyCertSpikeBodies,
  'ai-associate': aiAssociateCertPageBody,
  'app-builder': appBuilderCertPageBody,
  'administrator': administratorCertPageBody,
  'advanced-administrator': advancedAdministratorCertPageBody,
  [DEVELOPER_1_SLUG]: developer1CertPageBody,
}
