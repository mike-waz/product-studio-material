import React from 'react';
import {
  Modal,
  BookOpenIcon,
  BellSnoozeIcon,
  CogIcon,
} from 'design_system';

const templates = [
  {
    id: 'focus',
    name: 'Focus Time',
    description: 'Block distracting sites during homework or study time',
    icon: BookOpenIcon,
    defaults: {
      name: 'Focus Time',
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      startTime: '15:00',
      endTime: '18:00',
      blockingType: 'categories',
      categories: ['Games', 'Social Media', 'Entertainment'],
    },
  },
  {
    id: 'bedtime',
    name: 'Bedtime',
    description: 'Pause internet access during sleeping hours',
    icon: BellSnoozeIcon,
    defaults: {
      name: 'Bedtime',
      days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
      startTime: '21:00',
      endTime: '07:00',
      blockingType: 'full',
      isOvernight: true,
    },
  },
  {
    id: 'custom',
    name: 'Custom',
    description: 'Build your own schedule from scratch',
    icon: CogIcon,
    defaults: {
      name: '',
      days: [],
      startTime: '09:00',
      endTime: '17:00',
      blockingType: 'categories',
      categories: [],
    },
  },
];

const TemplateModal = ({ open, onClose, onSelect }) => {
  return (
    <Modal
      version={2}
      open={open}
      setOpen={onClose}
      heading="Choose a Template"
      type="dialog"
    >
      <div style={{ padding: '8px 0' }}>
        <p style={{
          fontSize: '14px',
          color: '#666',
          margin: '0 0 24px 0',
        }}>
          Start with a template or create a custom schedule
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}>
          {templates.map((template) => {
            const Icon = template.icon;
            return (
              <button
                key={template.id}
                onClick={() => onSelect(template)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  backgroundColor: '#fff',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'border-color 0.15s, background-color 0.15s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0284c7';
                  e.currentTarget.style.backgroundColor = '#f0f9ff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e0e0e0';
                  e.currentTarget.style.backgroundColor = '#fff';
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '8px',
                  backgroundColor: '#e0f2fe',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0284c7',
                  flexShrink: 0,
                }}>
                  <Icon />
                </div>
                <div>
                  <div style={{
                    fontWeight: 500,
                    fontSize: '16px',
                    color: '#1a1a1a',
                  }}>
                    {template.name}
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: '#666',
                    marginTop: '4px',
                  }}>
                    {template.description}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </Modal>
  );
};

export default TemplateModal;
export { templates };
