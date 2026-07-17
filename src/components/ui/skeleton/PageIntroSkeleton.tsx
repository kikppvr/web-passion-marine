import { SkeletonBlock } from "./SkeletonBlock";

export function PageIntroSkeleton() {
    return (
        <div aria-busy='true' aria-label='Loading'>
            <SkeletonBlock tone='light' className='text-h1 h-10 w-2/3 max-w-3xl md:h-12' />
            <div className='mt-4 flex justify-end'>
                <div className='w-full lg:w-9/12'>
                    <SkeletonBlock tone='light' className='text-h5 h-5 w-full' />
                    <SkeletonBlock tone='light' className='text-h5 mt-3 h-5 w-4/5' />
                </div>
            </div>
        </div>
    );
}
