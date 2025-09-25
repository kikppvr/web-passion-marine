# Media Components

This directory contains media-related UI components.

## Components

- **VideoHeroBanner**: Full-screen video banner with overlay content

## Usage

```tsx
import { VideoHeroBanner } from '@/components/ui/media';

// Basic usage
<VideoHeroBanner
    videoSrc="/videos/banner.mp4"
    title="Hero Title"
    subtitle="Hero Subtitle"
    description="Hero description"
/>

// With autoplay
<VideoHeroBanner
    videoSrc="/videos/banner.mp4"
    title="Hero Title"
    autoPlay={true}
    muted={true}
    loop={true}
/>
```

## Features

- Full-screen video display
- Autoplay support
- Loading states
- Error handling
- Poster fallback
- Overlay content
- Play/pause controls
- Responsive design
- Lazy loading
- Priority loading

## Styling

VideoHeroBanner component uses SCSS modules located in:

- `src/styles/components/_video-hero-banner.scss`

## Props

```tsx
interface VideoHeroBannerProps {
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
    preload?: 'none' | 'metadata' | 'auto';
    lazyLoad?: boolean;
    priority?: boolean;
}
```
