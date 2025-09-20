# Plesk Deployment Guide

This guide covers deploying your Next.js application to Plesk hosting with environment-specific configurations.

## 🎯 Deployment Overview

### Environments

- **Development**: `https://dev.kikcodes.dev`
- **Staging**: `https://stg.kikcodes.dev`
- **Production**: `https://kikcodes.dev`

## 📋 Pre-Deployment Checklist

### 1. Environment Preparation

- [ ] Copy appropriate environment file (`.env.production`, `.env.staging`)
- [ ] Update all environment variables
- [ ] Verify database connections
- [ ] Test API endpoints
- [ ] Check SSL certificates

### 2. Build Preparation

- [ ] Run `npm run build:production` locally
- [ ] Verify build completes without errors
- [ ] Test production build locally with `npm start`
- [ ] Check bundle size and performance

### 3. Code Quality

- [ ] Run `npm run lint` and fix all issues
- [ ] Run `npm run format` to ensure consistent formatting
- [ ] Run `npm run type-check` to verify TypeScript
- [ ] Test all functionality in development

## 🚀 Deployment Steps

### Step 1: Prepare Files

```bash
# Build for production
npm run build:production

# Create deployment package
tar -czf web-passion-marine-production.tar.gz \
  .next \
  public \
  src \
  package.json \
  package-lock.json \
  next.config.js \
  tailwind.config.ts \
  server.js \
  .env.production
```

### Step 2: Upload to Plesk

1. **Access Plesk File Manager**
    - Login to Plesk control panel
    - Navigate to your domain
    - Open File Manager

2. **Upload Files**
    - Upload the tar.gz file
    - Extract in the domain's `httpdocs` directory
    - Or upload individual files via FTP/SFTP

### Step 3: Configure Node.js Application

1. **Create Node.js App**

    ```
    Domain: kikcodes.dev (or stg.kikcodes.dev)
    Document Root: /httpdocs
    Application Root: /httpdocs
    Application Startup File: server.js
    Node.js Version: 22.19.0 (recommended)
    ```

2. **Environment Variables**
   Add these in Plesk Node.js settings:
    ```
    NODE_ENV=production
    NEXTAUTH_URL=https://kikcodes.dev
    NEXTAUTH_SECRET=your-production-secret
    DATABASE_URL=postgresql://user:pass@host:5432/db
    API_URL=https://kikcodes.dev/api
    JWT_SECRET=your-jwt-secret
    ENCRYPTION_KEY=your-32-character-key
    DEBUG=false
    LOG_LEVEL=error
    ```

### Step 4: Install Dependencies

```bash
# SSH into your Plesk server
ssh user@your-server.com

# Navigate to application directory
cd /var/www/vhosts/kikcodes.dev/httpdocs

# Install production dependencies
npm ci --production

# Verify installation
npm list --depth=0
```

### Step 5: Start Application

1. **Via Plesk Interface**
    - Go to Node.js settings
    - Click "Start" button
    - Monitor logs for any errors

2. **Via SSH (Alternative)**

    ```bash
    # Start the application
    node server.js

    # Or use PM2 for process management
    npm install -g pm2
    pm2 start server.js --name "web-passion-marine"
    pm2 save
    pm2 startup
    ```

## 🔧 Environment-Specific Configuration

### Development Environment

```bash
# .env.local
NODE_ENV=development
NEXTAUTH_URL=https://dev.kikcodes.dev
DEBUG=true
LOG_LEVEL=debug
ENABLE_DEBUG_TOOLS=true
```

### Staging Environment

```bash
# .env.staging
NODE_ENV=staging
NEXTAUTH_URL=https://stg.kikcodes.dev
DEBUG=false
LOG_LEVEL=info
ENABLE_ANALYTICS=true
```

### Production Environment

```bash
# .env.production
NODE_ENV=production
NEXTAUTH_URL=https://kikcodes.dev
DEBUG=false
LOG_LEVEL=error
ENABLE_ANALYTICS=true
ENABLE_MAINTENANCE_MODE=false
```

## 🛠️ Plesk-Specific Settings

### 1. Node.js Configuration

- **Version**: Node.js 22.19.0 (LTS)
- **Startup File**: `server.js`
- **Application Root**: `/httpdocs`
- **Document Root**: `/httpdocs`

### 2. Domain Configuration

