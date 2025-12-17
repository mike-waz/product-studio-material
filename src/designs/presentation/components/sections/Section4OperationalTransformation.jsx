import Section from '../Section';
import styles from './Sections.module.css';

export default function Section4OperationalTransformation() {
  return (
    <Section id="operational-transformation" sectionNumber="04" title="New Way of Working for AI-Native Operations" alt>
      <p>
        This infrastructure wouldn't just make existing work faster—it would fundamentally transform
        how product teams operate.
      </p>

      <div className={styles.roleEvolution}>
        <h3>Role Evolution Across Product Team</h3>

        <div className={styles.roleGrid}>
          <div className={styles.roleCard}>
            <h4>Product Managers</h4>
            <p>Strategic orchestration, PRD crafting, output evaluation, product direction</p>
          </div>

          <div className={styles.roleCard}>
            <h4>Design Leadership</h4>
            <p>Infrastructure architecture, agent orchestration, quality framework definition, system governance</p>
          </div>

          <div className={styles.roleCard}>
            <h4>Engineering</h4>
            <p>Accelerated delivery, reduced rework, strategic partnership with product</p>
          </div>
        </div>

        <p className={styles.roleConclusion}>
          Product becomes the innovation engine, not a service function responding to requests.
        </p>
      </div>
    </Section>
  );
}
