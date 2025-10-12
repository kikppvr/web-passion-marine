"use client";

import MainLayout from "@/components/ui/layout/MainLayout";
import "@/styles/page/overview-services.scss";
import Image from "next/image";
import { ServiceCard } from "@/components/ui/cards";
import { useRouter } from "next/navigation";

export default function OverviewServicesPage() {
    const router = useRouter();

    const bannerProps = {
        title: "Overview Services",
        backgroundImage: "/images/banner/overview-services.webp",
        breadcrumbItems: [
            { label: "Homepage", href: "/" },
            { label: "Our Services" },
            { label: "Overview Services" },
        ],
    };

    return (
        <MainLayout bannerType='large' bannerProps={bannerProps}>
            <div className='overview-services bg-blue-abstract'>
                <section className='section section--space-top'>
                    <div className='container'>
                        <h2 className='text-h1 font-semibold uppercase text-[var(--blue-500)]'>
                            <div>Redefining Your Boating </div>
                            <div>Experience with Passion Marine</div>
                        </h2>
                        <div className='mt-4 flex justify-end'>
                            <div className='w-full lg:w-9/12'>
                                <p className='text-h5 text-left font-normal text-[var(--grey-600)]'>
                                    At Passion Marine, we combine aerospace-level engineering with a
                                    deep love for marine exploration. Founded by a team of aerospace
                                    engineers who are passionate about boats, our mission is to
                                    craft high-performance vessels tailored to your lifestyle.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='our-achievements'>
                    <div className='container'>
                        <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-5'>
                            <div className='col-span-1'>
                                <div className='h-full rounded-20 bg-white p-6 shadow-port-card'>
                                    <div className='text-h2 mb-2 font-semibold text-[var(--blue-500)]'>
                                        98%
                                    </div>
                                    <div className='text-h6 mb-1 font-semibold text-[var(--grey-600)]'>
                                        Customer Satisfaction
                                    </div>
                                    <div className='text-body font-normal text-[var(--grey-600)]'>
                                        rate from post-delivery surveys.
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-1'>
                                <div className='h-full rounded-20 bg-white p-6 shadow-port-card'>
                                    <div className='text-h2 mb-2 font-semibold text-[var(--blue-500)]'>
                                        120+
                                    </div>
                                    <div className='text-h6 mb-1 font-semibold text-[var(--grey-600)]'>
                                        Customized Boats
                                    </div>
                                    <div className='text-body font-normal text-[var(--grey-600)]'>
                                        delivered across Southeast Asia.
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-1'>
                                <div className='h-full rounded-20 bg-white p-6 shadow-port-card'>
                                    <div className='text-h2 mb-2 font-semibold text-[var(--blue-500)]'>
                                        15+
                                    </div>
                                    <div className='text-h6 mb-1 font-semibold text-[var(--grey-600)]'>
                                        Years of Engineering Experience
                                    </div>
                                    <div className='text-body font-normal text-[var(--grey-600)]'>
                                        among core founders.
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-1'>
                                <div className='h-full rounded-20 bg-white p-6 shadow-port-card'>
                                    <div className='text-h2 mb-2 font-semibold text-[var(--blue-500)]'>
                                        3x
                                    </div>
                                    <div className='text-h6 font-semibold text-[var(--grey-600)]'>
                                        More Efficient
                                    </div>
                                    <div className='text-body font-normal text-[var(--grey-600)]'>
                                        fuel consumption compared to average boats in the same
                                        class.
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-1'>
                                <div className='h-full rounded-20 bg-white p-6 shadow-port-card'>
                                    <div className='text-h2 mb-2 font-semibold text-[var(--blue-500)]'>
                                        24/7
                                    </div>
                                    <div className='text-h6 font-semibold text-[var(--grey-600)]'>
                                        Technical Support
                                    </div>
                                    <div className='text-body font-normal text-[var(--grey-600)]'>
                                        for all clients.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section section--space-top'>
                    <div className='container'>
                        <h2 className='text-h2 mb-10 text-center font-semibold text-[var(--blue-500)] md:text-left'>
                            Comprehensive Services
                        </h2>
                        <div className='grid grid-cols-1 gap-8 text-center md:grid-cols-2 md:text-left lg:grid-cols-4'>
                            <div className='col-span-1'>
                                <div className='flex flex-col gap-3'>
                                    <Image
                                        src='/images/our-services/overview-services/comprehensive-01.svg'
                                        alt='Custom Boat Design'
                                        width={50}
                                        height={50}
                                        className='mx-auto md:mx-0'
                                    />
                                    <div className='text-h5 font-semibold text-[var(--blue-500)]'>
                                        Custom Boat Design
                                    </div>
                                    <div className='text-body font-normal text-[var(--grey-600)]'>
                                        Personalize your color, seating, flooring, and equipment.
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-1'>
                                <div className='flex flex-col gap-3'>
                                    <Image
                                        src='/images/our-services/overview-services/comprehensive-02.svg'
                                        alt='High-Performance Builds'
                                        width={50}
                                        height={50}
                                        className='mx-auto md:mx-0'
                                    />
                                    <div className='text-h5 font-semibold text-[var(--blue-500)]'>
                                        High-Performance Builds
                                    </div>
                                    <div className='text-body font-normal text-[var(--grey-600)]'>
                                        Engineered for speed, safety, and durability using
                                        aerospace-grade materials.
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-1'>
                                <div className='flex flex-col gap-3'>
                                    <Image
                                        src='/images/our-services/overview-services/comprehensive-03.svg'
                                        alt='Marine Technology Integration'
                                        width={50}
                                        height={50}
                                        className='mx-auto md:mx-0'
                                    />
                                    <div className='text-h5 font-semibold text-[var(--blue-500)]'>
                                        Marine Technology Integration
                                    </div>
                                    <div className='text-body font-normal text-[var(--grey-600)]'>
                                        GPS, sonar, smart controls, and navigation systems designed
                                        for seamless operation.
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-1'>
                                <div className='flex flex-col gap-3'>
                                    <Image
                                        src='/images/our-services/overview-services/comprehensive-04.svg'
                                        alt='After-sales Service & Maintenance'
                                        width={50}
                                        height={50}
                                        className='mx-auto md:mx-0'
                                    />
                                    <div className='text-h5 font-semibold text-[var(--blue-500)]'>
                                        After-sales Service & Maintenance
                                    </div>
                                    <div className='text-body font-normal text-[var(--grey-600)]'>
                                        End-to-end care for long-term performance and reliability.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className='section section--space-y'>
                <div className='container'>
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6'>
                        <ServiceCard
                            title='Engineering Solutions'
                            description='Your Trusted Partner in After-Sales & Maintenance'
                            imageSrc='/images/our-services/overview-services/engineering-solutions.webp'
                            imageAlt='Engineering Solutions'
                            icon={<i className='ph ph-arrow-up-right'></i>}
                            onClick={() => {
                                router.push("/services/engineering-solutions");
                            }}
                        />
                        <ServiceCard
                            title='Aesthetic Solutions'
                            description="Elevate Your Boat's Style and Comfort"
                            imageSrc='/images/our-services/overview-services/aesthetic-solutions.webp'
                            imageAlt='Aesthetic Solutions'
                            icon={<i className='ph ph-arrow-up-right'></i>}
                            onClick={() => {
                                router.push("/services/aesthetic-solutions");
                            }}
                        />
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
