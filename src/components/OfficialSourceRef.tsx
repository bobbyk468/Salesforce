import { SLUG_TO_EXAM_GUIDE_URL, EXAM_PRICING_URL } from '@/lib/cert-seo-data'

export default function OfficialSourceRef({ slug }: { slug: string }) {
  const guideUrl = SLUG_TO_EXAM_GUIDE_URL[slug]
  const showSalesforcePricing = !slug.startsWith('claude-certified-')

  return (
    <div className="mt-6 rounded-lg border border-gray-100 bg-gray-50 px-4 py-3 text-xs text-gray-600">
      <p className="mb-1.5">
        <span className="font-semibold text-gray-700">Official references:</span>{' '}
        Use the issuer’s current materials to confirm exam objectives, format, and fees before booking.
      </p>
      <p>
        <span className="font-medium text-gray-700">Official sources:</span>{' '}
        {guideUrl && (
          <>
            <a
              href={guideUrl}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-salesforce-dark hover:underline"
            >
              Exam guide
            </a>
            {showSalesforcePricing && <span className="mx-1.5">&middot;</span>}
          </>
        )}
        {showSalesforcePricing && (
          <a
            href={EXAM_PRICING_URL}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center gap-0.5 text-salesforce-dark hover:underline"
          >
            Salesforce exam pricing
          </a>
        )}
        <span className="mx-1.5">&middot;</span>
        <span>Independent exam-prep resource; details may change.</span>
      </p>
    </div>
  )
}
