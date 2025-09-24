'use client'

import { LanguageToggle } from '@/components/LanguageSwitcher'
import { useLanguage } from '@/contexts/LanguageContext'
import { ArrowRight, BookOpen, Layout, Palette, Ruler, Sparkles, Type } from 'lucide-react'
import Link from 'next/link'

export default function DesignSystemPage() {
    const { language } = useLanguage()

    const sections = [
        {
            id: 'components',
            title: 'Components',
            description: 'UI Components & Examples',
            icon: Layout,
            gradient: 'from-purple-500 to-pink-500',
            href: '/design-system/components',
            stats: '12+ Components',
            status: 'Live',
        },
        {
            id: 'colors',
            title: 'Colors',
            description: 'Color Palette & Usage',
            icon: Palette,
            gradient: 'from-blue-500 to-cyan-500',
            href: '/design-system/colors',
            stats: '20+ Colors',
            status: 'Live',
        },
        {
            id: 'typography',
            title: 'Typography',
            description: 'Fonts & Text Styles',
            icon: Type,
            gradient: 'from-green-500 to-emerald-500',
            href: '/design-system/typography',
            stats: '12+ Styles',
            status: 'Live',
        },
        {
            id: 'spacing',
            title: 'Spacing',
            description: 'Spacing Scale & Layout',
            icon: Ruler,
            gradient: 'from-orange-500 to-red-500',
            href: '/design-system/spacing',
            stats: '11 Scale Steps',
            status: 'Live',
        },
        {
            id: 'guidelines',
            title: 'Guidelines',
            description: 'Design Principles & Best Practices',
            icon: BookOpen,
            gradient: 'from-indigo-500 to-purple-500',
            href: '/design-system/guidelines',
            stats: '5+ Principles',
            status: 'Live',
        },
    ]

    const quickStats = [
        {
            label: 'Total Components',
            value: '12+',
            icon: Layout,
            gradient: 'from-blue-500 to-blue-600',
        },
        {
            label: 'Color Tokens',
            value: '20+',
            icon: Palette,
            gradient: 'from-green-500 to-green-600',
        },
        {
            label: 'Typography Styles',
            value: '12+',
            icon: Type,
            gradient: 'from-purple-500 to-purple-600',
        },
        {
            label: 'Spacing Scale',
            value: '11',
            icon: Ruler,
            gradient: 'from-orange-500 to-orange-600',
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

            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
                {/* Quick Stats */}
                <div className="mb-12 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                    {quickStats.map((stat, index) => {
                        const IconComponent = stat.icon
                        return (
                            <div
                                key={index}
                                className={`rounded-2xl bg-gradient-to-br ${stat.gradient} p-6 text-white shadow-xl`}
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-small opacity-90">{stat.label}</p>
                                        <p className="text-h2 font-bold">{stat.value}</p>
                                    </div>
                                    <IconComponent className="h-8 w-8 opacity-80" />
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Design System Sections */}
                <div className="space-y-8">
                    <div className="text-center">
                        <h2 className="text-h1 mb-4 font-bold text-gray-900">
                            Design System Sections
                        </h2>
                        <p className="text-lead-1 text-gray-600">
                            สำรวจส่วนต่างๆ ของระบบออกแบบ Passion Marine
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {sections.map(section => {
                            const IconComponent = section.icon
                            return (
                                <Link
                                    key={section.id}
                                    href={section.href}
                                    className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/70 p-8 shadow-xl shadow-gray-500/10 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-500/20"
                                >
                                    <div className="relative z-10">
                                        <div className="mb-6 flex items-center gap-4">
                                            <div
                                                className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${section.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110`}
                                            >
                                                <IconComponent className="h-6 w-6 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-h2 font-bold text-gray-900">
                                                    {section.title}
                                                </h3>
                                                <p className="text-small text-gray-600">
                                                    {section.stats}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="text-body mb-6 text-gray-700">
                                            {section.description}
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="flex h-2 w-2 rounded-full bg-green-500"></div>
                                                <span className="text-small font-medium text-green-600">
                                                    {section.status}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-500 transition-colors group-hover:text-gray-900">
                                                <span className="text-small font-medium">
                                                    Explore
                                                </span>
                                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Background decoration */}
                                    <div
                                        className={`absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br ${section.gradient} opacity-10 transition-all duration-300 group-hover:opacity-20`}
                                    ></div>
                                    <div
                                        className={`absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-gradient-to-br ${section.gradient} opacity-5 transition-all duration-300 group-hover:opacity-15`}
                                    ></div>
                                </Link>
                            )
                        })}
                    </div>
                </div>

                {/* Getting Started */}
                <div className="mt-16 rounded-3xl border border-white/20 bg-white/70 p-8 shadow-xl shadow-gray-500/10 backdrop-blur-sm md:p-12">
                    <div className="text-center">
                        <div className="mb-6 flex justify-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg">
                                <Sparkles className="h-8 w-8 text-white" />
                            </div>
                        </div>
                        <h2 className="text-h1 mb-4 font-bold text-gray-900">Getting Started</h2>
                        <p className="text-lead-1 mb-8 text-gray-600">
                            เริ่มต้นใช้งาน Design System ของ Passion Marine
                        </p>
                        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                            <Link
                                href="/design-system/components"
                                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
                            >
                                <Layout className="h-5 w-5" />
                                Explore Components
                            </Link>
                            <Link
                                href="/design-system/colors"
                                className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition-all duration-200 hover:border-gray-400 hover:bg-gray-50"
                            >
                                <Palette className="h-5 w-5" />
                                View Colors
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
