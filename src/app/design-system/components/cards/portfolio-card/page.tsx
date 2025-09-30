"use client";

import { PortfolioCard } from "@/components/ui/cards/PortfolioCard";
import { LanguageToggle } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { useState } from "react";

export default function PortfolioCardPage() {
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

    const portfolioData = [
        {
            title: "Chaparral 215 SSi",
            model: "215 SSi",
            image: "/images/portfolio/portfolio-01.webp",
            brandLogos: ["/images/brands/chaparral.webp", "/images/brands/volvo-penta.webp"],
            href: "/comingsoon",
        },
        {
            title: "Mercury Saxdor 215",
            model: "215 SSi",
            image: "/images/portfolio/portfolio-02.webp",
            brandLogos: ["/images/brands/mercury.webp", "/images/brands/saxdor.webp"],
            href: "/comingsoon",
        },
        {
            title: "Sea Ray 215 SPX",
            model: "215 SPX",
            image: "/images/portfolio/portfolio-01.webp",
            brandLogos: ["/images/brands/chaparral.webp", "/images/brands/volvo-penta.webp"],
            href: "/comingsoon",
        },
        {
            title: "Boston Whaler 215 Outrage",
            model: "215 Outrage",
            image: "/images/portfolio/portfolio-02.webp",
            brandLogos: ["/images/brands/mercury.webp", "/images/brands/saxdor.webp"],
            href: "/comingsoon",
        },
        {
            title: "Regal 2150 LSR",
            model: "2150 LSR",
            image: "/images/portfolio/portfolio-01.webp",
            brandLogos: ["/images/brands/chaparral.webp", "/images/brands/volvo-penta.webp"],
            href: "/comingsoon",
        },
        {
            title: "Cobalt 215S",
            model: "215S",
            image: "/images/portfolio/portfolio-02.webp",
            brandLogos: ["/images/brands/mercury.webp", "/images/brands/saxdor.webp"],
            href: "/comingsoon",
        },
    ];

    return (
        <div className='min-h-screen bg-gray-50 py-16'>
            <div className='mx-auto max-w-7xl px-6'>
                <div className='mb-16 text-center'>
                    <h1 className='mb-4 text-4xl font-bold text-gray-900'>
                        Portfolio Card Component
                    </h1>
                    <p className='mx-auto max-w-2xl text-xl leading-relaxed text-gray-600'>
                        A modern card component for displaying portfolio items with logos, model
                        information, and interactive hover effects.
                    </p>
                </div>

                <div className='mb-16'>
                    <h2 className='mb-8 text-center text-3xl font-bold text-gray-900'>
                        Portfolio Cards
                    </h2>
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                        {portfolioData.map((portfolio, index) => (
                            <PortfolioCard
                                key={index}
                                title={portfolio.title}
                                model={portfolio.model}
                                image={portfolio.image}
                                brandLogos={portfolio.brandLogos}
                                href={portfolio.href}
                            />
                        ))}
                    </div>
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
                                        Portfolio item title
                                    </td>
                                </tr>
                                <tr className='transition-colors hover:bg-gray-50'>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            model
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
                                        Model information
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
                                        Image URL
                                    </td>
                                </tr>
                                <tr className='transition-colors hover:bg-gray-50'>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            logos
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            object
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        -
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        Logo URLs (left and right)
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
            </div>
        </div>
    );
}
