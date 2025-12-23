---
name: new-project
description: Create a new Project Studio project. Use when user says "new project", "create project", "start a project", or wants to begin building UI components. Asks clarifying questions then creates project folder with PROJECT.md.
---

# Create New Project

Create a new Project Studio project by gathering context through clarifying questions, then generating the project structure with a populated PROJECT.md.

## When to Use

- User says "create a new project called X"
- User says "start a new project"
- User says "new project" followed by a name
- User wants to begin building UI components for a new feature

## Process

### Step 1: Ask Clarifying Questions

Before creating any files, use the AskUserQuestion tool to gather context. Ask these questions:

**Question 1: Problem/Goal**
"What problem does this project solve, or what is the goal?"
- Help users understand [specific thing]
- Improve an existing workflow
- Create a new feature
- Redesign an existing screen

**Question 2: Primary User**
"Who is the primary user of this UI?"
- District Admin
- School Admin
- Teacher
- Student
- Parent
- IT Staff

**Question 3: Key Screens/Components**
"What are the main screens or components you'll need?" (multi-select)
- List/table view
- Detail/edit view
- Dashboard with stats
- Settings/configuration
- Modal/dialog
- Form

**Question 4: Existing Patterns**
"Should this follow patterns from an existing product?"
- Filter (best design system adherence)
- Signal
- Alert
- Classroom
- New/custom patterns

### Step 2: Parse Project Name

Convert the project name to a slug for the folder:
- "Teacher Dashboard Redesign" → `teacher-dashboard-redesign`
- "Alert Settings V2" → `alert-settings-v2`

### Step 3: Create Project Structure

```
projects/
└── [project-slug]/
    ├── PROJECT.md
    ├── components/
    └── CHANGELOG.md
```

### Step 4: Create PROJECT.md

Use `reference/PROJECT_TEMPLATE.md` as the base structure. Populate it with the user's answers:

```markdown
# Project: [Project Name]

## Overview
[Generated from Question 1 answer - expand into 1-2 sentences]

## User
[From Question 2 answer]

## Design References
[From Question 4 answer - note which product patterns to follow]

---

## Screens Backlog

<!-- Populate from Question 3 answers. All start as Pending. -->

| Screen | Status | Last Updated | Notes |
|--------|--------|--------------|-------|
| [Screen from Q3] | ⏳ Pending | | |
| [Screen from Q3] | ⏳ Pending | | |
| [Screen from Q3] | ⏳ Pending | | |

**Status key:**
- ✅ Done — Complete and verified
- 🔄 In Progress — Currently being worked on
- ⏳ Pending — Not yet started
- ❌ Blocked — Cannot proceed (see notes)

---

## Progress Log

### [Today's Date] — Session 1
- Project created
- Initial screens identified: [list from Q3]
- Following patterns from: [product from Q4]
- **Next:** [First screen to build]

---

## Technical Notes
<!-- Any constraints or decisions worth noting -->
-

---

## Architecture Decisions

| Decision | Rationale | Date |
|----------|-----------|------|
| | | |
```

### Step 5: Create CHANGELOG.md

```markdown
# Changelog: [Project Name]

## [Today's Date]
- Project created
- Target user: [User type]
- Key screens planned: [List from answers]
```

### Step 6: Confirm and Ask for Build Prompt

After creating files, provide a summary and **explicitly ask for the build prompt**:

```
Project "[Project Name]" is ready!

Location: projects/[project-slug]/
User: [User type]
Goal: [Brief goal from answers]
Following: [Product] patterns

Key screens to build:
- [Screen 1]
- [Screen 2]
- ...
```

**CRITICAL: Now ask for the build prompt before doing anything else:**

```
What would you like me to build first?

Please describe the screen or component in detail:
- What should it show?
- What actions can the user take?
- Any specific requirements or behaviors?

You can also attach a sketch, wireframe, or screenshot of an existing feature if that helps.
```

**DO NOT start building until the user provides this prompt.** The PM's detailed description is essential context — never assume or invent requirements.

## Example

User: "Create a new project called Policy Management Redesign"

Claude asks questions via AskUserQuestion...

User answers:
1. Problem: "Improve an existing workflow"
2. User: "District Admin"
3. Screens: "List/table view", "Detail/edit view", "Modal/dialog"
4. Patterns: "Filter"

Claude creates:
```
projects/policy-management-redesign/
├── PROJECT.md        # With Screens Backlog populated
├── components/
└── CHANGELOG.md
```

The PROJECT.md Screens Backlog would contain:
```markdown
| Screen | Status | Last Updated | Notes |
|--------|--------|--------------|-------|
| List/table view | ⏳ Pending | | |
| Detail/edit view | ⏳ Pending | | |
| Modal/dialog | ⏳ Pending | | |
```

And Progress Log would end with:
```markdown
- **Next:** Waiting for PM to describe what to build
```

Claude then asks:
```
What would you like me to build first?

Please describe the screen or component in detail:
- What should it show?
- What actions can the user take?
- Any specific requirements or behaviors?

You can also attach a sketch, wireframe, or screenshot of an existing feature if that helps.
```

User provides detailed prompt:
```
I need a way for admins to manage filtering policies. They should see a list
of all policies with name, status, and how many users are affected. They can
click to edit, toggle on/off, or delete. There should be a way to create new
policies too.
```

NOW Claude can start building, with the PM's requirements as the guide.

## Notes

- Always ask questions BEFORE creating files
- If user provides detailed context upfront, you can skip redundant questions
- The goal is lightweight context, not a full PRD
- Keep the conversation moving - don't over-ask
- **CRITICAL: Always ask for the build prompt before starting to build. Never assume what to create.**
