import React from "react";
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
    const style = backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {};

    return (
        <div className={className} style={style}>
            {/* Background Video */}
            {backgroundVideo && (
                <video className='banner__video' autoPlay muted loop playsInline>
                    <source src={backgroundVideo} type='video/mp4' />
                </video>
            )}

            {overlay && <div className='banner__overlay' />}
            <div className='banner__content'>
                {/* Title Section */}
                <h1 className='banner__title'>{title}</h1>
                {/* Breadcrumb */}
                {breadcrumbItems && breadcrumbItems.length > 0 && (
                    <div className='banner__breadcrumb'>
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                )}
            </div>
        </div>
    );
};
