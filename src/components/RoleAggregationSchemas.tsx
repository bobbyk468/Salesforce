import { getRoleOccupationAggregationJsonLd, getRoleDifficultyProfileJsonLd } from '@/lib/schema-data'
import { getRoleOccupationAggregation, getRoleDifficultyDistribution } from '@/lib/cert-seo-data'

export interface RoleAggregationSchemasProps {
  roleTitle: string
  roleCerts: Array<{ href: string }>
  rolePath: string
}

export default function RoleAggregationSchemas({ roleTitle, roleCerts, rolePath }: RoleAggregationSchemasProps) {
  const occupationAgg = getRoleOccupationAggregation(roleCerts)
  const difficultyDist = getRoleDifficultyDistribution(roleCerts)

  if (!occupationAgg) return null

  const occupationJsonLd = getRoleOccupationAggregationJsonLd({
    roleTitle,
    certCount: occupationAgg.certCount,
    minSalary: occupationAgg.minSalary,
    maxSalary: occupationAgg.maxSalary,
    medianSalary: occupationAgg.medianSalary,
    path: rolePath,
  })

  const difficultyJsonLd = getRoleDifficultyProfileJsonLd({
    roleTitle,
    path: rolePath,
    easyCount: difficultyDist.easy,
    mediumCount: difficultyDist.medium,
    hardCount: difficultyDist.hard,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(occupationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(difficultyJsonLd) }}
      />
    </>
  )
}
