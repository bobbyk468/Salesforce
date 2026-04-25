import { getApOccupationData } from '@/lib/cert-seo-data'
import { getOccupationJsonLd } from '@/lib/schema-data'

export interface ApOccupationSchemaProps {
  apSlug: string
  apTitle: string
}

export default function ApOccupationSchema({ apSlug, apTitle }: ApOccupationSchemaProps) {
  const occupationData = getApOccupationData(apSlug)

  if (!occupationData) return null

  const occupationJsonLd = getOccupationJsonLd({
    jobTitle: `${apTitle} (Accredited Professional)`,
    description: `${apTitle} role. Projected salary based on parent role certification. Mid-level market rate in United States.`,
    medianSalary: occupationData.medianSalary,
    salaryRange: occupationData.salaryRange,
  })

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(occupationJsonLd) }}
    />
  )
}
