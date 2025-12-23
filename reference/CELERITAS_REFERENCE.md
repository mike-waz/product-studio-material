# Celeritas Design System - Quick Reference

> **Package**: `design_system` v2.8.6
> **Install**: `github:Lightspeed-Systems/design_system`
> **Import**: `import { ComponentName } from 'design_system'`

---

## Buttons

### Base Button
```jsx
import { Button } from 'design_system';

<Button variant="primary" size="large" onClick={handleClick}>
  Label
</Button>
```

| Prop | Values | Default | Notes |
|------|--------|---------|-------|
| `variant` | `primary`, `secondary`, `tertiary`, `text`, `danger`, `warning`, `success`, `link`, `spotlight`, `info`, `help` | `primary` | |
| `size` | `large`, `medium`, `small` | `large` | |
| `icon` | `ReactNode` | - | Icon element |
| `iconSide` | `left`, `right` | `left` | |
| `iconLeft` | `ReactNode` | - | Overrides icon/iconSide |
| `iconRight` | `ReactNode` | - | For icons on both sides |
| `loading` | `boolean` | `false` | Shows spinner |
| `disabled` | `boolean` | `false` | |
| `selected` | `boolean` | `false` | Toggle-style selection |
| `href` | `string` | - | Renders as `<a>` tag |
| `type` | `button`, `submit` | `button` | |

### Variant Shortcuts
```jsx
import {
  SecondaryButton,
  TertiaryButton,
  DangerButton,
  WarningButton,
  SuccessButton,
  LinkButton,
  SpotlightButton,
  InfoButton,
  TextButton,
  IconButton
} from 'design_system';
```

### Visual Guide
| Design Shows | Use This |
|--------------|----------|
| Teal filled button (primary action) | `<Button>` or `<Button variant="primary">` |
| White button with teal border | `<Button variant="secondary">` |
| Text-only button, no background | `<Button variant="tertiary">` or `<TextButton>` |
| Red destructive button | `<Button variant="danger">` or `<DangerButton>` |
| Orange warning button | `<Button variant="warning">` |
| Green success button | `<Button variant="success">` |
| Underlined link style | `<Button variant="link">` or `<LinkButton>` |
| Icon-only button | `<IconButton icon={<SomeIcon />} />` |

---

## Avatars

### Single Avatar
```jsx
import { Avatar } from 'design_system';

<Avatar initials="JD" size="medium" />
<Avatar image="https://..." size="large" />
<Avatar type="count" count={5} />  // Shows "+5"
```

| Prop | Values | Default | Notes |
|------|--------|---------|-------|
| `initials` | `string` (2 chars max) | - | |
| `image` | `string` or `ReactElement` | - | |
| `size` | `tiny`, `xsmall`, `small`, `medium`, `large`, `xlarge` | `medium` | |
| `type` | `people`, `service`, `count` | `people` | |
| `count` | `number` | - | For type="count" |
| `loading` | `boolean` | `false` | |
| `onClick` | `function` | - | Makes clickable |
| `fallbackToAddUser` | `boolean` | `false` | Shows + icon when no initials/image |

### Avatar Group (Stacked)
```jsx
import { AvatarGroup } from 'design_system';

<AvatarGroup
  items={[
    { id: '1', name: 'John Doe', initials: 'JD' },
    { id: '2', name: 'Jane Smith', initials: 'JS', src: 'https://...' },
    { id: '3', name: 'Bob Wilson', initials: 'BW' },
  ]}
  max={5}
  size="small"
  variant="user"
/>
```

| Prop | Values | Default | Notes |
|------|--------|---------|-------|
| `items` | `AvatarItem[]` | required | `{ id, name, initials?, src?, disabled?, loading?, selected? }` |
| `max` | `number` | `5` | Shows "+N" for overflow |
| `size` | `tiny`, `xsmall`, `small`, `medium`, `large`, `xlarge` | - | |
| `variant` | `user`, `team` | - | |
| `onClick` | `(id: string) => void` | - | |

---

## Badges & Status Indicators

