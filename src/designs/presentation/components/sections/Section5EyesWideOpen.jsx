import Section from '../Section';
import styles from './Section5.module.css';

export default function Section5EyesWideOpen() {
  return (
    <Section
      id="eyes-wide-open"
      sectionNumber="05"
      title="Eyes Wide Open: What This Requires"
    >
      <div className={styles.bodyPoints}>
        <div className={styles.point}>
          <strong className={styles.pointLabel}>Talent investment</strong>
          <p className={styles.pointBody}>The people who can do this work are scarce and command premium compensation. Leading companies are already making this investment. We'll need to do the same.</p>
        </div>

        <div className={styles.point}>
          <strong className={styles.pointLabel}>Pioneer territory</strong>
          <p className={styles.pointBody}>This isn't widely adopted yet. We'll be on the leading edge—which means we'll make mistakes and learn as we go. Initial steps may feel uncomfortable. Not everyone will adapt.</p>
        </div>

        <div className={styles.point}>
          <strong className={styles.pointLabel}>Velocity initially outpaces quality</strong>
          <p className={styles.pointBody}>As of today, LLMs struggle to produce UI that fits within existing products—exactly what enterprise software requires. But the technology is improving rapidly—this gap will close soon. We should not delay. The price of a little quality debt buys us strategic advantage.</p>
        </div>

        <div className={styles.point}>
          <strong className={styles.pointLabel}>Organizational commitment</strong>
          <p className={styles.pointBody}>This is a 6-12 month transformation, not an overnight switch. It requires patience through the bumpy early phase.</p>
        </div>
      </div>

      <div className={styles.closingCallout}>
        <p className={styles.closingLead}>
          The risk of moving forward is real. But the cost of standing still is higher.
        </p>
        <p className={styles.closingBody}>
          Competitors who adopt this model will outpace those who don't. The market is already shifting—layoffs, restructuring, and the flattening of traditional roles signal this is happening now.
        </p>
        <p className={styles.closingFinal}>
          The question isn't whether to change. It's whether we lead or react.
        </p>
      </div>
    </Section>
  );
}
