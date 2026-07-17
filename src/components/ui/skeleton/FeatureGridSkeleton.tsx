import { SkeletonBlock } from "./SkeletonBlock";

interface FeatureGridSkeletonProps {
    count?: number;
}

export function FeatureGridSkeleton({ count = 4 }: FeatureGridSkeletonProps) {
    return (
        <div
            className='grid grid-cols-1 gap-8 text-center md:grid-cols-2 md:text-left lg:grid-cols-4'
            aria-busy='true'
            aria-label='Loading'>
            {Array.from({ length: count }).map((_, index) => (
                <div key={index} className='col-span-1 flex flex-col items-center gap-3 md:items-start'>
                    <SkeletonBlock className='h-[50px] w-[50px] rounded-full' />
                    <SkeletonBlock className='h-6 w-2/3' />
                    <SkeletonBlock className='h-4 w-full' />
                    <SkeletonBlock className='h-4 w-4/5' />
                </div>
            ))}
        </div>
    );
}
