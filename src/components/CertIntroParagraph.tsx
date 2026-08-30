'use client'

import Link from 'next/link'
import { getRequiredPrerequisite, getRecommendedPrerequisite } from '@/lib/cert-prerequisites'
import { slugToDisplayName, SLUG_TO_EXAM_TIPS, SLUG_TO_STUDY_GUIDE } from '@/lib/cert-seo-data'
import { getExamWeightage } from '@/lib/exam-weightage-data'

interface CertIntroParagraphProps {
  slug: string
}

/**
 * Introductory paragraph with internal links for certification pages.
 * Uses prerequisite data to link to the recommended/required prior cert and certification path.
 * Adds exam-tips and study-guide links when dedicated pages exist. Improves visibility, CTR, and internal linking.
 *
 * Several certs share the same recommended prerequisite (e.g. most Accredited Professional
 * exams point to Administrator), which made this paragraph read near-identically across those
 * pages. Naming the cert's own top-weighted exam section keeps every page's sentence factually
 * distinct even when the prerequisite is shared.
 */
export default function CertIntroParagraph({ slug }: CertIntroParagraphProps) {
  const requiredPrereq = getRequiredPrerequisite(slug)
  const recommendedPrereq = getRecommendedPrerequisite(slug)
  const prereq = requiredPrereq ?? recommendedPrereq
  const examTipsPath = SLUG_TO_EXAM_TIPS[slug]
  const studyGuidePath = SLUG_TO_STUDY_GUIDE[slug]
  const certName = slugToDisplayName(slug)
  const weightage = getExamWeightage(slug)
  const topSection = weightage ? [...weightage].sort((a, b) => b.percentage - a.percentage)[0] : undefined

  const studyGuideLink = studyGuidePath ? (
    <>
      {' '}
      <Link href={studyGuidePath} className="text-salesforce-blue font-medium hover:underline">
        full study guide
      </Link>
    </>
  ) : null

  const examTipsLink = examTipsPath ? (
    <>
      {' '}Ready to book? Read our{' '}
      <Link href={examTipsPath} className="text-salesforce-blue font-medium hover:underline">
        exam tips and study plan
      </Link>.
    </>
  ) : null

  const extraLinks = (studyGuideLink || examTipsLink) ? (
    <>
      {studyGuideLink && <> for deep section coverage.{examTipsLink}</>}
      {!studyGuideLink && examTipsLink}
    </>
  ) : null

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
        to understand where this certification fits.{' '}
        {topSection ? (
          <>
            The {certName} exam weights <strong className="text-gray-900">{topSection.name}</strong> most heavily ({topSection.percentage}%) — see the full breakdown, study tips, and practice questions below.
          </>
        ) : (
          <>Below you’ll find exam weightage, study tips, and practice questions.</>
        )}
        {studyGuideLink && <> See our{studyGuideLink}</>}{extraLinks}
      </p>
    )
  }

  return (
    <p className="text-sm text-gray-600 mb-6">
      See our{' '}
      <Link href="/certification-path" className="text-salesforce-blue font-medium hover:underline">
        certification path
      </Link>{' '}
      to understand where this certification fits in your career.{' '}
      {topSection ? (
        <>
          The {certName} exam weights <strong className="text-gray-900">{topSection.name}</strong> most heavily ({topSection.percentage}%) — see the full breakdown, study tips, and practice questions below.
        </>
      ) : (
        <>Below you’ll find exam weightage, study tips, and practice questions.</>
      )}
      {studyGuideLink && <> See our{studyGuideLink}</>}{extraLinks}
    </p>
  )
}
