import { cn } from '@/lib/utils';
import * as React from 'react';

export interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    icon?: string;
    theme?: 'light' | 'dark';
}

const PrimaryButton = React.forwardRef<HTMLButtonElement, PrimaryButtonProps>(
    ({ className, children, icon, theme = 'light', ...props }, ref) => {
        const defaultIcon = 'ph ph-arrow-right';
        const iconClass = icon || defaultIcon;

        const buttonClasses = cn('btn-primary', theme === 'dark' && 'btn-primary--dark', className);

        return (
            <button className={buttonClasses} ref={ref} {...props}>
                {/* Content container */}
                <div className='btn-content'>
                    <span>{children}</span>
                </div>
                <div className='btn-icon'>
                    <i className={cn(iconClass)}></i>
                </div>
            </button>
        );
    }
);

PrimaryButton.displayName = 'PrimaryButton';

export { PrimaryButton };