### Badge (Numeric Only)
```jsx
import { Badge } from 'design_system';

<Badge color="teal">11</Badge>
<Badge color="green" size="small">5</Badge>
```

| Prop | Values | Default | Notes |
|------|--------|---------|-------|
| `children` | `number` or numeric `string` | required | **Must be a number** |
| `color` | `cranberry`, `raspberry`, `clay`, `green`, `opal`, `denim`, `gray`, `teal`, `skyblue`, `white`, `lightgray` | `teal` | |
| `size` | `medium`, `small` | `medium` | |

### Chip (Text Labels/Tags)
```jsx
import { Chip } from 'design_system';

<Chip label="Active" />
<Chip label="Filter" icon={<FilterIcon />} />
<Chip label="Removable" onClose={handleRemove} />
<Chip label="Selected" selected onClick={handleClick} />
```

| Prop | Values | Default | Notes |
|------|--------|---------|-------|
| `label` | `string` | **required** | |
| `variant` | `primary`, `secondary` | `primary` | |
| `size` | `tiny`, `small`, `medium` | `medium` | |
| `icon` | `ReactElement` | - | Left icon |
| `statusIcon` | `ReactElement` | - | Status indicator |
| `selected` | `boolean` | `false` | |
| `disabled` | `boolean` | `false` | |
| `loading` | `boolean` | `false` | |
| `bold` | `boolean` | `false` | |
| `onClick` | `function` | - | Makes clickable |
| `onClose` | `function` | - | Shows X button |

### Visual Guide - Status Indicators
| Design Shows | Use This |
|--------------|----------|
| Small numeric count (e.g., "11", "5") | `<Badge>` |
| Pill with text label | `<Chip label="...">` |
| Pill with icon + text | `<Chip label="..." icon={<Icon />}>` |
| Dismissible tag with X | `<Chip label="..." onClose={fn}>` |
| Colored pill/tag (no number) | `<Chip>` with custom className for color |

---

## Cards

### Basic Card
```jsx
import { Card } from 'design_system';

<Card
  title="Card Title"
  subtitle="Optional subtitle"
  depth="raised"
  icon={<SomeIcon />}
  button={<Button size="small">Action</Button>}
>
  Card content goes here
</Card>
```

| Prop | Values | Default | Notes |
|------|--------|---------|-------|
| `title` | `string` | - | |
| `subtitle` | `string` | - | |
| `depth` | `flat`, `raised`, `floating` | `flat` | Shadow level |
| `icon` | `ReactElement` | - | |
| `button` | `ReactElement` | - | |
| `children` | `string` | - | Content text |
| `className` | `string` | - | |

**Note**: For complex card layouts (like Student Card, Class Card), you'll likely compose your own using the design system primitives rather than the basic Card component.

---

## Form Inputs

### TextInput
```jsx
import { TextInput } from 'design_system';

<TextInput
  label="Email"
  hint="We'll never share your email"
  value={value}
  onChange={handleChange}
  errorMessage="Invalid email"
  icon={<MailIcon />}
  maxCharCount={100}
/>
```

| Prop | Values | Default | Notes |
|------|--------|---------|-------|
| `label` | `string` | - | |
| `hint` | `string` | - | Helper text |
| `value` | `string` | - | |
| `errorMessage` | `string` | - | Shows error state |
| `icon` | `ReactNode` | - | |
| `loading` | `boolean` | `false` | Shows skeleton |
| `maxCharCount` | `number` | - | Shows counter |
| `closeIconHandler` | `function` | - | Shows clear X |

### Other Inputs
```jsx
import {
  TextArea,      // Multi-line text
  PasswordInput, // Password with show/hide
  QuietInput,    // Minimal styling
  RangeInput,    // Slider
  Select,        // Single select dropdown
  MultiSelect,   // Multi-select
  Checkbox,
  CheckboxGroup,
  RadioButton,
  RadioGroup,
  Toggle,
  DatePicker,
  DateRangePicker,
  TimePicker
} from 'design_system';
```

