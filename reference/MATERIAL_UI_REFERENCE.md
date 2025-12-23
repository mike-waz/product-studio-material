# Material UI (MUI) - Quick Reference

> **Package**: `@mui/material` v6.x
> **Install**: `npm install @mui/material @emotion/react @emotion/styled`
> **Import**: `import { ComponentName } from '@mui/material'`

---

## Buttons

### Base Button
```jsx
import Button from '@mui/material/Button';

<Button variant="contained" color="primary" onClick={handleClick}>
  Label
</Button>
```

| Prop | Values | Default | Notes |
|------|--------|---------|-------|
| `variant` | `text`, `outlined`, `contained` | `text` | |
| `color` | `primary`, `secondary`, `success`, `error`, `info`, `warning`, `inherit` | `primary` | |
| `size` | `small`, `medium`, `large` | `medium` | |
| `startIcon` | `ReactNode` | - | Icon before text |
| `endIcon` | `ReactNode` | - | Icon after text |
| `disabled` | `boolean` | `false` | |
| `fullWidth` | `boolean` | `false` | Takes full container width |
| `href` | `string` | - | Renders as `<a>` tag |

### Icon Button
```jsx
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

<IconButton color="primary" aria-label="delete">
  <DeleteIcon />
</IconButton>
```

### Button Group
```jsx
import ButtonGroup from '@mui/material/ButtonGroup';

<ButtonGroup variant="contained">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
```

### Floating Action Button (FAB)
```jsx
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

<Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
```

### Visual Guide
| Design Shows | Use This |
|--------------|----------|
| Filled primary button | `<Button variant="contained">` |
| Outlined button | `<Button variant="outlined">` |
| Text-only button | `<Button variant="text">` |
| Red destructive button | `<Button variant="contained" color="error">` |
| Icon-only button | `<IconButton>` |
| Floating action button | `<Fab>` |

---

## Avatars

### Single Avatar
```jsx
import Avatar from '@mui/material/Avatar';

<Avatar>JD</Avatar>
<Avatar src="/path/to/image.jpg" alt="John Doe" />
<Avatar sx={{ bgcolor: 'primary.main' }}>JD</Avatar>
```

| Prop | Values | Default | Notes |
|------|--------|---------|-------|
| `src` | `string` | - | Image URL |
| `alt` | `string` | - | Alt text for image |
| `children` | `ReactNode` | - | Initials or icon |
| `variant` | `circular`, `rounded`, `square` | `circular` | |
| `sx` | `object` | - | Style overrides |

### Avatar Group (Stacked)
```jsx
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

<AvatarGroup max={4}>
  <Avatar alt="John" src="/john.jpg" />
  <Avatar alt="Jane" src="/jane.jpg" />
  <Avatar alt="Bob">B</Avatar>
  <Avatar alt="Alice">A</Avatar>
  <Avatar alt="Extra">E</Avatar>
</AvatarGroup>
```

| Prop | Values | Default | Notes |
|------|--------|---------|-------|
| `max` | `number` | `5` | Shows "+N" for overflow |
| `total` | `number` | - | Override total count |
| `spacing` | `small`, `medium` or number | `medium` | |

---

## Badges & Status Indicators

### Badge
```jsx
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

<Badge badgeContent={4} color="primary">
  <MailIcon />
</Badge>
<Badge badgeContent={100} max={99} color="error">
  <MailIcon />
</Badge>
```

| Prop | Values | Default | Notes |
|------|--------|---------|-------|
| `badgeContent` | `ReactNode` | - | Content in badge |
| `color` | `primary`, `secondary`, `error`, `info`, `success`, `warning`, `default` | `default` | |
| `max` | `number` | `99` | Max number before "99+" |
| `showZero` | `boolean` | `false` | Show when content is 0 |
| `invisible` | `boolean` | `false` | Hide the badge |
| `overlap` | `circular`, `rectangular` | `rectangular` | |
| `anchorOrigin` | `{ vertical, horizontal }` | top-right | Position |
| `variant` | `standard`, `dot` | `standard` | Dot shows no content |

