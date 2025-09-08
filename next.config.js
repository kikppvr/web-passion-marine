/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable experimental features
    experimental: {
        // Enable server components
        serverComponentsExternalPackages: [],
    },

    // Image optimization
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dev.kikcodes.dev',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'staging.kikcodes.dev',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'kikcodes.dev',
                port: '',
                pathname: '/**',
            },
        ],
    },

    // Headers for security
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin',
                    },
                ],
            },
        ]
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
                source: '/',
                destination: '/comingsoon',
            },
            {
                source: '/home',
                destination: '/comingsoon',
            },
            {
                source: '/api/:path*',
                destination: '/api/:path*',
            },
        ]
    },

    // Webpack configuration
    webpack: (config, { dev, isServer }) => {
        // Add custom webpack configuration here if needed
        return config
    },

    // Output configuration for deployment
    output: 'standalone',

    // Compression
    compress: true,

    // PoweredByHeader
    poweredByHeader: false,

    // React strict mode
    reactStrictMode: true,

    // SWC minification
    swcMinify: true,
}

module.exports = nextConfig
