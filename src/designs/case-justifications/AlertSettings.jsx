// Alert Settings Design - Recreated from reference 2025-12-16
import { useState } from 'react'
import './AlertSettings.css'

// Copy variants for AI explanations setting (prototype only)
const COPY_VARIANTS = [
  {
    id: 'A',
    heading: 'AI Features',
    label: 'Show AI explanations on cases',
    description: 'Display AI-generated explanations on Alert cases so staff can understand why content was flagged. This does not change which alerts are generated.',
  },
  {
    id: 'B',
    heading: 'AI Explanations',
    label: 'Show AI Alert explanations',
    description: 'Help staff understand why content alerted by displaying AI-generated explanations on each Alert case. Explanations provide additional context only and do not change which alerts are generated.',
  },
  {
    id: 'C',
    heading: 'Additional Options',
    label: 'Surface AI insights on cases',
    description: 'Display AI-generated insights on Alert cases to highlight what may be concerning in the content. Insights are informational only and do not affect when alerts are created.',
  },
  {
    id: 'D',
    heading: null, // No heading - just extra spacing
    label: 'Show AI case justifications',
    description: 'Display AI-generated justifications on Alert cases so staff can see why content was flagged. Justifications are informational only and do not change which alerts are generated.',
  },
  {
    id: 'Selected',
    heading: null, // No heading per Jennifer's request
    label: 'Show AI Justifications',
    description: 'Help staff understand why content alerted by displaying AI Justifications on each alert. AI Justifications provide additional context only and do not change which alerts are generated.',
  },
]