- **Primary Domain**: `kikcodes.dev`
- **Subdomains**: `dev.kikcodes.dev`, `stg.kikcodes.dev`
- **SSL**: Enable SSL certificates for all domains
- **Redirects**: HTTP to HTTPS redirects

### 3. Database Configuration

- **Type**: PostgreSQL (recommended)
- **Host**: Local or remote database server
- **Connection**: Use connection pooling for production
- **Backup**: Regular automated backups

### 4. Security Settings

- **Firewall**: Configure appropriate ports
- **SSL/TLS**: Enable HTTPS only
- **Headers**: Security headers configured in `next.config.js`
- **Environment**: Secure environment variable storage

## 📊 Monitoring & Maintenance

### 1. Application Monitoring

```bash
# Check application status
pm2 status

# View logs
pm2 logs web-passion-marine

# Monitor performance
pm2 monit
```

### 2. Log Management

- **Application Logs**: Check Plesk Node.js logs
- **Error Tracking**: Implement error tracking service
- **Performance**: Monitor response times and memory usage

### 3. Backup Strategy

- **Code**: Git repository backups
- **Database**: Regular PostgreSQL backups
- **Files**: Application file backups
- **Environment**: Secure environment variable backups

## 🔄 Update Deployment Process

### 1. Code Updates

```bash
# Pull latest changes
git pull origin main

# Install new dependencies
npm install

# Build for production
npm run build:production

# Test locally
npm start
```

### 2. Deploy Updates

```bash
# Upload new files to Plesk
# Restart Node.js application
# Verify deployment
```

### 3. Rollback Plan

- Keep previous version files
- Database migration rollback scripts
- Environment variable backups
- Quick rollback procedure documented

## 🚨 Troubleshooting

### Common Issues

1. **Application Won't Start**
    - Check Node.js version compatibility
    - Verify all environment variables
    - Check file permissions
    - Review application logs

2. **Database Connection Errors**
    - Verify database credentials
    - Check network connectivity
    - Confirm database server status
    - Review connection string format

3. **Build Errors**
    - Check Node.js version
    - Verify all dependencies installed
    - Review TypeScript errors
    - Check environment variables

4. **Performance Issues**
    - Monitor memory usage
    - Check database query performance
    - Review application logs
    - Consider scaling options

### Debug Commands

```bash
# Check application status
pm2 status

# View detailed logs
pm2 logs web-passion-marine --lines 100

# Restart application
pm2 restart web-passion-marine

# Check system resources
htop
df -h
free -m
```

## 📈 Performance Optimization

### 1. Production Optimizations

- **Image Optimization**: Use Next.js Image component
- **Code Splitting**: Implement dynamic imports
- **Caching**: Configure appropriate cache headers
- **CDN**: Use CDN for static assets

### 2. Database Optimization

- **Connection Pooling**: Configure PostgreSQL connection pool
- **Query Optimization**: Optimize database queries
- **Indexing**: Ensure proper database indexes
- **Monitoring**: Monitor database performance

### 3. Server Optimization

- **PM2**: Use PM2 for process management
- **Nginx**: Configure Nginx as reverse proxy
- **SSL**: Optimize SSL configuration
- **Compression**: Enable gzip compression

## 🔐 Security Considerations

### 1. Environment Security

- **Secrets**: Use secure secret management
- **Environment**: Separate dev/staging/prod environments
- **Access**: Limit access to production environment
- **Monitoring**: Monitor for security issues

### 2. Application Security

- **Headers**: Security headers configured
- **HTTPS**: Force HTTPS connections
- **Validation**: Input validation and sanitization
- **Authentication**: Secure authentication implementation

### 3. Infrastructure Security

- **Firewall**: Configure appropriate firewall rules
- **Updates**: Keep system and dependencies updated
- **Monitoring**: Monitor for security threats
- **Backups**: Secure backup storage

## 📞 Support & Resources

### Plesk Resources

- [Plesk Node.js Documentation](https://docs.plesk.com/en-US/obsidian/administrator-guide/website-management/nodejs-applications.77804/)
- [Plesk Support](https://www.plesk.com/support/)

### Next.js Resources

- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Next.js Performance](https://nextjs.org/docs/advanced-features/measuring-performance)

### Monitoring Tools

- **PM2**: Process management
- **New Relic**: Application monitoring
- **Sentry**: Error tracking
- **Google Analytics**: User analytics

---

**Deployment completed successfully! 🎉**
