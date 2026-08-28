/** Email send/deliverability flow for Email Specialist: authentication checks before
 * inbox placement. */
export default function EmailDeliverabilityDiagram() {
  return (
    <figure id="email-deliverability-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">Email send &amp; deliverability flow (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        Before an inbox provider accepts a message, it checks <strong>SPF</strong> (authorized senders),{' '}
        <strong>DKIM</strong> (signature integrity), and <strong>DMARC</strong> (policy on failure) — the Sender
        Authentication Package bundles all three plus a dedicated IP and domain.
      </p>
      <svg role="img" aria-labelledby="edd-title" className="w-full max-w-4xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 720 160" xmlns="http://www.w3.org/2000/svg">
        <title id="edd-title">Email send passes SPF, DKIM, and DMARC checks before an inbox provider decides inbox, spam, or reject placement</title>
        <defs><marker id="eddArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        <rect x="16" y="48" width="120" height="64" rx="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
        <text x="76" y="72" textAnchor="middle" fill="#1e293b" fontWeight="600">Email Sent</text>
        <text x="76" y="90" textAnchor="middle" fill="#475569">via SAP-bundled IP</text>
        <path d="M 136 80 L 168 80" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#eddArrow)" />
        <rect x="176" y="48" width="120" height="64" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="1.5" />
        <text x="236" y="76" textAnchor="middle" fill="#0f172a" fontWeight="600">SPF Check</text>
        <text x="236" y="94" textAnchor="middle" fill="#334155">Authorized IP?</text>
        <path d="M 296 80 L 328 80" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#eddArrow)" />
        <rect x="336" y="48" width="120" height="64" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" />
        <text x="396" y="76" textAnchor="middle" fill="#0f172a" fontWeight="600">DKIM Check</text>
        <text x="396" y="94" textAnchor="middle" fill="#334155">Signature valid?</text>
        <path d="M 456 80 L 488 80" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#eddArrow)" />
        <rect x="496" y="48" width="120" height="64" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
        <text x="556" y="76" textAnchor="middle" fill="#0f172a" fontWeight="600">DMARC Policy</text>
        <text x="556" y="94" textAnchor="middle" fill="#334155">none/quarantine/reject</text>
        <path d="M 616 80 L 648 80" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#eddArrow)" />
        <text x="680" y="76" textAnchor="middle" fill="#059669" fontWeight="700" fontSize="10">Inbox</text>
        <text x="680" y="92" textAnchor="middle" fill="#dc2626" fontWeight="700" fontSize="10">or Spam</text>
      </svg>
    </figure>
  )
}
