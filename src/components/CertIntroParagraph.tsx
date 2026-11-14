'use client'

import Link from '@/components/AppLink'
import { getRequiredPrerequisite, getRequiredPrerequisites, getRecommendedPrerequisite } from '@/lib/cert-prerequisites'
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
  const requiredPrereqs = getRequiredPrerequisites(slug)
  const requiredPrereq = requiredPrereqs[0] ?? getRequiredPrerequisite(slug)
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

  if (requiredPrereqs.length > 1) {
    return (
      <p className="text-sm text-gray-600 mb-6">
        Before attempting this exam, complete both required certifications:{' '}
        {requiredPrereqs.map((requiredSlug, index) => (
          <span key={requiredSlug}>
            {index > 0 ? ' and ' : ''}
            <Link href={`/certifications/${requiredSlug}`} className="text-salesforce-blue font-medium hover:underline">
              {slugToDisplayName(requiredSlug)}
            </Link>
          </span>
        ))}. See our{' '}
        <Link href="/certification-path" className="text-salesforce-blue font-medium hover:underline">
          certification path
        </Link>{' '}
        to understand where this certification fits.{' '}
        {topSection && <>The {certName} exam weights <strong className="text-gray-900">{topSection.name}</strong> most heavily ({topSection.percentage}%), see the full breakdown, study tips, and practice questions below.</>}
        {studyGuideLink && <> See our{studyGuideLink}</>}
        {extraLinks}
      </p>
    )
  }

  if (prereq) {
    const prereqName = slugToDisplayName(prereq)
    const prereqLabel = requiredPrereq ? 'required first step' : 'recommended first step'
    // This used to open "New to this track? Our <prereq> exam prep is the
    // recommended first step", which read as the same generic banner on all 35
    // pages that have a prerequisite and said nothing about the exam itself.
    // It now leads with this exam's own heaviest section and keeps every
    // internal link it carried: the prerequisite, the certification path, and
    // the study-guide and exam-tips pages where they exist.
    return (
      <p className="text-sm text-gray-600 mb-6">
        {topSection ? (
          <>
            The {certName} exam weights <strong className="text-gray-900">{topSection.name}</strong> most heavily ({topSection.percentage}%), and the full breakdown, study tips, and practice questions are below.{' '}
          </>
        ) : (
          <>Exam weightage, study tips, and practice questions are below.{' '}</>
        )}
        <Link href={`/certifications/${prereq}`} className="text-salesforce-blue font-medium hover:underline">
          {prereqName}
        </Link>{' '}
        is the {prereqLabel} for this track, and our{' '}
        <Link href="/certification-path" className="text-salesforce-blue font-medium hover:underline">
          certification path
        </Link>{' '}
        shows where this certification fits.
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
          The {certName} exam weights <strong className="text-gray-900">{topSection.name}</strong> most heavily ({topSection.percentage}%), see the full breakdown, study tips, and practice questions below.
        </>
      ) : (
        <>Below you’ll find exam weightage, study tips, and practice questions.</>
      )}
      {studyGuideLink && <> See our{studyGuideLink}</>}{extraLinks}
    </p>
  )
}
