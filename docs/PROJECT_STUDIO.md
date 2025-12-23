# Project Studio — Technical Documentation

This document is for builders and maintainers of Project Studio. For user documentation, see [USER_GUIDE.md](USER_GUIDE.md).

---

## Architecture Overview

Project Studio uses a **layered context system**:

1. **CLAUDE.md** — Foundation instructions, auto-loaded every session
2. **reference/** — Design system docs (CELERITAS_REFERENCE.md, DESIGN_PRINCIPLES.md)
3. **projects/[name]/PROJECT.md** — Per-project context and state
4. **skills/** — Natural language-triggered workflows

### What Claude Reads

| File | When Read | Purpose |
|------|-----------|---------|
| CLAUDE.md | Every session (auto) | Core instructions |
| CELERITAS_REFERENCE.md | When building components | Component API |
| DESIGN_PRINCIPLES.md | When building components | Design conventions |
| PROJECT.md | When working on a project | Project context |
| SKILL.md | When skill is triggered | Workflow instructions |

### What Claude Doesn't Read Automatically

- `docs/` — Human documentation
- `tests/` — Test reports and comparisons
- `STUDIO_STATUS.md` — Only read in dev sessions, not PM sessions

---

## Skills System

Skills are **natural language triggers**, not slash commands.

| Skill | Trigger Phrases |
|-------|-----------------|
| new-project | "Create a new project called X", "Start a project" |
| create-component | "Create a component that...", "Build a card for..." |
| from-figma | "Build this from Figma: [URL]" |
| review-ui | "Review my components", "Check for design consistency" |

Skills live in `.claude/skills/[name]/SKILL.md`.

---

## Domain Memory Pattern

Project Studio prevents the "amnesiac agent" problem using domain memory:

### Studio Level (STUDIO_STATUS.md)
- Features and their status
- Known issues
- Test history
- Progress log across dev sessions

### Project Level (PROJECT.md)
- Screens Backlog with status
- Progress log
- Architecture decisions
- "Next:" marker for continuity

---

## Testing Approach

**Always test in a fresh Claude Code session.** This validates:

1. Domain memory files work correctly
2. Instructions are clear without accumulated context
3. The experience matches what real users will have

Test reports go in `tests/` with the naming convention `[test-name]-[date].md`.

---

## Key Files

| File | Purpose |
|------|---------|
| `CLAUDE.md` | Main instructions for Claude |
| `STUDIO_STATUS.md` | Development state tracking |
| `reference/CELERITAS_REFERENCE.md` | Component API reference |
| `reference/DESIGN_PRINCIPLES.md` | Design tokens and conventions |
| `reference/PROJECT_TEMPLATE.md` | Template for new projects |
| `reference/TEST_REPORT_TEMPLATE.md` | Template for test reports |

---

## Maintenance Tasks

### Adding a New Design Principle

1. Edit `reference/DESIGN_PRINCIPLES.md`
2. Add the principle to the appropriate section
3. Test in a fresh session to verify Claude follows it

### Adding a New Skill

1. Create `.claude/skills/[name]/SKILL.md`
2. Add to the skills list in CLAUDE.md
3. Test the trigger phrases

### Archiving Old Progress Logs

When STUDIO_STATUS.md gets too long:
1. Move older session logs to `docs/ARCHIVE_[year].md`
2. Keep only the last 5-10 sessions in the main file

---

## Technical Requirements

- **React 18** — Celeritas requires React 18 (not 19)
- **No Tailwind CSS** — Lightspeed engineering doesn't use Tailwind
- **Vite** — Dev server runs on `localhost:5173`
- **Celeritas** — Installed from GitHub: `design-system@github:Lightspeed-Systems/design_system`
