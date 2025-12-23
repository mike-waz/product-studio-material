import React from 'react';
import {
  Toggle,
  Chip,
  IconButton,
  MoreVerticalIcon,
  BookOpenIcon,
  BellSnoozeIcon,
  CogIcon,
  PauseIcon,
  ShieldBlockIcon,
} from 'design_system';

const ScheduleCard = ({ schedule, onToggle, onEdit, onDelete }) => {
  const getScheduleIcon = (type) => {
    switch (type) {
      case 'focus':
        return <BookOpenIcon />;
      case 'bedtime':
        return <BellSnoozeIcon />;
      default:
        return <CogIcon />;
    }
  };

  const getBlockingLabel = (blockingType) => {
    switch (blockingType) {
      case 'full':
        return 'Full Internet Pause';
      case 'categories':
        return 'Category Blocking';
      case 'blocklist':
        return 'Block List';
      default:
        return blockingType;
    }
  };

  const getBlockingIcon = (blockingType) => {
    switch (blockingType) {
      case 'full':
        return <PauseIcon />;
      default:
        return <ShieldBlockIcon />;
    }
  };

  const formatDays = (days) => {
    if (days.length === 7) return 'Every day';
    if (days.length === 5 && !days.includes('Sat') && !days.includes('Sun')) {
      return 'Weekdays';
    }
    if (days.length === 2 && days.includes('Sat') && days.includes('Sun')) {
      return 'Weekends';
    }
    return days.join(', ');
  };

  return (
    <div
      style={{
        padding: '16px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        backgroundColor: schedule.enabled ? '#fff' : '#fafafa',
        opacity: schedule.enabled ? 1 : 0.7,
      }}
    >
      {/* Header row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '12px'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '8px',
          backgroundColor: schedule.enabled ? '#e0f2fe' : '#f5f5f5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: schedule.enabled ? '#0284c7' : '#999',
        }}>
          {getScheduleIcon(schedule.type)}
        </div>

        <div style={{ flex: 1 }}>
          <div style={{
            fontWeight: 500,
            fontSize: '16px',
            color: '#1a1a1a',
          }}>
            {schedule.name}
          </div>
          <div style={{
            fontSize: '14px',
            color: '#666',
            marginTop: '2px',
          }}>
            {formatDays(schedule.days)} | {schedule.startTime} - {schedule.endTime}
            {schedule.isOvernight && ' (overnight)'}
          </div>
        </div>

        <Toggle
          version={2}
          checked={schedule.enabled}
          onChange={() => onToggle(schedule.id)}
          small
        />

        <IconButton
          icon={<MoreVerticalIcon />}
          size="small"
          variant="tertiary"
          onClick={() => {}}
        />
      </div>

      {/* Blocking info */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        paddingTop: '12px',
        borderTop: '1px solid #f0f0f0',
      }}>
        <Chip
          label={getBlockingLabel(schedule.blockingType)}
          icon={getBlockingIcon(schedule.blockingType)}
          size="small"
        />
        {schedule.blockingType === 'categories' && schedule.categories && (
          <span style={{ fontSize: '13px', color: '#666' }}>
            {schedule.categories.join(', ')}
          </span>
        )}
      </div>
    </div>
  );
};

export default ScheduleCard;
