import React from 'react';
import { Chip, ClockIcon, ShieldBlockIcon } from 'design_system';

/**
 * ActiveScheduleWidget - Shows currently active schedules
 * Use this widget on the main activity screen to give parents
 * quick visibility into what schedules are running.
 */
const ActiveScheduleWidget = ({ schedules = [], currentTime = new Date() }) => {
  // Get day of week (0 = Sunday, 1 = Monday, etc.)
  const currentDay = currentTime.getDay();
  const currentMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();

  // Check if a schedule is currently active
  const isScheduleActive = (schedule) => {
    if (!schedule.enabled) return false;
    if (!schedule.days.includes(currentDay)) return false;

    const startMinutes = timeToMinutes(schedule.startTime);
    const endMinutes = timeToMinutes(schedule.endTime);

    // Handle overnight schedules
    if (endMinutes < startMinutes) {
      // Overnight: active if after start OR before end
      return currentMinutes >= startMinutes || currentMinutes < endMinutes;
    } else {
      // Same day: active if between start and end
      return currentMinutes >= startMinutes && currentMinutes < endMinutes;
    }
  };

  const timeToMinutes = (time) => {
    if (!time) return 0;
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  // Format time for display
  const formatTime = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
  };

  // Get all active schedules
  const activeSchedules = schedules.filter(isScheduleActive);

  // No active schedules
  if (activeSchedules.length === 0) {
    return (
      <div style={{
        padding: '16px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px',
        border: '1px solid #e5e7eb',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '4px',
        }}>
          <ClockIcon style={{ width: '16px', height: '16px', color: '#9ca3af' }} />
          <span style={{
            fontSize: '14px',
            fontWeight: 500,
            color: '#6b7280',
          }}>
            No active schedules
          </span>
        </div>
        <p style={{
          fontSize: '13px',
          color: '#9ca3af',
          margin: 0,
        }}>
          Normal browsing rules apply
        </p>
      </div>
    );
  }

  // Active schedules
  return (
    <div style={{
      padding: '16px',
      backgroundColor: '#f0fdfa',
      borderRadius: '8px',
      border: '1px solid #99f6e4',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '12px',
      }}>
        <ShieldBlockIcon style={{ width: '16px', height: '16px', color: '#0d9488' }} />
        <span style={{
          fontSize: '14px',
          fontWeight: 500,
          color: '#0f766e',
        }}>
          {activeSchedules.length === 1 ? 'Schedule active' : `${activeSchedules.length} schedules active`}
        </span>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}>
        {activeSchedules.map((schedule) => (
          <div
            key={schedule.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 12px',
              backgroundColor: '#fff',
              borderRadius: '6px',
              border: '1px solid #e5e7eb',
            }}
          >
            <div>
              <div style={{
                fontSize: '14px',
                fontWeight: 500,
                color: '#1a1a1a',
              }}>
                {schedule.name}
              </div>
              <div style={{
                fontSize: '12px',
                color: '#666',
                marginTop: '2px',
              }}>
                Until {formatTime(schedule.endTime)}
              </div>
            </div>
            <Chip
              label={schedule.blockType === 'everything' ? 'All blocked' : 'Filtering'}
              size="small"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveScheduleWidget;
