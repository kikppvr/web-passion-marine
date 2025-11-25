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
        unoptimized: true, // ปิด image optimization เพื่อแก้ปัญหา cache
    },

    // Headers for security
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

    // Webpack configuration
    webpack: (config, { dev, isServer }) => {
        // ป้องกัน minification errors ใน production
        if (!dev && !isServer) {
            // ใช้ SWC minify แทน Terser (Next.js default)
            // SWC มีความเสถียรมากกว่าและป้องกัน syntax errors ได้ดีกว่า
            config.optimization = {
                ...config.optimization,
                minimize: true,
            };
        }
        return config;
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
