import React, { useState } from 'react';
import styles from './Button.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const Button = ({ children, primary, secondary, cardPrimary, onClick }) => {
  const [hovered, setHovered] = useState(false);
  let buttonClass = styles.defaultButton;
  if (cardPrimary) {
    buttonClass = styles.cardPrimaryButton;
  } else if (primary) {
    buttonClass = styles.primaryButton;
  } else if (secondary) {
    buttonClass = styles.secondaryButton;
  }
  return (
    <button 
      className={buttonClass}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', height: '100%', width: '100%' }}>
        <AnimatePresence initial={false}>
          {!hovered && (
            <motion.span
              key="normal"
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0, transition: { duration: 0.28, ease: 'easeIn' } }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', textAlign: 'center' }}
            >
              {children}
            </motion.span>
          )}
          {hovered && (
            <motion.span
              key="hover"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0, y: 0, transition: { duration: 0 } }}
              transition={{ duration: 0.32, ease: 'easeOut' }}
              style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', textAlign: 'center' }}
            >
              {children}
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </button>
  );
};
export default Button;