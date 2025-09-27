"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
//components
import { PrimaryButton } from "@/components/ui/button/PrimaryButton";

export interface FooterProps {
    className?: string;
}

const Footer = ({ className }: FooterProps) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className={cn("footer", className)}>
            <div className='footer__container'>
                <div className='footer__logo-container'>
                    <Link href='/' className='footer__logo'>
                        <Image
                            src='/images/logo/logo-passion-marine-white.svg'
                            alt='Passion Marine Logo'
                            width={200}
                            height={55}
                            className='footer__logo-responsive'
                        />
                    </Link>
                </div>
                <div className='footer__main'>
                    <div className='footer__column'>
                        <h3 className='footer__column-title'>Passion Marine Company Limited</h3>
                        <div className='footer__column-content'>
                            113/14, Moo 5, Chiang Rak Yai, Sam Khok, Pathum Thani 12160
                        </div>
                        <div className='footer__column-contact'>
                            <PrimaryButton theme='dark'>Contact Us</PrimaryButton>
                        </div>
                    </div>

                    {/* Middle Column - Contact */}
                    <div className='footer__column'>
                        <h3 className='footer__column-title'>Contact</h3>
                        <div className='footer__contact'>
                            <div className='footer__contact-item'>
                                <div className='footer__contact-item-title'>Phone:</div>
                                <div className='footer__contact-item-content'>087-259-9158</div>
                            </div>
                            <div className='footer__contact-item'>
                                <div className='footer__contact-item-title'></div>
                                <div className='footer__contact-item-content'>087-259-9158</div>
                            </div>
                            <div className='footer__contact-item'>
                                <div className='footer__contact-item-title'>Email:</div>
                                <div className='footer__contact-item-content'>
                                    info@passionmarine.co.th
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Social */}
                    <div className='footer__column'>
                        <h3 className='footer__column-title'>Social</h3>
                        <div className='footer__social'>
                            <Link href='#' className='footer__social-item'>
                                <div className='footer__social-item-icon'>
                                    <Image
                                        src='/images/icon/ic-facebook.svg'
                                        alt='Facebook'
                                        width={10}
                                        height={10}
                                    />
                                </div>
                                <span>Passion Marine</span>
                            </Link>
                            <Link href='#' className='footer__social-item'>
                                <div className='footer__social-item-icon'>
                                    <Image
                                        src='/images/icon/ic-instagram.svg'
                                        alt='Instagram'
                                        width={10}
                                        height={10}
                                    />
                                </div>
                                <span>@passion.marine</span>
                            </Link>
                            <Link href='#' className='footer__social-item'>
                                <div className='footer__social-item-icon'>
                                    <Image
                                        src='/images/icon/ic-line.svg'
                                        alt='Line'
                                        width={10}
                                        height={10}
                                    />
                                </div>
                                <span>@passionmarine</span>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Footer Bottom - Copyright */}
                <div className='footer__bottom'>
                    <div className='footer__copyright'>
                        Copyright © 2025 Passion Marine Company Limited. All right reserved
                    </div>
                </div>
            </div>
            {/* Scroll to Top Button */}
            <button className='footer__scroll-top' aria-label='Scroll to top' onClick={scrollToTop}>
                <Image
                    src='/images/icon/ic-back-to-top.svg'
                    alt='Back to Top'
                    width={20}
                    height={20}
                    className='footer__scroll-top-icon'
                />
            </button>
            <div className='footer__image-footer'>
                <Image
                    src='/images/icon/logo-footer.svg'
                    alt='Passion Marine Logo'
                    width={200}
                    height={55}
                    className='footer__image-responsive'
                />
            </div>
        </footer>
    );
};

export { Footer };
