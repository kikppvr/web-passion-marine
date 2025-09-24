'use client'

import { LanguageToggle } from '@/components/LanguageSwitcher'
import { Button } from '@/components/ui/button'
import { PrimaryButton } from '@/components/ui/PrimaryButton'
import { useLanguage } from '@/contexts/LanguageContext'
import { cn } from '@/lib/utils'
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle,
    Code,
    Copy,
    Eye,
    Layout,
    Ruler,
    Sparkles,
    Zap,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function ComponentsPage() {
    const [selectedVariant, setSelectedVariant] = useState('default')
    const [selectedSize, setSelectedSize] = useState('default')
    const [copiedCode, setCopiedCode] = useState<string | null>(null)
    const { language } = useLanguage()

    const copyToClipboard = async (text: string, codeId: string) => {
        try {
            await navigator.clipboard.writeText(text)
            setCopiedCode(codeId)
            setTimeout(() => setCopiedCode(null), 2000)
        } catch (err) {
            console.error('Failed to copy: ', err)
        }
    }

    const variants = [
        {
            value: 'default',
            label: 'Default',
            description: 'ปุ่มหลัก',
            color: 'bg-gradient-to-r from-blue-500 to-blue-600',
            shadow: 'shadow-blue-500/25',
        },
        {
            value: 'destructive',
            label: 'Destructive',
            description: 'ปุ่มลบ/อันตราย',
            color: 'bg-gradient-to-r from-red-500 to-red-600',
            shadow: 'shadow-red-500/25',
        },
        {
            value: 'outline',
            label: 'Outline',
            description: 'ปุ่มขอบ',
            color: 'bg-white border-2 border-blue-500',
            shadow: 'shadow-blue-500/10',
        },
        {
            value: 'secondary',
            label: 'Secondary',
            description: 'ปุ่มรอง',
            color: 'bg-gradient-to-r from-gray-500 to-gray-600',
            shadow: 'shadow-gray-500/25',
        },
        {
            value: 'ghost',
            label: 'Ghost',
            description: 'ปุ่มโปร่งใส',
            color: 'bg-transparent hover:bg-gray-100',
            shadow: 'shadow-gray-500/10',
        },
        {
            value: 'link',
            label: 'Link',
            description: 'ปุ่มลิงก์',
            color: 'bg-transparent',
            shadow: 'shadow-blue-500/10',
        },
    ]

    const sizes = [
        {
            value: 'default',
            label: 'Default',
            description: 'ขนาดปกติ',
            height: 'h-10',
            width: 'w-20',
        },
        {
            value: 'sm',
            label: 'Small',
            description: 'ขนาดเล็ก',
            height: 'h-9',
            width: 'w-16',
        },
        {
            value: 'lg',
            label: 'Large',
            description: 'ขนาดใหญ่',
            height: 'h-11',
            width: 'w-24',
        },
        {
            value: 'icon',
            label: 'Icon',
            description: 'ขนาดไอคอน',
            height: 'h-10 w-10',
            width: 'w-10',
        },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    ></div>
                </div>

                <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
                    <div className="text-center">
                        {/* Back Button */}
                        <div className="mb-6 flex justify-center">
                            <Link
                                href="/design-system"
                                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Back to Design System
                            </Link>
                        </div>

                        <div className="text-small mb-6 inline-flex items-center rounded-full bg-white/10 px-4 py-2 font-medium text-white backdrop-blur-sm">
                            <Layout className="mr-2 h-4 w-4" />
                            Components
                        </div>
                        <h1 className="text-display-1 mb-6 text-white">UI Components</h1>
                        <p className="text-lead-1 mx-auto mb-8 max-w-2xl text-blue-100">
                            คลัง UI Components ที่พร้อมใช้งาน พร้อมตัวอย่างและคู่มือการใช้งาน
                        </p>
                        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                            <LanguageToggle />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
                <div className="space-y-12">
                    {/* Quick Stats */}
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                        <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white shadow-xl">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-small opacity-90">Components</p>
                                    <p className="text-h2 font-bold">12+</p>
                                </div>
                                <Layout className="h-8 w-8 opacity-80" />
                            </div>
                        </div>
                        <div className="rounded-2xl bg-gradient-to-br from-green-500 to-green-600 p-6 text-white shadow-xl">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-small opacity-90">Variants</p>
                                    <p className="text-h2 font-bold">6</p>
                                </div>
                                <Zap className="h-8 w-8 opacity-80" />
                            </div>
                        </div>
                        <div className="rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 p-6 text-white shadow-xl">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-small opacity-90">Sizes</p>
                                    <p className="text-h2 font-bold">4</p>
                                </div>
                                <Ruler className="h-8 w-8 opacity-80" />
                            </div>
                        </div>
                        <div className="rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 p-6 text-white shadow-xl">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-small opacity-90">Status</p>
                                    <p className="text-h2 font-bold">Live</p>
                                </div>
                                <CheckCircle className="h-8 w-8 opacity-80" />
                            </div>
                        </div>
                    </div>

                    {/* Button Component */}
                    <div className="rounded-3xl border border-white/20 bg-white/70 p-6 shadow-xl shadow-gray-500/10 backdrop-blur-sm md:p-10">
                        <div className="mb-8">
                            <div className="mb-4 flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg">
                                    <Layout className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-h1 font-bold text-gray-900">
                                        Button Component
                                    </h2>
                                    <p className="text-body text-gray-600">
                                        ปุ่มที่ปรับแต่งได้หลากหลายรูปแบบและขนาด พร้อมใช้งานทันที
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Live Preview */}
                        <div className="mb-8 rounded-3xl border border-gray-200/50 bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-10">
                            <div className="mb-6 flex items-center justify-between">
                                <h3 className="text-h3 flex items-center font-semibold text-gray-900">
                                    <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
                                        <Eye className="h-4 w-4 text-white" />
                                    </div>
                                    Live Preview
                                </h3>
                                <div className="flex items-center gap-2">
                                    <div className="flex h-2 w-2 rounded-full bg-green-500"></div>
                                    <span className="text-small text-gray-600">Live</span>
                                </div>
                            </div>
                            <div className="relative overflow-hidden rounded-2xl border-2 border-dashed border-gray-300 bg-white p-12 shadow-inner">
                                <div className="flex items-center justify-center">
                                    <Button
                                        variant={selectedVariant as any}
                                        size={selectedSize as any}
                                        className="shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                    >
                                        {selectedSize === 'icon' ? '⚙️' : 'Button Text'}
                                    </Button>
                                </div>
                                {/* Background decoration */}
                                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 opacity-50"></div>
                                <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-gradient-to-br from-green-100 to-blue-100 opacity-50"></div>
                            </div>
                        </div>

                        {/* Controls */}
                        <div className="mb-8 grid gap-6 md:grid-cols-2 lg:gap-8">
                            {/* Variant Selection */}
                            <div className="rounded-2xl border border-gray-200/50 bg-white/50 p-6 backdrop-blur-sm md:p-8">
                                <div className="mb-6 flex items-center">
                                    <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500">
                                        <Zap className="h-4 w-4 text-white" />
                                    </div>
                                    <h4 className="text-h4 font-semibold text-gray-900">
                                        Variants
                                    </h4>
                                </div>
                                <div className="space-y-3">
                                    {variants.map(variant => (
                                        <label
                                            key={variant.value}
                                            className="group flex cursor-pointer items-center rounded-xl border border-gray-200/50 bg-white/50 p-4 transition-all duration-200 hover:bg-white hover:shadow-md"
                                        >
                                            <input
                                                type="radio"
                                                name="variant"
                                                value={variant.value}
                                                checked={selectedVariant === variant.value}
                                                onChange={e => setSelectedVariant(e.target.value)}
                                                className="mr-4 h-5 w-5 text-blue-600"
                                            />
                                            <div className="flex items-center">
                                                <div
                                                    className={`mr-4 h-6 w-6 rounded-lg ${variant.color} ${variant.shadow} shadow-lg`}
                                                ></div>
                                                <div>
                                                    <div className="text-nav-1 font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
                                                        {variant.label}
                                                    </div>
                                                    <div className="text-small text-gray-500">
                                                        {variant.description}
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Size Selection */}
                            <div className="rounded-2xl border border-gray-200/50 bg-white/50 p-6 backdrop-blur-sm md:p-8">
                                <div className="mb-6 flex items-center">
                                    <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
                                        <Ruler className="h-4 w-4 text-white" />
                                    </div>
                                    <h4 className="text-h4 font-semibold text-gray-900">Sizes</h4>
                                </div>
                                <div className="space-y-3">
                                    {sizes.map(size => (
                                        <label
                                            key={size.value}
                                            className="group flex cursor-pointer items-center rounded-xl border border-gray-200/50 bg-white/50 p-4 transition-all duration-200 hover:bg-white hover:shadow-md"
                                        >
                                            <input
                                                type="radio"
                                                name="size"
                                                value={size.value}
                                                checked={selectedSize === size.value}
                                                onChange={e => setSelectedSize(e.target.value)}
                                                className="mr-4 h-5 w-5 text-blue-600"
                                            />
                                            <div className="flex items-center">
                                                <div
                                                    className={`mr-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 ${size.height} ${size.width} shadow-lg shadow-blue-500/25`}
                                                ></div>
                                                <div>
                                                    <div className="text-nav-1 font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
                                                        {size.label}
                                                    </div>
                                                    <div className="text-small text-gray-500">
                                                        {size.description}
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Code Example */}
                        <div className="mb-8 rounded-3xl border border-gray-200/50 bg-gradient-to-br from-gray-900 to-gray-800 p-6 shadow-2xl md:p-8">
                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
                                        <Code className="h-4 w-4 text-white" />
                                    </div>
                                    <h4 className="text-h4 font-semibold text-white">
                                        Code Example
                                    </h4>
                                </div>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() =>
                                        copyToClipboard(
                                            `<Button variant="${selectedVariant}" size="${selectedSize}">
    ${selectedSize === 'icon' ? '⚙️' : 'Button Text'}
</Button>`,
                                            'button-code'
                                        )
                                    }
                                    className={cn(
                                        'border-gray-600 bg-gray-800 text-gray-300 transition-all duration-200 hover:bg-gray-700 hover:text-white',
                                        copiedCode === 'button-code' &&
                                            'border-green-500 bg-green-600 text-white'
                                    )}
                                >
                                    {copiedCode === 'button-code' ? (
                                        <>
                                            <CheckCircle className="mr-2 h-4 w-4" />
                                            Copied!
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="mr-2 h-4 w-4" />
                                            Copy Code
                                        </>
                                    )}
                                </Button>
                            </div>
                            <div className="relative overflow-hidden rounded-2xl border border-gray-700 bg-gray-900/50 p-6">
                                <div className="mb-4 flex items-center gap-2">
                                    <div className="flex gap-2">
                                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <span className="text-small text-gray-400">Button.tsx</span>
                                </div>
                                <pre className="text-small overflow-x-auto text-gray-300">
                                    <code>{`<Button variant="${selectedVariant}" size="${selectedSize}">
    ${selectedSize === 'icon' ? '⚙️' : 'Button Text'}
</Button>`}</code>
                                </pre>
                            </div>
                        </div>

                        {/* Usage Examples */}
                        <div className="rounded-3xl border border-gray-200/50 bg-white/50 p-6 backdrop-blur-sm md:p-8">
                            <div className="mb-6 flex items-center">
                                <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-purple-500">
                                    <Sparkles className="h-4 w-4 text-white" />
                                </div>
                                <h4 className="text-h4 font-semibold text-gray-900">
                                    Usage Examples
                                </h4>
                            </div>
                            <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                                <div className="space-y-4">
                                    <div className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
                                        <h5 className="text-small mb-3 font-semibold text-gray-700">
                                            Primary Actions
                                        </h5>
                                        <div className="flex flex-wrap items-center gap-3">
                                            <Button
                                                variant="default"
                                                size="sm"
                                                className="shadow-lg transition-all duration-300 hover:scale-105"
                                            >
                                                Primary Action
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="shadow-lg transition-all duration-300 hover:scale-105"
                                            >
                                                Secondary Action
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="rounded-xl bg-gradient-to-br from-red-50 to-pink-50 p-4">
                                        <h5 className="text-small mb-3 font-semibold text-gray-700">
                                            Destructive Actions
                                        </h5>
                                        <div className="flex flex-wrap items-center gap-3">
                                            <Button
                                                variant="destructive"
                                                size="sm"
                                                className="shadow-lg transition-all duration-300 hover:scale-105"
                                            >
                                                Delete
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="shadow-lg transition-all duration-300 hover:scale-105"
                                            >
                                                Cancel
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-4">
                                        <h5 className="text-small mb-3 font-semibold text-gray-700">
                                            Utility Actions
                                        </h5>
                                        <div className="flex flex-wrap items-center gap-3">
                                            <Button
                                                variant="link"
                                                size="sm"
                                                className="shadow-lg transition-all duration-300 hover:scale-105"
                                            >
                                                Learn More
                                            </Button>
                                            <Button
                                                variant="secondary"
                                                size="sm"
                                                className="shadow-lg transition-all duration-300 hover:scale-105"
                                            >
                                                Save Draft
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 p-4">
                                        <h5 className="text-small mb-3 font-semibold text-gray-700">
                                            Icon Buttons
                                        </h5>
                                        <div className="flex flex-wrap items-center gap-3">
                                            <Button
                                                size="icon"
                                                className="shadow-lg transition-all duration-300 hover:scale-105"
                                            >
                                                ⚙️
                                            </Button>
                                            <Button
                                                size="icon"
                                                className="shadow-lg transition-all duration-300 hover:scale-105"
                                            >
                                                ❤️
                                            </Button>
                                            <Button
                                                size="icon"
                                                className="shadow-lg transition-all duration-300 hover:scale-105"
                                            >
                                                📧
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Primary Button Component */}
                    <div className="rounded-3xl border border-white/20 bg-white/70 p-6 shadow-xl shadow-gray-500/10 backdrop-blur-sm md:p-10">
                        <div className="mb-8">
                            <div className="mb-4 flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg">
                                    <Zap className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-h1 font-bold text-gray-900">
                                        Primary Button Component
                                    </h2>
                                    <p className="text-body text-gray-600">
                                        ปุ่มหลักที่ออกแบบตาม Figma Design System พร้อมใช้งานทันที
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Live Preview */}
                        <div className="mb-8 rounded-3xl border border-gray-200/50 bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-10">
                            <div className="mb-6 flex items-center justify-between">
                                <h3 className="text-h3 flex items-center font-semibold text-gray-900">
                                    <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
                                        <Eye className="h-4 w-4 text-white" />
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
                                    <PrimaryButton variant="default" size="sm">
                                        Small
                                    </PrimaryButton>
                                    <PrimaryButton variant="default">Default</PrimaryButton>
                                    <PrimaryButton variant="default" size="lg">
                                        Large
                                    </PrimaryButton>
                                </div>
                                <div className="mt-6 flex items-center justify-center gap-6">
                                    <PrimaryButton variant="variant2" size="sm">
                                        Small
                                    </PrimaryButton>
                                    <PrimaryButton variant="variant2">Default</PrimaryButton>
                                    <PrimaryButton variant="variant2" size="lg">
                                        Large
                                    </PrimaryButton>
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
                                    <Code className="h-4 w-4 text-white" />
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
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() =>
                                                copyToClipboard(
                                                    `<PrimaryButton variant="default" size="default">
    Default
</PrimaryButton>`,
                                                    'primary-button-code'
                                                )
                                            }
                                            className="h-8 px-3 text-xs"
                                        >
                                            {copiedCode === 'primary-button-code' ? (
                                                <CheckCircle className="h-3 w-3" />
                                            ) : (
                                                <Copy className="h-3 w-3" />
                                            )}
                                        </Button>
                                    </div>
                                    <div className="mb-2 flex items-center gap-2">
                                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                                        <span className="text-small text-gray-400">
                                            PrimaryButton.tsx
                                        </span>
                                    </div>
                                    <pre className="text-small overflow-x-auto text-gray-300">
                                        <code>{`<PrimaryButton variant="default" size="default">
    Default
</PrimaryButton>`}</code>
                                    </pre>
                                </div>

                                <div className="rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-4">
                                    <div className="mb-3 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="flex h-2 w-2 rounded-full bg-red-500"></div>
                                            <div className="flex h-2 w-2 rounded-full bg-yellow-500"></div>
                                            <div className="flex h-2 w-2 rounded-full bg-green-500"></div>
                                        </div>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() =>
                                                copyToClipboard(
                                                    `<PrimaryButton variant="variant2" size="default">
    Default
</PrimaryButton>`,
                                                    'primary-button-variant2-code'
                                                )
                                            }
                                            className="h-8 px-3 text-xs"
                                        >
                                            {copiedCode === 'primary-button-variant2-code' ? (
                                                <CheckCircle className="h-3 w-3" />
                                            ) : (
                                                <Copy className="h-3 w-3" />
                                            )}
                                        </Button>
                                    </div>
                                    <div className="mb-2 flex items-center gap-2">
                                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                                        <span className="text-small text-gray-400">
                                            PrimaryButton.tsx
                                        </span>
                                    </div>
                                    <pre className="text-small overflow-x-auto text-gray-300">
                                        <code>{`<PrimaryButton variant="variant2" size="default">
    Default
</PrimaryButton>`}</code>
                                    </pre>
                                </div>

                                <div className="rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-4">
                                    <div className="mb-3 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="flex h-2 w-2 rounded-full bg-red-500"></div>
                                            <div className="flex h-2 w-2 rounded-full bg-yellow-500"></div>
                                            <div className="flex h-2 w-2 rounded-full bg-green-500"></div>
                                        </div>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() =>
                                                copyToClipboard(
                                                    `<PrimaryButton variant="default" size="sm">
    Small
</PrimaryButton>`,
                                                    'primary-button-sm-code'
                                                )
                                            }
                                            className="h-8 px-3 text-xs"
                                        >
                                            {copiedCode === 'primary-button-sm-code' ? (
                                                <CheckCircle className="h-3 w-3" />
                                            ) : (
                                                <Copy className="h-3 w-3" />
                                            )}
                                        </Button>
                                    </div>
                                    <div className="mb-2 flex items-center gap-2">
                                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                                        <span className="text-small text-gray-400">
                                            PrimaryButton.tsx
                                        </span>
                                    </div>
                                    <pre className="text-small overflow-x-auto text-gray-300">
                                        <code>{`<PrimaryButton variant="default" size="sm">
    Small
</PrimaryButton>`}</code>
                                    </pre>
                                </div>

                                <div className="rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-4">
                                    <div className="mb-3 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="flex h-2 w-2 rounded-full bg-red-500"></div>
                                            <div className="flex h-2 w-2 rounded-full bg-yellow-500"></div>
                                            <div className="flex h-2 w-2 rounded-full bg-green-500"></div>
                                        </div>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() =>
                                                copyToClipboard(
                                                    `<PrimaryButton variant="default" size="lg">
    Large
</PrimaryButton>`,
                                                    'primary-button-lg-code'
                                                )
                                            }
                                            className="h-8 px-3 text-xs"
                                        >
                                            {copiedCode === 'primary-button-lg-code' ? (
                                                <CheckCircle className="h-3 w-3" />
                                            ) : (
                                                <Copy className="h-3 w-3" />
                                            )}
                                        </Button>
                                    </div>
                                    <div className="mb-2 flex items-center gap-2">
                                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                                        <span className="text-small text-gray-400">
                                            PrimaryButton.tsx
                                        </span>
                                    </div>
                                    <pre className="text-small overflow-x-auto text-gray-300">
                                        <code>{`<PrimaryButton variant="default" size="lg">
    Large
</PrimaryButton>`}</code>
                                    </pre>
                                </div>
                            </div>
                        </div>

                        {/* Usage Examples */}
                        <div className="rounded-2xl border border-gray-200/50 bg-white/50 p-6 backdrop-blur-sm md:p-8">
                            <div className="mb-6 flex items-center">
                                <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
                                    <Sparkles className="h-4 w-4 text-white" />
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
                                        <PrimaryButton variant="default">Get Started</PrimaryButton>
                                        <PrimaryButton variant="variant2">Learn More</PrimaryButton>
                                    </div>
                                </div>
                                <div className="rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-4">
                                    <h5 className="text-small mb-3 font-semibold text-gray-700">
                                        Navigation Actions
                                    </h5>
                                    <div className="flex flex-wrap items-center gap-3">
                                        <PrimaryButton variant="default">Next Step</PrimaryButton>
                                        <PrimaryButton variant="variant2">Continue</PrimaryButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Components Roadmap */}
                    <div className="rounded-3xl border border-white/20 bg-white/70 p-6 shadow-xl shadow-gray-500/10 backdrop-blur-sm md:p-10">
                        <div className="mb-8 flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
                                <ArrowRight className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-h1 font-bold text-gray-900">
                                    Components Roadmap
                                </h2>
                                <p className="text-body text-gray-600">
                                    Components ที่กำลังพัฒนาและวางแผนไว้
                                </p>
                            </div>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                            {[
                                {
                                    name: 'Input',
                                    description: 'ช่องกรอกข้อมูล',
                                    icon: '📝',
                                    status: 'In Progress',
                                    gradient: 'from-blue-500 to-cyan-500',
                                    progress: 75,
                                },
                                {
                                    name: 'Card',
                                    description: 'การ์ดแสดงข้อมูล',
                                    icon: '🃏',
                                    status: 'Planned',
                                    gradient: 'from-green-500 to-emerald-500',
                                    progress: 0,
                                },
                                {
                                    name: 'Modal',
                                    description: 'หน้าต่างป๊อปอัพ',
                                    icon: '🪟',
                                    status: 'Planned',
                                    gradient: 'from-purple-500 to-pink-500',
                                    progress: 0,
                                },
                                {
                                    name: 'Dropdown',
                                    description: 'เมนูแบบเลื่อนลง',
                                    icon: '📋',
                                    status: 'Planned',
                                    gradient: 'from-orange-500 to-red-500',
                                    progress: 0,
                                },
                                {
                                    name: 'Toast',
                                    description: 'การแจ้งเตือน',
                                    icon: '🍞',
                                    status: 'Planned',
                                    gradient: 'from-yellow-500 to-orange-500',
                                    progress: 0,
                                },
                                {
                                    name: 'Table',
                                    description: 'ตารางข้อมูล',
                                    icon: '📊',
                                    status: 'Planned',
                                    gradient: 'from-indigo-500 to-purple-500',
                                    progress: 0,
                                },
                            ].map(component => (
                                <div
                                    key={component.name}
                                    className="group relative overflow-hidden rounded-2xl border border-gray-200/50 bg-white/50 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-gray-500/10"
                                >
                                    <div className="relative z-10">
                                        <div className="mb-4 flex items-center justify-between">
                                            <div className="text-h3 transition-transform duration-300 group-hover:scale-110">
                                                {component.icon}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                {component.status === 'In Progress' ? (
                                                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                                                ) : (
                                                    <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                                                )}
                                            </div>
                                        </div>
                                        <h4 className="text-h4 mb-2 font-bold text-gray-900">
                                            {component.name}
                                        </h4>
                                        <p className="text-small mb-4 text-gray-600">
                                            {component.description}
                                        </p>
                                        <div className="mb-4">
                                            <div className="text-small mb-2 flex items-center justify-between text-gray-500">
                                                <span>Progress</span>
                                                <span>{component.progress}%</span>
                                            </div>
                                            <div className="h-2 rounded-full bg-gray-200">
                                                <div
                                                    className={`h-2 rounded-full bg-gradient-to-r ${component.gradient} transition-all duration-500`}
                                                    style={{
                                                        width: `${component.progress}%`,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span
                                                className={cn(
                                                    'text-small-2 inline-flex items-center rounded-full px-3 py-1 font-bold shadow-lg',
                                                    component.status === 'In Progress'
                                                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                                                        : 'bg-gradient-to-r from-gray-400 to-gray-500 text-white'
                                                )}
                                            >
                                                {component.status}
                                            </span>
                                            <ArrowRight className="h-4 w-4 text-gray-400 transition-transform duration-300 group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                    {/* Background decoration */}
                                    <div
                                        className={`absolute -right-4 -top-4 h-16 w-16 rounded-full bg-gradient-to-br ${component.gradient} opacity-10`}
                                    ></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
