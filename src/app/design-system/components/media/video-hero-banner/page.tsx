'use client';

import { LanguageToggle } from '@/components/LanguageSwitcher';
import { VideoHeroBanner } from '@/components/ui/VideoHeroBanner';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { useState } from 'react';

export default function VideoHeroBannerPage() {
    const [copiedCode, setCopiedCode] = useState<string | null>(null);
    const { language } = useLanguage();

    const copyToClipboard = async (text: string, codeId: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedCode(codeId);
            setTimeout(() => setCopiedCode(null), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

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
            <div className='relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700'>
                <div className='bg-grid-white/[0.05] absolute inset-0 bg-[size:60px_60px]'></div>
                <div className='relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32'>
                    <div className='text-center'>
                        <div className='mb-6 flex justify-center'>
                            <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm'>
                                <i
                                    className='ph-bold ph-video text-white'
                                    style={{ fontSize: '32px' }}></i>
                            </div>
                        </div>
                        <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
                            Video Hero Banner
                        </h1>
                        <p className='mt-6 text-lg leading-8 text-blue-100'>
                            Video hero banner component พร้อม responsive design และ interactive
                            controls
                        </p>
                    </div>
                </div>
            </div>

            <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12'>
                <div className='space-y-12'>
                    {/* Live Preview */}
                    <div className='rounded-3xl border border-white/20 bg-white/70 p-6 shadow-xl shadow-gray-500/10 backdrop-blur-sm md:p-10'>
                        <div className='mb-6 flex items-center justify-between'>
                            <h2 className='text-h2 flex items-center font-bold text-gray-900'>
                                <div className='mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-500'>
                                    <i className='ph ph-eye text-white'></i>
                                </div>
                                Live Preview
                            </h2>
                            <div className='flex items-center gap-2'>
                                <div className='flex h-2 w-2 rounded-full bg-green-500'></div>
                                <span className='text-small text-gray-600'>Live</span>
                            </div>
                        </div>
                        <div className='space-y-8'>
                            {/* Sample Video Hero Banner */}
                            <div className='rounded-2xl border-2 border-dashed border-gray-300 bg-white p-8 shadow-inner'>
                                <div className='mb-4 text-center'>
                                    <h3 className='text-lg font-semibold text-gray-700'>
                                        Sample Video Hero Banner
                                    </h3>
                                </div>
                                <div className='relative h-96 overflow-hidden rounded-xl'>
                                    <VideoHeroBanner
                                        videoSrc='/videos/banner/banner-home.mp4'
                                        posterSrc='/images/sample-poster.jpg'
                                        title='Passion Marine'
                                        subtitle='Marine Services'
                                        description='Professional marine services with safety and quality guaranteed'
                                        showPlayButton={true}
                                        autoPlay={false}
                                        muted={true}
                                        loop={true}
                                        overlay={true}
                                        overlayOpacity={0.4}
                                        preload='metadata'
                                        className='video-hero-banner--halfscreen'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Code Examples */}
                    <div className='rounded-3xl border border-white/20 bg-white/70 p-6 shadow-xl shadow-gray-500/10 backdrop-blur-sm md:p-10'>
                        <div className='mb-6 flex items-center'>
                            <div className='mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-purple-500'>
                                <i className='ph ph-lightning text-white'></i>
                            </div>
                            <h2 className='text-h2 font-bold text-gray-900'>Code Examples</h2>
                        </div>
                        <div className='space-y-4'>
                            <div className='rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-4'>
                                <div className='mb-3 flex items-center justify-between'>
                                    <div className='flex items-center gap-2'>
                                        <div className='flex h-2 w-2 rounded-full bg-red-500'></div>
                                        <div className='flex h-2 w-2 rounded-full bg-yellow-500'></div>
                                        <div className='flex h-2 w-2 rounded-full bg-green-500'></div>
                                    </div>
                                    <button
                                        className='h-8 rounded border border-gray-600 bg-gray-800 px-3 text-xs text-gray-300 hover:bg-gray-700 hover:text-white'
                                        onClick={() =>
                                            copyToClipboard(
                                                `<VideoHeroBanner
    videoSrc="/videos/hero-video.mp4"
    posterSrc="/images/poster.jpg"
    title="Your Title"
    subtitle="Your Subtitle"
    description="Your description here"
    preload="metadata"
    autoPlay={true}
    muted={true}
    loop={true}
/>`,
                                                'video-hero-basic-code'
                                            )
                                        }>
                                        {copiedCode === 'video-hero-basic-code' ? (
                                            <i className='ph ph-check-circle text-green-400'></i>
                                        ) : (
                                            <i className='ph ph-copy'></i>
                                        )}
                                    </button>
                                </div>
                                <div className='mb-2 flex items-center gap-2'>
                                    <div className='h-3 w-3 rounded-full bg-green-500'></div>
                                    <span className='text-small text-gray-400'>
                                        VideoHeroBanner.tsx
                                    </span>
                                </div>
                                <pre className='text-small overflow-x-auto text-gray-300'>
                                    <code>{`<VideoHeroBanner
    videoSrc="/videos/hero-video.mp4"
    posterSrc="/images/poster.jpg"
    title="Your Title"
    subtitle="Your Subtitle"
    description="Your description here"
    preload="metadata"
    autoPlay={true}
    muted={true}
    loop={true}
/>`}</code>
                                </pre>
                            </div>
                        </div>
                    </div>

                    {/* Props Documentation */}
                    <div className='rounded-3xl border border-white/20 bg-white/70 p-6 shadow-xl shadow-gray-500/10 backdrop-blur-sm md:p-10'>
                        <div className='mb-6 flex items-center'>
                            <div className='mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500'>
                                <i className='ph ph-code text-white'></i>
                            </div>
                            <h2 className='text-h2 font-bold text-gray-900'>Props Documentation</h2>
                        </div>
                        <div className='overflow-x-auto'>
                            <table className='w-full border-collapse'>
                                <thead>
                                    <tr className='border-b border-gray-200'>
                                        <th className='px-4 py-3 text-left font-semibold text-gray-900'>
                                            Prop
                                        </th>
                                        <th className='px-4 py-3 text-left font-semibold text-gray-900'>
                                            Type
                                        </th>
                                        <th className='px-4 py-3 text-left font-semibold text-gray-900'>
                                            Default
                                        </th>
                                        <th className='px-4 py-3 text-left font-semibold text-gray-900'>
                                            Description
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='border-b border-gray-100'>
                                        <td className='px-4 py-3 font-mono text-sm text-blue-600'>
                                            videoSrc
                                        </td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>string</td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>-</td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>
                                            Path to the video file
                                        </td>
                                    </tr>
                                    <tr className='border-b border-gray-100'>
                                        <td className='px-4 py-3 font-mono text-sm text-blue-600'>
                                            posterSrc
                                        </td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>string</td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>-</td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>
                                            Path to the poster image
                                        </td>
                                    </tr>
                                    <tr className='border-b border-gray-100'>
                                        <td className='px-4 py-3 font-mono text-sm text-blue-600'>
                                            title
                                        </td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>string</td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>-</td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>
                                            Main title text
                                        </td>
                                    </tr>
                                    <tr className='border-b border-gray-100'>
                                        <td className='px-4 py-3 font-mono text-sm text-blue-600'>
                                            subtitle
                                        </td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>string</td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>-</td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>
                                            Subtitle text
                                        </td>
                                    </tr>
                                    <tr className='border-b border-gray-100'>
                                        <td className='px-4 py-3 font-mono text-sm text-blue-600'>
                                            description
                                        </td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>string</td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>-</td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>
                                            Description text
                                        </td>
                                    </tr>
                                    <tr className='border-b border-gray-100'>
                                        <td className='px-4 py-3 font-mono text-sm text-blue-600'>
                                            autoPlay
                                        </td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>boolean</td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>true</td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>
                                            Auto play video on load
                                        </td>
                                    </tr>
                                    <tr className='border-b border-gray-100'>
                                        <td className='px-4 py-3 font-mono text-sm text-blue-600'>
                                            muted
                                        </td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>boolean</td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>true</td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>
                                            Mute video by default
                                        </td>
                                    </tr>
                                    <tr className='border-b border-gray-100'>
                                        <td className='px-4 py-3 font-mono text-sm text-blue-600'>
                                            loop
                                        </td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>boolean</td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>true</td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>
                                            Loop video playback
                                        </td>
                                    </tr>
                                    <tr className='border-b border-gray-100'>
                                        <td className='px-4 py-3 font-mono text-sm text-blue-600'>
                                            preload
                                        </td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>
                                            'none' | 'metadata' | 'auto'
                                        </td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>
                                            'metadata'
                                        </td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>
                                            How much video to preload
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
