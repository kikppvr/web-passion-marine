"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { BusinessCard } from "@/components/ui/cards/BusinessCard";
import { useId, useState, useEffect } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface SwiperSlideData {
    title: string;
    image: string;
    video: string;
    href: string;
    price?: string;
    duration?: string;
    capacity?: string;
    location?: string;
    [key: string]: any; // Allow additional custom properties
}

export interface SwiperSliderProps {
    data: SwiperSlideData[];
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
    renderSlide?: (item: SwiperSlideData, index: number) => React.ReactNode;
    cardComponent?: React.ComponentType<any>;
}

export const SwiperSlider = ({
    data,
    className = "",
    swiperClassName = "",
    slideClassName = "",
    autoplay = true,
    autoplayDelay = 3000,
    showNavigation = false,
    showPagination = false,
    loop = false,
    speed = 1000,
    slidesPerView = {
        mobile: 1,
        tablet: 3,
        laptop: 3,
        desktop: 4,
        large: 5,
    },
    spaceBetween = {
        mobile: 16,
        tablet: 20,
        laptop: 22,
        desktop: 24,
        large: 32,
    },
    renderSlide,
    cardComponent: CardComponent = BusinessCard,
}: SwiperSliderProps) => {
    // Generate stable unique IDs for navigation buttons
    const uniqueId = useId();
    const nextButtonId = `swiper-button-next-${uniqueId}`;
    const prevButtonId = `swiper-button-prev-${uniqueId}`;

    // State for navigation disable
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const defaultRenderSlide = (item: SwiperSlideData, index: number) => (
        <CardComponent
            {...item} // Pass all props to the card component
        />
    );

    return (
        <div className={`swiper-slider-container ${className}`}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={spaceBetween.mobile}
                slidesPerView={slidesPerView.mobile}
                loop={loop}
                speed={speed}
                navigation={
                    showNavigation
                        ? {
                              nextEl: `#${nextButtonId}`,
                              prevEl: `#${prevButtonId}`,
                          }
                        : false
                }
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
                    576: {
                        slidesPerView: slidesPerView.mobile,
                        spaceBetween: spaceBetween.mobile,
                    },
                    768: {
                        slidesPerView: slidesPerView.tablet,
                        spaceBetween: spaceBetween.tablet,
                    },
                    1024: {
                        slidesPerView: slidesPerView.laptop,
                        spaceBetween: spaceBetween.laptop,
                    },
                    1200: {
                        slidesPerView: slidesPerView.desktop,
                        spaceBetween: spaceBetween.desktop,
                    },
                    1440: {
                        slidesPerView: slidesPerView.large,
                        spaceBetween: spaceBetween.large,
                    },
                }}
                onSlideChange={swiper => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}
                onSwiper={swiper => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}
                className={`swiper-slider ${swiperClassName}`}>
                {data.map((item, index) => (
                    <SwiperSlide key={index} className={slideClassName}>
                        {renderSlide ? renderSlide(item, index) : defaultRenderSlide(item, index)}
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons with Phosphor Icons */}
            {showNavigation && (
                <div className='swiper-navigation-wrapper'>
                    <button
                        id={prevButtonId}
                        className={`swiper-button-prev-custom ${isBeginning ? "swiper-button-disabled" : ""}`}
                        disabled={isBeginning}>
                        <i className='ph ph-caret-left'></i>
                    </button>
                    <button
                        id={nextButtonId}
                        className={`swiper-button-next-custom ${isEnd ? "swiper-button-disabled" : ""}`}
                        disabled={isEnd}>
                        <i className='ph ph-caret-right'></i>
                    </button>
                </div>
            )}

            {/* Pagination for tablet view */}
            {showPagination && (
                <div className='swiper-pagination-wrapper'>
                    {/* Pagination will be rendered by Swiper automatically */}
                </div>
            )}
        </div>
    );
};
