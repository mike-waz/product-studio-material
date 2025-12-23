import { useState } from 'react'
import './App.css'

// Import designs here as you create them
import AlertSettings from './designs/case-justifications/AlertSettings'
import Presentation from './designs/presentation/Presentation'
import Playwright from './designs/playwright/Playwright'
import PasswordGate from './components/PasswordGate'

// Project: Simple Screen Test-v3
import ScheduleList from '../projects/simple-screen-test-v3/components/ScheduleList'

function App() {
  const [currentDesign, setCurrentDesign] = useState(null)

  // Add new designs to this list
  const designs = [
    { id: 'alert-settings', name: 'Alert Settings', component: AlertSettings },
    { id: 'presentation', name: 'Presentation', component: Presentation },
    { id: 'playwright', name: 'Student Card (Playwright)', component: Playwright },
    { id: 'schedule-list', name: 'Schedule List (v3)', component: ScheduleList },
    // Add more designs here...
  ]

  const activeDesigns = designs.filter(d => d.component !== null)

  if (currentDesign) {
    const design = designs.find(d => d.id === currentDesign)
    if (design?.component) {
      const DesignComponent = design.component
      return (
        <PasswordGate>
          <div className="design-view">
            <button className="back-button" onClick={() => setCurrentDesign(null)}>
              ← Back to Gallery
            </button>
            <DesignComponent />
          </div>
        </PasswordGate>
      )
    }
  }

  return (
    <PasswordGate>
      <div className="workspace">
        <header className="workspace-header">
          <h1>Design Workspace</h1>
          <p>Your personal design sandbox</p>
        </header>

        <main className="design-gallery">
          {activeDesigns.length > 0 ? (
            <div className="design-grid">
              {activeDesigns.map(design => (
                <button
                  key={design.id}
                  className="design-card"
                  onClick={() => setCurrentDesign(design.id)}
                >
                  <div className="design-card-preview">
                    <span className="preview-placeholder">Preview</span>
                  </div>
                  <h3>{design.name}</h3>
                </button>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h2>Ready to design!</h2>
              <p>Your first project: <strong>Alert Settings</strong></p>
              <p className="hint">Describe your existing settings page and I'll build it here.</p>
            </div>
          )}
        </main>

        <footer className="workspace-footer">
          <p>Designs are saved in <code>src/designs/</code></p>
        </footer>
      </div>
    </PasswordGate>
  )
}

export default App
