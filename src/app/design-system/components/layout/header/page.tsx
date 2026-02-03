"use client";

import { Header } from "@/components/ui/layout";
import { VideoHeroBanner } from "@/components/ui/media";
import { LanguageToggle } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { useState } from "react";

export default function HeaderPage() {
    const [copiedCode, setCopiedCode] = useState<string | null>(null);
    const [selectedTheme, setSelectedTheme] = useState<"white" | "transparent">("transparent");
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);
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
                lazyLoad={false}
                priority={true}
                className='video-hero-banner--fullscreen'
            />
        </div>
    );
}
