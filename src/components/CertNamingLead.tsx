import { getCertNamingLeadParts } from '@/lib/cert-keyword-clusters'

/**
 * The naming-variant strip that sits directly under a page's H1.
 *
 * Salesforce renamed most credentials and reissued the exam codes, so the same
 * exam is searched for under the bare name, the vendor-prefixed name, the
 * "Certified" name, both "... certification" phrasings, the legacy credential
 * name and both the current and legacy codes. Naming all of them under the H1
 * is what lets one URL answer every one of those queries.
 *
 * Those names used to run together as a 75-word paragraph. They now render as
 * two sentences plus a labelled `<dl>` of pills, which is the same SSR text in
 * a form that can be scanned rather than read, and that fits a phone without
 * pushing the exam summary below the fold.
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
  const parts = getCertNamingLeadParts(slug)
  if (!parts) return null
  const onDark = tone === 'hero'

  const labelClass = onDark
    ? 'shrink-0 text-[11px] font-semibold uppercase tracking-wide text-white/70'
    : 'shrink-0 text-[11px] font-semibold uppercase tracking-wide text-gray-500'
  const pillClass = onDark
    ? 'rounded-full bg-white/15 px-2 py-0.5 text-xs font-medium text-white'
    : 'rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs font-medium text-gray-700'
  const codePillClass = onDark
    ? 'rounded-full bg-white/25 px-2 py-0.5 text-xs font-semibold text-white'
    : 'rounded-full bg-salesforce-blue/10 px-2 py-0.5 text-xs font-semibold text-salesforce-dark'

  const rows: { label: string; values: string[]; emphasis?: boolean }[] = [
    { label: 'Official credential', values: [parts.officialCredential] },
    ...(parts.currentCode
      ? [{ label: 'Current exam code', values: [parts.currentCode], emphasis: true }]
      : []),
    ...(parts.legacyCodes.length
      ? [{ label: 'Legacy / alternate codes', values: parts.legacyCodes, emphasis: true }]
      : []),
    ...(parts.alsoSearchedAs.length
      ? [{ label: 'Also searched as', values: parts.alsoSearchedAs }]
      : []),
  ]

  return (
    <div
      data-cert-naming-lead
      className={onDark ? 'max-w-3xl mb-6' : 'mt-3 max-w-3xl'}
    >
      <p className={onDark ? 'text-white/90 text-xs sm:text-sm' : 'text-sm text-gray-600'}>
        {parts.lead}
      </p>
      <dl className="mt-3 space-y-1.5">
        {rows.map((row) => (
          <div key={row.label} className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <dt className={labelClass}>{row.label}</dt>
            <dd className="flex flex-wrap gap-1.5">
              {row.values.map((value) => (
                <span key={value} className={row.emphasis ? codePillClass : pillClass}>
                  {value}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
