import MainLayout from "@/components/ui/layout/MainLayout";
import "@/styles/page/engineering-solutions.scss";
import Image from "next/image";
import { ServiceCard } from "@/components/ui/cards";

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

    return (
        <MainLayout bannerType='large' bannerProps={bannerProps}>
            <div className='engineering-solutions bg-blue-abstract'>
                <section className='section section--space-y'>
                    <div className='container'>
                        <h1 className='text-h1 font-semibold uppercase text-[var(--blue-500)]'>
                            <div>Your Trusted Partner in </div>
                            <div>After-Sales & Maintenance</div>
                        </h1>
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
            </div>
        </MainLayout>
    );
}
