'use client'

import { LanguageSwitcher, LanguageToggle } from '@/components/LanguageSwitcher'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import { cn } from '@/lib/utils'
import { useState } from 'react'

export default function DesignSystemPage() {
    const [selectedVariant, setSelectedVariant] = useState('default')
    const [selectedSize, setSelectedSize] = useState('default')
    const [activeTab, setActiveTab] = useState('components')
    const { language } = useLanguage()

    const tabs = [
        {
            id: 'components',
            label: 'Components',
            icon: '🧩',
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            id: 'colors',
            label: 'Colors',
            icon: '🎨',
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            id: 'typography',
            label: 'Typography',
            icon: '📝',
            gradient: 'from-green-500 to-emerald-500',
        },
        {
            id: 'spacing',
            label: 'Spacing',
            icon: '📏',
            gradient: 'from-orange-500 to-red-500',
        },
        {
            id: 'guidelines',
            label: 'Guidelines',
            icon: '📋',
            gradient: 'from-indigo-500 to-purple-500',
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
            {/* Modern Header with Glassmorphism */}
            <div className="sticky top-0 z-10 border-b border-white/20 bg-white/80 shadow-lg backdrop-blur-xl">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:py-8">
                        <div className="space-y-2">
                            <h1 className="flex items-center text-h2 text-gray-900 lg:text-h1">
                                <span className="mr-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-h3 text-transparent lg:mr-4 lg:text-display-3">
                                    ✨
                                </span>
                                Design System
                            </h1>
                            <p className="text-body text-gray-600 lg:text-lead-1">
                                ระบบออกแบบสำหรับ Passion Marine -
                                คู่มือการใช้งานและตัวอย่าง
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 lg:gap-4">
                            <LanguageSwitcher />
                            <Button
                                variant="outline"
                                size="sm"
                                className="border-white/20 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:bg-white/80"
                            >
                                <span className="hidden sm:inline">
                                    📋 Copy Code
                                </span>
                                <span className="sm:hidden">📋</span>
                            </Button>
                            <Button
                                size="sm"
                                className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25 transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
                            >
                                <span className="hidden sm:inline">
                                    🚀 Get Started
                                </span>
                                <span className="sm:hidden">🚀</span>
                            </Button>
                        </div>
                    </div>

                    {/* Modern Navigation Tabs */}
                    <div className="mb-6 overflow-x-auto lg:mb-8">
                        <div className="flex min-w-max space-x-2 rounded-2xl border border-white/20 bg-white/30 p-2 backdrop-blur-sm lg:min-w-0">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={cn(
                                        'relative flex items-center overflow-hidden whitespace-nowrap rounded-xl px-3 py-2 text-xs font-semibold transition-all duration-300 lg:px-6 lg:py-3 lg:text-sm',
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
                                    <span className="mr-2 text-sm lg:mr-3 lg:text-lg">
                                        {tab.icon}
                                    </span>
                                    <span className="hidden sm:inline">
                                        {tab.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                {/* Components Tab */}
                {activeTab === 'components' && (
                    <div className="space-y-12">
                        {/* Button Component */}
                        <div className="rounded-2xl border border-white/20 bg-white/70 p-6 shadow-xl shadow-gray-500/10 backdrop-blur-sm lg:rounded-3xl lg:p-10">
                            <div className="mb-6 lg:mb-8">
                                <div>
                                    <h2 className="mb-3 flex flex-col text-h3 text-gray-900 sm:flex-row sm:items-center lg:text-h2">
                                        <span className="mb-2 mr-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1 text-small font-bold text-white shadow-lg sm:mb-0 sm:mr-4 lg:px-4 lg:py-2">
                                            Button
                                        </span>
                                        <span>Button Component</span>
                                    </h2>
                                    <p className="text-body text-gray-600 lg:text-lead-1">
                                        ปุ่มที่ปรับแต่งได้หลากหลายรูปแบบและขนาด
                                        พร้อมใช้งานทันที
                                    </p>
                                </div>
                            </div>

                            {/* Live Preview */}
                            <div className="mb-6 rounded-2xl border border-gray-200/50 bg-gradient-to-br from-gray-50 to-gray-100 p-6 lg:mb-8 lg:p-10">
                                <h3 className="mb-4 flex items-center text-lg font-semibold text-gray-900 lg:mb-6 lg:text-xl">
                                    <span className="mr-3 h-2 w-2 rounded-full bg-green-500"></span>
                                    Live Preview
                                </h3>
                                <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-white p-8 shadow-inner lg:rounded-2xl lg:p-12">
                                    <Button
                                        variant={selectedVariant as any}
                                        size={selectedSize as any}
                                        className="shadow-lg transition-all duration-300 hover:scale-105"
                                    >
                                        {selectedSize === 'icon'
                                            ? '⚙️'
                                            : 'Button Text'}
                                    </Button>
                                </div>
                            </div>

                            {/* Controls */}
                            <div className="mb-6 grid gap-6 lg:mb-8 lg:grid-cols-2 lg:gap-8">
                                {/* Variant Selection */}
                                <div className="rounded-xl bg-gray-50/50 p-4 lg:rounded-2xl lg:p-6">
                                    <h4 className="mb-3 flex items-center text-base font-semibold text-gray-900 lg:mb-4 lg:text-lg">
                                        <span className="mr-3 h-2 w-2 rounded-full bg-blue-500"></span>
                                        Variants
                                    </h4>
                                    <div className="space-y-2 lg:space-y-3">
                                        {variants.map(variant => (
                                            <label
                                                key={variant.value}
                                                className="group flex cursor-pointer items-center rounded-lg p-3 transition-all duration-200 hover:bg-white/50 lg:rounded-xl lg:p-4"
                                            >
                                                <input
                                                    type="radio"
                                                    name="variant"
                                                    value={variant.value}
                                                    checked={
                                                        selectedVariant ===
                                                        variant.value
                                                    }
                                                    onChange={e =>
                                                        setSelectedVariant(
                                                            e.target.value
                                                        )
                                                    }
                                                    className="mr-3 h-4 w-4 text-blue-600 lg:mr-4 lg:h-5 lg:w-5"
                                                />
                                                <div className="flex items-center">
                                                    <div
                                                        className={`mr-3 h-5 w-5 rounded-lg lg:mr-4 lg:h-6 lg:w-6 ${variant.color} ${variant.shadow} shadow-lg`}
                                                    ></div>
                                                    <div>
                                                        <div className="text-xs font-semibold text-gray-900 transition-colors group-hover:text-blue-600 lg:text-sm">
                                                            {variant.label}
                                                        </div>
                                                        <div className="text-xs text-gray-500">
                                                            {
                                                                variant.description
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Size Selection */}
                                <div className="rounded-xl bg-gray-50/50 p-4 lg:rounded-2xl lg:p-6">
                                    <h4 className="mb-3 flex items-center text-base font-semibold text-gray-900 lg:mb-4 lg:text-lg">
                                        <span className="mr-3 h-2 w-2 rounded-full bg-green-500"></span>
                                        Sizes
                                    </h4>
                                    <div className="space-y-2 lg:space-y-3">
                                        {sizes.map(size => (
                                            <label
                                                key={size.value}
                                                className="group flex cursor-pointer items-center rounded-lg p-3 transition-all duration-200 hover:bg-white/50 lg:rounded-xl lg:p-4"
                                            >
                                                <input
                                                    type="radio"
                                                    name="size"
                                                    value={size.value}
                                                    checked={
                                                        selectedSize ===
                                                        size.value
                                                    }
                                                    onChange={e =>
                                                        setSelectedSize(
                                                            e.target.value
                                                        )
                                                    }
                                                    className="mr-3 h-4 w-4 text-blue-600 lg:mr-4 lg:h-5 lg:w-5"
                                                />
                                                <div className="flex items-center">
                                                    <div
                                                        className={`mr-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 lg:mr-4 ${size.height} ${size.width} shadow-lg shadow-blue-500/25`}
                                                    ></div>
                                                    <div>
                                                        <div className="text-xs font-semibold text-gray-900 transition-colors group-hover:text-blue-600 lg:text-sm">
                                                            {size.label}
                                                        </div>
                                                        <div className="text-xs text-gray-500">
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
                            <div className="mb-6 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 p-4 shadow-xl lg:mb-8 lg:rounded-2xl lg:p-6">
                                <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between lg:mb-4">
                                    <h4 className="flex items-center text-base font-semibold text-white lg:text-lg">
                                        <span className="mr-3 h-2 w-2 rounded-full bg-green-400"></span>
                                        Code Example
                                    </h4>
                                    <button className="rounded-lg bg-gray-700 px-3 py-1 text-xs text-gray-400 transition-colors hover:bg-gray-600 hover:text-white lg:px-4 lg:py-2 lg:text-sm">
                                        📋 Copy Code
                                    </button>
                                </div>
                                <pre className="overflow-x-auto rounded-lg border border-gray-700 bg-gray-900/50 p-3 text-xs text-gray-300 lg:rounded-xl lg:p-4 lg:text-sm">
                                    <code>{`<Button variant="${selectedVariant}" size="${selectedSize}">
    ${selectedSize === 'icon' ? '⚙️' : 'Button Text'}
</Button>`}</code>
                                </pre>
                            </div>

                            {/* Usage Examples */}
                            <div className="rounded-xl bg-gray-50/50 p-4 lg:rounded-2xl lg:p-6">
                                <h4 className="mb-4 flex items-center text-base font-semibold text-gray-900 lg:mb-6 lg:text-lg">
                                    <span className="mr-3 h-2 w-2 rounded-full bg-purple-500"></span>
                                    Usage Examples
                                </h4>
                                <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
                                    <div className="space-y-3 lg:space-y-4">
                                        <div className="flex flex-wrap items-center gap-2 lg:gap-3">
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
                                        <div className="flex flex-wrap items-center gap-2 lg:gap-3">
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
                                    <div className="space-y-3 lg:space-y-4">
                                        <div className="flex flex-wrap items-center gap-2 lg:gap-3">
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
                                        <div className="flex flex-wrap items-center gap-2 lg:gap-3">
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

                        {/* Coming Soon Components */}
                        <div className="rounded-2xl border border-white/20 bg-white/70 p-6 shadow-xl shadow-gray-500/10 backdrop-blur-sm lg:rounded-3xl lg:p-10">
                            <h2 className="mb-6 flex flex-col text-2xl font-bold text-gray-900 sm:flex-row sm:items-center lg:mb-8 lg:text-3xl">
                                <span className="mb-2 mr-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 text-sm font-bold text-white shadow-lg sm:mb-0 sm:mr-4 lg:px-4 lg:py-2">
                                    Roadmap
                                </span>
                                <span>Components Roadmap</span>
                            </h2>
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                                {[
                                    {
                                        name: 'Input',
                                        description: 'ช่องกรอกข้อมูล',
                                        icon: '📝',
                                        status: 'In Progress',
                                        gradient: 'from-blue-500 to-cyan-500',
                                    },
                                    {
                                        name: 'Card',
                                        description: 'การ์ดแสดงข้อมูล',
                                        icon: '🃏',
                                        status: 'Planned',
                                        gradient:
                                            'from-green-500 to-emerald-500',
                                    },
                                    {
                                        name: 'Modal',
                                        description: 'หน้าต่างป๊อปอัพ',
                                        icon: '🪟',
                                        status: 'Planned',
                                        gradient: 'from-purple-500 to-pink-500',
                                    },
                                    {
                                        name: 'Dropdown',
                                        description: 'เมนูแบบเลื่อนลง',
                                        icon: '📋',
                                        status: 'Planned',
                                        gradient: 'from-orange-500 to-red-500',
                                    },
                                    {
                                        name: 'Toast',
                                        description: 'การแจ้งเตือน',
                                        icon: '🍞',
                                        status: 'Planned',
                                        gradient:
                                            'from-yellow-500 to-orange-500',
                                    },
                                    {
                                        name: 'Table',
                                        description: 'ตารางข้อมูล',
                                        icon: '📊',
                                        status: 'Planned',
                                        gradient:
                                            'from-indigo-500 to-purple-500',
                                    },
                                ].map(component => (
                                    <div
                                        key={component.name}
                                        className="group rounded-2xl border border-gray-200/50 bg-white/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/80 hover:shadow-xl hover:shadow-gray-500/10"
                                    >
                                        <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110">
                                            {component.icon}
                                        </div>
                                        <h3 className="mb-2 text-lg font-bold text-gray-900">
                                            {component.name}
                                        </h3>
                                        <p className="mb-4 text-sm text-gray-600">
                                            {component.description}
                                        </p>
                                        <div className="mt-4">
                                            <span
                                                className={cn(
                                                    'inline-flex items-center rounded-full px-4 py-2 text-xs font-bold shadow-lg',
                                                    component.status ===
                                                        'In Progress'
                                                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                                                        : 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
                                                )}
                                            >
                                                {component.status}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Colors Tab */}
                {activeTab === 'colors' && (
                    <div className="space-y-12">
                        <div className="rounded-3xl border border-white/20 bg-white/70 p-10 shadow-xl shadow-gray-500/10 backdrop-blur-sm">
                            <h2 className="mb-8 flex items-center text-3xl font-bold text-gray-900">
                                <span className="mr-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-sm font-bold text-white shadow-lg">
                                    Colors
                                </span>
                                Color Palette
                            </h2>
                            <div className="grid gap-12">
                                {Object.entries(colorPalette).map(
                                    ([colorName, shades]) => (
                                        <div
                                            key={colorName}
                                            className="rounded-2xl bg-gray-50/50 p-8"
                                        >
                                            <h3 className="mb-6 flex items-center text-2xl font-bold capitalize text-gray-900">
                                                <div
                                                    className={`mr-3 h-4 w-4 rounded-full bg-${colorName}-500`}
                                                ></div>
                                                {colorName} Colors
                                            </h3>
                                            <div className="grid grid-cols-5 gap-4 md:grid-cols-10">
                                                {Object.entries(shades).map(
                                                    ([shade, hex]) => (
                                                        <div
                                                            key={shade}
                                                            className="group text-center"
                                                        >
                                                            <div
                                                                className="mb-3 h-20 w-full rounded-xl border border-gray-200 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl"
                                                                style={{
                                                                    backgroundColor:
                                                                        hex,
                                                                }}
                                                            ></div>
                                                            <div className="text-sm font-bold text-gray-900">
                                                                {shade}
                                                            </div>
                                                            <div className="mt-1 rounded bg-gray-100 px-2 py-1 font-mono text-xs text-gray-500">
                                                                {hex}
                                                            </div>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Typography Tab */}
                {activeTab === 'typography' && (
                    <div className="space-y-8 lg:space-y-12">
                        <div className="rounded-2xl border border-white/20 bg-white/70 p-6 shadow-xl shadow-gray-500/10 backdrop-blur-sm lg:rounded-3xl lg:p-10">
                            <div className="mb-6 flex flex-col gap-4 lg:mb-8 lg:flex-row lg:items-center lg:justify-between">
                                <h2 className="flex flex-col text-2xl font-bold text-gray-900 sm:flex-row sm:items-center lg:text-3xl">
                                    <span className="mb-2 mr-0 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-3 py-1 text-sm font-bold text-white shadow-lg sm:mb-0 sm:mr-4 lg:px-4 lg:py-2">
                                        Typography
                                    </span>
                                    <span>Typography Scale</span>
                                </h2>
                                <LanguageToggle />
                            </div>

                            {/* Dynamic Language Typography */}
                            <div className="mb-8 lg:mb-12">
                                <h3 className="mb-4 text-xl font-bold text-gray-900 lg:mb-6 lg:text-2xl">
                                    {language === 'th'
                                        ? 'Thai (Noto Sans Thai)'
                                        : 'English (Roboto)'}
                                </h3>
                                <div className="mb-4 rounded-lg bg-blue-50 p-3 lg:mb-6 lg:p-4">
                                    <p className="text-small text-blue-800 lg:text-body">
                                        {language === 'th'
                                            ? '🎯 ตัวอย่างการเปลี่ยนภาษา - Font จะเปลี่ยนตามภาษาที่เลือก'
                                            : '🎯 Language Switching Example - Font changes based on selected language'}
                                    </p>
                                </div>
                                <div className="space-y-4 lg:space-y-8">
                                    <div className="rounded-xl border border-gray-200/50 bg-gradient-to-r from-gray-50 to-gray-100 p-4 lg:rounded-2xl lg:p-8">
                                        <h1 className="mb-2 text-h1 text-gray-900 lg:mb-3 lg:text-display-1">
                                            {language === 'th'
                                                ? 'หัวข้อหลัก - 83px'
                                                : 'Main Title - 83px'}
                                        </h1>
                                        <p className="inline-block rounded-lg bg-white px-2 py-1 font-mono text-xs text-gray-500 lg:px-3 lg:text-sm">
                                            .text-display-1
                                        </p>
                                    </div>
                                    <div className="rounded-xl border border-gray-200/50 bg-gradient-to-r from-gray-50 to-gray-100 p-4 lg:rounded-2xl lg:p-8">
                                        <h2 className="mb-2 text-h2 text-gray-900 lg:mb-3 lg:text-display-2">
                                            {language === 'th'
                                                ? 'หัวข้อรอง - 69px'
                                                : 'Sub Title - 69px'}
                                        </h2>
                                        <p className="inline-block rounded-lg bg-white px-2 py-1 font-mono text-xs text-gray-500 lg:px-3 lg:text-sm">
                                            .text-display-2
                                        </p>
                                    </div>
                                    <div className="rounded-xl border border-gray-200/50 bg-gradient-to-r from-gray-50 to-gray-100 p-4 lg:rounded-2xl lg:p-8">
                                        <h3 className="mb-2 text-h3 text-gray-900 lg:mb-3 lg:text-display-3">
                                            {language === 'th'
                                                ? 'หัวข้อย่อย - 57px'
                                                : 'Section Title - 57px'}
                                        </h3>
                                        <p className="inline-block rounded-lg bg-white px-2 py-1 font-mono text-xs text-gray-500 lg:px-3 lg:text-sm">
                                            .text-display-3
                                        </p>
                                    </div>
                                    <div className="rounded-xl border border-gray-200/50 bg-gradient-to-r from-gray-50 to-gray-100 p-4 lg:rounded-2xl lg:p-8">
                                        <h4 className="mb-2 text-h4 text-gray-900 lg:mb-3 lg:text-h1">
                                            {language === 'th'
                                                ? 'หัวข้อ H1 - 40px'
                                                : 'Heading H1 - 40px'}
                                        </h4>
                                        <p className="inline-block rounded-lg bg-white px-2 py-1 font-mono text-xs text-gray-500 lg:px-3 lg:text-sm">
                                            h1 tag
                                        </p>
                                    </div>
                                    <div className="rounded-xl border border-gray-200/50 bg-gradient-to-r from-gray-50 to-gray-100 p-4 lg:rounded-2xl lg:p-8">
                                        <h5 className="mb-2 text-h5 text-gray-900 lg:mb-3 lg:text-h2">
                                            Heading 2 - 32px
                                        </h5>
                                        <p className="inline-block rounded-lg bg-white px-2 py-1 font-mono text-xs text-gray-500 lg:px-3 lg:text-sm">
                                            .text-h2
                                        </p>
                                    </div>
                                    <div className="rounded-xl border border-gray-200/50 bg-gradient-to-r from-gray-50 to-gray-100 p-4 lg:rounded-2xl lg:p-8">
                                        <h6 className="mb-2 text-h6 text-gray-900 lg:mb-3 lg:text-h3">
                                            Heading 3 - 28px
                                        </h6>
                                        <p className="inline-block rounded-lg bg-white px-2 py-1 font-mono text-xs text-gray-500 lg:px-3 lg:text-sm">
                                            .text-h3
                                        </p>
                                    </div>
                                    <div className="rounded-xl border border-gray-200/50 bg-gradient-to-r from-gray-50 to-gray-100 p-4 lg:rounded-2xl lg:p-8">
                                        <p className="mb-2 text-h5 text-gray-900 lg:mb-3 lg:text-h4">
                                            Heading 4 - 24px
                                        </p>
                                        <p className="inline-block rounded-lg bg-white px-2 py-1 font-mono text-xs text-gray-500 lg:px-3 lg:text-sm">
                                            .text-h4
                                        </p>
                                    </div>
                                    <div className="rounded-xl border border-gray-200/50 bg-gradient-to-r from-gray-50 to-gray-100 p-4 lg:rounded-2xl lg:p-8">
                                        <p className="mb-2 text-h6 text-gray-900 lg:mb-3 lg:text-h5">
                                            Heading 5 - 20px
                                        </p>
                                        <p className="inline-block rounded-lg bg-white px-2 py-1 font-mono text-xs text-gray-500 lg:px-3 lg:text-sm">
                                            .text-h5
                                        </p>
                                    </div>
                                    <div className="rounded-xl border border-gray-200/50 bg-gradient-to-r from-gray-50 to-gray-100 p-4 lg:rounded-2xl lg:p-8">
                                        <p className="mb-2 text-small text-gray-900 lg:mb-3 lg:text-h6">
                                            Heading 6 - 18px
                                        </p>
                                        <p className="inline-block rounded-lg bg-white px-2 py-1 font-mono text-xs text-gray-500 lg:px-3 lg:text-sm">
                                            .text-h6
                                        </p>
                                    </div>
                                    <div className="rounded-xl border border-gray-200/50 bg-gradient-to-r from-gray-50 to-gray-100 p-4 lg:rounded-2xl lg:p-8">
                                        <p className="mb-2 text-body text-gray-700 lg:mb-3 lg:text-lead-1">
                                            Lead 1 - สำหรับข้อความสำคัญ
                                        </p>
                                        <p className="inline-block rounded-lg bg-white px-2 py-1 font-mono text-xs text-gray-500 lg:px-3 lg:text-sm">
                                            .text-lead-1
                                        </p>
                                    </div>
                                    <div className="rounded-xl border border-gray-200/50 bg-gradient-to-r from-gray-50 to-gray-100 p-4 lg:rounded-2xl lg:p-8">
                                        <p className="mb-2 text-small text-gray-700 lg:mb-3 lg:text-body">
                                            Body - สำหรับเนื้อหาทั่วไป
                                        </p>
                                        <p className="inline-block rounded-lg bg-white px-2 py-1 font-mono text-xs text-gray-500 lg:px-3 lg:text-sm">
                                            .text-body
                                        </p>
                                    </div>
                                    <div className="rounded-xl border border-gray-200/50 bg-gradient-to-r from-gray-50 to-gray-100 p-4 lg:rounded-2xl lg:p-8">
                                        <p className="mb-2 text-small text-gray-600 lg:mb-3">
                                            Small - สำหรับข้อมูลรอง
                                        </p>
                                        <p className="inline-block rounded-lg bg-white px-2 py-1 font-mono text-xs text-gray-500 lg:px-3 lg:text-sm">
                                            .text-small
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Thai Typography */}
                            <div>
                                <h3 className="mb-4 text-xl font-bold text-gray-900 lg:mb-6 lg:text-2xl">
                                    Thai (Noto Sans Thai)
                                </h3>
                                <div className="space-y-4 lg:space-y-8">
                                    <div className="rounded-xl border border-gray-200/50 bg-gradient-to-r from-gray-50 to-gray-100 p-4 lg:rounded-2xl lg:p-8">
                                        <h1 className="lg:text-thai-display-1 mb-2 text-h1 text-gray-900 lg:mb-3">
                                            Display 1 - 83px
                                        </h1>
                                        <p className="inline-block rounded-lg bg-white px-2 py-1 font-mono text-xs text-gray-500 lg:px-3 lg:text-sm">
                                            .text-thai-display-1
                                        </p>
                                    </div>
                                    <div className="rounded-xl border border-gray-200/50 bg-gradient-to-r from-gray-50 to-gray-100 p-4 lg:rounded-2xl lg:p-8">
                                        <h2 className="lg:text-thai-display-2 mb-2 text-h2 text-gray-900 lg:mb-3">
                                            Display 2 - 69px
                                        </h2>
                                        <p className="inline-block rounded-lg bg-white px-2 py-1 font-mono text-xs text-gray-500 lg:px-3 lg:text-sm">
                                            .text-thai-display-2
                                        </p>
                                    </div>
                                    <div className="rounded-xl border border-gray-200/50 bg-gradient-to-r from-gray-50 to-gray-100 p-4 lg:rounded-2xl lg:p-8">
                                        <h3 className="lg:text-thai-display-3 mb-2 text-h3 text-gray-900 lg:mb-3">
                                            Display 3 - 57px
                                        </h3>
                                        <p className="inline-block rounded-lg bg-white px-2 py-1 font-mono text-xs text-gray-500 lg:px-3 lg:text-sm">
                                            .text-thai-display-3
                                        </p>
                                    </div>
                                    <div className="rounded-xl border border-gray-200/50 bg-gradient-to-r from-gray-50 to-gray-100 p-4 lg:rounded-2xl lg:p-8">
                                        <h4 className="lg:text-thai-h1 mb-2 text-h4 text-gray-900 lg:mb-3">
                                            หัวข้อ 1 - 40px
                                        </h4>
                                        <p className="inline-block rounded-lg bg-white px-2 py-1 font-mono text-xs text-gray-500 lg:px-3 lg:text-sm">
                                            .text-thai-h1
                                        </p>
                                    </div>
                                    <div className="rounded-xl border border-gray-200/50 bg-gradient-to-r from-gray-50 to-gray-100 p-4 lg:rounded-2xl lg:p-8">
                                        <h5 className="lg:text-thai-h2 mb-2 text-h5 text-gray-900 lg:mb-3">
                                            หัวข้อ 2 - 32px
                                        </h5>
                                        <p className="inline-block rounded-lg bg-white px-2 py-1 font-mono text-xs text-gray-500 lg:px-3 lg:text-sm">
                                            .text-thai-h2
                                        </p>
                                    </div>
                                    <div className="rounded-xl border border-gray-200/50 bg-gradient-to-r from-gray-50 to-gray-100 p-4 lg:rounded-2xl lg:p-8">
                                        <h6 className="lg:text-thai-h3 mb-2 text-h6 text-gray-900 lg:mb-3">
                                            หัวข้อ 3 - 28px
                                        </h6>
                                        <p className="inline-block rounded-lg bg-white px-2 py-1 font-mono text-xs text-gray-500 lg:px-3 lg:text-sm">
                                            .text-thai-h3
                                        </p>
                                    </div>
                                    <div className="rounded-xl border border-gray-200/50 bg-gradient-to-r from-gray-50 to-gray-100 p-4 lg:rounded-2xl lg:p-8">
                                        <p className="lg:text-thai-body mb-2 text-small text-gray-700 lg:mb-3">
                                            เนื้อหาทั่วไป - สำหรับข้อความปกติ
                                        </p>
                                        <p className="inline-block rounded-lg bg-white px-2 py-1 font-mono text-xs text-gray-500 lg:px-3 lg:text-sm">
                                            .text-thai-body
                                        </p>
                                    </div>
                                    <div className="rounded-xl border border-gray-200/50 bg-gradient-to-r from-gray-50 to-gray-100 p-4 lg:rounded-2xl lg:p-8">
                                        <p className="mb-2 text-small text-gray-600 lg:mb-3">
                                            ข้อความเล็ก - สำหรับข้อมูลรอง
                                        </p>
                                        <p className="inline-block rounded-lg bg-white px-2 py-1 font-mono text-xs text-gray-500 lg:px-3 lg:text-sm">
                                            .text-thai-small
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Spacing Tab */}
                {activeTab === 'spacing' && (
                    <div className="space-y-12">
                        <div className="rounded-3xl border border-white/20 bg-white/70 p-10 shadow-xl shadow-gray-500/10 backdrop-blur-sm">
                            <h2 className="mb-8 flex items-center text-3xl font-bold text-gray-900">
                                <span className="mr-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 text-sm font-bold text-white shadow-lg">
                                    Spacing
                                </span>
                                Spacing Scale
                            </h2>
                            <div className="space-y-6">
                                {[1, 2, 3, 4, 6, 8, 12, 16, 20, 24, 32].map(
                                    space => (
                                        <div
                                            key={space}
                                            className="flex items-center rounded-xl bg-gray-50/50 p-6"
                                        >
                                            <div className="w-20 font-mono text-sm font-bold text-gray-600">
                                                {space * 0.25}rem
                                            </div>
                                            <div className="ml-8 flex items-center">
                                                <div
                                                    className="h-6 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 shadow-lg"
                                                    style={{
                                                        width: `${
                                                            space * 0.25
                                                        }rem`,
                                                    }}
                                                ></div>
                                                <span className="ml-4 text-sm font-medium text-gray-600">
                                                    p-{space}, m-{space}, space-
                                                    {space}
                                                </span>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Guidelines Tab */}
                {activeTab === 'guidelines' && (
                    <div className="space-y-12">
                        <div className="rounded-3xl border border-white/20 bg-white/70 p-10 shadow-xl shadow-gray-500/10 backdrop-blur-sm">
                            <h2 className="mb-8 flex items-center text-3xl font-bold text-gray-900">
                                <span className="mr-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 text-sm font-bold text-white shadow-lg">
                                    Guidelines
                                </span>
                                Design Guidelines
                            </h2>
                            <div className="grid gap-12 lg:grid-cols-2">
                                <div className="rounded-2xl border border-blue-200/50 bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
                                    <h3 className="mb-6 flex items-center text-2xl font-bold text-gray-900">
                                        <span className="mr-3 text-3xl">
                                            🎯
                                        </span>
                                        Principles
                                    </h3>
                                    <ul className="space-y-4 text-gray-700">
                                        <li className="flex items-start rounded-xl bg-white/50 p-4">
                                            <span className="mr-3 text-xl text-blue-500">
                                                •
                                            </span>
                                            <span className="font-medium">
                                                ความสอดคล้อง - ใช้ component
                                                เดียวกันในสถานการณ์เดียวกัน
                                            </span>
                                        </li>
                                        <li className="flex items-start rounded-xl bg-white/50 p-4">
                                            <span className="mr-3 text-xl text-blue-500">
                                                •
                                            </span>
                                            <span className="font-medium">
                                                ความชัดเจน -
                                                ออกแบบให้เข้าใจง่ายและใช้งานง่าย
                                            </span>
                                        </li>
                                        <li className="flex items-start rounded-xl bg-white/50 p-4">
                                            <span className="mr-3 text-xl text-blue-500">
                                                •
                                            </span>
                                            <span className="font-medium">
                                                ความยืดหยุ่น -
                                                ปรับแต่งได้ตามความต้องการ
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="rounded-2xl border border-green-200/50 bg-gradient-to-br from-green-50 to-emerald-50 p-8">
                                    <h3 className="mb-6 flex items-center text-2xl font-bold text-gray-900">
                                        <span className="mr-3 text-3xl">
                                            📏
                                        </span>
                                        Best Practices
                                    </h3>
                                    <ul className="space-y-4 text-gray-700">
                                        <li className="flex items-start rounded-xl bg-white/50 p-4">
                                            <span className="mr-3 text-xl text-green-500">
                                                ✓
                                            </span>
                                            <span className="font-medium">
                                                ใช้ spacing scale ที่กำหนดไว้
                                            </span>
                                        </li>
                                        <li className="flex items-start rounded-xl bg-white/50 p-4">
                                            <span className="mr-3 text-xl text-green-500">
                                                ✓
                                            </span>
                                            <span className="font-medium">
                                                เลือกสีจาก color palette
                                                เท่านั้น
                                            </span>
                                        </li>
                                        <li className="flex items-start rounded-xl bg-white/50 p-4">
                                            <span className="mr-3 text-xl text-green-500">
                                                ✓
                                            </span>
                                            <span className="font-medium">
                                                ทดสอบ accessibility เสมอ
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
