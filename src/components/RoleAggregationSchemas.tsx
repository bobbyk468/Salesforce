import { getRoleOccupationAggregationJsonLd, getRoleDifficultyProfileJsonLd } from '@/lib/schema-data'
import { getRoleOccupationAggregation, getRoleDifficultyDistribution } from '@/lib/cert-seo-data'
import { serializeJsonLd } from '@/lib/serialize-json-ld'

export interface RoleAggregationSchemasProps {
  roleTitle: string
  roleCerts: Array<{ name: string; href: string }>
  rolePath: string
}

export default function RoleAggregationSchemas({ roleTitle, roleCerts, rolePath }: RoleAggregationSchemasProps) {
  const occupationAgg = getRoleOccupationAggregation(roleCerts)
  const difficultyDist = getRoleDifficultyDistribution(roleCerts)

  const occupationJsonLd = occupationAgg
    ? getRoleOccupationAggregationJsonLd({
        roleTitle,
        certCount: occupationAgg.certCount,
        minSalary: occupationAgg.minSalary,
        maxSalary: occupationAgg.maxSalary,
        medianSalary: occupationAgg.medianSalary,
        path: rolePath,
      })
    : null

  const difficultyJsonLd = occupationAgg
    ? getRoleDifficultyProfileJsonLd({
        roleTitle,
        path: rolePath,
        easyCount: difficultyDist.easy,
        mediumCount: difficultyDist.medium,
        hardCount: difficultyDist.hard,
      })
    : null

  const certificationListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${roleTitle} certification resources`,
    itemListElement: roleCerts.map((cert, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: cert.name,
      url: cert.href.startsWith('http') ? cert.href : `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.trailblazeprep.com'}${cert.href}`,
    })),
  }

  return (
    <>
      {occupationJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(occupationJsonLd) }}
        />
      )}
      {difficultyJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(difficultyJsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(certificationListJsonLd) }}
      />
    </>
  )
}
