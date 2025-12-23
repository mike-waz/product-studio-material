import React, { useState, useEffect } from 'react';
import {
  Modal,
  Button,
  TextInput,
  Callout,
} from 'design_system';
import DayPicker from './DayPicker';
import BlockingOptions from './BlockingOptions';

const ScheduleForm = ({ open, onClose, onSave, template, existingSchedules = [], editingSchedule = null }) => {
  const [formData, setFormData] = useState({
    name: '',
    days: [],
    startTime: '09:00',
    endTime: '17:00',
    blockingType: 'categories',
    categories: [],
  });
  const [errors, setErrors] = useState({});
  const [overlapWarning, setOverlapWarning] = useState(null);

  useEffect(() => {
    if (editingSchedule) {
      setFormData({
        name: editingSchedule.name,
        days: editingSchedule.days,
        startTime: convertTo24Hour(editingSchedule.startTime),
        endTime: convertTo24Hour(editingSchedule.endTime),
        blockingType: editingSchedule.blockingType,
        categories: editingSchedule.categories || [],
      });
    } else if (template) {
      setFormData({
        name: template.defaults.name,
        days: template.defaults.days,
        startTime: template.defaults.startTime,
        endTime: template.defaults.endTime,
        blockingType: template.defaults.blockingType,
        categories: template.defaults.categories || [],
      });
    }
  }, [template, editingSchedule]);

  useEffect(() => {
    checkForOverlaps();
  }, [formData.days, formData.startTime, formData.endTime]);

  const convertTo24Hour = (time12) => {
    if (!time12 || time12.includes(':') && !time12.includes(' ')) return time12;
    const [time, modifier] = time12.split(' ');
    let [hours, minutes] = time.split(':');
    if (hours === '12') {
      hours = modifier === 'AM' ? '00' : '12';
    } else if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
    return `${String(hours).padStart(2, '0')}:${minutes}`;
  };

  const isOvernight = () => {
    const start = parseInt(formData.startTime.replace(':', ''));
    const end = parseInt(formData.endTime.replace(':', ''));
    return end < start;
  };

  const checkForOverlaps = () => {
    if (formData.days.length === 0) {
      setOverlapWarning(null);
      return;
    }

    const schedulesToCheck = existingSchedules.filter(s =>
      editingSchedule ? s.id !== editingSchedule.id : true
    );

    for (const schedule of schedulesToCheck) {
      const overlappingDays = formData.days.filter(d => schedule.days.includes(d));
      if (overlappingDays.length > 0) {
        const existingStart = parseInt(convertTo24Hour(schedule.startTime).replace(':', ''));
        const existingEnd = parseInt(convertTo24Hour(schedule.endTime).replace(':', ''));
        const newStart = parseInt(formData.startTime.replace(':', ''));
        const newEnd = parseInt(formData.endTime.replace(':', ''));

        const existingIsOvernight = existingEnd < existingStart;
        const newIsOvernight = newEnd < newStart;

        let hasOverlap = false;

        if (!existingIsOvernight && !newIsOvernight) {
          hasOverlap = !(newEnd <= existingStart || newStart >= existingEnd);
        } else if (existingIsOvernight && newIsOvernight) {
          hasOverlap = true;
        } else if (existingIsOvernight) {
          hasOverlap = newStart >= existingStart || newEnd <= existingEnd || newStart < existingEnd;
        } else if (newIsOvernight) {
          hasOverlap = existingStart >= newStart || existingEnd <= newEnd || existingStart < newEnd;
        }

        if (hasOverlap) {
          setOverlapWarning({
            scheduleName: schedule.name,
            days: overlappingDays,
          });
          return;
        }
      }
    }

    setOverlapWarning(null);
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter a schedule name';
    }

    if (formData.days.length === 0) {
      newErrors.days = 'Please select at least one day';
    }

    if (formData.blockingType === 'categories' && formData.categories.length === 0) {
      newErrors.categories = 'Please select at least one category to block';
    }

    if (overlapWarning) {
      newErrors.overlap = `This schedule overlaps with "${overlapWarning.scheduleName}"`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const formatTime = (time24) => {
      const [hours, minutes] = time24.split(':');
      const h = parseInt(hours);
      const suffix = h >= 12 ? 'PM' : 'AM';
      const hour12 = h % 12 || 12;
      return `${hour12}:${minutes} ${suffix}`;
    };

    onSave({
      id: editingSchedule?.id || String(Date.now()),
      name: formData.name,
      type: template?.id || 'custom',
      days: formData.days,
      startTime: formatTime(formData.startTime),
      endTime: formatTime(formData.endTime),
      blockingType: formData.blockingType,
      categories: formData.categories,
      enabled: editingSchedule?.enabled ?? true,
      isOvernight: isOvernight(),
    });

    onClose();
  };

  return (
    <Modal
      version={2}
      open={open}
      setOpen={onClose}
      heading={editingSchedule ? 'Edit Schedule' : 'New Schedule'}
      type="dialog"
      primaryAction={{
        label: editingSchedule ? 'Save Changes' : 'Create Schedule',
        onClick: handleSubmit,
      }}
      secondaryAction={{
        label: 'Cancel',
        onClick: onClose,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '8px 0' }}>
        {/* Schedule Name */}
        <div>
          <label style={{
            display: 'block',
            fontWeight: 500,
            fontSize: '14px',
            marginBottom: '8px',
          }}>
            Schedule Name
          </label>
          <TextInput
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g., Homework Time"
            errorMessage={errors.name}
          />
        </div>

        {/* Days */}
        <div>
          <label style={{
            display: 'block',
            fontWeight: 500,
            fontSize: '14px',
            marginBottom: '8px',
          }}>
            Active Days
          </label>
          <DayPicker
            selectedDays={formData.days}
            onChange={(days) => setFormData({ ...formData, days })}
            error={errors.days}
          />
        </div>

        {/* Time Range */}
        <div>
          <label style={{
            display: 'block',
            fontWeight: 500,
            fontSize: '14px',
            marginBottom: '8px',
          }}>
            Time Range
          </label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <input
              type="time"
              value={formData.startTime}
              onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
              style={{
                padding: '8px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '14px',
              }}
            />
            <span style={{ color: '#666' }}>to</span>
            <input
              type="time"
              value={formData.endTime}
              onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
              style={{
                padding: '8px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '14px',
              }}
            />
          </div>
          {isOvernight() && (
            <p style={{
              fontSize: '13px',
              color: '#0284c7',
              marginTop: '8px',
            }}>
              This is an overnight schedule (spans midnight)
            </p>
          )}
        </div>

        {/* Overlap Warning */}
        {overlapWarning && (
          <Callout
            title="Schedule Overlap Detected"
            description={`This time range overlaps with "${overlapWarning.scheduleName}" on ${overlapWarning.days.join(', ')}. Please adjust the time or days.`}
            variant="warning"
            dismissible={false}
          />
        )}

        {/* Blocking Options */}
        <div>
          <label style={{
            display: 'block',
            fontWeight: 500,
            fontSize: '14px',
            marginBottom: '8px',
          }}>
            What to Block
          </label>
          <BlockingOptions
            blockingType={formData.blockingType}
            categories={formData.categories}
            onBlockingTypeChange={(type) => setFormData({ ...formData, blockingType: type })}
            onCategoriesChange={(cats) => setFormData({ ...formData, categories: cats })}
          />
          {errors.categories && (
            <p style={{
              color: '#dc2626',
              fontSize: '13px',
              marginTop: '8px',
            }}>
              {errors.categories}
            </p>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ScheduleForm;
