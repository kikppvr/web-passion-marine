# Layout Components

This directory contains layout-related UI components.

## Components

- **Header**: Main navigation header with responsive design

## Usage

```tsx
import { Header } from '@/components/ui/layout';

// Basic usage
<Header />

// With theme
<Header theme="white" />
<Header theme="transparent" />
```

## Features

- Responsive design (desktop/mobile)
- Theme variants (white/transparent)
- Language switcher
- Mobile hamburger menu
- Dropdown navigation
- Action buttons
- Scrolled state handling

## Styling

Header component uses SCSS modules located in:

- `src/styles/components/_header.scss`

## Props

```tsx
interface HeaderProps {
    className?: string;
    theme?: "white" | "transparent";
}
```
