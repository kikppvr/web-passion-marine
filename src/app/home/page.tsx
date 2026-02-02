"use client";
import Link from "next/link";
import Image from "next/image";
//components
import { Header } from "@/components/ui/layout";
import { VideoHeroBanner, SwiperSlider } from "@/components/ui/media";
import { BusinessCard, CharterCard, NewsCard, PortfolioCard } from "@/components/ui/cards";
import { LanguageToggle } from "@/components/LanguageSwitcher";
import { Footer } from "@/components/ui/layout";
import { PrimaryButton } from "@/components/ui/button/PrimaryButton";
import { DocumentModal } from "@/components/ui/dialog/DocumentModal";
//contexts
import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useAOS } from "@/hooks/useAOS";
import { useDialog } from "@/components/ui/dialog";
import CountUp from "react-countup";
import { TextReveal } from "@/components/ui/animation/TextReveal";
import newsData from "@/data/news-data.json";
import portfolioData from "@/data/portfolio-data.json";
//styles
import "aos/dist/aos.css";
import "@/styles/components/home/index.scss";

export default function HeaderPage() {
    const router = useRouter();
    const [copiedCode, setCopiedCode] = useState<string | null>(null);
    const [selectedTheme, setSelectedTheme] = useState<"white" | "transparent">("transparent");
    const [isStatsVisible, setIsStatsVisible] = useState(false);
    const { language } = useLanguage();
    const confirmDialog = useDialog();

    const handleDelete = () => {
        // Delete logic
        console.log("Deleted!");
    };

    // Initialize AOS
    useAOS();

    // Intersection Observer for stats animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsStatsVisible(true);
                    }
                });
            },
            { threshold: 0.5 }
        );

        const statsElement = document.querySelector(".our-portfolio__stats");
        if (statsElement) {
            observer.observe(statsElement);
        }

        return () => {
            if (statsElement) {
                observer.unobserve(statsElement);
            }
        };
    }, []);

    const boatSolutionsData = [
        {
            title: "Engine Repair & Maintenance",
            image: "/images/home/business/business-01.webp",
            video: "/videos/business/video-01.mp4",
            href: "/services/engineering-solutions#engine-repair-maintenance",
        },
        {
            title: "Boat Upgrades",
            image: "/images/home/business/business-02.webp",
            video: "/videos/business/video-02.mp4",
            href: "/services/engineering-solutions#boat-upgrades",
        },
        {
            title: "Electronics & Solar",
            image: "/images/home/business/business-03.webp",
            video: "/videos/business/video-03.mp4",
            href: "/services/engineering-solutions#electronics-solar",
        },
        {
            title: "Structure Repair",
            image: "/images/home/business/business-04.webp",
            video: "/videos/business/video-04.mp4",
            href: "/services/engineering-solutions#structure-repair",
        },
        {
            title: "Custom Boat Design",
            image: "/images/home/business/business-05.webp",
            video: "/videos/business/video-05.mp4",
            href: "/services/aesthetic-solutions#custom-boat-design",
        },
        {
            title: "Teak & EVA Flooring",
            image: "/images/home/business/business-06.webp",
            video: "/videos/business/video-06.mp4",
            href: "/services/aesthetic-solutions#teak-eva-flooring",
        },
        {
            title: "Marine Upholstery",
            image: "/images/home/business/business-07.webp",
            video: "/videos/business/video-07.mp4",
            href: "/services/aesthetic-solutions#marine-upholstery",
        },
        {
            title: "Gelcoat Repair & Finishing",
            image: "/images/home/business/business-08.webp",
            video: "/videos/business/video-08.mp4",
            href: "/services/aesthetic-solutions#gelcoat-paint",
        },
        {
            title: "Fiberglass Furniture",
            image: "/images/home/business/business-09.webp",
            video: "/videos/business/video-09.mp4",
            href: "/services/aesthetic-solutions#fiberglass-furniture",
        },
        {
            title: "Interior Styling",
            image: "/images/home/business/business-10.webp",
            video: "/videos/business/video-10.mp4",
            href: "/services/aesthetic-solutions#interior-styling",
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

    // Our Portfolio data - ดึงจาก portfolio-data.json
    const ourPortfolioData = portfolioData.portfolios.map(portfolio => ({
        title: portfolio.title,
        model: portfolio.model,
        image: portfolio.image,
        video: "",
        brandLogos: portfolio.brandLogos,
        href: portfolio.href,
    }));

    // Our Latest News data - ดึง 3 ข่าวล่าสุดจาก news-data.json
    const allNews = newsData.news;
    const ourLatestNewsData = allNews
        .slice(0, 3) // เอา 3 ข่าวล่าสุด
        .map(news => ({
            title: news.title,
            description: news.description,
            image: news.image,
            date: news.date,
            category: news.category,
            href: news.href,
            video: "", // SwiperSlideData requires video property
        }));

    // Brands data for slider
    const brandsData = [
        {
            title: "Chaparral",
            image: "/images/home/brands/chaparral.png",
            video: "",
            href: "/comingsoon",
        },
        {
            title: "Volvo Penta",
            image: "/images/home/brands/volvo-penta.png",
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
            title: "Saxdor",
            image: "/images/home/brands/saxdor.webp",
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
            title: "Sea Ray",
            image: "/images/home/brands/searay.webp",
            video: "",
            href: "/comingsoon",
        },
        {
            title: "Nautica",
            image: "/images/home/brands/nautica.jpg",
            video: "",
            href: "/comingsoon",
        },
        {
            title: "Yamaha",
            image: "/images/home/brands/yamaha.jpg",
            video: "",
            href: "/comingsoon",
        },
        {
            title: "Mercury MerCruiser",
            image: "/images/home/brands/mercury-mercruiser.jpg",
            video: "",
            href: "/comingsoon",
        },
        {
            title: "Axoppr",
            image: "/images/home/brands/axoppr.jpg",
            video: "",
            href: "/comingsoon",
        },
        {
            title: "Crownline",
            image: "/images/home/brands/crownline.jpg",
            video: "",
            href: "/comingsoon",
        },
        // Duplicate for seamless loop
        {
            title: "Chaparral",
            image: "/images/home/brands/chaparral.png",
            video: "",
            href: "/comingsoon",
        },
        {
            title: "Volvo Penta",
            image: "/images/home/brands/volvo-penta.png",
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
            title: "Saxdor",
            image: "/images/home/brands/saxdor.webp",
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
            title: "Sea Ray",
            image: "/images/home/brands/searay.webp",
            video: "",
            href: "/comingsoon",
        },
        {
            title: "Nautica",
            image: "/images/home/brands/nautica.jpg",
            video: "",
            href: "/comingsoon",
        },
        {
            title: "Yamaha",
            image: "/images/home/brands/yamaha.jpg",
            video: "",
            href: "/comingsoon",
        },
        {
            title: "Mercury MerCruiser",
            image: "/images/home/brands/mercury-mercruiser.jpg",
            video: "",
            href: "/comingsoon",
        },
        {
            title: "Axoppr",
            image: "/images/home/brands/axoppr.jpg",
            video: "",
            href: "/comingsoon",
        },
        {
            title: "Crownline",
            image: "/images/home/brands/crownline.jpg",
            video: "",
            href: "/comingsoon",
        },
    ];

    return (
        <div className='min-h-screen'>
            {/* Header Component */}
            <Header theme='transparent' />

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
                preload='metadata'
                lazyLoad={true}
                priority={false}
                className='video-hero-banner--fullscreen'
            />

            <div className='our-services-bg'>
                <section className='our-services'>
                    <div className='our-services__container'>
                        <h2 className='our-services__title'>Our Services</h2>
                        <TextReveal
                            text='General Boat Services,'
                            className='our-services__description-1'
                            delay={300}
                            lineDelay={0}
                            duration={2}
                            as='div'
                        />
                        <TextReveal
                            text='Engine Repair, Boat Restoration'
                            className='our-services__description-2'
                            delay={300}
                            lineDelay={0}
                            duration={2}
                            as='div'
                        />
                    </div>
                </section>

                <section className='boat-solutions'>
                    <div className='boat-solutions__container'>
                        <div className='boat-solutions__header'>
                            <h2 className='boat-solutions__title'>Boat Solutions</h2>
                            <div className='boat-solutions__button boat-solutions__button--desktop'>
                                <PrimaryButton
                                    onClick={() => router.push("/services/overview-services")}>
                                    Overview Services
                                </PrimaryButton>
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
                                    laptop: 3.5,
                                    desktop: 3.5,
                                    large: 3.5,
                                }}
                                spaceBetween={{
                                    mobile: 8,
                                    tablet: 8,
                                    laptop: 8,
                                    desktop: 8,
                                    large: 8,
                                }}
                            />
                        </div>
                        <div className='boat-solutions__button boat-solutions__button--mobile'>
                            <PrimaryButton
                                onClick={() => router.push("/services/overview-services")}>
                                Overview Services
                            </PrimaryButton>
                        </div>
                    </div>
                </section>
            </div>

            {/* <section className='easy-boat-rental'>
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
                                laptop: 3,
                                desktop: 3,
                                large: 3,
                            }}
                            spaceBetween={{
                                mobile: 16,
                                tablet: 24,
                                laptop: 24,
                                desktop: 32,
                                large: 32,
                            }}
                        />
                    </div>
                    <div className='easy-boat-rental__button easy-boat-rental__button--mobile'>
                        <PrimaryButton>View All</PrimaryButton>
                    </div>
                </div>
            </section> */}

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
                            <PrimaryButton
                                theme='dark'
                                icon='ph-fill ph-file-text'
                                noIconRotate={true}
                                onClick={confirmDialog.open}>
                                View Document
                            </PrimaryButton>

                            {/* <PrimaryButton
                                theme='dark'
                                icon='ph-fill ph-file-text'
                                noIconRotate={true}>
                                View Document
                            </PrimaryButton> */}

                            <DocumentModal
                                open={confirmDialog.isOpen}
                                onOpenChange={confirmDialog.setIsOpen}
                                documentImageSrc='/images/home/cer-volvo.png'
                                documentImageAlt='Volvo Penta Appointment Letter - Letter of Appointment from Alpha Tech and Volvo Penta dated 1st August 2024'
                                announcementText='Passion Marine has been appointed as an authorized service dealer for Volvo Penta'
                                announcementHighlight={["Passion Marine", "Volvo Penta"]}
                                locationText='Connect with us at Petra Marina Pathum Thani'
                                className='modal-document'
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className='brands'>
                <div className='brands__container'>
                    <h2 className='brands__title'>Experienced in leading brands</h2>
                    <div className='brands__slider'>
                        <div className='brands__track'>
                            {brandsData.map((item, index) => (
                                <div key={index} className='brand-item'>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className='brand-item__image'
                                    />
                                </div>
                            ))}
                            {/* Duplicate for seamless loop */}
                            {brandsData.map((item, index) => (
                                <div key={`duplicate-${index}`} className='brand-item'>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className='brand-item__image'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className='our-portfolio'>
                <div className='our-portfolio__container'>
                    <div className='our-portfolio__header'>
                        <h2 className='our-portfolio__title'>Our Portfolio</h2>
                        <div className='our-portfolio__button'>
                            <PrimaryButton theme='dark' onClick={() => router.push("/portfolio")}>
                                Explore More
                            </PrimaryButton>
                        </div>
                    </div>

                    <div className='our-portfolio__content'>
                        {/* Left Side - Stats and Reviews */}
                        <div className='our-portfolio__left'>
                            {/* Stats Section */}
                            <div className='our-portfolio__stats'>
                                <div className='our-portfolio__stat-item'>
                                    <div className='our-portfolio__stat-number'>
                                        {isStatsVisible && (
                                            <CountUp start={80} end={103} duration={2} suffix='+' />
                                        )}
                                    </div>
                                    <div className='our-portfolio__stat-label'>Project</div>
                                </div>
                                <div className='our-portfolio__stat-item'>
                                    <div className='our-portfolio__stat-number'>
                                        {isStatsVisible && (
                                            <CountUp start={20} end={47} duration={2} suffix='+' />
                                        )}
                                    </div>
                                    <div className='our-portfolio__stat-label'>Customer</div>
                                </div>
                            </div>

                            {/* Customer Reviews */}
                            <div className='our-portfolio__reviews'>
                                <div className='our-portfolio__customer-avatars'>
                                    <Image
                                        src='/images/home/portfolio/review.jpg'
                                        alt='Customer 1'
                                        width={44}
                                        height={44}
                                        className='our-portfolio__avatar'
                                    />
                                    <Image
                                        src='/images/home/portfolio/review.jpg'
                                        alt='Customer 2'
                                        width={44}
                                        height={44}
                                        className='our-portfolio__avatar'
                                    />
                                    <Image
                                        src='/images/home/portfolio/review.jpg'
                                        alt='Customer 3'
                                        width={44}
                                        height={44}
                                        className='our-portfolio__avatar'
                                    />
                                    <Image
                                        src='/images/home/portfolio/review.jpg'
                                        alt='Customer 4'
                                        width={44}
                                        height={44}
                                        className='our-portfolio__avatar'
                                    />
                                    <Image
                                        src='/images/home/portfolio/review.jpg'
                                        alt='Customer 5'
                                        width={44}
                                        height={44}
                                        className='our-portfolio__avatar'
                                    />
                                </div>
                                <div className='our-portfolio__rating'>
                                    <div className='our-portfolio__stars'>
                                        <i className='ph-fill ph-star our-portfolio__star'></i>
                                        <i className='ph-fill ph-star our-portfolio__star'></i>
                                        <i className='ph-fill ph-star our-portfolio__star'></i>
                                        <i className='ph-fill ph-star our-portfolio__star'></i>
                                        <div className='our-portfolio__star-half'>
                                            <i className='ph-fill ph-star our-portfolio__star our-portfolio__star--base'></i>
                                            <i className='ph-fill ph-star our-portfolio__star our-portfolio__star--fill'></i>
                                        </div>
                                        <span className='our-portfolio__rating-text'>(4.5)</span>
                                    </div>
                                    <div className='our-portfolio__review-count'>32 Review</div>
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
                                        tablet: 1.6,
                                        laptop: 1.6,
                                        desktop: 2.2,
                                        large: 2.2,
                                    }}
                                    spaceBetween={{
                                        mobile: 16,
                                        tablet: 24,
                                        laptop: 24,
                                        desktop: 32,
                                        large: 32,
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Mobile Explore More Button */}
                    <div className='our-portfolio__mobile-button'>
                        <PrimaryButton theme='dark' onClick={() => router.push("/portfolio")}>
                            Explore More
                        </PrimaryButton>
                    </div>
                </div>
            </section>

            <section className='our-latest-news'>
                <div className='our-latest-news__container'>
                    <div className='our-latest-news__header'>
                        <h2 className='our-latest-news__title'>Our Latest News</h2>
                        <div className='our-latest-news__button our-latest-news__button--desktop'>
                            <PrimaryButton onClick={() => router.push("/news")}>
                                View All
                            </PrimaryButton>
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
                                laptop: 3,
                                desktop: 3,
                                large: 3,
                            }}
                            spaceBetween={{
                                mobile: 16,
                                tablet: 24,
                                laptop: 24,
                                desktop: 32,
                                large: 32,
                            }}
                        />
                    </div>
                    <div className='our-latest-news__button our-latest-news__button--mobile'>
                        <PrimaryButton onClick={() => router.push("/news")}>View All</PrimaryButton>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
