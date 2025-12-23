import React, { useState } from 'react';
import { Button, PlusIcon } from 'design_system';
import ScheduleCard from './ScheduleCard';
import TemplateModal from './TemplateModal';
import ScheduleForm from './ScheduleForm';
import ActiveScheduleWidget from './ActiveScheduleWidget';

// Sample data for development
const SAMPLE_SCHEDULES = [
  {
    id: '1',
    name: 'Homework Time',
    days: [1, 2, 3, 4, 5], // Mon-Fri
    startTime: '15:00',
    endTime: '18:00',
    blockType: 'categories',
    categories: ['games', 'social_media', 'entertainment'],
    enabled: true,
  },
  {
    id: '2',
    name: 'Bedtime',
    days: [0, 1, 2, 3, 4, 5, 6], // Every day
    startTime: '21:00',
    endTime: '07:00',
    blockType: 'everything',
    categories: [],
    enabled: true,
  },
  {
    id: '3',
    name: 'Weekend Focus',
    days: [0, 6], // Sat-Sun
    startTime: '10:00',
    endTime: '12:00',
    blockType: 'blocklist',
    categories: [],
    enabled: false,
  },
];

const ScheduleList = () => {
  const [schedules, setSchedules] = useState(SAMPLE_SCHEDULES);
  const [templateModalOpen, setTemplateModalOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [editingSchedule, setEditingSchedule] = useState(null);
  const MAX_SCHEDULES = 10;

  const handleToggle = (id) => {
    setSchedules(prev =>
      prev.map(s =>
        s.id === id ? { ...s, enabled: !s.enabled } : s
      )
    );
  };

  const handleEdit = (id) => {
    const schedule = schedules.find(s => s.id === id);
    if (schedule) {
      setEditingSchedule(schedule);
      setSelectedTemplate(null);
      setFormOpen(true);
    }
  };

  const handleDelete = (id) => {
    setSchedules(prev => prev.filter(s => s.id !== id));
  };

  const handleAddClick = () => {
    setTemplateModalOpen(true);
  };

  const handleSelectTemplate = (template) => {
    setSelectedTemplate(template);
    setEditingSchedule(null);
    setTemplateModalOpen(false);
    setFormOpen(true);
  };

  const handleSaveSchedule = (scheduleData) => {
    if (editingSchedule) {
      // Update existing schedule
      setSchedules(prev =>
        prev.map(s =>
          s.id === scheduleData.id ? scheduleData : s
        )
      );
    } else {
      // Add new schedule
      setSchedules(prev => [...prev, scheduleData]);
    }
    setFormOpen(false);
    setSelectedTemplate(null);
    setEditingSchedule(null);
  };

  const handleCloseForm = () => {
    setFormOpen(false);
    setSelectedTemplate(null);
    setEditingSchedule(null);
  };

  return (
    <div style={{
      padding: '24px',
      maxWidth: '800px',
      margin: '0 auto',
    }}>
      {/* Active Schedule Widget - Preview */}
      <div style={{ marginBottom: '24px' }}>
        <p style={{
          fontSize: '12px',
          color: '#999',
          marginBottom: '8px',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}>
          Activity Screen Widget Preview
        </p>
        <ActiveScheduleWidget schedules={schedules} />
      </div>

      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px',
      }}>
        <div>
          <h1 style={{
            fontSize: '24px',
            fontWeight: 600,
            margin: 0,
            color: '#1a1a1a',
          }}>
            Schedules
          </h1>
          <p style={{
            fontSize: '14px',
            color: '#666',
            margin: '4px 0 0 0',
          }}>
            Set time-based rules for web browsing
          </p>
        </div>
        <Button
          icon={<PlusIcon />}
          disabled={schedules.length >= MAX_SCHEDULES}
          onClick={handleAddClick}
        >
          Add Schedule
        </Button>
      </div>

      {/* Schedule List */}
      {schedules.length > 0 && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}>
          {schedules.map(schedule => (
            <ScheduleCard
              key={schedule.id}
              schedule={schedule}
              onToggle={handleToggle}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      {/* Empty State */}
      {schedules.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '48px 24px',
          backgroundColor: '#f9fafb',
          borderRadius: '8px',
          border: '1px dashed #d1d5db',
        }}>
          <p style={{
            fontSize: '16px',
            color: '#666',
            margin: '0 0 16px 0',
          }}>
            No schedules yet
          </p>
          <p style={{
            fontSize: '14px',
            color: '#999',
            margin: 0,
          }}>
            Create a schedule to set different browsing rules for homework time, bedtime, or any other period.
          </p>
        </div>
      )}

      {/* Schedule count */}
      {schedules.length > 0 && (
        <p style={{
          fontSize: '13px',
          color: '#999',
          marginTop: '16px',
          textAlign: 'right',
        }}>
          {schedules.length} of {MAX_SCHEDULES} schedules
        </p>
      )}

      {/* Template Selection Modal */}
      <TemplateModal
        open={templateModalOpen}
        onClose={() => setTemplateModalOpen(false)}
        onSelectTemplate={handleSelectTemplate}
      />

      {/* Schedule Form Modal */}
      <ScheduleForm
        open={formOpen}
        onClose={handleCloseForm}
        onSave={handleSaveSchedule}
        template={selectedTemplate}
        existingSchedule={editingSchedule}
        allSchedules={schedules}
      />
    </div>
  );
};

export default ScheduleList;