### Toggle
```jsx
import { Toggle } from 'design_system';

<Toggle
  version={2}
  checked={isOn}
  onChange={setIsOn}
  type="default"  // or "access" for allowed/blocked
  layout="horizontal"  // or "vertical"
  small
/>
```

| Prop | Values | Default | Notes |
|------|--------|---------|-------|
| `version` | `1`, `2` | `1` | Use `2` for latest |
| `checked` | `boolean` | - | |
| `onChange` | `function` | - | |
| `type` | `default`, `access` | `default` | "on/off" vs "allowed/blocked" |
| `layout` | `horizontal`, `vertical` | `vertical` | |
| `small` | `boolean` | `false` | |
| `disabled` | `boolean` | `false` | |
| `loading` | `boolean` | `false` | |
| `indeterminate` | `boolean` | `false` | |
| `labelHidden` | `boolean` | `false` | |
| `iconsHidden` | `boolean` | `false` | |

---

## Modals & Overlays

### Modal
```jsx
import { Modal } from 'design_system';

<Modal
  open={isOpen}
  setOpen={setIsOpen}  // OR handleClose={handleClose}
  title="Modal Title"
  subtitle="Optional subtitle"
  heading="Header text"
  type="dialog"  // or "drawer", "full_screen"
  primaryAction={{
    label: 'Confirm',
    onClick: handleConfirm,
    variant: 'primary'
  }}
  secondaryAction={{
    label: 'Cancel',
    onClick: handleCancel
  }}
>
  Modal content here
</Modal>
```

| Prop | Values | Default | Notes |
|------|--------|---------|-------|
| `open` | `boolean` | **required** | |
| `setOpen` | `function` | - | Use this OR handleClose |
| `handleClose` | `function` | - | Use this OR setOpen |
| `title` | `string` | - | Large title in content |
| `subtitle` | `string` | - | Below title |
| `heading` | `string` or `ReactNode` | - | Header bar text |
| `type` | `dialog`, `drawer`, `full_screen` | `dialog` | |
| `mobileType` | `dialog`, `drawer`, `full_screen` | `dialog` | Mobile override |
| `primaryAction` | `{ label, onClick, variant?, loading?, disabled? }` | - | |
| `secondaryAction` | `{ label, onClick, ... }` | - | |
| `auxiliaryAction` | `{ label, onClick, ... }` | - | Danger/destructive action |
| `footer` | `ReactNode` | - | Custom footer content |

### Dropdown
```jsx
import { Dropdown } from 'design_system';

<div style={{ position: 'relative' }}>
  <button ref={triggerRef} onClick={() => setOpen(!open)}>
    Open Menu
  </button>
  <Dropdown
    open={open}
    handleClose={() => setOpen(false)}
    align="left"  // or "right"
    vAlign="top"  // or "bottom"
    portaled  // renders to body
    triggerRef={triggerRef}  // required if portaled
  >
    <DropdownItem>Option 1</DropdownItem>
    <DropdownItem>Option 2</DropdownItem>
  </Dropdown>
</div>
```

### Tooltip
```jsx
import { Tooltip } from 'design_system';

<Tooltip
  version={2}
  content="Tooltip text here"
  position="top"  // top, bottom, left, right
  theme="dark"    // dark, light
>
  <Button>Hover me</Button>
</Tooltip>
```

| Prop | Values | Default | Notes |
|------|--------|---------|-------|
| `version` | `1`, `2` | `1` | Use `2` |
| `content` | `string` or `ReactNode` | **required** | |
| `position` | `top`, `bottom`, `left`, `right` | `top` | |
| `align` | `start`, `center`, `end` | `center` | |
| `theme` | `dark`, `light` | `dark` | |
| `size` | `default`, `small` | `default` | |
| `delayDuration` | `number` | `0` | ms before showing |
| `disabled` | `boolean` | `false` | |

---

## Feedback & Notifications

### Callout / Notification (Inline)
```jsx
import { Callout, Notification } from 'design_system';

<Callout
  title="Information"
  description="This is an informational message"
  variant="info"
  action={() => console.log('clicked')}
  actionLabel="Learn more"
  dismissible
/>
```

