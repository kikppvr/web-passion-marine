"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

export interface MissionCardProps {
    className?: string;
    title: string;
    description: string;
    image: string;
}

const MissionCard = ({ className, title, description, image }: MissionCardProps) => {
    return (
        <div className={cn("card-mission", className)}>
            <div className='card-mission__image-container'>
                <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={300}
                    className='card-mission__image'
                />
                <div className='card-mission__overlay'></div>
            </div>

            <div className='card-mission__content'>
                <div className='card-mission__content-inner'>
                    <h3 className='card-mission__title'>{title}</h3>
                    <p className='card-mission__description'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export { MissionCard };
