'use client'

import Link from 'next/link'
import { getRequiredPrerequisite, getRecommendedPrerequisite } from '@/lib/cert-prerequisites'
import { slugToDisplayName } from '@/lib/cert-seo-data'

interface CertIntroParagraphProps {
  slug: string
}

/**
 * Introductory paragraph with internal links for certification pages.
 * Uses prerequisite data to link to the recommended/required prior cert and certification path.
 * Improves visibility, CTR, and internal linking structure.
 */
export default function CertIntroParagraph({ slug }: CertIntroParagraphProps) {
  const requiredPrereq = getRequiredPrerequisite(slug)
  const recommendedPrereq = getRecommendedPrerequisite(slug)
  const prereq = requiredPrereq ?? recommendedPrereq

  if (prereq) {
    const prereqName = slugToDisplayName(prereq)
    const prereqLabel = requiredPrereq ? 'required first step' : 'recommended first step'
    return (
      <p className="text-sm text-gray-600 mb-6">
        New to this track? Our{' '}
        <Link href={`/certifications/${prereq}`} className="text-salesforce-blue font-medium hover:underline">
          {prereqName}
        </Link>{' '}
        exam prep is the {prereqLabel}. See our{' '}
        <Link href="/certification-path" className="text-salesforce-blue font-medium hover:underline">
          certification path
        </Link>{' '}
        to understand where this certification fits. Below you&apos;ll find exam weightage, study tips, and practice questions.
      </p>
    )
  }

  return (
    <p className="text-sm text-gray-600 mb-6">
      See our{' '}
      <Link href="/certification-path" className="text-salesforce-blue font-medium hover:underline">
        certification path
      </Link>{' '}
      to understand where this certification fits in your career. Below you&apos;ll find exam weightage, study tips, and practice questions.
    </p>
  )
}
