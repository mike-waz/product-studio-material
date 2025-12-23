import React from 'react';
import {
  Chip,
  ClockIcon,
  BookOpenIcon,
  BellSnoozeIcon,
  CogIcon,
} from 'design_system';

const ActiveScheduleWidget = ({ schedules, onViewAll }) => {
  const activeSchedules = schedules.filter(s => s.enabled);

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

  const getCurrentlyActive = () => {
    const now = new Date();
    const currentDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][now.getDay()];
    const currentTime = now.getHours() * 100 + now.getMinutes();

    return activeSchedules.filter(schedule => {
      if (!schedule.days.includes(currentDay)) return false;

      const parseTime = (timeStr) => {
        const [time, period] = timeStr.split(' ');
        let [hours, minutes] = time.split(':').map(Number);
        if (period === 'PM' && hours !== 12) hours += 12;
        if (period === 'AM' && hours === 12) hours = 0;
        return hours * 100 + minutes;
      };

      const start = parseTime(schedule.startTime);
      const end = parseTime(schedule.endTime);

      if (schedule.isOvernight) {
        return currentTime >= start || currentTime < end;
      } else {
        return currentTime >= start && currentTime < end;
      }
    });
  };

  const currentlyActive = getCurrentlyActive();

  if (activeSchedules.length === 0) {
    return null;
  }

  return (
    <div style={{
      padding: '16px',
      backgroundColor: '#f0f9ff',
      borderRadius: '8px',
      border: '1px solid #bae6fd',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '12px',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontWeight: 500,
          fontSize: '14px',
          color: '#0369a1',
        }}>
          <ClockIcon />
          Active Schedules
        </div>
        <button
          onClick={onViewAll}
          style={{
            background: 'none',
            border: 'none',
            color: '#0284c7',
            fontSize: '13px',
            cursor: 'pointer',
          }}
        >
          View All
        </button>
      </div>

      {currentlyActive.length > 0 && (
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '6px',
          padding: '12px',
          marginBottom: '12px',
        }}>
          <div style={{
            fontSize: '12px',
            color: '#059669',
            fontWeight: 500,
            marginBottom: '8px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}>
            Running Now
          </div>
          {currentlyActive.map(schedule => (
            <div
              key={schedule.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 0',
              }}
            >
              <div style={{ color: '#0284c7' }}>
                {getScheduleIcon(schedule.type)}
              </div>
              <div>
                <div style={{ fontWeight: 500, fontSize: '14px' }}>
                  {schedule.name}
                </div>
                <div style={{ fontSize: '12px', color: '#666' }}>
                  Until {schedule.endTime}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
      }}>
        {activeSchedules.map(schedule => (
          <Chip
            key={schedule.id}
            label={schedule.name}
            icon={getScheduleIcon(schedule.type)}
            size="small"
            variant={currentlyActive.some(s => s.id === schedule.id) ? 'primary' : 'secondary'}
          />
        ))}
      </div>
    </div>
  );
};

export default ActiveScheduleWidget;
