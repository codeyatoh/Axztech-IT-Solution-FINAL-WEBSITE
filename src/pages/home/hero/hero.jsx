import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import Button from '../../../common/button/button';
const taglines = [
  [
    'Empowering businesses with cutting-edge technology',
    'and expert IT services.'
  ],
  [
    'Transform your workflow with innovative digital solutions.',
    'Experience seamless integration and growth.'
  ],
  [
    'Your trusted partner for IT excellence and growth.',
    'Delivering results that matter.'
  ]
];

const TYPING_SPEED = 60; // ms per character
const PAUSE_DURATION = 1200; // ms to pause at end of each tagline

const Hero = () => {
  const [displayed, setDisplayed] = useState(['', '']);
  const [taglineIdx, setTaglineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState([0, 0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [line, setLine] = useState(0);

  useEffect(() => {
    let timeout;
    const current = taglines[taglineIdx];
    if (!isDeleting && charIdx[line] < current[line].length) {
      const newCharIdx = [...charIdx];
      newCharIdx[line]++;
      timeout = setTimeout(() => setCharIdx(newCharIdx), TYPING_SPEED);
      const newDisplayed = [...displayed];
      newDisplayed[line] = current[line].slice(0, newCharIdx[line]);
      setDisplayed(newDisplayed);
    } else if (!isDeleting && charIdx[line] === current[line].length) {
      if (line === 0) {
        timeout = setTimeout(() => setLine(1), 400);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
      }
    } else if (isDeleting && charIdx[line] > 0) {
      const newCharIdx = [...charIdx];
      newCharIdx[line]--;
      timeout = setTimeout(() => setCharIdx(newCharIdx), TYPING_SPEED / 2);
      const newDisplayed = [...displayed];
      newDisplayed[line] = current[line].slice(0, newCharIdx[line]);
      setDisplayed(newDisplayed);
    } else if (isDeleting && charIdx[line] === 0) {
      if (line === 1) {
        timeout = setTimeout(() => setLine(0), 200);
      } else {
        setIsDeleting(false);
        setTaglineIdx((taglineIdx + 1) % taglines.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, taglineIdx, line]);

  useEffect(() => {
    setDisplayed(['', '']);
    setCharIdx([0, 0]);
    setLine(0);
  }, [taglineIdx]);

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
      <p>{displayed[0]}<span className={`${styles.cursor} ${line === 0 ? styles.blink : ''}`}>{line === 0 ? '|' : ''}</span></p>
      <p>{displayed[1]}<span className={`${styles.cursor} ${line === 1 ? styles.blink : ''}`}>{line === 1 ? '|' : ''}</span></p>
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