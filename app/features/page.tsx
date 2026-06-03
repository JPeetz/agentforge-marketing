import { Shield, Lock, Zap, Database, GitBranch, Code, Layers, Eye, Gauge } from 'lucide-react'

export const metadata = {
  title: 'Features - AgentForge',
  description: 'AgentForge features: capability-based security, persistent memory, message bus, 19 built-in tools, and more.',
}

export default function FeaturesPage() {
  const features = [
    {
      category: 'Security',
      icon: Shield,
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
      icon: Zap,
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
      icon: Gauge,
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
      <section className="py-20">
        <div className="container text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Features</h1>
          <p className="text-lg text-gray-300">
            Everything you need to deploy autonomous agents securely at scale.
          </p>
        </div>
      </section>

      {features.map((section, idx) => {
        const Icon = section.icon
        return (
          <section key={idx} className="py-20 border-t border-blue-500/10">
            <div className="container">
              <div className="flex items-center gap-3 mb-12">
                <Icon className="text-blue-400" size={32} />
                <h2 className="text-3xl md:text-4xl font-bold gradient-text">{section.category}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {section.items.map((item, i) => (
                  <div key={i} className="glassmorphism p-6 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition">
                    <h3 className="text-lg font-bold text-blue-300 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      <section className="py-20 border-t border-blue-500/10">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Read the docs, try the open-source version, or contact us for enterprise support.
          </p>
          <a href="/docs" className="glassmorphism bg-gradient-to-r from-blue-600/80 to-purple-600/80 text-white px-8 py-3 rounded-lg font-bold hover:from-blue-600 hover:to-purple-600 border border-blue-400/50 inline-block transition">
            View Documentation
          </a>
        </div>
      </section>
    </div>
  )
}