### Chip
```jsx
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';

<Chip label="Basic" />
<Chip label="Clickable" onClick={handleClick} />
<Chip label="Deletable" onDelete={handleDelete} />
<Chip avatar={<Avatar>M</Avatar>} label="With Avatar" />
<Chip icon={<FaceIcon />} label="With Icon" />
<Chip label="Primary" color="primary" />
<Chip label="Outlined" variant="outlined" />
```

| Prop | Values | Default | Notes |
|------|--------|---------|-------|
| `label` | `ReactNode` | **required** | |
| `variant` | `filled`, `outlined` | `filled` | |
| `color` | `default`, `primary`, `secondary`, `error`, `info`, `success`, `warning` | `default` | |
| `size` | `small`, `medium` | `medium` | |
| `icon` | `ReactElement` | - | Left icon |
| `avatar` | `ReactElement` | - | Left avatar |
| `deleteIcon` | `ReactElement` | - | Custom delete icon |
| `onClick` | `function` | - | Makes clickable |
| `onDelete` | `function` | - | Shows delete icon |
| `disabled` | `boolean` | `false` | |
| `clickable` | `boolean` | - | Explicit clickable state |

### Visual Guide - Status Indicators
| Design Shows | Use This |
|--------------|----------|
| Notification count | `<Badge badgeContent={N}>` |
| Small dot indicator | `<Badge variant="dot">` |
| Pill with text label | `<Chip label="...">` |
| Pill with icon + text | `<Chip icon={<Icon />} label="...">` |
| Dismissible tag with X | `<Chip label="..." onDelete={fn}>` |
| Clickable filter chip | `<Chip label="..." onClick={fn}>` |

---

## Cards

### Basic Card
```jsx
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

<Card>
  <CardHeader
    avatar={<Avatar>R</Avatar>}
    action={<IconButton><MoreVertIcon /></IconButton>}
    title="Card Title"
    subheader="Subtitle"
  />
  <CardMedia
    component="img"
    height="194"
    image="/image.jpg"
    alt="Description"
  />
  <CardContent>
    <Typography variant="body2" color="text.secondary">
      Card content goes here
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">Action</Button>
  </CardActions>
</Card>
```

| Component | Purpose |
|-----------|---------|
| `Card` | Container with elevation |
| `CardHeader` | Title, subtitle, avatar, action |
| `CardMedia` | Image or video |
| `CardContent` | Main content area |
| `CardActions` | Action buttons |
| `CardActionArea` | Makes entire card clickable |

### Card Props
| Prop | Values | Default | Notes |
|------|--------|---------|-------|
| `elevation` | `0-24` | `1` | Shadow depth |
| `variant` | `elevation`, `outlined` | `elevation` | |
| `raised` | `boolean` | `false` | Higher elevation on hover |

---

## Form Inputs

### TextField
```jsx
import TextField from '@mui/material/TextField';

<TextField
  label="Email"
  variant="outlined"
  value={value}
  onChange={handleChange}
  helperText="We'll never share your email"
  error={hasError}
  required
  fullWidth
/>
```

| Prop | Values | Default | Notes |
|------|--------|---------|-------|
| `label` | `string` | - | |
| `variant` | `outlined`, `filled`, `standard` | `outlined` | |
| `value` | `string` | - | |
| `onChange` | `function` | - | |
| `helperText` | `string` | - | Helper/error text |
| `error` | `boolean` | `false` | Error state |
| `required` | `boolean` | `false` | |
| `disabled` | `boolean` | `false` | |
| `fullWidth` | `boolean` | `false` | |
| `multiline` | `boolean` | `false` | TextArea mode |
| `rows` | `number` | - | Fixed rows for multiline |
| `maxRows` | `number` | - | Max rows for multiline |
| `type` | `text`, `password`, `number`, `email`, etc. | `text` | |
| `InputProps` | `object` | - | Props for Input component |
| `inputProps` | `object` | - | Props for input element |

