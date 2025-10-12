"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/ui/layout/MainLayout";
import { BookNowButton } from "@/components/ui/button/BookNowButton";

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
    gallery: string[];
}

export default function CharterDetailPage({ params }: { params: { id: string } }) {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    // Mock data - in real app, fetch based on params.id
    const charterData: CharterDetailData = {
        id: params.id,
        title: "Speedboats from XXXXX",
        description:
            "Lorem ipsum dolor sit amet consectetur. Ac volutpat nisi praesent nisi pulvinar velit suspendisse orci magna. In aliquet gravida velit id amet ullamcorper massa lectus morbi. Ut habitasse ut blandit blandit id at mattis ipsum urna. Ipsum eget euismod in in dapibus. Enim commodo risus sed adipiscing nisi ullamcorper.",
        mainImage: "/images/home/charter/charter-01.webp",
        specifications: {
            type: "Speedboats",
            length: "50",
            cabins: "1",
            restrooms: "0",
            passengerCapacity: "5-6",
            speed: "10",
        },
        pricing: {
            hourly: {
                price: 10000,
                duration: "1 hours",
                boardingPoint: "Tha Maharaj Pier",
                route: "Rama VIII Bridge – Asiatique",
            },
            halfDay: {
                price: 36500,
                duration: "Half-day",
                boardingPoint: "Tha Maharaj Pier",
                route: "-",
            },
            fullDay: {
                price: 60000,
                duration: "Full-day",
                boardingPoint: "Tha Maharaj Pier",
                route: "-",
            },
        },
        testimonials: [
            {
                name: "Ms.XXXX XXXXX",
                avatar: "/images/home/portfolio/review-01.webp",
                review: "Lorem ipsum dolor sit amet consectetur. Maecenas est rutrum felis risus massa a non lorem massa. Quis cum massa nec facilisis sit proin. Tincidunt donec orci amet eget elit amet morbi ultricies tortor.",
            },
            {
                name: "Mr.XXXX XXXXX",
                avatar: "/images/home/portfolio/review-02.webp",
                review: "Lorem ipsum dolor sit amet consectetur. Maecenas est rutrum felis risus massa a non lorem massa. Quis cum massa nec facilisis sit proin. Tincidunt donec orci amet eget elit amet morbi ultricies tortor.",
            },
        ],
        gallery: [
            "/images/home/charter/charter-01.webp",
            "/images/home/charter/charter-02.webp",
            "/images/home/charter/charter-03.webp",
            "/images/home/charter/charter-01.webp",
            "/images/home/charter/charter-02.webp",
            "/images/home/charter/charter-03.webp",
            "/images/home/charter/charter-01.webp",
        ],
    };

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

                {/* Boat Specifications */}
                <section className='section section--space-bottom'>
                    <div className='container'>
                        <div className='charter-specifications'>
                            <div className='charter-specifications__image'>
                                <Image
                                    src={charterData.mainImage}
                                    alt={charterData.title}
                                    width={633}
                                    height={483}
                                    className='charter-specifications__img'
                                />
                            </div>
                            <div className='charter-specifications__content'>
                                <h2 className='charter-specifications__title'>
                                    Boat Specifications
                                </h2>
                                <div className='charter-specifications__list'>
                                    <div className='charter-specifications__item'>
                                        <Image
                                            src='/images/icon/ic-passenger.svg'
                                            alt='Type'
                                            width={24}
                                            height={11}
                                            className='charter-specifications__icon'
                                        />
                                        <div className='charter-specifications__detail'>
                                            <span className='charter-specifications__label'>
                                                Type:
                                            </span>
                                            <span className='charter-specifications__value'>
                                                {charterData.specifications.type}
                                            </span>
                                        </div>
                                    </div>
                                    <div className='charter-specifications__item'>
                                        <Image
                                            src='/images/icon/ic-passenger.svg'
                                            alt='Length'
                                            width={24}
                                            height={12}
                                            className='charter-specifications__icon'
                                        />
                                        <div className='charter-specifications__detail'>
                                            <span className='charter-specifications__label'>
                                                Length (feet):
                                            </span>
                                            <span className='charter-specifications__value'>
                                                {charterData.specifications.length}
                                            </span>
                                        </div>
                                    </div>
                                    <div className='charter-specifications__item'>
                                        <Image
                                            src='/images/icon/ic-passenger.svg'
                                            alt='Cabins'
                                            width={24}
                                            height={19}
                                            className='charter-specifications__icon'
                                        />
                                        <div className='charter-specifications__detail'>
                                            <span className='charter-specifications__label'>
                                                Cabins:
                                            </span>
                                            <span className='charter-specifications__value'>
                                                {charterData.specifications.cabins}
                                            </span>
                                        </div>
                                    </div>
                                    <div className='charter-specifications__item'>
                                        <Image
                                            src='/images/icon/ic-restroom.svg'
                                            alt='Restroom'
                                            width={24}
                                            height={21}
                                            className='charter-specifications__icon'
                                        />
                                        <div className='charter-specifications__detail'>
                                            <span className='charter-specifications__label'>
                                                Restroom:
                                            </span>
                                            <span className='charter-specifications__value'>
                                                {charterData.specifications.restrooms}
                                            </span>
                                        </div>
                                    </div>
                                    <div className='charter-specifications__item'>
                                        <Image
                                            src='/images/icon/ic-passenger.svg'
                                            alt='Passenger Capacity'
                                            width={24}
                                            height={21}
                                            className='charter-specifications__icon'
                                        />
                                        <div className='charter-specifications__detail'>
                                            <span className='charter-specifications__label'>
                                                Passenger Capacity:
                                            </span>
                                            <span className='charter-specifications__value'>
                                                {charterData.specifications.passengerCapacity}
                                            </span>
                                        </div>
                                    </div>
                                    <div className='charter-specifications__item'>
                                        <Image
                                            src='/images/icon/ic-passenger.svg'
                                            alt='Speed'
                                            width={24}
                                            height={21}
                                            className='charter-specifications__icon'
                                        />
                                        <div className='charter-specifications__detail'>
                                            <span className='charter-specifications__label'>
                                                Speed (knots):
                                            </span>
                                            <span className='charter-specifications__value'>
                                                {charterData.specifications.speed}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery */}
                <section className='section section--space-bottom'>
                    <div className='container'>
                        <div className='charter-gallery'>
                            {charterData.gallery.map((image, index) => (
                                <div key={index} className='charter-gallery__item'>
                                    <Image
                                        src={image}
                                        alt={`Gallery image ${index + 1}`}
                                        width={271}
                                        height={204}
                                        className='charter-gallery__image'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section className='section section--space-y bg-blue-abstract'>
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
                <section className='section section--space-bottom'>
                    <div className='container'>
                        <div className='charter-testimonials'>
                            <h2 className='charter-testimonials__title'>Testimonials</h2>
                            <div className='charter-testimonials__content'>
                                <div className='charter-testimonials__list'>
                                    {charterData.testimonials.map((testimonial, index) => (
                                        <div key={index} className='charter-testimonials__item'>
                                            <div className='charter-testimonials__avatar'>
                                                <Image
                                                    src={testimonial.avatar}
                                                    alt={testimonial.name}
                                                    width={111}
                                                    height={111}
                                                    className='charter-testimonials__avatar-img'
                                                />
                                            </div>
                                            <div className='charter-testimonials__text'>
                                                <h3 className='charter-testimonials__name'>
                                                    {testimonial.name}
                                                </h3>
                                                <p className='charter-testimonials__review'>
                                                    {testimonial.review}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className='charter-testimonials__navigation'>
                                    <div className='charter-testimonials__dots'>
                                        <div className='charter-testimonials__dot charter-testimonials__dot--active'></div>
                                    </div>
                                    <div className='charter-testimonials__arrows'>
                                        <button className='charter-testimonials__arrow charter-testimonials__arrow--prev'>
                                            <svg
                                                width='30'
                                                height='30'
                                                viewBox='0 0 30 30'
                                                fill='none'>
                                                <circle cx='15' cy='15' r='15' fill='white' />
                                                <path
                                                    d='M18 10L12 15L18 20'
                                                    stroke='#1c4583'
                                                    strokeWidth='2'
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                />
                                            </svg>
                                        </button>
                                        <button className='charter-testimonials__arrow charter-testimonials__arrow--next'>
                                            <svg
                                                width='30'
                                                height='30'
                                                viewBox='0 0 30 30'
                                                fill='none'>
                                                <circle cx='15' cy='15' r='15' fill='white' />
                                                <path
                                                    d='M12 10L18 15L12 20'
                                                    stroke='#1c4583'
                                                    strokeWidth='2'
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Back Button and Social Sharing */}
                <section className='section section--space-y'>
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
