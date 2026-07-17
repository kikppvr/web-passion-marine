import { SkeletonBlock } from "./SkeletonBlock";

interface MilestoneListSkeletonProps {
    count?: number;
}

export function MilestoneListSkeleton({ count = 4 }: MilestoneListSkeletonProps) {
    return (
        <>
            {Array.from({ length: count }).map((_, index) => (
                <div key={index} className='milestone__item' aria-hidden='true'>
                    <SkeletonBlock tone='light' className='milestone__title mb-6 h-10 w-28' />
                    <SkeletonBlock tone='light' className='milestone__subtitle mb-4 h-5 w-48 max-w-full' />
                    <SkeletonBlock tone='light' className='milestone__description mb-2 h-4 w-full' />
                    <SkeletonBlock tone='light' className='milestone__description h-4 w-4/5' />
                </div>
            ))}
        </>
    );
}
