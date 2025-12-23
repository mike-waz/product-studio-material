# Project Studio

A system for PMs and designers to create production-ready UI using Claude Code and the Celeritas design system.

---

## The Vision

**Input**: A PM or designer provides a prompt describing a UI they want

**Output**: Production-ready JSX using Celeritas components with 1:1 fidelity

**Users**: People who may not be developers, but understand the product and user needs

---

## Architecture: The Hybrid Approach

We use a **layered context system** that combines upfront structure with iterative flexibility:

```
┌─────────────────────────────────────────────────────────────┐
│  FOUNDATION LAYER (Set once, always present)                │
│  - Design system reference (Celeritas)                      │
│  - Design principles (spacing, color, typography, patterns) │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  PROJECT CONTEXT (PRD-lite, generated via Q&A)              │
│  - What are we building? (1-2 paragraphs)                   │
│  - Who is the user?                                         │
│  - Key screens/flows                                        │
│  - Components created so far (auto-tracked)                 │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  ITERATIVE BUILDING                                         │
│  PM: "Create a student card"                                │
│  PM: "Now I need a list view for these cards"               │
│  PM: "Add filtering by status"                              │
│  (Each request informed by foundation + project context)    │
└─────────────────────────────────────────────────────────────┘
```

### Why This Works

1. **Lightweight project context** — Not a full PRD, just enough to orient Claude
2. **Context accumulates** — As components are built, they're tracked automatically
3. **Coherence is maintained** — Claude knows what exists and ensures new work fits
4. **Still allows exploration** — PMs can iterate and discover without upfront planning

---

## Claude Code's Building Blocks

| Claude Code Feature    | How It Serves This Workflow                              |
| :--------------------- | :------------------------------------------------------- |
| **CLAUDE.md**          | Foundation instructions, auto-loaded for every session   |
| **MD files (context)** | Design system reference, principles                      |
| **Skills**             | Natural language triggers (create project, review UI)    |
| **MCP servers**        | Connect to Figma, Playwright for visual verification     |

---

## Directory Structure

```
product-studio/
├── CLAUDE.md                    # Foundation: Auto-loaded instructions
├── STUDIO_STATUS.md             # Development state and progress log
│
├── .claude/
│   └── skills/
│       ├── new-project/         # Skill: Create new project via Q&A
│       ├── create-component/    # Skill: Create component from description
│       ├── from-figma/          # Skill: Build from Figma selection
│       └── review-ui/           # Skill: Check against design principles
│
├── reference/
│   ├── CELERITAS_REFERENCE.md   # Component API quick reference
│   ├── DESIGN_PRINCIPLES.md     # Spacing, color, typography, patterns
│   └── PROJECT_TEMPLATE.md      # Template for new projects
│
├── docs/
│   ├── USER_GUIDE.md            # For PMs and designers
│   ├── TECHNICAL.md             # For builders/maintainers
│   └── CHEATSHEET.md            # Quick reference phrases
│
├── projects/                    # Individual project workspaces
│   └── [project-name]/
│       ├── PROJECT.md           # Project context (PRD-lite)
│       ├── components/          # Generated components
│       └── CHANGELOG.md         # Build history
│
├── tests/                       # Test reports and comparisons
│
└── src/designs/                 # Legacy prototypes
```

---

## Workflow Examples

### Starting a New Project

```
PM: "Create a new project called Teacher Dashboard Redesign"

→ Claude asks clarifying questions:
  - What problem does this solve?
  - Who is the primary user?
  - What are the key screens/actions?
  - Any existing patterns to follow?
→ Claude creates projects/teacher-dashboard/PROJECT.md with answers
→ Claude asks: "What would you like me to build first?"
→ PM provides detailed description
→ Building begins
```

### Building Iteratively

```
PM: "Create a class card that shows the class name,
     next session time, and a list of student avatars"

→ Claude reads CLAUDE.md (foundation)
→ Claude reads PROJECT.md (project context)
→ Claude checks CELERITAS_REFERENCE.md for components
→ Claude checks DESIGN_PRINCIPLES.md for conventions
→ Generates ClassCard.jsx using Avatar, Label, etc.
→ Updates PROJECT.md
```

### Reviewing for Consistency

```
PM: "Review my components for design consistency"

→ Claude scans all components in project
→ Checks against design principles
→ Flags inconsistencies (spacing, colors, patterns)
→ Suggests improvements using Celeritas components
```

---

## Key Design Decisions

| Question                   | Decision                                                     |
| :------------------------- | :----------------------------------------------------------- |
| PRD or iterative?          | **Hybrid**: Clarifying questions generate lightweight context, then iterate |
| Where do components go?    | `projects/[name]/components/` during development             |
| How is context maintained? | PROJECT.md auto-updates with component inventory             |
| What ensures quality?      | Foundation layer (principles, patterns) + review skill       |
| How do PMs validate?       | Local preview server + Playwright screenshots                |
| Design system approach?    | Celeritas for now; MUI + theming as potential alternative    |

---

## Guardrails (Enforced by Claude)

- **Must use Celeritas components** — No custom HTML for things that exist in the design system
- **No hardcoded colors** — Use design tokens or Celeritas component variants
- **Spacing on 4px grid** — Follow the spacing system (2, 4, 8, 12, 16, 24, 32, 48px)
- **Accessibility required** — Proper labels, keyboard navigation, contrast
- **Component naming conventions** — PascalCase, descriptive names

---

## Reference Files

### CELERITAS_REFERENCE.md
Quick lookup for Celeritas component APIs - props, variants, sizes, colors.

### DESIGN_PRINCIPLES.md
Design tokens and conventions:
- Spacing scale (4px grid)
- Typography (Roboto, size scale, weights)
- Colors (primary teal, greys, semantic colors)
- Border radius, shadows, breakpoints
- Page patterns (headers, empty states, tables)
- Visual weight guidelines
- Icon conventions (horizontal more-actions only)

---

## Success Metrics

- **Speed**: PM can go from idea to component in < 10 minutes
- **Quality**: Generated code passes engineering review with minimal changes
- **Consistency**: Components automatically align with design system
- **Adoption**: Non-developers can use the system independently

---

## Status

See [STUDIO_STATUS.md](STUDIO_STATUS.md) for current development state, known issues, and test history.
