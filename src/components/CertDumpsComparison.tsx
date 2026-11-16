import { ShieldCheck } from 'lucide-react'
import { getCertKeywordCluster } from '@/lib/cert-keyword-clusters'
import { RELEASE_CURRENT } from '@/lib/release-data'

/** "a", "b" or "c", each in typographic quotes. */
function QuotedPhrases({ phrases }: { phrases: string[] }) {
  return (
    <>
      {phrases.map((phrase, i) => (
        <span key={phrase}>
          {i > 0 ? (i === phrases.length - 1 ? ' or ' : ', ') : ''}
          &ldquo;{phrase}&rdquo;
        </span>
      ))}
    </>
  )
}

/**
 * The NDA-compliant "practice questions vs unofficial dumps" section.
 *
 * "<exam> dumps" and "<exam> questions" are two of the highest-volume queries
 * for every credential, and the dumps results are almost entirely braindump
 * sites. This section answers both queries honestly on-page: it names the
 * exact phrasings candidates type -- the full official credential name, the
 * name without its issuer prefix, and every active and legacy exam code, each
 * paired with "dumps" and with "questions" -- then sets out why original
 * scenario questions are the safer buy. All 95 certification pages render it,
 * parameterised from the keyword cluster.
 *
 * Long credential names (the Accredited Professional designations run past 50
 * characters) are referred to as "this credential" in the table and closing
 * line rather than spelled out again, so the section reads as prose instead of
 * repeating one name seven times in three sentences.
 */
export default function CertDumpsComparison({ slug }: { slug: string }) {
  const cluster = getCertKeywordCluster(slug)
  if (!cluster) return null
  const { shortTitle, fullTitle, examCodes, dumpPhrases, questionPhrases, vendor } = cluster
  const primaryCode = examCodes[0]
  const isAnthropic = vendor === 'Anthropic'
  const issuer = isAnthropic ? 'Anthropic' : 'Salesforce'
  // "Salesforce Accredited Marketing Cloud Advanced Cross Channel Professional"
  // in every table cell is unreadable; short names stay spelled out.
  const ref = shortTitle.length > 32 ? 'this credential' : shortTitle
  const refThe = shortTitle.length > 32 ? 'this credential' : `the ${shortTitle}`

  const searchPhrases = [...new Set(dumpPhrases)]
  const askPhrases = [...new Set(questionPhrases)]

  const rows: [string, string, string][] = [
    [
      'Credential compliance',
      '100% legitimate and NDA-compliant',
      `Violates the ${issuer} certification agreement; risks credential revocation`,
    ],
    [
      'Blueprint accuracy',
      `Aligned with the current ${ref} exam outline`,
      'Frequently stale, pre-refresh questions with wrong answers',
    ],
    [
      'Scenario reasoning',
      'Detailed why-right and why-wrong explanations',
      'Rote memorisation that fails on reworded exam scenarios',
    ],
    [
      'On-the-job readiness',
      isAnthropic
        ? 'Builds real prompt, tool-use and agent design skills'
        : `Builds real ${ref} implementation skills`,
      'Zero transferable project or technical interview skill',
    ],
    [
      'Release currency',
      isAnthropic
        ? 'Rewritten as the model and API surface change'
        : `Rewritten each release cycle, currently ${RELEASE_CURRENT}`,
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
          Official Exam Code of Conduct: Practice Questions vs. Unofficial {shortTitle}
          {primaryCode ? ` (${primaryCode})` : ''} Dumps
        </h2>
      </div>
      <p className="text-sm text-gray-700 mb-3">
        Many candidates search for <QuotedPhrases phrases={searchPhrases} /> hoping for a shortcut
        past {refThe} exam. There is no safe version of that shortcut:{' '}
        {isAnthropic
          ? 'Anthropic publishes its certification terms, and recalled exam content breaches them.'
          : 'recalled exam content breaches the certification agreement you accept when you register.'}
      </p>
      <p className="text-sm text-gray-700 mb-4">
        If what you actually wanted was <QuotedPhrases phrases={askPhrases} />, that is what this
        page provides: original, scenario-based items written from the published {fullTitle} exam
        outline, each with a worked explanation. Here is how they compare with braindumps:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <caption className="sr-only">
            {fullTitle} practice questions compared with unofficial {shortTitle} dumps
          </caption>
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th scope="col" className="py-2.5 pr-4 font-semibold text-gray-900">Factor</th>
              <th scope="col" className="py-2.5 pr-4 font-semibold text-emerald-700">
                Verified practice questions
              </th>
              <th scope="col" className="py-2.5 font-semibold text-red-700">
                Unofficial dumps
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
        Credential issuers monitor for dump usage and can revoke a certification after it has been
        awarded. Every question on this page is written from the published exam outline, never
        copied from a live exam.
      </p>
    </section>
  )
}
