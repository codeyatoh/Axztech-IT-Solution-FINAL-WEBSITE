import React from 'react';
import styles from './FeatureCard.module.css';

export const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>{icon}</div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};