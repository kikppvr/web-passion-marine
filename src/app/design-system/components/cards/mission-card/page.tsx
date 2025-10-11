"use client";

import { SwiperSlider } from "@/components/ui/media";
import { MissionCard } from "@/components/ui/cards";
import { LanguageToggle } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { useState } from "react";

export default function MissionCardPage() {
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

    const missionData = [
        {
            title: "Maintainability",
            description:
                "Lorem ipsum dolor sit amet consectetur. Odio integer ultrices urna massa posuere. Eu quis scelerisque habitant faucibus sit semper.",
            image: "/images/home/business/business-01.webp",
            video: "",
            href: "#",
        },
        {
            title: "Reliability",
            description:
                "Lorem ipsum dolor sit amet consectetur. Odio integer ultrices urna massa posuere. Eu quis scelerisque habitant faucibus sit semper.",
            image: "/images/home/business/business-02.webp",
            video: "",
            href: "#",
        },
        {
            title: "Innovation",
            description:
                "Lorem ipsum dolor sit amet consectetur. Odio integer ultrices urna massa posuere. Eu quis scelerisque habitant faucibus sit semper.",
            image: "/images/home/business/business-03.webp",
            video: "",
            href: "#",
        },
        {
            title: "Excellence",
            description:
                "Lorem ipsum dolor sit amet consectetur. Odio integer ultrices urna massa posuere. Eu quis scelerisque habitant faucibus sit semper. Lorem ipsum dolor sit amet consectetur. Odio integer ultrices urna massa posuere. Eu quis scelerisque habitant faucibus sit semper.",
            image: "/images/home/business/business-04.webp",
            video: "",
            href: "#",
        },
    ];

    return (
        <div className='min-h-screen bg-gray-50 py-16'>
            <div className='mx-auto max-w-7xl px-6'>
                {/* Header */}
                <div className='mb-8 flex items-center justify-between'>
                    <Link
                        href='/design-system/components'
                        className='text-h4 font-bold text-gray-900'>
                        ← Components
                    </Link>
                    <LanguageToggle />
                </div>

                <div className='mb-16 text-center'>
                    <h1 className='mb-4 text-4xl font-bold text-gray-900'>
                        Mission Card Component
                    </h1>
                    <p className='mx-auto max-w-2xl text-xl leading-relaxed text-gray-600'>
                        A modern card component for displaying mission statements with hover slider
                        effect. Shows only the title by default, reveals description on hover with
                        smooth animation.
                    </p>
                </div>

                {/* Swiper Demo */}
                <div className='mb-16'>
                    <h2 className='mb-8 text-center text-3xl font-bold text-gray-900'>
                        Default Cards
                    </h2>
                    <div className='grid grid-cols-1 gap-2 md:grid-cols-4'>
                        {missionData.map((item, index) => (
                            <div key={index} className='h-full w-full'>
                                <MissionCard
                                    title={item.title}
                                    description={item.description}
                                    image={item.image}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Props Documentation */}
                <div className='mb-16'>
                    <h2 className='mb-8 text-center text-3xl font-bold text-gray-900'>
                        Props Documentation
                    </h2>
                    <div className='overflow-x-auto rounded-xl bg-white p-8 shadow-lg'>
                        <table className='w-full border-collapse'>
                            <thead>
                                <tr className='bg-gray-50'>
                                    <th className='border-b border-gray-200 px-6 py-4 text-left text-sm font-semibold text-gray-900'>
                                        Prop
                                    </th>
                                    <th className='border-b border-gray-200 px-6 py-4 text-left text-sm font-semibold text-gray-900'>
                                        Type
                                    </th>
                                    <th className='border-b border-gray-200 px-6 py-4 text-left text-sm font-semibold text-gray-900'>
                                        Default
                                    </th>
                                    <th className='border-b border-gray-200 px-6 py-4 text-left text-sm font-semibold text-gray-900'>
                                        Description
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='transition-colors hover:bg-gray-50'>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            title
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            string
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        -
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        Mission title
                                    </td>
                                </tr>
                                <tr className='transition-colors hover:bg-gray-50'>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            description
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            string
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        -
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        Mission description (revealed on hover)
                                    </td>
                                </tr>
                                <tr className='transition-colors hover:bg-gray-50'>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            image
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            string
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        -
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        Background image URL
                                    </td>
                                </tr>
                                <tr className='transition-colors hover:bg-gray-50'>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            className
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            string
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        -
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        Additional CSS classes
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Design Specifications */}
                <div className='mb-16'>
                    <h2 className='mb-8 text-center text-3xl font-bold text-gray-900'>
                        Design Specifications
                    </h2>
                    <div className='grid gap-8 md:grid-cols-2'>
                        <div className='rounded-xl bg-white p-8 shadow-lg'>
                            <h3 className='mb-4 text-xl font-semibold text-gray-900'>Typography</h3>
                            <div className='space-y-4'>
                                <div>
                                    <h4 className='text-sm font-medium text-gray-600'>Title</h4>
                                    <p className='text-sm text-gray-500'>
                                        Font: Roboto SemiBold, Size: 23px, Line Height: 1.3
                                    </p>
                                </div>
                                <div>
                                    <h4 className='text-sm font-medium text-gray-600'>
                                        Description
                                    </h4>
                                    <p className='text-sm text-gray-500'>
                                        Font: Roboto Regular, Size: 16px, Line Height: 1.4
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-xl bg-white p-8 shadow-lg'>
                            <h3 className='mb-4 text-xl font-semibold text-gray-900'>Colors</h3>
                            <div className='space-y-4'>
                                <div>
                                    <h4 className='text-sm font-medium text-gray-600'>
                                        Default Overlay
                                    </h4>
                                    <p className='text-sm text-gray-500'>
                                        Gradient: rgba(0,0,0,0.6) to transparent
                                    </p>
                                </div>
                                <div>
                                    <h4 className='text-sm font-medium text-gray-600'>
                                        Expanded Overlay
                                    </h4>
                                    <p className='text-sm text-gray-500'>
                                        Gradient: rgba(28,69,131,0.9) to rgba(28,69,131,0.3)
                                    </p>
                                </div>
                                <div>
                                    <h4 className='text-sm font-medium text-gray-600'>
                                        Text Color
                                    </h4>
                                    <p className='text-sm text-gray-500'>White (#FFFFFF)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
