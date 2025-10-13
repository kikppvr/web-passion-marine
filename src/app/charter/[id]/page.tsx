"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/ui/layout/MainLayout";
import { BookNowButton } from "@/components/ui/button/BookNowButton";
import CharterSpecificationsSlider from "@/components/ui/charter/CharterSpecificationsSlider";
import CharterTestimonialsSlider from "@/components/ui/charter/CharterTestimonialsSlider";
import charterDataJson from "@/data/charter-data.json";

interface ImageData {
    src: string;
    alt: string;
    specifications: {
        type: string;
        length: string;
        cabins: string;
        restrooms: string;
        passengerCapacity: string;
        speed: string;
    };
}

interface CharterDetailData {
    id: string;
    title: string;
    description: string;
    mainImage: string;
    specifications: {
        type: string;
        length: string;
        cabins: string;
        restrooms: string;
        passengerCapacity: string;
        speed: string;
    };
    pricing: {
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
    };
    testimonials: Array<{
        name: string;
        avatar: string;
        review: string;
    }>;
    gallery: ImageData[];
}

export default function CharterDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null);

    useEffect(() => {
        params.then(setResolvedParams);
    }, [params]);

    if (!resolvedParams) {
        return <div>Loading...</div>;
    }

    // Get charter data from JSON file - in real app, fetch based on params.id
    const charterData: CharterDetailData =
        charterDataJson.charters.find(charter => charter.id === resolvedParams.id) ||
        charterDataJson.charters[0];

    const handleBookNow = (type: string) => {
        console.log(`Booking ${type} for charter ${charterData.id}`);
        // Add booking logic here
    };

    return (
        <MainLayout headerTheme='white'>
            <div className='charter-detail-page'>
                {/* Hero Section */}
                <section className='section section--space-y'>
                    <div className='container'>
                        <div className='charter-detail-hero'>
                            <h1 className='charter-detail-hero__title'>{charterData.title}</h1>
                            <p className='charter-detail-hero__description'>
                                {charterData.description}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Boat Specifications Slider */}
                <section className='section section--space-bottom'>
                    {/* <div className='container'> */}
                    <CharterSpecificationsSlider
                        mainImage={charterData.mainImage}
                        title={charterData.title}
                        specifications={charterData.specifications}
                        gallery={charterData.gallery}
                    />
                    {/* </div> */}
                </section>

                {/* Pricing Section */}
                <section className='section section--space-top bg-blue-abstract'>
                    <div className='container'>
                        <div className='charter-pricing'>
                            <h2 className='charter-pricing__title'>Boat Rental Rates</h2>
                            <div className='charter-pricing__cards'>
                                {/* Hourly Rate */}
                                <div className='charter-pricing__card'>
                                    <div className='charter-pricing__card-header'>
                                        <h3 className='charter-pricing__card-title'>Hourly Rate</h3>
                                    </div>
                                    <div className='charter-pricing__card-price'>
                                        <span className='charter-pricing__card-amount'>
                                            {charterData.pricing.hourly.price.toLocaleString()}
                                        </span>
                                        <span className='charter-pricing__card-currency'>THB</span>
                                    </div>
                                    <div className='charter-pricing__card-details'>
                                        <div className='charter-pricing__card-detail'>
                                            <span className='charter-pricing__card-detail-label'>
                                                Duration:
                                            </span>
                                            <span className='charter-pricing__card-detail-value'>
                                                {charterData.pricing.hourly.duration}
                                            </span>
                                        </div>
                                        <div className='charter-pricing__card-detail'>
                                            <span className='charter-pricing__card-detail-label'>
                                                Boarding/Disembarkation Point:
                                            </span>
                                            <span className='charter-pricing__card-detail-value'>
                                                {charterData.pricing.hourly.boardingPoint}
                                            </span>
                                        </div>
                                        <div className='charter-pricing__card-detail'>
                                            <span className='charter-pricing__card-detail-label'>
                                                Route:
                                            </span>
                                            <span className='charter-pricing__card-detail-value'>
                                                {charterData.pricing.hourly.route}
                                            </span>
                                        </div>
                                    </div>
                                    <BookNowButton onClick={() => handleBookNow("hourly")}>
                                        Book Now
                                    </BookNowButton>
                                </div>

                                {/* Half-day Rate */}
                                <div className='charter-pricing__card'>
                                    <div className='charter-pricing__card-header'>
                                        <h3 className='charter-pricing__card-title'>
                                            Half-day Charters
                                        </h3>
                                    </div>
                                    <div className='charter-pricing__card-price'>
                                        <span className='charter-pricing__card-amount'>
                                            {charterData.pricing.halfDay.price.toLocaleString()}
                                        </span>
                                        <span className='charter-pricing__card-currency'>THB</span>
                                    </div>
                                    <div className='charter-pricing__card-details'>
                                        <div className='charter-pricing__card-detail'>
                                            <span className='charter-pricing__card-detail-label'>
                                                Duration:
                                            </span>
                                            <span className='charter-pricing__card-detail-value'>
                                                {charterData.pricing.halfDay.duration}
                                            </span>
                                        </div>
                                        <div className='charter-pricing__card-detail'>
                                            <span className='charter-pricing__card-detail-label'>
                                                Boarding/Disembarkation Point:
                                            </span>
                                            <span className='charter-pricing__card-detail-value'>
                                                {charterData.pricing.halfDay.boardingPoint}
                                            </span>
                                        </div>
                                        <div className='charter-pricing__card-detail'>
                                            <span className='charter-pricing__card-detail-label'>
                                                Route:
                                            </span>
                                            <span className='charter-pricing__card-detail-value'>
                                                {charterData.pricing.halfDay.route}
                                            </span>
                                        </div>
                                    </div>
                                    <BookNowButton onClick={() => handleBookNow("half-day")}>
                                        Book Now
                                    </BookNowButton>
                                </div>

                                {/* Full-day Rate */}
                                <div className='charter-pricing__card'>
                                    <div className='charter-pricing__card-header'>
                                        <h3 className='charter-pricing__card-title'>
                                            Full-day Charters
                                        </h3>
                                    </div>
                                    <div className='charter-pricing__card-price'>
                                        <span className='charter-pricing__card-amount'>
                                            {charterData.pricing.fullDay.price.toLocaleString()}
                                        </span>
                                        <span className='charter-pricing__card-currency'>THB</span>
                                    </div>
                                    <div className='charter-pricing__card-details'>
                                        <div className='charter-pricing__card-detail'>
                                            <span className='charter-pricing__card-detail-label'>
                                                Duration:
                                            </span>
                                            <span className='charter-pricing__card-detail-value'>
                                                {charterData.pricing.fullDay.duration}
                                            </span>
                                        </div>
                                        <div className='charter-pricing__card-detail'>
                                            <span className='charter-pricing__card-detail-label'>
                                                Boarding/Disembarkation Point:
                                            </span>
                                            <span className='charter-pricing__card-detail-value'>
                                                {charterData.pricing.fullDay.boardingPoint}
                                            </span>
                                        </div>
                                        <div className='charter-pricing__card-detail'>
                                            <span className='charter-pricing__card-detail-label'>
                                                Route:
                                            </span>
                                            <span className='charter-pricing__card-detail-value'>
                                                {charterData.pricing.fullDay.route}
                                            </span>
                                        </div>
                                    </div>
                                    <BookNowButton onClick={() => handleBookNow("full-day")}>
                                        Book Now
                                    </BookNowButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className='section pt-[64px]'>
                    <div className='container'>
                        <CharterTestimonialsSlider testimonials={charterData.testimonials} />
                    </div>
                </section>

                {/* Back Button and Social Sharing */}
                <section className='section py-[64px]'>
                    <div className='container'>
                        <div className='charter-actions'>
                            <Link href='/charter' className='charter-actions__back'>
                                <svg width='30' height='30' viewBox='0 0 30 30' fill='none'>
                                    <circle cx='15' cy='15' r='15' fill='#1c4583' />
                                    <path
                                        d='M18 10L12 15L18 20'
                                        stroke='white'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </svg>
                                <span>Back</span>
                            </Link>
                            <div className='charter-actions__social'>
                                <span className='charter-actions__social-label'>Share</span>
                                <div className='charter-actions__social-icons'>
                                    <a href='#' className='charter-actions__social-icon'>
                                        <Image
                                            src='/images/icon/ic-facebook.svg'
                                            alt='Facebook'
                                            width={24}
                                            height={24}
                                        />
                                    </a>
                                    <a href='#' className='charter-actions__social-icon'>
                                        <Image
                                            src='/images/icon/ic-instagram.svg'
                                            alt='Instagram'
                                            width={24}
                                            height={24}
                                        />
                                    </a>
                                    <a href='#' className='charter-actions__social-icon'>
                                        <Image
                                            src='/images/icon/ic-line.svg'
                                            alt='Line'
                                            width={24}
                                            height={24}
                                        />
                                    </a>
                                    <a href='#' className='charter-actions__social-icon'>
                                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
                                            <circle cx='12' cy='12' r='12' fill='#656567' />
                                            <path
                                                d='M16 8L8 16M8 8L16 16'
                                                stroke='white'
                                                strokeWidth='2'
                                                strokeLinecap='round'
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
