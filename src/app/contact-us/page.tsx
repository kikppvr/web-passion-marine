"use client";

import { useState, useEffect, useMemo } from "react";
import MainLayout from "@/components/ui/layout/MainLayout";
import { PrimaryButton } from "@/components/ui/button/PrimaryButton";
import SocialIcons from "@/components/ui/social/SocialIcons";
import { ContactForm } from "@/components/ui/contact";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n";
import {
    fetchRawContactInfo,
    deriveContactInfo,
    DEFAULT_CONTACT_INFO,
    type RawContactInfo,
} from "@/lib/directus";

export default function ContactUsPage() {
    const { language } = useLanguage();
    const [rawData, setRawData] = useState<RawContactInfo | null>(null);

    // Fetch once on mount — no re-fetch when language changes
    useEffect(() => {
        fetchRawContactInfo().then(setRawData);
    }, []);

    // Derive display data from cached raw + current language (no network call)
    const contactInfo = useMemo(
        () => (rawData ? deriveContactInfo(rawData, language) : DEFAULT_CONTACT_INFO),
        [rawData, language]
    );

    const t = useTranslation();

    const bannerProps = {
        title: t.pages.contactUs.title,
        backgroundImage: "/images/banner/contact-us.webp",
        breadcrumbItems: [
            { label: t.common.homepage, href: "/" },
            { label: t.nav.contactUs },
        ],
    };

    const handleGetDirections = () => {
        window.open(contactInfo.googleMapsUrl ?? "#", "_blank");
    };

    return (
        <MainLayout bannerType='large' bannerProps={bannerProps}>
            <div className='contact-us-page'>
                {/* Contact Information Section */}
                <section className='section section--space-y'>
                    <div className='container'>
                        <div className='contact-info'>
                            <div className='contact-info__content'>
                                <div className='contact-info__header'>
                                    <h2 className='contact-info__subtitle'>{t.pages.contactUs.getInTouchWith}</h2>
                                    <h1 className='contact-info__title'>
                                        {contactInfo.companyName}
                                    </h1>
                                </div>
                                <div className='contact-info__details'>
                                    <p className='contact-info__address'>{contactInfo.address}</p>
                                    <div className='contact-info__contact-methods'>
                                        {contactInfo.phones.length > 0 && (
                                            <div className='contact-info__contact-item contact-info__contact-item--phone'>
                                                {contactInfo.phones[0]?.label && (
                                                    <span className='contact-info__contact-label'>
                                                        {contactInfo.phones[0].label}:
                                                    </span>
                                                )}
                                                <div className='contact-info__phone-list'>
                                                    {contactInfo.phones.map((phone, i) => (
                                                        <a
                                                            key={`phone-${i}`}
                                                            href={`tel:${phone.number.replace(/\D/g, "")}`}
                                                            className='contact-info__contact-link'>
                                                            {phone.number}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        {contactInfo.emails.map((email, i) => (
                                            <div
                                                key={`email-${i}`}
                                                className='contact-info__contact-item contact-info__contact-item--stacked'>
                                                {email.label && (
                                                    <span className='contact-info__contact-label'>
                                                        {email.label}:
                                                    </span>
                                                )}
                                                <a
                                                    href={`mailto:${email.email}`}
                                                    className='contact-info__contact-link'>
                                                    {email.email}
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='contact-info__social'>
                                    <SocialIcons
                                        showLabel={false}
                                        showIcons={{
                                            facebook: true,
                                            instagram: true,
                                            line: true,
                                            link: false,
                                        }}
                                    />
                                </div>
                                <PrimaryButton onClick={handleGetDirections}>
                                    {t.pages.contactUs.getDirections}
                                </PrimaryButton>
                            </div>
                            <div className='contact-info__map'>
                                {contactInfo.googleMapsEmbedUrl && (
                                    <iframe
                                        src={contactInfo.googleMapsEmbedUrl}
                                        width='100%'
                                        height='100%'
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading='lazy'
                                        referrerPolicy='no-referrer-when-downgrade'
                                        className='contact-info__map-iframe'
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className='section section--space-y bg-blue-abstract'>
                    <div className='container'>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-12 lg:col-span-10 lg:col-start-2'>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
