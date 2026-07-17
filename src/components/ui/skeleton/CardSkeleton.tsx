import { cn } from "@/lib/utils";
import { SkeletonBlock, type SkeletonTone } from "./SkeletonBlock";

export type CardSkeletonVariant = "news" | "portfolio" | "business";

interface CardSkeletonProps {
    variant?: CardSkeletonVariant;
    tone?: SkeletonTone;
    className?: string;
}

export function CardSkeleton({ variant = "news", tone = "light", className }: CardSkeletonProps) {
    if (variant === "portfolio") {
        return (
            <div className={cn("card-portfolio", className)} aria-hidden='true'>
                <SkeletonBlock tone={tone} className='aspect-[4/3] w-full rounded-t-lg' />
                <div className='space-y-3 p-4'>
                    <div className='flex gap-2'>
                        <SkeletonBlock tone={tone} className='h-6 w-[90px]' />
                        <SkeletonBlock tone={tone} className='h-6 w-[90px]' />
                    </div>
                    <SkeletonBlock tone={tone} className='h-5 w-3/4' />
                </div>
            </div>
        );
    }

    if (variant === "business") {
        return (
            <div className={cn("card-business", className)} aria-hidden='true'>
                <SkeletonBlock tone={tone} className='aspect-[3/4] w-full min-h-[320px]' />
                <div className='p-4'>
                    <SkeletonBlock tone={tone} className='h-6 w-2/3' />
                </div>
            </div>
        );
    }

    return (
        <div className={cn("card-news", className)} aria-hidden='true'>
            <SkeletonBlock tone={tone} className='aspect-[8/5] w-full' />
            <div className='space-y-3 p-4'>
                <SkeletonBlock tone={tone} className='h-4 w-1/3' />
                <SkeletonBlock tone={tone} className='h-6 w-full' />
                <SkeletonBlock tone={tone} className='h-4 w-full' />
                <SkeletonBlock tone={tone} className='h-4 w-4/5' />
                <SkeletonBlock tone={tone} className='h-8 w-28' />
            </div>
        </div>
    );
}
