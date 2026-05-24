"use client";

import { useState } from "react";
import { BookNowButton } from "@/components/ui/button/BookNowButton";
import ContactFormModal from "./ContactFormModal";
import PDPAModal from "./PDPAModal";
import { useTranslation } from "@/i18n";

export interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    telephone: string;
    subject: string;
    message: string;
    acceptTerms: boolean;
}

interface ContactFormProps {
    onSubmit?: (data: Omit<ContactFormData, "acceptTerms">) => Promise<void>;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
    const t = useTranslation();

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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [pdpaModalOpen, setPdpaModalOpen] = useState(false);
    const [modalData, setModalData] = useState<{
        type: "success" | "error" | "loading";
        title: string;
        message: string;
        errorDetails?: string;
    } | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));

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

    const formatPhoneNumber = (value: string): string => {
        const numbers = value.replace(/\D/g, "").slice(0, 10);

        if (numbers.length <= 3) return numbers;
        if (numbers.length <= 6) return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;

        return `${numbers.slice(0, 3)}-${numbers.slice(3, 6)}-${numbers.slice(6)}`;
    };

    const handleTelephoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedValue = formatPhoneNumber(e.target.value);
        setFormData(prev => ({
            ...prev,
            telephone: formattedValue,
        }));
    };

    const handleTelephoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const allowedKeys = [
            "Backspace",
            "Delete",
            "Tab",
            "Escape",
            "Enter",
            "ArrowLeft",
            "ArrowRight",
            "ArrowUp",
            "ArrowDown",
        ];

        if (
            allowedKeys.includes(e.key) ||
            (e.ctrlKey && ["a", "c", "v", "x"].includes(e.key.toLowerCase()))
        ) {
            return;
        }

        if (!/^[0-9]$/.test(e.key)) {
            e.preventDefault();
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

        if (!formData.firstName.trim()) newErrors.firstName = t.contactForm.errors.firstName;
        if (!formData.lastName.trim()) newErrors.lastName = t.contactForm.errors.lastName;

        if (!formData.email.trim()) {
            newErrors.email = t.contactForm.errors.emailRequired;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = t.contactForm.errors.emailInvalid;
        }

        if (!formData.subject.trim()) newErrors.subject = t.contactForm.errors.subject;
        if (!formData.message.trim()) newErrors.message = t.contactForm.errors.message;

        if (!formData.acceptTerms) {
            newErrors.acceptTerms = t.contactForm.errors.acceptTerms;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        // Show loading modal immediately
        setModalData({
            type: "loading",
            title: t.contactForm.toast.loadingTitle,
            message: t.contactForm.toast.loadingMessage,
        });
        setModalOpen(true);

        // Use setTimeout to ensure modal renders before async operation
        await new Promise(resolve => setTimeout(resolve, 0));

        try {
            if (onSubmit) {
                await onSubmit({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    telephone: formData.telephone,
                    subject: formData.subject,
                    message: formData.message,
                });
            } else {
                const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        firstName: formData.firstName,
                        lastName: formData.lastName,
                        email: formData.email,
                        telephone: formData.telephone,
                        subject: formData.subject,
                        message: formData.message,
                    }),
                });

                // ✅ FIX: ป้องกัน error เมื่อ response ไม่ใช่ JSON
                const contentType = response.headers.get("content-type") || "";
                let data: any = null;
                let rawText: string | null = null;

                if (contentType.includes("application/json")) {
                    data = await response.json();
                } else {
                    rawText = await response.text();
                }

                if (!response.ok) {
                    console.error("API Error:", {
                        status: response.status,
                        error: data?.error,
                        details: data?.details ?? rawText,
                    });

                    throw new Error(
                        data?.error || data?.details || rawText || "Failed to send message"
                    );
                }
            }

            // ✅ Success
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                telephone: "",
                subject: "",
                message: "",
                acceptTerms: false,
            });

            setModalData({
                type: "success",
                title: t.contactForm.toast.successTitle,
                message: t.contactForm.toast.successMessage,
            });
            setModalOpen(true);
        } catch (error) {
            console.error("Error submitting form:", error);

            const errorMessage =
                error instanceof Error
                    ? error.message
                    : t.contactForm.toast.errorFallback;

            setModalData({
                type: "error",
                title: t.contactForm.toast.errorTitle,
                message: t.contactForm.toast.errorMessage,
                errorDetails: errorMessage,
            });
            setModalOpen(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='contact-form'>
            <div className='contact-form__header'>
                <h2 className='contact-form__title'>{t.contactForm.title}</h2>
                <p className='contact-form__description'>{t.contactForm.description}</p>
            </div>

            <form onSubmit={handleSubmit} className='contact-form__form'>
                <div className='contact-form__row'>
                    <div className='contact-form__field'>
                        <label className='contact-form__label'>
                            {t.contactForm.firstName} <span className='contact-form__required'>*</span>
                        </label>
                        <input
                            type='text'
                            name='firstName'
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className={`contact-form__input ${errors.firstName ? "contact-form__input--error" : ""}`}
                        />
                        {errors.firstName && (
                            <span className='contact-form__error'>{errors.firstName}</span>
                        )}
                    </div>

                    <div className='contact-form__field'>
                        <label className='contact-form__label'>
                            {t.contactForm.lastName} <span className='contact-form__required'>*</span>
                        </label>
                        <input
                            type='text'
                            name='lastName'
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className={`contact-form__input ${errors.lastName ? "contact-form__input--error" : ""}`}
                        />
                        {errors.lastName && (
                            <span className='contact-form__error'>{errors.lastName}</span>
                        )}
                    </div>
                </div>

                <div className='contact-form__row'>
                    <div className='contact-form__field'>
                        <label className='contact-form__label'>
                            {t.contactForm.email} <span className='contact-form__required'>*</span>
                        </label>
                        <input
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`contact-form__input ${errors.email ? "contact-form__input--error" : ""}`}
                        />
                        {errors.email && (
                            <span className='contact-form__error'>{errors.email}</span>
                        )}
                    </div>

                    <div className='contact-form__field'>
                        <label className='contact-form__label'>{t.contactForm.telephone}</label>
                        <input
                            type='tel'
                            name='telephone'
                            value={formData.telephone}
                            onChange={handleTelephoneChange}
                            onKeyDown={handleTelephoneKeyDown}
                            className='contact-form__input'
                            maxLength={12}
                        />
                    </div>
                </div>

                <div className='contact-form__field'>
                    <label className='contact-form__label'>
                        {t.contactForm.subject} <span className='contact-form__required'>*</span>
                    </label>
                    <input
                        type='text'
                        name='subject'
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`contact-form__input ${errors.subject ? "contact-form__input--error" : ""}`}
                    />
                    {errors.subject && (
                        <span className='contact-form__error'>{errors.subject}</span>
                    )}
                </div>

                <div className='contact-form__field'>
                    <label className='contact-form__label'>
                        {t.contactForm.message} <span className='contact-form__required'>*</span>
                    </label>
                    <textarea
                        name='message'
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`contact-form__textarea ${errors.message ? "contact-form__textarea--error" : ""}`}
                        rows={6}
                    />
                    {errors.message && (
                        <span className='contact-form__error'>{errors.message}</span>
                    )}
                </div>

                <div className='contact-form__checkbox'>
                    <div className='flex items-start gap-4'>
                        <input
                            type='checkbox'
                            id='acceptTerms'
                            checked={formData.acceptTerms}
                            onChange={handleCheckboxChange}
                            className='contact-form__checkbox-input'
                        />
                        <label htmlFor='acceptTerms' className='contact-form__checkbox-label'>
                            {t.contactForm.pdpa.prefix}{" "}
                            <button
                                type='button'
                                onClick={e => {
                                    e.preventDefault();
                                    setPdpaModalOpen(true);
                                }}
                                className='contact-form__link contact-form__link--button'>
                                {t.contactForm.pdpa.policyLink}
                            </button>{" "}
                            {t.contactForm.pdpa.suffix}
                        </label>
                    </div>
                    {errors.acceptTerms && (
                        <span className='contact-form__error mt-2 pl-10'>{errors.acceptTerms}</span>
                    )}
                </div>

                <div className='contact-form__submit'>
                    <BookNowButton
                        type='submit'
                        variant='default'
                        showIcon={false}
                        disabled={isSubmitting}>
                        {isSubmitting ? t.contactForm.submitting : t.contactForm.submit}
                    </BookNowButton>
                </div>
            </form>

            {modalData && (
                <ContactFormModal
                    open={modalOpen}
                    onOpenChange={open => {
                        // Don't allow closing loading modal
                        if (modalData.type === "loading") return;
                        setModalOpen(open);
                    }}
                    type={modalData.type}
                    title={modalData.title}
                    message={modalData.message}
                    errorDetails={modalData.errorDetails}
                />
            )}

            <PDPAModal open={pdpaModalOpen} onOpenChange={setPdpaModalOpen} />
        </div>
    );
}
