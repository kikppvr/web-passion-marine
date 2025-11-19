"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/ui/layout/MainLayout";
import { BookNowButton } from "@/components/ui/button/BookNowButton";
import { PrimaryButton } from "@/components/ui/button/PrimaryButton";
import CharterSpecificationsSlider from "@/components/ui/charter/CharterSpecificationsSlider";
import CharterTestimonialsSlider from "@/components/ui/charter/CharterTestimonialsSlider";
import PricingSlider from "@/components/ui/charter/PricingSlider";
import SocialIcons from "@/components/ui/social/SocialIcons";
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
            <div className='charter-detail'>
                {/* Hero Section */}
                <section className='section section--space-y'>
                    <div className='container'>
                        <div className='charter-detail__hero'>
                            <h1 className='charter-detail__hero-title'>{charterData.title}</h1>
                            <p className='charter-detail__hero-description'>
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
                        <PricingSlider pricing={charterData.pricing} onBookNow={handleBookNow} />
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
                        <div className='charter-detail__actions'>
                            <PrimaryButton
                                theme='revert'
                                onClick={() => window.history.back()}
                                className='charter-detail__actions-back'>
                                Back
                            </PrimaryButton>
                            <SocialIcons
                                showLabel={true}
                                showIcons={{
                                    facebook: false,
                                    instagram: true,
                                    line: true,
                                    link: true,
                                }}
                            />
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
