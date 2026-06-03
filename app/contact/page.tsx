'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to a backend service
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

      <section className="py-20 bg-white">
        <div className="container max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Company (optional)</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand"
                placeholder="Your company"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand"
                placeholder="Tell us how we can help..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-brand text-white py-3 rounded-lg font-bold hover:bg-blue-700"
            >
              Send Message
            </button>
            {submitted && (
              <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg text-center">
                ✓ Message sent! We'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Other Ways to Connect</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <h3 className="font-bold mb-2">GitHub</h3>
              <p className="text-gray-600 mb-4">Code, issues, and discussions</p>
              <a href="https://github.com/agentforge/agentforge" className="text-brand font-bold hover:underline">
                View on GitHub →
              </a>
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-2">Discord</h3>
              <p className="text-gray-600 mb-4">Chat with the community</p>
              <a href="https://discord.gg/agentforge" className="text-brand font-bold hover:underline">
                Join Discord →
              </a>
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-gray-600 mb-4">Direct support</p>
              <a href="mailto:support@agentforge.dev" className="text-brand font-bold hover:underline">
                support@agentforge.dev
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