### Select
```jsx
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

<FormControl fullWidth>
  <InputLabel>Age</InputLabel>
  <Select value={age} label="Age" onChange={handleChange}>
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
```

### Autocomplete
```jsx
import Autocomplete from '@mui/material/Autocomplete';

<Autocomplete
  options={options}
  getOptionLabel={(option) => option.label}
  renderInput={(params) => <TextField {...params} label="Select" />}
  onChange={(event, value) => setValue(value)}
/>
```

### Checkbox
```jsx
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

<FormControlLabel
  control={<Checkbox checked={checked} onChange={handleChange} />}
  label="Label"
/>
```

### Radio Buttons
```jsx
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

<RadioGroup value={value} onChange={handleChange}>
  <FormControlLabel value="a" control={<Radio />} label="Option A" />
  <FormControlLabel value="b" control={<Radio />} label="Option B" />
</RadioGroup>
```

### Switch (Toggle)
```jsx
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

<FormControlLabel
  control={<Switch checked={checked} onChange={handleChange} />}
  label="Enable feature"
/>
```

| Prop | Values | Default | Notes |
|------|--------|---------|-------|
| `checked` | `boolean` | - | |
| `onChange` | `function` | - | |
| `color` | `primary`, `secondary`, `error`, `info`, `success`, `warning`, `default` | `primary` | |
| `disabled` | `boolean` | `false` | |
| `size` | `small`, `medium` | `medium` | |

### Slider
```jsx
import Slider from '@mui/material/Slider';

<Slider
  value={value}
  onChange={handleChange}
  min={0}
  max={100}
  marks
  valueLabelDisplay="auto"
/>
```

### Date/Time Pickers
```jsx
// Requires @mui/x-date-pickers
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

<LocalizationProvider dateAdapter={AdapterDayjs}>
  <DatePicker label="Date" value={date} onChange={setDate} />
  <TimePicker label="Time" value={time} onChange={setTime} />
</LocalizationProvider>
```

---

## Dialogs & Overlays

### Dialog (Modal)
```jsx
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';

<Dialog open={open} onClose={handleClose}>
  <DialogTitle>Dialog Title</DialogTitle>
  <DialogContent>
    <DialogContentText>
      Dialog content goes here.
    </DialogContentText>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>Cancel</Button>
    <Button onClick={handleConfirm} variant="contained">
      Confirm
    </Button>
  </DialogActions>
</Dialog>
```

| Prop | Values | Default | Notes |
|------|--------|---------|-------|
| `open` | `boolean` | **required** | |
| `onClose` | `function` | - | Called on backdrop click or escape |
| `fullWidth` | `boolean` | `false` | |
| `maxWidth` | `xs`, `sm`, `md`, `lg`, `xl`, `false` | `sm` | |
| `fullScreen` | `boolean` | `false` | |
| `scroll` | `body`, `paper` | `paper` | Scroll behavior |

### Drawer
```jsx
import Drawer from '@mui/material/Drawer';

<Drawer anchor="right" open={open} onClose={handleClose}>
  <Box sx={{ width: 250 }}>
    Drawer content
  </Box>
</Drawer>
```

| Prop | Values | Default | Notes |
|------|--------|---------|-------|
| `anchor` | `left`, `right`, `top`, `bottom` | `left` | |
| `open` | `boolean` | `false` | |
| `onClose` | `function` | - | |
| `variant` | `permanent`, `persistent`, `temporary` | `temporary` | |

### Menu
```jsx
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

<Button onClick={handleClick}>Open Menu</Button>
<Menu
  anchorEl={anchorEl}
  open={Boolean(anchorEl)}
  onClose={handleClose}
>
  <MenuItem onClick={handleClose}>Option 1</MenuItem>
  <MenuItem onClick={handleClose}>Option 2</MenuItem>
  <MenuItem onClick={handleClose}>Option 3</MenuItem>
</Menu>
```

