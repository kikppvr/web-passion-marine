"use client";

import { useState, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import MainLayout from "@/components/ui/layout/MainLayout";
import { PrimaryButton } from "@/components/ui/button/PrimaryButton";
import { PortfolioCard } from "@/components/ui/cards/PortfolioCard";
import { ServicesSwiper } from "@/components/ui/portfolio/ServicesSwiper";
import SocialIcons from "@/components/ui/social/SocialIcons";
import { SwiperSlider } from "@/components/ui/media";
import { SwiperSlideData } from "@/components/ui/media/SwiperSlider";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n";
import { DetailPageSkeleton } from "@/components/ui/skeleton";
import {
    fetchRawPortfolios,
    derivePortfolioDetail,
    type RawPortfolioItem,
    type PortfolioDetailItem,
} from "@/lib/directus";

const LightGallery = dynamic(
    () => import("@/components/ui/media").then(mod => ({ default: mod.LightGallery })),
    { ssr: false }
);

export default function PortfolioDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { language } = useLanguage();
    const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null);
    const [rawData, setRawData] = useState<RawPortfolioItem[] | null>(null);

    useEffect(() => {
        params.then(setResolvedParams);
        fetchRawPortfolios().then(setRawData);
    }, [params]);

    const portfolioDetailData: PortfolioDetailItem | null = useMemo(() => {
        if (!resolvedParams || !rawData) return null;
        const rawItem = rawData.find(p => String(p.id) === resolvedParams.id) ?? rawData[0];
        if (!rawItem) return null;
        return derivePortfolioDetail(rawItem, rawData, language);
    }, [resolvedParams, rawData, language]);

    const t = useTranslation();

    const isLoading = !resolvedParams || rawData === null;

    if (isLoading) {
        return (
            <MainLayout headerTheme='white'>
                <DetailPageSkeleton />
            </MainLayout>
        );
    }

    if (!portfolioDetailData) {
        return (
            <MainLayout headerTheme='white'>
                <div className='container py-16 text-center'>
                    {language === "th" ? "ไม่พบผลงาน" : "Portfolio not found"}
                </div>
            </MainLayout>
        );
    }

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
                                    {t.pages.portfolio.model} {portfolioDetailData.model}
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
                    </div>
                </section>

                {/* Main Image and Gallery */}
                <section className='section portfolio-gallery'>
                    <div className='container'>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-12 xl:col-span-10 xl:col-start-2'>
                                <LightGallery
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
                            <div
                                className='portfolio-content'
                                dangerouslySetInnerHTML={{ __html: portfolioDetailData.content }}
                            />
                        </div>
                    </div>
                </section>

                {/* Back Button and Social Sharing */}
                <section className='section'>
                    <div className='container'>
                        <div className='flex items-center justify-between lg:px-16 xl:px-28'>
                            <PrimaryButton theme='revert' onClick={() => window.history.back()}>
                                {t.common.back}
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
                                    {t.pages.portfolio.servicesProvided}
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
                {portfolioDetailData.otherPortfolios.length > 0 && (
                    <section className='section section--space-y bg-blue-abstract portfolio-related'>
                        <div className='container'>
                            <div className='grid grid-cols-12'>
                                <div className='col-span-12'>
                                    <h2 className='text-h2 mb-8 text-[var(--blue-500)]'>
                                        {t.pages.portfolio.otherPortfolio}
                                    </h2>

                                    <div className='portfolio-services__swiper'>
                                        <SwiperSlider
                                            data={portfolioDetailData.otherPortfolios.map(
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
                                                laptop: 3,
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
                                                laptop: 3,
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
