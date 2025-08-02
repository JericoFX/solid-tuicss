# GitHub Pages Deployment Guide

This guide provides detailed instructions for deploying the Solid TuiCSS playground to GitHub Pages, along with examples and troubleshooting tips.

## Overview

The playground demonstrates all TuiCSS components with an authentic MS-DOS aesthetic. When deployed to GitHub Pages, it provides a live interactive demo of your component library.

## Automatic Deployment

### Prerequisites

- Repository hosted on GitHub
- GitHub Pages enabled in repository settings
- GitHub Actions workflow file (`.github/workflows/deploy.yml`)

### Setup Steps

1. **Configure GitHub Pages**
   ```
   Repository Settings → Pages → Source: "GitHub Actions"
   ```

2. **Verify Workflow File**
   The workflow file `.github/workflows/deploy.yml` should be present and configured correctly.

3. **Push to Main Branch**
   ```bash
   git push origin main
   ```
   
   The deployment will trigger automatically.

4. **Access Your Site**
   ```
   https://yourusername.github.io/solid-tuicss/
   ```

### Workflow Features

- **Automatic Builds** - Triggers on push to main branch
- **Bun & Node.js** - Uses both package managers for optimal performance
- **Asset Optimization** - Properly handles fonts, images, and CSS
- **Error Handling** - Fails gracefully with clear error messages

## Manual Deployment

### Build Locally

```bash
# Install dependencies
npm install

# Build playground
cd playground
npm install
npm run build

# Output will be in playground/dist/
```

### Deploy to Any Static Host

The built files in `playground/dist/` can be deployed to:

- **GitHub Pages** (manual upload)
- **Netlify** (drag & drop)
- **Vercel** (import from GitHub)
- **Surge.sh** (CLI deployment)
- **Firebase Hosting**

### Example: Netlify Deployment

```bash
# Build the project
cd playground && npm run build

# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### Example: Surge.sh Deployment

```bash
# Build the project
cd playground && npm run build

# Install Surge CLI
npm install -g surge

# Deploy
cd dist && surge . solid-tuicss-demo.surge.sh
```

## Configuration

### Base Path Configuration

The `vite.config.ts` includes automatic base path detection:

```typescript
base: process.env.NODE_ENV === 'production' ? '/solid-tuicss/' : '/'
```

For custom repository names, update the base path:

```typescript
base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/'
```

### Custom Domain

To use a custom domain with GitHub Pages:

1. Add `CNAME` file to `playground/public/`:
   ```
   your-domain.com
   ```

2. Configure DNS with your domain provider:
   ```
   CNAME yourusername.github.io
   ```

## Demo Features

Your deployed playground will include:

### Component Gallery
- **Layout Components**: Window, Panel, Border, Navbar
- **Form Components**: Input, TextArea, Select, Checkbox, Radio, Button
- **UI Components**: Tabs, ProgressBar, Modal, Dropdown
- **Data Components**: Table, Chart

### Interactive Examples
- **Working Forms** - Live form validation and submission
- **Modal Dialogs** - Functional popup windows
- **Tab Navigation** - Switchable content panels
- **Data Tables** - Sortable and filterable tables
- **Progress Bars** - Animated progress indicators
- **Charts** - ASCII-style data visualization

### MS-DOS Theming
- **Authentic Fonts** - Perfect DOS VGA 437 font
- **Color Schemes** - Classic terminal color palette
- **ASCII Art** - Retro borders and decorations
- **Sound Effects** - Optional classic beep sounds

## Troubleshooting

### Common Issues

**Build Fails with Asset Errors**
```bash
# Clear cache and rebuild
rm -rf node_modules playground/node_modules
npm install && cd playground && npm install
npm run build
```

**Fonts Not Loading**
- Ensure font files are in `playground/public/fonts/`
- Check `vite.config.ts` includes `assetsInclude: ['**/*.ttf']`

**Images Not Displaying**
- Verify images are in `playground/public/images/`
- Check image file paths in components

**GitHub Pages 404 Error**
- Confirm base path in `vite.config.ts` matches repository name
- Check GitHub Pages source is set to "GitHub Actions"

### Debug Build Locally

```bash
# Build and preview locally
cd playground
npm run build
npm run preview
```

Visit `http://localhost:4173` to test the production build.

### Workflow Debugging

Check GitHub Actions logs:
1. Go to your repository on GitHub
2. Click "Actions" tab
3. Select the latest workflow run
4. Expand failed steps to see error details

## Performance Optimization

### Asset Optimization

The build process automatically:
- **Minifies** CSS and JavaScript
- **Compresses** images and fonts
- **Bundles** dependencies efficiently
- **Generates** cache-friendly filenames

### Bundle Analysis

Analyze bundle size:

```bash
cd playground
npm run build -- --analyze
```

### CDN Integration

For faster loading, consider using a CDN:

```html
<!-- In playground/index.html -->
<link rel="preconnect" href="https://cdn.jsdelivr.net">
<link rel="dns-prefetch" href="https://cdn.jsdelivr.net">
```

## Security Considerations

### Content Security Policy

Add CSP headers for enhanced security:

```html
<!-- In playground/index.html -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; style-src 'self' 'unsafe-inline';">
```

### Dependency Security

Regularly update dependencies:

```bash
npm audit
npm audit fix
```

## Monitoring

### Analytics Integration

Add Google Analytics to track usage:

```html
<!-- In playground/index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### Error Monitoring

Consider adding error tracking:

```javascript
// Add to playground/src/index.tsx
window.addEventListener('error', (e) => {
  console.error('Application error:', e.error);
});
```

## Contributing

When contributing to deployment configurations:

1. Test changes locally with `npm run build && npm run preview`
2. Verify workflow changes in a fork first
3. Document any new environment variables or dependencies
4. Update this guide with new deployment targets

## Support

For deployment issues:

- Check the [GitHub Issues](https://github.com/yourusername/solid-tuicss/issues)
- Review [GitHub Pages documentation](https://docs.github.com/en/pages)
- Consult [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html)