/** Tableau Server High Availability / Disaster Recovery topology for Tableau Architect. */
export default function TableauHADRDiagram() {
  return (
    <figure id="tableau-hadr-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">High Availability / Disaster Recovery topology (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        HA distributes VizQL and Backgrounder processes across <strong>multiple nodes</strong> behind a gateway, so a
        single node failure doesn’t take the cluster down. DR requires a separate, geographically distinct
        environment restored from regular repository backups.
      </p>
      <svg role="img" aria-labelledby="thadr-title" className="w-full max-w-4xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 720 180" xmlns="http://www.w3.org/2000/svg">
        <title id="thadr-title">Gateway load-balances across multiple application nodes for high availability; a separate DR site is restored from regular repository backups</title>
        <defs><marker id="thadrArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        <rect x="16" y="56" width="110" height="56" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="71" y="84" textAnchor="middle" fill="#0f172a" fontWeight="700">Gateway</text>
        <path d="M 126 70 L 158 40" stroke="#0b5cab" strokeWidth="1.5" markerEnd="url(#thadrArrow)" />
        <path d="M 126 84 L 158 84" stroke="#0b5cab" strokeWidth="1.5" markerEnd="url(#thadrArrow)" />
        <path d="M 126 98 L 158 128" stroke="#0b5cab" strokeWidth="1.5" markerEnd="url(#thadrArrow)" />
        {[16, 66, 116].map((y) => (
          <rect key={y} x="166" y={y} width="130" height="40" rx="6" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" />
        ))}
        <text x="231" y="40" textAnchor="middle" fill="#0f172a" fontWeight="600" fontSize="10">Node A (VizQL)</text>
        <text x="231" y="90" textAnchor="middle" fill="#0f172a" fontWeight="600" fontSize="10">Node B (VizQL)</text>
        <text x="231" y="140" textAnchor="middle" fill="#0f172a" fontWeight="600" fontSize="10">Node C (Backgrounder)</text>
        <path d="M 296 66 L 340 100" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#thadrArrow)" />
        <rect x="348" y="72" width="130" height="56" rx="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
        <text x="413" y="94" textAnchor="middle" fill="#1e293b" fontWeight="600">Repository</text>
        <text x="413" y="112" textAnchor="middle" fill="#475569">Scheduled backups</text>
        <path d="M 478 100 L 510 100" stroke="#d97706" strokeWidth="2" markerEnd="url(#thadrArrow)" />
        <rect x="518" y="72" width="150" height="56" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
        <text x="593" y="94" textAnchor="middle" fill="#0f172a" fontWeight="600">DR Site</text>
        <text x="593" y="112" textAnchor="middle" fill="#334155">Restored from backup</text>
      </svg>
    </figure>
  )
}
