import React from 'react';
import styles from './PricingButton.module.css';
const PricingButton = ({ isPopular, color }) => {
  const buttonClass = `${styles.button} ${isPopular ? styles.popularButton : styles.standardButton} ${styles[color]}`;
  return (
    <button className={buttonClass}>
      Get Started
    </button>
  );
};
export default PricingButton;