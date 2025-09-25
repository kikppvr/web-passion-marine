# Phosphor Icons Usage Guide

## 📦 Installation

Phosphor Icons has been installed in this project:

```bash
npm install @phosphor-icons/react
```

## 🚀 Basic Usage

### Import Icons

```tsx
import { ArrowRight, CaretRight, CheckCircle, Copy, Eye, Lightning } from '@phosphor-icons/react';
```

### Use in Components

```tsx
function MyComponent() {
    return (
        <div>
            <ArrowRight size={24} />
            <CaretRight size={16} />
            <CheckCircle size={32} color='green' />
        </div>
    );
}
```

## 🎨 Icon Properties

### Size

- `size={16}` - Small
- `size={24}` - Default
- `size={32}` - Large
- `size={48}` - Extra Large

### Weight

- `weight="thin"` - Thin stroke
- `weight="light"` - Light stroke
- `weight="regular"` - Regular stroke (default)
- `weight="bold"` - Bold stroke
- `weight="fill"` - Filled

### Color

- `color="red"` - Red
- `color="blue"` - Blue
- `color="green"` - Green
- `color="purple"` - Purple
- `color="orange"` - Orange
- Or any CSS color value

## 🔧 Examples

### Different Sizes

```tsx
<div className='flex items-center gap-4'>
    <Lightning size={16} />
    <Lightning size={24} />
    <Lightning size={32} />
    <Lightning size={48} />
</div>
```

### Different Weights

```tsx
<div className='flex items-center gap-4'>
    <Palette size={24} weight='thin' />
    <Palette size={24} weight='light' />
    <Palette size={24} weight='regular' />
    <Palette size={24} weight='bold' />
    <Palette size={24} weight='fill' />
</div>
```

### Different Colors

```tsx
<div className='flex items-center gap-4'>
    <TextAa size={24} color='red' />
    <TextAa size={24} color='blue' />
    <TextAa size={24} color='green' />
    <TextAa size={24} color='purple' />
    <TextAa size={24} color='orange' />
</div>
```

## 🎯 Common Icons Used in This Project

- `ArrowLeft` - Back navigation
- `ArrowRight` - Forward navigation
- `CaretRight` - Default button icon
- `CheckCircle` - Success states
- `Copy` - Copy functionality
- `Eye` - Preview/View
- `Lightning` - General UI icons

## 📚 Resources

- [Phosphor Icons Website](https://phosphoricons.com/)
- [Phosphor Icons React Documentation](https://github.com/phosphor-icons/react)
- [Icon Search](https://phosphoricons.com/)

## 💡 Tips

1. **Tree Shaking**: Only import the icons you need to keep bundle size small
2. **Consistent Sizing**: Use consistent sizes throughout your app (16px, 24px, 32px)
3. **Accessibility**: Always provide meaningful alt text or aria-labels when using icons
4. **Performance**: Phosphor Icons are optimized SVG icons that scale perfectly at any size
