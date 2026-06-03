export const metadata = {
  title: 'Terms of Service - AgentForge',
  description: 'AgentForge terms of service.',
}

export default function TermsPage() {
  return (
    <div>
      <section className="py-20">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 gradient-text">Terms of Service</h1>
          <p className="text-gray-400 mb-8">Last updated: June 2026</p>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-300">
            <h2 className="text-2xl font-bold text-blue-300">1. Acceptance of Terms</h2>
            <p>
              By using AgentForge, you agree to these terms. If you do not agree, do not use the service.
            </p>

            <h2 className="text-2xl font-bold text-blue-300">2. License</h2>
            <p>
              AgentForge is licensed under the Apache License 2.0 (open source) or our commercial license (managed service). You retain ownership of your data and agents.
            </p>

            <h2 className="text-2xl font-bold text-blue-300">3. Use Restrictions</h2>
            <p>
              You agree not to:
            </p>
            <ul>
              <li>Use AgentForge for illegal purposes</li>
              <li>Attempt to breach security controls</li>
              <li>Launch attacks against the infrastructure</li>
              <li>Reverse engineer the software (except as permitted by license)</li>
              <li>Violate third-party intellectual property rights</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-300">4. Service Availability</h2>
            <p>
              The managed service includes a 99.9% uptime SLA (enterprise plans: 99.99%). We make reasonable efforts to maintain availability but do not guarantee it.
            </p>

            <h2 className="text-2xl font-bold text-blue-300">5. Limitation of Liability</h2>
            <p>
              AgentForge is provided "as is". We are not liable for indirect, incidental, or consequential damages arising from your use of the service.
            </p>

            <h2 className="text-2xl font-bold text-blue-300">6. Indemnification</h2>
            <p>
              You agree to indemnify us against claims arising from your use of AgentForge or violation of these terms.
            </p>

            <h2 className="text-2xl font-bold text-blue-300">7. Termination</h2>
            <p>
              We may terminate your account if you violate these terms. You may terminate at any time.
            </p>

            <h2 className="text-2xl font-bold text-blue-300">8. Changes to Terms</h2>
            <p>
              We may update these terms. Continued use constitutes acceptance of changes.
            </p>

            <h2 className="text-2xl font-bold text-blue-300">9. Contact</h2>
            <p>
              Questions about these terms? <a href="/contact" className="text-blue-400 hover:text-blue-300 underline">Contact us</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
