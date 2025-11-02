"use client";

import { useState } from "react";

interface ColorOption {
    id: string;
    name: string;
    hex?: string;
    gradient?: string;
    image: string;
}

interface BoatColorCustomizerProps {
    className?: string;
}

const colorPalette: {
    hullSide: ColorOption[];
    bootStripe: ColorOption[];
    hullBottom: ColorOption[];
} = {
    hullSide: [
        {
            id: "white",
            name: "White",
            hex: "#FFFFFF",
            image: "/images/our-services/aesthetic-solutions/boat-customizer/hull-side/white.png",
        },
        {
            id: "blue",
            name: "Blue",
            hex: "#1C4583",
            image: "/images/our-services/aesthetic-solutions/boat-customizer/hull-side/blue.png",
        },
        {
            id: "grey",
            name: "Grey",
            hex: "#6B7280",
            gradient: "linear-gradient(140deg, #D2D2D3 0%, #9F9FA0 69%, #D2D2D3 100%)",
            image: "/images/our-services/aesthetic-solutions/boat-customizer/hull-side/grey.png",
        },
        {
            id: "darkgrey",
            name: "Dark Grey",
            hex: "#6F6F71",
            image: "/images/our-services/aesthetic-solutions/boat-customizer/hull-side/dark-grey.png",
        },
        {
            id: "red",
            name: "Red",
            hex: "#E22222",
            image: "/images/our-services/aesthetic-solutions/boat-customizer/hull-side/red.png",
        },
        {
            id: "black",
            name: "Black",
            hex: "#000000",
            image: "/images/our-services/aesthetic-solutions/boat-customizer/hull-side/black.png",
        },
    ],
    bootStripe: [
        {
            id: "white",
            name: "White",
            hex: "#FFFFFF",
            image: "/images/our-services/aesthetic-solutions/boat-customizer/boot-stripe/white.png",
        },
        {
            id: "blue",
            name: "Blue",
            hex: "#1C4583",
            image: "/images/our-services/aesthetic-solutions/boat-customizer/boot-stripe/blue.png",
        },
        {
            id: "grey",
            name: "Grey",
            hex: "#6B7280",
            gradient: "linear-gradient(140deg, #D2D2D3 0%, #9F9FA0 69%, #D2D2D3 100%)",
            image: "/images/our-services/aesthetic-solutions/boat-customizer/boot-stripe/grey.png",
        },
        {
            id: "darkgrey",
            name: "Dark Grey",
            hex: "#6F6F71",
            image: "/images/our-services/aesthetic-solutions/boat-customizer/boot-stripe/dark-grey.png",
        },
        {
            id: "red",
            name: "Red",
            hex: "#E22222",
            image: "/images/our-services/aesthetic-solutions/boat-customizer/boot-stripe/red.png",
        },
        {
            id: "black",
            name: "Black",
            hex: "#000000",
            image: "/images/our-services/aesthetic-solutions/boat-customizer/boot-stripe/black.png",
        },
    ],
    hullBottom: [
        {
            id: "white",
            name: "White",
            hex: "#FFFFFF",
            image: "/images/our-services/aesthetic-solutions/boat-customizer/hull-bottom/white.png",
        },
        {
            id: "blue",
            name: "Blue",
            hex: "#1C4583",
            image: "/images/our-services/aesthetic-solutions/boat-customizer/hull-bottom/blue.png",
        },
        {
            id: "grey",
            name: "Grey",
            hex: "#6B7280",
            gradient: "linear-gradient(140deg, #D2D2D3 0%, #9F9FA0 69%, #D2D2D3 100%)",
            image: "/images/our-services/aesthetic-solutions/boat-customizer/hull-bottom/grey.png",
        },
        {
            id: "darkgrey",
            name: "Dark Grey",
            hex: "#6F6F71",
            image: "/images/our-services/aesthetic-solutions/boat-customizer/hull-bottom/dark-grey.png",
        },
        {
            id: "red",
            name: "Red",
            hex: "#E22222",
            image: "/images/our-services/aesthetic-solutions/boat-customizer/hull-bottom/red.png",
        },
        {
            id: "black",
            name: "Black",
            hex: "#000000",
            image: "/images/our-services/aesthetic-solutions/boat-customizer/hull-bottom/black.png",
        },
    ],
};

