"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export interface BusinessCardProps {
    className?: string;
    title: string;
    image: string;
    href?: string;
}

const BusinessCard = ({ className, title, image, href = "#" }: BusinessCardProps) => {
    return (
        <div className={cn("card-business", className)}>
            <Link href={href} className='card-business__link'>
                <div className='card-business__icon'>
                    <Image
                        src='/images/business/ic-business.webp'
                        alt='Business Icon'
                        width={32}
                        height={32}
                        className='card-business__icon-image'
                    />
                </div>
                <div className='card-business__image-container'>
                    <Image
                        src={image}
                        alt={title}
                        width={400}
                        height={300}
                        className='card-business__image'
                    />
                    <div className='card-business__overlay'></div>
                </div>

                <div className='card-business__content'>
                    <div className='card-business__title'>{title}</div>
                </div>
            </Link>
        </div>
    );
};

export { BusinessCard };
