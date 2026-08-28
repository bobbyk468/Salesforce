/** Scalability/caching/CDN layers for B2C Commerce Architect. */
export default function B2CScalabilityDiagram() {
  return (
    <figure id="b2c-scalability-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">B2C Commerce scalability layers (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        Requests hit a <strong>CDN</strong> first (static assets, cached pages), then an <strong>application
        cache</strong> layer, and only reach the <strong>origin server</strong> for truly dynamic content — this
        layering is what lets a storefront handle Black Friday-scale traffic.
      </p>
      <svg role="img" aria-labelledby="b2csc-title" className="w-full max-w-4xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 720 160" xmlns="http://www.w3.org/2000/svg">
        <title id="b2csc-title">Request flows through CDN for static assets, then application cache, then origin server only for dynamic content — each layer reduces load on the next</title>
        <defs><marker id="b2cscArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        <rect x="16" y="48" width="160" height="64" rx="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
        <text x="96" y="72" textAnchor="middle" fill="#1e293b" fontWeight="600">Shopper Request</text>
        <path d="M 176 80 L 208 80" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#b2cscArrow)" />
        <rect x="216" y="48" width="150" height="64" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="291" y="72" textAnchor="middle" fill="#0f172a" fontWeight="700">CDN</text>
        <text x="291" y="90" textAnchor="middle" fill="#334155">Static assets, cached pages</text>
        <path d="M 366 80 L 398 80" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#b2cscArrow)" />
        <rect x="406" y="48" width="150" height="64" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
        <text x="481" y="72" textAnchor="middle" fill="#0f172a" fontWeight="700">App Cache</text>
        <text x="481" y="90" textAnchor="middle" fill="#334155">Page/fragment cache</text>
        <path d="M 556 80 L 588 80" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#b2cscArrow)" />
        <rect x="596" y="48" width="110" height="64" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
        <text x="651" y="72" textAnchor="middle" fill="#0f172a" fontWeight="700">Origin</text>
        <text x="651" y="90" textAnchor="middle" fill="#334155">Dynamic only</text>
      </svg>
    </figure>
  )
}
