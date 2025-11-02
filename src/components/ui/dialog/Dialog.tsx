"use client";

import * as RadixDialog from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import * as React from "react";
import "@/styles/base/_dialog.scss";

export interface DialogProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children: React.ReactNode;
}

export interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    size?: "sm" | "md" | "lg" | "xl" | "full";
    closeOnOverlayClick?: boolean;
    closeOnEscape?: boolean;
}

export interface DialogOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

const Dialog = ({ open, onOpenChange, children }: DialogProps) => {
    return (
        <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
            {children}
        </RadixDialog.Root>
    );
};

const DialogTrigger = RadixDialog.Trigger;

const DialogPortal = RadixDialog.Portal;

const DialogOverlay = React.forwardRef<HTMLDivElement, DialogOverlayProps>(
    ({ className, ...props }, ref) => (
        <RadixDialog.Overlay ref={ref} className={cn("dialog-overlay", className)} {...props} />
    )
);
DialogOverlay.displayName = "DialogOverlay";

const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>(
    (
        {
            className,
            size = "md",
            closeOnOverlayClick = true,
            closeOnEscape = true,
            children,
            ...props
        },
        ref
    ) => {
        const sizeMap = {
            sm: "dialog-content--sm",
            md: "dialog-content--md",
            lg: "dialog-content--lg",
            xl: "dialog-content--xl",
            full: "dialog-content--full",
        };

        return (
            <DialogPortal>
                <DialogOverlay />
                <RadixDialog.Content
                    ref={ref}
                    className={cn("dialog-content", sizeMap[size], className)}
                    onPointerDownOutside={closeOnOverlayClick ? undefined : e => e.preventDefault()}
                    onEscapeKeyDown={closeOnEscape ? undefined : e => e.preventDefault()}
                    {...props}>
                    {children}
                </RadixDialog.Content>
            </DialogPortal>
        );
    }
);
DialogContent.displayName = "DialogContent";

const DialogTitle = RadixDialog.Title;
const DialogDescription = RadixDialog.Description;
const DialogClose = RadixDialog.Close;

export {
    Dialog,
    DialogTrigger,
    DialogPortal,
    DialogOverlay,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogClose,
};
