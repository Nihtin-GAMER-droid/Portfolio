# 🚀 Deployment Guide

Complete guide to deploy your Electronics Engineer Portfolio to production.

## Quick Summary

| Step                     | Time   | Difficulty |
| ------------------------ | ------ | ---------- |
| Frontend Deploy          | 5 min  | Easy       |
| Sanity Deploy            | 2 min  | Easy       |
| Domain Setup             | 10 min | Medium     |
| Performance Optimization | 15 min | Medium     |

## 🌐 Frontend Deployment

### Option 1: Vercel (Recommended) ⭐

**Pros:** Zero-config, automatic deploys, great performance

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Select your repository
   - Click "Import"

2. **Configure Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add:
     ```
     VITE_SANITY_PROJECT_ID=your_project_id
     VITE_SANITY_DATASET=production
     ```

3. **Deploy!**
   - Click "Deploy"
   - Wait ~2 minutes
   - Access your site at `your-project.vercel.app`

**Auto-Deploy Setup:**

- Every push to `main` automatically deploys
- Preview deployments for pull requests
- Rollback previous versions anytime

### Option 2: Netlify

**Pros:** Easy drag-and-drop, good performance

1. **Build First**

   ```bash
   npm run build
   ```

2. **Deploy via Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login
   - Drag and drop `dist/` folder
   - Wait for deployment

