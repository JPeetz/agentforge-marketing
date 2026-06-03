'use client'

import { useState } from 'react'

interface FormData {
  name: string
  email: string
  company: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Questions about AgentForge? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-200">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 glassmorphism border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/60"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-200">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 glassmorphism border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/60"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-200">Company (optional)</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 glassmorphism border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/60"
                placeholder="Your company"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-200">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 glassmorphism border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/60 resize-none"
                placeholder="Tell us how we can help..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition"
            >
              Send Message
            </button>
            {submitted && (
              <div className="glassmorphism border border-green-500/30 text-green-300 p-4 rounded-lg text-center">
                ✓ Message sent! We'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </section>

      <section className="py-20 border-t border-blue-500/10">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Other Ways to Connect</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="glassmorphism p-6 rounded-lg border border-blue-500/20 text-center">
              <h3 className="font-bold mb-2 text-blue-300">GitHub</h3>
              <p className="text-gray-400 mb-4 text-sm">Code, issues, and discussions</p>
              <a href="https://github.com/agentforge/agentforge" className="text-blue-400 font-bold hover:text-blue-300">
                View on GitHub →
              </a>
            </div>
            <div className="glassmorphism p-6 rounded-lg border border-blue-500/20 text-center">
              <h3 className="font-bold mb-2 text-blue-300">Discord</h3>
              <p className="text-gray-400 mb-4 text-sm">Chat with the community</p>
              <a href="https://discord.gg/agentforge" className="text-blue-400 font-bold hover:text-blue-300">
                Join Discord →
              </a>
            </div>
            <div className="glassmorphism p-6 rounded-lg border border-blue-500/20 text-center">
              <h3 className="font-bold mb-2 text-blue-300">Email</h3>
              <p className="text-gray-400 mb-4 text-sm">Direct support</p>
              <a href="mailto:support@agentforge.dev" className="text-blue-400 font-bold hover:text-blue-300">
                support@agentforge.dev
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
