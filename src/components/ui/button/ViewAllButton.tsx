import { cn } from "@/lib/utils";
import * as React from "react";

export interface ViewAllButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    icon?: string;
    variant?: "default" | "dark";
}

const ViewAllButton = React.forwardRef<HTMLButtonElement, ViewAllButtonProps>(
    ({ className, children, icon, variant = "default", ...props }, ref) => {
        const defaultIcon = "ph ph-arrow-elbow-down-right";
        const iconClass = icon || defaultIcon;

        const buttonClasses = cn(
            "btn-viewall",
            variant === "dark" && "btn-viewall--dark",
            className
        );

        return (
            <button className={buttonClasses} ref={ref} {...props}>
                <div className='btn-viewall__icon'>
                    <i className={cn(iconClass)}></i>
                </div>
                <div className='btn-viewall__text'>{children}</div>
            </button>
        );
    }
);

ViewAllButton.displayName = "ViewAllButton";

export { ViewAllButton };
