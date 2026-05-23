"use client";

import { useState, useEffect, useMemo } from "react";
import MainLayout from "@/components/ui/layout/MainLayout";
import { PrimaryButton } from "@/components/ui/button/PrimaryButton";
import SocialIcons from "@/components/ui/social/SocialIcons";
import { ContactForm } from "@/components/ui/contact";
import { useLanguage } from "@/contexts/LanguageContext";
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

    const bannerProps = {
        title: "Contact Us",
        backgroundImage: "/images/banner/contact-us.webp",
        breadcrumbItems: [{ label: "Homepage", href: "/" }, { label: "Contact Us" }],
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
                                    <h2 className='contact-info__subtitle'>Get In Touch With</h2>
                                    <h1 className='contact-info__title'>
                                        {contactInfo.companyName}
                                    </h1>
                                </div>
                                <div className='contact-info__details'>
                                    <p className='contact-info__address'>{contactInfo.address}</p>
                                    <div className='contact-info__contact-methods'>
                                        {contactInfo.phones.map((phone, i) => (
                                            <p key={i} className='contact-info__contact-item'>
                                                {phone.label}: {phone.number}
                                            </p>
                                        ))}
                                        {contactInfo.emails.map((email, i) => (
                                            <p key={i} className='contact-info__contact-item'>
                                                {email.label}: {email.email}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                <div className='contact-info__social'>
                                    <SocialIcons
                                        showLabel={false}
                                        showIcons={{
                                            facebook: false,
                                            instagram: true,
                                            line: true,
                                            link: false,
                                        }}
                                    />
                                </div>
                                <PrimaryButton onClick={handleGetDirections}>
                                    Get Directions
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
