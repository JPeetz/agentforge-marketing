export const metadata = {
  title: 'Pricing - AgentForge',
  description: 'AgentForge pricing: Open source, self-hosted, with optional managed service and enterprise support.',
}

export default function PricingPage() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Open source. Self-hosted. Pay only for what you use.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="border-2 border-gray-200 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Community</h3>
              <div className="text-4xl font-bold text-brand mb-6">$0</div>
              <p className="text-gray-600 mb-6">Forever free open source</p>
              <ul className="text-left space-y-3 mb-8 text-gray-700">
                <li>✓ Full AgentForge binary</li>
                <li>✓ 19 built-in tools</li>
                <li>✓ Capability-based security</li>
                <li>✓ Memory with Git</li>
                <li>✓ Self-hosted</li>
              </ul>
              <a href="https://github.com/agentforge/agentforge" className="bg-gray-200 text-gray-900 px-6 py-2 rounded font-bold hover:bg-gray-300 block">
                Get Started
              </a>
            </div>

            <div className="border-2 border-brand rounded-lg p-8 text-center shadow-xl">
              <div className="bg-brand text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-4">Popular</div>
              <h3 className="text-2xl font-bold mb-4">Managed</h3>
              <div className="text-4xl font-bold text-brand mb-2">$299</div>
              <p className="text-gray-600 mb-6">/month for 50K agents</p>
              <ul className="text-left space-y-3 mb-8 text-gray-700">
                <li>✓ Everything in Community</li>
                <li>✓ Hosted infrastructure</li>
                <li>✓ 99.9% uptime SLA</li>
                <li>✓ Daily backups</li>
                <li>✓ Email support</li>
              </ul>
              <a href="/contact" className="bg-brand text-white px-6 py-2 rounded font-bold hover:bg-blue-700 block">
                Start Free Trial
              </a>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-brand mb-6">Custom</div>
              <p className="text-gray-600 mb-6">Unlimited scale + support</p>
              <ul className="text-left space-y-3 mb-8 text-gray-700">
                <li>✓ Everything in Managed</li>
                <li>✓ Unlimited agents</li>
                <li>✓ SLA: 99.99%</li>
                <li>✓ Dedicated support</li>
                <li>✓ Custom integrations</li>
              </ul>
              <a href="/contact" className="bg-brand text-white px-6 py-2 rounded font-bold hover:bg-blue-700 block">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">What You Pay For</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-brand">Agent Hours</h3>
              <p className="text-gray-700 mb-4">
                Pay only for compute time. $0.10 per agent-hour for hosted deployments.
              </p>
              <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                10 agents × 1 hour = $1.00
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-brand">Storage</h3>
              <p className="text-gray-700 mb-4">
                Memory storage included up to 100GB. $0.01/GB above that.
              </p>
              <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                10GB included, 50GB extra = $0.50
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-brand">LLM API Calls</h3>
              <p className="text-gray-700 mb-4">
                Your LLM provider fees apply. AgentForge doesn't mark them up.
              </p>
              <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                Pay OpenAI directly (no AgentForge fee)
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-brand">Support</h3>
              <p className="text-gray-700 mb-4">
                Email support included. Optional phone/dedicated support available.
              </p>
              <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                Email: Included, Phone: $999/month
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">FAQ</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Can I use AgentForge for free?</h3>
              <p className="text-gray-700">Yes. The open source version is completely free. Self-host it on your own infrastructure.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">What's included in the free version?</h3>
              <p className="text-gray-700">Everything: all 19 tools, security, memory, pipelines, dashboard. The only limitation is you manage the infrastructure.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Do you charge per agent?</h3>
              <p className="text-gray-700">No. Managed service pricing is based on agent-hours and storage, not per-agent licenses.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Can I switch from self-hosted to managed?</h3>
              <p className="text-gray-700">Yes. Your agents and memory are portable. Migration is straightforward.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">What about LLM provider costs?</h3>
              <p className="text-gray-700">You pay your LLM provider directly. AgentForge doesn't mark up or resell compute. We only charge for our infrastructure and support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-brand to-blue-700 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Start Building Today</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Free open source. Managed service available. Enterprise support for large deployments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/agentforge/agentforge" className="bg-white text-brand px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
              Download Free
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800">
              Try Managed
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
