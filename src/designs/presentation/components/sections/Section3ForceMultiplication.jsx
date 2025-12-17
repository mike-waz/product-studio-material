import Section from '../Section';
import { IconEye, IconAccessibility, IconPuzzle, IconMessage, IconStar, IconTrophy, IconTarget, IconUsers, IconClock } from '../icons';
import styles from './Section3.module.css';

const qualityAuditors = [
  {
    name: 'UX Quality',
    description: 'Interface patterns, interaction design, usability principles',
    icon: IconEye,
  },
  {
    name: 'Accessibility',
    description: 'WCAG compliance, screen reader compatibility, inclusive design',
    icon: IconAccessibility,
  },
  {
    name: 'Cross-Product Coherence',
    description: 'Consistency across the entire Lightspeed product suite',
    icon: IconPuzzle,
  },
  {
    name: 'Copy & Brand Voice',
    description: 'Messaging clarity, tone alignment, brand guidelines',
    icon: IconMessage,
  },
  {
    name: 'Customer Delight',
    description: 'Emotional resonance and experience quality',
    icon: IconStar,
  },
  {
    name: 'Market Differentiation',
    description: 'Competitive positioning, unique value expression',
    icon: IconTrophy,
  },
  {
    name: 'Solution Fit',
    description: 'PRD alignment and requirements satisfaction',
    icon: IconTarget,
  },
];

export default function Section3ForceMultiplication() {
  return (
    <Section id="force-multiplication" sectionNumber="03" title="Inside Product Studio: Quality Through Specialization">
      <p className={styles.intro}>
        Product Studio achieves consistent quality through specialized AI auditors. Each agent focuses
        on a specific dimension—working in parallel to ensure every output meets standards without
        bottlenecks or handoff delays.
      </p>

      {/* Quality Auditors Grid */}
      <div className={styles.auditorsSection}>
        <h3 className={styles.sectionLabel}>Quality Auditing Across 7+ Dimensions</h3>
        <p className={styles.sectionDesc}>Each design passes through automated evaluation:</p>

        <div className={styles.auditorsGrid}>
          {qualityAuditors.map((auditor) => {
            const Icon = auditor.icon;
            return (
              <div key={auditor.name} className={styles.auditorCard}>
                <div className={styles.auditorIcon}>
                  <Icon size={24} />
                </div>
                <h4>{auditor.name}</h4>
                <p>{auditor.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Benefits Row */}
      <div className={styles.benefitsRow}>
        <div className={styles.benefitCard}>
          <div className={styles.benefitIcon}>
            <IconUsers size={28} />
          </div>
          <div>
            <h4>Independent of Individual Skill</h4>
            <p>
              Quality doesn't depend on a PM's design intuition. The system applies sophisticated
              principles consistently—all PMs produce excellent results regardless of background.
            </p>
          </div>
        </div>

        <div className={styles.benefitCard}>
          <div className={styles.benefitIcon}>
            <IconClock size={28} />
          </div>
          <div>
            <h4>Always-On Capacity</h4>
            <p>
              Agent workers don't sleep, don't have off days, don't burn out. Consistent quality
              bars regardless of volume. Capacity scales with ambition, not headcount.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Callout */}
      <div className={styles.callout}>
        <h3>Force Multiplication Without Compromise</h3>
        <p>More coverage, higher quality, faster delivery—simultaneously.</p>
      </div>
    </Section>
  );
}
