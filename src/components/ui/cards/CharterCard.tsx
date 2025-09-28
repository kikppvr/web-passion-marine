"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
//components
import { BookNowButton } from "@/components/ui/button/BookNowButton";

export interface CharterCardProps {
    className?: string;
    title: string;
    location: string;
    image: string;
    price: number;
    passengers: string;
    passengerUnit: string;
    restrooms: string;
    restroomUnit: string;
    href: string;
    variant?: "default" | "featured";
}

const CharterCard = ({
    className,
    title,
    location,
    image,
    price,
    passengers,
    passengerUnit,
    restrooms,
    restroomUnit,
    href,
    variant = "default",
}: CharterCardProps) => {
    return (
        <div className={cn("card-charter", `card-charter--${variant}`, className)}>
            <Link href={href} className='card-charter__link'>
                <div className='card-charter__image-container'>
                    <Image
                        src={image}
                        alt={title}
                        width={400}
                        height={300}
                        className='card-charter__image'
                    />
                </div>

                <div className='card-charter__content'>
                    <div className='card-charter__header'>
                        <h3 className='card-charter__title'>{title}</h3>
                        <p className='card-charter__location'>{location}</p>
                    </div>

                    <div className='card-charter__details'>
                        <div className='card-charter__detail-item'>
                            <Image
                                src='/images/icon/ic-passenger.svg'
                                alt='Passengers'
                                width={15}
                                height={17}
                                className='card-charter__detail-icon'
                            />
                            <span className='card-charter__detail-text'>{passengers} </span>
                            <span className='card-charter__detail-unit'>{passengerUnit}</span>
                        </div>
                        <div className='card-charter__detail-item'>
                            <Image
                                src='/images/icon/ic-restroom.svg'
                                alt='Restrooms'
                                width={18}
                                height={16}
                                className='card-charter__detail-icon'
                            />
                            <span className='card-charter__detail-text'>{restrooms}</span>
                            <span className='card-charter__detail-unit'>{restroomUnit}</span>
                        </div>
                    </div>

                    <div className='card-charter__price-section'>
                        <div className='card-charter__price'>
                            <span className='card-charter__price-amount'>
                                {price.toLocaleString()}
                            </span>
                            <span className='card-charter__price-currency'>Baht</span>
                        </div>
                    </div>

                    <div className='card-charter__footer'>
                        <BookNowButton>Book Now</BookNowButton>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export { CharterCard };
