"use client";

import { LanguageToggle } from "@/components/LanguageSwitcher";
import { PrimaryButton } from "@/components/ui/button/PrimaryButton";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { useState } from "react";

export default function PrimaryButtonPage() {
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
                                    className='ph ph-cursor-click text-white'
                                    style={{ fontSize: "32px" }}></i>
                            </div>
                        </div>
                        <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
                            Primary Button
                        </h1>
                        <p className='mt-6 text-lg leading-8 text-blue-100'>
                            ปุ่มหลักที่ออกแบบตาม Figma Design System พร้อมใช้งานทันที
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
                        <div className='relative overflow-hidden rounded-2xl border-2 border-dashed border-gray-300 bg-white p-12 shadow-inner'>
                            <div className='flex items-center justify-center gap-6'>
                                <PrimaryButton>Default</PrimaryButton>
                                <PrimaryButton theme='dark'>Dark Theme</PrimaryButton>
                                <PrimaryButton theme='revert'>Revert Theme</PrimaryButton>
                            </div>
                            {/* Background decoration */}
                            <div className='absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 opacity-50'></div>
                            <div className='absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-gradient-to-br from-green-100 to-blue-100 opacity-50'></div>
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
                                                `<PrimaryButton>Default</PrimaryButton>`,
                                                "primary-button-code"
                                            )
                                        }>
                                        {copiedCode === "primary-button-code" ? (
                                            <i className='ph ph-check-circle text-green-400'></i>
                                        ) : (
                                            <i className='ph ph-copy'></i>
                                        )}
                                    </button>
                                </div>
                                <div className='mb-2 flex items-center gap-2'>
                                    <div className='h-3 w-3 rounded-full bg-green-500'></div>
                                    <span className='text-small text-gray-400'>
                                        PrimaryButton.tsx
                                    </span>
                                </div>
                                <pre className='text-small overflow-x-auto text-gray-300'>
                                    <code>{`<PrimaryButton>Default</PrimaryButton>`}</code>
                                </pre>
                            </div>
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
                                                `<PrimaryButton theme="dark">Dark Theme</PrimaryButton>`,
                                                "primary-button-dark-code"
                                            )
                                        }>
                                        {copiedCode === "primary-button-dark-code" ? (
                                            <i className='ph ph-check-circle text-green-400'></i>
                                        ) : (
                                            <i className='ph ph-copy'></i>
                                        )}
                                    </button>
                                </div>
                                <div className='mb-2 flex items-center gap-2'>
                                    <div className='h-3 w-3 rounded-full bg-green-500'></div>
                                    <span className='text-small text-gray-400'>
                                        PrimaryButton.tsx
                                    </span>
                                </div>
                                <pre className='text-small overflow-x-auto text-gray-300'>
                                    <code>{`<PrimaryButton theme="dark">Dark Theme</PrimaryButton>`}</code>
                                </pre>
                            </div>
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
                                                `<PrimaryButton theme="revert">Revert Theme</PrimaryButton>`,
                                                "primary-button-revert-code"
                                            )
                                        }>
                                        {copiedCode === "primary-button-revert-code" ? (
                                            <i className='ph ph-check-circle text-green-400'></i>
                                        ) : (
                                            <i className='ph ph-copy'></i>
                                        )}
                                    </button>
                                </div>
                                <div className='mb-2 flex items-center gap-2'>
                                    <div className='h-3 w-3 rounded-full bg-green-500'></div>
                                    <span className='text-small text-gray-400'>
                                        PrimaryButton.tsx
                                    </span>
                                </div>
                                <pre className='text-small overflow-x-auto text-gray-300'>
                                    <code>{`<PrimaryButton theme="revert">Revert Theme</PrimaryButton>`}</code>
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
                                            children
                                        </td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>
                                            React.ReactNode
                                        </td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>-</td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>
                                            ข้อความที่แสดงในปุ่ม
                                        </td>
                                    </tr>
                                    <tr className='border-b border-gray-100'>
                                        <td className='px-4 py-3 font-mono text-sm text-blue-600'>
                                            theme
                                        </td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>
                                            &apos;light&apos; | &apos;dark&apos; |
                                            &apos;revert&apos;
                                        </td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>
                                            &apos;light&apos;
                                        </td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>
                                            ธีมสีของปุ่ม (light: ปุ่มสีน้ำเงิน, dark: ปุ่มสีขาว,
                                            revert: สลับตำแหน่ง icon กับ text)
                                        </td>
                                    </tr>
                                    <tr className='border-b border-gray-100'>
                                        <td className='px-4 py-3 font-mono text-sm text-blue-600'>
                                            icon
                                        </td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>string</td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>
                                            &apos;ph ph-arrow-right&apos;
                                        </td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>
                                            ไอคอนที่แสดงในปุ่ม
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='px-4 py-3 font-mono text-sm text-blue-600'>
                                            className
                                        </td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>string</td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>-</td>
                                        <td className='px-4 py-3 text-sm text-gray-600'>
                                            CSS class เพิ่มเติม
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
