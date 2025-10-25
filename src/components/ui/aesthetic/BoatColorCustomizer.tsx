"use client";

import { useState } from "react";

interface ColorOption {
    id: string;
    name: string;
    hex: string;
    image: string;
}

interface BoatColorCustomizerProps {
    className?: string;
}

const colorPalette = {
    hullSide: [
        {
            id: "white",
            name: "White",
            hex: "#FFFFFF",
            image: "/images/our-services/aesthetic-solutions/boat-customizer/hull-side/white.webp",
        },
        {
            id: "blue",
            name: "Blue",
            hex: "#2563EB",
            image: "/images/our-services/aesthetic-solutions/boat-customizer/hull-side/blue.webp",
        },
        {
            id: "gray",
            name: "Gray",
            hex: "#6B7280",
            image: "/images/our-services/aesthetic-solutions/boat-customizer/hull-side/gray.webp",
        },
        {
            id: "dark-gray",
            name: "Dark Gray",
            hex: "#4B5563",
            image: "/images/our-services/aesthetic-solutions/boat-customizer/hull-side/dark-gray.webp",
        },
        {
            id: "red",
            name: "Red",
            hex: "#DC2626",
            image: "/images/our-services/aesthetic-solutions/boat-customizer/hull-side/red.webp",
        },
        {
            id: "black",
            name: "Black",
            hex: "#000000",
            image: "/images/our-services/aesthetic-solutions/boat-customizer/hull-side/black.webp",
        },
    ],
    bootStripe: [
        {
            id: "white",
            name: "White",
            hex: "#FFFFFF",
            image: "/images/our-services/aesthetic-solutions/boat-customizer/boot-stripe/white.webp",
        },
        {
            id: "blue",
            name: "Blue",
            hex: "#2563EB",
            image: "/images/our-services/aesthetic-solutions/boat-customizer/boot-stripe/blue.webp",
        },
        {
            id: "gray",
            name: "Gray",
            hex: "#6B7280",
            image: "/images/our-services/aesthetic-solutions/boat-customizer/hull-side/gray.webp",
        },
        {
            id: "dark-gray",
            name: "Dark Gray",
            hex: "#4B5563",
            image: "/images/our-services/aesthetic-solutions/boat-customizer/boot-stripe/dark-gray.webp",
        },
        {
            id: "red",
            name: "Red",
            hex: "#DC2626",
            image: "/images/our-services/aesthetic-solutions/boat-customizer/boot-stripe/red.webp",
        },
        {
            id: "black",
            name: "Black",
            hex: "#000000",
            image: "/images/our-services/aesthetic-solutions/boat-customizer/boot-stripe/black.webp",
        },
    ],
    hullBottom: [
        {
            id: "white",
            name: "White",
            hex: "#FFFFFF",
            image: "/images/our-services/aesthetic-solutions/boat-customizer/hull-bottom/white.webp",
        },
        {
            id: "blue",
            name: "Blue",
            hex: "#2563EB",
            image: "/images/our-services/aesthetic-solutions/boat-customizer/hull-bottom/blue.webp",
        },
        {
            id: "gray",
            name: "Gray",
            hex: "#6B7280",
            image: "/images/our-services/aesthetic-solutions/boat-customizer/hull-bottom/gray.webp",
        },
        {
            id: "dark-gray",
            name: "Dark Gray",
            hex: "#4B5563",
            image: "/images/our-services/aesthetic-solutions/boat-customizer/hull-bottom/dark-gray.webp",
        },
        {
            id: "red",
            name: "Red",
            hex: "#DC2626",
            image: "/images/our-services/aesthetic-solutions/boat-customizer/hull-bottom/red.webp",
        },
        {
            id: "black",
            name: "Black",
            hex: "#000000",
            image: "/images/our-services/aesthetic-solutions/boat-customizer/hull-bottom/black.webp",
        },
    ],
};

