import { ArrowRight, Shield, Zap, Database, GitBranch, Lock, Code, Cpu, Layers } from 'lucide-react'

export const metadata = {
  title: 'AgentForge - Zero-Trust Agent Orchestration',
  description: 'Deploy autonomous agents with capability-based security. Built in Go, 10MB binary, 1000s concurrent agents, secure by default.',
}

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-32 md:py-40">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 inline-flex items-center gap-2 glassmorphism px-4 py-2 rounded-full text-sm text-blue-300 border border-blue-500/30">
              <Zap size={16} />
              Capability-Secured Agent Orchestration
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text leading-tight">
              Agents that work.
              <br />
              Security you trust.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Deploy autonomous LLM agents with <span className="text-blue-300 font-semibold">zero-trust, capability-based security</span>. Fine-grained ACLs, cryptographically signed tokens, persistent memory with Git, and 1000s of concurrent agents—all in a 10MB binary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a href="/contact" className="group glassmorphism bg-gradient-to-r from-blue-600/80 to-purple-600/80 text-white px-8 py-3 rounded-lg font-bold hover:from-blue-600 hover:to-purple-600 border border-blue-400/50 flex items-center justify-center gap-2 transition">
                Get Started <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
              </a>
              <a href="https://github.com/agentforge/agentforge" className="glassmorphism text-blue-300 px-8 py-3 rounded-lg font-bold hover:text-blue-100 border border-blue-500/30 hover:border-blue-500/50 transition">
                View on GitHub
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="glassmorphism p-6 rounded-lg border border-blue-500/20">
                <div className="text-3xl md:text-4xl font-bold gradient-text">10MB</div>
                <div className="text-gray-400 text-sm mt-2">Single Binary</div>
              </div>
              <div className="glassmorphism p-6 rounded-lg border border-blue-500/20">
                <div className="text-3xl md:text-4xl font-bold gradient-text">1000s</div>
                <div className="text-gray-400 text-sm mt-2">Concurrent Agents</div>
              </div>
              <div className="glassmorphism p-6 rounded-lg border border-blue-500/20">
                <div className="text-3xl md:text-4xl font-bold gradient-text">19</div>
                <div className="text-gray-400 text-sm mt-2">Built-in Tools</div>
              </div>
              <div className="glassmorphism p-6 rounded-lg border border-blue-500/20">
                <div className="text-3xl md:text-4xl font-bold gradient-text">0</div>
                <div className="text-gray-400 text-sm mt-2">Trust Required</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 border-t border-blue-500/10">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Zero-Trust Architecture</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="glassmorphism p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <Shield className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-blue-300 mb-2">Capability Tokens</h3>
                      <p className="text-sm text-gray-400">Cryptographically signed tokens specify exactly what each agent can access: files, domains, token budget, timeout.</p>
                    </div>
                  </div>
                </div>
                <div className="glassmorphism p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <Lock className="text-purple-400 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-blue-300 mb-2">Fine-Grained ACLs</h3>
                      <p className="text-sm text-gray-400">Filesystem and domain whitelists prevent unauthorized access. Agents cannot escape their boundaries.</p>
                    </div>
                  </div>
                </div>
                <div className="glassmorphism p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <Zap className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-blue-300 mb-2">Cost Control</h3>
                      <p className="text-sm text-gray-400">Per-agent token budgets and timeouts prevent runaway costs and hung processes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="glassmorphism p-8 rounded-xl border border-blue-500/20">
              <pre className="text-sm overflow-x-auto">
                <code>{`agentforge spawn writer \\
  --fs-allow "/articles/**" \\
  --domain-allow "api.openai.com" \\
  --domain-allow "github.com" \\
  --token-budget 500000 \\
  --timeout 1800

# Token: hmac_xyz...
# Status: ready
# Capabilities enforced at every call`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 border-t border-blue-500/10">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">19 Powerful Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Code, title: 'File I/O', desc: 'Read, write, delete files with ACL protection' },
              { icon: Zap, title: 'Web Search', desc: 'Google search integration with domain whitelist' },
              { icon: Database, title: 'MeMex Memory', desc: 'Git-versioned memory with semantic search' },
              { icon: Layers, title: 'Message Bus', desc: 'CSP-based inter-agent communication' },
              { icon: Cpu, title: 'LLM Integration', desc: 'Call any LLM provider directly' },
              { icon: GitBranch, title: 'Pipelines', desc: 'DAG-based workflow orchestration' },
            ].map((tool, i) => (
              <div key={i} className="glassmorphism p-6 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition">
                <tool.icon className="text-blue-400 mb-3" size={24} />
                <h3 className="font-bold text-blue-300 mb-2">{tool.title}</h3>
                <p className="text-sm text-gray-400">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 border-t border-blue-500/10">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why AgentForge?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glassmorphism p-8 rounded-lg border border-blue-500/20">
              <h3 className="text-xl font-bold text-blue-300 mb-4">vs OpenClaw</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex gap-2"><span className="text-green-400">✓</span> <span>Capability-based security</span></li>
                <li className="flex gap-2"><span className="text-green-400">✓</span> <span>Filesystem ACLs</span></li>
                <li className="flex gap-2"><span className="text-green-400">✓</span> <span>Domain whitelisting</span></li>
                <li className="flex gap-2"><span className="text-green-400">✓</span> <span>Cost control</span></li>
                <li className="flex gap-2"><span className="text-red-400">vs</span> <span>Full host access</span></li>
              </ul>
            </div>
            <div className="glassmorphism p-8 rounded-lg border border-purple-500/40 bg-purple-500/5">
              <h3 className="text-xl font-bold text-purple-300 mb-4">AgentForge</h3>
              <p className="text-sm text-gray-300 mb-4">
                Zero-trust by default. Capability tokens. Fine-grained ACLs. Real cost control. Built in Go for 1000s concurrent agents.
              </p>
              <a href="/comparison" className="text-purple-400 hover:text-purple-300 text-sm font-bold">
                Full Comparison →
              </a>
            </div>
            <div className="glassmorphism p-8 rounded-lg border border-blue-500/20">
              <h3 className="text-xl font-bold text-blue-300 mb-4">vs Hermes</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex gap-2"><span className="text-green-400">✓</span> <span>Persistent memory</span></li>
                <li className="flex gap-2"><span className="text-green-400">✓</span> <span>Pipeline orchestration</span></li>
                <li className="flex gap-2"><span className="text-green-400">✓</span> <span>Token tracking</span></li>
                <li className="flex gap-2"><span className="text-green-400">✓</span> <span>Audit trails</span></li>
                <li className="flex gap-2"><span className="text-red-400">vs</span> <span>No security controls</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-blue-500/10">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Building Secure Agents</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Open source, self-hosted, or managed. Choose your deployment model.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/agentforge/agentforge" className="glassmorphism text-blue-300 px-8 py-3 rounded-lg font-bold hover:text-blue-100 border border-blue-500/30 hover:border-blue-500/50 transition">
              Download Free
            </a>
            <a href="/docs" className="glassmorphism bg-gradient-to-r from-blue-600/80 to-purple-600/80 text-white px-8 py-3 rounded-lg font-bold hover:from-blue-600 hover:to-purple-600 border border-blue-400/50 transition">
              Read Docs
            </a>
            <a href="/contact" className="glassmorphism text-blue-300 px-8 py-3 rounded-lg font-bold hover:text-blue-100 border border-blue-500/30 hover:border-blue-500/50 transition">
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
