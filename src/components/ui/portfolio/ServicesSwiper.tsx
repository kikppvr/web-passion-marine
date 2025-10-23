"use client";

import Image from "next/image";
import { SwiperSlider, SwiperSlideData } from "@/components/ui/media/SwiperSlider";

interface ServiceData {
    title: string;
    image: string;
}

interface ServicesSwiperProps {
    services: ServiceData[];
    className?: string;
    swiperClassName?: string;
    slideClassName?: string;
    autoplay?: boolean;
    autoplayDelay?: number;
    showNavigation?: boolean;
    showPagination?: boolean;
    loop?: boolean;
    speed?: number;
    slidesPerView?: {
        mobile?: number;
        tablet?: number;
        laptop?: number;
        desktop?: number;
        large?: number;
    };
    spaceBetween?: {
        mobile?: number;
        tablet?: number;
        laptop?: number;
        desktop?: number;
        large?: number;
    };
    slidesPerGroup?: {
        mobile?: number;
        tablet?: number;
        laptop?: number;
        desktop?: number;
        large?: number;
    };
}

export const ServicesSwiper = ({
    services,
    className = "",
    swiperClassName = "",
    slideClassName = "",
    autoplay = false,
    autoplayDelay = 3000,
    showNavigation = true,
    showPagination = true,
    loop = false,
    speed = 500,
    slidesPerView = {
        mobile: 1,
        tablet: 2,
        laptop: 3,
        desktop: 3,
        large: 3,
    },
    spaceBetween = {
        mobile: 16,
        tablet: 24,
        laptop: 32,
        desktop: 32,
        large: 32,
    },
    slidesPerGroup = {
        mobile: 1,
        tablet: 2,
        laptop: 3,
        desktop: 3,
        large: 3,
    },
}: ServicesSwiperProps) => {
    // Transform services data to match SwiperSlideData interface
    const swiperData: SwiperSlideData[] = services.map(service => ({
        title: service.title,
        image: service.image, // Using icon as image for compatibility
        video: "", // Not used for services
        href: "", // Not used for services
    }));

    // Custom render function for service items
    const renderServiceSlide = (item: SwiperSlideData, index: number) => (
        <div className='card-provided'>
            <div className='card-provided__icon'>
                <Image src={item.image} alt={item.title} width={62} height={62} />
            </div>
            <h3 className='card-provided__title'>{item.title}</h3>
        </div>
    );

    return (
        <div className={`${className}`}>
            <SwiperSlider
                data={swiperData}
                className={className}
                swiperClassName={swiperClassName}
                slideClassName={slideClassName}
                autoplay={autoplay}
                autoplayDelay={autoplayDelay}
                showNavigation={showNavigation}
                showPagination={showPagination}
                loop={loop}
                speed={speed}
                slidesPerView={slidesPerView}
                spaceBetween={spaceBetween}
                slidesPerGroup={slidesPerGroup}
                renderSlide={renderServiceSlide}
                prevIcon={<i className='ph ph-arrow-left'></i>}
                nextIcon={<i className='ph ph-arrow-right'></i>}
            />
        </div>
    );
};
