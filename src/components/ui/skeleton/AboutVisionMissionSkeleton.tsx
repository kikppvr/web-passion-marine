import { SkeletonBlock } from "./SkeletonBlock";

const VISION_LINES = ["w-full", "w-[96%]", "w-full", "w-[90%]"];

export function AboutVisionMissionSkeleton() {
    return (
        <>
            <section className='section section--space-top'>
                <div className='container'>
                    <div className='grid grid-cols-1 gap-6 lg:grid-cols-12'>
                        <div className='lg:col-span-3'>
                            <SkeletonBlock tone='light' className='text-h3 h-8 w-24' aria-hidden='true' />
                        </div>
                        <div className='lg:col-span-9'>
                            <SkeletonBlock
                                tone='light'
                                className='text-display-3 mb-4 h-12 w-[85%] md:mb-6 lg:mb-8'
                                aria-hidden='true'
                            />
                            <div className='about-vision-body space-y-4' aria-hidden='true'>
                                {VISION_LINES.map((width, index) => (
                                    <SkeletonBlock key={index} tone='light' className={`h-5 ${width}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section section--space-top'>
                <div className='container'>
                    <div className='grid grid-cols-1 gap-6 lg:grid-cols-12'>
                        <div className='lg:col-span-3'>
                            <SkeletonBlock tone='light' className='text-h3 h-8 w-28' aria-hidden='true' />
                        </div>
                        <div className='lg:col-span-9'>
                            <div className='about-mission-body' aria-hidden='true'>
                                <SkeletonBlock tone='light' className='text-h5 h-6 w-full max-w-3xl' />
                                <SkeletonBlock tone='light' className='text-h5 mt-3 h-6 w-4/5 max-w-2xl' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
