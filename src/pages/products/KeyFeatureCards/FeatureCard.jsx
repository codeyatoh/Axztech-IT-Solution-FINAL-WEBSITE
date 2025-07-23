import React from 'react';
import styles from './FeatureCard.module.css';
const FeatureCard = ({ icon, title, description, isActive, onMouseEnter, onMouseLeave }) => {
  return (
    <div 
      className={`${styles.card} ${isActive ? styles.active : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.iconContainer}>
        {icon}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
export default FeatureCard; 