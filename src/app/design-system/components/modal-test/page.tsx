"use client";

import { useState } from "react";
import ContactFormModal from "@/components/ui/contact/ContactFormModal";
import { BookNowButton } from "@/components/ui/button/BookNowButton";
import { LanguageToggle } from "@/components/LanguageSwitcher";

export default function ModalTestPage() {
    const [openLoading, setOpenLoading] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openError, setOpenError] = useState(false);

    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'>
            <div className='mx-auto max-w-6xl px-4 py-12 sm:px-6'>
                {/* Header */}
                <div className='mb-12 text-center'>
                    <div className='mb-4 flex items-center justify-center gap-4'>
                        <LanguageToggle />
                    </div>
                    <h1 className='mb-4 text-4xl font-bold text-gray-900'>Modal Test Page</h1>
                    <p className='text-lg text-gray-600'>
                        ทดสอบ Contact Form Modal ทั้ง 3 แบบ: Loading, Success, และ Error
                    </p>
                </div>

                {/* Test Buttons */}
                <div className='mb-12 grid gap-6 md:grid-cols-3'>
                    <div className='rounded-2xl bg-white p-6 shadow-lg'>
                        <h3 className='mb-4 text-xl font-semibold text-gray-900'>Loading Modal</h3>
                        <p className='mb-6 text-sm text-gray-600'>แสดงเมื่อกำลังส่งข้อมูล</p>
                        <BookNowButton onClick={() => setOpenLoading(true)} showIcon={false}>
                            Test Loading
                        </BookNowButton>
                    </div>

                    <div className='rounded-2xl bg-white p-6 shadow-lg'>
                        <h3 className='mb-4 text-xl font-semibold text-gray-900'>Success Modal</h3>
                        <p className='mb-6 text-sm text-gray-600'>แสดงเมื่อส่งข้อมูลสำเร็จ</p>
                        <BookNowButton onClick={() => setOpenSuccess(true)} showIcon={false}>
                            Test Success
                        </BookNowButton>
                    </div>

                    <div className='rounded-2xl bg-white p-6 shadow-lg'>
                        <h3 className='mb-4 text-xl font-semibold text-gray-900'>Error Modal</h3>
                        <p className='mb-6 text-sm text-gray-600'>แสดงเมื่อเกิดข้อผิดพลาด</p>
                        <BookNowButton onClick={() => setOpenError(true)} showIcon={false}>
                            Test Error
                        </BookNowButton>
                    </div>
                </div>

                {/* Modal Examples */}
                <div className='rounded-2xl bg-white p-8 shadow-lg'>
                    <h2 className='mb-6 text-2xl font-bold text-gray-900'>Modal Examples</h2>
                    <div className='space-y-4'>
                        <div className='rounded-lg border border-gray-200 p-4'>
                            <h3 className='mb-2 font-semibold text-gray-900'>Loading Modal</h3>
                            <p className='text-sm text-gray-600'>
                                Type: &quot;loading&quot; | Title: &quot;Sending...&quot; | Message:
                                &quot;Please wait while we send your message.&quot;
                            </p>
                        </div>
                        <div className='rounded-lg border border-gray-200 p-4'>
                            <h3 className='mb-2 font-semibold text-gray-900'>Success Modal</h3>
                            <p className='text-sm text-gray-600'>
                                Type: &quot;success&quot; | Title: &quot;Message Sent
                                Successfully!&quot; | Message: &quot;Thank you for contacting
                                us...&quot;
                            </p>
                        </div>
                        <div className='rounded-lg border border-gray-200 p-4'>
                            <h3 className='mb-2 font-semibold text-gray-900'>Error Modal</h3>
                            <p className='text-sm text-gray-600'>
                                Type: &quot;error&quot; | Title: &quot;Failed to Send Message&quot;
                                | Message: &quot;We encountered an issue...&quot; | ErrorDetails:
                                &quot;Network error...&quot;
                            </p>
                        </div>
                    </div>
                </div>
                {/* Loading Modal */}
                <ContactFormModal
                    open={openLoading}
                    onOpenChange={setOpenLoading}
                    type='loading'
                    title='Sending Your Message'
                    message='Please wait while we process your request. This may take a few seconds.'
                />

                {/* Success Modal */}
                <ContactFormModal
                    open={openSuccess}
                    onOpenChange={setOpenSuccess}
                    type='success'
                    title='Message Sent Successfully!'
                    message='Thank you for contacting Passion Marine. We have received your message and will respond to you as soon as possible.'
                />

                {/* Error Modal */}
                <ContactFormModal
                    open={openError}
                    onOpenChange={setOpenError}
                    type='error'
                    title='Failed to Send Message'
                    message='We encountered an issue while sending your message. Please try again or contact us directly.'
                    errorDetails='Error: Unable to connect to server. Please check your internet connection and try again later.'
                />
            </div>
        </div>
    );
}
