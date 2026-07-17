import { SkeletonBlock } from "./SkeletonBlock";

export function PageIntroSkeleton() {
    return (
        <div className='space-y-4' aria-busy='true' aria-label='Loading'>
            <SkeletonBlock className='h-10 w-2/3' />
            <div className='mt-4 flex justify-end'>
                <div className='w-full space-y-3 lg:w-9/12'>
                    <SkeletonBlock className='h-5 w-full' />
                    <SkeletonBlock className='h-5 w-4/5' />
                </div>
            </div>
        </div>
    );
}
