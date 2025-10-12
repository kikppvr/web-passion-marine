"use client";

import { useState } from "react";
import MainLayout from "@/components/ui/layout/MainLayout";
import { CharterCard } from "@/components/ui/cards/CharterCard";
import Pagination from "@/components/ui/navigation/Pagination";

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

    // Mock charter data
    const charterData: CharterData[] = [
        {
            id: 1,
            title: "Speedboats from XXXXX",
            location: "Maharaj Road, Phrankorn District, Bangkok",
            passengers: "5-6",
            passengerUnit: "Passenger",
            restrooms: "1",
            restroomUnit: "Restroom",
            price: 36500,
            image: "/images/home/charter/charter-01.webp",
            href: "/comingsoon",
        },
        {
            id: 2,
            title: "Catamarans from XXXXX",
            location: "Maharaj Road, Phrankorn District, Bangkok",
            passengers: "5-6",
            passengerUnit: "Passenger",
            restrooms: "1",
            restroomUnit: "Restroom",
            price: 36500,
            image: "/images/home/charter/charter-02.webp",
            href: "/comingsoon",
        },
        {
            id: 3,
            title: "Small yacht from XXXXX",
            location: "Maharaj Road, Phrankorn District, Bangkok",
            passengers: "5-6",
            passengerUnit: "Passenger",
            restrooms: "1",
            restroomUnit: "Restroom",
            price: 36500,
            image: "/images/home/charter/charter-03.webp",
            href: "/comingsoon",
        },
        {
            id: 4,
            title: "Speedboats from XXXXX",
            location: "Maharaj Road, Phrankorn District, Bangkok",
            passengers: "5-6",
            passengerUnit: "Passenger",
            restrooms: "1",
            restroomUnit: "Restroom",
            price: 36500,
            image: "/images/home/charter/charter-01.webp",
            href: "/comingsoon",
        },
        {
            id: 5,
            title: "Catamarans from XXXXX",
            location: "Maharaj Road, Phrankorn District, Bangkok",
            passengers: "5-6",
            passengerUnit: "Passenger",
            restrooms: "1",
            restroomUnit: "Restroom",
            price: 36500,
            image: "/images/home/charter/charter-02.webp",
            href: "/comingsoon",
        },
        {
            id: 6,
            title: "Small yacht from XXXXX",
            location: "Maharaj Road, Phrankorn District, Bangkok",
            passengers: "5-6",
            passengerUnit: "Passenger",
            restrooms: "1",
            restroomUnit: "Restroom",
            price: 36500,
            image: "/images/home/charter/charter-03.webp",
            href: "/comingsoon",
        },
        {
            id: 7,
            title: "Speedboats from XXXXX",
            location: "Maharaj Road, Phrankorn District, Bangkok",
            passengers: "5-6",
            passengerUnit: "Passenger",
            restrooms: "1",
            restroomUnit: "Restroom",
            price: 36500,
            image: "/images/home/charter/charter-01.webp",
            href: "/comingsoon",
        },
        {
            id: 8,
            title: "Catamarans from XXXXX",
            location: "Maharaj Road, Phrankorn District, Bangkok",
            passengers: "5-6",
            passengerUnit: "Passenger",
            restrooms: "1",
            restroomUnit: "Restroom",
            price: 36500,
            image: "/images/home/charter/charter-02.webp",
            href: "/comingsoon",
        },
        {
            id: 9,
            title: "Small yacht from XXXXX",
            location: "Maharaj Road, Phrankorn District, Bangkok",
            passengers: "5-6",
            passengerUnit: "Passenger",
            restrooms: "1",
            restroomUnit: "Restroom",
            price: 36500,
            image: "/images/home/charter/charter-03.webp",
            href: "/comingsoon",
        },
    ];

    const totalPages = Math.ceil(charterData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentCharters = charterData.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <MainLayout bannerType='large' bannerProps={bannerProps}>
            <div className='charter-page'>
                <section className='section section--space-y'>
                    <div className='container'>
                        <div className='charter-grid'>
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
                        <div className='charter-pagination'>
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
