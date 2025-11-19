"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
//components
import { PrimaryButton } from "@/components/ui/button/PrimaryButton";

export interface FooterProps {
    className?: string;
}

const Footer = ({ className }: FooterProps) => {
    const router = useRouter();

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
                            <PrimaryButton theme='dark' onClick={() => router.push("/contact-us")}>
                                Contact Us
                            </PrimaryButton>
                        </div>
                    </div>

                    {/* Middle Column - Contact */}
                    <div className='footer__column'>
                        <h3 className='footer__column-title'>Contact</h3>
                        <div className='footer__contact'>
                            <div className='footer__contact-item'>
                                <div className='footer__contact-item-title'>Phone:</div>
                                <Link
                                    href='tel:0872599158'
                                    className='footer__contact-item-content'>
                                    087-259-9158
                                </Link>
                            </div>
                            <div className='footer__contact-item'>
                                <div className='footer__contact-item-title'></div>
                                <Link
                                    href='tel:0875851656'
                                    className='footer__contact-item-content'>
                                    087-585-1656
                                </Link>
                            </div>
                            <div className='footer__contact-item'>
                                <div className='footer__contact-item-title'>Email:</div>
                                <Link
                                    href='mailto:info@passionmarine.co.th'
                                    className='footer__contact-item-content'>
                                    info@passionmarine.co.th
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Social */}
                    <div className='footer__column'>
                        <h3 className='footer__column-title'>Social</h3>
                        <div className='footer__social'>
                            {/* <Link
                                href='https://facebook.com/passionmarine'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='footer__social-item'>
                                <div className='footer__social-item-icon'>
                                    <svg
                                        width='8'
                                        height='14'
                                        viewBox='0 0 8 14'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_145_1455)'>
                                            <path
                                                d='M2.53824 13.9364V7.63022H0.400391V5.13998H2.53824C2.59194 3.82326 2.2966 2.40026 3.11214 1.2603C3.87621 0.193054 5.13028 0.00958562 6.36981 0.0767081L7.60039 0.159492V2.37901H6.15278C6.04762 2.37901 5.77914 2.43047 5.67286 2.46739C5.34284 2.58149 5.0833 2.93165 5.0833 3.28516V5.13886H7.51984L7.19542 7.6291H5.08442V13.9353H2.54048L2.53824 13.9364Z'
                                                fill='currentColor'
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_145_1455'>
                                                <rect
                                                    width='7.2'
                                                    height='13.872'
                                                    fill='white'
                                                    transform='translate(0.400391 0.0644531)'
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <span>Passion Marine</span>
                            </Link> */}
                            <Link
                                href='https://instagram.com/passion.marine'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='footer__social-item'>
                                <div className='footer__social-item-icon'>
                                    <svg
                                        width='10'
                                        height='10'
                                        viewBox='0 0 10 10'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_145_1463)'>
                                            <path
                                                d='M3.59772 0.028405C4.86184 -0.00871448 6.23939 -0.018613 7.49609 0.055626C9.06501 0.148425 9.84823 0.937833 9.94433 2.50469C10.0169 3.68715 10.0153 5.02304 9.98558 6.21293C9.9365 8.18191 9.90061 9.79043 7.49609 9.93808C6.30126 10.0115 4.95093 10.0107 3.74826 9.97932C1.79536 9.92859 0.207469 9.87374 0.0660022 7.4886C-0.0272091 5.9168 -0.0272091 4.07608 0.0660022 2.50428C0.204582 0.173171 1.66709 0.0844968 3.59772 0.028405ZM8.08011 1.05538C7.32328 1.17664 7.334 2.38467 8.11516 2.48242C9.23989 2.62347 9.20565 0.87473 8.08011 1.05538ZM4.5851 1.92191C3.40552 2.04235 2.33648 3.00374 2.02261 4.133C1.29713 6.74085 3.97015 8.97503 6.399 7.77071C9.42053 6.27232 8.18074 1.55484 4.5851 1.92191Z'
                                                fill='currentColor'
                                            />
                                            <path
                                                d='M4.70739 2.99039C7.47032 2.63569 7.84523 6.75596 5.22665 7.00878C2.54167 7.26779 2.20801 3.31085 4.70739 2.99039Z'
                                                fill='currentColor'
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_145_1463'>
                                                <rect
                                                    width='10.0087'
                                                    height='10'
                                                    fill='white'
                                                    transform='translate(-0.00390625)'
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <span>@passion.marine</span>
                            </Link>
                            <Link
                                href='https://line.me/ti/p/@passionmarine'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='footer__social-item'>
                                <div className='footer__social-item-icon'>
                                    <svg
                                        width='10'
                                        height='10'
                                        viewBox='0 0 24 24'
                                        fill='currentColor'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314' />
                                    </svg>
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
