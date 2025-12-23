---
name: review-ui
description: Review project components against design principles and Celeritas best practices. Use when user wants to check their UI, says "review", or "/review-ui".
---

# Review UI

Review project components against design principles and Celeritas best practices.

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
- `reference/CELERITAS_REFERENCE.md` — Component API
- `reference/DESIGN_PRINCIPLES.md` — Design rules (if available)
- `projects/[project]/PROJECT.md` — Project context

### 3. Check each component

#### Celeritas Usage
- Uses Celeritas components instead of custom HTML where possible
- Imports are from `design_system`
- Props match Celeritas API (correct variant names, sizes, etc.)
- No reinventing existing components

#### Design Consistency
- Colors use Celeritas variants or design tokens (no hardcoded hex)
- Spacing follows the system (8px increments if defined)
- Typography uses appropriate sizes and weights
- Icons are from Celeritas icon set

#### Code Quality
- PropTypes are defined for all props
- Props have sensible default values
- Component is named descriptively (PascalCase)
- No unused imports or code

#### Accessibility
- Interactive elements have proper labels
- Buttons have accessible names
- Form inputs have labels

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
**Line 15**: `color: '#007fa5'`
**Fix**: Use Celeritas variant or design token.

### Warning: Missing PropTypes
**Line 42**: `avatarUrl` prop is used but not defined
**Fix**: Add to PropTypes: `avatarUrl: PropTypes.string`
```

## Auto-fix Option

After review, offer to auto-fix simple issues:
- Add missing PropTypes
- Replace hardcoded colors with Celeritas variants
- Swap custom implementations for Celeritas components
