# AgentForge Marketing Website

A modern, SEO-optimized marketing website for AgentForge—built with Next.js 15, React 19, and Tailwind CSS.

## Features

- **Full Static Generation**: All pages prerendered for maximum performance
- **SEO Optimized**: Metadata, sitemaps, robots.txt, Open Graph tags
- **Security Headers**: X-Frame-Options, CSP, Content-Type-Options, Referrer-Policy
- **Responsive Design**: Mobile-first Tailwind CSS
- **Fast**: ~100KB First Load JS, optimized images with AVIF/WebP
- **Geo-Optimized**: Regional sitemaps for US, EU, APAC

## Pages

### Main Pages
- `/` - Homepage with hero, features, comparison
- `/features` - Detailed feature list
- `/security` - Security model and compliance
- `/comparison` - Feature comparison table
- `/vs-openclaw` - Comparison with OpenClaw
- `/vs-hermes` - Comparison with Hermes
- `/pricing` - Pricing and plans
- `/blog` - Blog (placeholder)
- `/case-studies` - Case studies (placeholder)

### Support Pages
- `/contact` - Contact form
- `/privacy` - Privacy policy
- `/terms` - Terms of service

## Development

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start dev server
npm run dev

# Open http://localhost:3000
```

## Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Deployment

### Vercel (Recommended)

1. Connect your Git repository to Vercel
2. Vercel auto-detects Next.js and configures build
3. Set environment variables if needed
4. Deploy with a single push

```bash
vercel deploy
```

### Docker

```bash
docker build -t agentforge-marketing .
docker run -p 3000:3000 agentforge-marketing
```

## SEO Configuration

### Robots.txt
- Allows all crawlers: Google, Bing, AI models (Claude, GPT, Perplexity)
- Blocks scrapers: MJ12bot, AhrefsBot, SemrushBot
- Specifies crawl delays and request rates
- Points to sitemaps

### Sitemaps
- `sitemap.xml` - Main sitemap
- `sitemap-us.xml` - US-specific (geo-targeting)
- `sitemap-eu.xml` - EU-specific (GDPR friendly)
- `sitemap-apac.xml` - APAC-specific

### Metadata
- Dynamic title/description per page
- Open Graph tags for social sharing
- Twitter card metadata
- Canonical URLs
- Structured data ready

## Performance

Build sizes:
- Total First Load JS: ~103 KB
- Per-page HTML: ~148 B (most pages)
- Contact form page: ~1.26 KB
- Shared chunks: ~102 KB

All pages are statically prerendered for 0 server latency.

## Configuration Files

- `next.config.js` - Image optimization, security headers, redirects
- `tailwind.config.ts` - Tailwind customization
- `tsconfig.json` - TypeScript configuration
- `postcss.config.js` - PostCSS with Tailwind and Autoprefixer
- `.gitignore` - Standard Node.js/Next.js excludes

## Features Implementation

### Security Headers
```javascript
{
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin'
}
```

### Image Optimization
- AVIF and WebP formats
- Multiple device sizes
- Automatic optimization

### Redirects
- `/docs` → https://docs.agentforge.dev
- `/github` → GitHub repository
- `/discord` → Discord server

## Content

### Homepage
- Hero section with value proposition
- Feature highlights (10MB binary, 1000s agents, 19 tools, zero trust)
- Security-first section
- Comparison vs competitors
- Call-to-action

### Comparison Pages
- Feature matrix (AgentForge vs OpenClaw vs Hermes)
- Detailed analysis of differences
- When to use each platform
- Migration guides

### Pricing
- Community (free open source)
- Managed (hosted $299/month)
- Enterprise (custom pricing)
- FAQ about billing and features

## Future Enhancements

- [ ] Blog posts implementation
- [ ] Case studies with customer testimonials
- [ ] Regional content variants
- [ ] Analytics integration (Google Analytics, Vercel Analytics)
- [ ] A/B testing
- [ ] Newsletter signup
- [ ] Chatbot support
- [ ] Demo video embedding
- [ ] Interactive feature demos

## License

This marketing site is part of AgentForge (Apache 2.0). See LICENSE in parent directory.
