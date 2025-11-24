"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lightGallery from "lightgallery";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

interface GalleryImage {
    src: string;
    alt: string;
    title?: string;
}

interface LightGalleryProps {
    mainImage: string;
    mainImageAlt: string;
    gallery: GalleryImage[];
    className?: string;
    galleryId?: string;
}

export default function LightGalleryComponent({
    mainImage,
    mainImageAlt,
    gallery,
    className = "",
    galleryId = "lightgallery",
}: LightGalleryProps) {
    const galleryRef = useRef<HTMLDivElement>(null);
    const lightGalleryInstance = useRef<any>(null);

    // Filter out images that match mainImage to avoid duplicates in thumbnails
    const filteredGallery = gallery.filter(image => image.src !== mainImage);

    // Create full gallery array with mainImage first
    const fullGallery: GalleryImage[] = [{ src: mainImage, alt: mainImageAlt }, ...filteredGallery];

    useEffect(() => {
        if (galleryRef.current) {
            // Destroy existing instance if it exists
            if (lightGalleryInstance.current) {
                lightGalleryInstance.current.destroy();
                lightGalleryInstance.current = null;
            }

            // Initialize LightGallery with smooth settings (with zoom)
            lightGalleryInstance.current = lightGallery(galleryRef.current, {
                plugins: [lgThumbnail, lgZoom],
                speed: 200,
                download: false,
                counter: true,
                getCaptionFromTitleOrAlt: true,
                thumbnail: true,
                selector: "a",
                exThumbImage: "data-thumb",
                mode: "lg-fade",
                easing: "ease-out",
                hideBarsDelay: 0,
                preload: 2,
            });
        }

        return () => {
            if (lightGalleryInstance.current) {
                lightGalleryInstance.current.destroy();
                lightGalleryInstance.current = null;
            }
        };
    }, [mainImage, gallery]);

    // Get thumbnails to display (max 4, excluding mainImage)
    const thumbnailsToShow = filteredGallery.slice(0, 4);
    const remainingCount = filteredGallery.length - 4;

    return (
        <div className={`gallery-thumbnails ${className}`}>
            <div ref={galleryRef} id={galleryId} className='lightgallery-container'>
                {/* Main Image */}
                <div className='gallery-thumbnails__main'>
                    <a
                        href={mainImage}
                        data-lg-size='1920-1080'
                        data-thumb={mainImage}
                        className='gallery-thumbnails__main-link'
                        data-sub-html={`<h4>${mainImageAlt}</h4>`}>
                        <Image
                            src={mainImage}
                            alt={mainImageAlt}
                            width={1110}
                            height={624}
                            className='gallery-thumbnails__main-image'
                            unoptimized
                        />
                    </a>
                </div>

                {/* Thumbnails Display */}
                <div className='gallery-thumbnails__thumbnails'>
                    {thumbnailsToShow.map((image, index) => (
                        <a
                            key={`thumb-${image.src}-${index}`}
                            href={image.src}
                            data-lg-size='1920-1080'
                            data-thumb={image.src}
                            className='gallery-thumbnails__thumbnail'
                            data-sub-html={
                                image.title ? `<h4>${image.title}</h4>` : `<h4>${image.alt}</h4>`
                            }>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={254}
                                height={191}
                                className='gallery-thumbnails__thumbnail-image'
                                unoptimized
                            />
                            {index === 3 && remainingCount > 0 && (
                                <div className='gallery-thumbnails__overlay'>
                                    <span className='gallery-thumbnails__count'>
                                        {remainingCount}+
                                    </span>
                                </div>
                            )}
                        </a>
                    ))}
                </div>

                {/* All remaining images (must be in same container for LightGallery) */}
                {filteredGallery.slice(4).map((image, index) => (
                    <a
                        key={`hidden-${image.src}-${index}`}
                        href={image.src}
                        data-lg-size='1920-1080'
                        data-thumb={image.src}
                        data-sub-html={
                            image.title ? `<h4>${image.title}</h4>` : `<h4>${image.alt}</h4>`
                        }
                        style={{
                            position: "absolute",
                            visibility: "hidden",
                            width: 0,
                            height: 0,
                            opacity: 0,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
