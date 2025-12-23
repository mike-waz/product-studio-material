# Project Studio Status (Material Design Edition)

## Current State
**Version:** 0.1 (forked from main Project Studio)
**Last Updated:** 2024-12-23
**Design System:** Material UI v6 + Material Design principles

## Purpose

This is the **Material Design variant** of Project Studio, created for A/B comparison testing against the Celeritas version. Both versions use the same workflow and domain memory patterns, but different design systems.

## Features

| Feature | Status | Notes |
|---------|--------|-------|
| Project creation (new-project skill) | ✅ Done | Natural language invocation |
| Component/screen building | ✅ Done | Iterative workflow documented |
| Figma integration (from-figma skill) | ⏳ Pending | Skill exists, untested |
| UI review (review-ui skill) | ⏳ Pending | Skill exists, untested |
| Design system setup | ✅ Done | MUI v6, React 18, no Tailwind |
| Playwright verification | ⏳ Pending | Documented, needs testing |
| Domain memory (project-level) | ✅ Done | Screens Backlog, Progress Log with Next: |
| Domain memory (studio-level) | ✅ Done | This file |
| User documentation | ✅ Done | docs/USER_GUIDE.md |
| Technical documentation | ✅ Done | docs/TECHNICAL.md |
| Test Mode | ✅ Done | Default ON, generates reports to tests/ |

## Known Issues

| Issue | Discovered | Status | Notes |
|-------|------------|--------|-------|
| None yet | — | — | Fresh workspace |

## Architecture Decisions

| Decision | Rationale |
|----------|-----------|
| Prototypes are visual specs, not production code | Engineers reference them, don't copy-paste |
| Projects live in `projects/` folder | Clean separation from workspace config |
| Reference docs are read-only in `reference/` | Single source of truth for design system API |
| Skills use natural language, not slash commands | Claude Code skills are model-invoked based on context |
| React 18 required | MUI v6 works best with React 18 |
| No Tailwind CSS | Use MUI's sx prop for idiomatic styling |
| Domain memory pattern | Prevents "amnesiac agent" problem across sessions |

## Test History

| Test | Date | Result | Notes |
|------|------|--------|-------|
| — | — | — | No tests run yet |

## Next Steps

- [ ] Run first test to validate MUI setup works
- [ ] Compare output against Celeritas version using same prompts
- [ ] Document any MUI-specific issues or patterns

## Testing Approach

**Always test in a fresh Claude Code session.** This validates that:

1. Domain memory files work — new session relies on CLAUDE.md, skills, PROJECT.md
2. Instructions are clear enough without accumulated context
3. The experience matches what real users (PMs/designers) will have

### Comparison Testing Plan

1. Use identical prompts for both versions
2. Build the same screens/components
3. Compare visual output quality
4. Compare code quality and MUI vs Celeritas usage
5. Note any differences in Claude's behavior

---

## Progress Log

### 2024-12-23 — Initial Setup
- Forked from main Product Studio workspace
- Replaced Celeritas with Material UI:
  - Updated package.json with MUI dependencies
  - Updated main.jsx with ThemeProvider setup
  - Created MATERIAL_UI_REFERENCE.md
  - Created MATERIAL_DESIGN_PRINCIPLES.md
  - Updated all skills to reference MUI
  - Updated CLAUDE.md with MUI instructions
  - Rewrote App.jsx using MUI components
  - Updated USER_GUIDE.md and TECHNICAL.md
- Cleared projects/ folder for fresh start
- Removed old Celeritas reference files
- **Next:** Run first test to validate setup
