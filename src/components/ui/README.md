# UI Components

This directory contains all reusable UI components organized by category.

## Structure

```
src/components/ui/
├── button/           # Button components
│   ├── BookNowButton.tsx
│   ├── PrimaryButton.tsx
│   ├── ReadMoreButton.tsx
│   ├── ViewAllButton.tsx
│   ├── index.ts
│   └── README.md
├── layout/           # Layout components
│   ├── Header.tsx
│   ├── index.ts
│   └── README.md
├── media/            # Media components
│   ├── VideoHeroBanner.tsx
│   ├── index.ts
│   └── README.md
├── navigation/       # Navigation components
│   ├── index.ts
│   └── README.md
├── button.tsx        # Legacy button component
└── index.ts          # Main export file
```

## Usage

### Import Individual Components

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

### Import All Components

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

## Component Categories

### 🎯 Button Components

- **BookNowButton**: Call-to-action button for booking services
- **PrimaryButton**: Main action button with solid background
- **ReadMoreButton**: Button for expanding content
- **ViewAllButton**: Button for viewing all items

### 🏗️ Layout Components

- **Header**: Main navigation header with responsive design

### 🎬 Media Components

- **VideoHeroBanner**: Full-screen video banner with overlay content

### 🧭 Navigation Components

- **Planned**: Breadcrumb, Pagination, Sidebar, Tabs

## Features

- **Consistent Design**: All components follow the same design system
- **Responsive**: Mobile-first responsive design
- **Accessible**: WCAG 2.1 AA compliance
- **Themeable**: Support for light/dark themes
- **TypeScript**: Full TypeScript support
- **SCSS Modules**: Scoped styling with SCSS modules

## Styling

All components use SCSS modules located in `src/styles/components/`:

- `_btn-*.scss` - Button component styles
- `_header.scss` - Header component styles
- `_video-hero-banner.scss` - Video banner styles

## Development Guidelines

### Adding New Components

1. Create component in appropriate category directory
2. Add component to category's `index.ts`
3. Add component to main `index.ts`
4. Create SCSS module in `src/styles/components/`
5. Import SCSS in `src/styles/main.scss`
6. Update category's `README.md`
7. Create demo page in design system

### Component Structure

```tsx
// Component file structure
export interface ComponentProps {
    className?: string;
    // ... other props
}

const Component = ({ className, ...props }: ComponentProps) => {
    return <div className={cn("component", className)}>{/* Component content */}</div>;
};

export { Component };
```

### Naming Conventions

- **Components**: PascalCase (e.g., `VideoHeroBanner`)
- **Files**: PascalCase with `.tsx` extension
- **SCSS Classes**: kebab-case with component prefix (e.g., `video-hero-banner`)
- **Props**: camelCase (e.g., `showPlayButton`)

## Testing

Components are tested through:

- Design system demo pages
- Storybook stories (planned)
- Unit tests (planned)
- Integration tests (planned)

## Documentation

Each component category has its own README with:

- Component descriptions
- Usage examples
- Props documentation
- Styling information
- Features list
