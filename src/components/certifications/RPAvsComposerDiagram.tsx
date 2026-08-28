/** RPA vs. API-based Composer automation decision logic for MuleSoft Hyperautomation Developer. */
export default function RPAvsComposerDiagram() {
  return (
    <figure id="rpa-composer-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">RPA vs. API-based automation decision logic (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        Use <strong>RPA</strong> when a system has no usable API — it automates the UI directly, clicking and typing
        like a human. Use <strong>API-led automation</strong> (Composer, MuleSoft flows) whenever a stable API
        exists — it's faster, more reliable, and easier to maintain than UI automation.
      </p>
      <svg role="img" aria-labelledby="rpa-title" className="w-full max-w-3xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
        <title id="rpa-title">Decision: does the target system have a usable API? If yes, use API-led automation; if no, use RPA to automate the UI directly</title>
        <defs><marker id="rpaArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        <rect x="200" y="8" width="200" height="52" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
        <text x="300" y="30" textAnchor="middle" fill="#0f172a" fontWeight="600">Does the system</text>
        <text x="300" y="46" textAnchor="middle" fill="#334155">have a usable API?</text>
        <path d="M 250 60 L 160 96" stroke="#dc2626" strokeWidth="2" markerEnd="url(#rpaArrow)" />
        <text x="180" y="82" fill="#dc2626" fontWeight="600">No</text>
        <path d="M 350 60 L 440 96" stroke="#059669" strokeWidth="2" markerEnd="url(#rpaArrow)" />
        <text x="410" y="82" fill="#059669" fontWeight="600">Yes</text>
        <rect x="30" y="104" width="260" height="88" rx="8" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
        <text x="160" y="128" textAnchor="middle" fill="#0f172a" fontWeight="700">RPA (Robotic Process Automation)</text>
        <text x="160" y="148" textAnchor="middle" fill="#334155">Automates the UI directly —</text>
        <text x="160" y="164" textAnchor="middle" fill="#334155">clicks, types, reads screens</text>
        <text x="160" y="180" textAnchor="middle" fill="#334155">Fragile if the UI changes</text>
        <rect x="310" y="104" width="260" height="88" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
        <text x="440" y="128" textAnchor="middle" fill="#0f172a" fontWeight="700">API-led (Composer/MuleSoft)</text>
        <text x="440" y="148" textAnchor="middle" fill="#334155">Calls the API contract directly —</text>
        <text x="440" y="164" textAnchor="middle" fill="#334155">faster, more reliable</text>
        <text x="440" y="180" textAnchor="middle" fill="#334155">Preferred whenever available</text>
      </svg>
    </figure>
  )
}
