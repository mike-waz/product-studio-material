import styles from './Diagrams.module.css';

export default function WorkflowArchitectureDiagram() {
  return (
    <div className={styles.diagramContainer}>
      <svg
        viewBox="0 0 1000 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.diagramWide}
        role="img"
        aria-label="Workflow architecture diagram showing the flow from Product Design Strategy through UX/UI Execution to Engineering and Release, with Learning Loop"
      >
        {/* TLDR Summary */}
        <g className={styles.tldrBox}>
          <text x="50" y="35" className={styles.tldrTitle}>TLDR:</text>
          <text x="50" y="60" className={styles.tldrText}>Write PRD → Review output → Ship → System learns</text>
        </g>

        {/* Key points */}
        <g transform="translate(550, 25)">
          <circle cx="0" cy="12" r="3" fill="#60A5FA" />
          <text x="15" y="17" className={styles.bulletText}>Multiple specialized sub-agents (UX quality, accessibility, coherence, etc.)</text>
          <circle cx="0" cy="37" r="3" fill="#60A5FA" />
          <text x="15" y="42" className={styles.bulletText}>Orchestrated through Claude Code</text>
          <circle cx="0" cy="62" r="3" fill="#60A5FA" />
          <text x="15" y="67" className={styles.bulletText}>Operating in a defined, governed workflow</text>
        </g>

        {/* Main flow - horizontal boxes */}
        {/* Product Design Strategy */}
        <g transform="translate(50, 120)">
          <rect width="180" height="100" rx="8" className={styles.phaseBox} />
          <text x="90" y="35" className={styles.phaseTitle}>Product Design</text>
          <text x="90" y="55" className={styles.phaseTitle}>Strategy</text>
          <text x="90" y="80" className={styles.phaseSubtitle}>Domain expertise &amp; exploration</text>
        </g>

        {/* Arrow */}
        <path d="M240 170 L280 170" className={styles.flowArrowMain} />
        <polygon points="280,165 295,170 280,175" className={styles.arrowHeadFilled} />

        {/* Quality Check 1 */}
        <g transform="translate(295, 145)">
          <rect width="70" height="50" rx="6" className={styles.qualityBox} />
          <text x="35" y="22" className={styles.qualityText}>Quality</text>
          <text x="35" y="38" className={styles.qualityText}>Check</text>
        </g>

        {/* Arrow */}
        <path d="M375 170 L415 170" className={styles.flowArrowMain} />
        <polygon points="415,165 430,170 415,175" className={styles.arrowHeadFilled} />

        {/* PRD */}
        <g transform="translate(430, 140)">
          <rect width="80" height="60" rx="6" className={styles.prdBox} />
          <text x="40" y="25" className={styles.prdBoxTitle}>Standardized</text>
          <text x="40" y="45" className={styles.prdBoxTitle}>PRD</text>
        </g>

        {/* Arrow */}
        <path d="M520 170 L560 170" className={styles.flowArrowMain} />
        <polygon points="560,165 575,170 560,175" className={styles.arrowHeadFilled} />

        {/* UX/UI Execution - larger box with sub-agents */}
        <g transform="translate(575, 100)">
          <rect width="200" height="180" rx="8" className={styles.executionBox} />
          <text x="100" y="30" className={styles.phaseTitle}>UX/UI Execution</text>
          <text x="100" y="50" className={styles.phaseSubtitleSmall}>Claude Code Agent Stack</text>

          {/* Sub-agents list */}
          <g transform="translate(20, 70)">
            <rect width="160" height="20" rx="4" className={styles.subAgentBox} />
            <text x="80" y="14" className={styles.subAgentText}>UX Quality auditor</text>
          </g>
          <g transform="translate(20, 95)">
            <rect width="160" height="20" rx="4" className={styles.subAgentBox} />
            <text x="80" y="14" className={styles.subAgentText}>Accessibility auditor</text>
          </g>
          <g transform="translate(20, 120)">
            <rect width="160" height="20" rx="4" className={styles.subAgentBox} />
            <text x="80" y="14" className={styles.subAgentText}>X-product coherence</text>
          </g>
          <g transform="translate(20, 145)">
            <rect width="160" height="20" rx="4" className={styles.subAgentBox} />
            <text x="80" y="14" className={styles.subAgentText}>+ more auditors...</text>
          </g>
        </g>

        {/* Arrow */}
        <path d="M785 170 L825 170" className={styles.flowArrowMain} />
        <polygon points="825,165 840,170 825,175" className={styles.arrowHeadFilled} />

        {/* Quality Check 2 */}
        <g transform="translate(840, 145)">
          <rect width="70" height="50" rx="6" className={styles.qualityBox} />
          <text x="35" y="22" className={styles.qualityText}>Quality</text>
          <text x="35" y="38" className={styles.qualityText}>Check</text>
        </g>

        {/* Second row */}
        {/* Engineering */}
        <g transform="translate(50, 320)">
          <rect width="140" height="80" rx="8" className={styles.phaseBox} />
          <text x="70" y="35" className={styles.phaseTitle}>Engineering</text>
          <text x="70" y="60" className={styles.phaseSubtitle}>React-based designs</text>
        </g>

        {/* Arrow from Quality Check 2 down to Engineering */}
        <path d="M875 205 L875 280 L200 280 L200 310" className={styles.flowArrowMain} strokeDasharray="none" />
        <polygon points="195,310 200,325 205,310" className={styles.arrowHeadFilled} />

        {/* Arrow */}
        <path d="M200 410 L200 440 L350 440" className={styles.flowArrowMain} />
        <polygon points="350,435 365,440 350,445" className={styles.arrowHeadFilled} />

        {/* Quality Check 3 */}
        <g transform="translate(365, 415)">
          <rect width="70" height="50" rx="6" className={styles.qualityBox} />
          <text x="35" y="22" className={styles.qualityText}>Quality</text>
          <text x="35" y="38" className={styles.qualityText}>Check</text>
        </g>

        {/* Arrow */}
        <path d="M445 440 L505 440" className={styles.flowArrowMain} />
        <polygon points="505,435 520,440 505,445" className={styles.arrowHeadFilled} />

        {/* Release */}
        <g transform="translate(520, 400)">
          <rect width="120" height="80" rx="8" className={styles.releaseBox} />
          <text x="60" y="45" className={styles.phaseTitle}>Release</text>
        </g>

        {/* Learning Loop */}
        <g transform="translate(700, 320)">
          <rect width="250" height="160" rx="8" className={styles.learningBox} />
          <text x="125" y="30" className={styles.learningTitle}>Learning/Improvement Loop</text>

          <text x="125" y="60" className={styles.learningItem}>Usage &amp; feedback data</text>
          <text x="125" y="80" className={styles.learningItemMuted}>Pendo/Snowflake, Canny</text>

          <text x="125" y="110" className={styles.learningItem}>Analytics &amp; Insights</text>

          <text x="125" y="140" className={styles.learningItemMuted}>→ PRD template updates</text>
          <text x="125" y="158" className={styles.learningItemMuted}>→ Agent instruction refinement</text>
        </g>

        {/* Arrow from Release to Learning */}
        <path d="M650 440 L690 440" className={styles.flowArrowMain} />
        <polygon points="690,435 705,440 690,445" className={styles.arrowHeadFilled} />

        {/* Loop back arrow */}
        <path d="M825 320 L825 100 L140 100 L140 110" className={styles.loopArrow} />
        <polygon points="135,110 140,125 145,110" className={styles.arrowHeadLoop} />

        {/* Time indicators */}
        <g transform="translate(920, 180)">
          <text className={styles.timeLabel}>Hours</text>
          <text y="20" className={styles.timeLabelSub}>from PRD</text>
          <text y="40" className={styles.timeLabelSub}>to staging</text>
        </g>
      </svg>
    </div>
  );
}
