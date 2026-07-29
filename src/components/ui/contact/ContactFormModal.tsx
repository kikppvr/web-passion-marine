"use client";

import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { BookNowButton } from "@/components/ui/button/BookNowButton";
import { useTranslation } from "@/i18n";

interface ContactFormModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    type: "success" | "error" | "loading";
    title: string;
    message: string;
    errorDetails?: string;
}

export default function ContactFormModal({
    open,
    onOpenChange,
    type,
    title,
    message,
    errorDetails,
}: ContactFormModalProps) {
    const t = useTranslation();
    const isSuccess = type === "success";
    const isLoading = type === "loading";

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent
                size='md'
                className='contact-form-modal'
                closeOnOverlayClick={!isLoading}
                closeOnEscape={!isLoading}>
                <div className='contact-form-modal__content'>
                    {/* Icon */}
                    <div
                        className={`contact-form-modal__icon ${
                            isLoading
                                ? "contact-form-modal__icon--loading"
                                : isSuccess
                                  ? "contact-form-modal__icon--success"
                                  : "contact-form-modal__icon--error"
                        }`}>
                        {isLoading ? (
                            <i className='ph ph-spinner' style={{ fontSize: "64px" }}></i>
                        ) : isSuccess ? (
                            <i className='ph ph-check-circle' style={{ fontSize: "64px" }}></i>
                        ) : (
                            <i className='ph ph-x-circle' style={{ fontSize: "64px" }}></i>
                        )}
                    </div>

                    {/* Title */}
                    <h2
                        className='contact-form-modal__title'
                        dangerouslySetInnerHTML={{ __html: title }}></h2>

                    {/* Message */}
                    <p
                        className='contact-form-modal__message'
                        dangerouslySetInnerHTML={{ __html: message }}></p>

                    {/* Error Details */}
                    {/* {errorDetails && (
                        <div className='contact-form-modal__error-details'>
                            <p className='contact-form-modal__error-label'>Error Details:</p>
                            <p className='contact-form-modal__error-text'>{errorDetails}</p>
                        </div>
                    )} */}

                    {/* Close Button - Hide when loading */}
                    {!isLoading && (
                        <div className='contact-form-modal__actions'>
                            <BookNowButton
                                showIcon={false}
                                onClick={() => {
                                    if (isSuccess) {
                                        onOpenChange(false);
                                    } else {
                                        // Reload page on Try Again
                                        window.location.reload();
                                    }
                                }}>
                                {isSuccess ? t.contactForm.modal.close : t.contactForm.modal.tryAgain}
                            </BookNowButton>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
