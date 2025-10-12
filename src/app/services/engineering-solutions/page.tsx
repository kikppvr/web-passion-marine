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

    const galleryImages = [
        {
            src: "/images/our-services/engineering-solutions/boat-upgrades/01.webp",
            alt: "Boat Upgrades Service",
            title: "Boat Upgrades",
        },
        {
            src: "/images/our-services/engineering-solutions/boat-upgrades/02.webp",
            alt: "Boat Upgrades Service",
            title: "Boat Upgrades",
        },
        {
            src: "/images/our-services/engineering-solutions/electronics-solar/01.webp",
            alt: "Electronics & Solar Service",
            title: "Electronics & Solar",
        },
        {
            src: "/images/our-services/engineering-solutions/electronics-solar/02.webp",
            alt: "Electronics & Solar Service",
            title: "Electronics & Solar",
        },
        {
            src: "/images/our-services/engineering-solutions/engine-repair/01.webp",
            alt: "Engine Repair Service",
            title: "Engine Repair",
        },
        {
            src: "/images/our-services/engineering-solutions/engine-repair/02.webp",
            alt: "Engine Repair Service",
            title: "Engine Repair",
        },
        {
            src: "/images/our-services/engineering-solutions/structure-repair/01.webp",
            alt: "Structure Repair Service",
            title: "Structure Repair",
        },
        {
            src: "/images/our-services/engineering-solutions/structure-repair/02.webp",
            alt: "Structure Repair Service",
            title: "Structure Repair",
        },
    ];

    return (
        <MainLayout bannerType='large' bannerProps={bannerProps}>
            <div className='engineering-solutions bg-blue-abstract'>
                <section className='section section--space-top'>
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
                <section className='section section--space-y'>
                    <div className='container'>
                        <div className='grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12'>
                            <div>
                                <GallerySlider
                                    images={galleryImages}
                                    showThumbs={true}
                                    showNavigation={true}
                                    showPagination={true}
                                    autoplay={false}
                                    loop={true}
                                />
                            </div>
                            <div>
                                <h3 className='text-h4 mb-6 font-semibold text-[var(--blue-500)]'>
                                    Engine Repair & Maintenance
                                </h3>
                                <div className='text-lead-2 font-normal text-[var(--grey-600)]'>
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
