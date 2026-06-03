/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN'
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block'
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin'
        }
      ]
    }
  ],
  redirects: async () => [
    {
      source: '/docs',
      destination: 'https://docs.agentforge.dev',
      permanent: false
    },
    {
      source: '/github',
      destination: 'https://github.com/agentforge/agentforge',
      permanent: false
    },
    {
      source: '/discord',
      destination: 'https://discord.gg/agentforge',
      permanent: false
    }
  ]
}

module.exports = nextConfig
