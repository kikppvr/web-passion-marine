'use client';

import { LanguageToggle } from '@/components/LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { ArrowLeft, CheckCircle, Copy, Ruler } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function SpacingPage() {
    const [copiedCode, setCopiedCode] = useState<string | null>(null);
    const { language } = useLanguage();

    const copyToClipboard = async (text: string, codeId: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedCode(codeId);
            setTimeout(() => setCopiedCode(null), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'>
            {/* Hero Section */}
            <div className='relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700'>
                <div className='absolute inset-0 bg-black/10'></div>
                <div className='absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20'></div>

                {/* Background Pattern */}
                <div className='absolute inset-0 opacity-10'>
                    <div
                        className='absolute inset-0'
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}></div>
                </div>

                <div className='relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24'>
                    <div className='text-center'>
                        {/* Back Button */}
                        <div className='mb-6 flex justify-center'>
                            <Link
                                href='/design-system'
                                className='inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20'>
                                <ArrowLeft className='h-4 w-4' />
                                Back to Design System
                            </Link>
                        </div>

                        <div className='text-small mb-6 inline-flex items-center rounded-full bg-white/10 px-4 py-2 font-medium text-white backdrop-blur-sm'>
                            <Ruler className='mr-2 h-4 w-4' />
                            Spacing
                        </div>
                        <h1 className='text-display-1 mb-6 text-white'>Spacing Scale</h1>
                        <p className='text-lead-1 mx-auto mb-8 max-w-2xl text-blue-100'>
                            ระบบระยะห่างที่ใช้ในระบบออกแบบ Passion Marine พร้อมคู่มือการใช้งาน
                        </p>
                        <div className='flex flex-col items-center gap-4 sm:flex-row sm:justify-center'>
                            <LanguageToggle />
                        </div>
                    </div>
                </div>
            </div>

            <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12'>
                <div className='space-y-12'>
                    {/* Spacing Overview */}
                    <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-4'>
                        <div className='rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 p-6 text-white shadow-xl'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p className='text-small opacity-90'>Base Unit</p>
                                    <p className='text-h2 font-bold'>0.25rem</p>
                                </div>
                                <Ruler className='h-8 w-8 opacity-80' />
                            </div>
                        </div>
                        <div className='rounded-2xl bg-gradient-to-br from-red-500 to-red-600 p-6 text-white shadow-xl'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p className='text-small opacity-90'>Scale Steps</p>
                                    <p className='text-h2 font-bold'>11</p>
                                </div>
                                <div className='flex h-8 w-8 items-center justify-center rounded-full bg-white/20'>
                                    <span className='text-h3'>📏</span>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600 p-6 text-white shadow-xl'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p className='text-small opacity-90'>Min Value</p>
                                    <p className='text-h2 font-bold'>0.25rem</p>
                                </div>
                                <div className='flex h-8 w-8 items-center justify-center rounded-full bg-white/20'>
                                    <span className='text-h3'>📐</span>
                                </div>
                            </div>
                        </div>
                        <div className='rounded-2xl bg-gradient-to-br from-green-500 to-green-600 p-6 text-white shadow-xl'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p className='text-small opacity-90'>Max Value</p>
                                    <p className='text-h2 font-bold'>8rem</p>
                                </div>
                                <div className='flex h-8 w-8 items-center justify-center rounded-full bg-white/20'>
                                    <span className='text-h3'>📊</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Spacing Scale */}
                    <div className='rounded-3xl border border-white/20 bg-white/70 p-6 shadow-xl shadow-gray-500/10 backdrop-blur-sm md:p-10'>
                        <div className='mb-8 flex items-center gap-4'>
                            <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg'>
                                <Ruler className='h-6 w-6 text-white' />
                            </div>
                            <div>
                                <h2 className='text-h1 font-bold text-gray-900'>Spacing Scale</h2>
                                <p className='text-body text-gray-600'>
                                    ระบบระยะห่างที่ใช้ในระบบออกแบบ Passion Marine
                                </p>
                            </div>
                        </div>

                        {/* Spacing Categories */}
                        <div className='space-y-8'>
                            {/* Small Spacing */}
                            <div className='rounded-2xl border border-gray-200/50 bg-white/50 p-6 backdrop-blur-sm'>
                                <div className='mb-6 flex items-center gap-3'>
                                    <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-500'>
                                        <span className='text-white'>🔸</span>
                                    </div>
                                    <div>
                                        <h3 className='text-h3 font-bold text-gray-900'>
                                            Small Spacing
                                        </h3>
                                        <p className='text-small text-gray-600'>
                                            สำหรับระยะห่างเล็ก เช่น padding, margin ขนาดเล็ก
                                        </p>
                                    </div>
                                </div>
                                <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                                    {[1, 2, 3, 4].map(space => (
                                        <div
                                            key={space}
                                            className='group rounded-xl border border-gray-200/50 bg-gradient-to-br from-gray-50 to-gray-100 p-4 transition-all duration-200 hover:shadow-md'>
                                            <div className='mb-3 flex items-center justify-between'>
                                                <div className='flex items-center gap-3'>
                                                    <div className='text-h4 font-mono font-bold text-gray-900'>
                                                        {space * 0.25}rem
                                                    </div>
                                                    <div className='text-small-2 text-gray-600'>
                                                        {space * 0.25 * 16}px
                                                    </div>
                                                </div>
                                                <Button
                                                    variant='outline'
                                                    size='sm'
                                                    onClick={() =>
                                                        copyToClipboard(
                                                            `${space * 0.25}rem`,
                                                            `rem-${space}`
                                                        )
                                                    }
                                                    className={cn(
                                                        'text-small-2 transition-all duration-200',
                                                        copiedCode === `rem-${space}`
                                                            ? 'bg-green-100 text-green-700'
                                                            : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                                    )}>
                                                    {copiedCode === `rem-${space}` ? (
                                                        <CheckCircle className='h-3 w-3' />
                                                    ) : (
                                                        <Copy className='h-3 w-3' />
                                                    )}
                                                </Button>
                                            </div>
                                            <div className='mb-3 flex items-center'>
                                                <div
                                                    className='h-6 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 shadow-md transition-all duration-300 group-hover:scale-105'
                                                    style={{
                                                        width: `${space * 0.25}rem`,
                                                    }}></div>
                                            </div>
                                            <div className='space-y-1'>
                                                <div className='flex items-center justify-between'>
                                                    <span className='text-small-2 text-gray-500'>
                                                        Tailwind
                                                    </span>
                                                    <Button
                                                        variant='outline'
                                                        size='sm'
                                                        onClick={() =>
                                                            copyToClipboard(
                                                                `p-${space}, m-${space}`,
                                                                `tailwind-${space}`
                                                            )
                                                        }
                                                        className={cn(
                                                            'text-small-2 transition-colors',
                                                            copiedCode === `tailwind-${space}`
                                                                ? 'bg-green-100 text-green-600'
                                                                : 'text-gray-400 hover:bg-gray-100 hover:text-gray-600'
                                                        )}>
                                                        {copiedCode === `tailwind-${space}` ? (
                                                            <CheckCircle className='h-2 w-2' />
                                                        ) : (
                                                            <Copy className='h-2 w-2' />
                                                        )}
                                                    </Button>
                                                </div>
                                                <div className='text-small-2 font-mono text-gray-600'>
                                                    p-{space}, m-{space}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Medium Spacing */}
                            <div className='rounded-2xl border border-gray-200/50 bg-white/50 p-6 backdrop-blur-sm'>
                                <div className='mb-6 flex items-center gap-3'>
                                    <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500'>
                                        <span className='text-white'>🔹</span>
                                    </div>
                                    <div>
                                        <h3 className='text-h3 font-bold text-gray-900'>
                                            Medium Spacing
                                        </h3>
                                        <p className='text-small text-gray-600'>
                                            สำหรับระยะห่างปานกลาง เช่น section spacing
                                        </p>
                                    </div>
                                </div>
                                <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                                    {[6, 8, 12].map(space => (
                                        <div
                                            key={space}
                                            className='group rounded-xl border border-gray-200/50 bg-gradient-to-br from-gray-50 to-gray-100 p-4 transition-all duration-200 hover:shadow-md'>
                                            <div className='mb-3 flex items-center justify-between'>
                                                <div className='flex items-center gap-3'>
                                                    <div className='text-h4 font-mono font-bold text-gray-900'>
                                                        {space * 0.25}rem
                                                    </div>
                                                    <div className='text-small-2 text-gray-600'>
                                                        {space * 0.25 * 16}px
                                                    </div>
                                                </div>
                                                <Button
                                                    variant='outline'
                                                    size='sm'
                                                    onClick={() =>
                                                        copyToClipboard(
                                                            `${space * 0.25}rem`,
                                                            `rem-${space}`
                                                        )
                                                    }
                                                    className={cn(
                                                        'text-small-2 transition-all duration-200',
                                                        copiedCode === `rem-${space}`
                                                            ? 'bg-green-100 text-green-700'
                                                            : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                                    )}>
                                                    {copiedCode === `rem-${space}` ? (
                                                        <CheckCircle className='h-3 w-3' />
                                                    ) : (
                                                        <Copy className='h-3 w-3' />
                                                    )}
                                                </Button>
                                            </div>
                                            <div className='mb-3 flex items-center'>
                                                <div
                                                    className='h-6 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 shadow-md transition-all duration-300 group-hover:scale-105'
                                                    style={{
                                                        width: `${space * 0.25}rem`,
                                                    }}></div>
                                            </div>
                                            <div className='space-y-1'>
                                                <div className='flex items-center justify-between'>
                                                    <span className='text-small-2 text-gray-500'>
                                                        Tailwind
                                                    </span>
                                                    <Button
                                                        variant='outline'
                                                        size='sm'
                                                        onClick={() =>
                                                            copyToClipboard(
                                                                `p-${space}, m-${space}`,
                                                                `tailwind-${space}`
                                                            )
                                                        }
                                                        className={cn(
                                                            'text-small-2 transition-colors',
                                                            copiedCode === `tailwind-${space}`
                                                                ? 'bg-green-100 text-green-600'
                                                                : 'text-gray-400 hover:bg-gray-100 hover:text-gray-600'
                                                        )}>
                                                        {copiedCode === `tailwind-${space}` ? (
                                                            <CheckCircle className='h-2 w-2' />
                                                        ) : (
                                                            <Copy className='h-2 w-2' />
                                                        )}
                                                    </Button>
                                                </div>
                                                <div className='text-small-2 font-mono text-gray-600'>
                                                    p-{space}, m-{space}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Large Spacing */}
                            <div className='rounded-2xl border border-gray-200/50 bg-white/50 p-6 backdrop-blur-sm'>
                                <div className='mb-6 flex items-center gap-3'>
                                    <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500'>
                                        <span className='text-white'>🔶</span>
                                    </div>
                                    <div>
                                        <h3 className='text-h3 font-bold text-gray-900'>
                                            Large Spacing
                                        </h3>
                                        <p className='text-small text-gray-600'>
                                            สำหรับระยะห่างใหญ่ เช่น page sections, major layouts
                                        </p>
                                    </div>
                                </div>
                                <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                                    {[16, 20, 24, 32].map(space => (
                                        <div
                                            key={space}
                                            className='group rounded-xl border border-gray-200/50 bg-gradient-to-br from-gray-50 to-gray-100 p-4 transition-all duration-200 hover:shadow-md'>
                                            <div className='mb-3 flex items-center justify-between'>
                                                <div className='flex items-center gap-3'>
                                                    <div className='text-h4 font-mono font-bold text-gray-900'>
                                                        {space * 0.25}rem
                                                    </div>
                                                    <div className='text-small-2 text-gray-600'>
                                                        {space * 0.25 * 16}px
                                                    </div>
                                                </div>
                                                <Button
                                                    variant='outline'
                                                    size='sm'
                                                    onClick={() =>
                                                        copyToClipboard(
                                                            `${space * 0.25}rem`,
                                                            `rem-${space}`
                                                        )
                                                    }
                                                    className={cn(
                                                        'text-small-2 transition-all duration-200',
                                                        copiedCode === `rem-${space}`
                                                            ? 'bg-green-100 text-green-700'
                                                            : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                                    )}>
                                                    {copiedCode === `rem-${space}` ? (
                                                        <CheckCircle className='h-3 w-3' />
                                                    ) : (
                                                        <Copy className='h-3 w-3' />
                                                    )}
                                                </Button>
                                            </div>
                                            <div className='mb-3 flex items-center'>
                                                <div
                                                    className='h-6 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 shadow-md transition-all duration-300 group-hover:scale-105'
                                                    style={{
                                                        width: `${space * 0.25}rem`,
                                                    }}></div>
                                            </div>
                                            <div className='space-y-1'>
                                                <div className='flex items-center justify-between'>
                                                    <span className='text-small-2 text-gray-500'>
                                                        Tailwind
                                                    </span>
                                                    <Button
                                                        variant='outline'
                                                        size='sm'
                                                        onClick={() =>
                                                            copyToClipboard(
                                                                `p-${space}, m-${space}`,
                                                                `tailwind-${space}`
                                                            )
                                                        }
                                                        className={cn(
                                                            'text-small-2 transition-colors',
                                                            copiedCode === `tailwind-${space}`
                                                                ? 'bg-green-100 text-green-600'
                                                                : 'text-gray-400 hover:bg-gray-100 hover:text-gray-600'
                                                        )}>
                                                        {copiedCode === `tailwind-${space}` ? (
                                                            <CheckCircle className='h-2 w-2' />
                                                        ) : (
                                                            <Copy className='h-2 w-2' />
                                                        )}
                                                    </Button>
                                                </div>
                                                <div className='text-small-2 font-mono text-gray-600'>
                                                    p-{space}, m-{space}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Usage Examples */}
                        <div className='mt-8 rounded-2xl border border-gray-200/50 bg-gradient-to-br from-gray-50 to-gray-100 p-6'>
                            <div className='mb-4 flex items-center gap-3'>
                                <div className='flex h-8 w-8 items-center justify-center rounded-full bg-gray-500'>
                                    <span className='text-white'>💡</span>
                                </div>
                                <h3 className='text-h3 font-bold text-gray-900'>Usage Examples</h3>
                            </div>
                            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                                <div className='rounded-xl bg-white/70 p-4'>
                                    <h4 className='text-small mb-2 font-semibold text-gray-700'>
                                        Padding
                                    </h4>
                                    <div className='text-small-2 space-y-1 text-gray-600'>
                                        <div>p-4 (1rem padding)</div>
                                        <div>px-6 (1.5rem horizontal)</div>
                                        <div>py-8 (2rem vertical)</div>
                                    </div>
                                </div>
                                <div className='rounded-xl bg-white/70 p-4'>
                                    <h4 className='text-small mb-2 font-semibold text-gray-700'>
                                        Margin
                                    </h4>
                                    <div className='text-small-2 space-y-1 text-gray-600'>
                                        <div>m-4 (1rem margin)</div>
                                        <div>mx-auto (center)</div>
                                        <div>mt-12 (3rem top)</div>
                                    </div>
                                </div>
                                <div className='rounded-xl bg-white/70 p-4'>
                                    <h4 className='text-small mb-2 font-semibold text-gray-700'>
                                        Gap
                                    </h4>
                                    <div className='text-small-2 space-y-1 text-gray-600'>
                                        <div>gap-4 (1rem gap)</div>
                                        <div>space-x-6 (horizontal)</div>
                                        <div>space-y-8 (vertical)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
