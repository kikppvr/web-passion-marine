# Plesk Deployment Guide for Web Passion Marine

## Prerequisites

- Node.js 22.19.0 (or compatible version 22.x)
- npm 10.x (or compatible version)
- Plesk hosting with Node.js support

## Deployment Steps

### 1. Upload Project Files

Upload all project files to your Plesk hosting directory (usually `/httpdocs` or `/subdomains/yourdomain/httpdocs`)

### 2. Install Dependencies

```bash
npm install --production
```

### 3. Build the Application

```bash
npm run build:production
```

### 4. Configure Plesk Node.js Settings

In Plesk control panel:

1. Go to **Websites & Domains** → **Node.js**
2. Set **Node.js version** to `22.19.0` (or latest 22.x)
3. Set **Application root** to your project directory
4. Set **Application startup file** to `server.js`
5. Set **Application URL** to your domain
6. Enable **Application mode**

### 5. Environment Variables (if needed)

In Plesk Node.js settings, add environment variables:

- `NODE_ENV=production`
- Any other custom environment variables your app needs

### 6. Start the Application

```bash
npm start
```

## Production Optimization Features

### Package.json Optimizations

- ✅ **Node.js 22.19.0 compatible**: All dependencies updated to support Node.js 22
- ✅ **No engine warnings**: Eliminated all EBADENGINE warnings
- ✅ **Production ready**: Optimized for Plesk hosting
- ✅ **Telemetry disabled**: Next.js telemetry disabled for privacy

### Performance Features

- **Standalone output**: Optimized for deployment
- **Compression enabled**: Automatic gzip compression
- **SWC minification**: Fast JavaScript minification
- **Security headers**: XSS protection, content type sniffing prevention
- **Image optimization**: Remote image patterns configured

### Security Features

- **PoweredByHeader disabled**: Removes Next.js identification
- **Security headers**: X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- **Strict mode enabled**: React strict mode for development warnings

## Language Switching Feature

### Multi-language Support

- **Thai/English**: Automatic language switching
- **Font Fallback**: Thai font fallback for English content
- **Local Storage**: Language preference persistence
- **Dynamic Font**: Font family changes based on language

### Font Configuration

- **Thai Font**: Noto Sans Thai (primary for Thai content)
- **English Font**: Roboto (primary for English content)
- **Fallback**: Automatic font switching for mixed content

## Troubleshooting

### Common Issues

1. **Engine warnings**: Ensure you're using Node.js 22.x
2. **Build failures**: Check TypeScript configuration
3. **Memory issues**: Increase Node.js memory limit in Plesk
4. **Port conflicts**: Ensure port 3000 is available
5. **Font loading**: Verify Google Fonts are loading correctly

### Memory Optimization

If you encounter memory issues, add to your Plesk Node.js environment:

```
NODE_OPTIONS=--max-old-space-size=4096
```

### Font Loading Issues

If fonts don't load properly:

1. Check network connectivity
2. Verify Google Fonts API access
3. Check browser console for font errors
4. Ensure CSS variables are properly set

## File Structure

```
web-passion-marine/
├── .npmrc                 # npm configuration for Plesk
├── next.config.js         # Next.js configuration
├── package.json          # Node.js 22 compatible dependencies
├── tsconfig.json         # TypeScript configuration
├── src/                  # Source code
│   ├── app/             # Next.js app directory
│   ├── components/       # React components
│   │   └── LanguageSwitcher.tsx  # Language switching component
│   ├── contexts/         # React contexts
│   │   └── LanguageContext.tsx   # Language state management
│   ├── lib/             # Utility functions
│   └── styles/          # SCSS stylesheets
├── public/              # Static assets
└── docs/               # Documentation
    ├── DEPLOYMENT_GUIDE.md
    ├── PLESK_DEPLOYMENT.md
    └── SETUP_GUIDE.md
```

## Support

- All dependencies are compatible with Node.js 22.19.0
- No engine compatibility warnings
- Optimized for production deployment
- Ready for Plesk hosting environment
- Multi-language support with font switching
- Responsive design for all devices

## Recent Updates

### Version 2.0 Features

- ✅ **Language Switching**: Thai/English language toggle
- ✅ **Font System**: Roboto + Noto Sans Thai integration
- ✅ **Responsive Design**: Mobile-first responsive layout
- ✅ **Design System**: Complete design system implementation
- ✅ **Color Palette**: Blue and grey color scheme
- ✅ **Typography Scale**: Comprehensive typography system
