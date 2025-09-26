# Header Component - Theme Variants

## Overview

Header component รองรับ 2 theme variants: `white` และ `transparent` เพื่อให้เหมาะกับการใช้งานในสถานการณ์ต่างๆ

## Theme Variants

### 1. White Theme (`theme="white"`)

- **Background**: สีขาวทึบ
- **Border**: เส้นขอบด้านล่าง
- **Text Color**: สีเข้มสำหรับอ่านง่าย
- **Use Case**: ใช้กับพื้นหลังสีอ่อน หรือเมื่อต้องการความชัดเจน

### 2. Transparent Theme (`theme="transparent"`)

- **Background**: โปร่งใสพร้อม backdrop blur
- **Border**: ไม่มีเส้นขอบ
- **Text Color**: สีขาวสำหรับความคมชัด
- **Use Case**: ใช้กับพื้นหลังสีเข้ม หรือ hero section

## Usage Examples

### Basic Usage

```tsx
import { Header } from '@/components/ui/Header'

// White theme (default)
<Header />

// Transparent theme
<Header theme="transparent" />
```

### With Custom Class

```tsx
<Header theme='transparent' className='custom-header-class' />
```

## Theme-Specific Styles

### White Theme Styles

```scss
.header--white {
    background-color: var(--bg-white);
    border-bottom: 1px solid var(--border-light);

    .header__nav-link {
        color: var(--text-primary);

        &:hover {
            color: var(--blue-500);
            background-color: var(--blue-50);
        }
    }
}
```

### Transparent Theme Styles

```scss
.header--transparent {
    background-color: transparent;
    border-bottom: none;
    backdrop-filter: blur(10px);

    .header__nav-link {
        color: var(--text-white);

        &:hover {
            color: var(--blue-300);
            background-color: rgba(255, 255, 255, 0.1);
        }
    }
}
```

## Props

| Prop        | Type                     | Default | Description            |
| ----------- | ------------------------ | ------- | ---------------------- |
| `className` | string                   | -       | Additional CSS classes |
| `theme`     | 'white' \| 'transparent' | 'white' | Header theme variant   |

## CSS Classes

### Base Classes

- `.header` - Main header container
- `.header--white` - White theme variant
- `.header--transparent` - Transparent theme variant
- `.header--scrolled` - Scrolled state (applied automatically)

### Theme-Specific Classes

- `.header--white .header__nav-link` - Navigation links in white theme
- `.header--transparent .header__nav-link` - Navigation links in transparent theme
- `.header--transparent .header__language` - Language switcher in transparent theme
- `.header--transparent .header__action-btn` - Action buttons in transparent theme

## Best Practices

### 1. Theme Selection

- **White Theme**: ใช้กับพื้นหลังสีอ่อน, หน้า content ทั่วไป
- **Transparent Theme**: ใช้กับ hero section, พื้นหลังสีเข้ม, overlay content

### 2. Content Considerations

- **White Theme**: เนื้อหาด้านล่างควรมีสีอ่อนเพื่อไม่ให้ขัดกับ header
- **Transparent Theme**: เนื้อหาด้านล่างควรมีสีเข้มเพื่อให้ text ใน header อ่านได้ชัด

### 3. Accessibility

- **Contrast**: ตรวจสอบ contrast ratio ของ text กับพื้นหลัง
- **Focus States**: รองรับ keyboard navigation ในทั้งสอง theme
- **Screen Readers**: ใช้ semantic HTML และ proper ARIA labels

## Responsive Behavior

### Desktop

- **White Theme**: Background สีขาว, border ด้านล่าง
- **Transparent Theme**: Background โปร่งใส, backdrop blur

### Mobile

- **White Theme**: Mobile menu สีขาวทึบ
- **Transparent Theme**: Mobile menu โปร่งใสพร้อม backdrop blur

## Implementation Examples

### Hero Section with Transparent Header

```tsx
<div className='hero-section'>
    <Header theme='transparent' />
    <div className='hero-content'>{/* Hero content with dark background */}</div>
</div>
```

### Regular Page with White Header

```tsx
<div className='page-layout'>
    <Header theme='white' />
    <main className='page-content'>{/* Regular page content */}</main>
</div>
```

### Dynamic Theme Switching

```tsx
const [headerTheme, setHeaderTheme] = useState<"white" | "transparent">("white");

useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setHeaderTheme("white");
        } else {
            setHeaderTheme("transparent");
        }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);

return <Header theme={headerTheme} />;
```

## Troubleshooting

### Text ไม่ชัดเจน

- **White Theme**: ตรวจสอบพื้นหลังด้านล่างไม่ใช่สีขาว
- **Transparent Theme**: ตรวจสอบพื้นหลังด้านล่างมีสีเข้มเพียงพอ

### Mobile Menu ไม่แสดงถูกต้อง

- ตรวจสอบ z-index ของ mobile menu
- ตรวจสอบ backdrop-filter support ใน browser

### Performance Issues

- หลีกเลี่ยงการเปลี่ยน theme บ่อยๆ
- ใช้ CSS transitions แทน JavaScript animations
