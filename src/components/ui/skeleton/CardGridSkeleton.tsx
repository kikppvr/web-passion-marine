import { CardSkeleton, type CardSkeletonVariant } from "./CardSkeleton";
import type { SkeletonTone } from "./SkeletonBlock";

interface CardGridSkeletonProps {
    count?: number;
    variant?: CardSkeletonVariant;
    tone?: SkeletonTone;
    className?: string;
}

export function CardGridSkeleton({
    count = 9,
    variant = "news",
    tone = "light",
    className,
}: CardGridSkeletonProps) {
    return (
        <div className={className} aria-busy='true' aria-label='Loading'>
            {Array.from({ length: count }).map((_, index) => (
                <CardSkeleton key={index} variant={variant} tone={tone} />
            ))}
        </div>
    );
}
