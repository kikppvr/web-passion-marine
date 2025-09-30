/** @type {import('next').NextConfig} */
const nextConfig = {
    // External packages for server components
    serverExternalPackages: [],

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
        // Add custom webpack configuration here if needed
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
};

module.exports = nextConfig;
