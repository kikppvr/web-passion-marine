import { cn } from "@/lib/utils";
import * as React from "react";

export interface BookNowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    icon?: string;
    variant?: "default" | "dark";
    showIcon?: boolean;
}

const BookNowButton = React.forwardRef<HTMLButtonElement, BookNowButtonProps>(
    ({ className, children, icon, variant = "default", showIcon = true, ...props }, ref) => {
        const defaultIcon = "ph ph-calendar-check";
        const iconClass = icon || defaultIcon;

        const buttonClasses = cn(
            "btn-booknow",
            variant === "dark" && "btn-booknow--dark",
            className
        );

        return (
            <button className={buttonClasses} ref={ref} {...props}>
                {showIcon && (
                    <div className='btn-booknow__icon'>
                        <i className={cn(iconClass)}></i>
                    </div>
                )}
                <div className='btn-booknow__text'>{children}</div>
            </button>
        );
    }
);

BookNowButton.displayName = "BookNowButton";

export { BookNowButton };
