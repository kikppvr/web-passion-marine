"use client";

import { LanguageToggle } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { ArrowLeft, CheckCircle, Palette } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ColorsPage() {
    const [copiedCode, setCopiedCode] = useState<string | null>(null);
    const { language } = useLanguage();

    const copyToClipboard = async (text: string, codeId: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedCode(codeId);
            setTimeout(() => setCopiedCode(null), 2000);
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    };

    const colorPalette = {
        blue: {
            50: "#e8ecf3",
            100: "#b9c5d9",
            200: "#97a9c6",
            300: "#6782ac",
            400: "#496a9c",
            500: "#1c4583",
            600: "#193f77",
            700: "#14315d",
            800: "#0f2648",
            900: "#0c1d37",
        },
        grey: {
            50: "#f1f1f1",
            100: "#d2d2d3",
            200: "#bdbdbe",
            300: "#9f9fa0",
            400: "#8c8c8d",
            500: "#6f6f71",
            600: "#656567",
            700: "#4f4f50",
            800: "#3d3d3e",
            900: "#2f2f2f",
        },
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
                            <Palette className='mr-2 h-4 w-4' />
                            Colors
                        </div>
                        <h1 className='text-display-1 mb-6 text-white'>Color Palette</h1>
                        <p className='text-lead-1 mx-auto mb-8 max-w-2xl text-blue-100'>
                            สีหลักที่ใช้ในระบบออกแบบ Passion Marine พร้อมคู่มือการใช้งาน
                        </p>
                        <div className='flex flex-col items-center gap-4 sm:flex-row sm:justify-center'>
                            <LanguageToggle />
                        </div>
                    </div>
                </div>
            </div>

            <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12'>
                <div className='space-y-12'>
                    {/* Color Overview */}
                    <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-4'>
                        <div className='rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white shadow-xl'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p className='text-small opacity-90'>Primary Colors</p>
                                    <p className='text-h2 font-bold'>Blue</p>
                                </div>
                                <Palette className='h-8 w-8 opacity-80' />
                            </div>
                        </div>
                        <div className='rounded-2xl bg-gradient-to-br from-gray-500 to-gray-600 p-6 text-white shadow-xl'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p className='text-small opacity-90'>Neutral Colors</p>
                                    <p className='text-h2 font-bold'>Grey</p>
                                </div>
                                <Palette className='h-8 w-8 opacity-80' />
                            </div>
                        </div>
                        <div className='rounded-2xl bg-gradient-to-br from-green-500 to-green-600 p-6 text-white shadow-xl'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p className='text-small opacity-90'>Success</p>
                                    <p className='text-h2 font-bold'>Green</p>
                                </div>
                                <CheckCircle className='h-8 w-8 opacity-80' />
                            </div>
                        </div>
                        <div className='rounded-2xl bg-gradient-to-br from-red-500 to-red-600 p-6 text-white shadow-xl'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p className='text-small opacity-90'>Error</p>
                                    <p className='text-h2 font-bold'>Red</p>
                                </div>
                                <div className='flex h-8 w-8 items-center justify-center rounded-full bg-white/20'>
                                    <span className='text-h3'>!</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Color Palette */}
                    <div className='rounded-3xl border border-white/20 bg-white/70 p-6 shadow-xl shadow-gray-500/10 backdrop-blur-sm md:p-10'>
                        <div className='mb-8 flex items-center gap-4'>
                            <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg'>
                                <Palette className='h-6 w-6 text-white' />
                            </div>
                            <div>
                                <h2 className='text-h1 font-bold text-gray-900'>Color Palette</h2>
                                <p className='text-body text-gray-600'>
                                    สีหลักที่ใช้ในระบบออกแบบ Passion Marine
                                </p>
                            </div>
                        </div>
                        <div className='space-y-12'>
                            {Object.entries(colorPalette).map(([colorName, shades]) => (
                                <div
                                    key={colorName}
                                    className='rounded-2xl border border-gray-200/50 bg-white/50 p-6 backdrop-blur-sm md:p-8'>
                                    <div className='mb-6 flex items-center gap-4'>
                                        <div
                                            className={`h-8 w-8 rounded-xl bg-${colorName}-500 shadow-lg`}></div>
                                        <div>
                                            <h3 className='text-h3 font-bold capitalize text-gray-900'>
                                                {colorName} Colors
                                            </h3>
                                            <p className='text-small text-gray-600'>
                                                {colorName === "blue"
                                                    ? "สีหลักของแบรนด์"
                                                    : "สีสำหรับข้อความและพื้นหลัง"}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-1 gap-4 md:grid-cols-5 xl:grid-cols-10'>
                                        {Object.entries(shades).map(([shade, hex]) => (
                                            <div
                                                key={shade}
                                                className='group cursor-pointer text-center'
                                                onClick={() =>
                                                    copyToClipboard(hex, `${colorName}-${shade}`)
                                                }>
                                                <div className='relative'>
                                                    <div
                                                        className='mb-3 h-20 w-full rounded-xl border border-gray-200 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl'
                                                        style={{
                                                            backgroundColor: hex,
                                                        }}></div>
                                                    {copiedCode === `${colorName}-${shade}` && (
                                                        <div className='absolute inset-0 flex items-center justify-center rounded-xl bg-black/20'>
                                                            <div className='rounded-full bg-white p-2 shadow-lg'>
                                                                <CheckCircle className='h-4 w-4 text-green-600' />
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className='text-small font-bold text-gray-900'>
                                                    {shade}
                                                </div>
                                                <div
                                                    className={cn(
                                                        "text-small-2 mt-1 rounded px-2 py-1 font-mono transition-colors",
                                                        copiedCode === `${colorName}-${shade}`
                                                            ? "bg-green-100 text-green-700"
                                                            : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                                                    )}>
                                                    {hex}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
