import { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CommentIcon from '@mui/icons-material/Comment';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import CloseIcon from '@mui/icons-material/Close';
import CircleIcon from '@mui/icons-material/Circle';

const mockNotifications = [
  {
    id: 1,
    type: 'comment',
    title: 'New comment on your post',
    message: 'Sarah left a comment: "Great work on the design!"',
    time: '2 min ago',
    read: false,
  },
  {
    id: 2,
    type: 'follow',
    title: 'New follower',
    message: 'John Smith started following you',
    time: '1 hour ago',
    read: false,
  },
  {
    id: 3,
    type: 'success',
    title: 'Export complete',
    message: 'Your file has been exported successfully',
    time: '3 hours ago',
    read: true,
  },
  {
    id: 4,
    type: 'warning',
    title: 'Storage almost full',
    message: 'You have used 90% of your storage quota. Consider upgrading your plan.',
    time: '1 day ago',
    read: true,
  },
];

const getNotificationIcon = (type) => {
  switch (type) {
    case 'comment':
      return <CommentIcon />;
    case 'follow':
      return <PersonAddIcon />;
    case 'success':
      return <CheckCircleIcon />;
    case 'warning':
      return <WarningIcon />;
    default:
      return <NotificationsIcon />;
  }
};

const getIconColor = (type) => {
  switch (type) {
    case 'comment':
      return 'primary.main';
    case 'follow':
      return 'info.main';
    case 'success':
      return 'success.main';
    case 'warning':
      return 'warning.main';
    default:
      return 'grey.500';
  }
};

function NotificationCenterDropdown() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notifications, setNotifications] = useState(mockNotifications);
  const [hoveredId, setHoveredId] = useState(null);

  const unreadCount = notifications.filter((n) => !n.read).length;
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const handleNotificationClick = (notificationId) => {
    setNotifications(
      notifications.map((n) =>
        n.id === notificationId ? { ...n, read: true } : n
      )
    );
  };

  const handleDismiss = (event, notificationId) => {
    event.stopPropagation();
    setNotifications(notifications.filter((n) => n.id !== notificationId));
  };

  return (
    <Box>
      <Tooltip title="Notifications">
        <IconButton
          onClick={handleClick}
          size="large"
          aria-label={`${unreadCount} unread notifications`}
          aria-haspopup="true"
          aria-expanded={open}
          color="inherit"
        >
          <Badge badgeContent={unreadCount} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        TransitionComponent={Fade}
        transitionDuration={200}
        slotProps={{
          paper: {
            elevation: 8,
            sx: {
              width: 380,
              maxHeight: 520,
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 2,
              overflow: 'hidden',
            },
          },
        }}
      >
        {/* Header */}
        <Box
          sx={{
            px: 2,
            py: 1.5,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            bgcolor: 'background.paper',
            flexShrink: 0,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Notifications
          </Typography>
          {unreadCount > 0 && (
            <Button
              size="small"
              onClick={markAllAsRead}
              sx={{ textTransform: 'none' }}
            >
              Mark all as read
            </Button>
          )}
        </Box>
        <Divider />

        {/* Notification List - Scrollable */}
        {notifications.length > 0 ? (
          <List
            disablePadding
            sx={{
              overflow: 'auto',
              flexGrow: 1,
              '&::-webkit-scrollbar': {
                width: 6,
              },
              '&::-webkit-scrollbar-thumb': {
                bgcolor: 'grey.300',
                borderRadius: 3,
              },
              '&::-webkit-scrollbar-thumb:hover': {
                bgcolor: 'grey.400',
              },
            }}
          >
            {notifications.map((notification, index) => (
              <Box key={notification.id}>
                <ListItemButton
                  onClick={() => handleNotificationClick(notification.id)}
                  onMouseEnter={() => setHoveredId(notification.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  sx={{
                    bgcolor: notification.read
                      ? 'transparent'
                      : 'action.selected',
                    py: 1.5,
                    px: 2,
                    position: 'relative',
                    transition: 'background-color 0.15s ease',
                    '&:hover': {
                      bgcolor: notification.read
                        ? 'action.hover'
                        : 'action.focus',
                    },
                  }}
                >
                  {/* Unread Indicator */}
                  {!notification.read && (
                    <CircleIcon
                      sx={{
                        fontSize: 8,
                        color: 'primary.main',
                        position: 'absolute',
                        left: 6,
                        top: '50%',
                        transform: 'translateY(-50%)',
                      }}
                    />
                  )}

                  <ListItemAvatar sx={{ minWidth: 48 }}>
                    <Avatar
                      sx={{
                        bgcolor: getIconColor(notification.type),
                        width: 36,
                        height: 36,
                        opacity: notification.read ? 0.7 : 1,
                        transition: 'opacity 0.15s ease',
                      }}
                    >
                      {getNotificationIcon(notification.type)}
                    </Avatar>
                  </ListItemAvatar>

                  <ListItemText
                    sx={{ pr: 4, my: 0 }}
                    primary={
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          gap: 1,
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: notification.read ? 400 : 600,
                            color: 'text.primary',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            flex: 1,
                          }}
                        >
                          {notification.title}
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ flexShrink: 0, lineHeight: 1.8 }}
                        >
                          {notification.time}
                        </Typography>
                      </Box>
                    }
                    secondary={
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          mt: 0.25,
                          lineHeight: 1.4,
                        }}
                      >
                        {notification.message}
                      </Typography>
                    }
                    secondaryTypographyProps={{ component: 'div' }}
                  />

                  {/* Dismiss Button */}
                  <Box
                    sx={{
                      position: 'absolute',
                      right: 8,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      opacity: hoveredId === notification.id ? 1 : 0,
                      transition: 'opacity 0.15s ease',
                    }}
                  >
                    <Tooltip title="Dismiss">
                      <IconButton
                        size="small"
                        onClick={(e) => handleDismiss(e, notification.id)}
                        aria-label="Dismiss notification"
                        sx={{
                          bgcolor: 'background.paper',
                          '&:hover': {
                            bgcolor: 'grey.100',
                          },
                        }}
                      >
                        <CloseIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </ListItemButton>
                {index < notifications.length - 1 && (
                  <Divider sx={{ mx: 2 }} />
                )}
              </Box>
            ))}
          </List>
        ) : (
          /* Empty State */
          <Box
            sx={{
              py: 6,
              px: 3,
              textAlign: 'center',
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <NotificationsNoneIcon
              sx={{ fontSize: 56, color: 'grey.400', mb: 2 }}
            />
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              No notifications
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We'll let you know when something arrives
            </Typography>
          </Box>
        )}

        {/* Footer */}
        {notifications.length > 0 && (
          <>
            <Divider />
            <Box sx={{ p: 1, flexShrink: 0 }}>
              <Button
                size="small"
                fullWidth
                sx={{ textTransform: 'none' }}
              >
                View all notifications
              </Button>
            </Box>
          </>
        )}
      </Popover>
    </Box>
  );
}

export default NotificationCenterDropdown;
