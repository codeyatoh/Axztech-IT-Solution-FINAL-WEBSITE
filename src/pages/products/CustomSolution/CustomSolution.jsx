import React from 'react';
import Button from '../../../common/button/button';
import styles from './CustomSolution.module.css';

const CustomSolution = () => (
  <section className={styles.sectionBg}>
    <h2 className={styles.headline}>Unlock Your Unique Solution</h2>
    <p className={styles.description}>
      Every business is different. Let us craft a custom strategy that fits your vision and goals. Reach out and discover what’s possible.
    </p>
    <Button primary>Get Your Custom Plan</Button>
  </section>
);

export default CustomSolution; 