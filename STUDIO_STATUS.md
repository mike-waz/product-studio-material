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
| Competitive comparison testing | ✅ Done | tests/comparisons/ with template for structured analysis |

## Known Issues

| Issue | Discovered | Status | Notes |
|-------|------------|--------|-------|
| Skills aren't slash commands | 12/23 | Documented | They're natural language triggers |
| Modal requires `version={2}` | 12/23 | Documented | Added to CLAUDE.md |
| React 19 incompatible | 12/23 | Fixed | Downgraded to React 18 |
| Using blue instead of teal | 12/23 | Fixed | Documented in DESIGN_PRINCIPLES.md |
| Vertical more-actions icon used | 12/23 | Fixed | Documented in DESIGN_PRINCIPLES.md |
| Components have excessive visual weight | 12/23 | Fixed | Added Visual Weight Guidelines to DESIGN_PRINCIPLES.md |
| Toggle shows "On" for disabled items | 12/23 | Not a bug | Tester confirmed toggle was working correctly |

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
| Competitive Comparison: Web Browsing Scheduler | 12/22 | ✅ Passed | Product Studio won vs Figma Make, Claude.app |
| Simple Screen Test v5 | 12/23 | ⚠️ Passed with issues | Good layout/spacing, but design accuracy issues (colors, component weight, conventions) |

## Comparison Test Results

**Test:** Web Browsing Schedule Manager (12/22/2024)
**Winner:** Product Studio

| Tool | Result |
|------|--------|
| Figma Make (Sonnet) | Basic wireframe, no design system |
| Figma Make (Gemini 3) | Slightly better, still generic |
| Claude.app (Opus 4.5) | Nice looking but generic components |
| **Product Studio** | **Production-quality, uses Celeritas** |

**Key insight:** Same model (Opus 4.5), but Product Studio's design system context is the differentiator.

**Issues identified:**
- Kebab menu button too large/prominent
- Time picker UX needs improvement
- Some actions non-functional in prototype

Full report: `tests/comparisons/web-browsing-schedule-manager/COMPARISON.md`

## Next Steps

- [ ] Address kebab menu sizing issue
- [ ] Improve time picker pattern documentation
- [ ] Test from-figma skill with real Figma URL
- [ ] Test review-ui skill on existing components
- [ ] Explore visual input support: allow PM to provide hand-drawn sketch or wireflow diagram alongside prompt
- [ ] Explore screenshot-based iteration: allow PM to provide screenshot of existing feature as starting point for redesign

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

### 2024-12-23 (Session 5 continued)
- Workspace optimization and cleanup:
  - Merged unique patterns from UI_PATTERNS.md into DESIGN_PRINCIPLES.md
  - Deleted UI_PATTERNS.md (redundant after merge)
  - Deleted reference/examples/ folder (5 screenshots, no longer needed)
  - Deleted reference/Tutorial: 3 Files System.txt (50KB downloaded article)
  - Updated README.md — removed stale content, updated directory structure
  - Rewrote docs/PROJECT_STUDIO.md — focused on technical/maintenance info
- Reference folder reduced from 3.9MB to ~30KB
- **Next:** Run test v6 in fresh session to validate the design principles fixes

### 2024-12-23 (Session 5)
- Updated DESIGN_PRINCIPLES.md with fixes from test v5:
  - Added "Primary Color: Teal, Not Blue" section
  - Added "Icons & Action Buttons" section (horizontal more-actions only)
  - Added "Visual Weight Guidelines" section (prefer lighter alternatives)
  - Added "Active/Enabled State Pattern" guidance
  - Added "Page Patterns" section (page header, empty states, data tables, Label vs Chip)
- Updated Known Issues table — marked 3 issues as Fixed, 1 as Not a bug
- **Next:** Workspace optimization

### 2024-12-23 (Session 4)
- Documented first competitive comparison test: Web Browsing Schedule Manager
- Tested 4 tools: Figma Make (Sonnet), Figma Make (Gemini 3), Claude.app (Opus 4.5), Product Studio
- Product Studio won across all categories
- Key insight: Same model + design system context = production-quality output
- Identified improvements: kebab menu sizing, time picker UX, functional prototypes
- **Next:** Address identified issues, continue "training" Product Studio

### 2024-12-23 (Session 3)
- Set up GitHub repo (mike-waz/product-studio)
- Updated README.md with Project Studio documentation
- Created competitive comparison testing structure:
  - tests/comparisons/ folder for organized test results
  - tests/COMPARISON_TEMPLATE.md for standardized analysis
  - Each test gets its own folder with COMPARISON.md + screenshots
- Screenshots referenced via relative paths in markdown (Claude can view them)
- **Next:** Run first comparison test using the template

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
