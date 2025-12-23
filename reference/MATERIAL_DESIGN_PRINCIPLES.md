# Material Design Principles

This document defines the Material Design guidelines for building UI components. Follow these rules to ensure consistency with Google's Material Design system.

---

## Spacing System

Material Design uses a **4px baseline grid** and an **8px spacing scale** for layout.

### Spacing Scale

| Token | Value | Use Case |
|-------|-------|----------|
| `0.5` | 4px | Tight internal spacing |
| `1` | 8px | Small gaps, dense layouts |
| `1.5` | 12px | Medium-small spacing |
| `2` | 16px | Default padding, standard gaps |
| `3` | 24px | Section spacing |
| `4` | 32px | Large section gaps |
| `5` | 40px | Major section spacing |
| `6` | 48px | Page-level spacing |

### Using Spacing in MUI

```jsx
// In sx prop, numbers are multiplied by 8px
<Box sx={{ p: 2 }} />      // padding: 16px
<Box sx={{ m: 1 }} />      // margin: 8px
<Box sx={{ gap: 2 }} />    // gap: 16px
<Stack spacing={2} />      // 16px between items

// Use theme.spacing() in custom styles
theme.spacing(2)           // '16px'
theme.spacing(1, 2)        // '8px 16px'
```

### Guidelines

- Use **16px** (`spacing={2}`) as the default padding for cards and containers
- Use **8px** (`spacing={1}`) for gaps between related elements
- Use **24px** (`spacing={3}`) for section separation
- Avoid arbitrary spacing values — always use the scale

---

## Typography

### Font Stack

Material Design uses **Roboto** as the primary font:

```css
font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
```

### Typography Scale

| Variant | Font Size | Weight | Line Height | Letter Spacing | Use Case |
|---------|-----------|--------|-------------|----------------|----------|
| `h1` | 96px | 300 | 1.167 | -1.5px | Hero text (rarely used) |
| `h2` | 60px | 300 | 1.2 | -0.5px | Large headings |
| `h3` | 48px | 400 | 1.167 | 0 | Section headers |
| `h4` | 34px | 400 | 1.235 | 0.25px | Page titles |
| `h5` | 24px | 400 | 1.334 | 0 | Card titles |
| `h6` | 20px | 500 | 1.6 | 0.15px | Component headers |
| `subtitle1` | 16px | 400 | 1.75 | 0.15px | Emphasized body text |
| `subtitle2` | 14px | 500 | 1.57 | 0.1px | Secondary headings |
| `body1` | 16px | 400 | 1.5 | 0.15px | Body text (default) |
| `body2` | 14px | 400 | 1.43 | 0.15px | Secondary text |
| `button` | 14px | 500 | 1.75 | 0.4px | Button text |
| `caption` | 12px | 400 | 1.66 | 0.4px | Captions, labels |
| `overline` | 12px | 400 | 2.66 | 1px | Overline text |

### Usage

```jsx
import Typography from '@mui/material/Typography';

<Typography variant="h4">Page Title</Typography>
<Typography variant="body1">Body text goes here</Typography>
<Typography variant="caption" color="text.secondary">
  Helper text
</Typography>
```

### Guidelines

- Use **body1** (16px) for primary body text
- Use **body2** (14px) for secondary/supporting text
- Use **caption** (12px) sparingly for labels and hints
- Headings should follow hierarchy (h4 → h5 → h6 for most UIs)
- **Don't skip heading levels** — go h4 → h5, not h4 → h6

---

## Colors

### Primary Palette (Default)

