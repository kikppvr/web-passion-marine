"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState, useEffect } from "react";

export interface MissionCardProps {
    className?: string;
    title: string;
    description: string;
    image: string;
    isOpen?: boolean;
    onToggle?: () => void;
}

const MissionCard = ({
    className,
    title,
    description,
    image,
    isOpen: controlledIsOpen,
    onToggle,
}: MissionCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [internalIsOpen, setInternalIsOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    // Use controlled state if provided, otherwise use internal state
    const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

    useEffect(() => {
        const checkDesktop = () => {
            setIsDesktop(window.innerWidth >= 1280);
        };

        checkDesktop();
        window.addEventListener("resize", checkDesktop);

        return () => {
            window.removeEventListener("resize", checkDesktop);
        };
    }, []);

    const handleClick = () => {
        if (onToggle) {
            onToggle();
        } else {
            setInternalIsOpen(!internalIsOpen);
        }
    };

    const handleMouseEnter = () => {
        if (isDesktop) {
            setIsHovered(true);
        }
    };

    const handleMouseLeave = () => {
        if (isDesktop) {
            setIsHovered(false);
        }
    };

    const isActive = isHovered || isOpen;

    return (
        <div
            className={cn("card-mission", className, { "card-mission--open": isOpen })}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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
