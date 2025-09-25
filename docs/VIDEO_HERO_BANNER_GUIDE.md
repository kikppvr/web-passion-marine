# Video Hero Banner Component

## Overview

Video Hero Banner เป็น component สำหรับแสดงวิดีโอเป็น hero section พร้อม text overlay และ interactive controls

## Features

- **Fast Loading**: ใช้ `preload="metadata"` เพื่อโหลดเฉพาะ metadata ก่อน
- **Error Handling**: แสดง error state เมื่อวิดีโอโหลดไม่ได้
- **Loading States**: แสดง loading spinner ขณะโหลดวิดีโอ
- **Responsive Design**: รองรับทุกขนาดหน้าจอ
- **Interactive Controls**: ปุ่ม play/pause ที่สวยงาม
- **Poster Fallback**: แสดงรูป poster เมื่อวิดีโอโหลดไม่ได้

## Performance Optimizations

### 1. Preload Strategy

```tsx
// โหลดเฉพาะ metadata (แนะนำ)
<VideoHeroBanner preload="metadata" />

// ไม่โหลดอะไรเลย (ประหยัด bandwidth)
<VideoHeroBanner preload="none" />

// โหลดทั้งวิดีโอ (ไม่แนะนำสำหรับไฟล์ใหญ่)
<VideoHeroBanner preload="auto" />
```

### 2. Video File Optimization

- ใช้ไฟล์วิดีโอขนาดไม่เกิน 10MB
- รองรับ MP4 format
- ใช้ compression ที่เหมาะสม
- สร้าง poster image สำหรับ fallback

### 3. Loading States

- แสดง loading spinner ขณะโหลด
- แสดง error state เมื่อโหลดไม่ได้
- ใช้ poster image เป็น fallback

## Usage Examples

### Basic Usage

```tsx
import { VideoHeroBanner } from '@/components/ui/VideoHeroBanner';

<VideoHeroBanner
    videoSrc='/videos/hero-video.mp4'
    title='Your Title'
    subtitle='Your Subtitle'
    description='Your description here'
/>;
```

### Advanced Usage

```tsx
<VideoHeroBanner
    videoSrc='/videos/hero-video.mp4'
    posterSrc='/images/poster.jpg'
    title='Passion Marine'
    subtitle='Marine Services'
    description='Professional marine services with safety and quality guaranteed'
    showPlayButton={true}
    autoPlay={false}
    muted={true}
    loop={true}
    overlay={true}
    overlayOpacity={0.4}
    preload='metadata'
    className='video-hero-banner--fullscreen'
/>
```

## Props

| Prop             | Type                           | Default    | Description               |
| ---------------- | ------------------------------ | ---------- | ------------------------- |
| `videoSrc`       | string                         | -          | Path to the video file    |
| `posterSrc`      | string                         | -          | Path to the poster image  |
| `title`          | string                         | -          | Main title text           |
| `subtitle`       | string                         | -          | Subtitle text             |
| `description`    | string                         | -          | Description text          |
| `showPlayButton` | boolean                        | true       | Show play/pause button    |
| `autoPlay`       | boolean                        | true       | Auto play video on load   |
| `muted`          | boolean                        | true       | Mute video by default     |
| `loop`           | boolean                        | true       | Loop video playback       |
| `overlay`        | boolean                        | true       | Show overlay              |
| `overlayOpacity` | number                         | 0.4        | Overlay opacity           |
| `preload`        | 'none' \| 'metadata' \| 'auto' | 'metadata' | How much video to preload |

## CSS Classes

### Base Classes

- `.video-hero-banner` - Main container
- `.video-hero-banner__video-container` - Video wrapper
- `.video-hero-banner__video` - Video element
- `.video-hero-banner__overlay` - Overlay
- `.video-hero-banner__content` - Content wrapper
- `.video-hero-banner__content-inner` - Content inner

### Modifier Classes

- `.video-hero-banner--fullscreen` - Full screen height
- `.video-hero-banner--halfscreen` - Half screen height
- `.video-hero-banner--custom-height` - Custom height
- `.video-hero-banner--text-overlay` - Text overlay variant
- `.video-hero-banner--gradient-overlay` - Gradient overlay variant

## Best Practices

1. **Video Optimization**
    - ใช้ไฟล์วิดีโอขนาดไม่เกิน 10MB
    - รองรับ MP4 format
    - สร้าง poster image สำหรับ fallback

2. **Performance**
    - ใช้ `preload="metadata"` สำหรับไฟล์ใหญ่
    - ใช้ `preload="none"` สำหรับประหยัด bandwidth
    - หลีกเลี่ยง `preload="auto"` สำหรับไฟล์ใหญ่

3. **Accessibility**
    - เพิ่ม `aria-label` สำหรับปุ่ม play/pause
    - ใช้ `posterSrc` สำหรับ fallback
    - รองรับ keyboard navigation

4. **Responsive Design**
    - ทดสอบในทุกขนาดหน้าจอ
    - ปรับ text size ตาม breakpoint
    - ใช้ responsive images

## Troubleshooting

### Video ไม่โหลด

- ตรวจสอบ path ของไฟล์วิดีโอ
- ตรวจสอบ format ของไฟล์ (รองรับ MP4 เท่านั้น)
- ตรวจสอบขนาดไฟล์ (ไม่เกิน 10MB)

### Loading ช้า

- ใช้ `preload="metadata"` แทน `preload="auto"`
- ลดขนาดไฟล์วิดีโอ
- ใช้ poster image สำหรับ fallback

### Error State แสดง

- ตรวจสอบ network connection
- ตรวจสอบไฟล์วิดีโอไม่เสียหาย
- ใช้ poster image เป็น fallback
