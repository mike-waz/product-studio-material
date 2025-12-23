import React from 'react';
import { Toggle, IconButton, MoreVerticalIcon, ClockIcon } from 'design_system';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const DAY_LETTERS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const ScheduleCard = ({ schedule, onToggle, onEdit, onDelete }) => {
  const {
    id,
    name,
    days,         // array of day indices (0=Sun, 1=Mon, etc.)
    startTime,    // "HH:MM" format
    endTime,      // "HH:MM" format
    blockType,    // 'everything' | 'categories' | 'blocklist'
    enabled,
  } = schedule;

  // Format time for display (convert 24h to 12h)
  const formatTime = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
  };

  // Check if it's an overnight schedule
  const isOvernight = endTime < startTime;

  // Get block type label
  const getBlockLabel = () => {
    switch (blockType) {
      case 'everything': return 'Blocks everything';
      case 'categories': return 'Blocks categories';
      case 'blocklist': return 'Applies block list';
      default: return '';
    }
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      padding: '16px',
      backgroundColor: enabled ? '#fff' : '#fafafa',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
      gap: '16px',
      opacity: enabled ? 1 : 0.7,
    }}>
      {/* Toggle */}
      <Toggle
        version={2}
        checked={enabled}
        onChange={() => onToggle(id)}
        small
        labelHidden
      />

      {/* Main content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {/* Name and time */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '4px',
        }}>
          <span style={{
            fontSize: '16px',
            fontWeight: 500,
            color: '#1a1a1a',
          }}>
            {name}
          </span>
          <span style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '14px',
            color: '#666',
          }}>
            <ClockIcon style={{ width: '14px', height: '14px' }} />
            {formatTime(startTime)} – {formatTime(endTime)}
            {isOvernight && (
              <span style={{
                fontSize: '11px',
                color: '#888',
                marginLeft: '4px',
              }}>
                (overnight)
              </span>
            )}
          </span>
        </div>

        {/* Days and block type */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}>
          {/* Day indicators */}
          <div style={{
            display: 'flex',
            gap: '2px',
          }}>
            {DAY_LETTERS.map((letter, index) => (
              <span
                key={index}
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '11px',
                  fontWeight: 500,
                  backgroundColor: days.includes(index) ? '#0d9488' : '#f3f4f6',
                  color: days.includes(index) ? '#fff' : '#9ca3af',
                }}
              >
                {letter}
              </span>
            ))}
          </div>

          {/* Block type */}
          <span style={{
            fontSize: '13px',
            color: '#666',
          }}>
            {getBlockLabel()}
          </span>
        </div>
      </div>

      {/* Actions */}
      <IconButton
        icon={<MoreVerticalIcon />}
        onClick={() => {/* TODO: show dropdown menu */}}
      />
    </div>
  );
};

export default ScheduleCard;
