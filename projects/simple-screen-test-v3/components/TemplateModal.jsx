import React from 'react';
import { Modal, BookOpenIcon, BellSnoozeIcon, CogIcon } from 'design_system';

const TEMPLATES = [
  {
    id: 'homework',
    name: 'Focus / Homework Time',
    description: 'Block distracting sites during study hours',
    icon: BookOpenIcon,
    color: '#0d9488', // teal
    defaults: {
      name: 'Homework Time',
      days: [1, 2, 3, 4, 5], // Mon-Fri
      startTime: '15:00',
      endTime: '18:00',
      blockType: 'categories',
      categories: ['games', 'social_media', 'entertainment'],
    },
  },
  {
    id: 'bedtime',
    name: 'Bedtime',
    description: 'Pause internet access overnight',
    icon: BellSnoozeIcon,
    color: '#6366f1', // indigo
    defaults: {
      name: 'Bedtime',
      days: [0, 1, 2, 3, 4, 5, 6], // Every day
      startTime: '21:00',
      endTime: '07:00',
      blockType: 'everything',
      categories: [],
    },
  },
  {
    id: 'custom',
    name: 'Custom Schedule',
    description: 'Start from scratch with your own settings',
    icon: CogIcon,
    color: '#6b7280', // gray
    defaults: {
      name: '',
      days: [],
      startTime: '',
      endTime: '',
      blockType: 'categories',
      categories: [],
    },
  },
];

const TemplateModal = ({ open, onClose, onSelectTemplate }) => {
  return (
    <Modal
      version={2}
      open={open}
      setOpen={onClose}
      heading="Choose a template"
      type="dialog"
    >
      <div style={{ padding: '8px 0' }}>
        <p style={{
          fontSize: '14px',
          color: '#666',
          margin: '0 0 24px 0',
        }}>
          Start with a template or create your own custom schedule
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}>
          {TEMPLATES.map((template) => {
            const Icon = template.icon;
            return (
              <button
                key={template.id}
                onClick={() => onSelectTemplate(template)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px',
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = template.color;
                  e.currentTarget.style.backgroundColor = '#fafafa';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e5e7eb';
                  e.currentTarget.style.backgroundColor = '#fff';
                }}
              >
                {/* Icon */}
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: `${template.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon style={{
                    width: '24px',
                    height: '24px',
                    color: template.color,
                  }} />
                </div>

                {/* Text */}
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#1a1a1a',
                    marginBottom: '4px',
                  }}>
                    {template.name}
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: '#666',
                  }}>
                    {template.description}
                  </div>
                </div>

                {/* Arrow */}
                <div style={{
                  color: '#9ca3af',
                  fontSize: '20px',
                }}>
                  →
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
