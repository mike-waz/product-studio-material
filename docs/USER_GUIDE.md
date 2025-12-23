# Project Studio User Guide (Material Design Edition)

A tool for building high-fidelity UI prototypes using Claude Code and Material Design / Material UI.

---

## What is Project Studio?

Project Studio lets PMs and designers create interactive UI prototypes by describing what they want in plain language. These prototypes:

- Use real Material UI (MUI) components
- Follow Google's Material Design principles
- Run in a browser so you can interact with them
- Replace Figma as the design spec for engineering handoff
- Show exactly what's achievable in production — no "design vs reality" gap

---

## Getting Started

### Prerequisites

- VS Code with Claude Code extension installed
- Access to this workspace

### Quick Start

1. Open the workspace in VS Code
2. Start a Claude Code conversation
3. Say: **"Create a new project called [Your Project Name]"**

---

## Creating a Project

When you ask to create a project, Claude will ask a few questions:

| Question | Why it matters |
|----------|----------------|
| What problem does this solve? | Sets context for design decisions |
| Who is the primary user? | District Admin, Teacher, Student, etc. |
| What screens do you need? | List view, detail view, modal, etc. |
| What product patterns to follow? | Existing patterns or new/custom |

After answering, Claude creates a project folder with a PROJECT.md file to track progress.

---

## Building Screens

Just describe what you want. Examples:

- "Create a student list with search and filters"
- "Add a dialog for editing student details"
- "Build a settings panel with switches"
- "Create a dashboard showing usage stats"

### Tips for Best Results

| Do | Don't |
|----|-------|
| Be specific: "a table with name, email, and status columns" | Be vague: "a list of stuff" |
| Reference common patterns: "like a Gmail inbox list" | Assume Claude knows your mental model |
| Review after each addition | Wait until everything is built to check |
| Say what data it shows | Only describe visual appearance |

### Iterative Building

Claude builds incrementally — one piece at a time:

1. Creates basic structure
2. Verifies it renders
3. Adds more features
4. Checks again
5. Repeats until done

This catches issues early. If something breaks, you'll know exactly what caused it.

---

## Viewing Your Prototype

1. In terminal, run: `npm run dev`
2. Open http://localhost:5173 in your browser
3. Navigate to your project's screens

---

## Working from Figma

If you have a Figma design, say:

> "Build this from Figma: [paste Figma URL]"

Claude will:
1. Pull the design specs from Figma
2. Map layers to Material UI components
3. Generate a matching prototype

---

## Reviewing Your UI

To check your prototype against Material Design principles:

> "Review my components for design consistency"

Claude will scan for:
- Hardcoded colors (should use MUI theme tokens)
- Missing accessibility labels
- Components that should use MUI but don't
- Spacing inconsistencies

---

## Engineering Handoff

When your prototype is ready, share it with engineering:

1. **Share the running prototype** — Engineers view it to understand layout, spacing, and interactions
2. **Share the code location** — `projects/[your-project]/components/`
3. **Engineers reference, not copy** — They build their own production implementation based on your prototype

The value: Your prototype uses *real* Material UI components, so engineers know exactly what's achievable.

---

## Project Files

Each project has:

```
projects/[your-project]/
├── PROJECT.md      # Project overview, goals, screen backlog
├── components/     # Your prototype files
└── CHANGELOG.md    # History of what was built
```

You can read PROJECT.md to see current status and what's been built.

---

## Common Phrases

| To do this... | Say... |
|---------------|--------|
| Start a new project | "Create a new project called Policy Management" |
| Build a screen | "Create a student list with filters" |
| Add to existing screen | "Add a bulk actions bar to the student list" |
| Build from Figma | "Build this from Figma: [URL]" |
| Review for issues | "Review my components" |
| Check status | "What's the current state of this project?" |
| Continue work | "Let's keep working on the student detail dialog" |

---

## Troubleshooting

### "Nothing happened when I asked for something"

Make sure:
- You're in a Claude Code conversation (not regular Claude chat)
- The workspace is open in VS Code
- You're being specific about what you want

### "The prototype doesn't look right"

- Check the browser console for errors
- Ask Claude to review the component
- Try rebuilding incrementally

### "Dialog/modal isn't showing"

Make sure the Dialog component has the `open` prop set correctly. Ask Claude to check the Dialog implementation.

---

## Getting Help

- Ask Claude: "How do I [do something]?"
- Check `docs/TECHNICAL.md` for system details
- Check `STUDIO_STATUS.md` for known issues
