'use client'

import { LanguageToggle } from '@/components/LanguageSwitcher'
import { PrimaryButton } from '@/components/ui/button/PrimaryButton'
import { ReadMoreButton } from '@/components/ui/button/ReadMoreButton'
import { useLanguage } from '@/contexts/LanguageContext'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useState } from 'react'

export default function ComponentsPage() {
    const [copiedCode, setCopiedCode] = useState<string | null>(null)
    const [activeTab, setActiveTab] = useState<'primary' | 'primary-inverse' | 'readmore'>(
        'primary'
    )
    const { language } = useLanguage()

    const copyToClipboard = async (text: string, codeId: string) => {
        try {
            await navigator.clipboard.writeText(text)
            setCopiedCode(codeId)
            setTimeout(() => setCopiedCode(null), 2000)
        } catch (err) {
            console.error('Failed to copy text: ', err)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-md">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="flex h-16 items-center justify-between">
                        <Link href="/design-system" className="text-h4 font-bold text-gray-900">
                            ← Design System
                        </Link>
                        <LanguageToggle />
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
                <div className="bg-grid-white/[0.05] absolute inset-0 bg-[size:60px_60px]"></div>
                <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Button Components
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-blue-100">
                            {language === 'th'
                                ? 'คอมโพเนนต์ปุ่มที่ออกแบบตาม Figma Design System พร้อมใช้งานในโครงการ'
                                : 'Button components designed from Figma Design System ready to use in your projects'}
                        </p>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
                <div className="space-y-12">
                    {/* Quick Stats */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-2xl border border-white/20 bg-white/70 p-6 shadow-xl shadow-gray-500/10 backdrop-blur-sm">
                            <div className="flex items-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500">
                                    <i
                                        className="ph ph-cursor-click text-white"
                                        style={{ fontSize: '24px' }}
                                    ></i>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-gray-900">3</h3>
                                    <p className="text-sm text-gray-600">Button Types</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl border border-white/20 bg-white/70 p-6 shadow-xl shadow-gray-500/10 backdrop-blur-sm">
                            <div className="flex items-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-teal-500">
                                    <i
                                        className="ph ph-paint-brush text-white"
                                        style={{ fontSize: '24px' }}
                                    ></i>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-gray-900">100%</h3>
                                    <p className="text-sm text-gray-600">Figma Accurate</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl border border-white/20 bg-white/70 p-6 shadow-xl shadow-gray-500/10 backdrop-blur-sm">
                            <div className="flex items-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500">
                                    <i
                                        className="ph ph-lightning text-white"
                                        style={{ fontSize: '24px' }}
                                    ></i>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-gray-900">Ready</h3>
                                    <p className="text-sm text-gray-600">Production</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl border border-white/20 bg-white/70 p-6 shadow-xl shadow-gray-500/10 backdrop-blur-sm">
                            <div className="flex items-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                                    <i
                                        className="ph ph-code text-white"
                                        style={{ fontSize: '24px' }}
                                    ></i>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        TypeScript
                                    </h3>
                                    <p className="text-sm text-gray-600">Type Safe</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Button Components Tabs */}
                    <div className="rounded-3xl border border-white/20 bg-white/70 p-6 shadow-xl shadow-gray-500/10 backdrop-blur-sm md:p-10">
                        {/* Tab Navigation */}
                        <div className="mb-8">
                            <div className="flex space-x-1 rounded-xl bg-gray-100 p-1">
                                <button
                                    onClick={() => setActiveTab('primary')}
                                    className={cn(
                                        'flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200',
                                        activeTab === 'primary'
                                            ? 'bg-white text-blue-600 shadow-sm'
                                            : 'text-gray-600 hover:text-gray-900'
                                    )}
                                >
                                    <i
                                        className="ph ph-cursor-click"
                                        style={{ fontSize: '16px' }}
                                    ></i>
                                    Primary Button
                                </button>
                                <button
                                    onClick={() => setActiveTab('primary-inverse')}
                                    className={cn(
                                        'flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200',
                                        activeTab === 'primary-inverse'
                                            ? 'bg-white text-blue-600 shadow-sm'
                                            : 'text-gray-600 hover:text-gray-900'
                                    )}
                                >
                                    <i
                                        className="ph ph-arrow-square-out"
                                        style={{ fontSize: '16px' }}
                                    ></i>
                                    Primary Inverse
                                </button>
                                <button
                                    onClick={() => setActiveTab('readmore')}
                                    className={cn(
                                        'flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200',
                                        activeTab === 'readmore'
                                            ? 'bg-white text-blue-600 shadow-sm'
                                            : 'text-gray-600 hover:text-gray-900'
                                    )}
                                >
                                    <i className="ph ph-eye" style={{ fontSize: '16px' }}></i>
                                    Read More Button
                                </button>
                            </div>
                        </div>

                        {/* Primary Button Component */}
                        {activeTab === 'primary' && (
                            <div>
                                <div className="mb-8">
                                    <div className="mb-4 flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg">
                                            <i
                                                className="ph ph-cursor-click text-white"
                                                style={{ fontSize: '24px' }}
                                            ></i>
                                        </div>
                                        <div>
                                            <h2 className="text-h1 font-bold text-gray-900">
                                                Primary Button Component
                                            </h2>
                                            <p className="text-body text-gray-600">
                                                ปุ่มหลักที่ออกแบบตาม Figma Design System
                                                พร้อมใช้งานทันที
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Live Preview */}
                                <div className="mb-8 rounded-3xl border border-gray-200/50 bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-10">
                                    <div className="mb-6 flex items-center justify-between">
                                        <h3 className="text-h3 flex items-center font-semibold text-gray-900">
                                            <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
                                                <i className="ph ph-eye text-white"></i>
                                            </div>
                                            Live Preview
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            <div className="flex h-2 w-2 rounded-full bg-green-500"></div>
                                            <span className="text-small text-gray-600">Live</span>
                                        </div>
                                    </div>
                                    <div className="relative overflow-hidden rounded-2xl border-2 border-dashed border-gray-300 bg-white p-12 shadow-inner">
                                        <div className="flex items-center justify-center gap-6">
                                            <PrimaryButton>Default</PrimaryButton>
                                        </div>
                                        {/* Background decoration */}
                                        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 opacity-50"></div>
                                        <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-gradient-to-br from-green-100 to-blue-100 opacity-50"></div>
                                    </div>
                                </div>

                                {/* Code Examples */}
                                <div className="mb-8 rounded-2xl border border-gray-200/50 bg-white/50 p-6 backdrop-blur-sm md:p-8">
                                    <div className="mb-6 flex items-center">
                                        <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-purple-500">
                                            <i className="ph ph-lightning text-white"></i>
                                        </div>
                                        <h4 className="text-h4 font-semibold text-gray-900">
                                            Code Examples
                                        </h4>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-4">
                                            <div className="mb-3 flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex h-2 w-2 rounded-full bg-red-500"></div>
                                                    <div className="flex h-2 w-2 rounded-full bg-yellow-500"></div>
                                                    <div className="flex h-2 w-2 rounded-full bg-green-500"></div>
                                                </div>
                                                <button
                                                    className="h-8 rounded border border-gray-600 bg-gray-800 px-3 text-xs text-gray-300 hover:bg-gray-700 hover:text-white"
                                                    onClick={() =>
                                                        copyToClipboard(
                                                            `<PrimaryButton>Default</PrimaryButton>`,
                                                            'primary-button-code'
                                                        )
                                                    }
                                                >
                                                    {copiedCode === 'primary-button-code' ? (
                                                        <i className="ph ph-check-circle text-green-400"></i>
                                                    ) : (
                                                        <i className="ph ph-copy"></i>
                                                    )}
                                                </button>
                                            </div>
                                            <div className="mb-2 flex items-center gap-2">
                                                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                                                <span className="text-small text-gray-400">
                                                    PrimaryButton.tsx
                                                </span>
                                            </div>
                                            <pre className="text-small overflow-x-auto text-gray-300">
                                                <code>{`<PrimaryButton>Default</PrimaryButton>`}</code>
                                            </pre>
                                        </div>
                                    </div>
                                </div>

                                {/* Usage Examples */}
                                <div className="mb-8 rounded-2xl border border-gray-200/50 bg-white/50 p-6 backdrop-blur-sm md:p-8">
                                    <div className="mb-6 flex items-center">
                                        <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
                                            <i className="ph ph-lightning text-white"></i>
                                        </div>
                                        <h4 className="text-h4 font-semibold text-gray-900">
                                            Usage Examples
                                        </h4>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
                                            <h5 className="text-small mb-3 font-semibold text-gray-700">
                                                Call to Action
                                            </h5>
                                            <div className="flex flex-wrap items-center gap-3">
                                                <PrimaryButton>Get Started</PrimaryButton>
                                                <PrimaryButton>Continue</PrimaryButton>
                                                <PrimaryButton>Submit</PrimaryButton>
                                            </div>
                                        </div>
                                        <div className="rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-4">
                                            <h5 className="text-small mb-3 font-semibold text-gray-700">
                                                Navigation Actions
                                            </h5>
                                            <div className="flex flex-wrap items-center gap-3">
                                                <PrimaryButton>Next Step</PrimaryButton>
                                                <PrimaryButton>Proceed</PrimaryButton>
                                                <PrimaryButton>Finish</PrimaryButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Primary Inverse Component */}
                        {activeTab === 'primary-inverse' && (
                            <div>
                                <div className="mb-8">
                                    <div className="mb-4 flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
                                            <i
                                                className="ph ph-arrow-square-out text-white"
                                                style={{ fontSize: '24px' }}
                                            ></i>
                                        </div>
                                        <div>
                                            <h2 className="text-h1 font-bold text-gray-900">
                                                Primary Inverse Component
                                            </h2>
                                            <p className="text-body text-gray-600">
                                                ปุ่มหลักแบบ Inverse ที่ออกแบบตาม Figma Design System
                                                พร้อมใช้งานทันที
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Live Preview */}
                                <div className="mb-8 rounded-3xl border border-gray-200/50 bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-10">
                                    <div className="mb-6 flex items-center justify-between">
                                        <h3 className="text-h3 flex items-center font-semibold text-gray-900">
                                            <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
                                                <i className="ph ph-eye text-white"></i>
                                            </div>
                                            Live Preview
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            <div className="flex h-2 w-2 rounded-full bg-green-500"></div>
                                            <span className="text-small text-gray-600">Live</span>
                                        </div>
                                    </div>
                                    <div className="relative overflow-hidden rounded-2xl border-2 border-dashed border-gray-300 bg-white p-12 shadow-inner">
                                        <div className="flex items-center justify-center gap-6">
                                            <PrimaryButton variant="inverse">Inverse</PrimaryButton>
                                        </div>
                                        {/* Background decoration */}
                                        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 opacity-50"></div>
                                        <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 opacity-50"></div>
                                    </div>
                                </div>

                                {/* Code Examples */}
                                <div className="mb-8 rounded-2xl border border-gray-200/50 bg-white/50 p-6 backdrop-blur-sm md:p-8">
                                    <div className="mb-6 flex items-center">
                                        <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-purple-500">
                                            <i className="ph ph-lightning text-white"></i>
                                        </div>
                                        <h4 className="text-h4 font-semibold text-gray-900">
                                            Code Examples
                                        </h4>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-4">
                                            <div className="mb-3 flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex h-2 w-2 rounded-full bg-red-500"></div>
                                                    <div className="flex h-2 w-2 rounded-full bg-yellow-500"></div>
                                                    <div className="flex h-2 w-2 rounded-full bg-green-500"></div>
                                                </div>
                                                <button
                                                    className="h-8 rounded border border-gray-600 bg-gray-800 px-3 text-xs text-gray-300 hover:bg-gray-700 hover:text-white"
                                                    onClick={() =>
                                                        copyToClipboard(
                                                            `<PrimaryButton variant="inverse">Inverse</PrimaryButton>`,
                                                            'primary-inverse-code'
                                                        )
                                                    }
                                                >
                                                    {copiedCode === 'primary-inverse-code' ? (
                                                        <i className="ph ph-check-circle text-green-400"></i>
                                                    ) : (
                                                        <i className="ph ph-copy"></i>
                                                    )}
                                                </button>
                                            </div>
                                            <div className="mb-2 flex items-center gap-2">
                                                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                                                <span className="text-small text-gray-400">
                                                    PrimaryButton.tsx
                                                </span>
                                            </div>
                                            <pre className="text-small overflow-x-auto text-gray-300">
                                                <code>{`<PrimaryButton variant="inverse">Inverse</PrimaryButton>`}</code>
                                            </pre>
                                        </div>
                                    </div>
                                </div>

                                {/* Usage Examples */}
                                <div className="mb-8 rounded-2xl border border-gray-200/50 bg-white/50 p-6 backdrop-blur-sm md:p-8">
                                    <div className="mb-6 flex items-center">
                                        <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
                                            <i className="ph ph-lightning text-white"></i>
                                        </div>
                                        <h4 className="text-h4 font-semibold text-gray-900">
                                            Usage Examples
                                        </h4>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 p-4">
                                            <h5 className="text-small mb-3 font-semibold text-gray-700">
                                                Secondary Actions
                                            </h5>
                                            <div className="flex flex-wrap items-center gap-3">
                                                <PrimaryButton variant="inverse">
                                                    Learn More
                                                </PrimaryButton>
                                                <PrimaryButton variant="inverse">
                                                    Cancel
                                                </PrimaryButton>
                                                <PrimaryButton variant="inverse">
                                                    Back
                                                </PrimaryButton>
                                            </div>
                                        </div>
                                        <div className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
                                            <h5 className="text-small mb-3 font-semibold text-gray-700">
                                                Alternative Options
                                            </h5>
                                            <div className="flex flex-wrap items-center gap-3">
                                                <PrimaryButton variant="inverse">
                                                    Skip
                                                </PrimaryButton>
                                                <PrimaryButton variant="inverse">
                                                    Maybe Later
                                                </PrimaryButton>
                                                <PrimaryButton variant="inverse">
                                                    Not Now
                                                </PrimaryButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Read More Component */}
                        {activeTab === 'readmore' && (
                            <div>
                                <div className="mb-8">
                                    <div className="mb-4 flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg">
                                            <i
                                                className="ph ph-eye text-white"
                                                style={{ fontSize: '24px' }}
                                            ></i>
                                        </div>
                                        <div>
                                            <h2 className="text-h1 font-bold text-gray-900">
                                                Read More Button Component
                                            </h2>
                                            <p className="text-body text-gray-600">
                                                ปุ่ม Read More ที่ออกแบบตาม Figma Design System
                                                พร้อม theme และ state ต่างๆ
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Live Preview */}
                                <div className="mb-8 rounded-3xl border border-gray-200/50 bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-10">
                                    <div className="mb-6 flex items-center justify-between">
                                        <h3 className="text-h3 flex items-center font-semibold text-gray-900">
                                            <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
                                                <i className="ph ph-eye text-white"></i>
                                            </div>
                                            Live Preview
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            <div className="flex h-2 w-2 rounded-full bg-green-500"></div>
                                            <span className="text-small text-gray-600">Live</span>
                                        </div>
                                    </div>
                                    <div className="relative overflow-hidden rounded-2xl border-2 border-dashed border-gray-300 bg-white p-12 shadow-inner">
                                        <div className="space-y-6">
                                            <div className="flex items-center justify-center gap-6">
                                                <ReadMoreButton>Read More</ReadMoreButton>
                                                <ReadMoreButton variant="active">
                                                    Active State
                                                </ReadMoreButton>
                                            </div>
                                            <div className="flex items-center justify-center gap-6 rounded-lg bg-gray-900 p-6">
                                                <ReadMoreButton theme="dark">
                                                    Dark Theme
                                                </ReadMoreButton>
                                                <ReadMoreButton theme="dark" variant="active">
                                                    Dark Active
                                                </ReadMoreButton>
                                            </div>
                                        </div>
                                        {/* Background decoration */}
                                        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 opacity-50"></div>
                                        <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-gradient-to-br from-blue-100 to-green-100 opacity-50"></div>
                                    </div>
                                </div>

                                {/* Code Examples */}
                                <div className="mb-8 rounded-2xl border border-gray-200/50 bg-white/50 p-6 backdrop-blur-sm md:p-8">
                                    <div className="mb-6 flex items-center">
                                        <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-purple-500">
                                            <i className="ph ph-lightning text-white"></i>
                                        </div>
                                        <h4 className="text-h4 font-semibold text-gray-900">
                                            Code Examples
                                        </h4>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-4">
                                            <div className="mb-3 flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex h-2 w-2 rounded-full bg-red-500"></div>
                                                    <div className="flex h-2 w-2 rounded-full bg-yellow-500"></div>
                                                    <div className="flex h-2 w-2 rounded-full bg-green-500"></div>
                                                </div>
                                                <button
                                                    className="h-8 rounded border border-gray-600 bg-gray-800 px-3 text-xs text-gray-300 hover:bg-gray-700 hover:text-white"
                                                    onClick={() =>
                                                        copyToClipboard(
                                                            `<ReadMoreButton>Read More</ReadMoreButton>`,
                                                            'readmore-code'
                                                        )
                                                    }
                                                >
                                                    {copiedCode === 'readmore-code' ? (
                                                        <i className="ph ph-check-circle text-green-400"></i>
                                                    ) : (
                                                        <i className="ph ph-copy"></i>
                                                    )}
                                                </button>
                                            </div>
                                            <div className="mb-2 flex items-center gap-2">
                                                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                                                <span className="text-small text-gray-400">
                                                    ReadMoreButton.tsx
                                                </span>
                                            </div>
                                            <pre className="text-small overflow-x-auto text-gray-300">
                                                <code>{`<ReadMoreButton>Read More</ReadMoreButton>
<ReadMoreButton variant="active">Active State</ReadMoreButton>
<ReadMoreButton theme="dark">Dark Theme</ReadMoreButton>`}</code>
                                            </pre>
                                        </div>
                                    </div>
                                </div>

                                {/* Usage Examples */}
                                <div className="mb-8 rounded-2xl border border-gray-200/50 bg-white/50 p-6 backdrop-blur-sm md:p-8">
                                    <div className="mb-6 flex items-center">
                                        <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
                                            <i className="ph ph-lightning text-white"></i>
                                        </div>
                                        <h4 className="text-h4 font-semibold text-gray-900">
                                            Usage Examples
                                        </h4>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-4">
                                            <h5 className="text-small mb-3 font-semibold text-gray-700">
                                                Article Navigation
                                            </h5>
                                            <div className="flex flex-wrap items-center gap-3">
                                                <ReadMoreButton>Read Full Article</ReadMoreButton>
                                                <ReadMoreButton>Continue Reading</ReadMoreButton>
                                                <ReadMoreButton>Learn More</ReadMoreButton>
                                            </div>
                                        </div>
                                        <div className="rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 p-4">
                                            <h5 className="text-small mb-3 font-semibold text-gray-700">
                                                Content Links
                                            </h5>
                                            <div className="flex flex-wrap items-center gap-3">
                                                <ReadMoreButton
                                                    theme="dark"
                                                    icon="ph ph-arrow-right"
                                                >
                                                    Next Page
                                                </ReadMoreButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
