import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            // Font families
            fontFamily: {
                sans: ['var(--font-roboto)', 'sans-serif'],
                thai: [
                    'var(--font-noto-sans-thai)',
                    'var(--font-roboto)',
                    'sans-serif',
                ],
            },
            // Font sizes from design system
            fontSize: {
                'display-1': ['5.1875rem', { lineHeight: '1.25' }], // 83px
                'display-2': ['4.3125rem', { lineHeight: '1.25' }], // 69px
                'display-3': ['3.5625rem', { lineHeight: '1.25' }], // 57px
                h1: ['2.5rem', { lineHeight: '1.25' }], // 40px
                h2: ['2rem', { lineHeight: '1.25' }], // 32px
                h3: ['1.75rem', { lineHeight: '1.375' }], // 28px
                h4: ['1.5rem', { lineHeight: '1.375' }], // 24px
                h5: ['1.25rem', { lineHeight: '1.375' }], // 20px
                h6: ['1.125rem', { lineHeight: '1.375' }], // 18px
                'lead-1': ['1.25rem', { lineHeight: '1.625' }], // 20px
                'lead-2': ['1.125rem', { lineHeight: '1.625' }], // 18px
                body: ['1rem', { lineHeight: '1.5' }], // 16px
                small: ['0.875rem', { lineHeight: '1.5' }], // 14px
                'small-2': ['0.75rem', { lineHeight: '1.5' }], // 12px
                'nav-1': ['1rem', { lineHeight: '1.5' }], // 16px
                'nav-2': ['0.875rem', { lineHeight: '1.5' }], // 14px
                'label-1': ['0.875rem', { lineHeight: '1.5' }], // 14px
                'label-2': ['0.75rem', { lineHeight: '1.5' }], // 12px
            },
            // Font weights
            fontWeight: {
                light: '300',
                normal: '400',
                medium: '500',
                semibold: '600',
                bold: '700',
            },
            // Line heights
            lineHeight: {
                tight: '1.25',
                snug: '1.375',
                normal: '1.5',
                relaxed: '1.625',
                loose: '2',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ],
}

export default config
