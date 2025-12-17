import { useRef, useEffect, useState } from 'react';
import styles from './Section.module.css';

export default function Section({
  id,
  title,
  sectionNumber,
  children,
  className = '',
  variant = 'default', // 'default' | 'hero' | 'wide'
  alt = false // alternate background color
}) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`
        ${styles.section}
        ${styles[variant]}
        ${isVisible ? styles.visible : ''}
        ${className}
      `}
      style={alt ? { backgroundColor: '#282928' } : undefined}
    >
      <div className={styles.container}>
        {(sectionNumber || title) && (
          <div className={styles.header}>
            {sectionNumber && (
              <div className={styles.sectionNumber}>{sectionNumber}</div>
            )}
            {title && <h2 className={styles.title}>{title}</h2>}
          </div>
        )}
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </section>
  );
}
