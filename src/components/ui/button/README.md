# Button Components

This directory contains all button-related UI components.

## Components

- **BookNowButton**: Call-to-action button for booking services
- **PrimaryButton**: Main action button with solid background
- **ReadMoreButton**: Button for expanding content
- **ViewAllButton**: Button for viewing all items

## Usage

```tsx
import { BookNowButton, PrimaryButton, ReadMoreButton, ViewAllButton } from '@/components/ui/button';

// Use individual components
<BookNowButton>Book Now</BookNowButton>
<PrimaryButton>Submit</PrimaryButton>
<ReadMoreButton>Read More</ReadMoreButton>
<ViewAllButton>View All</ViewAllButton>
```

## Features

- Consistent styling across all button types
- Responsive design
- Accessibility support
- Theme variants (light/dark)
- Icon support
- Loading states
- Disabled states

## Styling

All button components use SCSS modules located in:

- `src/styles/components/_btn-booknow.scss`
- `src/styles/components/_btn-primary.scss`
- `src/styles/components/_btn-readmore.scss`
- `src/styles/components/_btn-viewall.scss`
