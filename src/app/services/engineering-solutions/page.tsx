import MainLayout from "@/components/ui/layout/MainLayout";
import "@/styles/page/engineering-solutions.scss";
import { GallerySlider } from "@/components/ui/media";

export default function EngineeringSolutionsPage() {
    const bannerProps = {
        title: "Engineering Solutions",
        backgroundImage: "/images/banner/engineering-solutions.webp",
        breadcrumbItems: [
            { label: "Homepage", href: "/" },
            { label: "Our Services" },
            { label: "Overview Services", href: "/services/overview-services" },
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
                        <div
                            className='mb-10 grid grid-cols-1 items-center gap-8 md:mb-16 lg:mb-6 lg:grid-cols-2 lg:gap-8'
                            id='engine-repair-maintenance'>
                            <div>
                                <GallerySlider
                                    className='gallery-engineering-solutions'
                                    images={galleryEngineeringSolutions}
                                    showPagination={true}
                                    autoplay={true}
                                    autoplayDelay={3000}
                                    loop={true}
                                />
                            </div>
                            <div className='lg:px-4 xl:px-6'>
                                <h3 className='text-h3 lg:text-h4 mb-4 font-semibold text-[var(--blue-500)] md:mb-6'>
                                    Engine Maintenance, Repair and Overhaul
                                </h3>
                                <div className='text-body md:text-lead-2 font-normal text-[var(--grey-600)]'>
                                    Passion Marine provides comprehensive maintenance and repair
                                    services for marine engines and related components, including
                                    stern drive systems, power generators, steering systems, and
                                    cooling systems. The company offers full-cycle maintenance
                                    services, covering both routine and preventive maintenance.
                                    Using computer-based diagnostic tools, Passion Marine can
                                    accurately identify malfunctions down to the sensor level.
                                </div>
                            </div>
                        </div>
                        <div
                            className='mb-10 grid grid-cols-1 items-center gap-8 md:mb-16 lg:mb-6 lg:grid-cols-2 lg:gap-8'
                            id='boat-upgrades'>
                            <div className='order-2 lg:order-1 lg:px-4 xl:px-6'>
                                <h3 className='text-h3 lg:text-h4 mb-4 font-semibold text-[var(--blue-500)] md:mb-6'>
                                    Electrical System Integration
                                </h3>
                                <div className='text-body md:text-lead-2 font-normal text-[var(--grey-600)]'>
                                    Passion Marine offers design, installation, and maintenance
                                    services for marine electrical systems, including electrical
                                    equipment, switch systems, and overcurrent protection fuses. The
                                    company also provides inspection, repair, and replacement of
                                    wiring systems that have deteriorated over time.
                                </div>
                            </div>
                            <div className='order-1 lg:order-2'>
                                <GallerySlider
                                    className='gallery-engineering-solutions'
                                    images={galleryBoatUpgrades}
                                    showPagination={true}
                                    autoplay={true}
                                    autoplayDelay={5000}
                                    loop={true}
                                />
                            </div>
                        </div>
                        <div
                            className='mb-10 grid grid-cols-1 items-center gap-8 md:mb-16 lg:mb-6 lg:grid-cols-2 lg:gap-8'
                            id='electronics-solar'>
                            <div>
                                <GallerySlider
                                    className='gallery-engineering-solutions'
                                    images={galleryElectronicsSolar}
                                    showPagination={true}
                                    autoplay={true}
                                    autoplayDelay={3000}
                                    loop={true}
                                />
                            </div>
                            <div className='lg:px-4 xl:px-6'>
                                <h3 className='text-h3 lg:text-h4 mb-4 font-semibold text-[var(--blue-500)] md:mb-6'>
                                    Electronic Device
                                </h3>
                                <div className='text-body md:text-lead-2 font-normal text-[var(--grey-600)]'>
                                    Passion Marine designs and installs various electronic systems,
                                    such as console instrument systems, audio systems, communication
                                    radios, and navigation aids including GPS and multi-function
                                    display (MFD) systems for monitoring and control.
                                </div>
                            </div>
                        </div>
                        <div
                            className='grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-8'
                            id='structure-repair'>
                            <div className='order-2 lg:order-1 lg:px-4 xl:px-6'>
                                <h3 className='text-h3 lg:text-h4 mb-4 font-semibold text-[var(--blue-500)] md:mb-6'>
                                    Fiberglass Structure Repair
                                </h3>
                                <div className='text-body md:text-lead-2 font-normal text-[var(--grey-600)]'>
                                    Passion Marine provides repair and fabrication services for boat
                                    structures, including hull skins and reinforcement structures
                                    made from composite materials such as fiberglass and carbon
                                    fiber.
                                </div>
                            </div>
                            <div className='order-1 lg:order-2'>
                                <GallerySlider
                                    className='gallery-engineering-solutions'
                                    images={galleryStructureRepair}
                                    showPagination={true}
                                    autoplay={true}
                                    autoplayDelay={5000}
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
