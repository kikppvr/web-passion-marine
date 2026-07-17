import { cn } from "@/lib/utils";
import { CardSkeleton, type CardSkeletonVariant } from "./CardSkeleton";
import type { SkeletonTone } from "./SkeletonBlock";

interface SwiperSectionSkeletonProps {
    count?: number;
    variant?: CardSkeletonVariant;
    tone?: SkeletonTone;
    className?: string;
}

export function SwiperSectionSkeleton({
    count = 3,
    variant = "business",
    tone = "light",
    className,
}: SwiperSectionSkeletonProps) {
    return (
        <div className={cn("flex gap-2 overflow-hidden", className)} aria-busy='true' aria-label='Loading'>
            {Array.from({ length: count }).map((_, index) => (
                <div
                    key={index}
                    className='min-w-[70%] shrink-0 md:min-w-[40%] lg:min-w-[28%]'>
                    <CardSkeleton variant={variant} tone={tone} />
                </div>
            ))}
        </div>
    );
}
