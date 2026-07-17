import { SkeletonBlock } from "./SkeletonBlock";

interface MilestoneListSkeletonProps {
    count?: number;
}

export function MilestoneListSkeleton({ count = 4 }: MilestoneListSkeletonProps) {
    return (
        <div className='space-y-8' aria-busy='true' aria-label='Loading'>
            {Array.from({ length: count }).map((_, index) => (
                <div key={index} className='space-y-2 border-b border-white/10 pb-6'>
                    <SkeletonBlock className='h-8 w-24' />
                    <SkeletonBlock className='h-5 w-1/3' />
                    <SkeletonBlock className='h-4 w-full' />
                    <SkeletonBlock className='h-4 w-4/5' />
                </div>
            ))}
        </div>
    );
}
