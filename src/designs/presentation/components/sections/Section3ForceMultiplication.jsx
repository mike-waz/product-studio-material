import Section from '../Section';
import styles from './Section3.module.css';

const transformations = [
  {
    header: 'From Pixels to Code',
    body: "Code becomes the common currency between product design and engineering. It's how AI thinks about products—the fundamental building blocks. Working in code means working with the actual material.",
  },
  {
    header: 'From Artifacts to Systems',
    body: 'Stop designing screens. Start designing the infrastructure that generates them. The value is in the system, not the artifact.',
  },
  {
    header: 'From Manual Iteration to Encoded Quality',
    body: 'Build judgment into systems rather than applying it manually to every output. Quality governance becomes automated and scalable.',
  },
];

export default function Section3ForceMultiplication() {
  return (
    <Section
      id="paradigm-shift"
      sectionNumber="The Paradigm Shift"
      title="From Craft Silo to Organizational Infrastructure"
    >
      <p className={styles.subhead}>
        Design shifts from a phase to a foundation layer underlying all product and engineering work
      </p>

      <p className={styles.bodyIntro}>
        For this infrastructure to deliver velocity and quality at scale, design must operate differently.
      </p>

      {/* Transformation Items */}
      <div className={styles.transformations}>
        {transformations.map((item) => (
          <div key={item.header} className={styles.transformationItem}>
            <h3>{item.header}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>

      {/* Primary Callout */}
      <div className={styles.primaryCallout}>
        <p className={styles.calloutEmphasis}>Product design is not pretty UI.</p>
        <p className={styles.calloutBody}>
          Design is the encoding of judgment, context, and domain intuition into our products.
        </p>
      </div>

      {/* Closing Statement */}
      <div className={styles.closingStatement}>
        <p>Force multiplication without compromise.</p>
      </div>
    </Section>
  );
}
