"use client";

import { useEffect } from "react";
import MainLayout from "@/components/ui/layout/MainLayout";
import "@/styles/page/aesthetic-solutions.scss";
import { GallerySlider } from "@/components/ui/media";
import { BoatColorCustomizer } from "@/components/ui/aesthetic";

export default function AestheticSolutionsPage() {
    // Handle hash links with scroll offset for fixed header
    useEffect(() => {
        const getHeaderHeight = () => {
            if (window.innerWidth <= 768) return 60;
            if (window.innerWidth <= 1024) return 80;
            return 94;
        };

        const scrollToHash = () => {
            const hash = window.location.hash;
            if (!hash) return;

            const element = document.getElementById(hash.substring(1));
            if (!element) return;

            const offset = getHeaderHeight() + 30;
            const targetPosition =
                element.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({ top: targetPosition, behavior: "smooth" });
        };

        // Wait for page to render, then scroll
        const timeoutId = setTimeout(scrollToHash, 100);
        window.addEventListener("hashchange", scrollToHash);

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener("hashchange", scrollToHash);
        };
    }, []);

    const bannerProps = {
        title: "Aesthetic Solutions",
        backgroundImage: "/images/banner/aesthetic-solutions.webp",
        breadcrumbItems: [
            { label: "Homepage", href: "/" },
            { label: "Our Services" },
            { label: "Overview Services", href: "/services/overview-services" },
            { label: "Aesthetic Solutions" },
        ],
    };

    const galleryTeakEVAFlooring = [
        {
            src: "/images/our-services/aesthetic-solutions/teak-eva-flooring/01.webp",
            alt: "Teak & EVA Flooring",
        },
        {
            src: "/images/our-services/aesthetic-solutions/teak-eva-flooring/02.webp",
            alt: "Teak & EVA Flooring",
        },
    ];

    const galleryMarineUpholstery = [
        {
            src: "/images/our-services/aesthetic-solutions/marine-upholstery/01.webp",
            alt: "Marine Upholstery",
        },
        {
            src: "/images/our-services/aesthetic-solutions/marine-upholstery/02.webp",
            alt: "Marine Upholstery",
        },
        {
            src: "/images/our-services/aesthetic-solutions/marine-upholstery/03.webp",
            alt: "Marine Upholstery",
        },
        {
            src: "/images/our-services/aesthetic-solutions/marine-upholstery/04.webp",
            alt: "Marine Upholstery",
        },
    ];

    const galleryGelcoatRepairFinishing = [
        {
            src: "/images/our-services/aesthetic-solutions/gelcoat-repair/01.webp",
            alt: "Gelcoat Repair & Finishing",
        },
        {
            src: "/images/our-services/aesthetic-solutions/gelcoat-repair/02.webp",
            alt: "Gelcoat Repair & Finishing",
        },
    ];

    const galleryFiberglassFurniture = [
        {
            src: "/images/our-services/aesthetic-solutions/fiberglass-furniture/01.webp",
            alt: "Fiberglass Furniture",
        },
        {
            src: "/images/our-services/aesthetic-solutions/fiberglass-furniture/02.webp",
            alt: "Fiberglass Furniture",
        },
    ];

    const galleryInteriorStyling = [
        {
            src: "/images/our-services/aesthetic-solutions/interior-styling/01.webp",
            alt: "Interior Styling",
        },
        {
            src: "/images/our-services/aesthetic-solutions/interior-styling/02.webp",
            alt: "Interior Styling",
        },
    ];

    return (
        <MainLayout bannerType='large' bannerProps={bannerProps}>
            <div className='engineering-solutions bg-blue-abstract'>
                <section className='section section--space-y'>
                    <div className='container'>
                        <h2 className='text-h1 font-semibold uppercase text-[var(--blue-500)]'>
                            <div>Elevate Your Boat&apos;s Style </div>
                            <div>and Comfort</div>
                        </h2>
                        <div className='mt-4 flex justify-end'>
                            <div className='w-full lg:w-9/12'>
                                <p className='text-h5 text-left font-normal text-[var(--grey-600)]'>
                                    At Passion Marine, performance meets aesthetics. With Decorator,
                                    we turn your vessel into a statement piece — where every detail
                                    reflects your personality and lifestyle.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Boat Color Customizer Section */}
                <section className='section section--space-bottom' id='custom-boat-design'>
                    <BoatColorCustomizer />
                </section>
            </div>
            <section className='section section--space-bottom'>
                <div className='container'>
                    <div
                        className='mb-10 grid grid-cols-1 items-center gap-8 md:mb-16 lg:mb-6 lg:grid-cols-2 lg:gap-8'
                        id='teak-eva-flooring'>
                        <div>
                            <GallerySlider
                                className='gallery-esthetic-solutions'
                                images={galleryTeakEVAFlooring}
                                showPagination={true}
                                autoplay={false}
                                autoplayDelay={3000}
                                loop={true}
                            />
                        </div>
                        <div className='lg:px-4 xl:px-6'>
                            <h3 className='text-h3 lg:text-h4 mb-4 font-semibold text-[var(--blue-500)] md:mb-6'>
                                Teak & EVA Flooring
                            </h3>
                            <div className='text-body md:text-lead-2 font-normal text-[var(--grey-600)]'>
                                Passion Marine provides design and fabrication services for boat
                                flooring using teak wood and modern materials such as EVA (Ethylene
                                Vinyl Acetate). The flooring can be custom-designed in terms of
                                pattern and color according to the boat owner’s preferences. Designs
                                are created using computer software to allow the owner to preview
                                and adjust the layout before production, which is executed using CNC
                                (Computer Numerical Control) cutting machines and laser engraving
                                technology for precise detailing.
                            </div>
                        </div>
                    </div>
                    <div
                        className='mb-10 grid grid-cols-1 items-center gap-8 md:mb-16 lg:mb-6 lg:grid-cols-2 lg:gap-8'
                        id='marine-upholstery'>
                        <div className='order-2 lg:order-1 lg:px-4 xl:px-6'>
                            <h3 className='text-h3 lg:text-h4 mb-4 font-semibold text-[var(--blue-500)] md:mb-6'>
                                Marine Upholstery
                            </h3>
                            <div className='text-body md:text-lead-2 font-normal text-[var(--grey-600)]'>
                                Passion Marine designs, manufactures, and repairs boat seats and
                                canopies using marine-grade materials specifically made for marine
                                environments. Boat owners can customize seat and backrest firmness,
                                patterns, materials, stitching styles, fabric or leather types,
                                colors, and textures according to their personal preferences.
                            </div>
                        </div>
                        <div className='order-1 lg:order-2'>
                            <GallerySlider
                                className='gallery-esthetic-solutions'
                                images={galleryMarineUpholstery}
                                showPagination={true}
                                autoplay={true}
                                autoplayDelay={5000}
                                loop={true}
                            />
                        </div>
                    </div>
                    <div
                        className='mb-10 grid grid-cols-1 items-center gap-8 md:mb-16 lg:mb-6 lg:grid-cols-2 lg:gap-8'
                        id='gelcoat-paint'>
                        <div>
                            <GallerySlider
                                className='gallery-esthetic-solutions'
                                images={galleryGelcoatRepairFinishing}
                                showPagination={true}
                                autoplay={true}
                                autoplayDelay={3000}
                                loop={true}
                            />
                        </div>
                        <div className='lg:px-4 xl:px-6'>
                            <h3 className='text-h3 lg:text-h4 mb-4 font-semibold text-[var(--blue-500)] md:mb-6'>
                                Gelcoat Paint
                            </h3>
                            <div className='text-body md:text-lead-2 font-normal text-[var(--grey-600)]'>
                                Passion Marine offers exterior repair and color restoration services
                                using gelcoat paint, which is thicker and more durable than
                                conventional 2K automotive paint that is thin and less resistant to
                                impact or scratches. The thicker gelcoat layer also allows for the
                                integration of decorative materials, such as glitter, to create a
                                shimmering effect under light.
                            </div>
                        </div>
                    </div>
                    <div
                        className='mb-10 grid grid-cols-1 items-center gap-8 md:mb-16 lg:mb-6 lg:grid-cols-2 lg:gap-8'
                        id='fiberglass-furniture'>
                        <div className='order-2 lg:order-1 lg:px-4 xl:px-6'>
                            <h3 className='text-h3 lg:text-h4 mb-4 font-semibold text-[var(--blue-500)] md:mb-6'>
                                Custom Fiberglass Furniture
                            </h3>
                            <div className='text-body md:text-lead-2 font-normal text-[var(--grey-600)]'>
                                Passion Marine designs and manufactures furniture with custom
                                shapes, forms, and functions tailored to the user’s needs, using
                                fiberglass and stainless steel materials.
                            </div>
                        </div>
                        <div className='order-1 lg:order-2'>
                            <GallerySlider
                                className='gallery-esthetic-solutions'
                                images={galleryFiberglassFurniture}
                                showPagination={true}
                                autoplay={true}
                                autoplayDelay={5000}
                                loop={true}
                            />
                        </div>
                    </div>
                    <div
                        className='grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-8'
                        id='interior-styling'>
                        <div>
                            <GallerySlider
                                className='gallery-esthetic-solutions'
                                images={galleryInteriorStyling}
                                showPagination={true}
                                autoplay={true}
                                autoplayDelay={3000}
                                loop={true}
                            />
                        </div>
                        <div className='lg:px-4 xl:px-6'>
                            <h3 className='text-h3 lg:text-h4 mb-4 font-semibold text-[var(--blue-500)] md:mb-6'>
                                Yacht Interior Styling
                            </h3>
                            <div className='text-body md:text-lead-2 font-normal text-[var(--grey-600)]'>
                                Passion Marine provides yacht interior design services that combine
                                the owner’s creativity and aesthetic preferences with professional
                                design and construction techniques. The process adheres to proper
                                engineering standards to ensure a balance between satisfaction,
                                comfort, and safety during use.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
