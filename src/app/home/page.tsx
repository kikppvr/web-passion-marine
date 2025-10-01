"use client";

import { Header } from "@/components/ui/layout";
import { VideoHeroBanner, SwiperSlider } from "@/components/ui/media";
import { BusinessCard, CharterCard, NewsCard, PortfolioCard } from "@/components/ui/cards";
import { LanguageToggle } from "@/components/LanguageSwitcher";
import { Footer } from "@/components/ui/layout";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import "aos/dist/aos.css";
import "@/styles/components/home/index.scss";
import { PrimaryButton } from "@/components/ui/button/PrimaryButton";
import { useAOS } from "@/hooks/useAOS";

export default function HeaderPage() {
    const [copiedCode, setCopiedCode] = useState<string | null>(null);
    const [selectedTheme, setSelectedTheme] = useState<"white" | "transparent">("transparent");
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const { language } = useLanguage();

    // Initialize AOS
    useAOS();

    const boatSolutionsData = [
        {
            title: "Engine Repair & Maintenance",
            image: "/images/home/business/business-01.webp",
            video: "/videos/business/video-01.mp4",
            href: "/comingsoon",
        },
        {
            title: "Boat Upgrades",
            image: "/images/home/business/business-02.webp",
            video: "/videos/business/video-02.mp4",
            href: "/comingsoon",
        },
        {
            title: "Electronics & Solar",
            image: "/images/home/business/business-03.webp",
            video: "/videos/business/video-03.mp4",
            href: "/comingsoon",
        },
        {
            title: "Structure Repair",
            image: "/images/home/business/business-04.webp",
            video: "/videos/business/video-04.mp4",
            href: "/comingsoon",
        },
        {
            title: "Custom Boat Design",
            image: "/images/home/business/business-05.webp",
            video: "/videos/business/video-05.mp4",
            href: "/comingsoon",
        },
        {
            title: "Teak & EVA Flooring",
            image: "/images/home/business/business-06.webp",
            video: "/videos/business/video-06.mp4",
            href: "/comingsoon",
        },
        {
            title: "Marine Upholstery",
            image: "/images/home/business/business-07.webp",
            video: "/videos/business/video-07.mp4",
            href: "/comingsoon",
        },
        {
            title: "Gelcoat Repair & Finishing",
            image: "/images/home/business/business-08.webp",
            video: "/videos/business/video-08.mp4",
            href: "/comingsoon",
        },
        {
            title: "Fiberglass Furniture",
            image: "/images/home/business/business-09.webp",
            video: "/videos/business/video-09.mp4",
            href: "/comingsoon",
        },
        {
            title: "Interior Styling",
            image: "/images/home/business/business-10.webp",
            video: "/videos/business/video-10.mp4",
            href: "/comingsoon",
        },
    ];

    // Easy Boat Rental for Every Trip
    const easyBoatRentalData = [
        {
            title: "Speedboats from XXXXX",
            location: "Maharaj Road, Phrankorn District, Bangkok",
            image: "/images/home/charter/charter-01.webp",
            video: "/videos/business/video-01.mp4",
            price: "฿36,500",
            passengers: "5-6",
            passengerUnit: "Passenger",
            restrooms: "1",
            restroomUnit: "Restroom",
            href: "/comingsoon",
        },
        {
            title: "Catamarans from XXXXX",
            location: "Marina Bay, Phuket",
            image: "/images/home/charter/charter-02.webp",
            video: "/videos/business/video-02.mp4",
            price: "฿150,000",
            passengers: "10-12",
            passengerUnit: "Passenger",
            restrooms: "2",
            restroomUnit: "Restroom",
            href: "/comingsoon",
        },
        {
            title: "Small yacht from XXXXX",
            location: "Pattaya Beach, Chonburi",
            image: "/images/home/charter/charter-03.webp",
            video: "/videos/business/video-03.mp4",
            price: "฿80,000",
            passengers: "6-8",
            passengerUnit: "Passenger",
            restrooms: "1",
            restroomUnit: "Restroom",
            href: "/comingsoon",
        },
    ];

    // Our Portfolio data
    const ourPortfolioData = [
        {
            title: "Chaparral 215 SSi",
            model: "215 SSi",
            image: "/images/home/portfolio/portfolio-01.webp",
            video: "",
            brandLogos: [
                "/images/home/brands/chaparral.webp",
                "/images/home/brands/volvo-penta.webp",
            ],
            href: "/comingsoon",
        },
        {
            title: "Chaparral 215 SSi",
            model: "215 SSi",
            image: "/images/home/portfolio/portfolio-02.webp",
            video: "",
            brandLogos: [
                "/images/home/brands/chaparral.webp",
                "/images/home/brands/volvo-penta.webp",
            ],
            href: "/comingsoon",
        },
        {
            title: "Chaparral 215 SSi",
            model: "215 SSi",
            image: "/images/home/portfolio/portfolio-01.webp",
            video: "",
            brandLogos: [
                "/images/home/brands/chaparral.webp",
                "/images/home/brands/volvo-penta.webp",
            ],
            href: "/comingsoon",
        },
        {
            title: "Chaparral 215 SSi",
            model: "215 SSi",
            image: "/images/home/portfolio/portfolio-02.webp",
            video: "",
            brandLogos: [
                "/images/home/brands/chaparral.webp",
                "/images/home/brands/volvo-penta.webp",
            ],
            href: "/comingsoon",
        },
    ];

    // Our Latest News data
    const ourLatestNewsData = [
        {
            title: "Lorem ipsum dolor sit amet consectetur. Feugiat at fusce felis eget vulputate proin eget duis.",
            date: "16 December 2024",
            image: "/images/home/news/news-01.webp",
            video: "",
            href: "/comingsoon",
        },
        {
            title: "Lorem ipsum dolor sit amet consectetur. Feugiat at fusce felis eget vulputate proin eget duis.",
            date: "16 December 2024",
            image: "/images/home/news/news-02.webp",
            video: "",
            href: "/comingsoon",
        },
        {
            title: "Lorem ipsum dolor sit amet consectetur. Feugiat at fusce felis eget vulputate proin eget duis.",
            date: "16 December 2024",
            image: "/images/home/news/news-03.webp",
            video: "",
            href: "/comingsoon",
        },
    ];

    // Brands data for slider
    const brandsData = [
        {
            title: "Chaparral",
            image: "/images/home/brands/chaparral.webp",
            video: "",
            href: "/comingsoon",
        },
        {
            title: "Volvo Penta",
            image: "/images/home/brands/volvo-penta.webp",
            video: "",
            href: "/comingsoon",
        },
        {
            title: "Cobalt Boats",
            image: "/images/home/brands/cobalt-boats.webp",
            video: "",
            href: "/comingsoon",
        },
        {
            title: "Mercury",
            image: "/images/home/brands/mercury.webp",
            video: "",
            href: "/comingsoon",
        },
        {
            title: "Nautic",
            image: "/images/home/brands/nautic.webp",
            video: "",
            href: "/comingsoon",
        },
        {
            title: "Saxdor",
            image: "/images/home/brands/saxdor.webp",
            video: "",
            href: "/comingsoon",
        },
        {
            title: "Sea Ray",
            image: "/images/home/brands/searay.webp",
            video: "",
            href: "/comingsoon",
        },
        {
            title: "Chaparral",
            image: "/images/home/brands/chaparral.webp",
            video: "",
            href: "/comingsoon",
        },
        {
            title: "Volvo Penta",
            image: "/images/home/brands/volvo-penta.webp",
            video: "",
            href: "/comingsoon",
        },
        {
            title: "Cobalt Boats",
            image: "/images/home/brands/cobalt-boats.webp",
            video: "",
            href: "/comingsoon",
        },
    ];

    const copyToClipboard = async (text: string, codeId: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedCode(codeId);
            setTimeout(() => setCopiedCode(null), 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <div className='min-h-screen'>
            {/* Header Component */}
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onMouseDown={() => setIsActive(true)}
                onMouseUp={() => setIsActive(false)}
                onMouseOut={() => setIsActive(false)}>
                <Header theme={isHovered || isActive ? "white" : "transparent"} />
            </div>

            {/* Video Hero Banner */}
            <VideoHeroBanner
                videoSrc='/videos/banner/banner-home.mp4'
                title='Expert Boat Solutions,'
                subtitle='Powered by Passion'
                description=''
                showPlayButton={false}
                autoPlay={true}
                muted={true}
                loop={true}
                overlay={false}
                overlayOpacity={0}
                preload='auto'
                lazyLoad={false}
                priority={true}
                className='video-hero-banner--fullscreen'
            />

            <section className='our-services'>
                <div className='our-services__container'>
                    <h2 className='our-services__title'>Our Services</h2>
                    <div
                        className='our-services__description-1'
                        data-aos='fade-up'
                        data-aos-delay='300'>
                        General Boat Services,
                    </div>
                    <div
                        className='our-services__description-2'
                        data-aos='fade-up'
                        data-aos-delay='400'>
                        Engine Repair, Boat Restoration
                    </div>
                </div>
            </section>

            <section className='boat-solutions'>
                <div className='boat-solutions__container'>
                    <div className='boat-solutions__header'>
                        <h2 className='boat-solutions__title'>Boat Solutions</h2>
                        <div className='boat-solutions__button boat-solutions__button--desktop'>
                            <PrimaryButton>Overview Services</PrimaryButton>
                        </div>
                    </div>
                    <div className='boat-solutions__swiper'>
                        <SwiperSlider
                            data={boatSolutionsData}
                            cardComponent={BusinessCard}
                            className='boat-solutions-swiper'
                            autoplay={false}
                            autoplayDelay={4000}
                            showNavigation={true}
                            showPagination={true}
                            slidesPerView={{
                                mobile: 1.2,
                                tablet: 2.5,
                                desktop: 3.5,
                            }}
                            spaceBetween={{
                                mobile: 8,
                                tablet: 8,
                                desktop: 8,
                            }}
                        />
                    </div>
                    <div className='boat-solutions__button boat-solutions__button--mobile'>
                        <PrimaryButton>Overview Services</PrimaryButton>
                    </div>
                </div>
            </section>

            <section className='easy-boat-rental'>
                <div className='easy-boat-rental__container'>
                    <div className='easy-boat-rental__header'>
                        <h2 className='easy-boat-rental__title'>Easy Boat Rental for Every Trip</h2>
                        <div className='easy-boat-rental__button easy-boat-rental__button--desktop'>
                            <PrimaryButton>View All</PrimaryButton>
                        </div>
                    </div>
                    <div className='easy-boat-rental__swiper'>
                        <SwiperSlider
                            data={easyBoatRentalData}
                            cardComponent={CharterCard}
                            className='easy-boat-rental-swiper'
                            autoplay={false}
                            autoplayDelay={4000}
                            showNavigation={true}
                            showPagination={true}
                            slidesPerView={{
                                mobile: 1,
                                tablet: 2,
                                desktop: 3,
                            }}
                            spaceBetween={{
                                mobile: 16,
                                tablet: 24,
                                desktop: 32,
                            }}
                        />
                    </div>
                    <div className='easy-boat-rental__button easy-boat-rental__button--mobile'>
                        <PrimaryButton>View All</PrimaryButton>
                    </div>
                </div>
            </section>

            <section className='volvo-penta'>
                <div className='volvo-penta__container'>
                    <div className='volvo-penta__content'>
                        <div className='volvo-penta__content-left'>
                            <div className='volvo-penta__logo'>
                                <Image
                                    src='/images/home/brands/volvo-penta-white.webp'
                                    alt='Volvo Penta'
                                    width={178}
                                    height={48}
                                    style={{ width: "auto", height: "auto" }}
                                />
                            </div>
                            <div className='volvo-penta__text'>
                                <h2 className='volvo-penta__title'>
                                    <span className='volvo-penta__title--bold'>Passion Marine</span>
                                    <span className='volvo-penta__title--light'>
                                        {" "}
                                        has been appointed as an authorized service dealer for{" "}
                                    </span>
                                    <span className='volvo-penta__title--bold'>Volvo Penta</span>
                                </h2>
                                <p className='volvo-penta__subtitle'>
                                    Connect with us at Petra Marina Pathum Thani
                                </p>
                            </div>
                        </div>
                        <div className='volvo-penta__content-right'>
                            <PrimaryButton theme='dark'>View Document</PrimaryButton>
                        </div>
                    </div>
                </div>
            </section>

            <section className='brands'>
                <div className='brands__container'>
                    <h2 className='brands__title'>Experienced in leading brands</h2>
                    <div className='brands__slider'>
                        <SwiperSlider
                            data={brandsData}
                            className='brands-swiper'
                            autoplay={true}
                            autoplayDelay={2000}
                            loop={true}
                            speed={800}
                            showNavigation={false}
                            showPagination={false}
                            slidesPerView={{
                                mobile: 2.5,
                                tablet: 4.5,
                                desktop: 6.5,
                            }}
                            spaceBetween={{
                                mobile: 16,
                                tablet: 24,
                                desktop: 32,
                            }}
                            renderSlide={(item, index) => (
                                <div className='brand-item'>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={120}
                                        height={40}
                                        style={{ width: "auto", height: "auto" }}
                                    />
                                </div>
                            )}
                        />
                    </div>
                </div>
            </section>

            <section className='our-portfolio'>
                <div className='our-portfolio__container'>
                    <div className='our-portfolio__header'>
                        <h2 className='our-portfolio__title'>Our Portfolio</h2>
                        <div className='our-portfolio__button'>
                            <PrimaryButton theme='dark'>Explore More</PrimaryButton>
                        </div>
                    </div>

                    <div className='our-portfolio__content'>
                        {/* Left Side - Stats and Reviews */}
                        <div className='our-portfolio__left'>
                            {/* Stats Section */}
                            <div className='our-portfolio__stats'>
                                <div className='our-portfolio__stat-item'>
                                    <div className='our-portfolio__stat-number'>120+</div>
                                    <div className='our-portfolio__stat-label'>Project</div>
                                </div>
                                <div className='our-portfolio__stat-item'>
                                    <div className='our-portfolio__stat-number'>80+</div>
                                    <div className='our-portfolio__stat-label'>Customer</div>
                                </div>
                            </div>

                            {/* Customer Reviews */}
                            <div className='our-portfolio__reviews'>
                                <div className='our-portfolio__customer-avatars'>
                                    <Image
                                        src='/images/home/portfolio/review-01.webp'
                                        alt='Customer 1'
                                        width={44}
                                        height={44}
                                        style={{ width: "auto", height: "auto" }}
                                        className='our-portfolio__avatar'
                                    />
                                    <Image
                                        src='/images/home/portfolio/review-02.webp'
                                        alt='Customer 2'
                                        width={44}
                                        height={44}
                                        style={{ width: "auto", height: "auto" }}
                                        className='our-portfolio__avatar'
                                    />
                                    <Image
                                        src='/images/home/portfolio/review-03.webp'
                                        alt='Customer 3'
                                        width={44}
                                        height={44}
                                        style={{ width: "auto", height: "auto" }}
                                        className='our-portfolio__avatar'
                                    />
                                    <Image
                                        src='/images/home/portfolio/review-01.webp'
                                        alt='Customer 4'
                                        width={44}
                                        height={44}
                                        style={{ width: "auto", height: "auto" }}
                                        className='our-portfolio__avatar'
                                    />
                                    <Image
                                        src='/images/home/portfolio/review-02.webp'
                                        alt='Customer 5'
                                        width={44}
                                        height={44}
                                        style={{ width: "auto", height: "auto" }}
                                        className='our-portfolio__avatar'
                                    />
                                </div>
                                <div className='our-portfolio__rating'>
                                    <div className='our-portfolio__stars'>
                                        <i className='ph-fill ph-star our-portfolio__star'></i>
                                        <i className='ph-fill ph-star our-portfolio__star'></i>
                                        <i className='ph-fill ph-star our-portfolio__star'></i>
                                        <i className='ph-fill ph-star our-portfolio__star'></i>
                                        <i className='ph ph-star our-portfolio__star'></i>
                                        <span className='our-portfolio__rating-text'>(5)</span>
                                    </div>
                                    <div className='our-portfolio__review-count'>8K Review</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Swiper */}
                        <div className='our-portfolio__right'>
                            <div className='our-portfolio__swiper'>
                                <SwiperSlider
                                    data={ourPortfolioData}
                                    cardComponent={PortfolioCard}
                                    className='our-portfolio-swiper'
                                    autoplay={false}
                                    autoplayDelay={4000}
                                    showNavigation={true}
                                    showPagination={true}
                                    slidesPerView={{
                                        mobile: 1.1,
                                        tablet: 2.2,
                                        desktop: 1.6,
                                    }}
                                    spaceBetween={{
                                        mobile: 16,
                                        tablet: 24,
                                        desktop: 32,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='our-latest-news'>
                <div className='our-latest-news__container'>
                    <div className='our-latest-news__header'>
                        <h2 className='our-latest-news__title'>Our Latest News</h2>
                        <div className='our-latest-news__button our-latest-news__button--desktop'>
                            <PrimaryButton>View All</PrimaryButton>
                        </div>
                    </div>
                    <div className='our-latest-news__swiper'>
                        <SwiperSlider
                            data={ourLatestNewsData}
                            cardComponent={NewsCard}
                            className='our-latest-news-swiper'
                            autoplay={false}
                            autoplayDelay={4000}
                            showNavigation={true}
                            showPagination={true}
                            slidesPerView={{
                                mobile: 1,
                                tablet: 2,
                                desktop: 3,
                            }}
                            spaceBetween={{
                                mobile: 16,
                                tablet: 24,
                                desktop: 32,
                            }}
                        />
                    </div>
                    <div className='our-latest-news__button our-latest-news__button--mobile'>
                        <PrimaryButton>View All</PrimaryButton>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
