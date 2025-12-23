import React from 'react';
import { RadioButton, Checkbox } from 'design_system';

const CATEGORIES = [
  { id: 'games', label: 'Games' },
  { id: 'social_media', label: 'Social Media' },
  { id: 'entertainment', label: 'Entertainment' },
  { id: 'streaming', label: 'Streaming Video' },
  { id: 'shopping', label: 'Shopping' },
  { id: 'news', label: 'News' },
];

const BlockingOptions = ({
  blockType,
  onBlockTypeChange,
  selectedCategories,
  onCategoriesChange,
  hasBlockList = true, // Whether the user has a block list configured
}) => {
  const handleCategoryToggle = (categoryId) => {
    if (selectedCategories.includes(categoryId)) {
      onCategoriesChange(selectedCategories.filter(c => c !== categoryId));
    } else {
      onCategoriesChange([...selectedCategories, categoryId]);
    }
  };

  return (
    <div>
      <label style={{
        display: 'block',
        fontSize: '14px',
        fontWeight: 500,
        color: '#374151',
        marginBottom: '12px',
      }}>
        What to block
      </label>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}>
        {/* Block Everything */}
        <label style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px',
          padding: '12px',
          backgroundColor: blockType === 'everything' ? '#f0fdfa' : '#fff',
          border: blockType === 'everything' ? '2px solid #0d9488' : '1px solid #e5e7eb',
          borderRadius: '8px',
          cursor: 'pointer',
        }}>
          <input
            type="radio"
            name="blockType"
            value="everything"
            checked={blockType === 'everything'}
            onChange={() => onBlockTypeChange('everything')}
            style={{ marginTop: '2px' }}
          />
          <div>
            <div style={{
              fontSize: '14px',
              fontWeight: 500,
              color: '#1a1a1a',
            }}>
              Block Everything
            </div>
            <div style={{
              fontSize: '13px',
              color: '#666',
              marginTop: '2px',
            }}>
              Pause all internet access during this schedule
            </div>
          </div>
        </label>

        {/* Block Categories */}
        <div style={{
          padding: '12px',
          backgroundColor: blockType === 'categories' ? '#f0fdfa' : '#fff',
          border: blockType === 'categories' ? '2px solid #0d9488' : '1px solid #e5e7eb',
          borderRadius: '8px',
        }}>
          <label style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
            cursor: 'pointer',
          }}>
            <input
              type="radio"
              name="blockType"
              value="categories"
              checked={blockType === 'categories'}
              onChange={() => onBlockTypeChange('categories')}
              style={{ marginTop: '2px' }}
            />
            <div>
              <div style={{
                fontSize: '14px',
                fontWeight: 500,
                color: '#1a1a1a',
              }}>
                Block Categories
              </div>
              <div style={{
                fontSize: '13px',
                color: '#666',
                marginTop: '2px',
              }}>
                Choose which types of sites to block
              </div>
            </div>
          </label>

          {/* Category checkboxes - only shown when this option is selected */}
          {blockType === 'categories' && (
            <div style={{
              marginTop: '12px',
              paddingLeft: '28px',
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '8px',
            }}>
              {CATEGORIES.map((category) => (
                <label
                  key={category.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    color: '#374151',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category.id)}
                    onChange={() => handleCategoryToggle(category.id)}
                  />
                  {category.label}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Apply Block List */}
        <label style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px',
          padding: '12px',
          backgroundColor: blockType === 'blocklist' ? '#f0fdfa' : '#fff',
          border: blockType === 'blocklist' ? '2px solid #0d9488' : '1px solid #e5e7eb',
          borderRadius: '8px',
          cursor: hasBlockList ? 'pointer' : 'not-allowed',
          opacity: hasBlockList ? 1 : 0.5,
        }}>
          <input
            type="radio"
            name="blockType"
            value="blocklist"
            checked={blockType === 'blocklist'}
            onChange={() => hasBlockList && onBlockTypeChange('blocklist')}
            disabled={!hasBlockList}
            style={{ marginTop: '2px' }}
          />
          <div>
            <div style={{
              fontSize: '14px',
              fontWeight: 500,
              color: '#1a1a1a',
            }}>
              Apply Block List
            </div>
            <div style={{
              fontSize: '13px',
              color: '#666',
              marginTop: '2px',
            }}>
              {hasBlockList
                ? 'Use your existing block list during this schedule'
                : 'No block list configured — set one up in Settings first'
              }
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default BlockingOptions;
