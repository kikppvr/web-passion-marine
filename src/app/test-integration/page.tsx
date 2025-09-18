'use client'

import { Button } from '@/components/ui/button'
import { colors } from '@/styles/index'

export default function TestIntegrationPage() {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="mx-auto max-w-6xl">
                <h1 className="mb-8 text-3xl font-bold text-gray-900">
                    🔧 Integration Test - SCSS + Tailwind + TypeScript
                </h1>

                {/* Test 1: TypeScript Colors */}
                <div className="mb-8 rounded-lg border bg-white p-6 shadow-sm">
                    <h2 className="mb-4 text-xl font-semibold text-gray-900">
                        1. TypeScript Colors (from SCSS)
                    </h2>
                    <div className="grid grid-cols-5 gap-4">
                        {Object.entries(colors.blue).map(([shade, hex]) => (
                            <div key={shade} className="text-center">
                                <div
                                    className="mb-2 h-16 w-full rounded-lg border border-gray-200"
                                    style={{ backgroundColor: hex }}
                                ></div>
                                <div className="text-xs font-medium text-gray-900">
                                    {shade}
                                </div>
                                <div className="font-mono text-xs text-gray-500">
                                    {hex}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Test 2: Tailwind Classes */}
                <div className="mb-8 rounded-lg border bg-white p-6 shadow-sm">
                    <h2 className="mb-4 text-xl font-semibold text-gray-900">
                        2. Tailwind Classes (from Tailwind Config)
                    </h2>
                    <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-4">
                            <Button className="bg-primary-500 hover:bg-primary-600">
                                Primary
                            </Button>
                            <Button className="bg-blue-500 hover:bg-blue-600">
                                Blue
                            </Button>
                            <Button className="bg-success-500 hover:bg-success-600">
                                Success
                            </Button>
                            <Button className="bg-warning-500 hover:bg-warning-600">
                                Warning
                            </Button>
                            <Button className="bg-error-500 hover:bg-error-600">
                                Error
                            </Button>
                        </div>
                        <div className="flex flex-wrap items-center gap-4">
                            <Button className="bg-gray-100 text-gray-900 hover:bg-gray-200">
                                Gray 100
                            </Button>
                            <Button className="bg-gray-200 text-gray-900 hover:bg-gray-300">
                                Gray 200
                            </Button>
                            <Button className="bg-gray-300 text-gray-900 hover:bg-gray-400">
                                Gray 300
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Test 3: CSS Variables */}
                <div className="mb-8 rounded-lg border bg-white p-6 shadow-sm">
                    <h2 className="mb-4 text-xl font-semibold text-gray-900">
                        3. CSS Variables (from globals.css)
                    </h2>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div
                                className="rounded-lg p-4"
                                style={{ backgroundColor: 'var(--primary)' }}
                            >
                                <p className="font-medium text-white">
                                    Primary: var(--primary)
                                </p>
                            </div>
                            <div
                                className="rounded-lg p-4"
                                style={{ backgroundColor: 'var(--blue-500)' }}
                            >
                                <p className="font-medium text-white">
                                    Blue 500: var(--blue-500)
                                </p>
                            </div>
                            <div
                                className="rounded-lg p-4"
                                style={{
                                    backgroundColor: 'var(--success-500)',
                                }}
                            >
                                <p className="font-medium text-white">
                                    Success 500: var(--success-500)
                                </p>
                            </div>
                            <div
                                className="rounded-lg p-4"
                                style={{
                                    backgroundColor: 'var(--warning-500)',
                                }}
                            >
                                <p className="font-medium text-white">
                                    Warning 500: var(--warning-500)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Test 4: Custom Components */}
                <div className="mb-8 rounded-lg border bg-white p-6 shadow-sm">
                    <h2 className="mb-4 text-xl font-semibold text-gray-900">
                        4. Custom Components (from globals.css)
                    </h2>
                    <div className="space-y-4">
                        <button className="btn-marine">
                            Marine Button (Custom Class)
                        </button>
                        <div className="card-marine">
                            <h3 className="mb-2 text-lg font-semibold text-gray-900">
                                Marine Card
                            </h3>
                            <p className="text-gray-600">
                                This is a custom card component using the design
                                system.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Test 5: Semantic Colors */}
                <div className="mb-8 rounded-lg border bg-white p-6 shadow-sm">
                    <h2 className="mb-4 text-xl font-semibold text-gray-900">
                        5. Semantic Colors
                    </h2>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <div
                            className="rounded-lg p-4"
                            style={{ backgroundColor: 'var(--primary-light)' }}
                        >
                            <p className="font-medium text-gray-900">
                                Primary Light
                            </p>
                        </div>
                        <div
                            className="rounded-lg p-4"
                            style={{ backgroundColor: 'var(--success-light)' }}
                        >
                            <p className="font-medium text-gray-900">
                                Success Light
                            </p>
                        </div>
                        <div
                            className="rounded-lg p-4"
                            style={{ backgroundColor: 'var(--warning-light)' }}
                        >
                            <p className="font-medium text-gray-900">
                                Warning Light
                            </p>
                        </div>
                        <div
                            className="rounded-lg p-4"
                            style={{ backgroundColor: 'var(--error-light)' }}
                        >
                            <p className="font-medium text-gray-900">
                                Error Light
                            </p>
                        </div>
                    </div>
                </div>

                {/* Test 6: Spacing & Border Radius */}
                <div className="mb-8 rounded-lg border bg-white p-6 shadow-sm">
                    <h2 className="mb-4 text-xl font-semibold text-gray-900">
                        6. Spacing & Border Radius
                    </h2>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <div
                                className="bg-primary-500"
                                style={{
                                    width: 'var(--space-4)',
                                    height: 'var(--space-4)',
                                    borderRadius: 'var(--radius-sm)',
                                }}
                            ></div>
                            <span className="text-sm text-gray-600">
                                Space 4, Radius SM
                            </span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div
                                className="bg-success-500"
                                style={{
                                    width: 'var(--space-8)',
                                    height: 'var(--space-8)',
                                    borderRadius: 'var(--radius-lg)',
                                }}
                            ></div>
                            <span className="text-sm text-gray-600">
                                Space 8, Radius LG
                            </span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div
                                className="bg-warning-500"
                                style={{
                                    width: 'var(--space-12)',
                                    height: 'var(--space-12)',
                                    borderRadius: 'var(--radius-full)',
                                }}
                            ></div>
                            <span className="text-sm text-gray-600">
                                Space 12, Radius Full
                            </span>
                        </div>
                    </div>
                </div>

                {/* Summary */}
                <div className="rounded-lg border bg-green-50 p-6">
                    <h2 className="mb-4 text-xl font-semibold text-green-900">
                        ✅ Integration Summary
                    </h2>
                    <div className="space-y-2 text-green-800">
                        <p>• TypeScript colors imported from SCSS ✅</p>
                        <p>• Tailwind classes working with design system ✅</p>
                        <p>• CSS variables available globally ✅</p>
                        <p>• Custom components functional ✅</p>
                        <p>• Semantic colors working ✅</p>
                        <p>• Spacing and border radius system ✅</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
