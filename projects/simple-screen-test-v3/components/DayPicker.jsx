import React from 'react';

const DAYS = [
  { index: 0, label: 'S', full: 'Sunday' },
  { index: 1, label: 'M', full: 'Monday' },
  { index: 2, label: 'T', full: 'Tuesday' },
  { index: 3, label: 'W', full: 'Wednesday' },
  { index: 4, label: 'T', full: 'Thursday' },
  { index: 5, label: 'F', full: 'Friday' },
  { index: 6, label: 'S', full: 'Saturday' },
];

const DayPicker = ({ selectedDays, onChange, error }) => {
  const toggleDay = (dayIndex) => {
    if (selectedDays.includes(dayIndex)) {
      onChange(selectedDays.filter(d => d !== dayIndex));
    } else {
      onChange([...selectedDays, dayIndex].sort((a, b) => a - b));
    }
  };

  const selectWeekdays = () => {
    onChange([1, 2, 3, 4, 5]);
  };

  const selectWeekends = () => {
    onChange([0, 6]);
  };

  const selectAll = () => {
    onChange([0, 1, 2, 3, 4, 5, 6]);
  };

  return (
    <div>
      <label style={{
        display: 'block',
        fontSize: '14px',
        fontWeight: 500,
        color: '#374151',
        marginBottom: '8px',
      }}>
        Days
      </label>

      {/* Day buttons */}
      <div style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '8px',
      }}>
        {DAYS.map((day) => (
          <button
            key={day.index}
            type="button"
            onClick={() => toggleDay(day.index)}
            title={day.full}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              border: selectedDays.includes(day.index) ? '2px solid #0d9488' : '1px solid #d1d5db',
              backgroundColor: selectedDays.includes(day.index) ? '#0d9488' : '#fff',
              color: selectedDays.includes(day.index) ? '#fff' : '#374151',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            {day.label}
          </button>
        ))}
      </div>

      {/* Quick select options */}
      <div style={{
        display: 'flex',
        gap: '12px',
        fontSize: '13px',
      }}>
        <button
          type="button"
          onClick={selectWeekdays}
          style={{
            background: 'none',
            border: 'none',
            color: '#0d9488',
            cursor: 'pointer',
            padding: 0,
            textDecoration: 'underline',
          }}
        >
          Weekdays
        </button>
        <button
          type="button"
          onClick={selectWeekends}
          style={{
            background: 'none',
            border: 'none',
            color: '#0d9488',
            cursor: 'pointer',
            padding: 0,
            textDecoration: 'underline',
          }}
        >
          Weekends
        </button>
        <button
          type="button"
          onClick={selectAll}
          style={{
            background: 'none',
            border: 'none',
            color: '#0d9488',
            cursor: 'pointer',
            padding: 0,
            textDecoration: 'underline',
          }}
        >
          Every day
        </button>
      </div>

      {/* Error message */}
      {error && (
        <p style={{
          fontSize: '13px',
          color: '#dc2626',
          margin: '8px 0 0 0',
        }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default DayPicker;
