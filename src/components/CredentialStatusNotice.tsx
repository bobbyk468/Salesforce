import { getCredentialStatus } from '@/lib/credential-status'

export default function CredentialStatusNotice({ slug }: { slug: string }) {
  const status = getCredentialStatus(slug)
  if (!status) return null

  const retired = status.kind === 'retired'

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
        {status.message}{' '}
        {slug === 'ai-associate' && retired && (
          <>
            For current Salesforce AI learning, visit{' '}
            <a href="https://trailhead.salesforce.com/agentblazer" target="_blank" rel="noopener noreferrer nofollow" className="font-medium underline">
              Agentblazer on Trailhead
            </a>
            {' '}or explore the current{' '}
            <a href="/certifications/agentforce-specialist" className="font-medium underline">
              Agentforce Specialist
            </a>
            {' '}credential.
          </>
        )}
      </p>
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
