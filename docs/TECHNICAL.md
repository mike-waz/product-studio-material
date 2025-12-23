# Project Studio (Material Design Edition) — Technical Documentation

Technical reference for engineers and maintainers of Project Studio.

---

## Overview

Project Studio is a Claude Code workspace configured to build UI prototypes using Material Design and Material UI (MUI). It uses **domain memory patterns** to maintain context across Claude sessions, solving the "amnesiac agent" problem where LLMs forget state between conversations.

### Core Concept

```
User describes UI → Claude builds prototype → Engineers reference prototype
                         ↓
              Uses real Material UI components
                         ↓
              No "design vs reality" gap
```

---

## Architecture

### Directory Structure

```
product-studio-material/
├── CLAUDE.md                 # Claude's behavior configuration
├── STUDIO_STATUS.md          # Development state (meta-level domain memory)
│
├── .claude/
│   ├── settings.local.json   # Claude Code settings (permissions, etc.)
│   └── skills/               # Natural language-triggered workflows
│       ├── new-project/
│       │   └── SKILL.md
│       ├── create-component/
│       │   └── SKILL.md
│       ├── from-figma/
│       │   └── SKILL.md
│       └── review-ui/
│           └── SKILL.md
│
├── reference/                # Read-only design system documentation
│   ├── MATERIAL_UI_REFERENCE.md
│   ├── MATERIAL_DESIGN_PRINCIPLES.md
│   └── PROJECT_TEMPLATE.md
│
├── projects/                 # User-created prototype projects
│   └── [project-name]/
│       ├── PROJECT.md        # Project domain memory
│       ├── components/       # React prototype files (.jsx)
│       └── CHANGELOG.md      # Build history
│
├── docs/                     # Documentation
│   ├── USER_GUIDE.md         # For end users (PMs, designers)
│   └── TECHNICAL.md          # This file
│
└── src/                      # Vite app for viewing prototypes
    ├── main.jsx
    └── App.jsx
```

---

## Domain Memory Pattern

### The Problem

LLMs are stateless. Each Claude session starts fresh with no memory of previous work. This causes:

- Re-deriving what's "done" vs "in progress"
- Repeating failed approaches
- Losing architectural decisions
- Inconsistent behavior across sessions

### The Solution

Persistent markdown files that Claude reads at session start and updates during work:

| File | Scope | Purpose |
|------|-------|---------|
| `STUDIO_STATUS.md` | Project Studio itself | Track Studio development state |
| `projects/[name]/PROJECT.md` | Individual projects | Track prototype development state |

### What Domain Memory Contains

```markdown
## Screens Backlog (example)
| Screen | Status | Notes |
|--------|--------|-------|
| Student List | ✅ Done | Table with filters |
| Student Detail | 🔄 In Progress | Dialog working, needs form |
| Settings | ⏳ Pending | |

## Progress Log
### 2024-12-23
- Built StudentList, verified rendering
- Started StudentDetail dialog
- Using MUI Dialog with DialogTitle, DialogContent, DialogActions
```

### Session Lifecycle

**Start of session:**
1. Claude reads CLAUDE.md (automatic)
2. If working on Studio: reads STUDIO_STATUS.md
3. If working on a project: reads PROJECT.md
4. Scans backlog for current task
5. Begins work

**End of session (when user says "wrap up" or "update status"):**
1. Update backlog status
2. Append to progress log
3. Update docs if user-facing features changed

---

## Key Files Explained

### CLAUDE.md

Instructions that configure Claude's behavior. Contains:

- **Role definition**: "UI prototyping assistant"
- **Critical requirements**: React 18, no Tailwind, use MUI
- **Workflow steps**: Iterative building process
- **Guardrails**: Use MUI components, no hardcoded colors, etc.
- **Skills reference**: How to invoke each skill

Claude reads this automatically at conversation start.

### Skills (`.claude/skills/*/SKILL.md`)

Reusable workflows triggered by natural language. Each skill file has:

```yaml
---
name: skill-name
description: When to use this skill (critical for discovery)
---

# Skill Title

## When to Use
- User says "..."
- User wants to...

## Process
### Step 1: ...
### Step 2: ...

## Example
User: "..."
Claude: ...
```

