import React from 'react';
import styles from './Button.module.css';
const Button = ({ children, primary, secondary, onClick }) => {
  const buttonClass = primary 
    ? styles.primaryButton 
    : secondary 
    ? styles.secondaryButton 
    : styles.defaultButton;
  return (
    <button 
      className={buttonClass}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;