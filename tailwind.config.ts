import type { Config } from 'tailwindcss'
import { borderRadius, colors, shadows, spacing } from './src/styles/index'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            // ใช้สีจาก SCSS design system
            colors: {
                // Primary colors (จาก Figma)
                primary: {
                    50: colors.blue[50],
                    100: colors.blue[100],
                    200: colors.blue[200],
                    300: colors.blue[300],
                    400: colors.blue[400],
                    500: colors.blue[500], // #1c4583
                    600: colors.blue[600],
                    700: colors.blue[700],
                    800: colors.blue[800],
                    900: colors.blue[900],
                },
                // Blue colors (backward compatibility)
                blue: {
                    50: colors.blue[50],
                    100: colors.blue[100],
                    200: colors.blue[200],
                    300: colors.blue[300],
                    400: colors.blue[400],
                    500: colors.blue[500],
                    600: colors.blue[600],
                    700: colors.blue[700],
                    800: colors.blue[800],
                    900: colors.blue[900],
                },
                // Gray colors
                gray: {
                    50: colors.gray[50],
                    100: colors.gray[100],
                    200: colors.gray[200],
                    300: colors.gray[300],
                    400: colors.gray[400],
                    500: colors.gray[500],
                    600: colors.gray[600],
                    700: colors.gray[700],
                    800: colors.gray[800],
                    900: colors.gray[900],
                },
                // Success colors
                success: {
                    50: colors.success[50],
                    100: colors.success[100],
                    200: colors.success[200],
                    300: colors.success[300],
                    400: colors.success[400],
                    500: colors.success[500],
                    600: colors.success[600],
                    700: colors.success[700],
                    800: colors.success[800],
                    900: colors.success[900],
                },
                // Warning colors
                warning: {
                    50: colors.warning[50],
                    100: colors.warning[100],
                    200: colors.warning[200],
                    300: colors.warning[300],
                    400: colors.warning[400],
                    500: colors.warning[500],
                    600: colors.warning[600],
                    700: colors.warning[700],
                    800: colors.warning[800],
                    900: colors.warning[900],
                },
                // Error colors
                error: {
                    50: colors.error[50],
                    100: colors.error[100],
                    200: colors.error[200],
                    300: colors.error[300],
                    400: colors.error[400],
                    500: colors.error[500],
                    600: colors.error[600],
                    700: colors.error[700],
                    800: colors.error[800],
                    900: colors.error[900],
                },
            },
            // ใช้ spacing จาก design system
            spacing: {
                ...spacing,
                '18': '4.5rem',
                '88': '22rem',
            },
            // ใช้ border radius จาก design system
            borderRadius: {
                ...borderRadius,
                '4xl': '2rem',
            },
            // ใช้ shadows จาก design system
            boxShadow: {
                sm: shadows.sm,
                base: shadows.base,
                md: shadows.md,
                lg: shadows.lg,
                xl: shadows.xl,
                '2xl': shadows['2xl'],
                inner: shadows.inner,
            },
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
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
