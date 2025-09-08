# Plesk Deployment Guide for Web Passion Marine

## Prerequisites

-   Node.js 16.20.2 (or compatible version 16.x)
-   npm 8.19.4 (or compatible version 8.x)
-   Plesk hosting with Node.js support

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
2. Set **Node.js version** to `16.20.2` (or latest 16.x)
3. Set **Application root** to your project directory
4. Set **Application startup file** to `server.js`
5. Set **Application URL** to your domain
6. Enable **Application mode**

### 5. Environment Variables (if needed)

In Plesk Node.js settings, add environment variables:

-   `NODE_ENV=production`
-   Any other custom environment variables your app needs

### 6. Start the Application

```bash
npm start
```

## Production Optimization Features

### Package.json Optimizations

-   ✅ **Node.js 16.20.2 compatible**: All dependencies downgraded to support Node.js 16
-   ✅ **No engine warnings**: Eliminated all EBADENGINE warnings
-   ✅ **Production ready**: Optimized for Plesk hosting
-   ✅ **Telemetry disabled**: Next.js telemetry disabled for privacy

### Performance Features

-   **Standalone output**: Optimized for deployment
-   **Compression enabled**: Automatic gzip compression
-   **SWC minification**: Fast JavaScript minification
-   **Security headers**: XSS protection, content type sniffing prevention
-   **Image optimization**: Remote image patterns configured

### Security Features

-   **PoweredByHeader disabled**: Removes Next.js identification
-   **Security headers**: X-Frame-Options, X-Content-Type-Options, Referrer-Policy
-   **Strict mode enabled**: React strict mode for development warnings

## Troubleshooting

### Common Issues

1. **Engine warnings**: Ensure you're using Node.js 16.x
2. **Build failures**: Check TypeScript configuration
3. **Memory issues**: Increase Node.js memory limit in Plesk
4. **Port conflicts**: Ensure port 3000 is available

### Memory Optimization

If you encounter memory issues, add to your Plesk Node.js environment:

```
NODE_OPTIONS=--max-old-space-size=4096
```

## File Structure

```
web-passion-marine/
├── .npmrc                 # npm configuration for Plesk
├── next.config.js         # Next.js configuration
├── package.json          # Node.js 16 compatible dependencies
├── tsconfig.json         # TypeScript configuration
├── src/                  # Source code
├── public/              # Static assets
└── PLESK_DEPLOYMENT.md  # This guide
```

## Support

-   All dependencies are compatible with Node.js 16.20.2
-   No engine compatibility warnings
-   Optimized for production deployment
-   Ready for Plesk hosting environment
