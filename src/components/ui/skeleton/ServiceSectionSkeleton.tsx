import { SkeletonBlock } from "./SkeletonBlock";

interface ServiceSectionSkeletonProps {
    count?: number;
}

export function ServiceSectionSkeleton({ count = 2 }: ServiceSectionSkeletonProps) {
    return (
        <div aria-busy='true' aria-label='Loading'>
            {Array.from({ length: count }).map((_, index) => {
                const isEven = index % 2 === 0;
                const spacingClass = index < count - 1 ? "mb-10 md:mb-16 lg:mb-6" : "";

                return (
                    <div
                        key={index}
                        className={`${spacingClass} grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-8`}>
                        {isEven ? (
                            <>
                                <SkeletonBlock className='aspect-[4/3] w-full' />
                                <div className='space-y-4 lg:px-4 xl:px-6'>
                                    <SkeletonBlock className='h-8 w-2/3' />
                                    <SkeletonBlock className='h-4 w-full' />
                                    <SkeletonBlock className='h-4 w-full' />
                                    <SkeletonBlock className='h-4 w-3/4' />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='order-2 space-y-4 lg:order-1 lg:px-4 xl:px-6'>
                                    <SkeletonBlock className='h-8 w-2/3' />
                                    <SkeletonBlock className='h-4 w-full' />
                                    <SkeletonBlock className='h-4 w-full' />
                                    <SkeletonBlock className='h-4 w-3/4' />
                                </div>
                                <SkeletonBlock className='order-1 aspect-[4/3] w-full lg:order-2' />
                            </>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
