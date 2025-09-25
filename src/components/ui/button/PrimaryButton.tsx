import { cn } from '@/lib/utils'
import * as React from 'react'

export interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    icon?: string
    variant?: 'default' | 'inverse'
}

const PrimaryButton = React.forwardRef<HTMLButtonElement, PrimaryButtonProps>(
    ({ className, children, icon, variant = 'default', ...props }, ref) => {
        const defaultIcon = 'ph ph-arrow-right'
        const iconClass = icon || defaultIcon

        const buttonClasses = cn(
            'btn-primary',
            variant === 'inverse' && 'btn-primary--inverse',
            className
        )

        return (
            <button className={buttonClasses} ref={ref} {...props}>
                {/* Content container */}
                <div className="btn-content">
                    <span>{children}</span>
                </div>
                <div className="btn-icon">
                    <i className={cn(iconClass)}></i>
                </div>
            </button>
        )
    }
)

PrimaryButton.displayName = 'PrimaryButton'

export { PrimaryButton }
