# Header + Video Hero Banner Integration

## Overview

การใช้งาน Header component ร่วมกับ Video Hero Banner เพื่อสร้างหน้าเว็บที่มี header แบบ transparent และ video hero section

## Layout Structure

### 1. Header Component

- **Position**: Fixed at top
- **Theme**: Transparent (สำหรับใช้กับ video background)
- **Z-index**: 1000 (อยู่เหนือ video)

### 2. Video Hero Banner

- **Position**: Full screen
- **Video**: Auto-play หรือ manual play
- **Overlay**: Dark overlay สำหรับอ่าน text ได้ชัดเจน

## Implementation

### Basic Setup

```tsx
import { Header } from '@/components/ui/Header';
import { VideoHeroBanner } from '@/components/ui/VideoHeroBanner';

export default function HomePage() {
    return (
        <div className='min-h-screen'>
            {/* Header with transparent theme */}
            <Header theme='transparent' />

            {/* Video Hero Banner */}
            <VideoHeroBanner
                videoSrc='/videos/banner/banner-home.mp4'
                posterSrc='/images/sample-poster.jpg'
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

            {/* Rest of page content */}
            <div className='bg-white'>{/* Page content */}</div>
        </div>
    );
}
```

### Advanced Setup with Theme Switching

```tsx
import { Header } from '@/components/ui/Header';
import { VideoHeroBanner } from '@/components/ui/VideoHeroBanner';
import { useState, useEffect } from 'react';

export default function HomePage() {
    const [headerTheme, setHeaderTheme] = useState<'white' | 'transparent'>('transparent');

    useEffect(() => {
        const handleScroll = () => {
            // Switch to white theme when scrolled past video
            if (window.scrollY > window.innerHeight * 0.8) {
                setHeaderTheme('white');
            } else {
                setHeaderTheme('transparent');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='min-h-screen'>
            <Header theme={headerTheme} />

            <VideoHeroBanner
                videoSrc='/videos/banner/banner-home.mp4'
                title='Passion Marine'
                subtitle='Marine Services'
                description='Professional marine services with safety and quality guaranteed'
                autoPlay={true}
                muted={true}
                loop={true}
                overlay={true}
                overlayOpacity={0.5}
                preload='metadata'
                className='video-hero-banner--fullscreen'
            />

            <div className='min-h-screen bg-white'>{/* Page content */}</div>
        </div>
    );
}
```

## Theme Considerations

### Transparent Header

- **Use Case**: ใช้กับ video hero section
- **Text Color**: สีขาวสำหรับความคมชัด
- **Background**: โปร่งใสพร้อม backdrop blur
- **Border**: ไม่มีเส้นขอบ

### White Header

- **Use Case**: ใช้กับเนื้อหาปกติ
- **Text Color**: สีเข้มสำหรับอ่านง่าย
- **Background**: สีขาวทึบ
- **Border**: เส้นขอบด้านล่าง

## Video Optimization

### 1. File Size

- **Recommended**: ไม่เกิน 10MB
- **Format**: MP4
- **Resolution**: 1920x1080 หรือต่ำกว่า

### 2. Preload Strategy

```tsx
// สำหรับไฟล์ใหญ่ (>5MB)
<VideoHeroBanner preload="metadata" />

// สำหรับไฟล์เล็ก (<2MB)
<VideoHeroBanner preload="auto" />

// สำหรับประหยัด bandwidth
<VideoHeroBanner preload="none" />
```

### 3. Poster Image

- **Format**: JPG หรือ PNG
- **Size**: 1920x1080
- **Quality**: High quality สำหรับ fallback

## Responsive Behavior

### Desktop

- **Header**: Full navigation menu
- **Video**: Full screen
- **Text**: Large text sizes

### Mobile

- **Header**: Hamburger menu
- **Video**: Responsive height
- **Text**: Smaller text sizes

## Performance Tips

### 1. Video Loading

- ใช้ `preload="metadata"` สำหรับไฟล์ใหญ่
- สร้าง poster image สำหรับ fallback
- ใช้ `muted={true}` เพื่อให้ auto-play ได้

### 2. Header Performance

- หลีกเลี่ยงการเปลี่ยน theme บ่อยๆ
- ใช้ CSS transitions แทน JavaScript animations
- ใช้ `backdrop-filter` สำหรับ transparent effect

### 3. Overall Performance

- Lazy load video เมื่อไม่จำเป็น
- ใช้ responsive images
- Optimize video compression

## Accessibility

### 1. Video Accessibility

- เพิ่ม `aria-label` สำหรับ video
- รองรับ keyboard navigation
- แสดง loading states

### 2. Header Accessibility

- รองรับ screen readers
- Keyboard navigation
- Focus states ที่ชัดเจน

### 3. Content Accessibility

- Contrast ratio ที่เหมาะสม
- Text ที่อ่านได้ชัดเจน
- Alternative text สำหรับ images

## Troubleshooting

### Video ไม่แสดง

- ตรวจสอบ path ของไฟล์วิดีโอ
- ตรวจสอบ format (รองรับ MP4 เท่านั้น)
- ตรวจสอบขนาดไฟล์

### Header ไม่แสดงถูกต้อง

- ตรวจสอบ z-index
- ตรวจสอบ theme prop
- ตรวจสอบ CSS classes

### Performance Issues

- ลดขนาดไฟล์วิดีโอ
- ใช้ `preload="metadata"`
- ตรวจสอบ network connection

## Best Practices

### 1. Design

- ใช้ transparent header กับ video background
- ใช้ white header กับเนื้อหาปกติ
- ตรวจสอบ contrast ratio

### 2. Performance

- Optimize video files
- ใช้ appropriate preload strategy
- Monitor loading times

### 3. User Experience

- แสดง loading states
- รองรับ error handling
- Smooth transitions

### 4. SEO

- เพิ่ม meta descriptions
- ใช้ semantic HTML
- Optimize images และ videos
