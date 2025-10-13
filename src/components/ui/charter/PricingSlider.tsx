"use client";

import { useMemo, useId, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { BookNowButton } from "@/components/ui/button/BookNowButton";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface PricingData {
    hourly: {
        price: number;
        duration: string;
        boardingPoint: string;
        route: string;
    };
    halfDay: {
        price: number;
        duration: string;
        boardingPoint: string;
        route: string;
    };
    fullDay: {
        price: number;
        duration: string;
        boardingPoint: string;
        route: string;
    };
}

interface PricingSliderProps {
    pricing: PricingData;
    onBookNow: (type: string) => void;
    className?: string;
}

export default function PricingSlider({ pricing, onBookNow, className = "" }: PricingSliderProps) {
    // Generate stable unique IDs for navigation buttons
    const uniqueId = useId();
    const nextButtonId = `pricing-button-next-${uniqueId}`;
    const prevButtonId = `pricing-button-prev-${uniqueId}`;

    // State for navigation disable
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const pricingCards = useMemo(
        () => [
            {
                id: "hourly",
                title: "Hourly Rate",
                price: pricing.hourly.price,
                details: [
                    { label: "Duration:", value: pricing.hourly.duration },
                    {
                        label: "Boarding/Disembarkation Point:",
                        value: pricing.hourly.boardingPoint,
                    },
                    { label: "Route:", value: pricing.hourly.route },
                ],
            },
            {
                id: "half-day",
                title: "Half-day Charters",
                price: pricing.halfDay.price,
                details: [
                    { label: "Duration:", value: pricing.halfDay.duration },
                    {
                        label: "Boarding/Disembarkation Point:",
                        value: pricing.halfDay.boardingPoint,
                    },
                    { label: "Route:", value: pricing.halfDay.route },
                ],
            },
            {
                id: "full-day",
                title: "Full-day Charters",
                price: pricing.fullDay.price,
                details: [
                    { label: "Duration:", value: pricing.fullDay.duration },
                    {
                        label: "Boarding/Disembarkation Point:",
                        value: pricing.fullDay.boardingPoint,
                    },
                    { label: "Route:", value: pricing.fullDay.route },
                ],
            },
        ],
        [pricing]
    );

    const renderCard = (card: (typeof pricingCards)[0]) => (
        <div key={card.id} className='charter-pricing__card'>
            <div className='charter-pricing__card-header'>
                <h3 className='charter-pricing__card-title'>{card.title}</h3>
            </div>
            <div className='charter-pricing__card-price'>
                <span className='charter-pricing__card-amount'>{card.price.toLocaleString()}</span>
                <span className='charter-pricing__card-currency'>THB</span>
            </div>
            <div className='charter-pricing__card-details'>
                {card.details.map((detail, index) => (
                    <div key={index} className='charter-pricing__card-detail'>
                        <span className='charter-pricing__card-detail-label'>{detail.label}</span>
                        <span className='charter-pricing__card-detail-value'>{detail.value}</span>
                    </div>
                ))}
            </div>
            <BookNowButton onClick={() => onBookNow(card.id)}>Book Now</BookNowButton>
        </div>
    );

    return (
        <div className={`charter-pricing ${className}`}>
            <h2 className='charter-pricing__title'>Boat Rental Rates</h2>

            <div className='charter-pricing__slider'>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={24}
                    slidesPerView={3}
                    loop={false}
                    speed={1000}
                    navigation={{
                        nextEl: `#${nextButtonId}`,
                        prevEl: `#${prevButtonId}`,
                    }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 16,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 24,
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
                    className='charter-pricing__swiper'>
                    {pricingCards.map(card => (
                        <SwiperSlide key={card.id}>{renderCard(card)}</SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <div className='charter-pricing__navigation-wrapper'>
                    <button
                        id={prevButtonId}
                        className={`charter-pricing__button-prev ${isBeginning ? "charter-pricing__button-disabled" : ""}`}
                        disabled={isBeginning}>
                        <i className='ph ph-caret-left'></i>
                    </button>
                    <button
                        id={nextButtonId}
                        className={`charter-pricing__button-next ${isEnd ? "charter-pricing__button-disabled" : ""}`}
                        disabled={isEnd}>
                        <i className='ph ph-caret-right'></i>
                    </button>
                </div>

                {/* Pagination */}
                <div className='charter-pricing__pagination-wrapper'>
                    {/* Pagination will be rendered by Swiper automatically */}
                </div>
            </div>
        </div>
    );
}
