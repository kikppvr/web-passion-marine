"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export interface BusinessCardProps {
    className?: string;
    title: string;
    image: string;
    video?: string;
    href?: string;
}

const BusinessCard = ({ className, title, image, video, href = "#" }: BusinessCardProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [rotationCount, setRotationCount] = useState(0);

    const handleMouseEnter = () => {
        setRotationCount(prev => prev + 1);
        if (videoRef.current && video) {
            videoRef.current.play().catch(console.error);
        }
    };

    const handleMouseLeave = () => {
        setRotationCount(prev => prev + 1);
        if (videoRef.current && video) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div
            className={cn("card-business", className)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <Link href={href} className='card-business__link'>
                <div className='card-business__icon'>
                    <Image
                        src='/images/home/business/ic-business.webp'
                        alt='Business Icon'
                        width={32}
                        height={32}
                        className='card-business__icon-image'
                        style={{ transform: `rotate(${rotationCount * 90}deg)` }}
                    />
                </div>

                <div className='card-business__image-container-wrapper'>
                    <div className='card-business__image-container'>
                        <Image
                            src={image}
                            alt={title}
                            width={400}
                            height={300}
                            className='card-business__image'
                        />
                        <div className='card-business__overlay'></div>
                    </div>
                    {video && (
                        <div className='card-business__video-container'>
                            <video
                                ref={videoRef}
                                className='card-business__video'
                                muted
                                loop
                                playsInline
                                preload='metadata'>
                                <source src={video} type='video/mp4' />
                            </video>
                            <div className='card-business__overlay'></div>
                        </div>
                    )}
                </div>

                <div className='card-business__content'>
                    <div className='card-business__title'>{title}</div>
                </div>
            </Link>
        </div>
    );
};

export { BusinessCard };
