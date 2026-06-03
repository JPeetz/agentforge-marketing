# Deployment Guide

## Vercel Deployment (Recommended)

### Option 1: Via Git Integration (Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AgentForge marketing website"
   git remote add origin https://github.com/agentforge/agentforge-marketing
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com/new
   - Import the GitHub repository
   - Click "Deploy"

Vercel will:
- Auto-detect Next.js
- Run `npm install` and `npm run build`
- Deploy to production
- Set up automatic deployments on push

### Option 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to your Vercel account
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Option 3: Docker to Any Platform

```bash
# Build Docker image
docker build -t agentforge-marketing:latest .

# Run locally
docker run -p 3000:3000 agentforge-marketing:latest

# Push to registry (e.g., Docker Hub)
docker tag agentforge-marketing:latest username/agentforge-marketing:latest
docker push username/agentforge-marketing:latest
```

## Configuration for Deployment

### Environment Variables

Create `.env.production` (Vercel auto-loads this):

```env
NEXT_PUBLIC_SITE_URL=https://agentforge.dev
NEXT_PUBLIC_ANALYTICS_ID=YOUR_GOOGLE_ANALYTICS_ID
```

### Custom Domain

1. In Vercel dashboard, go to Project Settings → Domains
2. Add custom domain: `agentforge.dev`
3. Add DNS records (Vercel provides them)
4. Wait for DNS propagation (~15 minutes)

### SSL/TLS

- Vercel provides free SSL certificates for all domains
- Auto-renewal included
- No additional configuration needed

### Analytics

Add Google Analytics:

1. Create `app/analytics.tsx`:
   ```tsx
   import Script from 'next/script'
   
   export default function Analytics() {
     return (
       <>
         <Script
           strategy="afterInteractive"
           src={`https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID`}
         />
         <Script
           id="ga-init"
           strategy="afterInteractive"
           dangerouslySetInnerHTML={{
             __html: `
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
               gtag('config', 'G-YOUR_ID');
             `,
           }}
         />
       </>
     )
   }
   ```

2. Add to `app/layout.tsx`:
   ```tsx
   import Analytics from './analytics'
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     )
   }
   ```

## Post-Deployment

### Verification Checklist

- [ ] Homepage loads: https://agentforge.dev/
- [ ] All pages accessible
- [ ] Navigation works
- [ ] Contact form submits (check email)
- [ ] Mobile responsive (test on phone)
- [ ] SEO tags present (inspect page source)
- [ ] Open Graph tags work (share on social)
- [ ] SSL certificate valid (green lock)
- [ ] Analytics tracking (check Google Analytics)

### Monitoring

Vercel provides:
- **Real-time logs**: See all requests, errors
- **Performance metrics**: Response times, Core Web Vitals
- **Analytics**: Page views, traffic sources
- **Uptime monitoring**: 99.95% SLA

Access via: https://vercel.com/dashboard

### Updates

Deploy updates with a simple push:

```bash
# Make changes
git add .
git commit -m "Update feature description"
git push

# Vercel auto-deploys in ~30 seconds
```

## Regional Sitemaps

The robots.txt references regional sitemaps:
- `sitemap-us.xml` - USA traffic
- `sitemap-eu.xml` - EU traffic (GDPR)
- `sitemap-apac.xml` - Asia-Pacific traffic

Create these files in `public/` for geo-optimized SEO.

## Troubleshooting

### Build fails

Check Vercel build logs:
```bash
vercel logs --follow
```

Common issues:
- TypeScript errors: Fix types, redeploy
- Missing env vars: Add to Vercel dashboard
- Dependency conflicts: Clear cache, redeploy

### Site slow

- Check Core Web Vitals in Vercel Analytics
- Enable Edge Caching for static assets
- Optimize images
- Use Vercel Edge Functions for redirects

### SEO not indexing

- Verify robots.txt allows crawling
- Submit sitemap to Google Search Console
- Check for noindex meta tags
- Wait 1-2 weeks for initial indexing

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **GitHub Issues**: Open an issue for bugs
