// ========================================
// DESIGN SYSTEM EXPORTS - Passion Marine
// ========================================

// Export all design tokens for TypeScript usage
export const colors = {
    blue: {
        50: '#e8ecf3',
        100: '#b9c5d9',
        200: '#97a9c6',
        300: '#6782ac',
        400: '#496a9c',
        500: '#1c4583',
        600: '#193f77',
        700: '#14315d',
        800: '#0f2648',
        900: '#0c1d37',
    },
    gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
    },
    success: {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#14532d',
    },
    warning: {
        50: '#fffbeb',
        100: '#fef3c7',
        200: '#fde68a',
        300: '#fcd34d',
        400: '#fbbf24',
        500: '#f59e0b',
        600: '#d97706',
        700: '#b45309',
        800: '#92400e',
        900: '#78350f',
    },
    error: {
        50: '#fef2f2',
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',
        800: '#991b1b',
        900: '#7f1d1d',
    },
} as const

export const typography = {
    fontFamily: {
        primary:
            "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        mono: "'JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', monospace",
    },
    fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
    },
    fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
    },
    lineHeight: {
        none: 1,
        tight: 1.25,
        snug: 1.375,
        normal: 1.5,
        relaxed: 1.625,
        loose: 2,
    },
} as const

export const spacing = {
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
} as const

export const borderRadius = {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
} as const

export const shadows = {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
} as const

export const zIndex = {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
    toast: 1080,
} as const

export const transitions = {
    fast: '150ms ease-in-out',
    base: '250ms ease-in-out',
    slow: '350ms ease-in-out',
    slower: '500ms ease-in-out',
} as const

// Semantic color tokens
export const semanticColors = {
    primary: colors.blue[500],
    primaryHover: colors.blue[600],
    primaryLight: colors.blue[50],
    primaryDark: colors.blue[700],

    secondary: colors.gray[500],
    secondaryHover: colors.gray[600],
    secondaryLight: colors.gray[50],
    secondaryDark: colors.gray[700],

    success: colors.success[500],
    successHover: colors.success[600],
    successLight: colors.success[50],
    successDark: colors.success[700],

    warning: colors.warning[500],
    warningHover: colors.warning[600],
    warningLight: colors.warning[50],
    warningDark: colors.warning[700],

    error: colors.error[500],
    errorHover: colors.error[600],
    errorLight: colors.error[50],
    errorDark: colors.error[700],
} as const

// Background colors
export const backgroundColors = {
    primary: '#ffffff',
    secondary: colors.gray[50],
    tertiary: colors.gray[100],
    overlay: 'rgba(0, 0, 0, 0.5)',
} as const

// Text colors
export const textColors = {
    primary: colors.gray[900],
    secondary: colors.gray[600],
    tertiary: colors.gray[500],
    inverse: '#ffffff',
    disabled: colors.gray[400],
} as const

// Border colors
export const borderColors = {
    primary: colors.gray[200],
    secondary: colors.gray[300],
    focus: colors.blue[500],
    error: colors.error[500],
    success: colors.success[500],
} as const

// Type definitions
export type ColorShade =
    | 50
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900
export type ColorName = 'blue' | 'gray' | 'success' | 'warning' | 'error'
export type FontSize = keyof typeof typography.fontSize
export type FontWeight = keyof typeof typography.fontWeight
export type Spacing = keyof typeof spacing
export type BorderRadius = keyof typeof borderRadius
export type Shadow = keyof typeof shadows
export type ZIndex = keyof typeof zIndex
export type Transition = keyof typeof transitions

// Helper functions
export const getColor = (color: ColorName, shade: ColorShade = 500) => {
    return colors[color][shade]
}

export const getSpacing = (size: Spacing) => {
    return spacing[size]
}

export const getFontSize = (size: FontSize) => {
    return typography.fontSize[size]
}

export const getShadow = (size: Shadow) => {
    return shadows[size]
}

export const getBorderRadius = (size: BorderRadius) => {
    return borderRadius[size]
}

// CSS Custom Properties for runtime usage
export const cssVariables = {
    '--blue-50': colors.blue[50],
    '--blue-100': colors.blue[100],
    '--blue-200': colors.blue[200],
    '--blue-300': colors.blue[300],
    '--blue-400': colors.blue[400],
    '--blue-500': colors.blue[500],
    '--blue-600': colors.blue[600],
    '--blue-700': colors.blue[700],
    '--blue-800': colors.blue[800],
    '--blue-900': colors.blue[900],
    '--primary': semanticColors.primary,
    '--primary-hover': semanticColors.primaryHover,
    '--text-primary': textColors.primary,
    '--text-secondary': textColors.secondary,
    '--bg-primary': backgroundColors.primary,
    '--bg-secondary': backgroundColors.secondary,
    '--border-primary': borderColors.primary,
    '--border-focus': borderColors.focus,
} as const
