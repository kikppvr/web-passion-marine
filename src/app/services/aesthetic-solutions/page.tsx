import MainLayout from "@/components/ui/layout/MainLayout";
import "@/styles/page/esthetic-solutions.scss";
import { GallerySlider } from "@/components/ui/media";

export default function AestheticSolutionsPage() {
    const bannerProps = {
        title: "Aesthetic Solutions",
        backgroundImage: "/images/banner/aesthetic-solutions.webp",
        breadcrumbItems: [
            { label: "Homepage", href: "/" },
            { label: "Our Services" },
            { label: "Overview Services", href: "/services/overview-services" },
            { label: "Aesthetic Solutions" },
        ],
    };

    const galleryTeakEVAFlooring = [
        {
            src: "/images/our-services/aesthetic-solutions/teak-eva-flooring/01.webp",
            alt: "Teak & EVA Flooring",
        },
        {
            src: "/images/our-services/aesthetic-solutions/teak-eva-flooring/02.webp",
            alt: "Teak & EVA Flooring",
        },
    ];

    const galleryMarineUpholstery = [
        {
            src: "/images/our-services/aesthetic-solutions/marine-upholstery/01.webp",
            alt: "Marine Upholstery",
        },
        {
            src: "/images/our-services/aesthetic-solutions/marine-upholstery/02.webp",
            alt: "Marine Upholstery",
        },
    ];

    const galleryGelcoatRepairFinishing = [
        {
            src: "/images/our-services/aesthetic-solutions/gelcoat-repair/01.webp",
            alt: "Gelcoat Repair & Finishing",
        },
        {
            src: "/images/our-services/aesthetic-solutions/gelcoat-repair/02.webp",
            alt: "Gelcoat Repair & Finishing",
        },
    ];

    const galleryFiberglassFurniture = [
        {
            src: "/images/our-services/aesthetic-solutions/fiberglass-furniture/01.webp",
            alt: "Fiberglass Furniture",
        },
        {
            src: "/images/our-services/aesthetic-solutions/fiberglass-furniture/02.webp",
            alt: "Fiberglass Furniture",
        },
    ];

    const galleryInteriorStyling = [
        {
            src: "/images/our-services/aesthetic-solutions/interior-styling/01.webp",
            alt: "Interior Styling",
        },
        {
            src: "/images/our-services/aesthetic-solutions/interior-styling/02.webp",
            alt: "Interior Styling",
        },
    ];

    return (
        <MainLayout bannerType='large' bannerProps={bannerProps}>
            <div className='engineering-solutions bg-blue-abstract'>
                <section className='section section--space-y'>
                    <div className='container'>
                        <h2 className='text-h1 font-semibold uppercase text-[var(--blue-500)]'>
                            <div>Elevate Your Boat&apos;s Style </div>
                            <div>and Comfort</div>
                        </h2>
                        <div className='mt-4 flex justify-end'>
                            <div className='w-full lg:w-9/12'>
                                <p className='text-h5 text-left font-normal text-[var(--grey-600)]'>
                                    At Passion Marine, performance meets aesthetics. With Decorator,
                                    we turn your vessel into a statement piece — where every detail
                                    reflects your personality and lifestyle.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section section--space-y bg-[var(--blue-50)]'>
                    <div className='container'>
                        <h3 className='text-h3 lg:text-h4 mb-4 text-center font-semibold text-[var(--blue-500)] md:mb-6'>
                            [Coming Soon]
                        </h3>
                    </div>
                </section>
                <section className='section section--space-y'>
                    <div className='container'>
                        <div className='mb-6 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-8'>
                            <div>
                                <GallerySlider
                                    className='gallery-esthetic-solutions'
                                    images={galleryTeakEVAFlooring}
                                    showPagination={true}
                                    autoplay={true}
                                    autoplayDelay={3000}
                                    loop={true}
                                />
                            </div>
                            <div>
                                <h3 className='text-h3 lg:text-h4 mb-4 font-semibold text-[var(--blue-500)] md:mb-6'>
                                    Teak & EVA Flooring
                                </h3>
                                <div className='text-body md:text-lead-2 font-normal text-[var(--grey-600)]'>
                                    Lorem ipsum dolor sit amet consectetur. In nibh egestas arcu
                                    vitae. Tincidunt dignissim dolor sit quisque faucibus ultrices
                                    nulla ac fermentum. Mollis elementum amet morbi odio neque.
                                    Elementum et rhoncus ante placerat nullam molestie metus. In in
                                    odio faucibus dui.
                                </div>
                            </div>
                        </div>
                        <div className='mb-6 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-8'>
                            <div className='order-2 lg:order-1'>
                                <h3 className='text-h3 lg:text-h4 mb-4 font-semibold text-[var(--blue-500)] md:mb-6'>
                                    Marine Upholstery
                                </h3>
                                <div className='text-body md:text-lead-2 font-normal text-[var(--grey-600)]'>
                                    Lorem ipsum dolor sit amet consectetur. In nibh egestas arcu
                                    vitae. Tincidunt dignissim dolor sit quisque faucibus ultrices
                                    nulla ac fermentum. Mollis elementum amet morbi odio neque.
                                    Elementum et rhoncus ante placerat nullam molestie metus. In in
                                    odio faucibus dui.
                                </div>
                            </div>
                            <div className='order-1 lg:order-2'>
                                <GallerySlider
                                    className='gallery-esthetic-solutions'
                                    images={galleryMarineUpholstery}
                                    showPagination={true}
                                    autoplay={true}
                                    autoplayDelay={5000}
                                    loop={true}
                                />
                            </div>
                        </div>
                        <div className='mb-6 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-8'>
                            <div>
                                <GallerySlider
                                    className='gallery-esthetic-solutions'
                                    images={galleryGelcoatRepairFinishing}
                                    showPagination={true}
                                    autoplay={true}
                                    autoplayDelay={3000}
                                    loop={true}
                                />
                            </div>
                            <div>
                                <h3 className='text-h3 lg:text-h4 mb-4 font-semibold text-[var(--blue-500)] md:mb-6'>
                                    Gelcoat Repair & Finishing
                                </h3>
                                <div className='text-body md:text-lead-2 font-normal text-[var(--grey-600)]'>
                                    Lorem ipsum dolor sit amet consectetur. In nibh egestas arcu
                                    vitae. Tincidunt dignissim dolor sit quisque faucibus ultrices
                                    nulla ac fermentum. Mollis elementum amet morbi odio neque.
                                    Elementum et rhoncus ante placerat nullam molestie metus. In in
                                    odio faucibus dui.
                                </div>
                            </div>
                        </div>
                        <div className='mb-6 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-8'>
                            <div className='order-2 lg:order-1'>
                                <h3 className='text-h3 lg:text-h4 mb-4 font-semibold text-[var(--blue-500)] md:mb-6'>
                                    Fiberglass Furniture
                                </h3>
                                <div className='text-body md:text-lead-2 font-normal text-[var(--grey-600)]'>
                                    Lorem ipsum dolor sit amet consectetur. In nibh egestas arcu
                                    vitae. Tincidunt dignissim dolor sit quisque faucibus ultrices
                                    nulla ac fermentum. Mollis elementum amet morbi odio neque.
                                    Elementum et rhoncus ante placerat nullam molestie metus. In in
                                    odio faucibus dui.
                                </div>
                            </div>
                            <div className='order-1 lg:order-2'>
                                <GallerySlider
                                    className='gallery-esthetic-solutions'
                                    images={galleryFiberglassFurniture}
                                    showPagination={true}
                                    autoplay={true}
                                    autoplayDelay={5000}
                                    loop={true}
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-8'>
                            <div>
                                <GallerySlider
                                    className='gallery-esthetic-solutions'
                                    images={galleryInteriorStyling}
                                    showPagination={true}
                                    autoplay={true}
                                    autoplayDelay={3000}
                                    loop={true}
                                />
                            </div>
                            <div>
                                <h3 className='text-h3 lg:text-h4 mb-4 font-semibold text-[var(--blue-500)] md:mb-6'>
                                    Interior Styling
                                </h3>
                                <div className='text-body md:text-lead-2 font-normal text-[var(--grey-600)]'>
                                    Lorem ipsum dolor sit amet consectetur. In nibh egestas arcu
                                    vitae. Tincidunt dignissim dolor sit quisque faucibus ultrices
                                    nulla ac fermentum. Mollis elementum amet morbi odio neque.
                                    Elementum et rhoncus ante placerat nullam molestie metus. In in
                                    odio faucibus dui.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
