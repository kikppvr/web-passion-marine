"use client";

import { MainLayout, Banner } from "@/components/ui/layout";
import { PrimaryButton } from "@/components/ui/button/PrimaryButton";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HomePage() {
    const { language } = useLanguage();

    // Example banner props
    const bannerProps = {
        title: language === "th" ? "Passion Marine" : "Passion Marine",
        subtitle:
            language === "th"
                ? "บริการทางทะเลครบวงจร รับรองคุณภาพและความปลอดภัย"
                : "Professional Marine Services with Quality and Safety Assurance",
        breadcrumbItems: [
            { label: language === "th" ? "หน้าแรก" : "Home", href: "/" },
            { label: language === "th" ? "บริการ" : "Services" },
        ],
        backgroundImage: "/images/home/banner/banner-home.jpg",
        children: <PrimaryButton>{language === "th" ? "ดูบริการ" : "View Services"}</PrimaryButton>,
    };

    return (
        <MainLayout
            bannerType='full' // หรือ "half" สำหรับ banner แบบครึ่งหน้า
            bannerProps={bannerProps}
            headerTheme='transparent'>
            {" "}
            {/* หรือ "white" */}
            {/* Main content goes here */}
            <div className='main-content'>
                <section className='content-section'>
                    <h2>Content Section</h2>
                    <p>Your main content goes here...</p>
                </section>
            </div>
        </MainLayout>
    );
}
