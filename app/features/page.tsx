export const metadata = {
  title: 'Features - AgentForge',
  description: 'AgentForge features: capability-based security, persistent memory, message bus, 19 built-in tools, and more.',
}

export default function FeaturesPage() {
  const features = [
    {
      category: 'Security',
      items: [
        { title: 'Capability Tokens', description: 'HMAC-signed tokens specify exactly what each agent can access: files, domains, token budget, timeout.' },
        { title: 'Filesystem ACLs', description: 'Glob patterns restrict file access. Agents cannot escape their allowed directories.' },
        { title: 'Domain Whitelist', description: 'Network calls only to approved domains. No unrestricted internet access.' },
        { title: 'Token Budget', description: 'Set max tokens per session. Prevent runaway costs and infinite loops.' },
        { title: 'Timeout Enforcement', description: 'All agents have a hard timeout. No hung processes eating resources.' },
        { title: 'Audit Trail', description: 'Complete logging of every tool call, ACL check, and security event.' },
      ]
    },
    {
      category: 'Capabilities',
      items: [
        { title: 'File I/O', description: 'Read, write, delete, list files—all ACL-protected. Handle JSON, markdown, text, code.' },
        { title: 'Web Access', description: 'HTTP requests and Google Search integration. Domain-whitelist protected.' },
        { title: 'Memory Store (MeMex RAG)', description: 'Persistent memory with Git versioning, full-text search, and semantic retrieval.' },
        { title: 'LLM Integration', description: 'Call any LLM provider. Direct chat or embedding generation.' },
        { title: 'Content Generation', description: 'DALL-E, Stability AI, Runway, Synthesia, Mermaid diagrams, AI music.' },
        { title: 'Development Tools', description: 'Shell execution (safe), code review, API design, statistical analysis.' },
      ]
    },
    {
      category: 'Operations',
      items: [
        { title: 'Inter-Agent Communication', description: 'CSP message bus with topic subscriptions. Agents coordinate without central broker.' },
        { title: 'Pipeline Orchestration', description: 'DAG-based pipelines. Stages run in parallel or sequentially. Full dependency management.' },
        { title: 'Real-time Dashboard', description: 'Web UI to spawn agents, monitor status, view logs, manage memory, visualize pipelines.' },
        { title: 'Cost Tracking', description: 'Real-time token usage and cost per agent. Set budgets and alerts.' },
        { title: 'Memory Management', description: 'Automatic session compaction, Git versioning, full-text indexing.' },
        { title: 'Monitoring & Metrics', description: 'Prometheus metrics, structured logging, Grafana integration ready.' },
      ]
    }
  ]

  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AgentForge Features</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Everything you need to deploy autonomous agents securely at scale.
          </p>
        </div>
      </section>

      {features.map((section, idx) => (
        <section key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} style={{ padding: '5rem 0' }}>
          <div className="container">
            <h2 className="text-3xl font-bold mb-12">{section.category}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {section.items.map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-brand">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-gradient-to-r from-brand to-blue-700 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Get Started Today</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Read the docs, try the open-source version, or contact us for enterprise support.
          </p>
          <a href="/docs" className="bg-white text-brand px-8 py-3 rounded-lg font-bold hover:bg-gray-100 inline-block">
            View Documentation
          </a>
        </div>
      </section>
    </div>
  )
}
