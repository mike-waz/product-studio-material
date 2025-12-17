import styles from './Diagrams.module.css';

export default function PMAgentTeamDiagram() {
  // Colors from design system
  const colors = {
    bgCard: '#1c1c20',
    bgElevated: '#18181b',
    textPrimary: '#fafafa',
    textSecondary: '#d4d4d8',
    textTertiary: '#a1a1aa',
    border: '#27272a',
    accent: '#60A5FA',
  };

  // Layout constants
  const pmBoxX = 40;
  const pmBoxWidth = 200;
  const pmBoxHeight = 72;
  const pmCenterX = pmBoxX + pmBoxWidth / 2; // 140

  const agentBoxX = 340;
  const agentBoxWidth = 180;
  const agentBoxHeight = 52;
  const agentCenterX = agentBoxX + agentBoxWidth / 2; // 430
  const agentGap = 16;

  // Agent Y positions (4 agents, evenly spaced)
  const agent1Y = 44;
  const agent2Y = agent1Y + agentBoxHeight + agentGap; // 112
  const agent3Y = agent2Y + agentBoxHeight + agentGap; // 180
  const agent4Y = agent3Y + agentBoxHeight + agentGap; // 248

  // PM vertically centered with agents
  const agentStackTop = agent1Y;
  const agentStackBottom = agent4Y + agentBoxHeight;
  const agentStackCenter = (agentStackTop + agentStackBottom) / 2;
  const pmBoxY = agentStackCenter - pmBoxHeight / 2;
  const pmCenterY = pmBoxY + pmBoxHeight / 2;

  // Connection points
  const pmRight = pmBoxX + pmBoxWidth;
  const agentLeft = agentBoxX;
  const hubX = (pmRight + agentLeft) / 2 + 10; // slightly right of center

  return (
    <div className={styles.diagramContainer}>
      <svg
        viewBox="0 0 560 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.diagram}
        role="img"
        aria-label="Diagram showing a Product Manager orchestrating multiple AI agents"
      >
        {/* Column labels */}
        <text
          x={pmCenterX} y="24"
          fill={colors.textTertiary}
          fontSize="11"
          fontWeight="500"
          textAnchor="middle"
          letterSpacing="0.08em"
        >
          HUMAN
        </text>
        <text
          x={agentCenterX} y="24"
          fill={colors.textTertiary}
          fontSize="11"
          fontWeight="500"
          textAnchor="middle"
          letterSpacing="0.08em"
        >
          AI AGENTS
        </text>

        {/* Connection lines - straight from PM to hub, then to each agent */}
        {/* Main horizontal from PM */}
        <line
          x1={pmRight} y1={pmCenterY}
          x2={hubX} y2={pmCenterY}
          stroke={colors.textTertiary}
          strokeWidth="1.5"
        />

        {/* Lines from hub to each agent */}
        <line
          x1={hubX} y1={pmCenterY}
          x2={agentLeft} y2={agent1Y + agentBoxHeight / 2}
          stroke={colors.textTertiary}
          strokeWidth="1.5"
        />
        <line
          x1={hubX} y1={pmCenterY}
          x2={agentLeft} y2={agent2Y + agentBoxHeight / 2}
          stroke={colors.textTertiary}
          strokeWidth="1.5"
        />
        <line
          x1={hubX} y1={pmCenterY}
          x2={agentLeft} y2={agent3Y + agentBoxHeight / 2}
          stroke={colors.textTertiary}
          strokeWidth="1.5"
        />
        <line
          x1={hubX} y1={pmCenterY}
          x2={agentLeft} y2={agent4Y + agentBoxHeight / 2}
          stroke={colors.textTertiary}
          strokeWidth="1.5"
        />

        {/* Hub dot */}
        <circle cx={hubX} cy={pmCenterY} r="3" fill={colors.textTertiary} />


        {/* Product Manager box */}
        <rect
          x={pmBoxX} y={pmBoxY}
          width={pmBoxWidth} height={pmBoxHeight}
          rx="12"
          fill={colors.bgCard}
          stroke={colors.textTertiary}
          strokeWidth="1"
        />
        <text
          x={pmCenterX} y={pmCenterY + 5}
          fill={colors.textPrimary}
          fontSize="15"
          fontWeight="500"
          textAnchor="middle"
        >
          Product Manager
        </text>

        {/* AI Agent boxes */}

        {/* ChatGPT, Claude */}
        <rect
          x={agentBoxX} y={agent1Y}
          width={agentBoxWidth} height={agentBoxHeight}
          rx="12"
          fill={colors.bgElevated}
          stroke={colors.textTertiary}
          strokeWidth="1"
        />
        <text
          x={agentCenterX} y={agent1Y + agentBoxHeight / 2 + 5}
          fill={colors.textSecondary}
          fontSize="14"
          fontWeight="500"
          textAnchor="middle"
        >
          ChatGPT, Claude
        </text>

        {/* BOB */}
        <rect
          x={agentBoxX} y={agent2Y}
          width={agentBoxWidth} height={agentBoxHeight}
          rx="12"
          fill={colors.bgElevated}
          stroke={colors.textTertiary}
          strokeWidth="1"
        />
        <text
          x={agentCenterX} y={agent2Y + agentBoxHeight / 2 + 5}
          fill={colors.textSecondary}
          fontSize="14"
          fontWeight="500"
          textAnchor="middle"
        >
          BOB
        </text>

        {/* Product Strategy Agent - accent border */}
        <rect
          x={agentBoxX} y={agent3Y}
          width={agentBoxWidth} height={agentBoxHeight}
          rx="12"
          fill={colors.bgCard}
          stroke={colors.accent}
          strokeWidth="1"
        />
        <text
          x={agentCenterX} y={agent3Y + agentBoxHeight / 2 + 5}
          fill={colors.textPrimary}
          fontSize="13"
          fontWeight="500"
          textAnchor="middle"
        >
          Product Strategy Agent
        </text>

        {/* Product Design Agent - accent border */}
        <rect
          x={agentBoxX} y={agent4Y}
          width={agentBoxWidth} height={agentBoxHeight}
          rx="12"
          fill={colors.bgCard}
          stroke={colors.accent}
          strokeWidth="1"
        />
        <text
          x={agentCenterX} y={agent4Y + agentBoxHeight / 2 + 5}
          fill={colors.textPrimary}
          fontSize="13"
          fontWeight="500"
          textAnchor="middle"
        >
          Product Design Agent
        </text>
      </svg>
    </div>
  );
}
