"use client";

import { SwiperSlider } from "@/components/ui/media";
import { LanguageToggle } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { useState } from "react";

export default function BusinessCardPage() {
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

    const businessData = [
        {
            title: "Engine Repair & Maintenance",
            image: "/images/home/business/business-01.webp",
            video: "/videos/business/video-01.mp4",
            href: "/comingsoon",
        },
        {
            title: "Boat Upgrades",
            image: "/images/home/business/business-02.webp",
            video: "/videos/business/video-02.mp4",
            href: "/comingsoon",
        },
        {
            title: "Electronics & Solar",
            image: "/images/home/business/business-03.webp",
            video: "/videos/business/video-03.mp4",
            href: "/comingsoon",
        },
        {
            title: "Structure Repair",
            image: "/images/home/business/business-04.webp",
            video: "/videos/business/video-04.mp4",
            href: "/comingsoon",
        },
        {
            title: "Custom Boat Design",
            image: "/images/home/business/business-05.webp",
            video: "/videos/business/video-05.mp4",
            href: "/comingsoon",
        },
        {
            title: "Teak & EVA Flooring",
            image: "/images/home/business/business-06.webp",
            video: "/videos/business/video-06.mp4",
            href: "/comingsoon",
        },
        {
            title: "Marine Upholstery",
            image: "/images/home/business/business-07.webp",
            video: "/videos/business/video-07.mp4",
            href: "/comingsoon",
        },
        {
            title: "Gelcoat Repair & Finishing",
            image: "/images/home/business/business-08.webp",
            video: "/videos/business/video-08.mp4",
            href: "/comingsoon",
        },
        {
            title: "Fiberglass Furniture",
            image: "/images/home/business/business-09.webp",
            video: "/videos/business/video-09.mp4",
            href: "/comingsoon",
        },
        {
            title: "Interior Styling",
            image: "/images/home/business/business-10.webp",
            video: "/videos/business/video-10.mp4",
            href: "/comingsoon",
        },
    ];

    return (
        <div className='min-h-screen bg-gray-50 py-16'>
            <div className='mx-auto max-w-7xl px-6'>
                <div className='mb-16 text-center'>
                    <h1 className='mb-4 text-4xl font-bold text-gray-900'>
                        Business Card Component
                    </h1>
                    <p className='mx-auto max-w-2xl text-xl leading-relaxed text-gray-600'>
                        A modern card component for displaying business services with hover effects,
                        image scaling, and icon rotation animations.
                    </p>
                </div>

                <div className='mb-16'>
                    <h2 className='mb-8 text-center text-3xl font-bold text-gray-900'>
                        Business Services (Default)
                    </h2>
                    <SwiperSlider
                        data={businessData}
                        className='business-card-swiper'
                        autoplay={false}
                        showNavigation={false}
                        showPagination={false}
                        slidesPerView={{
                            mobile: 1.2,
                            tablet: 2.5,
                            laptop: 3.5,
                            desktop: 3.5,
                            large: 3.5,
                        }}
                        spaceBetween={{
                            mobile: 8,
                            tablet: 8,
                            laptop: 8,
                            desktop: 8,
                            large: 8,
                        }}
                    />
                </div>

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
                                        Service title
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
                                            video
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
                                        Video URL for hover effect
                                    </td>
                                </tr>
                                <tr className='transition-colors hover:bg-gray-50'>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            href
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            string
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            &quot;#&quot;
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        Link URL
                                    </td>
                                </tr>
                                <tr className='transition-colors hover:bg-gray-50'>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            slideClassName
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            string
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        &quot;&quot;
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        Additional CSS classes for each SwiperSlide
                                    </td>
                                </tr>
                                <tr className='transition-colors hover:bg-gray-50'>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            renderSlide
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            function
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        -
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        Custom render function for each slide
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
