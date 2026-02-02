"use client";

import { cn } from "@/lib/utils";
import { useState, useRef, useEffect, useSyncExternalStore } from "react";
import Image from "next/image";
import { TextReveal } from "@/components/ui/animation/TextReveal";

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
    /** Delay loading video (ms) so poster can be LCP. Use with posterSrc. */
    deferVideoLoad?: number;
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
    deferVideoLoad,
    priority = false,
}: VideoHeroBannerProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [shouldLoad, setShouldLoad] = useState(!lazyLoad && !deferVideoLoad);
    const [isVideoReady, setIsVideoReady] = useState(false);
    const [hasMountedState, setHasMountedState] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Server always false, client false until after mount — avoids hydration mismatch
    const hasMounted = useSyncExternalStore(
        () => () => {},
        () => hasMountedState,
        () => false
    );

    useEffect(() => {
        setHasMountedState(true);
    }, []);

    // Defer video load so poster can be LCP (e.g. 2s delay)
    useEffect(() => {
        if (!hasMounted || deferVideoLoad == null || deferVideoLoad <= 0) return;
        const t = setTimeout(() => {
            setShouldLoad(true);
            setIsLoading(true);
        }, deferVideoLoad);
        return () => clearTimeout(t);
    }, [deferVideoLoad, hasMounted]);

    // Intersection Observer for lazy loading
    useEffect(() => {
        if (!hasMounted || !lazyLoad || deferVideoLoad != null) return;

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
    }, [hasMounted, lazyLoad, deferVideoLoad]);

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

    // Before mount: render static placeholder (same on server and client) to avoid hydration mismatch.
    // Do not use posterSrc here so output is identical even if props differ between server/client.
    const videoBlock = !hasMounted ? (
        <div
            className='video-hero-banner__video video-hero-banner__video--placeholder'
            aria-hidden
        />
    ) : (
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
    );

    return (
        <div className={cn("video-hero-banner", className)}>
            {/* Video Container */}
            <div className='video-hero-banner__video-container'>
                {videoBlock}

                {/* Overlay */}
                {/* {overlay && (
                    <div
                        className='video-hero-banner__overlay'
                        style={{ opacity: overlayOpacity }}></div>
                )} */}

                {/* Content */}
                <div className='video-hero-banner__content'>
                    {title && (
                        <TextReveal
                            text={title}
                            className='video-hero-banner__title'
                            delay={300}
                            lineDelay={0}
                            duration={2}
                            as='h1'
                        />
                    )}
                    {subtitle && (
                        <TextReveal
                            text={subtitle}
                            className='video-hero-banner__subtitle'
                            delay={500}
                            lineDelay={0.15}
                            duration={1.5}
                            as='div'
                        />
                    )}
                    {description && (
                        <TextReveal
                            text={description}
                            className='video-hero-banner__description'
                            delay={800}
                            lineDelay={0.15}
                            duration={1.5}
                            as='div'
                        />
                    )}
                </div>

                {/* Scroll Down Button */}
                <div
                    className='video-hero-banner__scroll-down'
                    // data-aos='fade-up'
                    // data-aos-delay='800'
                    // data-aos-duration='1000'
                >
                    <button
                        className='video-hero-banner__scroll-button'
                        onClick={() => {
                            const nextSection = document.querySelector(".our-services");
                            if (nextSection) {
                                nextSection.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                        aria-label='Scroll to next section'>
                        <div className='video-hero-banner__scroll-icons'>
                            <i className='ph-light ph-caret-down video-hero-banner__scroll-icon-1'></i>
                            <i className='ph-light ph-caret-down video-hero-banner__scroll-icon-2'></i>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export { VideoHeroBanner };
