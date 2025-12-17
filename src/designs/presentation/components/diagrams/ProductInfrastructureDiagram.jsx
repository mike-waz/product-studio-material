import { useState } from 'react';
import styles from './ProductInfrastructureDiagram.module.css';

export default function ProductInfrastructureDiagram({ onProductHQClick, onProductStudioClick }) {
  const [showPrdTooltip, setShowPrdTooltip] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {/* Left side - Product HQ+ */}
        <div className={styles.system}>
          <div className={styles.label}>STRATEGY</div>
          <h3 className={styles.title}>Product HQ+</h3>
          <p className={styles.tagline}>High-signal strategic inputs</p>

          <div className={styles.stack}>
            <div className={styles.stackItem}>Domain knowledge agentic AI stack</div>
            <div className={styles.stackItemMuted}>Atlassian Rovo</div>
            <div className={styles.stackItemMuted}>Confluence / Jira</div>
          </div>

          <button
            className={styles.detailsLink}
            onClick={onProductHQClick}
            type="button"
          >11
            Get Details →
          </button>
        </div>

        {/* Center - PRD */}
        <div className={styles.center}>
          <div className={styles.arrow}>
            <div className={styles.arrowLine} />
            <div className={styles.arrowHead} />
          </div>

          <div className={styles.prdWrapper}>
            <div
              className={styles.prdDocument}
              onMouseEnter={() => setShowPrdTooltip(true)}
              onMouseLeave={() => setShowPrdTooltip(false)}
            >
              <div className={styles.prdLine} />
              <div className={styles.prdLine} style={{ width: '70%' }} />
              <div className={styles.prdLine} />
              <div className={styles.prdLine} style={{ width: '50%' }} />
              <div className={styles.prdLine} style={{ width: '60%' }} />
            </div>
            <div className={styles.prdLabel}>PRD</div>
            {showPrdTooltip && (
              <div className={styles.prdTooltip}>
                The PRD serves as the structured interface between strategic thinking and tactical execution, ensuring clarity and consistency across the product development pipeline.
              </div>
            )}
          </div>

          <div className={styles.arrow}>
            <div className={styles.arrowLine} />
            <div className={styles.arrowHead} />
          </div>
        </div>

        {/* Right side - Product Studio */}
        <div className={styles.system}>
          <div className={styles.label}>EXECUTION</div>
          <h3 className={styles.title}>Product Studio</h3>
          <p className={styles.tagline}>Production-ready designs in hours</p>

          <div className={styles.stack}>
            <div className={styles.stackItem}>UX/UI agentic AI stack</div>
            <div className={styles.stackItemMuted}>Claude Code</div>
            <div className={styles.stackItemMuted}>Codebase</div>
          </div>

          <button
            className={styles.detailsLink}
            onClick={onProductStudioClick}
            type="button"
          >
            Get Details →
          </button>
        </div>
      </div>

      {/* Bottom tagline */}
      <p className={styles.bottomTagline}>
        Together: Strategy to production <strong>in hours</strong>, with continuous improvement
      </p>
    </div>
  );
}
