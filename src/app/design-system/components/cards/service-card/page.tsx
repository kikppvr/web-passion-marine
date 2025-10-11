"use client";

import { LanguageToggle } from "@/components/LanguageSwitcher";
import { ServiceCard } from "@/components/ui/cards";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

export default function ServiceCardPage() {
    const [copiedCode, setCopiedCode] = useState<string | null>(null);
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

    const serviceCardCode = `import { ServiceCard } from "@/components/ui/cards";

<ServiceCard
    title="Engineering Solutions"
    description="Your Trusted Partner in After-Sales & Maintenance"
    imageSrc="/images/our-services/overview-services/engineering-solutions.jpg"
    imageAlt="Engineering Solutions"
    icon={
        <svg
            className='h-6 w-6 text-white'
            fill='currentColor'
            viewBox='0 0 24 24'>
            <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' />
        </svg>
    }
/>`;

    const serviceCardProps = `interface ServiceCardProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    icon: React.ReactNode;
    className?: string;
}`;

    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'>
            {/* Header */}
            <header className='sticky top-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-md'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6'>
                    <div className='flex h-16 items-center justify-between'>
                        <Link
                            href='/design-system/components'
                            className='text-h4 font-bold text-gray-900'>
                            ← Components
                        </Link>
                        <LanguageToggle />
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <div className='relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700'>
                <div className='bg-grid-white/[0.05] absolute inset-0 bg-[size:60px_60px]'></div>
                <div className='relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32'>
                    <div className='text-center'>
                        <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
                            Service Card
                        </h1>
                        <p className='mt-6 text-lg leading-8 text-green-100'>
                            {language === "th"
                                ? "การ์ดสำหรับแสดงบริการต่างๆ พร้อมรูปภาพพื้นหลังและข้อมูล"
                                : "Card component for displaying services with background images and information"}
                        </p>
                    </div>
                </div>
            </div>

            <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12'>
                <div className='space-y-12'>
                    {/* Overview */}
                    <div className='rounded-3xl border border-white/20 bg-white/70 p-6 shadow-xl shadow-gray-500/10 backdrop-blur-sm md:p-10'>
                        <h2 className='text-h2 mb-6 font-bold text-gray-900'>Overview</h2>
                        <div className='grid gap-8 lg:grid-cols-2'>
                            <div>
                                <h3 className='text-h4 mb-4 font-semibold text-gray-900'>Usage</h3>
                                <p className='text-body mb-4 text-gray-600'>
                                    Service Card เป็น component ที่ใช้สำหรับแสดงข้อมูลบริการต่างๆ
                                    พร้อมรูปภาพพื้นหลัง gradient overlay และ icon
                                </p>
                                <ul className='text-body space-y-2 text-gray-600'>
                                    <li>• แสดงรูปภาพพื้นหลังเต็มขนาด</li>
                                    <li>• Gradient overlay เพื่อความชัดเจนของข้อความ</li>
                                    <li>• Icon ด้านบนกลาง</li>
                                    <li>• ข้อความสีขาวด้านล่าง</li>
                                    <li>• Responsive design</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className='text-h4 mb-4 font-semibold text-gray-900'>Props</h3>
                                <div className='rounded-lg bg-gray-900 p-4'>
                                    <pre className='overflow-x-auto text-sm text-green-400'>
                                        <code>{serviceCardProps}</code>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Live Preview */}
                    <div className='rounded-3xl border border-white/20 bg-white/70 p-6 shadow-xl shadow-gray-500/10 backdrop-blur-sm md:p-10'>
                        <h2 className='text-h2 mb-6 font-bold text-gray-900'>Live Preview</h2>
                        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6'>
                            <ServiceCard
                                title='Engineering Solutions'
                                description='Your Trusted Partner in After-Sales & Maintenance'
                                imageSrc='/images/our-services/overview-services/engineering-solutions.webp'
                                imageAlt='Engineering Solutions'
                                icon={<i className='ph ph-arrow-up-right'></i>}
                            />
                            <ServiceCard
                                title='Aesthetic Solutions'
                                description="Elevate Your Boat's Style and Comfort"
                                imageSrc='/images/our-services/overview-services/aesthetic-solutions.webp'
                                imageAlt='Aesthetic Solutions'
                                icon={<i className='ph ph-arrow-up-right'></i>}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