**Important**: Skills are model-invoked based on user intent matching the description. They are NOT slash commands.

### reference/MATERIAL_UI_REFERENCE.md

Quick reference for Material UI component APIs. Contains:

- Component names and import paths
- Available props and variants
- Usage examples
- Icon list

This is read-only — don't modify. Update if MUI version changes significantly.

### reference/PROJECT_TEMPLATE.md

Template used when creating new projects. Defines the structure of PROJECT.md files.

---

## Design Decisions

### Why Prototypes, Not Production Code

| Approach | Problem |
|----------|---------|
| Figma designs | Engineers can't tell what's achievable with actual components |
| Production code from AI | Quality/architecture concerns, doesn't fit codebase patterns |
| **Prototypes with real components** | Shows exactly what's possible, engineers build their own implementation |

### Why React 18 (Not 19)

Material UI v6 works best with React 18. React 19 may cause issues with some component behaviors.

### Why No Tailwind

This version uses MUI's `sx` prop for styling, which is the idiomatic approach for Material UI. Mixing Tailwind with MUI creates inconsistency.

### Why Skills Instead of Long Prompts

- Reusable across sessions
- Consistent behavior
- Easier to maintain and update
- Users don't need to remember complex prompts

### Why Domain Memory Instead of Conversation History

- Conversation history gets lost when context window fills
- Structured data (tables, backlogs) is easier to parse
- Progress survives across completely new sessions
- Humans can read and understand the state too

---

## Technical Setup

### Design System Installation

```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material @fontsource/roboto
```

### Required Configuration

**src/main.jsx** — ThemeProvider setup:
```javascript
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const theme = createTheme({})

<ThemeProvider theme={theme}>
  <CssBaseline />
  <App />
</ThemeProvider>
```

### Dialog Components

MUI Dialogs follow this pattern:
```jsx
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

<Dialog open={open} onClose={handleClose}>
  <DialogTitle>Title</DialogTitle>
  <DialogContent>Content</DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>Cancel</Button>
    <Button onClick={handleConfirm} variant="contained">Confirm</Button>
  </DialogActions>
</Dialog>
```

---

## Extending Project Studio

### Adding a New Skill

1. Create directory: `.claude/skills/[skill-name]/`
2. Create `SKILL.md` with frontmatter:
   ```yaml
   ---
   name: skill-name
   description: Clear description of when this skill applies
   ---
   ```
3. Write process steps and examples
4. Update CLAUDE.md skills table
5. Update STUDIO_STATUS.md features table

### Adding Reference Documentation

1. Add markdown file to `reference/`
2. Update CLAUDE.md "Key Resources" section
3. Reference it in relevant skills

### Modifying the Project Template

Edit `reference/PROJECT_TEMPLATE.md`. Changes apply to new projects only.

---

## Troubleshooting

### Dialog Not Showing

1. Check the `open` prop is controlled by state
2. Ensure `onClose` handler sets state to false
3. Make sure Dialog is rendered (not conditionally omitted)

### Skill Not Triggering

Skills are model-invoked, not slash commands. Try:
- "Create a new project called X" (not `/new-project`)
- Make the request clearly match the skill's description

### Component Import Errors

Make sure you're importing from the correct package:
```javascript
// Correct
import Button from '@mui/material/Button';

// Also correct
import { Button } from '@mui/material';

// Wrong (old package)
import Button from '@material-ui/core/Button';
```

### Styling Issues

Use the `sx` prop for MUI-idiomatic styling:
```jsx
// Correct
<Box sx={{ p: 2, bgcolor: 'primary.main' }} />

// Avoid
<Box style={{ padding: 16, backgroundColor: 'blue' }} />
```

---

## File Responsibilities

| File | Who writes | Who reads | When updated |
|------|-----------|-----------|--------------|
| CLAUDE.md | Maintainers | Claude | When behavior should change |
| STUDIO_STATUS.md | Claude + Maintainers | Claude + Humans | Each development session |
| PROJECT.md | Claude | Claude + Users | Each prototype session |
| Skills | Maintainers | Claude | When workflows change |
| Reference docs | Maintainers | Claude | When design system updates |
| User/Technical docs | Claude + Maintainers | Humans | When features change |
