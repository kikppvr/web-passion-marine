'use client'

import { LanguageToggle } from '@/components/LanguageSwitcher'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import { cn } from '@/lib/utils'
import { ArrowLeft, CheckCircle, Copy, Type } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function TypographyPage() {
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
                            <Type className="mr-2 h-4 w-4" />
                            Typography
                        </div>
                        <h1 className="text-display-1 mb-6 text-white">Typography Scale</h1>
                        <p className="text-lead-1 mx-auto mb-8 max-w-2xl text-blue-100">
                            ระบบตัวอักษรที่รองรับทั้งภาษาไทยและอังกฤษ พร้อมคู่มือการใช้งาน
                        </p>
                        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                            <LanguageToggle />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
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
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                                    <span className="text-h3">📏</span>
                                </div>
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

                    {/* Dynamic Language Typography */}
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

                        {/* Language Demo */}
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
                                    {[
                                        {
                                            class: 'display-1',
                                            size: '83px',
                                            weight: 'Bold',
                                            lineHeight: '1.25',
                                            label: 'Display 1 - หัวข้อหลัก',
                                        },
                                        {
                                            class: 'display-2',
                                            size: '69px',
                                            weight: 'Bold',
                                            lineHeight: '1.25',
                                            label: 'Display 2 - หัวข้อรอง',
                                        },
                                        {
                                            class: 'display-3',
                                            size: '57px',
                                            weight: 'Bold',
                                            lineHeight: '1.25',
                                            label: 'Display 3 - หัวข้อย่อย',
                                        },
                                    ].map(display => (
                                        <div
                                            key={display.class}
                                            className="group rounded-xl border border-gray-200/50 bg-gradient-to-br from-gray-50 to-gray-100 p-6 transition-all duration-200 hover:shadow-md"
                                        >
                                            <div className="mb-4 flex items-center justify-between">
                                                <div
                                                    className={`text-${display.class} text-gray-900`}
                                                >
                                                    {language === 'th'
                                                        ? display.label
                                                        : display.label
                                                              .replace('หัวข้อ', 'Title')
                                                              .replace('หัวข้อย่อย', 'Subtitle')}
                                                </div>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() =>
                                                        copyToClipboard(
                                                            `.text-${display.class}`,
                                                            `text-${display.class}`
                                                        )
                                                    }
                                                    className={cn(
                                                        'text-small transition-all duration-200',
                                                        copiedCode === `text-${display.class}`
                                                            ? 'bg-green-100 text-green-700'
                                                            : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                                    )}
                                                >
                                                    {copiedCode === `text-${display.class}` ? (
                                                        <>
                                                            <CheckCircle className="mr-2 h-4 w-4" />
                                                            Copied!
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Copy className="mr-2 h-4 w-4" />
                                                            Copy
                                                        </>
                                                    )}
                                                </Button>
                                            </div>
                                            <div className="text-small-2 flex items-center gap-4 text-gray-600">
                                                <span className="rounded-full bg-blue-100 px-2 py-1 text-blue-700">
                                                    {display.size}
                                                </span>
                                                <span className="rounded-full bg-purple-100 px-2 py-1 text-purple-700">
                                                    {display.weight}
                                                </span>
                                                <span className="rounded-full bg-green-100 px-2 py-1 text-green-700">
                                                    Line-height {display.lineHeight}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
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
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() =>
                                                        copyToClipboard(heading.tag, heading.class)
                                                    }
                                                    className={cn(
                                                        'text-small-2 transition-all duration-200',
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
                                                </Button>
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
                                        },
                                        {
                                            class: 'lead-2',
                                            size: '18px',
                                            weight: 'Normal',
                                            lineHeight: '1.3',
                                            label: 'Lead 2 - สำหรับข้อความรอง',
                                        },
                                        {
                                            class: 'body',
                                            size: '16px',
                                            weight: 'Normal',
                                            lineHeight: '1.4',
                                            label: 'Body - สำหรับเนื้อหาทั่วไป',
                                        },
                                        {
                                            class: 'small',
                                            size: '14px',
                                            weight: 'Normal',
                                            lineHeight: '1.5',
                                            label: 'Small - สำหรับข้อมูลรอง',
                                        },
                                        {
                                            class: 'small-2',
                                            size: '12px',
                                            weight: 'Normal',
                                            lineHeight: '1.5',
                                            label: 'Small 2 - สำหรับข้อมูลเล็ก',
                                        },
                                    ].map(body => (
                                        <div
                                            key={body.class}
                                            className="group rounded-xl border border-gray-200/50 bg-gradient-to-br from-gray-50 to-gray-100 p-4 transition-all duration-200 hover:shadow-md"
                                        >
                                            <div className="mb-3 flex items-center justify-between">
                                                <p className={`text-${body.class} text-gray-700`}>
                                                    {language === 'th'
                                                        ? body.label
                                                        : body.label
                                                              .replace('สำหรับ', 'For')
                                                              .replace('และ', 'and')}
                                                </p>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() =>
                                                        copyToClipboard(
                                                            `.text-${body.class}`,
                                                            body.class
                                                        )
                                                    }
                                                    className={cn(
                                                        'text-small-2 transition-all duration-200',
                                                        copiedCode === body.class
                                                            ? 'bg-green-100 text-green-700'
                                                            : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                                    )}
                                                >
                                                    {copiedCode === body.class ? (
                                                        <CheckCircle className="h-3 w-3" />
                                                    ) : (
                                                        <Copy className="h-3 w-3" />
                                                    )}
                                                </Button>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="text-small-2 font-mono text-gray-500">
                                                    .text-{body.class}
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
        </div>
    )
}
