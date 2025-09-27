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
                                <span>087-259-9158</span>
                            </div>
                            <div className='footer__contact-item'>
                                <span>087-585-1656</span>
                            </div>
                            <div className='footer__contact-item'>
                                <span>Email : info@passionmarine.co.th</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Social */}
                    <div className='footer__column'>
                        <h3 className='footer__column-title'>Social</h3>
                        <div className='footer__social'>
                            <Link href='#' className='footer__social-item'>
                                <i className='ph ph-facebook-logo'></i>
                                <span>Passion Marine</span>
                            </Link>
                            <Link href='#' className='footer__social-item'>
                                <i className='ph ph-instagram-logo'></i>
                                <span>@passion.marine</span>
                            </Link>
                            <Link href='#' className='footer__social-item'>
                                <i className='ph ph-chat-circle'></i>
                                <span>@passionmarine</span>
                            </Link>
                        </div>
                    </div>

                    {/* Scroll to Top Button */}
                    <button className='footer__scroll-top' aria-label='Scroll to top'>
                        <i className='ph ph-arrow-up'></i>
                    </button>
                </div>

                {/* Footer Bottom - Copyright */}
                <div className='footer__bottom'>
                    <div className='footer__copyright'>
                        Copyright © 2025 Passion Marine Company Limited. All right reserved
                    </div>
                </div>
            </div>
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
