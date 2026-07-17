import { SkeletonBlock } from "./SkeletonBlock";

interface StatsGridSkeletonProps {
    count?: number;
}

export function StatsGridSkeleton({ count = 5 }: StatsGridSkeletonProps) {
    return (
        <div
            className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-5'
            aria-busy='true'
            aria-label='Loading'>
            {Array.from({ length: count }).map((_, index) => (
                <div key={index} className='col-span-1 rounded-20 bg-white p-6 shadow-port-card'>
                    <div className='space-y-3'>
                        <SkeletonBlock tone='light' className='h-10 w-1/2' />
                        <SkeletonBlock tone='light' className='h-6 w-3/4' />
                        <SkeletonBlock tone='light' className='h-4 w-full' />
                    </div>
                </div>
            ))}
        </div>
    );
}
