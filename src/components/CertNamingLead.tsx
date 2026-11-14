import { getCertNamingLeadText } from '@/lib/cert-keyword-clusters'

/**
 * The naming-variant line that sits directly under a page's H1.
 *
 * Salesforce renamed most credentials and reissued the exam codes, so the same
 * exam is searched for under the bare name, the vendor-prefixed name, the
 * "Certified" name, both "... certification" phrasings, the legacy credential
 * name and both the current and legacy codes. Naming all of them in the line
 * under the H1 is what lets one URL answer every one of those queries.
 *
 * `tone` picks the styling for where it renders: "hero" inside the blue hero
 * banner of the bespoke bodies, "card" inside CertificationCard's header.
 */
export default function CertNamingLead({
  slug,
  tone = 'hero',
}: {
  slug: string
  tone?: 'hero' | 'card'
}) {
  const text = getCertNamingLeadText(slug)
  if (!text) return null
  return (
    <p
      data-cert-naming-lead
      className={
        tone === 'card'
          ? 'mt-3 text-sm text-white/90 max-w-3xl'
          : 'text-white/90 text-xs sm:text-sm max-w-2xl mb-6'
      }
    >
      {text}
    </p>
  )
}
