import { ShieldCheck } from 'lucide-react'
import { getCertKeywordCluster } from '@/lib/cert-keyword-clusters'
import { RELEASE_CURRENT } from '@/lib/release-data'

/**
 * The NDA-compliant "practice questions vs unofficial dumps" section.
 *
 * "<exam> dumps" is one of the highest-volume queries for every credential and
 * the results are almost entirely braindump sites. This section answers the
 * query honestly on-page: it names the exact phrasings candidates type, then
 * sets out why original scenario questions are the safer buy. Every
 * certification page renders it, parameterised from the keyword cluster.
 */
export default function CertDumpsComparison({ slug }: { slug: string }) {
  const cluster = getCertKeywordCluster(slug)
  if (!cluster) return null
  const { bare, vendorName, codes, legacyNames } = cluster
  const primaryCode = codes[0]

  const searchPhrases = [...new Set([
    `${bare} dumps`,
    `${vendorName} dumps`,
    ...codes.map((code) => `${code} dumps`),
    ...legacyNames.map((name) => `${name} dumps`),
  ])]

  const rows: [string, string, string][] = [
    [
      'Credential compliance',
      '100% legitimate and NDA-compliant',
      'Violates the issuer NDA; risks credential revocation',
    ],
    [
      'Blueprint accuracy',
      `Aligned with the current ${bare} exam outline`,
      'Frequently stale, pre-refresh questions with wrong answers',
    ],
    [
      'Scenario reasoning',
      'Detailed why-right and why-wrong explanations',
      'Rote memorisation that fails on reworded exam scenarios',
    ],
    [
      'On-the-job readiness',
      `Builds real ${bare} implementation skills`,
      'Zero transferable project or technical interview skill',
    ],
    [
      'Release currency',
      `Rewritten each release cycle, currently ${RELEASE_CURRENT}`,
      'Frozen at whichever release the leak came from',
    ],
    [
      'Detection risk',
      'Nothing is copied, so there is nothing to detect',
      'Issuers monitor for dump usage and audit suspect scores',
    ],
  ]

  return (
    <section
      id="practice-vs-dumps"
      className="mt-12 rounded-xl border border-gray-100 bg-white p-5 sm:p-6 scroll-mt-24"
      aria-labelledby="dumps-comparison-heading"
    >
      <div className="flex items-start gap-3 mb-3">
        <ShieldCheck className="h-5 w-5 text-green-600 mt-0.5 shrink-0" aria-hidden="true" />
        <h2 id="dumps-comparison-heading" className="text-xl font-bold text-gray-900">
          Official Exam Code of Conduct: Practice Questions vs. Unofficial {bare}
          {primaryCode ? ` (${primaryCode})` : ''} Dumps
        </h2>
      </div>
      <p className="text-sm text-gray-700 mb-4">
        Many candidates search for{' '}
        {searchPhrases.map((phrase, i) => (
          <span key={phrase}>
            {i > 0 ? (i === searchPhrases.length - 1 ? ' or ' : ', ') : ''}
            &ldquo;{phrase}&rdquo;
          </span>
        ))}{' '}
        hoping for a shortcut to pass the {bare} certification. Here is why original, scenario-based{' '}
        {bare} practice questions are a safer and higher-ROI investment than braindumps:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <caption className="sr-only">
            {bare} practice questions compared with unofficial {bare} dumps
          </caption>
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Factor</th>
              <th scope="col" className="py-2.5 pr-4 font-semibold text-emerald-700">
                Verified {bare} practice questions
              </th>
              <th scope="col" className="py-2.5 font-semibold text-red-700">
                Unofficial {bare} dumps
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {rows.map(([factor, good, bad], i) => (
              <tr key={factor} className={i < rows.length - 1 ? 'border-b border-gray-100' : ''}>
                <th scope="row" className="py-2.5 pr-4 font-medium text-left text-gray-900">{factor}</th>
                <td className="py-2.5 pr-4 text-emerald-700">{good}</td>
                <td className="py-2.5 text-red-600">{bad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-600 mt-3">
        Credential issuers monitor for dump usage and can revoke a certification after it has been awarded.
        Every {bare} question on this page is written from the published exam outline, never copied from a
        live exam.
      </p>
    </section>
  )
}
