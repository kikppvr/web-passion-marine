"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryImage {
    src: string;
    alt: string;
}

interface GalleryProps {
    mainImage: string;
    mainImageAlt: string;
    gallery: GalleryImage[];
    className?: string;
}

export default function GalleryWithThumbnails({
    mainImage,
    mainImageAlt,
    gallery,
    className = "",
}: GalleryProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (index: number) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const nextImage = () => {
        setCurrentImageIndex(prev => (prev + 1) % gallery.length);
    };

    const prevImage = () => {
        setCurrentImageIndex(prev => (prev - 1 + gallery.length) % gallery.length);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Escape") closeModal();
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
    };

    return (
        <>
            <div className={`gallery-thumbnails ${className}`}>
                {/* Main Image */}
                <div className='gallery-thumbnails__main' onClick={() => openModal(0)}>
                    <Image
                        src={mainImage}
                        alt={mainImageAlt}
                        width={1110}
                        height={624}
                        className='gallery-thumbnails__main-image'
                    />
                </div>

                {/* Thumbnails */}
                <div className='gallery-thumbnails__thumbnails'>
                    {gallery.slice(0, 4).map((image, index) => (
                        <div
                            key={index}
                            className='gallery-thumbnails__thumbnail'
                            onClick={() => openModal(index)}>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={254}
                                height={191}
                                className='gallery-thumbnails__thumbnail-image'
                            />
                            {index === 3 && gallery.length > 4 && (
                                <div className='gallery-thumbnails__overlay'>
                                    <span className='gallery-thumbnails__count'>
                                        {gallery.length - 4}+
                                    </span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Gallery Modal */}
            {isModalOpen && (
                <div
                    className='gallery-modal'
                    onClick={closeModal}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}>
                    <div className='gallery-modal__content' onClick={e => e.stopPropagation()}>
                        {/* Close Button */}
                        <button
                            className='gallery-modal__close'
                            onClick={closeModal}
                            aria-label='Close gallery'>
                            <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
                                <path
                                    d='M18 6L6 18M6 6L18 18'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                        </button>

                        {/* Navigation Buttons */}
                        {gallery.length > 1 && (
                            <>
                                <button
                                    className='gallery-modal__nav gallery-modal__nav--prev'
                                    onClick={prevImage}
                                    aria-label='Previous image'>
                                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
                                        <path
                                            d='M15 18L9 12L15 6'
                                            stroke='currentColor'
                                            strokeWidth='2'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        />
                                    </svg>
                                </button>
                                <button
                                    className='gallery-modal__nav gallery-modal__nav--next'
                                    onClick={nextImage}
                                    aria-label='Next image'>
                                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
                                        <path
                                            d='M9 18L15 12L9 6'
                                            stroke='currentColor'
                                            strokeWidth='2'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        />
                                    </svg>
                                </button>
                            </>
                        )}

                        {/* Main Image */}
                        <div className='gallery-modal__image-container'>
                            <Image
                                src={gallery[currentImageIndex].src}
                                alt={gallery[currentImageIndex].alt}
                                width={1200}
                                height={800}
                                className='gallery-modal__image'
                            />
                        </div>

                        {/* Image Counter */}
                        {gallery.length > 1 && (
                            <div className='gallery-modal__counter'>
                                {currentImageIndex + 1} / {gallery.length}
                            </div>
                        )}

                        {/* Thumbnail Strip */}
                        {gallery.length > 1 && (
                            <div className='gallery-modal__thumbnails'>
                                {gallery.map((image, index) => (
                                    <div
                                        key={index}
                                        className={`gallery-modal__thumbnail ${
                                            index === currentImageIndex
                                                ? "gallery-modal__thumbnail--active"
                                                : ""
                                        }`}
                                        onClick={() => setCurrentImageIndex(index)}>
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            width={80}
                                            height={60}
                                            className='gallery-modal__thumbnail-image'
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
