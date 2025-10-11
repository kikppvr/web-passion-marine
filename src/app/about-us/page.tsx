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
                "Lorem ipsum dolor sit amet consectetur. Odio integer ultrices urna massa posuere. Eu quis scelerisque habitant faucibus sit semper.",
            image: "/images/about-us/mission-01.webp",
            video: "",
            href: "#",
        },
        {
            title: "Customizability",
            description:
                "Lorem ipsum dolor sit amet consectetur. Odio integer ultrices urna massa posuere. Eu quis scelerisque habitant faucibus sit semper.",
            image: "/images/about-us/mission-02.webp",
            video: "",
            href: "#",
        },
        {
            title: "Upgradability",
            description:
                "Lorem ipsum dolor sit amet consectetur. Odio integer ultrices urna massa posuere. Eu quis scelerisque habitant faucibus sit semper.",
            image: "/images/about-us/mission-03.webp",
            video: "",
            href: "#",
        },
        {
            title: "Practicality",
            description:
                "Lorem ipsum dolor sit amet consectetur. Odio integer ultrices urna massa posuere. Eu quis scelerisque habitant faucibus sit semper. Lorem ipsum dolor sit amet consectetur. Odio integer ultrices urna massa posuere. Eu quis scelerisque habitant faucibus sit semper.",
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
                                engineers who are fascinated by boats; passionate about the rides,
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
                                พันธกิจ (Mission) ของบริษัทฯ ถือเป็นแนวทางสำคัญที่บริษัทฯ
                                ยึดถือในการดำเนิน กิจกรรมและการลงทุนทุกประเภท
                                โดยทำหน้าที่เป็นเข็มทิศในการกำหนดทิศทางว่า ไม่ว่าบริษัทฯ
                                จะริเริ่มแนวคิดใดหรือดำเนินการใด ๆ จะต้องพิจารณาตามหลักเกณฑ์ 4
                                ข้อสำคัญนี้เสมอ
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
                                    Lorem ipsum dolor sit amet consectetur. Ac volutpat nisi
                                    praesent nisi pulvinar velit suspendisse orci magna. In aliquet
                                    gravida velit id amet ullamcorper massa lectus morbi.
                                </p>
                                <p className='milestone__description'>
                                    Ultrices egestas est ornare elementum lacus aliquam in.
                                    Ullamcorper nulla suscipit consequat est nunc sem ac donec
                                    tortor. Arcu egestas cursus phasellus mauris cras faucibus
                                    faucibus. Pulvinar pellentesque sed sit sed magna eu leo nec.
                                    Quam dui consequat feugiat orci quis. Eu lectus lectus justo
                                    interdum ut sed semper. Eget sit pellentesque feugiat ornare et
                                    arcu. Bibendum orci donec amet metus dolor sit ut ipsum.
                                    Placerat ac purus venenatis mauris volutpat at venenatis. Turpis
                                    libero ut amet accumsan. Gravida aliquet vitae fames tortor
                                    volutpat neque lacus. Id leo cursus risus eget consectetur
                                    volutpat congue id cras. Sed vulputate pellentesque cursus
                                    aliquet. Elementum tortor diam et turpis non nisl. Blandit
                                    faucibus pulvinar fermentum blandit.
                                </p>
                            </div>
                            <div className='milestone__item'>
                                <h3 className='milestone__title'>2023</h3>
                                <p className='milestone__subtitle'>
                                    Lorem ipsum dolor sit amet consectetur. Ac volutpat nisi
                                    praesent nisi pulvinar velit suspendisse orci magna. In aliquet
                                    gravida velit id amet ullamcorper massa lectus morbi.
                                </p>
                                <p className='milestone__description'>
                                    Ultrices egestas est ornare elementum lacus aliquam in.
                                    Ullamcorper nulla suscipit consequat est nunc sem ac donec
                                    tortor. Arcu egestas cursus phasellus mauris cras faucibus
                                    faucibus. Pulvinar pellentesque sed sit sed magna eu leo nec.
                                    Quam dui consequat feugiat orci quis. Eu lectus lectus justo
                                    interdum ut sed semper. Eget sit pellentesque feugiat ornare et
                                    arcu. Bibendum orci donec amet metus dolor sit ut ipsum.
                                    Placerat ac purus venenatis mauris volutpat at venenatis. Turpis
                                    libero ut amet accumsan. Gravida aliquet vitae fames tortor
                                    volutpat neque lacus. Id leo cursus risus eget consectetur
                                    volutpat congue id cras. Sed vulputate pellentesque cursus
                                    aliquet. Elementum tortor diam et turpis non nisl. Blandit
                                    faucibus pulvinar fermentum blandit.
                                </p>
                            </div>
                            <div className='milestone__item'>
                                <h3 className='milestone__title'>2024</h3>
                                <p className='milestone__subtitle'>
                                    Lorem ipsum dolor sit amet consectetur. Ac volutpat nisi
                                    praesent nisi pulvinar velit suspendisse orci magna. In aliquet
                                    gravida velit id amet ullamcorper massa lectus morbi.
                                </p>
                                <p className='milestone__description'>
                                    Ultrices egestas est ornare elementum lacus aliquam in.
                                    Ullamcorper nulla suscipit consequat est nunc sem ac donec
                                    tortor. Arcu egestas cursus phasellus mauris cras faucibus
                                    faucibus. Pulvinar pellentesque sed sit sed magna eu leo nec.
                                    Quam dui consequat feugiat orci quis. Eu lectus lectus justo
                                    interdum ut sed semper. Eget sit pellentesque feugiat ornare et
                                    arcu. Bibendum orci donec amet metus dolor sit ut ipsum.
                                    Placerat ac purus venenatis mauris volutpat at venenatis. Turpis
                                    libero ut amet accumsan. Gravida aliquet vitae fames tortor
                                    volutpat neque lacus. Id leo cursus risus eget consectetur
                                    volutpat congue id cras. Sed vulputate pellentesque cursus
                                    aliquet. Elementum tortor diam et turpis non nisl. Blandit
                                    faucibus pulvinar fermentum blandit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