export default function BoatColorCustomizer({ className = "" }: BoatColorCustomizerProps) {
    const [selectedHullSide, setSelectedHullSide] = useState<string>("white");
    const [selectedBootStripe, setSelectedBootStripe] = useState<string>("white");
    const [selectedHullBottom, setSelectedHullBottom] = useState<string>("white");

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
                {/* Boat Preview */}
                <div className='boat-color-customizer__preview'>
                    <div className='boat-color-customizer__boat'>
                        {/* Hull Side Layer */}
                        <div
                            className='boat-color-customizer__hull-side'
                            style={{
                                backgroundImage: `url(${currentColors.hullSide.image})`,
                                backgroundSize: "contain",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}></div>
                        {/* Boot Stripe Layer */}
                        <div
                            className='boat-color-customizer__boot-stripe'
                            style={{
                                backgroundImage: `url(${currentColors.bootStripe.image})`,
                                backgroundSize: "contain",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}></div>
                        {/* Hull Bottom Layer */}
                        <div
                            className='boat-color-customizer__hull-bottom'
                            style={{
                                backgroundImage: `url(${currentColors.hullBottom.image})`,
                                backgroundSize: "contain",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}></div>
                    </div>
                </div>

                {/* Color Selection */}
                <div className='boat-color-customizer__controls'>
                    <div className='boat-color-customizer__color-sections'>
                        {/* Hull Side Colors */}
                        <div className='boat-color-customizer__color-section'>
                            <h4 className='boat-color-customizer__section-title'>Hull Side</h4>
                            <div className='boat-color-customizer__colors'>
                                {colorPalette.hullSide.map(color => {
                                    const isSelected = selectedHullSide === color.id;
                                    const isWhite = color.id === "white";
                                    return (
                                        <div
                                            key={color.id}
                                            className={`boat-color-customizer__color-wrapper ${isSelected ? "boat-color-customizer__color-option--selected" : ""}`}>
                                            <button
                                                className='boat-color-customizer__color-option'
                                                onClick={() => setSelectedHullSide(color.id)}
                                                style={{
                                                    backgroundColor: color.hex,
                                                    background: color.gradient || color.hex,
                                                    border: isWhite
                                                        ? "1px solid #BDBDBE"
                                                        : undefined,
                                                }}
                                                title={color.name}></button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Boot Stripe Colors */}
                        <div className='boat-color-customizer__color-section'>
                            <h4 className='boat-color-customizer__section-title'>Boot Stripe</h4>
                            <div className='boat-color-customizer__colors'>
                                {colorPalette.bootStripe.map(color => {
                                    const isSelected = selectedBootStripe === color.id;
                                    const isWhite = color.id === "white";
                                    return (
                                        <div
                                            key={color.id}
                                            className={`boat-color-customizer__color-wrapper ${isSelected ? "boat-color-customizer__color-option--selected" : ""}`}>
                                            <button
                                                className='boat-color-customizer__color-option'
                                                onClick={() => setSelectedBootStripe(color.id)}
                                                style={{
                                                    backgroundColor: color.hex,
                                                    background: color.gradient || color.hex,
                                                    border: isWhite
                                                        ? "1px solid #BDBDBE"
                                                        : undefined,
                                                }}
                                                title={color.name}></button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Hull Bottom Colors */}
                        <div className='boat-color-customizer__color-section'>
                            <h4 className='boat-color-customizer__section-title'>Hull Bottom</h4>
                            <div className='boat-color-customizer__colors'>
                                {colorPalette.hullBottom.map(color => {
                                    const isSelected = selectedHullBottom === color.id;
                                    const isWhite = color.id === "white";
                                    return (
                                        <div
                                            key={color.id}
                                            className={`boat-color-customizer__color-wrapper ${isSelected ? "boat-color-customizer__color-option--selected" : ""}`}>
                                            <button
                                                className='boat-color-customizer__color-option'
                                                onClick={() => setSelectedHullBottom(color.id)}
                                                style={{
                                                    backgroundColor: color.hex,
                                                    background: color.gradient || color.hex,
                                                    border: isWhite
                                                        ? "1px solid #BDBDBE"
                                                        : undefined,
                                                }}
                                                title={color.name}></button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
