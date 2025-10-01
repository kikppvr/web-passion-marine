"use client";

import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export interface VideoHeroBannerProps {
    className?: string;
    videoSrc: string;
    posterSrc?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    showPlayButton?: boolean;
    autoPlay?: boolean;
    muted?: boolean;
    loop?: boolean;
    overlay?: boolean;
    overlayOpacity?: number;
    preload?: "none" | "metadata" | "auto";
    lazyLoad?: boolean;
    priority?: boolean;
}

const VideoHeroBanner = ({
    className,
    videoSrc,
    posterSrc,
    title,
    subtitle,
    description,
    showPlayButton = true,
    autoPlay = true,
    muted = true,
    loop = true,
    overlay = true,
    overlayOpacity = 0.4,
    preload = "metadata",
    lazyLoad = false,
    priority = false,
}: VideoHeroBannerProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [shouldLoad, setShouldLoad] = useState(!lazyLoad);
    const [isVideoReady, setIsVideoReady] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Intersection Observer for lazy loading
    useEffect(() => {
        if (!lazyLoad) return;

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setShouldLoad(true);
                        setIsLoading(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => observer.disconnect();
    }, [lazyLoad]);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleVideoLoad = () => {
        setIsLoaded(true);
        setIsLoading(false);
        setIsVideoReady(true);
    };

    const handleVideoError = () => {
        setHasError(true);
        setIsLoading(false);
        setIsVideoReady(false);
        console.error("Video failed to load:", videoSrc);
    };

    const handleVideoEnd = () => {
        setIsPlaying(false);
    };

    const handleCanPlay = () => {
        setIsLoading(false);
        setIsVideoReady(true);
    };

    const handleLoadedMetadata = () => {
        // Video metadata loaded, can start playing
        if (autoPlay && videoRef.current) {
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        setIsPlaying(true);
                        setIsLoading(false);
                        setIsVideoReady(true);
                    })
                    .catch(error => {
                        console.warn("Autoplay failed:", error);
                        setIsLoading(false);
                        setIsVideoReady(true);
                    });
            }
        }
    };

    const handlePlay = () => {
        setIsPlaying(true);
        setIsLoading(false);
        setIsVideoReady(true);
    };

    const handlePause = () => {
        setIsPlaying(false);
    };

    const handleCanPlayThrough = () => {
        setIsVideoReady(true);
        setIsLoading(false);
    };

    useEffect(() => {
        if (autoPlay && videoRef.current && shouldLoad && isVideoReady) {
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        setIsPlaying(true);
                        setIsLoading(false);
                    })
                    .catch(error => {
                        console.warn("Autoplay failed:", error);
                        setIsLoading(false);
                    });
            }
        }
    }, [autoPlay, shouldLoad, isVideoReady]);

    // Reset states on component mount
    useEffect(() => {
        setIsLoading(true);
        setIsLoaded(false);
        setIsVideoReady(false);
        setHasError(false);
    }, [videoSrc]);

    return (
        <div className={cn("video-hero-banner", className)}>
            {/* Video Container */}
            <div className='video-hero-banner__video-container'>
                <video
                    ref={videoRef}
                    className='video-hero-banner__video'
                    poster={posterSrc}
                    muted={muted}
                    loop={loop}
                    playsInline
                    autoPlay={autoPlay}
                    preload={shouldLoad ? preload : "none"}
                    onLoadedData={handleVideoLoad}
                    onLoadedMetadata={handleLoadedMetadata}
                    onCanPlay={handleCanPlay}
                    onCanPlayThrough={handleCanPlayThrough}
                    onPlay={handlePlay}
                    onPause={handlePause}
                    onError={handleVideoError}
                    onEnded={handleVideoEnd}>
                    {shouldLoad && <source src={videoSrc} type='video/mp4' />}
                    Your browser does not support the video tag.
                </video>

                {/* Overlay */}
                {/* {overlay && (
                    <div
                        className='video-hero-banner__overlay'
                        style={{ opacity: overlayOpacity }}></div>
                )} */}

                {/* Content */}
                <div className='video-hero-banner__content'>
                    {title && (
                        <h1
                            className='video-hero-banner__title'
                            data-aos='fade-up'
                            data-aos-delay='200'
                            data-aos-duration='1000'>
                            {title}
                        </h1>
                    )}
                    {subtitle && (
                        <p
                            className='video-hero-banner__subtitle'
                            data-aos='fade-up'
                            data-aos-delay='400'
                            data-aos-duration='1000'>
                            {subtitle}
                        </p>
                    )}
                    {description && (
                        <p
                            className='video-hero-banner__description'
                            data-aos='fade-up'
                            data-aos-delay='600'
                            data-aos-duration='1000'>
                            {description}
                        </p>
                    )}
                </div>

                {/* Scroll Down Button */}
                <div
                    className='video-hero-banner__scroll-down'
                    data-aos='fade-up'
                    data-aos-delay='800'
                    data-aos-duration='1000'>
                    <button
                        className='video-hero-banner__scroll-button'
                        onClick={() => {
                            const nextSection = document.querySelector(".our-services");
                            if (nextSection) {
                                nextSection.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                        aria-label='Scroll to next section'>
                        <i className='ph ph-caret-down'></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export { VideoHeroBanner };
