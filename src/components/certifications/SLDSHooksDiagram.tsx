/** SLDS styling hooks layering for UX Designer: base tokens -> component-level hooks
 * override without touching core SLDS. */
export default function SLDSHooksDiagram() {
  return (
    <figure id="slds-hooks-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">SLDS styling hooks (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        SLDS <strong>design tokens</strong> set base colors/spacing platform-wide. <strong>Styling hooks</strong> let
        you override specific CSS custom properties at the component level — without touching or forking the core
        SLDS stylesheet.
      </p>
      <svg role="img" aria-labelledby="slds-title" className="w-full max-w-3xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 600 180" xmlns="http://www.w3.org/2000/svg">
        <title id="slds-title">Base SLDS design tokens set platform-wide styling; component-level styling hooks override specific CSS custom properties without forking core SLDS</title>
        <rect x="90" y="16" width="420" height="56" rx="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
        <text x="300" y="40" textAnchor="middle" fill="#1e293b" fontWeight="700">SLDS Design Tokens (base)</text>
        <text x="300" y="58" textAnchor="middle" fill="#475569">Colors, spacing, typography — platform-wide</text>
        <path d="M 300 72 L 300 96" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#sldsArrow)" />
        <defs><marker id="sldsArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        <rect x="90" y="104" width="420" height="56" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="300" y="128" textAnchor="middle" fill="#0f172a" fontWeight="700">Component Styling Hooks</text>
        <text x="300" y="146" textAnchor="middle" fill="#334155">--slds-c-button-color-background, etc. — scoped override</text>
      </svg>
    </figure>
  )
}
