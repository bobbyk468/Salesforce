/** Reply Mail Management flow for Marketing Cloud Engagement Admin: keeps subscriber
 * lists clean by auto-processing out-of-office and bounce-style replies. */
export default function ReplyMailManagementDiagram() {
  return (
    <figure id="reply-mail-mgmt-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">Reply Mail Management (RMM) flow (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        RMM inspects inbound replies to marketing sends and automatically classifies them — out-of-office and
        auto-replies are filtered out, while genuine replies route to a real inbox for follow-up.
      </p>
      <svg role="img" aria-labelledby="rmm-title" className="w-full max-w-4xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 700 170" xmlns="http://www.w3.org/2000/svg">
        <title id="rmm-title">Inbound reply classified by RMM: auto-reply/out-of-office is filtered, genuine reply routes to a monitored inbox</title>
        <defs><marker id="rmmArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        <rect x="16" y="52" width="140" height="64" rx="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
        <text x="86" y="76" textAnchor="middle" fill="#1e293b" fontWeight="600">Inbound Reply</text>
        <text x="86" y="94" textAnchor="middle" fill="#475569">To a marketing send</text>
        <path d="M 156 84 L 188 84" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#rmmArrow)" />
        <rect x="196" y="52" width="160" height="64" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="276" y="76" textAnchor="middle" fill="#0f172a" fontWeight="700">RMM Classification</text>
        <text x="276" y="94" textAnchor="middle" fill="#334155">Auto-reply vs. genuine</text>
        <path d="M 300 116 L 220 140" stroke="#dc2626" strokeWidth="1.5" markerEnd="url(#rmmArrow)" />
        <path d="M 356 84 L 388 84" stroke="#059669" strokeWidth="2" markerEnd="url(#rmmArrow)" />
        <rect x="80" y="140" width="200" height="24" rx="6" fill="#fee2e2" stroke="#dc2626" strokeWidth="1" />
        <text x="180" y="156" textAnchor="middle" fill="#7f1d1d" fontSize="10">Out-of-office → filtered, list stays clean</text>
        <rect x="396" y="52" width="160" height="64" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" />
        <text x="476" y="76" textAnchor="middle" fill="#0f172a" fontWeight="600">Genuine Reply</text>
        <text x="476" y="94" textAnchor="middle" fill="#334155">Routed to real inbox</text>
      </svg>
    </figure>
  )
}
