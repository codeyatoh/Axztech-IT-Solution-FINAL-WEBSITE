import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProductHero.module.css';

export const ProductHero = ({ title, subtitle, description }) => {
  return (
    <motion.div className={styles.hero} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, type: 'tween' }}>
      <motion.h1 className={styles.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, delay: 0.1, type: 'tween' }}>
        {title} <span className={styles.subtitle}>({subtitle})</span>
      </motion.h1>
      <motion.p className={styles.description} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, delay: 0.2, type: 'tween' }}>{description}</motion.p>
    </motion.div>
  );
};
