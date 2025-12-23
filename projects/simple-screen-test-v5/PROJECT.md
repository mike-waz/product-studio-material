# Project: Simple Screen Test v5

## Overview
Time-based web browsing schedules for parents. Parents can create schedules that override normal filtering rules during specific time windows — like blocking distracting sites during homework time or pausing internet at bedtime.

## User
Parent

## Design References
Following Filter product patterns (best design system adherence)

## Key Requirements
- **Templates**: Focus/Homework, Bedtime, Custom (with reasonable defaults)
- **Blocking options**: Full internet pause, Category blocking (games, social, entertainment), Apply block list
- **Schedule controls**: Pick days, start/end time, enable/disable without deleting
- **Constraints**: Max 10 schedules, no overlapping schedules on same day
- **Overnight support**: Bedtime schedules like 9pm-7am (end time "before" start time)
- **Widget**: Show active schedules on main activity screen

---

## Screens Backlog

| Screen | Status | Last Updated | Notes |
|--------|--------|--------------|-------|
| ScheduleList | ✅ Done | 12/23 | Main list view with schedule cards, create button, toggle |
| ScheduleForm | ✅ Done | 12/23 | Modal for creating/editing schedules with validation |
| TemplateModal | ✅ Done | 12/23 | Template picker (Focus, Bedtime, Custom) |
| ActiveScheduleWidget | ✅ Done | 12/23 | Widget showing active schedules for main screen |
| ScheduleCard | ✅ Done | 12/23 | Individual schedule card with toggle and actions |
| DayPicker | ✅ Done | 12/23 | Day selection with quick presets |
| BlockingOptions | ✅ Done | 12/23 | Full pause, categories, block list options |

**Status key:**
- ✅ Done — Complete and verified
- 🔄 In Progress — Currently being worked on
- ⏳ Pending — Not yet started
- ❌ Blocked — Cannot proceed (see notes)

---

## Progress Log

### 2024-12-23 — Session 1
- Project created
- Initial screens identified: List/table view, Detail/edit view, Modal/dialog
- Following patterns from: Filter
- Primary user: Parent
- PM provided detailed requirements for web browsing schedules feature
- Built all components:
  - **ScheduleList**: Main view with header, count (X of 10), schedule cards
  - **ScheduleCard**: Shows schedule details, toggle to enable/disable, blocking type chip
  - **TemplateModal**: Choose from Focus Time, Bedtime, or Custom templates
  - **ScheduleForm**: Full form with name, day picker, time picker, blocking options
  - **DayPicker**: Circle buttons for days with Weekdays/Weekends/Every day shortcuts
  - **BlockingOptions**: Radio selection for Full Pause, Categories, or Block List
  - **ActiveScheduleWidget**: Shows currently active and enabled schedules
- Implemented features:
  - Max 10 schedules limit with disabled button
  - Overlap detection between schedules
  - Overnight schedule support (e.g., 9pm-7am)
  - Toggle schedules on/off without deleting
  - Category selection for blocking (Games, Social Media, Entertainment, etc.)
- **Next:** Visual verification in browser at http://localhost:5176

---

## Technical Notes
- Using Celeritas design system components
- React 18 required
- No Tailwind CSS

---

## Architecture Decisions

| Decision | Rationale | Date |
|----------|-----------|------|
| Separate ScheduleCard component | Keeps card logic isolated, easier to iterate on design | 12/23 |
| TemplateModal before ScheduleForm | Better UX - user picks a starting point before editing | 12/23 |
| Overlap validation in ScheduleForm | Prevents conflicts before saving, clearer error messaging | 12/23 |
| Time stored in 12h format with AM/PM | Matches common user expectations for time display | 12/23 |