function AlertSettings() {
  const [variantIndex, setVariantIndex] = useState(0)
  const currentVariant = COPY_VARIANTS[variantIndex]

  const handlePrevVariant = () => {
    setVariantIndex((prev) => (prev === 0 ? COPY_VARIANTS.length - 1 : prev - 1))
  }

  const handleNextVariant = () => {
    setVariantIndex((prev) => (prev === COPY_VARIANTS.length - 1 ? 0 : prev + 1))
  }
  return (
    <div className="settings-page">
      <div className="settings-container">
        <h1 className="settings-title">Settings - Rollingwood ISD</h1>

        {/* Scheduling Section */}
        <section className="settings-section">
          <h4>Scheduling</h4>
          <p className="section-description">
            Allow Alerts and Human Review to operate 24/7, or customize a schedule for your organization.
          </p>

          <div className="radio-card">
            <label className="radio-label">
              <input type="radio" name="scheduling" value="always_on" />
              <div className="radio-circle"></div>
              <div className="radio-content">
                <h5>Always on</h5>
                <p>Lightspeed Alert and Human Review will operate 24/7 if enabled</p>
              </div>
            </label>
          </div>

          <div className="radio-card selected">
            <label className="radio-label">
              <input type="radio" name="scheduling" value="scheduled" defaultChecked />
              <div className="radio-circle"></div>
              <div className="radio-content">
                <h5>Use a schedule</h5>
                <p>Alerts will only generate notifications during scheduled hours.</p>
              </div>
            </label>

            <div className="schedule-options">
              <h5 className="work-hours-label">Work hours Monday - Friday</h5>
              <div className="time-picker-row">
                <div className="dropdown">
                  <button className="dropdown-trigger">
                    8:00 AM
                    <ChevronDown />
                  </button>
                </div>
                <span className="time-separator">to</span>
                <div className="dropdown">
                  <button className="dropdown-trigger">
                    3:00 PM
                    <ChevronDown />
                  </button>
                </div>
              </div>

              <div className="schedule-divider"></div>

              <div className="radio-option sub-option">
                <label className="radio-label">
                  <input type="radio" name="after-hours" value="delay" defaultChecked />
                  <div className="radio-circle"></div>
                  <div className="radio-content">
                    <h5>Delay Alert email notifications until next scheduled weekday</h5>
                    <p>Human Review will operate at all times. Automatic Alert notifications will be delayed until the next weekday.</p>
                  </div>
                </label>
              </div>

              <div className="radio-option sub-option">
                <label className="radio-label">
                  <input type="radio" name="after-hours" value="turn-off" />
                  <div className="radio-circle"></div>
                  <div className="radio-content">
                    <h5>Turn off all scanning and notifications after work hours</h5>
                    <p>We will not detect new Alerts until the next weekday.</p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        {/* Email Notifications Section */}
        <section className="settings-section">
          <h4>Email Notifications</h4>
          <p className="section-description">
            You can choose whether AI sends an email notification to all your Alert users, or let your users decide if they want to receive notifications. (They can access their notification preferences from the User Profile menu in the top right-hand corner of the Alert app. Keep in mind that changes you make here may override their settings.)
          </p>

          <div className="email-settings-row">
            <div className="email-settings-label">
              <h5>Notification setting</h5>
              <span>Select how email notifications should be handled. This setting applies to system notifications only. It does not apply to Human Review notifications.</span>
            </div>
            <div className="dropdown">
              <button className="dropdown-trigger">
                None
                <ChevronDown />
              </button>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        {/* Monitoring Preferences Section */}
        <section className="settings-section">
          <h4>Monitoring Preferences</h4>
          <p className="section-description">
            Each category generates alerts that represent low, medium or high levels of concern. Select the categories you want to monitor, and then select which level(s) of concern you want to see for each active category. <a href="#">Learn more</a> about each category and how we define low, medium and high levels of concern.
          </p>

          <div className="categories-grid">
            <div className="categories-header">
              <span>Categories</span>
              <span>Level of concern</span>
            </div>

            <CategoryRow
              id="suicide"
              label="Self-harm"
              description="Content that explicitly states or suggests self-harm or encourages another person to harm themselves, either now or in the future."
              level="All levels"
              checked={true}
            />
            <CategoryRow
              id="bullying"
              label="Bullying"
              description="Content that is directed at another individual that is meant to mentally harm, shame, or threaten them."
              level="All levels"
              checked={true}
            />
            <CategoryRow
              id="adult"
              label="Sexual Abuse/Exploitation (Explicit)"
              description="Content specifically referencing sexual abuse, exploitation, or illegal acts. Excludes casual sexual conversations, jokes, or non-explicit discussions."
              level="All levels"
              checked={true}
            />
            <CategoryRow
              id="violence"
              label="Violence"
              description="Content indicative of violence that includes evidence of committed violence or threats of violence."
              level="All levels"
              checked={true}
            />
            <CategoryRow
              id="drugs"
              label="Drugs"
              description="Content that references illegal drugs."
              level="All levels"
              checked={true}
            />
            <CategoryRow
              id="weapons"
              label="Weapons"
              description="Content related to the act of buying, selling, trading, and constructing weapons, or concerning mention of weapons. This includes images of guns and knives (in hand)."
              level="Only high"
              checked={true}
            />
          </div>

          <div className="divider"></div>

          {/* AI Explanations Setting */}
          <div className="ai-setting">
            {currentVariant.heading && (
              <h5 className="ai-setting-heading">{currentVariant.heading}</h5>
            )}
            <label className="checkbox-label standalone">
              <input type="checkbox" />
              <span className="checkbox-box"></span>
              <span className="ai-setting-label">
                {currentVariant.label}
                <span className="tag"><StarIcon /> Early Access</span>
              </span>
            </label>
            <p className="sub-description">
              {currentVariant.description}
            </p>

          </div>
        </section>

        <div className="divider"></div>

        {/* Monitored Languages Section */}
        <section className="settings-section">
          <h4>Monitored Languages</h4>
          <p className="section-description">
            Select additional languages to monitor. English is selected by default. <a href="#">Learn More</a> about language settings.
          </p>

          <div className="language-option">
            <h5>English (Default)</h5>
            <p>Alert AI will scan English text for all selected Content Categories.</p>
          </div>

          <div className="language-option">
            <label className="checkbox-label">
              <input type="checkbox" defaultChecked />
              <span className="checkbox-box"></span>
              <h5>Spanish</h5>
            </label>
            <p className="language-description">Alert AI will scan Spanish text for all selected Content Categories.</p>
          </div>

          <div className="language-option">
            <label className="checkbox-label">
              <input type="checkbox" defaultChecked />
              <span className="checkbox-box"></span>
              <h5>Portuguese</h5>
              <span className="tag"><StarIcon /> Early Access</span>
            </label>
            <p className="language-description">Alert AI will scan Portuguese text for all selected Content Categories.</p>
          </div>

          <div className="language-option">
            <label className="checkbox-label">
              <input type="checkbox" defaultChecked />
              <span className="checkbox-box"></span>
              <h5>Haitian Creole</h5>
              <span className="tag"><StarIcon /> Early Access</span>
            </label>
            <p className="language-description">Alert AI will scan Haitian Creole text. Limited to Self-Harm, Violence, Bullying, and Explicit Content Categories.</p>
          </div>
        </section>

        <div className="divider"></div>

        {/* Privacy Preferences Section */}
        <section className="settings-section">
          <h4>Privacy Preferences</h4>
          <p className="section-description">Set global notification preferences.</p>

          <label className="checkbox-label standalone">
            <input type="checkbox" />
            <span className="checkbox-box"></span>
            <span>Hide Personally Identifiable Information (PII)</span>
          </label>
          <p className="sub-description">
            System notifications and Human Review emails will censor information that can be used to distinguish or trace an individual's identity. When this setting is enabled, escalation contacts will need access to login to Alert to view student PII and additional alert details. We recommend communicating this change to your escalation contacts when changing this setting.
          </p>
        </section>

        <div className="divider"></div>

        {/* Human Review Section */}
        <section className="settings-section">
          <div className="section-header-with-button">
            <h4>Human Review</h4>
            <button className="btn-primary">Enable</button>
          </div>
          <p className="section-description">
            Human Review is not currently enabled. Your organization's Alerts are not currently being monitored by the Lightspeed Human Review team.
          </p>

          <label className="checkbox-label standalone">
            <input type="checkbox" />
            <span className="checkbox-box"></span>
            <h5>Close no risk Alerts</h5>
          </label>
          <p className="sub-description">
            Allow the Lightspeed Human Review team to close no-risk Alerts on your behalf.<br />
            No-risk alerts include alerts reviewed by the Human Review team that are closed as invalid alerts or valid alerts without likely harm.
          </p>

          <a href="#" className="card-link">
            <div className="link-card">
              <div className="link-card-content">
                <h6>Escalation lists</h6>
                <p>Create and edit escalation lists for your district and individual schools.</p>
              </div>
              <ChevronRight />
            </div>
          </a>
        </section>

        <div className="divider"></div>

        {/* Configurations Section */}
        <section className="settings-section">
          <h4>Configurations</h4>
          <p className="section-description">
            Enable Lightspeed Alert monitoring and reporting on student devices and maximize coverage across district-licensed software.
          </p>

          <div className="config-links">
            <a href="#" className="config-card">
              <div className="config-icons">
                <ChromeIcon />
                <WindowsIcon />
                <AppleIcon />
              </div>
              <h5>Installation</h5>
              <p>Install Lightspeed Alert Agents for Chrome, Windows, or Mac.</p>
            </a>

            <a href="#" className="config-card">
              <div className="config-icons">
                <MicrosoftIcon />
                <GoogleIcon />
                <SlackIcon />
                <EmailIcon />
                <TargetIcon />
                <ClassLinkIcon />
              </div>
              <h5>Integrations</h5>
              <p>Integrate Lightspeed Alert with third-party cloud services.</p>
            </a>
          </div>
        </section>

        <div className="bottom-spacer"></div>
      </div>

      {/* Prototype-only: Fixed variant selector banner */}
      <div className="variant-banner">
        <span className="variant-banner-label">
          Copy version: {variantIndex + 1} of {COPY_VARIANTS.length}
        </span>
        <div className="variant-banner-buttons">
          <button className="variant-btn" onClick={handlePrevVariant}>
            &#9664; Previous
          </button>
          <button className="variant-btn" onClick={handleNextVariant}>
            Next &#9654;
          </button>
        </div>
      </div>
    </div>
  )
}

