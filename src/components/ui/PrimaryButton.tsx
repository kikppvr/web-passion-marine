import { cn } from '@/lib/utils'
import * as React from 'react'

export interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    icon?: string
}

const PrimaryButton = React.forwardRef<HTMLButtonElement, PrimaryButtonProps>(
    ({ className, children, icon, ...props }, ref) => {
        const defaultIcon = 'ph ph-arrow-right'
        const iconClass = icon || defaultIcon

        const buttonClasses = cn('btn-primary', className)

        return (
            <button className={buttonClasses} ref={ref} {...props}>
                {/* Content container */}
                <div className="btn-content">
                    <span>{children}</span>
                    <i className={cn(iconClass, 'btn-icon')}></i>
                </div>
            </button>
        )
    }
)

PrimaryButton.displayName = 'PrimaryButton'

export { PrimaryButton }
