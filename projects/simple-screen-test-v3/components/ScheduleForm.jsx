import React, { useState, useEffect } from 'react';
import { Modal, TextInput, Button } from 'design_system';
import DayPicker from './DayPicker';
import BlockingOptions from './BlockingOptions';

const ScheduleForm = ({
  open,
  onClose,
  onSave,
  template = null,        // Template defaults when creating new
  existingSchedule = null, // Existing schedule when editing
  allSchedules = [],      // All schedules for overlap validation
}) => {
  const isEditing = !!existingSchedule;

  // Form state
  const [name, setName] = useState('');
  const [days, setDays] = useState([]);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [blockType, setBlockType] = useState('categories');
  const [categories, setCategories] = useState([]);

  // Validation errors
  const [errors, setErrors] = useState({});

  // Initialize form with template defaults or existing schedule
  useEffect(() => {
    if (existingSchedule) {
      setName(existingSchedule.name);
      setDays(existingSchedule.days);
      setStartTime(existingSchedule.startTime);
      setEndTime(existingSchedule.endTime);
      setBlockType(existingSchedule.blockType);
      setCategories(existingSchedule.categories || []);
    } else if (template?.defaults) {
      setName(template.defaults.name || '');
      setDays(template.defaults.days || []);
      setStartTime(template.defaults.startTime || '');
      setEndTime(template.defaults.endTime || '');
      setBlockType(template.defaults.blockType || 'categories');
      setCategories(template.defaults.categories || []);
    } else {
      // Reset to blank
      setName('');
      setDays([]);
      setStartTime('');
      setEndTime('');
      setBlockType('categories');
      setCategories([]);
    }
    setErrors({});
  }, [existingSchedule, template, open]);

  // Check for overlapping schedules
  const checkOverlap = (newDays, newStart, newEnd, currentId) => {
    const schedulesToCheck = allSchedules.filter(s => s.id !== currentId && s.enabled);

    for (const schedule of schedulesToCheck) {
      // Check if any days overlap
      const daysOverlap = newDays.some(day => schedule.days.includes(day));
      if (!daysOverlap) continue;

      // Check if times overlap (accounting for overnight schedules)
      const newStartMinutes = timeToMinutes(newStart);
      const newEndMinutes = timeToMinutes(newEnd);
      const schedStartMinutes = timeToMinutes(schedule.startTime);
      const schedEndMinutes = timeToMinutes(schedule.endTime);

      // Simple overlap check (not handling overnight for now)
      const timesOverlap = !(newEndMinutes <= schedStartMinutes || newStartMinutes >= schedEndMinutes);

      if (timesOverlap) {
        return schedule.name;
      }
    }
    return null;
  };

  const timeToMinutes = (time) => {
    if (!time) return 0;
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const validate = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Schedule name is required';
    }

    if (days.length === 0) {
      newErrors.days = 'Select at least one day';
    }

    if (!startTime) {
      newErrors.startTime = 'Start time is required';
    }

    if (!endTime) {
      newErrors.endTime = 'End time is required';
    }

    if (blockType === 'categories' && categories.length === 0) {
      newErrors.categories = 'Select at least one category to block';
    }

    // Check for overlaps
    if (days.length > 0 && startTime && endTime) {
      const overlappingSchedule = checkOverlap(
        days,
        startTime,
        endTime,
        existingSchedule?.id
      );
      if (overlappingSchedule) {
        newErrors.overlap = `This schedule overlaps with "${overlappingSchedule}"`;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validate()) return;

    const scheduleData = {
      id: existingSchedule?.id || String(Date.now()),
      name: name.trim(),
      days,
      startTime,
      endTime,
      blockType,
      categories: blockType === 'categories' ? categories : [],
      enabled: existingSchedule?.enabled ?? true,
    };

    onSave(scheduleData);
    onClose();
  };

  // Check if it's an overnight schedule
  const isOvernight = startTime && endTime && endTime < startTime;

  return (
    <Modal
      version={2}
      open={open}
      setOpen={onClose}
      heading={isEditing ? 'Edit Schedule' : 'Create Schedule'}
      type="dialog"
      primaryAction={{
        label: isEditing ? 'Save Changes' : 'Create Schedule',
        onClick: handleSave,
      }}
      secondaryAction={{
        label: 'Cancel',
        onClick: onClose,
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '8px 0',
      }}>
        {/* Schedule Name */}
        <div>
          <TextInput
            label="Schedule Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            errorMessage={errors.name}
            placeholder="e.g., Homework Time, Bedtime"
          />
        </div>

        {/* Day Picker */}
        <DayPicker
          selectedDays={days}
          onChange={setDays}
          error={errors.days}
        />

        {/* Time Pickers */}
        <div>
          <label style={{
            display: 'block',
            fontSize: '14px',
            fontWeight: 500,
            color: '#374151',
            marginBottom: '8px',
          }}>
            Time
          </label>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            <div style={{ flex: 1 }}>
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  fontSize: '14px',
                  border: errors.startTime ? '1px solid #dc2626' : '1px solid #d1d5db',
                  borderRadius: '6px',
                  outline: 'none',
                }}
              />
              {errors.startTime && (
                <p style={{ fontSize: '13px', color: '#dc2626', margin: '4px 0 0 0' }}>
                  {errors.startTime}
                </p>
              )}
            </div>
            <span style={{ color: '#666' }}>to</span>
            <div style={{ flex: 1 }}>
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  fontSize: '14px',
                  border: errors.endTime ? '1px solid #dc2626' : '1px solid #d1d5db',
                  borderRadius: '6px',
                  outline: 'none',
                }}
              />
              {errors.endTime && (
                <p style={{ fontSize: '13px', color: '#dc2626', margin: '4px 0 0 0' }}>
                  {errors.endTime}
                </p>
              )}
            </div>
          </div>
          {isOvernight && (
            <p style={{
              fontSize: '13px',
              color: '#666',
              margin: '8px 0 0 0',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}>
              <span style={{ color: '#6366f1' }}>ℹ</span>
              This is an overnight schedule (ends the next day)
            </p>
          )}
        </div>

        {/* Blocking Options */}
        <BlockingOptions
          blockType={blockType}
          onBlockTypeChange={setBlockType}
          selectedCategories={categories}
          onCategoriesChange={setCategories}
          hasBlockList={true}
        />

        {/* Category error */}
        {errors.categories && (
          <p style={{
            fontSize: '13px',
            color: '#dc2626',
            margin: '-16px 0 0 0',
          }}>
            {errors.categories}
          </p>
        )}

        {/* Overlap error */}
        {errors.overlap && (
          <div style={{
            padding: '12px',
            backgroundColor: '#fef2f2',
            border: '1px solid #fecaca',
            borderRadius: '8px',
            color: '#dc2626',
            fontSize: '14px',
          }}>
            {errors.overlap}
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ScheduleForm;