3. **Connect GitHub for Auto-Deploy**
   - Click "Connect to Git"
   - Select GitHub and repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`

4. **Set Environment Variables**
   - Site Settings → Build & Deploy → Environment
   - Add:
     ```
     VITE_SANITY_PROJECT_ID=your_project_id
     VITE_SANITY_DATASET=production
     ```

### Option 3: GitHub Pages

**Pros:** Free hosting

1. **Create `vite.config.js` Fix**

   ```js
   export default defineConfig({
     base: "/NithinPortfolio/", // Your repo name
     // ... rest of config
   });
   ```

2. **Update Package.json**

   ```json
   "scripts": {
     "build": "vite build",
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. **Install gh-pages**

   ```bash
   npm install --save-dev gh-pages
   ```

4. **Deploy**

   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages`

### Option 4: AWS Amplify

**Pros:** Scalable, S3 + CloudFront CDN

1. **Install Amplify CLI**

   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   ```

2. **Initialize**

   ```bash
   amplify init
   ```

3. **Add Hosting**

   ```bash
   amplify add hosting
   # Select "Hosting with Amplify Console"
   # Build: `npm run build`
   # Output: `dist`
   ```

4. **Deploy**
   ```bash
   amplify publish
   ```

## 🎨 Sanity Studio Deployment

### Deploy to Sanity Hosting (Recommended)

```bash
npm run sanity deploy
```

This creates a hosted studio at: `your-project.sanity.studio`

### Deploy Custom Domain

1. **In Sanity Dashboard** (manage.sanity.io)
2. Go to Settings → Hosting
3. Add custom domain
4. Update DNS records
5. Verify domain

## 🌍 Custom Domain Setup

### Add Domain to Vercel

1. Go to Vercel Dashboard → Project
2. Settings → Domains
3. Add custom domain
4. Update DNS records at your registrar:
   - **CNAME**: `alias.vercel.sh`
   - Or follow Vercel's instructions

### Add Domain to Netlify

1. Go to Netlify Site Settings → Domain Management
2. Click "Add Domain"
3. Enter your domain
4. Update DNS records
5. Wait for SSL certificate (automatic)

### Popular Domain Registrars

- Namecheap
- GoDaddy
- Route53 (AWS)
- Google Domains

## 📦 Pre-Deployment Checklist

Before deploying, verify:

### ✅ Code Quality

```bash
npm run lint          # Check for linting errors
npm run build         # Ensure build succeeds
```

### ✅ Environment Variables

- [ ] `VITE_SANITY_PROJECT_ID` set correctly
- [ ] `VITE_SANITY_DATASET` set to production
- [ ] No sensitive data in code

### ✅ Content Management

- [ ] Site Settings configured in Sanity
- [ ] At least one project created
- [ ] Contact email is correct
- [ ] Social links are valid

### ✅ Testing

- [ ] All pages load correctly
- [ ] Terminal easter egg works
- [ ] Animations smooth (60 FPS)
- [ ] Mobile responsive test
- [ ] Links work correctly

### ✅ Performance

```bash
npm run build         # Check bundle size
# Should be < 200KB gzipped
```

### ✅ SEO

- [ ] Meta titles on each page
- [ ] Meta descriptions
- [ ] Favicon set
- [ ] Open Graph images

## 🚀 Production Optimizations

### 1. Enable Compression

All hosting providers (Vercel, Netlify, AWS) automatically enable:

- Gzip compression
- Brotli compression
- Image optimization

### 2. Optimize Images

```bash
# Use ImageOptim or TinyPNG to compress
# Before uploading to Sanity

# Or use Sanity's automatic optimization
# by uploading via dashboard
```

### 3. Cache Policy

```js
// Vercel automatically sets optimal cache headers
// For custom headers, create vercel.json:
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### 4. Monitor Performance

**Lighthouse:**

- Go to each page
- Open DevTools → Lighthouse
- Run audit
- Target scores: 90+

**Pagespeed Insights:**

- https://pagespeed.web.dev/
- Paste your URL
- Review recommendations

## 🔒 Security Checklist

- [ ] HTTPS enabled (automatic on Vercel/Netlify)
- [ ] Headers set correctly
- [ ] No API keys exposed
- [ ] CORS configured properly
- [ ] Content Security Policy set

### Example Security Headers (Vercel)

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

## 🔧 Post-Deployment Verification

### Check Site is Live

```bash
# Test frontend
curl https://your-domain.com

# Test Sanity connection
curl "https://api.sanity.io/v2023-10-10/data/query/project_id?query=*[_type=='project']"
```

### Monitor Errors

- Set up error tracking (Sentry, LogRocket)
- Monitor Sanity API usage
- Check performance metrics

### Create Automated Backups

- Enable Sanity backups
- Keep git commits
- Document deployment process

## 🚨 Troubleshooting Deployments

### "Environment variables not loading"

- Restart deployment after adding env vars
- Verify variable names exactly match
- Check `.env.local` not committed to git

### "Sanity queries returning 401"

- Verify project ID is public or authenticated
- Check API token permissions
- Ensure dataset exists and is accessible

### "Build failing on deployment"

```bash
# Test build locally first
npm run build

# Check dependencies
npm ls

# Clear cache and reinstall
rm -rf node_modules yarn.lock
npm install
```

### "Site loads slowly"

- Run Lighthouse audit
- Optimize images
- Enable caching
- Consider using CDN

### "Maps/3D scenes not loading"

- Check geolocation permissions
- Verify API keys
- Test in incognito mode
- Check CORS settings

## 📊 Performance Targets

| Metric                   | Target  | Tool             |
| ------------------------ | ------- | ---------------- |
| First Contentful Paint   | < 1.5s  | Lighthouse       |
| Largest Contentful Paint | < 2.5s  | Lighthouse       |
| Cumulative Layout Shift  | < 0.1   | Lighthouse       |
| Time to Interactive      | < 3.5s  | Lighthouse       |
| Bundle Size              | < 200KB | Vercel           |
| API Response             | < 200ms | DevTools Network |

## 📈 Analytics Setup

### Google Analytics

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Add property for your domain
3. Copy Measurement ID
4. Add to your HTML head:

```html
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXX"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-XXXXX");
</script>
```

## 🔄 CI/CD Pipeline

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: "18"
      - run: npm install
      - run: npm run lint
      - run: npm run build
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

## 🎉 Deployment Complete!

Your portfolio is now live! Next steps:

1. Share your domain with others
2. Monitor analytics
3. Keep content fresh
4. Update projects regularly
5. Engage with visitors

---

**Happy deploying! Your engineering portfolio is now visible to the world! 🚀✨**
