"use client";

import { useState, useEffect, useMemo } from "react";
import MainLayout from "@/components/ui/layout/MainLayout";
import "@/styles/page/news/news.scss";
import { NewsCard } from "@/components/ui/cards";
import Pagination from "@/components/ui/navigation/Pagination";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n";
import {
    fetchRawArticles,
    deriveNewsItem,
    DEFAULT_NEWS,
    type RawArticleItem,
    type NewsItem,
} from "@/lib/directus";

export default function NewsPage() {
    const { language } = useLanguage();
    const [currentPage, setCurrentPage] = useState(1);
    const [rawArticles, setRawArticles] = useState<RawArticleItem[] | null>(null);
    const itemsPerPage = 9;

    const t = useTranslation();

    const bannerProps = {
        title: t.pages.news.title,
        backgroundImage: "/images/banner/news.webp",
        breadcrumbItems: [
            { label: t.common.homepage, href: "/" },
            { label: t.pages.news.title },
        ],
    };

    useEffect(() => {
        fetchRawArticles().then(setRawArticles);
    }, []);

    const news: NewsItem[] = useMemo(
        () => (rawArticles ? rawArticles.map(item => deriveNewsItem(item, language)) : DEFAULT_NEWS),
        [rawArticles, language]
    );

    const totalPages = Math.ceil(news.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentNews = news.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <MainLayout bannerType='large' bannerProps={bannerProps}>
            <div className='news'>
                <section className='section section--space-y'>
                    <div className='container'>
                        <div className='news__grid'>
                            {currentNews.map(item => (
                                <NewsCard
                                    key={item.id}
                                    title={item.title}
                                    description={item.description}
                                    image={item.image}
                                    date={item.date}
                                    category={item.category}
                                    href={item.href}
                                    variant='default'
                                />
                            ))}
                        </div>
                        <div className='news__pagination'>
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
