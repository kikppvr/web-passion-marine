import { SkeletonBlock } from "./SkeletonBlock";

interface MissionCardGridSkeletonProps {
    count?: number;
}

export function MissionCardGridSkeleton({ count = 4 }: MissionCardGridSkeletonProps) {
    return (
        <div
            className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4'
            aria-busy='true'
            aria-label='Loading'>
            {Array.from({ length: count }).map((_, index) => (
                <div key={index} className='h-full w-full'>
                    <div className='card-mission h-full' aria-hidden='true'>
                        <div className='card-mission__image-container'>
                            <SkeletonBlock tone='light' className='card-skeleton__ratio-image' />
                        </div>
                        <div className='card-mission__content'>
                            <div className='card-mission__content-inner'>
                                <SkeletonBlock tone='light' className='card-mission__title mb-3 h-6 w-3/4' />
                                <SkeletonBlock tone='light' className='h-4 w-full' />
                                <SkeletonBlock tone='light' className='mt-2 h-4 w-5/6' />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
