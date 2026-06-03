export const metadata = {
  title: 'Pricing - AgentForge',
  description: 'AgentForge pricing: Open source, self-hosted, with optional managed service and enterprise support.',
}

export default function PricingPage() {
  return (
    <div>
      <section className="py-20">
        <div className="container text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Transparent Pricing</h1>
          <p className="text-lg text-gray-300">
            Open source. Self-hosted. Pay only for what you use.
          </p>
        </div>
      </section>

      <section className="py-20 border-t border-blue-500/10">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glassmorphism border-2 border-blue-500/20 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-blue-300">Community</h3>
              <div className="text-5xl font-bold gradient-text mb-6">$0</div>
              <p className="text-gray-400 mb-6">Forever free open source</p>
              <ul className="text-left space-y-3 mb-8 text-gray-300 text-sm">
                <li className="flex gap-2"><span className="text-green-400">✓</span> Full AgentForge binary</li>
                <li className="flex gap-2"><span className="text-green-400">✓</span> 19 built-in tools</li>
                <li className="flex gap-2"><span className="text-green-400">✓</span> Capability-based security</li>
                <li className="flex gap-2"><span className="text-green-400">✓</span> Memory with Git</li>
                <li className="flex gap-2"><span className="text-green-400">✓</span> Self-hosted</li>
              </ul>
              <a href="https://github.com/JPeetz/agentforge" className="glassmorphism text-blue-300 px-6 py-2 rounded font-bold hover:text-blue-100 border border-blue-500/30 block transition">
                Get Started
              </a>
            </div>

            <div className="glassmorphism border-2 border-purple-500/40 rounded-lg p-8 text-center bg-purple-500/10">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-4">Popular</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-300">Managed</h3>
              <div className="text-5xl font-bold gradient-text mb-2">$299</div>
              <p className="text-gray-400 mb-6">/month for 50K agents</p>
              <ul className="text-left space-y-3 mb-8 text-gray-300 text-sm">
                <li className="flex gap-2"><span className="text-green-400">✓</span> Everything in Community</li>
                <li className="flex gap-2"><span className="text-green-400">✓</span> Hosted infrastructure</li>
                <li className="flex gap-2"><span className="text-green-400">✓</span> 99.9% uptime SLA</li>
                <li className="flex gap-2"><span className="text-green-400">✓</span> Daily backups</li>
                <li className="flex gap-2"><span className="text-green-400">✓</span> Email support</li>
              </ul>
              <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded font-bold hover:from-blue-700 hover:to-purple-700 block transition">
                Start Free Trial
              </a>
            </div>

            <div className="glassmorphism border-2 border-blue-500/20 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-blue-300">Enterprise</h3>
              <div className="text-5xl font-bold gradient-text mb-6">Custom</div>
              <p className="text-gray-400 mb-6">Unlimited scale + support</p>
              <ul className="text-left space-y-3 mb-8 text-gray-300 text-sm">
                <li className="flex gap-2"><span className="text-green-400">✓</span> Everything in Managed</li>
                <li className="flex gap-2"><span className="text-green-400">✓</span> Unlimited agents</li>
                <li className="flex gap-2"><span className="text-green-400">✓</span> SLA: 99.99%</li>
                <li className="flex gap-2"><span className="text-green-400">✓</span> Dedicated support</li>
                <li className="flex gap-2"><span className="text-green-400">✓</span> Custom integrations</li>
              </ul>
              <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded font-bold hover:from-blue-700 hover:to-purple-700 block transition">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-blue-500/10">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What You Pay For</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="glassmorphism p-8 rounded-lg border border-blue-500/20">
              <h3 className="text-lg font-bold mb-4 text-blue-300">Agent Hours</h3>
              <p className="text-gray-400 mb-4 text-sm">
                Pay only for compute time. $0.10 per agent-hour for hosted deployments.
              </p>
              <pre className="text-xs text-gray-300 bg-black/20 p-3 rounded">
                <code>10 agents × 1 hour = $1.00</code>
              </pre>
            </div>
            <div className="glassmorphism p-8 rounded-lg border border-blue-500/20">
              <h3 className="text-lg font-bold mb-4 text-blue-300">Storage</h3>
              <p className="text-gray-400 mb-4 text-sm">
                Memory storage included up to 100GB. $0.01/GB above that.
              </p>
              <pre className="text-xs text-gray-300 bg-black/20 p-3 rounded">
                <code>10GB included, 50GB extra = $0.50</code>
              </pre>
            </div>
            <div className="glassmorphism p-8 rounded-lg border border-blue-500/20">
              <h3 className="text-lg font-bold mb-4 text-blue-300">LLM API Calls</h3>
              <p className="text-gray-400 mb-4 text-sm">
                Your LLM provider fees apply. AgentForge doesn't mark them up.
              </p>
              <pre className="text-xs text-gray-300 bg-black/20 p-3 rounded">
                <code>Pay OpenAI directly (no fee)</code>
              </pre>
            </div>
            <div className="glassmorphism p-8 rounded-lg border border-blue-500/20">
              <h3 className="text-lg font-bold mb-4 text-blue-300">Support</h3>
              <p className="text-gray-400 mb-4 text-sm">
                Email support included. Optional phone/dedicated support available.
              </p>
              <pre className="text-xs text-gray-300 bg-black/20 p-3 rounded">
                <code>Email: Free, Phone: $999/mo</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-blue-500/10">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">FAQ</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: 'Can I use AgentForge for free?', a: 'Yes. The open source version is completely free. Self-host it on your own infrastructure.' },
              { q: "What's included in the free version?", a: 'Everything: all 19 tools, security, memory, pipelines, dashboard. You just manage the infrastructure.' },
              { q: 'Do you charge per agent?', a: 'No. Managed service pricing is based on agent-hours and storage, not per-agent licenses.' },
              { q: 'Can I switch from self-hosted to managed?', a: 'Yes. Your agents and memory are portable. Migration is straightforward.' },
              { q: 'What about LLM provider costs?', a: "You pay your LLM provider directly. AgentForge doesn't mark up compute. We only charge for infrastructure and support." },
            ].map((faq, i) => (
              <div key={i} className="glassmorphism p-6 rounded-lg border border-blue-500/20">
                <h3 className="text-lg font-bold mb-2 text-blue-300">{faq.q}</h3>
                <p className="text-gray-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-blue-500/10">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Building Today</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Free open source. Managed service available. Enterprise support for large deployments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/JPeetz/agentforge" className="glassmorphism text-blue-300 px-8 py-3 rounded-lg font-bold hover:text-blue-100 border border-blue-500/30 transition">
              Download Free
            </a>
            <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition">
              Try Managed
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
