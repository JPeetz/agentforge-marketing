export const metadata = {
  title: 'Privacy Policy - AgentForge',
  description: 'AgentForge privacy policy.',
}

export default function PrivacyPage() {
  return (
    <div>
      <section className="py-20">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 gradient-text">Privacy Policy</h1>
          <p className="text-gray-400 mb-8">Last updated: June 2026</p>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-300">
            <h2 className="text-2xl font-bold text-blue-300">1. Information We Collect</h2>
            <p>
              When you use AgentForge, we may collect:
            </p>
            <ul>
              <li>Account information (name, email, company)</li>
              <li>Usage data (agent creation, tool calls, logs)</li>
              <li>Infrastructure metrics (uptime, performance)</li>
              <li>Payment information (processed through third parties)</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-300">2. How We Use Your Data</h2>
            <p>
              We use your data to:
            </p>
            <ul>
              <li>Provide and maintain the service</li>
              <li>Improve AgentForge features</li>
              <li>Send service updates and announcements</li>
              <li>Respond to support requests</li>
              <li>Prevent fraud and abuse</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-300">3. Self-Hosted Deployments</h2>
            <p>
              If you use the self-hosted (open source) version of AgentForge, all your data remains on your infrastructure. We do not collect anything.
            </p>

            <h2 className="text-2xl font-bold text-blue-300">4. Data Retention</h2>
            <p>
              We retain your data while your account is active. You can request deletion at any time by contacting us.
            </p>

            <h2 className="text-2xl font-bold text-blue-300">5. Third-Party Services</h2>
            <p>
              AgentForge integrates with third-party LLM providers (OpenAI, Anthropic, etc.). Their privacy policies apply to their services.
            </p>

            <h2 className="text-2xl font-bold text-blue-300">6. Contact Us</h2>
            <p>
              Questions about this policy? <a href="/contact" className="text-blue-400 hover:text-blue-300 underline">Contact us</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
