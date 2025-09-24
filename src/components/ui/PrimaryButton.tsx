import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import * as React from 'react'

export interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'variant2'
    size?: 'sm' | 'default' | 'lg'
    children: React.ReactNode
    icon?: React.ReactNode
    iconPosition?: 'left' | 'right'
}

const PrimaryButton = React.forwardRef<HTMLButtonElement, PrimaryButtonProps>(
    (
        {
            className,
            variant = 'default',
            size = 'default',
            children,
            icon,
            iconPosition = 'right',
            ...props
        },
        ref
    ) => {
        const defaultIcon = <ChevronRight className="btn-icon" />
        const buttonIcon = icon || defaultIcon

        const buttonClasses = cn(
            'btn-primary',
            variant === 'variant2' && 'btn-primary--variant2',
            size === 'sm' && 'btn-primary--sm',
            size === 'lg' && 'btn-primary--lg',
            className
        )

        return (
            <button className={buttonClasses} ref={ref} {...props}>
                {/* Content container */}
                <div className="btn-content">
                    {iconPosition === 'left' && buttonIcon}
                    <span>{children}</span>
                    {iconPosition === 'right' && buttonIcon}
                </div>

                {/* Icon container for variant2 */}
                {variant === 'variant2' && (
                    <div className="btn-icon-container">
                        <div className="btn-icon-wrapper">{buttonIcon}</div>
                    </div>
                )}
            </button>
        )
    }
)

PrimaryButton.displayName = 'PrimaryButton'

export { PrimaryButton }
