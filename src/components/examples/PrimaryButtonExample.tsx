import { PrimaryButton } from '@/components/ui/PrimaryButton'
import { ArrowRight, ChevronRight } from 'lucide-react'

export default function PrimaryButtonExample() {
    return (
        <div className="space-y-6 p-8">
            <h1 className="text-2xl font-bold text-gray-900">Primary Button Examples</h1>

            {/* Basic Examples */}
            <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-700">Basic Examples</h2>
                <div className="flex gap-4">
                    <PrimaryButton variant="default">Explore More</PrimaryButton>
                    <PrimaryButton variant="variant2">Explore More</PrimaryButton>
                </div>
            </div>

            {/* Size Variants */}
            <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-700">Size Variants</h2>
                <div className="flex items-center gap-4">
                    <PrimaryButton variant="default" size="sm">
                        Small
                    </PrimaryButton>
                    <PrimaryButton variant="default" size="default">
                        Default
                    </PrimaryButton>
                    <PrimaryButton variant="default" size="lg">
                        Large
                    </PrimaryButton>
                </div>
                <div className="flex items-center gap-4">
                    <PrimaryButton variant="variant2" size="sm">
                        Small
                    </PrimaryButton>
                    <PrimaryButton variant="variant2" size="default">
                        Default
                    </PrimaryButton>
                    <PrimaryButton variant="variant2" size="lg">
                        Large
                    </PrimaryButton>
                </div>
            </div>

            {/* Custom Icons */}
            <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-700">Custom Icons</h2>
                <div className="flex gap-4">
                    <PrimaryButton variant="default" icon={<ArrowRight className="h-3 w-3" />}>
                        Get Started
                    </PrimaryButton>
                    <PrimaryButton variant="variant2" icon={<ChevronRight className="h-3 w-3" />}>
                        Continue
                    </PrimaryButton>
                </div>
            </div>

            {/* Different Text */}
            <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-700">Different Text</h2>
                <div className="flex gap-4">
                    <PrimaryButton variant="default">Learn More</PrimaryButton>
                    <PrimaryButton variant="variant2">Next Step</PrimaryButton>
                </div>
            </div>

            {/* Disabled State */}
            <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-700">Disabled State</h2>
                <div className="flex gap-4">
                    <PrimaryButton variant="default" disabled>
                        Disabled Button
                    </PrimaryButton>
                    <PrimaryButton variant="variant2" disabled>
                        Disabled Button
                    </PrimaryButton>
                </div>
            </div>
        </div>
    )
}
