"use client";

import { useState } from "react";
import MainLayout from "@/components/ui/layout/MainLayout";
import "@/styles/page/news.scss";
import { NewsCard } from "@/components/ui/cards";
import Pagination from "@/components/ui/navigation/Pagination";
import newsData from "@/data/news-data.json";

interface NewsData {
    id: string;
    title: string;
    description: string;
    image: string;
    date: string;
    category: string;
    href: string;
}

export default function NewsPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const bannerProps = {
        title: "News & Activity",
        backgroundImage: "/images/banner/news.webp",
        breadcrumbItems: [{ label: "Homepage", href: "/" }, { label: "News & Activity" }],
    };

    // Get news data from JSON file
    const news: NewsData[] = newsData.news;

    const totalPages = Math.ceil(news.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentNews = news.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <MainLayout bannerType='large' bannerProps={bannerProps}>
            <div className='news'>
                <section className='section section--space-y'>
                    <div className='container'>
                        <div className='news__grid'>
                            {currentNews.map(news => (
                                <NewsCard
                                    key={news.id}
                                    title={news.title}
                                    description={news.description}
                                    image={news.image}
                                    date={news.date}
                                    category={news.category}
                                    href={news.href}
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
