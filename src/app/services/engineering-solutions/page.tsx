import MainLayout from "@/components/ui/layout/MainLayout";
import "@/styles/page/engineering-solutions.scss";
import Image from "next/image";
import { ServiceCard } from "@/components/ui/cards";
import { GallerySlider } from "@/components/ui/media";

export default function OverviewServicesPage() {
    const bannerProps = {
        title: "Engineering Solutions",
        backgroundImage: "/images/banner/engineering-solutions.webp",
        breadcrumbItems: [
            { label: "Homepage", href: "/" },
            { label: "Our Services", href: "/services" },
            { label: "Engineering Solutions" },
        ],
    };

    const galleryEngineeringSolutions = [
        {
            src: "/images/our-services/engineering-solutions/engine-repair/01.webp",
            alt: "Engine Repair & Maintenance Service",
        },
        {
            src: "/images/our-services/engineering-solutions/engine-repair/02.webp",
            alt: "Engine Repair & Maintenance Service",
        },
    ];

    const galleryBoatUpgrades = [
        {
            src: "/images/our-services/engineering-solutions/boat-upgrades/01.webp",
            alt: "Boat Upgrades Service",
        },
        {
            src: "/images/our-services/engineering-solutions/boat-upgrades/02.webp",
            alt: "Boat Upgrades Service",
        },
    ];

    const galleryElectronicsSolar = [
        {
            src: "/images/our-services/engineering-solutions/electronics-solar/01.webp",
            alt: "Electronics & Solar Service",
        },
        {
            src: "/images/our-services/engineering-solutions/electronics-solar/02.webp",
            alt: "Electronics & Solar Service",
        },
    ];

    const galleryStructureRepair = [
        {
            src: "/images/our-services/engineering-solutions/structure-repair/01.webp",
            alt: "Structure Repair Service",
        },
        {
            src: "/images/our-services/engineering-solutions/structure-repair/02.webp",
            alt: "Structure Repair Service",
        },
    ];

    return (
        <MainLayout bannerType='large' bannerProps={bannerProps}>
            <div className='engineering-solutions bg-blue-abstract'>
                <section className='section section--space-y'>
                    <div className='container'>
                        <h2 className='text-h1 font-semibold uppercase text-[var(--blue-500)]'>
                            <div>Your Trusted Partner in </div>
                            <div>After-Sales & Maintenance</div>
                        </h2>
                        <div className='mt-4 flex justify-end'>
                            <div className='w-full lg:w-9/12'>
                                <p className='text-h5 text-left font-normal text-[var(--grey-600)]'>
                                    At Passion Marine, our commitment doesn&apos;t end at delivery.
                                    With Boat Solution, we ensure your boat stays in top
                                    condition—safe, powerful, and ready for every journey.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section section--space-bottom'>
                    <div className='container'>
                        <div className='grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-8'>
                            <div>
                                <GallerySlider
                                    className='gallery-engineering-solutions'
                                    images={galleryEngineeringSolutions}
                                    showPagination={true}
                                    autoplay={true}
                                    autoplayDelay={1000}
                                    loop={true}
                                />
                            </div>
                            <div>
                                <h3 className='text-h3 lg:text-h4 mb-4 font-semibold text-[var(--blue-500)] md:mb-6'>
                                    Engine Repair & Maintenance
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
                <section className='section section--space-bottom'>
                    <div className='container'>
                        <div className='grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-8'>
                            <div className='order-2 lg:order-1'>
                                <h3 className='text-h3 lg:text-h4 mb-4 font-semibold text-[var(--blue-500)] md:mb-6'>
                                    Boat Upgrades
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
                                    className='gallery-engineering-solutions'
                                    images={galleryBoatUpgrades}
                                    showPagination={true}
                                    autoplay={true}
                                    autoplayDelay={1500}
                                    loop={true}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section section--space-bottom'>
                    <div className='container'>
                        <div className='grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-8'>
                            <div>
                                <GallerySlider
                                    className='gallery-engineering-solutions'
                                    images={galleryElectronicsSolar}
                                    showPagination={true}
                                    autoplay={true}
                                    autoplayDelay={2000}
                                    loop={true}
                                />
                            </div>
                            <div>
                                <h3 className='text-h3 lg:text-h4 mb-4 font-semibold text-[var(--blue-500)] md:mb-6'>
                                    Electronics & Solar
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
                <section className='section section--space-bottom'>
                    <div className='container'>
                        <div className='grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-8'>
                            <div className='order-2 lg:order-1'>
                                <h3 className='text-h3 lg:text-h4 mb-4 font-semibold text-[var(--blue-500)] md:mb-6'>
                                    Structure Repair
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
                                    className='gallery-engineering-solutions'
                                    images={galleryStructureRepair}
                                    showPagination={true}
                                    autoplay={true}
                                    autoplayDelay={2500}
                                    loop={true}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
