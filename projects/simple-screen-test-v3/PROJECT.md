# Project: Simple Screen Test-v3

## Overview
A scheduling feature that allows parents to set up time-based rules for their children's web browsing. Parents can create "schedules" that override normal browsing rules during specific time windows — blocking distracting sites during homework time, or pausing internet completely at bedtime.

## User
**Parents** - Want to control when and what their kids can access online, with different rules for different times of day (homework, bedtime, free time).

## Key Screens

### 1. Schedule List View
- Shows all created schedules (max 10)
- Each schedule shows: name, days active, time window, on/off toggle
- Quick way to enable/disable without deleting
- "Add Schedule" button (disabled if at 10 limit)
- Empty state with helpful prompt to create first schedule

### 2. Schedule Creation/Edit Form
- **Template Selection** (for new schedules):
  - Focus/Homework Time - reasonable defaults for blocking distractions
  - Bedtime - overnight schedule defaults (e.g., 9pm-7am)
  - Custom - blank slate

- **Schedule Details**:
  - Name field
  - Day picker (multi-select: M T W T F S S)
  - Start time picker
  - End time picker
  - Handles overnight schedules (end time "before" start time)

- **Blocking Options**:
  - Block Everything (full internet pause)
  - Block Categories (games, entertainment, social media, etc.)
  - Apply Block List (if configured elsewhere)

- **Validation**:
  - Catch overlapping schedules on same day/time
  - Show clear error message if conflict detected

### 3. Activity Screen Widget
- Shows currently active schedule(s)
- Quick visibility without navigating to schedules section

## Templates

| Template | Default Days | Default Time | Default Blocking |
|----------|--------------|--------------|------------------|
| Focus/Homework | Mon-Fri | 3:00 PM - 6:00 PM | Games, Social Media, Entertainment |
| Bedtime | Every day | 9:00 PM - 7:00 AM | Block Everything |
| Custom | None | None | None |

## Business Rules
- Maximum 10 schedules per child
- No overlapping schedules (same day + overlapping time window)
- Overnight schedules supported (end time < start time = next day)
- Schedules can be toggled on/off without deletion
- Templates provide sensible defaults but are fully editable

## Components Created
<!-- This section is auto-updated as components are built -->

| Component | Description | Status |
|-----------|-------------|--------|
| ScheduleList | Main view with header, schedule cards, empty state, and modals | Complete |
| ScheduleCard | Individual schedule row with toggle, time display, day indicators | Complete |
| TemplateModal | Template selection modal (Homework, Bedtime, Custom) | Complete |
| ScheduleForm | Create/edit form with all schedule configuration options | Complete |
| DayPicker | Multi-select day buttons with quick select links | Complete |
| BlockingOptions | Radio buttons for block type + category checkboxes | Complete |
| ActiveScheduleWidget | Widget showing currently active schedules for activity screen | Complete |

## Design References
- Following **Filter** product patterns (best design system adherence)

## Technical Notes
- Uses Celeritas design system components
- React 18 required
- No Tailwind CSS
- Time picker needs to handle 12/24 hour format
- Overlap detection algorithm needed for validation

## Changelog

### 2025-12-22
- Initial project setup
- Target user: Parents
- Key screens planned: Schedule List, Schedule Form, Activity Widget
- Documented templates and business rules
- Built all 7 components:
  - ScheduleList: Main list view with sample data
  - ScheduleCard: Schedule row with toggle, time, days display
  - TemplateModal: Choose from Homework, Bedtime, or Custom templates
  - ScheduleForm: Full form with validation and overlap detection
  - DayPicker: Interactive day selection with quick links
  - BlockingOptions: Block Everything / Categories / Block List
  - ActiveScheduleWidget: Shows active schedules on activity screen
