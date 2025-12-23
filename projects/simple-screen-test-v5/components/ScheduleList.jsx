import React, { useState } from 'react';
import { Button, PlusIcon } from 'design_system';
import ScheduleCard from './ScheduleCard';
import TemplateModal from './TemplateModal';
import ScheduleForm from './ScheduleForm';
import ActiveScheduleWidget from './ActiveScheduleWidget';

const ScheduleList = () => {
  const [schedules, setSchedules] = useState([
    {
      id: '1',
      name: 'Homework Time',
      type: 'focus',
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      startTime: '3:00 PM',
      endTime: '6:00 PM',
      blockingType: 'categories',
      categories: ['Games', 'Social Media', 'Entertainment'],
      enabled: true,
    },
    {
      id: '2',
      name: 'Bedtime',
      type: 'bedtime',
      days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
      startTime: '9:00 PM',
      endTime: '7:00 AM',
      blockingType: 'full',
      enabled: true,
      isOvernight: true,
    },
    {
      id: '3',
      name: 'Weekend Focus',
      type: 'custom',
      days: ['Sat', 'Sun'],
      startTime: '10:00 AM',
      endTime: '12:00 PM',
      blockingType: 'blocklist',
      enabled: false,
    },
  ]);

  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [showScheduleForm, setShowScheduleForm] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [editingSchedule, setEditingSchedule] = useState(null);

  const handleToggle = (id) => {
    setSchedules(schedules.map(s =>
      s.id === id ? { ...s, enabled: !s.enabled } : s
    ));
  };

  const handleEdit = (id) => {
    const schedule = schedules.find(s => s.id === id);
    if (schedule) {
      setEditingSchedule(schedule);
      setShowScheduleForm(true);
    }
  };

  const handleDelete = (id) => {
    setSchedules(schedules.filter(s => s.id !== id));
  };

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setShowTemplateModal(false);
    setShowScheduleForm(true);
  };

  const handleSaveSchedule = (schedule) => {
    if (editingSchedule) {
      setSchedules(schedules.map(s =>
        s.id === schedule.id ? schedule : s
      ));
    } else {
      setSchedules([...schedules, schedule]);
    }
    setShowScheduleForm(false);
    setSelectedTemplate(null);
    setEditingSchedule(null);
  };

  const handleCloseForm = () => {
    setShowScheduleForm(false);
    setSelectedTemplate(null);
    setEditingSchedule(null);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      {/* Active Schedule Widget */}
      <div style={{ marginBottom: '24px' }}>
        <ActiveScheduleWidget
          schedules={schedules}
          onViewAll={() => {}}
        />
      </div>

      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px'
      }}>
        <div>
          <h1 style={{
            fontSize: '24px',
            fontWeight: 600,
            margin: 0,
            color: '#1a1a1a'
          }}>
            Web Browsing Schedules
          </h1>
          <p style={{
            fontSize: '14px',
            color: '#666',
            margin: '4px 0 0 0'
          }}>
            Set up time-based rules that override your normal filtering settings
          </p>
        </div>
        <Button
          icon={<PlusIcon />}
          onClick={() => setShowTemplateModal(true)}
          disabled={schedules.length >= 10}
        >
          New Schedule
        </Button>
      </div>

      {/* Schedule count */}
      <p style={{
        fontSize: '14px',
        color: '#666',
        marginBottom: '16px'
      }}>
        {schedules.length} of 10 schedules
      </p>

      {/* Schedule cards */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        {schedules.map((schedule) => (
          <ScheduleCard
            key={schedule.id}
            schedule={schedule}
            onToggle={handleToggle}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {/* Empty state */}
      {schedules.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '48px 24px',
          backgroundColor: '#f9fafb',
          borderRadius: '8px',
          border: '1px dashed #e0e0e0',
        }}>
          <p style={{
            fontSize: '16px',
            color: '#666',
            margin: '0 0 16px 0'
          }}>
            No schedules yet
          </p>
          <Button
            icon={<PlusIcon />}
            onClick={() => setShowTemplateModal(true)}
          >
            Create Your First Schedule
          </Button>
        </div>
      )}

      {/* Template Selection Modal */}
      <TemplateModal
        open={showTemplateModal}
        onClose={() => setShowTemplateModal(false)}
        onSelect={handleTemplateSelect}
      />

      {/* Schedule Form Modal */}
      <ScheduleForm
        open={showScheduleForm}
        onClose={handleCloseForm}
        onSave={handleSaveSchedule}
        template={selectedTemplate}
        existingSchedules={schedules}
        editingSchedule={editingSchedule}
      />
    </div>
  );
};

export default ScheduleList;
