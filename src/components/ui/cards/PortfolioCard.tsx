"use client";

import Link from "next/link";
import Image from "next/image";

export interface PortfolioCardProps {
    title: string;
    model: string;
    image: string;
    brandLogos: string[];
    href: string;
    className?: string;
}

export const PortfolioCard = ({
    title,
    model,
    image,
    brandLogos,
    href,
    className = "",
}: PortfolioCardProps) => {
    return (
        <div className={`card-portfolio ${className}`}>
            <Link href={href} className='card-portfolio__link'>
                {/* Image Container */}
                <div className='card-portfolio__image-container'>
                    <Image
                        src={image}
                        alt={title}
                        width={324}
                        height={243}
                        className='card-portfolio__image'
                    />
                </div>

                <div className='card-portfolio__content'>
                    {/* Brand Logos */}
                    <div className='card-portfolio__brands'>
                        {brandLogos.map((logo, index) => (
                            <div key={index} className='card-portfolio__brand-logo'>
                                <Image
                                    src={logo}
                                    alt={`Brand ${index + 1}`}
                                    width={90}
                                    height={24}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Model Info */}
                    <div className='card-portfolio__model'>
                        <span className='card-portfolio__model-text'>Model: {model}</span>
                        <div className='card-portfolio__arrow'>
                            <i className='ph-light ph-arrow-right'></i>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};