export default function BoatColorCustomizer({ className = "" }: BoatColorCustomizerProps) {
    const [selectedHullSide, setSelectedHullSide] = useState<string>("white");
    const [selectedBootStripe, setSelectedBootStripe] = useState<string>("white");
    const [selectedHullBottom, setSelectedHullBottom] = useState<string>("white");
    const [activeSection, setActiveSection] = useState<string>("hullSide");

    const handleColorSelect = (colorId: string) => {
        switch (activeSection) {
            case "hullSide":
                setSelectedHullSide(colorId);
                break;
            case "bootStripe":
                setSelectedBootStripe(colorId);
                break;
            case "hullBottom":
                setSelectedHullBottom(colorId);
                break;
        }
    };

    const getCurrentColors = () => {
        return {
            hullSide:
                colorPalette.hullSide.find(c => c.id === selectedHullSide) ||
                colorPalette.hullSide[0],
            bootStripe:
                colorPalette.bootStripe.find(c => c.id === selectedBootStripe) ||
                colorPalette.bootStripe[0],
            hullBottom:
                colorPalette.hullBottom.find(c => c.id === selectedHullBottom) ||
                colorPalette.hullBottom[0],
        };
    };

    const currentColors = getCurrentColors();

    return (
        <div className={`boat-color-customizer ${className}`}>
            <div className='boat-color-customizer__container'>
                {/* Header */}
                {/* <div className='boat-color-customizer__header'>
                    <h3 className='boat-color-customizer__title'>Customize Your Boat Colors</h3>
                    <p className='boat-color-customizer__subtitle'>
                        Choose from our premium color options to create your perfect boat design
                    </p>
                </div> */}

                {/* <div className='boat-color-customizer__content'> */}
                {/* Boat Preview */}
                <div className='boat-color-customizer__preview'>
                    <div className='boat-color-customizer__boat-container'>
                        <div className='boat-color-customizer__boat'>
                            {/* Hull Side */}
                            <div
                                className='boat-color-customizer__hull-side'
                                style={{ backgroundColor: currentColors.hullSide.hex }}
                                onClick={() => setActiveSection("hullSide")}>
                                <div
                                    className={`boat-color-customizer__section-indicator ${activeSection === "hullSide" ? "active" : ""}`}>
                                    Hull Side
                                </div>
                            </div>

                            {/* Boot Stripe */}
                            <div
                                className='boat-color-customizer__boot-stripe'
                                style={{ backgroundColor: currentColors.bootStripe.hex }}
                                onClick={() => setActiveSection("bootStripe")}>
                                <div
                                    className={`boat-color-customizer__section-indicator ${activeSection === "bootStripe" ? "active" : ""}`}>
                                    Boot Stripe
                                </div>
                            </div>

                            {/* Hull Bottom */}
                            <div
                                className='boat-color-customizer__hull-bottom'
                                style={{ backgroundColor: currentColors.hullBottom.hex }}
                                onClick={() => setActiveSection("hullBottom")}>
                                <div
                                    className={`boat-color-customizer__section-indicator ${activeSection === "hullBottom" ? "active" : ""}`}>
                                    Hull Bottom
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Color Selection */}
                <div className='boat-color-customizer__controls'>
                    <div className='boat-color-customizer__section-tabs'>
                        <button
                            className={`boat-color-customizer__tab ${activeSection === "hullSide" ? "active" : ""}`}
                            onClick={() => setActiveSection("hullSide")}>
                            Hull Side
                        </button>
                        <button
                            className={`boat-color-customizer__tab ${activeSection === "bootStripe" ? "active" : ""}`}
                            onClick={() => setActiveSection("bootStripe")}>
                            Boot Stripe
                        </button>
                        <button
                            className={`boat-color-customizer__tab ${activeSection === "hullBottom" ? "active" : ""}`}
                            onClick={() => setActiveSection("hullBottom")}>
                            Hull Bottom
                        </button>
                    </div>

                    <div className='boat-color-customizer__color-palette'>
                        <h4 className='boat-color-customizer__palette-title'>
                            Select{" "}
                            {activeSection === "hullSide"
                                ? "Hull Side"
                                : activeSection === "bootStripe"
                                  ? "Boot Stripe"
                                  : "Hull Bottom"}{" "}
                            Color
                        </h4>
                        <div className='boat-color-customizer__colors'>
                            {colorPalette[activeSection as keyof typeof colorPalette].map(color => {
                                const isSelected =
                                    (activeSection === "hullSide" &&
                                        selectedHullSide === color.id) ||
                                    (activeSection === "bootStripe" &&
                                        selectedBootStripe === color.id) ||
                                    (activeSection === "hullBottom" &&
                                        selectedHullBottom === color.id);

                                return (
                                    <button
                                        key={color.id}
                                        className={`boat-color-customizer__color-option ${isSelected ? "selected" : ""}`}
                                        onClick={() => handleColorSelect(color.id)}
                                        style={{ backgroundColor: color.hex }}
                                        title={color.name}>
                                        <div className='boat-color-customizer__color-check'>
                                            {isSelected && (
                                                <svg
                                                    width='16'
                                                    height='16'
                                                    viewBox='0 0 24 24'
                                                    fill='none'>
                                                    <path
                                                        d='M20 6L9 17L4 12'
                                                        stroke='currentColor'
                                                        strokeWidth='2'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                    />
                                                </svg>
                                            )}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Current Selection Display */}
                    <div className='boat-color-customizer__current-selection'>
                        <h4 className='boat-color-customizer__selection-title'>
                            Current Selection
                        </h4>
                        <div className='boat-color-customizer__selection-items'>
                            <div className='boat-color-customizer__selection-item'>
                                <div
                                    className='boat-color-customizer__selection-color'
                                    style={{
                                        backgroundColor: currentColors.hullSide.hex,
                                    }}></div>
                                <span className='boat-color-customizer__selection-name'>
                                    Hull Side: {currentColors.hullSide.name}
                                </span>
                            </div>
                            <div className='boat-color-customizer__selection-item'>
                                <div
                                    className='boat-color-customizer__selection-color'
                                    style={{
                                        backgroundColor: currentColors.bootStripe.hex,
                                    }}></div>
                                <span className='boat-color-customizer__selection-name'>
                                    Boot Stripe: {currentColors.bootStripe.name}
                                </span>
                            </div>
                            <div className='boat-color-customizer__selection-item'>
                                <div
                                    className='boat-color-customizer__selection-color'
                                    style={{
                                        backgroundColor: currentColors.hullBottom.hex,
                                    }}></div>
                                <span className='boat-color-customizer__selection-name'>
                                    Hull Bottom: {currentColors.hullBottom.name}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    );
}
