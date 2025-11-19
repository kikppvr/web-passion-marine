"use client";

import MainLayout from "@/components/ui/layout/MainLayout";
import { PrimaryButton } from "@/components/ui/button/PrimaryButton";
import SocialIcons from "@/components/ui/social/SocialIcons";
import { ContactForm } from "@/components/ui/contact";

export default function ContactUsPage() {
    const bannerProps = {
        title: "Contact Us",
        backgroundImage: "/images/banner/contact-us.webp",
        breadcrumbItems: [{ label: "Homepage", href: "/" }, { label: "Contact Us" }],
    };

    const handleGetDirections = () => {
        // Open Google Maps with Passion Marine location
        const googleMapsUrl =
            "https://www.google.com/maps/place/Passion+Marine+Co.,Ltd./@14.0579515,100.5729664,17z/data=!3m1!4b1!4m6!3m5!1s0x30e27f6e657ab7f1:0xccbc7d7df24a6f44!8m2!3d14.0579515!4d100.5755413!16s%2Fg%2F11lz2q076g?entry=ttu&g_ep=EgoyMDI1MTAxMy4wIKXMDSoASAFQAw%3D%3D";
        window.open(googleMapsUrl, "_blank");
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
                                        Passion Marine Company Limited
                                    </h1>
                                </div>
                                <div className='contact-info__details'>
                                    <p className='contact-info__address'>
                                        113/14, Moo 5, Chiang Rak Yai, Sam Khok, Pathum Thani 12160
                                    </p>
                                    <div className='contact-info__contact-methods'>
                                        <p className='contact-info__contact-item'>
                                            Phone: 081 402 4741
                                        </p>
                                        <p className='contact-info__contact-item'>
                                            Fax: 081 402 4741
                                        </p>
                                        <p className='contact-info__contact-item'>
                                            Email: info@passionmarine.co.th
                                        </p>
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
                                <iframe
                                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.123456789!2d100.5729664!3d14.0579515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27f6e657ab7f1%3A0xccbc7d7df24a6f44!2sPassion%20Marine%20Co.%2CLtd.!5e0!3m2!1sen!2sth!4v1234567890123!5m2!1sen!2sth'
                                    width='100%'
                                    height='100%'
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading='lazy'
                                    referrerPolicy='no-referrer-when-downgrade'
                                    className='contact-info__map-iframe'
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className='section section--space-y bg-blue-abstract'>
                    <div className='container'>
                        <ContactForm />
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
