"use client";

import { LanguageToggle } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

export default function ComponentsPage() {
    const [copiedCode, setCopiedCode] = useState<string | null>(null);
    const [activeCategory, setActiveCategory] = useState<string>("buttons");
    const { language } = useLanguage();

    const copyToClipboard = async (text: string, codeId: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedCode(codeId);
            setTimeout(() => setCopiedCode(null), 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    const componentCategories = [
        {
            id: "buttons",
            name: "Buttons",
            icon: "ph ph-cursor-click",
            color: "from-blue-500 to-purple-500",
            description: "ปุ่มต่างๆ สำหรับการโต้ตอบ",
            components: [
                {
                    name: "Primary Button",
                    status: "ready",
                    path: "/design-system/components/buttons/primary",
                },
                {
                    name: "Read More Button",
                    status: "ready",
                    path: "/design-system/components/buttons/readmore",
                },
                {
                    name: "Book Now Button",
                    status: "ready",
                    path: "/design-system/components/buttons/booknow",
                },
                {
                    name: "View All Button",
                    status: "ready",
                    path: "/design-system/components/buttons/viewall",
                },
                { name: "Secondary Button", status: "planned", path: "#" },
                { name: "Icon Button", status: "planned", path: "#" },
            ],
        },
        {
            id: "layout",
            name: "Layout",
            icon: "ph ph-layout",
            color: "from-purple-500 to-pink-500",
            description: "ส่วนประกอบสำหรับการจัดวางหน้าเว็บ",
            components: [
                {
                    name: "Header",
                    status: "ready",
                    path: "/design-system/components/layout/header",
                },
                {
                    name: "Footer",
                    status: "ready",
                    path: "/design-system/components/layout/footer",
                },
                { name: "Sidebar", status: "planned", path: "#" },
                { name: "Navigation", status: "planned", path: "#" },
            ],
        },
        {
            id: "cards",
            name: "Cards",
            icon: "ph ph-cards",
            color: "from-green-500 to-emerald-500",
            description: "การ์ดสำหรับแสดงเนื้อหา",
            components: [
                {
                    name: "Charter Card",
                    status: "ready",
                    path: "/design-system/components/cards/charter-card",
                },
                {
                    name: "News Card",
                    status: "ready",
                    path: "/design-system/components/cards/news-card",
                },
                {
                    name: "Portfolio Card",
                    status: "ready",
                    path: "/design-system/components/cards/portfolio-card",
                },
                {
                    name: "Business Card",
                    status: "ready",
                    path: "/design-system/components/cards/business-card",
                },
                {
                    name: "Mission Card",
                    status: "ready",
                    path: "/design-system/components/cards/mission-card",
                },
                {
                    name: "Service Card",
                    status: "ready",
                    path: "/design-system/components/cards/service-card",
                },
                { name: "Testimonial Card", status: "planned", path: "#" },
            ],
        },
        {
            id: "media",
            name: "Media",
            icon: "ph ph-image",
            color: "from-pink-500 to-rose-500",
            description: "ส่วนประกอบสำหรับสื่อต่างๆ",
            components: [
                {
                    name: "Video Hero Banner",
                    status: "ready",
                    path: "/design-system/components/media/video-hero-banner",
                },
                { name: "Image Gallery", status: "planned", path: "#" },
                { name: "Video Player", status: "planned", path: "#" },
                { name: "Carousel", status: "planned", path: "#" },
            ],
        },
        {
            id: "navigation",
            name: "Navigation",
            icon: "ph ph-navigation",
            color: "from-orange-500 to-red-500",
            description: "เมนูและระบบนำทาง",
            components: [
                { name: "Header Menu", status: "planned", path: "#" },
                { name: "Footer Menu", status: "planned", path: "#" },
                { name: "Sidebar Menu", status: "planned", path: "#" },
                { name: "Breadcrumb", status: "planned", path: "#" },
            ],
        },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "ready":
                return "bg-green-100 text-green-800";
            case "planned":
                return "bg-yellow-100 text-yellow-800";
            case "development":
                return "bg-blue-100 text-blue-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case "ready":
                return "พร้อมใช้งาน";
            case "planned":
                return "วางแผนไว้";
            case "development":
                return "กำลังพัฒนา";
            default:
                return "ไม่ระบุ";
        }
    };

    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'>
            {/* Header */}
            <header className='sticky top-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-md'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6'>
                    <div className='flex h-16 items-center justify-between'>
                        <Link href='/design-system' className='text-h4 font-bold text-gray-900'>
                            ← Design System
                        </Link>
                        <LanguageToggle />
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <div className='relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700'>
                <div className='bg-grid-white/[0.05] absolute inset-0 bg-[size:60px_60px]'></div>
                <div className='relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32'>
                    <div className='text-center'>
                        <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
                            Components Library
                        </h1>
                        <p className='mt-6 text-lg leading-8 text-blue-100'>
                            {language === "th"
                                ? "ไลบรารีคอมโพเนนต์ที่ออกแบบตาม Figma Design System จัดกลุ่มตามประเภทการใช้งาน"
                                : "Component library designed from Figma Design System organized by usage categories"}
                        </p>
                    </div>
                </div>
            </div>

            <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12'>
                <div className='space-y-12'>
                    {/* Quick Stats */}
                    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                        <div className='rounded-2xl border border-white/20 bg-white/70 p-6 shadow-xl shadow-gray-500/10 backdrop-blur-sm'>
                            <div className='flex items-center'>
                                <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500'>
                                    <i
                                        className='ph ph-package text-white'
                                        style={{ fontSize: "24px" }}></i>
                                </div>
                                <div className='ml-4'>
                                    <h3 className='text-lg font-semibold text-gray-900'>25</h3>
                                    <p className='text-sm text-gray-600'>Components</p>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-2xl border border-white/20 bg-white/70 p-6 shadow-xl shadow-gray-500/10 backdrop-blur-sm'>
                            <div className='flex items-center'>
                                <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-teal-500'>
                                    <i
                                        className='ph ph-check-circle text-white'
                                        style={{ fontSize: "24px" }}></i>
                                </div>
                                <div className='ml-4'>
                                    <h3 className='text-lg font-semibold text-gray-900'>11</h3>
                                    <p className='text-sm text-gray-600'>Ready</p>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-2xl border border-white/20 bg-white/70 p-6 shadow-xl shadow-gray-500/10 backdrop-blur-sm'>
                            <div className='flex items-center'>
                                <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500'>
                                    <i
                                        className='ph ph-clock text-white'
                                        style={{ fontSize: "24px" }}></i>
                                </div>
                                <div className='ml-4'>
                                    <h3 className='text-lg font-semibold text-gray-900'>7</h3>
                                    <p className='text-sm text-gray-600'>Planned</p>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-2xl border border-white/20 bg-white/70 p-6 shadow-xl shadow-gray-500/10 backdrop-blur-sm'>
                            <div className='flex items-center'>
                                <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500'>
                                    <i
                                        className='ph ph-code text-white'
                                        style={{ fontSize: "24px" }}></i>
                                </div>
                                <div className='ml-4'>
                                    <h3 className='text-lg font-semibold text-gray-900'>
                                        TypeScript
                                    </h3>
                                    <p className='text-sm text-gray-600'>Type Safe</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Category Navigation */}
                    <div className='rounded-3xl border border-white/20 bg-white/70 p-6 shadow-xl shadow-gray-500/10 backdrop-blur-sm md:p-10'>
                        <div className='mb-8'>
                            <h2 className='text-h2 mb-4 font-bold text-gray-900'>
                                Component Categories
                            </h2>
                            <p className='text-body text-gray-600'>
                                เลือกหมวดหมู่เพื่อดูคอมโพเนนต์ในแต่ละประเภท
                            </p>
                        </div>

                        {/* Category Tabs */}
                        <div className='mb-8'>
                            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                                {componentCategories.map(category => (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveCategory(category.id)}
                                        className={cn(
                                            "group relative overflow-hidden rounded-2xl border-2 p-6 text-left transition-all duration-300",
                                            activeCategory === category.id
                                                ? "border-blue-500 bg-blue-50 shadow-lg"
                                                : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
                                        )}>
                                        <div className='flex items-center gap-4'>
                                            <div
                                                className={cn(
                                                    "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg",
                                                    category.color
                                                )}>
                                                <i
                                                    className={cn(category.icon, "text-white")}
                                                    style={{ fontSize: "24px" }}></i>
                                            </div>
                                            <div className='flex-1'>
                                                <h3 className='text-lg font-semibold text-gray-900 group-hover:text-blue-600'>
                                                    {category.name}
                                                </h3>
                                                <p className='text-sm text-gray-600'>
                                                    {category.description}
                                                </p>
                                            </div>
                                        </div>
                                        <div className='absolute -right-2 -top-2 h-16 w-16 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 opacity-20 transition-opacity group-hover:opacity-30'></div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Component List */}
                        <div className='space-y-6'>
                            {componentCategories.map(
                                category =>
                                    activeCategory === category.id && (
                                        <div key={category.id} className='space-y-4'>
                                            <div className='flex items-center gap-4'>
                                                <div
                                                    className={cn(
                                                        "flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br",
                                                        category.color
                                                    )}>
                                                    <i
                                                        className={cn(category.icon, "text-white")}
                                                        style={{ fontSize: "20px" }}></i>
                                                </div>
                                                <div>
                                                    <h3 className='text-h3 font-bold text-gray-900'>
                                                        {category.name}
                                                    </h3>
                                                    <p className='text-body text-gray-600'>
                                                        {category.description}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                                                {category.components.map((component, index) => (
                                                    <div
                                                        key={index}
                                                        className='group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md'>
                                                        <div className='relative z-10 flex items-start justify-between'>
                                                            <div className='flex-1'>
                                                                <h4 className='text-lg font-semibold text-gray-900 group-hover:text-blue-600'>
                                                                    {component.name}
                                                                </h4>
                                                                <div className='mt-2 flex items-center gap-2'>
                                                                    <span
                                                                        className={cn(
                                                                            "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                                                                            getStatusColor(
                                                                                component.status
                                                                            )
                                                                        )}>
                                                                        {getStatusText(
                                                                            component.status
                                                                        )}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className='ml-4'>
                                                                {component.status === "ready" ? (
                                                                    <Link
                                                                        href={component.path}
                                                                        className='inline-flex items-center gap-2 rounded-lg bg-blue-500 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600'>
                                                                        <i
                                                                            className='ph ph-arrow-right'
                                                                            style={{
                                                                                fontSize: "14px",
                                                                            }}></i>
                                                                        View
                                                                    </Link>
                                                                ) : (
                                                                    <button
                                                                        disabled
                                                                        className='inline-flex cursor-not-allowed items-center gap-2 rounded-lg bg-gray-300 px-3 py-2 text-sm font-medium text-gray-500'>
                                                                        <i
                                                                            className='ph ph-clock'
                                                                            style={{
                                                                                fontSize: "14px",
                                                                            }}></i>
                                                                        Soon
                                                                    </button>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className='absolute -bottom-4 -right-4 h-20 w-20 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 opacity-50 transition-opacity group-hover:opacity-70'></div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
