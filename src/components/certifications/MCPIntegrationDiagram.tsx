/**
 * MCP (Model Context Protocol) architecture for Claude Certified Architect - Foundations:
 * host app -> MCP client -> MCP server(s) -> tools/resources, with the transport choice
 * (stdio vs SSE) as the key architectural decision point tested on the exam.
 */
export default function MCPIntegrationDiagram() {
  return (
    <figure
      id="mcp-integration-overview"
      className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-b from-slate-50/90 to-white p-4 sm:p-6 scroll-mt-24"
    >
      <figcaption className="text-base font-semibold text-gray-900 mb-1">
        MCP architecture: how a host app reaches external tools (exam mental model)
      </figcaption>
      <p className="text-xs text-gray-600 mb-4 max-w-3xl">
        A <strong>host application</strong> (e.g. Claude Desktop, Claude Code) runs an{' '}
        <strong>MCP client</strong> that connects to one or more <strong>MCP servers</strong> over{' '}
        <strong>stdio</strong> (local, single-process) or <strong>SSE</strong> (remote, multi-client). Each server
        exposes <strong>tools</strong>, <strong>resources</strong>, and <strong>prompts</strong> the model can call.
      </p>
      <svg
        role="img"
        aria-labelledby="mcp-diagram-title"
        className="w-full max-w-4xl mx-auto h-auto"
        style={{ fontSize: '11px' }}
        viewBox="0 0 760 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="mcp-diagram-title">
          Diagram: host application with MCP client connecting via stdio or SSE transport to MCP servers exposing
          tools, resources, and prompts
        </title>
        <defs>
          <linearGradient id="mcpBox" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
          <marker id="mcpArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#0b5cab" />
          </marker>
        </defs>

        <rect x="16" y="100" width="140" height="80" rx="8" fill="#dbeafe" stroke="#0b5cab" strokeWidth="2" />
        <text x="86" y="128" textAnchor="middle" fill="#0f172a" fontWeight="600">Host App</text>
        <text x="86" y="146" textAnchor="middle" fill="#334155">Claude Desktop /</text>
        <text x="86" y="162" textAnchor="middle" fill="#334155">Claude Code + model</text>

        <path d="M 156 140 L 188 140" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#mcpArrow)" />
        <rect x="196" y="104" width="130" height="72" rx="8" fill="url(#mcpBox)" stroke="#94a3b8" strokeWidth="1.5" />
        <text x="261" y="128" textAnchor="middle" fill="#1e293b" fontWeight="600">MCP Client</text>
        <text x="261" y="146" textAnchor="middle" fill="#475569">Manages server</text>
        <text x="261" y="162" textAnchor="middle" fill="#475569">connections</text>

        <path d="M 326 128 L 358 60" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#mcpArrow)" />
        <text x="342" y="82" textAnchor="middle" fill="#475569" fontStyle="italic">stdio</text>
        <path d="M 326 152 L 358 220" stroke="#0b5cab" strokeWidth="2" markerEnd="url(#mcpArrow)" />
        <text x="342" y="200" textAnchor="middle" fill="#475569" fontStyle="italic">SSE</text>

        <rect x="366" y="20" width="150" height="64" rx="8" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" />
        <text x="441" y="44" textAnchor="middle" fill="#0f172a" fontWeight="600">MCP Server A</text>
        <text x="441" y="62" textAnchor="middle" fill="#334155">Local process</text>
        <text x="441" y="76" textAnchor="middle" fill="#334155">(single client)</text>

        <rect x="366" y="192" width="150" height="64" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
        <text x="441" y="216" textAnchor="middle" fill="#0f172a" fontWeight="600">MCP Server B</text>
        <text x="441" y="234" textAnchor="middle" fill="#334155">Cloud container</text>
        <text x="441" y="248" textAnchor="middle" fill="#334155">(multi-client)</text>

        <path d="M 516 52 L 548 52" stroke="#059669" strokeWidth="2" markerEnd="url(#mcpArrow)" />
        <path d="M 516 224 L 548 224" stroke="#d97706" strokeWidth="2" markerEnd="url(#mcpArrow)" />

        <rect x="556" y="16" width="180" height="72" rx="8" fill="url(#mcpBox)" stroke="#94a3b8" strokeWidth="1.5" />
        <text x="646" y="38" textAnchor="middle" fill="#1e293b" fontWeight="600">Tools</text>
        <text x="646" y="56" textAnchor="middle" fill="#475569">Read-only DB role,</text>
        <text x="646" y="70" textAnchor="middle" fill="#475569">parameterized queries,</text>
        <text x="646" y="84" textAnchor="middle" fill="#475569">audit logging</text>

        <rect x="556" y="188" width="180" height="72" rx="8" fill="url(#mcpBox)" stroke="#94a3b8" strokeWidth="1.5" />
        <text x="646" y="210" textAnchor="middle" fill="#1e293b" fontWeight="600">Resources &amp; Prompts</text>
        <text x="646" y="228" textAnchor="middle" fill="#475569">Exposed data + reusable</text>
        <text x="646" y="242" textAnchor="middle" fill="#475569">prompt templates for</text>
        <text x="646" y="256" textAnchor="middle" fill="#475569">multiple API clients</text>

        <text x="380" y="150" textAnchor="middle" fill="#475569">
          Choose stdio for local, single-user tools;
        </text>
        <text x="380" y="164" textAnchor="middle" fill="#475569">
          SSE when multiple clients share one server.
        </text>
      </svg>
    </figure>
  )
}
