import Section from '../Section';
import styles from './Section4.module.css';

export default function Section4OperationalTransformation() {
  return (
    <Section
      id="design-function"
      sectionNumber="The Future of the Design Function"
      title="From Interface Design to Experience Architecture"
      alt
    >
      <p className={styles.subhead}>
        As software becomes fluid, design shapes the system—not the screens
      </p>

      {/* Solid to Liquid */}
      <div className={styles.bodySection}>
        <h3>Solid to Liquid</h3>
        <p>
          Product experiences are becoming fluid. Hyperpersonalization, generative UI, and real-time
          data mean interfaces adapt to each user and context. This is happening now—like ice melting
          in our hands.
        </p>
        <p>
          We'll use design to shape the composable system—the durable pieces, the framework, the rules
          for how components connect.
        </p>
      </div>

      {/* Mid-section Callout */}
      <div className={styles.midCallout}>
        <p>If velocity is about output, design is about customer outcomes.</p>
      </div>

      {/* The Cross-Product Opportunity */}
      <div className={styles.bodySection}>
        <h3>The Cross-Product Opportunity</h3>
        <p>
          There's an increasing need to think beyond individual products. The real value emerges when
          products work seamlessly together—surfacing insights no single product can deliver.
        </p>
        <p>
          This requires systems thinking. Envisioning what doesn't exist on any roadmap. Testing
          possibilities through "Lightspeed Labs."
        </p>
      </div>

      {/* What This Requires */}
      <div className={styles.bodySection}>
        <h3>What This Requires</h3>
        <p>
          AI-native thinking—people who see AI as design material, not just a tool. People who shape
          fluid experiences that are never the same twice.
        </p>
        <p>This requires a different profile than traditional product design.</p>
      </div>

      {/* Closing Formula */}
      <div className={styles.closingFormula}>
        <p className={styles.formulaLead}>
          Everyone moves faster with AI. But who moves fast in a way that matters?
        </p>
        <p className={styles.formula}>
          <span>Velocity</span>
          <span className={styles.multiply}>×</span>
          <span>Quality</span>
          <span className={styles.multiply}>×</span>
          <span>Domain Mastery</span>
        </p>
      </div>
    </Section>
  );
}
