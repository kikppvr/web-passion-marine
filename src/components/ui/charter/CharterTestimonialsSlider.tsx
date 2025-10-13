"use client";

import { useState } from "react";
import Image from "next/image";

interface Testimonial {
    name: string;
    avatar: string;
    review: string;
}

interface CharterTestimonialsSliderProps {
    testimonials: Testimonial[];
}

export default function CharterTestimonialsSlider({
    testimonials,
}: CharterTestimonialsSliderProps) {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    return (
        <div className='charter-testimonials'>
            <h2 className='charter-testimonials__title'>Testimonials</h2>
            <div className='charter-testimonials__content'>
                <div className='charter-testimonials__list'>
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`charter-testimonials__item ${currentTestimonial === index ? "charter-testimonials__item--active" : ""}`}
                            style={{
                                transform: `translateX(-${currentTestimonial * 100}%)`,
                            }}>
                            <div className='charter-testimonials__avatar'>
                                <Image
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    width={111}
                                    height={111}
                                    className='charter-testimonials__avatar-img'
                                />
                            </div>
                            <div className='charter-testimonials__text'>
                                <h3 className='charter-testimonials__name'>{testimonial.name}</h3>
                                <p className='charter-testimonials__review'>{testimonial.review}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='charter-testimonials__navigation'>
                    <div className='charter-testimonials__dots'>
                        {testimonials.map((_, index) => (
                            <div
                                key={index}
                                className={`charter-testimonials__dot ${currentTestimonial === index ? "charter-testimonials__dot--active" : ""}`}
                                onClick={() => setCurrentTestimonial(index)}></div>
                        ))}
                    </div>
                    <div className='charter-testimonials__arrows'>
                        <button
                            className='charter-testimonials__arrow charter-testimonials__arrow--prev'
                            onClick={() =>
                                setCurrentTestimonial(
                                    currentTestimonial === 0
                                        ? testimonials.length - 1
                                        : currentTestimonial - 1
                                )
                            }>
                            <i className='ph ph-arrow-left'></i>
                        </button>
                        <button
                            className='charter-testimonials__arrow charter-testimonials__arrow--next'
                            onClick={() =>
                                setCurrentTestimonial(
                                    currentTestimonial === testimonials.length - 1
                                        ? 0
                                        : currentTestimonial + 1
                                )
                            }>
                            <i className='ph ph-arrow-right'></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
