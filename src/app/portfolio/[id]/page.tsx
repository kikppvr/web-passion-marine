"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/ui/layout/MainLayout";
import { PrimaryButton } from "@/components/ui/button/PrimaryButton";
import { PortfolioCard } from "@/components/ui/cards/PortfolioCard";
import { ServicesSwiper } from "@/components/ui/portfolio/ServicesSwiper";
import SocialIcons from "@/components/ui/social/SocialIcons";
import { GalleryWithThumbnails, SwiperSlider } from "@/components/ui/media";
import { SwiperSlideData } from "@/components/ui/media/SwiperSlider";
import portfolioDetailDataJson from "@/data/portfolio-detail-data.json";
import portfolioDataJson from "@/data/portfolio-data.json";

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
    content: string | string[];
    servicesProvided: Array<{
        title: string;
        image: string;
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

    // Get other portfolios (excluding current one)
    const otherPortfolios = portfolioDataJson.portfolios
        .filter(portfolio => portfolio.id !== resolvedParams.id)
        .slice(0, 3);

    return (
        <MainLayout headerTheme='white'>
            <div className='portfolio-detail'>
                {/* Hero Section */}
                <section className='section section--space-y portfolio-hero'>
                    <div className='container'>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-12 text-center xl:col-span-10 xl:col-start-2'>
                                <h1 className='text-h1 mb-4 text-[var(--blue-500)] xl:mb-6'>
                                    {portfolioDetailData.title}
                                </h1>
                                <p className='text-body lg:text-lead-2 mb-4 text-[var(--grey-600)] xl:mb-6'>
                                    {portfolioDetailData.description}
                                </p>

                                <div className='text-h6 mb-4 font-semibold text-[var(--blue-500)] xl:mb-6'>
                                    Model: {portfolioDetailData.model}
                                </div>
                                <div className='flex justify-center gap-4'>
                                    {portfolioDetailData.brandLogos.map((logo, index) => (
                                        <div key={index} className=''>
                                            <Image
                                                src={logo}
                                                alt={`Brand ${index + 1}`}
                                                width={100}
                                                height={37}
                                                className='portfolio-hero__brand-logo'
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* <div className='grid gap-4 text-center lg:gap-6 lg:px-16 xl:px-28'>
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
                                            width={100}
                                            height={37}
                                            className='portfolio-hero__brand-logo'
                                        />
                                    </div>
                                ))}
                            </div>
                        </div> */}
                    </div>
                </section>

                {/* Main Image and Gallery */}
                <section className='section portfolio-gallery'>
                    <div className='container'>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-12 xl:col-span-10 xl:col-start-2'>
                                <GalleryWithThumbnails
                                    mainImage={portfolioDetailData.mainImage}
                                    mainImageAlt={portfolioDetailData.title}
                                    gallery={portfolioDetailData.gallery}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className='section section--space-bottom portfolio-content'>
                    <div className='container'>
                        <div className='text-center lg:px-16 xl:px-28'>
                            {typeof portfolioDetailData.content === "string" ? (
                                <div
                                    className='portfolio-content'
                                    dangerouslySetInnerHTML={{
                                        __html: portfolioDetailData.content,
                                    }}
                                />
                            ) : (
                                <div className='portfolio-content'>
                                    {portfolioDetailData.content.map((item, index) => {
                                        // Check if item contains HTML tags
                                        const hasHTML = /<[^>]+>/.test(item);
                                        return hasHTML ? (
                                            <div
                                                key={index}
                                                dangerouslySetInnerHTML={{ __html: item }}
                                            />
                                        ) : (
                                            <p
                                                key={index}
                                                className='text-body text-[var(--grey-800)]'>
                                                {item}
                                            </p>
                                        );
                                    })}
                                </div>
                            )}
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
                            <SocialIcons
                                showLabel={true}
                                shareUrl={typeof window !== "undefined" ? window.location.href : ""}
                                shareText={portfolioDetailData.title}
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

                {/* Services Provided Section */}
                <section className='section section--space-y portfolio-services'>
                    <div className='container'>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-12 xl:col-span-10 xl:col-start-2'>
                                <h2 className='text-h2 mb-8 text-[var(--blue-500)]'>
                                    Services provided
                                </h2>
                                <div className='portfolio-services__swiper'>
                                    <ServicesSwiper
                                        services={portfolioDetailData.servicesProvided}
                                        autoplay={false}
                                        showNavigation={true}
                                        showPagination={true}
                                        loop={false}
                                        speed={500}
                                        slidesPerView={{
                                            mobile: 1.5,
                                            tablet: 3,
                                            laptop: 4,
                                            desktop: 4,
                                            large: 4,
                                        }}
                                        spaceBetween={{
                                            mobile: 16,
                                            tablet: 16,
                                            laptop: 16,
                                            desktop: 32,
                                            large: 32,
                                        }}
                                        slidesPerGroup={{
                                            mobile: 1,
                                            tablet: 3,
                                            laptop: 4,
                                            desktop: 4,
                                            large: 4,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Other Portfolio Section */}
                {otherPortfolios.length > 0 && (
                    <section className='section section--space-y bg-blue-abstract portfolio-related'>
                        <div className='container'>
                            <div className='grid grid-cols-12'>
                                <div className='col-span-12'>
                                    <h2 className='text-h2 mb-8 text-[var(--blue-500)]'>
                                        Other portfolio
                                    </h2>

                                    {/* Grid for Desktop (lg and above) */}
                                    {/* <div className='hidden grid-cols-1 gap-6 md:grid-cols-2 lg:grid lg:grid-cols-3'>
                                        {otherPortfolios.map(portfolio => (
                                            <PortfolioCard
                                                key={portfolio.id}
                                                title={portfolio.title}
                                                model={portfolio.model}
                                                image={portfolio.image}
                                                brandLogos={portfolio.brandLogos}
                                                href={portfolio.href}
                                            />
                                        ))}
                                    </div> */}

                                    {/* Slider for Tablet and Mobile */}
                                    <div className='portfolio-services__swiper'>
                                        <SwiperSlider
                                            data={otherPortfolios.map(
                                                portfolio =>
                                                    ({
                                                        title: portfolio.title,
                                                        model: portfolio.model,
                                                        image: portfolio.image,
                                                        brandLogos: portfolio.brandLogos,
                                                        href: portfolio.href,
                                                        video: "",
                                                    }) as SwiperSlideData
                                            )}
                                            cardComponent={PortfolioCard}
                                            className='portfolio-related-swiper'
                                            autoplay={false}
                                            showNavigation={true}
                                            showPagination={true}
                                            loop={false}
                                            speed={500}
                                            slidesPerView={{
                                                mobile: 1.2,
                                                tablet: 2,
                                                laptop: 2,
                                                desktop: 3,
                                                large: 3,
                                            }}
                                            spaceBetween={{
                                                mobile: 16,
                                                tablet: 16,
                                                laptop: 16,
                                                desktop: 32,
                                                large: 32,
                                            }}
                                            slidesPerGroup={{
                                                mobile: 1,
                                                tablet: 2,
                                                laptop: 2,
                                                desktop: 3,
                                                large: 3,
                                            }}
                                            prevIcon={<i className='ph ph-arrow-left'></i>}
                                            nextIcon={<i className='ph ph-arrow-right'></i>}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </MainLayout>
    );
}
