import styles from './introduction.module.css';

export default function Introduction() {
  return (
    <div className={styles.introductionContainer}>
      <div className={styles.introTitle}>Contact Us</div>
      <div className={styles.introSubtitle}>
        Have questions or ready to get started? Reach out to our team and we'll be happy to help.
      </div>
    </div>
  );
}