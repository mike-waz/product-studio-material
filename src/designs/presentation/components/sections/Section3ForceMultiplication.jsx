import Section from '../Section';
import styles from './Section3.module.css';

const transformations = [
  {
    from: 'Pixels',
    to: 'Code',
    body: "Code becomes the common currency between product design and engineering. It's how AI thinks about products—the fundamental building blocks. Working in code means working with the actual material.",
  },
  {
    from: 'Artifacts',
    to: 'Systems',
    body: 'Stop designing screens. Start designing the infrastructure that generates them. The value is in the system, not the artifact.',
  },
  {
    from: 'Manual Iteration',
    to: 'Encoded Quality',
    body: 'Build judgment into systems rather than applying it manually to every output. Quality governance becomes automated and scalable.',
  },
];

export default function Section3ForceMultiplication() {
  return (
    <Section
      id="paradigm-shift"
      sectionNumber="03"
      title="Product Studio: From Craft Silo to Organizational Infrastructure"
    >
      <p className={styles.subhead}>
        Design shifts from a phase to a foundation layer underlying all product and engineering work
      </p>

      <p className={styles.bodyIntro}>
        For this infrastructure to deliver velocity and quality at scale, design must operate differently. Force multiplication without compromise.
      </p>

      {/* Transformation Cards - 3 column grid */}
      <div className={styles.transformationGrid}>
        {transformations.map((item) => (
          <div key={item.from} className={styles.transformationCard}>
            <div className={styles.transformationHeader}>
              <span className={styles.fromLabel}>{item.from}</span>
              <span className={styles.arrow}>→</span>
              <span className={styles.toLabel}>{item.to}</span>
            </div>
            <p className={styles.transformationBody}>{item.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
