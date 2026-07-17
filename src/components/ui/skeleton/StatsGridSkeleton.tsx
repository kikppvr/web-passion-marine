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
                <div key={index} className='col-span-1'>
                    <div className='h-full rounded-20 bg-white p-6 text-center shadow-port-card md:text-left'>
                        <SkeletonBlock tone='light' className='text-h2 mx-auto mb-2 h-10 w-1/2 md:mx-0' />
                        <SkeletonBlock tone='light' className='text-h6 mx-auto mb-1 h-6 w-3/4 md:mx-0' />
                        <SkeletonBlock tone='light' className='text-body mx-auto h-4 w-full md:mx-0' />
                    </div>
                </div>
            ))}
        </div>
    );
}
