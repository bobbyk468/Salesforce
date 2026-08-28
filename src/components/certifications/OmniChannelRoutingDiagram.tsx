/**
 * Omni-Channel routing logic for Service Cloud: how an incoming work item is matched
 * to an available, skilled agent via routing configuration, presence status, and
 * capacity — the core mechanism tested on the Service Cloud exam.
 */
export default function OmniChannelRoutingDiagram() {
  return (
    <figure
      id="omnichannel-routing-overview"
      className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24"
    >
      <figcaption className="text-base font-semibold text-gray-900 mb-1">
        Omni-Channel routing logic (exam mental model)
      </figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        A new Case, chat, or message enters a <strong>Routing Configuration</strong>, which applies either{' '}
        <strong>queue-based</strong> or <strong>skills-based</strong> routing. Omni-Channel then checks agent{' '}
        <strong>Presence Status</strong> and remaining <strong>capacity</strong> before pushing the work item to
        the best-matched, available agent.
      </p>
      <svg
        role="img"
        aria-labelledby="omni-routing-diagram-title"
        className="w-full max-w-4xl mx-auto h-auto"
        style={{ fontSize: '11px' }}
        viewBox="0 0 760 260"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="omni-routing-diagram-title">
          Diagram: incoming work item enters a routing configuration, applies queue-based or skills-based routing,
          checks agent presence status and capacity, then assigns to an available matched agent
        </title>
        <defs>
          <marker id="ocrArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" />
          </marker>
        </defs>

        <rect x="16" y="100" width="130" height="64" rx="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
        <text x="81" y="124" textAnchor="middle" fill="#1e293b" fontWeight="600">Incoming Work</text>
        <text x="81" y="142" textAnchor="middle" fill="#475569">Case, chat, message</text>

        <path d="M 146 132 L 178 132" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#ocrArrow)" />
        <rect x="186" y="100" width="150" height="64" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="261" y="124" textAnchor="middle" fill="#0f172a" fontWeight="700">Routing Configuration</text>
        <text x="261" y="142" textAnchor="middle" fill="#334155">Attached to the object</text>

        <path d="M 260 100 L 220 40" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#ocrArrow)" />
        <path d="M 300 100 L 380 40" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#ocrArrow)" />

        <rect x="120" y="4" width="160" height="52" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" />
        <text x="200" y="26" textAnchor="middle" fill="#0f172a" fontWeight="600">Queue-Based</text>
        <text x="200" y="44" textAnchor="middle" fill="#334155">Routes to any queue member</text>

        <rect x="360" y="4" width="200" height="52" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
        <text x="460" y="26" textAnchor="middle" fill="#0f172a" fontWeight="600">Skills-Based</text>
        <text x="460" y="44" textAnchor="middle" fill="#334155">Matches required skill level</text>

        <path d="M 336 132 L 368 132" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#ocrArrow)" />
        <rect x="376" y="100" width="150" height="64" rx="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
        <text x="451" y="120" textAnchor="middle" fill="#0f172a" fontWeight="600">Presence Status</text>
        <text x="451" y="138" textAnchor="middle" fill="#475569">Is the agent Online /</text>
        <text x="451" y="152" textAnchor="middle" fill="#475569">Away / Busy?</text>

        <path d="M 526 132 L 558 132" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#ocrArrow)" />
        <rect x="566" y="100" width="150" height="64" rx="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
        <text x="641" y="120" textAnchor="middle" fill="#0f172a" fontWeight="600">Capacity Check</text>
        <text x="641" y="138" textAnchor="middle" fill="#475569">Under configured</text>
        <text x="641" y="152" textAnchor="middle" fill="#475569">work-item limit?</text>

        <path d="M 641 164 L 641 196 L 300 196" stroke="#059669" strokeWidth="2" markerEnd="url(#ocrArrow)" />
        <rect x="140" y="204" width="220" height="40" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="2" />
        <text x="250" y="228" textAnchor="middle" fill="#0f172a" fontWeight="700">Assigned to Agent</text>
      </svg>
    </figure>
  )
}
