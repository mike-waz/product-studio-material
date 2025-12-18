import Section from '../Section';
import styles from './Section4.module.css';

export default function Section4OperationalTransformation() {
  return (
    <Section
      id="design-function"
      sectionNumber="04"
      title={<>The Future of the Design Function:<br />From Interface Design to Experience Architecture</>}
      alt
    >
      <p className={styles.subhead}>
        As software becomes fluid, design shapes the system—not the screens
      </p>

      {/* Solid to Liquid - Visual Metaphor Card */}
      <div className={styles.metaphorCard}>
        <div className={styles.metaphorVisual}>
          <div className={styles.solidShape}></div>
          <span className={styles.metaphorArrow}>→</span>
          <div className={styles.liquidShape}></div>
        </div>
        <div className={styles.metaphorContent}>
          <h3 className={styles.metaphorTitle}>Solid to Liquid</h3>
          <p>
            Product experiences are becoming fluid. Hyperpersonalization, conversational AI, generative UI, multi-modal and real-time data mean interfaces adapt to each user and context. This is happening now—like ice melting in our hands.
          </p>
          <p className={styles.metaphorEmphasis}>
            We'll use design to shape the composable system—the durable pieces, the framework, the rules
            for how components connect.
          </p>
        </div>
      </div>

      {/* Two Column Cards */}
      <div className={styles.twoColumnGrid}>
        {/* The Cross-Product Opportunity */}
        <div className={styles.contentCard}>
          <h3>The Cross-Product Opportunity</h3>
          <p>
            There's an increasing need to think beyond individual products. The real value emerges when
            products work seamlessly together—surfacing insights no single product can deliver.
          </p>
          <p className={styles.cardEmphasis}>
            This requires systems thinking. Envisioning what doesn't exist on any roadmap. Testing
            possibilities through "Lightspeed Labs."
          </p>
        </div>

        {/* What This Requires */}
        <div className={styles.contentCard}>
          <h3>What This Requires</h3>
          <p>
            AI-native thinking—people who see AI as design material, not just a tool. People who shape
            fluid experiences that are never the same twice.
          </p>
          <p className={styles.cardEmphasis}>
            This requires a different profile than traditional product design.
          </p>
        </div>
      </div>
    </Section>
  );
}
