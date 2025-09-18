'use client'

import { Button } from '@/components/ui/button'
import { colors } from '@/styles/index'

export default function TestColorsPage() {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="mx-auto max-w-4xl">
                <h1 className="mb-8 text-3xl font-bold text-gray-900">
                    🎨 Color System Test
                </h1>

                {/* Test SCSS Colors */}
                <div className="mb-8 rounded-lg border bg-white p-6 shadow-sm">
                    <h2 className="mb-4 text-xl font-semibold text-gray-900">
                        SCSS Design System Colors
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

                {/* Test Tailwind Classes */}
                <div className="mb-8 rounded-lg border bg-white p-6 shadow-sm">
                    <h2 className="mb-4 text-xl font-semibold text-gray-900">
                        Tailwind Classes (from SCSS)
                    </h2>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <Button className="bg-primary-500 hover:bg-primary-600">
                                Primary Button
                            </Button>
                            <Button className="bg-blue-500 hover:bg-blue-600">
                                Blue Button
                            </Button>
                            <Button className="bg-success-500 hover:bg-success-600">
                                Success Button
                            </Button>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Button className="bg-warning-500 hover:bg-warning-600">
                                Warning Button
                            </Button>
                            <Button className="bg-error-500 hover:bg-error-600">
                                Error Button
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Test CSS Variables */}
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                    <h2 className="mb-4 text-xl font-semibold text-gray-900">
                        CSS Variables (from SCSS)
                    </h2>
                    <div className="space-y-4">
                        <div
                            className="rounded-lg p-4"
                            style={{ backgroundColor: 'var(--primary)' }}
                        >
                            <p className="font-medium text-white">
                                Primary Color: var(--primary)
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
                            style={{ backgroundColor: 'var(--success-500)' }}
                        >
                            <p className="font-medium text-white">
                                Success 500: var(--success-500)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
