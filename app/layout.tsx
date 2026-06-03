import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://agentforge.dev'),
  title: 'AgentForge - Capability-Secured Agent Orchestration',
  description: 'Deploy autonomous agents with fine-grained security. Capability tokens, MeMex memory, 1000s concurrent agents. 10MB binary.',
  keywords: ['agents', 'orchestration', 'security', 'LLM', 'autonomous', 'Go'],
  authors: [{ name: 'AgentForge Team' }],
  creator: 'AgentForge',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://agentforge.dev',
    siteName: 'AgentForge',
    title: 'AgentForge - Capability-Secured Agent Orchestration',
    description: 'Deploy autonomous agents with fine-grained security. Capability tokens, MeMex memory, 1000s concurrent agents.',
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
    description: 'Deploy autonomous agents with fine-grained security.',
    images: ['https://agentforge.dev/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  verification: {
    google: 'YOUR_GOOGLE_SITE_VERIFICATION_HERE',
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
        <meta name="theme-color" content="#1e3a8a" />
        <link rel="canonical" href="https://agentforge.dev" />
      </head>
      <body>
        <header className="border-b border-gray-200">
          <div className="container py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">⚙️</span>
              </div>
              <span className="text-xl font-bold text-brand">AgentForge</span>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="/" className="text-gray-700 hover:text-brand font-medium">Home</a>
              <a href="/features" className="text-gray-700 hover:text-brand font-medium">Features</a>
              <a href="/comparison" className="text-gray-700 hover:text-brand font-medium">Comparison</a>
              <a href="/docs" className="text-gray-700 hover:text-brand font-medium">Docs</a>
              <a href="/blog" className="text-gray-700 hover:text-brand font-medium">Blog</a>
            </nav>
            <div className="flex gap-4">
              <a href="https://github.com/agentforge/agentforge" className="hidden sm:inline text-gray-700 hover:text-brand font-medium">GitHub</a>
              <a href="/contact" className="bg-brand text-white px-4 py-2 rounded font-medium hover:bg-blue-700">Get Started</a>
            </div>
          </div>
        </header>

        <main>
          {children}
        </main>

        <footer className="bg-gray-900 text-gray-300 mt-20">
          <div className="container py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-white font-bold mb-4">AgentForge</h3>
                <p className="text-sm">Capability-secured agent orchestration for production.</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4">Product</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/features" className="hover:text-white">Features</a></li>
                  <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
                  <li><a href="/security" className="hover:text-white">Security</a></li>
                  <li><a href="/case-studies" className="hover:text-white">Case Studies</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4">Resources</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/docs" className="hover:text-white">Documentation</a></li>
                  <li><a href="/blog" className="hover:text-white">Blog</a></li>
                  <li><a href="https://github.com/agentforge/agentforge" className="hover:text-white">GitHub</a></li>
                  <li><a href="https://discord.gg/agentforge" className="hover:text-white">Discord</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/privacy" className="hover:text-white">Privacy</a></li>
                  <li><a href="/terms" className="hover:text-white">Terms</a></li>
                  <li><a href="/contact" className="hover:text-white">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 flex items-center justify-between">
              <p className="text-sm">&copy; 2026 AgentForge. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="https://github.com/agentforge/agentforge" className="text-gray-400 hover:text-white">GitHub</a>
                <a href="https://discord.gg/agentforge" className="text-gray-400 hover:text-white">Discord</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
