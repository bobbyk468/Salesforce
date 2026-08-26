import { ExternalLink } from 'lucide-react'
import { SLUG_TO_EXAM_GUIDE_URL, EXAM_PRICING_URL } from '@/lib/cert-seo-data'
import { RELEASE_DATE, RELEASE_DATE_DISPLAY } from '@/lib/release-data'

export default function OfficialSourceRef({ slug }: { slug: string }) {
  const guideUrl = SLUG_TO_EXAM_GUIDE_URL[slug]
  const showSalesforcePricing = !slug.startsWith('claude-certified-')

  return (
    <div className="mt-6 rounded-lg border border-gray-100 bg-gray-50 px-4 py-3 text-xs text-gray-600">
      <p className="mb-1.5">
        <span className="font-semibold text-gray-700">Exam data verification:</span>{' '}
        questions, duration, passing score, fees, and section coverage were checked against official source references on{' '}
        <time dateTime={RELEASE_DATE}>{RELEASE_DATE_DISPLAY}</time>.
      </p>
      <p>
        <span className="font-medium text-gray-700">Official sources:</span>{' '}
        {guideUrl && (
          <>
            <a
              href={guideUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-salesforce-blue hover:underline"
            >
              Exam guide <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
            {showSalesforcePricing && <span className="mx-1.5">&middot;</span>}
          </>
        )}
        {showSalesforcePricing && (
          <a
            href={EXAM_PRICING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 text-salesforce-blue hover:underline"
          >
            Salesforce exam pricing <ExternalLink className="h-3 w-3" aria-hidden="true" />
          </a>
        )}
        <span className="mx-1.5">&middot;</span>
        <span>Independent prep resource; no braindumps or leaked exam questions.</span>
      </p>
    </div>
  )
}
