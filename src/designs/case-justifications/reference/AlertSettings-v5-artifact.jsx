// Alert Settings Page - Version 5 (Selected)
// Paste into Claude.app and ask: "Render this as a React artifact"

import { useState } from 'react'

export default function AlertSettings() {
  const [scheduling, setScheduling] = useState('scheduled')
  const [afterHours, setAfterHours] = useState('delay')

  const styles = {
    page: { fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: '#f8f9fa', minHeight: '100vh', padding: '32px' },
    container: { maxWidth: '800px', margin: '0 auto', backgroundColor: '#fff', borderRadius: '8px', padding: '32px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' },
    title: { fontSize: '24px', fontWeight: 600, marginBottom: '32px', color: '#111' },
    section: { marginBottom: '32px' },
    sectionTitle: { fontSize: '16px', fontWeight: 600, marginBottom: '8px', color: '#111' },
    description: { fontSize: '14px', color: '#6b7280', marginBottom: '16px', lineHeight: 1.5 },
    divider: { height: '1px', backgroundColor: '#e5e7eb', margin: '32px 0' },
    radioCard: { border: '1px solid #e5e7eb', borderRadius: '8px', padding: '16px', marginBottom: '12px', cursor: 'pointer' },
    radioCardSelected: { border: '1px solid #2563eb', borderRadius: '8px', padding: '16px', marginBottom: '12px', backgroundColor: '#f0f7ff', cursor: 'pointer' },
    radioLabel: { display: 'flex', alignItems: 'flex-start', gap: '12px' },
    radioTitle: { fontSize: '14px', fontWeight: 500, color: '#111', marginBottom: '4px' },
    radioDesc: { fontSize: '13px', color: '#6b7280' },
    checkboxLabel: { display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' },
    checkboxText: { fontWeight: 500, color: '#111' },
    subDescription: { fontSize: '13px', color: '#6b7280', marginTop: '8px', marginLeft: '24px', lineHeight: 1.5 },
    betaTag: { marginLeft: '8px', fontSize: '11px', padding: '2px 8px', backgroundColor: '#e0e7ff', color: '#4338ca', borderRadius: '4px', fontWeight: 500 },
    link: { color: '#2563eb', textDecoration: 'none' },
    table: { width: '100%', borderCollapse: 'collapse' },
    tableHeader: { display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #e5e7eb', fontSize: '12px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' },
    categoryRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '16px 0', borderBottom: '1px solid #e5e7eb' },
    categoryInfo: { flex: 1 },
    categoryLabel: { fontWeight: 500, color: '#111', marginBottom: '4px' },
    categoryDesc: { fontSize: '13px', color: '#6b7280', lineHeight: 1.4 },
    dropdown: { padding: '8px 12px', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '13px', backgroundColor: '#fff', cursor: 'pointer' },
    timeRow: { display: 'flex', alignItems: 'center', gap: '12px', marginTop: '16px' },
    scheduleOptions: { marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #e5e7eb' },
  }

  const categories = [
    { id: 'suicide', label: 'Self-harm', description: 'Content that explicitly states or suggests self-harm or encourages another person to harm themselves.', level: 'All levels' },
    { id: 'bullying', label: 'Bullying', description: 'Content directed at another individual meant to mentally harm, shame, or threaten them.', level: 'All levels' },
    { id: 'adult', label: 'Sexual Abuse/Exploitation (Explicit)', description: 'Content specifically referencing sexual abuse, exploitation, or illegal acts.', level: 'All levels' },
    { id: 'violence', label: 'Violence', description: 'Content indicative of violence including evidence of committed violence or threats.', level: 'All levels' },
    { id: 'drugs', label: 'Drugs', description: 'Content that references illegal drugs.', level: 'All levels' },
    { id: 'weapons', label: 'Weapons', description: 'Content related to buying, selling, trading, and constructing weapons.', level: 'Only high' },
  ]

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Settings - Rollingwood ISD</h1>

        {/* Scheduling */}
        <section style={styles.section}>
          <h4 style={styles.sectionTitle}>Scheduling</h4>
          <p style={styles.description}>Allow Alerts and Human Review to operate 24/7, or customize a schedule.</p>

          <div style={scheduling === 'always' ? styles.radioCardSelected : styles.radioCard} onClick={() => setScheduling('always')}>
            <label style={styles.radioLabel}>
              <input type="radio" checked={scheduling === 'always'} onChange={() => setScheduling('always')} />
              <div>
                <div style={styles.radioTitle}>Always on</div>
                <div style={styles.radioDesc}>Lightspeed Alert and Human Review will operate 24/7</div>
              </div>
            </label>
          </div>

          <div style={scheduling === 'scheduled' ? styles.radioCardSelected : styles.radioCard} onClick={() => setScheduling('scheduled')}>
            <label style={styles.radioLabel}>
              <input type="radio" checked={scheduling === 'scheduled'} onChange={() => setScheduling('scheduled')} />
              <div>
                <div style={styles.radioTitle}>Use a schedule</div>
                <div style={styles.radioDesc}>Alerts will only generate notifications during scheduled hours.</div>
              </div>
            </label>
            {scheduling === 'scheduled' && (
              <div style={styles.scheduleOptions}>
                <div style={{ fontSize: '13px', fontWeight: 500, marginBottom: '8px' }}>Work hours Monday - Friday</div>
                <div style={styles.timeRow}>
                  <select style={styles.dropdown}><option>8:00 AM</option></select>
                  <span>to</span>
                  <select style={styles.dropdown}><option>3:00 PM</option></select>
                </div>
              </div>
            )}
          </div>
        </section>

        <div style={styles.divider} />

        {/* Monitoring Preferences */}
        <section style={styles.section}>
          <h4 style={styles.sectionTitle}>Monitoring Preferences</h4>
          <p style={styles.description}>
            Select the categories you want to monitor, and the level(s) of concern for each. <a href="#" style={styles.link}>Learn more</a>
          </p>

          <div style={styles.tableHeader}>
            <span>Categories</span>
            <span>Level of concern</span>
          </div>

          {categories.map(cat => (
            <div key={cat.id} style={styles.categoryRow}>
              <div style={styles.categoryInfo}>
                <label style={styles.checkboxLabel}>
                  <input type="checkbox" defaultChecked />
                  <span style={styles.categoryLabel}>{cat.label}</span>
                </label>
                <p style={{ ...styles.categoryDesc, marginLeft: '24px' }}>{cat.description}</p>
              </div>
              <select style={styles.dropdown}><option>{cat.level}</option></select>
            </div>
          ))}

          {/* AI Prediction Analysis Setting - Version 5 */}
          <div style={{ marginTop: '32px' }}>
            <label style={styles.checkboxLabel}>
              <input type="checkbox" />
              <span style={styles.checkboxText}>
                Show AI Prediction Analysis
                <span style={styles.betaTag}>Beta</span>
              </span>
            </label>
            <p style={styles.subDescription}>
              Help staff understand why content alerted by displaying AI Prediction Analysis on each Alert case. AI Prediction Analysis provides additional context only and does not change which alerts are generated. <a href="#" style={styles.link}>Learn more</a>
            </p>
          </div>
        </section>

        <div style={styles.divider} />

        {/* Monitored Languages */}
        <section style={styles.section}>
          <h4 style={styles.sectionTitle}>Monitored Languages</h4>
          <p style={styles.description}>Select additional languages to monitor. English is selected by default.</p>

          <div style={{ marginBottom: '16px' }}>
            <div style={{ fontWeight: 500, marginBottom: '4px' }}>English (Default)</div>
            <div style={{ fontSize: '13px', color: '#6b7280' }}>Alert AI will scan English text for all selected Content Categories.</div>
          </div>

          <label style={{ ...styles.checkboxLabel, marginBottom: '16px' }}>
            <input type="checkbox" defaultChecked />
            <div>
              <div style={{ fontWeight: 500 }}>Spanish</div>
              <div style={{ fontSize: '13px', color: '#6b7280' }}>Alert AI will scan Spanish text for all selected Content Categories.</div>
            </div>
          </label>

          <label style={{ ...styles.checkboxLabel, marginBottom: '16px' }}>
            <input type="checkbox" defaultChecked />
            <div>
              <div style={{ fontWeight: 500 }}>Portuguese <span style={{ ...styles.betaTag, backgroundColor: '#fef3c7', color: '#92400e' }}>Early Access</span></div>
              <div style={{ fontSize: '13px', color: '#6b7280' }}>Alert AI will scan Portuguese text for all selected Content Categories.</div>
            </div>
          </label>
        </section>

        <div style={styles.divider} />

        {/* Privacy Preferences */}
        <section style={styles.section}>
          <h4 style={styles.sectionTitle}>Privacy Preferences</h4>
          <p style={styles.description}>Set global notification preferences.</p>

          <label style={styles.checkboxLabel}>
            <input type="checkbox" />
            <span style={styles.checkboxText}>Hide Personally Identifiable Information (PII)</span>
          </label>
          <p style={styles.subDescription}>
            System notifications and Human Review emails will censor information that can identify an individual.
          </p>
        </section>
      </div>
    </div>
  )
}
