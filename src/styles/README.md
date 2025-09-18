# 🎨 Passion Marine Design System

ระบบออกแบบสำหรับ Passion Marine ที่มีโครงสร้างแบบ SCSS partials และ design tokens ที่ครบครัน

## 📁 โครงสร้างไฟล์

```
src/styles/
├── base/                    # ไฟล์พื้นฐาน
│   ├── _colors.scss         # สีและ color tokens
│   ├── _text.scss          # Typography และ font tokens
│   ├── _base.scss          # Base styles และ reset
│   ├── _utility.scss       # Utility classes
│   ├── _input.scss         # Input และ form components
│   ├── _modal-base.scss    # Modal, drawer, popover
│   ├── _display.scss       # Cards, badges, alerts
│   └── _image.scss         # Image components
├── animation/               # Animation และ transitions
│   └── _transitions.scss   # Keyframes และ animation classes
├── main.scss               # ไฟล์หลักที่ import ทุกอย่าง
├── index.ts                # TypeScript exports
└── README.md               # คู่มือการใช้งาน
```

## 🎨 Color Palette

### Blue Colors (จาก Figma)

```scss
:root {
    --blue-50: #e8ecf3;
    --blue-100: #b9c5d9;
    --blue-200: #97a9c6;
    --blue-300: #6782ac;
    --blue-400: #496a9c;
    --blue-500: #1c4583; // Primary color
    --blue-600: #193f77;
    --blue-700: #14315d;
    --blue-800: #0f2648;
    --blue-900: #0c1d37;
}
```

### การใช้งาน

```scss
// ใช้ CSS Custom Properties
.my-element {
  background-color: var(--blue-500);
  color: var(--blue-50);
}

// ใช้ SCSS Functions
.my-element {
  background-color: blue(500);
  color: blue(50);
}

// ใช้ Utility Classes
<div class="bg-blue-500 text-blue-50">Content</div>
```

## 📝 Typography

### Font Scale

```scss
:root {
    --text-xs: 0.75rem; // 12px
    --text-sm: 0.875rem; // 14px
    --text-base: 1rem; // 16px
    --text-lg: 1.125rem; // 18px
    --text-xl: 1.25rem; // 20px
    --text-2xl: 1.5rem; // 24px
    --text-3xl: 1.875rem; // 30px
    --text-4xl: 2.25rem; // 36px
    --text-5xl: 3rem; // 48px
    --text-6xl: 3.75rem; // 60px
}
```

### Typography Classes

```scss
.text-display    // text-6xl font-bold
.text-h1         // text-5xl font-bold
.text-h2         // text-4xl font-semibold
.text-h3         // text-3xl font-medium
.text-h4         // text-2xl font-medium
.text-h5         // text-xl font-medium
.text-h6         // text-lg font-medium
.text-body-large // text-lg font-normal
.text-body       // text-base font-normal
.text-body-small // text-sm font-normal
.text-caption    // text-xs font-normal
.text-label      // text-sm font-medium
.text-button     // text-sm font-medium
.text-link       // text-base font-medium + underline
```

## 📏 Spacing

### Spacing Scale

```scss
:root {
    --space-1: 0.25rem; // 4px
    --space-2: 0.5rem; // 8px
    --space-3: 0.75rem; // 12px
    --space-4: 1rem; // 16px
    --space-5: 1.25rem; // 20px
    --space-6: 1.5rem; // 24px
    --space-8: 2rem; // 32px
    --space-10: 2.5rem; // 40px
    --space-12: 3rem; // 48px
    --space-16: 4rem; // 64px
    --space-20: 5rem; // 80px
    --space-24: 6rem; // 96px
    --space-32: 8rem; // 128px
}
```

### การใช้งาน

```scss
// CSS Custom Properties
.my-element {
  padding: var(--space-4);
  margin: var(--space-6);
}

// SCSS Functions
.my-element {
  padding: spacing(4);
  margin: spacing(6);
}

// Utility Classes
<div class="p-4 m-6">Content</div>
```

## 🎭 Components

### Button

```scss
.btn-primary    // ปุ่มหลัก
.btn-secondary  // ปุ่มรอง
.btn-outline    // ปุ่มขอบ
.btn-ghost      // ปุ่มโปร่งใส
.btn-link       // ปุ่มลิงก์
.btn-sm         // ขนาดเล็ก
.btn-lg         // ขนาดใหญ่
.btn-icon       // ปุ่มไอคอน
```

