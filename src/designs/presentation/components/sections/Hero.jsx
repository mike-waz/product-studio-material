import { useEffect, useState } from 'react';
import { PMAgentTeamDiagram } from '../diagrams';
import styles from './Hero.module.css';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`${styles.hero} ${isVisible ? styles.visible : ''}`}>
      {/* Background gradient accent */}
      <div className={styles.backgroundGlow} />

      <div className={styles.container}>
        <div className={styles.badge}>Internal Proposal</div>

        <h1 className={styles.headline}>
          AI-first<br />
          <span className={styles.headlineAccent}>Product Operations</span>
        </h1>

        <p className={styles.subhead}>
          <strong>Everyone moves faster with AI. But who moves fast in a way that matters?</strong>
          <span className={styles.subheadLine2}>
            High Velocity AI Pipelines&nbsp; •&nbsp; Agentic Infrastructure&nbsp; •&nbsp; Force Multiplication
          </span>
        </p>

        <div className={styles.diagramWrapper}>
          <PMAgentTeamDiagram />
          <p className={styles.diagramCaption}>
            AI not just as a tool, but as a fundamental partner
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <span>Scroll to explore</span>
        <div className={styles.scrollArrow}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
