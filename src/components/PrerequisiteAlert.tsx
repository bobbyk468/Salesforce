import { AlertCircle, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { getCertPrerequisites } from '@/lib/cert-prerequisites'
import { slugToDisplayName, SLUG_TO_EXAM_CODE } from '@/lib/cert-seo-data'

interface PrerequisiteAlertProps {
  slug: string
  className?: string
}

export default function PrerequisiteAlert({
  slug,
  className = '',
}: PrerequisiteAlertProps) {
  const prereq = getCertPrerequisites(slug)

  if (!prereq || (!prereq.requiredPrerequisite && !prereq.recommendedPrerequisite)) {
    return null
  }

  const requiredCertSlug = prereq.requiredPrerequisite
  const recommendedCertSlug = prereq.recommendedPrerequisite

  // Get cert info for required prerequisite
  const requiredCert = requiredCertSlug
    ? {
        slug: requiredCertSlug,
        title: slugToDisplayName(requiredCertSlug),
        code: SLUG_TO_EXAM_CODE[requiredCertSlug] || '',
      }
    : null

  // Get cert info for recommended prerequisite
  const recommendedCert = recommendedCertSlug
    ? {
        slug: recommendedCertSlug,
        title: slugToDisplayName(recommendedCertSlug),
        code: SLUG_TO_EXAM_CODE[recommendedCertSlug] || '',
      }
    : null

  const isRequired = !!requiredCert
  const icon = isRequired ? AlertCircle : CheckCircle2
  const Icon = icon

  return (
    <div
      className={`rounded-lg p-4 md:p-5 border-l-4 ${
        isRequired
          ? 'bg-amber-50 border-l-amber-500 border border-amber-200'
          : 'bg-blue-50 border-l-blue-500 border border-blue-200'
      } ${className}`}
      role={isRequired ? 'alert' : 'complementary'}
      aria-label={isRequired ? 'Required prerequisites' : 'Recommended prerequisites'}
    >
      <div className="flex items-start gap-3">
        <Icon
          className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
            isRequired ? 'text-amber-600' : 'text-blue-600'
          }`}
          aria-hidden="true"
        />
        <div className="flex-1">
          <h3
            className={`font-semibold text-sm md:text-base mb-2 ${
              isRequired ? 'text-amber-900' : 'text-blue-900'
            }`}
          >
            {isRequired
              ? 'Required Prerequisite'
              : 'Recommended Prerequisites'}
          </h3>
          <p
            className={`text-xs md:text-sm mb-3 ${
              isRequired ? 'text-amber-700' : 'text-blue-700'
            }`}
          >
            {isRequired
              ? 'You must complete this certification before attempting this one.'
              : 'We recommend completing this certification first to prepare you better.'}
          </p>

          <div className="flex flex-col gap-2">
            {requiredCert && (
              <Link
                href={`/certifications/${requiredCert.slug}`}
                className={`inline-flex items-center gap-2 text-xs md:text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
                  isRequired
                    ? 'bg-amber-100 hover:bg-amber-200 text-amber-900'
                    : 'bg-blue-100 hover:bg-blue-200 text-blue-900'
                }`}
              >
                <span>{requiredCert.title}</span>
                {requiredCert.code && (
                  <span className="text-xs opacity-75">({requiredCert.code})</span>
                )}
              </Link>
            )}
            {recommendedCert && (
              <Link
                href={`/certifications/${recommendedCert.slug}`}
                className={`inline-flex items-center gap-2 text-xs md:text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
                  isRequired
                    ? 'bg-amber-100 hover:bg-amber-200 text-amber-900'
                    : 'bg-blue-100 hover:bg-blue-200 text-blue-900'
                }`}
              >
                <span>{recommendedCert.title}</span>
                {recommendedCert.code && (
                  <span className="text-xs opacity-75">({recommendedCert.code})</span>
                )}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