Material Design 3 default primary color is **violet/purple** (#6750A4). MUI's default is **blue** (#1976d2).

| Token | Light Mode | Dark Mode | Use |
|-------|------------|-----------|-----|
| `primary.main` | #1976d2 | #90caf9 | Primary actions, links |
| `primary.light` | #42a5f5 | #e3f2fd | Hover states |
| `primary.dark` | #1565c0 | #42a5f5 | Active states |
| `primary.contrastText` | #fff | #000 | Text on primary |

### Secondary Palette

| Token | Light Mode | Dark Mode |
|-------|------------|-----------|
| `secondary.main` | #9c27b0 | #ce93d8 |
| `secondary.light` | #ba68c8 | #f3e5f5 |
| `secondary.dark` | #7b1fa2 | #ab47bc |

### Semantic Colors

| Purpose | Token | Light Mode | Use |
|---------|-------|------------|-----|
| **Error** | `error.main` | #d32f2f | Error states, destructive actions |
| **Warning** | `warning.main` | #ed6c02 | Warnings, caution states |
| **Info** | `info.main` | #0288d1 | Informational messages |
| **Success** | `success.main` | #2e7d32 | Success states, confirmations |

### Grey Scale

| Token | Value | Use |
|-------|-------|-----|
| `grey.50` | #fafafa | Lightest background |
| `grey.100` | #f5f5f5 | Light background |
| `grey.200` | #eeeeee | Borders, dividers |
| `grey.300` | #e0e0e0 | Disabled backgrounds |
| `grey.400` | #bdbdbd | Disabled text |
| `grey.500` | #9e9e9e | Secondary text |
| `grey.600` | #757575 | Icons |
| `grey.700` | #616161 | Primary text (light theme) |
| `grey.800` | #424242 | Dark text |
| `grey.900` | #212121 | Darkest text |

### Text Colors

| Token | Use |
|-------|-----|
| `text.primary` | Primary text content |
| `text.secondary` | Secondary, supporting text |
| `text.disabled` | Disabled text |

### Background Colors

| Token | Use |
|-------|-----|
| `background.default` | Page background |
| `background.paper` | Card/surface background |

### Color Usage Rules

1. **Text on white background**: Use `text.primary` or `text.secondary`
2. **Links**: Use `primary.main`
3. **Primary buttons**: Use `primary.main` background
4. **Destructive actions**: Use `error.main`
5. **Never hardcode colors** — Always use theme tokens

---

## Elevation (Shadows)

Material Design uses elevation to convey hierarchy. Higher elevation = more prominent.

### Elevation Scale

| Level | Use Case | Component Examples |
|-------|----------|-------------------|
| `0` | Flat surface | Background |
| `1` | Cards, surfaces | Card, Paper |
| `2` | Raised buttons | Button (contained) |
| `3` | Refresh indicator | — |
| `4` | App bar | AppBar |
| `6` | Floating action button | Fab (resting) |
| `8` | Menus, side sheets | Menu, Drawer |
| `12` | Floating action button (pressed) | Fab (pressed) |
| `16` | Navigation drawer | Modal drawer |
| `24` | Dialogs | Dialog |

### Usage in MUI

```jsx
<Paper elevation={1}>Low elevation</Paper>
<Paper elevation={4}>Medium elevation</Paper>
<Paper elevation={8}>High elevation</Paper>
<Card elevation={2}>Standard card</Card>
```

### Guidelines

- Use elevation consistently — same component type = same elevation
- Higher elevation for temporary surfaces (dialogs, menus)
- Lower elevation for persistent surfaces (cards, navigation)
- Elevation increases visual hierarchy

---

## Border Radius

Material Design 3 uses more rounded corners than earlier versions.

| Size | Value | Use |
|------|-------|-----|
| None | 0px | Square edges |
| Extra Small | 4px | Buttons, chips, text fields |
| Small | 8px | Cards, dialogs |
| Medium | 12px | Containers |
| Large | 16px | Large cards, sheets |
| Extra Large | 28px | FABs, very rounded elements |
| Full | 50% | Circular elements (avatars) |

### Usage in MUI

```jsx
<Box sx={{ borderRadius: 1 }} />   // 4px (theme shape default)
<Box sx={{ borderRadius: 2 }} />   // 8px
<Box sx={{ borderRadius: '16px' }} />
<Box sx={{ borderRadius: '50%' }} />  // Circular
```

---

## Component-Specific Guidelines

### Buttons

- **Contained**: High emphasis, primary actions
- **Outlined**: Medium emphasis, secondary actions
- **Text**: Low emphasis, tertiary actions
- Default height: 36px (medium size)
- Border radius: 4px
- Min width: 64px
- Text: ALL CAPS by default (can be overridden)

### Cards

- Default elevation: 1
- Border radius: 4px (can use 8px, 12px for larger cards)
- Padding: 16px
- Use CardHeader, CardContent, CardActions for structure

### Text Fields

- Use `outlined` variant for most cases (clearest boundaries)
- Use `filled` variant for dense forms
- Use `standard` variant sparingly (underline only)
- Always include labels
- Use helperText for hints or errors

### Dialogs

- Elevation: 24
- Border radius: 4px
- Max width: responsive (xs, sm, md, lg, xl)
- Actions aligned to the right
- Title should be clear and action-oriented

### Lists

- Item height: 48px (single line), 64px (two lines), 88px (three lines)
- Use ListItemButton for clickable items
- Include icons on the left, actions on the right

---

## Accessibility

### Color Contrast

Material Design requires minimum contrast ratios:

| Text Type | Minimum Ratio |
|-----------|--------------|
| Normal text | 4.5:1 |
| Large text (18px+ or 14px bold) | 3:1 |
| Icons | 3:1 |

### Interactive Elements

- All interactive elements must be keyboard accessible
- Focus states must be visible (MUI handles this)
- Minimum touch target: 48x48px on mobile
- Use appropriate ARIA attributes

### Labels

- All form inputs require visible labels (or aria-label)
- Icon buttons require aria-label
- Images require alt text
- Use semantic HTML elements (button, not div with onClick)

---

## State Layers

Material Design 3 uses state layers (opacity overlays) for interaction feedback:

| State | Opacity | Description |
|-------|---------|-------------|
| Hover | 8% | Mouse over |
| Focus | 12% | Keyboard focus |
| Pressed | 12% | Active/pressed |
| Dragged | 16% | Being dragged |

MUI handles these automatically for most components.

---

## Responsive Breakpoints

| Breakpoint | Value | Devices |
|------------|-------|---------|
| `xs` | 0px | Extra small (phones) |
| `sm` | 600px | Small (small tablets) |
| `md` | 900px | Medium (tablets) |
| `lg` | 1200px | Large (desktops) |
| `xl` | 1536px | Extra large (large desktops) |

### Usage in MUI

```jsx
<Box
  sx={{
    display: { xs: 'none', md: 'block' },  // Hidden on mobile
    p: { xs: 1, md: 2 },                    // Responsive padding
  }}
/>

<Grid container>
  <Grid item xs={12} md={6}>
    Full width on mobile, half on desktop
  </Grid>
</Grid>
```

---

## Quick Reference

### Most Common Values

| What | Value |
|------|-------|
| Primary color | #1976d2 |
| Text color (primary) | rgba(0,0,0,0.87) |
| Text color (secondary) | rgba(0,0,0,0.6) |
| Border color | rgba(0,0,0,0.12) |
| Background (paper) | #fff |
| Background (default) | #fafafa |
| Default padding | 16px (spacing={2}) |
| Default gap | 8px (spacing={1}) |
| Default radius | 4px |
| Body font size | 16px |
| Secondary font size | 14px |
| Font family | Roboto |

### Common sx Patterns

```jsx
// Centered flex container
sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}

// Card-like styling
sx={{ p: 2, borderRadius: 1, bgcolor: 'background.paper' }}

// Horizontal list with gap
sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}

// Responsive visibility
sx={{ display: { xs: 'none', md: 'flex' } }}

// Full width
sx={{ width: '100%' }}
```
