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
                <div key={index} className='col-span-1'>
                    <div className='flex flex-col gap-3'>
                        <SkeletonBlock
                            tone='light'
                            className='mx-auto mb-2 h-[50px] w-[50px] min-h-[50px] rounded-full md:mx-0'
                        />
                        <SkeletonBlock tone='light' className='text-h5 mx-auto h-6 w-2/3 md:mx-0' />
                        <SkeletonBlock tone='light' className='text-body mx-auto h-4 w-full md:mx-0' />
                        <SkeletonBlock tone='light' className='text-body mx-auto h-4 w-4/5 md:mx-0' />
                    </div>
                </div>
            ))}
        </div>
    );
}