| Prop | Values | Default | Notes |
|------|--------|---------|-------|
| `title` | `string` | **required** | |
| `description` | `string` or `ReactNode` | **required** | |
| `variant` | `info`, `success`, `warning`, `danger`, `help`, `spotlight` | `info` | |
| `action` | `function` | - | |
| `actionLabel` | `string` | `'action'` | |
| `actionPosition` | `left`, `right` | `right` | |
| `dismissible` | `boolean` | `true` | Shows X button |

### Toast
```jsx
import { Toast, ToastProvider, useToast } from 'design_system';

// Wrap app in provider
<ToastProvider>
  <App />
</ToastProvider>

// Use hook to show toasts
const { showToast } = useToast();
showToast({ title: 'Success!', variant: 'success' });
```

### Banner
```jsx
import { Banner } from 'design_system';

<Banner variant="warning" title="System maintenance scheduled" />
```

---

## Loaders

```jsx
import { SpinnerLoader, DotsLoader, CircleLoader, ProgressBar } from 'design_system';

<SpinnerLoader version={2} />
<DotsLoader />
<CircleLoader />
<ProgressBar value={65} max={100} />
```

---

## Navigation

### Tabs
```jsx
import { Tabs, Tab } from 'design_system';

<Tabs>
  <Tab label="Overview" active onClick={() => setTab('overview')} />
  <Tab label="Details" onClick={() => setTab('details')} />
  <Tab label="Settings" onClick={() => setTab('settings')} />
</Tabs>
```

### Breadcrumbs
```jsx
import { Breadcrumbs, Breadcrumb } from 'design_system';

<Breadcrumbs>
  <Breadcrumb href="/">Home</Breadcrumb>
  <Breadcrumb href="/users">Users</Breadcrumb>
  <Breadcrumb>John Doe</Breadcrumb>
</Breadcrumbs>
```

### Pagination
```jsx
import { Pagination } from 'design_system';

<Pagination
  currentPage={1}
  totalPages={10}
  onPageChange={handlePageChange}
/>
```

---

## Icons

### Common Icons
```jsx
import {
  // Actions
  CheckmarkIcon,
  CloseIcon,
  PlusIcon,
  MinusIcon,
  EditIcon,
  TrashIcon,
  SearchIcon,
  FilterIcon,
  RefreshIcon,
  DownloadIcon,
  UploadIcon,
  CopyIcon,
  DuplicateIcon,
  ShareIcon,
  ExportIcon,
  ImportIcon,

  // Navigation
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ExternalLinkIcon,
  HomeIcon,
  HamburgerIcon,

  // Status
  InfoIcon,
  WarningIcon,
  DangerIcon,
  SuccessIcon,
  HelpIcon,
  SparklesIcon,       // AI indicator
  CautionIcon,

  // Objects
  CalendarIcon,
  ClockIcon,
  MailIcon,
  UserNeutralIcon,
  UserAddIcon,
  GroupsIcon,
  CogIcon,
  LockIcon,
  UnlockIcon,
  ViewIcon,
  ViewNoIcon,
  BookOpenIcon,       // Good for focus/study
  BellIcon,
  BellAlarmIcon,
  BellSnoozeIcon,     // Good for bedtime/sleep
  PauseIcon,
  StopIcon,
  SchoolIcon,
  DistrictIcon,
  WorldIcon,
  WifiIcon,
  LaptopIcon,
  MonitorIcon,
  SmartPhoneIcon,
  ShieldCheckIcon,
  ShieldBlockIcon,
  PoliciesIcon,

  // More
  MoreHorizontalIcon,
  MoreVerticalIcon,
  DragHandleIcon,
} from 'design_system';
```

### Schedule-Related Icons
For schedule/time-based features:
- `BookOpenIcon` - Focus time, homework, study
- `BellSnoozeIcon` - Bedtime, sleep schedules
- `CogIcon` - Custom/settings
- `ClockIcon` - Time display
- `CalendarIcon` - Date/schedule
- `PauseIcon` - Pause internet
- `ShieldBlockIcon` - Blocking
- `LockIcon` / `UnlockIcon` - Access control

