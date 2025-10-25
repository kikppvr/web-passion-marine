"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/ui/layout/MainLayout";
import "@/styles/page/news/news-detail.scss";
import { PrimaryButton } from "@/components/ui/button/PrimaryButton";
import { NewsCard } from "@/components/ui/cards";
import SocialIcons from "@/components/ui/social/SocialIcons";
import newsDetailDataJson from "@/data/news-detail-data.json";

interface NewsDetailData {
    id: string;
    title: string;
    description: string;
    category: string;
    date: string;
    author: string;
    mainImage: string;
    gallery: Array<{
        src: string;
        alt: string;
    }>;
    content: string[];
    relatedNews?: Array<{
        id: string;
        title: string;
        description: string;
        image: string;
        date: string;
        category: string;
        href: string;
    }>;
}

export default function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null);

    useEffect(() => {
        params.then(setResolvedParams);
    }, [params]);

    if (!resolvedParams) {
        return <div>Loading...</div>;
    }

    // Get news detail data from JSON file
    const newsDetail: NewsDetailData | undefined = newsDetailDataJson.newsDetails.find(
        news => news.id === resolvedParams.id
    );

    if (!newsDetail) {
        return <div>News not found</div>;
    }

    return (
        <MainLayout headerTheme='white'>
            <div className='news-detail'>
                {/* News Content Section */}
                <section className='section section--space-y portfolio-hero'>
                    <div className='container'>
                        <div className='grid gap-4 text-center lg:gap-6 lg:px-16 xl:px-28'>
                            <h1 className='text-h1 text-[var(--blue-500)]'>{newsDetail.title}</h1>
                            <p className='text-body lg:text-lead-2 text-[var(--grey-600)]'>
                                {newsDetail.date}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Image and Gallery */}
                <section className='section news-gallery'>
                    <div className='container'>
                        <div className='news-gallery__main'>
                            <Image
                                src={newsDetail.mainImage}
                                alt={newsDetail.title}
                                width={1110}
                                height={624}
                                className='news-gallery__main-image'
                            />
                            <div className='news-gallery__thumbnails'>
                                {newsDetail.gallery.slice(0, 4).map((image, index) => (
                                    <div key={index} className='news-gallery__thumbnail'>
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            width={254}
                                            height={191}
                                            className='news-gallery__thumbnail-image'
                                        />
                                        {index === 3 && newsDetail.gallery.length > 4 && (
                                            <div className='news-gallery__overlay'>
                                                <span className='news-gallery__count'>
                                                    {newsDetail.gallery.length - 4}+
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
                <section className='section section--space-none news-content'>
                    <div className='container'>
                        <div className='text-center lg:px-16 xl:px-28'>
                            {newsDetail.content.map((paragraph, index) => (
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
                <section className='section section--space-y'>
                    <div className='container'>
                        <div className='flex items-center justify-between lg:px-16 xl:px-28'>
                            <PrimaryButton theme='revert' onClick={() => window.history.back()}>
                                Back
                            </PrimaryButton>
                            <SocialIcons
                                showLabel={true}
                                showIcons={{
                                    facebook: true,
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
