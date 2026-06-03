export const metadata = {
  title: 'Case Studies - AgentForge',
  description: 'How companies use AgentForge to deploy autonomous agents securely at scale.',
}

export default function CaseStudiesPage() {
  return (
    <div>
      <section className="py-20 py-20">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Case Studies</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            How organizations use AgentForge to automate workflows securely.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="glassmorphism p-8 rounded-lg border border-blue-500/20 text-center py-20">
            <p className="text-gray-400 mb-4">More case studies coming soon!</p>
            <p className="text-gray-300">
              Have a success story with AgentForge? <a href="/contact" className="text-blue-400 font-bold hover:text-blue-300 underline">Contact us</a> to be featured.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
