import { getCertKeywordCluster, listNames } from '@/lib/cert-keyword-clusters'

/**
 * The naming-variant lead that opens every certification page.
 *
 * Salesforce renamed most credentials and reissued the exam codes, so the same
 * exam is searched for under the bare name, the vendor-prefixed name, the
 * "Certified" name, the "... certification" phrasing, the legacy credential
 * name and both the current and legacy codes. Stating all of them in the first
 * paragraph is what lets one URL answer every one of those queries.
 */
export default function CertNamingLead({ slug }: { slug: string }) {
  const cluster = getCertKeywordCluster(slug)
  if (!cluster) return null
  const { bare, vendorName, certifiedName, aliases } = cluster

  const nameVariants = [...new Set([bare, vendorName, certifiedName])]
  // The registry's search aliases overlap the three name variants above; listing
  // a name twice in one sentence reads like a glitch.
  const extraAliases = aliases.filter((alias) => !nameVariants.includes(alias))

  return (
    <p data-cert-naming-lead className="text-sm text-gray-700 mb-6 rounded-xl border border-gray-100 bg-gray-50/60 px-4 py-3">
      <strong>{bare}</strong> is the exam behind the {certifiedName} credential, and this page is the{' '}
      {bare} certification study guide for it. You are in the right place whether you searched for{' '}
      {nameVariants.join(', ')}, {bare} certification or {vendorName} certification.
      {extraAliases.length > 0 ? (
        <>
          {' '}
          The same exam is also listed and searched for as {listNames(extraAliases)} &mdash; every one of those
          names and codes points to this one {bare} certification guide.
        </>
      ) : null}
    </p>
  )
}
