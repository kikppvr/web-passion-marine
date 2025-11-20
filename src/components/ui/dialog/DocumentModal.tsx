"use client";

import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from "./Dialog";
import { PrimaryButton } from "@/components/ui/button/PrimaryButton";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface DocumentModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title?: string;
    description?: string | React.ReactNode;
    subtitle?: string;
    documentImageSrc?: string;
    documentImageAlt?: string;
    announcementText?: string;
    announcementHighlight?: string[];
    locationText?: string;
    className?: string;
}

export const DocumentModal = ({
    open,
    onOpenChange,
    title,
    description,
    subtitle,
    documentImageSrc,
    documentImageAlt = "Document",
    announcementText,
    announcementHighlight = [],
    locationText,
    className,
}: DocumentModalProps) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent size='xl' className={cn("modal-document", className)}>
                {/* Close Button */}
                <DialogClose asChild>
                    <button className='modal-document__close' aria-label='Close dialog'>
                        <i className='ph-light ph-x'></i>
                    </button>
                </DialogClose>

                {/* Content */}
                <div className='modal-document__content'>
                    {/* Left Side - Document */}
                    {documentImageSrc && (
                        <div className='modal-document__left'>
                            <div className='modal-document__document'>
                                <Image
                                    src={documentImageSrc}
                                    alt={documentImageAlt}
                                    width={300}
                                    height={300}
                                    className='modal-document__document-img'
                                />
                            </div>
                        </div>
                    )}

                    {/* Right Side - Announcement */}
                    <div className='modal-document__right'>
                        <div className='modal-document__announcement'>
                            {announcementText && (
                                <h2
                                    className='modal-document__announcement-title'
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            announcementHighlight.length > 0
                                                ? announcementHighlight.reduce(
                                                      (text, highlight) => {
                                                          const regex = new RegExp(
                                                              `(${highlight})`,
                                                              "gi"
                                                          );
                                                          return text.replace(
                                                              regex,
                                                              `<span class="modal-document__announcement-title--highlight">$1</span>`
                                                          );
                                                      },
                                                      announcementText
                                                  )
                                                : announcementText,
                                    }}
                                />
                            )}
                            {locationText && (
                                <p className='modal-document__announcement-location'>
                                    {locationText}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
