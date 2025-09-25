# Prettier Configuration

This project uses Prettier for code formatting with custom configuration to prevent JSX closing tags from wrapping to new lines.

## Configuration Files

- `.prettierrc` - Main Prettier configuration
- `.prettierignore` - Files to ignore during formatting
- `.vscode/settings.json` - VS Code settings for automatic formatting

## Key Settings

### JSX Formatting

- `bracketSameLine: true` - Keeps JSX closing tags on the same line
- `jsxSingleQuote: true` - Uses single quotes in JSX
- `printWidth: 100` - Maximum line length before wrapping

### General Formatting

- `singleQuote: true` - Uses single quotes for strings
- `semi: true` - Adds semicolons at the end of statements
- `trailingComma: "es5"` - Adds trailing commas where valid in ES5
- `tabWidth: 4` - Uses 4 spaces for indentation

## Usage

### Format All Files

```bash
npm run format
```

### Check Formatting

```bash
npm run format:check
```

### Format Specific File

```bash
npx prettier --write src/components/ui/Header.tsx
```

## VS Code Integration

The project includes VS Code settings for automatic formatting:

- Format on save is enabled
- Prettier is set as the default formatter for JS/TS/JSX files
- ESLint auto-fix runs on save

## Example

**Before formatting:**

```jsx
{
    item.dropdownItems?.map(dropdownItem => (
        <div key={dropdownItem.label} className='header__dropdown-item'>
            <Link href={dropdownItem.href} className='header__dropdown-link'>
                {dropdownItem.label}
            </Link>
        </div>
    ));
}
```

**After formatting (with bracketSameLine: true):**

```jsx
{
    item.dropdownItems?.map(dropdownItem => (
        <div key={dropdownItem.label} className='header__dropdown-item'>
            <Link href={dropdownItem.href} className='header__dropdown-link'>
                {dropdownItem.label}
            </Link>
        </div>
    ));
}
```

The closing `>` tags stay on the same line as the content, preventing unnecessary line breaks.
