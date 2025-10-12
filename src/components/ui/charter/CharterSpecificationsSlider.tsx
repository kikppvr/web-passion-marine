"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageData {
    src: string;
    alt: string;
    specifications: {
        type: string;
        length: string;
        cabins: string;
        restrooms: string;
        passengerCapacity: string;
        speed: string;
    };
}

interface CharterSpecificationsSliderProps {
    mainImage: string;
    title: string;
    specifications: {
        type: string;
        length: string;
        cabins: string;
        restrooms: string;
        passengerCapacity: string;
        speed: string;
    };
    gallery: ImageData[];
}

export default function CharterSpecificationsSlider({
    mainImage,
    title,
    specifications,
    gallery,
}: CharterSpecificationsSliderProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div className='charter-specifications-slider'>
            <div className='charter-specifications-slider__main'>
                <div className='charter-specifications-slider__image'>
                    <Image
                        src={currentSlide === 0 ? mainImage : gallery[currentSlide - 1].src}
                        alt={currentSlide === 0 ? title : gallery[currentSlide - 1].alt}
                        width={633}
                        height={483}
                        className='charter-specifications-slider__img'
                    />
                </div>
                <div className='charter-specifications-slider__content'>
                    <h2 className='charter-specifications-slider__title'>Boat Specifications</h2>
                    <div className='charter-specifications-slider__list'>
                        <div className='charter-specifications-slider__item'>
                            <Image
                                src='/images/icon/ic-passenger.svg'
                                alt='Type'
                                width={24}
                                height={11}
                                className='charter-specifications-slider__icon'
                            />
                            <div className='charter-specifications-slider__detail'>
                                <span className='charter-specifications-slider__label'>Type:</span>
                                <span className='charter-specifications-slider__value'>
                                    {currentSlide === 0
                                        ? specifications.type
                                        : gallery[currentSlide - 1].specifications.type}
                                </span>
                            </div>
                        </div>
                        <div className='charter-specifications-slider__item'>
                            <Image
                                src='/images/icon/ic-passenger.svg'
                                alt='Length'
                                width={24}
                                height={12}
                                className='charter-specifications-slider__icon'
                            />
                            <div className='charter-specifications-slider__detail'>
                                <span className='charter-specifications-slider__label'>
                                    Length (feet):
                                </span>
                                <span className='charter-specifications-slider__value'>
                                    {currentSlide === 0
                                        ? specifications.length
                                        : gallery[currentSlide - 1].specifications.length}
                                </span>
                            </div>
                        </div>
                        <div className='charter-specifications-slider__item'>
                            <Image
                                src='/images/icon/ic-passenger.svg'
                                alt='Cabins'
                                width={24}
                                height={19}
                                className='charter-specifications-slider__icon'
                            />
                            <div className='charter-specifications-slider__detail'>
                                <span className='charter-specifications-slider__label'>
                                    Cabins:
                                </span>
                                <span className='charter-specifications-slider__value'>
                                    {currentSlide === 0
                                        ? specifications.cabins
                                        : gallery[currentSlide - 1].specifications.cabins}
                                </span>
                            </div>
                        </div>
                        <div className='charter-specifications-slider__item'>
                            <Image
                                src='/images/icon/ic-restroom.svg'
                                alt='Restroom'
                                width={24}
                                height={21}
                                className='charter-specifications-slider__icon'
                            />
                            <div className='charter-specifications-slider__detail'>
                                <span className='charter-specifications-slider__label'>
                                    Restroom:
                                </span>
                                <span className='charter-specifications-slider__value'>
                                    {currentSlide === 0
                                        ? specifications.restrooms
                                        : gallery[currentSlide - 1].specifications.restrooms}
                                </span>
                            </div>
                        </div>
                        <div className='charter-specifications-slider__item'>
                            <Image
                                src='/images/icon/ic-passenger.svg'
                                alt='Passenger Capacity'
                                width={24}
                                height={21}
                                className='charter-specifications-slider__icon'
                            />
                            <div className='charter-specifications-slider__detail'>
                                <span className='charter-specifications-slider__label'>
                                    Passenger Capacity:
                                </span>
                                <span className='charter-specifications-slider__value'>
                                    {currentSlide === 0
                                        ? specifications.passengerCapacity
                                        : gallery[currentSlide - 1].specifications
                                              .passengerCapacity}
                                </span>
                            </div>
                        </div>
                        <div className='charter-specifications-slider__item'>
                            <Image
                                src='/images/icon/ic-passenger.svg'
                                alt='Speed'
                                width={24}
                                height={21}
                                className='charter-specifications-slider__icon'
                            />
                            <div className='charter-specifications-slider__detail'>
                                <span className='charter-specifications-slider__label'>
                                    Speed (knots):
                                </span>
                                <span className='charter-specifications-slider__value'>
                                    {currentSlide === 0
                                        ? specifications.speed
                                        : gallery[currentSlide - 1].specifications.speed}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Thumbnails */}
            <div className='charter-specifications-slider__navigation'>
                <div
                    className={`charter-specifications-slider__thumb ${currentSlide === 0 ? "charter-specifications-slider__thumb--active" : ""}`}
                    onClick={() => setCurrentSlide(0)}>
                    <Image
                        src={mainImage}
                        alt='Main image'
                        width={271}
                        height={204}
                        className='charter-specifications-slider__thumb-img'
                    />
                </div>
                {gallery.map((image, index) => (
                    <div
                        key={index}
                        className={`charter-specifications-slider__thumb ${currentSlide === index + 1 ? "charter-specifications-slider__thumb--active" : ""}`}
                        onClick={() => setCurrentSlide(index + 1)}>
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={271}
                            height={204}
                            className='charter-specifications-slider__thumb-img'
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
