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
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Articles and updates about AgentForge and autonomous agent orchestration.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container max-w-2xl">
          <div className="space-y-8">
            {posts.map((post, idx) => (
              <article key={idx} className="pb-8 border-b border-gray-200">
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <div className="text-sm text-gray-600 mb-4">
                  {post.date} · {post.readTime}
                </div>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <a href="#" className="text-brand font-bold hover:underline">
                  Read more →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Subscribe for Updates</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Get notified about new posts, product updates, and announcements.
          </p>
          <form className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand"
            />
            <button type="submit" className="bg-brand text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
