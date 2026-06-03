import Image from 'next/image'

export const metadata = {
  title: 'Comparison - AgentForge vs OpenClaw vs Hermes',
  description: 'Feature-by-feature comparison: AgentForge vs OpenClaw vs Hermes agent orchestration platforms.',
}

export default function ComparisonPage() {
  return (
    <div>
      <section className="py-20 border-b border-blue-500/10">
        <div className="container text-center">
          <div className="mb-6 flex justify-center">
            <Image
              src="/images/icons/nav-security.png"
              alt="Security Comparison"
              width={80}
              height={80}
              className="opacity-90"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">How AgentForge Compares</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Built for security and scale, from the ground up.
          </p>
        </div>
      </section>

      <section className="py-20 overflow-x-auto">
        <div className="container">
          <table className="w-full border-collapse min-w-max">
            <thead>
              <tr className="border-b-2 border-blue-500/20 bg-blue-500/5">
                <th className="text-left py-4 px-4 font-bold text-blue-300">Feature</th>
                <th className="text-center py-4 px-4 font-bold text-blue-300">AgentForge</th>
                <th className="text-center py-4 px-4 font-bold text-gray-400">OpenClaw</th>
                <th className="text-center py-4 px-4 font-bold text-gray-400">Hermes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-blue-500/10 hover:bg-blue-500/10">
                <td className="py-4 px-4 font-semibold text-blue-300">Security Model</td>
                <td className="text-center py-4 px-4"><span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-bold">Capability-Based</span></td>
                <td className="text-center py-4 px-4"><span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm font-bold">Full Host Access</span></td>
                <td className="text-center py-4 px-4"><span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm font-bold">Trust-Based</span></td>
              </tr>
              <tr className="border-b border-blue-500/10 hover:bg-blue-500/5">
                <td className="py-4 px-4 font-semibold text-blue-300">Filesystem ACLs</td>
                <td className="text-center py-4 px-4">✓ Glob patterns</td>
                <td className="text-center py-4 px-4">✗ Full access</td>
                <td className="text-center py-4 px-4">✗</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-4 font-semibold text-gray-900">Domain Whitelist</td>
                <td className="text-center py-4 px-4">✓ Per-agent</td>
                <td className="text-center py-4 px-4">✗</td>
                <td className="text-center py-4 px-4">✗</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-4 font-semibold text-gray-900">Token Budget Control</td>
                <td className="text-center py-4 px-4">✓ Hard limit</td>
                <td className="text-center py-4 px-4">✗</td>
                <td className="text-center py-4 px-4">✗</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-4 font-semibold text-gray-900">Timeout Enforcement</td>
                <td className="text-center py-4 px-4">✓ Per-agent</td>
                <td className="text-center py-4 px-4">✓ Limited</td>
                <td className="text-center py-4 px-4">✓ Limited</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-4 font-semibold text-gray-900">Persistent Memory</td>
                <td className="text-center py-4 px-4">✓ MeMex RAG + Git</td>
                <td className="text-center py-4 px-4">✓ Basic</td>
                <td className="text-center py-4 px-4">✗</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-4 font-semibold text-gray-900">Memory Search</td>
                <td className="text-center py-4 px-4">✓ Full-text + semantic</td>
                <td className="text-center py-4 px-4">✓ Full-text</td>
                <td className="text-center py-4 px-4">✗</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-4 font-semibold text-gray-900">Message Bus</td>
                <td className="text-center py-4 px-4">✓ CSP-based</td>
                <td className="text-center py-4 px-4">✓ Basic</td>
                <td className="text-center py-4 px-4">✗</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-4 font-semibold text-gray-900">Pipeline Orchestration</td>
                <td className="text-center py-4 px-4">✓ DAG + parallel</td>
                <td className="text-center py-4 px-4">✓ Sequential</td>
                <td className="text-center py-4 px-4">✗</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-4 font-semibold text-gray-900">Cost Tracking</td>
                <td className="text-center py-4 px-4">✓ Per-agent real-time</td>
                <td className="text-center py-4 px-4">✗</td>
                <td className="text-center py-4 px-4">✗</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-4 font-semibold text-gray-900">Audit Trail</td>
                <td className="text-center py-4 px-4">✓ Complete</td>
                <td className="text-center py-4 px-4">✗</td>
                <td className="text-center py-4 px-4">✗</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-4 font-semibold text-gray-900">Built-in Tools</td>
                <td className="text-center py-4 px-4">19 (comprehensive)</td>
                <td className="text-center py-4 px-4">12 (basic)</td>
                <td className="text-center py-4 px-4">8 (minimal)</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-4 font-semibold text-gray-900">Dashboard/UI</td>
                <td className="text-center py-4 px-4">✓ Modern React</td>
                <td className="text-center py-4 px-4">✓ Basic</td>
                <td className="text-center py-4 px-4">✗ CLI only</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-4 font-semibold text-gray-900">Single Binary</td>
                <td className="text-center py-4 px-4">✓ 10MB</td>
                <td className="text-center py-4 px-4">✗ 150MB+</td>
                <td className="text-center py-4 px-4">✗ 200MB+</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-4 font-semibold text-gray-900">Startup Time</td>
                <td className="text-center py-4 px-4">✓ &lt;100ms</td>
                <td className="text-center py-4 px-4">~500ms</td>
                <td className="text-center py-4 px-4">~1000ms</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-4 font-semibold text-gray-900">Memory Footprint</td>
                <td className="text-center py-4 px-4">✓ 50-100MB</td>
                <td className="text-center py-4 px-4">~400MB</td>
                <td className="text-center py-4 px-4">~600MB</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-4 font-semibold text-gray-900">Language</td>
                <td className="text-center py-4 px-4">Go (concurrent)</td>
                <td className="text-center py-4 px-4">Python (GIL-bound)</td>
                <td className="text-center py-4 px-4">Node.js</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-semibold text-gray-900">Open Source</td>
                <td className="text-center py-4 px-4">✓ Apache 2.0</td>
                <td className="text-center py-4 px-4">✗ Proprietary</td>
                <td className="text-center py-4 px-4">✓ MIT</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="py-20 border-t border-blue-500/10">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 gradient-text">Why AgentForge?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glassmorphism p-8 rounded-lg border border-blue-500/20">
              <h3 className="text-xl font-bold mb-4 text-blue-300">For Security Teams</h3>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Zero-trust by design</li>
                <li>✓ Fine-grained ACLs</li>
                <li>✓ Complete audit trail</li>
                <li>✓ No privilege escalation</li>
                <li>✓ Compliance-friendly</li>
              </ul>
            </div>
            <div className="glassmorphism p-8 rounded-lg border border-blue-500/20">
              <h3 className="text-xl font-bold mb-4 text-blue-300">For DevOps Teams</h3>
              <ul className="space-y-2 text-gray-300">
                <li>✓ 10MB single binary</li>
                <li>✓ Minimal dependencies</li>
                <li>✓ Fast startup (&lt;100ms)</li>
                <li>✓ Docker-friendly</li>
                <li>✓ Prometheus metrics</li>
              </ul>
            </div>
            <div className="glassmorphism p-8 rounded-lg border border-blue-500/20">
              <h3 className="text-xl font-bold mb-4 text-blue-300">For AI Engineers</h3>
              <ul className="space-y-2 text-gray-300">
                <li>✓ 19 powerful tools</li>
                <li>✓ Persistent memory with Git</li>
                <li>✓ Real-time cost tracking</li>
                <li>✓ Multi-agent orchestration</li>
                <li>✓ Modern dashboard</li>
              </ul>
            </div>
            <div className="glassmorphism p-8 rounded-lg border border-blue-500/20">
              <h3 className="text-xl font-bold mb-4 text-blue-300">For Enterprises</h3>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Open source (Apache 2.0)</li>
                <li>✓ Self-hosted</li>
                <li>✓ No vendor lock-in</li>
                <li>✓ On-premises deployment</li>
                <li>✓ Custom extensions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-blue-500/10">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Ready to Switch?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            AgentForge is open source. Get started today with zero vendor lock-in.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/JPeetz/agentforge" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition">
              View on GitHub
            </a>
            <a href="/docs" className="glassmorphism border border-blue-500/30 text-blue-300 px-8 py-3 rounded-lg font-bold hover:border-blue-500/60 transition">
              Read Docs
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
