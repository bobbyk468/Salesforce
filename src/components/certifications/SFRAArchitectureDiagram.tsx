/** SFRA (Storefront Reference Architecture) request flow for B2C Commerce Developer. */
export default function SFRAArchitectureDiagram() {
  return (
    <figure id="sfra-architecture-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">SFRA request flow (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        A storefront request hits a <strong>Route</strong> (controller), which calls <strong>Models</strong> to
        fetch/shape data, renders an <strong>ISML template</strong>, and can be extended by a{' '}
        <strong>custom cartridge</strong> without ever modifying the base SFRA cartridge.
      </p>
      <svg role="img" aria-labelledby="sfra-title" className="w-full max-w-4xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 720 200" xmlns="http://www.w3.org/2000/svg">
        <title id="sfra-title">Request enters a Route/controller, calls Models to shape data, renders an ISML template, with a custom cartridge overriding or extending base SFRA behavior</title>
        <defs><marker id="sfraArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        <rect x="16" y="60" width="130" height="64" rx="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
        <text x="81" y="84" textAnchor="middle" fill="#1e293b" fontWeight="600">Browser Request</text>
        <text x="81" y="102" textAnchor="middle" fill="#475569">e.g. /Product-Show</text>
        <path d="M 146 92 L 178 92" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#sfraArrow)" />
        <rect x="186" y="60" width="130" height="64" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="251" y="84" textAnchor="middle" fill="#0f172a" fontWeight="700">Route/Controller</text>
        <text x="251" y="102" textAnchor="middle" fill="#334155">Middleware chain</text>
        <path d="M 316 92 L 348 92" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#sfraArrow)" />
        <rect x="356" y="60" width="130" height="64" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" />
        <text x="421" y="84" textAnchor="middle" fill="#0f172a" fontWeight="600">Model</text>
        <text x="421" y="102" textAnchor="middle" fill="#334155">Fetches/shapes data</text>
        <path d="M 486 92 L 518 92" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#sfraArrow)" />
        <rect x="526" y="60" width="180" height="64" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
        <text x="616" y="84" textAnchor="middle" fill="#0f172a" fontWeight="600">ISML Template</text>
        <text x="616" y="102" textAnchor="middle" fill="#334155">Renders HTML response</text>
        <path d="M 251 124 L 251 152" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 3" />
        <rect x="140" y="152" width="222" height="40" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 3" />
        <text x="251" y="176" textAnchor="middle" fill="#475569">Custom cartridge extends/overrides — base SFRA untouched</text>
      </svg>
    </figure>
  )
}