### Card

```scss
.card                    // การ์ดพื้นฐาน
.card-interactive        // การ์ดที่คลิกได้
.card-header             // หัวการ์ด
.card-body               // เนื้อหาการ์ด
.card-footer             // ท้ายการ์ด
```

### Badge

```scss
.badge-primary    // Badge หลัก
.badge-secondary  // Badge รอง
.badge-success    // Badge สำเร็จ
.badge-warning    // Badge เตือน
.badge-error      // Badge ผิดพลาด
.badge-outline    // Badge ขอบ
```

### Alert

```scss
.alert-info      // แจ้งเตือนข้อมูล
.alert-success   // แจ้งเตือนสำเร็จ
.alert-warning   // แจ้งเตือนเตือน
.alert-error     // แจ้งเตือนผิดพลาด
```

## 🎬 Animation

### Transitions

```scss
.transition-all      // transition: all 250ms ease-in-out
.transition-fast     // transition: all 150ms ease-in-out
.transition-slow     // transition: all 350ms ease-in-out
.transition-colors   // transition: color, background-color, border-color
.transition-opacity  // transition: opacity
.transition-shadow   // transition: box-shadow
.transition-transform // transition: transform
```

### Animations

```scss
.animate-fadeIn        // fadeIn animation
.animate-slideInUp     // slideInUp animation
.animate-slideInDown   // slideInDown animation
.animate-slideInLeft   // slideInLeft animation
.animate-slideInRight  // slideInRight animation
.animate-zoomIn        // zoomIn animation
.animate-bounce        // bounce animation
.animate-pulse         // pulse animation
.animate-spin          // spin animation
```

### Hover Effects

```scss
.hover-scale           // scale(1.05) on hover
.hover-scale-sm        // scale(1.02) on hover
.hover-scale-lg        // scale(1.1) on hover
.hover-rotate          // rotate(5deg) on hover
.hover-translate-up    // translateY(-2px) on hover
.hover-translate-down  // translateY(2px) on hover
```

## 🛠️ TypeScript Usage

```typescript
import { colors, typography, spacing, getColor } from '@/styles'

// ใช้ design tokens
const primaryColor = colors.blue[500]
const fontSize = typography.fontSize.lg
const spacingValue = spacing[4]

// ใช้ helper functions
const blue500 = getColor('blue', 500)
const spacing4 = getSpacing(4)

// ใช้ใน React components
const MyComponent = () => (
    <div
        style={{
            backgroundColor: colors.blue[500],
            fontSize: typography.fontSize.lg,
            padding: spacing[4],
        }}
    >
        Content
    </div>
)
```

## 📱 Responsive Design

```scss
// Mobile First Approach
.my-element {
    // Mobile styles (default)

    @media (min-width: 640px) {
        // Small screens
    }

    @media (min-width: 768px) {
        // Medium screens
    }

    @media (min-width: 1024px) {
        // Large screens
    }

    @media (min-width: 1280px) {
        // Extra large screens
    }
}
```

## 🎯 Best Practices

1. **ใช้ CSS Custom Properties** สำหรับ dynamic values
2. **ใช้ SCSS Functions** สำหรับ static values
3. **ใช้ Utility Classes** สำหรับ rapid prototyping
4. **ใช้ Component Classes** สำหรับ reusable components
5. **ใช้ TypeScript exports** สำหรับ type safety
6. **ใช้ Mobile First** approach สำหรับ responsive design
7. **ใช้ Semantic naming** สำหรับ maintainability

## 🔧 การติดตั้งและใช้งาน

1. Import ใน `globals.css`:

```css
@import '../styles/main.scss';
```

2. Import TypeScript tokens:

```typescript
import { colors, typography } from '@/styles'
```

3. ใช้ใน components:

```tsx
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Content
</div>
```

## 📚 Resources

-   [Design System Page](/design-system) - ตัวอย่างการใช้งาน
-   [Figma Design](https://www.figma.com/design/i3rO4IwjbcM7EHmw8seCLq/Untitled?node-id=0-1247&m=dev) - Source design
-   [Tailwind CSS](https://tailwindcss.com/) - Utility framework
-   [SCSS Documentation](https://sass-lang.com/) - SCSS syntax