### Tooltip
```jsx
import Tooltip from '@mui/material/Tooltip';

<Tooltip title="Tooltip text" placement="top">
  <Button>Hover me</Button>
</Tooltip>
```

| Prop | Values | Default | Notes |
|------|--------|---------|-------|
| `title` | `ReactNode` | **required** | |
| `placement` | `top`, `bottom`, `left`, `right` + `-start`, `-end` variants | `bottom` | |
| `arrow` | `boolean` | `false` | Show arrow |
| `enterDelay` | `number` | `100` | ms before showing |
| `leaveDelay` | `number` | `0` | ms before hiding |

### Popover
```jsx
import Popover from '@mui/material/Popover';

<Popover
  open={open}
  anchorEl={anchorEl}
  onClose={handleClose}
  anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
>
  <Typography sx={{ p: 2 }}>Popover content</Typography>
</Popover>
```

---

## Feedback & Notifications

### Alert
```jsx
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

<Alert severity="success">Success message</Alert>
<Alert severity="info">Info message</Alert>
<Alert severity="warning">Warning message</Alert>
<Alert severity="error">Error message</Alert>

<Alert severity="success" onClose={() => {}}>
  <AlertTitle>Success</AlertTitle>
  This is a success alert with a title.
</Alert>
```

| Prop | Values | Default | Notes |
|------|--------|---------|-------|
| `severity` | `error`, `warning`, `info`, `success` | `success` | |
| `variant` | `standard`, `filled`, `outlined` | `standard` | |
| `onClose` | `function` | - | Shows close button |
| `icon` | `ReactNode` or `false` | - | Custom or no icon |
| `action` | `ReactNode` | - | Custom action element |

### Snackbar
```jsx
import Snackbar from '@mui/material/Snackbar';

<Snackbar
  open={open}
  autoHideDuration={6000}
  onClose={handleClose}
  message="Note archived"
  action={<Button color="secondary" size="small">UNDO</Button>}
/>
```

### Progress Indicators
```jsx
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';

<CircularProgress />
<CircularProgress variant="determinate" value={75} />
<LinearProgress />
<LinearProgress variant="determinate" value={75} />
```

### Skeleton (Loading Placeholder)
```jsx
import Skeleton from '@mui/material/Skeleton';

<Skeleton variant="text" />
<Skeleton variant="circular" width={40} height={40} />
<Skeleton variant="rectangular" width={210} height={118} />
<Skeleton variant="rounded" width={210} height={60} />
```

---

## Navigation

### Tabs
```jsx
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

<Tabs value={value} onChange={handleChange}>
  <Tab label="Overview" />
  <Tab label="Details" />
  <Tab label="Settings" />
</Tabs>
```

### Breadcrumbs
```jsx
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

<Breadcrumbs>
  <Link href="/">Home</Link>
  <Link href="/users">Users</Link>
  <Typography color="text.primary">John Doe</Typography>
</Breadcrumbs>
```

### Pagination
```jsx
import Pagination from '@mui/material/Pagination';

<Pagination count={10} page={page} onChange={handleChange} />
```

### Bottom Navigation
```jsx
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

<BottomNavigation value={value} onChange={handleChange}>
  <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
  <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
  <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
</BottomNavigation>
```

### Stepper
```jsx
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

<Stepper activeStep={activeStep}>
  <Step><StepLabel>Step 1</StepLabel></Step>
  <Step><StepLabel>Step 2</StepLabel></Step>
  <Step><StepLabel>Step 3</StepLabel></Step>
</Stepper>
```

---

## Layout

### Box
```jsx
import Box from '@mui/material/Box';

<Box sx={{ display: 'flex', gap: 2, p: 2, bgcolor: 'background.paper' }}>
  Content
</Box>
```

### Container
```jsx
import Container from '@mui/material/Container';

<Container maxWidth="lg">
  Centered content with max width
</Container>
```

