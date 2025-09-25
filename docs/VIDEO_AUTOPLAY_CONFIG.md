# Video Hero Banner Autoplay Configuration

## Overview

การตั้งค่า Video Hero Banner ให้เล่นวิดีโอทันทีเมื่อเปิดหน้า (Autoplay)

## Autoplay Configuration

### 1. Basic Autoplay Setup

```tsx
<VideoHeroBanner
    videoSrc='/videos/banner/banner-home.mp4'
    title='Passion Marine'
    subtitle='Marine Services'
    description='Professional marine services with safety and quality guaranteed'
    autoPlay={true}
    muted={true}
    loop={true}
    preload='metadata'
    priority={true}
    lazyLoad={false}
/>
```

### 2. Key Props for Autoplay

- **`autoPlay={true}`**: เปิดใช้งาน autoplay
- **`muted={true}`**: ปิดเสียงเพื่อให้ autoplay ได้
- **`loop={true}`**: วนซ้ำวิดีโอ
- **`preload='metadata'`**: โหลด metadata ก่อน
- **`priority={true}`**: ให้ความสำคัญกับการโหลด
- **`lazyLoad={false}`**: ไม่ใช้ lazy loading

## Browser Autoplay Policies

### 1. Modern Browsers

- **Chrome**: รองรับ autoplay เมื่อ muted
- **Firefox**: รองรับ autoplay เมื่อ muted
- **Safari**: รองรับ autoplay เมื่อ muted
- **Edge**: รองรับ autoplay เมื่อ muted

### 2. Mobile Browsers

- **iOS Safari**: รองรับ autoplay เมื่อ muted
- **Android Chrome**: รองรับ autoplay เมื่อ muted
- **Mobile Firefox**: รองรับ autoplay เมื่อ muted

## Technical Implementation

### 1. Video Element Attributes

```tsx
<video
    ref={videoRef}
    className='video-hero-banner__video'
    poster={posterSrc}
    muted={muted}
    loop={loop}
    playsInline
    autoPlay={autoPlay}
    preload={shouldLoad ? preload : 'none'}
    onLoadedData={handleVideoLoad}
    onLoadedMetadata={handleLoadedMetadata}
    onCanPlay={handleCanPlay}
    onPlay={handlePlay}
    onPause={handlePause}
    onError={handleVideoError}
    onEnded={handleVideoEnd}>
    {shouldLoad && <source src={videoSrc} type='video/mp4' />}
</video>
```

### 2. Autoplay Event Handling

```tsx
const handleLoadedMetadata = () => {
    if (autoPlay && videoRef.current) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    setIsPlaying(true);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.warn('Autoplay failed:', error);
                    setIsLoading(false);
                });
        }
    }
};

const handlePlay = () => {
    setIsPlaying(true);
    setIsLoading(false);
};
```

### 3. useEffect for Autoplay

```tsx
useEffect(() => {
    if (autoPlay && videoRef.current && shouldLoad && isLoaded) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    setIsPlaying(true);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.warn('Autoplay failed:', error);
                    setIsLoading(false);
                });
        }
    }
}, [autoPlay, shouldLoad, isLoaded]);
```

## Performance Considerations

### 1. Preload Strategy

- **`preload='metadata'`**: โหลดเฉพาะ metadata
- **`preload='auto'`**: โหลดทั้งวิดีโอ (ไม่แนะนำ)
- **`preload='none'`**: ไม่โหลดอะไรเลย

### 2. Loading States

- แสดง loading spinner ขณะโหลด
- ซ่อน loading เมื่อวิดีโอเริ่มเล่น
- แสดง error state เมื่อโหลดไม่ได้

### 3. Memory Management

- ใช้ `playsInline` สำหรับ mobile
- ใช้ `muted` เพื่อให้ autoplay ได้
- ใช้ `loop` สำหรับวนซ้ำ

## User Experience

### 1. Loading Experience

- แสดง loading spinner ขณะโหลด
- แสดง poster image เป็น fallback
- Smooth transition เมื่อวิดีโอพร้อมเล่น

### 2. Playback Experience

- วิดีโอเล่นทันทีเมื่อโหลดเสร็จ
- รองรับ play/pause controls
- แสดง loading state ที่เหมาะสม

### 3. Error Handling

- แสดง error message เมื่อโหลดไม่ได้
- Fallback ไป poster image
- Console logging สำหรับ debugging

## Best Practices

### 1. For Hero Videos

```tsx
<VideoHeroBanner
    autoPlay={true}
    muted={true}
    loop={true}
    preload='metadata'
    priority={true}
    lazyLoad={false}
/>
```

### 2. For Content Videos

```tsx
<VideoHeroBanner
    autoPlay={false}
    muted={true}
    loop={false}
    preload='none'
    priority={false}
    lazyLoad={true}
/>
```

### 3. For Mobile

```tsx
<VideoHeroBanner
    autoPlay={true}
    muted={true}
    loop={true}
    preload='metadata'
    priority={true}
    lazyLoad={false}
    playsInline={true}
/>
```

## Troubleshooting

### Autoplay ไม่ทำงาน

- ตรวจสอบ `muted={true}`
- ตรวจสอบ browser autoplay policy
- ตรวจสอบ network connection

### วิดีโอโหลดช้า

- ใช้ `preload='metadata'`
- ลดขนาดไฟล์วิดีโอ
- ใช้ `priority={true}`

### Error States

- ตรวจสอบ path ของไฟล์วิดีโอ
- ตรวจสอบ format (รองรับ MP4 เท่านั้น)
- ตรวจสอบขนาดไฟล์

## Accessibility

### 1. Keyboard Navigation

- รองรับ keyboard controls
- Focus states ที่ชัดเจน
- Screen reader support

### 2. Motion Preferences

- รองรับ `prefers-reduced-motion`
- ปิด autoplay เมื่อผู้ใช้ไม่ต้องการ
- แสดง controls ที่ชัดเจน

### 3. Audio Considerations

- วิดีโอเริ่มต้นด้วย muted
- ให้ผู้ใช้เลือกเปิดเสียง
- รองรับ assistive technologies

## Performance Metrics

### 1. Load Time

- **Target**: < 2 seconds
- **Measurement**: Time to first frame
- **Optimization**: Preload metadata

### 2. Play Time

- **Target**: < 3 seconds
- **Measurement**: Time to start playing
- **Optimization**: Priority loading

### 3. Error Rate

- **Target**: < 1%
- **Measurement**: Failed loads
- **Optimization**: Fallback handling
