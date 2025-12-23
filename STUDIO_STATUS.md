# Project Studio Status

## Current State
**Version:** 0.2 (pre-release, internal testing)
**Last Updated:** 2024-12-23

## Features

| Feature | Status | Notes |
|---------|--------|-------|
| Project creation (new-project skill) | ✅ Done | Natural language invocation, uses new template |
| Component/screen building | ✅ Done | Iterative workflow documented |
| Figma integration (from-figma skill) | ⏳ Pending | Skill exists, untested |
| UI review (review-ui skill) | ⏳ Pending | Skill exists, untested |
| Design system setup | ✅ Done | React 18, no Tailwind, CSS import |
| Playwright verification | 🔄 In Progress | Documented, needs more testing |
| Domain memory (project-level) | ✅ Done | Screens Backlog, Progress Log with Next:, Architecture Decisions |
| Domain memory (studio-level) | ✅ Done | STUDIO_STATUS.md with features, issues, test history |
| User documentation | ✅ Done | docs/USER_GUIDE.md |
| Technical documentation | ✅ Done | docs/TECHNICAL.md |
| Cheatsheet | ✅ Done | docs/CHEATSHEET.md |
| Test Mode | ✅ Done | Default ON, generates reports to tests/, Claude + tester feedback |

## Known Issues

| Issue | Discovered | Status | Notes |
|-------|------------|--------|-------|
| Skills aren't slash commands | 12/23 | Documented | They're natural language triggers |
| Modal requires `version={2}` | 12/23 | Documented | Added to CLAUDE.md |
| React 19 incompatible | 12/23 | Fixed | Downgraded to React 18 |

## Architecture Decisions

| Decision | Rationale |
|----------|-----------|
| Prototypes are visual specs, not production code | Engineers reference them, don't copy-paste. Avoids "design vs reality" gap. |
| Projects live in `projects/` folder | Clean separation from workspace config and legacy code |
| Reference docs are read-only in `reference/` | Single source of truth for design system API |
| Skills use natural language, not slash commands | Claude Code skills are model-invoked based on context |
| React 18 required | Celeritas has peer dependencies on React 18 |
| No Tailwind CSS | Lightspeed engineering doesn't use Tailwind |
| Domain memory pattern | Prevents "amnesiac agent" problem across sessions |

## Test History

| Test | Date | Result | Notes |
|------|------|--------|-------|
| Simple Screen Test v1 | 12/22 | ❌ Failed | Modal didn't render |
| Simple Screen Test v2 | 12/23 | ✅ Passed | Fixed with CSS import + version={2} |
| Test v3 | — | ⏳ Pending | Fresh session test after all updates |

## Next Steps

- [ ] Run Test v3 with fresh session to validate full workflow
- [ ] Test from-figma skill with real Figma URL
- [ ] Test review-ui skill on existing components

## Testing Approach

**Always test in a fresh Claude Code session.** This validates that:

1. Domain memory files work — new session relies on CLAUDE.md, skills, PROJECT.md
2. Instructions are clear enough without accumulated context
3. The experience matches what real users (PMs/designers) will have

### How to Test

1. Start a new Claude Code conversation (not continuing this one)
2. Try the workflow being tested (e.g., "Create a new project called Test v3")
3. Note what works and what doesn't
4. Return to development session to fix issues
5. Log results in Test History table above

---

## Progress Log

### 2024-12-23 (Session 2 - continued, part 3)
- Implemented Test Mode feature
- Created reference/TEST_REPORT_TEMPLATE.md
- Created tests/ folder for test reports
- Added Test Mode section to CLAUDE.md (default ON)
- Test mode includes: Claude self-evaluation + tester feedback prompts
- Four evaluation categories: Clarity, Workflow, Output Quality, Speed
- **Next:** Run Test v3 in fresh session with test mode enabled

### 2024-12-23 (Session 2 - continued, part 2)
- Updated new-project skill to use new PROJECT_TEMPLATE with Screens Backlog
- Strengthened "**Next:**" convention — must end every Progress Log entry
- Added Testing Approach section to document fresh-session testing
- Created docs/CHEATSHEET.md for quick reference phrases
- Updated all feature statuses

### 2024-12-23 (Session 2 - continued)
- Added domain memory concept from agent video analysis
- Designed two-level memory: STUDIO_STATUS.md (meta) + PROJECT.md (per-project)
- Created documentation structure: USER_GUIDE.md + TECHNICAL.md
- Clarified three audiences: Claude, users, builders

### 2024-12-23 (Session 1)
- Fixed Modal display issue (CSS import + version={2})
- Removed Tailwind, downgraded to React 18
- Restructured skills to subdirectory format (.claude/skills/[name]/SKILL.md)
- Clarified skills are natural language triggers, not slash commands
- Reframed as "prototypes as design specs" not "production code"
- Updated CLAUDE.md with iterative workflow and engineering handoff section
