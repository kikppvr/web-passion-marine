import MainLayout from "@/components/ui/layout/MainLayout";

export default function ServicesPage() {
    const bannerProps = {
        title: "Our Services",
        subtitle: "Comprehensive marine solutions",
        backgroundImage: "/images/banner/overview-services.webp",
        breadcrumbItems: [{ label: "Homepage", href: "/" }, { label: "Our Services" }],
    };

    return (
        <MainLayout bannerType='large' bannerProps={bannerProps}>
            <div className='services'>
                <section className='section section--space-top'>
                    <div className='container'>
                        <h1 className='text-h1 font-semibold uppercase text-[var(--blue-500)]'>
                            Our Services
                        </h1>
                        <div className='mt-4 flex justify-end'>
                            <div className='w-full lg:w-9/12'>
                                <p className='text-h5 mb-4 text-left font-normal text-[var(--grey-600)]'>
                                    Discover our comprehensive range of marine services designed to
                                    enhance your boating experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
