import { SkeletonBlock } from "./SkeletonBlock";

export function DetailImageSkeleton({ className = "" }: { className?: string }) {
    return (
        <SkeletonBlock
            tone='light'
            className={`detail-gallery-skeleton__main-image w-full ${className}`.trim()}
            aria-hidden='true'
        />
    );
}

export function DetailGallerySkeleton() {
    return (
        <div className='gallery-thumbnails detail-gallery-skeleton' aria-hidden='true'>
            <div className='lightgallery-container'>
                <div className='gallery-thumbnails__main'>
                    <div className='gallery-thumbnails__main-link'>
                        <DetailImageSkeleton />
                    </div>
                </div>

                <div className='gallery-thumbnails__thumbnails'>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className='gallery-thumbnails__thumbnail'>
                            <SkeletonBlock tone='light' className='detail-gallery-skeleton__thumb-image' />
                            {index === 3 && (
                                <div className='gallery-thumbnails__overlay detail-gallery-skeleton__overlay'>
                                    <SkeletonBlock tone='light' className='h-6 w-10' />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