### Grid
```jsx
import Grid from '@mui/material/Grid';

<Grid container spacing={2}>
  <Grid item xs={12} md={6}>
    Half width on medium+
  </Grid>
  <Grid item xs={12} md={6}>
    Half width on medium+
  </Grid>
</Grid>
```

### Stack
```jsx
import Stack from '@mui/material/Stack';

<Stack direction="row" spacing={2} alignItems="center">
  <Item>One</Item>
  <Item>Two</Item>
  <Item>Three</Item>
</Stack>
```

### Paper
```jsx
import Paper from '@mui/material/Paper';

<Paper elevation={3} sx={{ p: 2 }}>
  Elevated surface
</Paper>
```

### Divider
```jsx
import Divider from '@mui/material/Divider';

<Divider />
<Divider variant="middle" />
<Divider orientation="vertical" flexItem />
```

---

## Data Display

### List
```jsx
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';

<List>
  <ListItem>
    <ListItemIcon><InboxIcon /></ListItemIcon>
    <ListItemText primary="Inbox" secondary="Secondary text" />
  </ListItem>
  <ListItemButton onClick={handleClick}>
    <ListItemAvatar><Avatar>A</Avatar></ListItemAvatar>
    <ListItemText primary="Clickable item" />
  </ListItemButton>
</List>
```

### Table
```jsx
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

<TableContainer component={Paper}>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell align="right">Value</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow key={row.name}>
          <TableCell>{row.name}</TableCell>
          <TableCell align="right">{row.value}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
```

### Typography
```jsx
import Typography from '@mui/material/Typography';

<Typography variant="h1">Heading 1</Typography>
<Typography variant="h2">Heading 2</Typography>
<Typography variant="h3">Heading 3</Typography>
<Typography variant="h4">Heading 4</Typography>
<Typography variant="h5">Heading 5</Typography>
<Typography variant="h6">Heading 6</Typography>
<Typography variant="subtitle1">Subtitle 1</Typography>
<Typography variant="subtitle2">Subtitle 2</Typography>
<Typography variant="body1">Body 1 (default)</Typography>
<Typography variant="body2">Body 2</Typography>
<Typography variant="caption">Caption</Typography>
<Typography variant="overline">Overline</Typography>
```

---

## Icons

### Common Icons
```jsx
import {
  // Actions
  Check as CheckIcon,
  Close as CloseIcon,
  Add as AddIcon,
  Remove as RemoveIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Search as SearchIcon,
  FilterList as FilterListIcon,
  Refresh as RefreshIcon,
  Download as DownloadIcon,
  Upload as UploadIcon,
  ContentCopy as CopyIcon,
  Share as ShareIcon,
  Save as SaveIcon,

  // Navigation
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
  ArrowUpward as ArrowUpwardIcon,
  ArrowDownward as ArrowDownwardIcon,
  OpenInNew as OpenInNewIcon,
  Home as HomeIcon,
  Menu as MenuIcon,

  // Status
  Info as InfoIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
  CheckCircle as CheckCircleIcon,
  Help as HelpIcon,
  AutoAwesome as AutoAwesomeIcon,  // AI/sparkles

  // Objects
  CalendarToday as CalendarIcon,
  Schedule as ClockIcon,
  Mail as MailIcon,
  Person as PersonIcon,
  PersonAdd as PersonAddIcon,
  Group as GroupIcon,
  Settings as SettingsIcon,
  Lock as LockIcon,
  LockOpen as LockOpenIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  Book as BookIcon,
  Notifications as NotificationsIcon,
  NotificationsOff as NotificationsOffIcon,
  Pause as PauseIcon,
  Stop as StopIcon,
  School as SchoolIcon,
  Language as LanguageIcon,
  Wifi as WifiIcon,
  Computer as ComputerIcon,
  Smartphone as SmartphoneIcon,
  Shield as ShieldIcon,
  Block as BlockIcon,
  Policy as PolicyIcon,

  // More
  MoreHoriz as MoreHorizIcon,
  MoreVert as MoreVertIcon,
  DragIndicator as DragIndicatorIcon,
} from '@mui/icons-material';
```

