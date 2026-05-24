"use client";

import { MainLayout } from "@/components/ui/layout";
import { MissionCard } from "@/components/ui/cards/MissionCard";
import { useAOS } from "@/hooks/useAOS";
import { useState, useEffect, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
    fetchRawAboutPage,
    fetchRawMissionCards,
    fetchRawMilestones,
    deriveAboutPage,
    deriveMissionCards,
    deriveMilestones,
    DEFAULT_ABOUT_PAGE,
    DEFAULT_MISSION_CARDS,
    DEFAULT_MILESTONES,
    type RawAboutPage,
    type RawMissionCard,
    type RawMilestone,
} from "@/lib/directus";
import "aos/dist/aos.css";

export default function AboutUsPage() {
    useAOS();
    const { language } = useLanguage();

    const [openCardIndex, setOpenCardIndex] = useState<number | null>(null);
    const [rawAbout, setRawAbout] = useState<RawAboutPage | null>(null);
    const [rawMissions, setRawMissions] = useState<RawMissionCard[] | null>(null);
    const [rawMilestones, setRawMilestones] = useState<RawMilestone[] | null>(null);

    useEffect(() => {
        Promise.all([
            fetchRawAboutPage(),
            fetchRawMissionCards(),
            fetchRawMilestones(),
        ]).then(([about, missions, milestones]) => {
            setRawAbout(about);
            setRawMissions(missions);
            setRawMilestones(milestones);
        });
    }, []);

    useEffect(() => {
        if (!rawAbout) return;
        import("aos").then(({ default: AOS }) => AOS.refresh());
    }, [rawAbout, language]);

    const pageData = useMemo(
        () => (rawAbout ? deriveAboutPage(rawAbout, language) : DEFAULT_ABOUT_PAGE),
        [rawAbout, language]
    );

    const missionCards = useMemo(
        () => (rawMissions ? deriveMissionCards(rawMissions, language) : DEFAULT_MISSION_CARDS),
        [rawMissions, language]
    );

    const milestones = useMemo(
        () => (rawMilestones ? deriveMilestones(rawMilestones, language) : DEFAULT_MILESTONES),
        [rawMilestones, language]
    );

    const bannerProps = {
        title: "About Us",
        subtitle: "Learn more about Passion Marine and our commitment to excellence",
        backgroundImage: pageData.bannerImage ?? "/images/banner/about-us.webp",
        breadcrumbItems: [{ label: "Homepage", href: "/" }, { label: "About Us" }],
    };

    const handleCardToggle = (index: number) => {
        setOpenCardIndex(openCardIndex === index ? null : index);
    };

    return (
        <MainLayout bannerType='large' bannerProps={bannerProps}>
            <section className='section section--space-top'>
                <div className='container'>
                    <div className='grid grid-cols-1 gap-6 lg:grid-cols-12'>
                        <div className='lg:col-span-3' data-aos='fade-up' data-aos-delay='100'>
                            <h2 className='text-h3 text-[var(--blue-500)]'>{pageData.visionLabel}</h2>
                        </div>
                        <div className='lg:col-span-9'>
                            <h3
                                className='text-display-3 mb-4 text-[var(--blue-500)] md:mb-6 lg:mb-8'
                                data-aos='fade-up'
                                data-aos-delay='200'>
                                {pageData.visionHeading}
                            </h3>
                            <div
                                className='about-vision-body'
                                dangerouslySetInnerHTML={{ __html: pageData.visionBody }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className='section section--space-top'>
                <div className='container'>
                    <div className='grid grid-cols-1 gap-6 lg:grid-cols-12'>
                        <div className='lg:col-span-3' data-aos='fade-up' data-aos-delay='100'>
                            <h2 className='text-h3 text-[var(--blue-500)]'>{pageData.missionLabel}</h2>
                        </div>
                        <div className='lg:col-span-9'>
                            <div
                                className='about-mission-body'
                                dangerouslySetInnerHTML={{ __html: pageData.missionBody }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-card-mission pb-[96px] pt-[40px]'>
                <div className='container'>
                    <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4'>
                        {missionCards.map((item, index) => (
                            <div
                                key={item.id}
                                className='h-full w-full'
                                data-aos='fade-up'
                                data-aos-delay={`${(index + 1) * 100}`}>
                                <MissionCard
                                    title={item.title}
                                    description={item.description}
                                    image={item.image}
                                    isOpen={openCardIndex === index}
                                    onToggle={() => handleCardToggle(index)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className='milestone section section--space-y'>
                <div className='container'>
                    <div className='milestone__wrapper'>
                        <div className='milestone__left' data-aos='fade-up' data-aos-delay='100'>
                            <h2 className='text-h3 text-[var(--blue-500)]'>{pageData.milestonesLabel}</h2>
                        </div>
                        <div className='milestone__right'>
                            {milestones.map((item, index) => (
                                <div
                                    key={item.id}
                                    className='milestone__item'
                                    data-aos='fade-up'
                                    data-aos-delay={`${(index + 2) * 100}`}>
                                    <h3 className='milestone__title'>{item.year}</h3>
                                    <p className='milestone__subtitle'>{item.subtitle}</p>
                                    <p className='milestone__description'>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
