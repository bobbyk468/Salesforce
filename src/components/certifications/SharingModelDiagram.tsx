/** Implicit vs. explicit record sharing for Advanced Administrator: OWD baseline, then role
 * hierarchy/manual/sharing-rule mechanisms that extend access on top of it. */
export default function SharingModelDiagram() {
  return (
    <figure id="sharing-model-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">Implicit vs. explicit sharing (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        <strong>Implicit</strong> access comes automatically from ownership and role hierarchy — no admin config needed.
        <strong> Explicit</strong> access is deliberately granted: sharing rules, manual shares, and permission set groups
        layered on top of Organization-Wide Defaults.
      </p>
      <svg role="img" aria-labelledby="sm-title" className="w-full max-w-3xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
        <title id="sm-title">OWD sets the baseline; role hierarchy grants implicit access upward; sharing rules and manual shares grant explicit access on top</title>
        <defs><marker id="smArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        <rect x="30" y="16" width="540" height="48" rx="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
        <text x="300" y="36" textAnchor="middle" fill="#0f172a" fontWeight="700">Organization-Wide Defaults (baseline)</text>
        <text x="300" y="52" textAnchor="middle" fill="#475569">Private / Public Read Only / Public Read-Write</text>
        <path d="M 300 64 L 300 84" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#smArrow)" />
        <rect x="30" y="92" width="260" height="72" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="160" y="114" textAnchor="middle" fill="#0f172a" fontWeight="700">Implicit — Role Hierarchy</text>
        <text x="160" y="132" textAnchor="middle" fill="#334155">Managers inherit access to</text>
        <text x="160" y="148" textAnchor="middle" fill="#334155">records owned by subordinates</text>
        <rect x="310" y="92" width="260" height="72" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
        <text x="440" y="114" textAnchor="middle" fill="#0f172a" fontWeight="700">Explicit — Sharing Rules</text>
        <text x="440" y="132" textAnchor="middle" fill="#334155">Criteria- or owner-based rules,</text>
        <text x="440" y="148" textAnchor="middle" fill="#334155">manual shares, territory model</text>
        <path d="M 160 164 L 160 190" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#smArrow)" />
        <path d="M 440 164 L 440 190" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#smArrow)" />
        <rect x="80" y="198" width="440" height="44" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
        <text x="300" y="224" textAnchor="middle" fill="#0f172a" fontWeight="600">Effective access = OWD + all implicit + all explicit grants</text>
      </svg>
    </figure>
  )
}
