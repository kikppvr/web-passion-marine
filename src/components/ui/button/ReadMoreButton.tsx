import { cn } from '@/lib/utils'
import * as React from 'react'

export interface ReadMoreButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    variant?: 'default' | 'active'
    theme?: 'light' | 'dark'
    icon?: string
}

const ReadMoreButton = React.forwardRef<HTMLButtonElement, ReadMoreButtonProps>(
    ({ className, children, variant = 'default', theme = 'light', icon, ...props }, ref) => {
        const defaultIcon = 'ph ph-arrow-right'
        const iconClass = icon || defaultIcon

        const buttonClasses = cn(
            'btn-readmore',
            variant === 'active' && 'btn-readmore--active',
            theme === 'dark' && 'btn-readmore--dark',
            className
        )

        return (
            <button className={buttonClasses} ref={ref} {...props}>
                <span className="btn-readmore__text">{children}</span>
                <i className={cn(iconClass, 'btn-readmore__icon')}></i>
            </button>
        )
    }
)

ReadMoreButton.displayName = 'ReadMoreButton'

export { ReadMoreButton }
