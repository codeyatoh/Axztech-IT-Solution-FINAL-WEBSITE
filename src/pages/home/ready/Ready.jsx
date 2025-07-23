import React from 'react';
import styles from './Ready.module.css';
import Button from '../../../common/button/button';

function Ready() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Ready to Get Started?</h2>
      <p className={styles.subtitle}>Contact us today and let’s build your IT solution together!</p>
      <Button primary>Get in Touch</Button>
    </section>
  );
}

export default Ready;