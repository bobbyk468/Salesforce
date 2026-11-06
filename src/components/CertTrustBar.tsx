import Link from 'next/link'
import { SLUG_TO_EXAM_GUIDE_URL } from '@/lib/cert-seo-data'

interface CertTrustBarProps {
  slug: string
}

export default function CertTrustBar({ slug }: CertTrustBarProps) {
  const examGuideUrl = SLUG_TO_EXAM_GUIDE_URL[slug]
    || (slug.startsWith('claude-certified-') ? undefined : 'https://trailhead.salesforce.com/credentials')

  return (
    <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 py-3 text-xs text-gray-500">
      <span>Free sample questions</span>
      <span>Independent exam-prep resource</span>
      <Link href="/editorial-policy" className="inline-block py-1 text-salesforce-blue hover:underline">
        Editorial policy
      </Link>
      {examGuideUrl ? (
        <a href={examGuideUrl} target="_blank" rel="noopener noreferrer" className="inline-block py-1 text-salesforce-blue hover:underline">
          Confirm current details in the official guide
        </a>
      ) : (
        <span>Confirm current details with the certification issuer</span>
      )}
    </div>
  )
}
