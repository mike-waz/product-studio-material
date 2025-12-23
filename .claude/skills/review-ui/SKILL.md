---
name: review-ui
description: Review project components against Material Design principles and MUI best practices. Use when user wants to check their UI, says "review", or "/review-ui".
---

# Review UI

Review project components against Material Design principles and MUI best practices.

## When to Use

- User says `/review-ui`
- User says "review my components"
- User wants to check for design consistency issues

## Process

### 1. Identify scope
- If no component specified, review all components in `projects/[project]/components/`
- If component specified, review only that file

### 2. Load references
Read:
- `reference/MATERIAL_UI_REFERENCE.md` — Component API
- `reference/MATERIAL_DESIGN_PRINCIPLES.md` — Design rules
- `projects/[project]/PROJECT.md` — Project context

### 3. Check each component

#### MUI Usage
- Uses MUI components instead of custom HTML where possible
- Imports are from `@mui/material` and `@mui/icons-material`
- Props match MUI API (correct variant names, sizes, etc.)
- No reinventing existing components

#### Design Consistency
- Colors use MUI theme tokens via sx prop (e.g., `bgcolor: 'primary.main'`, not hardcoded hex)
- Spacing uses MUI spacing system (e.g., `p: 2`, `gap: 1`, not arbitrary pixel values)
- Typography uses MUI Typography component with proper variants
- Icons are from `@mui/icons-material`

#### Code Quality
- PropTypes are defined for all props
- Props have sensible default values
- Component is named descriptively (PascalCase)
- No unused imports or code

#### Accessibility
- Interactive elements have proper labels
- Buttons have accessible names
- Form inputs have labels
- IconButtons have aria-label

### 4. Generate report

For each issue found, provide:
1. **Location**: File and line number
2. **Issue**: What's wrong
3. **Recommendation**: How to fix it
4. **Severity**: Error (must fix) / Warning (should fix) / Info (suggestion)

## Output Format

```markdown
# UI Review: [Project Name]

## Summary
- Components reviewed: X
- Errors: X
- Warnings: X
- Suggestions: X

## ComponentName.jsx

### Error: Hardcoded color
**Line 15**: `style={{ color: '#1976d2' }}`
**Fix**: Use sx prop with theme token: `sx={{ color: 'primary.main' }}`

### Warning: Missing PropTypes
**Line 42**: `avatarUrl` prop is used but not defined
**Fix**: Add to PropTypes: `avatarUrl: PropTypes.string`

### Info: Inline style object
**Line 20**: Using `style` prop instead of `sx`
**Fix**: Prefer `sx` prop for consistent styling
```

## Auto-fix Option

After review, offer to auto-fix simple issues:
- Add missing PropTypes
- Replace hardcoded colors with theme tokens
- Convert inline styles to sx prop
- Swap custom implementations for MUI components
