"use client";

import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { PrimaryButton } from "@/components/ui/button/PrimaryButton";

interface ContactFormModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    type: "success" | "error";
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
    const isSuccess = type === "success";

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent size='md' className='contact-form-modal'>
                <div className='contact-form-modal__content'>
                    {/* Icon */}
                    <div
                        className={`contact-form-modal__icon ${
                            isSuccess
                                ? "contact-form-modal__icon--success"
                                : "contact-form-modal__icon--error"
                        }`}>
                        {isSuccess ? (
                            <i className='ph ph-check-circle' style={{ fontSize: "64px" }}></i>
                        ) : (
                            <i className='ph ph-x-circle' style={{ fontSize: "64px" }}></i>
                        )}
                    </div>

                    {/* Title */}
                    <h2 className='contact-form-modal__title'>{title}</h2>

                    {/* Message */}
                    <p className='contact-form-modal__message'>{message}</p>

                    {/* Error Details */}
                    {errorDetails && (
                        <div className='contact-form-modal__error-details'>
                            <p className='contact-form-modal__error-label'>Error Details:</p>
                            <p className='contact-form-modal__error-text'>{errorDetails}</p>
                        </div>
                    )}

                    {/* Close Button */}
                    <div className='contact-form-modal__actions'>
                        <PrimaryButton onClick={() => onOpenChange(false)}>
                            {isSuccess ? "Close" : "Try Again"}
                        </PrimaryButton>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

