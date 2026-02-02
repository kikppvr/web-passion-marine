"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Breadcrumb, BreadcrumbItem } from "./Breadcrumb";

export interface BannerProps {
    title: string | React.ReactNode;
    subtitle?: string;
    breadcrumbItems?: BreadcrumbItem[];
    backgroundImage?: string;
    backgroundVideo?: string;
    overlay?: boolean;
    className?: string;
    children?: React.ReactNode;
}

export const Banner: React.FC<BannerProps> = ({
    title,
    subtitle,
    breadcrumbItems,
    backgroundImage,
    backgroundVideo,
    overlay = false,
    className = "",
    children,
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

    // Lazy load video when banner enters viewport
    useEffect(() => {
        if (!backgroundVideo) return;

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setShouldLoadVideo(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.1 }
        );

        const el = videoRef.current;
        if (el) observer.observe(el);
        return () => observer.disconnect();
    }, [backgroundVideo]);

    return (
        <div className={className} style={{ position: "relative" }}>
            {/* Background Image via Next/Image for optimization + lazy */}
            {backgroundImage && (
                <div
                    className='banner__bg-image'
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 0,
                    }}>
                    <Image
                        src={backgroundImage}
                        alt=''
                        fill
                        className='object-cover'
                        sizes='100vw'
                        priority={false}
                    />
                </div>
            )}

            {/* Background Video - lazy load source */}
            {backgroundVideo && (
                <video
                    ref={videoRef}
                    className='banner__video'
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload={shouldLoadVideo ? "auto" : "none"}>
                    {shouldLoadVideo && <source src={backgroundVideo} type='video/mp4' />}
                </video>
            )}

            {overlay && <div className='banner__overlay' />}
            <div className='banner__content'>
                <h1 className='banner__title'>{title}</h1>
                {breadcrumbItems && breadcrumbItems.length > 0 && (
                    <div className='banner__breadcrumb'>
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                )}
            </div>
        </div>
    );
};
