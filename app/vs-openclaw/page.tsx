export const metadata = {
  title: 'AgentForge vs OpenClaw',
  description: 'Feature comparison: AgentForge brings security and cost control to agent orchestration.',
}

export default function VsOpenClawPage() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AgentForge vs OpenClaw</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            AgentForge adds security, cost control, and performance to OpenClaw's foundation.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">OpenClaw Approach</h2>
            <p className="text-gray-700 mb-4">
              OpenClaw provides flexible agent orchestration with full host access. Agents run with broad permissions.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>✓ Flexible (agents can access anything)</li>
              <li>✗ No security boundaries</li>
              <li>✗ No cost control</li>
              <li>✓ Mature (established platform)</li>
              <li>✗ Large binary (150MB+)</li>
              <li>✗ High resource usage</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">AgentForge Approach</h2>
            <p className="text-gray-700 mb-4">
              AgentForge starts with zero permissions. You explicitly grant only what agents need.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>✓ Flexible (grant what you need)</li>
              <li>✓ <span className="font-bold">Secure by default</span></li>
              <li>✓ <span className="font-bold">Real cost control</span></li>
              <li>✓ Modern (built for 2026)</li>
              <li>✓ <span className="font-bold">Tiny binary (10MB)</span></li>
              <li>✓ <span className="font-bold">Minimal resource usage</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Key Differences</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-brand mb-2">OpenClaw: Trust-Based</h3>
              <pre className="text-sm font-mono bg-gray-50 p-3 rounded mb-2">{`spawn agent
  → Full host access
  → Unlimited network
  → Unrestricted budget
  → Hope it's safe`}</pre>
              <p className="text-sm text-gray-600">Agents have broad permissions. Security relies on trust.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-brand">
              <h3 className="font-bold text-brand mb-2">AgentForge: Capability-Based</h3>
              <pre className="text-sm font-mono bg-gray-50 p-3 rounded mb-2">{`spawn agent
  --fs-allow "/work/**"
  --domain-allow "api.openai.com"
  --token-budget 100000
  → Only what's needed
  → Verified at runtime`}</pre>
              <p className="text-sm text-gray-600">Explicit permissions. Verified with cryptographic tokens.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Real-World Scenario</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-brand">
              <p className="font-bold text-lg mb-4">Scenario: Content writer agent that accidentally calls expensive API</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-red-700 mb-3">OpenClaw Result</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>❌ Agent has unlimited budget</li>
                    <li>❌ Calls expensive API millions of times</li>
                    <li>❌ Bill reaches $50,000 before discovered</li>
                    <li>❌ No ACL to prevent unauthorized API calls</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-green-700 mb-3">AgentForge Result</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✓ Agent has $10 token budget</li>
                    <li>✓ Blocked from calling expensive API (not on whitelist)</li>
                    <li>✓ Cost stays under $1</li>
                    <li>✓ Alert triggered on first violation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">When to Use Each</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4">Use OpenClaw If:</h3>
              <ul className="text-left space-y-2 text-gray-700">
                <li>• You want maximum flexibility</li>
                <li>• You trust your agents completely</li>
                <li>• Security is not a priority</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg border-2 border-brand">
              <h3 className="text-xl font-bold mb-4">Use AgentForge If:</h3>
              <ul className="text-left space-y-2 text-gray-700">
                <li>• <span className="font-bold">You need security boundaries</span></li>
                <li>• <span className="font-bold">You want cost control</span></li>
                <li>• <span className="font-bold">You need audit trails</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-brand to-blue-700 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Make the Switch</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Migration from OpenClaw is straightforward. Start with AgentForge today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/docs" className="bg-white text-brand px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
              Migration Guide
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800">
              Talk to Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
