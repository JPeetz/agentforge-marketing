export const metadata = {
  title: 'Security - AgentForge',
  description: 'AgentForge security model: capability-based zero-trust, ACLs, token budgets, audit trails, and more.',
}

export default function SecurityPage() {
  return (
    <div>
      <section className="py-20">
        <div className="container text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Security by Design</h1>
          <p className="text-lg text-gray-300">
            Capability-based zero-trust security. Trust nothing, verify everything.
          </p>
        </div>
      </section>

      <section className="py-20 border-t border-blue-500/10">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Zero-Trust Architecture</h2>
          <div className="max-w-3xl mx-auto space-y-8 text-gray-300">
            <div>
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Zero-Trust Principles</h3>
              <p className="mb-4">
                AgentForge implements capability-based security, not trust-based security. Every agent starts with zero permissions. You explicitly grant only what it needs.
              </p>
              <p className="mb-4">
                Each agent receives an HMAC-signed <span className="text-blue-300 font-semibold">capability token</span> that specifies:
              </p>
              <ul className="space-y-2 ml-4 list-disc">
                <li><span className="text-blue-300 font-semibold">Filesystem Paths:</span> Which directories the agent can read/write (glob patterns)</li>
                <li><span className="text-blue-300 font-semibold">Network Domains:</span> Which external APIs the agent can call</li>
                <li><span className="text-blue-300 font-semibold">Token Budget:</span> Maximum tokens the agent can consume</li>
                <li><span className="text-blue-300 font-semibold">Timeout:</span> Maximum execution time</li>
              </ul>
            </div>

            <h3>How Capability Enforcement Works</h3>
            <p>
              Every tool call is checked against the agent's capability token:
            </p>
            <pre><code className="language-go">{`Tool Call Request
  ↓
Enforcer.Check(capability, action)
  ↓
Is action allowed?
  → YES → Execute tool
  → NO  → Return error "Permission denied"`}</code></pre>

            <h3>ACL Examples</h3>
            <pre><code className="language-bash">{`# Restrictive (trusted worker)
agentforge spawn worker \\
  --fs-allow "/home/user/work/**" \\
  --domain-allow "api.openai.com" \\
  --token-budget 100000 \\
  --timeout 300

# Moderate (content creator)
agentforge spawn content-creator \\
  --fs-allow "/home/user/content/**" \\
  --fs-allow "/home/user/media/**" \\
  --domain-allow "api.openai.com" \\
  --domain-allow "github.com" \\
  --domain-allow "*.wikipedia.org" \\
  --token-budget 500000 \\
  --timeout 1800

# Permissive (research agent)
agentforge spawn researcher \\
  --fs-allow "/home/user/**" \\
  --domain-allow "*.com" \\
  --token-budget 1000000 \\
  --timeout 3600`}</code></pre>

            <h3>Attack Mitigations</h3>
            <table>
              <thead>
                <tr>
                  <th>Attack</th>
                  <th>Mitigation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Arbitrary file access</td>
                  <td>Filesystem ACLs restrict to specific paths. Cannot access /etc/, other users, or unmounted paths.</td>
                </tr>
                <tr>
                  <td>Uncontrolled network calls</td>
                  <td>Domain whitelist prevents exfiltration or SSRF attacks.</td>
                </tr>
                <tr>
                  <td>Runaway costs</td>
                  <td>Token budget enforced. Agent stops when budget exhausted.</td>
                </tr>
                <tr>
                  <td>Infinite loops</td>
                  <td>Hard timeout kills agent. Cannot be overridden by agent.</td>
                </tr>
                <tr>
                  <td>Privilege escalation</td>
                  <td>Each agent is independent goroutine. Cannot affect other agents or host system.</td>
                </tr>
                <tr>
                  <td>Unauthorized command execution</td>
                  <td>Shell_exec with argument safety. Proper quoting and escaping enforced.</td>
                </tr>
              </tbody>
            </table>

            <h3>Audit & Logging</h3>
            <p>
              Every action is logged:
            </p>
            <ul>
              <li>Agent spawn/termination</li>
              <li>Capability token generation and validation</li>
              <li>All tool invocations</li>
              <li>ACL violations (denied requests)</li>
              <li>Token budget updates and exhaustion</li>
              <li>Memory modifications</li>
              <li>Cost tracking per agent</li>
            </ul>
            <p>
              Access the audit log via the dashboard or <code>agentforge logs</code> CLI.
            </p>

            <h3>Best Practices</h3>
            <ul>
              <li><strong>Apply Principle of Least Privilege:</strong> Start restrictive, grant permissions only as needed.</li>
              <li><strong>Monitor Costs:</strong> Set realistic token budgets. Review daily costs.</li>
              <li><strong>Rotate Tokens:</strong> Periodically rotate capability tokens (recommended: monthly).</li>
              <li><strong>Audit Regularly:</strong> Review security logs for denied requests or anomalies.</li>
              <li><strong>Isolate by Department:</strong> Use department ACLs to separate content, SEO, social teams.</li>
              <li><strong>Test ACLs:</strong> Verify agents get "permission denied" for disallowed paths/domains.</li>
            </ul>

            <h3>Compliance & Standards</h3>
            <p>
              AgentForge supports compliance scenarios:
            </p>
            <ul>
              <li><strong>GDPR:</strong> Agents can be restricted to specific regions. Memory store is self-hosted.</li>
              <li><strong>HIPAA:</strong> All processing stays on-premises. No external API calls without explicit allowlist.</li>
              <li><strong>SOC 2:</strong> Full audit trail, capability-based access control, isolated agent execution.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Security Architecture</h2>
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <pre><code>{`┌─────────────────────────────────────────────────────────────┐
│                    AgentForge Daemon                        │
└─────────────────────────────────────────────────────────────┘
              │              │              │
              ↓              ↓              ↓
    ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
    │   Agent 1    │ │   Agent 2    │ │   Agent 3    │
    │ (token: abc) │ │ (token: def) │ │ (token: ghi) │
    └──────────────┘ └──────────────┘ └──────────────┘
         │                │                │
         ↓                ↓                ↓
    ┌──────────────────────────────────────────────────┐
    │     Capability Enforcer (Verification Layer)     │
    │  - Validates token signature                     │
    │  - Checks filesystem ACL                         │
    │  - Checks domain whitelist                       │
    │  - Verifies token budget                         │
    │  - Enforces timeout                              │
    └──────────────────────────────────────────────────┘
         │                │                │
    ✓ ALLOWED       ✓ ALLOWED       ✗ DENIED
         ↓                ↓                ↓
    Execute Tool    Execute Tool    Return Error
    Log Success      Log Success      Log Violation
`}</code></pre>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Deploy Securely?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Read the full documentation or contact us for enterprise security reviews.
          </p>
          <a href="/docs" className="bg-brand text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 inline-block">
            View Documentation
          </a>
        </div>
      </section>
    </div>
  )
}
