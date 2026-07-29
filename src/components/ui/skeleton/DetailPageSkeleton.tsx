import { SwiperSectionSkeleton } from "./SwiperSectionSkeleton";
import { DetailGallerySkeleton } from "./DetailGallerySkeleton";
import { NewsContentSkeleton, PortfolioContentSkeleton } from "./DetailContentSkeleton";
import { DetailActionsSkeleton } from "./DetailActionsSkeleton";
import { SkeletonBlock } from "./SkeletonBlock";

export type DetailPageVariant = "news" | "portfolio";

interface DetailPageSkeletonProps {
    variant?: DetailPageVariant;
}

function NewsHeroSkeleton() {
    return (
        <>
            <SkeletonBlock
                tone='light'
                className='news-detail__title mx-auto mb-4 h-12 w-[88%] max-w-4xl xl:mb-6 md:h-14'
                aria-hidden='true'
            />
            <SkeletonBlock tone='light' className='mx-auto h-5 w-36' aria-hidden='true' />
        </>
    );
}

function PortfolioHeroSkeleton() {
    return (
        <>
            <SkeletonBlock
                tone='light'
                className='text-h1 mx-auto mb-4 h-12 w-[82%] max-w-4xl xl:mb-6 md:h-14'
                aria-hidden='true'
            />
            <SkeletonBlock
                tone='light'
                className='text-body lg:text-lead-2 mx-auto mb-4 h-5 w-[72%] xl:mb-6'
                aria-hidden='true'
            />
            <SkeletonBlock
                tone='light'
                className='text-body lg:text-lead-2 mx-auto mb-4 h-5 w-[58%] xl:mb-6'
                aria-hidden='true'
            />
            <SkeletonBlock
                tone='light'
                className='text-h6 mx-auto mb-4 h-6 w-44 xl:mb-6'
                aria-hidden='true'
            />
            <div className='flex justify-center gap-4' aria-hidden='true'>
                {Array.from({ length: 3 }).map((_, index) => (
                    <SkeletonBlock
                        key={index}
                        tone='light'
                        className='portfolio-hero__brand-logo h-[37px] w-[100px]'
                    />
                ))}
            </div>
        </>
    );
}

function PortfolioServicesSkeleton() {
    return (
        <>
            <SkeletonBlock tone='light' className='text-h2 mb-8 h-9 w-72 max-w-full' aria-hidden='true' />
            <div className='portfolio-services__swiper'>
                <div className='flex gap-4 overflow-hidden pb-[50px]' aria-hidden='true'>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className='card-provided min-w-[180px] flex-1'>
                            <div className='card-provided__icon'>
                                <SkeletonBlock tone='light' className='h-[62px] w-[62px] rounded-md' />
                            </div>
                            <SkeletonBlock tone='light' className='mx-auto h-5 w-28' />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

function NewsDetailSkeleton() {
    return (
        <>
            <section className='section section--space-y portfolio-hero'>
                <div className='container'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-12 text-center xl:col-span-10 xl:col-start-2'>
                            <NewsHeroSkeleton />
                        </div>
                    </div>
                </div>
            </section>

            <section className='section news-gallery'>
                <div className='container'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-12 text-center xl:col-span-10 xl:col-start-2'>
                            <DetailGallerySkeleton />
                        </div>
                    </div>
                </div>
            </section>

            <section className='section section--space-none news-content'>
                <div className='container'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-12 text-center xl:col-span-10 xl:col-start-2'>
                            <div className='news-detail__content text-body text-[var(--grey-800)]'>
                                <NewsContentSkeleton />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section section--space-y'>
                <div className='container'>
                    <DetailActionsSkeleton />
                </div>
            </section>
        </>
    );
}

function PortfolioDetailSkeleton() {
    return (
        <>
            <section className='section section--space-y portfolio-hero'>
                <div className='container'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-12 text-center xl:col-span-10 xl:col-start-2'>
                            <PortfolioHeroSkeleton />
                        </div>
                    </div>
                </div>
            </section>

            <section className='section portfolio-gallery'>
                <div className='container'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-12 xl:col-span-10 xl:col-start-2'>
                            <DetailGallerySkeleton />
                        </div>
                    </div>
                </div>
            </section>

            <section className='section section--space-bottom portfolio-content'>
                <div className='container'>
                    <div className='text-center lg:px-16 xl:px-28'>
                        <div className='portfolio-content'>
                            <PortfolioContentSkeleton />
                        </div>
                    </div>
                </div>
            </section>

            <section className='section'>
                <div className='container'>
                    <DetailActionsSkeleton />
                </div>
            </section>

            <section className='section section--space-y portfolio-services'>
                <div className='container'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-12 xl:col-span-10 xl:col-start-2'>
                            <PortfolioServicesSkeleton />
                        </div>
                    </div>
                </div>
            </section>

            <section className='section section--space-y bg-blue-abstract portfolio-related'>
                <div className='container'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-12'>
                            <SkeletonBlock
                                tone='light'
                                className='text-h2 mb-8 h-9 w-56 max-w-full'
                                aria-hidden='true'
                            />
                            <div className='portfolio-services__swiper'>
                                <SwiperSectionSkeleton variant='portfolio' count={3} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export function DetailPageSkeleton({ variant = "news" }: DetailPageSkeletonProps) {
    return (
        <div
            className={variant === "news" ? "news-detail detail-page-skeleton" : "portfolio-detail detail-page-skeleton"}
            aria-busy='true'
            aria-label='Loading'>
            {variant === "news" ? <NewsDetailSkeleton /> : <PortfolioDetailSkeleton />}
        </div>
    );
}
