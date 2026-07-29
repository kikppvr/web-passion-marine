import { SkeletonBlock } from "./SkeletonBlock";

export function DetailActionsSkeleton() {
    return (
        <div
            className='flex items-center justify-between lg:px-16 xl:px-28'
            aria-hidden='true'>
            <SkeletonBlock tone='light' className='h-12 w-32 rounded-full' />
            <div className='flex items-center gap-4'>
                <SkeletonBlock tone='light' className='hidden h-4 w-16 sm:block' />
                <div className='flex gap-2'>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <SkeletonBlock key={index} tone='light' className='h-10 w-10 rounded-full' />
                    ))}
                </div>
            </div>
        </div>
    );
}
