import Link from '@/components/AppLink'
import { getCredentialStatus, RETIREMENT_NEXT_STEPS } from '@/lib/credential-status'

export default function CredentialStatusNotice({ slug }: { slug: string }) {
  const status = getCredentialStatus(slug)
  if (!status) return null

  const isClaudeCredential = slug.startsWith('claude-certified-')

  const retired = status.kind === 'retired'
  const nextSteps = RETIREMENT_NEXT_STEPS[slug]

  return (
    <aside
      className={`mx-4 mb-6 rounded-xl border px-4 py-4 sm:mx-auto sm:max-w-7xl sm:px-5 ${
        retired ? 'border-amber-300 bg-amber-50' : 'border-blue-200 bg-blue-50'
      }`}
      aria-label={`Credential status: ${status.label}`}
    >
      <p className={`font-semibold ${retired ? 'text-amber-950' : 'text-blue-950'}`}>
        {status.label}
      </p>
      <p className={`mt-1 text-sm ${retired ? 'text-amber-900' : 'text-blue-900'}`}>
        {isClaudeCredential
          ? 'Pearson says eligibility is limited to Claude Partner Network organizations. Anthropic has not published exam fees, question counts, duration, or passing scores; check the issuer for current details.'
          : status.message}
      </p>
      {nextSteps?.length ? (
        <p className={`mt-2 text-sm ${retired ? 'text-amber-900' : 'text-blue-900'}`}>
          <span className="font-semibold">Active credentials to consider instead:</span>{' '}
          {nextSteps.map((step, i) => (
            <span key={step.href}>
              {i > 0 ? (i === nextSteps.length - 1 ? ' and ' : ', ') : ''}
              <Link href={step.href} className="font-medium underline">
                {step.label}
              </Link>
            </span>
          ))}
          .
          {slug === 'ai-associate' && (
            <>
              {' '}For current Salesforce AI learning, see{' '}
              <a href="https://trailhead.salesforce.com/agentblazer" target="_blank" rel="noopener noreferrer nofollow" className="font-medium underline">
                Agentblazer on Trailhead
              </a>
              .
            </>
          )}
        </p>
      ) : null}
      <a
        href={status.sourceUrl}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className={`mt-2 inline-block text-sm font-medium underline ${retired ? 'text-amber-950' : 'text-blue-950'}`}
      >
        {status.sourceLabel}
      </a>
    </aside>
  )
}
