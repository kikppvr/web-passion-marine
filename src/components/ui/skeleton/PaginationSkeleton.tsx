import { SkeletonBlock } from "./SkeletonBlock";

export function PaginationSkeleton() {
    return (
        <div className='flex items-center justify-center gap-2' aria-hidden='true'>
            <SkeletonBlock tone='light' className='h-10 w-10 rounded-full' />
            <SkeletonBlock tone='light' className='h-10 w-10 rounded-full' />
            <SkeletonBlock tone='light' className='h-10 w-10 rounded-full' />
            <SkeletonBlock tone='light' className='h-10 w-10 rounded-full' />
            <SkeletonBlock tone='light' className='h-10 w-10 rounded-full' />
        </div>
    );
}
