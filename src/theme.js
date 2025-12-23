import { createTheme } from '@mui/material/styles';

/**
 * Lightspeed-inspired MUI Theme
 *
 * This theme mirrors Lightspeed's visual language (from Celeritas design system)
 * but implemented using Material UI's theming system.
 *
 * Key characteristics:
 * - Teal primary color (#007fa5)
 * - 4px base spacing grid
 * - Roboto font family
 * - Subtle shadows and rounded corners
 */

// Lightspeed Color Palette
const lightspeedColors = {
  // Primary - Teal
  teal: {
    50: '#f2f9fb',
    100: '#e6f2f6',
    200: '#a6d2e0',
    600: '#4d9cc0',
    700: '#007fa5',  // Primary brand color
    800: '#006b8b',  // Hover
    900: '#005169',  // Active/pressed
  },

  // Greys
  grey: {
    50: '#fafafa',   // Page background
    100: '#f8f8f9',  // Card backgrounds
    200: '#e9ebed',  // Borders, dividers
    300: '#d8dcde',  // Disabled backgrounds
    400: '#c2c8cc',  // Disabled text
    500: '#87929d',  // Secondary text
    600: '#68737d',  // Body text (secondary)
    700: '#49545c',  // Body text
    800: '#2f3941',  // Primary text
  },

  // Semantic colors
  success: '#15655c',
  successBg: '#f5fbef',
  warning: '#b14300',
  warningBg: '#fff5ea',
  error: '#d32f2f',
  errorBg: '#fff1f3',
  spotlight: '#5c3584',  // AI/special features
  spotlightBg: '#faf7fc',

  // Extended palette
  green: { 600: '#96c560', 700: '#62a600', 800: '#4c7800' },
  gold: { 600: '#fd9a30', 700: '#ed6c02', 800: '#b5430f' },
  cranberry: { 600: '#f5605d', 700: '#d32f2f', 800: '#a11819' },
  purple: { 600: '#b69ad2', 700: '#9266ba', 800: '#5c3584' },
  blue: { 600: '#3ab2ef', 700: '#0288d1', 800: '#0461a6' },
  aqua: { 600: '#00c9bc', 700: '#00a5a2', 800: '#007b79' },
};

