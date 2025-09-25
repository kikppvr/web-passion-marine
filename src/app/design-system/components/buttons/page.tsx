'use client'

import { LanguageToggle } from '@/components/LanguageSwitcher'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

export default function ComponentsPage() {
    const { language } = useLanguage()

    const componentCategories = [
        {
            id: 'buttons',
            title: 'Buttons',
            description: language === 'th' 
                ? 'ปุ่มต่างๆ สำหรับการโต้ตอบกับผู้ใช้' 
                : 'Interactive buttons for user actions',
            icon: 'ph ph-cursor-click',
            color: 'from-blue-500 to-purple-500',
            bgColor: 'from-blue-50 to-purple-50',
            components: [
                { name: 'Primary Button', status: 'ready', count: 2 },
                { name: 'Read More Button', status: 'ready', count: 1 }
            ]
        },
        {
            id: 'cards',
            title: 'Cards',
            description: language === 'th' 
                ? 'การ์ดสำหรับแสดงเนื้อหาและข้อมูล' 
                : 'Cards for displaying content and information',
            icon: 'ph ph-cards',
            color: 'from-green-500 to-emerald-500',
            bgColor: 'from-green-50 to-emerald-50',
            components: [
                { name: 'News Card', status: 'planned', count: 0 },
                { name: 'Charter Card', status: 'planned', count: 0 }
            ]
        },
        {
            id: 'navigation',
            title: 'Navigation',
            description: language === 'th' 
                ? 'ส่วนนำทางและเมนูต่างๆ' 
                : 'Navigation elements and menus',
            icon: 'ph ph-navigation',
            color: 'from-orange-500 to-red-500',
            bgColor: 'from-orange-50 to-red-50',
            components: [
                { name: 'Header', status: 'planned', count: 0 },
                { name: 'Menu', status: 'planned', count: 0 },
                { name: 'Footer', status: 'planned', count: 0 }
            ]
        },
        {
            id: 'media',
            title: 'Media',
            description: language === 'th' 
                ? 'ส่วนแสดงสื่อและเนื้อหาสำคัญ' 
                : 'Media display and content sections',
            icon: 'ph ph-image',
            color: 'from-purple-500 to-pink-500',
            bgColor: 'from-purple-50 to-pink-50',
            components: [
                { name: 'Slider', status: 'planned', count: 0 },
                { name: 'Gallery', status: 'planned', count: 0 }
            ]
        },
        {
            id: 'forms',
            title: 'Forms',
            description: language === 'th' 
                ? 'ฟอร์มและ input elements' 
                : 'Forms and input elements',
            icon: 'ph ph-clipboard-text',
            color: 'from-cyan-500 to-teal-500',
            bgColor: 'from-cyan-50 to-teal-50',
            components: [
                { name: 'Input Field', status: 'planned', count: 0 },
                { name: 'Select Dropdown', status: 'planned', count: 0 },
                { name: 'Checkbox', status: 'planned', count: 0 }
            ]
        },
        {
            id: 'feedback',
            title: 'Feedback',
            description: language === 'th' 
                ? 'ส่วนแสดงผลตอบกลับและสถานะ' 
                : 'Feedback and status indicators',
            icon: 'ph ph-bell',
            color: 'from-yellow-500 to-orange-500',
            bgColor: 'from-yellow-50 to-orange-50',
            components: [
                { name: 'Alert', status: 'planned', count: 0 },
                { name: 'Toast', status: 'planned', count: 0 },
                { name: 'Loading', status: 'planned', count: 0 }
            ]
        }
    ]

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'ready':
                return 'bg-green-100 text-green-800'
            case 'planned':
                return 'bg-gray-100 text-gray-600'
            case 'in-progress':
                return 'bg-yellow-100 text-yellow-800'
            default:
                return 'bg-gray-100 text-gray-600'
        }
    }

    const getStatusText = (status: string) => {
        switch (status) {
            case 'ready':
                return language === 'th' ? 'พร้อมใช้งาน' : 'Ready'
            case 'planned':
                return language === 'th' ? 'วางแผน' : 'Planned'
            case 'in-progress':
                return language === 'th' ? 'กำลังพัฒนา' : 'In Progress'
            default:
                return status
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
                            Components Library
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-blue-100">
                            {language === 'th'
                                ? 'ไลบรารีคอมโพเนนต์ที่ออกแบบตาม Figma Design System'
                                : 'Component library designed from Figma Design System'}
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
                                    <h3 className="text-lg font-semibold text-gray-900">6</h3>
                                    <p className="text-sm text-gray-600">
                                        {language === 'th' ? 'หมวดหมู่' : 'Categories'}
                                    </p>
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
                                    <h3 className="text-lg font-semibold text-gray-900">15+</h3>
                                    <p className="text-sm text-gray-600">
                                        {language === 'th' ? 'คอมโพเนนต์' : 'Components'}
                                    </p>
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
                                    <h3 className="text-lg font-semibold text-gray-900">3</h3>
                                    <p className="text-sm text-gray-600">
                                        {language === 'th' ? 'พร้อมใช้งาน' : 'Ready'}
                                    </p>
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

                    {/* Component Categories */}
                    <div className="space-y-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-900">
                                {language === 'th' ? 'หมวดหมู่คอมโพเนนต์' : 'Component Categories'}
                            </h2>
                            <p className="mt-4 text-lg text-gray-600">
                                {language === 'th' 
                                    ? 'เลือกหมวดหมู่ที่ต้องการดูคอมโพเนนต์'
                                    : 'Select a category to view components'}
                            </p>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {componentCategories.map((category) => (
                                <Link
                                    key={category.id}
                                    href={`/design-system/components/${category.id}`}
                                    className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/70 p-8 shadow-xl shadow-gray-500/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                >
                                    {/* Background Gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-0 transition-opacity duration-300 group-hover:opacity-50`}></div>
                                    
                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${category.color} shadow-lg`}>
                                            <i
                                                className={`${category.icon} text-white`}
                                                style={{ fontSize: '32px' }}
                                            ></i>
                                        </div>

                                        {/* Title & Description */}
                                        <h3 className="mb-3 text-2xl font-bold text-gray-900">
                                            {category.title}
                                        </h3>
                                        <p className="mb-6 text-gray-600">
                                            {category.description}
                                        </p>

                                        {/* Components List */}
                                        <div className="space-y-3">
                                            {category.components.map((component, index) => (
                                                <div key={index} className="flex items-center justify-between">
                                                    <span className="text-sm font-medium text-gray-700">
                                                        {component.name}
                                                    </span>
                                                    <div className="flex items-center gap-2">
                                                        <span className={`rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(component.status)}`}>
                                                            {getStatusText(component.status)}
                                                        </span>
                                                        {component.count > 0 && (
                                                            <span className="text-xs text-gray-500">
                                                                ({component.count})
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Arrow Icon */}
                                        <div className="mt-6 flex items-center text-blue-600 transition-transform duration-300 group-hover:translate-x-2">
                                            <span className="text-sm font-medium">
                                                {language === 'th' ? 'ดูรายละเอียด' : 'View Details'}
                                            </span>
                                            <i className="ph ph-arrow-right ml-2" style={{ fontSize: '16px' }}></i>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Development Roadmap */}
                    <div className="rounded-3xl border border-white/20 bg-white/70 p-8 shadow-xl shadow-gray-500/10 backdrop-blur-sm md:p-12">
                        <div className="text-center">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg mx-auto">
                                <i
                                    className="ph ph-road-horizon text-white"
                                    style={{ fontSize: '32px' }}
                                ></i>
                            </div>
                            <h3 className="mb-4 text-2xl font-bold text-gray-900">
                                {language === 'th' ? 'แผนการพัฒนา' : 'Development Roadmap'}
                            </h3>
                            <p className="mb-8 text-gray-600">
                                {language === 'th' 
                                    ? 'เรากำลังพัฒนาคอมโพเนนต์เพิ่มเติมตาม Figma Design System'
                                    : 'We are continuously developing more components based on Figma Design System'}
                            </p>
                            
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                <div className="rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-4">
                                    <div className="text-sm font-semibold text-green-800">
                                        {language === 'th' ? 'พร้อมใช้งาน' : 'Ready'}
                                    </div>
                                    <div className="text-xs text-green-600">3 components</div>
                                </div>
                                <div className="rounded-xl bg-gradient-to-br from-yellow-50 to-orange-50 p-4">
                                    <div className="text-sm font-semibold text-yellow-800">
                                        {language === 'th' ? 'กำลังพัฒนา' : 'In Progress'}
                                    </div>
                                    <div className="text-xs text-yellow-600">2 components</div>
                                </div>
                                <div className="rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 p-4">
                                    <div className="text-sm font-semibold text-blue-800">
                                        {language === 'th' ? 'วางแผน' : 'Planned'}
                                    </div>
                                    <div className="text-xs text-blue-600">10+ components</div>
                                </div>
                                <div className="rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 p-4">
                                    <div className="text-sm font-semibold text-purple-800">
                                        {language === 'th' ? 'ทั้งหมด' : 'Total'}
                                    </div>
                                    <div className="text-xs text-purple-600">15+ components</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}