### Usage
```jsx
<Button icon={<PlusIcon />}>Add Item</Button>
<Chip label="AI" icon={<SparklesIcon />} />
<IconButton icon={<MoreHorizontalIcon />} />
```

---

## Constants Reference

```jsx
import {
  BUTTON_SIZES,      // { LARGE, MEDIUM, SMALL }
  BUTTON_VARIANTS,   // { PRIMARY, SECONDARY, TERTIARY, TEXT, DANGER, WARNING, SUCCESS, LINK, SPOTLIGHT, INFO, HELP }
  BADGE_COLORS,      // { CRANBERRY, RASPBERRY, CLAY, GREEN, OPAL, DENIM, GRAY, TEAL, SKY_BLUE, WHITE, LIGHTGRAY }
  CHIP_SIZES,        // { TINY, SMALL, MEDIUM }
  CHIP_VARIANTS,     // { PRIMARY, SECONDARY }
  AVATAR_SIZES,      // { TINY, XSMALL, SMALL, MEDIUM, LARGE, XLARGE }
  AVATAR_TYPES,      // { COUNT, PEOPLE, SERVICE }
  CARD_DEPTHS,       // { FLAT, RAISED, FLOATING }
  MODAL_TYPES,       // { DIALOG, DRAWER, FULL_SCREEN }
  NOTIFICATION_STATES, // { DANGER, HELP, INFO, SPOTLIGHT, SUCCESS, WARNING }
  TOGGLE_TYPES,      // { DEFAULT, ACCESS }
  TOGGLE_LAYOUTS,    // { HORIZONTAL, VERTICAL }
  TOOLTIP_POSITIONS, // { TOP, BOTTOM, LEFT, RIGHT }
  TOOLTIP_SIZES,     // { DEFAULT, SMALL }
  THEMES,            // { DARK, LIGHT }
} from 'design_system';
```

---

## Quick Decision Guide

| When you see this in Figma... | Use this component |
|-------------------------------|-------------------|
| Teal filled button | `<Button variant="primary">` |
| White button with border | `<Button variant="secondary">` |
| Red/destructive button | `<Button variant="danger">` |
| Circle with initials | `<Avatar initials="XX">` |
| Stacked circles (users) | `<AvatarGroup items={...}>` |
| Small number in colored pill | `<Badge color="...">` |
| Text label in pill shape | `<Chip label="...">` |
| Pill with icon + text | `<Chip label="..." icon={...}>` |
| On/off switch | `<Toggle version={2}>` |
| Popup dialog box | `<Modal type="dialog">` |
| Slide-in panel from right | `<Modal type="drawer">` |
| Dropdown menu | `<Dropdown>` with `<DropdownItem>` |
| Hover info popup | `<Tooltip content="...">` |
| Inline alert/notification | `<Callout variant="...">` |
| Loading spinner | `<SpinnerLoader version={2}>` |
| Text field with label | `<TextInput label="...">` |
| Multi-line text field | `<TextArea>` |
| Checkmark box | `<Checkbox>` |
| Radio option | `<RadioButton>` |

---

## Component Versioning

Many components have V1 and V2 versions. **Always use V2** (or pass `version={2}`) for the latest styling:

```jsx
// These components support version prop - use version={2}
<Toggle version={2} />
<Tooltip version={2} />
<SpinnerLoader version={2} />
<Button version={2} />  // Usually default
```

---

## Gotchas & Tips

1. **Badge only accepts numbers** - Use `<Chip>` for text labels
2. **Chip requires `label` prop** - Will throw error without it
3. **Avatar initials max 2 chars** - Will truncate and warn in console
4. **Modal needs `setOpen` OR `handleClose`** - Not both, not neither
5. **Portaled Dropdown needs `triggerRef`** - Required for positioning
6. **Use `version={2}`** - For Toggle, Tooltip, SpinnerLoader
7. **Icons are components** - Import and use as `<IconName />`, not strings