// Helper Components
function CategoryRow({ id, label, description, level, checked }) {
  return (
    <div className="category-row">
      <div className="category-info">
        <label className="checkbox-label">
          <input type="checkbox" id={`topic_${id}`} defaultChecked={checked} />
          <span className="checkbox-box"></span>
          <span className="category-label">{label}</span>
        </label>
        <p className="category-description">{description}</p>
      </div>
      <div className="dropdown">
        <button className="dropdown-trigger">
          {level}
          <ChevronDown />
        </button>
      </div>
    </div>
  )
}

function ChevronDown() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 25" fill="none">
      <path d="M21.8169 7.18508C21.5727 6.94091 21.1777 6.94091 20.9335 7.18508L12 16.1178L3.06648 7.18508C2.82231 6.94091 2.4273 6.94091 2.18313 7.18508C1.93896 7.42926 1.93896 7.82427 2.18313 8.06843L11.1167 17.002C11.36 17.2453 11.68 17.367 12 17.367C12.32 17.367 12.64 17.2453 12.8842 17.002L21.8169 8.06843C22.061 7.82426 22.061 7.42925 21.8169 7.18508Z" fill="currentColor"/>
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 25" fill="none">
      <path d="M7.18313 2.18533C6.93896 2.4295 6.93896 2.82451 7.18313 3.06868L16.1158 12.0022L7.18313 20.9357C6.93896 21.1799 6.93896 21.5749 7.18313 21.8191C7.42731 22.0632 7.82231 22.0632 8.06648 21.8191L17 12.8855C17.2433 12.6422 17.365 12.3222 17.365 12.0022C17.365 11.6822 17.2433 11.3622 17 11.118L8.06648 2.18533C7.82231 1.94115 7.4273 1.94115 7.18313 2.18533Z" fill="currentColor"/>
    </svg>
  )
}

function ChromeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32">
      <circle cx="16" cy="16" r="14" fill="#fff"/>
      <path d="M16 8a8 8 0 0 1 6.93 4H16a4 4 0 0 0-3.46 2l-3.47-6A8 8 0 0 1 16 8z" fill="#EA4335"/>
      <path d="M22.93 12A8 8 0 0 1 16 24l3.46-6A4 4 0 0 0 20 16h6.93z" fill="#FBBC05"/>
      <path d="M16 24a8 8 0 0 1-6.93-12l3.47 6A4 4 0 0 0 16 20v4z" fill="#34A853"/>
      <circle cx="16" cy="16" r="4" fill="#4285F4"/>
    </svg>
  )
}

function WindowsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32">
      <path d="M0 4.5l13 1.8v11.2H0z" fill="#0078D6"/>
      <path d="M15 6.5l17 2.3v9.7H15z" fill="#0078D6"/>
      <path d="M0 18v11.2l13 1.8V18z" fill="#0078D6"/>
      <path d="M15 18v12.2l17 2.3V18z" fill="#0078D6"/>
    </svg>
  )
}

function AppleIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32">
      <path d="M22.5 28c-1.2 1.2-2.5 1-3.8.4-1.4-.6-2.6-.6-4.1 0-1.9.8-2.9.6-4-.4C5.3 22.3 6.1 13.6 12 13.2c1.6.1 2.7.9 3.6.9 1.4 0 4-1.1 5.4-.9 2.1.2 3.7 1.1 4.6 2.8-4.2 2.5-3.2 8.1.9 9.6-.7 1.8-1.6 3.5-3 4.4zM16 12.9c-.2-2.5 1.8-4.6 4.1-4.9.3 2.6-2.4 5.1-4.1 4.9z" fill="#555"/>
    </svg>
  )
}

function MicrosoftIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32">
      <rect x="1" y="1" width="14" height="14" fill="#F25022"/>
      <rect x="17" y="1" width="14" height="14" fill="#7FBA00"/>
      <rect x="1" y="17" width="14" height="14" fill="#00A4EF"/>
      <rect x="17" y="17" width="14" height="14" fill="#FFB900"/>
    </svg>
  )
}

function GoogleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32">
      <path d="M16 6c2.8 0 5.2 1 7.1 2.6l5.3-5.3C25.3 1.2 21 0 16 0 9.7 0 4.3 3.4 1.6 8.4l6.2 4.8C9.3 9.2 12.3 6 16 6z" fill="#EA4335"/>
      <path d="M31.4 16.3c0-1.2-.1-2.4-.3-3.5H16v6.6h8.7c-.4 2-1.5 3.7-3.2 4.9l5 3.9c3-2.7 4.9-6.8 4.9-11.9z" fill="#4285F4"/>
      <path d="M7.8 19c-.5-1-.7-2-.7-3s.3-2 .7-3L1.6 8.4C.6 10.5 0 13.2 0 16s.6 5.5 1.6 7.6l6.2-4.6z" fill="#FBBC05"/>
      <path d="M16 32c4.4 0 8.2-1.5 10.9-4l-5-3.9c-1.5 1-3.5 1.7-5.9 1.7-3.7 0-6.7-3.2-7.2-7.2l-6.2 4.8C4.3 28.6 9.7 32 16 32z" fill="#34A853"/>
    </svg>
  )
}

function SlackIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32">
      <path d="M7.5 16.5a2.5 2.5 0 1 1 0-5h2.5v2.5a2.5 2.5 0 0 1-2.5 2.5z" fill="#36C5F0"/>
      <path d="M11 14a2.5 2.5 0 1 1 5 0v6.5a2.5 2.5 0 1 1-5 0V14z" fill="#36C5F0"/>
      <path d="M16.5 7.5a2.5 2.5 0 1 1 5 0v2.5h-2.5a2.5 2.5 0 0 1-2.5-2.5z" fill="#2EB67D"/>
      <path d="M19 11a2.5 2.5 0 1 1 0 5h-6.5a2.5 2.5 0 1 1 0-5H19z" fill="#2EB67D"/>
      <path d="M25.5 16.5a2.5 2.5 0 1 1 0 5H23v-2.5a2.5 2.5 0 0 1 2.5-2.5z" fill="#ECB22E"/>
      <path d="M22 19a2.5 2.5 0 1 1-5 0v-6.5a2.5 2.5 0 1 1 5 0V19z" fill="#ECB22E"/>
      <path d="M16.5 25.5a2.5 2.5 0 1 1-5 0V23h2.5a2.5 2.5 0 0 1 2.5 2.5z" fill="#E01E5A"/>
      <path d="M14 22a2.5 2.5 0 1 1 0-5h6.5a2.5 2.5 0 1 1 0 5H14z" fill="#E01E5A"/>
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="4" y="7" width="24" height="18" rx="2" stroke="#4285F4" strokeWidth="2" fill="none"/>
      <path d="M4 9l12 8 12-8" stroke="#4285F4" strokeWidth="2" fill="none"/>
    </svg>
  )
}

function TargetIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32">
      <circle cx="16" cy="16" r="12" fill="none" stroke="#E53935" strokeWidth="2"/>
      <circle cx="16" cy="16" r="8" fill="none" stroke="#E53935" strokeWidth="2"/>
      <circle cx="16" cy="16" r="4" fill="#E53935"/>
    </svg>
  )
}

function ClassLinkIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32">
      <circle cx="16" cy="16" r="12" fill="#F7941D"/>
      <path d="M10 16a6 6 0 0 1 12 0" stroke="#fff" strokeWidth="2" fill="none"/>
      <circle cx="16" cy="20" r="3" fill="#fff"/>
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  )
}

export default AlertSettings
