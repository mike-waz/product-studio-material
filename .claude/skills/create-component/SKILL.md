---
name: create-component
description: Build a React component from a description using Material UI (MUI). Use when user describes a UI component they want built, says "create component", or "/create-component".
---

# Create Component

Build a React component from a natural language description, using Material UI components and Material Design principles.

## When to Use

- User describes a component: "Create a card that shows student name and status"
- User says `/create-component [description]`
- User wants to add a new component to their project

## Process

### 1. Identify the active project
Check `projects/` for the current project. If multiple projects exist and none is specified, ask the user which project to use.

### 2. Load context
Read these files:
- `projects/[project]/PROJECT.md` — Project context
- `projects/[project]/components/` — Existing components (for consistency)
- `reference/MATERIAL_UI_REFERENCE.md` — Component API reference

### 3. Analyze the request
From the user's description, identify:
- What type of component is needed (card, modal, list item, etc.)
- What data it displays
- What interactions it has (buttons, clicks, etc.)
- What MUI components to use

### 4. Generate the component
Create a `.jsx` file with:
- Proper imports from `@mui/material` and `@mui/icons-material`
- Props with sensible defaults
- MUI components used correctly with sx prop for styling
- PropTypes defined
- Clean, readable code

### 5. Save and update
- Save to `projects/[project]/components/[ComponentName].jsx`
- Update PROJECT.md "Components Created" table
- Add entry to CHANGELOG.md

## Component Template

```jsx
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// ... other MUI imports

export default function ComponentName({
  // props with defaults
}) {
  return (
    <Card sx={{ /* styling */ }}>
      <CardContent>
        {/* Component content using MUI components */}
      </CardContent>
    </Card>
  );
}

ComponentName.propTypes = {
  // prop types
};
```

## Guidelines

- **Always use MUI** — Check MATERIAL_UI_REFERENCE.md first
- **Use sx prop for styling** — Never use inline style objects or Tailwind
- **Use theme tokens** — `bgcolor: 'primary.main'`, `color: 'text.secondary'`, etc.
- **Sensible defaults** — Props should have reasonable default values
- **Minimal custom CSS** — Rely on MUI styling and sx prop
- **Descriptive names** — `StudentStatusCard` not `Card1`
- **PropTypes always** — Document all props
