---
name: create-component
description: Build a React component from a description using Celeritas design system. Use when user describes a UI component they want built, says "create component", or "/create-component".
---

# Create Component

Build a React component from a natural language description, using Celeritas design system components.

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
- `reference/CELERITAS_REFERENCE.md` — Component API reference

### 3. Analyze the request
From the user's description, identify:
- What type of component is needed (card, modal, list item, etc.)
- What data it displays
- What interactions it has (buttons, clicks, etc.)
- What Celeritas components to use

### 4. Generate the component
Create a `.jsx` file with:
- Proper imports from `design_system`
- Props with sensible defaults
- Celeritas components used correctly
- PropTypes defined
- Clean, readable code

### 5. Save and update
- Save to `projects/[project]/components/[ComponentName].jsx`
- Update PROJECT.md "Components Created" table
- Add entry to CHANGELOG.md

## Component Template

```jsx
import PropTypes from 'prop-types';
import {
  // Celeritas imports
} from 'design_system';

export default function ComponentName({
  // props with defaults
}) {
  return (
    // JSX using Celeritas components
  );
}

ComponentName.propTypes = {
  // prop types
};
```

## Guidelines

- **Always use Celeritas** — Check CELERITAS_REFERENCE.md first
- **Sensible defaults** — Props should have reasonable default values
- **Minimal custom CSS** — Rely on Celeritas styling; only add layout CSS if needed
- **Descriptive names** — `StudentStatusCard` not `Card1`
- **PropTypes always** — Document all props
