"use client";

import { Header } from "@/components/ui/layout";
import { VideoHeroBanner, BusinessCardSwiper } from "@/components/ui/media";
import { LanguageToggle } from "@/components/LanguageSwitcher";
import { Footer } from "@/components/ui/layout";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { useState } from "react";
import "@/styles/components/home/index.scss";
import { PrimaryButton } from "@/components/ui/button/PrimaryButton";

export default function HeaderPage() {
    const [copiedCode, setCopiedCode] = useState<string | null>(null);
    const [selectedTheme, setSelectedTheme] = useState<"white" | "transparent">("transparent");
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const { language } = useLanguage();

    const boatSolutionsData = [
        {
            title: "Engine Repair & Maintenance",
            image: "/images/business/business-01.webp",
            video: "/videos/business/video-01.mp4",
            href: "/comingsoon",
        },
        {
            title: "Boat Upgrades",
            image: "/images/business/business-02.webp",
            video: "/videos/business/video-02.mp4",
            href: "/comingsoon",
        },
        {
            title: "Electronics & Solar",
            image: "/images/business/business-03.webp",
            video: "/videos/business/video-03.mp4",
            href: "/comingsoon",
        },
        {
            title: "Structure Repair",
            image: "/images/business/business-04.webp",
            video: "/videos/business/video-04.mp4",
            href: "/comingsoon",
        },
        {
            title: "Custom Boat Design",
            image: "/images/business/business-05.webp",
            video: "/videos/business/video-05.mp4",
            href: "/comingsoon",
        },
        {
            title: "Teak & EVA Flooring",
            image: "/images/business/business-06.webp",
            video: "/videos/business/video-06.mp4",
            href: "/comingsoon",
        },
        {
            title: "Marine Upholstery",
            image: "/images/business/business-07.webp",
            video: "/videos/business/video-07.mp4",
            href: "/comingsoon",
        },
        {
            title: "Gelcoat Repair & Finishing",
            image: "/images/business/business-08.webp",
            video: "/videos/business/video-08.mp4",
            href: "/comingsoon",
        },
        {
            title: "Fiberglass Furniture",
            image: "/images/business/business-09.webp",
            video: "/videos/business/video-09.mp4",
            href: "/comingsoon",
        },
        {
            title: "Interior Styling",
            image: "/images/business/business-10.webp",
            video: "/videos/business/video-10.mp4",
            href: "/comingsoon",
        },
    ];

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
        <div className='min-h-screen'>
            {/* Header Component */}
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onMouseDown={() => setIsActive(true)}
                onMouseUp={() => setIsActive(false)}
                onMouseOut={() => setIsActive(false)}>
                <Header theme={isHovered || isActive ? "white" : "transparent"} />
            </div>

            {/* Video Hero Banner */}
            <VideoHeroBanner
                videoSrc='/videos/banner/banner-home.mp4'
                title='Passion Marine'
                subtitle='Marine Services'
                description='Professional marine services with safety and quality guaranteed'
                showPlayButton={true}
                autoPlay={true}
                muted={true}
                loop={true}
                overlay={true}
                overlayOpacity={0.4}
                preload='auto'
                lazyLoad={false}
                priority={true}
                className='video-hero-banner--fullscreen'
            />

            <section className='our-services'>
                <div className='our-services__container'>
                    <h2 className='our-services__title'>Our Services</h2>
                    <div className='our-services__description-1'>General Boat Services,</div>
                    <div className='our-services__description-2'>
                        Engine Repair, Boat Restoration
                    </div>
                </div>
            </section>

            <section className='boat-solutions'>
                <div className='boat-solutions__container'>
                    <div className='boat-solutions__header'>
                        <h2 className='boat-solutions__title'>Boat Solutions</h2>
                        <div className='boat-solutions__button'>
                            <PrimaryButton>Overview Services</PrimaryButton>
                        </div>
                    </div>
                    <div className='boat-solutions__swiper'>
                        <BusinessCardSwiper
                            data={boatSolutionsData}
                            autoplay={false}
                            autoplayDelay={4000}
                            showNavigation={false}
                            showPagination={false}
                            slidesPerView={{
                                mobile: 1,
                                tablet: 2.5,
                                desktop: 3.5,
                            }}
                            spaceBetween={{
                                mobile: 8,
                                tablet: 8,
                                desktop: 8,
                            }}
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