// Create the theme
const lightspeedTheme = createTheme({
  // Color Palette
  palette: {
    primary: {
      main: lightspeedColors.teal[700],      // #007fa5
      light: lightspeedColors.teal[600],     // #4d9cc0
      dark: lightspeedColors.teal[800],      // #006b8b
      contrastText: '#ffffff',
    },
    secondary: {
      main: lightspeedColors.purple[700],    // #9266ba
      light: lightspeedColors.purple[600],   // #b69ad2
      dark: lightspeedColors.purple[800],    // #5c3584
      contrastText: '#ffffff',
    },
    error: {
      main: lightspeedColors.error,          // #d32f2f
      light: lightspeedColors.cranberry[600],
      dark: lightspeedColors.cranberry[800],
      contrastText: '#ffffff',
    },
    warning: {
      main: lightspeedColors.warning,        // #b14300
      light: lightspeedColors.gold[600],
      dark: lightspeedColors.gold[800],
      contrastText: '#ffffff',
    },
    info: {
      main: lightspeedColors.blue[700],      // #0288d1
      light: lightspeedColors.blue[600],
      dark: lightspeedColors.blue[800],
      contrastText: '#ffffff',
    },
    success: {
      main: lightspeedColors.success,        // #15655c
      light: lightspeedColors.green[600],
      dark: lightspeedColors.green[800],
      contrastText: '#ffffff',
    },
    grey: lightspeedColors.grey,
    text: {
      primary: lightspeedColors.grey[800],   // #2f3941
      secondary: lightspeedColors.grey[600], // #68737d
      disabled: lightspeedColors.grey[400],  // #c2c8cc
    },
    background: {
      default: lightspeedColors.grey[50],    // #fafafa
      paper: '#ffffff',
    },
    divider: lightspeedColors.grey[200],     // #e9ebed
    action: {
      active: lightspeedColors.teal[700],
      hover: 'rgba(0, 127, 165, 0.08)',       // teal with 8% opacity
      selected: 'rgba(0, 127, 165, 0.12)',
      disabled: lightspeedColors.grey[400],
      disabledBackground: lightspeedColors.grey[300],
    },
  },

  // Typography
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",

    // Headings - match Lightspeed sizing
    h1: {
      fontSize: '2.625rem',    // 42px
      fontWeight: 700,
      lineHeight: 1.24,
    },
    h2: {
      fontSize: '2rem',        // 32px
      fontWeight: 700,
      lineHeight: 1.18,
    },
    h3: {
      fontSize: '1.625rem',    // 26px
      fontWeight: 700,
      lineHeight: 1.39,
    },
    h4: {
      fontSize: '1.25rem',     // 20px
      fontWeight: 700,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1rem',        // 16px
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '0.875rem',    // 14px
      fontWeight: 500,
      lineHeight: 1.43,
    },
    subtitle1: {
      fontSize: '1rem',        // 16px
      fontWeight: 500,
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: '0.875rem',    // 14px
      fontWeight: 500,
      lineHeight: 1.43,
    },
    body1: {
      fontSize: '1rem',        // 16px
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',    // 14px
      fontWeight: 400,
      lineHeight: 1.43,
    },
    button: {
      fontSize: '0.875rem',    // 14px
      fontWeight: 500,
      lineHeight: 1.75,
      textTransform: 'none',   // Lightspeed doesn't use uppercase buttons
    },
    caption: {
      fontSize: '0.75rem',     // 12px
      fontWeight: 400,
      lineHeight: 1.33,
    },
    overline: {
      fontSize: '0.75rem',     // 12px
      fontWeight: 500,
      lineHeight: 2.66,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
    },
  },

  // Spacing - Lightspeed uses 4px base, MUI uses 8px
  // So spacing(1) = 8px, spacing(0.5) = 4px
  spacing: 8,

  // Shape
  shape: {
    borderRadius: 8,  // Default 8px (--border-radius--default)
  },

  // Shadows - Lightspeed's subtle shadow system
  shadows: [
    'none',
    '0px 1px 2px rgba(0, 0, 0, 0.1)',      // elevation 1 - cards
    '0px 2px 4px rgba(0, 0, 0, 0.1)',      // elevation 2
    '0px 3px 6px rgba(0, 0, 0, 0.1)',      // elevation 3
    '0px 4px 8px rgba(0, 0, 0, 0.1)',      // elevation 4 - dropdowns
    '0px 5px 10px rgba(0, 0, 0, 0.1)',     // elevation 5
    '0px 6px 12px rgba(0, 0, 0, 0.1)',     // elevation 6
    '0px 7px 14px rgba(0, 0, 0, 0.1)',     // elevation 7
    '0px 8px 16px rgba(0, 0, 0, 0.16)',    // elevation 8 - modals
    '0px 9px 18px rgba(0, 0, 0, 0.12)',    // elevation 9
    '0px 10px 20px rgba(0, 0, 0, 0.12)',   // elevation 10
    '0px 11px 22px rgba(0, 0, 0, 0.12)',   // elevation 11
    '0px 12px 24px rgba(0, 0, 0, 0.1)',    // elevation 12 - modal dialogs
    '0px 13px 26px rgba(0, 0, 0, 0.12)',   // elevation 13
    '0px 14px 28px rgba(0, 0, 0, 0.12)',   // elevation 14
    '0px 15px 30px rgba(0, 0, 0, 0.12)',   // elevation 15
    '0px 16px 32px rgba(0, 0, 0, 0.12)',   // elevation 16
    '0px 17px 34px rgba(0, 0, 0, 0.12)',   // elevation 17
    '0px 18px 36px rgba(0, 0, 0, 0.12)',   // elevation 18
    '0px 19px 38px rgba(0, 0, 0, 0.12)',   // elevation 19
    '0px 20px 40px rgba(0, 0, 0, 0.12)',   // elevation 20
    '0px 21px 42px rgba(0, 0, 0, 0.12)',   // elevation 21
    '0px 22px 44px rgba(0, 0, 0, 0.12)',   // elevation 22
    '0px 23px 46px rgba(0, 0, 0, 0.12)',   // elevation 23
    '0px 24px 48px rgba(0, 0, 0, 0.12)',   // elevation 24
  ],

  // Breakpoints - match Lightspeed
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,     // --bp-small (mobile landscape)
      md: 768,     // --bp-medium (tablet)
      lg: 992,     // --bp-large (desktop)
      xl: 1280,    // --bp-xlarge (large desktop)
    },
  },

  // Component overrides for Lightspeed look
  components: {
    // Buttons
    MuiButton: {
      defaultProps: {
        disableElevation: true,  // Lightspeed buttons are flat
      },
      styleOverrides: {
        root: {
          borderRadius: 4,       // --border-radius--small
          textTransform: 'none',
          fontWeight: 500,
          minHeight: 40,         // --input-height
        },
        contained: {
          '&:hover': {
            boxShadow: 'none',
          },
        },
        outlined: {
          borderWidth: 1,
          '&:hover': {
            borderWidth: 1,
          },
        },
        sizeSmall: {
          minHeight: 32,
          fontSize: '0.8125rem',
        },
        sizeLarge: {
          minHeight: 48,
          fontSize: '1rem',
        },
      },
    },

    // Icon Buttons
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },

    // Cards
    MuiCard: {
      defaultProps: {
        elevation: 1,
      },
      styleOverrides: {
        root: {
          borderRadius: 8,       // --border-radius--default
          border: `1px solid ${lightspeedColors.grey[200]}`,
        },
      },
    },

    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 16,           // --padding-md
          '&:last-child': {
            paddingBottom: 16,
          },
        },
      },
    },

    // Paper (surfaces)
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        elevation1: {
          boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
        },
      },
    },

    // Text Fields
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 4,       // --border-radius--small
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: lightspeedColors.grey[400],
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: lightspeedColors.teal[700],
            borderWidth: 2,
          },
        },
        notchedOutline: {
          borderColor: lightspeedColors.grey[300],
        },
        input: {
          padding: '10px 14px',
        },
      },
    },

    // Chips
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,       // --border-radius--small
          fontWeight: 500,
        },
        sizeSmall: {
          height: 24,
        },
        sizeMedium: {
          height: 32,
        },
      },
    },

    // Avatars
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: lightspeedColors.teal[700],
          color: '#ffffff',
          fontWeight: 500,
        },
      },
    },

    // Dialogs
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 8,
          boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.1)',
        },
      },
    },

    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: '1.25rem',   // 20px like h4
          fontWeight: 700,
          padding: '16px 24px',
        },
      },
    },

    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: '16px 24px',
        },
      },
    },

    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: '16px 24px',
          gap: 8,
        },
      },
    },

    // Switches (Toggles)
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 42,
          height: 26,
          padding: 0,
        },
        switchBase: {
          padding: 0,
          margin: 2,
          transitionDuration: '300ms',
          '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              backgroundColor: lightspeedColors.teal[700],
              opacity: 1,
              border: 0,
            },
          },
        },
        thumb: {
          boxSizing: 'border-box',
          width: 22,
          height: 22,
        },
        track: {
          borderRadius: 13,
          backgroundColor: lightspeedColors.grey[400],
          opacity: 1,
        },
      },
    },

    // Tabs
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '0.875rem',
          minHeight: 48,
        },
      },
    },

    // Tables
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderColor: lightspeedColors.grey[200],
          padding: '12px 16px',
        },
        head: {
          fontWeight: 500,
          backgroundColor: lightspeedColors.grey[50],
          color: lightspeedColors.grey[700],
        },
      },
    },

    // Tooltips
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: lightspeedColors.grey[800],
          fontSize: '0.75rem',
          borderRadius: 4,
        },
      },
    },

    // Alerts
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        standardSuccess: {
          backgroundColor: lightspeedColors.successBg,
          color: lightspeedColors.success,
        },
        standardWarning: {
          backgroundColor: lightspeedColors.warningBg,
          color: lightspeedColors.warning,
        },
        standardError: {
          backgroundColor: lightspeedColors.errorBg,
          color: lightspeedColors.error,
        },
        standardInfo: {
          backgroundColor: lightspeedColors.teal[50],
          color: lightspeedColors.teal[700],
        },
      },
    },

    // Menu
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: 8,
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          padding: '8px 16px',
          minHeight: 40,
        },
      },
    },

    // Dividers
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: lightspeedColors.grey[200],
        },
      },
    },

    // Lists
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          '&.Mui-selected': {
            backgroundColor: 'rgba(0, 127, 165, 0.08)',
            '&:hover': {
              backgroundColor: 'rgba(0, 127, 165, 0.12)',
            },
          },
        },
      },
    },
  },
});

export default lightspeedTheme;
