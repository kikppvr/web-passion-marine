"use client";

import { useState } from "react";
import Image from "next/image";
import MainLayout from "@/components/ui/layout/MainLayout";
import { BookNowButton } from "@/components/ui/button/BookNowButton";
import { PrimaryButton } from "@/components/ui/button/PrimaryButton";

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
        // Open Google Maps with the company address
        const address = "113/14, Moo 5, Chiang Rak Yai, Sam Khok, Pathum Thani 12160";
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
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
                                    <a href='#' className='contact-info__social-link'>
                                        <Image
                                            src='/images/icon/ic-facebook.svg'
                                            alt='Facebook'
                                            width={24}
                                            height={24}
                                        />
                                    </a>
                                    <a href='#' className='contact-info__social-link'>
                                        <Image
                                            src='/images/icon/ic-instagram.svg'
                                            alt='Instagram'
                                            width={24}
                                            height={24}
                                        />
                                    </a>
                                    <a href='#' className='contact-info__social-link'>
                                        <Image
                                            src='/images/icon/ic-line.svg'
                                            alt='Line'
                                            width={24}
                                            height={24}
                                        />
                                    </a>
                                </div>
                                <PrimaryButton onClick={handleGetDirections}>
                                    Get Directions
                                </PrimaryButton>
                            </div>
                            <div className='contact-info__map'>
                                <Image
                                    src='/images/home/charter/charter-01.webp'
                                    alt='Passion Marine Location'
                                    fill
                                    className='contact-info__map-image'
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
                                    <BookNowButton type='submit' variant='default'>
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
