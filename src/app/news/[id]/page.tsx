"use client";

import { useState, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import MainLayout from "@/components/ui/layout/MainLayout";
import "@/styles/page/news/news-detail.scss";
import { PrimaryButton } from "@/components/ui/button/PrimaryButton";
import SocialIcons from "@/components/ui/social/SocialIcons";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n";
import {
    fetchRawArticleById,
    deriveNewsDetailItem,
    type RawArticleItem,
    type NewsDetailItem,
} from "@/lib/directus";
import { DetailPageSkeleton } from "@/components/ui/skeleton";

const LightGallery = dynamic(
    () => import("@/components/ui/media").then(mod => ({ default: mod.LightGallery })),
    { ssr: false }
);

export default function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { language } = useLanguage();
    const [resolvedId, setResolvedId] = useState<string | null>(null);
    const [rawArticle, setRawArticle] = useState<RawArticleItem | null | undefined>(undefined);

    useEffect(() => {
        params.then(p => setResolvedId(p.id));
    }, [params]);

    useEffect(() => {
        if (!resolvedId) return;
        fetchRawArticleById(resolvedId).then(setRawArticle);
    }, [resolvedId]);

    const newsDetail: NewsDetailItem | null = useMemo(
        () => (rawArticle ? deriveNewsDetailItem(rawArticle, language) : null),
        [rawArticle, language]
    );

    const t = useTranslation();

    if (rawArticle === undefined || !resolvedId) {
        return (
            <MainLayout headerTheme='white'>
                <DetailPageSkeleton variant='news' />
            </MainLayout>
        );
    }

    if (!newsDetail) {
        return (
            <MainLayout headerTheme='white'>
                <div className='container py-16 text-center'>{t.pages.news.notFound}</div>
            </MainLayout>
        );
    }

    return (
        <MainLayout headerTheme='white'>
            <div className='news-detail'>
                {/* News Content Section */}
                <section className='section section--space-y portfolio-hero'>
                    <div className='container'>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-12 text-center xl:col-span-10 xl:col-start-2'>
                                <h1 className='news-detail__title mb-4 text-[var(--blue-500)] xl:mb-6'>
                                    {newsDetail.title}
                                </h1>
                                <p className='text-body lg:text-lead-2 text-[var(--grey-600)]'>
                                    {newsDetail.date}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Image and Gallery */}
                <section className='section news-gallery'>
                    <div className='container'>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-12 text-center xl:col-span-10 xl:col-start-2'>
                                <LightGallery
                                    mainImage={newsDetail.mainImage}
                                    mainImageAlt={newsDetail.title}
                                    gallery={newsDetail.gallery}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className='section section--space-none news-content'>
                    <div className='container'>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-12 text-center xl:col-span-10 xl:col-start-2'>
                                <div
                                    className='news-detail__content text-body text-[var(--grey-800)]'
                                    dangerouslySetInnerHTML={{ __html: newsDetail.content }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Back Button and Social Sharing */}
                <section className='section section--space-y'>
                    <div className='container'>
                        <div className='flex items-center justify-between lg:px-16 xl:px-28'>
                            <PrimaryButton theme='revert' onClick={() => window.history.back()}>
                                {t.common.back}
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
