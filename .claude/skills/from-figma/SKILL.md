---
name: from-figma
description: Build a React component from a Figma design URL. Use when user provides a Figma link, says "from Figma", or "/from-figma".
---

# Build from Figma

Build a React component from a Figma design URL using the Figma MCP.

## When to Use

- User provides a Figma URL
- User says `/from-figma [URL]`
- User says "build this from Figma"

## Process

### 1. Extract node ID from URL
Parse the Figma URL to get the node ID:
- `https://figma.com/design/fileKey/fileName?node-id=123-456` → nodeId: `123:456`

### 2. Fetch design context
Use `mcp__figma-desktop__get_design_context` with:
- `nodeId`: extracted from URL
- `clientLanguages`: "javascript,typescript"
- `clientFrameworks`: "react"

### 3. Analyze the design
From the Figma output, identify:
- **Structure**: What are the main layers/groups?
- **Components**: What MUI components map to each layer?
- **Colors**: Extract hex values, map to MUI theme tokens if possible
- **Spacing**: Note padding, margins, gaps (convert to MUI spacing units)
- **Typography**: Font sizes, weights, colors

### 4. Map to Material UI
Reference `MATERIAL_UI_REFERENCE.md` to find matching components:

| Figma Element | MUI Component |
|---------------|---------------|
| Circle with initials | `<Avatar>JD</Avatar>` |
| Stacked circles | `<AvatarGroup>` |
| Filled button | `<Button variant="contained">` |
| Outlined button | `<Button variant="outlined">` |
| Notification badge | `<Badge badgeContent={N}>` |
| Pill with text | `<Chip label="...">` |
| Toggle switch | `<Switch>` |
| Input field | `<TextField>` |
| Card container | `<Card>` with `<CardContent>` |
| Modal/dialog | `<Dialog>` |

### 5. Generate component
Create JSX that:
- Uses MUI components wherever possible
- Preserves the visual hierarchy from Figma
- Uses sx prop with theme tokens (e.g., `bgcolor: 'primary.main'`)
- Uses MUI spacing system (e.g., `p: 2` = 16px)
- Includes minimal custom CSS only for layout

### 6. Save and update
- Save to `projects/[project]/components/[ComponentName].jsx`
- Update PROJECT.md
- Add to CHANGELOG.md

## Fallback

If Figma MCP is not available or returns an error:
1. Ask the user to provide a screenshot
2. Ask for key details: colors, spacing, what elements are present
3. Build based on description + screenshot reference
