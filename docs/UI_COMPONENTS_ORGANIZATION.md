# UI Components Organization

## Overview

การจัดกลุ่มไฟล์ UI components ให้เป็นระเบียบและง่ายต่อการใช้งาน

## โครงสร้างใหม่

### 🎯 **Button Components** (`/button/`)

```
src/components/ui/button/
├── BookNowButton.tsx      # Call-to-action button
├── PrimaryButton.tsx      # Main action button
├── ReadMoreButton.tsx     # Content expansion button
├── ViewAllButton.tsx      # View all items button
├── index.ts               # Export all button components
└── README.md              # Button components documentation
```

### 🏗️ **Layout Components** (`/layout/`)

```
src/components/ui/layout/
├── Header.tsx             # Main navigation header
├── index.ts               # Export layout components
└── README.md              # Layout components documentation
```

### 🎬 **Media Components** (`/media/`)

```
src/components/ui/media/
├── VideoHeroBanner.tsx    # Full-screen video banner
├── index.ts               # Export media components
└── README.md              # Media components documentation
```

### 🧭 **Navigation Components** (`/navigation/`)

```
src/components/ui/navigation/
├── index.ts               # Export navigation components
└── README.md              # Navigation components documentation
```

## การใช้งาน

### 1. Import จากกลุ่มเฉพาะ

```tsx
// Button components
import {
    BookNowButton,
    PrimaryButton,
    ReadMoreButton,
    ViewAllButton,
} from "@/components/ui/button";

// Layout components
import { Header } from "@/components/ui/layout";

// Media components
import { VideoHeroBanner } from "@/components/ui/media";
```

### 2. Import จาก UI หลัก

```tsx
import {
    BookNowButton,
    PrimaryButton,
    ReadMoreButton,
    ViewAllButton,
    Header,
    VideoHeroBanner,
} from "@/components/ui";
```

## ประโยชน์ของการจัดกลุ่ม

### 1. **Organization**

- จัดระเบียบไฟล์ตามหน้าที่
- หา components ได้ง่ายขึ้น
- ลดความสับสนในการพัฒนา

### 2. **Maintainability**

- แก้ไข components ในกลุ่มเดียวกันได้ง่าย
- เพิ่ม components ใหม่ในกลุ่มที่เหมาะสม
- ลดการ duplicate code

### 3. **Scalability**

- เพิ่ม components ใหม่ได้ง่าย
- รองรับการขยายระบบในอนาคต
- แยก concerns ได้ชัดเจน

### 4. **Developer Experience**

- Import paths ที่สั้นและชัดเจน
- Documentation ที่เป็นระเบียบ
- Code navigation ที่ดีขึ้น

## การอัปเดต Import Paths

### ไฟล์ที่อัปเดตแล้ว

- `src/app/design-system/components/layout/header/page.tsx`
- `src/app/design-system/components/media/video-hero-banner/page.tsx`
- `src/app/design-system/components/buttons/booknow/page.tsx`
- `src/app/design-system/components/buttons/primary/page.tsx`
- `src/app/design-system/components/buttons/readmore/page.tsx`
- `src/app/design-system/components/buttons/viewall/page.tsx`

### ตัวอย่างการเปลี่ยนแปลง

```tsx
// Before
import { Header } from "@/components/ui/Header";
import { VideoHeroBanner } from "@/components/ui/VideoHeroBanner";
import { BookNowButton } from "@/components/ui/button/BookNowButton";

// After
import { Header } from "@/components/ui/layout";
import { VideoHeroBanner } from "@/components/ui/media";
import { BookNowButton } from "@/components/ui/button";
```

## Index Files

### 1. **Group Index Files**

แต่ละกลุ่มมีไฟล์ `index.ts` เพื่อ export components:

```tsx
// src/components/ui/button/index.ts
export { BookNowButton } from "./BookNowButton";
export { PrimaryButton } from "./PrimaryButton";
export { ReadMoreButton } from "./ReadMoreButton";
export { ViewAllButton } from "./ViewAllButton";
```

### 2. **Main Index File**

ไฟล์ `index.ts` หลัก export ทุก components:

```tsx
// src/components/ui/index.ts
export * from "./button";
export * from "./layout";
export * from "./media";
export * from "./navigation";
export { Button } from "./button"; // Legacy support
```

## Documentation

### 1. **Group README Files**

แต่ละกลุ่มมีไฟล์ `README.md` ที่อธิบาย:

- Components ในกลุ่ม
- วิธีการใช้งาน
- Features และ props
- Styling information

### 2. **Main README File**

ไฟล์ `README.md` หลักที่อธิบาย:

- โครงสร้างทั้งหมด
- การใช้งาน
- Development guidelines
- Naming conventions

## Best Practices

### 1. **การเพิ่ม Components ใหม่**

1. สร้างไฟล์ในกลุ่มที่เหมาะสม
2. เพิ่มใน `index.ts` ของกลุ่ม
3. เพิ่มใน `index.ts` หลัก
4. อัปเดต `README.md` ของกลุ่ม
5. สร้าง demo page ใน design system

### 2. **Naming Conventions**

- **Components**: PascalCase (e.g., `VideoHeroBanner`)
- **Files**: PascalCase with `.tsx` extension
- **SCSS Classes**: kebab-case with component prefix
- **Props**: camelCase (e.g., `showPlayButton`)

### 3. **File Structure**

```
ComponentName.tsx
├── Interface definition
├── Component implementation
├── Export statement
└── TypeScript types
```

## Future Enhancements

### 1. **Planned Components**

- **Navigation**: Breadcrumb, Pagination, Sidebar, Tabs
- **Forms**: Input, Select, Checkbox, Radio
- **Cards**: ProductCard, NewsCard, ServiceCard
- **Feedback**: Alert, Toast, Modal, Tooltip

### 2. **Tooling**

- Storybook integration
- Component testing
- Design tokens
- Theme system

### 3. **Performance**

- Lazy loading
- Code splitting
- Bundle optimization
- Tree shaking

## Migration Guide

### สำหรับ Developers

1. อัปเดต import paths ในไฟล์ที่ใช้ components
2. ใช้ group imports แทน individual imports
3. อ่าน documentation ของแต่ละกลุ่ม
4. ใช้ naming conventions ที่กำหนด

### สำหรับ Design System

1. อัปเดต demo pages ให้ใช้ import paths ใหม่
2. อัปเดต documentation
3. ตรวจสอบว่า components ทำงานได้ปกติ
4. อัปเดต examples และ code snippets

## Conclusion

การจัดกลุ่ม UI components ช่วยให้:

- ✅ **Code organization** ดีขึ้น
- ✅ **Developer experience** ดีขึ้น
- ✅ **Maintainability** ดีขึ้น
- ✅ **Scalability** ดีขึ้น
- ✅ **Documentation** เป็นระเบียบ
- ✅ **Import paths** สั้นและชัดเจน
- ✅ **Future development** ง่ายขึ้น
