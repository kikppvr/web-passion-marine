"use client";

import { useState, useEffect } from "react";
import MainLayout from "@/components/ui/layout/MainLayout";
import "@/styles/page/aesthetic-solutions.scss";
import { GallerySlider } from "@/components/ui/media";
import { BoatColorCustomizer } from "@/components/ui/aesthetic";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n";
import {
    fetchRawAestheticPage,
    fetchRawServices,
    derivePageData,
    deriveServiceSections,
    DEFAULT_PAGE_DATA,
    DEFAULT_SERVICE_SECTIONS,
    type RawPageData,
    type RawServiceItem,
} from "@/lib/directus";
import { PageIntroSkeleton, ServiceSectionSkeleton } from "@/components/ui/skeleton";

export default function AestheticSolutionsPage() {
    const { language } = useLanguage();

    const [rawPage, setRawPage] = useState<RawPageData | null>(null);
    const [rawSections, setRawSections] = useState<RawServiceItem[] | null>(null);

    const [page, setPage] = useState(DEFAULT_PAGE_DATA);
    const [sections, setSections] = useState(DEFAULT_SERVICE_SECTIONS);

    useEffect(() => {
        fetchRawAestheticPage().then(setRawPage);
        fetchRawServices("aesthetic").then(setRawSections);
    }, []);

    useEffect(() => {
        if (rawPage) setPage(derivePageData(rawPage, language));
    }, [rawPage, language]);

    useEffect(() => {
        if (rawSections)
            setSections(
                deriveServiceSections(
                    rawSections.filter(s => s.slug !== "custom-boat-design"),
                    language
                )
            );
    }, [rawSections, language]);

    // Handle hash links with scroll offset for fixed header
    // depends on `sections` so scroll re-runs after Directus data renders
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

        const timeoutId = setTimeout(scrollToHash, 100);
        window.addEventListener("hashchange", scrollToHash);

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener("hashchange", scrollToHash);
        };
    }, [sections]);


    const t = useTranslation();

    const bannerProps = {
        title: t.nav.aestheticSolutions,
        backgroundImage: "/images/banner/aesthetic-solutions.webp",
        breadcrumbItems: [
            { label: t.common.homepage, href: "/" },
            { label: t.nav.ourServices },
            { label: t.nav.overviewServices, href: "/services/overview-services" },
            { label: t.nav.aestheticSolutions },
        ],
    };

    return (
        <MainLayout bannerType='large' bannerProps={bannerProps}>
            <div className='engineering-solutions bg-blue-abstract'>
                <section className='section section--space-y'>
                    <div className='container'>
                        {rawPage === null ? (
                            <PageIntroSkeleton />
                        ) : (
                            <>
                                <h2 className='text-h1 font-semibold uppercase text-[var(--blue-500)]'>
                                    {page.heading}
                                </h2>
                                <div className='mt-4 flex justify-end'>
                                    <div className='w-full lg:w-9/12'>
                                        <p className='text-h5 text-left font-normal text-[var(--grey-600)]'>
                                            {page.description}
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </section>

                <section className='section section--space-bottom' id='custom-boat-design'>
                    <BoatColorCustomizer />
                </section>
            </div>
            <section className='section section--space-bottom'>
                <div className='container'>
                    {rawSections === null ? (
                            <ServiceSectionSkeleton count={2} galleryClassName='gallery-esthetic-solutions' />
                    ) : (
                        sections.map((section, index) => {
                        const isEven = index % 2 === 0;
                        const isLast = index === sections.length - 1;
                        return (
                            <div
                                key={section.id}
                                className={`${isLast ? "" : "mb-10 md:mb-16 lg:mb-6"} grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-8`}
                                id={section.slug}>
                                {isEven ? (
                                    <>
                                        <div>
                                            <GallerySlider
                                                className='gallery-esthetic-solutions'
                                                images={section.gallery}
                                                showPagination={true}
                                                autoplay={false}
                                                autoplayDelay={3000}
                                                loop={true}
                                            />
                                        </div>
                                        <div className='lg:px-4 xl:px-6'>
                                            <h3 className='text-h3 lg:text-h4 mb-4 font-semibold text-[var(--blue-500)] md:mb-6'>
                                                {section.title}
                                            </h3>
                                            <div className='text-body md:text-lead-2 font-normal text-[var(--grey-600)]'>
                                                {section.description}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className='order-2 lg:order-1 lg:px-4 xl:px-6'>
                                            <h3 className='text-h3 lg:text-h4 mb-4 font-semibold text-[var(--blue-500)] md:mb-6'>
                                                {section.title}
                                            </h3>
                                            <div className='text-body md:text-lead-2 font-normal text-[var(--grey-600)]'>
                                                {section.description}
                                            </div>
                                        </div>
                                        <div className='order-1 lg:order-2'>
                                            <GallerySlider
                                                className='gallery-esthetic-solutions'
                                                images={section.gallery}
                                                showPagination={true}
                                                autoplay={true}
                                                autoplayDelay={5000}
                                                loop={true}
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                        );
                    })
                    )}
                </div>
            </section>
        </MainLayout>
    );
}
