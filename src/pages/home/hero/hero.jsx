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
                The AI note taker.<br />
                Without a bot.
              </h1>
              <div className={styles.heroTaglines}>
                <p>Every <span className={styles.highlight}>meeting</span>, captured.</p>
                <p>Every <span className={styles.highlight}>decision</span>, actionable.</p>
                <p>Everywhere, <span className={styles.highlight}>seamless</span>.</p>
              </div>
              <div className={styles.buttonGroup}>
                <Button primary>Explore our products</Button>
                <Button secondary>Contact us</Button>
              </div>
              <div className={styles.version}>
                v4.2.3 | macOS 13+ | Windows 10+
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;