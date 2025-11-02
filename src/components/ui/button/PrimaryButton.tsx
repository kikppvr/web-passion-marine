import { cn } from "@/lib/utils";
import * as React from "react";

export interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    icon?: string;
    theme?: "light" | "dark" | "revert";
    noIconRotate?: boolean;
}

const PrimaryButton = React.forwardRef<HTMLButtonElement, PrimaryButtonProps>(
    ({ className, children, icon, theme = "light", noIconRotate = false, ...props }, ref) => {
        const defaultIcon = "ph ph-arrow-right";
        const iconClass = icon || defaultIcon;

        const buttonClasses = cn(
            "btn-primary",
            theme === "dark" && "btn-primary--dark",
            theme === "revert" && "btn-primary--revert",
            noIconRotate && "btn-primary--no-icon-rotate",
            className
        );

        return (
            <button className={buttonClasses} ref={ref} {...props}>
                {theme === "revert" ? (
                    <>
                        {/* Icon first for revert theme */}
                        <div className='btn-icon'>
                            <i className={cn(iconClass)}></i>
                        </div>
                        <div className='btn-content'>
                            <span>{children}</span>
                        </div>
                    </>
                ) : (
                    <>
                        {/* Content first for normal themes */}
                        <div className='btn-content'>
                            <span>{children}</span>
                        </div>
                        <div className='btn-icon'>
                            <i className={cn(iconClass)}></i>
                        </div>
                    </>
                )}
            </button>
        );
    }
);

PrimaryButton.displayName = "PrimaryButton";

export { PrimaryButton };
