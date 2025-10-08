# MainLayout Component

MainLayout เป็น component สำหรับสร้าง layout หลักของหน้าเว็บที่รองรับ banner แบบ full และ half พร้อม title และ breadcrumb

## การใช้งาน

### 1. Import Components

```tsx
import { MainLayout, Banner } from "@/components/ui/layout";
```

### 2. การใช้งานพื้นฐาน

```tsx
<MainLayout bannerType='full' bannerProps={bannerProps} headerTheme='transparent'>
    {/* Main content goes here */}
</MainLayout>
```

### 3. Banner Props

```tsx
const bannerProps = {
    title: "Page Title",
    subtitle: "Page subtitle or description",
    breadcrumbItems: [
        { label: "Home", href: "/" },
        { label: "Services" }, // Current page (no href)
    ],
    backgroundImage: "/path/to/image.jpg", // สำหรับรูปภาพ
    backgroundVideo: "/path/to/video.mp4", // สำหรับวิดีโอ
    children: <PrimaryButton>Action Button</PrimaryButton>,
};
```

### 4. Banner Types

#### Full Banner (เต็มหน้า)

```tsx
<MainLayout bannerType='full' bannerProps={bannerProps}>
    {/* Content */}
</MainLayout>
```

#### Half Banner (ครึ่งหน้า)

```tsx
<MainLayout bannerType='half' bannerProps={bannerProps}>
    {/* Content */}
</MainLayout>
```

#### Large Banner (70% ของหน้าจอ)

```tsx
<MainLayout bannerType='large' bannerProps={bannerProps}>
    {/* Content */}
</MainLayout>
```

### 5. Props

#### MainLayout Props

| Prop          | Type                          | Default         | Description         |
| ------------- | ----------------------------- | --------------- | ------------------- |
| `children`    | `React.ReactNode`             | -               | เนื้อหาหลักของหน้า  |
| `bannerType`  | `'full' \| 'half' \| 'large'` | `'full'`        | ประเภทของ banner    |
| `bannerProps` | `BannerProps`                 | -               | Props สำหรับ Banner |
| `headerTheme` | `'white' \| 'transparent'`    | `'transparent'` | Theme ของ Header    |
| `className`   | `string`                      | `''`            | CSS class เพิ่มเติม |

#### Banner Props

| Prop              | Type               | Default | Description               |
| ----------------- | ------------------ | ------- | ------------------------- |
| `title`           | `string`           | -       | ชื่อหน้าหรือหัวข้อหลัก    |
| `subtitle`        | `string`           | -       | คำอธิบายหรือหัวข้อย่อย    |
| `breadcrumbItems` | `BreadcrumbItem[]` | -       | รายการ breadcrumb         |
| `backgroundImage` | `string`           | -       | รูปภาพพื้นหลัง            |
| `backgroundVideo` | `string`           | -       | วิดีโอพื้นหลัง            |
| `overlay`         | `boolean`          | `true`  | แสดง overlay หรือไม่      |
| `className`       | `string`           | `''`    | CSS class เพิ่มเติม       |
| `children`        | `React.ReactNode`  | -       | เนื้อหาเพิ่มเติมใน banner |

#### BreadcrumbItem Props

| Prop    | Type     | Description                               |
| ------- | -------- | ----------------------------------------- |
| `label` | `string` | ข้อความของ breadcrumb item                |
| `href`  | `string` | ลิงก์ (ถ้าไม่มีจะแสดงเป็นข้อความปัจจุบัน) |

### 6. CSS Classes

#### MainLayout Classes

- `.main-layout` - Container หลัก
- `.main-layout__banner` - Banner section
- `.main-layout__banner--full` - Full banner
- `.main-layout__banner--half` - Half banner
- `.main-layout__banner--large` - Large banner (70%)
- `.main-layout__content` - Main content area

#### Banner Classes

- `.banner` - Banner container
- `.banner__overlay` - Overlay layer
- `.banner__content` - Banner content wrapper
- `.banner__breadcrumb` - Breadcrumb container
- `.banner__title-section` - Title section
- `.banner__title` - Banner title
- `.banner__subtitle` - Banner subtitle
- `.banner__additional-content` - Additional content area

#### Breadcrumb Classes

- `.breadcrumb` - Breadcrumb container
- `.breadcrumb__list` - Breadcrumb list
- `.breadcrumb__item` - Breadcrumb item
- `.breadcrumb__separator` - Separator (/)
- `.breadcrumb__link` - Breadcrumb link
- `.breadcrumb__current` - Current page text

### 7. Responsive Design

Layout จะปรับขนาดอัตโนมัติตามขนาดหน้าจอ:

- **Full Banner**: Desktop (100vh), Laptop (80vh), Mobile (70vh)
- **Half Banner**: Desktop (50vh), Laptop (45vh), Mobile (40vh)
- **Large Banner**: Desktop (70vh), Laptop (65vh), Mobile (60vh)

### 8. ตัวอย่างการใช้งาน

ดูไฟล์ `src/app/home/page-example.tsx` สำหรับตัวอย่างการใช้งานที่สมบูรณ์
