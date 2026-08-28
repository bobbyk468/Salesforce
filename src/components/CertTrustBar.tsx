import { getSocialProofNumber, getExamLogistics } from '@/lib/cert-seo-data'
import { RELEASE_CURRENT } from '@/lib/release-data'

interface CertTrustBarProps {
  slug: string
}

export default function CertTrustBar({ slug }: CertTrustBarProps) {
  const socialProof = getSocialProofNumber(slug)
  const logistics = getExamLogistics(slug)
  const questionsLabel = logistics ? `${logistics.questions} practice Qs` : '60+ practice Qs'
  const socialLabel = socialProof >= 1000
    ? `${(socialProof / 1000).toFixed(1)}K+ students/mo`
    : `${socialProof.toLocaleString()}+ students/mo`

  return (
    <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 py-3 text-xs text-gray-500">
      <span>{questionsLabel}</span>
      <span>{socialLabel}</span>
      <span>Updated {RELEASE_CURRENT}</span>
      <span>Verified vs official exam guide</span>
    </div>
  )
}
