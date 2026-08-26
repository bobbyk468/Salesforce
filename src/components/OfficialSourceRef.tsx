import { ExternalLink } from 'lucide-react'
import { SLUG_TO_EXAM_GUIDE_URL, EXAM_PRICING_URL } from '@/lib/cert-seo-data'

export default function OfficialSourceRef({ slug }: { slug: string }) {
  const guideUrl = SLUG_TO_EXAM_GUIDE_URL[slug]

  return (
    <div className="mt-6 rounded-lg border border-gray-100 bg-gray-50 px-4 py-3 text-xs text-gray-500">
      <span className="font-medium text-gray-600">Official sources:</span>{' '}
      {guideUrl && (
        <>
          <a
            href={guideUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 text-salesforce-blue hover:underline"
          >
            Exam Guide <ExternalLink className="h-3 w-3" aria-hidden="true" />
          </a>
          <span className="mx-1.5">&middot;</span>
        </>
      )}
      <a
        href={EXAM_PRICING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-0.5 text-salesforce-blue hover:underline"
      >
        Exam Pricing <ExternalLink className="h-3 w-3" aria-hidden="true" />
      </a>
      <span className="mx-1.5">&middot;</span>
      <span>Verified Aug 2026</span>
    </div>
  )
}
