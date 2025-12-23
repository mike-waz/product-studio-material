# Lightspeed Design Principles

This document defines the design rules for Lightspeed products. When building UI components, always follow these guidelines to ensure consistency.

---

## Spacing System

Lightspeed uses a **4px grid**. All spacing values should be multiples of 4.

### Spacing Scale

| Token | Value | Use Case |
|-------|-------|----------|
| `--padding-xxs` | 2px | Tight internal spacing (badges, chips) |
| `--padding-xs` | 4px | Minimal spacing |
| `--padding-sm` | 8px | Small gaps, tight layouts |
| `--padding-smd` | 12px | Medium-small spacing |
| `--padding-md` | 16px | Default padding, standard gaps |
| `--padding-lg` | 24px | Section spacing |
| `--padding-xl` | 32px | Large section gaps |
| `--padding-xxl` | 48px | Page-level spacing |

### Gap Scale (for flexbox/grid)

| Token | Value |
|-------|-------|
| `--gap-xxs` | 2px |
| `--gap-xs` | 4px |
| `--gap-sm` | 8px |
| `--gap-md` | 16px |
| `--gap-lg` | 24px |
| `--gap-xl` | 32px |
| `--gap-xxl` | 48px |

### Guidelines
- Use **16px** (`--padding-md`) as the default padding for cards and containers
- Use **8px** (`--gap-sm`) for gaps between related elements
- Use **24px** (`--padding-lg`) for section separation
- Avoid arbitrary spacing values — always use the scale

---

## Typography

### Font Stack

```css
font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
```

### Font Sizes

| Token | Size | Line Height | Use Case |
|-------|------|-------------|----------|
| `--font-size--h1` | 42px | 1.24 (52px) | Page titles |
| `--font-size--h2` | 32px | 1.18 (40px) | Section headers |
| `--font-size--h3` | 26px | 1.39 (36px) | Subsection headers |
| `--font-size--h4` | 20px | 1.4 (28px) | Card titles |
| `--font-size--h5` | 16px | 1.5 (24px) | Component headers |
| `--font-size--default` | 16px | 1.5 (24px) | Body text |
| `--font-size--small` | 14px | 1.43 (20px) | Secondary text, labels |
| `--font-size--tiny` | 12px | 1.33 (16px) | Captions, badges |

### Font Weights
- **400 (Regular)**: Body text, descriptions
- **500 (Medium)**: Emphasis, button text, labels
- **700 (Bold)**: Headings, important text

### Guidelines
- Use **16px** for body text
- Use **14px** for secondary/supporting text
- Use **12px** sparingly (badges, tiny labels only)
- Always pair font size with appropriate line height

---

## Colors

### Primary Colors (Teal)

| Token | Hex | Use |
|-------|-----|-----|
| `--c-teal50` | #f2f9fb | Lightest background |
| `--c-teal100` | #e6f2f6 | Light background |
| `--c-teal200` | #a6d2e0 | Borders, accents |
| `--c-teal600` | #4d9cc0 | Secondary teal |
| `--c-teal700` | #007fa5 | **Primary brand color** |
| `--c-teal800` | #006b8b | Hover state |
| `--c-teal900` | #005169 | Active/pressed state |

**Primary color**: `#007fa5` (teal700) — Use for primary buttons, links, active states

### Semantic Colors

| Purpose | Token | Hex | Background |
|---------|-------|-----|------------|
| **Success** | `--c-success` | #15655c | `--c-success-bg`: #f5fbef |
| **Warning** | `--c-warning` | #b14300 | `--c-warning-bg`: #fff5ea |
| **Danger/Error** | `--c-danger` | #d32f2f | `--c-danger-bg`: #fff1f3 |
| **Spotlight/AI** | `--c-spotlight` | #5c3584 | `--c-spotlight-bg`: #faf7fc |

### Neutral Colors (Grey)

