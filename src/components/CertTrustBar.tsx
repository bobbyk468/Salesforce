import Link from '@/components/AppLink'
import { SLUG_TO_EXAM_GUIDE_URL } from '@/lib/cert-seo-data'
import { OFFICIAL_CREDENTIAL_URLS, SALESFORCE_CERTIFICATION_CATALOG_URL } from '@/lib/official-credential-urls'
import { getCredentialStatus } from '@/lib/credential-status'

interface CertTrustBarProps {
  slug: string
}

export default function CertTrustBar({ slug }: CertTrustBarProps) {
  const status = getCredentialStatus(slug)
  const transition = status?.kind === 'transitioned' ? status : undefined
  const examGuideUrl = transition?.sourceUrl || SLUG_TO_EXAM_GUIDE_URL[slug]
    || OFFICIAL_CREDENTIAL_URLS[slug]
    || (slug.startsWith('claude-certified-') ? undefined : SALESFORCE_CERTIFICATION_CATALOG_URL)

  return (
    <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 py-3 text-xs text-gray-500">
      <span>Free sample questions</span>
      <span>Independent exam-prep resource</span>
      <Link href="/editorial-policy" className="inline-block py-1 text-salesforce-blue hover:underline">
        Editorial policy
      </Link>
      {examGuideUrl ? (
        <a href={examGuideUrl} target="_blank" rel="nofollow noopener noreferrer" className="inline-block py-1 text-salesforce-blue hover:underline">
          {transition ? 'Read the Salesforce credential transition notice' : 'Confirm current details in the official guide'}
        </a>
      ) : (
        <span>Confirm current details with the certification issuer</span>
      )}
    </div>
  )
}
