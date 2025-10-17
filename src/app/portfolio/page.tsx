"use client";

import { useState } from "react";
import MainLayout from "@/components/ui/layout/MainLayout";
import { PortfolioCard } from "@/components/ui/cards/PortfolioCard";
import Pagination from "@/components/ui/navigation/Pagination";
import portfolioData from "@/data/portfolio-data.json";

interface PortfolioData {
    id: string;
    title: string;
    model: string;
    image: string;
    brandLogos: string[];
    href: string;
}

export default function PortfolioPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const bannerProps = {
        title: "Portfolio",
        backgroundImage: "/images/banner/portfolio.webp",
        breadcrumbItems: [{ label: "Homepage", href: "/" }, { label: "Portfolio" }],
    };

    // Get portfolio data from JSON file
    const portfolios: PortfolioData[] = portfolioData.portfolios;

    const totalPages = Math.ceil(portfolios.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPortfolios = portfolios.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <MainLayout bannerType='large' bannerProps={bannerProps}>
            <div className='portfolio-page'>
                <section className='section section--space-y'>
                    <div className='container'>
                        <div className='portfolio-grid'>
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
                        <div className='portfolio-pagination'>
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