| Token | Hex | Use |
|-------|-----|-----|
| `--c-grey50` | #fafafa | Page background |
| `--c-grey100` | #f8f8f9 | Card backgrounds |
| `--c-grey200` | #e9ebed | Borders, dividers |
| `--c-grey300` | #d8dcde | Disabled backgrounds |
| `--c-grey400` | #c2c8cc | Disabled text |
| `--c-grey500` | #87929d | Secondary text |
| `--c-grey600` | #68737d | Body text (secondary) |
| `--c-grey700` | #49545c | Body text |
| `--c-grey800` | #2f3941 | **Primary text color** |

### Extended Palette

| Color | 600 (UI) | 700 (Text) | 800 (Dark) |
|-------|----------|------------|------------|
| **Green** | #96c560 | #62a600 | #4c7800 |
| **Gold** | #fd9a30 | #ed6c02 | #b5430f |
| **Cranberry** | #f5605d | #d32f2f | #a11819 |
| **Purple** | #b69ad2 | #9266ba | #5c3584 |
| **Blue** | #3ab2ef | #0288d1 | #0461a6 |
| **Aqua** | #00c9bc | #00a5a2 | #007b79 |

### Color Usage Rules

1. **Text on white background**: Use `--c-grey800` (#2f3941)
2. **Secondary text**: Use `--c-grey600` (#68737d) or `--c-grey500` (#87929d)
3. **Links**: Use `--c-teal700` (#007fa5)
4. **Primary buttons**: Use `--c-teal700` background with white text
5. **Danger buttons**: Use `--c-danger` (#d32f2f)
6. **Never hardcode colors** — Always use CSS variables or Celeritas variants

---

## Border Radius

| Token | Value | Use |
|-------|-------|-----|
| `--border-radius--small` | 4px | Buttons, chips, inputs |
| `--border-radius--default` | 8px | Cards, modals, containers |
| `--border-radius--large` | 16px | Large cards, panels |

---

## Elevation (Shadows)

| Token | Value | Use |
|-------|-------|-----|
| `--elevation-1dp` | 0px 1px 2px rgba(0,0,0,0.1) | Cards, subtle elevation |
| `--elevation-4dp` | 0px 4px 8px rgba(0,0,0,0.1) | Dropdowns, raised elements |
| `--elevation-8dp` | 0px 8px 8px rgba(0,0,0,0.16) | Modals, high elevation |
| `--box-shadow--modal` | 0 12px 24px rgba(0,0,0,0.1) | Modal dialogs |

---

## Breakpoints

| Token | Value | Device |
|-------|-------|--------|
| `--bp-small` | 576px | Mobile landscape |
| `--bp-medium` | 768px | Tablet |
| `--bp-large` | 992px | Desktop |
| `--bp-xlarge` | 1280px | Large desktop |

---

## Component-Specific Guidelines

### Buttons
- Default size: 40px height (`--input-height`)
- Border radius: 4px (`--border-radius--small`)
- Primary: Teal700 background, white text
- Secondary: White background, teal700 border and text
- Disabled: Grey300 background, grey400 text

### Cards
- Border radius: 8px (`--border-radius--default`)
- Shadow: `--elevation-1dp` for flat, `--elevation-4dp` for raised
- Padding: 16px (`--padding-md`)
- Border: 1px solid `--c-grey200`

### Inputs
- Height: 40px (`--input-height`)
- Border radius: 4px
- Border: 1px solid `--c-grey300`
- Focus: 2px teal700 ring

### Avatars
- Border: 2px solid white (when stacked)
- Background: `--c-teal700` for initials

---

## Accessibility

### Color Contrast
- Body text (#2f3941) on white: ✓ WCAG AA
- Secondary text (#68737d) on white: ✓ WCAG AA
- Teal700 (#007fa5) on white: ✓ WCAG AA

### Interactive Elements
- All buttons must be keyboard accessible
- Focus states must be visible
- Minimum touch target: 44x44px on mobile

### Labels
- All form inputs require labels
- Icon-only buttons require aria-label
- Images require alt text

---

## Quick Reference

### Most Common Values

| What | Value |
|------|-------|
| Primary color | #007fa5 |
| Text color | #2f3941 |
| Secondary text | #68737d |
| Border color | #d8dcde |
| Background | #fafafa |
| Default padding | 16px |
| Default gap | 8px |
| Default radius | 8px |
| Body font size | 16px |
| Small font size | 14px |
| Font family | Roboto |
