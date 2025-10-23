"use client";

import { useState } from "react";
import MainLayout from "@/components/ui/layout/MainLayout";
import { CharterCard } from "@/components/ui/cards/CharterCard";
import Pagination from "@/components/ui/navigation/Pagination";
import charterListData from "@/data/charter-list.json";

interface CharterData {
    id: number;
    title: string;
    location: string;
    passengers: string;
    passengerUnit: string;
    restrooms: string;
    restroomUnit: string;
    price: number;
    image: string;
    href: string;
}

export default function CharterPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const bannerProps = {
        title: "Charter",
        backgroundImage: "/images/banner/charter.webp",
        breadcrumbItems: [{ label: "Homepage", href: "/" }, { label: "Charter" }],
    };

    // Get charter data from JSON file
    const charterData: CharterData[] = charterListData.charters;

    const totalPages = Math.ceil(charterData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentCharters = charterData.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <MainLayout bannerType='large' bannerProps={bannerProps}>
            <div className='charter'>
                <section className='section section--space-y'>
                    <div className='container'>
                        <div className='charter__grid'>
                            {currentCharters.map(charter => (
                                <CharterCard
                                    key={charter.id}
                                    title={charter.title}
                                    location={charter.location}
                                    passengers={charter.passengers}
                                    passengerUnit={charter.passengerUnit}
                                    restrooms={charter.restrooms}
                                    restroomUnit={charter.restroomUnit}
                                    price={charter.price}
                                    image={charter.image}
                                    href={charter.href}
                                />
                            ))}
                        </div>
                        <div className='charter__pagination'>
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
