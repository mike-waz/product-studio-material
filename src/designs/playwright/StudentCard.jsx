import './StudentCard.css'

// Using a placeholder image for the screenshot
const FORTNITE_PLACEHOLDER = "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop"

// Icons as SVG components (matching Figma icons)
const TabsIcon = () => (
  <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
    <rect x="0.5" y="0.5" width="15" height="13" rx="1.5" stroke="currentColor" fill="none"/>
    <line x1="0" y1="4" x2="16" y2="4" stroke="currentColor"/>
    <rect x="1" y="1" width="4" height="2" rx="0.5" fill="currentColor"/>
  </svg>
)

const CheckmarkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const EyeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 3C4.5 3 1.5 6 1 8C1.5 10 4.5 13 8 13C11.5 13 14.5 10 15 8C14.5 6 11.5 3 8 3Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <circle cx="8" cy="8" r="2" fill="currentColor"/>
  </svg>
)

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 2L9.5 6.5L14 8L9.5 9.5L8 14L6.5 9.5L2 8L6.5 6.5L8 2Z" fill="currentColor"/>
  </svg>
)

const MoreIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="4" cy="8" r="1.5" fill="currentColor"/>
    <circle cx="8" cy="8" r="1.5" fill="currentColor"/>
    <circle cx="12" cy="8" r="1.5" fill="currentColor"/>
  </svg>
)

function StudentCard({
  name = "Name goes here",
  domain = "Domain goes here",
  screenshotUrl = FORTNITE_PLACEHOLDER,
  tabCount = 11,
  isCompleted = true,
  isOffTask = true,
  hasAI = true,
  additionalCount = 1
}) {
  return (
    <div className="student-card">
      <div className="card-screenshot">
        <img src={screenshotUrl} alt={`${name}'s active tab`} />
      </div>

      <div className="card-info">
        <h3 className="student-name">{name}</h3>
        <p className="student-domain">{domain}</p>
      </div>

      <div className="card-actions">
        <div className="card-actions-left">
          {/* Tab count badge - Teal */}
          <button className="badge tab-count">
            <TabsIcon />
            <span className="badge-text">{tabCount}</span>
          </button>

          {/* Completed badge - Green */}
          {isCompleted && (
            <button className="badge completed">
              <CheckmarkIcon />
            </button>
          )}

          {/* Off-task badge - Gold/Orange */}
          {isOffTask && (
            <button className="badge off-task">
              <EyeIcon />
            </button>
          )}

          {/* AI Active badge - Purple */}
          {hasAI && (
            <button className="badge ai-active">
              <SparkleIcon />
            </button>
          )}

          {/* Collapsed badges pill */}
          {additionalCount > 0 && (
            <button className="badge collapsed">
              <span className="badge-text">+{additionalCount}</span>
            </button>
          )}
        </div>

        <div className="card-actions-right">
          {/* More button */}
          <button className="more-btn">
            <MoreIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default StudentCard
