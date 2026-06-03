import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://agentforge.dev'),
  title: 'AgentForge - Capability-Secured Agent Orchestration',
  description: 'Deploy autonomous agents with fine-grained security. Zero-trust, capability tokens, MeMex memory, 1000s concurrent agents. 10MB Go binary.',
  keywords: ['agents', 'orchestration', 'security', 'LLM', 'autonomous', 'Go', 'zero-trust'],
  authors: [{ name: 'AgentForge Team' }],
  creator: 'AgentForge',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://agentforge.dev',
    siteName: 'AgentForge',
    title: 'AgentForge - Capability-Secured Agent Orchestration',
    description: 'Deploy autonomous agents with zero-trust security. Capability tokens, MeMex memory, 1000s concurrent agents.',
    images: [
      {
        url: 'https://agentforge.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AgentForge',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AgentForge - Capability-Secured Agent Orchestration',
    description: 'Deploy autonomous agents with zero-trust security.',
    images: ['https://agentforge.dev/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="canonical" href="https://agentforge.dev" />
      </head>
      <body>
        <header className="glassmorphism border-b border-blue-500/20 sticky top-0 z-50">
          <div className="container py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white">
                ⚡
              </div>
              <span className="text-xl font-bold gradient-text">AgentForge</span>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="/" className="text-gray-300 hover:text-blue-400 font-medium text-sm">Home</a>
              <a href="/features" className="text-gray-300 hover:text-blue-400 font-medium text-sm">Features</a>
              <a href="/comparison" className="text-gray-300 hover:text-blue-400 font-medium text-sm">Comparison</a>
              <a href="/docs" className="text-gray-300 hover:text-blue-400 font-medium text-sm">Docs</a>
              <a href="/blog" className="text-gray-300 hover:text-blue-400 font-medium text-sm">Blog</a>
            </nav>
            <div className="flex gap-4">
              <a href="https://github.com/JPeetz/agentforge" className="hidden sm:inline text-gray-300 hover:text-blue-400 font-medium text-sm">GitHub</a>
              <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition">Get Started</a>
            </div>
          </div>
        </header>

        <main>
          {children}
        </main>

        <footer className="glassmorphism border-t border-blue-500/20 mt-20">
          <div className="container py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-white font-bold mb-4">AgentForge</h3>
                <p className="text-sm text-gray-400">Zero-trust agent orchestration built for security and scale.</p>
              </div>
              <div>
                <h4 className="text-blue-300 font-bold mb-4 text-sm">Product</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/features" className="hover:text-blue-400">Features</a></li>
                  <li><a href="/pricing" className="hover:text-blue-400">Pricing</a></li>
                  <li><a href="/security" className="hover:text-blue-400">Security</a></li>
                  <li><a href="/case-studies" className="hover:text-blue-400">Case Studies</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-blue-300 font-bold mb-4 text-sm">Resources</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/docs" className="hover:text-blue-400">Documentation</a></li>
                  <li><a href="/blog" className="hover:text-blue-400">Blog</a></li>
                  <li><a href="https://github.com/JPeetz/agentforge" className="hover:text-blue-400">GitHub</a></li>
                  <li><a href="https://discord.gg/agentforge" className="hover:text-blue-400">Discord</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-blue-300 font-bold mb-4 text-sm">Legal</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/privacy" className="hover:text-blue-400">Privacy</a></li>
                  <li><a href="/terms" className="hover:text-blue-400">Terms</a></li>
                  <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-blue-500/10 pt-8 flex items-center justify-between text-sm text-gray-500">
              <p>&copy; 2026 AgentForge. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="https://github.com/JPeetz/agentforge" className="hover:text-blue-400">GitHub</a>
                <a href="https://discord.gg/agentforge" className="hover:text-blue-400">Discord</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
