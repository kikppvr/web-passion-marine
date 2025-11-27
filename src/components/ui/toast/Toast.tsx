"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";
import "@/styles/components/toast/_toast.scss";

export interface ToastProps {
    open: boolean;
    onClose: () => void;
    message?: string;
    duration?: number;
    position?: "top-right" | "top-center" | "top-left" | "bottom-right" | "bottom-center" | "bottom-left";
}

export const Toast = ({
    open,
    onClose,
    message = "Link copied!",
    duration = 2000,
    position = "bottom-center",
}: ToastProps) => {
    useEffect(() => {
        if (open) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [open, duration, onClose]);

    if (!open) return null;

    const positionClasses = {
        "top-right": "toast--top-right",
        "top-center": "toast--top-center",
        "top-left": "toast--top-left",
        "bottom-right": "toast--bottom-right",
        "bottom-center": "toast--bottom-center",
        "bottom-left": "toast--bottom-left",
    };

    return (
        <div className={cn("toast", positionClasses[position], open && "toast--show")}>
            <div className="toast__content">
                <div className="toast__icon">
                    <i className="ph ph-check-circle"></i>
                </div>
                <span className="toast__message">{message}</span>
            </div>
        </div>
    );
};

