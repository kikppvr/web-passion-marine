# Web Passion Marine Setup Guide

This guide provides complete setup instructions for your Next.js project with Tailwind CSS, Prettier, multi-language support, and all development tools configured.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

```bash
# Copy environment template
cp env.example .env.local

# For staging
cp env.staging.example .env.staging

# Edit .env.local with your values
nano .env.local
```

### 3. Start Development Server

```bash
npm run dev
```

### 4. Visit Test Pages

- **Home Page**: [http://localhost:3000](http://localhost:3000)
- **Design System**: [http://localhost:3000/design-system](http://localhost:3000/design-system)
- **Test Page**: [http://localhost:3000/test](http://localhost:3000/test)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Tailwind CSS imports and custom styles
│   ├── layout.tsx           # Root layout with font configuration
│   ├── page.tsx             # Home page with language switching
│   ├── design-system/
│   │   └── page.tsx         # Design system showcase
│   ├── test/
│   │   └── page.tsx         # Test page showcasing components
│   └── ...
├── components/
│   ├── ui/
│   │   └── button.tsx        # Reusable Button component
│   └── LanguageSwitcher.tsx  # Language switching components
├── contexts/
│   └── LanguageContext.tsx   # Language state management
├── lib/
│   ├── env.ts               # Environment configuration utilities
│   └── utils.ts             # Utility functions (cn, etc.)
└── styles/
    ├── base/
    │   ├── _colors.scss      # Color system (Blue & Grey)
    │   ├── _base.scss        # Base styles and typography
    │   └── _text.scss        # Typography utility classes
    └── main.scss            # Main SCSS imports
```

## 🎨 Design System

### Color Palette

- **Primary**: Blue theme (50-900 shades)
- **Secondary**: Grey theme (50-900 shades)
- **Semantic Colors**: Primary, secondary, success, warning, error
- **Background Colors**: Primary, secondary, tertiary, overlay
- **Text Colors**: Primary, secondary, tertiary, inverse, disabled
- **Border Colors**: Primary, secondary, focus

### Typography System

#### Font Families

- **Primary (English)**: Roboto with Thai fallback
- **Thai**: Noto Sans Thai with English fallback
- **System Fallbacks**: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

#### Typography Scale

- **Display**: display-1 (83px), display-2 (69px), display-3 (57px)
- **Headings**: h1 (40px) to h6 (18px)
- **Body**: lead-1 (20px), lead-2 (18px), body (16px)
- **Small**: small (14px), small-2 (12px)
- **Navigation**: nav-1 (16px), nav-2 (14px)
- **Labels**: label-1 (14px), label-2 (12px)

#### Font Weights

- **Light**: 300
- **Normal**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

#### Line Heights

- **Tight**: 1.25
- **Snug**: 1.375
- **Normal**: 1.5
- **Relaxed**: 1.625
- **Loose**: 2

### Custom Components

Pre-built component classes in `globals.css`:

- `.btn` - Base button styles
- `.btn-primary` - Primary button variant
- `.btn-secondary` - Secondary button variant
- `.btn-outline` - Outline button variant
- `.btn-ghost` - Ghost button variant
- `.card` - Card component styles
- `.input` - Input field styles

### Animations

Custom animations defined in `tailwind.config.ts`:

- `animate-fade-in` - Fade in effect
- `animate-slide-up` - Slide up effect
- `animate-slide-down` - Slide down effect
- `animate-scale-in` - Scale in effect

## 🌐 Multi-Language Support

### Language Switching

- **Thai/English Toggle**: Automatic language switching
- **Font Fallback**: Thai font fallback for English content
- **Local Storage**: Language preference persistence
- **Dynamic Font**: Font family changes based on language

### Usage

```typescript
import { useLanguage } from '@/contexts/LanguageContext'
import { LanguageSwitcher, LanguageToggle } from '@/components/LanguageSwitcher'

function MyComponent() {
    const { language, setLanguage, toggleLanguage } = useLanguage()

    return (
        <div>
            <LanguageSwitcher />
            <LanguageToggle />
            <p>{language === 'th' ? 'สวัสดี' : 'Hello'}</p>
        </div>
    )
}
```

### Font Configuration

- **Thai Content**: Uses Noto Sans Thai
- **English Content**: Uses Roboto
- **Mixed Content**: Automatic font switching with fallbacks

## 🛠️ Development Tools

### Prettier Configuration

- **Indentation**: 4 spaces
- **Quotes**: Single quotes
- **Semicolons**: Disabled
- **Trailing commas**: ES5 compatible
- **Print width**: 80 characters
- **Tailwind plugin**: Automatic class sorting

### ESLint Configuration

- **Next.js**: Core web vitals and TypeScript rules
- **Prettier**: Integration with ESLint
- **Custom rules**: Unused vars, explicit any warnings

### VS Code Extensions

Recommended extensions in `.vscode/extensions.json`:

- Prettier - Code formatter
- Tailwind CSS IntelliSense
- ESLint
- TypeScript support
- Auto Rename Tag
- Path Intellisense
- Material Icon Theme

## 📝 Available Scripts

### Development

```bash
npm run dev              # Start development server with Turbopack
npm run build            # Build for production
npm run start            # Start production server
```

### Code Quality

```bash
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint errors automatically
npm run format           # Format code with Prettier
npm run format:check     # Check if code is formatted
npm run type-check       # Run TypeScript type checking
```

### Build & Deploy

```bash
npm run build:production # Build for production environment
npm run build:staging    # Build for staging environment
npm run deploy:dev       # Build and start for development
npm run deploy:staging   # Build and start for staging
npm run deploy:production # Build and start for production
```

### Utilities

```bash
npm run clean            # Clean build artifacts
npm run test             # Run tests (placeholder)
npm run prepare          # Install Husky git hooks
```

## 🔧 Environment Configuration

### Environment Files

- `env.example` - Development environment template
- `env.staging.example` - Staging environment template
- `env.production.example` - Production environment template

### Required Environment Variables

```bash
NODE_ENV=development
NEXTAUTH_URL=https://dev.kikcodes.dev
NEXTAUTH_SECRET=your-secret-key
DATABASE_URL=postgresql://...
API_URL=https://dev.kikcodes.dev/api
JWT_SECRET=your-jwt-secret
ENCRYPTION_KEY=your-32-character-key
```

### Environment Detection

Use the `env.ts` utility for type-safe environment access:

```typescript
import { getEnvironment, isDevelopment, getEnvironmentConfig } from '@/lib/env'

const env = getEnvironment() // 'development' | 'staging' | 'production'
const isDev = isDevelopment() // boolean
const config = getEnvironmentConfig() // typed config object
```

## 🎯 Component Usage

### Button Component

```typescript
import { Button } from '@/components/ui/button'

// Basic usage
<Button>Click me</Button>

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Delete</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">🚀</Button>

// With custom classes using cn()
<Button className={cn('bg-gradient-to-r from-primary-500 to-accent-500')}>
  Gradient Button
</Button>
```

### Language Components

```typescript
import { LanguageSwitcher, LanguageToggle } from '@/components/LanguageSwitcher'

// Two separate buttons for Thai and English
<LanguageSwitcher />

// Single toggle button
<LanguageToggle />
```

### Typography Usage

```typescript
// Using utility classes
<h1 className="text-display-1">Display Heading</h1>
<h2 className="text-h1">Main Heading</h2>
<p className="text-body">Body text</p>

// Using HTML tags (automatically styled)
<h1>Main Heading</h1>
<h2>Sub Heading</h2>
<p>Body text</p>

// Thai-specific typography
<h1 className="text-thai-h1">หัวข้อหลัก</h1>
<p className="text-thai-body">ข้อความภาษาไทย</p>
```

### Utility Functions

```typescript
import { cn, formatDate, truncateText, generateId } from '@/lib/utils'

// Class name merging
const className = cn('base-class', condition && 'conditional-class')

// Date formatting
const formatted = formatDate(new Date()) // "January 1, 2024"

// Text truncation
const short = truncateText('Long text here', 10) // "Long text..."

// ID generation
const id = generateId() // Random string
```

## 🚀 Deployment Guide

### Plesk Deployment

1. **Upload Files**

    ```bash
    # Build the project
    npm run build:production

    # Upload to Plesk file manager or via FTP
    ```

2. **Configure Environment**
    - Copy `env.production.example` to `.env.production`
    - Update all environment variables for production
    - Set `NODE_ENV=production`

3. **Install Dependencies**

    ```bash
    npm ci --production
    ```

4. **Start Server**

    ```bash
    # Using the custom server.js
    node server.js

    # Or using Next.js built-in server
    npm start
    ```

### Environment-Specific URLs

- **Development**: `https://dev.kikcodes.dev`
- **Staging**: `https://stg.kikcodes.dev`
- **Production**: `https://kikcodes.dev`

### Plesk Configuration

1. **Node.js App**: Create new Node.js application
2. **Startup File**: Set to `server.js`
3. **Node Version**: Use Node.js 22.19.0 (recommended)
4. **Environment Variables**: Add all required env vars
5. **Domain**: Point to your domain
6. **SSL**: Enable SSL certificate

## 🔍 Troubleshooting

### Common Issues

1. **Tailwind classes not working**
    - Check if `globals.css` is imported in `layout.tsx`
    - Verify `tailwind.config.ts` is properly configured
    - Restart the development server

2. **Prettier not formatting**
    - Check `.prettierrc` configuration
    - Ensure Prettier extension is installed in VS Code
    - Run `npm run format` manually

3. **ESLint errors**
    - Run `npm run lint:fix` to auto-fix issues
    - Check `eslint.config.mjs` configuration
    - Ensure all dependencies are installed

4. **Environment variables not loading**
    - Check file naming (`.env.local`, `.env.production`)
    - Verify variable names match exactly
    - Restart the development server

5. **Font loading issues**
    - Check network connectivity
    - Verify Google Fonts API access
    - Check browser console for font errors
    - Ensure CSS variables are properly set

6. **Language switching not working**
    - Check if `LanguageProvider` wraps the app
    - Verify `useLanguage` hook is used correctly
    - Check browser console for errors
    - Ensure CSS variables are updated

### Performance Optimization

1. **Build Analysis**

    ```bash
    npm run build:analyze
    ```

2. **Bundle Size**
    - Use dynamic imports for large components
    - Optimize images with Next.js Image component
    - Remove unused dependencies

3. **Production Build**
    ```bash
    npm run build:production
    ```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Prettier Documentation](https://prettier.io/docs/en/)
- [ESLint Documentation](https://eslint.org/docs/)
- [Plesk Node.js Guide](https://docs.plesk.com/en-US/obsidian/administrator-guide/website-management/nodejs-applications.77804/)
- [Google Fonts](https://fonts.google.com/)

## 🤝 Contributing

1. **Pre-commit Hooks**: Automatically format and lint code
2. **Code Style**: Follow Prettier and ESLint rules
3. **Components**: Use the established component patterns
4. **Environment**: Test in development before staging/production
5. **Language Support**: Test both Thai and English content

## 📞 Support

For issues or questions:

1. Check this documentation first
2. Review the design system page at `/design-system`
3. Check console for error messages
4. Verify environment configuration
5. Test language switching functionality

## 🆕 Recent Updates

### Version 2.0 Features

- ✅ **Language Switching**: Thai/English language toggle
- ✅ **Font System**: Roboto + Noto Sans Thai integration
- ✅ **Responsive Design**: Mobile-first responsive layout
- ✅ **Design System**: Complete design system implementation
- ✅ **Color Palette**: Blue and grey color scheme
- ✅ **Typography Scale**: Comprehensive typography system
- ✅ **Font Fallback**: Automatic font switching for mixed content
- ✅ **Local Storage**: Language preference persistence

---

**Happy coding! 🎉**
