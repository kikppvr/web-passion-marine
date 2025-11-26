"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export interface MissionCardProps {
    className?: string;
    title: string;
    description: string;
    image: string;
}

const MissionCard = ({ className, title, description, image }: MissionCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const isActive = isHovered || isOpen;

    return (
        <div
            className={cn("card-mission", className, { "card-mission--open": isOpen })}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}>
            <div className='card-mission__content-icon'>
                <i className={isActive ? "ph ph-minus" : "ph ph-plus"}></i>
            </div>
            <div className='card-mission__image-container'>
                <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={300}
                    className='card-mission__image'
                />
            </div>

            <div className='card-mission__content'>
                <div className='card-mission__content-overlay'></div>
                <div className='card-mission__content-inner'>
                    <h3 className='card-mission__title'>{title}</h3>
                    <p className='card-mission__description'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export { MissionCard };
