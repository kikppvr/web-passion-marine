"use client";

import { useMemo } from "react";
import { BookNowButton } from "@/components/ui/button/BookNowButton";

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

            <div className='charter-pricing__cards'>
                {pricingCards.map(card => renderCard(card))}
            </div>
        </div>
    );
}
