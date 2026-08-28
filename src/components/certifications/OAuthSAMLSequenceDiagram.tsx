/** OAuth 2.0 / SAML SSO handshake sequence for Identity & Access Management Architect. */
export default function OAuthSAMLSequenceDiagram() {
  return (
    <figure id="oauth-saml-sequence-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">SAML SSO handshake sequence (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        In SP-initiated SSO, the user hits Salesforce (the <strong>Service Provider</strong>), gets redirected to
        the <strong>Identity Provider</strong> to authenticate, and returns with a signed SAML assertion that
        Salesforce validates before granting a session.
      </p>
      <svg role="img" aria-labelledby="oas-title" className="w-full max-w-4xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
        <title id="oas-title">User requests Salesforce, gets redirected to Identity Provider to authenticate, IdP returns a signed SAML assertion, Salesforce validates it and grants a session</title>
        <defs><marker id="oasArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        <rect x="16" y="16" width="130" height="188" rx="0" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2 3" />
        <text x="81" y="12" textAnchor="middle" fill="#475569" fontWeight="600">User</text>
        <rect x="285" y="16" width="130" height="188" rx="0" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2 3" />
        <text x="350" y="12" textAnchor="middle" fill="#475569" fontWeight="600">Salesforce (SP)</text>
        <rect x="554" y="16" width="130" height="188" rx="0" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2 3" />
        <text x="619" y="12" textAnchor="middle" fill="#475569" fontWeight="600">Identity Provider</text>

        <path d="M 81 40 L 350 40" stroke="#0b5cab" strokeWidth="1.5" markerEnd="url(#oasArrow)" />
        <text x="215" y="34" textAnchor="middle" fill="#334155" fontSize="10">1. Request app</text>

        <path d="M 350 70 L 619 70" stroke="#0b5cab" strokeWidth="1.5" markerEnd="url(#oasArrow)" />
        <text x="484" y="64" textAnchor="middle" fill="#334155" fontSize="10">2. Redirect to IdP</text>

        <path d="M 619 100 L 81 100" stroke="#0b5cab" strokeWidth="1.5" markerEnd="url(#oasArrow)" />
        <text x="350" y="94" textAnchor="middle" fill="#334155" fontSize="10">3. User authenticates at IdP</text>

        <path d="M 81 130 L 350 130" stroke="#059669" strokeWidth="1.5" markerEnd="url(#oasArrow)" />
        <text x="215" y="124" textAnchor="middle" fill="#334155" fontSize="10">4. POST signed SAML assertion</text>

        <path d="M 350 160 L 81 160" stroke="#059669" strokeWidth="1.5" markerEnd="url(#oasArrow)" />
        <text x="215" y="154" textAnchor="middle" fill="#334155" fontSize="10">5. Session granted</text>
      </svg>
    </figure>
  )
}
