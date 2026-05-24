"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/i18n";
//components
import { ReadMoreButton } from "@/components/ui/button/ReadMoreButton";

export interface NewsCardProps {
    className?: string;
    title: string;
    description: string;
    image: string;
    date: string;
    category: string;
    href?: string;
    variant?: "default" | "featured";
}

const NewsCard = ({
    className,
    title,
    description,
    image,
    date,
    category,
    href = "#",
    variant = "default",
}: NewsCardProps) => {
    const t = useTranslation();

    return (
        <div className={cn("card-news", `card-news--${variant}`, className)}>
            <Link href={href} className='card-news__link'>
                <div className='card-news__image-container'>
                    <Image
                        src={image}
                        alt={title}
                        width={400}
                        height={250}
                        className='card-news__image'
                    />
                </div>

                <div className='card-news__content'>
                    <div className='card-news__date'>{date}</div>

                    <div className='card-news__header'>
                        <h3 className='card-news__title'>{title}</h3>
                        <p className='card-news__description'>{description}</p>
                    </div>

                    <div className='card-news__footer'>
                        <ReadMoreButton>{t.buttons.readMore}</ReadMoreButton>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export { NewsCard };
