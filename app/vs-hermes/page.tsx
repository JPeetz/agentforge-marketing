export const metadata = {
  title: 'AgentForge vs Hermes',
  description: 'Feature comparison: AgentForge provides security, memory, and orchestration features Hermes lacks.',
}

export default function VsHermesPage() {
  return (
    <div>
      <section className="py-20 border-b border-blue-500/10">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">AgentForge vs Hermes</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            AgentForge provides the security, memory, and operational features for production agent deployments.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-blue-300">Hermes Approach</h2>
            <p className="text-gray-300 mb-4">
              Hermes focuses on basic agent execution in Node.js. Lightweight but minimal operational features.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li>✓ Lightweight (Node.js-based)</li>
              <li>✓ Easy to start</li>
              <li>✗ No persistent memory</li>
              <li>✗ No cost tracking</li>
              <li>✗ No security controls</li>
              <li>✗ No orchestration</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6 text-blue-300">AgentForge Approach</h2>
            <p className="text-gray-300 mb-4">
              AgentForge is a complete agent platform for production. Security, memory, orchestration, all built-in.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li>✓ Lightweight (10MB Go binary)</li>
              <li>✓ <span className="font-bold">Easy to deploy</span></li>
              <li>✓ <span className="font-bold">MeMex RAG memory</span></li>
              <li>✓ <span className="font-bold">Cost tracking</span></li>
              <li>✓ <span className="font-bold">Security by default</span></li>
              <li>✓ <span className="font-bold">Pipeline orchestration</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-blue-500/10">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 gradient-text">Feature Gaps in Hermes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glassmorphism p-8 rounded-lg border-l-4 border-red-500">
              <h3 className="font-bold text-red-400 mb-4">No Persistent Memory</h3>
              <p className="text-gray-300 mb-3">
                Each agent session is ephemeral. Agents can't learn from past work or search institutional knowledge.
              </p>
              <p className="text-sm text-gray-400">
                AgentForge includes MeMex RAG with Git versioning and semantic search.
              </p>
            </div>
            <div className="glassmorphism p-8 rounded-lg border-l-4 border-red-500">
              <h3 className="font-bold text-red-400 mb-4">No Cost Control</h3>
              <p className="text-gray-300 mb-3">
                No token budgets or spending limits. Agents can consume unlimited resources.
              </p>
              <p className="text-sm text-gray-400">
                AgentForge provides per-agent token budgets and real-time cost tracking.
              </p>
            </div>
            <div className="glassmorphism p-8 rounded-lg border-l-4 border-red-500">
              <h3 className="font-bold text-red-400 mb-4">No Security Controls</h3>
              <p className="text-gray-300 mb-3">
                Trust-based only. No ACLs, no capability tokens, no enforcement.
              </p>
              <p className="text-sm text-gray-400">
                AgentForge has capability-based zero-trust security with filesystem and domain ACLs.
              </p>
            </div>
            <div className="glassmorphism p-8 rounded-lg border-l-4 border-red-500">
              <h3 className="font-bold text-red-400 mb-4">No Orchestration</h3>
              <p className="text-gray-300 mb-3">
                Single agent execution only. Can't coordinate multi-agent workflows.
              </p>
              <p className="text-sm text-gray-400">
                AgentForge has DAG-based pipelines with parallel execution and dependency management.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Real-World Scenario</h2>
          <div className="max-w-4xl mx-auto">
            <div className="glassmorphism p-8 rounded-lg border-l-4 border-blue-500">
              <p className="font-bold text-lg mb-4 text-blue-300">Scenario: Long-running content pipeline with multiple agents</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-red-400 mb-3">With Hermes</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>❌ Researcher agent can't find previous research</li>
                    <li>❌ Writer re-does work already completed</li>
                    <li>❌ No way to coordinate agents</li>
                    <li>❌ No cost tracking across agents</li>
                    <li>❌ Manual orchestration required</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-green-400 mb-3">With AgentForge</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>✓ Researcher saves findings to memory</li>
                    <li>✓ Writer searches and cites previous work</li>
                    <li>✓ Agents coordinate via message bus</li>
                    <li>✓ Real-time cost tracking per agent</li>
                    <li>✓ Automatic pipeline execution</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-blue-500/10">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">When to Use Each</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glassmorphism p-8 rounded-lg border border-blue-500/20">
              <h3 className="text-xl font-bold mb-4 text-blue-300">Use Hermes If:</h3>
              <ul className="text-left space-y-2 text-gray-300">
                <li>• You need a simple Node.js runtime</li>
                <li>• Single-agent experimentation</li>
                <li>• No operational requirements</li>
              </ul>
            </div>
            <div className="glassmorphism p-8 rounded-lg border-2 border-blue-500/40 bg-blue-500/10">
              <h3 className="text-xl font-bold mb-4 text-blue-300">Use AgentForge If:</h3>
              <ul className="text-left space-y-2 text-gray-300">
                <li>• <span className="font-bold">Production deployments</span></li>
                <li>• <span className="font-bold">Multi-agent workflows</span></li>
                <li>• <span className="font-bold">Memory and learning</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-blue-500/10 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Ready for Production?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Upgrade from Hermes to AgentForge for security, memory, cost control, and orchestration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/docs" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition">
              Start Here
            </a>
            <a href="/contact" className="glassmorphism border border-blue-500/30 text-blue-300 px-8 py-3 rounded-lg font-bold hover:border-blue-500/60 transition">
              Get Help
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
