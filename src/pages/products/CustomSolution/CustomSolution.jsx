import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../../common/button/button';
import styles from './CustomSolution.module.css';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 1, type: 'tween' }
};

const CustomSolution = () => (
  <motion.section className={styles.sectionBg} {...fadeInUp}>
    <motion.h2 className={styles.headline} {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.1 }}>
      Unlock Your Unique Solution
    </motion.h2>
    <motion.p className={styles.description} {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }}>
      Every business is different. Let us craft a custom strategy that fits your vision and goals. Reach out and discover what’s possible.
    </motion.p>
    <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.3 }}>
      <Button primary>Get Your Custom Plan</Button>
    </motion.div>
  </motion.section>
);

export default CustomSolution; 