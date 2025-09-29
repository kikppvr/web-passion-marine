"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { BusinessCard } from "@/components/ui/cards/BusinessCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface SwiperSlideData {
    title: string;
    image: string;
    video: string;
    href: string;
}

export interface BusinessCardSwiperProps {
    data: SwiperSlideData[];
    className?: string;
    autoplay?: boolean;
    autoplayDelay?: number;
    showNavigation?: boolean;
    showPagination?: boolean;
    slidesPerView?: {
        mobile?: number;
        tablet?: number;
        desktop?: number;
    };
    spaceBetween?: {
        mobile?: number;
        tablet?: number;
        desktop?: number;
    };
    slideClassName?: string;
    renderSlide?: (item: SwiperSlideData, index: number) => React.ReactNode;
}

export const BusinessCardSwiper = ({
    data,
    className = "",
    autoplay = true,
    autoplayDelay = 3000,
    showNavigation = true,
    showPagination = true,
    slidesPerView = {
        mobile: 1,
        tablet: 3,
        desktop: 4,
    },
    spaceBetween = {
        mobile: 16,
        tablet: 20,
        desktop: 24,
    },
    slideClassName = "",
    renderSlide,
}: BusinessCardSwiperProps) => {
    const defaultRenderSlide = (item: SwiperSlideData, index: number) => (
        <BusinessCard title={item.title} image={item.image} video={item.video} href={item.href} />
    );

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={spaceBetween.mobile}
            slidesPerView={slidesPerView.mobile}
            navigation={showNavigation}
            pagination={showPagination ? { clickable: true } : false}
            autoplay={
                autoplay
                    ? {
                          delay: autoplayDelay,
                          disableOnInteraction: false,
                      }
                    : false
            }
            breakpoints={{
                640: {
                    slidesPerView: slidesPerView.tablet,
                    spaceBetween: spaceBetween.tablet,
                },
                1024: {
                    slidesPerView: slidesPerView.desktop,
                    spaceBetween: spaceBetween.desktop,
                },
            }}
            className={`business-card-swiper ${className}`}>
            {data.map((item, index) => (
                <SwiperSlide key={index} className={slideClassName}>
                    {renderSlide ? renderSlide(item, index) : defaultRenderSlide(item, index)}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
