/** Bolt SDK architecture for Slack Developer: app manifest -> Bolt app -> event/action
 * listeners -> Slack Web API calls. */
export default function BoltSDKDiagram() {
  return (
    <figure id="bolt-sdk-overview" className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24">
      <figcaption className="text-base font-semibold text-gray-900 mb-1">Bolt SDK architecture (exam mental model)</figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        A Bolt app (Node, Python, or Java) registers <strong>listeners</strong> for events, actions, and slash
        commands defined in the app manifest. On a matching event, Bolt runs your handler, which calls the{' '}
        <strong>Slack Web API</strong> to respond — all acknowledged within Slack's 3-second window.
      </p>
      <svg role="img" aria-labelledby="bolt-title" className="w-full max-w-4xl mx-auto h-auto" style={{ fontSize: '11px' }} viewBox="0 0 720 180" xmlns="http://www.w3.org/2000/svg">
        <title id="bolt-title">App manifest configures event subscriptions; Slack sends events to a Bolt app; the app's listener handles the event and calls the Slack Web API to respond</title>
        <defs><marker id="boltArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" /></marker></defs>
        <rect x="16" y="56" width="140" height="64" rx="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
        <text x="86" y="80" textAnchor="middle" fill="#1e293b" fontWeight="600">Slack Event</text>
        <text x="86" y="98" textAnchor="middle" fill="#475569">Message, action, command</text>
        <path d="M 156 88 L 188 88" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#boltArrow)" />
        <rect x="196" y="56" width="150" height="64" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="271" y="80" textAnchor="middle" fill="#0f172a" fontWeight="700">Bolt App</text>
        <text x="271" y="98" textAnchor="middle" fill="#334155">app.event() / app.action()</text>
        <path d="M 346 88 L 378 88" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#boltArrow)" />
        <rect x="386" y="56" width="150" height="64" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" />
        <text x="461" y="80" textAnchor="middle" fill="#0f172a" fontWeight="600">Your Handler</text>
        <text x="461" y="98" textAnchor="middle" fill="#334155">Acknowledges within 3s</text>
        <path d="M 536 88 L 568 88" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#boltArrow)" />
        <rect x="576" y="56" width="130" height="64" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
        <text x="641" y="80" textAnchor="middle" fill="#0f172a" fontWeight="600">Slack Web API</text>
        <text x="641" y="98" textAnchor="middle" fill="#334155">chat.postMessage, etc.</text>
      </svg>
    </figure>
  )
}
