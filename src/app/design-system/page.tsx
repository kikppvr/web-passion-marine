'use client'

import { LanguageToggle } from '@/components/LanguageSwitcher'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import { cn } from '@/lib/utils'
import {
    ArrowRight,
    BookOpen,
    CheckCircle,
    Clock,
    Code,
    Copy,
    Eye,
    Layout,
    Menu,
    Palette,
    Ruler,
    Sparkles,
    Type,
    X,
    Zap,
} from 'lucide-react'
import { useState } from 'react'

export default function DesignSystemPage() {
    const [selectedVariant, setSelectedVariant] = useState('default')
    const [selectedSize, setSelectedSize] = useState('default')
    const [activeTab, setActiveTab] = useState('components')
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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

    const tabs = [
        {
            id: 'components',
            label: 'Components',
            icon: Layout,
            gradient: 'from-purple-500 to-pink-500',
            description: 'UI Components & Examples',
        },
        {
            id: 'colors',
            label: 'Colors',
            icon: Palette,
            gradient: 'from-blue-500 to-cyan-500',
            description: 'Color Palette & Usage',
        },
        {
            id: 'typography',
            label: 'Typography',
            icon: Type,
            gradient: 'from-green-500 to-emerald-500',
            description: 'Fonts & Text Styles',
        },
        {
            id: 'spacing',
            label: 'Spacing',
            icon: Ruler,
            gradient: 'from-orange-500 to-red-500',
            description: 'Spacing Scale & Layout',
        },
        {
            id: 'guidelines',
            label: 'Guidelines',
            icon: BookOpen,
            gradient: 'from-indigo-500 to-purple-500',
            description: 'Design Principles & Best Practices',
        },
    ]

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

    const colorPalette = {
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
        grey: {
            50: '#f1f1f1',
            100: '#d2d2d3',
            200: '#bdbdbe',
            300: '#9f9fa0',
            400: '#8c8c8d',
            500: '#6f6f71',
            600: '#656567',
            700: '#4f4f50',
            800: '#3d3d3e',
            900: '#2f2f2f',
        },
    }

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
                        <div className="text-small mb-6 inline-flex items-center rounded-full bg-white/10 px-4 py-2 font-medium text-white backdrop-blur-sm">
                            <Sparkles className="mr-2 h-4 w-4" />
                            Passion Marine Design System
                        </div>
                        <h1 className="text-display-1 mb-6 text-white">Design System</h1>
                        <p className="text-lead-1 mx-auto mb-8 max-w-2xl text-blue-100">
                            ระบบออกแบบที่ครบครันสำหรับ Passion Marine - คู่มือการใช้งาน ตัวอย่าง
                            และเครื่องมือสำหรับนักพัฒนา
                        </p>
                        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                            <LanguageToggle />
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="sticky top-0 z-10 border-b border-white/20 bg-white/80 shadow-lg backdrop-blur-xl">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
                    {/* Desktop Navigation Tabs */}
                    <div className="hidden lg:block">
                        <div className="scrollbar-hide flex justify-between gap-x-1 rounded-2xl border border-white/20 bg-white/30 p-1 backdrop-blur-sm">
                            {tabs.map(tab => {
                                const IconComponent = tab.icon
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={cn(
                                            'text-small group relative flex flex-shrink-0 flex-col overflow-hidden whitespace-nowrap rounded-xl px-6 py-3 font-semibold transition-all duration-300',
                                            activeTab === tab.id
                                                ? 'scale-105 transform bg-white text-gray-900 shadow-lg shadow-gray-500/20'
                                                : 'text-gray-600 hover:bg-white/50 hover:text-gray-900'
                                        )}
                                    >
                                        {activeTab === tab.id && (
                                            <div
                                                className={cn(
                                                    'absolute inset-0 bg-gradient-to-r opacity-10',
                                                    tab.gradient
                                                )}
                                            ></div>
                                        )}
                                        <div
                                            className={cn(
                                                'relative z-10 flex h-8 w-8 items-center justify-center rounded-lg shadow-sm transition-all duration-300 group-hover:scale-110',
                                                activeTab === tab.id
                                                    ? cn(
                                                          'bg-gradient-to-br text-white shadow-lg shadow-blue-500/25 ring-2 ring-white/20',
                                                          tab.gradient
                                                      )
                                                    : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600 group-hover:from-blue-50 group-hover:to-indigo-100 group-hover:text-blue-700 group-hover:shadow-md'
                                            )}
                                        >
                                            <IconComponent className="h-4 w-4" />
                                        </div>
                                        <div className="relative z-10 mt-3 text-left">
                                            <div className="text-nav-1 font-semibold">
                                                {tab.label}
                                            </div>
                                            <div className="text-small opacity-70">
                                                {tab.description}
                                            </div>
                                        </div>
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* Mobile/Tablet Navigation */}
                    <div className="lg:hidden">
                        {/* Mobile Menu Button */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg">
                                    <Layout className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-h4 font-bold text-gray-900">
                                        Design System
                                    </h2>
                                    <p className="text-small text-gray-600">Passion Marine</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:bg-gray-50"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="h-5 w-5 text-gray-600" />
                                ) : (
                                    <Menu className="h-5 w-5 text-gray-600" />
                                )}
                            </button>
                        </div>

                        {/* Mobile Dropdown Menu */}
                        {isMobileMenuOpen && (
                            <div className="mt-4 rounded-2xl border border-gray-200 bg-white shadow-xl">
                                <div className="p-2">
                                    {tabs.map(tab => {
                                        const IconComponent = tab.icon
                                        return (
                                            <button
                                                key={tab.id}
                                                onClick={() => {
                                                    setActiveTab(tab.id)
                                                    setIsMobileMenuOpen(false)
                                                }}
                                                className={cn(
                                                    'group relative flex w-full items-center rounded-xl px-4 py-3 text-left transition-all duration-200',
                                                    activeTab === tab.id
                                                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-900 shadow-sm'
                                                        : 'text-gray-700 hover:bg-gray-50'
                                                )}
                                            >
                                                {activeTab === tab.id && (
                                                    <div
                                                        className={cn(
                                                            'absolute inset-0 rounded-xl bg-gradient-to-r opacity-10',
                                                            tab.gradient
                                                        )}
                                                    ></div>
                                                )}
                                                <div className="relative flex items-center">
                                                    <div
                                                        className={cn(
                                                            'mr-3 flex h-8 w-8 items-center justify-center rounded-lg transition-colors',
                                                            activeTab === tab.id
                                                                ? 'bg-blue-500 text-white'
                                                                : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                                                        )}
                                                    >
                                                        <IconComponent className="h-4 w-4" />
                                                    </div>
                                                    <div>
                                                        <div className="text-nav-1 font-semibold">
                                                            {tab.label}
                                                        </div>
                                                        <div className="text-small opacity-70">
                                                            {tab.description}
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
                {/* Components Tab */}
                {activeTab === 'components' && (
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
                                                    onChange={e =>
                                                        setSelectedVariant(e.target.value)
                                                    }
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
                                        <h4 className="text-h4 font-semibold text-gray-900">
                                            Sizes
                                        </h4>
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
                                                        <Clock className="h-4 w-4 text-blue-500" />
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
                )}

                {/* Colors Tab */}
                {activeTab === 'colors' && (
                    <div className="space-y-12">
                        {/* Color Overview */}
                        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                            <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white shadow-xl">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-small opacity-90">Primary Colors</p>
                                        <p className="text-h2 font-bold">Blue</p>
                                    </div>
                                    <Palette className="h-8 w-8 opacity-80" />
                                </div>
                            </div>
                            <div className="rounded-2xl bg-gradient-to-br from-gray-500 to-gray-600 p-6 text-white shadow-xl">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-small opacity-90">Neutral Colors</p>
                                        <p className="text-h2 font-bold">Grey</p>
                                    </div>
                                    <Palette className="h-8 w-8 opacity-80" />
                                </div>
                            </div>
                            <div className="rounded-2xl bg-gradient-to-br from-green-500 to-green-600 p-6 text-white shadow-xl">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-small opacity-90">Success</p>
                                        <p className="text-h2 font-bold">Green</p>
                                    </div>
                                    <CheckCircle className="h-8 w-8 opacity-80" />
                                </div>
                            </div>
                            <div className="rounded-2xl bg-gradient-to-br from-red-500 to-red-600 p-6 text-white shadow-xl">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-small opacity-90">Error</p>
                                        <p className="text-h2 font-bold">Red</p>
                                    </div>
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                                        <span className="text-h3">!</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Color Palette */}
                        <div className="rounded-3xl border border-white/20 bg-white/70 p-6 shadow-xl shadow-gray-500/10 backdrop-blur-sm md:p-10">
                            <div className="mb-8 flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
                                    <Palette className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-h1 font-bold text-gray-900">
                                        Color Palette
                                    </h2>
                                    <p className="text-body text-gray-600">
                                        สีหลักที่ใช้ในระบบออกแบบ Passion Marine
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-12">
                                {Object.entries(colorPalette).map(([colorName, shades]) => (
                                    <div
                                        key={colorName}
                                        className="rounded-2xl border border-gray-200/50 bg-white/50 p-6 backdrop-blur-sm md:p-8"
                                    >
                                        <div className="mb-6 flex items-center gap-4">
                                            <div
                                                className={`h-8 w-8 rounded-xl bg-${colorName}-500 shadow-lg`}
                                            ></div>
                                            <div>
                                                <h3 className="text-h3 font-bold capitalize text-gray-900">
                                                    {colorName} Colors
                                                </h3>
                                                <p className="text-small text-gray-600">
                                                    {colorName === 'blue'
                                                        ? 'สีหลักของแบรนด์'
                                                        : 'สีสำหรับข้อความและพื้นหลัง'}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-5 xl:grid-cols-10">
                                            {Object.entries(shades).map(([shade, hex]) => (
                                                <div
                                                    key={shade}
                                                    className="group cursor-pointer text-center"
                                                    onClick={() =>
                                                        copyToClipboard(
                                                            hex,
                                                            `${colorName}-${shade}`
                                                        )
                                                    }
                                                >
                                                    <div className="relative">
                                                        <div
                                                            className="mb-3 h-20 w-full rounded-xl border border-gray-200 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl"
                                                            style={{
                                                                backgroundColor: hex,
                                                            }}
                                                        ></div>
                                                        {copiedCode === `${colorName}-${shade}` && (
                                                            <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/20">
                                                                <div className="rounded-full bg-white p-2 shadow-lg">
                                                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="text-small font-bold text-gray-900">
                                                        {shade}
                                                    </div>
                                                    <div
                                                        className={cn(
                                                            'text-small-2 mt-1 rounded px-2 py-1 font-mono transition-colors',
                                                            copiedCode === `${colorName}-${shade}`
                                                                ? 'bg-green-100 text-green-700'
                                                                : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
                                                        )}
                                                    >
                                                        {hex}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Typography Tab */}
                {activeTab === 'typography' && (
                    <div className="space-y-12">
                        {/* Typography Overview */}
                        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                            <div className="rounded-2xl bg-gradient-to-br from-green-500 to-green-600 p-6 text-white shadow-xl">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-small opacity-90">Font Families</p>
                                        <p className="text-h2 font-bold">2</p>
                                    </div>
                                    <Type className="h-8 w-8 opacity-80" />
                                </div>
                            </div>
                            <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white shadow-xl">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-small opacity-90">Font Sizes</p>
                                        <p className="text-h2 font-bold">12+</p>
                                    </div>
                                    <Ruler className="h-8 w-8 opacity-80" />
                                </div>
                            </div>
                            <div className="rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 p-6 text-white shadow-xl">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-small opacity-90">Languages</p>
                                        <p className="text-h2 font-bold">2</p>
                                    </div>
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                                        <span className="text-h3">🌐</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-3xl border border-white/20 bg-white/70 p-6 shadow-xl shadow-gray-500/10 backdrop-blur-sm md:p-10">
                            <div className="mb-8 flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg">
                                    <Type className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-h1 font-bold text-gray-900">
                                        Typography Scale
                                    </h2>
                                    <p className="text-body text-gray-600">
                                        ระบบตัวอักษรที่รองรับทั้งภาษาไทยและอังกฤษ
                                    </p>
                                </div>
                            </div>

                            {/* Dynamic Language Typography */}
                            <div className="mb-8">
                                <div className="mb-6 flex items-center justify-between">
                                    <h3 className="text-h2 font-bold text-gray-900">
                                        {language === 'th'
                                            ? 'Thai (Noto Sans Thai)'
                                            : 'English (Roboto)'}
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <div className="flex h-2 w-2 rounded-full bg-green-500"></div>
                                        <span className="text-small text-gray-600">Active</span>
                                    </div>
                                </div>
                                <div className="mb-6 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-4 md:p-6">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500">
                                            <span className="text-white">🎯</span>
                                        </div>
                                        <p className="text-body text-blue-800">
                                            {language === 'th'
                                                ? 'ตัวอย่างการเปลี่ยนภาษา - Font จะเปลี่ยนตามภาษาที่เลือก'
                                                : 'Language Switching Example - Font changes based on selected language'}
                                        </p>
                                    </div>
                                </div>
                                {/* Typography Quick Reference */}
                                <div className="mb-8 rounded-2xl border border-blue-200/50 bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500">
                                            <span className="text-white">⚡</span>
                                        </div>
                                        <h3 className="text-h3 font-bold text-gray-900">
                                            Quick Reference
                                        </h3>
                                    </div>
                                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                        <div className="rounded-xl bg-white/70 p-4">
                                            <div className="text-small mb-2 font-semibold text-gray-700">
                                                Display
                                            </div>
                                            <div className="text-small-2 space-y-1 text-gray-600">
                                                <div>.text-display-1</div>
                                                <div>.text-display-2</div>
                                                <div>.text-display-3</div>
                                            </div>
                                        </div>
                                        <div className="rounded-xl bg-white/70 p-4">
                                            <div className="text-small mb-2 font-semibold text-gray-700">
                                                Headings
                                            </div>
                                            <div className="text-small-2 space-y-1 text-gray-600">
                                                <div>h1, .text-h2</div>
                                                <div>.text-h3, .text-h4</div>
                                                <div>.text-h5, .text-h6</div>
                                            </div>
                                        </div>
                                        <div className="rounded-xl bg-white/70 p-4">
                                            <div className="text-small mb-2 font-semibold text-gray-700">
                                                Body
                                            </div>
                                            <div className="text-small-2 space-y-1 text-gray-600">
                                                <div>.text-lead-1</div>
                                                <div>.text-lead-2</div>
                                                <div>.text-body</div>
                                            </div>
                                        </div>
                                        <div className="rounded-xl bg-white/70 p-4">
                                            <div className="text-small mb-2 font-semibold text-gray-700">
                                                Small
                                            </div>
                                            <div className="text-small-2 space-y-1 text-gray-600">
                                                <div>.text-small</div>
                                                <div>.text-small-2</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Typography Examples */}
                                <div className="space-y-8">
                                    {/* Display Typography */}
                                    <div className="rounded-2xl border border-gray-200/50 bg-white/50 p-6 backdrop-blur-sm">
                                        <div className="mb-6 flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
                                                <span className="text-white">🎨</span>
                                            </div>
                                            <div>
                                                <h3 className="text-h3 font-bold text-gray-900">
                                                    Display Typography
                                                </h3>
                                                <p className="text-small text-gray-600">
                                                    สำหรับหัวข้อหลักและข้อความขนาดใหญ่
                                                </p>
                                            </div>
                                        </div>
                                        <div className="space-y-6">
                                            <div className="group rounded-xl border border-gray-200/50 bg-gradient-to-br from-gray-50 to-gray-100 p-6 transition-all duration-200 hover:shadow-md">
                                                <div className="mb-4 flex items-center justify-between">
                                                    <h1 className="text-display-1 text-gray-900">
                                                        {language === 'th'
                                                            ? 'หัวข้อหลัก'
                                                            : 'Main Title'}
                                                    </h1>
                                                    <button
                                                        onClick={() =>
                                                            copyToClipboard(
                                                                '.text-display-1',
                                                                'text-display-1'
                                                            )
                                                        }
                                                        className={cn(
                                                            'text-small rounded-lg px-3 py-2 transition-all duration-200',
                                                            copiedCode === 'text-display-1'
                                                                ? 'bg-green-100 text-green-700'
                                                                : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                                        )}
                                                    >
                                                        {copiedCode === 'text-display-1' ? (
                                                            <>
                                                                <CheckCircle className="mr-2 inline h-4 w-4" />
                                                                Copied!
                                                            </>
                                                        ) : (
                                                            <>
                                                                <Copy className="mr-2 inline h-4 w-4" />
                                                                Copy
                                                            </>
                                                        )}
                                                    </button>
                                                </div>
                                                <div className="text-small-2 flex items-center gap-4 text-gray-600">
                                                    <span className="rounded-full bg-blue-100 px-2 py-1 text-blue-700">
                                                        83px
                                                    </span>
                                                    <span className="rounded-full bg-purple-100 px-2 py-1 text-purple-700">
                                                        Bold
                                                    </span>
                                                    <span className="rounded-full bg-green-100 px-2 py-1 text-green-700">
                                                        Line-height 1.25
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="group rounded-xl border border-gray-200/50 bg-gradient-to-br from-gray-50 to-gray-100 p-6 transition-all duration-200 hover:shadow-md">
                                                <div className="mb-4 flex items-center justify-between">
                                                    <h2 className="text-display-2 text-gray-900">
                                                        {language === 'th'
                                                            ? 'หัวข้อรอง'
                                                            : 'Sub Title'}
                                                    </h2>
                                                    <button
                                                        onClick={() =>
                                                            copyToClipboard(
                                                                '.text-display-2',
                                                                'text-display-2'
                                                            )
                                                        }
                                                        className={cn(
                                                            'text-small rounded-lg px-3 py-2 transition-all duration-200',
                                                            copiedCode === 'text-display-2'
                                                                ? 'bg-green-100 text-green-700'
                                                                : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                                        )}
                                                    >
                                                        {copiedCode === 'text-display-2' ? (
                                                            <>
                                                                <CheckCircle className="mr-2 inline h-4 w-4" />
                                                                Copied!
                                                            </>
                                                        ) : (
                                                            <>
                                                                <Copy className="mr-2 inline h-4 w-4" />
                                                                Copy
                                                            </>
                                                        )}
                                                    </button>
                                                </div>
                                                <div className="text-small-2 flex items-center gap-4 text-gray-600">
                                                    <span className="rounded-full bg-blue-100 px-2 py-1 text-blue-700">
                                                        69px
                                                    </span>
                                                    <span className="rounded-full bg-purple-100 px-2 py-1 text-purple-700">
                                                        Bold
                                                    </span>
                                                    <span className="rounded-full bg-green-100 px-2 py-1 text-green-700">
                                                        Line-height 1.25
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="group rounded-xl border border-gray-200/50 bg-gradient-to-br from-gray-50 to-gray-100 p-6 transition-all duration-200 hover:shadow-md">
                                                <div className="mb-4 flex items-center justify-between">
                                                    <h3 className="text-display-3 text-gray-900">
                                                        {language === 'th'
                                                            ? 'หัวข้อย่อย'
                                                            : 'Section Title'}
                                                    </h3>
                                                    <button
                                                        onClick={() =>
                                                            copyToClipboard(
                                                                '.text-display-3',
                                                                'text-display-3'
                                                            )
                                                        }
                                                        className={cn(
                                                            'text-small rounded-lg px-3 py-2 transition-all duration-200',
                                                            copiedCode === 'text-display-3'
                                                                ? 'bg-green-100 text-green-700'
                                                                : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                                        )}
                                                    >
                                                        {copiedCode === 'text-display-3' ? (
                                                            <>
                                                                <CheckCircle className="mr-2 inline h-4 w-4" />
                                                                Copied!
                                                            </>
                                                        ) : (
                                                            <>
                                                                <Copy className="mr-2 inline h-4 w-4" />
                                                                Copy
                                                            </>
                                                        )}
                                                    </button>
                                                </div>
                                                <div className="text-small-2 flex items-center gap-4 text-gray-600">
                                                    <span className="rounded-full bg-blue-100 px-2 py-1 text-blue-700">
                                                        57px
                                                    </span>
                                                    <span className="rounded-full bg-purple-100 px-2 py-1 text-purple-700">
                                                        Bold
                                                    </span>
                                                    <span className="rounded-full bg-green-100 px-2 py-1 text-green-700">
                                                        Line-height 1.25
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Heading Typography */}
                                    <div className="rounded-2xl border border-gray-200/50 bg-white/50 p-6 backdrop-blur-sm">
                                        <div className="mb-6 flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500">
                                                <span className="text-white">📝</span>
                                            </div>
                                            <div>
                                                <h3 className="text-h3 font-bold text-gray-900">
                                                    Heading Typography
                                                </h3>
                                                <p className="text-small text-gray-600">
                                                    สำหรับหัวข้อและโครงสร้างเนื้อหา
                                                </p>
                                            </div>
                                        </div>
                                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                            {[
                                                {
                                                    tag: 'h1',
                                                    class: 'h1',
                                                    size: '40px',
                                                    weight: 'Bold',
                                                    lineHeight: '1.25',
                                                    label: 'Heading H1',
                                                },
                                                {
                                                    tag: '.text-h2',
                                                    class: 'h2',
                                                    size: '32px',
                                                    weight: 'Bold',
                                                    lineHeight: '1.25',
                                                    label: 'Heading H2',
                                                },
                                                {
                                                    tag: '.text-h3',
                                                    class: 'h3',
                                                    size: '28px',
                                                    weight: 'Semibold',
                                                    lineHeight: '1.25',
                                                    label: 'Heading H3',
                                                },
                                                {
                                                    tag: '.text-h4',
                                                    class: 'h4',
                                                    size: '24px',
                                                    weight: 'Semibold',
                                                    lineHeight: '1.3',
                                                    label: 'Heading H4',
                                                },
                                                {
                                                    tag: '.text-h5',
                                                    class: 'h5',
                                                    size: '20px',
                                                    weight: 'Medium',
                                                    lineHeight: '1.3',
                                                    label: 'Heading H5',
                                                },
                                                {
                                                    tag: '.text-h6',
                                                    class: 'h6',
                                                    size: '18px',
                                                    weight: 'Medium',
                                                    lineHeight: '1.3',
                                                    label: 'Heading H6',
                                                },
                                            ].map(heading => (
                                                <div
                                                    key={heading.class}
                                                    className="group rounded-xl border border-gray-200/50 bg-gradient-to-br from-gray-50 to-gray-100 p-4 transition-all duration-200 hover:shadow-md"
                                                >
                                                    <div className="mb-3 flex items-center justify-between">
                                                        <div
                                                            className={`text-${heading.class} text-gray-900`}
                                                        >
                                                            {heading.label}
                                                        </div>
                                                        <button
                                                            onClick={() =>
                                                                copyToClipboard(
                                                                    heading.tag,
                                                                    heading.class
                                                                )
                                                            }
                                                            className={cn(
                                                                'text-small-2 rounded-lg px-2 py-1 transition-all duration-200',
                                                                copiedCode === heading.class
                                                                    ? 'bg-green-100 text-green-700'
                                                                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                                            )}
                                                        >
                                                            {copiedCode === heading.class ? (
                                                                <CheckCircle className="h-3 w-3" />
                                                            ) : (
                                                                <Copy className="h-3 w-3" />
                                                            )}
                                                        </button>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <div className="text-small-2 font-mono text-gray-500">
                                                            {heading.tag}
                                                        </div>
                                                        <div className="text-small-2 flex items-center gap-2 text-gray-600">
                                                            <span className="rounded-full bg-blue-100 px-2 py-1 text-blue-700">
                                                                {heading.size}
                                                            </span>
                                                            <span className="rounded-full bg-purple-100 px-2 py-1 text-purple-700">
                                                                {heading.weight}
                                                            </span>
                                                            <span className="rounded-full bg-green-100 px-2 py-1 text-green-700">
                                                                Line-height {heading.lineHeight}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Body Typography */}
                                    <div className="rounded-2xl border border-gray-200/50 bg-white/50 p-6 backdrop-blur-sm">
                                        <div className="mb-6 flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-500">
                                                <span className="text-white">📄</span>
                                            </div>
                                            <div>
                                                <h3 className="text-h3 font-bold text-gray-900">
                                                    Body Typography
                                                </h3>
                                                <p className="text-small text-gray-600">
                                                    สำหรับเนื้อหาและข้อความทั่วไป
                                                </p>
                                            </div>
                                        </div>
                                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                            {[
                                                {
                                                    class: 'lead-1',
                                                    size: '20px',
                                                    weight: 'Normal',
                                                    lineHeight: '1.25',
                                                    label: 'Lead 1 - สำหรับข้อความสำคัญ',
                                                    copyId: 'text-lead-1',
                                                },
                                                {
                                                    class: 'lead-2',
                                                    size: '18px',
                                                    weight: 'Normal',
                                                    lineHeight: '1.3',
                                                    label: 'Lead 2 - สำหรับข้อความรอง',
                                                    copyId: 'text-lead-2',
                                                },
                                                {
                                                    class: 'body',
                                                    size: '16px',
                                                    weight: 'Normal',
                                                    lineHeight: '1.4',
                                                    label: 'Body - สำหรับเนื้อหาทั่วไป',
                                                    copyId: 'text-body',
                                                },
                                                {
                                                    class: 'small',
                                                    size: '14px',
                                                    weight: 'Normal',
                                                    lineHeight: '1.5',
                                                    label: 'Small - สำหรับข้อมูลรอง',
                                                    copyId: 'text-small',
                                                },
                                                {
                                                    class: 'small-2',
                                                    size: '12px',
                                                    weight: 'Normal',
                                                    lineHeight: '1.5',
                                                    label: 'Small 2 - สำหรับข้อมูลเล็ก',
                                                    copyId: 'text-small-2',
                                                },
                                            ].map(body => (
                                                <div
                                                    key={body.class}
                                                    className="group rounded-xl border border-gray-200/50 bg-gradient-to-br from-gray-50 to-gray-100 p-4 transition-all duration-200 hover:shadow-md"
                                                >
                                                    <div className="mb-3 flex items-center justify-between">
                                                        <p
                                                            className={`text-${body.class} text-gray-700`}
                                                        >
                                                            {language === 'th'
                                                                ? body.label
                                                                : body.label
                                                                      .replace('สำหรับ', 'For')
                                                                      .replace('และ', 'and')}
                                                        </p>
                                                        <button
                                                            onClick={() =>
                                                                copyToClipboard(
                                                                    `.text-${body.class}`,
                                                                    body.copyId
                                                                )
                                                            }
                                                            className={cn(
                                                                'text-small-2 rounded-lg px-2 py-1 transition-all duration-200',
                                                                copiedCode === body.copyId
                                                                    ? 'bg-green-100 text-green-700'
                                                                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                                            )}
                                                        >
                                                            {copiedCode === body.copyId ? (
                                                                <CheckCircle className="h-3 w-3" />
                                                            ) : (
                                                                <Copy className="h-3 w-3" />
                                                            )}
                                                        </button>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <div className="text-small-2 font-mono text-gray-500">
                                                            .text-
                                                            {body.class}
                                                        </div>
                                                        <div className="text-small-2 flex items-center gap-2 text-gray-600">
                                                            <span className="rounded-full bg-blue-100 px-2 py-1 text-blue-700">
                                                                {body.size}
                                                            </span>
                                                            <span className="rounded-full bg-purple-100 px-2 py-1 text-purple-700">
                                                                {body.weight}
                                                            </span>
                                                            <span className="rounded-full bg-green-100 px-2 py-1 text-green-700">
                                                                Line-height {body.lineHeight}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Spacing Tab */}
                {activeTab === 'spacing' && (
                    <div className="space-y-12">
                        {/* Spacing Overview */}
                        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                            <div className="rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 p-6 text-white shadow-xl">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-small opacity-90">Base Unit</p>
                                        <p className="text-h2 font-bold">0.25rem</p>
                                    </div>
                                    <Ruler className="h-8 w-8 opacity-80" />
                                </div>
                            </div>
                            <div className="rounded-2xl bg-gradient-to-br from-red-500 to-red-600 p-6 text-white shadow-xl">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-small opacity-90">Scale Steps</p>
                                        <p className="text-h2 font-bold">11</p>
                                    </div>
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                                        <span className="text-h3">📏</span>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600 p-6 text-white shadow-xl">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-small opacity-90">Min Value</p>
                                        <p className="text-h2 font-bold">0.25rem</p>
                                    </div>
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                                        <span className="text-h3">📐</span>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-2xl bg-gradient-to-br from-green-500 to-green-600 p-6 text-white shadow-xl">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-small opacity-90">Max Value</p>
                                        <p className="text-h2 font-bold">8rem</p>
                                    </div>
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                                        <span className="text-h3">📊</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Spacing Quick Reference */}
                        <div className="mb-8 rounded-2xl border border-orange-200/50 bg-gradient-to-br from-orange-50 to-red-50 p-6">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500">
                                    <span className="text-white">📏</span>
                                </div>
                                <h3 className="text-h3 font-bold text-gray-900">Quick Reference</h3>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                <div className="rounded-xl bg-white/70 p-4">
                                    <div className="text-small mb-2 font-semibold text-gray-700">
                                        Base Unit
                                    </div>
                                    <div className="text-small-2 text-gray-600">0.25rem (4px)</div>
                                </div>
                                <div className="rounded-xl bg-white/70 p-4">
                                    <div className="text-small mb-2 font-semibold text-gray-700">
                                        Scale Range
                                    </div>
                                    <div className="text-small-2 text-gray-600">0.25rem - 8rem</div>
                                </div>
                                <div className="rounded-xl bg-white/70 p-4">
                                    <div className="text-small mb-2 font-semibold text-gray-700">
                                        Common Values
                                    </div>
                                    <div className="text-small-2 text-gray-600">
                                        1, 2, 3, 4, 6, 8, 12, 16, 20, 24, 32
                                    </div>
                                </div>
                                <div className="rounded-xl bg-white/70 p-4">
                                    <div className="text-small mb-2 font-semibold text-gray-700">
                                        Usage
                                    </div>
                                    <div className="text-small-2 text-gray-600">
                                        p-*, m-*, space-*
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Spacing Scale */}
                        <div className="rounded-3xl border border-white/20 bg-white/70 p-6 shadow-xl shadow-gray-500/10 backdrop-blur-sm md:p-10">
                            <div className="mb-8 flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg">
                                    <Ruler className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-h1 font-bold text-gray-900">
                                        Spacing Scale
                                    </h2>
                                    <p className="text-body text-gray-600">
                                        ระบบระยะห่างที่ใช้ในระบบออกแบบ Passion Marine
                                    </p>
                                </div>
                            </div>

                            {/* Spacing Categories */}
                            <div className="space-y-8">
                                {/* Small Spacing */}
                                <div className="rounded-2xl border border-gray-200/50 bg-white/50 p-6 backdrop-blur-sm">
                                    <div className="mb-6 flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-500">
                                            <span className="text-white">🔸</span>
                                        </div>
                                        <div>
                                            <h3 className="text-h3 font-bold text-gray-900">
                                                Small Spacing
                                            </h3>
                                            <p className="text-small text-gray-600">
                                                สำหรับระยะห่างเล็ก เช่น padding, margin ขนาดเล็ก
                                            </p>
                                        </div>
                                    </div>
                                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                        {[1, 2, 3, 4].map(space => (
                                            <div
                                                key={space}
                                                className="group rounded-xl border border-gray-200/50 bg-gradient-to-br from-gray-50 to-gray-100 p-4 transition-all duration-200 hover:shadow-md"
                                            >
                                                <div className="mb-3 flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="text-h4 font-mono font-bold text-gray-900">
                                                            {space * 0.25}
                                                            rem
                                                        </div>
                                                        <div className="text-small-2 text-gray-600">
                                                            {space * 0.25 * 16}
                                                            px
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={() =>
                                                            copyToClipboard(
                                                                `${space * 0.25}rem`,
                                                                `rem-${space}`
                                                            )
                                                        }
                                                        className={cn(
                                                            'text-small-2 rounded-lg px-2 py-1 transition-all duration-200',
                                                            copiedCode === `rem-${space}`
                                                                ? 'bg-green-100 text-green-700'
                                                                : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                                        )}
                                                    >
                                                        {copiedCode === `rem-${space}` ? (
                                                            <CheckCircle className="h-3 w-3" />
                                                        ) : (
                                                            <Copy className="h-3 w-3" />
                                                        )}
                                                    </button>
                                                </div>
                                                <div className="mb-3 flex items-center">
                                                    <div
                                                        className="h-6 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 shadow-md transition-all duration-300 group-hover:scale-105"
                                                        style={{
                                                            width: `${space * 0.25}rem`,
                                                        }}
                                                    ></div>
                                                </div>
                                                <div className="space-y-1">
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-small-2 text-gray-500">
                                                            Tailwind
                                                        </span>
                                                        <button
                                                            onClick={() =>
                                                                copyToClipboard(
                                                                    `p-${space}, m-${space}`,
                                                                    `tailwind-${space}`
                                                                )
                                                            }
                                                            className={cn(
                                                                'text-small-2 rounded px-1 py-0.5 transition-colors',
                                                                copiedCode === `tailwind-${space}`
                                                                    ? 'bg-green-100 text-green-600'
                                                                    : 'text-gray-400 hover:bg-gray-100 hover:text-gray-600'
                                                            )}
                                                        >
                                                            {copiedCode === `tailwind-${space}` ? (
                                                                <CheckCircle className="h-2 w-2" />
                                                            ) : (
                                                                <Copy className="h-2 w-2" />
                                                            )}
                                                        </button>
                                                    </div>
                                                    <div className="text-small-2 font-mono text-gray-600">
                                                        p-
                                                        {space}, m-
                                                        {space}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Medium Spacing */}
                                <div className="rounded-2xl border border-gray-200/50 bg-white/50 p-6 backdrop-blur-sm">
                                    <div className="mb-6 flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500">
                                            <span className="text-white">🔹</span>
                                        </div>
                                        <div>
                                            <h3 className="text-h3 font-bold text-gray-900">
                                                Medium Spacing
                                            </h3>
                                            <p className="text-small text-gray-600">
                                                สำหรับระยะห่างปานกลาง เช่น section spacing
                                            </p>
                                        </div>
                                    </div>
                                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                        {[6, 8, 12].map(space => (
                                            <div
                                                key={space}
                                                className="group rounded-xl border border-gray-200/50 bg-gradient-to-br from-gray-50 to-gray-100 p-4 transition-all duration-200 hover:shadow-md"
                                            >
                                                <div className="mb-3 flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="text-h4 font-mono font-bold text-gray-900">
                                                            {space * 0.25}
                                                            rem
                                                        </div>
                                                        <div className="text-small-2 text-gray-600">
                                                            {space * 0.25 * 16}
                                                            px
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={() =>
                                                            copyToClipboard(
                                                                `${space * 0.25}rem`,
                                                                `rem-${space}`
                                                            )
                                                        }
                                                        className={cn(
                                                            'text-small-2 rounded-lg px-2 py-1 transition-all duration-200',
                                                            copiedCode === `rem-${space}`
                                                                ? 'bg-green-100 text-green-700'
                                                                : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                                        )}
                                                    >
                                                        {copiedCode === `rem-${space}` ? (
                                                            <CheckCircle className="h-3 w-3" />
                                                        ) : (
                                                            <Copy className="h-3 w-3" />
                                                        )}
                                                    </button>
                                                </div>
                                                <div className="mb-3 flex items-center">
                                                    <div
                                                        className="h-6 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 shadow-md transition-all duration-300 group-hover:scale-105"
                                                        style={{
                                                            width: `${space * 0.25}rem`,
                                                        }}
                                                    ></div>
                                                </div>
                                                <div className="space-y-1">
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-small-2 text-gray-500">
                                                            Tailwind
                                                        </span>
                                                        <button
                                                            onClick={() =>
                                                                copyToClipboard(
                                                                    `p-${space}, m-${space}`,
                                                                    `tailwind-${space}`
                                                                )
                                                            }
                                                            className={cn(
                                                                'text-small-2 rounded px-1 py-0.5 transition-colors',
                                                                copiedCode === `tailwind-${space}`
                                                                    ? 'bg-green-100 text-green-600'
                                                                    : 'text-gray-400 hover:bg-gray-100 hover:text-gray-600'
                                                            )}
                                                        >
                                                            {copiedCode === `tailwind-${space}` ? (
                                                                <CheckCircle className="h-2 w-2" />
                                                            ) : (
                                                                <Copy className="h-2 w-2" />
                                                            )}
                                                        </button>
                                                    </div>
                                                    <div className="text-small-2 font-mono text-gray-600">
                                                        p-
                                                        {space}, m-
                                                        {space}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Large Spacing */}
                                <div className="rounded-2xl border border-gray-200/50 bg-white/50 p-6 backdrop-blur-sm">
                                    <div className="mb-6 flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
                                            <span className="text-white">🔶</span>
                                        </div>
                                        <div>
                                            <h3 className="text-h3 font-bold text-gray-900">
                                                Large Spacing
                                            </h3>
                                            <p className="text-small text-gray-600">
                                                สำหรับระยะห่างใหญ่ เช่น page sections, major layouts
                                            </p>
                                        </div>
                                    </div>
                                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                        {[16, 20, 24, 32].map(space => (
                                            <div
                                                key={space}
                                                className="group rounded-xl border border-gray-200/50 bg-gradient-to-br from-gray-50 to-gray-100 p-4 transition-all duration-200 hover:shadow-md"
                                            >
                                                <div className="mb-3 flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="text-h4 font-mono font-bold text-gray-900">
                                                            {space * 0.25}
                                                            rem
                                                        </div>
                                                        <div className="text-small-2 text-gray-600">
                                                            {space * 0.25 * 16}
                                                            px
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={() =>
                                                            copyToClipboard(
                                                                `${space * 0.25}rem`,
                                                                `rem-${space}`
                                                            )
                                                        }
                                                        className={cn(
                                                            'text-small-2 rounded-lg px-2 py-1 transition-all duration-200',
                                                            copiedCode === `rem-${space}`
                                                                ? 'bg-green-100 text-green-700'
                                                                : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                                        )}
                                                    >
                                                        {copiedCode === `rem-${space}` ? (
                                                            <CheckCircle className="h-3 w-3" />
                                                        ) : (
                                                            <Copy className="h-3 w-3" />
                                                        )}
                                                    </button>
                                                </div>
                                                <div className="mb-3 flex items-center">
                                                    <div
                                                        className="h-6 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 shadow-md transition-all duration-300 group-hover:scale-105"
                                                        style={{
                                                            width: `${space * 0.25}rem`,
                                                        }}
                                                    ></div>
                                                </div>
                                                <div className="space-y-1">
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-small-2 text-gray-500">
                                                            Tailwind
                                                        </span>
                                                        <button
                                                            onClick={() =>
                                                                copyToClipboard(
                                                                    `p-${space}, m-${space}`,
                                                                    `tailwind-${space}`
                                                                )
                                                            }
                                                            className={cn(
                                                                'text-small-2 rounded px-1 py-0.5 transition-colors',
                                                                copiedCode === `tailwind-${space}`
                                                                    ? 'bg-green-100 text-green-600'
                                                                    : 'text-gray-400 hover:bg-gray-100 hover:text-gray-600'
                                                            )}
                                                        >
                                                            {copiedCode === `tailwind-${space}` ? (
                                                                <CheckCircle className="h-2 w-2" />
                                                            ) : (
                                                                <Copy className="h-2 w-2" />
                                                            )}
                                                        </button>
                                                    </div>
                                                    <div className="text-small-2 font-mono text-gray-600">
                                                        p-
                                                        {space}, m-
                                                        {space}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Usage Examples */}
                            <div className="mt-8 rounded-2xl border border-gray-200/50 bg-gradient-to-br from-gray-50 to-gray-100 p-6">
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-500">
                                        <span className="text-white">💡</span>
                                    </div>
                                    <h3 className="text-h3 font-bold text-gray-900">
                                        Usage Examples
                                    </h3>
                                </div>
                                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    <div className="rounded-xl bg-white/70 p-4">
                                        <h4 className="text-small mb-2 font-semibold text-gray-700">
                                            Padding
                                        </h4>
                                        <div className="text-small-2 space-y-1 text-gray-600">
                                            <div>p-4 (1rem padding)</div>
                                            <div>px-6 (1.5rem horizontal)</div>
                                            <div>py-8 (2rem vertical)</div>
                                        </div>
                                    </div>
                                    <div className="rounded-xl bg-white/70 p-4">
                                        <h4 className="text-small mb-2 font-semibold text-gray-700">
                                            Margin
                                        </h4>
                                        <div className="text-small-2 space-y-1 text-gray-600">
                                            <div>m-4 (1rem margin)</div>
                                            <div>mx-auto (center)</div>
                                            <div>mt-12 (3rem top)</div>
                                        </div>
                                    </div>
                                    <div className="rounded-xl bg-white/70 p-4">
                                        <h4 className="text-small mb-2 font-semibold text-gray-700">
                                            Gap
                                        </h4>
                                        <div className="text-small-2 space-y-1 text-gray-600">
                                            <div>gap-4 (1rem gap)</div>
                                            <div>space-x-6 (horizontal)</div>
                                            <div>space-y-8 (vertical)</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Guidelines Tab */}
                {activeTab === 'guidelines' && (
                    <div className="space-y-12">
                        {/* Guidelines Overview */}
                        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                            <div className="rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 p-6 text-white shadow-xl">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-small opacity-90">Design Principles</p>
                                        <p className="text-h2 font-bold">3</p>
                                    </div>
                                    <BookOpen className="h-8 w-8 opacity-80" />
                                </div>
                            </div>
                            <div className="rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 p-6 text-white shadow-xl">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-small opacity-90">Best Practices</p>
                                        <p className="text-h2 font-bold">5+</p>
                                    </div>
                                    <CheckCircle className="h-8 w-8 opacity-80" />
                                </div>
                            </div>
                            <div className="rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 p-6 text-white shadow-xl">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-small opacity-90">Accessibility</p>
                                        <p className="text-h2 font-bold">WCAG 2.1</p>
                                    </div>
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                                        <span className="text-h3">♿</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Design Guidelines */}
                        <div className="rounded-3xl border border-white/20 bg-white/70 p-6 shadow-xl shadow-gray-500/10 backdrop-blur-sm md:p-10">
                            <div className="mb-8 flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg">
                                    <BookOpen className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-h1 font-bold text-gray-900">
                                        Design Guidelines
                                    </h2>
                                    <p className="text-body text-gray-600">
                                        หลักการและแนวทางปฏิบัติที่ดีสำหรับการออกแบบ
                                    </p>
                                </div>
                            </div>
                            <div className="grid gap-8 md:grid-cols-2">
                                <div className="rounded-2xl border border-blue-200/50 bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
                                    <div className="mb-6 flex items-center">
                                        <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
                                            <span className="text-white">🎯</span>
                                        </div>
                                        <h3 className="text-h3 font-bold text-gray-900">
                                            Design Principles
                                        </h3>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="rounded-xl bg-white/50 p-4">
                                            <div className="mb-2 flex items-center">
                                                <div className="mr-2 h-2 w-2 rounded-full bg-blue-500"></div>
                                                <h4 className="text-h4 font-semibold text-gray-900">
                                                    ความสอดคล้อง
                                                </h4>
                                            </div>
                                            <p className="text-small text-gray-700">
                                                ใช้ component เดียวกันในสถานการณ์เดียวกัน
                                                เพื่อสร้างประสบการณ์ที่สม่ำเสมอ
                                            </p>
                                        </div>
                                        <div className="rounded-xl bg-white/50 p-4">
                                            <div className="mb-2 flex items-center">
                                                <div className="mr-2 h-2 w-2 rounded-full bg-blue-500"></div>
                                                <h4 className="text-h4 font-semibold text-gray-900">
                                                    ความชัดเจน
                                                </h4>
                                            </div>
                                            <p className="text-small text-gray-700">
                                                ออกแบบให้เข้าใจง่ายและใช้งานง่าย
                                                โดยใช้ภาษาและสัญลักษณ์ที่ชัดเจน
                                            </p>
                                        </div>
                                        <div className="rounded-xl bg-white/50 p-4">
                                            <div className="mb-2 flex items-center">
                                                <div className="mr-2 h-2 w-2 rounded-full bg-blue-500"></div>
                                                <h4 className="text-h4 font-semibold text-gray-900">
                                                    ความยืดหยุ่น
                                                </h4>
                                            </div>
                                            <p className="text-small text-gray-700">
                                                ปรับแต่งได้ตามความต้องการ
                                                โดยไม่ทำลายโครงสร้างหลักของระบบ
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-2xl border border-green-200/50 bg-gradient-to-br from-green-50 to-emerald-50 p-6">
                                    <div className="mb-6 flex items-center">
                                        <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-500">
                                            <span className="text-white">📏</span>
                                        </div>
                                        <h3 className="text-h3 font-bold text-gray-900">
                                            Best Practices
                                        </h3>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="rounded-xl bg-white/50 p-4">
                                            <div className="mb-2 flex items-center">
                                                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                                                <h4 className="text-h4 font-semibold text-gray-900">
                                                    ใช้ Spacing Scale
                                                </h4>
                                            </div>
                                            <p className="text-small text-gray-700">
                                                ใช้ spacing scale ที่กำหนดไว้เสมอ
                                                เพื่อความสม่ำเสมอในการจัดวาง
                                            </p>
                                        </div>
                                        <div className="rounded-xl bg-white/50 p-4">
                                            <div className="mb-2 flex items-center">
                                                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                                                <h4 className="text-h4 font-semibold text-gray-900">
                                                    เลือกสีจาก Palette
                                                </h4>
                                            </div>
                                            <p className="text-small text-gray-700">
                                                เลือกสีจาก color palette เท่านั้น
                                                เพื่อรักษาความสอดคล้องของแบรนด์
                                            </p>
                                        </div>
                                        <div className="rounded-xl bg-white/50 p-4">
                                            <div className="mb-2 flex items-center">
                                                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                                                <h4 className="text-h4 font-semibold text-gray-900">
                                                    ทดสอบ Accessibility
                                                </h4>
                                            </div>
                                            <p className="text-small text-gray-700">
                                                ทดสอบ accessibility เสมอ
                                                เพื่อให้ทุกคนสามารถใช้งานได้
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
