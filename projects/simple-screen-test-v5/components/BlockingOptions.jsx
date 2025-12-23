import React from 'react';
import {
  RadioGroup,
  RadioButton,
  Checkbox,
  PauseIcon,
  ShieldBlockIcon,
} from 'design_system';

const CATEGORIES = [
  { id: 'games', label: 'Games' },
  { id: 'social', label: 'Social Media' },
  { id: 'entertainment', label: 'Entertainment' },
  { id: 'streaming', label: 'Streaming Video' },
  { id: 'shopping', label: 'Shopping' },
];

const BlockingOptions = ({ blockingType, categories, onBlockingTypeChange, onCategoriesChange }) => {
  const toggleCategory = (categoryLabel) => {
    if (categories.includes(categoryLabel)) {
      onCategoriesChange(categories.filter(c => c !== categoryLabel));
    } else {
      onCategoriesChange([...categories, categoryLabel]);
    }
  };

  return (
    <div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}>
        {/* Full Internet Pause */}
        <label
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
            padding: '12px',
            border: blockingType === 'full' ? '2px solid #0284c7' : '1px solid #e0e0e0',
            borderRadius: '8px',
            backgroundColor: blockingType === 'full' ? '#f0f9ff' : '#fff',
            cursor: 'pointer',
          }}
        >
          <input
            type="radio"
            name="blockingType"
            value="full"
            checked={blockingType === 'full'}
            onChange={() => onBlockingTypeChange('full')}
            style={{ marginTop: '2px' }}
          />
          <div style={{ flex: 1 }}>
            <div style={{
              fontWeight: 500,
              fontSize: '14px',
              color: '#1a1a1a',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <PauseIcon />
              Full Internet Pause
            </div>
            <div style={{
              fontSize: '13px',
              color: '#666',
              marginTop: '4px',
            }}>
              Block all web browsing during this schedule
            </div>
          </div>
        </label>

        {/* Category Blocking */}
        <div
          style={{
            padding: '12px',
            border: blockingType === 'categories' ? '2px solid #0284c7' : '1px solid #e0e0e0',
            borderRadius: '8px',
            backgroundColor: blockingType === 'categories' ? '#f0f9ff' : '#fff',
          }}
        >
          <label
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              cursor: 'pointer',
            }}
          >
            <input
              type="radio"
              name="blockingType"
              value="categories"
              checked={blockingType === 'categories'}
              onChange={() => onBlockingTypeChange('categories')}
              style={{ marginTop: '2px' }}
            />
            <div style={{ flex: 1 }}>
              <div style={{
                fontWeight: 500,
                fontSize: '14px',
                color: '#1a1a1a',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <ShieldBlockIcon />
                Block Specific Categories
              </div>
              <div style={{
                fontSize: '13px',
                color: '#666',
                marginTop: '4px',
              }}>
                Choose which types of sites to block
              </div>
            </div>
          </label>

          {blockingType === 'categories' && (
            <div style={{
              marginTop: '12px',
              paddingTop: '12px',
              borderTop: '1px solid #e0e0e0',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px 16px',
            }}>
              {CATEGORIES.map((cat) => (
                <label
                  key={cat.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    fontSize: '14px',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={categories.includes(cat.label)}
                    onChange={() => toggleCategory(cat.label)}
                  />
                  {cat.label}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Block List */}
        <label
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
            padding: '12px',
            border: blockingType === 'blocklist' ? '2px solid #0284c7' : '1px solid #e0e0e0',
            borderRadius: '8px',
            backgroundColor: blockingType === 'blocklist' ? '#f0f9ff' : '#fff',
            cursor: 'pointer',
          }}
        >
          <input
            type="radio"
            name="blockingType"
            value="blocklist"
            checked={blockingType === 'blocklist'}
            onChange={() => onBlockingTypeChange('blocklist')}
            style={{ marginTop: '2px' }}
          />
          <div style={{ flex: 1 }}>
            <div style={{
              fontWeight: 500,
              fontSize: '14px',
              color: '#1a1a1a',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <ShieldBlockIcon />
              Apply Block List
            </div>
            <div style={{
              fontSize: '13px',
              color: '#666',
              marginTop: '4px',
            }}>
              Use your existing block list during this schedule
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default BlockingOptions;
