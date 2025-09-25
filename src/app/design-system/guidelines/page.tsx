'use client';

import { LanguageToggle } from '@/components/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, BookOpen, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function GuidelinesPage() {
    const { language } = useLanguage();

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
                            <BookOpen className='mr-2 h-4 w-4' />
                            Guidelines
                        </div>
                        <h1 className='text-display-1 mb-6 text-white'>Design Guidelines</h1>
                        <p className='text-lead-1 mx-auto mb-8 max-w-2xl text-blue-100'>
                            หลักการและแนวทางปฏิบัติที่ดีสำหรับการออกแบบ Passion Marine
                        </p>
                        <div className='flex flex-col items-center gap-4 sm:flex-row sm:justify-center'>
                            <LanguageToggle />
                        </div>
                    </div>
                </div>
            </div>

            <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12'>
                <div className='space-y-12'>
                    {/* Guidelines Overview */}
                    <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
                        <div className='rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 p-6 text-white shadow-xl'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p className='text-small opacity-90'>Design Principles</p>
                                    <p className='text-h2 font-bold'>3</p>
                                </div>
                                <BookOpen className='h-8 w-8 opacity-80' />
                            </div>
                        </div>
                        <div className='rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 p-6 text-white shadow-xl'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p className='text-small opacity-90'>Best Practices</p>
                                    <p className='text-h2 font-bold'>5+</p>
                                </div>
                                <CheckCircle className='h-8 w-8 opacity-80' />
                            </div>
                        </div>
                        <div className='rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 p-6 text-white shadow-xl'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p className='text-small opacity-90'>Accessibility</p>
                                    <p className='text-h2 font-bold'>WCAG 2.1</p>
                                </div>
                                <div className='flex h-8 w-8 items-center justify-center rounded-full bg-white/20'>
                                    <span className='text-h3'>♿</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Design Guidelines */}
                    <div className='rounded-3xl border border-white/20 bg-white/70 p-6 shadow-xl shadow-gray-500/10 backdrop-blur-sm md:p-10'>
                        <div className='mb-8 flex items-center gap-4'>
                            <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg'>
                                <BookOpen className='h-6 w-6 text-white' />
                            </div>
                            <div>
                                <h2 className='text-h1 font-bold text-gray-900'>
                                    Design Guidelines
                                </h2>
                                <p className='text-body text-gray-600'>
                                    หลักการและแนวทางปฏิบัติที่ดีสำหรับการออกแบบ
                                </p>
                            </div>
                        </div>
                        <div className='grid gap-8 md:grid-cols-2'>
                            <div className='rounded-2xl border border-blue-200/50 bg-gradient-to-br from-blue-50 to-indigo-50 p-6'>
                                <div className='mb-6 flex items-center'>
                                    <div className='mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500'>
                                        <span className='text-white'>🎯</span>
                                    </div>
                                    <h3 className='text-h3 font-bold text-gray-900'>
                                        Design Principles
                                    </h3>
                                </div>
                                <div className='space-y-4'>
                                    <div className='rounded-xl bg-white/50 p-4'>
                                        <div className='mb-2 flex items-center'>
                                            <div className='mr-2 h-2 w-2 rounded-full bg-blue-500'></div>
                                            <h4 className='text-h4 font-semibold text-gray-900'>
                                                ความสอดคล้อง
                                            </h4>
                                        </div>
                                        <p className='text-small text-gray-700'>
                                            ใช้ component เดียวกันในสถานการณ์เดียวกัน
                                            เพื่อสร้างประสบการณ์ที่สม่ำเสมอ
                                        </p>
                                    </div>
                                    <div className='rounded-xl bg-white/50 p-4'>
                                        <div className='mb-2 flex items-center'>
                                            <div className='mr-2 h-2 w-2 rounded-full bg-blue-500'></div>
                                            <h4 className='text-h4 font-semibold text-gray-900'>
                                                ความชัดเจน
                                            </h4>
                                        </div>
                                        <p className='text-small text-gray-700'>
                                            ออกแบบให้เข้าใจง่ายและใช้งานง่าย
                                            โดยใช้ภาษาและสัญลักษณ์ที่ชัดเจน
                                        </p>
                                    </div>
                                    <div className='rounded-xl bg-white/50 p-4'>
                                        <div className='mb-2 flex items-center'>
                                            <div className='mr-2 h-2 w-2 rounded-full bg-blue-500'></div>
                                            <h4 className='text-h4 font-semibold text-gray-900'>
                                                ความยืดหยุ่น
                                            </h4>
                                        </div>
                                        <p className='text-small text-gray-700'>
                                            ปรับแต่งได้ตามความต้องการ
                                            โดยไม่ทำลายโครงสร้างหลักของระบบ
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='rounded-2xl border border-green-200/50 bg-gradient-to-br from-green-50 to-emerald-50 p-6'>
                                <div className='mb-6 flex items-center'>
                                    <div className='mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-500'>
                                        <span className='text-white'>📏</span>
                                    </div>
                                    <h3 className='text-h3 font-bold text-gray-900'>
                                        Best Practices
                                    </h3>
                                </div>
                                <div className='space-y-4'>
                                    <div className='rounded-xl bg-white/50 p-4'>
                                        <div className='mb-2 flex items-center'>
                                            <CheckCircle className='mr-2 h-4 w-4 text-green-500' />
                                            <h4 className='text-h4 font-semibold text-gray-900'>
                                                ใช้ Spacing Scale
                                            </h4>
                                        </div>
                                        <p className='text-small text-gray-700'>
                                            ใช้ spacing scale ที่กำหนดไว้เสมอ
                                            เพื่อความสม่ำเสมอในการจัดวาง
                                        </p>
                                    </div>
                                    <div className='rounded-xl bg-white/50 p-4'>
                                        <div className='mb-2 flex items-center'>
                                            <CheckCircle className='mr-2 h-4 w-4 text-green-500' />
                                            <h4 className='text-h4 font-semibold text-gray-900'>
                                                เลือกสีจาก Palette
                                            </h4>
                                        </div>
                                        <p className='text-small text-gray-700'>
                                            เลือกสีจาก color palette เท่านั้น
                                            เพื่อรักษาความสอดคล้องของแบรนด์
                                        </p>
                                    </div>
                                    <div className='rounded-xl bg-white/50 p-4'>
                                        <div className='mb-2 flex items-center'>
                                            <CheckCircle className='mr-2 h-4 w-4 text-green-500' />
                                            <h4 className='text-h4 font-semibold text-gray-900'>
                                                ทดสอบ Accessibility
                                            </h4>
                                        </div>
                                        <p className='text-small text-gray-700'>
                                            ทดสอบ accessibility เสมอ เพื่อให้ทุกคนสามารถใช้งานได้
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Accessibility Guidelines */}
                    <div className='rounded-3xl border border-white/20 bg-white/70 p-6 shadow-xl shadow-gray-500/10 backdrop-blur-sm md:p-10'>
                        <div className='mb-8 flex items-center gap-4'>
                            <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 shadow-lg'>
                                <span className='text-xl text-white'>♿</span>
                            </div>
                            <div>
                                <h2 className='text-h1 font-bold text-gray-900'>
                                    Accessibility Guidelines
                                </h2>
                                <p className='text-body text-gray-600'>
                                    แนวทางปฏิบัติเพื่อให้ทุกคนสามารถใช้งานได้
                                </p>
                            </div>
                        </div>
                        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                            <div className='rounded-2xl border border-pink-200/50 bg-gradient-to-br from-pink-50 to-purple-50 p-6'>
                                <div className='mb-4 flex items-center'>
                                    <div className='mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-pink-500'>
                                        <span className='text-white'>👁️</span>
                                    </div>
                                    <h3 className='text-h3 font-bold text-gray-900'>
                                        Visual Design
                                    </h3>
                                </div>
                                <div className='space-y-3'>
                                    <div className='rounded-xl bg-white/50 p-3'>
                                        <h4 className='text-small font-semibold text-gray-900'>
                                            Color Contrast
                                        </h4>
                                        <p className='text-small-2 text-gray-700'>
                                            ใช้สีที่มี contrast ratio อย่างน้อย 4.5:1
                                        </p>
                                    </div>
                                    <div className='rounded-xl bg-white/50 p-3'>
                                        <h4 className='text-small font-semibold text-gray-900'>
                                            Font Size
                                        </h4>
                                        <p className='text-small-2 text-gray-700'>
                                            ใช้ขนาดตัวอักษรที่อ่านง่ายอย่างน้อย 16px
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='rounded-2xl border border-blue-200/50 bg-gradient-to-br from-blue-50 to-cyan-50 p-6'>
                                <div className='mb-4 flex items-center'>
                                    <div className='mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500'>
                                        <span className='text-white'>⌨️</span>
                                    </div>
                                    <h3 className='text-h3 font-bold text-gray-900'>
                                        Keyboard Navigation
                                    </h3>
                                </div>
                                <div className='space-y-3'>
                                    <div className='rounded-xl bg-white/50 p-3'>
                                        <h4 className='text-small font-semibold text-gray-900'>
                                            Focus Indicators
                                        </h4>
                                        <p className='text-small-2 text-gray-700'>
                                            แสดง focus indicator ที่ชัดเจน
                                        </p>
                                    </div>
                                    <div className='rounded-xl bg-white/50 p-3'>
                                        <h4 className='text-small font-semibold text-gray-900'>
                                            Tab Order
                                        </h4>
                                        <p className='text-small-2 text-gray-700'>
                                            จัดลำดับการ tab ให้เป็นไปตามตรรกะ
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='rounded-2xl border border-green-200/50 bg-gradient-to-br from-green-50 to-emerald-50 p-6'>
                                <div className='mb-4 flex items-center'>
                                    <div className='mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-500'>
                                        <span className='text-white'>🔊</span>
                                    </div>
                                    <h3 className='text-h3 font-bold text-gray-900'>
                                        Screen Readers
                                    </h3>
                                </div>
                                <div className='space-y-3'>
                                    <div className='rounded-xl bg-white/50 p-3'>
                                        <h4 className='text-small font-semibold text-gray-900'>
                                            Alt Text
                                        </h4>
                                        <p className='text-small-2 text-gray-700'>
                                            เพิ่ม alt text ที่อธิบายภาพได้ชัดเจน
                                        </p>
                                    </div>
                                    <div className='rounded-xl bg-white/50 p-3'>
                                        <h4 className='text-small font-semibold text-gray-900'>
                                            Semantic HTML
                                        </h4>
                                        <p className='text-small-2 text-gray-700'>
                                            ใช้ HTML elements ที่เหมาะสม
                                        </p>
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
