import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../../common/button/button';
import styles from './CustomSolution.module.css';

const CustomSolution = () => (
  <motion.section className={styles.sectionBg} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, type: 'tween' }}>
    <motion.h2 className={styles.headline} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, delay: 0.1, type: 'tween' }}>
      Unlock Your Unique Solution
    </motion.h2>
    <motion.p className={styles.description} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, delay: 0.2, type: 'tween' }}>
      Every business is different. Let us craft a custom strategy that fits your vision and goals. Reach out and discover what’s possible.
    </motion.p>
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, delay: 0.3, type: 'tween' }}>
      <Button primary>Get Your Custom Plan</Button>
    </motion.div>
  </motion.section>
);

export default CustomSolution; 