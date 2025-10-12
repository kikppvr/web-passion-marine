"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Thumbs } from "swiper/modules";
import Image from "next/image";
import { useId, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

export interface GalleryImage {
    src: string;
    alt: string;
    title?: string;
}

export interface GallerySliderProps {
    images: GalleryImage[];
    className?: string;
    showThumbs?: boolean;
    autoplay?: boolean;
    autoplayDelay?: number;
    showNavigation?: boolean;
    showPagination?: boolean;
    loop?: boolean;
    speed?: number;
}

export const GallerySlider = ({
    images,
    className = "",
    showThumbs = true,
    autoplay = false,
    autoplayDelay = 3000,
    showNavigation = true,
    showPagination = true,
    loop = true,
    speed = 1000,
}: GallerySliderProps) => {
    const uniqueId = useId();
    const nextButtonId = `gallery-button-next-${uniqueId}`;
    const prevButtonId = `gallery-button-prev-${uniqueId}`;

    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return (
        <div className={`gallery-slider ${className}`}>
            {/* Main Gallery */}
            <div className='gallery-slider__main'>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, Thumbs]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={loop}
                    speed={speed}
                    navigation={{
                        nextEl: `#${nextButtonId}`,
                        prevEl: `#${prevButtonId}`,
                    }}
                    pagination={showPagination ? { clickable: true } : false}
                    autoplay={
                        autoplay
                            ? {
                                  delay: autoplayDelay,
                                  disableOnInteraction: false,
                              }
                            : false
                    }
                    thumbs={{ swiper: thumbsSwiper }}
                    className='gallery-slider__swiper'>
                    {images.map((image, index) => (
                        <SwiperSlide key={index} className='gallery-slider__slide'>
                            <div className='gallery-slider__image-container'>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className='gallery-slider__image'
                                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                />
                                {image.title && (
                                    <div className='gallery-slider__title'>
                                        <h3>{image.title}</h3>
                                    </div>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Buttons */}
                {showNavigation && (
                    <>
                        <button
                            id={nextButtonId}
                            className='gallery-slider__nav gallery-slider__nav--next'
                            aria-label='Next image'>
                            <i className='ph-light ph-caret-right'></i>
                        </button>
                        <button
                            id={prevButtonId}
                            className='gallery-slider__nav gallery-slider__nav--prev'
                            aria-label='Previous image'>
                            <i className='ph-light ph-caret-left'></i>
                        </button>
                    </>
                )}
            </div>

            {/* Thumbnail Gallery */}
            {showThumbs && images.length > 1 && (
                <div className='gallery-slider__thumbs'>
                    <Swiper
                        modules={[Thumbs]}
                        spaceBetween={8}
                        slidesPerView='auto'
                        watchSlidesProgress
                        onSwiper={setThumbsSwiper}
                        className='gallery-slider__thumbs-swiper'>
                        {images.map((image, index) => (
                            <SwiperSlide key={index} className='gallery-slider__thumb-slide'>
                                <div className='gallery-slider__thumb-container'>
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className='gallery-slider__thumb-image'
                                        sizes='80px'
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </div>
    );
};
