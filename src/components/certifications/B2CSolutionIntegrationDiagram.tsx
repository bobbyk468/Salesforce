/** Service Cloud + B2C Commerce + Marketing Cloud integration pattern for
 * B2C Solution Architect. */
export default function B2CSolutionIntegrationDiagram() {
  return (
    <figure id="b2c-solution-integration-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">B2C multi-cloud integration pattern (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        <strong>B2C Commerce</strong> captures purchase behavior, syncs it to <strong>Marketing Cloud</strong> for
        personalized campaigns, and hands off post-purchase issues to <strong>Service Cloud</strong> — all three
        need a shared customer identity to stay in sync.
      </p>
      <svg role="img" aria-labelledby="b2csi-title" className="w-full max-w-4xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
        <title id="b2csi-title">B2C Commerce, Marketing Cloud, and Service Cloud form a triangle connected by a shared customer identity, exchanging purchase, campaign, and case data</title>
        <defs><marker id="b2csiArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        <rect x="270" y="16" width="160" height="60" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="350" y="40" textAnchor="middle" fill="#0f172a" fontWeight="700">B2C Commerce</text>
        <text x="350" y="58" textAnchor="middle" fill="#334155">Purchase behavior</text>
        <rect x="30" y="140" width="180" height="60" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
        <text x="120" y="164" textAnchor="middle" fill="#0f172a" fontWeight="700">Marketing Cloud</text>
        <text x="120" y="182" textAnchor="middle" fill="#334155">Personalized campaigns</text>
        <rect x="490" y="140" width="180" height="60" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
        <text x="580" y="164" textAnchor="middle" fill="#0f172a" fontWeight="700">Service Cloud</text>
        <text x="580" y="182" textAnchor="middle" fill="#334155">Post-purchase support</text>
        <path d="M 300 76 L 160 140" stroke="#0b5cab" strokeWidth="1.5" markerEnd="url(#b2csiArrow)" />
        <path d="M 400 76 L 540 140" stroke="#0b5cab" strokeWidth="1.5" markerEnd="url(#b2csiArrow)" />
        <path d="M 210 170 L 490 170" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 3" />
        <text x="350" y="120" textAnchor="middle" fill="#475569" fontSize="10">Shared customer identity across all three</text>
      </svg>
    </figure>
  )
}
