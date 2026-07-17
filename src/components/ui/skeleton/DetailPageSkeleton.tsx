import { SkeletonBlock } from "./SkeletonBlock";

export function DetailPageSkeleton() {
    return (
        <div aria-busy='true' aria-label='Loading'>
            <section className='section section--space-y portfolio-hero'>
                <div className='container'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-12 space-y-4 text-center xl:col-span-10 xl:col-start-2'>
                            <SkeletonBlock className='mx-auto h-10 w-3/4' />
                            <SkeletonBlock className='mx-auto h-5 w-1/2' />
                            <SkeletonBlock className='mx-auto h-6 w-1/4' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='section'>
                <div className='container'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-12 xl:col-span-10 xl:col-start-2'>
                            <SkeletonBlock className='aspect-video w-full' />
                            <div className='mt-4 grid grid-cols-4 gap-2'>
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <SkeletonBlock key={index} className='aspect-square' />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section'>
                <div className='container'>
                    <div className='mx-auto max-w-3xl space-y-3 lg:px-16 xl:px-28'>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <SkeletonBlock key={index} className='h-4 w-full' />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
