import { SkeletonBlock } from "./SkeletonBlock";

interface ServiceSectionSkeletonProps {
    count?: number;
    galleryClassName?: string;
}

function GallerySliderSkeleton({ galleryClassName = "gallery-engineering-solutions" }: { galleryClassName?: string }) {
    return (
        <div className={`gallery-slider ${galleryClassName}`}>
            <div className='gallery-slider__main'>
                <div className='gallery-slider__slide'>
                    <div className='gallery-slider__image-container'>
                        <SkeletonBlock tone='light' className='card-skeleton__ratio-image' />
                    </div>
                </div>
            </div>
        </div>
    );
}

function ServiceTextSkeleton() {
    return (
        <div className='lg:px-4 xl:px-6'>
            <SkeletonBlock tone='light' className='text-h3 lg:text-h4 mb-4 h-8 w-2/3 md:mb-6' />
            <SkeletonBlock tone='light' className='text-body md:text-lead-2 mb-3 h-4 w-full' />
            <SkeletonBlock tone='light' className='text-body md:text-lead-2 mb-3 h-4 w-full' />
            <SkeletonBlock tone='light' className='text-body md:text-lead-2 h-4 w-3/4' />
        </div>
    );
}

export function ServiceSectionSkeleton({
    count = 2,
    galleryClassName = "gallery-engineering-solutions",
}: ServiceSectionSkeletonProps) {
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
                                <GallerySliderSkeleton galleryClassName={galleryClassName} />
                                <ServiceTextSkeleton />
                            </>
                        ) : (
                            <>
                                <div className='order-2 lg:order-1'>
                                    <ServiceTextSkeleton />
                                </div>
                                <div className='order-1 lg:order-2'>
                                    <GallerySliderSkeleton galleryClassName={galleryClassName} />
                                </div>
                            </>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