### Usage
```jsx
<Button startIcon={<AddIcon />}>Add Item</Button>
<Chip icon={<AutoAwesomeIcon />} label="AI" />
<IconButton><MoreHorizIcon /></IconButton>
```

---

## Theming & Styling

### sx Prop (Inline Styles)
```jsx
<Box
  sx={{
    p: 2,           // padding: 16px (theme.spacing(2))
    m: 1,           // margin: 8px
    mt: 2,          // marginTop: 16px
    display: 'flex',
    gap: 2,         // gap: 16px
    bgcolor: 'primary.main',
    color: 'white',
    borderRadius: 1,
    '&:hover': {
      bgcolor: 'primary.dark',
    },
  }}
>
```

### Common sx Shortcuts
| Shorthand | CSS Property |
|-----------|-------------|
| `m`, `mt`, `mr`, `mb`, `ml`, `mx`, `my` | margin |
| `p`, `pt`, `pr`, `pb`, `pl`, `px`, `py` | padding |
| `bgcolor` | backgroundColor |
| `color` | color |
| `display` | display |
| `gap` | gap |
| `flexGrow`, `flexShrink` | flex properties |

### Theme Colors
```jsx
// Access theme colors in sx
bgcolor: 'primary.main'
bgcolor: 'primary.light'
bgcolor: 'primary.dark'
bgcolor: 'secondary.main'
bgcolor: 'error.main'
bgcolor: 'warning.main'
bgcolor: 'info.main'
bgcolor: 'success.main'
bgcolor: 'text.primary'
bgcolor: 'text.secondary'
bgcolor: 'text.disabled'
bgcolor: 'background.paper'
bgcolor: 'background.default'
bgcolor: 'grey.100' // grey.50 through grey.900
```

---

## Quick Decision Guide

| When you see this in a design... | Use this component |
|----------------------------------|-------------------|
| Filled primary button | `<Button variant="contained">` |
| Outlined button | `<Button variant="outlined">` |
| Text button | `<Button variant="text">` |
| Red/destructive button | `<Button color="error">` |
| Circle with initials | `<Avatar>XX</Avatar>` |
| Stacked circles (users) | `<AvatarGroup>` |
| Notification count | `<Badge badgeContent={N}>` |
| Text label in pill shape | `<Chip label="...">` |
| Pill with icon + text | `<Chip icon={...} label="...">` |
| On/off switch | `<Switch>` |
| Popup dialog box | `<Dialog>` |
| Slide-in panel from side | `<Drawer>` |
| Dropdown menu | `<Menu>` with `<MenuItem>` |
| Hover info popup | `<Tooltip>` |
| Inline alert/notification | `<Alert severity="...">` |
| Toast notification | `<Snackbar>` |
| Loading spinner | `<CircularProgress>` |
| Loading bar | `<LinearProgress>` |
| Text field with label | `<TextField>` |
| Multi-line text field | `<TextField multiline>` |
| Checkmark box | `<Checkbox>` |
| Radio option | `<Radio>` |
| Elevated container | `<Paper>` or `<Card>` |

---

## Gotchas & Tips

1. **Wrap Select in FormControl** - Select needs FormControl and InputLabel to display properly
2. **Dialog needs open prop** - Always control Dialog with open/onClose state
3. **Use TextField for inputs** - Don't use raw Input unless you need complete control
4. **Menu needs anchorEl** - Menu positions relative to its anchor element
5. **Import from @mui/material** - Not @material-ui (old package name)
6. **Use sx for one-off styles** - Avoid CSS files for component-specific styling
7. **Button variants matter** - contained = filled, outlined = border, text = minimal
8. **Icons are separate package** - Import from @mui/icons-material
9. **ThemeProvider is required** - Wrap app in ThemeProvider for theming to work
10. **CssBaseline normalizes styles** - Include it for consistent baseline styles
