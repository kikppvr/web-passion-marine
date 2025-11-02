"use client";

import { Dialog, DialogContent, DialogClose } from "./Dialog";
import { cn } from "@/lib/utils";

interface FullscreenModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children: React.ReactNode;
    className?: string;
}

export const FullscreenModal = ({
    open,
    onOpenChange,
    children,
    className,
}: FullscreenModalProps) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent
                size='full'
                className={cn(
                    "max-w-screen h-screen max-h-screen w-screen rounded-none p-0",
                    className
                )}
                closeOnOverlayClick={false}>
                <DialogClose className='absolute right-4 top-4 z-50 text-white hover:text-gray-300'>
                    ✕
                </DialogClose>
                {children}
            </DialogContent>
        </Dialog>
    );
};
