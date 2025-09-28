"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export interface PortfolioCardProps {
    className?: string;
    title: string;
    model: string;
    image: string;
    logos: {
        left: string;
        right: string;
    };
    href?: string;
}

const PortfolioCard = ({
    className,
    title,
    model,
    image,
    logos,
    href = "#",
}: PortfolioCardProps) => {
    return (
        <div className={cn("card-portfolio", className)}>
            <Link href={href} className='card-portfolio__link'>
                <div className='card-portfolio__image-container'>
                    <Image
                        src={image}
                        alt={title}
                        width={400}
                        height={300}
                        className='card-portfolio__image'
                    />
                </div>

                <div className='card-portfolio__content'>
                    <div className='card-portfolio__logos'>
                        <div className='card-portfolio__logo-left'>
                            <Image
                                src={logos.left}
                                alt='Left Logo'
                                width={80}
                                height={20}
                                className='card-portfolio__logo'
                            />
                        </div>
                        <div className='card-portfolio__logo-right'>
                            <Image
                                src={logos.right}
                                alt='Right Logo'
                                width={80}
                                height={20}
                                className='card-portfolio__logo'
                            />
                        </div>
                    </div>

                    <div className='card-portfolio__model'>
                        <span className='card-portfolio__model-text'>{model}</span>
                        <div className='card-portfolio__arrow'>
                            <i className='ph ph-arrow-right card-portfolio__arrow-icon'></i>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export { PortfolioCard };
