import Section from '../Section';
import { IconLightning, IconShield, IconChart, IconBrain, IconTrophy, IconUsers } from '../icons';
import styles from './Section1.module.css';

export default function Section1StrategicContext() {
  return (
    <Section id="strategic-context" sectionNumber="01" title="Competitive Advantage Through Innovation Velocity">
      <p className={styles.intro}>
        The K-12 EdTech market is entering a new era where speed and innovation quality determine
        market leadership. Agentic Product Infrastructure addresses this directly.
      </p>

      {/* Primary Value Props - Big Visual Cards */}
      <div className={styles.valueProps}>
        <div className={styles.valueCard}>
          <div className={styles.valueIcon}>
            <IconLightning size={32} />
          </div>
          <div className={styles.valueMetric}>Hours</div>
          <div className={styles.valueLabel}>not weeks</div>
          <h3>Hypervelocity Development</h3>
          <p>
            From strategy to production in hours. This velocity compounds—more ideas tested,
            faster product-market fit, first-mover advantage on opportunities.
          </p>
        </div>

        <div className={styles.valueCard}>
          <div className={styles.valueIcon}>
            <IconShield size={32} />
          </div>
          <div className={styles.valueMetric}>7+</div>
          <div className={styles.valueLabel}>quality dimensions</div>
          <h3>Unparalleled Quality at Scale</h3>
          <p>
            Automated governance across UX, accessibility, coherence, brand voice,
            delight, differentiation, and solution fit. Impossible to achieve manually.
          </p>
        </div>

        <div className={styles.valueCard}>
          <div className={styles.valueIcon}>
            <IconChart size={32} />
          </div>
          <div className={styles.valueMetric}>∞</div>
          <div className={styles.valueLabel}>experiments possible</div>
          <h3>Innovation Through Iteration</h3>
          <p>
            Higher velocity enables more experimentation. More experiments yield better insights.
            Better insights drive market differentiation.
          </p>
        </div>
      </div>

      {/* Beyond Vibe Design - Highlight Block */}
      <div className={styles.beyondVibe}>
        <div className={styles.beyondVibeContent}>
          <div className={styles.beyondVibeIcon}>
            <IconBrain size={40} />
          </div>
          <div>
            <h3>Our Edge: Infrastructure Over Improvisation</h3>
            <p>
              Most product teams are stuck at surface-level AI adoption—substituting prompts for pixel pushing rather than building infrastructure that unlocks real capability. It feels productive but doesn't scale.
            </p>
            <p>
              <strong>Our approach:</strong> Build optimized infrastructure where AI has the correct inputs
              and structured workflows. Humans provide strategic direction and evaluate outputs—the
              machinery produces consistent excellence.
            </p>
          </div>
        </div>
      </div>

    </Section>
  );
}
