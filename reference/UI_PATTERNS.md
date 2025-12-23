# Lightspeed UI Patterns

Real-world patterns extracted from Filter and Signal product screenshots. Use these as the authoritative reference when building components.

---

## Page Structure

### Standard Page Layout
```
┌─────────────────────────────────────────────────────────────┐
│ Top Bar: Org Selector | Group Switcher | Search | User     │
├─────────────┬───────────────────────────────────────────────┤
│             │ Breadcrumbs (optional)                        │
│   Left      │ Page Title                                    │
│   Nav       │ Page Description (optional, grey text)        │
│             │ Tabs (if applicable)                          │
│             ├───────────────────────────────────────────────┤
│             │ Filter Bar: Filters | Search | Actions        │
│             ├───────────────────────────────────────────────┤
│             │                                               │
│             │ Content Area                                  │
│             │                                               │
└─────────────┴───────────────────────────────────────────────┘
```

### Page Header Pattern
- **Title**: Large, bold text
- **Description**: Optional grey text beneath title explaining the page
- **Primary action**: Top right of content area (e.g., "Create policy" button)
- **Secondary actions**: Text links with icons, positioned near primary action

```jsx
<div className="page-header">
  <div className="page-header__title-area">
    <h1>Page Title</h1>
    <p className="page-header__description">
      Optional description explaining what this page does.
    </p>
  </div>
  <div className="page-header__actions">
    <a href="#" className="secondary-action">
      <LightningIcon /> Access check
    </a>
    <Button variant="primary">Create Item</Button>
  </div>
</div>
```

---

## Navigation

### Left Navigation
- Collapsible sections with chevron icons
- **Active state**: Teal/blue background highlight
- Nested items indented under parent sections

### Breadcrumbs
Two variants:
1. **Trail**: "Policies > Penalty Box" - for showing hierarchy
2. **Back link**: "← Back to Apps" - for simple parent navigation

Both are part of the breadcrumb component - choose based on context.

### Tabs
- **Standard style**: Underline indicator on active tab
- Use tabs for switching between views on the same page
- Chips CAN act as tabs but standard tab component is preferred

```jsx
<Tabs value={activeTab} onChange={setActiveTab}>
  <Tab value="policy-list" label="Policy list" />
  <Tab value="assignments" label="Assignments" />
</Tabs>
```

---

## Data Display

### Tables/Lists

**Standard table structure:**
- Numbered rows (1, 2, 3...)
- Linked name column (teal text, clickable)
- Description column
- Status column with Label components
- Date column
- Overflow menu (...) for row actions

**Column headers**: Standard grey text, sortable where applicable

```jsx
<table className="data-table">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Description</th>
      <th>Status</th>
      <th>Last updated</th>
      <th></th> {/* overflow menu */}
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td><a href="#">Student Policy</a></td>
      <td>Default policy for students</td>
      <td><Label color="green">Assigned</Label></td>
      <td>10/22/25</td>
      <td><OverflowMenu /></td>
    </tr>
  </tbody>
</table>
```

### Empty State
**Standard pattern:**
1. Grey icon (contextual to the content type)
2. Simple phrase: "No data to display"
3. Suggested action: "Try selecting different criteria or check back once data has been recorded."

```jsx
<div className="empty-state">
  <SearchDocumentIcon className="empty-state__icon" />
  <h3>No data to display</h3>
  <p>Try selecting different criteria or check back once data has been recorded.</p>
</div>
```

### KPI/Stats Cards (Not in design system yet)
Pattern observed but not standardized:
- Large number prominently displayed
- Label beneath the number
- Time period in grey subtext
- Optional legend with colored squares

```jsx
<div className="kpi-card">
  <span className="kpi-card__value">0</span>
  <span className="kpi-card__label">Total incidents</span>
  <span className="kpi-card__period">over last 90 days</span>
  <div className="kpi-card__legend">
    <span className="legend-item legend-item--red">0 Critical</span>
    <span className="legend-item legend-item--orange">0 Degraded</span>
  </div>
</div>
```

---

## Forms & Controls

### Form Fields
- **Label** above input
- **"Optional"** indicator for non-required fields
- **Helper text**: Below field label for field-specific guidance

```jsx
<FormGroup>
  <FormLabel htmlFor="policy">Check access for <span className="optional">Optional</span></FormLabel>
  <Select id="policy" value={value} onChange={handleChange}>
    <Option value="esports">eSports - Middle</Option>
  </Select>
</FormGroup>
```

### Toggles
| State | Color |
|-------|-------|
| Off | Grey |
| On | Teal |
| Blocked (context-specific) | Red |

### Toggle with Progressive Disclosure
Parent toggle can reveal nested options when enabled:

