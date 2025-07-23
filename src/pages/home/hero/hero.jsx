import React from 'react';
import styles from './Hero.module.css';
import Button from '../../../common/button/button';
const Hero = () => {
  return (
    <div className={styles.heroOuter}>
      <div className={styles.heroBg}>
    <div className={styles.heroContainer}>
          <div className={styles.heroContentBox}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
                Innovative IT<br />
                Solutions for Your<br />
                Business
        </h1>
        <div className={styles.heroTaglines}>
                <p>Empowering businesses with cutting-edge technology<br />and expert IT services.</p>
        </div>
        <div className={styles.buttonGroup}>
          <Button primary>Explore our products</Button>
          <Button secondary>Contact us</Button>
        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;