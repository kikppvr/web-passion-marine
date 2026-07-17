import { cn } from "@/lib/utils";
import { SkeletonBlock, type SkeletonTone } from "./SkeletonBlock";

export type CardSkeletonVariant = "news" | "portfolio" | "business";

interface CardSkeletonProps {
    variant?: CardSkeletonVariant;
    tone?: SkeletonTone;
    className?: string;
}

function RatioImageSkeleton({ tone = "light" }: { tone?: SkeletonTone }) {
    return <SkeletonBlock tone={tone} className='card-skeleton__ratio-image' />;
}

export function CardSkeleton({ variant = "news", tone = "light", className }: CardSkeletonProps) {
    if (variant === "portfolio") {
        return (
            <div className={cn("card-portfolio", className)} aria-hidden='true'>
                <div className='card-portfolio__link'>
                    <div className='card-portfolio__image-container'>
                        <RatioImageSkeleton tone={tone} />
                    </div>
                    <div className='card-portfolio__content'>
                        <div className='card-portfolio__brands'>
                            <SkeletonBlock tone={tone} className='h-6 w-[90px]' />
                            <SkeletonBlock tone={tone} className='h-6 w-[90px]' />
                        </div>
                        <div className='card-portfolio__model'>
                            <SkeletonBlock tone={tone} className='h-5 w-3/4' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (variant === "business") {
        return (
            <div className={cn("card-business", className)} aria-hidden='true'>
                <div className='card-business__link'>
                    <div className='card-business__icon'>
                        <SkeletonBlock tone={tone} className='h-8 w-8 rounded-full' />
                    </div>
                    <div className='card-business__image-container-wrapper'>
                        <div className='card-business__image-container'>
                            <RatioImageSkeleton tone={tone} />
                            <div className='card-business__overlay' />
                        </div>
                    </div>
                    <div className='card-business__content'>
                        <SkeletonBlock tone={tone} className='card-business__title h-6 w-2/3' />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={cn("card-news", className)} aria-hidden='true'>
            <div className='card-news__link'>
                <div className='card-news__image-container'>
                    <RatioImageSkeleton tone={tone} />
                </div>
                <div className='card-news__content'>
                    <SkeletonBlock tone={tone} className='mb-2 h-4 w-24' />
                    <div className='card-news__header'>
                        <SkeletonBlock tone={tone} className='mb-2 h-6 w-full' />
                        <SkeletonBlock tone={tone} className='mb-2 h-4 w-full' />
                        <SkeletonBlock tone={tone} className='h-4 w-4/5' />
                    </div>
                    <div className='card-news__footer'>
                        <SkeletonBlock tone={tone} className='mt-4 h-8 w-28' />
                    </div>
                </div>
            </div>
        </div>
    );
}
