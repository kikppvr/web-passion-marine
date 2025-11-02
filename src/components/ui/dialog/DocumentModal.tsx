"use client";

import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from "./Dialog";
import { PrimaryButton } from "@/components/ui/button/PrimaryButton";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface DocumentModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    description?: string | React.ReactNode;
    subtitle?: string;
    imageSrc?: string;
    imageAlt?: string;
    imageWidth?: number;
    imageHeight?: number;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void;
    variant?: "danger" | "warning" | "info";
    className?: string;
}

export const DocumentModal = ({
    open,
    onOpenChange,
    title,
    description,
    subtitle,
    imageSrc,
    imageAlt = "",
    imageWidth,
    imageHeight,
    confirmText = "Confirm",
    cancelText = "Cancel",
    onConfirm,
    variant = "info",
    className,
}: DocumentModalProps) => {
    const handleConfirm = () => {
        onConfirm?.();
        onOpenChange(false);
    };

    const variantStyles = {
        danger: "",
        warning: "",
        info: "",
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent size='full' className={cn(variantStyles[variant], className)}>
                {/* Close Button */}
                <DialogClose asChild>
                    <button aria-label='Close dialog'>✕</button>
                </DialogClose>

                {/* Content */}
                <div className='modal-document__content'>
                    {/* Image */}
                    {imageSrc && (
                        <div className='modal-document__image'>
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                width={imageWidth || 178}
                                height={imageHeight || 48}
                                className='modal-document__image-img'
                            />
                        </div>
                    )}

                    <DialogTitle>{title}</DialogTitle>
                    {description && <DialogDescription>{description}</DialogDescription>}
                    {subtitle && <p className='modal-document__subtitle'>{subtitle}</p>}
                </div>
            </DialogContent>
        </Dialog>
    );
};
