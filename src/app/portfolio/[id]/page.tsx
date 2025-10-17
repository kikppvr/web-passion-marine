"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/ui/layout/MainLayout";
import { PrimaryButton } from "@/components/ui/button/PrimaryButton";
import { PortfolioCard } from "@/components/ui/cards/PortfolioCard";
import SocialIcons from "@/components/ui/social/SocialIcons";
import portfolioDetailDataJson from "@/data/portfolio-detail-data.json";

interface PortfolioDetailData {
    id: string;
    title: string;
    description: string;
    model: string;
    brandLogos: string[];
    mainImage: string;
    gallery: Array<{
        src: string;
        alt: string;
    }>;
    content: string[];
    servicesProvided: Array<{
        title: string;
        icon: string;
    }>;
    otherPortfolios: Array<{
        id: string;
        title: string;
        model: string;
        image: string;
        brandLogos: string[];
        href: string;
    }>;
}

export default function PortfolioDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null);

    useEffect(() => {
        params.then(setResolvedParams);
    }, [params]);

    if (!resolvedParams) {
        return <div>Loading...</div>;
    }

    // Get portfolio detail data from JSON file
    const portfolioDetailData: PortfolioDetailData =
        portfolioDetailDataJson.portfolioDetails.find(
            portfolio => portfolio.id === resolvedParams.id
        ) || portfolioDetailDataJson.portfolioDetails[0];

    return (
        <MainLayout headerTheme='white'>
            <div className='portfolio-detail-page'>
                {/* Hero Section */}
                <section className='section section--space-y'>
                    <div className='container'>
                        <div className='portfolio-detail-hero'>
                            <h1 className='portfolio-detail-hero__title'>
                                {portfolioDetailData.title}
                            </h1>
                            <p className='portfolio-detail-hero__description'>
                                {portfolioDetailData.description}
                            </p>
                            <div className='portfolio-detail-hero__model'>
                                <p className='portfolio-detail-hero__model-text'>
                                    Model: {portfolioDetailData.model}
                                </p>
                                <div className='portfolio-detail-hero__brands'>
                                    {portfolioDetailData.brandLogos.map((logo, index) => (
                                        <div
                                            key={index}
                                            className='portfolio-detail-hero__brand-logo'>
                                            <Image
                                                src={logo}
                                                alt={`Brand ${index + 1}`}
                                                width={139}
                                                height={37}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Image and Gallery */}
                <section className='section py-[64px]'>
                    <div className='container'>
                        <div className='portfolio-detail-gallery'>
                            <div className='portfolio-detail-gallery__main'>
                                <Image
                                    src={portfolioDetailData.mainImage}
                                    alt={portfolioDetailData.title}
                                    width={1110}
                                    height={624}
                                    className='portfolio-detail-gallery__main-image'
                                />
                            </div>
                            <div className='portfolio-detail-gallery__thumbnails'>
                                {portfolioDetailData.gallery.map((image, index) => (
                                    <div
                                        key={index}
                                        className='portfolio-detail-gallery__thumbnail'>
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            width={254}
                                            height={191}
                                            className='portfolio-detail-gallery__thumbnail-image'
                                        />
                                        {index === 3 && (
                                            <div className='portfolio-detail-gallery__overlay'>
                                                <span className='portfolio-detail-gallery__count'>
                                                    8+
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className='section section--space-bottom'>
                    <div className='container'>
                        <div className='portfolio-detail-content'>
                            {portfolioDetailData.content.map((paragraph, index) => (
                                <p key={index} className='portfolio-detail-content__paragraph'>
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Back Button and Social Sharing */}
                <section className='section'>
                    <div className='container'>
                        <div className='portfolio-actions'>
                            <PrimaryButton
                                theme='revert'
                                onClick={() => window.history.back()}
                                className='portfolio-actions__back'>
                                Back
                            </PrimaryButton>
                            <SocialIcons />
                        </div>
                    </div>
                </section>

                {/* Services Provided Section */}
                <section className='section section--space-y'>
                    <div className='container'>
                        <div className='portfolio-services'>
                            <h2 className='portfolio-services__title'>Services provided</h2>
                            <div className='portfolio-services__grid'>
                                {portfolioDetailData.servicesProvided.map((service, index) => (
                                    <div key={index} className='portfolio-services__item'>
                                        <div className='portfolio-services__icon'>
                                            <Image
                                                src={service.icon}
                                                alt={service.title}
                                                width={62}
                                                height={62}
                                            />
                                        </div>
                                        <h3 className='portfolio-services__item-title'>
                                            {service.title}
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Other Portfolio Section */}
                <section className='section section--space-y bg-blue-abstract'>
                    <div className='container'>
                        <div className='portfolio-other'>
                            <h2 className='portfolio-other__title'>Other portfolio</h2>
                            <div className='portfolio-other__grid'>
                                {portfolioDetailData.otherPortfolios.map(portfolio => (
                                    <PortfolioCard
                                        key={portfolio.id}
                                        title={portfolio.title}
                                        model={portfolio.model}
                                        image={portfolio.image}
                                        brandLogos={portfolio.brandLogos}
                                        href={portfolio.href}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
