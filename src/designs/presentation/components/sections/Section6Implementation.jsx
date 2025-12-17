import Section from '../Section';
import { IconRocket, IconUsers, IconChart, IconClock, IconShield, IconCheck, IconTarget } from '../icons';
import styles from './Section6.module.css';

const phases = [
  {
    number: '01',
    title: 'Foundation & Proof of Concept',
    duration: 'Months 1-3',
    items: [
      'Product Studio core infrastructure build',
      'Claude Code agent stack with quality mechanisms',
      'Material Design system integration',
      'Pilot with two PMs on defined projects',
    ],
    metrics: 'Speed improvement, quality consistency, PM satisfaction',
    icon: IconRocket,
  },
  {
    number: '02',
    title: 'Expansion Across Product Team',
    duration: 'Months 4-6',
    items: [
      'Rollout to all five core PMs',
      'Product HQ+ Rovo integration',
      'PRD template standardization',
      'Learning loop infrastructure',
    ],
    metrics: 'Team adoption, velocity metrics, quality scores',
    icon: IconUsers,
  },
  {
    number: '03',
    title: 'Optimization & Scale',
    duration: 'Months 7-12',
    items: [
      'System refinement based on usage',
      'Advanced agent capabilities',
      'Documentation and knowledge capture',
      'Expansion to additional product areas',
    ],
    metrics: 'Consistent velocity, quality improvement, market differentiation',
    icon: IconChart,
  },
];

const successMetrics = [
  {
    icon: IconClock,
    title: 'Velocity',
    description: 'Time from PRD to staging',
    target: 'Hours vs. weeks',
  },
  {
    icon: IconShield,
    title: 'Quality',
    description: 'Audit scores, accessibility, consistency',
    target: null,
  },
  {
    icon: IconCheck,
    title: 'Adoption',
    description: 'PM satisfaction, usage patterns',
    target: null,
  },
  {
    icon: IconTarget,
    title: 'Business Impact',
    description: 'Release frequency, customer satisfaction',
    target: null,
  },
];

export default function Section6Implementation() {
  return (
    <Section id="implementation" sectionNumber="06" title="Proposed Rollout Strategy & Success Metrics" alt>
      <p className={styles.intro}>
        Implementation follows a phased approach—proving value quickly while building sustainable infrastructure.
      </p>

      {/* Timeline */}
      <div className={styles.timeline}>
        {phases.map((phase, index) => {
          const Icon = phase.icon;
          return (
            <div key={phase.number} className={styles.timelinePhase}>
              {/* Timeline connector */}
              {index < phases.length - 1 && <div className={styles.timelineConnector} />}

              <div className={styles.timelineHeader}>
                <div className={styles.phaseNumber}>{phase.number}</div>
                <div className={styles.phaseIcon}>
                  <Icon size={24} />
                </div>
              </div>

              <div className={styles.phaseContent}>
                <div className={styles.phaseDuration}>{phase.duration}</div>
                <h3 className={styles.phaseTitle}>{phase.title}</h3>

                <ul className={styles.phaseItems}>
                  {phase.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className={styles.phaseMetrics}>
                  <strong>Success:</strong> {phase.metrics}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Success Metrics Grid */}
      <div className={styles.metricsSection}>
        <h3 className={styles.metricsTitle}>Key Success Metrics</h3>

        <div className={styles.metricsGrid}>
          {successMetrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div key={metric.title} className={styles.metricCard}>
                <div className={styles.metricIcon}>
                  <Icon size={24} />
                </div>
                <h4>{metric.title}</h4>
                <p>{metric.description}</p>
                {metric.target && (
                  <span className={styles.metricTarget}>{metric.target}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Risk Mitigation */}
      <div className={styles.riskCard}>
        <div className={styles.riskIcon}>
          <IconShield size={28} />
        </div>
        <div>
          <h4>Risk Mitigation Built In</h4>
          <p>
            Human governance checkpoints ensure quality never drops below current standards.
            Gradual rollout allows course correction. Platform-agnostic design enables
            model upgrades as technology improves.
          </p>
        </div>
      </div>
    </Section>
  );
}
