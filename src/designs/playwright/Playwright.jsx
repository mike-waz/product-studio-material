import StudentCard from './StudentCard'
import StudentCardTailwind from './StudentCardTailwind'
import ClassCard from './ClassCard'
import './Playwright.css'

function Playwright() {
  return (
    <div className="playwright-container">
      <h1>Card Components</h1>
      <p className="subtitle">Figma MCP + Tailwind (No Playwright)</p>

      <div className="card-showcase" style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div>
          <h3 style={{ marginBottom: '12px', fontSize: '14px', color: '#666' }}>Student Card</h3>
          <StudentCardTailwind />
        </div>
        <div>
          <h3 style={{ marginBottom: '12px', fontSize: '14px', color: '#666' }}>Class Card</h3>
          <ClassCard />
        </div>
      </div>
    </div>
  )
}

export default Playwright
