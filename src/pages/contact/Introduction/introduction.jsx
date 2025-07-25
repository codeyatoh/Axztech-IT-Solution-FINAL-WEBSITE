import styles from './introduction.module.css';
import { motion } from 'framer-motion';

export default function Introduction() {
  return (
    <motion.div
      className={styles.introductionContainer}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: 'tween' }}
    >
      <div className={styles.introTitle}>Contact Us</div>
      <div className={styles.introSubtitle}>
        Have questions or ready to get started? Reach out to our team and we'll be happy to help.
      </div>
    </motion.div>
  );
}