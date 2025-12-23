import React from 'react';

const DAYS = [
  { short: 'Sun', full: 'Sunday' },
  { short: 'Mon', full: 'Monday' },
  { short: 'Tue', full: 'Tuesday' },
  { short: 'Wed', full: 'Wednesday' },
  { short: 'Thu', full: 'Thursday' },
  { short: 'Fri', full: 'Friday' },
  { short: 'Sat', full: 'Saturday' },
];

const DayPicker = ({ selectedDays, onChange, error }) => {
  const toggleDay = (day) => {
    if (selectedDays.includes(day)) {
      onChange(selectedDays.filter(d => d !== day));
    } else {
      onChange([...selectedDays, day]);
    }
  };

  const selectWeekdays = () => {
    onChange(['Mon', 'Tue', 'Wed', 'Thu', 'Fri']);
  };

  const selectWeekends = () => {
    onChange(['Sat', 'Sun']);
  };

  const selectAll = () => {
    onChange(DAYS.map(d => d.short));
  };

  return (
    <div>
      <div style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '8px',
      }}>
        {DAYS.map((day) => (
          <button
            key={day.short}
            type="button"
            onClick={() => toggleDay(day.short)}
            title={day.full}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: selectedDays.includes(day.short)
                ? '2px solid #0284c7'
                : '1px solid #d1d5db',
              backgroundColor: selectedDays.includes(day.short)
                ? '#0284c7'
                : '#fff',
              color: selectedDays.includes(day.short)
                ? '#fff'
                : '#374151',
              fontWeight: 500,
              fontSize: '13px',
              cursor: 'pointer',
              transition: 'all 0.15s',
            }}
          >
            {day.short.charAt(0)}
          </button>
        ))}
      </div>

      <div style={{
        display: 'flex',
        gap: '8px',
        fontSize: '13px',
      }}>
        <button
          type="button"
          onClick={selectWeekdays}
          style={{
            background: 'none',
            border: 'none',
            color: '#0284c7',
            cursor: 'pointer',
            padding: '4px 0',
          }}
        >
          Weekdays
        </button>
        <span style={{ color: '#d1d5db' }}>|</span>
        <button
          type="button"
          onClick={selectWeekends}
          style={{
            background: 'none',
            border: 'none',
            color: '#0284c7',
            cursor: 'pointer',
            padding: '4px 0',
          }}
        >
          Weekends
        </button>
        <span style={{ color: '#d1d5db' }}>|</span>
        <button
          type="button"
          onClick={selectAll}
          style={{
            background: 'none',
            border: 'none',
            color: '#0284c7',
            cursor: 'pointer',
            padding: '4px 0',
          }}
        >
          Every day
        </button>
      </div>

      {error && (
        <p style={{
          color: '#dc2626',
          fontSize: '13px',
          margin: '8px 0 0 0',
        }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default DayPicker;
