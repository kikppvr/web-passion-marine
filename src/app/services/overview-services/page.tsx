"use client";

import { useState, useEffect } from "react";
import MainLayout from "@/components/ui/layout/MainLayout";
import "@/styles/page/overview-services.scss";
import { ServiceCard } from "@/components/ui/cards";
import { useRouter } from "next/navigation";
import { useAOS } from "@/hooks/useAOS";
import { useLanguage } from "@/contexts/LanguageContext";
import {
    fetchRawServicesPage,
    fetchRawServicesPageStats,
    fetchRawServicesPageFeatures,
    derivePageData,
    deriveServicesPageStats,
    deriveServicesPageFeatures,
    DEFAULT_PAGE_DATA,
    DEFAULT_SERVICES_PAGE_STATS,
    DEFAULT_SERVICES_PAGE_FEATURES,
    type RawPageData,
    type RawServicesPageStat,
    type RawServicesPageFeature,
} from "@/lib/directus";
import "aos/dist/aos.css";

export default function OverviewServicesPage() {
    const router = useRouter();
    const { language } = useLanguage();
    useAOS();

    const [rawPage, setRawPage] = useState<RawPageData | null>(null);
    const [rawStats, setRawStats] = useState<RawServicesPageStat[] | null>(null);
    const [rawFeatures, setRawFeatures] = useState<RawServicesPageFeature[] | null>(null);

    const [page, setPage] = useState(DEFAULT_PAGE_DATA);
    const [stats, setStats] = useState(DEFAULT_SERVICES_PAGE_STATS);
    const [features, setFeatures] = useState(DEFAULT_SERVICES_PAGE_FEATURES);

    useEffect(() => {
        fetchRawServicesPage().then(setRawPage);
        fetchRawServicesPageStats().then(setRawStats);
        fetchRawServicesPageFeatures().then(setRawFeatures);
    }, []);

    useEffect(() => {
        if (rawPage) setPage(derivePageData(rawPage, language));
    }, [rawPage, language]);

    useEffect(() => {
        if (rawStats) setStats(deriveServicesPageStats(rawStats, language));
    }, [rawStats, language]);

    useEffect(() => {
        if (rawFeatures) setFeatures(deriveServicesPageFeatures(rawFeatures, language));
    }, [rawFeatures, language]);

    const bannerProps = {
        title: "Overview Services",
        backgroundImage: "/images/banner/overview-services.webp",
        breadcrumbItems: [
            { label: "Homepage", href: "/" },
            { label: "Our Services" },
            { label: "Overview Services" },
        ],
    };

    return (
        <MainLayout bannerType='large' bannerProps={bannerProps}>
            <div className='overview-services bg-blue-abstract'>
                <section className='section section--space-top'>
                    <div className='container'>
                        <h2
                            className='text-h1 font-semibold uppercase text-[var(--blue-500)]'
                            data-aos='fade-up'
                            data-aos-delay='200'
                            data-aos-duration='800'
                            data-aos-easing='ease-out-cubic'>
                            {page.heading}
                        </h2>
                        <div className='mt-4 flex justify-end'>
                            <div className='w-full lg:w-9/12'>
                                <p
                                    className='text-h5 text-left font-normal text-[var(--grey-600)]'
                                    data-aos='fade-up'
                                    data-aos-delay='400'
                                    data-aos-duration='800'
                                    data-aos-easing='ease-out-cubic'>
                                    {page.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='our-achievements'>
                    <div className='container'>
                        <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-5'>
                            {stats.map((stat, index) => (
                                <div
                                    key={stat.id}
                                    className='col-span-1'
                                    data-aos='fade-up'
                                    data-aos-delay={String(600 + index * 100)}
                                    data-aos-duration='700'
                                    data-aos-easing='ease-out-cubic'>
                                    <div className='h-full rounded-20 bg-white p-6 text-center shadow-port-card md:text-left'>
                                        <div className='text-h2 mb-2 font-semibold text-[var(--blue-500)]'>
                                            {stat.value}
                                        </div>
                                        <div className='text-h6 mb-1 font-semibold text-[var(--grey-600)]'>
                                            {stat.title}
                                        </div>
                                        <div className='text-body font-normal text-[var(--grey-600)]'>
                                            {stat.description}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className='section section--space-top'>
                    <div className='container'>
                        <h2
                            className='text-h2 mb-10 text-center font-semibold text-[var(--blue-500)] md:text-left'
                            data-aos='fade-up'
                            data-aos-delay='200'
                            data-aos-duration='800'
                            data-aos-easing='ease-out-cubic'>
                            Comprehensive Services
                        </h2>
                        <div className='grid grid-cols-1 gap-8 text-center md:grid-cols-2 md:text-left lg:grid-cols-4'>
                            {features.map((feature, index) => (
                                <div
                                    key={feature.id}
                                    className='col-span-1'
                                    data-aos='fade-up'
                                    data-aos-delay={String(300 + index * 100)}
                                    data-aos-duration='700'
                                    data-aos-easing='ease-out-cubic'>
                                    <div className='flex flex-col gap-3'>
                                        {feature.iconUrl && (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img
                                                src={feature.iconUrl}
                                                alt={feature.title}
                                                width={50}
                                                height={50}
                                                className='mx-auto mb-2 min-h-[50px] md:mx-0'
                                            />
                                        )}
                                        <div className='text-h5 font-semibold text-[var(--blue-500)]'>
                                            {feature.title}
                                        </div>
                                        <div className='text-body font-normal text-[var(--grey-600)]'>
                                            {feature.description}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className='section section--space-y'>
                    <div className='container'>
                        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6'>
                            <div
                                data-aos='fade-up'
                                data-aos-delay='200'
                                data-aos-duration='800'
                                data-aos-easing='ease-out-cubic'>
                                <ServiceCard
                                    title='Engineering Solutions'
                                    description='Your Trusted Partner in After-Sales & Maintenance'
                                    imageSrc='/images/our-services/overview-services/engineering-solutions.webp'
                                    imageAlt='Engineering Solutions'
                                    icon={<i className='ph ph-arrow-up-right'></i>}
                                    onClick={() => {
                                        router.push("/services/engineering-solutions");
                                    }}
                                />
                            </div>
                            <div
                                data-aos='fade-up'
                                data-aos-delay='400'
                                data-aos-duration='800'
                                data-aos-easing='ease-out-cubic'>
                                <ServiceCard
                                    title='Aesthetic Solutions'
                                    description="Elevate Your Boat's Style and Comfort"
                                    imageSrc='/images/our-services/overview-services/aesthetic-solutions.webp'
                                    imageAlt='Aesthetic Solutions'
                                    icon={<i className='ph ph-arrow-up-right'></i>}
                                    onClick={() => {
                                        router.push("/services/aesthetic-solutions");
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
