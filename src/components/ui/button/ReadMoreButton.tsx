import { cn } from '@/lib/utils';
import * as React from 'react';

export interface ReadMoreButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    theme?: 'light' | 'dark';
    icon?: string;
}

const ReadMoreButton = React.forwardRef<HTMLButtonElement, ReadMoreButtonProps>(
    ({ className, children, theme = 'light', icon, ...props }, ref) => {
        const defaultIcon = 'ph ph-plus';
        const iconClass = icon || defaultIcon;

        const buttonClasses = cn(
            'btn-readmore',
            theme === 'dark' && 'btn-readmore--dark',
            className
        );

        return (
            <button className={buttonClasses} ref={ref} {...props}>
                <div className='btn-readmore__text'>{children}</div>
                <div className='btn-readmore__icon'>
                    <i className={cn(iconClass)}></i>
                </div>
            </button>
        );
    }
);

ReadMoreButton.displayName = 'ReadMoreButton';

export { ReadMoreButton };
