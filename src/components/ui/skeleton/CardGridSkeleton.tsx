import { CardSkeleton, type CardSkeletonVariant } from "./CardSkeleton";
import { PaginationSkeleton } from "./PaginationSkeleton";
import type { SkeletonTone } from "./SkeletonBlock";

interface CardGridSkeletonProps {
    count?: number;
    variant?: CardSkeletonVariant;
    tone?: SkeletonTone;
    className?: string;
    showPagination?: boolean;
    paginationClassName?: string;
}

export function CardGridSkeleton({
    count = 9,
    variant = "news",
    tone = "light",
    className,
    showPagination = false,
    paginationClassName = "news__pagination",
}: CardGridSkeletonProps) {
    return (
        <>
            <div className={className} aria-busy='true' aria-label='Loading'>
                {Array.from({ length: count }).map((_, index) => (
                    <CardSkeleton key={index} variant={variant} tone={tone} />
                ))}
            </div>
            {showPagination && (
                <div className={paginationClassName}>
                    <PaginationSkeleton />
                </div>
            )}
        </>
    );
}
