import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function TestPage() {
    return (
        <div className="from-primary-50 to-accent-50 min-h-screen bg-gradient-to-br p-8">
            <div className="mx-auto max-w-4xl">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-primary-900 mb-4 text-4xl font-bold">
                        Tailwind CSS & Prettier Setup
                    </h1>
                    <p className="text-secondary-600 text-lg">
                        Testing the complete development environment
                    </p>
                </div>

                {/* Button Variants Section */}
                <div className="mb-12 rounded-lg bg-white p-8 shadow-lg">
                    <h2 className="text-primary-800 mb-6 text-2xl font-semibold">
                        Button Variants
                    </h2>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                        <div className="space-y-2">
                            <h3 className="text-secondary-700 text-sm font-medium">
                                Default
                            </h3>
                            <Button>Default Button</Button>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-secondary-700 text-sm font-medium">
                                Primary
                            </h3>
                            <Button variant="default">Primary Button</Button>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-secondary-700 text-sm font-medium">
                                Secondary
                            </h3>
                            <Button variant="secondary">
                                Secondary Button
                            </Button>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-secondary-700 text-sm font-medium">
                                Outline
                            </h3>
                            <Button variant="outline">Outline Button</Button>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-secondary-700 text-sm font-medium">
                                Ghost
                            </h3>
                            <Button variant="ghost">Ghost Button</Button>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-secondary-700 text-sm font-medium">
                                Destructive
                            </h3>
                            <Button variant="destructive">
                                Destructive Button
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Button Sizes Section */}
                <div className="mb-12 rounded-lg bg-white p-8 shadow-lg">
                    <h2 className="text-primary-800 mb-6 text-2xl font-semibold">
                        Button Sizes
                    </h2>
                    <div className="flex flex-wrap items-center gap-4">
                        <Button size="sm">Small</Button>
                        <Button size="default">Default</Button>
                        <Button size="lg">Large</Button>
                        <Button size="icon">🚀</Button>
                    </div>
                </div>

                {/* Color Palette Section */}
                <div className="mb-12 rounded-lg bg-white p-8 shadow-lg">
                    <h2 className="text-primary-800 mb-6 text-2xl font-semibold">
                        Color Palette
                    </h2>
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                        {/* Primary Colors */}
                        <div>
                            <h3 className="text-secondary-700 mb-3 text-sm font-medium">
                                Primary
                            </h3>
                            <div className="space-y-2">
                                {[
                                    50, 100, 200, 300, 400, 500, 600, 700, 800,
                                    900,
                                ].map(shade => (
                                    <div
                                        key={shade}
                                        className={cn(
                                            'h-8 rounded px-3 text-xs font-medium',
                                            `bg-primary-${shade}`,
                                            shade > 500
                                                ? 'text-white'
                                                : 'text-primary-900'
                                        )}
                                    >
                                        {shade}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Secondary Colors */}
                        <div>
                            <h3 className="text-secondary-700 mb-3 text-sm font-medium">
                                Secondary
                            </h3>
                            <div className="space-y-2">
                                {[
                                    50, 100, 200, 300, 400, 500, 600, 700, 800,
                                    900,
                                ].map(shade => (
                                    <div
                                        key={shade}
                                        className={cn(
                                            'h-8 rounded px-3 text-xs font-medium',
                                            `bg-secondary-${shade}`,
                                            shade > 500
                                                ? 'text-white'
                                                : 'text-secondary-900'
                                        )}
                                    >
                                        {shade}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Success Colors */}
                        <div>
                            <h3 className="text-secondary-700 mb-3 text-sm font-medium">
                                Success
                            </h3>
                            <div className="space-y-2">
                                {[
                                    50, 100, 200, 300, 400, 500, 600, 700, 800,
                                    900,
                                ].map(shade => (
                                    <div
                                        key={shade}
                                        className={cn(
                                            'h-8 rounded px-3 text-xs font-medium',
                                            `bg-success-${shade}`,
                                            shade > 500
                                                ? 'text-white'
                                                : 'text-success-900'
                                        )}
                                    >
                                        {shade}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Error Colors */}
                        <div>
                            <h3 className="text-secondary-700 mb-3 text-sm font-medium">
                                Error
                            </h3>
                            <div className="space-y-2">
                                {[
                                    50, 100, 200, 300, 400, 500, 600, 700, 800,
                                    900,
                                ].map(shade => (
                                    <div
                                        key={shade}
                                        className={cn(
                                            'h-8 rounded px-3 text-xs font-medium',
                                            `bg-error-${shade}`,
                                            shade > 500
                                                ? 'text-white'
                                                : 'text-error-900'
                                        )}
                                    >
                                        {shade}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Typography Section */}
                <div className="mb-12 rounded-lg bg-white p-8 shadow-lg">
                    <h2 className="text-primary-800 mb-6 text-2xl font-semibold">
                        Typography
                    </h2>
                    <div className="space-y-4">
                        <h1 className="text-primary-900 text-4xl font-bold">
                            Heading 1 - Bold
                        </h1>
                        <h2 className="text-primary-800 text-3xl font-semibold">
                            Heading 2 - Semibold
                        </h2>
                        <h3 className="text-primary-700 text-2xl font-medium">
                            Heading 3 - Medium
                        </h3>
                        <h4 className="text-primary-600 text-xl font-medium">
                            Heading 4 - Medium
                        </h4>
                        <p className="text-secondary-600 text-lg">
                            This is a paragraph with larger text. It
                            demonstrates the typography system and how text
                            flows naturally.
                        </p>
                        <p className="text-secondary-700 text-base">
                            This is regular body text. It should be comfortable
                            to read and provide good contrast against the
                            background.
                        </p>
                        <p className="text-secondary-600 text-sm">
                            This is small text, often used for captions,
                            metadata, or secondary information.
                        </p>
                    </div>
                </div>

                {/* Animation Section */}
                <div className="mb-12 rounded-lg bg-white p-8 shadow-lg">
                    <h2 className="text-primary-800 mb-6 text-2xl font-semibold">
                        Animations
                    </h2>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <div className="animate-fade-in bg-primary-100 rounded-lg p-4 text-center">
                            <p className="text-primary-800">Fade In</p>
                        </div>
                        <div className="animate-slide-up bg-secondary-100 rounded-lg p-4 text-center">
                            <p className="text-secondary-800">Slide Up</p>
                        </div>
                        <div className="animate-slide-down bg-accent-100 rounded-lg p-4 text-center">
                            <p className="text-accent-800">Slide Down</p>
                        </div>
                        <div className="animate-scale-in bg-success-100 rounded-lg p-4 text-center">
                            <p className="text-success-800">Scale In</p>
                        </div>
                    </div>
                </div>

                {/* Utility Functions Test */}
                <div className="rounded-lg bg-white p-8 shadow-lg">
                    <h2 className="text-primary-800 mb-6 text-2xl font-semibold">
                        Utility Functions Test
                    </h2>
                    <div className="space-y-4">
                        <div className="bg-secondary-50 rounded-lg p-4">
                            <h3 className="text-secondary-800 mb-2 font-medium">
                                cn() Function Test
                            </h3>
                            <p className="text-secondary-600 text-sm">
                                The cn() function combines clsx and
                                tailwind-merge for optimal class handling.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <Button
                                className={cn(
                                    'from-primary-500 to-accent-500 bg-gradient-to-r',
                                    'hover:from-primary-600 hover:to-accent-600',
                                    'text-white shadow-lg'
                                )}
                            >
                                Gradient Button
                            </Button>
                            <Button
                                className={cn(
                                    'border-primary-500 border-2',
                                    'hover:bg-primary-500 hover:text-white',
                                    'transition-all duration-300'
                                )}
                                variant="outline"
                            >
                                Animated Border
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
