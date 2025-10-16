"use client";

import { useState } from "react";
import Image from "next/image";
import MainLayout from "@/components/ui/layout/MainLayout";
import { BookNowButton } from "@/components/ui/button/BookNowButton";
import { PrimaryButton } from "@/components/ui/button/PrimaryButton";
import SocialIcons from "@/components/ui/social/SocialIcons";

interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    telephone: string;
    subject: string;
    message: string;
    acceptTerms: boolean;
}

export default function ContactUsPage() {
    const [formData, setFormData] = useState<ContactFormData>({
        firstName: "",
        lastName: "",
        email: "",
        telephone: "",
        subject: "",
        message: "",
        acceptTerms: false,
    });

    const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

    const bannerProps = {
        title: "Contact Us",
        backgroundImage: "/images/banner/contact-us.webp", // Using existing banner image
        breadcrumbItems: [{ label: "Homepage", href: "/" }, { label: "Contact Us" }],
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
        // Clear error when user starts typing
        if (errors[name as keyof ContactFormData]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined,
            }));
        }
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            acceptTerms: e.target.checked,
        }));
        if (errors.acceptTerms) {
            setErrors(prev => ({
                ...prev,
                acceptTerms: undefined,
            }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }
        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required";
        }
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }
        if (!formData.acceptTerms) {
            newErrors.acceptTerms = "You must accept the terms and conditions";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form submitted:", formData);
            // Handle form submission here
            alert("Thank you for your message! We will get back to you soon.");
        }
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
                                            facebook: true,
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
                        <div className='contact-form'>
                            <div className='contact-form__header'>
                                <h2 className='contact-form__title'>Contact Form</h2>
                                <p className='contact-form__description'>
                                    Your questions and comments are important to us. Please use the
                                    form below to contact and we will get back to you as soon as
                                    possible.
                                </p>
                            </div>
                            <form onSubmit={handleSubmit} className='contact-form__form'>
                                <div className='contact-form__row'>
                                    <div className='contact-form__field'>
                                        <label className='contact-form__label'>
                                            First Name{" "}
                                            <span className='contact-form__required'>*</span>
                                        </label>
                                        <input
                                            type='text'
                                            name='firstName'
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className={`contact-form__input ${errors.firstName ? "contact-form__input--error" : ""}`}
                                            placeholder='Enter your first name'
                                        />
                                        {errors.firstName && (
                                            <span className='contact-form__error'>
                                                {errors.firstName}
                                            </span>
                                        )}
                                    </div>
                                    <div className='contact-form__field'>
                                        <label className='contact-form__label'>
                                            Last Name{" "}
                                            <span className='contact-form__required'>*</span>
                                        </label>
                                        <input
                                            type='text'
                                            name='lastName'
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className={`contact-form__input ${errors.lastName ? "contact-form__input--error" : ""}`}
                                            placeholder='Enter your last name'
                                        />
                                        {errors.lastName && (
                                            <span className='contact-form__error'>
                                                {errors.lastName}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className='contact-form__row'>
                                    <div className='contact-form__field'>
                                        <label className='contact-form__label'>
                                            Email <span className='contact-form__required'>*</span>
                                        </label>
                                        <input
                                            type='email'
                                            name='email'
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={`contact-form__input ${errors.email ? "contact-form__input--error" : ""}`}
                                            placeholder='Enter your email'
                                        />
                                        {errors.email && (
                                            <span className='contact-form__error'>
                                                {errors.email}
                                            </span>
                                        )}
                                    </div>
                                    <div className='contact-form__field'>
                                        <label className='contact-form__label'>Telephone</label>
                                        <input
                                            type='tel'
                                            name='telephone'
                                            value={formData.telephone}
                                            onChange={handleInputChange}
                                            className='contact-form__input'
                                            placeholder='Enter your phone number'
                                        />
                                    </div>
                                </div>
                                <div className='contact-form__field'>
                                    <label className='contact-form__label'>
                                        Subject <span className='contact-form__required'>*</span>
                                    </label>
                                    <input
                                        type='text'
                                        name='subject'
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className={`contact-form__input ${errors.subject ? "contact-form__input--error" : ""}`}
                                        placeholder='Enter subject'
                                    />
                                    {errors.subject && (
                                        <span className='contact-form__error'>
                                            {errors.subject}
                                        </span>
                                    )}
                                </div>
                                <div className='contact-form__field'>
                                    <label className='contact-form__label'>
                                        Message <span className='contact-form__required'>*</span>
                                    </label>
                                    <textarea
                                        name='message'
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className={`contact-form__textarea ${errors.message ? "contact-form__textarea--error" : ""}`}
                                        placeholder='Enter your message'
                                        rows={6}
                                    />
                                    {errors.message && (
                                        <span className='contact-form__error'>
                                            {errors.message}
                                        </span>
                                    )}
                                </div>
                                <div className='contact-form__checkbox'>
                                    <input
                                        type='checkbox'
                                        id='acceptTerms'
                                        checked={formData.acceptTerms}
                                        onChange={handleCheckboxChange}
                                        className='contact-form__checkbox-input'
                                    />
                                    <label
                                        htmlFor='acceptTerms'
                                        className='contact-form__checkbox-label'>
                                        I have read and accepted terms and conditions specified in
                                        the{" "}
                                        <a href='#' className='contact-form__link'>
                                            PDPA Policy
                                        </a>{" "}
                                        and do hereby consent to the collecting, processing and/or
                                        disclosing of the personal data provided by me to fulfil the
                                        above-said purposes.
                                    </label>
                                    {errors.acceptTerms && (
                                        <span className='contact-form__error'>
                                            {errors.acceptTerms}
                                        </span>
                                    )}
                                </div>
                                <div className='contact-form__submit'>
                                    <BookNowButton type='submit' variant='default' showIcon={false}>
                                        Submit
                                    </BookNowButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
