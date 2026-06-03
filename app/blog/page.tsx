export const metadata = {
  title: 'Blog - AgentForge',
  description: 'Articles, tutorials, and updates about AgentForge and autonomous agent orchestration.',
}

export default function BlogPage() {
  const posts = [
    {
      title: 'Introducing AgentForge: Secure Agent Orchestration',
      excerpt: 'We are excited to announce AgentForge, a capability-based agent orchestration platform built for security and scale.',
      date: '2026-06-01',
      readTime: '5 min read',
    },
    {
      title: 'Capability Tokens: A Zero-Trust Approach to Agent Security',
      excerpt: 'How AgentForge uses cryptographically signed capability tokens to enforce fine-grained security without trust-based assumptions.',
      date: '2026-05-28',
      readTime: '8 min read',
    },
    {
      title: 'Building Multi-Agent Pipelines with AgentForge',
      excerpt: 'A practical guide to orchestrating multiple agents using DAG-based pipelines with dependency management.',
      date: '2026-05-20',
      readTime: '10 min read',
    },
  ]

  return (
    <div>
      <section className="py-20 py-20">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Blog</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Articles and updates about AgentForge and autonomous agent orchestration.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-2xl">
          <div className="space-y-8">
            {posts.map((post, idx) => (
              <article key={idx} className="pb-8 border-b border-blue-500/10">
                <h2 className="text-2xl font-bold mb-2 text-blue-300">{post.title}</h2>
                <div className="text-sm text-gray-400 mb-4">
                  {post.date} · {post.readTime}
                </div>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <a href="#" className="text-blue-400 font-bold hover:text-blue-300 underline">
                  Read more →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-blue-500/10">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Subscribe for Updates</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get notified about new posts, product updates, and announcements.
          </p>
          <form className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-2 glassmorphism border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/60"
            />
            <button type="submit" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
