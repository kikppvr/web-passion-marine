import { MainLayout } from "@/components/ui/layout";
import { PrimaryButton } from "@/components/ui/button/PrimaryButton";

export default function AboutUsPage() {
    const bannerProps = {
        title: "About Us",
        subtitle: "Learn more about Passion Marine and our commitment to excellence",
        backgroundImage: "/images/banner/about-us.webp",
        breadcrumbItems: [{ label: "Homepage", href: "/" }, { label: "About Us" }],
    };

    return (
        <MainLayout bannerType='large' bannerProps={bannerProps}>
            <section className='about-us pb-0'>
                <div className='container'>
                    <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
                        <div className='col-span-1'>
                            <h2 className='text-h2 text-[var(--blue-500)]'>Vision</h2>
                        </div>
                        <div className='col-span-2'>
                            <h3 className='text-display-3 mb-4 text-[var(--blue-500)] md:mb-6 lg:mb-8'>
                                PASSION DRIVES PERFECTION
                            </h3>
                            <p className='text-h6 mb-4 text-[var(--grey-600)] md:mb-6'>
                                Our company was established by a group of experienced aerospace
                                engineers who are fascinated by boats; passionate about the rides,
                                adventures and atmospheres. In aspiration to grow the boat-lover
                                community, we offer products and services that accommodate your
                                personal water-journey lifestyle .
                            </p>
                            <p className='text-h6 text-[var(--grey-600)]'>
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
            <section className='section'>
                <div className='container'>
                    <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
                        <div className='col-span-1'>
                            <h2 className='text-h2 text-[var(--blue-500)]'>Mission</h2>
                        </div>
                        <div className='col-span-2'>
                            {/* <h3 className='text-display-3 mb-4 text-[var(--blue-500)] md:mb-6 lg:mb-8'>
                                PASSION DRIVES PERFECTION
                            </h3> */}
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
            <section className='section'>
                <div className='container'>
                    <h2 className='text-h2 text-[var(--blue-500)]'>Vision</h2>
                </div>
            </section>
        </MainLayout>
    );
}
