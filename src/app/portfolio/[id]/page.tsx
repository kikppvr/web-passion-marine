"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/ui/layout/MainLayout";
import { PrimaryButton } from "@/components/ui/button/PrimaryButton";
import { PortfolioCard } from "@/components/ui/cards/PortfolioCard";
import { GallerySlider } from "@/components/ui/media/GallerySlider";
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
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

    const handleImageClick = (index: number) => {
        setCurrentImageIndex(index);
        setIsGalleryOpen(true);
    };

    const handleCloseGallery = () => {
        setIsGalleryOpen(false);
    };

    return (
        <MainLayout headerTheme='white'>
            <div className='portfolio-detail-page'>
                {/* Hero Section */}
                <section className='section section--space-y'>
                    <div className='container'>
                        <div className='grid gap-4 text-center lg:gap-6 lg:px-16 xl:px-28'>
                            <h1 className='text-h1 text-[var(--blue-500)]'>
                                {portfolioDetailData.title}
                            </h1>
                            <p className='text-body lg:text-lead-2 text-[var(--grey-600)]'>
                                {portfolioDetailData.description}
                            </p>

                            <div className='text-h6 font-semibold text-[var(--blue-500)]'>
                                Model: {portfolioDetailData.model}
                            </div>
                            <div className='flex justify-center gap-4'>
                                {portfolioDetailData.brandLogos.map((logo, index) => (
                                    <div key={index} className=''>
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
                </section>

                {/* Main Image and Gallery */}
                <section className='section py-[48px] lg:py-[64px]'>
                    <div className='container'>
                        <div className='portfolio-detail-gallery'>
                            <div className='portfolio-detail-gallery-main'>
                                <Image
                                    src={portfolioDetailData.mainImage}
                                    alt={portfolioDetailData.title}
                                    width={1110}
                                    height={624}
                                    className='portfolio-detail-gallery-main-image'
                                    onClick={() => handleImageClick(0)}
                                />
                            </div>
                            <div className='portfolio-detail-gallery-thumbnails'>
                                {portfolioDetailData.gallery.slice(0, 4).map((image, index) => (
                                    <div
                                        key={index}
                                        className='portfolio-detail-gallery-thumbnail'
                                        onClick={() => handleImageClick(index)}>
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            width={254}
                                            height={191}
                                            className='portfolio-detail-gallery-thumbnail-image'
                                        />
                                        {index === 3 && portfolioDetailData.gallery.length > 4 && (
                                            <div className='portfolio-detail-gallery-overlay'>
                                                <span className='portfolio-detail-gallery-count'>
                                                    {portfolioDetailData.gallery.length - 4}+
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
                        <div className='text-center lg:px-16 xl:px-28'>
                            {portfolioDetailData.content.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className='text-body mb-4 text-[var(--grey-800)] last:mb-0'>
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Back Button and Social Sharing */}
                <section className='section'>
                    <div className='container'>
                        <div className='flex items-center justify-between lg:px-16 xl:px-28'>
                            <PrimaryButton theme='revert' onClick={() => window.history.back()}>
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
                            <h2 className='portfolio-services-title'>Services provided</h2>
                            <div className='portfolio-services-grid'>
                                {portfolioDetailData.servicesProvided.map((service, index) => (
                                    <div key={index} className='portfolio-services-item'>
                                        <div className='portfolio-services-icon'>
                                            <Image
                                                src={service.icon}
                                                alt={service.title}
                                                width={62}
                                                height={62}
                                            />
                                        </div>
                                        <h3 className='portfolio-services-item-title'>
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
                        <div className=''>
                            <h2 className='text-h2 mb-8 text-[var(--blue-500)]'>Other portfolio</h2>
                            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
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

            {/* Gallery Modal */}
            {isGalleryOpen && (
                <div className='portfolio-gallery-modal' onClick={handleCloseGallery}>
                    <div
                        className='portfolio-gallery-modal-content'
                        onClick={e => e.stopPropagation()}>
                        <button
                            className='portfolio-gallery-modal-close'
                            onClick={handleCloseGallery}
                            aria-label='Close gallery'>
                            <i className='ph-light ph-x'></i>
                        </button>
                        <GallerySlider
                            images={portfolioDetailData.gallery.map((image, index) => ({
                                src: image.src,
                                alt: image.alt,
                                title: index === 0 ? portfolioDetailData.title : undefined,
                            }))}
                            showThumbs={true}
                            showNavigation={true}
                            className='portfolio-gallery-modal-slider'
                            swiperClassName='portfolio-gallery-modal-main-swiper'
                            thumbsClassName='portfolio-gallery-modal-thumbs-swiper'
                        />
                    </div>
                </div>
            )}
        </MainLayout>
    );
}
