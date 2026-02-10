import { PlayCircle, Download } from 'lucide-react'
import Link from 'next/link'

interface CertPageCtaProps {
  slug: string
  certTitle: string
}

/** Prominent CTA above the fold (after intro, before certification card) for better CTR and engagement. */
export default function CertPageCta({ slug, certTitle }: CertPageCtaProps) {
  return (
    <div className="my-8 sm:my-10 bg-gradient-to-r from-salesforce-blue via-salesforce-light to-salesforce-blue rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-salesforce-blue/20">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        <Link
          href={`#practice-questions`}
          className="flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 text-sm sm:text-base w-full sm:w-auto justify-center"
        >
          <PlayCircle className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
          <span>Start Free Practice Test</span>
        </Link>
        <Link
          href="/contact"
          className="flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-3.5 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-dark transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 text-sm sm:text-base w-full sm:w-auto justify-center"
        >
          <Download className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
          <span>Download Study Plan</span>
        </Link>
      </div>
      <p className="text-center text-gray-600 text-xs sm:text-sm mt-4">
        Free practice questions • Updated for {new Date().getFullYear()} • No sign-up required
      </p>
    </div>
  )
}
