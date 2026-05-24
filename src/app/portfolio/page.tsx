"use client";

import { useState, useEffect, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import MainLayout from "@/components/ui/layout/MainLayout";
import { PortfolioCard } from "@/components/ui/cards/PortfolioCard";
import Pagination from "@/components/ui/navigation/Pagination";
import {
    fetchRawPortfolios,
    derivePortfolioItem,
    DEFAULT_PORTFOLIOS,
    type RawPortfolioItem,
    type PortfolioItem,
} from "@/lib/directus";

export default function PortfolioPage() {
    const { language } = useLanguage();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;
    const [rawData, setRawData] = useState<RawPortfolioItem[] | null>(null);

    const bannerProps = {
        title: "Portfolio",
        backgroundImage: "/images/banner/portfolio.webp",
        breadcrumbItems: [{ label: "Homepage", href: "/" }, { label: "Portfolio" }],
    };

    useEffect(() => {
        fetchRawPortfolios().then(setRawData);
    }, []);

    const portfolios: PortfolioItem[] = useMemo(
        () => (rawData ? rawData.map(p => derivePortfolioItem(p, language)) : DEFAULT_PORTFOLIOS),
        [rawData, language]
    );

    const totalPages = Math.ceil(portfolios.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPortfolios = portfolios.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <MainLayout bannerType='large' bannerProps={bannerProps}>
            <div className='portfolio'>
                <section className='section section--space-y'>
                    <div className='container'>
                        <div className='portfolio__grid'>
                            {currentPortfolios.map(portfolio => (
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
                        <div className='portfolio__pagination'>
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
