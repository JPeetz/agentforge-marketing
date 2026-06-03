import { ArrowRight, Shield, Zap, Database, GitBranch, Cpu, Lock } from 'lucide-react'

export const metadata = {
  title: 'AgentForge - Capability-Secured Agent Orchestration',
  description: 'Deploy autonomous agents with fine-grained security. Built in Go, 10MB binary, secure by default.',
}

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Agents That Work.<br />Security You Trust.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Deploy autonomous LLM agents with <span className="font-bold">zero-trust security</span>. Fine-grained capability tokens, persistent memory, and 1000s of concurrent agents—all in a 10MB binary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="/contact" className="bg-brand text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 flex items-center justify-center gap-2">
              Get Started <ArrowRight size={20} />
            </a>
            <a href="https://github.com/agentforge/agentforge" className="border-2 border-brand text-brand px-8 py-3 rounded-lg font-bold hover:bg-blue-50">
              View on GitHub
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="text-2xl font-bold text-brand">10MB</div>
              <div className="text-gray-600">Single Binary</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="text-2xl font-bold text-brand">1000s</div>
              <div className="text-gray-600">Concurrent Agents</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="text-2xl font-bold text-brand">19</div>
              <div className="text-gray-600">Built-in Tools</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="text-2xl font-bold text-brand">Zero</div>
              <div className="text-gray-600">Trust Required</div>
            </div>
          </div>
        </div>
      </section>

      {/* Security-First Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Security as Foundation</h2>
              <p className="text-gray-700 mb-4">
                AgentForge is built on <span className="font-bold">capability-based security</span>—not trust-based. Each agent gets a cryptographically signed token that specifies exactly what it can access.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <Shield size={24} className="text-brand flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold">Filesystem ACLs</div>
                    <div className="text-gray-600">Each agent can only access paths you grant</div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Zap size={24} className="text-brand flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold">Domain Whitelist</div>
                    <div className="text-gray-600">Agents can only reach allowed domains</div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Database size={24} className="text-brand flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold">Token Budget</div>
                    <div className="text-gray-600">Cap spending with built-in token limits</div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Lock size={24} className="text-brand flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold">Timeout Enforcement</div>
                    <div className="text-gray-600">All agents are time-bounded</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-brand-dark text-white p-8 rounded-xl font-mono text-sm overflow-x-auto">
              <div className="mb-4">
                <span className="text-accent">$</span> agentforge spawn content-writer \
              </div>
              <div className="ml-2 mb-4">
                <div>--fs-allow "/home/user/articles/**" \</div>
                <div>--fs-allow "/home/user/media/**" \</div>
                <div>--domain-allow "api.openai.com" \</div>
                <div>--domain-allow "github.com" \</div>
                <div>--token-budget 500000 \</div>
                <div>--timeout 1800</div>
              </div>
              <div className="text-green-400">
                ✓ Agent spawned: content-writer<br />
                ✓ Capability token: hmac_xyz...<br />
                ✓ Status: ready
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Everything You Need</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <Cpu size={32} className="text-brand mb-4" />
              <h3 className="text-xl font-bold mb-2">19 Built-in Tools</h3>
              <p className="text-gray-600">File I/O, web search, memory store, image/video generation, code review, and more.</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <GitBranch size={32} className="text-brand mb-4" />
              <h3 className="text-xl font-bold mb-2">Memory with Git</h3>
              <p className="text-gray-600">MeMex RAG: persistent memory with full Git versioning and semantic search.</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <Zap size={32} className="text-brand mb-4" />
              <h3 className="text-xl font-bold mb-2">Lightweight & Fast</h3>
              <p className="text-gray-600">10MB binary, minimal resource footprint, easily deployable anywhere.</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <Database size={32} className="text-brand mb-4" />
              <h3 className="text-xl font-bold mb-2">Message Bus</h3>
              <p className="text-gray-600">CSP-based inter-agent communication with topic subscriptions.</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <Lock size={32} className="text-brand mb-4" />
              <h3 className="text-xl font-bold mb-2">Audit Trail</h3>
              <p className="text-gray-600">Complete logging of all agent actions and capability checks.</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <Shield size={32} className="text-brand mb-4" />
              <h3 className="text-xl font-bold mb-2">Cost Control</h3>
              <p className="text-gray-600">Real-time token tracking and spending alerts per agent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Built for Security & Scale</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-3 px-4 font-bold">Feature</th>
                  <th className="text-center py-3 px-4 font-bold">AgentForge</th>
                  <th className="text-center py-3 px-4 font-bold">OpenClaw</th>
                  <th className="text-center py-3 px-4 font-bold">Hermes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4">Capability-based security</td>
                  <td className="text-center py-3 px-4">✓</td>
                  <td className="text-center py-3 px-4">✗ Full host access</td>
                  <td className="text-center py-3 px-4">✗ Trust-based only</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4">Filesystem ACLs</td>
                  <td className="text-center py-3 px-4">✓</td>
                  <td className="text-center py-3 px-4">✗</td>
                  <td className="text-center py-3 px-4">✗</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4">Domain Whitelist</td>
                  <td className="text-center py-3 px-4">✓</td>
                  <td className="text-center py-3 px-4">✗</td>
                  <td className="text-center py-3 px-4">✗</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4">Token Budget Control</td>
                  <td className="text-center py-3 px-4">✓</td>
                  <td className="text-center py-3 px-4">✗</td>
                  <td className="text-center py-3 px-4">✗</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4">Persistent Memory (Git)</td>
                  <td className="text-center py-3 px-4">✓ MeMex RAG</td>
                  <td className="text-center py-3 px-4">✓ Basic</td>
                  <td className="text-center py-3 px-4">✗</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4">Single Binary</td>
                  <td className="text-center py-3 px-4">✓ 10MB</td>
                  <td className="text-center py-3 px-4">✗ Large</td>
                  <td className="text-center py-3 px-4">✗ Large</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Cost Tracking</td>
                  <td className="text-center py-3 px-4">✓</td>
                  <td className="text-center py-3 px-4">✗</td>
                  <td className="text-center py-3 px-4">✗</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand to-blue-700 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Deploy Secure Agents?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Start with our documentation, join the community, or contact us for enterprise support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/docs" className="bg-white text-brand px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
              Read Documentation
            </a>
            <a href="https://discord.gg/agentforge" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800">
              Join Discord
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800">
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
