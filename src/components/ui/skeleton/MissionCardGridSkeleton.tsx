import { SkeletonBlock } from "./SkeletonBlock";

interface MissionCardGridSkeletonProps {
    count?: number;
}

export function MissionCardGridSkeleton({ count = 4 }: MissionCardGridSkeletonProps) {
    return (
        <div
            className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4'
            aria-busy='true'
            aria-label='Loading'>
            {Array.from({ length: count }).map((_, index) => (
                <div key={index} className='h-full w-full overflow-hidden rounded-lg'>
                    <SkeletonBlock className='aspect-[3/4] w-full' />
                    <div className='space-y-2 p-4'>
                        <SkeletonBlock className='h-6 w-3/4' />
                        <SkeletonBlock className='h-4 w-full' />
                    </div>
                </div>
            ))}
        </div>
    );
}
