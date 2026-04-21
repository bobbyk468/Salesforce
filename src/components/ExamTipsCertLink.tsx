import Link from 'next/link'
import { slugToDisplayName } from '@/lib/cert-seo-data'

/**
 * Renders a contextual parent-child link from an exam-tips page to its main certification page.
 * Replaces the duplicated "Exam At a Glance" stats block — facts live on the cert page, strategy lives here.
 */
export default function ExamTipsCertLink({ certSlug }: { certSlug: string }) {
  const displayName = slugToDisplayName(certSlug)
  return (
    <div className="rounded-xl border border-salesforce-blue/20 bg-salesforce-blue/5 px-5 py-4 mb-8 text-sm text-gray-700">
      For the complete syllabus, passing score, and registration details, view our{' '}
      <Link href={`/certifications/${certSlug}`} className="font-semibold text-salesforce-blue hover:underline">
        {displayName} Exam Guide
      </Link>
      .
    </div>
  )
}
