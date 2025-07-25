import React from 'react';
import styles from './ProductHero.module.css';

export const ProductHero = ({ title, subtitle, description }) => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>
        {title} <span className={styles.subtitle}>({subtitle})</span>
      </h1>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