```jsx
<div className="toggle-group">
  <Toggle
    label="Enable Lockouts"
    checked={enabled}
    onChange={setEnabled}
  />
  {enabled && (
    <div className="toggle-group__nested">
      <Checkbox label="Allow standard filter bypass..." />
      <div className="inline-field">
        <label>Restrict total screen access for</label>
        <NumberInput value={minutes} onChange={setMinutes} />
        <span>minutes</span>
      </div>
    </div>
  )}
</div>
```

### Category Toggles (Filter-specific)
Three-state toggles for allow/block:
| State | Color |
|-------|-------|
| Allow | Green |
| Block | Red |
| Not applicable | Teal with strikethrough |

### Number Input
Text field with stepper controls for numeric values.

---

## Filtering

### Standard Filter Bar
```
[ Last 7 days ▼ ] [ Add filter ▼ ] [ 🔍 ]     [ ⬇ ] [ ⊞ ]
     ^                  ^             ^          ^     ^
  Date filter    Filter dropdown  Expandable  Export  Column
  with calendar                    search      CSV    selector
```

### Filter Dropdown
- Opens from "Add filter" button
- Shows icons + filter option labels
- Icons are contextual but aim for consistency

```jsx
<FilterDropdown>
  <FilterOption icon={<SchoolIcon />} label="School" />
  <FilterOption icon={<GlobeIcon />} label="External IP address" />
  <FilterOption icon={<ProviderIcon />} label="Provider" />
</FilterDropdown>
```

### Expandable Search
- Magnifying glass icon button
- Expands into text field when clicked
- Collapses when empty and unfocused

---

## Status Indicators

### Label Component (Non-interactive)
Use for status display - NOT clickable:

| Status | Color |
|--------|-------|
| Assigned/Allowed | Green |
| Unassigned | Grey |
| Blocked/Error | Red |
| Warning | Orange |
| Operational | Grey |

```jsx
<Label color="green">Assigned</Label>
<Label color="grey">Unassigned</Label>
```

### Chip Component (Interactive)
Use when the user can interact with it (click, remove, select).

---

## Avatars

### Key Rules
- **Initials only** - no photos throughout products
- **Teal background** by default
- First letter of first name + first letter of last name

### Unassigned → Assigned Pattern
- **Unassigned**: Person icon (outline)
- **Assigned**: Avatar(s) with initials
- Multiple assignees: Stacked avatars

```jsx
// Unassigned
<PersonIcon className="collaborator-icon" />

// Single assignee
<Avatar initials="JD" />

// Multiple assignees
<AvatarGroup>
  <Avatar initials="JD" />
  <Avatar initials="SM" />
</AvatarGroup>
```

---

## Modals

### Standard Modal Structure
```
┌─────────────────────────────────────────┐
│ Modal Title                         [X] │
├─────────────────────────────────────────┤
│                                         │
│ Content                                 │
│                                         │
├─────────────────────────────────────────┤
│                    [ Cancel ] [ Submit ]│
└─────────────────────────────────────────┘
```

- **Header**: Title on left, X close button on right (title optional but common)
- **Backdrop**: 50% black overlay
- **Buttons**: Standard modal button pattern (secondary left, primary right)
- **Layout**: Single column is typical (multi-column is rare)

### Helper Text in Modals
- **Action-level**: Below button
- **Field-level**: Below field label

---

## Interactive Elements

### Clickable Rows/Items
- Chevron (>) indicates clickable/expandable
- Hover state highlights the row
- Both visual cues together signal interactivity

### Icon Buttons
Common icon button actions:
| Icon | Action |
|------|--------|
| Down arrow | Export/Download CSV |
| Grid/columns | Column selector |
| Person | Assign users |
| Lightning bolt | Quick action (context-specific) |

---

## Section Headers
- Grey text serves as section header
- Info icon (ⓘ) for contextual help on hover
- Groups related controls beneath

```jsx
<div className="section-header">
  <h6>Search</h6>
  <Tooltip content="Configure how search results are filtered">
    <InfoIcon />
  </Tooltip>
</div>
```

---

## Patterns NOT in Design System (But Used)

These patterns appear in products but aren't standardized yet:
- KPI/Stats cards with large numbers
- Charts and data visualizations
- Multi-column modals
- Master-detail layouts (list + detail panel)

When building these, follow the visual patterns observed but note they may need design review.

---

## Quick Reference

### Spacing
Use the 4px grid system defined in DESIGN_PRINCIPLES.md.

### Colors
- **Teal** (#007fa5): Primary actions, active states, links, avatars
- **Grey** (#68737d, #87929d): Secondary text, descriptions, inactive states
- **Green**: Success, allowed, assigned
- **Red**: Error, blocked, critical
- **Orange**: Warning, degraded

### Typography
- Page titles: Large, bold
- Section headers: Grey, smaller, sometimes uppercase
- Body text: Standard size
- Descriptions: Grey, beneath titles
- Links: Teal, underline on hover
