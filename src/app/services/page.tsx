"use client";

import { useTranslation } from "@/i18n";
import MainLayout from "@/components/ui/layout/MainLayout";

export default function ServicesPage() {
    const t = useTranslation();

    const bannerProps = {
        title: t.pages.services.title,
        subtitle: t.pages.services.subtitle,
        backgroundImage: "/images/banner/overview-services.webp",
        breadcrumbItems: [
            { label: t.common.homepage, href: "/" },
            { label: t.nav.ourServices },
        ],
    };

    return (
        <MainLayout bannerType='large' bannerProps={bannerProps}>
            <div className='services'>
                <section className='section section--space-top'>
                    <div className='container'>
                        <h1 className='text-h1 font-semibold uppercase text-[var(--blue-500)]'>
                            {t.pages.services.title}
                        </h1>
                        <div className='mt-4 flex justify-end'>
                            <div className='w-full lg:w-9/12'>
                                <p className='text-h5 mb-4 text-left font-normal text-[var(--grey-600)]'>
                                    {t.pages.services.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
