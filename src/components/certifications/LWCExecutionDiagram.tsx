/** Node.js vs. browser execution context for JavaScript Developer I — where LWC code
 * actually runs versus where standard JS tooling runs. */
export default function LWCExecutionDiagram() {
  return (
    <figure id="lwc-execution-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">Node.js vs. browser execution (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        LWC source is written once, but two different JS engines run it at two different times: <strong>Node.js</strong>{' '}
        compiles/bundles and runs Jest tests at build time; the <strong>browser</strong> executes the compiled
        component, handles the Shadow DOM, and fires lifecycle hooks at runtime.
      </p>
      <svg role="img" aria-labelledby="lwc-exec-title" className="w-full max-w-3xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
        <title id="lwc-exec-title">LWC source compiles and tests in Node.js at build time, then the compiled component executes in the browser at runtime with Shadow DOM and lifecycle hooks</title>
        <rect x="230" y="8" width="140" height="48" rx="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
        <text x="300" y="28" textAnchor="middle" fill="#1e293b" fontWeight="600">LWC Source (.js/.html)</text>
        <text x="300" y="44" textAnchor="middle" fill="#475569" fontSize="9">written once</text>
        <path d="M 260 56 L 160 92" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#lwcArrow)" />
        <path d="M 340 56 L 440 92" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#lwcArrow)" />
        <defs><marker id="lwcArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        <rect x="30" y="100" width="260" height="88" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="160" y="122" textAnchor="middle" fill="#0f172a" fontWeight="700">Node.js (build time)</text>
        <text x="160" y="142" textAnchor="middle" fill="#334155">Compiles/bundles the component</text>
        <text x="160" y="158" textAnchor="middle" fill="#334155">Runs Jest unit tests</text>
        <text x="160" y="174" textAnchor="middle" fill="#334155">No DOM, no browser APIs</text>
        <rect x="310" y="100" width="260" height="88" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
        <text x="440" y="122" textAnchor="middle" fill="#0f172a" fontWeight="700">Browser (runtime)</text>
        <text x="440" y="142" textAnchor="middle" fill="#334155">Executes compiled component</text>
        <text x="440" y="158" textAnchor="middle" fill="#334155">Shadow DOM encapsulation</text>
        <text x="440" y="174" textAnchor="middle" fill="#334155">connectedCallback, renderedCallback</text>
      </svg>
    </figure>
  )
}
