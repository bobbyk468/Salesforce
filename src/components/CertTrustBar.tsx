import { CheckCircle, Users, RefreshCw, ShieldCheck } from 'lucide-react'
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
    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-gray-500 py-3">
      <span className="inline-flex items-center gap-1">
        <CheckCircle className="h-3.5 w-3.5 text-green-500" aria-hidden="true" />
        {questionsLabel}
      </span>
      <span className="inline-flex items-center gap-1">
        <Users className="h-3.5 w-3.5 text-blue-500" aria-hidden="true" />
        {socialLabel}
      </span>
      <span className="inline-flex items-center gap-1">
        <RefreshCw className="h-3.5 w-3.5 text-purple-500" aria-hidden="true" />
        Updated {RELEASE_CURRENT}
      </span>
      <span className="inline-flex items-center gap-1">
        <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
        Verified vs official exam guide
      </span>
    </div>
  )
}
