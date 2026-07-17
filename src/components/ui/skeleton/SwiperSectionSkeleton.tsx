import { cn } from "@/lib/utils";
import { CardSkeleton, type CardSkeletonVariant } from "./CardSkeleton";
import type { SkeletonTone } from "./SkeletonBlock";

export type SwiperSkeletonLayout = "boat-solutions" | "home-portfolio" | "home-news" | "default";

const SLIDE_WIDTH: Record<SwiperSkeletonLayout, string> = {
    "boat-solutions": "min-w-[83%] shrink-0 sm:min-w-[45%] lg:min-w-[28%]",
    "home-portfolio": "min-w-[91%] shrink-0 md:min-w-[62%] lg:min-w-[45%]",
    "home-news": "min-w-full shrink-0 md:min-w-[48%] lg:min-w-[31%]",
    default: "min-w-[70%] shrink-0 md:min-w-[40%] lg:min-w-[28%]",
};

interface SwiperSectionSkeletonProps {
    count?: number;
    variant?: CardSkeletonVariant;
    tone?: SkeletonTone;
    layout?: SwiperSkeletonLayout;
    className?: string;
}

export function SwiperSectionSkeleton({
    count = 3,
    variant = "business",
    tone = "light",
    layout = "default",
    className,
}: SwiperSectionSkeletonProps) {
    return (
        <div className={cn("flex gap-2 overflow-hidden", className)} aria-busy='true' aria-label='Loading'>
            {Array.from({ length: count }).map((_, index) => (
                <div key={index} className={SLIDE_WIDTH[layout]}>
                    <CardSkeleton variant={variant} tone={tone} />
                </div>
            ))}
        </div>
    );
}
