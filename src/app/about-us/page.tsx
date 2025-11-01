import { MainLayout } from "@/components/ui/layout";
import { PrimaryButton } from "@/components/ui/button/PrimaryButton";
import { MissionCard } from "@/components/ui/cards/MissionCard";

export default function AboutUsPage() {
    const bannerProps = {
        title: "About Us",
        subtitle: "Learn more about Passion Marine and our commitment to excellence",
        backgroundImage: "/images/banner/about-us.webp",
        breadcrumbItems: [{ label: "Homepage", href: "/" }, { label: "About Us" }],
    };

    const missionData = [
        {
            title: "Maintainability",
            description:
                "Our mission is to ensure that every vessel we service is easy to maintain over time, reducing downtime and extending the life of essential systems through smart design, quality materials, and reliable support.",
            image: "/images/about-us/mission-01.webp",
            video: "",
            href: "#",
        },
        {
            title: "Customizability",
            description:
                "We aim to deliver solutions that make sense in the real world—balancing performance, safety, and cost-effectiveness to meet the unique demands of each customer’s boating lifestyle or commercial operations.",
            image: "/images/about-us/mission-02.webp",
            video: "",
            href: "#",
        },
        {
            title: "Upgradability",
            description:
                "Every boat and owner is unique, which is why we’re committed to providing tailored solutions—from system integrations to structural modifications—that align perfectly with each client’s vision and needs.",
            image: "/images/about-us/mission-03.webp",
            video: "",
            href: "#",
        },
        {
            title: "Practicality",
            description:
                "We design with the future in mind, offering scalable systems and modular components that make it easy to upgrade as technologies evolve or customer requirements change, ensuring long-term value and adaptability.",
            image: "/images/about-us/mission-04.webp",
            video: "",
            href: "#",
        },
    ];

    return (
        <MainLayout bannerType='large' bannerProps={bannerProps}>
            <section className='section section--space-top'>
                <div className='container'>
                    <div className='grid grid-cols-1 gap-6 lg:grid-cols-12'>
                        <div className='lg:col-span-3'>
                            <h2 className='text-h3 text-[var(--blue-500)]'>Vision</h2>
                        </div>
                        <div className='lg:col-span-9'>
                            <h3 className='text-display-3 mb-4 text-[var(--blue-500)] md:mb-6 lg:mb-8'>
                                PASSION DRIVES PERFECTION
                            </h3>
                            <p className='text-lead-2 mb-4 text-[var(--grey-600)] md:mb-6'>
                                Our company was established by a group of experienced aerospace
                                engineers who are fascinated by boats;{" "}
                                <span className='font-semibold'>passionate</span> about the rides,
                                adventures and atmospheres. In aspiration to grow the boat-lover
                                community, we offer products and services that accommodate your
                                personal water-journey lifestyle .
                            </p>
                            <p className='text-lead-2 mb-0 text-[var(--grey-600)]'>
                                We believe in the never-ending enjoyment of owning a boat and for
                                that very reason, quality maintenance and repairs are what we highly
                                valued. They are essentially the core of a complete platform with
                                reliability and that is where we bring you our technical aerospace
                                expertise to ensure that you will always have a seamless and
                                uninterrupted trip.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section section--space-top'>
                <div className='container'>
                    <div className='grid grid-cols-1 gap-6 lg:grid-cols-12'>
                        <div className='lg:col-span-3'>
                            <h2 className='text-h3 text-[var(--blue-500)]'>Mission</h2>
                        </div>
                        <div className='lg:col-span-9'>
                            <p className='text-h5 mb-0 font-semibold text-[var(--blue-500)]'>
                                The company’s overall Mission serves as the guideline in every
                                activity we undertake and every investment we make. It defines the
                                direction of the company, ensuring that whenever we consider or take
                                action, these 4 principles are always taken into account.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section section-card-mission pb-[96px] pt-[40px]'>
                <div className='container'>
                    <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4'>
                        {missionData.map((item, index) => (
                            <div key={index} className='h-full w-full'>
                                <MissionCard
                                    title={item.title}
                                    description={item.description}
                                    image={item.image}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className='milestone section section--space-y'>
                <div className='container'>
                    <div className='milestone__wrapper'>
                        <div className='milestone__left'>
                            <h2 className='text-h3 text-[var(--blue-500)]'>Milestones</h2>
                        </div>
                        <div className='milestone__right'>
                            <div className='milestone__item'>
                                <h3 className='milestone__title'>2022</h3>
                                <p className='milestone__subtitle'>
                                    Passion Marine Co., Ltd. was established, marking the beginning
                                    of its business direction. The company’s primary objective is to
                                    offer high-quality services to the boating community, delivered
                                    by skilled professionals following internationally recognized
                                    standards.
                                </p>
                                <p className='milestone__description'>
                                    Passion Marine aims to be a reliable option for those seeking to
                                    refurbish or customize their boats to suit different ownership
                                    purposes and functional needs (Customization), using quality
                                    materials suitable for marine environments.
                                </p>
                            </div>
                            <div className='milestone__item'>
                                <h3 className='milestone__title'>2023</h3>
                                <p className='milestone__subtitle'>
                                    Passion Marine had the opportunity to showcase
                                </p>
                                <p className='milestone__description'>
                                    its work to the boating community and to participate in
                                    promoting and providing information about boats to interested
                                    individuals at the Motor Expo 2023.
                                </p>
                            </div>
                            <div className='milestone__item'>
                                <h3 className='milestone__title'>2024</h3>
                                <p className='milestone__subtitle'>
                                    Passion Marine expanded its capabilities to meet the growing
                                    demand for quality among boat owners.
                                </p>
                                <p className='milestone__description'>
                                    This included expanding its workspace and acquiring additional
                                    tools for interior design and manufacturing, upholstery, and the
                                    design and production of EVA (Ethylene Vinyl Acetate) boat
                                    flooring. Moreover, in 2024, Passion Marine was officially
                                    appointed as an Authorized Service Partner for Volvo Penta
                                    engines, spare parts, and maintenance services.
                                </p>
                            </div>
                            <div className='milestone__item'>
                                <h3 className='milestone__title'>2025</h3>
                                <p className='milestone__subtitle'>
                                    Passion Marine expanded its repair and production area from 420
                                    square meters to 1,100 square meters
                                </p>
                                <p className='milestone__description'>
                                    a key factor in enabling the company to respond more efficiently
                                    to customer needs and to support the integration of new tools
                                    and technologies in the coming years.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
