"use client";

import { NewsCard } from "@/components/ui/cards/NewsCard";
import { LanguageToggle } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { useState } from "react";

export default function NewsCardPage() {
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

    const newsData = [
        {
            title: "Lorem ipsum dolor sit amet consectetur. Feugiat at fusce felis eget vulputate proin eget duis.",
            description: "",
            image: "/images/news/news-01.webp",
            date: "16 December 2024",
            category: "Technology",
            href: "/comingsoon",
        },
        {
            title: "Lorem ipsum dolor sit amet consectetur. Feugiat at fusce felis eget vulputate proin eget duis.",
            description: "",
            image: "/images/news/news-02.webp",
            date: "16 December 2024",
            category: "Conservation",
            href: "/comingsoon",
        },
        {
            title: "Lorem ipsum dolor sit amet consectetur. Feugiat at fusce felis eget vulputate proin eget duis.",
            description: "",
            image: "/images/news/news-03.webp",
            date: "16 December 2024",
            category: "Science",
            href: "/comingsoon",
        },
        {
            title: "New Marine Technology Revolutionizes Ocean Exploration",
            description:
                "Cutting-edge underwater drones and AI-powered navigation systems are transforming how we explore and understand our oceans. This breakthrough technology promises safer and more efficient marine research.",
            image: "/images/news/news-01.webp",
            date: "Dec 15, 2024",
            category: "Technology",
            href: "/comingsoon",
        },
        {
            title: "Sustainable Fishing Practices Gain Global Recognition",
            description:
                "International marine conservation efforts are showing positive results as sustainable fishing practices become the new standard across major fishing industries worldwide.",
            image: "/images/news/news-02.webp",
            date: "Dec 12, 2024",
            category: "Conservation",
            href: "/comingsoon",
        },
        {
            title: "Marine Biology Discovery: New Species Found in Deep Ocean",
            description:
                "Scientists have discovered a previously unknown species of bioluminescent fish in the Mariana Trench, shedding new light on deep-sea biodiversity and evolution.",
            image: "/images/news/news-03.webp",
            date: "Dec 10, 2024",
            category: "Science",
            href: "/comingsoon",
        },
    ];

    return (
        <div className='min-h-screen bg-gray-50 py-16'>
            <div className='mx-auto max-w-7xl px-6'>
                <div className='mb-16 text-center'>
                    <h1 className='mb-4 text-4xl font-bold text-gray-900'>News Card Component</h1>
                    <p className='mx-auto max-w-2xl text-xl leading-relaxed text-gray-600'>
                        A modern card component for displaying news articles with category badges,
                        excerpts, dates, and read more functionality.
                    </p>
                </div>

                <div className='mb-16'>
                    <h2 className='mb-8 text-center text-3xl font-bold text-gray-900'>
                        Default Cards
                    </h2>
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                        {newsData.map((news, index) => (
                            <NewsCard
                                key={index}
                                title={news.title}
                                description={news.description}
                                image={news.image}
                                date={news.date}
                                category={news.category}
                                href={news.href}
                                variant='default'
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
                                        News article title
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
                                        News article description
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
                                            date
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
                                        Publication date
                                    </td>
                                </tr>
                                <tr className='transition-colors hover:bg-gray-50'>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            category
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
                                        News category
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
                                            variant
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            &apos;default&apos; | &apos;featured&apos;
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        <code className='rounded bg-gray-100 px-2 py-1 font-mono text-xs text-blue-600'>
                                            &apos;default&apos;
                                        </code>
                                    </td>
                                    <td className='border-b border-gray-200 px-6 py-4 text-sm text-gray-600'>
                                        Card variant
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
