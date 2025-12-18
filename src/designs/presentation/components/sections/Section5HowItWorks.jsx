import Section from '../Section';
import { WorkflowArchitectureDiagram } from '../diagrams';
import styles from './Sections.module.css';

export default function Section5HowItWorks() {
  return (
    <Section id="how-it-works" sectionNumber="05" title="Workflow Architecture & Technical Implementation" variant="wide">
      <p>
        The proposed workflow would operate across three integrated layers: strategic intelligence,
        execution automation, and continuous learning.
      </p>

      <WorkflowArchitectureDiagram />

      <div className={styles.layersContainer}>
        <div className={styles.layer}>
          <div className={styles.layerNumber}>1</div>
          <div className={styles.layerContent}>
            <h3>Product HQ+ (Strategic Intelligence)</h3>
            <p>
              Domain knowledge synthesis and strategic research within the Atlassian ecosystem.
            </p>
            <p className={styles.layerOutput}>
              <strong>Output:</strong> Standardized, high-signal PRD
            </p>
          </div>
        </div>

        <div className={styles.layer}>
          <div className={styles.layerNumber}>2</div>
          <div className={styles.layerContent}>
            <h3>Product Studio (Execution Automation)</h3>
            <p>
              PRD triggers a structured execution process:
            </p>
            <ol className={styles.executionSteps}>
              <li>
                <strong>Generate:</strong> UX/UI components from PRD, codebase patterns, and Material Design
              </li>
              <li>
                <strong>Audit:</strong> Parallel quality evaluation across 7+ dimensions
              </li>
              <li>
                <strong>Refine:</strong> Self-auditing loops surface issues early, keeping humans focused on decisions that matter
              </li>
              <li>
                <strong>Review:</strong> Human governance checkpoint ensures quality and intent alignment
              </li>
              <li>
                <strong>Handoff:</strong> Production-ready React components move to staging
              </li>
            </ol>
          </div>
        </div>

        <div className={styles.layer}>
          <div className={styles.layerNumber}>3</div>
          <div className={styles.layerContent}>
            <h3>Continuous Learning</h3>
            <p>
              Released features generate usage data (Snowflake) and customer feedback (Canny). Analytics
              and insights flow back into:
            </p>
            <ul>
              <li>PRD template refinements</li>
              <li>Agent instruction updates</li>
              <li>Domain knowledge enrichment</li>
            </ul>
            <p className={styles.insight}>
              <strong>The system improves with each cycle.</strong>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.technicalNotes}>
        <h3>Technical Architecture Notes</h3>

        <div className={styles.techGrid}>
          <div className={styles.techItem}>
            <h4>Code-Native Environment</h4>
            <p>All execution occurs within the codebase, ensuring designs reflect real constraints and patterns</p>
          </div>

          <div className={styles.techItem}>
            <h4>Production Context</h4>
            <p>Claude Code has access to existing product code, enabling true cross-product coherence</p>
          </div>

          <div className={styles.techItem}>
            <h4>Material Design System</h4>
            <p>Leverages pre-trained AI knowledge rather than custom design system maintenance</p>
          </div>

        </div>
      </div>
    </Section>
  );
}
