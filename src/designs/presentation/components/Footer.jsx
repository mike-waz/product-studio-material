import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.meta}>
          This site was built using the proposed Product Studio infrastructure—demonstrating the workflow outlined above. From PRD to production in days, not weeks.
        </p>
      </div>
    </footer>
  );
}
