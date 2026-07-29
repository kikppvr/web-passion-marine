/** @type {import('next').NextConfig} */
const nextConfig = {
    // External packages for server components
    serverExternalPackages: [],

    // Ignore lockfiles in standalone output
    outputFileTracingExcludes: {
        "*": ["**/package-lock.json", "**/yarn.lock", "**/pnpm-lock.yaml"],
    },

    // Set workspace root to prevent lockfile warnings
    outputFileTracingRoot: process.cwd(),

    // Image optimization
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cms-dev.passionmarine.co.th",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "cms-stg.passionmarine.co.th",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "cms.passionmarine.co.th",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "dev.passionmarine.co.th",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "stg.passionmarine.co.th",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "passionmarine.co.th",
                port: "",
                pathname: "/**",
            },
        ],
        // เปิด image optimization เพื่อ WebP/resize ลด payload (~5.2 MB)
    },

    // Headers for security + cache
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "X-Frame-Options",
                        value: "DENY",
                    },
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff",
                    },
                    {
                        key: "Referrer-Policy",
                        value: "origin-when-cross-origin",
                    },
                ],
            },
            // Cache static assets 1 year (immutable) - Next.js already adds hash
            {
                source: "/_next/static/:path*",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
            // Cache Next.js chunks with immutable (they have hash)
            {
                source: "/_next/chunks/:path*",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
            // Cache images, fonts, media
            {
                source: "/images/:path*",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
            {
                source: "/:path*.webp",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
            {
                source: "/:path*.woff2",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
            // Prevent caching of API routes (important for production updates)
            {
                source: "/api/:path*",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "no-store, no-cache, must-revalidate, proxy-revalidate",
                    },
                ],
            },
            // Note: HTML pages are not cached by default in Next.js
            // Static assets above are explicitly cached with immutable headers
            // This configuration ensures proper cache behavior for production
        ];
    },

    // Redirects
    // async redirects() {
    //     return [
    //         {
    //             source: '/',
    //             destination: '/comingsoon',
    //         },
    //         {
    //             source: '/home',
    //             destination: '/',
    //             permanent: false,
    //         },
    //     ]
    // },

    // Rewrites for API routes
    async rewrites() {
        return [
            {
                source: "/about-us",
                destination: "/comingsoon",
            },
            {
                source: "/services/marine",
                destination: "/comingsoon",
            },
            {
                source: "/services/maintenance",
                destination: "/comingsoon",
            },
            {
                source: "/services/emergency",
                destination: "/comingsoon",
            },
            {
                source: "/charter",
                destination: "/comingsoon",
            },
            {
                source: "/portfolio",
                destination: "/comingsoon",
            },
            {
                source: "/news",
                destination: "/comingsoon",
            },
            {
                source: "/contact-us",
                destination: "/comingsoon",
            },
            {
                source: "/api/:path*",
                destination: "/api/:path*",
            },
        ];
    },

    // Webpack configuration - Optimize for performance
    webpack: (config, { dev, isServer }) => {
        // ป้องกัน minification errors ใน production
        if (!dev && !isServer) {
            // ใช้ SWC minify แทน Terser (Next.js default)
            // SWC มีความเสถียรมากกว่าและป้องกัน syntax errors ได้ดีกว่า
            config.optimization = {
                ...config.optimization,
                minimize: true,
                // เพิ่ม code splitting เพื่อลด bundle size
                splitChunks: {
                    chunks: "all",
                    cacheGroups: {
                        default: false,
                        vendors: false,
                        framework: {
                            name: "framework",
                            chunks: "all",
                            test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
                            priority: 40,
                            enforce: true,
                        },
                        lib: {
                            test: /[\\/]node_modules[\\/]/,
                            name(module) {
                                const packageName = module.context.match(
                                    /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                                )?.[1];
                                return packageName ? `npm.${packageName.replace("@", "")}` : null;
                            },
                            priority: 30,
                            minChunks: 1,
                            reuseExistingChunk: true,
                        },
                    },
                },
            };
        }
        return config;
    },

    // Experimental features for better performance
    experimental: {
        optimizePackageImports: ["@phosphor-icons/web", "lucide-react"],
        // Removed "swiper" and "lightgallery" from optimizePackageImports
        // to prevent SSR/hydration issues and cache-related problems in production
    },

    // Output configuration for deployment
    output: "standalone",

    // Compression
    compress: true,

    // PoweredByHeader
    poweredByHeader: false,

    // React strict mode
    reactStrictMode: true,

    // ESLint configuration
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: false,
    },

    // TypeScript configuration
    typescript: {
        // Warning: This allows production builds to successfully complete even if
        // your project has type errors.
        ignoreBuildErrors: false,
    },
};

module.exports = nextConfig;
