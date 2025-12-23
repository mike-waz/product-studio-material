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
│  - Design principles (spacing, color, typography)           │
│  - UI patterns (real Lightspeed patterns)                   │
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
| **MD files (context)** | Design system reference, principles, patterns            |
| **Skills**             | Reusable workflows (create component, review UI, etc.)   |
| **Slash commands**     | Quick actions like `/new-project`, `/from-figma`         |
| **Subagents**          | Specialized workers (design review, accessibility check) |
| **MCP servers**        | Connect to Figma, Storybook, or other tools              |

---

## Directory Structure

```
design-workspace/
├── CLAUDE.md                    # Foundation: Auto-loaded instructions
│
├── .claude/
│   └── skills/
│       ├── new-project.md       # Skill: Create new project via Q&A
│       ├── create-component.md  # Skill: Create component from description
│       ├── from-figma.md        # Skill: Build from Figma selection
│       └── review-ui.md         # Skill: Check against design principles
│
├── reference/
│   ├── CELERITAS_REFERENCE.md   # Component API quick reference
│   ├── DESIGN_PRINCIPLES.md     # Spacing, color, typography tokens
│   ├── UI_PATTERNS.md           # Real Lightspeed UI patterns
│   ├── PROJECT_TEMPLATE.md      # Template for new projects
│   └── examples/                # Screenshot references
│       ├── filter-policies.png
│       ├── filter-policies-details.png
│       ├── filter-modal-access-check.png
│       ├── signal-apps.png
│       └── signal-internet-filter.png
│
├── docs/
│   └── PROJECT_STUDIO.md        # This file - system documentation
│
├── projects/                    # Individual project workspaces
│   └── [project-name]/
│       ├── PROJECT.md           # Project context (PRD-lite)
│       └── components/          # Generated components
│
└── src/designs/                 # Legacy prototypes (separate from Project Studio)
```

---

## Workflow Examples

### Starting a New Project

```
PM: /new-project "Teacher Dashboard Redesign"

→ Claude asks clarifying questions:
  - What problem does this solve?
  - Who is the primary user?
  - What are the key screens/actions?
  - Any existing patterns to follow?
→ Claude creates projects/teacher-dashboard/PROJECT.md with answers
→ Project is ready for iterative building
```

### Building Iteratively (with context)

```
PM: "Create a class card that shows the class name,
     next session time, and a list of student avatars"

→ Claude reads CLAUDE.md (foundation)
→ Claude reads PROJECT.md (project context)
→ Claude checks CELERITAS_REFERENCE.md for components
→ Claude checks UI_PATTERNS.md for Lightspeed conventions
→ Generates ClassCard.jsx using Avatar, Label, etc.
→ Updates PROJECT.md "Components Created" section
```

### Building from Figma

```
PM: /from-figma https://figma.com/design/.../node-id=123:456

→ Claude uses Figma MCP to pull design specs
→ Maps Figma layers to Celeritas components
→ Cross-references DESIGN_PRINCIPLES.md for tokens
→ Generates component with correct props and spacing
→ Updates PROJECT.md
```

### Reviewing for Consistency

```
PM: /review-ui

→ Claude scans all components in project
→ Checks against design principles
→ Flags inconsistencies (spacing, colors, patterns)
→ Suggests improvements using Celeritas components
→ Ensures components work together cohesively
```

### Visual Verification with Playwright

```
After making changes:

→ Claude navigates to localhost:5173
→ Takes snapshot of component
→ Compares against reference screenshots
→ Identifies discrepancies
→ Makes corrections and re-verifies
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
Design tokens extracted from Celeritas source:
- Spacing scale (4px grid)
- Typography (Roboto, size scale, weights)
- Colors (primary teal, greys, semantic colors)
- Border radius, shadows, breakpoints

### UI_PATTERNS.md
Real patterns extracted from Filter and Signal product screenshots:
- Page structure and layout
- Navigation (left nav, breadcrumbs, tabs)
- Tables/lists with standard columns
- Empty states
- Forms and controls
- Filter bar patterns
- Status indicators (Label vs Chip)
- Avatar conventions (initials only)
- Modal structure

---

## Implementation Status

### Phase 1: Foundation ✅
- [x] Create CELERITAS_REFERENCE.md
- [x] Create CLAUDE.md with core instructions
- [x] Create DESIGN_PRINCIPLES.md (tokens from Celeritas)
- [x] Create PROJECT_TEMPLATE.md

### Phase 2: Skills ✅
- [x] Create `new-project` skill
- [x] Create `create-component` skill
- [x] Create `from-figma` skill
- [x] Create `review-ui` skill

### Phase 3: Real-World Patterns ✅
- [x] Collect production UI screenshots (Filter, Signal)
- [x] Analyze patterns through Q&A
- [x] Create UI_PATTERNS.md with Lightspeed conventions
- [ ] Get production code examples (pending repo access)

### Phase 4: Testing & Refinement 🔄
- [ ] Update /new-project with clarifying questions
- [ ] Test with sample project
- [ ] Iterate based on feedback
- [ ] Document lessons learned

### Future Consideration
- [ ] MUI + theming approach as alternative to Celeritas

---

## Success Metrics

- **Speed**: PM can go from idea to component in < 10 minutes
- **Quality**: Generated code passes engineering review with minimal changes
- **Consistency**: Components automatically align with design system
- **Adoption**: Non-developers can use the system independently

---

## Changelog

### 2024-12-22
- Created UI_PATTERNS.md from analysis of 5 production screenshots
- Learned key Lightspeed conventions:
  - Avatars use initials only (no photos)
  - Label component (non-interactive) vs Chip (interactive)
  - Toggle colors: grey=off, teal=on, red=blocked
  - Standard filter bar pattern
  - Empty state pattern
- Identified patterns NOT in design system (KPI cards, charts)
- Discussed alternative approach: MUI + theming (deferred for now)
- Reviewed Ryan Carson's 3-file system; adopting clarifying questions approach

### Earlier
- Set up initial workspace structure
- Created reference documents from Celeritas source
- Created 4 skills for the workflow
- Established Playwright integration for visual verification
